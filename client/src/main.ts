function setUp() {
  // ID省略関数
  function $(id: string) {
    const id1 = document.getElementById(id);
    return id1;
  }

  //マネージドクラス
  class manageTime {
    constructor() {
      this.time = 0;
    }
    private time: number;

    setTime() {
      updateClock();
      this.time = setInterval(updateClock, 1000);
    }

    clearTime() {
      clearInterval(this.time);
    }
  }

  //アップデート関数
  function updateClock() {
    if (hour && min && second) {
      const date = new Date();
      hour.textContent = String(date.getHours());
      min.textContent = String(date.getMinutes());
      second.textContent = String(date.getSeconds());
    }
  }

  const time = new manageTime();

  const min = $("min");
  const hour = $("hour");
  const second = $("second");
  const btn = $("btn");

  //ボタンクリック関数
  btn?.addEventListener("click", () => {
    if (min && hour && second) {
      min.textContent = "";
      hour.textContent = "";
      second.textContent = "";
      time.clearTime();
    }
  });
  time.setTime();
}

function main() {
  setUp();
}

// メインクラス
main();

function main() {
  setUp();
}

// ID省略関数
function $(id: string): HTMLElement | null {
  const id1 = document.getElementById(id);
  return id1;
}

function setUp() {
  const min = $("min");
  const hour = $("hour");
  const second = $("second");
  const btn = $("btn");

  //アップデート関数
  function updateClock() {
    if (hour && min && second) {
      const date = new Date();
      hour.textContent = String(date.getHours());
      min.textContent = String(date.getMinutes());
      second.textContent = String(date.getSeconds());
    }
  }
  //マネージドクラス
  class ManageTime {
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

  const time = new ManageTime();

  //ボタンクリック関数
  btn?.addEventListener("click", () => {
    if (min && hour && second) {
      const isVisible = btn.textContent === "隠す";
      if (isVisible) {
        min.textContent = "";
        hour.textContent = "";
        second.textContent = "";
        time.clearTime();
        btn.textContent = "表示";
      } else {
        time.setTime();
        btn.textContent = "隠す";
      }
    }
  });
  if (btn) {
    btn.textContent = "隠す";
  }

  time.setTime();
}

// メインクラス
main();

const hour = document.getElementById("hour") as HTMLSpanElement;
const min = document.getElementById("min") as HTMLSpanElement;
const second = document.getElementById("second") as HTMLSpanElement;
const btn = document.getElementById("btn") as HTMLButtonElement;

btn.addEventListener("click", () => {
  hourInteraval();
  minInteraval();
  secInteraval();
});

async function hourInteraval() {
  await new Promise<void>((resolved) => {
    setInterval(() => {
      const hoge = new Date();
      hour.textContent = String(hoge.getHours());
      resolved();
    }, 1000);
  });
}

async function minInteraval() {
  await new Promise<void>((resolved) => {
    setInterval(() => {
      const hoge = new Date();
      min.textContent = String(hoge.getMinutes());
      resolved();
    }, 1000);
  });
}

async function secInteraval() {
  await new Promise<void>((resolved) => {
    setInterval(() => {
      const hoge = new Date();
      second.textContent = String(hoge.getSeconds());
      resolved();
    }, 1000);
  });
}

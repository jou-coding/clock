const hour = document.getElementById("hour") as HTMLSpanElement;
const min = document.getElementById("min") as HTMLSpanElement;
const second = document.getElementById("second") as HTMLSpanElement;
const btn = document.getElementById("btn") as HTMLButtonElement;

btn.addEventListener("click", () => {
  const delay = 1000 - (Date.now() % 1000);
  setTimeout(() => {
    updateClock();
    setInterval(updateClock, 1000);
  }, delay);
});

function updateClock() {
  const date = new Date();
  hour.textContent = String(date.getHours());
  min.textContent = String(date.getMinutes());
  second.textContent = String(date.getSeconds());
}

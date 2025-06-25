import { $ } from "../lib/operationDom";
const btn = $("btn");
const modalOverlay = $("modalOverlay");
const stop = $("stop");

export function modal(): void {
  btn?.addEventListener("click", () => {
    if (modalOverlay) {
      modalOverlay.style.display = "block";
    }
  });
}

export function stopButton(): void {
  stop?.addEventListener("click", () => {
    if (modalOverlay) {
      modalOverlay.style.display = "none";
    }
  });
}

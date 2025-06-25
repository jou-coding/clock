import { $ } from "../lib/operationDom";
const btn = $("btn");
const modalOverlay = $("modalOverlay");

export function modal(): void {
  btn?.addEventListener("click", () => {
    if (modalOverlay) {
      modalOverlay.style.display = "block";
    }
  });
}

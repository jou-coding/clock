import { $ } from "../lib/operationDom";
import type { TimeType } from "../types/time";
const btn = $("btn");
const modalOverlay = $("modalOverlay");
const stop = $("stop");
const submit = $("submit");

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

export function submitButton(onSubmit: (time: TimeType) => void): void {
  submit?.addEventListener("click", () => {
    const hour = $("getHour");
    const min = $("getMin");
    //例としてtimeオブジェクト作成
    if (hour && min) {
      const time = {
        hour: Number(hour.value),
        min: Number(min.value),
      };

      onSubmit(time);
    }
  });
}

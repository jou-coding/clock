import { $ } from "../lib/operationDom";
import type { TimeType } from "../types/time";
const btn = $("btn");
const modalOverlay = $("modalOverlay");
const stop = $("stop");
const submit = $("submit");
const alarmlist = $("alarmlist");

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

//　例えば、alarmListにイベント登録
export function deleteButton(): void {
  alarmlist?.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;

    if (target?.classList.contains("delete-button")) {
      const card = target.parentElement?.parentElement;
      card?.remove();
    }
  });
}

import { AlarmManager } from "../app/AlarmManager";
import { $ } from "../lib/operationDom";
import type { TimeType } from "../types/time";
const btn = $("btn");
const modalOverlay = $("modalOverlay");
const stop = $("stop");
const submit = $("submit");
const alarmlist = $("alarmlist");

export function modal(): void {
  if (!btn) return;
  btn.addEventListener("click", () => {
    if (modalOverlay !== null) {
      modalOverlay.classList.add("active"); // 表示
    }
  });
}

export function stopButton(): void {
  if (!stop) return;
  stop.addEventListener("click", () => {
    if (modalOverlay !== null) {
      modalOverlay.classList.remove("active"); // 非表示
    }
  });
}

export function submitButton(onSubmit: (time: TimeType) => void): void {
  if (!submit) return;
  submit.addEventListener("click", () => {
    const hour = $("getHour");
    const min = $("getMin");
    //例としてtimeオブジェクト作成
    if (hour instanceof HTMLInputElement && min instanceof HTMLInputElement) {
      const hourValue = hour.value;
      const minValue = min.value;

      const hourValueCheck = /^([0-9]|1[0-9]|2[0-4])$/;
      const minValueCheck = /^([0-9]|[1-5][0-9]|60)$/;

      if (
        hourValueCheck.test(hourValue) === true &&
        minValueCheck.test(minValue) === true
      ) {
        const time = {
          hour: Number(hourValue),
          min: Number(minValue),
        };
        onSubmit(time);
        if (modalOverlay !== null) {
          modalOverlay.classList.remove("active"); // 非表示
        }
      } else {
        const index = 5;
        const parentList = document.getElementsByClassName("modal");
        const parent = parentList[0];
        const newElement = document.createElement("div");
        newElement.textContent =
          "0～24時間、0から60分以外の数字が入力されている。";
        newElement.classList.add("error-message");
        if (!parent) return;
        const reference = parent?.children[index];
        parent.insertBefore(newElement, reference ?? null);
      }
    }
  });
}

//　例えば、alarmListにイベント登録
export function deleteButton(alarmManager: AlarmManager): void {
  if (alarmlist !== null) {
    alarmlist.addEventListener("click", (e) => {
      if (!(e.target instanceof HTMLElement)) return;
      const target = e.target;

      if (target.classList.contains("delete-button")) {
        const card = target.parentElement?.parentElement;
        if (card != null) {
          const id = target.parentElement?.parentElement?.classList[1];
          card.remove();
          localStorage.removeItem(String(id));
          alarmManager.deleteAlarm(String(id));
        }
      }
    });
  }
}

//　アラームインスタンスを復元するための型
type alarmdemo = {
  id: string;
  time: TimeType;
  isActive: boolean;
};

export function checkedBox(alarmManager: AlarmManager): void {
  if (alarmlist != null) {
    alarmlist.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      const className = target.parentElement?.parentElement;

      //!=nullとundefindを除外する方法
      if (className != null) {
        const id = className.classList[1];
        const alarm = alarmManager.getAlarm(id);
        if (alarm !== undefined) {
          alarm.toggleActive();
        }

        const data = localStorage.getItem(id);
        if (typeof data === "string") {
          const parsedData: alarmdemo = JSON.parse(data);
          parsedData.isActive = !parsedData.isActive;
          const sendData = JSON.stringify(parsedData);
          localStorage.setItem(id, sendData);
        }
      }
    });
  }
}

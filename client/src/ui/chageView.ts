import { $ } from "../lib/operationDom";

export function changeView() {
  //　サイドバーのボタンを選択
  const clockBtn = $("clock-btn");
  const alarmBtn = $("alarm-btn");
  const clockView = $("clock-view");
  const alarmView = $("alarm-view");

  // サイドバーのボタン選択の処理
  clockBtn?.addEventListener("click", () => {
    if (clockView instanceof HTMLElement && alarmView instanceof HTMLElement) {
      clockView.style.display = "block";
      alarmView.style.display = "none";
    }
  });

  alarmBtn?.addEventListener("click", () => {
    if (clockView instanceof HTMLElement && alarmView instanceof HTMLElement) {
      clockView.style.display = "none";
      alarmView.style.display = "block";
    }
  });
}

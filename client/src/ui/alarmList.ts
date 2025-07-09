import { $ } from "../lib/operationDom";
import type { TimeType } from "../types/time";

const alarm = $("alarmlist");

//アラームを管理するカードづくり
export function AlarmList(id: string, time: TimeType) {
  const card = document.createElement("div");
  card?.classList.add("alarm-card", `${id}`);
  const clock = document.createElement("div");
  clock.classList.add("alarm-time");
  clock.textContent = `${time.hour}:${time.min}`;
  const actions = document.createElement("div");
  actions.classList.add("alarm-actions");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = true;
  const btn = document.createElement("button");
  btn?.classList.add("delete-button");
  btn.type = "button";
  btn.textContent = "削除";
  alarm?.append(card);
  card?.append(clock);
  card.append(actions);
  actions.append(input);
  actions.append(btn);
}

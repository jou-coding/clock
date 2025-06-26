import { $ } from "../lib/operationDom";
import type { TimeType } from "../types/time";

const alarm = $("alarmlist");

export function AlarmList(time: TimeType) {
  console.log(`引数:${JSON.stringify(time)}`);
  const li = document.createElement("li");
  li.textContent = `日:${time.day},時間:${time.hour},分:${time.min}`;
  alarm?.append(li);
}

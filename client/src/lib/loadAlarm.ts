import { AlarmList } from "../ui/alarmList";
import { AlarmManager } from "../app/AlarmManager";
import { Alarm } from "../app/Alarm";

export function loadAlarm(alarmManager: AlarmManager) {
  if (localStorage.length >= 0) {
    let key: string | null = "";
    for (let i = 0; i < localStorage.length; i++) {
      key = localStorage.key(i);

      if (typeof key === "string") {
        const data = localStorage.getItem(key);
        if (typeof data === "string") {
          const alarmData = JSON.parse(data);

          const alarm = new Alarm(
            alarmData.id,
            alarmData.time,
            alarmData.isActive
          );
          AlarmList(alarm.getId(), alarm.get());
          alarm.equal(alarm.get(), alarm.getId(), alarmManager);
          alarmManager.add(alarm);
        }
      }
    }
  }
}

import { Alarm } from "./app/Alarm";
import { AlarmManager } from "./app/AlarmManager";
import { Clock } from "./app/Clock";
import { ManageTime } from "./app/ManageTime";
import { AlarmList } from "./ui/alarmList";
import {
  modal,
  submitButton,
  stopButton,
  deleteButton,
  checkedBox,
} from "./ui/button";
import { renderClock } from "./ui/renderClock";
function main() {
  setUp();
}

function setUp() {
  const time = new Clock();
  const alarmManager = new AlarmManager();

  renderClock(time.getTime());
  const manage = new ManageTime();
  manage.setTime(() => renderClock(time.getTime()));
  if (modal) {
    modal();
  }
  if (stopButton) {
    stopButton();
  }

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

  submitButton((time) => {
    const num = Math.ceil(Math.random() * 1000);
    const alarm = new Alarm(String(num), time);

    AlarmList(alarm.getId(), alarm.get());
    alarm.equal(alarm.get(), alarm.getId(), alarmManager);
    alarmManager.add(alarm);
    localStorage.setItem(String(num), JSON.stringify(alarm));
  });

  deleteButton(alarmManager);
  checkedBox(alarmManager);
}

// メインクラス
main();

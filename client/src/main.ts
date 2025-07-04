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

  submitButton((time) => {
    const num = Math.ceil(Math.random() * 1000);
    const alarm = new Alarm(String(num), time);

    console.log(`${JSON.stringify(alarm.get())}`);
    AlarmList(alarm.getId(), alarm.get());
    alarm.equal(alarm.get(), alarm.getId(), alarmManager);
    alarmManager.add(alarm);
  });

  deleteButton();
  checkedBox(alarmManager);
}

// メインクラス
main();

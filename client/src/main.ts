import { Alarm } from "./app/Alarm";
import { Clock } from "./app/Clock";
import { ManageTime } from "./app/ManageTime";
import { AlarmList } from "./ui/alarmList";
import { modal, submitButton, stopButton, deleteButton } from "./ui/button";
import { renderClock } from "./ui/renderClock";
function main() {
  setUp();
}

function setUp() {
  const time = new Clock();
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
    const alarm = new Alarm(time);
    console.log(`${JSON.stringify(alarm.get())}`);
    AlarmList(alarm.get());
    alarm.equal(alarm.get());
  });

  deleteButton();
}

// メインクラス
main();

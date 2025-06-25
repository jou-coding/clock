import { Alarm } from "./app/Alarm";
import { Clock } from "./app/Clock";
import { ManageTime } from "./app/ManageTime";
import { modal, submitButton, stopButton } from "./ui/button";

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
  if (submitButton) {
    const time = submitButton((time) => {
      console.log(`${JSON.stringify(time)}`);
      const alarm = new Alarm(time);
      console.log(`${JSON.stringify(alarm.get())}`);
    });
  }
}

// メインクラス
main();

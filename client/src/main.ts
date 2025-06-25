import { Clock } from "./app/Clock";
import { ManageTime } from "./app/ManageTime";
import { modal } from "./ui/button";
import { stopButton } from "./ui/button";
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
}

// メインクラス
main();

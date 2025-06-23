import { Clock } from "./app/clock";
import { ManageTime } from "./app/manageTime";
import { renderClock } from "./ui/renderClock";
function main() {
  setUp();
}

function setUp() {
  const time = new Clock();
  renderClock(time.getTime());
  const manage = new ManageTime();
  manage.setTime(() => renderClock(time.getTime()));
}

// メインクラス
main();

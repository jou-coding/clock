import { Alarm } from "../app/Alarm";
import { AlarmManager } from "../app/AlarmManager";
import { Clock } from "../app/Clock";
import { ManageTime } from "../app/ManageTime";
import { AlarmList } from "../ui/alarmList";
import {
  stopButton,
  deleteButton,
  submitButton,
  checkedBox,
  modal,
} from "../ui/button";
import { renderClock } from "../ui/renderClock";
import { changeView } from "../ui/chageView";

export function setUpUi(time: Clock, alarmManager: AlarmManager) {
  const manage = new ManageTime();
  manage.setTime(() => renderClock(time.getTime()));
  if (modal) {
    modal();
  }
  if (stopButton) {
    stopButton();
  }

  changeView();

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

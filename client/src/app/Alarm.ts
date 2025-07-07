import type { TimeType } from "../types/time";
import type { AlarmManager } from "./AlarmManager";
export class Alarm {
  private id;
  private time;
  private isActive;

  constructor(id: string, time: TimeType, isActive?: boolean) {
    this.id = id;
    this.time = time;
    this.isActive = isActive ?? true;
  }

  getId() {
    return this.id;
  }
  get() {
    return { hour: this.time.hour, min: this.time.min };
  }

  getIsActive() {
    return this.isActive;
  }
  toggleActive() {
    this.isActive = !this.isActive;
  }

  equal(time: TimeType, id: string, alarmManager: AlarmManager) {
    const settingTime = new Date();
    const alarm = new Date(
      settingTime.getFullYear(),
      settingTime.getMonth(),
      settingTime.getDate(),
      time.hour,
      time.min
    );
    const interavalId = setInterval(() => {
      const now = new Date();
      console.log("まだ実行中");
      const alarm01 = alarmManager.getAlarm(id);

      if (now.getTime() >= alarm.getTime()) {
        clearInterval(interavalId);
        console.log("インターバルを停止しました。");
        console.log("プログラムを終了します。");
        if (alarm01?.getIsActive() === true) {
          const audio = new Audio("alarm.mp3");
          audio.play();
          //5秒後停止
          setTimeout(() => {
            audio.pause();
            audio.currentTime = 0; //再生位置を先頭にするから
          }, 100000);
        }
      }
    }, 1000);
  }
}

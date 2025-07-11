import type { TimeType } from "../types/time";
import type { AlarmManager } from "./AlarmManager";
export class Alarm {
  private id;
  private time;
  private isActive;
  private audio;

  constructor(id: string, time: TimeType, isActive?: boolean) {
    this.id = id;
    this.time = time;
    this.isActive = isActive ?? true;
    this.audio = new Audio("alarm.mp3");
  }

  getId() {
    return this.id;
  }
  get() {
    return { hour: this.time.hour, min: this.time.min };
  }

  ringAudio() {
    this.audio.play();
  }

  stopAudio() {
    this.audio.pause();
    this.audio.currentTime = 0; //再生位置を先頭にするから
  }

  getIsActive() {
    return this.isActive;
  }
  toggleActive() {
    this.isActive = !this.isActive;
  }

  equal(time: TimeType, id: string, alarmManager: AlarmManager, theDay?: Date) {
    const settingTime = new Date();
    const alarm = theDay
      ? new Date(theDay)
      : new Date(
          settingTime.getFullYear(),
          settingTime.getMonth(),
          settingTime.getDate(),
          time.hour,
          time.min
        );

    if (alarm.getTime() < new Date().getTime()) {
      console.log("過去のアラームなので、スキップof明日に再設定");
    } else if (alarm.getTime() > new Date().getTime()) {
      const interavalId = setInterval(() => {
        const now = new Date();
        console.log("まだ実行中");
        const alarm01 = alarmManager.getAlarm(id);

        if (now.getTime() >= alarm.getTime()) {
          clearInterval(interavalId);
          console.log("インターバルを停止しました。");
          console.log("プログラムを終了します。");
          if (alarm01 !== undefined && alarm01.getIsActive() === true) {
            this.ringAudio();
            //5秒後停止
            setTimeout(() => {
              this.stopAudio();

              //次の日の登録
              const tomorrow = new Date(alarm);
              tomorrow.setDate(tomorrow.getDate() + 1);

              this.equal(
                { hour: tomorrow.getHours(), min: tomorrow.getMinutes() },
                id,
                alarmManager,
                tomorrow
              );
            }, 10000);
          }
        }
      }, 1000);
    }
  }
}

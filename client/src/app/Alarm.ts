import type { TimeType } from "../types/time";
export class Alarm {
  private time;

  constructor(time: TimeType) {
    this.time = time;
  }

  get() {
    return { day: this.time.day, hour: this.time.hour, min: this.time.min };
  }

  equal(time: TimeType) {
    const alarm = new Date(2025, 6, time.day, time.hour, time.min);
    const interavalId = setInterval(() => {
      const now = new Date();
      console.log("まだ実行中");

      if (now.getTime() >= alarm.getTime()) {
        clearInterval(interavalId);
        console.log("インターバルを停止しました。");
        console.log("プログラムを終了します。");
        const audio = new Audio("alarm.mp3");
        audio.play();
      }
    }, 1000);
  }
}

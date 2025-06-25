import type { TimeType } from "../types/time";
export class Alarm {
  private time;

  constructor(time: TimeType) {
    this.time = time;
  }

  get() {
    return { day: this.time.day, hour: this.time.hour, min: this.time.min };
  }
}

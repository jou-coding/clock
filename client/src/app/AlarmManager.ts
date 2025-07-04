import { Alarm } from "./Alarm";
// AlarmManagerクラス
export class AlarmManager {
  private alarms: Map<string, Alarm>;

  constructor() {
    this.alarms = new Map();
  }

  add(alarm: Alarm) {
    this.alarms.set(alarm.getId(), alarm);
  }

  getMap() {
    return this.alarms;
  }

  getAlarm(id: string): Alarm | undefined {
    if (this.alarms.has(id)) {
      return this.alarms.get(id);
    } else {
      console.error("戻り値がundefind:", this.alarms.get(id));
    }
  }
}

import { Clock } from "./app/Clock";
import { AlarmManager } from "./app/AlarmManager";
import { renderClock } from "./ui/renderClock";
import { loadAlarm } from "./lib/loadAlarm";
import { setUpUi } from "./init/setUpUi";

function main() {
  //　時計インスタンスの作成
  const time = new Clock();
  // アラームの管理インスタンスを作成
  const alarmManager = new AlarmManager();
  // 現在の時刻表示のUIを描画
  renderClock(time.getTime());
  //　ローカルストレージから保存されている情報を取得する
  loadAlarm(alarmManager);
  // 動的なUIのイベント処理を記述している
  setUpUi(time, alarmManager);
}

// メインクラス
main();

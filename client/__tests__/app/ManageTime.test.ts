import { describe, it, expect, vi } from "vitest";
import { ManageTime } from "../../src/app/ManageTime";

describe("ManageTimeのテスト", () => {
  it("setTime関数", () => {
    // タイマーを仮想化
    vi.useFakeTimers();
    // モック関数を作成
    const fn = vi.fn();
    // インスタンス作成
    const timer = new ManageTime();

    timer.setTime(fn);
    // 時間を5秒進める
    vi.advanceTimersByTime(5000);
    // 5回呼ばれてることを確認
    expect(fn).toHaveBeenCalledTimes(5);
    // 忘れず戻す
    vi.useRealTimers();
  });

  it("clearTime関数がclearIntervalを呼び出す", () => {
    // clearIntervalをスパイする
    const spy = vi.spyOn(globalThis, "clearInterval");

    const timer = new ManageTime();
    // 適当な関数でスタート
    timer.setTime(() => {});
    // 停止処理
    timer.clearTime();
    // clearIntervalが呼ばれたかを確認
    expect(spy).toHaveBeenCalled();
    // 他のテストに影響を与えないように戻す
    spy.mockRestore();
  });
});

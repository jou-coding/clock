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
});

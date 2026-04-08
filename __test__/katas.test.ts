import sumDigits from "../Katas/sumDigits";
import { describe, test, expect } from "@jest/globals";

describe("sumDigits", () => {
  test("should sum both arguements together", () => {
    expect(sumDigits(2, 3)).toBe(5);
  });
  test("should work with negative integers", () => {
    expect(sumDigits(-5, 2)).toBe(-3);
  });
});

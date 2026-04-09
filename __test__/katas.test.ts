import sumDigits from "../Katas/sumDigits";
import { describe, test, expect } from "@jest/globals";
import countVeg from "../Katas/katas";

describe("sumDigits", () => {
  test("should sum both arguements together", () => {
    expect(sumDigits(2, 3)).toBe(5);
  });
  test("should work with negative integers", () => {
    expect(sumDigits(-5, 2)).toBe(-3);
  });
});

describe("countVeg", () => {
  test("should return total quantity of selected vegetable type", () => {
    const vegetables = [
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Runner beans", type: "legume", quantity: 8 },
    ];
    expect(countVeg(vegetables, "root")).toBe(9);
  });
  test("should return 0 if type does not exist'", () => {
    const vegetables = [{ name: "Parsnip", type: "root", quantity: 4 }];
    expect(countVeg(vegetables, "brassica")).toBe(0);
  });
});

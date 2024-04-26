import { expect, test } from "vitest";
import { isPriceInRange } from "../src/Exercice 3/range";

test("fonction Range", () => {
    expect(isPriceInRange(0, 5, 10)).toBeFalsy();
    expect(isPriceInRange(0, 0, 10)).toBeTruthy();
    expect(isPriceInRange(0, 10, 10)).toBeFalsy();
    expect(isPriceInRange(0, 10, 15)).toBeFalsy();
    expect(isPriceInRange(0, 0.5, 5)).toBeFalsy();
});
import { expect, test } from "vitest";
import { sort } from "../src/Exercice 2/tableau";

test("fonction Sort", () => {
    expect(sort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(sort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(sort([1, 3, 2, 5, 4])).toEqual([1, 2, 3, 4, 5]);
    expect(sort([1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1]);
    expect(sort([])).toEqual([]);
    expect(["a", "b", "c", "d", "e"].sort()).toEqual(["a", "b", "c", "d", "e"]);
});
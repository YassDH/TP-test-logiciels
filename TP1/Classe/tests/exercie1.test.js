import { expect, test } from "vitest";
import { toUpperCase } from "../src/Exercice 1/chaines";

test("fonction UpperCase", () => {
    expect(toUpperCase("hello")).toBe("HELLO");
    expect(toUpperCase("hello world")).toBe("HELLO WORLD");
    expect(toUpperCase("")).toBe("");
    expect(toUpperCase("123")).toBe("123");
    expect(toUpperCase("test7$*)a")).toBe("TEST7$*)A");
});
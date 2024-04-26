import { expect, test } from "vitest";
import { fetchRandomUser } from "../src/Activite 1/asyncFunction.js";

test("Async Function", async () => {
    try {
      const data = await fetchRandomUser(); 
      expect(typeof data).toBe('object');
      expect(data).toHaveProperty('name');
      expect(data).toHaveProperty('email');
      expect(data).toHaveProperty('login');
    } catch (error) {
      fail('Should not throw any error');
    }
});
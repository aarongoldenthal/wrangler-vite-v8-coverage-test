import { expect, it } from "vitest";
import worker from "../src/index.js";

it("tests something", async () => {
  const response = await worker.fetch();
  const text = await response.text();
  expect(text).toBe("foo");
});

import { seed, next } from "../rng";

describe("rng.js", () => {
  test("next produces RNG sequence", () => {
    seed(0);
    expect(next()).toBe(181739644);
    expect(next()).toBe(694639264);
    expect(next()).toBe(1766491179);
    expect(next()).toBe(98979062);
    expect(next()).toBe(1518781592);
  });
});

const m = 2147483647;
const a = 690068508;
const c = 181739644;

let value = 0;

export const seed = (seed) => {
  value = (seed * m).toFixed(0) % m;
}

export const next = () => {
  value = (a * value + c) % m;
  return value;
}
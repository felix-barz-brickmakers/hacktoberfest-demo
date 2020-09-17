
const m = 2147483647;
const a = 690068508;
const c = 181739644;

let value = 0;

export const seed = (seed) => {
  console.log(seed);
  // seed is a number between 0 and 1
  // how can I use that as integer seed ?!?
  // TODO implement later
}

export const next = () => {
  value = (a * value + c) % m;
  return value;
}
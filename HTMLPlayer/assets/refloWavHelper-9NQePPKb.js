import { c as i, e as n } from "./vendor-flo-D1O5Qf5q.js";
let a = false;
async function o() {
  a || (await n(), a = true);
}
async function c(t) {
  await o();
  const e = new Uint8Array(t);
  return i(e);
}
export {
  c as decodeFloToWav,
  o as ensureRefloInitialized,
  n as initReflo
};

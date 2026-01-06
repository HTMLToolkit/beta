import { c as i, e as n } from "./vendor-flo-rsMfiFqa.js";
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

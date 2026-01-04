import { c as n, e as o } from "./vendor-flo-D1O5Qf5q.js";
let e = false;
async function a() {
  e || (await o(), e = true);
}
async function l(i) {
  await a();
  const t = new Uint8Array(i);
  return n(t);
}
export {
  l as decodeFloToWav
};

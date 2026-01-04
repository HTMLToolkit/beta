import { d as w, i as f, g as F, a as _, b as A, _ as h } from "./vendor-flo-D1O5Qf5q.js";
let u = false;
async function a() {
  u || (await h(), u = true);
}
async function U(t, n) {
  await a();
  const r = new Uint8Array(t), c = w(r), y = f(r), { channels: e, sample_rate: d } = y, s = c.length / e, l = n.createBuffer(e, s, d);
  for (let o = 0; o < e; o++) {
    const g = l.getChannelData(o);
    for (let i = 0; i < s; i++) g[i] = c[i * e + o];
  }
  return l;
}
async function p(t) {
  await a();
  const n = new Uint8Array(t);
  return f(n);
}
async function I(t) {
  await a();
  const n = new Uint8Array(t);
  return F(n);
}
async function B(t) {
  await a();
  const n = new Uint8Array(t);
  return _(n);
}
async function b(t) {
  await a();
  const n = new Uint8Array(t);
  return A(n);
}
export {
  U as decodeFloToAudioBuffer,
  B as getFloCoverArt,
  p as getFloInfo,
  I as getFloMetadata,
  b as getFloSyncedLyrics
};

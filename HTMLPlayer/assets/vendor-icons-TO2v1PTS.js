import { r as n } from "./vendor-ui-WM1JXJ50.js";
import "./vendor-react-qkC6yhPU.js";
const u = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), M = (c) => c.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, t, o) => o ? o.toUpperCase() : t.toLowerCase()), i = (c) => {
  const a = M(c);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, y = (...c) => c.filter((a, t, o) => !!a && a.trim() !== "" && o.indexOf(a) === t).join(" ").trim(), v = (c) => {
  for (const a in c) if (a.startsWith("aria-") || a === "role" || a === "title") return true;
};
var m = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
const _ = n.forwardRef(({ color: c = "currentColor", size: a = 24, strokeWidth: t = 2, absoluteStrokeWidth: o, className: h = "", children: d, iconNode: r, ...s }, k) => n.createElement("svg", { ref: k, ...m, width: a, height: a, stroke: c, strokeWidth: o ? Number(t) * 24 / Number(a) : t, className: y("lucide", h), ...!d && !v(s) && { "aria-hidden": "true" }, ...s }, [...r.map(([p, l]) => n.createElement(p, l)), ...Array.isArray(d) ? d : [d]]));
const e = (c, a) => {
  const t = n.forwardRef(({ className: o, ...h }, d) => n.createElement(_, { ref: d, iconNode: a, className: y(`lucide-${u(i(c))}`, `lucide-${c}`, o), ...h }));
  return t.displayName = i(c), t;
};
const g = [["path", { d: "m14 12 4 4 4-4", key: "buelq4" }], ["path", { d: "M18 16V7", key: "ty0viw" }], ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16", key: "d5nyq2" }], ["path", { d: "M3.304 13h6.392", key: "1q3zxz" }]], x = e("a-arrow-down", g);
const L = [["path", { d: "m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16", key: "xik6mr" }], ["path", { d: "M15.697 14h5.606", key: "1stdlc" }], ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16", key: "d5nyq2" }], ["path", { d: "M3.304 13h6.392", key: "1q3zxz" }]], w = e("a-large-small", L);
const f = [["path", { d: "m14 11 4-4 4 4", key: "1pu57t" }], ["path", { d: "M18 16V7", key: "ty0viw" }], ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16", key: "d5nyq2" }], ["path", { d: "M3.304 13h6.392", key: "1q3zxz" }]], I = e("a-arrow-up", f);
const C = [["circle", { cx: "16", cy: "4", r: "1", key: "1grugj" }], ["path", { d: "m18 19 1-7-6 1", key: "r0i19z" }], ["path", { d: "m5 8 3-3 5.5 3-2.36 3.5", key: "9ptxx2" }], ["path", { d: "M4.24 14.5a5 5 0 0 0 6.88 6", key: "10kmtu" }], ["path", { d: "M13.76 17.5a5 5 0 0 0-6.88-6", key: "2qq6rc" }]], N = e("accessibility", C);
const b = [["path", { d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2", key: "169zse" }]], $ = e("activity", b);
const q = [["path", { d: "M18 17.5a2.5 2.5 0 1 1-4 2.03V12", key: "yd12zl" }], ["path", { d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2", key: "larmp2" }], ["path", { d: "M6 8h12", key: "6g4wlu" }], ["path", { d: "M6.6 15.572A2 2 0 1 0 10 17v-5", key: "1x1kqn" }]], z = e("air-vent", q);
const S = [["path", { d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1", key: "ns4c3b" }], ["path", { d: "m12 15 5 6H7Z", key: "14qnn2" }]], A = e("airplay", S);
const H = [["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }], ["path", { d: "M5 3 2 6", key: "18tl5t" }], ["path", { d: "m22 6-3-3", key: "1opdir" }], ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }], ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }], ["path", { d: "m9 13 2 2 4-4", key: "6343dt" }]], j = e("alarm-clock-check", H);
const V = [["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }], ["path", { d: "M5 3 2 6", key: "18tl5t" }], ["path", { d: "m22 6-3-3", key: "1opdir" }], ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }], ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }], ["path", { d: "M9 13h6", key: "1uhe8q" }]], P = e("alarm-clock-minus", V);
const B = [["path", { d: "M6.87 6.87a8 8 0 1 0 11.26 11.26", key: "3on8tj" }], ["path", { d: "M19.9 14.25a8 8 0 0 0-9.15-9.15", key: "15ghsc" }], ["path", { d: "m22 6-3-3", key: "1opdir" }], ["path", { d: "M6.26 18.67 4 21", key: "yzmioq" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M4 4 2 6", key: "1ycko6" }]], F = e("alarm-clock-off", B);
const D = [["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }], ["path", { d: "M5 3 2 6", key: "18tl5t" }], ["path", { d: "m22 6-3-3", key: "1opdir" }], ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }], ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }], ["path", { d: "M12 10v6", key: "1bos4e" }], ["path", { d: "M9 13h6", key: "1uhe8q" }]], R = e("alarm-clock-plus", D);
const T = [["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }], ["path", { d: "M12 9v4l2 2", key: "1c63tq" }], ["path", { d: "M5 3 2 6", key: "18tl5t" }], ["path", { d: "m22 6-3-3", key: "1opdir" }], ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }], ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]], U = e("alarm-clock", T);
const O = [["path", { d: "M11 21c0-2.5 2-2.5 2-5", key: "1sicvv" }], ["path", { d: "M16 21c0-2.5 2-2.5 2-5", key: "1o3eny" }], ["path", { d: "m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8", key: "1bvca4" }], ["path", { d: "M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z", key: "x3qr1j" }], ["path", { d: "M6 21c0-2.5 2-2.5 2-5", key: "i3w1gp" }]], G = e("alarm-smoke", O);
const Z = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }], ["polyline", { points: "11 3 11 11 14 8 17 11 17 3", key: "1wcwz3" }]], W = e("album", Z);
const E = [["path", { d: "M2 12h20", key: "9i4pu4" }], ["path", { d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4", key: "11f1s0" }], ["path", { d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4", key: "t14dx9" }], ["path", { d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1", key: "1w07xs" }], ["path", { d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1", key: "1apec2" }]], X = e("align-center-horizontal", E);
const K = [["path", { d: "M12 2v20", key: "t6zp3m" }], ["path", { d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4", key: "14d6g8" }], ["path", { d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4", key: "1e2lrw" }], ["path", { d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1", key: "1fkdwx" }], ["path", { d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1", key: "1euafb" }]], Q = e("align-center-vertical", K);
const J = [["rect", { width: "6", height: "16", x: "4", y: "2", rx: "2", key: "z5wdxg" }], ["rect", { width: "6", height: "9", x: "14", y: "9", rx: "2", key: "um7a8w" }], ["path", { d: "M22 22H2", key: "19qnx5" }]], Y = e("align-end-horizontal", J);
const e1 = [["rect", { width: "16", height: "6", x: "2", y: "4", rx: "2", key: "10wcwx" }], ["rect", { width: "9", height: "6", x: "9", y: "14", rx: "2", key: "4p5bwg" }], ["path", { d: "M22 22V2", key: "12ipfv" }]], a1 = e("align-end-vertical", e1);
const c1 = [["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2", key: "1wwnby" }], ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2", key: "1fe6j6" }], ["path", { d: "M17 22v-5", key: "4b6g73" }], ["path", { d: "M17 7V2", key: "hnrr36" }], ["path", { d: "M7 22v-3", key: "1r4jpn" }], ["path", { d: "M7 5V2", key: "liy1u9" }]], t1 = e("align-horizontal-distribute-center", c1);
const o1 = [["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2", key: "1wwnby" }], ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2", key: "1fe6j6" }], ["path", { d: "M10 2v20", key: "uyc634" }], ["path", { d: "M20 2v20", key: "1tx262" }]], d1 = e("align-horizontal-distribute-end", o1);
const n1 = [["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2", key: "1wwnby" }], ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2", key: "1fe6j6" }], ["path", { d: "M4 2v20", key: "gtpd5x" }], ["path", { d: "M14 2v20", key: "tg6bpw" }]], h1 = e("align-horizontal-distribute-start", n1);
const s1 = [["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2", key: "dy24zr" }], ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2", key: "13zkjt" }], ["path", { d: "M12 2v20", key: "t6zp3m" }]], i1 = e("align-horizontal-justify-center", s1);
const y1 = [["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2", key: "dy24zr" }], ["rect", { width: "6", height: "10", x: "12", y: "7", rx: "2", key: "1ht384" }], ["path", { d: "M22 2v20", key: "40qfg1" }]], r1 = e("align-horizontal-justify-end", y1);
const k1 = [["rect", { width: "6", height: "14", x: "6", y: "5", rx: "2", key: "hsirpf" }], ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2", key: "13zkjt" }], ["path", { d: "M2 2v20", key: "1ivd8o" }]], p1 = e("align-horizontal-justify-start", k1);
const l1 = [["rect", { width: "6", height: "10", x: "9", y: "7", rx: "2", key: "yn7j0q" }], ["path", { d: "M4 22V2", key: "tsjzd3" }], ["path", { d: "M20 22V2", key: "1bnhr8" }]], u1 = e("align-horizontal-space-around", l1);
const M1 = [["rect", { width: "6", height: "14", x: "3", y: "5", rx: "2", key: "j77dae" }], ["rect", { width: "6", height: "10", x: "15", y: "7", rx: "2", key: "bq30hj" }], ["path", { d: "M3 2v20", key: "1d2pfg" }], ["path", { d: "M21 2v20", key: "p059bm" }]], v1 = e("align-horizontal-space-between", M1);
const m1 = [["rect", { width: "6", height: "16", x: "4", y: "6", rx: "2", key: "1n4dg1" }], ["rect", { width: "6", height: "9", x: "14", y: "6", rx: "2", key: "17khns" }], ["path", { d: "M22 2H2", key: "fhrpnj" }]], _1 = e("align-start-horizontal", m1);
const g1 = [["rect", { width: "9", height: "6", x: "6", y: "14", rx: "2", key: "lpm2y7" }], ["rect", { width: "16", height: "6", x: "6", y: "4", rx: "2", key: "rdj6ps" }], ["path", { d: "M2 2v20", key: "1ivd8o" }]], x1 = e("align-start-vertical", g1);
const L1 = [["path", { d: "M22 17h-3", key: "1lwga1" }], ["path", { d: "M22 7h-5", key: "o2endc" }], ["path", { d: "M5 17H2", key: "1gx9xc" }], ["path", { d: "M7 7H2", key: "6bq26l" }], ["rect", { x: "5", y: "14", width: "14", height: "6", rx: "2", key: "1qrzuf" }], ["rect", { x: "7", y: "4", width: "10", height: "6", rx: "2", key: "we8e9z" }]], w1 = e("align-vertical-distribute-center", L1);
const f1 = [["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2", key: "jmoj9s" }], ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2", key: "aza5on" }], ["path", { d: "M2 20h20", key: "owomy5" }], ["path", { d: "M2 10h20", key: "1ir3d8" }]], I1 = e("align-vertical-distribute-end", f1);
const C1 = [["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2", key: "jmoj9s" }], ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2", key: "aza5on" }], ["path", { d: "M2 14h20", key: "myj16y" }], ["path", { d: "M2 4h20", key: "mda7wb" }]], N1 = e("align-vertical-distribute-start", C1);
const b1 = [["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2", key: "1i8z2d" }], ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2", key: "ypihtt" }], ["path", { d: "M2 12h20", key: "9i4pu4" }]], $1 = e("align-vertical-justify-center", b1);
const q1 = [["rect", { width: "14", height: "6", x: "5", y: "12", rx: "2", key: "4l4tp2" }], ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2", key: "ypihtt" }], ["path", { d: "M2 22h20", key: "272qi7" }]], z1 = e("align-vertical-justify-end", q1);
const S1 = [["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2", key: "1i8z2d" }], ["rect", { width: "10", height: "6", x: "7", y: "6", rx: "2", key: "13squh" }], ["path", { d: "M2 2h20", key: "1ennik" }]], A1 = e("align-vertical-justify-start", S1);
const H1 = [["rect", { width: "10", height: "6", x: "7", y: "9", rx: "2", key: "b1zbii" }], ["path", { d: "M22 20H2", key: "1p1f7z" }], ["path", { d: "M22 4H2", key: "1b7qnq" }]], j1 = e("align-vertical-space-around", H1);
const V1 = [["rect", { width: "14", height: "6", x: "5", y: "15", rx: "2", key: "1w91an" }], ["rect", { width: "10", height: "6", x: "7", y: "3", rx: "2", key: "17wqzy" }], ["path", { d: "M2 21h20", key: "1nyx9w" }], ["path", { d: "M2 3h20", key: "91anmk" }]], P1 = e("align-vertical-space-between", V1);
const B1 = [["path", { d: "M10 10H6", key: "1bsnug" }], ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }], ["path", { d: "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14", key: "lrkjwd" }], ["path", { d: "M8 8v4", key: "1fwk8c" }], ["path", { d: "M9 18h6", key: "x1upvd" }], ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }], ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]], F1 = e("ambulance", B1);
const D1 = [["path", { d: "M16 12h3", key: "4uvgyw" }], ["path", { d: "M17.5 12a8 8 0 0 1-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13", key: "nfoe1t" }]], R1 = e("ampersand", D1);
const T1 = [["path", { d: "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5", key: "12lh1k" }], ["path", { d: "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5", key: "173c68" }]], U1 = e("ampersands", T1);
const O1 = [["path", { d: "M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8", key: "1h8rid" }], ["path", { d: "M10 5H8a2 2 0 0 0 0 4h.68", key: "3ezsi6" }], ["path", { d: "M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8", key: "yt6q09" }], ["path", { d: "M14 5h2a2 2 0 0 1 0 4h-.68", key: "8f95yk" }], ["path", { d: "M18 22H6", key: "mg6kv4" }], ["path", { d: "M9 2h6", key: "1jrp98" }]], G1 = e("amphora", O1);
const Z1 = [["path", { d: "M12 6v16", key: "nqf5sj" }], ["path", { d: "m19 13 2-1a9 9 0 0 1-18 0l2 1", key: "y7qv08" }], ["path", { d: "M9 11h6", key: "1fldmi" }], ["circle", { cx: "12", cy: "4", r: "2", key: "muu5ef" }]], W1 = e("anchor", Z1);
const E1 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }], ["path", { d: "M7.5 8 10 9", key: "olxxln" }], ["path", { d: "m14 9 2.5-1", key: "1j6cij" }], ["path", { d: "M9 10h.01", key: "qbtxuw" }], ["path", { d: "M15 10h.01", key: "1qmjsl" }]], X1 = e("angry", E1);
const K1 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M8 15h8", key: "45n4r" }], ["path", { d: "M8 9h2", key: "1g203m" }], ["path", { d: "M14 9h2", key: "116p9w" }]], Q1 = e("annoyed", K1);
const J1 = [["path", { d: "M2 12 7 2", key: "117k30" }], ["path", { d: "m7 12 5-10", key: "1tvx22" }], ["path", { d: "m12 12 5-10", key: "ev1o1a" }], ["path", { d: "m17 12 5-10", key: "1e4ti3" }], ["path", { d: "M4.5 7h15", key: "vlsxkz" }], ["path", { d: "M12 16v6", key: "c8a4gj" }]], Y1 = e("antenna", J1);
const e2 = [["path", { d: "M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4", key: "1hjpb6" }], ["path", { d: "M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z", key: "1qn45f" }], ["path", { d: "M9 12v5", key: "3anwtq" }], ["path", { d: "M15 12v5", key: "5xh3zn" }], ["path", { d: "M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1", key: "1fi4x8" }]], a2 = e("anvil", e2);
const c2 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m14.31 8 5.74 9.94", key: "1y6ab4" }], ["path", { d: "M9.69 8h11.48", key: "1wxppr" }], ["path", { d: "m7.38 12 5.74-9.94", key: "1grp0k" }], ["path", { d: "M9.69 16 3.95 6.06", key: "libnyf" }], ["path", { d: "M14.31 16H2.83", key: "x5fava" }], ["path", { d: "m16.62 12-5.74 9.94", key: "1vwawt" }]], t2 = e("aperture", c2);
const o2 = [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }], ["path", { d: "M6 8h.01", key: "x9i8wu" }], ["path", { d: "M10 8h.01", key: "1r9ogq" }], ["path", { d: "M14 8h.01", key: "1primd" }]], d2 = e("app-window-mac", o2);
const n2 = [["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }], ["path", { d: "M10 4v4", key: "pp8u80" }], ["path", { d: "M2 8h20", key: "d11cs7" }], ["path", { d: "M6 4v4", key: "1svtjw" }]], h2 = e("app-window", n2);
const s2 = [["path", { d: "M12 6.528V3a1 1 0 0 1 1-1h0", key: "11qiee" }], ["path", { d: "M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21", key: "110c12" }]], i2 = e("apple", s2);
const y2 = [["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }], ["path", { d: "M4 8v11a2 2 0 0 0 2 2h2", key: "tvwodi" }], ["path", { d: "M20 8v11a2 2 0 0 1-2 2h-2", key: "1gkqxj" }], ["path", { d: "m9 15 3-3 3 3", key: "1pd0qc" }], ["path", { d: "M12 12v9", key: "192myk" }]], r2 = e("archive-restore", y2);
const k2 = [["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }], ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }], ["path", { d: "m9.5 17 5-5", key: "nakeu6" }], ["path", { d: "m9.5 12 5 5", key: "1hccrj" }]], p2 = e("archive-x", k2);
const l2 = [["path", { d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3", key: "irtipd" }], ["path", { d: "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z", key: "1qyhux" }], ["path", { d: "M5 18v2", key: "ppbyun" }], ["path", { d: "M19 18v2", key: "gy7782" }]], u2 = e("armchair", l2);
const M2 = [["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }], ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }], ["path", { d: "M10 12h4", key: "a56b0p" }]], v2 = e("archive", M2);
const m2 = [["path", { d: "M15 11a1 1 0 0 0 1 1h2.939a1 1 0 0 1 .75 1.811l-6.835 6.836a1.207 1.207 0 0 1-1.707 0L4.31 13.81a1 1 0 0 1 .75-1.811H8a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z", key: "1hy3w3" }], ["path", { d: "M9 4h6", key: "10am2s" }]], _2 = e("arrow-big-down-dash", m2);
const g2 = [["path", { d: "M15 11a1 1 0 0 0 1 1h2.939a1 1 0 0 1 .75 1.811l-6.835 6.836a1.207 1.207 0 0 1-1.707 0L4.31 13.81a1 1 0 0 1 .75-1.811H8a1 1 0 0 0 1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z", key: "1eaqc3" }]], x2 = e("arrow-big-down", g2);
const L2 = [["path", { d: "M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z", key: "p8w4w5" }], ["path", { d: "M20 9v6", key: "14roy0" }]], w2 = e("arrow-big-left-dash", L2);
const f2 = [["path", { d: "M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z", key: "aztept" }]], I2 = e("arrow-big-left", f2);
const C2 = [["path", { d: "M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z", key: "67vhrh" }], ["path", { d: "M4 9v6", key: "bns7oa" }]], N2 = e("arrow-big-right-dash", C2);
const b2 = [["path", { d: "M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z", key: "1232du" }]], $2 = e("arrow-big-right", b2);
const q2 = [["path", { d: "M9 13a1 1 0 0 0-1-1H5.061a1 1 0 0 1-.75-1.811l6.836-6.835a1.207 1.207 0 0 1 1.707 0l6.835 6.835a1 1 0 0 1-.75 1.811H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z", key: "pnzqmc" }], ["path", { d: "M9 20h6", key: "s66wpe" }]], z2 = e("arrow-big-up-dash", q2);
const S2 = [["path", { d: "M9 13a1 1 0 0 0-1-1H5.061a1 1 0 0 1-.75-1.811l6.836-6.835a1.207 1.207 0 0 1 1.707 0l6.835 6.835a1 1 0 0 1-.75 1.811H16a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z", key: "lh0v7k" }]], A2 = e("arrow-big-up", S2);
const H2 = [["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }], ["path", { d: "M7 20V4", key: "1yoxec" }], ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2", key: "1bwicg" }], ["path", { d: "M17 20v-6h-2", key: "1qp1so" }], ["path", { d: "M15 20h4", key: "1j968p" }]], j2 = e("arrow-down-0-1", H2);
const V2 = [["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }], ["path", { d: "M7 20V4", key: "1yoxec" }], ["path", { d: "M17 10V4h-2", key: "zcsr5x" }], ["path", { d: "M15 10h4", key: "id2lce" }], ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2", key: "33xykx" }]], P2 = e("arrow-down-1-0", V2);
const B2 = [["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }], ["path", { d: "M7 20V4", key: "1yoxec" }], ["path", { d: "M20 8h-5", key: "1vsyxs" }], ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10", key: "ag13bf" }], ["path", { d: "M15 14h5l-5 6h5", key: "ur5jdg" }]], F2 = e("arrow-down-a-z", B2);
const D2 = [["path", { d: "M17 7 7 17", key: "15tmo1" }], ["path", { d: "M17 17H7V7", key: "1org7z" }]], R2 = e("arrow-down-left", D2);
const T2 = [["path", { d: "M19 3H5", key: "1236rx" }], ["path", { d: "M12 21V7", key: "gj6g52" }], ["path", { d: "m6 15 6 6 6-6", key: "h15q88" }]], U2 = e("arrow-down-from-line", T2);
const O2 = [["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }], ["path", { d: "M7 20V4", key: "1yoxec" }], ["path", { d: "M11 4h4", key: "6d7r33" }], ["path", { d: "M11 8h7", key: "djye34" }], ["path", { d: "M11 12h10", key: "1438ji" }]], G2 = e("arrow-down-narrow-wide", O2);
const Z2 = [["path", { d: "m7 7 10 10", key: "1fmybs" }], ["path", { d: "M17 7v10H7", key: "6fjiku" }]], W2 = e("arrow-down-right", Z2);
const E2 = [["path", { d: "M12 17V3", key: "1cwfxf" }], ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }], ["path", { d: "M19 21H5", key: "150jfl" }]], X2 = e("arrow-down-to-line", E2);
const K2 = [["path", { d: "M12 2v14", key: "jyx4ut" }], ["path", { d: "m19 9-7 7-7-7", key: "1oe3oy" }], ["circle", { cx: "12", cy: "21", r: "1", key: "o0uj5v" }]], Q2 = e("arrow-down-to-dot", K2);
const J2 = [["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }], ["path", { d: "M7 20V4", key: "1yoxec" }], ["path", { d: "m21 8-4-4-4 4", key: "1c9v7m" }], ["path", { d: "M17 4v16", key: "7dpous" }]], Y2 = e("arrow-down-up", J2);
const ee = [["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }], ["path", { d: "M7 20V4", key: "1yoxec" }], ["path", { d: "M11 4h10", key: "1w87gc" }], ["path", { d: "M11 8h7", key: "djye34" }], ["path", { d: "M11 12h4", key: "q8tih4" }]], ae = e("arrow-down-wide-narrow", ee);
const ce = [["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }], ["path", { d: "M7 4v16", key: "1glfcx" }], ["path", { d: "M15 4h5l-5 6h5", key: "8asdl1" }], ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20", key: "r6l5cz" }], ["path", { d: "M20 18h-5", key: "18j1r2" }]], te = e("arrow-down-z-a", ce);
const oe = [["path", { d: "M12 5v14", key: "s699le" }], ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]], de = e("arrow-down", oe);
const ne = [["path", { d: "m9 6-6 6 6 6", key: "7v63n9" }], ["path", { d: "M3 12h14", key: "13k4hi" }], ["path", { d: "M21 19V5", key: "b4bplr" }]], he = e("arrow-left-from-line", ne);
const se = [["path", { d: "M8 3 4 7l4 4", key: "9rb6wj" }], ["path", { d: "M4 7h16", key: "6tx8e3" }], ["path", { d: "m16 21 4-4-4-4", key: "siv7j2" }], ["path", { d: "M20 17H4", key: "h6l3hr" }]], ie = e("arrow-left-right", se);
const ye = [["path", { d: "M3 19V5", key: "rwsyhb" }], ["path", { d: "m13 6-6 6 6 6", key: "1yhaz7" }], ["path", { d: "M7 12h14", key: "uoisry" }]], re = e("arrow-left-to-line", ye);
const ke = [["path", { d: "m12 19-7-7 7-7", key: "1l729n" }], ["path", { d: "M19 12H5", key: "x3x0zl" }]], pe = e("arrow-left", ke);
const le = [["path", { d: "M3 5v14", key: "1nt18q" }], ["path", { d: "M21 12H7", key: "13ipq5" }], ["path", { d: "m15 18 6-6-6-6", key: "6tx3qv" }]], ue = e("arrow-right-from-line", le);
const Me = [["path", { d: "m16 3 4 4-4 4", key: "1x1c3m" }], ["path", { d: "M20 7H4", key: "zbl0bi" }], ["path", { d: "m8 21-4-4 4-4", key: "h9nckh" }], ["path", { d: "M4 17h16", key: "g4d7ey" }]], ve = e("arrow-right-left", Me);
const me = [["path", { d: "M17 12H3", key: "8awo09" }], ["path", { d: "m11 18 6-6-6-6", key: "8c2y43" }], ["path", { d: "M21 5v14", key: "nzette" }]], _e = e("arrow-right-to-line", me);
const ge = [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]], xe = e("arrow-right", ge);
const Le = [["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }], ["path", { d: "M7 4v16", key: "1glfcx" }], ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2", key: "1bwicg" }], ["path", { d: "M17 20v-6h-2", key: "1qp1so" }], ["path", { d: "M15 20h4", key: "1j968p" }]], we = e("arrow-up-0-1", Le);
const fe = [["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }], ["path", { d: "M7 4v16", key: "1glfcx" }], ["path", { d: "M17 10V4h-2", key: "zcsr5x" }], ["path", { d: "M15 10h4", key: "id2lce" }], ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2", key: "33xykx" }]], Ie = e("arrow-up-1-0", fe);
const Ce = [["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }], ["path", { d: "M7 4v16", key: "1glfcx" }], ["path", { d: "M20 8h-5", key: "1vsyxs" }], ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10", key: "ag13bf" }], ["path", { d: "M15 14h5l-5 6h5", key: "ur5jdg" }]], Ne = e("arrow-up-a-z", Ce);
const be = [["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }], ["path", { d: "M17 20V4", key: "1ejh1v" }], ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }], ["path", { d: "M7 4v16", key: "1glfcx" }]], $e = e("arrow-up-down", be);
const qe = [["path", { d: "m18 9-6-6-6 6", key: "kcunyi" }], ["path", { d: "M12 3v14", key: "7cf3v8" }], ["path", { d: "M5 21h14", key: "11awu3" }]], ze = e("arrow-up-from-line", qe);
const Se = [["path", { d: "m5 9 7-7 7 7", key: "1hw5ic" }], ["path", { d: "M12 16V2", key: "ywoabb" }], ["circle", { cx: "12", cy: "21", r: "1", key: "o0uj5v" }]], Ae = e("arrow-up-from-dot", Se);
const He = [["path", { d: "M7 17V7h10", key: "11bw93" }], ["path", { d: "M17 17 7 7", key: "2786uv" }]], je = e("arrow-up-left", He);
const Ve = [["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }], ["path", { d: "M7 4v16", key: "1glfcx" }], ["path", { d: "M11 12h4", key: "q8tih4" }], ["path", { d: "M11 16h7", key: "uosisv" }], ["path", { d: "M11 20h10", key: "jvxblo" }]], Pe = e("arrow-up-narrow-wide", Ve);
const Be = [["path", { d: "M7 7h10v10", key: "1tivn9" }], ["path", { d: "M7 17 17 7", key: "1vkiza" }]], Fe = e("arrow-up-right", Be);
const De = [["path", { d: "M5 3h14", key: "7usisc" }], ["path", { d: "m18 13-6-6-6 6", key: "1kf1n9" }], ["path", { d: "M12 7v14", key: "1akyts" }]], Re = e("arrow-up-to-line", De);
const Te = [["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }], ["path", { d: "M7 4v16", key: "1glfcx" }], ["path", { d: "M11 12h10", key: "1438ji" }], ["path", { d: "M11 16h7", key: "uosisv" }], ["path", { d: "M11 20h4", key: "1krc32" }]], Ue = e("arrow-up-wide-narrow", Te);
const Oe = [["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }], ["path", { d: "M7 4v16", key: "1glfcx" }], ["path", { d: "M15 4h5l-5 6h5", key: "8asdl1" }], ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20", key: "r6l5cz" }], ["path", { d: "M20 18h-5", key: "18j1r2" }]], Ge = e("arrow-up-z-a", Oe);
const Ze = [["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }], ["path", { d: "M12 19V5", key: "x0mq9r" }]], We = e("arrow-up", Ze);
const Ee = [["path", { d: "m4 6 3-3 3 3", key: "9aidw8" }], ["path", { d: "M7 17V3", key: "19qxw1" }], ["path", { d: "m14 6 3-3 3 3", key: "6iy689" }], ["path", { d: "M17 17V3", key: "o0fmgi" }], ["path", { d: "M4 21h16", key: "1h09gz" }]], Xe = e("arrows-up-from-line", Ee);
const Ke = [["path", { d: "M12 6v12", key: "1vza4d" }], ["path", { d: "M17.196 9 6.804 15", key: "1ah31z" }], ["path", { d: "m6.804 9 10.392 6", key: "1b6pxd" }]], Qe = e("asterisk", Ke);
const Je = [["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }], ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8", key: "7n84p3" }]], Ye = e("at-sign", Je);
const ea = [["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }], ["path", { d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z", key: "1l2ple" }], ["path", { d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z", key: "1wam0m" }]], aa = e("atom", ea);
const ca = [["path", { d: "M2 10v3", key: "1fnikh" }], ["path", { d: "M6 6v11", key: "11sgs0" }], ["path", { d: "M10 3v18", key: "yhl04a" }], ["path", { d: "M14 8v7", key: "3a1oy3" }], ["path", { d: "M18 5v13", key: "123xd1" }], ["path", { d: "M22 10v3", key: "154ddg" }]], ta = e("audio-lines", ca);
const oa = [["path", { d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2", key: "57tc96" }]], da = e("audio-waveform", oa);
const na = [["path", { d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526", key: "1yiouv" }], ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]], ha = e("award", na);
const sa = [["path", { d: "m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9", key: "5z9253" }], ["path", { d: "M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z", key: "19zklq" }]], ia = e("axe", sa);
const ya = [["path", { d: "M13.5 10.5 15 9", key: "1nsxvm" }], ["path", { d: "M4 4v15a1 1 0 0 0 1 1h15", key: "1w6lkd" }], ["path", { d: "M4.293 19.707 6 18", key: "3g1p8c" }], ["path", { d: "m9 15 1.5-1.5", key: "1xfbes" }]], ra = e("axis-3d", ya);
const ka = [["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5", key: "1u7htd" }], ["path", { d: "M15 12h.01", key: "1k8ypt" }], ["path", { d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1", key: "11xh7x" }], ["path", { d: "M9 12h.01", key: "157uk2" }]], pa = e("baby", ka);
const la = [["path", { d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z", key: "1ol0lm" }], ["path", { d: "M8 10h8", key: "c7uz4u" }], ["path", { d: "M8 18h8", key: "1no2b1" }], ["path", { d: "M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6", key: "1fr6do" }], ["path", { d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2", key: "donm21" }]], ua = e("backpack", la);
const Ma = [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z", key: "3c2336" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]], va = e("badge-alert", Ma);
const ma = [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z", key: "3c2336" }], ["path", { d: "M12 7v10", key: "jspqdw" }], ["path", { d: "M15.4 10a4 4 0 1 0 0 4", key: "2eqtx8" }]], _a = e("badge-cent", ma);
const ga = [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z", key: "3c2336" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]], xa = e("badge-check", ga);
const La = [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z", key: "3c2336" }], ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }], ["path", { d: "M12 18V6", key: "zqpxq5" }]], wa = e("badge-dollar-sign", La);
const fa = [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z", key: "3c2336" }], ["path", { d: "M7 12h5", key: "gblrwe" }], ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2", key: "1makmb" }]], Ia = e("badge-euro", fa);
const Ca = [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z", key: "3c2336" }], ["path", { d: "M8 8h8", key: "1bis0t" }], ["path", { d: "M8 12h8", key: "1wcyev" }], ["path", { d: "m13 17-5-1h1a4 4 0 0 0 0-8", key: "nu2bwa" }]], Na = e("badge-indian-rupee", Ca);
const ba = [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z", key: "3c2336" }], ["path", { d: "m9 8 3 3v7", key: "17yadx" }], ["path", { d: "m12 11 3-3", key: "p4cfq1" }], ["path", { d: "M9 12h6", key: "1c52cq" }], ["path", { d: "M9 16h6", key: "8wimt3" }]], $a = e("badge-japanese-yen", ba);
const qa = [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z", key: "3c2336" }], ["line", { x1: "12", x2: "12", y1: "16", y2: "12", key: "1y1yb1" }], ["line", { x1: "12", x2: "12.01", y1: "8", y2: "8", key: "110wyk" }]], za = e("badge-info", qa);
const Sa = [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z", key: "3c2336" }], ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]], Aa = e("badge-minus", Sa);
const Ha = [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z", key: "3c2336" }], ["path", { d: "m15 9-6 6", key: "1uzhvr" }], ["path", { d: "M9 9h.01", key: "1q5me6" }], ["path", { d: "M15 15h.01", key: "lqbp3k" }]], ja = e("badge-percent", Ha);
const Va = [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z", key: "3c2336" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "16", key: "10p56q" }], ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]], Pa = e("badge-plus", Va);
const Ba = [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z", key: "3c2336" }], ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }], ["line", { x1: "12", x2: "12.01", y1: "17", y2: "17", key: "io3f8k" }]], Fa = e("badge-question-mark", Ba);
const Da = [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z", key: "3c2336" }], ["path", { d: "M8 12h4", key: "qz6y1c" }], ["path", { d: "M10 16V9.5a2.5 2.5 0 0 1 5 0", key: "3mlbjk" }], ["path", { d: "M8 16h7", key: "sbedsn" }]], Ra = e("badge-pound-sterling", Da);
const Ta = [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z", key: "3c2336" }], ["path", { d: "M9 16h5", key: "1syiyw" }], ["path", { d: "M9 12h5a2 2 0 1 0 0-4h-3v9", key: "1ge9c1" }]], Ua = e("badge-russian-ruble", Ta);
const Oa = [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z", key: "3c2336" }], ["path", { d: "M11 17V8h4", key: "1bfq6y" }], ["path", { d: "M11 12h3", key: "2eqnfz" }], ["path", { d: "M9 16h4", key: "1skf3a" }]], Ga = e("badge-swiss-franc", Oa);
const Za = [["path", { d: "M11 7v10a5 5 0 0 0 5-5", key: "1ja3ih" }], ["path", { d: "m15 8-6 3", key: "4x0uwz" }], ["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76", key: "18242g" }]], Wa = e("badge-turkish-lira", Za);
const Ea = [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z", key: "3c2336" }], ["line", { x1: "15", x2: "9", y1: "9", y2: "15", key: "f7djnv" }], ["line", { x1: "9", x2: "15", y1: "9", y2: "15", key: "1shsy8" }]], Xa = e("badge-x", Ea);
const Ka = [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z", key: "3c2336" }]], Qa = e("badge", Ka);
const Ja = [["path", { d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2", key: "4irg2o" }], ["path", { d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10", key: "14fcyx" }], ["rect", { width: "13", height: "8", x: "8", y: "6", rx: "1", key: "o6oiis" }], ["circle", { cx: "18", cy: "20", r: "2", key: "t9985n" }], ["circle", { cx: "9", cy: "20", r: "2", key: "e5v82j" }]], Ya = e("baggage-claim", Ja);
const e0 = [["path", { d: "M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1", key: "2nz4b" }], ["path", { d: "M12 6a2 2 0 0 1 2 2", key: "7y7d82" }], ["path", { d: "M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0", key: "vqb5s3" }]], a0 = e("balloon", e0);
const c0 = [["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], t0 = e("ban", c0);
const o0 = [["path", { d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5", key: "1cscit" }], ["path", { d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z", key: "1y1nbv" }]], d0 = e("banana", o0);
const n0 = [["path", { d: "M10 10.01h.01", key: "1e9xi7" }], ["path", { d: "M10 14.01h.01", key: "ac23bv" }], ["path", { d: "M14 10.01h.01", key: "2wfrvf" }], ["path", { d: "M14 14.01h.01", key: "8tw8yn" }], ["path", { d: "M18 6v11.5", key: "dkbidh" }], ["path", { d: "M6 6v12", key: "vkc79e" }], ["rect", { x: "2", y: "6", width: "20", height: "12", rx: "2", key: "1wpnh2" }]], h0 = e("bandage", n0);
const s0 = [["path", { d: "M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5", key: "x6cv4u" }], ["path", { d: "m16 19 3 3 3-3", key: "1ibux0" }], ["path", { d: "M18 12h.01", key: "yjnet6" }], ["path", { d: "M19 16v6", key: "tddt3s" }], ["path", { d: "M6 12h.01", key: "c2rlol" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]], i0 = e("banknote-arrow-down", s0);
const y0 = [["path", { d: "M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5", key: "x6cv4u" }], ["path", { d: "M18 12h.01", key: "yjnet6" }], ["path", { d: "M19 22v-6", key: "qhmiwi" }], ["path", { d: "m22 19-3-3-3 3", key: "rn6bg2" }], ["path", { d: "M6 12h.01", key: "c2rlol" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]], r0 = e("banknote-arrow-up", y0);
const k0 = [["path", { d: "M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5", key: "16nib6" }], ["path", { d: "m17 17 5 5", key: "p7ous7" }], ["path", { d: "M18 12h.01", key: "yjnet6" }], ["path", { d: "m22 17-5 5", key: "gqnmv0" }], ["path", { d: "M6 12h.01", key: "c2rlol" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]], p0 = e("banknote-x", k0);
const l0 = [["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }], ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]], u0 = e("banknote", l0);
const M0 = [["path", { d: "M3 5v14", key: "1nt18q" }], ["path", { d: "M8 5v14", key: "1ybrkv" }], ["path", { d: "M12 5v14", key: "s699le" }], ["path", { d: "M17 5v14", key: "ycjyhj" }], ["path", { d: "M21 5v14", key: "nzette" }]], v0 = e("barcode", M0);
const m0 = [["path", { d: "M10 3a41 41 0 0 0 0 18", key: "1qcnzb" }], ["path", { d: "M14 3a41 41 0 0 1 0 18", key: "547vd4" }], ["path", { d: "M17 3a2 2 0 0 1 1.68.92 15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92 15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3z", key: "1wepyy" }], ["path", { d: "M3.84 17h16.32", key: "1wh981" }], ["path", { d: "M3.84 7h16.32", key: "19jf4x" }]], _0 = e("barrel", m0);
const g0 = [["path", { d: "M4 20h16", key: "14thso" }], ["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }], ["path", { d: "M8 12h8", key: "1wcyev" }]], x0 = e("baseline", g0);
const L0 = [["path", { d: "M10 4 8 6", key: "1rru8s" }], ["path", { d: "M17 19v2", key: "ts1sot" }], ["path", { d: "M2 12h20", key: "9i4pu4" }], ["path", { d: "M7 19v2", key: "12npes" }], ["path", { d: "M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5", key: "14ym8i" }]], w0 = e("bath", L0);
const f0 = [["path", { d: "m11 7-3 5h4l-3 5", key: "b4a64w" }], ["path", { d: "M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935", key: "lre1cr" }], ["path", { d: "M22 14v-4", key: "14q9d5" }], ["path", { d: "M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936", key: "13q5k0" }]], I0 = e("battery-charging", f0);
const C0 = [["path", { d: "M10 10v4", key: "1mb2ec" }], ["path", { d: "M14 10v4", key: "1nt88p" }], ["path", { d: "M22 14v-4", key: "14q9d5" }], ["path", { d: "M6 10v4", key: "1n77qd" }], ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]], N0 = e("battery-full", C0);
const b0 = [["path", { d: "M22 14v-4", key: "14q9d5" }], ["path", { d: "M6 14v-4", key: "14a6bd" }], ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]], $0 = e("battery-low", b0);
const q0 = [["path", { d: "M10 14v-4", key: "suye4c" }], ["path", { d: "M22 14v-4", key: "14q9d5" }], ["path", { d: "M6 14v-4", key: "14a6bd" }], ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]], z0 = e("battery-medium", q0);
const S0 = [["path", { d: "M10 9v6", key: "17i7lo" }], ["path", { d: "M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605", key: "o09yah" }], ["path", { d: "M22 14v-4", key: "14q9d5" }], ["path", { d: "M7 12h6", key: "iekk3h" }], ["path", { d: "M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606", key: "xyqvf1" }]], A0 = e("battery-plus", S0);
const H0 = [["path", { d: "M10 17h.01", key: "nbq80n" }], ["path", { d: "M10 7v6", key: "nne03l" }], ["path", { d: "M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2", key: "1m83kb" }], ["path", { d: "M22 14v-4", key: "14q9d5" }], ["path", { d: "M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2", key: "h8lgfh" }]], j0 = e("battery-warning", H0);
const V0 = [["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }], ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]], P0 = e("battery", V0);
const B0 = [["path", { d: "M4.5 3h15", key: "c7n0jr" }], ["path", { d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3", key: "m1uhx7" }], ["path", { d: "M6 14h12", key: "4cwo0f" }]], F0 = e("beaker", B0);
const D0 = [["path", { d: "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1", key: "bq3udt" }], ["path", { d: "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66", key: "17ccse" }], ["path", { d: "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04", key: "18zqgq" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]], R0 = e("bean-off", D0);
const T0 = [["path", { d: "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z", key: "1tvzk7" }], ["path", { d: "M5.341 10.62a4 4 0 1 0 5.279-5.28", key: "2cyri2" }]], U0 = e("bean", T0);
const O0 = [["path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8", key: "1k78r4" }], ["path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4", key: "fb3tl2" }], ["path", { d: "M12 4v6", key: "1dcgq2" }], ["path", { d: "M2 18h20", key: "ajqnye" }]], G0 = e("bed-double", O0);
const Z0 = [["path", { d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8", key: "1wm6mi" }], ["path", { d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4", key: "4k93s5" }], ["path", { d: "M3 18h18", key: "1h113x" }]], W0 = e("bed-single", Z0);
const E0 = [["path", { d: "M2 4v16", key: "vw9hq8" }], ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10", key: "1dgv2r" }], ["path", { d: "M2 17h20", key: "18nfp3" }], ["path", { d: "M6 8v9", key: "1yriud" }]], X0 = e("bed", E0);
const K0 = [["path", { d: "M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3", key: "cisjcv" }], ["path", { d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5", key: "5byaag" }], ["circle", { cx: "12.5", cy: "8.5", r: "2.5", key: "9738u8" }]], Q0 = e("beef", K0);
const J0 = [["path", { d: "M13 13v5", key: "igwfh0" }], ["path", { d: "M17 11.47V8", key: "16yw0g" }], ["path", { d: "M17 11h1a3 3 0 0 1 2.745 4.211", key: "1xbt65" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3", key: "c55o3e" }], ["path", { d: "M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268", key: "1ydug7" }], ["path", { d: "M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12", key: "q81o7q" }], ["path", { d: "M9 14.6V18", key: "20ek98" }]], Y0 = e("beer-off", J0);
const ec = [["path", { d: "M17 11h1a3 3 0 0 1 0 6h-1", key: "1yp76v" }], ["path", { d: "M9 12v6", key: "1u1cab" }], ["path", { d: "M13 12v6", key: "1sugkk" }], ["path", { d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z", key: "1510fo" }], ["path", { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8", key: "19jb7n" }]], ac = e("beer", ec);
const cc = [["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }], ["path", { d: "M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665", key: "1tip0g" }], ["circle", { cx: "18", cy: "8", r: "3", key: "1g0gzu" }]], tc = e("bell-dot", cc);
const oc = [["path", { d: "M18.518 17.347A7 7 0 0 1 14 19", key: "1emhpo" }], ["path", { d: "M18.8 4A11 11 0 0 1 20 9", key: "127b67" }], ["path", { d: "M9 9h.01", key: "1q5me6" }], ["circle", { cx: "20", cy: "16", r: "2", key: "1v9bxh" }], ["circle", { cx: "9", cy: "9", r: "7", key: "p2h5vp" }], ["rect", { x: "4", y: "16", width: "10", height: "6", rx: "2", key: "bfnviv" }]], dc = e("bell-electric", oc);
const nc = [["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }], ["path", { d: "M15 8h6", key: "8ybuxh" }], ["path", { d: "M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12", key: "bdwj86" }]], hc = e("bell-minus", nc);
const sc = [["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }], ["path", { d: "M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742", key: "178tsu" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05", key: "1hqiys" }]], ic = e("bell-off", sc);
const yc = [["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }], ["path", { d: "M15 8h6", key: "8ybuxh" }], ["path", { d: "M18 5v6", key: "g5ayrv" }], ["path", { d: "M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332", key: "1abcvy" }]], rc = e("bell-plus", yc);
const kc = [["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }], ["path", { d: "M22 8c0-2.3-.8-4.3-2-6", key: "5bb3ad" }], ["path", { d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326", key: "11g9vi" }], ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8", key: "tap9e0" }]], pc = e("bell-ring", kc);
const lc = [["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }], ["path", { d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326", key: "11g9vi" }]], uc = e("bell", lc);
const Mc = [["rect", { width: "13", height: "7", x: "3", y: "3", rx: "1", key: "11xb64" }], ["path", { d: "m22 15-3-3 3-3", key: "26chmm" }], ["rect", { width: "13", height: "7", x: "3", y: "14", rx: "1", key: "k6ky7n" }]], vc = e("between-horizontal-end", Mc);
const mc = [["rect", { width: "13", height: "7", x: "8", y: "3", rx: "1", key: "pkso9a" }], ["path", { d: "m2 9 3 3-3 3", key: "1agib5" }], ["rect", { width: "13", height: "7", x: "8", y: "14", rx: "1", key: "1q5fc1" }]], _c = e("between-horizontal-start", mc);
const gc = [["rect", { width: "7", height: "13", x: "3", y: "3", rx: "1", key: "1fdu0f" }], ["path", { d: "m9 22 3-3 3 3", key: "17z65a" }], ["rect", { width: "7", height: "13", x: "14", y: "3", rx: "1", key: "1squn4" }]], xc = e("between-vertical-end", gc);
const Lc = [["rect", { width: "7", height: "13", x: "3", y: "8", rx: "1", key: "1fjrkv" }], ["path", { d: "m15 2-3 3-3-3", key: "1uh6eb" }], ["rect", { width: "7", height: "13", x: "14", y: "8", rx: "1", key: "w3fjg8" }]], wc = e("between-vertical-start", Lc);
const fc = [["path", { d: "M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1", key: "1pmlyh" }], ["path", { d: "M15 14a5 5 0 0 0-7.584 2", key: "5rb254" }], ["path", { d: "M9.964 6.825C8.019 7.977 9.5 13 8 15", key: "kbvsx9" }]], Ic = e("biceps-flexed", fc);
const Cc = [["circle", { cx: "18.5", cy: "17.5", r: "3.5", key: "15x4ox" }], ["circle", { cx: "5.5", cy: "17.5", r: "3.5", key: "1noe27" }], ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }], ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2", key: "1npguv" }]], Nc = e("bike", Cc);
const bc = [["rect", { x: "14", y: "14", width: "4", height: "6", rx: "2", key: "p02svl" }], ["rect", { x: "6", y: "4", width: "4", height: "6", rx: "2", key: "xm4xkj" }], ["path", { d: "M6 20h4", key: "1i6q5t" }], ["path", { d: "M14 10h4", key: "ru81e7" }], ["path", { d: "M6 14h2v6", key: "16z9wg" }], ["path", { d: "M14 4h2v6", key: "1idq9u" }]], $c = e("binary", bc);
const qc = [["path", { d: "M10 10h4", key: "tcdvrf" }], ["path", { d: "M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3", key: "3apit1" }], ["path", { d: "M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z", key: "rhpgnw" }], ["path", { d: "M 22 16 L 2 16", key: "14lkq7" }], ["path", { d: "M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z", key: "104b3k" }], ["path", { d: "M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3", key: "14fczp" }]], zc = e("binoculars", qc);
const Sc = [["circle", { cx: "12", cy: "11.9", r: "2", key: "e8h31w" }], ["path", { d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6", key: "17bolr" }], ["path", { d: "m8.9 10.1 1.4.8", key: "15ezny" }], ["path", { d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5", key: "wtwa5u" }], ["path", { d: "m15.1 10.1-1.4.8", key: "1r0b28" }], ["path", { d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2", key: "m7qszh" }], ["path", { d: "M12 13.9v1.6", key: "zfyyim" }], ["path", { d: "M13.5 5.4c-1-.2-2-.2-3 0", key: "1bi9q0" }], ["path", { d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5", key: "1rhjqw" }], ["path", { d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5", key: "8gsud3" }]], Ac = e("biohazard", Sc);
const Hc = [["path", { d: "M16 7h.01", key: "1kdx03" }], ["path", { d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20", key: "oj1oa8" }], ["path", { d: "m20 7 2 .5-2 .5", key: "12nv4d" }], ["path", { d: "M10 18v3", key: "1yea0a" }], ["path", { d: "M14 17.75V21", key: "1pymcb" }], ["path", { d: "M7 18a6 6 0 0 0 3.84-10.61", key: "1npnn0" }]], jc = e("bird", Hc);
const Vc = [["path", { d: "M12 18v4", key: "jadmvz" }], ["path", { d: "m17 18 1.956-11.468", key: "l5n2ro" }], ["path", { d: "m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8", key: "1sy6n7" }], ["path", { d: "M4 18h16", key: "19g7jn" }], ["path", { d: "M7 18 5.044 6.532", key: "1uqdf2" }], ["circle", { cx: "12", cy: "10", r: "2", key: "1yojzk" }]], Pc = e("birdhouse", Vc);
const Bc = [["circle", { cx: "9", cy: "9", r: "7", key: "p2h5vp" }], ["circle", { cx: "15", cy: "15", r: "7", key: "19ennj" }]], Fc = e("blend", Bc);
const Dc = [["path", { d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727", key: "yr8idg" }]], Rc = e("bitcoin", Dc);
const Tc = [["path", { d: "M3 3h18", key: "o7r712" }], ["path", { d: "M20 7H8", key: "gd2fo2" }], ["path", { d: "M20 11H8", key: "1ynp89" }], ["path", { d: "M10 19h10", key: "19hjk5" }], ["path", { d: "M8 15h12", key: "1yqzne" }], ["path", { d: "M4 3v14", key: "fggqzn" }], ["circle", { cx: "4", cy: "19", r: "2", key: "p3m9r0" }]], Uc = e("blinds", Tc);
const Oc = [["path", { d: "M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2", key: "1ah6g2" }], ["rect", { x: "14", y: "2", width: "8", height: "8", rx: "1", key: "88lufb" }]], Gc = e("blocks", Oc);
const Zc = [["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }], ["line", { x1: "18", x2: "21", y1: "12", y2: "12", key: "1rsjjs" }], ["line", { x1: "3", x2: "6", y1: "12", y2: "12", key: "11yl8c" }]], Wc = e("bluetooth-connected", Zc);
const Ec = [["path", { d: "m17 17-5 5V12l-5 5", key: "v5aci6" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M14.5 9.5 17 7l-5-5v4.5", key: "1kddfz" }]], Xc = e("bluetooth-off", Ec);
const Kc = [["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }], ["path", { d: "M20.83 14.83a4 4 0 0 0 0-5.66", key: "k8tn1j" }], ["path", { d: "M18 12h.01", key: "yjnet6" }]], Qc = e("bluetooth-searching", Kc);
const Jc = [["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }]], Yc = e("bluetooth", Jc);
const et = [["path", { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }]], at = e("bold", et);
const ct = [["path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z", key: "yt0hxn" }], ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }]], tt = e("bolt", ct);
const ot = [["circle", { cx: "11", cy: "13", r: "9", key: "hd149" }], ["path", { d: "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95", key: "jp4j1b" }], ["path", { d: "m22 2-1.5 1.5", key: "ay92ug" }]], dt = e("bomb", ot);
const nt = [["path", { d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z", key: "w610uw" }]], ht = e("bone", nt);
const st = [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "k3hazp" }], ["path", { d: "m8 13 4-7 4 7", key: "4rari8" }], ["path", { d: "M9.1 11h5.7", key: "1gkovt" }]], it = e("book-a", st);
const yt = [["path", { d: "M12 6v7", key: "1f6ttz" }], ["path", { d: "M16 8v3", key: "gejaml" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "k3hazp" }], ["path", { d: "M8 8v3", key: "1qzp49" }]], rt = e("book-audio", yt);
const kt = [["path", { d: "M12 13h.01", key: "y0uutt" }], ["path", { d: "M12 6v3", key: "1m4b9j" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "k3hazp" }]], pt = e("book-alert", kt);
const lt = [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "k3hazp" }], ["path", { d: "m9 9.5 2 2 4-4", key: "1dth82" }]], ut = e("book-check", lt);
const Mt = [["path", { d: "M5 7a2 2 0 0 0-2 2v11", key: "1yhqjt" }], ["path", { d: "M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21", key: "edzzo5" }], ["path", { d: "M9 15V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10", key: "1nwzrg" }]], vt = e("book-copy", Mt);
const mt = [["path", { d: "M12 17h1.5", key: "1gkc67" }], ["path", { d: "M12 22h1.5", key: "1my7sn" }], ["path", { d: "M12 2h1.5", key: "19tvb7" }], ["path", { d: "M17.5 22H19a1 1 0 0 0 1-1", key: "10akbh" }], ["path", { d: "M17.5 2H19a1 1 0 0 1 1 1v1.5", key: "1vrfjs" }], ["path", { d: "M20 14v3h-2.5", key: "1naeju" }], ["path", { d: "M20 8.5V10", key: "1ctpfu" }], ["path", { d: "M4 10V8.5", key: "1o3zg5" }], ["path", { d: "M4 19.5V14", key: "ob81pf" }], ["path", { d: "M4 4.5A2.5 2.5 0 0 1 6.5 2H8", key: "s8vcyb" }], ["path", { d: "M8 22H6.5a1 1 0 0 1 0-5H8", key: "1cu73q" }]], _t = e("book-dashed", mt);
const gt = [["path", { d: "M12 13V7", key: "h0r20n" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "k3hazp" }], ["path", { d: "m9 10 3 3 3-3", key: "zt5b4y" }]], xt = e("book-down", gt);
const Lt = [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "k3hazp" }], ["path", { d: "M8 12v-2a4 4 0 0 1 8 0v2", key: "1vsqkj" }], ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }], ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }]], wt = e("book-headphones", Lt);
const ft = [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "k3hazp" }], ["path", { d: "M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z", key: "9v40y5" }]], It = e("book-heart", ft);
const Ct = [["path", { d: "m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17", key: "q6ojf0" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "k3hazp" }], ["circle", { cx: "10", cy: "8", r: "2", key: "2qkj4p" }]], Nt = e("book-image", Ct);
const bt = [["path", { d: "m19 3 1 1", key: "ze14oc" }], ["path", { d: "m20 2-4.5 4.5", key: "1sppr8" }], ["path", { d: "M20 7.898V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "1xzogz" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2h7.844", key: "vtdg6h" }], ["circle", { cx: "14", cy: "8", r: "2", key: "u49eql" }]], $t = e("book-key", bt);
const qt = [["path", { d: "M18 6V4a2 2 0 1 0-4 0v2", key: "1aquzs" }], ["path", { d: "M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "1rkj32" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10", key: "18wgow" }], ["rect", { x: "12", y: "6", width: "8", height: "5", rx: "1", key: "73l30o" }]], zt = e("book-lock", qt);
const St = [["path", { d: "M10 2v8l3-3 3 3V2", key: "sqw3rj" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "k3hazp" }]], At = e("book-marked", St);
const Ht = [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "k3hazp" }], ["path", { d: "M9 10h6", key: "9gxzsh" }]], jt = e("book-minus", Ht);
const Vt = [["path", { d: "M12 21V7", key: "gj6g52" }], ["path", { d: "m16 12 2 2 4-4", key: "mdajum" }], ["path", { d: "M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3", key: "8arnkb" }]], Pt = e("book-open-check", Vt);
const Bt = [["path", { d: "M12 7v14", key: "1akyts" }], ["path", { d: "M16 12h2", key: "7q9ll5" }], ["path", { d: "M16 8h2", key: "msurwy" }], ["path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z", key: "ruj8y" }], ["path", { d: "M6 12h2", key: "32wvfc" }], ["path", { d: "M6 8h2", key: "30oboj" }]], Ft = e("book-open-text", Bt);
const Dt = [["path", { d: "M12 7v14", key: "1akyts" }], ["path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z", key: "ruj8y" }]], Rt = e("book-open", Dt);
const Tt = [["path", { d: "M12 7v6", key: "lw1j43" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "k3hazp" }], ["path", { d: "M9 10h6", key: "9gxzsh" }]], Ut = e("book-plus", Tt);
const Ot = [["path", { d: "M11 22H5.5a1 1 0 0 1 0-5h4.501", key: "mcbepb" }], ["path", { d: "m21 22-1.879-1.878", key: "12q7x1" }], ["path", { d: "M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8", key: "olfd5n" }], ["circle", { cx: "17", cy: "18", r: "3", key: "82mm0e" }]], Gt = e("book-search", Ot);
const Zt = [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "k3hazp" }], ["path", { d: "M8 11h8", key: "vwpz6n" }], ["path", { d: "M8 7h6", key: "1f0q6e" }]], Wt = e("book-text", Zt);
const Et = [["path", { d: "M10 13h4", key: "ytezjc" }], ["path", { d: "M12 6v7", key: "1f6ttz" }], ["path", { d: "M16 8V6H8v2", key: "x8j6u4" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "k3hazp" }]], Xt = e("book-type", Et);
const Kt = [["path", { d: "M12 13V7", key: "h0r20n" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "k3hazp" }], ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }]], Qt = e("book-up", Kt);
const Jt = [["path", { d: "M12 13V7", key: "h0r20n" }], ["path", { d: "M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "161d7n" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2", key: "1lorq7" }], ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }], ["path", { d: "m9 5 3-3 3 3", key: "l8vdw6" }]], Yt = e("book-up-2", Jt);
const eo = [["path", { d: "M15 13a3 3 0 1 0-6 0", key: "10j68g" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "k3hazp" }], ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }]], ao = e("book-user", eo);
const co = [["path", { d: "m14.5 7-5 5", key: "dy991v" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "k3hazp" }], ["path", { d: "m9.5 7 5 5", key: "s45iea" }]], to = e("book-x", co);
const oo = [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "k3hazp" }]], no = e("book", oo);
const ho = [["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z", key: "169p4p" }], ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }]], so = e("bookmark-check", ho);
const io = [["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }], ["line", { x1: "15", x2: "9", y1: "10", y2: "10", key: "1gty7f" }]], yo = e("bookmark-minus", io);
const ro = [["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }], ["line", { x1: "12", x2: "12", y1: "7", y2: "13", key: "1cppfj" }], ["line", { x1: "15", x2: "9", y1: "10", y2: "10", key: "1gty7f" }]], ko = e("bookmark-plus", ro);
const po = [["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z", key: "169p4p" }], ["path", { d: "m14.5 7.5-5 5", key: "3lb6iw" }], ["path", { d: "m9.5 7.5 5 5", key: "ko136h" }]], lo = e("bookmark-x", po);
const uo = [["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]], Mo = e("bookmark", uo);
const vo = [["path", { d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4", key: "vvzvr1" }], ["path", { d: "M8 8v1", key: "xcqmfk" }], ["path", { d: "M12 8v1", key: "1rj8u4" }], ["path", { d: "M16 8v1", key: "1q12zr" }], ["rect", { width: "20", height: "12", x: "2", y: "9", rx: "2", key: "igpb89" }], ["circle", { cx: "8", cy: "15", r: "2", key: "fa4a8s" }], ["circle", { cx: "16", cy: "15", r: "2", key: "14c3ya" }]], mo = e("boom-box", vo);
const _o = [["path", { d: "M12 6V2H8", key: "1155em" }], ["path", { d: "M15 11v2", key: "i11awn" }], ["path", { d: "M2 12h2", key: "1t8f8n" }], ["path", { d: "M20 12h2", key: "1q8mjw" }], ["path", { d: "M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z", key: "11gyqh" }], ["path", { d: "M9 11v2", key: "1ueba0" }]], go = e("bot-message-square", _o);
const xo = [["path", { d: "M13.67 8H18a2 2 0 0 1 2 2v4.33", key: "7az073" }], ["path", { d: "M2 14h2", key: "vft8re" }], ["path", { d: "M20 14h2", key: "4cs60a" }], ["path", { d: "M22 22 2 2", key: "1r8tn9" }], ["path", { d: "M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586", key: "s09a7a" }], ["path", { d: "M9 13v2", key: "rq6x2g" }], ["path", { d: "M9.67 4H12v2.33", key: "110xot" }]], Lo = e("bot-off", xo);
const wo = [["path", { d: "M12 8V4H8", key: "hb8ula" }], ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }], ["path", { d: "M2 14h2", key: "vft8re" }], ["path", { d: "M20 14h2", key: "4cs60a" }], ["path", { d: "M15 13v2", key: "1xurst" }], ["path", { d: "M9 13v2", key: "rq6x2g" }]], fo = e("bot", wo);
const Io = [["path", { d: "M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z", key: "blqgoc" }], ["path", { d: "M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4", key: "43jbee" }]], Co = e("bottle-wine", Io);
const No = [["path", { d: "M17 3h4v4", key: "19p9u1" }], ["path", { d: "M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17", key: "12t3w9" }], ["path", { d: "M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05", key: "ogng5l" }], ["path", { d: "M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z", key: "8v3fy2" }], ["path", { d: "M9.707 14.293 21 3", key: "ydm3bn" }]], bo = e("bow-arrow", No);
const $o = [["path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z", key: "hh9hay" }], ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }], ["path", { d: "M12 22V12", key: "d0xqtd" }]], qo = e("box", $o);
const zo = [["path", { d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z", key: "lc1i9w" }], ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }], ["path", { d: "m7 16.5 5-3", key: "va8pkn" }], ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }], ["path", { d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z", key: "8zsnat" }], ["path", { d: "m17 16.5-5-3", key: "8arw3v" }], ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }], ["path", { d: "M17 16.5v5.17", key: "k6z78m" }], ["path", { d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z", key: "1xygjf" }], ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }], ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }], ["path", { d: "M12 13.5V8", key: "1io7kd" }]], So = e("boxes", zo);
const Ao = [["path", { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1", key: "ezmyqa" }], ["path", { d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1", key: "e1hn23" }]], Ho = e("braces", Ao);
const jo = [["path", { d: "M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3", key: "1kt8lf" }], ["path", { d: "M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3", key: "gduv9" }]], Vo = e("brackets", jo);
const Po = [["path", { d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z", key: "l5xja" }], ["path", { d: "M9 13a4.5 4.5 0 0 0 3-4", key: "10igwf" }], ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }], ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }], ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }], ["path", { d: "M12 13h4", key: "1ku699" }], ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1", key: "105ag5" }], ["path", { d: "M12 8h8", key: "1lhi5i" }], ["path", { d: "M16 8V5a2 2 0 0 1 2-2", key: "u6izg6" }], ["circle", { cx: "16", cy: "13", r: ".5", key: "ry7gng" }], ["circle", { cx: "18", cy: "3", r: ".5", key: "1aiba7" }], ["circle", { cx: "20", cy: "21", r: ".5", key: "yhc1fs" }], ["circle", { cx: "20", cy: "8", r: ".5", key: "1e43v0" }]], Bo = e("brain-circuit", Po);
const Fo = [["path", { d: "m10.852 14.772-.383.923", key: "11vil6" }], ["path", { d: "m10.852 9.228-.383-.923", key: "1fjppe" }], ["path", { d: "m13.148 14.772.382.924", key: "je3va1" }], ["path", { d: "m13.531 8.305-.383.923", key: "18epck" }], ["path", { d: "m14.772 10.852.923-.383", key: "k9m8cz" }], ["path", { d: "m14.772 13.148.923.383", key: "1xvhww" }], ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771", key: "jcbbz1" }], ["path", { d: "M17.998 5.125a4 4 0 0 1 2.525 5.771", key: "1kkn7e" }], ["path", { d: "M19.505 10.294a4 4 0 0 1-1.5 7.706", key: "18bmuc" }], ["path", { d: "M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516", key: "uozx0d" }], ["path", { d: "M4.5 10.291A4 4 0 0 0 6 18", key: "whdemb" }], ["path", { d: "M6.002 5.125a3 3 0 0 0 .4 1.375", key: "1kqy2g" }], ["path", { d: "m9.228 10.852-.923-.383", key: "1wtb30" }], ["path", { d: "m9.228 13.148-.923.383", key: "1a830x" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]], Do = e("brain-cog", Fo);
const Ro = [["path", { d: "M12 18V5", key: "adv99a" }], ["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" }], ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" }], ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }], ["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }], ["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "1gq6am" }], ["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }], ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }]], To = e("brain", Ro);
const Uo = [["path", { d: "M16 3v2.107", key: "gq8xun" }], ["path", { d: "M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9", key: "1l2pih" }], ["path", { d: "M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938", key: "jrnqjp" }], ["path", { d: "M3 15h5.253", key: "xqg7rb" }], ["path", { d: "M3 9h8.228", key: "1ppb70" }], ["path", { d: "M8 15v6", key: "1stoo3" }], ["path", { d: "M8 3v6", key: "vlvjmk" }]], Oo = e("brick-wall-fire", Uo);
const Go = [["path", { d: "M12 9v1.258", key: "iwpddn" }], ["path", { d: "M16 3v5.46", key: "d7ew98" }], ["path", { d: "M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75", key: "137t5x" }], ["path", { d: "M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z", key: "16j3tf" }], ["path", { d: "M3 15h7", key: "1qldh6" }], ["path", { d: "M3 9h12.142", key: "1yjd6m" }], ["path", { d: "M8 15v6", key: "1stoo3" }], ["path", { d: "M8 3v6", key: "vlvjmk" }]], Zo = e("brick-wall-shield", Go);
const Wo = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M12 9v6", key: "199k2o" }], ["path", { d: "M16 15v6", key: "8rj2es" }], ["path", { d: "M16 3v6", key: "1j6rpj" }], ["path", { d: "M3 15h18", key: "5xshup" }], ["path", { d: "M3 9h18", key: "1pudct" }], ["path", { d: "M8 15v6", key: "1stoo3" }], ["path", { d: "M8 3v6", key: "vlvjmk" }]], Eo = e("brick-wall", Wo);
const Xo = [["path", { d: "M12 12h.01", key: "1mp3jc" }], ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2", key: "1ksdt3" }], ["path", { d: "M22 13a18.15 18.15 0 0 1-20 0", key: "12hx5q" }], ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]], Ko = e("briefcase-business", Xo);
const Qo = [["path", { d: "M10 20v2", key: "1n8e1g" }], ["path", { d: "M14 20v2", key: "1lq872" }], ["path", { d: "M18 20v2", key: "10uadw" }], ["path", { d: "M21 20H3", key: "kdqkdp" }], ["path", { d: "M6 20v2", key: "a9bc87" }], ["path", { d: "M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12", key: "17n9tx" }], ["rect", { x: "4", y: "6", width: "16", height: "10", rx: "2", key: "1097i5" }]], Jo = e("briefcase-conveyor-belt", Qo);
const Yo = [["path", { d: "M12 11v4", key: "a6ujw6" }], ["path", { d: "M14 13h-4", key: "1pl8zg" }], ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2", key: "1ksdt3" }], ["path", { d: "M18 6v14", key: "1mu4gy" }], ["path", { d: "M6 6v14", key: "1s15cj" }], ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]], ed = e("briefcase-medical", Yo);
const ad = [["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }], ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]], cd = e("briefcase", ad);
const td = [["rect", { x: "8", y: "8", width: "8", height: "8", rx: "2", key: "yj20xf" }], ["path", { d: "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2", key: "1ltk23" }], ["path", { d: "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2", key: "1q24h9" }]], od = e("bring-to-front", td);
const dd = [["path", { d: "m16 22-1-4", key: "1ow2iv" }], ["path", { d: "M19 14a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1", key: "11gii7" }], ["path", { d: "M19 14H5l-1.973 6.767A1 1 0 0 0 4 22h16a1 1 0 0 0 .973-1.233z", key: "bju7h4" }], ["path", { d: "m8 22 1-4", key: "s3unb" }]], nd = e("brush-cleaning", dd);
const hd = [["path", { d: "m11 10 3 3", key: "fzmg1i" }], ["path", { d: "M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z", key: "p4q2r7" }], ["path", { d: "M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031", key: "wy6l02" }]], sd = e("brush", hd);
const id = [["path", { d: "M7.001 15.085A1.5 1.5 0 0 1 9 16.5", key: "y44lvh" }], ["circle", { cx: "18.5", cy: "8.5", r: "3.5", key: "1wadoa" }], ["circle", { cx: "7.5", cy: "16.5", r: "5.5", key: "6mdt3g" }], ["circle", { cx: "7.5", cy: "4.5", r: "2.5", key: "637s54" }]], yd = e("bubbles", id);
const rd = [["path", { d: "M12 20v-8", key: "i3yub9" }], ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }], ["path", { d: "M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2", key: "vl8zik" }], ["path", { d: "M18 12.34V11a4 4 0 0 0-4-4h-1.3", key: "sz915m" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M21 5a4 4 0 0 1-3.55 3.97", key: "5cxbf6" }], ["path", { d: "M22 13h-3.34", key: "1y15gv" }], ["path", { d: "M3 21a4 4 0 0 1 3.81-4", key: "1fjd4g" }], ["path", { d: "M6 13H2", key: "82j7cp" }], ["path", { d: "M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13", key: "1njkjs" }]], kd = e("bug-off", rd);
const pd = [["path", { d: "M10 19.655A6 6 0 0 1 6 14v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 3.97", key: "1gnv52" }], ["path", { d: "M14 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z", key: "1weqy9" }], ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }], ["path", { d: "M21 5a4 4 0 0 1-3.55 3.97", key: "5cxbf6" }], ["path", { d: "M3 21a4 4 0 0 1 3.81-4", key: "1fjd4g" }], ["path", { d: "M3 5a4 4 0 0 0 3.55 3.97", key: "1d7oge" }], ["path", { d: "M6 13H2", key: "82j7cp" }], ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }], ["path", { d: "M9 7.13V6a3 3 0 1 1 6 0v1.13", key: "1vgav8" }]], ld = e("bug-play", pd);
const ud = [["path", { d: "M12 20v-9", key: "1qisl0" }], ["path", { d: "M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z", key: "uouzyp" }], ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }], ["path", { d: "M21 21a4 4 0 0 0-3.81-4", key: "1b0z45" }], ["path", { d: "M21 5a4 4 0 0 1-3.55 3.97", key: "5cxbf6" }], ["path", { d: "M22 13h-4", key: "1jl80f" }], ["path", { d: "M3 21a4 4 0 0 1 3.81-4", key: "1fjd4g" }], ["path", { d: "M3 5a4 4 0 0 0 3.55 3.97", key: "1d7oge" }], ["path", { d: "M6 13H2", key: "82j7cp" }], ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }], ["path", { d: "M9 7.13V6a3 3 0 1 1 6 0v1.13", key: "1vgav8" }]], Md = e("bug", ud);
const vd = [["path", { d: "M10 12h4", key: "a56b0p" }], ["path", { d: "M10 8h4", key: "1sr2af" }], ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }], ["path", { d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2", key: "secmi2" }], ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }]], md = e("building-2", vd);
const _d = [["path", { d: "M12 10h.01", key: "1nrarc" }], ["path", { d: "M12 14h.01", key: "1etili" }], ["path", { d: "M12 6h.01", key: "1vi96p" }], ["path", { d: "M16 10h.01", key: "1m94wz" }], ["path", { d: "M16 14h.01", key: "1gbofw" }], ["path", { d: "M16 6h.01", key: "1x0f13" }], ["path", { d: "M8 10h.01", key: "19clt8" }], ["path", { d: "M8 14h.01", key: "6423bh" }], ["path", { d: "M8 6h.01", key: "1dz90k" }], ["path", { d: "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3", key: "cabbwy" }], ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2", key: "1uxh74" }]], gd = e("building", _d);
const xd = [["path", { d: "M4 6 2 7", key: "1mqr15" }], ["path", { d: "M10 6h4", key: "1itunk" }], ["path", { d: "m22 7-2-1", key: "1umjhc" }], ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2", key: "1wxw4b" }], ["path", { d: "M4 11h16", key: "mpoxn0" }], ["path", { d: "M8 15h.01", key: "a7atzg" }], ["path", { d: "M16 15h.01", key: "rnfrdf" }], ["path", { d: "M6 19v2", key: "1loha6" }], ["path", { d: "M18 21v-2", key: "sqyl04" }]], Ld = e("bus-front", xd);
const wd = [["path", { d: "M8 6v6", key: "18i7km" }], ["path", { d: "M15 6v6", key: "1sg6z9" }], ["path", { d: "M2 12h19.6", key: "de5uta" }], ["path", { d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3", key: "1wwztk" }], ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }], ["path", { d: "M9 18h5", key: "lrx6i" }], ["circle", { cx: "16", cy: "18", r: "2", key: "1v4tcr" }]], fd = e("bus", wd);
const Id = [["path", { d: "M10 3h.01", key: "lbucoy" }], ["path", { d: "M14 2h.01", key: "1k8aa1" }], ["path", { d: "m2 9 20-5", key: "1kz0j5" }], ["path", { d: "M12 12V6.5", key: "1vbrij" }], ["rect", { width: "16", height: "10", x: "4", y: "12", rx: "3", key: "if91er" }], ["path", { d: "M9 12v5", key: "3anwtq" }], ["path", { d: "M15 12v5", key: "5xh3zn" }], ["path", { d: "M4 17h16", key: "g4d7ey" }]], Cd = e("cable-car", Id);
const Nd = [["path", { d: "M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z", key: "trhst0" }], ["path", { d: "M17 21v-2", key: "ds4u3f" }], ["path", { d: "M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10", key: "1mo9zo" }], ["path", { d: "M21 21v-2", key: "eo0ou" }], ["path", { d: "M3 5V3", key: "1k5hjh" }], ["path", { d: "M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z", key: "1dd30t" }], ["path", { d: "M7 5V3", key: "1t1388" }]], bd = e("cable", Nd);
const $d = [["path", { d: "M16 13H3", key: "1wpj08" }], ["path", { d: "M16 17H3", key: "3lvfcd" }], ["path", { d: "m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6", key: "1gmhf7" }], ["circle", { cx: "9", cy: "7", r: "2", key: "1305pl" }]], qd = e("cake-slice", $d);
const zd = [["path", { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8", key: "1w3rig" }], ["path", { d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1", key: "n2jgmb" }], ["path", { d: "M2 21h20", key: "1nyx9w" }], ["path", { d: "M7 8v3", key: "1qtyvj" }], ["path", { d: "M12 8v3", key: "hwp4zt" }], ["path", { d: "M17 8v3", key: "1i6e5u" }], ["path", { d: "M7 4h.01", key: "1bh4kh" }], ["path", { d: "M12 4h.01", key: "1ujb9j" }], ["path", { d: "M17 4h.01", key: "1upcoc" }]], Sd = e("cake", zd);
const Ad = [["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }], ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }], ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }], ["path", { d: "M16 10h.01", key: "1m94wz" }], ["path", { d: "M12 10h.01", key: "1nrarc" }], ["path", { d: "M8 10h.01", key: "19clt8" }], ["path", { d: "M12 14h.01", key: "1etili" }], ["path", { d: "M8 14h.01", key: "6423bh" }], ["path", { d: "M12 18h.01", key: "mhygvu" }], ["path", { d: "M8 18h.01", key: "lrp35t" }]], Hd = e("calculator", Ad);
const jd = [["path", { d: "M11 14h1v4", key: "fy54vd" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "M8 2v4", key: "1cmpym" }], ["rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", key: "12vinp" }]], Vd = e("calendar-1", jd);
const Pd = [["path", { d: "m14 18 4 4 4-4", key: "1waygx" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["path", { d: "M18 14v8", key: "irew45" }], ["path", { d: "M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343", key: "bse4f3" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "M8 2v4", key: "1cmpym" }]], Bd = e("calendar-arrow-down", Pd);
const Fd = [["path", { d: "m14 18 4-4 4 4", key: "ftkppy" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["path", { d: "M18 22v-8", key: "su0gjh" }], ["path", { d: "M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9", key: "1exg90" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "M8 2v4", key: "1cmpym" }]], Dd = e("calendar-arrow-up", Fd);
const Rd = [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["path", { d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "bce9hv" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "m16 20 2 2 4-4", key: "13tcca" }]], Td = e("calendar-check-2", Rd);
const Ud = [["path", { d: "M16 14v2.2l1.6 1", key: "fo4ql5" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["path", { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5", key: "1osxxc" }], ["path", { d: "M3 10h5", key: "r794hk" }], ["path", { d: "M8 2v4", key: "1cmpym" }], ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }]], Od = e("calendar-clock", Ud);
const Gd = [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }]], Zd = e("calendar-check", Gd);
const Wd = [["path", { d: "m15.228 16.852-.923-.383", key: "npixar" }], ["path", { d: "m15.228 19.148-.923.383", key: "51cr3n" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["path", { d: "m16.47 14.305.382.923", key: "obybxd" }], ["path", { d: "m16.852 20.772-.383.924", key: "dpfhf9" }], ["path", { d: "m19.148 15.228.383-.923", key: "1reyyz" }], ["path", { d: "m19.53 21.696-.382-.924", key: "1goivc" }], ["path", { d: "m20.772 16.852.924-.383", key: "htqkph" }], ["path", { d: "m20.772 19.148.924.383", key: "9w9pjp" }], ["path", { d: "M21 10.592V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6", key: "1pvbig" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "M8 2v4", key: "1cmpym" }], ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }]], Ed = e("calendar-cog", Wd);
const Xd = [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "M8 14h.01", key: "6423bh" }], ["path", { d: "M12 14h.01", key: "1etili" }], ["path", { d: "M16 14h.01", key: "1gbofw" }], ["path", { d: "M8 18h.01", key: "lrp35t" }], ["path", { d: "M12 18h.01", key: "mhygvu" }], ["path", { d: "M16 18h.01", key: "kzsmim" }]], Kd = e("calendar-days", Xd);
const Qd = [["path", { d: "M3 20a2 2 0 0 0 2 2h10a2.4 2.4 0 0 0 1.706-.706l3.588-3.588A2.4 2.4 0 0 0 21 16V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z", key: "r586nh" }], ["path", { d: "M15 22v-5a1 1 0 0 1 1-1h5", key: "xl3app" }], ["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["path", { d: "M3 10h18", key: "8toen8" }]], Jd = e("calendar-fold", Qd);
const Yd = [["path", { d: "M12.127 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.125", key: "vxdnp4" }], ["path", { d: "M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z", key: "15cy7q" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "M8 2v4", key: "1cmpym" }]], en = e("calendar-heart", Yd);
const an = [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "M10 16h4", key: "17e571" }]], cn = e("calendar-minus-2", an);
const tn = [["path", { d: "M16 19h6", key: "xwg31i" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["path", { d: "M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5", key: "1scpom" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "M8 2v4", key: "1cmpym" }]], on = e("calendar-minus", tn);
const dn = [["path", { d: "M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18", key: "16swn3" }], ["path", { d: "M21 15.5V6a2 2 0 0 0-2-2H9.5", key: "yhw86o" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["path", { d: "M3 10h7", key: "1wap6i" }], ["path", { d: "M21 10h-5.5", key: "quycpq" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]], nn = e("calendar-off", dn);
const hn = [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "M10 16h4", key: "17e571" }], ["path", { d: "M12 14v4", key: "1thi36" }]], sn = e("calendar-plus-2", hn);
const yn = [["path", { d: "M16 19h6", key: "xwg31i" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["path", { d: "M19 16v6", key: "tddt3s" }], ["path", { d: "M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5", key: "1glfrc" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "M8 2v4", key: "1cmpym" }]], rn = e("calendar-plus", yn);
const kn = [["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M17 14h-6", key: "bkmgh3" }], ["path", { d: "M13 18H7", key: "bb0bb7" }], ["path", { d: "M7 14h.01", key: "1qa3f1" }], ["path", { d: "M17 18h.01", key: "1bdyru" }]], pn = e("calendar-range", kn);
const ln = [["path", { d: "M16 2v4", key: "4m81vk" }], ["path", { d: "M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25", key: "1jrsq6" }], ["path", { d: "m22 22-1.875-1.875", key: "13zax7" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "M8 2v4", key: "1cmpym" }], ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }]], un = e("calendar-search", ln);
const Mn = [["path", { d: "M11 10v4h4", key: "172dkj" }], ["path", { d: "m11 14 1.535-1.605a5 5 0 0 1 8 1.5", key: "vu0qm5" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["path", { d: "m21 18-1.535 1.605a5 5 0 0 1-8-1.5", key: "1qgeyt" }], ["path", { d: "M21 22v-4h-4", key: "hrummi" }], ["path", { d: "M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3", key: "mctw84" }], ["path", { d: "M3 10h4", key: "1el30a" }], ["path", { d: "M8 2v4", key: "1cmpym" }]], vn = e("calendar-sync", Mn);
const mn = [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "3spt84" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "m17 22 5-5", key: "1k6ppv" }], ["path", { d: "m17 17 5 5", key: "p7ous7" }]], _n = e("calendar-x-2", mn);
const gn = [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "m14 14-4 4", key: "rymu2i" }], ["path", { d: "m10 14 4 4", key: "3sz06r" }]], xn = e("calendar-x", gn);
const Ln = [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["path", { d: "M3 10h18", key: "8toen8" }]], wn = e("calendar", Ln);
const fn = [["path", { d: "M12 2v2", key: "tus03m" }], ["path", { d: "M15.726 21.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2", key: "j6srht" }], ["path", { d: "M18 2v2", key: "1kh14s" }], ["path", { d: "M2 13h2", key: "13gyu8" }], ["path", { d: "M8 8h14", key: "12jxz2" }], ["rect", { x: "8", y: "3", width: "14", height: "14", rx: "2", key: "nsru6w" }]], In = e("calendars", fn);
const Cn = [["path", { d: "M14.564 14.558a3 3 0 1 1-4.122-4.121", key: "1rnrzw" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175", key: "1x3arw" }], ["path", { d: "M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344", key: "1i84u0" }]], Nn = e("camera-off", Cn);
const bn = [["path", { d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z", key: "18u6gg" }], ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]], $n = e("camera", bn);
const qn = [["path", { d: "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z", key: "isaq8g" }], ["path", { d: "M17.75 7 15 2.1", key: "12x7e8" }], ["path", { d: "M10.9 4.8 13 9", key: "100a87" }], ["path", { d: "m7.9 9.7 2 4.4", key: "ntfhaj" }], ["path", { d: "M4.9 14.7 7 18.9", key: "1x43jy" }]], zn = e("candy-cane", qn);
const Sn = [["path", { d: "M10 10v7.9", key: "m8g9tt" }], ["path", { d: "M11.802 6.145a5 5 0 0 1 6.053 6.053", key: "dn87i3" }], ["path", { d: "M14 6.1v2.243", key: "1kzysn" }], ["path", { d: "m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965", key: "3sxy18" }], ["path", { d: "M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4", key: "gpb6xx" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4", key: "qexcha" }]], An = e("candy-off", Sn);
const Hn = [["path", { d: "M10 7v10.9", key: "1gynux" }], ["path", { d: "M14 6.1V17", key: "116kdf" }], ["path", { d: "M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4", key: "gpb6xx" }], ["path", { d: "M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07", key: "1tsln4" }], ["path", { d: "M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4", key: "qexcha" }]], jn = e("candy", Hn);
const Vn = [["path", { d: "M12 22v-4", key: "1utk9m" }], ["path", { d: "M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6", key: "1mezod" }]], Pn = e("cannabis", Vn);
const Bn = [["path", { d: "M12 22v-4c1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5", key: "1bqfb7" }], ["path", { d: "M13.988 8.327C13.902 6.054 13.365 3.82 12 2a9.3 9.3 0 0 0-1.445 2.9", key: "1p520n" }], ["path", { d: "M17.375 11.725C18.882 10.53 21 7.841 21 6c-2.324 0-5.08 1.296-6.662 2.684", key: "q2itvb" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M21.024 15.378A15 15 0 0 0 22 15c-.426-1.279-2.67-2.557-4.25-2.907", key: "j9amvs" }], ["path", { d: "M6.995 6.992C5.714 6.4 4.29 6 3 6c0 2 2.5 5 4 6-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3", key: "8gmd5g" }]], Fn = e("cannabis-off", Bn);
const Dn = [["path", { d: "M10.5 5H19a2 2 0 0 1 2 2v8.5", key: "jqtk4d" }], ["path", { d: "M17 11h-.5", key: "1961ue" }], ["path", { d: "M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2", key: "1keqsi" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M7 11h4", key: "1o1z6v" }], ["path", { d: "M7 15h2.5", key: "1ina1g" }]], Rn = e("captions-off", Dn);
const Tn = [["rect", { width: "18", height: "14", x: "3", y: "5", rx: "2", ry: "2", key: "12ruh7" }], ["path", { d: "M7 15h4M15 15h2M7 11h2M13 11h4", key: "1ueiar" }]], Un = e("captions", Tn);
const On = [["path", { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8", key: "1imjwt" }], ["path", { d: "M7 14h.01", key: "1qa3f1" }], ["path", { d: "M17 14h.01", key: "7oqj8z" }], ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2", key: "a7itu8" }], ["path", { d: "M5 18v2", key: "ppbyun" }], ["path", { d: "M19 18v2", key: "gy7782" }]], Gn = e("car-front", On);
const Zn = [["path", { d: "M10 2h4", key: "n1abiw" }], ["path", { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8", key: "1imjwt" }], ["path", { d: "M7 14h.01", key: "1qa3f1" }], ["path", { d: "M17 14h.01", key: "7oqj8z" }], ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2", key: "a7itu8" }], ["path", { d: "M5 18v2", key: "ppbyun" }], ["path", { d: "M19 18v2", key: "gy7782" }]], Wn = e("car-taxi-front", Zn);
const En = [["path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2", key: "5owen" }], ["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }], ["path", { d: "M9 17h6", key: "r8uit2" }], ["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }]], Xn = e("car", En);
const Kn = [["path", { d: "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2", key: "19jm3t" }], ["path", { d: "M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2", key: "13hakp" }], ["path", { d: "M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9", key: "1crci8" }], ["circle", { cx: "8", cy: "19", r: "2", key: "t8fc5s" }]], Qn = e("caravan", Kn);
const Jn = [["path", { d: "M12 14v4", key: "1thi36" }], ["path", { d: "M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z", key: "1o66bk" }], ["path", { d: "M8 14h8", key: "1fgep2" }], ["rect", { x: "8", y: "10", width: "8", height: "8", rx: "1", key: "1aonk6" }]], Yn = e("card-sim", Jn);
const eh = [["path", { d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46", key: "rfqxbe" }], ["path", { d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z", key: "6b25w4" }], ["path", { d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z", key: "fn65lo" }]], ah = e("carrot", eh);
const ch = [["path", { d: "M10 9v7", key: "ylp826" }], ["path", { d: "M14 6v10", key: "1jy4vg" }], ["circle", { cx: "17.5", cy: "12.5", r: "3.5", key: "1a9481" }], ["circle", { cx: "6.5", cy: "12.5", r: "3.5", key: "2jlv1r" }]], th = e("case-lower", ch);
const oh = [["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16", key: "d5nyq2" }], ["path", { d: "M22 9v7", key: "pvm9v3" }], ["path", { d: "M3.304 13h6.392", key: "1q3zxz" }], ["circle", { cx: "18.5", cy: "12.5", r: "3.5", key: "z97x68" }]], dh = e("case-sensitive", oh);
const nh = [["path", { d: "M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5", key: "nxs35" }], ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16", key: "d5nyq2" }], ["path", { d: "M3.304 13h6.392", key: "1q3zxz" }]], hh = e("case-upper", nh);
const sh = [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }], ["circle", { cx: "8", cy: "10", r: "2", key: "1xl4ub" }], ["path", { d: "M8 12h8", key: "1wcyev" }], ["circle", { cx: "16", cy: "10", r: "2", key: "r14t7q" }], ["path", { d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3", key: "l01ucn" }]], ih = e("cassette-tape", sh);
const yh = [["path", { d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6", key: "3zrzxg" }], ["path", { d: "M2 12a9 9 0 0 1 8 8", key: "g6cvee" }], ["path", { d: "M2 16a5 5 0 0 1 4 4", key: "1y1dii" }], ["line", { x1: "2", x2: "2.01", y1: "20", y2: "20", key: "xu2jvo" }]], rh = e("cast", yh);
const kh = [["path", { d: "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z", key: "x6xyqk" }], ["path", { d: "M8 14v.5", key: "1nzgdb" }], ["path", { d: "M16 14v.5", key: "1lajdz" }], ["path", { d: "M11.25 16.25h1.5L12 17l-.75-.75Z", key: "12kq1m" }]], ph = e("cat", kh);
const lh = [["path", { d: "M10 5V3", key: "1y54qe" }], ["path", { d: "M14 5V3", key: "m6isi" }], ["path", { d: "M15 21v-3a3 3 0 0 0-6 0v3", key: "lbp5hj" }], ["path", { d: "M18 3v8", key: "2ollhf" }], ["path", { d: "M18 5H6", key: "98imr9" }], ["path", { d: "M22 11H2", key: "1lmjae" }], ["path", { d: "M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9", key: "1rly83" }], ["path", { d: "M6 3v8", key: "csox7g" }]], uh = e("castle", lh);
const Mh = [["path", { d: "M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97", key: "ir91b5" }], ["path", { d: "M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z", key: "jlp8i1" }], ["path", { d: "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15", key: "19bib8" }], ["path", { d: "M2 21v-4", key: "l40lih" }], ["path", { d: "M7 9h.01", key: "19b3jx" }]], vh = e("cctv", Mh);
const mh = [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["path", { d: "M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z", key: "q0gr47" }]], _h = e("chart-area", mh);
const gh = [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["rect", { x: "7", y: "13", width: "9", height: "4", rx: "1", key: "1iip1u" }], ["rect", { x: "7", y: "5", width: "12", height: "4", rx: "1", key: "1anskk" }]], xh = e("chart-bar-big", gh);
const Lh = [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["path", { d: "M7 11h8", key: "1feolt" }], ["path", { d: "M7 16h3", key: "ur6vzw" }], ["path", { d: "M7 6h12", key: "sz5b0d" }]], wh = e("chart-bar-decreasing", Lh);
const fh = [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["path", { d: "M7 11h8", key: "1feolt" }], ["path", { d: "M7 16h12", key: "wsnu98" }], ["path", { d: "M7 6h3", key: "w9rmul" }]], Ih = e("chart-bar-increasing", fh);
const Ch = [["path", { d: "M11 13v4", key: "vyy2rb" }], ["path", { d: "M15 5v4", key: "1gx88a" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["rect", { x: "7", y: "13", width: "9", height: "4", rx: "1", key: "1iip1u" }], ["rect", { x: "7", y: "5", width: "12", height: "4", rx: "1", key: "1anskk" }]], Nh = e("chart-bar-stacked", Ch);
const bh = [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["path", { d: "M7 16h8", key: "srdodz" }], ["path", { d: "M7 11h12", key: "127s9w" }], ["path", { d: "M7 6h3", key: "w9rmul" }]], $h = e("chart-bar", bh);
const qh = [["path", { d: "M9 5v4", key: "14uxtq" }], ["rect", { width: "4", height: "6", x: "7", y: "9", rx: "1", key: "f4fvz0" }], ["path", { d: "M9 15v2", key: "r5rk32" }], ["path", { d: "M17 3v2", key: "1l2re6" }], ["rect", { width: "4", height: "8", x: "15", y: "5", rx: "1", key: "z38je5" }], ["path", { d: "M17 13v3", key: "5l0wba" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }]], zh = e("chart-candlestick", qh);
const Sh = [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["rect", { x: "15", y: "5", width: "4", height: "12", rx: "1", key: "q8uenq" }], ["rect", { x: "7", y: "8", width: "4", height: "9", rx: "1", key: "sr5ea" }]], Ah = e("chart-column-big", Sh);
const Hh = [["path", { d: "M13 17V9", key: "1fwyjl" }], ["path", { d: "M18 17v-3", key: "1sqioe" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["path", { d: "M8 17V5", key: "1wzmnc" }]], jh = e("chart-column-decreasing", Hh);
const Vh = [["path", { d: "M13 17V9", key: "1fwyjl" }], ["path", { d: "M18 17V5", key: "sfb6ij" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["path", { d: "M8 17v-3", key: "17ska0" }]], Ph = e("chart-column-increasing", Vh);
const Bh = [["path", { d: "M11 13H7", key: "t0o9gq" }], ["path", { d: "M19 9h-4", key: "rera1j" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["rect", { x: "15", y: "5", width: "4", height: "12", rx: "1", key: "q8uenq" }], ["rect", { x: "7", y: "8", width: "4", height: "9", rx: "1", key: "sr5ea" }]], Fh = e("chart-column-stacked", Bh);
const Dh = [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["path", { d: "M18 17V9", key: "2bz60n" }], ["path", { d: "M13 17V5", key: "1frdt8" }], ["path", { d: "M8 17v-3", key: "17ska0" }]], Rh = e("chart-column", Dh);
const Th = [["path", { d: "M10 6h8", key: "zvc2xc" }], ["path", { d: "M12 16h6", key: "yi5mkt" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["path", { d: "M8 11h7", key: "wz2hg0" }]], Uh = e("chart-gantt", Th);
const Oh = [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]], Gh = e("chart-line", Oh);
const Zh = [["path", { d: "m13.11 7.664 1.78 2.672", key: "go2gg9" }], ["path", { d: "m14.162 12.788-3.324 1.424", key: "11x848" }], ["path", { d: "m20 4-6.06 1.515", key: "1wxxh7" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["circle", { cx: "12", cy: "6", r: "2", key: "1jj5th" }], ["circle", { cx: "16", cy: "12", r: "2", key: "4ma0v8" }], ["circle", { cx: "9", cy: "15", r: "2", key: "lf2ghp" }]], Wh = e("chart-network", Zh);
const Eh = [["path", { d: "M5 21V3", key: "clc1r8" }], ["path", { d: "M12 21V9", key: "uvy0l4" }], ["path", { d: "M19 21v-6", key: "tkawy9" }]], Xh = e("chart-no-axes-column-decreasing", Eh);
const Kh = [["path", { d: "M5 21v-6", key: "1hz6c0" }], ["path", { d: "M12 21V9", key: "uvy0l4" }], ["path", { d: "M19 21V3", key: "11j9sm" }]], Qh = e("chart-no-axes-column-increasing", Kh);
const Jh = [["path", { d: "M5 21v-6", key: "1hz6c0" }], ["path", { d: "M12 21V3", key: "1lcnhd" }], ["path", { d: "M19 21V9", key: "unv183" }]], Yh = e("chart-no-axes-column", Jh);
const es = [["path", { d: "M12 16v5", key: "zza2cw" }], ["path", { d: "M16 14v7", key: "1g90b9" }], ["path", { d: "M20 10v11", key: "1iqoj0" }], ["path", { d: "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15", key: "1fw8x9" }], ["path", { d: "M4 18v3", key: "1yp0dc" }], ["path", { d: "M8 14v7", key: "n3cwzv" }]], as = e("chart-no-axes-combined", es);
const cs = [["path", { d: "M6 5h12", key: "fvfigv" }], ["path", { d: "M4 12h10", key: "oujl3d" }], ["path", { d: "M12 19h8", key: "baeox8" }]], ts = e("chart-no-axes-gantt", cs);
const os = [["path", { d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z", key: "pzmjnu" }], ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }]], ds = e("chart-pie", os);
const ns = [["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }], ["circle", { cx: "18.5", cy: "5.5", r: ".5", fill: "currentColor", key: "lysivs" }], ["circle", { cx: "11.5", cy: "11.5", r: ".5", fill: "currentColor", key: "byv1b8" }], ["circle", { cx: "7.5", cy: "16.5", r: ".5", fill: "currentColor", key: "nkw3mc" }], ["circle", { cx: "17.5", cy: "14.5", r: ".5", fill: "currentColor", key: "1gjh6j" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }]], hs = e("chart-scatter", ns);
const ss = [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["path", { d: "M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7", key: "lw07rv" }]], is = e("chart-spline", ss);
const ys = [["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }], ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]], rs = e("check-check", ys);
const ks = [["path", { d: "M20 4L9 15", key: "1qkx8z" }], ["path", { d: "M21 19L3 19", key: "100sma" }], ["path", { d: "M9 15L4 10", key: "9zxff7" }]], ps = e("check-line", ks);
const ls = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], us = e("check", ls);
const Ms = [["path", { d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z", key: "1qvrer" }], ["path", { d: "M6 17h12", key: "1jwigz" }]], vs = e("chef-hat", Ms);
const ms = [["path", { d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z", key: "cvxqlc" }], ["path", { d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z", key: "1ostrc" }], ["path", { d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12", key: "hqx58h" }], ["path", { d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z", key: "eykp1o" }]], _s = e("cherry", ms);
const gs = [["path", { d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z", key: "b89hwq" }], ["path", { d: "M15 18c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2 9.5 4.462 6 8.77 6 13.077 6 15.539 7.5 17.385 9 18", key: "8jdkhx" }], ["path", { d: "m16 7-2.5 2.5", key: "1jq90w" }], ["path", { d: "M9 2h6", key: "1jrp98" }]], xs = e("chess-bishop", gs);
const Ls = [["path", { d: "M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z", key: "mqzwx6" }], ["path", { d: "m6.7 18-1-1C4.35 15.682 3 14.09 3 12a5 5 0 0 1 4.95-5c1.584 0 2.7.455 4.05 1.818C13.35 7.455 14.466 7 16.05 7A5 5 0 0 1 21 12c0 2.082-1.359 3.673-2.7 5l-1 1", key: "1gdt1g" }], ["path", { d: "M10 4h4", key: "1xpv9s" }], ["path", { d: "M12 2v6.818", key: "b17a49" }]], ws = e("chess-king", Ls);
const fs = [["path", { d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z", key: "b89hwq" }], ["path", { d: "M16.5 18c1-2 2.5-5 2.5-9a7 7 0 0 0-7-7H6.635a1 1 0 0 0-.768 1.64L7 5l-2.32 5.802a2 2 0 0 0 .95 2.526l2.87 1.456", key: "axbnlq" }], ["path", { d: "m15 5 1.425-1.425", key: "15xz8w" }], ["path", { d: "m17 8 1.53-1.53", key: "15zhqh" }], ["path", { d: "M9.713 12.185 7 18", key: "1ocm0l" }]], Is = e("chess-knight", fs);
const Cs = [["path", { d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z", key: "b89hwq" }], ["path", { d: "m14.5 10 1.5 8", key: "cim3qy" }], ["path", { d: "M7 10h10", key: "1101jm" }], ["path", { d: "m8 18 1.5-8", key: "ja3yjd" }], ["circle", { cx: "12", cy: "6", r: "4", key: "1frrej" }]], Ns = e("chess-pawn", Cs);
const bs = [["path", { d: "M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z", key: "mqzwx6" }], ["path", { d: "m12.474 5.943 1.567 5.34a1 1 0 0 0 1.75.328l2.616-3.402", key: "1js4gl" }], ["path", { d: "m20 9-3 9", key: "r75r3f" }], ["path", { d: "m5.594 8.209 2.615 3.403a1 1 0 0 0 1.75-.329l1.567-5.34", key: "1joj19" }], ["path", { d: "M7 18 4 9", key: "1mfzj8" }], ["circle", { cx: "12", cy: "4", r: "2", key: "muu5ef" }], ["circle", { cx: "20", cy: "7", r: "2", key: "9w7p1x" }], ["circle", { cx: "4", cy: "7", r: "2", key: "1d9wy8" }]], $s = e("chess-queen", bs);
const qs = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], zs = e("chevron-down", qs);
const Ss = [["path", { d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z", key: "b89hwq" }], ["path", { d: "M10 2v2", key: "7u0qdc" }], ["path", { d: "M14 2v2", key: "6buw04" }], ["path", { d: "m17 18-1-9", key: "10nd7q" }], ["path", { d: "M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2", key: "uxf4yx" }], ["path", { d: "M6 4h12", key: "1x2ag7" }], ["path", { d: "m7 18 1-9", key: "1si9vq" }]], As = e("chess-rook", Ss);
const Hs = [["path", { d: "m17 18-6-6 6-6", key: "1yerx2" }], ["path", { d: "M7 6v12", key: "1p53r6" }]], js = e("chevron-first", Hs);
const Vs = [["path", { d: "m7 18 6-6-6-6", key: "lwmzdw" }], ["path", { d: "M17 6v12", key: "1o0aio" }]], Ps = e("chevron-last", Vs);
const Bs = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Fs = e("chevron-left", Bs);
const Ds = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Rs = e("chevron-right", Ds);
const Ts = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Us = e("chevron-up", Ts);
const Os = [["path", { d: "m7 20 5-5 5 5", key: "13a0gw" }], ["path", { d: "m7 4 5 5 5-5", key: "1kwcof" }]], Gs = e("chevrons-down-up", Os);
const Zs = [["path", { d: "m7 6 5 5 5-5", key: "1lc07p" }], ["path", { d: "m7 13 5 5 5-5", key: "1d48rs" }]], Ws = e("chevrons-down", Zs);
const Es = [["path", { d: "M12 12h.01", key: "1mp3jc" }], ["path", { d: "M16 12h.01", key: "1l6xoz" }], ["path", { d: "m17 7 5 5-5 5", key: "1xlxn0" }], ["path", { d: "m7 7-5 5 5 5", key: "19njba" }], ["path", { d: "M8 12h.01", key: "czm47f" }]], Xs = e("chevrons-left-right-ellipsis", Es);
const Ks = [["path", { d: "m9 7-5 5 5 5", key: "j5w590" }], ["path", { d: "m15 7 5 5-5 5", key: "1bl6da" }]], Qs = e("chevrons-left-right", Ks);
const Js = [["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }], ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]], Ys = e("chevrons-left", Js);
const ei = [["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }], ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]], ai = e("chevrons-right", ei);
const ci = [["path", { d: "m20 17-5-5 5-5", key: "30x0n2" }], ["path", { d: "m4 17 5-5-5-5", key: "16spf4" }]], ti = e("chevrons-right-left", ci);
const oi = [["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }], ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]], di = e("chevrons-up-down", oi);
const ni = [["path", { d: "m17 11-5-5-5 5", key: "e8nh98" }], ["path", { d: "m17 18-5-5-5 5", key: "2avn1x" }]], hi = e("chevrons-up", ni);
const si = [["path", { d: "M10.88 21.94 15.46 14", key: "xkve6t" }], ["path", { d: "M21.17 8H12", key: "19dcdn" }], ["path", { d: "M3.95 6.06 8.54 14", key: "g8jz9m" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }]], ii = e("chromium", si);
const yi = [["path", { d: "M10 9h4", key: "u4k05v" }], ["path", { d: "M12 7v5", key: "ma6bk" }], ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }], ["path", { d: "m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9", key: "flvdwo" }], ["path", { d: "M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14", key: "a5i0n2" }]], ri = e("church", yi);
const ki = [["path", { d: "M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13", key: "1gdiyg" }], ["path", { d: "M18 8c0-2.5-2-2.5-2-5", key: "1il607" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866", key: "166zjj" }], ["path", { d: "M22 8c0-2.5-2-2.5-2-5", key: "1gah44" }], ["path", { d: "M7 12v4", key: "jqww69" }]], pi = e("cigarette-off", ki);
const li = [["path", { d: "M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14", key: "1mb5g1" }], ["path", { d: "M18 8c0-2.5-2-2.5-2-5", key: "1il607" }], ["path", { d: "M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1", key: "1yl5r7" }], ["path", { d: "M22 8c0-2.5-2-2.5-2-5", key: "1gah44" }], ["path", { d: "M7 12v4", key: "jqww69" }]], ui = e("cigarette", li);
const Mi = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]], vi = e("circle-alert", Mi);
const mi = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 8v8", key: "napkw2" }], ["path", { d: "m8 12 4 4 4-4", key: "k98ssh" }]], _i = e("circle-arrow-down", mi);
const gi = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m12 8-4 4 4 4", key: "15vm53" }], ["path", { d: "M16 12H8", key: "1fr5h0" }]], xi = e("circle-arrow-left", gi);
const Li = [["path", { d: "M2 12a10 10 0 1 1 10 10", key: "1yn6ov" }], ["path", { d: "m2 22 10-10", key: "28ilpk" }], ["path", { d: "M8 22H2v-6", key: "sulq54" }]], wi = e("circle-arrow-out-down-left", Li);
const fi = [["path", { d: "M12 22a10 10 0 1 1 10-10", key: "130bv5" }], ["path", { d: "M22 22 12 12", key: "131aw7" }], ["path", { d: "M22 16v6h-6", key: "1gvm70" }]], Ii = e("circle-arrow-out-down-right", fi);
const Ci = [["path", { d: "M2 8V2h6", key: "hiwtdz" }], ["path", { d: "m2 2 10 10", key: "1oh8rs" }], ["path", { d: "M12 2A10 10 0 1 1 2 12", key: "rrk4fa" }]], Ni = e("circle-arrow-out-up-left", Ci);
const bi = [["path", { d: "M22 12A10 10 0 1 1 12 2", key: "1fm58d" }], ["path", { d: "M22 2 12 12", key: "yg2myt" }], ["path", { d: "M16 2h6v6", key: "zan5cs" }]], $i = e("circle-arrow-out-up-right", bi);
const qi = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m12 16 4-4-4-4", key: "1i9zcv" }], ["path", { d: "M8 12h8", key: "1wcyev" }]], zi = e("circle-arrow-right", qi);
const Si = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m16 12-4-4-4 4", key: "177agl" }], ["path", { d: "M12 16V8", key: "1sbj14" }]], Ai = e("circle-arrow-up", Si);
const Hi = [["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]], ji = e("circle-check-big", Hi);
const Vi = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]], Pi = e("circle-check", Vi);
const Bi = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m16 10-4 4-4-4", key: "894hmk" }]], Fi = e("circle-chevron-down", Bi);
const Di = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m14 16-4-4 4-4", key: "ojs7w8" }]], Ri = e("circle-chevron-left", Di);
const Ti = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m10 8 4 4-4 4", key: "1wy4r4" }]], Ui = e("circle-chevron-right", Ti);
const Oi = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m8 14 4-4 4 4", key: "fy2ptz" }]], Gi = e("circle-chevron-up", Oi);
const Zi = [["path", { d: "M10.1 2.182a10 10 0 0 1 3.8 0", key: "5ilxe3" }], ["path", { d: "M13.9 21.818a10 10 0 0 1-3.8 0", key: "11zvb9" }], ["path", { d: "M17.609 3.721a10 10 0 0 1 2.69 2.7", key: "1iw5b2" }], ["path", { d: "M2.182 13.9a10 10 0 0 1 0-3.8", key: "c0bmvh" }], ["path", { d: "M20.279 17.609a10 10 0 0 1-2.7 2.69", key: "1ruxm7" }], ["path", { d: "M21.818 10.1a10 10 0 0 1 0 3.8", key: "qkgqxc" }], ["path", { d: "M3.721 6.391a10 10 0 0 1 2.7-2.69", key: "1mcia2" }], ["path", { d: "M6.391 20.279a10 10 0 0 1-2.69-2.7", key: "1fvljs" }]], Wi = e("circle-dashed", Zi);
const Ei = [["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }], ["line", { x1: "12", x2: "12", y1: "16", y2: "16", key: "aqc6ln" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "8", key: "1mkcni" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Xi = e("circle-divide", Ei);
const Ki = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }], ["path", { d: "M12 18V6", key: "zqpxq5" }]], Qi = e("circle-dollar-sign", Ki);
const Ji = [["path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0", key: "1qdqn0" }], ["path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7", key: "1bq7p6" }], ["path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8", key: "1rlaqf" }], ["path", { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69", key: "1xk03u" }], ["path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0", key: "l7re25" }], ["path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7", key: "1v18p6" }], ["path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8", key: "xdo6bj" }], ["path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69", key: "1jjmaz" }], ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]], Yi = e("circle-dot-dashed", Ji);
const ey = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]], ay = e("circle-dot", ey);
const cy = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M17 12h.01", key: "1m0b6t" }], ["path", { d: "M12 12h.01", key: "1mp3jc" }], ["path", { d: "M7 12h.01", key: "eqddd0" }]], ty = e("circle-ellipsis", cy);
const oy = [["path", { d: "M7 10h10", key: "1101jm" }], ["path", { d: "M7 14h10", key: "1mhdw3" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], dy = e("circle-equal", oy);
const ny = [["path", { d: "M12 2a10 10 0 0 1 7.38 16.75", key: "175t95" }], ["path", { d: "m16 12-4-4-4 4", key: "177agl" }], ["path", { d: "M12 16V8", key: "1sbj14" }], ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3", key: "1vce0s" }], ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4", key: "o3fkw4" }], ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857", key: "1szpfk" }], ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38", key: "9yhvd4" }]], hy = e("circle-fading-arrow-up", ny);
const sy = [["path", { d: "M12 2a10 10 0 0 1 7.38 16.75", key: "175t95" }], ["path", { d: "M12 8v8", key: "napkw2" }], ["path", { d: "M16 12H8", key: "1fr5h0" }], ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3", key: "1vce0s" }], ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4", key: "o3fkw4" }], ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857", key: "1szpfk" }], ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38", key: "9yhvd4" }]], iy = e("circle-fading-plus", sy);
const yy = [["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7", key: "1e0p6d" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }], ["path", { d: "M13.4 10.6 19 5", key: "1kr7tw" }]], ry = e("circle-gauge", yy);
const ky = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M8 12h8", key: "1wcyev" }]], py = e("circle-minus", ky);
const ly = [["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65", key: "1pfsoa" }], ["path", { d: "M19.08 19.08A10 10 0 1 1 4.92 4.92", key: "1ablyi" }]], uy = e("circle-off", ly);
const My = [["path", { d: "M12.656 7H13a3 3 0 0 1 2.984 3.307", key: "1sjx87" }], ["path", { d: "M13 13H9", key: "e2beee" }], ["path", { d: "M19.071 19.071A1 1 0 0 1 4.93 4.93", key: "1kb595" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M8.357 2.687a10 10 0 0 1 12.956 12.956", key: "5bsfdx" }], ["path", { d: "M9 17V9", key: "ojradj" }]], vy = e("circle-parking-off", My);
const my = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9", key: "1dfk2c" }]], _y = e("circle-parking", my);
const gy = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "10", x2: "10", y1: "15", y2: "9", key: "c1nkhi" }], ["line", { x1: "14", x2: "14", y1: "15", y2: "9", key: "h65svq" }]], xy = e("circle-pause", gy);
const Ly = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m15 9-6 6", key: "1uzhvr" }], ["path", { d: "M9 9h.01", key: "1q5me6" }], ["path", { d: "M15 15h.01", key: "lqbp3k" }]], wy = e("circle-percent", Ly);
const fy = [["circle", { cx: "12", cy: "19", r: "2", key: "13j0tp" }], ["circle", { cx: "12", cy: "5", r: "2", key: "f1ur92" }], ["circle", { cx: "16", cy: "12", r: "2", key: "4ma0v8" }], ["circle", { cx: "20", cy: "19", r: "2", key: "1obnsp" }], ["circle", { cx: "4", cy: "19", r: "2", key: "p3m9r0" }], ["circle", { cx: "8", cy: "12", r: "2", key: "1nvbw3" }]], Iy = e("circle-pile", fy);
const Cy = [["path", { d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z", key: "kmsa83" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Ny = e("circle-play", Cy);
const by = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M8 12h8", key: "1wcyev" }], ["path", { d: "M12 8v8", key: "napkw2" }]], $y = e("circle-plus", by);
const qy = [["path", { d: "M10 16V9.5a1 1 0 0 1 5 0", key: "1i1are" }], ["path", { d: "M8 12h4", key: "qz6y1c" }], ["path", { d: "M8 16h7", key: "sbedsn" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], zy = e("circle-pound-sterling", qy);
const Sy = [["path", { d: "M12 7v4", key: "xawao1" }], ["path", { d: "M7.998 9.003a5 5 0 1 0 8-.005", key: "1pek45" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Ay = e("circle-power", Sy);
const Hy = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }], ["path", { d: "M12 17h.01", key: "p32p05" }]], jy = e("circle-question-mark", Hy);
const Vy = [["path", { d: "M22 2 2 22", key: "y4kqgn" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Py = e("circle-slash-2", Vy);
const By = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "9", x2: "15", y1: "15", y2: "9", key: "1dfufj" }]], Fy = e("circle-slash", By);
const Dy = [["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }]], Ry = e("circle-small", Dy);
const Ty = [["path", { d: "M11.051 7.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z", key: "285bvi" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Uy = e("circle-star", Ty);
const Oy = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1", key: "1ssd4o" }]], Gy = e("circle-stop", Oy);
const Zy = [["path", { d: "M18 20a6 6 0 0 0-12 0", key: "1qehca" }], ["circle", { cx: "12", cy: "10", r: "4", key: "1h16sb" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Wy = e("circle-user-round", Zy);
const Ey = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }], ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662", key: "154egf" }]], Xy = e("circle-user", Ey);
const Ky = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m15 9-6 6", key: "1uzhvr" }], ["path", { d: "m9 9 6 6", key: "z0biqf" }]], Qy = e("circle-x", Ky);
const Jy = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Yy = e("circle", Jy);
const e4 = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M11 9h4a2 2 0 0 0 2-2V3", key: "1ve2rv" }], ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }], ["path", { d: "M7 21v-4a2 2 0 0 1 2-2h4", key: "1fwkro" }], ["circle", { cx: "15", cy: "15", r: "2", key: "3i40o0" }]], a4 = e("circuit-board", e4);
const c4 = [["path", { d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z", key: "4ite01" }], ["path", { d: "M19.65 15.66A8 8 0 0 1 8.35 4.34", key: "1gxipu" }], ["path", { d: "m14 10-5.5 5.5", key: "92pfem" }], ["path", { d: "M14 17.85V10H6.15", key: "xqmtsk" }]], t4 = e("citrus", c4);
const o4 = [["path", { d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z", key: "1tn4o7" }], ["path", { d: "m6.2 5.3 3.1 3.9", key: "iuk76l" }], ["path", { d: "m12.4 3.4 3.1 4", key: "6hsd6n" }], ["path", { d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z", key: "ltgou9" }]], d4 = e("clapperboard", o4);
const n4 = [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", key: "116196" }], ["path", { d: "m9 14 2 2 4-4", key: "df797q" }]], h4 = e("clipboard-check", n4);
const s4 = [["path", { d: "M16 14v2.2l1.6 1", key: "fo4ql5" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v.832", key: "1ujtp2" }], ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2", key: "qvpao1" }], ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }], ["rect", { x: "8", y: "2", width: "8", height: "4", rx: "1", key: "ublpy" }]], i4 = e("clipboard-clock", s4);
const y4 = [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }], ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2", key: "4jdomd" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v4", key: "3hqy98" }], ["path", { d: "M21 14H11", key: "1bme5i" }], ["path", { d: "m15 10-4 4 4 4", key: "5dvupr" }]], r4 = e("clipboard-copy", y4);
const k4 = [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", key: "116196" }], ["path", { d: "M12 11h4", key: "1jrz19" }], ["path", { d: "M12 16h4", key: "n85exb" }], ["path", { d: "M8 11h.01", key: "1dfujw" }], ["path", { d: "M8 16h.01", key: "18s6g9" }]], p4 = e("clipboard-list", k4);
const l4 = [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", key: "116196" }], ["path", { d: "M9 14h6", key: "159ibu" }]], u4 = e("clipboard-minus", l4);
const M4 = [["path", { d: "M11 14h10", key: "1w8e9d" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v1.344", key: "1e62lh" }], ["path", { d: "m17 18 4-4-4-4", key: "z2g111" }], ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113", key: "bjbb7m" }], ["rect", { x: "8", y: "2", width: "8", height: "4", rx: "1", key: "ublpy" }]], v4 = e("clipboard-paste", M4);
const m4 = [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", key: "1oijnt" }], ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5", key: "1but9f" }], ["path", { d: "M16 4h2a2 2 0 0 1 1.73 1", key: "1p8n7l" }], ["path", { d: "M8 18h1", key: "13wk12" }], ["path", { d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z", key: "2t3380" }]], _4 = e("clipboard-pen-line", m4);
const g4 = [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", key: "1oijnt" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5", key: "cereej" }], ["path", { d: "M4 13.5V6a2 2 0 0 1 2-2h2", key: "5ua5vh" }], ["path", { d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z", key: "1y4qbx" }]], x4 = e("clipboard-pen", g4);
const L4 = [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", key: "116196" }], ["path", { d: "M9 14h6", key: "159ibu" }], ["path", { d: "M12 17v-6", key: "1y8rbf" }]], w4 = e("clipboard-plus", L4);
const f4 = [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", key: "116196" }], ["path", { d: "M9 12v-1h6v1", key: "iehl6m" }], ["path", { d: "M11 17h2", key: "12w5me" }], ["path", { d: "M12 11v6", key: "1bwqyc" }]], I4 = e("clipboard-type", f4);
const C4 = [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", key: "116196" }], ["path", { d: "m15 11-6 6", key: "1toa9n" }], ["path", { d: "m9 11 6 6", key: "wlibny" }]], N4 = e("clipboard-x", C4);
const b4 = [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", key: "116196" }]], $4 = e("clipboard", b4);
const q4 = [["path", { d: "M12 6v6l2-4", key: "miptyd" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], z4 = e("clock-1", q4);
const S4 = [["path", { d: "M12 6v6l-4-2", key: "cedpoo" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], A4 = e("clock-10", S4);
const H4 = [["path", { d: "M12 6v6l-2-4", key: "ns39ag" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], j4 = e("clock-11", H4);
const V4 = [["path", { d: "M12 6v6", key: "1ipuwl" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], P4 = e("clock-12", V4);
const B4 = [["path", { d: "M12 6v6l4-2", key: "1r2kuh" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], F4 = e("clock-2", B4);
const D4 = [["path", { d: "M12 6v6h4", key: "135r8i" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], R4 = e("clock-3", D4);
const T4 = [["path", { d: "M12 6v6l4 2", key: "mmk7yg" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], U4 = e("clock-4", T4);
const O4 = [["path", { d: "M12 6v6l2 4", key: "1287s9" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], G4 = e("clock-5", O4);
const Z4 = [["path", { d: "M12 6v10", key: "wf7rdh" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], W4 = e("clock-6", Z4);
const E4 = [["path", { d: "M12 6v6l-2 4", key: "1095bu" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], X4 = e("clock-7", E4);
const K4 = [["path", { d: "M12 6v6l-4 2", key: "imc3wl" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Q4 = e("clock-8", K4);
const J4 = [["path", { d: "M12 6v6H8", key: "u39vzm" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Y4 = e("clock-9", J4);
const e5 = [["path", { d: "M12 6v6l4 2", key: "mmk7yg" }], ["path", { d: "M20 12v5", key: "12wsvk" }], ["path", { d: "M20 21h.01", key: "1p6o6n" }], ["path", { d: "M21.25 8.2A10 10 0 1 0 16 21.16", key: "17fp9f" }]], a5 = e("clock-alert", e5);
const c5 = [["path", { d: "M12 6v6l2 1", key: "19cm8n" }], ["path", { d: "M12.337 21.994a10 10 0 1 1 9.588-8.767", key: "28moa" }], ["path", { d: "m14 18 4 4 4-4", key: "1waygx" }], ["path", { d: "M18 14v8", key: "irew45" }]], t5 = e("clock-arrow-down", c5);
const o5 = [["path", { d: "M12 6v6l1.56.78", key: "14ed3g" }], ["path", { d: "M13.227 21.925a10 10 0 1 1 8.767-9.588", key: "jwkls1" }], ["path", { d: "m14 18 4-4 4 4", key: "ftkppy" }], ["path", { d: "M18 22v-8", key: "su0gjh" }]], d5 = e("clock-arrow-up", o5);
const n5 = [["path", { d: "M12 6v6l4 2", key: "mmk7yg" }], ["path", { d: "M22 12a10 10 0 1 0-11 9.95", key: "17dhok" }], ["path", { d: "m22 16-5.5 5.5L14 19", key: "1eibut" }]], h5 = e("clock-check", n5);
const s5 = [["path", { d: "M12 2a10 10 0 0 1 7.38 16.75", key: "175t95" }], ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }], ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3", key: "1vce0s" }], ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4", key: "o3fkw4" }], ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857", key: "1szpfk" }], ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38", key: "9yhvd4" }]], i5 = e("clock-fading", s5);
const y5 = [["path", { d: "M12 6v6l3.644 1.822", key: "1jmett" }], ["path", { d: "M16 19h6", key: "xwg31i" }], ["path", { d: "M19 16v6", key: "tddt3s" }], ["path", { d: "M21.92 13.267a10 10 0 1 0-8.653 8.653", key: "1u0osk" }]], r5 = e("clock-plus", y5);
const k5 = [["path", { d: "M12 6v6l4 2", key: "mmk7yg" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], p5 = e("clock", k5);
const l5 = [["path", { d: "M10 9.17a3 3 0 1 0 0 5.66", key: "h9wayk" }], ["path", { d: "M17 9.17a3 3 0 1 0 0 5.66", key: "1v6zke" }], ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2", key: "qneu4z" }]], u5 = e("closed-caption", l5);
const M5 = [["path", { d: "M12 12v4", key: "tww15h" }], ["path", { d: "M12 20h.01", key: "zekei9" }], ["path", { d: "M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708", key: "xsb5ju" }]], v5 = e("cloud-alert", M5);
const m5 = [["path", { d: "M21 15.251A4.5 4.5 0 0 0 17.5 8h-1.79A7 7 0 1 0 3 13.607", key: "xpoh9y" }], ["path", { d: "M7 11v4h4", key: "q9yh32" }], ["path", { d: "M8 19a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5 4.82 4.82 0 0 0-3.41 1.41L7 15", key: "1xm8iu" }]], _5 = e("cloud-backup", m5);
const g5 = [["path", { d: "m17 15-5.5 5.5L9 18", key: "15q87x" }], ["path", { d: "M5 17.743A7 7 0 1 1 15.71 10h1.79a4.5 4.5 0 0 1 1.5 8.742", key: "9ho6ki" }]], x5 = e("cloud-check", g5);
const L5 = [["path", { d: "m10.852 19.772-.383.924", key: "r7sl7d" }], ["path", { d: "m13.148 14.228.383-.923", key: "1d5zpm" }], ["path", { d: "M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923", key: "1ydik7" }], ["path", { d: "m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544", key: "1m1vsf" }], ["path", { d: "m14.772 15.852.923-.383", key: "660p6e" }], ["path", { d: "m14.772 18.148.923.383", key: "hrcpis" }], ["path", { d: "M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2", key: "j2q98n" }], ["path", { d: "m9.228 15.852-.923-.383", key: "1p9ong" }], ["path", { d: "m9.228 18.148-.923.383", key: "6558rz" }]], w5 = e("cloud-cog", L5);
const f5 = [["path", { d: "M12 13v8l-4-4", key: "1f5nwf" }], ["path", { d: "m12 21 4-4", key: "1lfcce" }], ["path", { d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284", key: "ui1hmy" }]], I5 = e("cloud-download", f5);
const C5 = [["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }], ["path", { d: "M8 19v1", key: "1dk2by" }], ["path", { d: "M8 14v1", key: "84yxot" }], ["path", { d: "M16 19v1", key: "v220m7" }], ["path", { d: "M16 14v1", key: "g12gj6" }], ["path", { d: "M12 21v1", key: "q8vafk" }], ["path", { d: "M12 16v1", key: "1mx6rx" }]], N5 = e("cloud-drizzle", C5);
const b5 = [["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }], ["path", { d: "M16 17H7", key: "pygtm1" }], ["path", { d: "M17 21H9", key: "1u2q02" }]], $5 = e("cloud-fog", b5);
const q5 = [["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }], ["path", { d: "M16 14v2", key: "a1is7l" }], ["path", { d: "M8 14v2", key: "1e9m6t" }], ["path", { d: "M16 20h.01", key: "xwek51" }], ["path", { d: "M8 20h.01", key: "1vjney" }], ["path", { d: "M12 16v2", key: "z66u1j" }], ["path", { d: "M12 22h.01", key: "1urd7a" }]], z5 = e("cloud-hail", q5);
const S5 = [["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973", key: "1cez44" }], ["path", { d: "m13 12-3 5h4l-3 5", key: "1t22er" }]], A5 = e("cloud-lightning", S5);
const H5 = [["path", { d: "M11 20v2", key: "174qtz" }], ["path", { d: "M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36", key: "zwnc1e" }], ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24", key: "1qmrp3" }], ["path", { d: "M7 19v2", key: "12npes" }]], j5 = e("cloud-moon-rain", H5);
const V5 = [["path", { d: "M13 16a3 3 0 0 1 0 6H7a5 5 0 1 1 4.9-6z", key: "ie2ih4" }], ["path", { d: "M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36", key: "zwnc1e" }]], P5 = e("cloud-moon", V5);
const B5 = [["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193", key: "yfwify" }], ["path", { d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07", key: "jlfiyv" }]], F5 = e("cloud-off", B5);
const D5 = [["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }], ["path", { d: "m9.2 22 3-7", key: "sb5f6j" }], ["path", { d: "m9 13-3 7", key: "500co5" }], ["path", { d: "m17 13-3 7", key: "8t2fiy" }]], R5 = e("cloud-rain-wind", D5);
const T5 = [["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }], ["path", { d: "M16 14v6", key: "1j4efv" }], ["path", { d: "M8 14v6", key: "17c4r9" }], ["path", { d: "M12 16v6", key: "c8a4gj" }]], U5 = e("cloud-rain", T5);
const O5 = [["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }], ["path", { d: "M8 15h.01", key: "a7atzg" }], ["path", { d: "M8 19h.01", key: "puxtts" }], ["path", { d: "M12 17h.01", key: "p32p05" }], ["path", { d: "M12 21h.01", key: "h35vbk" }], ["path", { d: "M16 15h.01", key: "rnfrdf" }], ["path", { d: "M16 19h.01", key: "1vcnzz" }]], G5 = e("cloud-snow", O5);
const Z5 = [["path", { d: "M12 2v2", key: "tus03m" }], ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }], ["path", { d: "M20 12h2", key: "1q8mjw" }], ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }], ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }], ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24", key: "1qmrp3" }], ["path", { d: "M11 20v2", key: "174qtz" }], ["path", { d: "M7 19v2", key: "12npes" }]], W5 = e("cloud-sun-rain", Z5);
const E5 = [["path", { d: "M12 2v2", key: "tus03m" }], ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }], ["path", { d: "M20 12h2", key: "1q8mjw" }], ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }], ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }], ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z", key: "s09mg5" }]], X5 = e("cloud-sun", E5);
const K5 = [["path", { d: "m17 18-1.535 1.605a5 5 0 0 1-8-1.5", key: "adpv5j" }], ["path", { d: "M17 22v-4h-4", key: "ex1ofj" }], ["path", { d: "M20.996 15.251A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607", key: "ziqt14" }], ["path", { d: "M7 10v4h4", key: "1j6gx1" }], ["path", { d: "m7 14 1.535-1.605a5 5 0 0 1 8 1.5", key: "19q5h7" }]], Q5 = e("cloud-sync", K5);
const J5 = [["path", { d: "M12 13v8", key: "1l5pq0" }], ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }], ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]], Y5 = e("cloud-upload", J5);
const er = [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]], ar = e("cloud", er);
const cr = [["path", { d: "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "gqqjvc" }], ["path", { d: "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5", key: "1p2s76" }]], tr = e("cloudy", cr);
const or = [["path", { d: "M16.17 7.83 2 22", key: "t58vo8" }], ["path", { d: "M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12", key: "17k36q" }], ["path", { d: "m7.83 7.83 8.34 8.34", key: "1d7sxk" }]], dr = e("clover", or);
const nr = [["path", { d: "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z", key: "27yuqz" }], ["path", { d: "M12 17.66L12 22", key: "ogfahf" }]], hr = e("club", nr);
const sr = [["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }], ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }], ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]], ir = e("code-xml", sr);
const yr = [["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }], ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }]], rr = e("code", yr);
const kr = [["polygon", { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2", key: "srzb37" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "15.5", key: "1t73f2" }], ["polyline", { points: "22 8.5 12 15.5 2 8.5", key: "ajlxae" }], ["polyline", { points: "2 15.5 12 8.5 22 15.5", key: "susrui" }], ["line", { x1: "12", x2: "12", y1: "2", y2: "8.5", key: "2cldga" }]], pr = e("codepen", kr);
const lr = [["path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z", key: "yt0hxn" }], ["polyline", { points: "7.5 4.21 12 6.81 16.5 4.21", key: "fabo96" }], ["polyline", { points: "7.5 19.79 7.5 14.6 3 12", key: "z377f1" }], ["polyline", { points: "21 12 16.5 14.6 16.5 19.79", key: "9nrev1" }], ["polyline", { points: "3.27 6.96 12 12.01 20.73 6.96", key: "1180pa" }], ["line", { x1: "12", x2: "12", y1: "22.08", y2: "12", key: "3z3uq6" }]], ur = e("codesandbox", lr);
const Mr = [["path", { d: "M10 2v2", key: "7u0qdc" }], ["path", { d: "M14 2v2", key: "6buw04" }], ["path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1", key: "pwadti" }], ["path", { d: "M6 2v2", key: "colzsn" }]], vr = e("coffee", Mr);
const mr = [["path", { d: "M11 10.27 7 3.34", key: "16pf9h" }], ["path", { d: "m11 13.73-4 6.93", key: "794ttg" }], ["path", { d: "M12 22v-2", key: "1osdcq" }], ["path", { d: "M12 2v2", key: "tus03m" }], ["path", { d: "M14 12h8", key: "4f43i9" }], ["path", { d: "m17 20.66-1-1.73", key: "eq3orb" }], ["path", { d: "m17 3.34-1 1.73", key: "2wel8s" }], ["path", { d: "M2 12h2", key: "1t8f8n" }], ["path", { d: "m20.66 17-1.73-1", key: "sg0v6f" }], ["path", { d: "m20.66 7-1.73 1", key: "1ow05n" }], ["path", { d: "m3.34 17 1.73-1", key: "nuk764" }], ["path", { d: "m3.34 7 1.73 1", key: "1ulond" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }], ["circle", { cx: "12", cy: "12", r: "8", key: "46899m" }]], _r = e("cog", mr);
const gr = [["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }], ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }], ["path", { d: "M7 6h1v4", key: "1obek4" }], ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }]], xr = e("coins", gr);
const Lr = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M12 3v18", key: "108xh3" }]], wr = e("columns-2", Lr);
const fr = [["path", { d: "M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5", key: "1g2yzs" }], ["path", { d: "m14.3 19.6 1-.4", key: "11sv9r" }], ["path", { d: "M15 3v7.5", key: "7lm50a" }], ["path", { d: "m15.2 16.9-.9-.3", key: "1t7mvx" }], ["path", { d: "m16.6 21.7.3-.9", key: "1j67ps" }], ["path", { d: "m16.8 15.3-.4-1", key: "1ei7r6" }], ["path", { d: "m19.1 15.2.3-.9", key: "18r7jp" }], ["path", { d: "m19.6 21.7-.4-1", key: "z2vh2" }], ["path", { d: "m20.7 16.8 1-.4", key: "19m87a" }], ["path", { d: "m21.7 19.4-.9-.3", key: "1qgwi9" }], ["path", { d: "M9 3v18", key: "fh3hqa" }], ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }]], Ir = e("columns-3-cog", fr);
const Cr = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M9 3v18", key: "fh3hqa" }], ["path", { d: "M15 3v18", key: "14nvp0" }]], Nr = e("columns-3", Cr);
const br = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M7.5 3v18", key: "w0wo6v" }], ["path", { d: "M12 3v18", key: "108xh3" }], ["path", { d: "M16.5 3v18", key: "10tjh1" }]], $r = e("columns-4", br);
const qr = [["path", { d: "M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1", key: "1l7d7l" }], ["path", { d: "M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1", key: "9955pe" }], ["path", { d: "m7 15 3 3", key: "4hkfgk" }], ["path", { d: "m7 21 3-3H5a2 2 0 0 1-2-2v-2", key: "1xljwe" }], ["rect", { x: "14", y: "14", width: "7", height: "7", rx: "1", key: "1cdgtw" }], ["rect", { x: "3", y: "3", width: "7", height: "7", rx: "1", key: "zi3rio" }]], zr = e("combine", qr);
const Sr = [["path", { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }]], Ar = e("command", Sr);
const Hr = [["path", { d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z", key: "9ktpf1" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], jr = e("compass", Hr);
const Vr = [["path", { d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z", key: "1uwlt4" }], ["path", { d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z", key: "10291m" }], ["path", { d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z", key: "1tqoq1" }], ["path", { d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z", key: "1x6lto" }]], Pr = e("component", Vr);
const Br = [["rect", { width: "14", height: "8", x: "5", y: "2", rx: "2", key: "wc9tft" }], ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }], ["path", { d: "M6 18h2", key: "rwmk9e" }], ["path", { d: "M12 18h6", key: "aqd8w3" }]], Fr = e("computer", Br);
const Dr = [["path", { d: "M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z", key: "1pvr1r" }], ["path", { d: "M20 16a8 8 0 1 0-16 0", key: "1pa543" }], ["path", { d: "M12 4v4", key: "1bq03y" }], ["path", { d: "M10 4h4", key: "1xpv9s" }]], Rr = e("concierge-bell", Dr);
const Tr = [["path", { d: "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98", key: "53pte7" }], ["ellipse", { cx: "12", cy: "19", rx: "9", ry: "3", key: "1ji25f" }]], Ur = e("cone", Tr);
const Or = [["rect", { x: "2", y: "6", width: "20", height: "8", rx: "1", key: "1estib" }], ["path", { d: "M17 14v7", key: "7m2elx" }], ["path", { d: "M7 14v7", key: "1cm7wv" }], ["path", { d: "M17 3v3", key: "1v4jwn" }], ["path", { d: "M7 3v3", key: "7o6guu" }], ["path", { d: "M10 14 2.3 6.3", key: "1023jk" }], ["path", { d: "m14 6 7.7 7.7", key: "1s8pl2" }], ["path", { d: "m8 6 8 8", key: "hl96qh" }]], Gr = e("construction", Or);
const Zr = [["path", { d: "M16 2v2", key: "scm5qe" }], ["path", { d: "M17.915 22a6 6 0 0 0-12 0", key: "suqz9p" }], ["path", { d: "M8 2v2", key: "pbkmx" }], ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }], ["rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", key: "12vinp" }]], Wr = e("contact-round", Zr);
const Er = [["path", { d: "M16 2v2", key: "scm5qe" }], ["path", { d: "M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2", key: "1waht3" }], ["path", { d: "M8 2v2", key: "pbkmx" }], ["circle", { cx: "12", cy: "11", r: "3", key: "itu57m" }], ["rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", key: "12vinp" }]], Xr = e("contact", Er);
const Kr = [["path", { d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z", key: "1t2lqe" }], ["path", { d: "M10 21.9V14L2.1 9.1", key: "o7czzq" }], ["path", { d: "m10 14 11.9-6.9", key: "zm5e20" }], ["path", { d: "M14 19.8v-8.1", key: "159ecu" }], ["path", { d: "M18 17.5V9.4", key: "11uown" }]], Qr = e("container", Kr);
const Jr = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 18a6 6 0 0 0 0-12v12z", key: "j4l70d" }]], Yr = e("contrast", Jr);
const ek = [["path", { d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5", key: "laymnq" }], ["path", { d: "M8.5 8.5v.01", key: "ue8clq" }], ["path", { d: "M16 15.5v.01", key: "14dtrp" }], ["path", { d: "M12 12v.01", key: "u5ubse" }], ["path", { d: "M11 17v.01", key: "1hyl5a" }], ["path", { d: "M7 14v.01", key: "uct60s" }]], ak = e("cookie", ek);
const ck = [["path", { d: "M2 12h20", key: "9i4pu4" }], ["path", { d: "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8", key: "u0tga0" }], ["path", { d: "m4 8 16-4", key: "16g0ng" }], ["path", { d: "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8", key: "12cejc" }]], tk = e("cooking-pot", ck);
const ok = [["path", { d: "m12 15 2 2 4-4", key: "2c609p" }], ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]], dk = e("copy-check", ok);
const nk = [["line", { x1: "12", x2: "18", y1: "15", y2: "15", key: "1nscbv" }], ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]], hk = e("copy-minus", nk);
const sk = [["line", { x1: "15", x2: "15", y1: "12", y2: "18", key: "1p7wdc" }], ["line", { x1: "12", x2: "18", y1: "15", y2: "15", key: "1nscbv" }], ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]], ik = e("copy-plus", sk);
const yk = [["line", { x1: "12", x2: "18", y1: "18", y2: "12", key: "ebkxgr" }], ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]], rk = e("copy-slash", yk);
const kk = [["line", { x1: "12", x2: "18", y1: "12", y2: "18", key: "1rg63v" }], ["line", { x1: "12", x2: "18", y1: "18", y2: "12", key: "ebkxgr" }], ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]], pk = e("copy-x", kk);
const lk = [["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]], uk = e("copy", lk);
const Mk = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M9.17 14.83a4 4 0 1 0 0-5.66", key: "1sveal" }]], vk = e("copyleft", Mk);
const mk = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M14.83 14.83a4 4 0 1 1 0-5.66", key: "1i56pz" }]], _k = e("copyright", mk);
const gk = [["path", { d: "M20 4v7a4 4 0 0 1-4 4H4", key: "6o5b7l" }], ["path", { d: "m9 10-5 5 5 5", key: "1kshq7" }]], xk = e("corner-down-left", gk);
const Lk = [["path", { d: "m15 10 5 5-5 5", key: "qqa56n" }], ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12", key: "z08zvw" }]], wk = e("corner-down-right", Lk);
const fk = [["path", { d: "m14 15-5 5-5-5", key: "1eia93" }], ["path", { d: "M20 4h-7a4 4 0 0 0-4 4v12", key: "nbpdq2" }]], Ik = e("corner-left-down", fk);
const Ck = [["path", { d: "M14 9 9 4 4 9", key: "1af5af" }], ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4", key: "1blwi3" }]], Nk = e("corner-left-up", Ck);
const bk = [["path", { d: "m10 15 5 5 5-5", key: "1hpjnr" }], ["path", { d: "M4 4h7a4 4 0 0 1 4 4v12", key: "wcbgct" }]], $k = e("corner-right-down", bk);
const qk = [["path", { d: "m10 9 5-5 5 5", key: "9ctzwi" }], ["path", { d: "M4 20h7a4 4 0 0 0 4-4V4", key: "1plgdj" }]], zk = e("corner-right-up", qk);
const Sk = [["path", { d: "M20 20v-7a4 4 0 0 0-4-4H4", key: "1nkjon" }], ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }]], Ak = e("corner-up-left", Sk);
const Hk = [["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }], ["path", { d: "M4 20v-7a4 4 0 0 1 4-4h12", key: "1lu4f8" }]], jk = e("corner-up-right", Hk);
const Vk = [["path", { d: "M12 20v2", key: "1lh1kg" }], ["path", { d: "M12 2v2", key: "tus03m" }], ["path", { d: "M17 20v2", key: "1rnc9c" }], ["path", { d: "M17 2v2", key: "11trls" }], ["path", { d: "M2 12h2", key: "1t8f8n" }], ["path", { d: "M2 17h2", key: "7oei6x" }], ["path", { d: "M2 7h2", key: "asdhe0" }], ["path", { d: "M20 12h2", key: "1q8mjw" }], ["path", { d: "M20 17h2", key: "1fpfkl" }], ["path", { d: "M20 7h2", key: "1o8tra" }], ["path", { d: "M7 20v2", key: "4gnj0m" }], ["path", { d: "M7 2v2", key: "1i4yhu" }], ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" }], ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" }]], Pk = e("cpu", Vk);
const Bk = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1", key: "1ss3eq" }], ["path", { d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1", key: "1od56t" }]], Fk = e("creative-commons", Bk);
const Dk = [["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }], ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]], Rk = e("credit-card", Dk);
const Tk = [["path", { d: "M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487", key: "14kkz9" }], ["path", { d: "M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132", key: "1g7v07" }], ["path", { d: "M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42", key: "ratg6b" }], ["path", { d: "M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14", key: "4454f0" }], ["path", { d: "M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676", key: "qmemie" }]], Uk = e("croissant", Tk);
const Ok = [["path", { d: "M6 2v14a2 2 0 0 0 2 2h14", key: "ron5a4" }], ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2", key: "7s9ehn" }]], Gk = e("crop", Ok);
const Zk = [["path", { d: "M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z", key: "1xbrqy" }]], Wk = e("cross", Zk);
const Ek = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "22", x2: "18", y1: "12", y2: "12", key: "l9bcsi" }], ["line", { x1: "6", x2: "2", y1: "12", y2: "12", key: "13hhkx" }], ["line", { x1: "12", x2: "12", y1: "6", y2: "2", key: "10w3f3" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "18", key: "15g9kq" }]], Xk = e("crosshair", Ek);
const Kk = [["path", { d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z", key: "1vdc57" }], ["path", { d: "M5 21h14", key: "11awu3" }]], Qk = e("crown", Kk);
const Jk = [["path", { d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8", key: "8166m8" }], ["path", { d: "M5 8h14", key: "pcz4l3" }], ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0", key: "yjz344" }], ["path", { d: "m12 8 1-6h2", key: "3ybfa4" }]], Yk = e("cup-soda", Jk);
const ep = [["path", { d: "m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z", key: "1u2ovd" }], ["path", { d: "M10 22v-8L2.25 9.15", key: "11pn4q" }], ["path", { d: "m10 14 11.77-6.87", key: "1kt1wh" }]], ap = e("cuboid", ep);
const cp = [["circle", { cx: "12", cy: "12", r: "8", key: "46899m" }], ["line", { x1: "3", x2: "6", y1: "3", y2: "6", key: "1jkytn" }], ["line", { x1: "21", x2: "18", y1: "3", y2: "6", key: "14zfjt" }], ["line", { x1: "3", x2: "6", y1: "21", y2: "18", key: "iusuec" }], ["line", { x1: "21", x2: "18", y1: "21", y2: "18", key: "yj2dd7" }]], tp = e("currency", cp);
const op = [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }], ["path", { d: "M3 5v14a9 3 0 0 0 18 0V5", key: "aqi0yr" }]], dp = e("cylinder", op);
const np = [["path", { d: "M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1", key: "157kva" }], ["path", { d: "M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1", key: "d7q6m6" }], ["path", { d: "M2 10h4", key: "l0bgd4" }], ["path", { d: "M2 14h4", key: "1gsvsf" }], ["path", { d: "M2 18h4", key: "1bu2t1" }], ["path", { d: "M2 6h4", key: "aawbzj" }], ["path", { d: "M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z", key: "pr6s65" }]], hp = e("dam", np);
const sp = [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }], ["path", { d: "M3 12a9 3 0 0 0 5 2.69", key: "1ui2ym" }], ["path", { d: "M21 9.3V5", key: "6k6cib" }], ["path", { d: "M3 5v14a9 3 0 0 0 6.47 2.88", key: "i62tjy" }], ["path", { d: "M12 12v4h4", key: "1bxaet" }], ["path", { d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16", key: "1f4ei9" }]], ip = e("database-backup", sp);
const yp = [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }], ["path", { d: "M3 5V19A9 3 0 0 0 15 21.84", key: "14ibmq" }], ["path", { d: "M21 5V8", key: "1marbg" }], ["path", { d: "M21 12L18 17H22L19 22", key: "zafso" }], ["path", { d: "M3 12A9 3 0 0 0 14.59 14.87", key: "1y4wr8" }]], rp = e("database-zap", yp);
const kp = [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }], ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }], ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]], pp = e("database", kp);
const lp = [["path", { d: "m13 21-3-3 3-3", key: "s3o1nf" }], ["path", { d: "M20 18H10", key: "14r3mt" }], ["path", { d: "M3 11h.01", key: "1eifu7" }], ["rect", { x: "6", y: "3", width: "5", height: "8", rx: "2.5", key: "v9paqo" }]], up = e("decimals-arrow-left", lp);
const Mp = [["path", { d: "M10 18h10", key: "1y5s8o" }], ["path", { d: "m17 21 3-3-3-3", key: "1ammt0" }], ["path", { d: "M3 11h.01", key: "1eifu7" }], ["rect", { x: "15", y: "3", width: "5", height: "8", rx: "2.5", key: "76md6a" }], ["rect", { x: "6", y: "3", width: "5", height: "8", rx: "2.5", key: "v9paqo" }]], vp = e("decimals-arrow-right", Mp);
const mp = [["path", { d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z", key: "1yo7s0" }], ["path", { d: "m12 9 6 6", key: "anjzzh" }], ["path", { d: "m18 9-6 6", key: "1fp51s" }]], _p = e("delete", mp);
const gp = [["path", { d: "M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826", key: "xi88qy" }], ["path", { d: "M20.804 14.869a9 9 0 0 1-17.608 0", key: "1r28rg" }], ["circle", { cx: "12", cy: "4", r: "2", key: "muu5ef" }]], xp = e("dessert", gp);
const Lp = [["circle", { cx: "19", cy: "19", r: "2", key: "17f5cg" }], ["circle", { cx: "5", cy: "5", r: "2", key: "1gwv83" }], ["path", { d: "M6.48 3.66a10 10 0 0 1 13.86 13.86", key: "xr8kdq" }], ["path", { d: "m6.41 6.41 11.18 11.18", key: "uhpjw7" }], ["path", { d: "M3.66 6.48a10 10 0 0 0 13.86 13.86", key: "cldpwv" }]], wp = e("diameter", Lp);
const fp = [["path", { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z", key: "1ey20j" }], ["path", { d: "M8 12h8", key: "1wcyev" }]], Ip = e("diamond-minus", fp);
const Cp = [["path", { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z", key: "1tpxz2" }], ["path", { d: "M9.2 9.2h.01", key: "1b7bvt" }], ["path", { d: "m14.5 9.5-5 5", key: "17q4r4" }], ["path", { d: "M14.7 14.8h.01", key: "17nsh4" }]], Np = e("diamond-percent", Cp);
const bp = [["path", { d: "M12 8v8", key: "napkw2" }], ["path", { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z", key: "1ey20j" }], ["path", { d: "M8 12h8", key: "1wcyev" }]], $p = e("diamond-plus", bp);
const qp = [["path", { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z", key: "1f1r0c" }]], zp = e("diamond", qp);
const Sp = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }], ["path", { d: "M12 12h.01", key: "1mp3jc" }]], Ap = e("dice-1", Sp);
const Hp = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }], ["path", { d: "M15 9h.01", key: "x1ddxp" }], ["path", { d: "M9 15h.01", key: "fzyn71" }]], jp = e("dice-2", Hp);
const Vp = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }], ["path", { d: "M16 8h.01", key: "cr5u4v" }], ["path", { d: "M12 12h.01", key: "1mp3jc" }], ["path", { d: "M8 16h.01", key: "18s6g9" }]], Pp = e("dice-3", Vp);
const Bp = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }], ["path", { d: "M16 8h.01", key: "cr5u4v" }], ["path", { d: "M8 8h.01", key: "1e4136" }], ["path", { d: "M8 16h.01", key: "18s6g9" }], ["path", { d: "M16 16h.01", key: "1f9h7w" }]], Fp = e("dice-4", Bp);
const Dp = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }], ["path", { d: "M16 8h.01", key: "cr5u4v" }], ["path", { d: "M8 8h.01", key: "1e4136" }], ["path", { d: "M8 16h.01", key: "18s6g9" }], ["path", { d: "M16 16h.01", key: "1f9h7w" }], ["path", { d: "M12 12h.01", key: "1mp3jc" }]], Rp = e("dice-5", Dp);
const Tp = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }], ["path", { d: "M16 8h.01", key: "cr5u4v" }], ["path", { d: "M16 12h.01", key: "1l6xoz" }], ["path", { d: "M16 16h.01", key: "1f9h7w" }], ["path", { d: "M8 8h.01", key: "1e4136" }], ["path", { d: "M8 12h.01", key: "czm47f" }], ["path", { d: "M8 16h.01", key: "18s6g9" }]], Up = e("dice-6", Tp);
const Op = [["rect", { width: "12", height: "12", x: "2", y: "10", rx: "2", ry: "2", key: "6agr2n" }], ["path", { d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6", key: "1o487t" }], ["path", { d: "M6 18h.01", key: "uhywen" }], ["path", { d: "M10 14h.01", key: "ssrbsk" }], ["path", { d: "M15 6h.01", key: "cblpky" }], ["path", { d: "M18 9h.01", key: "2061c0" }]], Gp = e("dices", Op);
const Zp = [["path", { d: "M12 3v14", key: "7cf3v8" }], ["path", { d: "M5 10h14", key: "elsbfy" }], ["path", { d: "M5 21h14", key: "11awu3" }]], Wp = e("diff", Zp);
const Ep = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }], ["path", { d: "M12 12h.01", key: "1mp3jc" }]], Xp = e("disc-2", Ep);
const Kp = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }], ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]], Qp = e("disc-3", Kp);
const Jp = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["circle", { cx: "12", cy: "12", r: "5", key: "nd82uf" }], ["path", { d: "M12 12h.01", key: "1mp3jc" }]], Yp = e("disc-album", Jp);
const e3 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]], a3 = e("disc", e3);
const c3 = [["circle", { cx: "12", cy: "6", r: "1", key: "1bh7o1" }], ["line", { x1: "5", x2: "19", y1: "12", y2: "12", key: "13b5wn" }], ["circle", { cx: "12", cy: "18", r: "1", key: "lqb9t5" }]], t3 = e("divide", c3);
const o3 = [["path", { d: "M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8", key: "1bivrr" }], ["path", { d: "m17 6-2.891-2.891", key: "xu6p2f" }], ["path", { d: "M2 15c3.333-3 6.667-3 10-3", key: "nxix30" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "m20 9 .891.891", key: "3xwk7g" }], ["path", { d: "M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1", key: "18cutr" }], ["path", { d: "M3.109 14.109 4 15", key: "q76aoh" }], ["path", { d: "m6.5 12.5 1 1", key: "cs35ky" }], ["path", { d: "m7 18 2.891 2.891", key: "1sisit" }], ["path", { d: "M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16", key: "rlvei3" }]], d3 = e("dna-off", o3);
const n3 = [["path", { d: "m10 16 1.5 1.5", key: "11lckj" }], ["path", { d: "m14 8-1.5-1.5", key: "1ohn8i" }], ["path", { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993", key: "80uv8i" }], ["path", { d: "m16.5 10.5 1 1", key: "696xn5" }], ["path", { d: "m17 6-2.891-2.891", key: "xu6p2f" }], ["path", { d: "M2 15c6.667-6 13.333 0 20-6", key: "1pyr53" }], ["path", { d: "m20 9 .891.891", key: "3xwk7g" }], ["path", { d: "M3.109 14.109 4 15", key: "q76aoh" }], ["path", { d: "m6.5 12.5 1 1", key: "cs35ky" }], ["path", { d: "m7 18 2.891 2.891", key: "1sisit" }], ["path", { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993", key: "q3hbxp" }]], h3 = e("dna", n3);
const s3 = [["path", { d: "M2 8h20", key: "d11cs7" }], ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }], ["path", { d: "M6 16h12", key: "u522kt" }]], i3 = e("dock", s3);
const y3 = [["path", { d: "M11.25 16.25h1.5L12 17z", key: "w7jh35" }], ["path", { d: "M16 14v.5", key: "1lajdz" }], ["path", { d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309", key: "u7s9ue" }], ["path", { d: "M8 14v.5", key: "1nzgdb" }], ["path", { d: "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5", key: "v8hric" }]], r3 = e("dog", y3);
const k3 = [["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }], ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]], p3 = e("dollar-sign", k3);
const l3 = [["path", { d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3", key: "19sr3x" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]], u3 = e("donut", l3);
const M3 = [["path", { d: "M10 12h.01", key: "1kxr2c" }], ["path", { d: "M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14", key: "1bnhmg" }], ["path", { d: "M2 20h8", key: "10ntw1" }], ["path", { d: "M20 17v-2a2 2 0 1 0-4 0v2", key: "pwaxnr" }], ["rect", { x: "14", y: "17", width: "8", height: "5", rx: "1", key: "15pjcy" }]], v3 = e("door-closed-locked", M3);
const m3 = [["path", { d: "M10 12h.01", key: "1kxr2c" }], ["path", { d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14", key: "36qu9e" }], ["path", { d: "M2 20h20", key: "owomy5" }]], _3 = e("door-closed", m3);
const g3 = [["path", { d: "M11 20H2", key: "nlcfvz" }], ["path", { d: "M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z", key: "au4z13" }], ["path", { d: "M11 4H8a2 2 0 0 0-2 2v14", key: "74r1mk" }], ["path", { d: "M14 12h.01", key: "1jfl7z" }], ["path", { d: "M22 20h-3", key: "vhrsz" }]], x3 = e("door-open", g3);
const L3 = [["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]], w3 = e("dot", L3);
const f3 = [["path", { d: "M12 15V3", key: "m9g1x1" }], ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }], ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]], I3 = e("download", f3);
const C3 = [["path", { d: "m12.99 6.74 1.93 3.44", key: "iwagvd" }], ["path", { d: "M19.136 12a10 10 0 0 1-14.271 0", key: "ppmlo4" }], ["path", { d: "m21 21-2.16-3.84", key: "vylbct" }], ["path", { d: "m3 21 8.02-14.26", key: "1ssaw4" }], ["circle", { cx: "12", cy: "5", r: "2", key: "f1ur92" }]], N3 = e("drafting-compass", C3);
const b3 = [["path", { d: "M10 11h.01", key: "d2at3l" }], ["path", { d: "M14 6h.01", key: "k028ub" }], ["path", { d: "M18 6h.01", key: "1v4wsw" }], ["path", { d: "M6.5 13.1h.01", key: "1748ia" }], ["path", { d: "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3", key: "172yzv" }], ["path", { d: "M17.4 9.9c-.8.8-2 .8-2.8 0", key: "1obv0w" }], ["path", { d: "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7", key: "rqjl8i" }], ["path", { d: "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4", key: "1mr6wy" }]], $3 = e("drama", b3);
const q3 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94", key: "hpej1" }], ["path", { d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32", key: "1tr44o" }], ["path", { d: "M8.56 2.75c4.37 6 6 9.42 8 17.72", key: "kbh691" }]], z3 = e("dribbble", q3);
const S3 = [["path", { d: "M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z", key: "ioqxb1" }], ["path", { d: "M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8", key: "1rs59n" }], ["path", { d: "M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3", key: "105ega" }], ["path", { d: "M18 6h4", key: "66u95g" }], ["path", { d: "m5 10-2 8", key: "xt2lic" }], ["path", { d: "m7 18 2-8", key: "1bzku2" }]], A3 = e("drill", S3);
const H3 = [["path", { d: "M10 10 7 7", key: "zp14k7" }], ["path", { d: "m10 14-3 3", key: "1jrpxk" }], ["path", { d: "m14 10 3-3", key: "7tigam" }], ["path", { d: "m14 14 3 3", key: "vm23p3" }], ["path", { d: "M14.205 4.139a4 4 0 1 1 5.439 5.863", key: "1tm5p2" }], ["path", { d: "M19.637 14a4 4 0 1 1-5.432 5.868", key: "16egi2" }], ["path", { d: "M4.367 10a4 4 0 1 1 5.438-5.862", key: "1wta6a" }], ["path", { d: "M9.795 19.862a4 4 0 1 1-5.429-5.873", key: "q39hpv" }], ["rect", { x: "10", y: "8", width: "4", height: "8", rx: "1", key: "phrjt1" }]], j3 = e("drone", H3);
const V3 = [["path", { d: "M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586", key: "8suz2t" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208", key: "19dw9m" }]], P3 = e("droplet-off", V3);
const B3 = [["path", { d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z", key: "c7niix" }]], F3 = e("droplet", B3);
const D3 = [["path", { d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z", key: "1ptgy4" }], ["path", { d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97", key: "1sl1rz" }]], R3 = e("droplets", D3);
const T3 = [["path", { d: "m2 2 8 8", key: "1v6059" }], ["path", { d: "m22 2-8 8", key: "173r8a" }], ["ellipse", { cx: "12", cy: "9", rx: "10", ry: "5", key: "liohsx" }], ["path", { d: "M7 13.4v7.9", key: "1yi6u9" }], ["path", { d: "M12 14v8", key: "1tn2tj" }], ["path", { d: "M17 13.4v7.9", key: "eqz2v3" }], ["path", { d: "M2 9v8a10 5 0 0 0 20 0V9", key: "1750ul" }]], U3 = e("drum", T3);
const O3 = [["path", { d: "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23", key: "1dtqwm" }], ["path", { d: "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59", key: "1oq1fw" }]], G3 = e("drumstick", O3);
const Z3 = [["path", { d: "M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z", key: "9m4mmf" }], ["path", { d: "m2.5 21.5 1.4-1.4", key: "17g3f0" }], ["path", { d: "m20.1 3.9 1.4-1.4", key: "1qn309" }], ["path", { d: "M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z", key: "1t2c92" }], ["path", { d: "m9.6 14.4 4.8-4.8", key: "6umqxw" }]], W3 = e("dumbbell", Z3);
const E3 = [["path", { d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46", key: "1qngmn" }], ["path", { d: "M6 8.5c0-.75.13-1.47.36-2.14", key: "b06bma" }], ["path", { d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76", key: "g10hsz" }], ["path", { d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18", key: "ygzou7" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]], X3 = e("ear-off", E3);
const K3 = [["path", { d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0", key: "1dfaln" }], ["path", { d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4", key: "1qnva7" }]], Q3 = e("ear", K3);
const J3 = [["path", { d: "M7 3.34V5a3 3 0 0 0 3 3", key: "w732o8" }], ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key: "f02343" }], ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }], ["path", { d: "M12 2a10 10 0 1 0 9.54 13", key: "zjsr6q" }], ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2", key: "1of5e8" }], ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1", key: "1fmf51" }]], Y3 = e("earth-lock", J3);
const e8 = [["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }], ["path", { d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17", key: "1tzkfa" }], ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key: "14pb5j" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], a8 = e("earth", e8);
const c8 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 2a7 7 0 1 0 10 10", key: "1yuj32" }]], t8 = e("eclipse", c8);
const o8 = [["circle", { cx: "11.5", cy: "12.5", r: "3.5", key: "1cl1mi" }], ["path", { d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z", key: "165ef9" }]], d8 = e("egg-fried", o8);
const n8 = [["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19", key: "13g2jy" }], ["path", { d: "M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568", key: "1581id" }]], h8 = e("egg-off", n8);
const s8 = [["path", { d: "M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12", key: "1le142" }]], i8 = e("egg", s8);
const y8 = [["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }], ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }], ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]], r8 = e("ellipsis-vertical", y8);
const k8 = [["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }], ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }], ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]], p8 = e("ellipsis", k8);
const l8 = [["path", { d: "M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0", key: "yrdkhy" }], ["path", { d: "M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0", key: "gzkvyz" }]], u8 = e("equal-approximately", l8);
const M8 = [["line", { x1: "5", x2: "19", y1: "9", y2: "9", key: "1nwqeh" }], ["line", { x1: "5", x2: "19", y1: "15", y2: "15", key: "g8yjpy" }], ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }]], v8 = e("equal-not", M8);
const m8 = [["line", { x1: "5", x2: "19", y1: "9", y2: "9", key: "1nwqeh" }], ["line", { x1: "5", x2: "19", y1: "15", y2: "15", key: "g8yjpy" }]], _8 = e("equal", m8);
const g8 = [["path", { d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21", key: "g5wo59" }], ["path", { d: "m5.082 11.09 8.828 8.828", key: "1wx5vj" }]], x8 = e("eraser", g8);
const L8 = [["path", { d: "m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z", key: "rbahqx" }], ["path", { d: "M6 8v1", key: "1636ez" }], ["path", { d: "M10 8v1", key: "1talb4" }], ["path", { d: "M14 8v1", key: "1rsfgr" }], ["path", { d: "M18 8v1", key: "gnkwox" }]], w8 = e("ethernet-port", L8);
const f8 = [["path", { d: "M4 10h12", key: "1y6xl8" }], ["path", { d: "M4 14h9", key: "1loblj" }], ["path", { d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2", key: "1j6lzo" }]], I8 = e("euro", f8);
const C8 = [["path", { d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5", key: "1wtuz0" }], ["path", { d: "M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16", key: "e09ifn" }], ["path", { d: "M2 21h13", key: "1x0fut" }], ["path", { d: "M3 7h11", key: "19efrr" }], ["path", { d: "m9 11-2 3h3l-2 3", key: "lmzxi1" }]], N8 = e("ev-charger", C8);
const b8 = [["path", { d: "m15 15 6 6", key: "1s409w" }], ["path", { d: "m15 9 6-6", key: "ko1vev" }], ["path", { d: "M21 16v5h-5", key: "1ck2sf" }], ["path", { d: "M21 8V3h-5", key: "1qoq8a" }], ["path", { d: "M3 16v5h5", key: "1t08am" }], ["path", { d: "m3 21 6-6", key: "wwnumi" }], ["path", { d: "M3 8V3h5", key: "1ln10m" }], ["path", { d: "M9 9 3 3", key: "v551iv" }]], $8 = e("expand", b8);
const q8 = [["path", { d: "M15 3h6v6", key: "1q9fwt" }], ["path", { d: "M10 14 21 3", key: "gplh6r" }], ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]], z8 = e("external-link", q8);
const S8 = [["path", { d: "m15 18-.722-3.25", key: "1j64jw" }], ["path", { d: "M2 8a10.645 10.645 0 0 0 20 0", key: "1e7gxb" }], ["path", { d: "m20 15-1.726-2.05", key: "1cnuld" }], ["path", { d: "m4 15 1.726-2.05", key: "1dsqqd" }], ["path", { d: "m9 18 .722-3.25", key: "ypw2yx" }]], A8 = e("eye-closed", S8);
const H8 = [["path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49", key: "ct8e1f" }], ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }], ["path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143", key: "13bj9a" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]], j8 = e("eye-off", H8);
const V8 = [["path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0", key: "1nclc0" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]], P8 = e("eye", V8);
const B8 = [["path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }]], F8 = e("facebook", B8);
const D8 = [["path", { d: "M12 16h.01", key: "1drbdi" }], ["path", { d: "M16 16h.01", key: "1f9h7w" }], ["path", { d: "M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z", key: "1iv0i2" }], ["path", { d: "M8 16h.01", key: "18s6g9" }]], R8 = e("factory", D8);
const T8 = [["path", { d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z", key: "484a7f" }], ["path", { d: "M12 12v.01", key: "u5ubse" }]], U8 = e("fan", T8);
const O8 = [["path", { d: "M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z", key: "b19h5q" }], ["path", { d: "M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z", key: "h7h5ge" }]], G8 = e("fast-forward", O8);
const Z8 = [["path", { d: "M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z", key: "18jl4k" }], ["path", { d: "M16 8 2 22", key: "vp34q" }], ["path", { d: "M17.5 15H9", key: "1oz8nu" }]], W8 = e("feather", Z8);
const E8 = [["path", { d: "M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z", key: "1n2rgs" }], ["path", { d: "M6 8h4", key: "utf9t1" }], ["path", { d: "M6 18h4", key: "12yh4b" }], ["path", { d: "m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z", key: "3ha7mj" }], ["path", { d: "M14 8h4", key: "1r8wg2" }], ["path", { d: "M14 18h4", key: "1t3kbu" }], ["path", { d: "m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z", key: "dfd4e2" }]], X8 = e("fence", E8);
const K8 = [["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }], ["path", { d: "M12 2v4", key: "3427ic" }], ["path", { d: "m6.8 15-3.5 2", key: "hjy98k" }], ["path", { d: "m20.7 7-3.5 2", key: "f08gto" }], ["path", { d: "M6.8 9 3.3 7", key: "1aevh4" }], ["path", { d: "m20.7 17-3.5-2", key: "1liqo3" }], ["path", { d: "m9 22 3-8 3 8", key: "wees03" }], ["path", { d: "M8 22h8", key: "rmew8v" }], ["path", { d: "M18 18.7a9 9 0 1 0-12 0", key: "dhzg4g" }]], Q8 = e("ferris-wheel", K8);
const J8 = [["path", { d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z", key: "1340ok" }], ["path", { d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z", key: "1hz3m3" }], ["path", { d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z", key: "1oz8n2" }], ["path", { d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z", key: "1ff65i" }], ["path", { d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z", key: "pdip6e" }]], Y8 = e("figma", J8);
const e6 = [["path", { d: "M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5", key: "4pqfef" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M8 12v-1", key: "1ej8lb" }], ["path", { d: "M8 18v-2", key: "qcmpov" }], ["path", { d: "M8 7V6", key: "1nbb54" }], ["circle", { cx: "8", cy: "20", r: "2", key: "ckkr5m" }]], a6 = e("file-archive", e6);
const c6 = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "m8 18 4-4", key: "12zab0" }], ["path", { d: "M8 10v8h8", key: "tlaukw" }]], t6 = e("file-axis-3d", c6);
const o6 = [["path", { d: "M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3", key: "cvl1xm" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88", key: "1ff7gj" }], ["circle", { cx: "6", cy: "14", r: "3", key: "a1xfv6" }]], d6 = e("file-badge", o6);
const n6 = [["path", { d: "M14.5 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.8", key: "1kchwa" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M11.7 14.2 7 17l-4.7-2.8", key: "1yk8tc" }], ["path", { d: "M3 13.1a2 2 0 0 0-.999 1.76v3.24a2 2 0 0 0 .969 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01z", key: "19flxy" }], ["path", { d: "M7 17v5", key: "1yj1jh" }]], h6 = e("file-box", n6);
const s6 = [["path", { d: "M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6", key: "14cnrg" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1 1 1 0 0 1 1 1v2a1 1 0 0 0 1 1", key: "sr0ebq" }], ["path", { d: "M9 22a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1", key: "w793db" }]], i6 = e("file-braces-corner", s6);
const y6 = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" }], ["path", { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" }]], r6 = e("file-braces", y6);
const k6 = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M8 18v-2", key: "qcmpov" }], ["path", { d: "M12 18v-4", key: "q1q25u" }], ["path", { d: "M16 18v-6", key: "15y0np" }]], p6 = e("file-chart-column-increasing", k6);
const l6 = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M8 18v-1", key: "zg0ygc" }], ["path", { d: "M12 18v-6", key: "17g6i2" }], ["path", { d: "M16 18v-3", key: "j5jt4h" }]], u6 = e("file-chart-column", l6);
const M6 = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "m16 13-3.5 3.5-2-2L8 17", key: "zz7yod" }]], v6 = e("file-chart-line", M6);
const m6 = [["path", { d: "M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6", key: "g5mvt7" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "m14 20 2 2 4-4", key: "15kota" }]], _6 = e("file-check-corner", m6);
const g6 = [["path", { d: "M15.941 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.512", key: "13hoie" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M4.017 11.512a6 6 0 1 0 8.466 8.475", key: "s6vs5t" }], ["path", { d: "M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z", key: "1dl6s6" }]], x6 = e("file-chart-pie", g6);
const L6 = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]], w6 = e("file-check", L6);
const f6 = [["path", { d: "M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85", key: "ryk6xj" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M8 14v2.2l1.6 1", key: "6m4bie" }], ["circle", { cx: "8", cy: "16", r: "6", key: "10v15b" }]], I6 = e("file-clock", f6);
const C6 = [["path", { d: "M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35", key: "1wthlu" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "m5 16-3 3 3 3", key: "331omg" }], ["path", { d: "m9 22 3-3-3-3", key: "lsp7cz" }]], N6 = e("file-code-corner", C6);
const b6 = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M10 12.5 8 15l2 2.5", key: "1tg20x" }], ["path", { d: "m14 12.5 2 2.5-2 2.5", key: "yinavb" }]], $6 = e("file-code", b6);
const q6 = [["path", { d: "M13.85 22H18a2 2 0 0 0 2-2V8a2 2 0 0 0-.586-1.414l-4-4A2 2 0 0 0 14 2H6a2 2 0 0 0-2 2v6.6", key: "1l4p50" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "m3.305 19.53.923-.382", key: "ao1pio" }], ["path", { d: "m4.228 16.852-.924-.383", key: "1fv9zy" }], ["path", { d: "m5.852 15.228-.383-.923", key: "1a9hc2" }], ["path", { d: "m5.852 20.772-.383.924", key: "1sh9ke" }], ["path", { d: "m8.148 15.228.383-.923", key: "4yu6lf" }], ["path", { d: "m8.53 21.696-.382-.924", key: "18b0s9" }], ["path", { d: "m9.773 16.852.922-.383", key: "ti6xop" }], ["path", { d: "m9.773 19.148.922.383", key: "rws47d" }], ["circle", { cx: "7", cy: "18", r: "3", key: "lvkj7j" }]], z6 = e("file-cog", q6);
const S6 = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M9 10h6", key: "9gxzsh" }], ["path", { d: "M12 13V7", key: "h0r20n" }], ["path", { d: "M9 17h6", key: "r8uit2" }]], A6 = e("file-diff", S6);
const H6 = [["path", { d: "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2", key: "jrl274" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M10 16h2v6", key: "1bxocy" }], ["path", { d: "M10 22h4", key: "ceow96" }], ["rect", { x: "2", y: "16", width: "4", height: "6", rx: "2", key: "r45zd0" }]], j6 = e("file-digit", H6);
const V6 = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M12 18v-6", key: "17g6i2" }], ["path", { d: "m9 15 3 3 3-3", key: "1npd3o" }]], P6 = e("file-down", V6);
const B6 = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M12 9v4", key: "juzpu7" }], ["path", { d: "M12 17h.01", key: "p32p05" }]], F6 = e("file-exclamation-point", B6);
const D6 = [["path", { d: "M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343", key: "1vfytu" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0", key: "1etmh7" }]], R6 = e("file-headphone", D6);
const T6 = [["path", { d: "M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v7", key: "oagw2b" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M3.62 18.8A2.25 2.25 0 1 1 7 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a1 1 0 0 1-1.507 0z", key: "rg3psg" }]], U6 = e("file-heart", T6);
const O6 = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["circle", { cx: "10", cy: "12", r: "2", key: "737tya" }], ["path", { d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22", key: "wt3hpn" }]], G6 = e("file-image", O6);
const Z6 = [["path", { d: "M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1", key: "1q9hii" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M2 15h10", key: "jfw4w8" }], ["path", { d: "m9 18 3-3-3-3", key: "112psh" }]], W6 = e("file-input", Z6);
const E6 = [["path", { d: "M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3", key: "1432pc" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M9 17v-2a2 2 0 0 0-4 0v2", key: "168m41" }], ["rect", { width: "8", height: "5", x: "3", y: "17", rx: "1", key: "o8vfew" }]], X6 = e("file-lock", E6);
const K6 = [["path", { d: "M10.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.1", key: "1a2hbp" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "m10 15 1 1", key: "1h4vmv" }], ["path", { d: "m11 14-4.586 4.586", key: "maylof" }], ["circle", { cx: "5", cy: "20", r: "2", key: "860zyv" }]], Q6 = e("file-key", K6);
const J6 = [["path", { d: "M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12", key: "l9p8hp" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M14 18h6", key: "1m8k6r" }]], Y6 = e("file-minus-corner", J6);
const el = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M9 15h6", key: "cctwl0" }]], al = e("file-minus", el);
const cl = [["path", { d: "M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35", key: "5ad7z2" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M8 20v-7l3 1.474", key: "1ggyb9" }], ["circle", { cx: "6", cy: "20", r: "2", key: "j7wjp0" }]], tl = e("file-music", cl);
const ol = [["path", { d: "M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127", key: "wfxp4w" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "m5 11-3 3", key: "1dgrs4" }], ["path", { d: "m5 17-3-3h10", key: "1mvvaf" }]], dl = e("file-output", ol);
const nl = [["path", { d: "m18.226 5.226-2.52-2.52A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.351", key: "1k2beg" }], ["path", { d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z", key: "2t3380" }], ["path", { d: "M8 18h1", key: "13wk12" }]], hl = e("file-pen-line", nl);
const sl = [["path", { d: "M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34", key: "o6klzx" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z", key: "zhnas1" }]], il = e("file-pen", sl);
const yl = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z", key: "1tzo1f" }]], rl = e("file-play", yl);
const kl = [["path", { d: "M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35", key: "17jvcc" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M14 19h6", key: "bvotb8" }], ["path", { d: "M17 16v6", key: "18yu1i" }]], pl = e("file-plus-corner", kl);
const ll = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M9 15h6", key: "cctwl0" }], ["path", { d: "M12 18v-6", key: "17g6i2" }]], ul = e("file-plus", ll);
const Ml = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M12 17h.01", key: "p32p05" }], ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3", key: "mhlwft" }]], vl = e("file-question-mark", Ml);
const ml = [["path", { d: "M20 10V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.35", key: "1cdjst" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M16 14a2 2 0 0 0-2 2", key: "ceaadl" }], ["path", { d: "M16 22a2 2 0 0 1-2-2", key: "1wqh5n" }], ["path", { d: "M20 14a2 2 0 0 1 2 2", key: "1ny6zw" }], ["path", { d: "M20 22a2 2 0 0 0 2-2", key: "1l9q4k" }]], _l = e("file-scan", ml);
const gl = [["path", { d: "M11.1 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.589 3.588A2.4 2.4 0 0 1 20 8v3.25", key: "uh4ikj" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "m21 22-2.88-2.88", key: "9dd25w" }], ["circle", { cx: "16", cy: "17", r: "3", key: "11br10" }]], xl = e("file-search-corner", gl);
const Ll = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["circle", { cx: "11.5", cy: "14.5", r: "2.5", key: "1bq0ko" }], ["path", { d: "M13.3 16.3 15 18", key: "2quom7" }]], wl = e("file-search", Ll);
const fl = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M8 15h.01", key: "a7atzg" }], ["path", { d: "M11.5 13.5a2.5 2.5 0 0 1 0 3", key: "1fccat" }], ["path", { d: "M15 12a5 5 0 0 1 0 6", key: "ps46cm" }]], Il = e("file-signal", fl);
const Cl = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M8 12h8", key: "1wcyev" }], ["path", { d: "M10 11v2", key: "1s651w" }], ["path", { d: "M8 17h8", key: "wh5c61" }], ["path", { d: "M14 16v2", key: "12fp5e" }]], Nl = e("file-sliders", Cl);
const bl = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M8 13h2", key: "yr2amv" }], ["path", { d: "M14 13h2", key: "un5t4a" }], ["path", { d: "M8 17h2", key: "2yhykz" }], ["path", { d: "M14 17h2", key: "10kma7" }]], $l = e("file-spreadsheet", bl);
const ql = [["path", { d: "M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1", key: "likhh7" }], ["path", { d: "M16 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1", key: "17ky3x" }], ["path", { d: "M21 6a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z", key: "1hyeo0" }]], zl = e("file-stack", ql);
const Sl = [["path", { d: "M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7", key: "huwfnr" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "m10 18 3-3-3-3", key: "18f6ys" }]], Al = e("file-symlink", Sl);
const Hl = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "m8 16 2-2-2-2", key: "10vzyd" }], ["path", { d: "M12 18h4", key: "1wd2n7" }]], jl = e("file-terminal", Hl);
const Vl = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M10 9H8", key: "b1mrlr" }], ["path", { d: "M16 13H8", key: "t4e002" }], ["path", { d: "M16 17H8", key: "z1uh3a" }]], Pl = e("file-text", Vl);
const Bl = [["path", { d: "M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6", key: "15usau" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M3 16v-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V16", key: "s1gz5" }], ["path", { d: "M6 22h2", key: "194x9m" }], ["path", { d: "M7 14v8", key: "11ixej" }]], Fl = e("file-type-corner", Bl);
const Dl = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M11 18h2", key: "12mj7e" }], ["path", { d: "M12 12v6", key: "3ahymv" }], ["path", { d: "M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5", key: "qbrxap" }]], Rl = e("file-type", Dl);
const Tl = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M16 22a4 4 0 0 0-8 0", key: "7a83pg" }], ["circle", { cx: "12", cy: "15", r: "3", key: "g36mzq" }]], Ul = e("file-user", Tl);
const Ol = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M12 12v6", key: "3ahymv" }], ["path", { d: "m15 15-3-3-3 3", key: "15xj92" }]], Gl = e("file-up", Ol);
const Zl = [["path", { d: "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2", key: "jrl274" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "m10 17.843 3.033-1.755a.64.64 0 0 1 .967.56v4.704a.65.65 0 0 1-.967.56L10 20.157", key: "17aeo9" }], ["rect", { width: "7", height: "6", x: "3", y: "16", rx: "1", key: "s27ndx" }]], Wl = e("file-video-camera", Zl);
const El = [["path", { d: "M4 11.55V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-1.95", key: "44gpjv" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M12 15a5 5 0 0 1 0 6", key: "oxg87a" }], ["path", { d: "M8 14.502a.5.5 0 0 0-.826-.381l-1.893 1.631a1 1 0 0 1-.651.243H3.5a.5.5 0 0 0-.5.501v3.006a.5.5 0 0 0 .5.501h1.129a1 1 0 0 1 .652.243l1.893 1.633a.5.5 0 0 0 .826-.38z", key: "8rtoi1" }]], Xl = e("file-volume", El);
const Kl = [["path", { d: "M11 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5", key: "1jo35a" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "m15 17 5 5", key: "36xl1x" }], ["path", { d: "m20 17-5 5", key: "vdz27y" }]], Ql = e("file-x-corner", Kl);
const Jl = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "m14.5 12.5-5 5", key: "b62r18" }], ["path", { d: "m9.5 12.5 5 5", key: "1rk7el" }]], Yl = e("file-x", Jl);
const e7 = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]], a7 = e("file", e7);
const c7 = [["path", { d: "M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8", key: "14sh0y" }], ["path", { d: "M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z", key: "1970lx" }], ["path", { d: "M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1", key: "l4dndm" }]], t7 = e("files", c7);
const o7 = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M7 3v18", key: "bbkbws" }], ["path", { d: "M3 7.5h4", key: "zfgn84" }], ["path", { d: "M3 12h18", key: "1i2n21" }], ["path", { d: "M3 16.5h4", key: "1230mu" }], ["path", { d: "M17 3v18", key: "in4fa5" }], ["path", { d: "M17 7.5h4", key: "myr1c1" }], ["path", { d: "M17 16.5h4", key: "go4c1d" }]], d7 = e("film", o7);
const n7 = [["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4", key: "1nerag" }], ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88", key: "o46ks0" }], ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02", key: "ptglia" }], ["path", { d: "M2 12a10 10 0 0 1 18-6", key: "ydlgp0" }], ["path", { d: "M2 16h.01", key: "1gqxmh" }], ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6", key: "drycrb" }], ["path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2", key: "1tidbn" }], ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2", key: "13wd9y" }], ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2v2", key: "1fr1j5" }]], h7 = e("fingerprint-pattern", n7);
const s7 = [["path", { d: "M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5", key: "sqyvz" }], ["path", { d: "M9 18h8", key: "i7pszb" }], ["path", { d: "M18 3h-3", key: "7idoqj" }], ["path", { d: "M11 3a6 6 0 0 0-6 6v11", key: "1v5je3" }], ["path", { d: "M5 13h4", key: "svpcxo" }], ["path", { d: "M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z", key: "vsjego" }]], i7 = e("fire-extinguisher", s7);
const y7 = [["path", { d: "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058", key: "1j1hse" }], ["path", { d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618", key: "1q46z8" }], ["path", { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20", key: "1407gh" }]], r7 = e("fish-off", y7);
const k7 = [["path", { d: "M2 16s9-15 20-4C11 23 2 8 2 8", key: "h4oh4o" }]], p7 = e("fish-symbol", k7);
const l7 = [["path", { d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z", key: "15baut" }], ["path", { d: "M18 12v.5", key: "18hhni" }], ["path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86", key: "16dt7o" }], ["path", { d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33", key: "l9di03" }], ["path", { d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4", key: "1kjonw" }], ["path", { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98", key: "1zlm23" }]], u7 = e("fish", l7);
const M7 = [["path", { d: "m17.586 11.414-5.93 5.93a1 1 0 0 1-8-8l3.137-3.137a.707.707 0 0 1 1.207.5V10", key: "157y8s" }], ["path", { d: "M20.414 8.586 22 7", key: "5g2s34" }], ["circle", { cx: "19", cy: "10", r: "2", key: "7363ft" }]], v7 = e("fishing-hook", M7);
const m7 = [["path", { d: "M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528", key: "1q158e" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M4 22V4", key: "1plyxx" }], ["path", { d: "M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347", key: "xj1b71" }]], _7 = e("flag-off", m7);
const g7 = [["path", { d: "M18 22V2.8a.8.8 0 0 0-1.17-.71L5.45 7.78a.8.8 0 0 0 0 1.44L18 15.5", key: "rbbtmw" }]], x7 = e("flag-triangle-left", g7);
const L7 = [["path", { d: "M6 22V2.8a.8.8 0 0 1 1.17-.71l11.38 5.69a.8.8 0 0 1 0 1.44L6 15.5", key: "kfjsu0" }]], w7 = e("flag-triangle-right", L7);
const f7 = [["path", { d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528", key: "1jaruq" }]], I7 = e("flag", f7);
const C7 = [["path", { d: "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z", key: "1ir223" }], ["path", { d: "m5 22 14-4", key: "1brv4h" }], ["path", { d: "m5 18 14 4", key: "lgyyje" }]], N7 = e("flame-kindling", C7);
const b7 = [["path", { d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4", key: "1slcih" }]], $7 = e("flame", b7);
const q7 = [["path", { d: "M11.652 6H18", key: "voqkpr" }], ["path", { d: "M12 13v1", key: "176q98" }], ["path", { d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V6", key: "dzyf92" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M7.649 2H17a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8a4 4 0 0 0-.55 1.007", key: "1hvcfn" }]], z7 = e("flashlight-off", q7);
const S7 = [["path", { d: "M12 13v1", key: "176q98" }], ["path", { d: "M17 2a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8A4 4 0 0 0 16 12v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V3a1 1 0 0 1 1-1z", key: "17vh7j" }], ["path", { d: "M6 6h12", key: "n6hhss" }]], A7 = e("flashlight", S7);
const H7 = [["path", { d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2", key: "18mbvz" }], ["path", { d: "M6.453 15h11.094", key: "3shlmq" }], ["path", { d: "M8.5 2h7", key: "csnxdl" }]], j7 = e("flask-conical", H7);
const V7 = [["path", { d: "M10 2v2.343", key: "15t272" }], ["path", { d: "M14 2v6.343", key: "sxr80q" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563", key: "k0duyd" }], ["path", { d: "M6.453 15H15", key: "1f0z33" }], ["path", { d: "M8.5 2h7", key: "csnxdl" }]], P7 = e("flask-conical-off", V7);
const B7 = [["path", { d: "M10 2v6.292a7 7 0 1 0 4 0V2", key: "1s42pc" }], ["path", { d: "M5 15h14", key: "m0yey3" }], ["path", { d: "M8.5 2h7", key: "csnxdl" }]], F7 = e("flask-round", B7);
const D7 = [["path", { d: "m3 7 5 5-5 5V7", key: "couhi7" }], ["path", { d: "m21 7-5 5 5 5V7", key: "6ouia7" }], ["path", { d: "M12 20v2", key: "1lh1kg" }], ["path", { d: "M12 14v2", key: "8jcxud" }], ["path", { d: "M12 8v2", key: "1woqiv" }], ["path", { d: "M12 2v2", key: "tus03m" }]], R7 = e("flip-horizontal-2", D7);
const T7 = [["path", { d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3", key: "1i73f7" }], ["path", { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3", key: "saxlbk" }], ["path", { d: "M12 20v2", key: "1lh1kg" }], ["path", { d: "M12 14v2", key: "8jcxud" }], ["path", { d: "M12 8v2", key: "1woqiv" }], ["path", { d: "M12 2v2", key: "tus03m" }]], U7 = e("flip-horizontal", T7);
const O7 = [["path", { d: "m17 3-5 5-5-5h10", key: "1ftt6x" }], ["path", { d: "m17 21-5-5-5 5h10", key: "1m0wmu" }], ["path", { d: "M4 12H2", key: "rhcxmi" }], ["path", { d: "M10 12H8", key: "s88cx1" }], ["path", { d: "M16 12h-2", key: "10asgb" }], ["path", { d: "M22 12h-2", key: "14jgyd" }]], G7 = e("flip-vertical-2", O7);
const Z7 = [["path", { d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3", key: "14bfxa" }], ["path", { d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3", key: "14rx03" }], ["path", { d: "M4 12H2", key: "rhcxmi" }], ["path", { d: "M10 12H8", key: "s88cx1" }], ["path", { d: "M16 12h-2", key: "10asgb" }], ["path", { d: "M22 12h-2", key: "14jgyd" }]], W7 = e("flip-vertical", Z7);
const E7 = [["path", { d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1", key: "3pnvol" }], ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }], ["path", { d: "M12 10v12", key: "6ubwww" }], ["path", { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z", key: "9hd38g" }], ["path", { d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z", key: "ufn41s" }]], X7 = e("flower-2", E7);
const K7 = [["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }], ["path", { d: "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5", key: "14wa3c" }], ["path", { d: "M12 7.5V9", key: "1oy5b0" }], ["path", { d: "M7.5 12H9", key: "eltsq1" }], ["path", { d: "M16.5 12H15", key: "vk5kw4" }], ["path", { d: "M12 16.5V15", key: "k7eayi" }], ["path", { d: "m8 8 1.88 1.88", key: "nxy4qf" }], ["path", { d: "M14.12 9.88 16 8", key: "1lst6k" }], ["path", { d: "m8 16 1.88-1.88", key: "h2eex1" }], ["path", { d: "M14.12 14.12 16 16", key: "uqkrx3" }]], Q7 = e("flower", K7);
const J7 = [["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }], ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]], Y7 = e("focus", J7);
const e9 = [["path", { d: "M2 12h6", key: "1wqiqv" }], ["path", { d: "M22 12h-6", key: "1eg9hc" }], ["path", { d: "M12 2v2", key: "tus03m" }], ["path", { d: "M12 8v2", key: "1woqiv" }], ["path", { d: "M12 14v2", key: "8jcxud" }], ["path", { d: "M12 20v2", key: "1lh1kg" }], ["path", { d: "m19 9-3 3 3 3", key: "12ol22" }], ["path", { d: "m5 15 3-3-3-3", key: "1kdhjc" }]], a9 = e("fold-horizontal", e9);
const c9 = [["path", { d: "M12 22v-6", key: "6o8u61" }], ["path", { d: "M12 8V2", key: "1wkif3" }], ["path", { d: "M4 12H2", key: "rhcxmi" }], ["path", { d: "M10 12H8", key: "s88cx1" }], ["path", { d: "M16 12h-2", key: "10asgb" }], ["path", { d: "M22 12h-2", key: "14jgyd" }], ["path", { d: "m15 19-3-3-3 3", key: "e37ymu" }], ["path", { d: "m15 5-3 3-3-3", key: "19d6lf" }]], t9 = e("fold-vertical", c9);
const o9 = [["circle", { cx: "15", cy: "19", r: "2", key: "u2pros" }], ["path", { d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1", key: "1jj40k" }], ["path", { d: "M15 11v-1", key: "cntcp" }], ["path", { d: "M15 17v-2", key: "1279jj" }]], d9 = e("folder-archive", o9);
const n9 = [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z", key: "1kt360" }], ["path", { d: "m9 13 2 2 4-4", key: "6343dt" }]], h9 = e("folder-check", n9);
const s9 = [["path", { d: "M16 14v2.2l1.6 1", key: "fo4ql5" }], ["path", { d: "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2", key: "1urifu" }], ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }]], i9 = e("folder-clock", s9);
const y9 = [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z", key: "1kt360" }], ["path", { d: "M2 10h20", key: "1ir3d8" }]], r9 = e("folder-closed", y9);
const k9 = [["path", { d: "M10 10.5 8 13l2 2.5", key: "m4t9c1" }], ["path", { d: "m14 10.5 2 2.5-2 2.5", key: "14w2eb" }], ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z", key: "1u1bxd" }]], p9 = e("folder-code", k9);
const l9 = [["path", { d: "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3", key: "128dxu" }], ["path", { d: "m14.305 19.53.923-.382", key: "3m78fa" }], ["path", { d: "m15.228 16.852-.923-.383", key: "npixar" }], ["path", { d: "m16.852 15.228-.383-.923", key: "5xggr7" }], ["path", { d: "m16.852 20.772-.383.924", key: "dpfhf9" }], ["path", { d: "m19.148 15.228.383-.923", key: "1reyyz" }], ["path", { d: "m19.53 21.696-.382-.924", key: "1goivc" }], ["path", { d: "m20.772 16.852.924-.383", key: "htqkph" }], ["path", { d: "m20.772 19.148.924.383", key: "9w9pjp" }], ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }]], u9 = e("folder-cog", l9);
const M9 = [["path", { d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z", key: "1fr9dc" }], ["circle", { cx: "12", cy: "13", r: "1", key: "49l61u" }]], v9 = e("folder-dot", M9);
const m9 = [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z", key: "1kt360" }], ["path", { d: "M12 10v6", key: "1bos4e" }], ["path", { d: "m15 13-3 3-3-3", key: "6j2sf0" }]], _9 = e("folder-down", m9);
const g9 = [["path", { d: "M18 19a5 5 0 0 1-5-5v8", key: "sz5oeg" }], ["path", { d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5", key: "1w6njk" }], ["circle", { cx: "13", cy: "12", r: "2", key: "1j92g6" }], ["circle", { cx: "20", cy: "19", r: "2", key: "1obnsp" }]], x9 = e("folder-git-2", g9);
const L9 = [["circle", { cx: "12", cy: "13", r: "2", key: "1c1ljs" }], ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z", key: "1kt360" }], ["path", { d: "M14 13h3", key: "1dgedf" }], ["path", { d: "M7 13h3", key: "1pygq7" }]], w9 = e("folder-git", L9);
const f9 = [["path", { d: "M10.638 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.417", key: "10r6g4" }], ["path", { d: "M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z", key: "15cy7q" }]], I9 = e("folder-heart", f9);
const C9 = [["path", { d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1", key: "fm4g5t" }], ["path", { d: "M2 13h10", key: "pgb2dq" }], ["path", { d: "m9 16 3-3-3-3", key: "6m91ic" }]], N9 = e("folder-input", C9);
const b9 = [["path", { d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z", key: "1fr9dc" }], ["path", { d: "M8 10v4", key: "tgpxqk" }], ["path", { d: "M12 10v2", key: "hh53o1" }], ["path", { d: "M16 10v6", key: "1d6xys" }]], $9 = e("folder-kanban", b9);
const q9 = [["circle", { cx: "16", cy: "20", r: "2", key: "1vifvg" }], ["path", { d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2", key: "3hgo9p" }], ["path", { d: "m22 14-4.5 4.5", key: "1ef6z8" }], ["path", { d: "m21 15 1 1", key: "1ejcpy" }]], z9 = e("folder-key", q9);
const S9 = [["rect", { width: "8", height: "5", x: "14", y: "17", rx: "1", key: "19aais" }], ["path", { d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5", key: "1w6v7t" }], ["path", { d: "M20 17v-2a2 2 0 1 0-4 0v2", key: "pwaxnr" }]], A9 = e("folder-lock", S9);
const H9 = [["path", { d: "M9 13h6", key: "1uhe8q" }], ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z", key: "1kt360" }]], j9 = e("folder-minus", H9);
const V9 = [["path", { d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2", key: "1nmvlm" }], ["circle", { cx: "14", cy: "15", r: "1", key: "1gm4qj" }]], P9 = e("folder-open-dot", V9);
const B9 = [["path", { d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2", key: "usdka0" }]], F9 = e("folder-open", B9);
const D9 = [["path", { d: "M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5", key: "1yk7aj" }], ["path", { d: "M2 13h10", key: "pgb2dq" }], ["path", { d: "m5 10-3 3 3 3", key: "1r8ie0" }]], R9 = e("folder-output", D9);
const T9 = [["path", { d: "M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5", key: "a8xqs0" }], ["path", { d: "M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z", key: "1saktj" }]], U9 = e("folder-pen", T9);
const O9 = [["path", { d: "M12 10v6", key: "1bos4e" }], ["path", { d: "M9 13h6", key: "1uhe8q" }], ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z", key: "1kt360" }]], G9 = e("folder-plus", O9);
const Z9 = [["path", { d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z", key: "1fr9dc" }], ["circle", { cx: "12", cy: "13", r: "2", key: "1c1ljs" }], ["path", { d: "M12 15v5", key: "11xva1" }]], W9 = e("folder-root", Z9);
const E9 = [["circle", { cx: "11.5", cy: "12.5", r: "2.5", key: "1ea5ju" }], ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z", key: "1kt360" }], ["path", { d: "M13.3 14.3 15 16", key: "1y4v1n" }]], X9 = e("folder-search-2", E9);
const K9 = [["path", { d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1", key: "1bw5m7" }], ["path", { d: "m21 21-1.9-1.9", key: "1g2n9r" }], ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }]], Q9 = e("folder-search", K9);
const J9 = [["path", { d: "M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7", key: "y8kt7d" }], ["path", { d: "m8 16 3-3-3-3", key: "rlqrt1" }]], Y9 = e("folder-symlink", J9);
const eu = [["path", { d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5", key: "1dkoa9" }], ["path", { d: "M12 10v4h4", key: "1czhmt" }], ["path", { d: "m12 14 1.535-1.605a5 5 0 0 1 8 1.5", key: "lvuxfi" }], ["path", { d: "M22 22v-4h-4", key: "1ewp4q" }], ["path", { d: "m22 18-1.535 1.605a5 5 0 0 1-8-1.5", key: "14ync0" }]], au = e("folder-sync", eu);
const cu = [["path", { d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z", key: "hod4my" }], ["path", { d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z", key: "w4yl2u" }], ["path", { d: "M3 5a2 2 0 0 0 2 2h3", key: "f2jnh7" }], ["path", { d: "M3 3v13a2 2 0 0 0 2 2h3", key: "k8epm1" }]], tu = e("folder-tree", cu);
const ou = [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z", key: "1kt360" }], ["path", { d: "M12 10v6", key: "1bos4e" }], ["path", { d: "m9 13 3-3 3 3", key: "1pxg3c" }]], du = e("folder-up", ou);
const nu = [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z", key: "1kt360" }], ["path", { d: "m9.5 10.5 5 5", key: "ra9qjz" }], ["path", { d: "m14.5 10.5-5 5", key: "l2rkpq" }]], hu = e("folder-x", nu);
const su = [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z", key: "1kt360" }]], iu = e("folder", su);
const yu = [["path", { d: "M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z", key: "a4852j" }], ["path", { d: "M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1", key: "yxbcw3" }]], ru = e("folders", yu);
const ku = [["path", { d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z", key: "1dudjm" }], ["path", { d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z", key: "l2t8xc" }], ["path", { d: "M16 17h4", key: "1dejxt" }], ["path", { d: "M4 13h4", key: "1bwh8b" }]], pu = e("footprints", ku);
const lu = [["path", { d: "M12 12H5a2 2 0 0 0-2 2v5", key: "7zsz91" }], ["circle", { cx: "13", cy: "19", r: "2", key: "wjnkru" }], ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }], ["path", { d: "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5", key: "13bk1p" }]], uu = e("forklift", lu);
const Mu = [["path", { d: "M4 14h6", key: "77gv2w" }], ["path", { d: "M4 2h10", key: "a2b314" }], ["rect", { x: "4", y: "18", width: "16", height: "4", rx: "1", key: "sybzq6" }], ["rect", { x: "4", y: "6", width: "16", height: "4", rx: "1", key: "1osc9e" }]], vu = e("form", Mu);
const mu = [["path", { d: "m15 17 5-5-5-5", key: "nf172w" }], ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12", key: "jmiej9" }]], _u = e("forward", mu);
const gu = [["line", { x1: "22", x2: "2", y1: "6", y2: "6", key: "15w7dq" }], ["line", { x1: "22", x2: "2", y1: "18", y2: "18", key: "1ip48p" }], ["line", { x1: "6", x2: "6", y1: "2", y2: "22", key: "a2lnyx" }], ["line", { x1: "18", x2: "18", y1: "2", y2: "22", key: "8vb6jd" }]], xu = e("frame", gu);
const Lu = [["path", { d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7", key: "1a2nng" }]], wu = e("framer", Lu);
const fu = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }], ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }], ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]], Iu = e("frown", fu);
const Cu = [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }], ["rect", { width: "10", height: "8", x: "7", y: "8", rx: "1", key: "vys8me" }]], Nu = e("fullscreen", Cu);
const bu = [["path", { d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5", key: "1wtuz0" }], ["path", { d: "M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16", key: "e09ifn" }], ["path", { d: "M2 21h13", key: "1x0fut" }], ["path", { d: "M3 9h11", key: "1p7c0w" }]], $u = e("fuel", bu);
const qu = [["path", { d: "M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348", key: "8mvsmf" }], ["path", { d: "M16 6h6", key: "1dogtp" }], ["path", { d: "M19 3v6", key: "1ytpjt" }]], zu = e("funnel-plus", qu);
const Su = [["path", { d: "M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473", key: "ol2ft2" }], ["path", { d: "m16.5 3.5 5 5", key: "15e6fa" }], ["path", { d: "m21.5 3.5-5 5", key: "m0lwru" }]], Au = e("funnel-x", Su);
const Hu = [["path", { d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z", key: "sc7q7i" }]], ju = e("funnel", Hu);
const Vu = [["path", { d: "M2 7v10", key: "a2pl2d" }], ["path", { d: "M6 5v14", key: "1kq3d7" }], ["rect", { width: "12", height: "18", x: "10", y: "3", rx: "2", key: "13i7bc" }]], Pu = e("gallery-horizontal-end", Vu);
const Bu = [["path", { d: "M2 3v18", key: "pzttux" }], ["rect", { width: "12", height: "18", x: "6", y: "3", rx: "2", key: "btr8bg" }], ["path", { d: "M22 3v18", key: "6jf3v" }]], Fu = e("gallery-horizontal", Bu);
const Du = [["rect", { width: "18", height: "14", x: "3", y: "3", rx: "2", key: "74y24f" }], ["path", { d: "M4 21h1", key: "16zlid" }], ["path", { d: "M9 21h1", key: "15o7lz" }], ["path", { d: "M14 21h1", key: "v9vybs" }], ["path", { d: "M19 21h1", key: "edywat" }]], Ru = e("gallery-thumbnails", Du);
const Tu = [["path", { d: "M7 2h10", key: "nczekb" }], ["path", { d: "M5 6h14", key: "u2x4p" }], ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2", key: "l0tzu3" }]], Uu = e("gallery-vertical-end", Tu);
const Ou = [["path", { d: "M3 2h18", key: "15qxfx" }], ["rect", { width: "18", height: "12", x: "3", y: "6", rx: "2", key: "1439r6" }], ["path", { d: "M3 22h18", key: "8prr45" }]], Gu = e("gallery-vertical", Ou);
const Zu = [["line", { x1: "6", x2: "10", y1: "11", y2: "11", key: "1gktln" }], ["line", { x1: "8", x2: "8", y1: "9", y2: "13", key: "qnk9ow" }], ["line", { x1: "15", x2: "15.01", y1: "12", y2: "12", key: "krot7o" }], ["line", { x1: "18", x2: "18.01", y1: "10", y2: "10", key: "1lcuu1" }], ["path", { d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z", key: "mfqc10" }]], Wu = e("gamepad-2", Zu);
const Eu = [["path", { d: "M11.146 15.854a1.207 1.207 0 0 1 1.708 0l1.56 1.56A2 2 0 0 1 15 18.828V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.172a2 2 0 0 1 .586-1.414z", key: "1re2og" }], ["path", { d: "M18.828 15a2 2 0 0 1-1.414-.586l-1.56-1.56a1.207 1.207 0 0 1 0-1.708l1.56-1.56A2 2 0 0 1 18.828 9H21a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z", key: "1pchrj" }], ["path", { d: "M6.586 14.414A2 2 0 0 1 5.172 15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2.172a2 2 0 0 1 1.414.586l1.56 1.56a1.207 1.207 0 0 1 0 1.708z", key: "16mt4c" }], ["path", { d: "M9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.172a2 2 0 0 1-.586 1.414l-1.56 1.56a1.207 1.207 0 0 1-1.708 0l-1.56-1.56A2 2 0 0 1 9 5.172z", key: "19ox6c" }]], Xu = e("gamepad-directional", Eu);
const Ku = [["line", { x1: "6", x2: "10", y1: "12", y2: "12", key: "161bw2" }], ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }], ["line", { x1: "15", x2: "15.01", y1: "13", y2: "13", key: "dqpgro" }], ["line", { x1: "18", x2: "18.01", y1: "11", y2: "11", key: "meh2c" }], ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]], Qu = e("gamepad", Ku);
const Ju = [["path", { d: "m12 14 4-4", key: "9kzdfg" }], ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]], Yu = e("gauge", Ju);
const eM = [["path", { d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381", key: "pgg06f" }], ["path", { d: "m16 16 6-6", key: "vzrcl6" }], ["path", { d: "m21.5 10.5-8-8", key: "a17d9x" }], ["path", { d: "m8 8 6-6", key: "18bi4p" }], ["path", { d: "m8.5 7.5 8 8", key: "1oyaui" }]], aM = e("gavel", eM);
const cM = [["path", { d: "M10.5 3 8 9l4 13 4-13-2.5-6", key: "b3dvk1" }], ["path", { d: "M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z", key: "7w4byz" }], ["path", { d: "M2 9h20", key: "16fsjt" }]], tM = e("gem", cM);
const oM = [["path", { d: "M11.5 21a7.5 7.5 0 1 1 7.35-9", key: "1gyj8k" }], ["path", { d: "M13 12V3", key: "18om2a" }], ["path", { d: "M4 21h16", key: "1h09gz" }], ["path", { d: "M9 12V3", key: "geutu0" }]], dM = e("georgian-lari", oM);
const nM = [["path", { d: "M9 10h.01", key: "qbtxuw" }], ["path", { d: "M15 10h.01", key: "1qmjsl" }], ["path", { d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z", key: "uwwb07" }]], hM = e("ghost", nM);
const sM = [["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }], ["path", { d: "M12 8v13", key: "1c76mn" }], ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }], ["path", { d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5", key: "1ihvrl" }]], iM = e("gift", sM);
const yM = [["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }], ["path", { d: "M21 18h-6", key: "139f0c" }], ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }], ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]], rM = e("git-branch-minus", yM);
const kM = [["path", { d: "M6 3v12", key: "qpgusn" }], ["path", { d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", key: "1d02ji" }], ["path", { d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", key: "chk6ph" }], ["path", { d: "M15 6a9 9 0 0 0-9 9", key: "or332x" }], ["path", { d: "M18 15v6", key: "9wciyi" }], ["path", { d: "M21 18h-6", key: "139f0c" }]], pM = e("git-branch-plus", kM);
const lM = [["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }], ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }], ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }], ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]], uM = e("git-branch", lM);
const MM = [["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }], ["line", { x1: "3", x2: "9", y1: "12", y2: "12", key: "1dyftd" }], ["line", { x1: "15", x2: "21", y1: "12", y2: "12", key: "oup4p8" }]], vM = e("git-commit-horizontal", MM);
const mM = [["path", { d: "M12 3v6", key: "1holv5" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }], ["path", { d: "M12 15v6", key: "a9ows0" }]], _M = e("git-commit-vertical", mM);
const gM = [["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }], ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7", key: "1yj91y" }], ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }], ["circle", { cx: "19", cy: "18", r: "3", key: "1qljk2" }], ["path", { d: "M12 18H7a2 2 0 0 1-2-2V9", key: "16sdep" }], ["path", { d: "m9 15 3 3-3 3", key: "1m3kbl" }]], xM = e("git-compare-arrows", gM);
const LM = [["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }], ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }], ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }], ["path", { d: "M11 18H8a2 2 0 0 1-2-2V9", key: "19pyzm" }]], wM = e("git-compare", LM);
const fM = [["circle", { cx: "12", cy: "18", r: "3", key: "1mpf1b" }], ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }], ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }], ["path", { d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9", key: "1uq4wg" }], ["path", { d: "M12 12v3", key: "158kv8" }]], IM = e("git-fork", fM);
const CM = [["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }], ["path", { d: "M5 9v6", key: "158jrl" }], ["circle", { cx: "5", cy: "18", r: "3", key: "104gr9" }], ["path", { d: "M12 3v18", key: "108xh3" }], ["circle", { cx: "19", cy: "6", r: "3", key: "108a5v" }], ["path", { d: "M16 15.7A9 9 0 0 0 19 9", key: "1e3vqb" }]], NM = e("git-graph", CM);
const bM = [["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }], ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }], ["path", { d: "M6 21V9a9 9 0 0 0 9 9", key: "7kw0sc" }]], $M = e("git-merge", bM);
const qM = [["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }], ["path", { d: "M5 9v12", key: "ih889a" }], ["circle", { cx: "19", cy: "18", r: "3", key: "1qljk2" }], ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }], ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7", key: "1yj91y" }]], zM = e("git-pull-request-arrow", qM);
const SM = [["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }], ["path", { d: "M6 9v12", key: "1sc30k" }], ["path", { d: "m21 3-6 6", key: "16nqsk" }], ["path", { d: "m21 9-6-6", key: "9j17rh" }], ["path", { d: "M18 11.5V15", key: "65xf6f" }], ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }]], AM = e("git-pull-request-closed", SM);
const HM = [["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }], ["path", { d: "M6 9v12", key: "1sc30k" }], ["path", { d: "M13 6h3a2 2 0 0 1 2 2v3", key: "1jb6z3" }], ["path", { d: "M18 15v6", key: "9wciyi" }], ["path", { d: "M21 18h-6", key: "139f0c" }]], jM = e("git-pull-request-create", HM);
const VM = [["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }], ["path", { d: "M5 9v12", key: "ih889a" }], ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }], ["path", { d: "M12 6h5a2 2 0 0 1 2 2v3", key: "1rbwk6" }], ["path", { d: "M19 15v6", key: "10aioa" }], ["path", { d: "M22 18h-6", key: "1d5gi5" }]], PM = e("git-pull-request-create-arrow", VM);
const BM = [["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }], ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }], ["path", { d: "M18 6V5", key: "1oao2s" }], ["path", { d: "M18 11v-1", key: "11c8tz" }], ["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }]], FM = e("git-pull-request-draft", BM);
const DM = [["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }], ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }], ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }], ["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }]], RM = e("git-pull-request", DM);
const TM = [["path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4", key: "tonef" }], ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]], UM = e("github", TM);
const OM = [["path", { d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z", key: "148pdi" }]], GM = e("gitlab", OM);
const ZM = [["path", { d: "M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z", key: "p55z4y" }], ["path", { d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0", key: "mjntcy" }]], WM = e("glass-water", ZM);
const EM = [["circle", { cx: "6", cy: "15", r: "4", key: "vux9w4" }], ["circle", { cx: "18", cy: "15", r: "4", key: "18o8ve" }], ["path", { d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2", key: "1ag4bs" }], ["path", { d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2", key: "1hm1gs" }], ["path", { d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2", key: "1r31ai" }]], XM = e("glasses", EM);
const KM = [["path", { d: "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13", key: "qkt0x6" }], ["path", { d: "M2 12h8.5", key: "ovaggd" }], ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2", key: "1of5e8" }], ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1", key: "1fmf51" }]], QM = e("globe-lock", KM);
const JM = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }], ["path", { d: "M2 12h20", key: "9i4pu4" }]], YM = e("globe", JM);
const ev = [["path", { d: "M12 13V2l8 4-8 4", key: "5wlwwj" }], ["path", { d: "M20.561 10.222a9 9 0 1 1-12.55-5.29", key: "1c0wjv" }], ["path", { d: "M8.002 9.997a5 5 0 1 0 8.9 2.02", key: "gb1g7m" }]], av = e("goal", ev);
const cv = [["path", { d: "M2 21V3", key: "1bzk4w" }], ["path", { d: "M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26", key: "1d64pi" }], ["path", { d: "M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3", key: "5hbqbf" }], ["circle", { cx: "16", cy: "11", r: "2", key: "qt15rb" }], ["circle", { cx: "8", cy: "11", r: "2", key: "ssideg" }]], tv = e("gpu", cv);
const ov = [["path", { d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z", key: "j76jl0" }], ["path", { d: "M22 10v6", key: "1lu8f3" }], ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]], dv = e("graduation-cap", ov);
const nv = [["path", { d: "M22 5V2l-5.89 5.89", key: "1eenpo" }], ["circle", { cx: "16.6", cy: "15.89", r: "3", key: "xjtalx" }], ["circle", { cx: "8.11", cy: "7.4", r: "3", key: "u2fv6i" }], ["circle", { cx: "12.35", cy: "11.65", r: "3", key: "i6i8g7" }], ["circle", { cx: "13.91", cy: "5.85", r: "3", key: "6ye0dv" }], ["circle", { cx: "18.15", cy: "10.09", r: "3", key: "snx9no" }], ["circle", { cx: "6.56", cy: "13.2", r: "3", key: "17x4xg" }], ["circle", { cx: "10.8", cy: "17.44", r: "3", key: "1hogw9" }], ["circle", { cx: "5", cy: "19", r: "3", key: "1sn6vo" }]], hv = e("grape", nv);
const sv = [["path", { d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3", key: "11za1p" }], ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]], iv = e("grid-2x2-check", sv);
const yv = [["path", { d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3", key: "11za1p" }], ["path", { d: "M16 19h6", key: "xwg31i" }], ["path", { d: "M19 22v-6", key: "qhmiwi" }]], rv = e("grid-2x2-plus", yv);
const kv = [["path", { d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3", key: "11za1p" }], ["path", { d: "m16 16 5 5", key: "8tpb07" }], ["path", { d: "m16 21 5-5", key: "193jll" }]], pv = e("grid-2x2-x", kv);
const lv = [["path", { d: "M12 3v18", key: "108xh3" }], ["path", { d: "M3 12h18", key: "1i2n21" }], ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]], uv = e("grid-2x2", lv);
const Mv = [["path", { d: "M15 3v18", key: "14nvp0" }], ["path", { d: "M3 12h18", key: "1i2n21" }], ["path", { d: "M9 3v18", key: "fh3hqa" }], ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]], vv = e("grid-3x2", Mv);
const mv = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M3 9h18", key: "1pudct" }], ["path", { d: "M3 15h18", key: "5xshup" }], ["path", { d: "M9 3v18", key: "fh3hqa" }], ["path", { d: "M15 3v18", key: "14nvp0" }]], _v = e("grid-3x3", mv);
const gv = [["circle", { cx: "12", cy: "9", r: "1", key: "124mty" }], ["circle", { cx: "19", cy: "9", r: "1", key: "1ruzo2" }], ["circle", { cx: "5", cy: "9", r: "1", key: "1a8b28" }], ["circle", { cx: "12", cy: "15", r: "1", key: "1e56xg" }], ["circle", { cx: "19", cy: "15", r: "1", key: "1a92ep" }], ["circle", { cx: "5", cy: "15", r: "1", key: "5r1jwy" }]], xv = e("grip-horizontal", gv);
const Lv = [["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }], ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }], ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }], ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }], ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }], ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]], wv = e("grip-vertical", Lv);
const fv = [["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }], ["circle", { cx: "19", cy: "5", r: "1", key: "w8mnmm" }], ["circle", { cx: "5", cy: "5", r: "1", key: "lttvr7" }], ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }], ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }], ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }], ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }], ["circle", { cx: "19", cy: "19", r: "1", key: "shf9b7" }], ["circle", { cx: "5", cy: "19", r: "1", key: "bfqh0e" }]], Iv = e("grip", fv);
const Cv = [["path", { d: "M3 7V5c0-1.1.9-2 2-2h2", key: "adw53z" }], ["path", { d: "M17 3h2c1.1 0 2 .9 2 2v2", key: "an4l38" }], ["path", { d: "M21 17v2c0 1.1-.9 2-2 2h-2", key: "144t0e" }], ["path", { d: "M7 21H5c-1.1 0-2-.9-2-2v-2", key: "rtnfgi" }], ["rect", { width: "7", height: "5", x: "7", y: "7", rx: "1", key: "1eyiv7" }], ["rect", { width: "7", height: "5", x: "10", y: "12", rx: "1", key: "1qlmkx" }]], Nv = e("group", Cv);
const bv = [["path", { d: "m11.9 12.1 4.514-4.514", key: "109xqo" }], ["path", { d: "M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z", key: "txyc8t" }], ["path", { d: "m6 16 2 2", key: "16qmzd" }], ["path", { d: "M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z", key: "1de1vg" }]], $v = e("guitar", bv);
const qv = [["path", { d: "M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856", key: "1k1t7q" }], ["path", { d: "M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288", key: "153t1g" }], ["path", { d: "M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025", key: "gzrt0n" }], ["path", { d: "m8.5 16.5-1-1", key: "otr954" }]], zv = e("ham", qv);
const Sv = [["path", { d: "M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25", key: "5dloqd" }], ["path", { d: "M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2", key: "1vl3my" }], ["path", { d: "M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0", key: "1us75o" }], ["path", { d: "m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2", key: "qqzweh" }]], Av = e("hamburger", Sv);
const Hv = [["path", { d: "m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9", key: "1hayfq" }], ["path", { d: "m18 15 4-4", key: "16gjal" }], ["path", { d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5", key: "15ts47" }]], jv = e("hammer", Hv);
const Vv = [["path", { d: "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17", key: "geh8rc" }], ["path", { d: "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9", key: "1fto5m" }], ["path", { d: "m2 16 6 6", key: "1pfhp9" }], ["circle", { cx: "16", cy: "9", r: "2.9", key: "1n0dlu" }], ["circle", { cx: "6", cy: "5", r: "3", key: "151irh" }]], Pv = e("hand-coins", Vv);
const Bv = [["path", { d: "M12.035 17.012a3 3 0 0 0-3-3l-.311-.002a.72.72 0 0 1-.505-1.229l1.195-1.195A2 2 0 0 1 10.828 11H12a2 2 0 0 0 0-4H9.243a3 3 0 0 0-2.122.879l-2.707 2.707A4.83 4.83 0 0 0 3 14a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0", key: "1ff7rl" }], ["path", { d: "M13.888 9.662A2 2 0 0 0 17 8V5A2 2 0 1 0 13 5", key: "1xmd21" }], ["path", { d: "M9 5A2 2 0 1 0 5 5V10", key: "f3wfjw" }], ["path", { d: "M9 7V4A2 2 0 1 1 13 4V7.268", key: "eaoucv" }]], Fv = e("hand-fist", Bv);
const Dv = [["path", { d: "M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4", key: "edstyy" }], ["path", { d: "M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2", key: "19wdwo" }], ["path", { d: "M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5", key: "1lugqo" }], ["path", { d: "M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2", key: "1hbeus" }], ["path", { d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0", key: "1etffm" }]], Rv = e("hand-grab", Dv);
const Tv = [["path", { d: "M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16", key: "1v1a37" }], ["path", { d: "m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95", key: "fhfbnt" }], ["path", { d: "m2 15 6 6", key: "10dquu" }], ["path", { d: "m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91", key: "1x6kdw" }]], Uv = e("hand-heart", Tv);
const Ov = [["path", { d: "M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14", key: "1j4xps" }], ["path", { d: "m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9", key: "uospg8" }], ["path", { d: "m2 13 6 6", key: "16e5sb" }]], Gv = e("hand-helping", Ov);
const Zv = [["path", { d: "M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4", key: "wc6myp" }], ["path", { d: "M14 11V9a2 2 0 1 0-4 0v2", key: "94qvcw" }], ["path", { d: "M10 10.5V5a2 2 0 1 0-4 0v9", key: "m1ah89" }], ["path", { d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5", key: "t1skq1" }]], Wv = e("hand-metal", Zv);
const Ev = [["path", { d: "M12 3V2", key: "ar7q03" }], ["path", { d: "m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5", key: "n2g93r" }], ["path", { d: "M2 14h12a2 2 0 0 1 0 4h-2", key: "1o2jem" }], ["path", { d: "M4 10h16", key: "img6z1" }], ["path", { d: "M5 10a7 7 0 0 1 14 0", key: "1ega1o" }], ["path", { d: "M5 14v6a1 1 0 0 1-1 1H2", key: "1hescx" }]], Xv = e("hand-platter", Ev);
const Kv = [["path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2", key: "1fvzgz" }], ["path", { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2", key: "1kc0my" }], ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8", key: "10h0bg" }], ["path", { d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15", key: "1s1gnw" }]], Qv = e("hand", Kv);
const Jv = [["path", { d: "M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z", key: "1qbui5" }], ["path", { d: "M8 11V6a4 4 0 0 1 8 0v5", key: "tcht90" }]], Yv = e("handbag", Jv);
const em = [["path", { d: "m11 17 2 2a1 1 0 1 0 3-3", key: "efffak" }], ["path", { d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4", key: "9pr0kb" }], ["path", { d: "m21 3 1 11h-2", key: "1tisrp" }], ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3", key: "1uvwmv" }], ["path", { d: "M3 4h8", key: "1ep09j" }]], am = e("handshake", em);
const cm = [["path", { d: "M12 2v8", key: "1q4o3n" }], ["path", { d: "m16 6-4 4-4-4", key: "6wukr" }], ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }], ["path", { d: "M6 18h.01", key: "uhywen" }], ["path", { d: "M10 18h.01", key: "h775k" }]], tm = e("hard-drive-download", cm);
const om = [["path", { d: "m16 6-4-4-4 4", key: "13yo43" }], ["path", { d: "M12 2v8", key: "1q4o3n" }], ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }], ["path", { d: "M6 18h.01", key: "uhywen" }], ["path", { d: "M10 18h.01", key: "h775k" }]], dm = e("hard-drive-upload", om);
const nm = [["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }], ["path", { d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z", key: "oot6mr" }], ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }], ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" }]], hm = e("hard-drive", nm);
const sm = [["path", { d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5", key: "1p9q5i" }], ["path", { d: "M14 6a6 6 0 0 1 6 6v3", key: "1hnv84" }], ["path", { d: "M4 15v-3a6 6 0 0 1 6-6", key: "9ciidu" }], ["rect", { x: "2", y: "15", width: "20", height: "4", rx: "1", key: "g3x8cw" }]], im = e("hard-hat", sm);
const ym = [["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }], ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }], ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }], ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]], rm = e("hash", ym);
const km = [["path", { d: "M14 18a2 2 0 0 0-4 0", key: "1v8fkw" }], ["path", { d: "m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11", key: "1fkr7p" }], ["path", { d: "M2 11h20", key: "3eubbj" }], ["circle", { cx: "17", cy: "18", r: "3", key: "82mm0e" }], ["circle", { cx: "7", cy: "18", r: "3", key: "lvkj7j" }]], pm = e("hat-glasses", km);
const lm = [["path", { d: "m5.2 6.2 1.4 1.4", key: "17imol" }], ["path", { d: "M2 13h2", key: "13gyu8" }], ["path", { d: "M20 13h2", key: "16rner" }], ["path", { d: "m17.4 7.6 1.4-1.4", key: "t4xlah" }], ["path", { d: "M22 17H2", key: "1gtaj3" }], ["path", { d: "M22 21H2", key: "1gy6en" }], ["path", { d: "M16 13a4 4 0 0 0-8 0", key: "1dyczq" }], ["path", { d: "M12 5V2.5", key: "1vytko" }]], um = e("haze", lm);
const Mm = [["path", { d: "M10 12H6", key: "15f2ro" }], ["path", { d: "M10 15V9", key: "1lckn7" }], ["path", { d: "M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z", key: "b3f847" }], ["path", { d: "M6 15V9", key: "12stmj" }], ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2", key: "qneu4z" }]], vm = e("hd", Mm);
const mm = [["path", { d: "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z", key: "2128wb" }], ["path", { d: "M7.5 12h9", key: "1t0ckc" }]], _m = e("hdmi-port", mm);
const gm = [["path", { d: "M4 12h8", key: "17cfdx" }], ["path", { d: "M4 18V6", key: "1rz3zl" }], ["path", { d: "M12 18V6", key: "zqpxq5" }], ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]], xm = e("heading-1", gm);
const Lm = [["path", { d: "M4 12h8", key: "17cfdx" }], ["path", { d: "M4 18V6", key: "1rz3zl" }], ["path", { d: "M12 18V6", key: "zqpxq5" }], ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]], wm = e("heading-2", Lm);
const fm = [["path", { d: "M4 12h8", key: "17cfdx" }], ["path", { d: "M4 18V6", key: "1rz3zl" }], ["path", { d: "M12 18V6", key: "zqpxq5" }], ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }], ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]], Im = e("heading-3", fm);
const Cm = [["path", { d: "M12 18V6", key: "zqpxq5" }], ["path", { d: "M17 10v3a1 1 0 0 0 1 1h3", key: "tj5zdr" }], ["path", { d: "M21 10v8", key: "1kdml4" }], ["path", { d: "M4 12h8", key: "17cfdx" }], ["path", { d: "M4 18V6", key: "1rz3zl" }]], Nm = e("heading-4", Cm);
const bm = [["path", { d: "M4 12h8", key: "17cfdx" }], ["path", { d: "M4 18V6", key: "1rz3zl" }], ["path", { d: "M12 18V6", key: "zqpxq5" }], ["path", { d: "M17 13v-3h4", key: "1nvgqp" }], ["path", { d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17", key: "2nebdn" }]], $m = e("heading-5", bm);
const qm = [["path", { d: "M4 12h8", key: "17cfdx" }], ["path", { d: "M4 18V6", key: "1rz3zl" }], ["path", { d: "M12 18V6", key: "zqpxq5" }], ["circle", { cx: "19", cy: "16", r: "2", key: "15mx69" }], ["path", { d: "M20 10c-2 2-3 3.5-3 6", key: "f35dl0" }]], zm = e("heading-6", qm);
const Sm = [["path", { d: "M6 12h12", key: "8npq4p" }], ["path", { d: "M6 20V4", key: "1w1bmo" }], ["path", { d: "M18 20V4", key: "o2hl4u" }]], Am = e("heading", Sm);
const Hm = [["path", { d: "M21 14h-1.343", key: "1jdnxi" }], ["path", { d: "M9.128 3.47A9 9 0 0 1 21 12v3.343", key: "6kipu2" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3", key: "9x50f4" }], ["path", { d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364", key: "1bkxnm" }]], jm = e("headphone-off", Hm);
const Vm = [["path", { d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3", key: "1xhozi" }]], Pm = e("headphones", Vm);
const Bm = [["path", { d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z", key: "12oyoe" }], ["path", { d: "M21 16v2a4 4 0 0 1-4 4h-5", key: "1x7m43" }]], Fm = e("headset", Bm);
const Dm = [["path", { d: "M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15", key: "idzbju" }], ["path", { d: "M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z", key: "1su70f" }]], Rm = e("heart-crack", Dm);
const Tm = [["path", { d: "M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762", key: "17lmqv" }]], Um = e("heart-handshake", Tm);
const Om = [["path", { d: "m14.876 18.99-1.368 1.323a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.244 1.572", key: "15yztm" }], ["path", { d: "M15 15h6", key: "1u4692" }]], Gm = e("heart-minus", Om);
const Zm = [["path", { d: "M10.5 4.893a5.5 5.5 0 0 1 1.091.931.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 1.872-1.002 3.356-2.187 4.655", key: "1inpfl" }], ["path", { d: "m16.967 16.967-3.459 3.346a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 2.747-4.761", key: "vbc6x7" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]], Wm = e("heart-off", Zm);
const Em = [["path", { d: "m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49", key: "wg5jx" }], ["path", { d: "M15 15h6", key: "1u4692" }], ["path", { d: "M18 12v6", key: "1houu1" }]], Xm = e("heart-plus", Em);
const Km = [["path", { d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5", key: "mvr1a0" }], ["path", { d: "M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "auskq0" }]], Qm = e("heart-pulse", Km);
const Jm = [["path", { d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5", key: "mvr1a0" }]], Ym = e("heart", Jm);
const e_ = [["path", { d: "M11 8c2-3-2-3 0-6", key: "1ldv5m" }], ["path", { d: "M15.5 8c2-3-2-3 0-6", key: "1otqoz" }], ["path", { d: "M6 10h.01", key: "1lbq93" }], ["path", { d: "M6 14h.01", key: "zudwn7" }], ["path", { d: "M10 16v-4", key: "1c25yv" }], ["path", { d: "M14 16v-4", key: "1dkbt8" }], ["path", { d: "M18 16v-4", key: "1yg9me" }], ["path", { d: "M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3", key: "1ubg90" }], ["path", { d: "M5 20v2", key: "1abpe8" }], ["path", { d: "M19 20v2", key: "kqn6ft" }]], a_ = e("heater", e_);
const c_ = [["path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z", key: "yt0hxn" }]], t_ = e("hexagon", c_);
const o_ = [["path", { d: "M11 17v4", key: "14wq8k" }], ["path", { d: "M14 3v8a2 2 0 0 0 2 2h5.865", key: "12oo5h" }], ["path", { d: "M17 17v4", key: "hdt4hh" }], ["path", { d: "M18 17a4 4 0 0 0 4-4 8 6 0 0 0-8-6 6 5 0 0 0-6 5v3a2 2 0 0 0 2 2z", key: "yynif" }], ["path", { d: "M2 10v5", key: "sa5akn" }], ["path", { d: "M6 3h16", key: "27qw71" }], ["path", { d: "M7 21h14", key: "1ugz0u" }], ["path", { d: "M8 13H2", key: "1thz1o" }]], d_ = e("helicopter", o_);
const n_ = [["path", { d: "m9 11-6 6v3h9l3-3", key: "1a3l36" }], ["path", { d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4", key: "14a9rk" }]], h_ = e("highlighter", n_);
const s_ = [["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }], ["path", { d: "M3 3v5h5", key: "1xhq8a" }], ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]], i_ = e("history", s_);
const y_ = [["path", { d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27", key: "qyzcap" }], ["path", { d: "M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28", key: "y078lb" }], ["path", { d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26", key: "1utre3" }], ["path", { d: "M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25", key: "17o9hm" }], ["path", { d: "M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75", key: "1d1n4p" }], ["path", { d: "M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24", key: "9uv3tt" }], ["path", { d: "M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28", key: "1292wz" }], ["path", { d: "M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05", key: "7ozu9p" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]], r_ = e("hop-off", y_);
const k_ = [["path", { d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18", key: "18lxf1" }], ["path", { d: "M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88", key: "vtfxrw" }], ["path", { d: "M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36", key: "13hl71" }], ["path", { d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87", key: "1sl8oj" }], ["path", { d: "M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08", key: "19c6kt" }], ["path", { d: "M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57", key: "85ghs3" }], ["path", { d: "M4.93 4.93 3 3a.7.7 0 0 1 0-1", key: "x087yj" }], ["path", { d: "M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15", key: "11xdqo" }]], p_ = e("hop", k_);
const l_ = [["path", { d: "M12 7v4", key: "xawao1" }], ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }], ["path", { d: "M14 9h-4", key: "1w2s2s" }], ["path", { d: "M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2", key: "1tthqt" }], ["path", { d: "M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16", key: "dw4p4i" }]], u_ = e("hospital", l_);
const M_ = [["path", { d: "M10 22v-6.57", key: "1wmca3" }], ["path", { d: "M12 11h.01", key: "z322tv" }], ["path", { d: "M12 7h.01", key: "1ivr5q" }], ["path", { d: "M14 15.43V22", key: "1q2vjd" }], ["path", { d: "M15 16a5 5 0 0 0-6 0", key: "o9wqvi" }], ["path", { d: "M16 11h.01", key: "xkw8gn" }], ["path", { d: "M16 7h.01", key: "1kdx03" }], ["path", { d: "M8 11h.01", key: "1dfujw" }], ["path", { d: "M8 7h.01", key: "1vti4s" }], ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2", key: "1uxh74" }]], v_ = e("hotel", M_);
const m_ = [["path", { d: "M5 22h14", key: "ehvnwv" }], ["path", { d: "M5 2h14", key: "pdyrp9" }], ["path", { d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22", key: "1d314k" }], ["path", { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2", key: "1vvvr6" }]], __ = e("hourglass", m_);
const g_ = [["path", { d: "M10 12V8.964", key: "1vll13" }], ["path", { d: "M14 12V8.964", key: "1x3qvg" }], ["path", { d: "M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z", key: "ppykja" }], ["path", { d: "M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2", key: "365xoy" }]], x_ = e("house-plug", g_);
const L_ = [["path", { d: "M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z", key: "n9s7kx" }], ["path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "r6nss1" }]], w_ = e("house-heart", L_);
const f_ = [["path", { d: "M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35", key: "8ek5ge" }], ["path", { d: "M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8", key: "1rbg29" }], ["path", { d: "M15 18h6", key: "3b3c90" }], ["path", { d: "M18 15v6", key: "9wciyi" }]], I_ = e("house-plus", f_);
const C_ = [["path", { d: "M9.5 13.866a4 4 0 0 1 5 .01", key: "1wy54i" }], ["path", { d: "M12 17h.01", key: "p32p05" }], ["path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "r6nss1" }], ["path", { d: "M7 10.754a8 8 0 0 1 10 0", key: "exoy2g" }]], N_ = e("house-wifi", C_);
const b_ = [["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }], ["path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "r6nss1" }]], $_ = e("house", b_);
const q_ = [["path", { d: "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0", key: "1uxfcu" }], ["path", { d: "M12.14 11a3.5 3.5 0 1 1 6.71 0", key: "4k3m1s" }], ["path", { d: "M15.5 6.5a3.5 3.5 0 1 0-7 0", key: "zmuahr" }]], z_ = e("ice-cream-bowl", q_);
const S_ = [["path", { d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11", key: "1v6356" }], ["path", { d: "M17 7A5 5 0 0 0 7 7", key: "151p3v" }], ["path", { d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4", key: "1sdaij" }]], A_ = e("ice-cream-cone", S_);
const H_ = [["path", { d: "M13.5 8h-3", key: "xvov4w" }], ["path", { d: "m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3", key: "16uttc" }], ["path", { d: "M16.899 22A5 5 0 0 0 7.1 22", key: "1d0ppr" }], ["path", { d: "m9 2 3 6", key: "1o7bd9" }], ["circle", { cx: "12", cy: "15", r: "3", key: "g36mzq" }]], j_ = e("id-card-lanyard", H_);
const V_ = [["path", { d: "M16 10h2", key: "8sgtl7" }], ["path", { d: "M16 14h2", key: "epxaof" }], ["path", { d: "M6.17 15a3 3 0 0 1 5.66 0", key: "n6f512" }], ["circle", { cx: "9", cy: "11", r: "2", key: "yxgjnd" }], ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2", key: "qneu4z" }]], P_ = e("id-card", V_);
const B_ = [["path", { d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7", key: "m87ecr" }], ["line", { x1: "16", x2: "22", y1: "5", y2: "5", key: "ez7e4s" }], ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }], ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]], F_ = e("image-minus", B_);
const D_ = [["path", { d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21", key: "9csbqa" }], ["path", { d: "m14 19 3 3v-5.5", key: "9ldu5r" }], ["path", { d: "m17 22 3-3", key: "1nkfve" }], ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]], R_ = e("image-down", D_);
const T_ = [["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }], ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83", key: "1bzlo9" }], ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21", key: "1q0aeu" }], ["line", { x1: "18", x2: "21", y1: "12", y2: "15", key: "5mozeu" }], ["path", { d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59", key: "mmje98" }], ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }]], U_ = e("image-off", T_);
const O_ = [["path", { d: "M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z", key: "nrt1m3" }], ["path", { d: "M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6", key: "99hgts" }], ["path", { d: "m6 21 5-5", key: "1wyjai" }], ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]], G_ = e("image-play", O_);
const Z_ = [["path", { d: "M16 5h6", key: "1vod17" }], ["path", { d: "M19 2v6", key: "4bpg5p" }], ["path", { d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5", key: "1ue2ih" }], ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }], ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]], W_ = e("image-plus", Z_);
const E_ = [["path", { d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21", key: "9csbqa" }], ["path", { d: "m14 19.5 3-3 3 3", key: "9vmjn0" }], ["path", { d: "M17 22v-5.5", key: "1aa6fl" }], ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]], X_ = e("image-up", E_);
const K_ = [["path", { d: "M16 3h5v5", key: "1806ms" }], ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }], ["path", { d: "M21 12v3", key: "1wzk3p" }], ["path", { d: "m21 3-5 5", key: "1g5oa7" }], ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }], ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }], ["path", { d: "M9 3h3", key: "d52fa" }], ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]], Q_ = e("image-upscale", K_);
const J_ = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }], ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }], ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]], Y_ = e("image", J_);
const eg = [["path", { d: "m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16", key: "9kzy35" }], ["path", { d: "M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2", key: "1t0f0t" }], ["circle", { cx: "13", cy: "7", r: "1", fill: "currentColor", key: "1obus6" }], ["rect", { x: "8", y: "2", width: "14", height: "14", rx: "2", key: "1gvhby" }]], ag = e("images", eg);
const cg = [["path", { d: "M12 3v12", key: "1x0j5s" }], ["path", { d: "m8 11 4 4 4-4", key: "1dohi6" }], ["path", { d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4", key: "1ywtjm" }]], tg = e("import", cg);
const og = [["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }], ["path", { d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z", key: "oot6mr" }]], dg = e("inbox", og);
const ng = [["path", { d: "M6 3h12", key: "ggurg9" }], ["path", { d: "M6 8h12", key: "6g4wlu" }], ["path", { d: "m6 13 8.5 8", key: "u1kupk" }], ["path", { d: "M6 13h3", key: "wdp6ag" }], ["path", { d: "M9 13c6.667 0 6.667-10 0-10", key: "1nkvk2" }]], hg = e("indian-rupee", ng);
const sg = [["path", { d: "M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8", key: "18ogeb" }]], ig = e("infinity", sg);
const yg = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 16v-4", key: "1dtifu" }], ["path", { d: "M12 8h.01", key: "e9boi3" }]], rg = e("info", yg);
const kg = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M7 7h.01", key: "7u93v4" }], ["path", { d: "M17 7h.01", key: "14a9sn" }], ["path", { d: "M7 17h.01", key: "19xn7k" }], ["path", { d: "M17 17h.01", key: "1sd3ek" }]], pg = e("inspection-panel", kg);
const lg = [["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }], ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }], ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]], ug = e("instagram", lg);
const Mg = [["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }], ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }], ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]], vg = e("italic", Mg);
const mg = [["path", { d: "m16 14 4 4-4 4", key: "hkso8o" }], ["path", { d: "M20 10a8 8 0 1 0-8 8h8", key: "1bik7b" }]], _g = e("iteration-ccw", mg);
const gg = [["path", { d: "M4 10a8 8 0 1 1 8 8H4", key: "svv66n" }], ["path", { d: "m8 22-4-4 4-4", key: "6g7gki" }]], xg = e("iteration-cw", gg);
const Lg = [["path", { d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3", key: "2ej80x" }], ["path", { d: "M6 15h12", key: "1hwgt5" }], ["path", { d: "M6 11h12", key: "wf4gp6" }]], wg = e("japanese-yen", Lg);
const fg = [["path", { d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z", key: "jg2n2t" }], ["path", { d: "M6 15v-2", key: "gd6mvg" }], ["path", { d: "M12 15V9", key: "8c7uyn" }], ["circle", { cx: "12", cy: "6", r: "3", key: "1gm2ql" }]], Ig = e("joystick", fg);
const Cg = [["path", { d: "M5 3v14", key: "9nsxs2" }], ["path", { d: "M12 3v8", key: "1h2ygw" }], ["path", { d: "M19 3v18", key: "1sk56x" }]], Ng = e("kanban", Cg);
const bg = [["path", { d: "M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z", key: "skzb1g" }], ["path", { d: "M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61", key: "cv9jm7" }], ["path", { d: "m6.707 6.707 10.586 10.586", key: "d2l993" }], ["path", { d: "M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z", key: "i0et4n" }]], $g = e("kayak", bg);
const qg = [["path", { d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z", key: "1s6t7t" }], ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]], zg = e("key-round", qg);
const Sg = [["path", { d: "M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z", key: "165ttr" }], ["path", { d: "m14 7 3 3", key: "1r5n42" }], ["path", { d: "m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814", key: "1ubxi2" }]], Ag = e("key-square", Sg);
const Hg = [["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }], ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }], ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]], jg = e("key", Hg);
const Vg = [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }], ["path", { d: "M6 8h4", key: "utf9t1" }], ["path", { d: "M14 8h.01", key: "1primd" }], ["path", { d: "M18 8h.01", key: "emo2bl" }], ["path", { d: "M2 12h20", key: "9i4pu4" }], ["path", { d: "M6 12v4", key: "dy92yo" }], ["path", { d: "M10 12v4", key: "1fxnav" }], ["path", { d: "M14 12v4", key: "1hft58" }], ["path", { d: "M18 12v4", key: "tjjnbz" }]], Pg = e("keyboard-music", Vg);
const Bg = [["path", { d: "M 20 4 A2 2 0 0 1 22 6", key: "1g1fkt" }], ["path", { d: "M 22 6 L 22 16.41", key: "1qjg3w" }], ["path", { d: "M 7 16 L 16 16", key: "n0yqwb" }], ["path", { d: "M 9.69 4 L 20 4", key: "kbpcgx" }], ["path", { d: "M14 8h.01", key: "1primd" }], ["path", { d: "M18 8h.01", key: "emo2bl" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2", key: "s23sx2" }], ["path", { d: "M6 8h.01", key: "x9i8wu" }], ["path", { d: "M8 12h.01", key: "czm47f" }]], Fg = e("keyboard-off", Bg);
const Dg = [["path", { d: "M10 8h.01", key: "1r9ogq" }], ["path", { d: "M12 12h.01", key: "1mp3jc" }], ["path", { d: "M14 8h.01", key: "1primd" }], ["path", { d: "M16 12h.01", key: "1l6xoz" }], ["path", { d: "M18 8h.01", key: "emo2bl" }], ["path", { d: "M6 8h.01", key: "x9i8wu" }], ["path", { d: "M7 16h10", key: "wp8him" }], ["path", { d: "M8 12h.01", key: "czm47f" }], ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }]], Rg = e("keyboard", Dg);
const Tg = [["path", { d: "M12 2v5", key: "nd4vlx" }], ["path", { d: "M14.829 15.998a3 3 0 1 1-5.658 0", key: "1pybiy" }], ["path", { d: "M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z", key: "ma1wor" }]], Ug = e("lamp-ceiling", Tg);
const Og = [["path", { d: "M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z", key: "sb8slu" }], ["path", { d: "m14.207 4.793-3.414 3.414", key: "m2x3oj" }], ["path", { d: "M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z", key: "8b3myj" }], ["path", { d: "m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18", key: "43s6cu" }]], Gg = e("lamp-desk", Og);
const Zg = [["path", { d: "M12 10v12", key: "6ubwww" }], ["path", { d: "M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z", key: "1o95gh" }], ["path", { d: "M9 22h6", key: "1rlq3v" }]], Wg = e("lamp-floor", Zg);
const Eg = [["path", { d: "M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629z", key: "u4w2d7" }], ["path", { d: "M6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z", key: "15356w" }], ["path", { d: "M8 6h4a2 2 0 0 1 2 2v5", key: "1m6m7x" }]], Xg = e("lamp-wall-down", Eg);
const Kg = [["path", { d: "M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629z", key: "1uvrbf" }], ["path", { d: "M6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z", key: "154r2a" }], ["path", { d: "M8 18h4a2 2 0 0 0 2-2v-5", key: "z9mbu0" }]], Qg = e("lamp-wall-up", Kg);
const Jg = [["path", { d: "m12 8 6-3-6-3v10", key: "mvpnpy" }], ["path", { d: "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12", key: "ek95tt" }], ["path", { d: "m6.49 12.85 11.02 6.3", key: "1kt42w" }], ["path", { d: "M17.51 12.85 6.5 19.15", key: "v55bdg" }]], Yg = e("land-plot", Jg);
const ex = [["path", { d: "M12 12v6", key: "3ahymv" }], ["path", { d: "M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z", key: "1l7kg2" }], ["path", { d: "M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z", key: "1mmzpi" }]], ax = e("lamp", ex);
const cx = [["path", { d: "M10 18v-7", key: "wt116b" }], ["path", { d: "M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z", key: "1m329m" }], ["path", { d: "M14 18v-7", key: "vav6t3" }], ["path", { d: "M18 18v-7", key: "aexdmj" }], ["path", { d: "M3 22h18", key: "8prr45" }], ["path", { d: "M6 18v-7", key: "1ivflk" }]], tx = e("landmark", cx);
const ox = [["path", { d: "m5 8 6 6", key: "1wu5hv" }], ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }], ["path", { d: "M2 5h12", key: "or177f" }], ["path", { d: "M7 2h1", key: "1t2jsx" }], ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }], ["path", { d: "M14 18h6", key: "1m8k6r" }]], dx = e("languages", ox);
const nx = [["path", { d: "M2 20h20", key: "owomy5" }], ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }], ["rect", { x: "3", y: "4", width: "18", height: "12", rx: "2", key: "8ur36m" }]], hx = e("laptop-minimal-check", nx);
const sx = [["rect", { width: "18", height: "12", x: "3", y: "4", rx: "2", ry: "2", key: "1qhy41" }], ["line", { x1: "2", x2: "22", y1: "20", y2: "20", key: "ni3hll" }]], ix = e("laptop-minimal", sx);
const yx = [["path", { d: "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z", key: "1pdavp" }], ["path", { d: "M20.054 15.987H3.946", key: "14rxg9" }]], rx = e("laptop", yx);
const kx = [["path", { d: "M7 22a5 5 0 0 1-2-4", key: "umushi" }], ["path", { d: "M7 16.93c.96.43 1.96.74 2.99.91", key: "ybbtv3" }], ["path", { d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2", key: "gt5e1w" }], ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", key: "bq3ynw" }], ["path", { d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z", key: "72q637" }]], px = e("lasso-select", kx);
const lx = [["path", { d: "M3.704 14.467A10 8 0 0 1 2 10a10 8 0 0 1 20 0 10 8 0 0 1-10 8 10 8 0 0 1-5.181-1.158", key: "1yant3" }], ["path", { d: "M7 22a5 5 0 0 1-2-3.994", key: "1xp6a4" }], ["circle", { cx: "5", cy: "16", r: "2", key: "18csp3" }]], ux = e("lasso", lx);
const Mx = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z", key: "b2q4dd" }], ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }], ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]], vx = e("laugh", Mx);
const mx = [["path", { d: "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z", key: "15q6uc" }], ["path", { d: "m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845", key: "byia6g" }]], _x = e("layers-2", mx);
const gx = [["path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z", key: "zzgyd3" }], ["path", { d: "M16 17h6", key: "1ook5g" }], ["path", { d: "M19 14v6", key: "1ckrd5" }], ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178", key: "1ia9y3" }], ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962", key: "jksky3" }]], xx = e("layers-plus", gx);
const Lx = [["path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z", key: "zw3jo" }], ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12", key: "1wduqc" }], ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17", key: "kqbvx6" }]], wx = e("layers", Lx);
const fx = [["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }], ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }], ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }], ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]], Ix = e("layout-dashboard", fx);
const Cx = [["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }], ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }], ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }], ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]], Nx = e("layout-grid", Cx);
const bx = [["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }], ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }], ["path", { d: "M14 4h7", key: "3xa0d5" }], ["path", { d: "M14 9h7", key: "1icrd9" }], ["path", { d: "M14 15h7", key: "1mj8o2" }], ["path", { d: "M14 20h7", key: "11slyb" }]], $x = e("layout-list", bx);
const qx = [["rect", { width: "7", height: "18", x: "3", y: "3", rx: "1", key: "2obqm" }], ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }], ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }]], zx = e("layout-panel-left", qx);
const Sx = [["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }], ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }], ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }]], Ax = e("layout-panel-top", Sx);
const Hx = [["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }], ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1", key: "jqznyg" }], ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1", key: "q5h2i8" }]], jx = e("layout-template", Hx);
const Vx = [["path", { d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z", key: "nnexq3" }], ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]], Px = e("leaf", Vx);
const Bx = [["path", { d: "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22", key: "1134nt" }], ["path", { d: "M2 22 17 7", key: "1q7jp2" }]], Fx = e("leafy-green", Bx);
const Dx = [["path", { d: "M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3", key: "13jjxg" }], ["path", { d: "M18 6V3a1 1 0 0 0-1-1h-3", key: "1550fe" }], ["rect", { width: "8", height: "12", x: "8", y: "10", rx: "1", key: "qmu8b6" }]], Rx = e("lectern", Dx);
const Tx = [["rect", { width: "8", height: "18", x: "3", y: "3", rx: "1", key: "oynpb5" }], ["path", { d: "M7 3v18", key: "bbkbws" }], ["path", { d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z", key: "1qboyk" }]], Ux = e("library-big", Tx);
const Ox = [["path", { d: "m16 6 4 14", key: "ji33uf" }], ["path", { d: "M12 6v14", key: "1n7gus" }], ["path", { d: "M8 8v12", key: "1gg7y9" }], ["path", { d: "M4 4v16", key: "6qkkli" }]], Gx = e("library", Ox);
const Zx = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m4.93 4.93 4.24 4.24", key: "1ymg45" }], ["path", { d: "m14.83 9.17 4.24-4.24", key: "1cb5xl" }], ["path", { d: "m14.83 14.83 4.24 4.24", key: "q42g0n" }], ["path", { d: "m9.17 14.83-4.24 4.24", key: "bqpfvv" }], ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }]], Wx = e("life-buoy", Zx);
const Ex = [["path", { d: "M14 12h2v8", key: "c1fccl" }], ["path", { d: "M14 20h4", key: "lzx1xo" }], ["path", { d: "M6 12h4", key: "a4o3ry" }], ["path", { d: "M6 20h4", key: "1i6q5t" }], ["path", { d: "M8 20V8a4 4 0 0 1 7.464-2", key: "wk9t6r" }]], Xx = e("ligature", Ex);
const Kx = [["path", { d: "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5", key: "1fkcox" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5", key: "10m8kw" }], ["path", { d: "M9 18h6", key: "x1upvd" }], ["path", { d: "M10 22h4", key: "ceow96" }]], Qx = e("lightbulb-off", Kx);
const Jx = [["path", { d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5", key: "1gvzjb" }], ["path", { d: "M9 18h6", key: "x1upvd" }], ["path", { d: "M10 22h4", key: "ceow96" }]], Yx = e("lightbulb", Jx);
const eL = [["path", { d: "M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2", key: "1lrphd" }]], aL = e("line-squiggle", eL);
const cL = [["path", { d: "M9 17H7A5 5 0 0 1 7 7", key: "10o201" }], ["path", { d: "M15 7h2a5 5 0 0 1 4 8", key: "1d3206" }], ["line", { x1: "8", x2: "12", y1: "12", y2: "12", key: "rvw6j4" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]], tL = e("link-2-off", cL);
const oL = [["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }], ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }], ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]], dL = e("link-2", oL);
const nL = [["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }], ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]], hL = e("link", nL);
const sL = [["path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z", key: "c2jq9f" }], ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }], ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]], iL = e("linkedin", sL);
const yL = [["path", { d: "M16 5H3", key: "m91uny" }], ["path", { d: "M16 12H3", key: "1a2rj7" }], ["path", { d: "M11 19H3", key: "zflm78" }], ["path", { d: "m15 18 2 2 4-4", key: "1szwhi" }]], rL = e("list-check", yL);
const kL = [["path", { d: "M13 5h8", key: "a7qcls" }], ["path", { d: "M13 12h8", key: "h98zly" }], ["path", { d: "M13 19h8", key: "c3s6r1" }], ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }], ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]], pL = e("list-checks", kL);
const lL = [["path", { d: "M3 5h8", key: "18g2rq" }], ["path", { d: "M3 12h8", key: "1xfjp6" }], ["path", { d: "M3 19h8", key: "fpbke4" }], ["path", { d: "m15 5 3 3 3-3", key: "1t4thf" }], ["path", { d: "m15 19 3-3 3 3", key: "y4ckd2" }]], uL = e("list-chevrons-down-up", lL);
const ML = [["path", { d: "M3 5h8", key: "18g2rq" }], ["path", { d: "M3 12h8", key: "1xfjp6" }], ["path", { d: "M3 19h8", key: "fpbke4" }], ["path", { d: "m15 8 3-3 3 3", key: "bc4io6" }], ["path", { d: "m15 16 3 3 3-3", key: "9wmg1l" }]], vL = e("list-chevrons-up-down", ML);
const mL = [["path", { d: "M10 5h11", key: "1hkqpe" }], ["path", { d: "M10 12h11", key: "6m4ad9" }], ["path", { d: "M10 19h11", key: "14g2nv" }], ["path", { d: "m3 10 3-3-3-3", key: "i7pm08" }], ["path", { d: "m3 20 3-3-3-3", key: "20gx1n" }]], _L = e("list-collapse", mL);
const gL = [["path", { d: "M16 5H3", key: "m91uny" }], ["path", { d: "M16 12H3", key: "1a2rj7" }], ["path", { d: "M9 19H3", key: "s61nz1" }], ["path", { d: "m16 16-3 3 3 3", key: "117b85" }], ["path", { d: "M21 5v12a2 2 0 0 1-2 2h-6", key: "hey24a" }]], xL = e("list-end", gL);
const LL = [["path", { d: "M12 5H2", key: "1o22fu" }], ["path", { d: "M6 12h12", key: "8npq4p" }], ["path", { d: "M9 19h6", key: "456am0" }], ["path", { d: "M16 5h6", key: "1vod17" }], ["path", { d: "M19 8V2", key: "1wcffq" }]], wL = e("list-filter-plus", LL);
const fL = [["path", { d: "M2 5h20", key: "1fs1ex" }], ["path", { d: "M6 12h12", key: "8npq4p" }], ["path", { d: "M9 19h6", key: "456am0" }]], IL = e("list-filter", fL);
const CL = [["path", { d: "M21 5H11", key: "us1j55" }], ["path", { d: "M21 12H11", key: "wd7e0v" }], ["path", { d: "M21 19H11", key: "saa85w" }], ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]], NL = e("list-indent-decrease", CL);
const bL = [["path", { d: "M16 5H3", key: "m91uny" }], ["path", { d: "M11 12H3", key: "51ecnj" }], ["path", { d: "M16 19H3", key: "zzsher" }], ["path", { d: "M21 12h-6", key: "bt1uis" }]], $L = e("list-minus", bL);
const qL = [["path", { d: "M21 5H11", key: "us1j55" }], ["path", { d: "M21 12H11", key: "wd7e0v" }], ["path", { d: "M21 19H11", key: "saa85w" }], ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]], zL = e("list-indent-increase", qL);
const SL = [["path", { d: "M16 5H3", key: "m91uny" }], ["path", { d: "M11 12H3", key: "51ecnj" }], ["path", { d: "M11 19H3", key: "zflm78" }], ["path", { d: "M21 16V5", key: "yxg4q8" }], ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]], AL = e("list-music", SL);
const HL = [["path", { d: "M11 5h10", key: "1cz7ny" }], ["path", { d: "M11 12h10", key: "1438ji" }], ["path", { d: "M11 19h10", key: "11t30w" }], ["path", { d: "M4 4h1v5", key: "10yrso" }], ["path", { d: "M4 9h2", key: "r1h2o0" }], ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]], jL = e("list-ordered", HL);
const VL = [["path", { d: "M16 5H3", key: "m91uny" }], ["path", { d: "M11 12H3", key: "51ecnj" }], ["path", { d: "M16 19H3", key: "zzsher" }], ["path", { d: "M18 9v6", key: "1twb98" }], ["path", { d: "M21 12h-6", key: "bt1uis" }]], PL = e("list-plus", VL);
const BL = [["path", { d: "M21 5H3", key: "1fi0y6" }], ["path", { d: "M7 12H3", key: "13ou7f" }], ["path", { d: "M7 19H3", key: "wbqt3n" }], ["path", { d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14", key: "qth677" }], ["path", { d: "M11 10v4h4", key: "172dkj" }]], FL = e("list-restart", BL);
const DL = [["path", { d: "M3 5h6", key: "1ltk0q" }], ["path", { d: "M3 12h13", key: "ppymz1" }], ["path", { d: "M3 19h13", key: "bpdczq" }], ["path", { d: "m16 8-3-3 3-3", key: "1pjpp6" }], ["path", { d: "M21 19V7a2 2 0 0 0-2-2h-6", key: "4zzq67" }]], RL = e("list-start", DL);
const TL = [["path", { d: "M13 5h8", key: "a7qcls" }], ["path", { d: "M13 12h8", key: "h98zly" }], ["path", { d: "M13 19h8", key: "c3s6r1" }], ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }], ["rect", { x: "3", y: "4", width: "6", height: "6", rx: "1", key: "cif1o7" }]], UL = e("list-todo", TL);
const OL = [["path", { d: "M8 5h13", key: "1pao27" }], ["path", { d: "M13 12h8", key: "h98zly" }], ["path", { d: "M13 19h8", key: "c3s6r1" }], ["path", { d: "M3 10a2 2 0 0 0 2 2h3", key: "1npucw" }], ["path", { d: "M3 5v12a2 2 0 0 0 2 2h3", key: "x1gjn2" }]], GL = e("list-tree", OL);
const ZL = [["path", { d: "M21 5H3", key: "1fi0y6" }], ["path", { d: "M10 12H3", key: "1ulcyk" }], ["path", { d: "M10 19H3", key: "108z41" }], ["path", { d: "M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z", key: "ms4nik" }]], WL = e("list-video", ZL);
const EL = [["path", { d: "M16 5H3", key: "m91uny" }], ["path", { d: "M11 12H3", key: "51ecnj" }], ["path", { d: "M16 19H3", key: "zzsher" }], ["path", { d: "m15.5 9.5 5 5", key: "ytk86i" }], ["path", { d: "m20.5 9.5-5 5", key: "17o44f" }]], XL = e("list-x", EL);
const KL = [["path", { d: "M3 5h.01", key: "18ugdj" }], ["path", { d: "M3 12h.01", key: "nlz23k" }], ["path", { d: "M3 19h.01", key: "noohij" }], ["path", { d: "M8 5h13", key: "1pao27" }], ["path", { d: "M8 12h13", key: "1za7za" }], ["path", { d: "M8 19h13", key: "m83p4d" }]], QL = e("list", KL);
const JL = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], YL = e("loader-circle", JL);
const ew = [["path", { d: "M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0", key: "1lzz15" }], ["path", { d: "M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6", key: "1gnrpi" }], ["path", { d: "M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6", key: "u9yy5q" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], aw = e("loader-pinwheel", ew);
const cw = [["path", { d: "M12 2v4", key: "3427ic" }], ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }], ["path", { d: "M18 12h4", key: "wj9ykh" }], ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }], ["path", { d: "M12 18v4", key: "jadmvz" }], ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }], ["path", { d: "M2 12h4", key: "j09sii" }], ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }]], tw = e("loader", cw);
const ow = [["path", { d: "M12 19v3", key: "npa21l" }], ["path", { d: "M12 2v3", key: "qbqxhf" }], ["path", { d: "M18.89 13.24a7 7 0 0 0-8.13-8.13", key: "1v9jrh" }], ["path", { d: "M19 12h3", key: "osuazr" }], ["path", { d: "M2 12h3", key: "1wrr53" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M7.05 7.05a7 7 0 0 0 9.9 9.9", key: "rc5l2e" }]], dw = e("locate-off", ow);
const nw = [["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }], ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }], ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }], ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }], ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]], hw = e("locate-fixed", nw);
const sw = [["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }], ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }], ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }], ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }], ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }]], iw = e("locate", sw);
const yw = [["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }], ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2", key: "l0tzu3" }], ["path", { d: "M7 10V7a5 5 0 0 1 9.33-2.5", key: "car5b7" }]], rw = e("lock-keyhole-open", yw);
const kw = [["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }], ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }], ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }]], pw = e("lock-keyhole", kw);
const lw = [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]], uw = e("lock-open", lw);
const Mw = [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]], vw = e("lock", Mw);
const mw = [["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }], ["path", { d: "M15 12H3", key: "6jk70r" }], ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]], _w = e("log-in", mw);
const gw = [["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }], ["path", { d: "M21 12H9", key: "dn1m92" }], ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]], xw = e("log-out", gw);
const Lw = [["path", { d: "M3 5h1", key: "1mv5vm" }], ["path", { d: "M3 12h1", key: "lp3yf2" }], ["path", { d: "M3 19h1", key: "w6f3n9" }], ["path", { d: "M8 5h1", key: "1nxr5w" }], ["path", { d: "M8 12h1", key: "1con00" }], ["path", { d: "M8 19h1", key: "k7p10e" }], ["path", { d: "M13 5h8", key: "a7qcls" }], ["path", { d: "M13 12h8", key: "h98zly" }], ["path", { d: "M13 19h8", key: "c3s6r1" }]], ww = e("logs", Lw);
const fw = [["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }], ["path", { d: "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0", key: "107gwy" }]], Iw = e("lollipop", fw);
const Cw = [["path", { d: "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2", key: "1m57jg" }], ["path", { d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14", key: "1l99gc" }], ["path", { d: "M10 20h4", key: "ni2waw" }], ["circle", { cx: "16", cy: "20", r: "2", key: "1vifvg" }], ["circle", { cx: "8", cy: "20", r: "2", key: "ckkr5m" }]], Nw = e("luggage", Cw);
const bw = [["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "12jkf8" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }], ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]], $w = e("mail-check", bw);
const qw = [["path", { d: "m12 15 4 4", key: "lnac28" }], ["path", { d: "M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z", key: "nlhkjb" }], ["path", { d: "m5 8 4 4", key: "j6kj7e" }]], zw = e("magnet", qw);
const Sw = [["path", { d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "fuxbkv" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }], ["path", { d: "M16 19h6", key: "xwg31i" }]], Aw = e("mail-minus", Sw);
const Hw = [["path", { d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z", key: "1jhwl8" }], ["path", { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10", key: "1qfld7" }]], jw = e("mail-open", Hw);
const Vw = [["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "12jkf8" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }], ["path", { d: "M19 16v6", key: "tddt3s" }], ["path", { d: "M16 19h6", key: "xwg31i" }]], Pw = e("mail-plus", Vw);
const Bw = [["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5", key: "e61zoh" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }], ["path", { d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2", key: "7z9rxb" }], ["path", { d: "M20 22v.01", key: "12bgn6" }]], Fw = e("mail-question-mark", Bw);
const Dw = [["path", { d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5", key: "w80f2v" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }], ["path", { d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", key: "8lzu5m" }], ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }], ["path", { d: "m22 22-1.5-1.5", key: "1x83k4" }]], Rw = e("mail-search", Dw);
const Tw = [["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5", key: "e61zoh" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }], ["path", { d: "M20 14v4", key: "1hm744" }], ["path", { d: "M20 22v.01", key: "12bgn6" }]], Uw = e("mail-warning", Tw);
const Ow = [["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9", key: "1j9vog" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }], ["path", { d: "m17 17 4 4", key: "1b3523" }], ["path", { d: "m21 17-4 4", key: "uinynz" }]], Gw = e("mail-x", Ow);
const Zw = [["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }], ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]], Ww = e("mail", Zw);
const Ew = [["path", { d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z", key: "1lbycx" }], ["polyline", { points: "15,9 18,9 18,11", key: "1pm9c0" }], ["path", { d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2", key: "15i455" }], ["line", { x1: "6", x2: "7", y1: "10", y2: "10", key: "1e2scm" }]], Xw = e("mailbox", Ew);
const Kw = [["path", { d: "M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732", key: "1vyzll" }], ["path", { d: "m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5", key: "k7ramc" }], ["rect", { x: "7", y: "3", width: "15", height: "12", rx: "2", key: "17196g" }]], Qw = e("mails", Kw);
const Jw = [["path", { d: "m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V14", key: "40pylx" }], ["path", { d: "M15 5.764V14", key: "1bab71" }], ["path", { d: "M21 18h-6", key: "139f0c" }], ["path", { d: "M9 3.236v15", key: "1uimfh" }]], Yw = e("map-minus", Jw);
const ef = [["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0", key: "1r0f0z" }], ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }]], af = e("map-pin-check-inside", ef);
const cf = [["path", { d: "M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728", key: "1dq61d" }], ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }], ["path", { d: "m16 18 2 2 4-4", key: "1mkfmb" }]], tf = e("map-pin-check", cf);
const of = [["path", { d: "M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z", key: "1p1rcz" }], ["path", { d: "M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2", key: "mcbcs9" }], ["path", { d: "M18 22v-3", key: "1t1ugv" }], ["circle", { cx: "10", cy: "10", r: "3", key: "1ns7v1" }]], df = e("map-pin-house", of);
const nf = [["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0", key: "1r0f0z" }], ["path", { d: "M9 10h6", key: "9gxzsh" }]], hf = e("map-pin-minus-inside", nf);
const sf = [["path", { d: "M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738", key: "11uxia" }], ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }], ["path", { d: "M16 18h6", key: "987eiv" }]], yf = e("map-pin-minus", sf);
const rf = [["path", { d: "M12.75 7.09a3 3 0 0 1 2.16 2.16", key: "1d4wjd" }], ["path", { d: "M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568", key: "12yil7" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533", key: "lhrkcz" }], ["path", { d: "M9.13 9.13a3 3 0 0 0 3.74 3.74", key: "13wojd" }]], kf = e("map-pin-off", rf);
const pf = [["path", { d: "M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468", key: "1fahp3" }], ["path", { d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z", key: "1817ys" }], ["circle", { cx: "10", cy: "10", r: "3", key: "1ns7v1" }]], lf = e("map-pin-pen", pf);
const uf = [["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0", key: "1r0f0z" }], ["path", { d: "M12 7v6", key: "lw1j43" }], ["path", { d: "M9 10h6", key: "9gxzsh" }]], Mf = e("map-pin-plus-inside", uf);
const vf = [["path", { d: "M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738", key: "fcdtly" }], ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }], ["path", { d: "M16 18h6", key: "987eiv" }], ["path", { d: "M19 15v6", key: "10aioa" }]], mf = e("map-pin-plus", vf);
const _f = [["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0", key: "1r0f0z" }], ["path", { d: "m14.5 7.5-5 5", key: "3lb6iw" }], ["path", { d: "m9.5 7.5 5 5", key: "ko136h" }]], gf = e("map-pin-x-inside", _f);
const xf = [["path", { d: "M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077", key: "y0ewhp" }], ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }], ["path", { d: "m21.5 15.5-5 5", key: "11iqnx" }], ["path", { d: "m21.5 20.5-5-5", key: "1bylgx" }]], Lf = e("map-pin-x", xf);
const wf = [["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0", key: "1r0f0z" }], ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]], ff = e("map-pin", wf);
const If = [["path", { d: "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0", key: "11u0oz" }], ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }], ["path", { d: "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712", key: "q8zwxj" }]], Cf = e("map-pinned", If);
const Nf = [["path", { d: "m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12", key: "svfegj" }], ["path", { d: "M15 5.764V12", key: "1ocw4k" }], ["path", { d: "M18 15v6", key: "9wciyi" }], ["path", { d: "M21 18h-6", key: "139f0c" }], ["path", { d: "M9 3.236v15", key: "1uimfh" }]], bf = e("map-plus", Nf);
const $f = [["path", { d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z", key: "169xi5" }], ["path", { d: "M15 5.764v15", key: "1pn4in" }], ["path", { d: "M9 3.236v15", key: "1uimfh" }]], qf = e("map", $f);
const zf = [["path", { d: "m14 6 4 4", key: "1q72g9" }], ["path", { d: "M17 3h4v4", key: "19p9u1" }], ["path", { d: "m21 3-7.75 7.75", key: "1cjbfd" }], ["circle", { cx: "9", cy: "15", r: "6", key: "bx5svt" }]], Sf = e("mars-stroke", zf);
const Af = [["path", { d: "M16 3h5v5", key: "1806ms" }], ["path", { d: "m21 3-6.75 6.75", key: "pv0uzu" }], ["circle", { cx: "10", cy: "14", r: "6", key: "1qwbdc" }]], Hf = e("mars", Af);
const jf = [["path", { d: "M8 22h8", key: "rmew8v" }], ["path", { d: "M12 11v11", key: "ur9y6a" }], ["path", { d: "m19 3-7 8-7-8Z", key: "1sgpiw" }]], Vf = e("martini", jf);
const Pf = [["path", { d: "M15 3h6v6", key: "1q9fwt" }], ["path", { d: "m21 3-7 7", key: "1l2asr" }], ["path", { d: "m3 21 7-7", key: "tjx5ai" }], ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]], Bf = e("maximize-2", Pf);
const Ff = [["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }], ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }], ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }], ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]], Df = e("maximize", Ff);
const Rf = [["path", { d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15", key: "143lza" }], ["path", { d: "M11 12 5.12 2.2", key: "qhuxz6" }], ["path", { d: "m13 12 5.88-9.8", key: "hbye0f" }], ["path", { d: "M8 7h8", key: "i86dvs" }], ["circle", { cx: "12", cy: "17", r: "5", key: "qbz8iq" }], ["path", { d: "M12 18v-2h-.5", key: "fawc4q" }]], Tf = e("medal", Rf);
const Uf = [["path", { d: "M11.636 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4v11.344", key: "bycexp" }], ["path", { d: "M14.378 14.357A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1", key: "1t17s6" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14", key: "1853fq" }], ["path", { d: "M8 8v6", key: "aieo6v" }]], Of = e("megaphone-off", Uf);
const Gf = [["path", { d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z", key: "q8bfy3" }], ["path", { d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14", key: "1853fq" }], ["path", { d: "M8 6v8", key: "15ugcq" }]], Zf = e("megaphone", Gf);
const Wf = [["path", { d: "M12 12v-2", key: "fwoke6" }], ["path", { d: "M12 18v-2", key: "qj6yno" }], ["path", { d: "M16 12v-2", key: "heuere" }], ["path", { d: "M16 18v-2", key: "s1ct0w" }], ["path", { d: "M2 11h1.5", key: "15p63e" }], ["path", { d: "M20 18v-2", key: "12ehxp" }], ["path", { d: "M20.5 11H22", key: "khsy7a" }], ["path", { d: "M4 18v-2", key: "1c3oqr" }], ["path", { d: "M8 12v-2", key: "1mwtfd" }], ["path", { d: "M8 18v-2", key: "qcmpov" }], ["rect", { x: "2", y: "6", width: "20", height: "10", rx: "2", key: "1qcswk" }]], Ef = e("memory-stick", Wf);
const Xf = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "8", x2: "16", y1: "15", y2: "15", key: "1xb1d9" }], ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }], ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]], Kf = e("meh", Xf);
const Qf = [["path", { d: "M4 5h16", key: "1tepv9" }], ["path", { d: "M4 12h16", key: "1lakjw" }], ["path", { d: "M4 19h16", key: "1djgab" }]], Jf = e("menu", Qf);
const Yf = [["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }], ["path", { d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22", key: "1hyw0i" }], ["path", { d: "m20 22-5-5", key: "1m27yz" }]], eI = e("merge", Yf);
const aI = [["path", { d: "m10 9-3 3 3 3", key: "1oro0q" }], ["path", { d: "m14 15 3-3-3-3", key: "bz13h7" }], ["path", { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719", key: "1sd12s" }]], cI = e("message-circle-code", aI);
const tI = [["path", { d: "M10.1 2.182a10 10 0 0 1 3.8 0", key: "5ilxe3" }], ["path", { d: "M13.9 21.818a10 10 0 0 1-3.8 0", key: "11zvb9" }], ["path", { d: "M17.609 3.72a10 10 0 0 1 2.69 2.7", key: "jiglxs" }], ["path", { d: "M2.182 13.9a10 10 0 0 1 0-3.8", key: "c0bmvh" }], ["path", { d: "M20.28 17.61a10 10 0 0 1-2.7 2.69", key: "elg7ff" }], ["path", { d: "M21.818 10.1a10 10 0 0 1 0 3.8", key: "qkgqxc" }], ["path", { d: "M3.721 6.391a10 10 0 0 1 2.7-2.69", key: "1mcia2" }], ["path", { d: "m6.163 21.117-2.906.85a1 1 0 0 1-1.236-1.169l.965-2.98", key: "1qsu07" }]], oI = e("message-circle-dashed", tI);
const dI = [["path", { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719", key: "1sd12s" }], ["path", { d: "M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z", key: "hoo97p" }]], nI = e("message-circle-heart", dI);
const hI = [["path", { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719", key: "1sd12s" }], ["path", { d: "M8 12h.01", key: "czm47f" }], ["path", { d: "M12 12h.01", key: "1mp3jc" }], ["path", { d: "M16 12h.01", key: "1l6xoz" }]], sI = e("message-circle-more", hI);
const iI = [["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M4.93 4.929a10 10 0 0 0-1.938 11.412 2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 0 0 11.302-1.989", key: "7il5tn" }], ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65", key: "1pfsoa" }]], yI = e("message-circle-off", iI);
const rI = [["path", { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719", key: "1sd12s" }], ["path", { d: "M8 12h8", key: "1wcyev" }], ["path", { d: "M12 8v8", key: "napkw2" }]], kI = e("message-circle-plus", rI);
const pI = [["path", { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719", key: "1sd12s" }], ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }], ["path", { d: "M12 17h.01", key: "p32p05" }]], lI = e("message-circle-question-mark", pI);
const uI = [["path", { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719", key: "1sd12s" }], ["path", { d: "m10 15-3-3 3-3", key: "1pgupc" }], ["path", { d: "M7 12h8a2 2 0 0 1 2 2v1", key: "89sh1g" }]], MI = e("message-circle-reply", uI);
const vI = [["path", { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719", key: "1sd12s" }], ["path", { d: "M12 8v4", key: "1got3b" }], ["path", { d: "M12 16h.01", key: "1drbdi" }]], mI = e("message-circle-warning", vI);
const _I = [["path", { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719", key: "1sd12s" }], ["path", { d: "m15 9-6 6", key: "1uzhvr" }], ["path", { d: "m9 9 6 6", key: "z0biqf" }]], gI = e("message-circle-x", _I);
const xI = [["path", { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719", key: "1sd12s" }]], LI = e("message-circle", xI);
const wI = [["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z", key: "18887p" }], ["path", { d: "m10 8-3 3 3 3", key: "fp6dz7" }], ["path", { d: "m14 14 3-3-3-3", key: "1yrceu" }]], fI = e("message-square-code", wI);
const II = [["path", { d: "M12 19h.01", key: "1wutuc" }], ["path", { d: "M12 3h.01", key: "n36tog" }], ["path", { d: "M16 19h.01", key: "1vcnzz" }], ["path", { d: "M16 3h.01", key: "ll0zb8" }], ["path", { d: "M2 13h.01", key: "1aptou" }], ["path", { d: "M2 17v4.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H8", key: "4cp7zq" }], ["path", { d: "M2 5a2 2 0 0 1 2-2", key: "1iztiu" }], ["path", { d: "M2 9h.01", key: "1nzd1v" }], ["path", { d: "M20 3a2 2 0 0 1 2 2", key: "m48m3a" }], ["path", { d: "M22 13h.01", key: "ke7esy" }], ["path", { d: "M22 17a2 2 0 0 1-2 2", key: "17q5fo" }], ["path", { d: "M22 9h.01", key: "npkp49" }], ["path", { d: "M8 3h.01", key: "133hau" }]], CI = e("message-square-dashed", II);
const NI = [["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z", key: "18887p" }], ["path", { d: "M10 15h4", key: "192ueg" }], ["path", { d: "M10 9h4", key: "u4k05v" }], ["path", { d: "M12 7v4", key: "xawao1" }]], bI = e("message-square-diff", NI);
const $I = [["path", { d: "M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7", key: "wjb7ig" }], ["circle", { cx: "19", cy: "6", r: "3", key: "108a5v" }]], qI = e("message-square-dot", $I);
const zI = [["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z", key: "18887p" }], ["path", { d: "M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 0 0 .407.314 1 1 0 0 0 .783-.004 1.14 1.14 0 0 0 .398-.31l3.008-3.264A2.77 2.77 0 0 0 16.5 9.5 2.5 2.5 0 0 0 12 8a2.5 2.5 0 0 0-4.5 1.5", key: "1faxuh" }]], SI = e("message-square-heart", zI);
const AI = [["path", { d: "M22 8.5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10", key: "fu6chl" }], ["path", { d: "M20 15v-2a2 2 0 0 0-4 0v2", key: "vl8a78" }], ["rect", { x: "14", y: "15", width: "8", height: "5", rx: "1", key: "37aafw" }]], HI = e("message-square-lock", AI);
const jI = [["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z", key: "18887p" }], ["path", { d: "M12 11h.01", key: "z322tv" }], ["path", { d: "M16 11h.01", key: "xkw8gn" }], ["path", { d: "M8 11h.01", key: "1dfujw" }]], VI = e("message-square-more", jI);
const PI = [["path", { d: "M19 19H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 1.184-1.826", key: "1wyg69" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M8.656 3H20a2 2 0 0 1 2 2v11.344", key: "mhl4k6" }]], BI = e("message-square-off", PI);
const FI = [["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z", key: "18887p" }], ["path", { d: "M12 8v6", key: "1ib9pf" }], ["path", { d: "M9 11h6", key: "1fldmi" }]], DI = e("message-square-plus", FI);
const RI = [["path", { d: "M14 14a2 2 0 0 0 2-2V8h-2", key: "1r06pg" }], ["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z", key: "18887p" }], ["path", { d: "M8 14a2 2 0 0 0 2-2V8H8", key: "1jzu5j" }]], TI = e("message-square-quote", RI);
const UI = [["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z", key: "18887p" }], ["path", { d: "m10 8-3 3 3 3", key: "fp6dz7" }], ["path", { d: "M17 14v-1a2 2 0 0 0-2-2H7", key: "1tkjnz" }]], OI = e("message-square-reply", UI);
const GI = [["path", { d: "M12 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4", key: "11da1y" }], ["path", { d: "M16 3h6v6", key: "1bx56c" }], ["path", { d: "m16 9 6-6", key: "m4dnic" }]], ZI = e("message-square-share", GI);
const WI = [["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z", key: "18887p" }], ["path", { d: "M7 11h10", key: "1twpyw" }], ["path", { d: "M7 15h6", key: "d9of3u" }], ["path", { d: "M7 7h8", key: "af5zfr" }]], EI = e("message-square-text", WI);
const XI = [["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z", key: "18887p" }], ["path", { d: "M12 15h.01", key: "q59x07" }], ["path", { d: "M12 7v4", key: "xawao1" }]], KI = e("message-square-warning", XI);
const QI = [["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z", key: "18887p" }], ["path", { d: "m14.5 8.5-5 5", key: "19tnj2" }], ["path", { d: "m9.5 8.5 5 5", key: "1oa8ql" }]], JI = e("message-square-x", QI);
const YI = [["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z", key: "18887p" }]], eC = e("message-square", YI);
const aC = [["path", { d: "M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z", key: "1n2ejm" }], ["path", { d: "M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1", key: "1qfcsi" }]], cC = e("messages-square", aC);
const tC = [["path", { d: "M12 19v3", key: "npa21l" }], ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }], ["path", { d: "M16.95 16.95A7 7 0 0 1 5 12v-2", key: "cqa7eg" }], ["path", { d: "M18.89 13.23A7 7 0 0 0 19 12v-2", key: "16hl24" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }]], oC = e("mic-off", tC);
const dC = [["path", { d: "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12", key: "80a601" }], ["path", { d: "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5", key: "j0ngtp" }], ["circle", { cx: "16", cy: "7", r: "5", key: "d08jfb" }]], nC = e("mic-vocal", dC);
const hC = [["path", { d: "M12 19v3", key: "npa21l" }], ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }], ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]], sC = e("mic", hC);
const iC = [["path", { d: "M10 12h4", key: "a56b0p" }], ["path", { d: "M10 17h4", key: "pvmtpo" }], ["path", { d: "M10 7h4", key: "1vgcok" }], ["path", { d: "M18 12h2", key: "quuxs7" }], ["path", { d: "M18 18h2", key: "4scel" }], ["path", { d: "M18 6h2", key: "1ptzki" }], ["path", { d: "M4 12h2", key: "1ltxp0" }], ["path", { d: "M4 18h2", key: "1xrofg" }], ["path", { d: "M4 6h2", key: "1cx33n" }], ["rect", { x: "6", y: "2", width: "12", height: "20", rx: "2", key: "749fme" }]], yC = e("microchip", iC);
const rC = [["path", { d: "M6 18h8", key: "1borvv" }], ["path", { d: "M3 22h18", key: "8prr45" }], ["path", { d: "M14 22a7 7 0 1 0 0-14h-1", key: "1jwaiy" }], ["path", { d: "M9 14h2", key: "197e7h" }], ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z", key: "1bmzmy" }], ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3", key: "1drr47" }]], kC = e("microscope", rC);
const pC = [["rect", { width: "20", height: "15", x: "2", y: "4", rx: "2", key: "2no95f" }], ["rect", { width: "8", height: "7", x: "6", y: "8", rx: "1", key: "zh9wx" }], ["path", { d: "M18 8v7", key: "o5zi4n" }], ["path", { d: "M6 19v2", key: "1loha6" }], ["path", { d: "M18 19v2", key: "1dawf0" }]], lC = e("microwave", pC);
const uC = [["path", { d: "M12 13v8", key: "1l5pq0" }], ["path", { d: "M12 3v3", key: "1n5kay" }], ["path", { d: "M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z", key: "1btarq" }]], MC = e("milestone", uC);
const vC = [["path", { d: "M8 2h8", key: "1ssgc1" }], ["path", { d: "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3", key: "y0ejgx" }], ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435", key: "iaxqsy" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]], mC = e("milk-off", vC);
const _C = [["path", { d: "M8 2h8", key: "1ssgc1" }], ["path", { d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2", key: "qtp12x" }], ["path", { d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0", key: "ygeh44" }]], gC = e("milk", _C);
const xC = [["path", { d: "m14 10 7-7", key: "oa77jy" }], ["path", { d: "M20 10h-6V4", key: "mjg0md" }], ["path", { d: "m3 21 7-7", key: "tjx5ai" }], ["path", { d: "M4 14h6v6", key: "rmj7iw" }]], LC = e("minimize-2", xC);
const wC = [["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }], ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }], ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }], ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }]], fC = e("minimize", wC);
const IC = [["path", { d: "M5 12h14", key: "1ays0h" }]], CC = e("minus", IC);
const NC = [["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }], ["path", { d: "M12 17v4", key: "1riwvh" }], ["path", { d: "M8 21h8", key: "1ev6f3" }]], bC = e("monitor-check", NC);
const $C = [["path", { d: "M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z", key: "1da4q6" }], ["path", { d: "M12 17v4", key: "1riwvh" }], ["path", { d: "M8 21h8", key: "1ev6f3" }], ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", key: "x3v2xh" }]], qC = e("monitor-cloud", $C);
const zC = [["path", { d: "M12 17v4", key: "1riwvh" }], ["path", { d: "m14.305 7.53.923-.382", key: "1mlnsw" }], ["path", { d: "m15.228 4.852-.923-.383", key: "82mpwg" }], ["path", { d: "m16.852 3.228-.383-.924", key: "ln4sir" }], ["path", { d: "m16.852 8.772-.383.923", key: "1dejw0" }], ["path", { d: "m19.148 3.228.383-.924", key: "192kgf" }], ["path", { d: "m19.53 9.696-.382-.924", key: "fiavlr" }], ["path", { d: "m20.772 4.852.924-.383", key: "1j8mgp" }], ["path", { d: "m20.772 7.148.924.383", key: "zix9be" }], ["path", { d: "M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7", key: "1tnzv8" }], ["path", { d: "M8 21h8", key: "1ev6f3" }], ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }]], SC = e("monitor-cog", zC);
const AC = [["path", { d: "M12 17v4", key: "1riwvh" }], ["path", { d: "M22 12.307V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693", key: "1dx6ho" }], ["path", { d: "M8 21h8", key: "1ev6f3" }], ["circle", { cx: "19", cy: "6", r: "3", key: "108a5v" }]], HC = e("monitor-dot", AC);
const jC = [["path", { d: "M12 13V7", key: "h0r20n" }], ["path", { d: "m15 10-3 3-3-3", key: "lzhmyn" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }], ["path", { d: "M12 17v4", key: "1riwvh" }], ["path", { d: "M8 21h8", key: "1ev6f3" }]], VC = e("monitor-down", jC);
const PC = [["path", { d: "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2", key: "k0q8oc" }], ["path", { d: "M22 15V5a2 2 0 0 0-2-2H9", key: "cp1ac0" }], ["path", { d: "M8 21h8", key: "1ev6f3" }], ["path", { d: "M12 17v4", key: "1riwvh" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]], BC = e("monitor-off", PC);
const FC = [["path", { d: "M10 13V7", key: "1u13u9" }], ["path", { d: "M14 13V7", key: "1vj9om" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }], ["path", { d: "M12 17v4", key: "1riwvh" }], ["path", { d: "M8 21h8", key: "1ev6f3" }]], DC = e("monitor-pause", FC);
const RC = [["path", { d: "M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z", key: "vbtd3f" }], ["path", { d: "M12 17v4", key: "1riwvh" }], ["path", { d: "M8 21h8", key: "1ev6f3" }], ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", key: "x3v2xh" }]], TC = e("monitor-play", RC);
const UC = [["path", { d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8", key: "10dyio" }], ["path", { d: "M10 19v-3.96 3.15", key: "1irgej" }], ["path", { d: "M7 19h5", key: "qswx4l" }], ["rect", { width: "6", height: "10", x: "16", y: "12", rx: "2", key: "1egngj" }]], OC = e("monitor-smartphone", UC);
const GC = [["path", { d: "M5.5 20H8", key: "1k40s5" }], ["path", { d: "M17 9h.01", key: "1j24nn" }], ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2", key: "ixliua" }], ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4", key: "1mp6e1" }], ["circle", { cx: "17", cy: "15", r: "1", key: "tqvash" }]], ZC = e("monitor-speaker", GC);
const WC = [["path", { d: "M12 17v4", key: "1riwvh" }], ["path", { d: "M8 21h8", key: "1ev6f3" }], ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", key: "x3v2xh" }], ["rect", { x: "9", y: "7", width: "6", height: "6", rx: "1", key: "5m2oou" }]], EC = e("monitor-stop", WC);
const XC = [["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }], ["path", { d: "M12 13V7", key: "h0r20n" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }], ["path", { d: "M12 17v4", key: "1riwvh" }], ["path", { d: "M8 21h8", key: "1ev6f3" }]], KC = e("monitor-up", XC);
const QC = [["path", { d: "m14.5 12.5-5-5", key: "1jahn5" }], ["path", { d: "m9.5 12.5 5-5", key: "1k2t7b" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }], ["path", { d: "M12 17v4", key: "1riwvh" }], ["path", { d: "M8 21h8", key: "1ev6f3" }]], JC = e("monitor-x", QC);
const YC = [["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }], ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }], ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]], eN = e("monitor", YC);
const aN = [["path", { d: "M18 5h4", key: "1lhgn2" }], ["path", { d: "M20 3v4", key: "1olli1" }], ["path", { d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401", key: "kfwtm" }]], cN = e("moon-star", aN);
const tN = [["path", { d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401", key: "kfwtm" }]], oN = e("moon", tN);
const dN = [["path", { d: "m18 14-1-3", key: "bdajw9" }], ["path", { d: "m3 9 6 2a2 2 0 0 1 2-2h2a2 2 0 0 1 1.99 1.81", key: "f5fotj" }], ["path", { d: "M8 17h3a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 0 0 1-1v-.75A5 5 0 0 0 17 5", key: "3i90e2" }], ["circle", { cx: "19", cy: "17", r: "3", key: "1otbdv" }], ["circle", { cx: "5", cy: "17", r: "3", key: "1d8p0c" }]], nN = e("motorbike", dN);
const hN = [["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z", key: "otkl63" }], ["path", { d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19", key: "1pvmmp" }]], sN = e("mountain-snow", hN);
const iN = [["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z", key: "otkl63" }]], yN = e("mountain", iN);
const rN = [["path", { d: "m15.55 8.45 5.138 2.087a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063L8.45 15.551", key: "1qoshx" }], ["path", { d: "M22 2 2 22", key: "y4kqgn" }], ["path", { d: "m6.816 11.528-2.779-6.84a.495.495 0 0 1 .651-.651l6.84 2.779", key: "mymuvk" }]], kN = e("mouse-pointer-2-off", rN);
const pN = [["path", { d: "M12 6v.343", key: "1gyhex" }], ["path", { d: "M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218", key: "ukzz01" }], ["path", { d: "M19 13.343V9A7 7 0 0 0 8.56 2.902", key: "104jy9" }], ["path", { d: "M22 22 2 2", key: "1r8tn9" }]], lN = e("mouse-off", pN);
const uN = [["path", { d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z", key: "edeuup" }]], MN = e("mouse-pointer-2", uN);
const vN = [["path", { d: "M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z", key: "11pp1i" }], ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }], ["path", { d: "m11.8 11.8 8.4 8.4", key: "oogvdj" }]], mN = e("mouse-pointer-ban", vN);
const _N = [["path", { d: "M14 4.1 12 6", key: "ita8i4" }], ["path", { d: "m5.1 8-2.9-.8", key: "1go3kf" }], ["path", { d: "m6 12-1.9 2", key: "mnht97" }], ["path", { d: "M7.2 2.2 8 5.1", key: "1cfko1" }], ["path", { d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z", key: "s0h3yz" }]], gN = e("mouse-pointer-click", _N);
const xN = [["path", { d: "M12.586 12.586 19 19", key: "ea5xo7" }], ["path", { d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z", key: "277e5u" }]], LN = e("mouse-pointer", xN);
const wN = [["rect", { x: "5", y: "2", width: "14", height: "20", rx: "7", key: "11ol66" }], ["path", { d: "M12 6v4", key: "16clxf" }]], fN = e("mouse", wN);
const IN = [["path", { d: "M5 3v16h16", key: "1mqmf9" }], ["path", { d: "m5 19 6-6", key: "jh6hbb" }], ["path", { d: "m2 6 3-3 3 3", key: "tkyvxa" }], ["path", { d: "m18 16 3 3-3 3", key: "1d4glt" }]], CN = e("move-3d", IN);
const NN = [["path", { d: "M19 13v6h-6", key: "1hxl6d" }], ["path", { d: "M5 11V5h6", key: "12e2xe" }], ["path", { d: "m5 5 14 14", key: "11anup" }]], bN = e("move-diagonal-2", NN);
const $N = [["path", { d: "M11 19H5v-6", key: "8awifj" }], ["path", { d: "M13 5h6v6", key: "7voy1q" }], ["path", { d: "M19 5 5 19", key: "wwaj1z" }]], qN = e("move-diagonal", $N);
const zN = [["path", { d: "M11 19H5V13", key: "1akmht" }], ["path", { d: "M19 5L5 19", key: "72u4yj" }]], SN = e("move-down-left", zN);
const AN = [["path", { d: "M19 13V19H13", key: "10vkzq" }], ["path", { d: "M5 5L19 19", key: "5zm2fv" }]], HN = e("move-down-right", AN);
const jN = [["path", { d: "M8 18L12 22L16 18", key: "cskvfv" }], ["path", { d: "M12 2V22", key: "r89rzk" }]], VN = e("move-down", jN);
const PN = [["path", { d: "m18 8 4 4-4 4", key: "1ak13k" }], ["path", { d: "M2 12h20", key: "9i4pu4" }], ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }]], BN = e("move-horizontal", PN);
const FN = [["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }], ["path", { d: "M2 12H22", key: "1m8cig" }]], DN = e("move-left", FN);
const RN = [["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }], ["path", { d: "M2 12H22", key: "1m8cig" }]], TN = e("move-right", RN);
const UN = [["path", { d: "M5 11V5H11", key: "3q78g9" }], ["path", { d: "M5 5L19 19", key: "5zm2fv" }]], ON = e("move-up-left", UN);
const GN = [["path", { d: "M13 5H19V11", key: "1n1gyv" }], ["path", { d: "M19 5L5 19", key: "72u4yj" }]], ZN = e("move-up-right", GN);
const WN = [["path", { d: "M8 6L12 2L16 6", key: "1yvkyx" }], ["path", { d: "M12 2V22", key: "r89rzk" }]], EN = e("move-up", WN);
const XN = [["path", { d: "M12 2v20", key: "t6zp3m" }], ["path", { d: "m8 18 4 4 4-4", key: "bh5tu3" }], ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }]], KN = e("move-vertical", XN);
const QN = [["path", { d: "M12 2v20", key: "t6zp3m" }], ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }], ["path", { d: "m19 9 3 3-3 3", key: "1mg7y2" }], ["path", { d: "M2 12h20", key: "9i4pu4" }], ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }], ["path", { d: "m9 5 3-3 3 3", key: "l8vdw6" }]], JN = e("move", QN);
const YN = [["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }], ["path", { d: "M12 18V2l7 4", key: "g04rme" }]], eb = e("music-2", YN);
const ab = [["circle", { cx: "12", cy: "18", r: "4", key: "m3r9ws" }], ["path", { d: "M16 18V2", key: "40x2m5" }]], cb = e("music-3", ab);
const tb = [["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }], ["path", { d: "m9 9 12-2", key: "1e64n2" }], ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }], ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]], ob = e("music-4", tb);
const db = [["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }], ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }], ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]], nb = e("music", db);
const hb = [["path", { d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17", key: "qoq2o2" }], ["path", { d: "M14.53 8.88 12 2l-1.17 3.17", key: "k3sjzy" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]], sb = e("navigation-2-off", hb);
const ib = [["polygon", { points: "12 2 19 21 12 17 5 21 12 2", key: "x8c0qg" }]], yb = e("navigation-2", ib);
const rb = [["path", { d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43", key: "1vdtb7" }], ["path", { d: "M17.39 11.73 22 2l-9.73 4.61", key: "tya3r6" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]], kb = e("navigation-off", rb);
const pb = [["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]], lb = e("navigation", pb);
const ub = [["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }], ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }], ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }], ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }], ["path", { d: "M12 12V8", key: "2874zd" }]], Mb = e("network", ub);
const vb = [["path", { d: "M6 8.32a7.43 7.43 0 0 1 0 7.36", key: "9iaqei" }], ["path", { d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58", key: "1yha7l" }], ["path", { d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8", key: "4iu2gk" }], ["path", { d: "M16.37 2a20.16 20.16 0 0 1 0 20", key: "sap9u2" }]], mb = e("nfc", vb);
const _b = [["path", { d: "M15 18h-5", key: "95g1m2" }], ["path", { d: "M18 14h-8", key: "sponae" }], ["path", { d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2", key: "39pd36" }], ["rect", { width: "8", height: "4", x: "10", y: "6", rx: "1", key: "aywv1n" }]], gb = e("newspaper", _b);
const xb = [["path", { d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4", key: "re6nr2" }], ["path", { d: "M2 6h4", key: "aawbzj" }], ["path", { d: "M2 10h4", key: "l0bgd4" }], ["path", { d: "M2 14h4", key: "1gsvsf" }], ["path", { d: "M2 18h4", key: "1bu2t1" }], ["path", { d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z", key: "pqwjuv" }]], Lb = e("notebook-pen", xb);
const wb = [["path", { d: "M12 2v10", key: "mnfbl" }], ["path", { d: "m8.5 4 7 4", key: "m1xjk3" }], ["path", { d: "m8.5 8 7-4", key: "t0m5j6" }], ["circle", { cx: "12", cy: "17", r: "5", key: "qbz8iq" }]], fb = e("non-binary", wb);
const Ib = [["path", { d: "M2 6h4", key: "aawbzj" }], ["path", { d: "M2 10h4", key: "l0bgd4" }], ["path", { d: "M2 14h4", key: "1gsvsf" }], ["path", { d: "M2 18h4", key: "1bu2t1" }], ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }], ["path", { d: "M15 2v20", key: "dcj49h" }], ["path", { d: "M15 7h5", key: "1xj5lc" }], ["path", { d: "M15 12h5", key: "w5shd9" }], ["path", { d: "M15 17h5", key: "1qaofu" }]], Cb = e("notebook-tabs", Ib);
const Nb = [["path", { d: "M2 6h4", key: "aawbzj" }], ["path", { d: "M2 10h4", key: "l0bgd4" }], ["path", { d: "M2 14h4", key: "1gsvsf" }], ["path", { d: "M2 18h4", key: "1bu2t1" }], ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }], ["path", { d: "M9.5 8h5", key: "11mslq" }], ["path", { d: "M9.5 12H16", key: "ktog6x" }], ["path", { d: "M9.5 16H14", key: "p1seyn" }]], bb = e("notebook-text", Nb);
const $b = [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M12 2v4", key: "3427ic" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2", key: "j91f56" }], ["path", { d: "M20 12v2", key: "w8o0tu" }], ["path", { d: "M20 18v2a2 2 0 0 1-2 2h-1", key: "1c9ggx" }], ["path", { d: "M13 22h-2", key: "191ugt" }], ["path", { d: "M7 22H6a2 2 0 0 1-2-2v-2", key: "1rt9px" }], ["path", { d: "M4 14v-2", key: "1v0sqh" }], ["path", { d: "M4 8V6a2 2 0 0 1 2-2h2", key: "1mwabg" }], ["path", { d: "M8 10h6", key: "3oa6kw" }], ["path", { d: "M8 14h8", key: "1fgep2" }], ["path", { d: "M8 18h5", key: "17enja" }]], qb = e("notepad-text-dashed", $b);
const zb = [["path", { d: "M2 6h4", key: "aawbzj" }], ["path", { d: "M2 10h4", key: "l0bgd4" }], ["path", { d: "M2 14h4", key: "1gsvsf" }], ["path", { d: "M2 18h4", key: "1bu2t1" }], ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }], ["path", { d: "M16 2v20", key: "rotuqe" }]], Sb = e("notebook", zb);
const Ab = [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M12 2v4", key: "3427ic" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["rect", { width: "16", height: "18", x: "4", y: "4", rx: "2", key: "1u9h20" }], ["path", { d: "M8 10h6", key: "3oa6kw" }], ["path", { d: "M8 14h8", key: "1fgep2" }], ["path", { d: "M8 18h5", key: "17enja" }]], Hb = e("notepad-text", Ab);
const jb = [["path", { d: "M12 4V2", key: "1k5q1u" }], ["path", { d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939", key: "1xcvy9" }], ["path", { d: "M19 10v3.343", key: "163tfc" }], ["path", { d: "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192", key: "17914v" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]], Vb = e("nut-off", jb);
const Pb = [["path", { d: "M12 4V2", key: "1k5q1u" }], ["path", { d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4", key: "1tgyif" }], ["path", { d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z", key: "tnsqj" }]], Bb = e("nut", Pb);
const Fb = [["path", { d: "M12 16h.01", key: "1drbdi" }], ["path", { d: "M12 8v4", key: "1got3b" }], ["path", { d: "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z", key: "1fd625" }]], Db = e("octagon-alert", Fb);
const Rb = [["path", { d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z", key: "2d38gg" }], ["path", { d: "M8 12h8", key: "1wcyev" }]], Tb = e("octagon-minus", Rb);
const Ub = [["path", { d: "M10 15V9", key: "1lckn7" }], ["path", { d: "M14 15V9", key: "1muqhk" }], ["path", { d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z", key: "2d38gg" }]], Ob = e("octagon-pause", Ub);
const Gb = [["path", { d: "m15 9-6 6", key: "1uzhvr" }], ["path", { d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z", key: "2d38gg" }], ["path", { d: "m9 9 6 6", key: "z0biqf" }]], Zb = e("octagon-x", Gb);
const Wb = [["path", { d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z", key: "2d38gg" }]], Eb = e("octagon", Wb);
const Xb = [["path", { d: "M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21", key: "1x94xo" }]], Kb = e("omega", Xb);
const Qb = [["path", { d: "M3 3h6l6 18h6", key: "ph9rgk" }], ["path", { d: "M14 3h7", key: "16f0ms" }]], Jb = e("option", Qb);
const Yb = [["path", { d: "M20.341 6.484A10 10 0 0 1 10.266 21.85", key: "1enhxb" }], ["path", { d: "M3.659 17.516A10 10 0 0 1 13.74 2.152", key: "1crzgf" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }], ["circle", { cx: "19", cy: "5", r: "2", key: "mhkx31" }], ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }]], e$ = e("orbit", Yb);
const a$ = [["path", { d: "M12 3v6", key: "1holv5" }], ["path", { d: "M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z", key: "187q7i" }], ["path", { d: "M3.054 9.013h17.893", key: "grwhos" }]], c$ = e("package-2", a$);
const t$ = [["path", { d: "M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025", key: "1bx4vc" }], ["path", { d: "m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009", key: "1h3km6" }], ["path", { d: "m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027", key: "1hj4wg" }]], o$ = e("origami", t$);
const d$ = [["path", { d: "m16 16 2 2 4-4", key: "gfu2re" }], ["path", { d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14", key: "e7tb2h" }], ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }], ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]], n$ = e("package-check", d$);
const h$ = [["path", { d: "M12 22v-9", key: "x3hkom" }], ["path", { d: "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z", key: "2ntwy6" }], ["path", { d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13", key: "1pmm1c" }], ["path", { d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z", key: "12ttoo" }]], s$ = e("package-open", h$);
const i$ = [["path", { d: "M16 16h6", key: "100bgy" }], ["path", { d: "M19 13v6", key: "85cyf1" }], ["path", { d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14", key: "e7tb2h" }], ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }], ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]], y$ = e("package-plus", i$);
const r$ = [["path", { d: "M16 16h6", key: "100bgy" }], ["path", { d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14", key: "e7tb2h" }], ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }], ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]], k$ = e("package-minus", r$);
const p$ = [["path", { d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14", key: "e7tb2h" }], ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }], ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }], ["circle", { cx: "18.5", cy: "15.5", r: "2.5", key: "b5zd12" }], ["path", { d: "M20.27 17.27 22 19", key: "1l4muz" }]], l$ = e("package-search", p$);
const u$ = [["path", { d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14", key: "e7tb2h" }], ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }], ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }], ["path", { d: "m17 13 5 5m-5 0 5-5", key: "im3w4b" }]], M$ = e("package-x", u$);
const v$ = [["path", { d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z", key: "1a0edw" }], ["path", { d: "M12 22V12", key: "d0xqtd" }], ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }], ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]], m$ = e("package", v$);
const _$ = [["path", { d: "M11 7 6 2", key: "1jwth8" }], ["path", { d: "M18.992 12H2.041", key: "xw1gg" }], ["path", { d: "M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595", key: "1nkol4" }], ["path", { d: "m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33", key: "1nk1rd" }]], g$ = e("paint-bucket", _$);
const x$ = [["rect", { width: "16", height: "6", x: "2", y: "2", rx: "2", key: "jcyz7m" }], ["path", { d: "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2", key: "1b9h7c" }], ["rect", { width: "4", height: "6", x: "8", y: "16", rx: "1", key: "d6e7yl" }]], L$ = e("paint-roller", x$);
const w$ = [["path", { d: "M10 2v2", key: "7u0qdc" }], ["path", { d: "M14 2v4", key: "qmzblu" }], ["path", { d: "M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z", key: "ycvu00" }], ["path", { d: "M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1", key: "iw4wnp" }]], f$ = e("paintbrush-vertical", w$);
const I$ = [["path", { d: "m14.622 17.897-10.68-2.913", key: "vj2p1u" }], ["path", { d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z", key: "18tc5c" }], ["path", { d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15", key: "ytzfxy" }]], C$ = e("paintbrush", I$);
const N$ = [["path", { d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z", key: "e79jfc" }], ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }], ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }], ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }], ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]], b$ = e("palette", N$);
const $$ = [["path", { d: "M11.25 17.25h1.5L12 18z", key: "1wmwwj" }], ["path", { d: "m15 12 2 2", key: "k60wz4" }], ["path", { d: "M18 6.5a.5.5 0 0 0-.5-.5", key: "1ch4h4" }], ["path", { d: "M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83", key: "1c660l" }], ["path", { d: "M6 6.5a.495.495 0 0 1 .5-.5", key: "eviuep" }], ["path", { d: "m9 12-2 2", key: "326nkw" }]], q$ = e("panda", $$);
const z$ = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M3 15h18", key: "5xshup" }], ["path", { d: "m15 8-3 3-3-3", key: "1oxy1z" }]], S$ = e("panel-bottom-close", z$);
const A$ = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M14 15h1", key: "171nev" }], ["path", { d: "M19 15h2", key: "1vnucp" }], ["path", { d: "M3 15h2", key: "8bym0q" }], ["path", { d: "M9 15h1", key: "1tg3ks" }]], H$ = e("panel-bottom-dashed", A$);
const j$ = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M3 15h18", key: "5xshup" }], ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }]], V$ = e("panel-bottom-open", j$);
const P$ = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M3 15h18", key: "5xshup" }]], B$ = e("panel-bottom", P$);
const F$ = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M9 3v18", key: "fh3hqa" }], ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]], D$ = e("panel-left-close", F$);
const R$ = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M9 14v1", key: "askpd8" }], ["path", { d: "M9 19v2", key: "16tejx" }], ["path", { d: "M9 3v2", key: "1noubl" }], ["path", { d: "M9 9v1", key: "19ebxg" }]], T$ = e("panel-left-dashed", R$);
const U$ = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M9 3v18", key: "fh3hqa" }], ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]], O$ = e("panel-left-open", U$);
const G$ = [["path", { d: "M15 10V9", key: "4dkmfx" }], ["path", { d: "M15 15v-1", key: "6a4afx" }], ["path", { d: "M15 21v-2", key: "1qshmc" }], ["path", { d: "M15 5V3", key: "1fk0mb" }], ["path", { d: "M9 10V9", key: "1lazqi" }], ["path", { d: "M9 15v-1", key: "9lx740" }], ["path", { d: "M9 21v-2", key: "1fwk0n" }], ["path", { d: "M9 5V3", key: "2q8zi6" }], ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]], Z$ = e("panel-left-right-dashed", G$);
const W$ = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M9 3v18", key: "fh3hqa" }]], E$ = e("panel-left", W$);
const X$ = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M15 3v18", key: "14nvp0" }], ["path", { d: "m8 9 3 3-3 3", key: "12hl5m" }]], K$ = e("panel-right-close", X$);
const Q$ = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M15 14v1", key: "ilsfch" }], ["path", { d: "M15 19v2", key: "1fst2f" }], ["path", { d: "M15 3v2", key: "z204g4" }], ["path", { d: "M15 9v1", key: "z2a8b1" }]], J$ = e("panel-right-dashed", Q$);
const Y$ = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M15 3v18", key: "14nvp0" }], ["path", { d: "m10 15-3-3 3-3", key: "1pgupc" }]], eq = e("panel-right-open", Y$);
const aq = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M15 3v18", key: "14nvp0" }]], cq = e("panel-right", aq);
const tq = [["path", { d: "M14 15h1", key: "171nev" }], ["path", { d: "M14 9h1", key: "l0svgy" }], ["path", { d: "M19 15h2", key: "1vnucp" }], ["path", { d: "M19 9h2", key: "te2zfg" }], ["path", { d: "M3 15h2", key: "8bym0q" }], ["path", { d: "M3 9h2", key: "1h4ldw" }], ["path", { d: "M9 15h1", key: "1tg3ks" }], ["path", { d: "M9 9h1", key: "15jzuz" }], ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]], oq = e("panel-top-bottom-dashed", tq);
const dq = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M3 9h18", key: "1pudct" }], ["path", { d: "m9 16 3-3 3 3", key: "1idcnm" }]], nq = e("panel-top-close", dq);
const hq = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M14 9h1", key: "l0svgy" }], ["path", { d: "M19 9h2", key: "te2zfg" }], ["path", { d: "M3 9h2", key: "1h4ldw" }], ["path", { d: "M9 9h1", key: "15jzuz" }]], sq = e("panel-top-dashed", hq);
const iq = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M3 9h18", key: "1pudct" }]], yq = e("panel-top", iq);
const rq = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M3 9h18", key: "1pudct" }], ["path", { d: "m15 14-3 3-3-3", key: "g215vf" }]], kq = e("panel-top-open", rq);
const pq = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M9 3v18", key: "fh3hqa" }], ["path", { d: "M9 15h12", key: "5ijen5" }]], lq = e("panels-left-bottom", pq);
const uq = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M3 15h12", key: "1wkqb3" }], ["path", { d: "M15 3v18", key: "14nvp0" }]], Mq = e("panels-right-bottom", uq);
const vq = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M3 9h18", key: "1pudct" }], ["path", { d: "M9 21V9", key: "1oto5p" }]], mq = e("panels-top-left", vq);
const _q = [["path", { d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551", key: "1miecu" }]], gq = e("paperclip", _q);
const xq = [["path", { d: "M8 21s-4-3-4-9 4-9 4-9", key: "uto9ud" }], ["path", { d: "M16 3s4 3 4 9-4 9-4 9", key: "4w2vsq" }]], Lq = e("parentheses", xq);
const wq = [["path", { d: "M11 15h2", key: "199qp6" }], ["path", { d: "M12 12v3", key: "158kv8" }], ["path", { d: "M12 19v3", key: "npa21l" }], ["path", { d: "M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z", key: "1jofit" }], ["path", { d: "M9 9a3 3 0 1 1 6 0", key: "jdoeu8" }]], fq = e("parking-meter", wq);
const Iq = [["path", { d: "M5.8 11.3 2 22l10.7-3.79", key: "gwxi1d" }], ["path", { d: "M4 3h.01", key: "1vcuye" }], ["path", { d: "M22 8h.01", key: "1mrtc2" }], ["path", { d: "M15 2h.01", key: "1cjtqr" }], ["path", { d: "M22 20h.01", key: "1mrys2" }], ["path", { d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10", key: "hbicv8" }], ["path", { d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17", key: "1i94pl" }], ["path", { d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7", key: "1cofks" }], ["path", { d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z", key: "4kbmks" }]], Cq = e("party-popper", Iq);
const Nq = [["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }], ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]], bq = e("pause", Nq);
const $q = [["circle", { cx: "11", cy: "4", r: "2", key: "vol9p0" }], ["circle", { cx: "18", cy: "8", r: "2", key: "17gozi" }], ["circle", { cx: "20", cy: "16", r: "2", key: "1v9bxh" }], ["path", { d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z", key: "1ydw1z" }]], qq = e("paw-print", $q);
const zq = [["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", key: "1uq1d7" }], ["path", { d: "M15 14h.01", key: "1kp3bh" }], ["path", { d: "M9 6h6", key: "dgm16u" }], ["path", { d: "M9 10h6", key: "9gxzsh" }]], Sq = e("pc-case", zq);
const Aq = [["path", { d: "M13 21h8", key: "1jsn5i" }], ["path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z", key: "1a8usu" }]], Hq = e("pen-line", Aq);
const jq = [["path", { d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982", key: "bjo8r8" }], ["path", { d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353", key: "16h5ne" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]], Vq = e("pen-off", jq);
const Pq = [["path", { d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z", key: "nt11vn" }], ["path", { d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18", key: "15qc1e" }], ["path", { d: "m2.3 2.3 7.286 7.286", key: "1wuzzi" }], ["circle", { cx: "11", cy: "11", r: "2", key: "xmgehs" }]], Bq = e("pen-tool", Pq);
const Fq = [["path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z", key: "1a8usu" }]], Dq = e("pen", Fq);
const Rq = [["path", { d: "M13 21h8", key: "1jsn5i" }], ["path", { d: "m15 5 4 4", key: "1mk7zo" }], ["path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z", key: "1a8usu" }]], Tq = e("pencil-line", Rq);
const Uq = [["path", { d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982", key: "bjo8r8" }], ["path", { d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353", key: "16h5ne" }], ["path", { d: "m15 5 4 4", key: "1mk7zo" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]], Oq = e("pencil-off", Uq);
const Gq = [["path", { d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13", key: "orapub" }], ["path", { d: "m8 6 2-2", key: "115y1s" }], ["path", { d: "m18 16 2-2", key: "ee94s4" }], ["path", { d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17", key: "cfq27r" }], ["path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z", key: "1a8usu" }], ["path", { d: "m15 5 4 4", key: "1mk7zo" }]], Zq = e("pencil-ruler", Gq);
const Wq = [["path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z", key: "1a8usu" }], ["path", { d: "m15 5 4 4", key: "1mk7zo" }]], Eq = e("pencil", Wq);
const Xq = [["path", { d: "M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z", key: "2hea0t" }]], Kq = e("pentagon", Xq);
const Qq = [["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }], ["circle", { cx: "6.5", cy: "6.5", r: "2.5", key: "4mh3h7" }], ["circle", { cx: "17.5", cy: "17.5", r: "2.5", key: "1mdrzq" }]], Jq = e("percent", Qq);
const Yq = [["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }], ["path", { d: "m9 20 3-6 3 6", key: "se2kox" }], ["path", { d: "m6 8 6 2 6-2", key: "4o3us4" }], ["path", { d: "M12 10v4", key: "1kjpxc" }]], ez = e("person-standing", Yq);
const az = [["path", { d: "M20 11H4", key: "6ut86h" }], ["path", { d: "M20 7H4", key: "zbl0bi" }], ["path", { d: "M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7", key: "1ana5r" }]], cz = e("philippine-peso", az);
const tz = [["path", { d: "M13 2a9 9 0 0 1 9 9", key: "1itnx2" }], ["path", { d: "M13 6a5 5 0 0 1 5 5", key: "11nki7" }], ["path", { d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384", key: "9njp5v" }]], oz = e("phone-call", tz);
const dz = [["path", { d: "M14 6h8", key: "yd68k4" }], ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }], ["path", { d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384", key: "9njp5v" }]], nz = e("phone-forwarded", dz);
const hz = [["path", { d: "M16 2v6h6", key: "1mfrl5" }], ["path", { d: "m22 2-6 6", key: "6f0sa0" }], ["path", { d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384", key: "9njp5v" }]], sz = e("phone-incoming", hz);
const iz = [["path", { d: "m16 2 6 6", key: "1gw87d" }], ["path", { d: "m22 2-6 6", key: "6f0sa0" }], ["path", { d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384", key: "9njp5v" }]], yz = e("phone-missed", iz);
const rz = [["path", { d: "M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272", key: "1wngk7" }], ["path", { d: "M22 2 2 22", key: "y4kqgn" }], ["path", { d: "M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473", key: "10hv5p" }]], kz = e("phone-off", rz);
const pz = [["path", { d: "m16 8 6-6", key: "oawc05" }], ["path", { d: "M22 8V2h-6", key: "oqy2zc" }], ["path", { d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384", key: "9njp5v" }]], lz = e("phone-outgoing", pz);
const uz = [["path", { d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384", key: "9njp5v" }]], Mz = e("phone", uz);
const vz = [["line", { x1: "9", x2: "9", y1: "4", y2: "20", key: "ovs5a5" }], ["path", { d: "M4 7c0-1.7 1.3-3 3-3h13", key: "10pag4" }], ["path", { d: "M18 20c-1.7 0-3-1.3-3-3V4", key: "1gaosr" }]], mz = e("pi", vz);
const _z = [["path", { d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999", key: "1lw9ds" }], ["path", { d: "M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024", key: "ffj4ej" }], ["path", { d: "M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069", key: "8tj4zw" }], ["path", { d: "M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z", key: "hh6h97" }]], gz = e("pickaxe", _z);
const xz = [["path", { d: "M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8", key: "lag0yf" }], ["path", { d: "M2 14h20", key: "myj16y" }], ["path", { d: "M6 14v4", key: "9ng0ue" }], ["path", { d: "M10 14v4", key: "1v8uk5" }], ["path", { d: "M14 14v4", key: "1tqops" }], ["path", { d: "M18 14v4", key: "18uqwm" }]], Lz = e("piano", xz);
const wz = [["path", { d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4", key: "daa4of" }], ["rect", { width: "10", height: "7", x: "12", y: "13", rx: "2", key: "1nb8gs" }]], fz = e("picture-in-picture-2", wz);
const Iz = [["path", { d: "M2 10h6V4", key: "zwrco" }], ["path", { d: "m2 4 6 6", key: "ug085t" }], ["path", { d: "M21 10V7a2 2 0 0 0-2-2h-7", key: "git5jr" }], ["path", { d: "M3 14v2a2 2 0 0 0 2 2h3", key: "1f7fh3" }], ["rect", { x: "12", y: "14", width: "10", height: "7", rx: "1", key: "1wjs3o" }]], Cz = e("picture-in-picture", Iz);
const Nz = [["path", { d: "M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z", key: "1piglc" }], ["path", { d: "M16 10h.01", key: "1m94wz" }], ["path", { d: "M2 8v1a2 2 0 0 0 2 2h1", key: "1env43" }]], bz = e("piggy-bank", Nz);
const $z = [["path", { d: "M14 3v11", key: "mlfb7b" }], ["path", { d: "M14 9h-3a3 3 0 0 1 0-6h9", key: "1ulc19" }], ["path", { d: "M18 3v11", key: "1phi0r" }], ["path", { d: "M22 18H2l4-4", key: "yt65j9" }], ["path", { d: "m6 22-4-4", key: "6jgyf5" }]], qz = e("pilcrow-left", $z);
const zz = [["path", { d: "M10 3v11", key: "o3l5kj" }], ["path", { d: "M10 9H7a1 1 0 0 1 0-6h8", key: "1wb1nc" }], ["path", { d: "M14 3v11", key: "mlfb7b" }], ["path", { d: "m18 14 4 4H2", key: "4r8io1" }], ["path", { d: "m22 18-4 4", key: "1hjjrd" }]], Sz = e("pilcrow-right", zz);
const Az = [["path", { d: "M13 4v16", key: "8vvj80" }], ["path", { d: "M17 4v16", key: "7dpous" }], ["path", { d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13", key: "sh4n9v" }]], Hz = e("pilcrow", Az);
const jz = [["path", { d: "M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4", key: "17ldeb" }], ["path", { d: "M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7", key: "nc37y6" }], ["rect", { width: "16", height: "5", x: "4", y: "2", rx: "1", key: "3jeezo" }]], Vz = e("pill-bottle", jz);
const Pz = [["path", { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z", key: "wa1lgi" }], ["path", { d: "m8.5 8.5 7 7", key: "rvfmvr" }]], Bz = e("pill", Pz);
const Fz = [["path", { d: "M12 17v5", key: "bb1du9" }], ["path", { d: "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89", key: "znwnzq" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11", key: "c9qhm2" }]], Dz = e("pin-off", Fz);
const Rz = [["path", { d: "M12 17v5", key: "bb1du9" }], ["path", { d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z", key: "1nkz8b" }]], Tz = e("pin", Rz);
const Uz = [["path", { d: "m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12", key: "1y3wsu" }], ["path", { d: "m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z", key: "110lr1" }], ["path", { d: "m2 22 .414-.414", key: "jhxm08" }]], Oz = e("pipette", Uz);
const Gz = [["path", { d: "m12 14-1 1", key: "11onhr" }], ["path", { d: "m13.75 18.25-1.25 1.42", key: "1yisr3" }], ["path", { d: "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12", key: "1qtqk6" }], ["path", { d: "M18.8 9.3a1 1 0 0 0 2.1 7.7", key: "fbbbr2" }], ["path", { d: "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z", key: "1hyfdd" }]], Zz = e("pizza", Gz);
const Wz = [["path", { d: "M2 22h20", key: "272qi7" }], ["path", { d: "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z", key: "1ma21e" }]], Ez = e("plane-landing", Wz);
const Xz = [["path", { d: "M2 22h20", key: "272qi7" }], ["path", { d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z", key: "fkigj9" }]], Kz = e("plane-takeoff", Xz);
const Qz = [["path", { d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z", key: "1v9wt8" }]], Jz = e("plane", Qz);
const Yz = [["path", { d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z", key: "10ikf1" }]], eS = e("play", Yz);
const aS = [["path", { d: "M9 2v6", key: "17ngun" }], ["path", { d: "M15 2v6", key: "s7yy2p" }], ["path", { d: "M12 17v5", key: "bb1du9" }], ["path", { d: "M5 8h14", key: "pcz4l3" }], ["path", { d: "M6 11V8h12v3a6 6 0 1 1-12 0Z", key: "wtfw2c" }]], cS = e("plug-2", aS);
const tS = [["path", { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z", key: "goz73y" }], ["path", { d: "m2 22 3-3", key: "19mgm9" }], ["path", { d: "M7.5 13.5 10 11", key: "7xgeeb" }], ["path", { d: "M10.5 16.5 13 14", key: "10btkg" }], ["path", { d: "m18 3-4 4h6l-4 4", key: "16psg9" }]], oS = e("plug-zap", tS);
const dS = [["path", { d: "M12 22v-5", key: "1ega77" }], ["path", { d: "M15 8V2", key: "18g5xt" }], ["path", { d: "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z", key: "1xoxul" }], ["path", { d: "M9 8V2", key: "14iosj" }]], nS = e("plug", dS);
const hS = [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "M12 5v14", key: "s699le" }]], sS = e("plus", hS);
const iS = [["path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2", key: "19w3oe" }], ["path", { d: "M18 6h.01", key: "1v4wsw" }], ["path", { d: "M6 18h.01", key: "uhywen" }], ["path", { d: "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z", key: "6fykxj" }], ["path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6", key: "1utzek" }]], yS = e("pocket-knife", iS);
const rS = [["path", { d: "M20 3a2 2 0 0 1 2 2v6a1 1 0 0 1-20 0V5a2 2 0 0 1 2-2z", key: "1uodqw" }], ["path", { d: "m8 10 4 4 4-4", key: "1mxd5q" }]], kS = e("pocket", rS);
const pS = [["path", { d: "M13 17a1 1 0 1 0-2 0l.5 4.5a0.5 0.5 0 0 0 1 0z", fill: "currentColor", key: "x1mxqr" }], ["path", { d: "M16.85 18.58a9 9 0 1 0-9.7 0", key: "d71mpg" }], ["path", { d: "M8 14a5 5 0 1 1 8 0", key: "fc81rn" }], ["circle", { cx: "12", cy: "11", r: "1", fill: "currentColor", key: "vqiwd" }]], lS = e("podcast", pS);
const uS = [["path", { d: "M22 14a8 8 0 0 1-8 8", key: "56vcr3" }], ["path", { d: "M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2", key: "1agjmk" }], ["path", { d: "M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1", key: "wdbh2u" }], ["path", { d: "M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10", key: "1ibuk9" }], ["path", { d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15", key: "g6ys72" }]], MS = e("pointer", uS);
const vS = [["path", { d: "M10 4.5V4a2 2 0 0 0-2.41-1.957", key: "jsi14n" }], ["path", { d: "M13.9 8.4a2 2 0 0 0-1.26-1.295", key: "hirc7f" }], ["path", { d: "M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158", key: "1jxb2e" }], ["path", { d: "m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343", key: "10r7hm" }], ["path", { d: "M6 6v8", key: "tv5xkp" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]], mS = e("pointer-off", vS);
const _S = [["path", { d: "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z", key: "1o68ps" }], ["path", { d: "m22 22-5.5-5.5", key: "17o70y" }]], gS = e("popsicle", _S);
const xS = [["path", { d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4", key: "10td1f" }], ["path", { d: "M10 22 9 8", key: "yjptiv" }], ["path", { d: "m14 22 1-14", key: "8jwc8b" }], ["path", { d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z", key: "1qo33t" }]], LS = e("popcorn", xS);
const wS = [["path", { d: "M18 7c0-5.333-8-5.333-8 0", key: "1prm2n" }], ["path", { d: "M10 7v14", key: "18tmcs" }], ["path", { d: "M6 21h12", key: "4dkmi1" }], ["path", { d: "M6 13h10", key: "ybwr4a" }]], fS = e("pound-sterling", wS);
const IS = [["path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15", key: "dxknvb" }], ["path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68", key: "1x7qb5" }], ["path", { d: "M12 2v4", key: "3427ic" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]], CS = e("power-off", IS);
const NS = [["path", { d: "M12 2v10", key: "mnfbl" }], ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]], bS = e("power", NS);
const $S = [["path", { d: "M2 3h20", key: "91anmk" }], ["path", { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3", key: "2k9sn8" }], ["path", { d: "m7 21 5-5 5 5", key: "bip4we" }]], qS = e("presentation", $S);
const zS = [["path", { d: "M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5", key: "qeb09x" }], ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }], ["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2", key: "1md90i" }], ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }]], SS = e("printer-check", zS);
const AS = [["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2", key: "143wyd" }], ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }], ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1", key: "1ue0tg" }]], HS = e("printer", AS);
const jS = [["path", { d: "M5 7 3 5", key: "1yys58" }], ["path", { d: "M9 6V3", key: "1ptz9u" }], ["path", { d: "m13 7 2-2", key: "1w3vmq" }], ["circle", { cx: "9", cy: "13", r: "3", key: "1mma13" }], ["path", { d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17", key: "2frwzc" }], ["path", { d: "M16 16h2", key: "dnq2od" }]], VS = e("projector", jS);
const PS = [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }], ["path", { d: "M12 9v11", key: "1fnkrn" }], ["path", { d: "M2 9h13a2 2 0 0 1 2 2v9", key: "11z3ex" }]], BS = e("proportions", PS);
const FS = [["path", { d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z", key: "w46dr5" }]], DS = e("puzzle", FS);
const RS = [["path", { d: "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z", key: "aenxs0" }], ["path", { d: "M12 2v20", key: "t6zp3m" }]], TS = e("pyramid", RS);
const US = [["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" }], ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" }], ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" }], ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }], ["path", { d: "M21 21v.01", key: "ents32" }], ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }], ["path", { d: "M3 12h.01", key: "nlz23k" }], ["path", { d: "M12 3h.01", key: "n36tog" }], ["path", { d: "M12 16v.01", key: "133mhm" }], ["path", { d: "M16 12h1", key: "1slzba" }], ["path", { d: "M21 12v.01", key: "1lwtk9" }], ["path", { d: "M12 21v-1", key: "1880an" }]], OS = e("qr-code", US);
const GS = [["path", { d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z", key: "rib7q0" }], ["path", { d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z", key: "1ymkrd" }]], ZS = e("quote", GS);
const WS = [["path", { d: "M13 16a3 3 0 0 1 2.24 5", key: "1epib5" }], ["path", { d: "M18 12h.01", key: "yjnet6" }], ["path", { d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3", key: "ue9ozu" }], ["path", { d: "M20 8.54V4a2 2 0 1 0-4 0v3", key: "49iql8" }], ["path", { d: "M7.612 12.524a3 3 0 1 0-1.6 4.3", key: "1e33i0" }]], ES = e("rabbit", WS);
const XS = [["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34", key: "z3du51" }], ["path", { d: "M4 6h.01", key: "oypzma" }], ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35", key: "qzzz0" }], ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67", key: "1yjesh" }], ["path", { d: "M12 18h.01", key: "mhygvu" }], ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67", key: "1u2y91" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }], ["path", { d: "m13.41 10.59 5.66-5.66", key: "mhq4k0" }]], KS = e("radar", XS);
const QS = [["path", { d: "M12 12h.01", key: "1mp3jc" }], ["path", { d: "M14 15.4641a4 4 0 0 1-4 0L7.52786 19.74597 A 1 1 0 0 0 7.99303 21.16211 10 10 0 0 0 16.00697 21.16211 1 1 0 0 0 16.47214 19.74597z", key: "1y4lzb" }], ["path", { d: "M16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305 10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12z", key: "163ggk" }], ["path", { d: "M8 12a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305 10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z", key: "1l9i0b" }]], JS = e("radiation", QS);
const YS = [["path", { d: "M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21", key: "1mqj8i" }]], eA = e("radical", YS);
const aA = [["path", { d: "M5 16v2", key: "g5qcv5" }], ["path", { d: "M19 16v2", key: "1gbaio" }], ["rect", { width: "20", height: "8", x: "2", y: "8", rx: "2", key: "vjsjur" }], ["path", { d: "M18 12h.01", key: "yjnet6" }]], cA = e("radio-receiver", aA);
const tA = [["path", { d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9", key: "s0qx1y" }], ["path", { d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5", key: "1idnkw" }], ["circle", { cx: "12", cy: "9", r: "2", key: "1092wv" }], ["path", { d: "M16.2 4.8c2 2 2.26 5.11.8 7.47", key: "ojru2q" }], ["path", { d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1", key: "rhi7fg" }], ["path", { d: "M9.5 18h5", key: "mfy3pd" }], ["path", { d: "m8 22 4-11 4 11", key: "25yftu" }]], oA = e("radio-tower", tA);
const dA = [["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }], ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }], ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }], ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]], nA = e("radio", dA);
const hA = [["path", { d: "M20.34 17.52a10 10 0 1 0-2.82 2.82", key: "fydyku" }], ["circle", { cx: "19", cy: "19", r: "2", key: "17f5cg" }], ["path", { d: "m13.41 13.41 4.18 4.18", key: "1gqbwc" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]], sA = e("radius", hA);
const iA = [["path", { d: "M5 15h14", key: "m0yey3" }], ["path", { d: "M5 9h14", key: "7tsvo6" }], ["path", { d: "m14 20-5-5 6-6-5-5", key: "1jo42i" }]], yA = e("rail-symbol", iA);
const rA = [["path", { d: "M22 17a10 10 0 0 0-20 0", key: "ozegv" }], ["path", { d: "M6 17a6 6 0 0 1 12 0", key: "5giftw" }], ["path", { d: "M10 17a2 2 0 0 1 4 0", key: "gnsikk" }]], kA = e("rainbow", rA);
const pA = [["path", { d: "M13 22H4a2 2 0 0 1 0-4h12", key: "bt3f23" }], ["path", { d: "M13.236 18a3 3 0 0 0-2.2-5", key: "1tbvmo" }], ["path", { d: "M16 9h.01", key: "1bdo4e" }], ["path", { d: "M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3", key: "9ch7kn" }], ["path", { d: "M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18", key: "3s7e9i" }]], lA = e("rat", pA);
const uA = [["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2", key: "1oxtiu" }], ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]], MA = e("ratio", uA);
const vA = [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }], ["path", { d: "M12 6.5v11", key: "ecfhkf" }], ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2", key: "1makmb" }]], mA = e("receipt-cent", vA);
const _A = [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }], ["path", { d: "M8 12h5", key: "1g6qi8" }], ["path", { d: "M16 9.5a4 4 0 1 0 0 5.2", key: "b2px4r" }]], gA = e("receipt-euro", _A);
const xA = [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }], ["path", { d: "M8 7h8", key: "i86dvs" }], ["path", { d: "M12 17.5 8 15h1a4 4 0 0 0 0-8", key: "grpkl4" }], ["path", { d: "M8 11h8", key: "vwpz6n" }]], LA = e("receipt-indian-rupee", xA);
const wA = [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }], ["path", { d: "m12 10 3-3", key: "1mc12w" }], ["path", { d: "m9 7 3 3v7.5", key: "39i0xv" }], ["path", { d: "M9 11h6", key: "1fldmi" }], ["path", { d: "M9 15h6", key: "cctwl0" }]], fA = e("receipt-japanese-yen", wA);
const IA = [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }], ["path", { d: "M8 13h5", key: "1k9z8w" }], ["path", { d: "M10 17V9.5a2.5 2.5 0 0 1 5 0", key: "1dzgp0" }], ["path", { d: "M8 17h7", key: "8mjdqu" }]], CA = e("receipt-pound-sterling", IA);
const NA = [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }], ["path", { d: "M8 15h5", key: "vxg57a" }], ["path", { d: "M8 11h5a2 2 0 1 0 0-4h-3v10", key: "1usi5u" }]], bA = e("receipt-russian-ruble", NA);
const $A = [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }], ["path", { d: "M10 17V7h5", key: "k7jq18" }], ["path", { d: "M10 11h4", key: "1i0mka" }], ["path", { d: "M8 15h5", key: "vxg57a" }]], qA = e("receipt-swiss-franc", $A);
const zA = [["path", { d: "M13 16H8", key: "wsln4y" }], ["path", { d: "M14 8H8", key: "1l3xfs" }], ["path", { d: "M16 12H8", key: "1fr5h0" }], ["path", { d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z", key: "ycz6yz" }]], SA = e("receipt-text", zA);
const AA = [["path", { d: "M10 6.5v11a5.5 5.5 0 0 0 5.5-5.5", key: "nw10mp" }], ["path", { d: "m14 8-6 3", key: "2tb98i" }], ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z", key: "io9ry0" }]], HA = e("receipt-turkish-lira", AA);
const jA = [["path", { d: "M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z", key: "1m5n7q" }], ["circle", { cx: "14", cy: "12", r: "8", key: "1pag6k" }]], VA = e("rectangle-circle", jA);
const PA = [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }], ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }], ["path", { d: "M12 17.5v-11", key: "1jc1ny" }]], BA = e("receipt", PA);
const FA = [["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }], ["path", { d: "M12 12h.01", key: "1mp3jc" }], ["path", { d: "M17 12h.01", key: "1m0b6t" }], ["path", { d: "M7 12h.01", key: "eqddd0" }]], DA = e("rectangle-ellipsis", FA);
const RA = [["path", { d: "M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z", key: "d5y1f" }]], TA = e("rectangle-goggles", RA);
const UA = [["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]], OA = e("rectangle-horizontal", UA);
const GA = [["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2", key: "1oxtiu" }]], ZA = e("rectangle-vertical", GA);
const WA = [["path", { d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5", key: "x6z5xu" }], ["path", { d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12", key: "1x4zh5" }], ["path", { d: "m14 16-3 3 3 3", key: "f6jyew" }], ["path", { d: "M8.293 13.596 7.196 9.5 3.1 10.598", key: "wf1obh" }], ["path", { d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843", key: "9tzpgr" }], ["path", { d: "m13.378 9.633 4.096 1.098 1.097-4.096", key: "1oe83g" }]], EA = e("recycle", WA);
const XA = [["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }], ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13", key: "6uklza" }]], KA = e("redo-2", XA);
const QA = [["circle", { cx: "12", cy: "17", r: "1", key: "1ixnty" }], ["path", { d: "M21 7v6h-6", key: "3ptur4" }], ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]], JA = e("redo-dot", QA);
const YA = [["path", { d: "M21 7v6h-6", key: "3ptur4" }], ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]], eH = e("redo", YA);
const aH = [["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }], ["path", { d: "M3 3v5h5", key: "1xhq8a" }], ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }], ["path", { d: "M16 16h5v5", key: "ccwih5" }], ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]], cH = e("refresh-ccw-dot", aH);
const tH = [["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }], ["path", { d: "M3 3v5h5", key: "1xhq8a" }], ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }], ["path", { d: "M16 16h5v5", key: "ccwih5" }]], oH = e("refresh-ccw", tH);
const dH = [["path", { d: "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47", key: "1krf6h" }], ["path", { d: "M8 16H3v5", key: "1cv678" }], ["path", { d: "M3 12C3 9.51 4 7.26 5.64 5.64", key: "ruvoct" }], ["path", { d: "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64", key: "19q130" }], ["path", { d: "M21 12c0 1-.16 1.97-.47 2.87", key: "4w8emr" }], ["path", { d: "M21 3v5h-5", key: "1q7to0" }], ["path", { d: "M22 22 2 2", key: "1r8tn9" }]], nH = e("refresh-cw-off", dH);
const hH = [["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }], ["path", { d: "M21 3v5h-5", key: "1q7to0" }], ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }], ["path", { d: "M8 16H3v5", key: "1cv678" }]], sH = e("refresh-cw", hH);
const iH = [["path", { d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z", key: "fpq118" }], ["path", { d: "M5 10h14", key: "elsbfy" }], ["path", { d: "M15 7v6", key: "1nx30x" }]], yH = e("refrigerator", iH);
const rH = [["path", { d: "M17 3v10", key: "15fgeh" }], ["path", { d: "m12.67 5.5 8.66 5", key: "1gpheq" }], ["path", { d: "m12.67 10.5 8.66-5", key: "1dkfa6" }], ["path", { d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z", key: "swwfx4" }]], kH = e("regex", rH);
const pH = [["path", { d: "M4 7V4h16v3", key: "9msm58" }], ["path", { d: "M5 20h6", key: "1h6pxn" }], ["path", { d: "M13 4 8 20", key: "kqq6aj" }], ["path", { d: "m15 15 5 5", key: "me55sn" }], ["path", { d: "m20 15-5 5", key: "11p7ol" }]], lH = e("remove-formatting", pH);
const uH = [["path", { d: "m17 2 4 4-4 4", key: "nntrym" }], ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }], ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }], ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }], ["path", { d: "M11 10h1v4", key: "70cz1p" }]], MH = e("repeat-1", uH);
const vH = [["path", { d: "m2 9 3-3 3 3", key: "1ltn5i" }], ["path", { d: "M13 18H7a2 2 0 0 1-2-2V6", key: "1r6tfw" }], ["path", { d: "m22 15-3 3-3-3", key: "4rnwn2" }], ["path", { d: "M11 6h6a2 2 0 0 1 2 2v10", key: "2f72bc" }]], mH = e("repeat-2", vH);
const _H = [["path", { d: "m17 2 4 4-4 4", key: "nntrym" }], ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }], ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }], ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]], gH = e("repeat", _H);
const xH = [["path", { d: "M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1", key: "zg1ipl" }], ["path", { d: "M14 4a1 1 0 0 1 1-1", key: "dhj8ez" }], ["path", { d: "M15 10a1 1 0 0 1-1-1", key: "1mnyi5" }], ["path", { d: "M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1", key: "txt6k4" }], ["path", { d: "M21 4a1 1 0 0 0-1-1", key: "sfs9ap" }], ["path", { d: "M21 9a1 1 0 0 1-1 1", key: "mp6qeo" }], ["path", { d: "m3 7 3 3 3-3", key: "x25e72" }], ["path", { d: "M6 10V5a2 2 0 0 1 2-2h2", key: "15xut4" }], ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1", key: "1bkyp8" }]], LH = e("replace-all", xH);
const wH = [["path", { d: "M14 4a1 1 0 0 1 1-1", key: "dhj8ez" }], ["path", { d: "M15 10a1 1 0 0 1-1-1", key: "1mnyi5" }], ["path", { d: "M21 4a1 1 0 0 0-1-1", key: "sfs9ap" }], ["path", { d: "M21 9a1 1 0 0 1-1 1", key: "mp6qeo" }], ["path", { d: "m3 7 3 3 3-3", key: "x25e72" }], ["path", { d: "M6 10V5a2 2 0 0 1 2-2h2", key: "15xut4" }], ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1", key: "1bkyp8" }]], fH = e("replace", wH);
const IH = [["path", { d: "m12 17-5-5 5-5", key: "1s3y5u" }], ["path", { d: "M22 18v-2a4 4 0 0 0-4-4H7", key: "1fcyog" }], ["path", { d: "m7 17-5-5 5-5", key: "1ed8i2" }]], CH = e("reply-all", IH);
const NH = [["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }], ["path", { d: "m9 17-5-5 5-5", key: "nvlc11" }]], bH = e("reply", NH);
const $H = [["path", { d: "M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z", key: "2a1g8i" }], ["path", { d: "M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z", key: "rg3s36" }]], qH = e("rewind", $H);
const zH = [["path", { d: "M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22", key: "1rnhq3" }], ["path", { d: "m12 18 2.57-3.5", key: "116vt7" }], ["path", { d: "M6.243 9.016a7 7 0 0 1 11.507-.009", key: "10dq0b" }], ["path", { d: "M9.35 14.53 12 11.22", key: "tdsyp2" }], ["path", { d: "M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z", key: "nmifey" }]], SH = e("ribbon", zH);
const AH = [["path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z", key: "m3kijz" }], ["path", { d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z", key: "1fmvmk" }], ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }], ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }]], HH = e("rocket", AH);
const jH = [["polyline", { points: "3.5 2 6.5 12.5 18 12.5", key: "y3iy52" }], ["line", { x1: "9.5", x2: "5.5", y1: "12.5", y2: "20", key: "19vg5i" }], ["line", { x1: "15", x2: "18.5", y1: "12.5", y2: "20", key: "1inpmv" }], ["path", { d: "M2.75 18a13 13 0 0 0 18.5 0", key: "1nquas" }]], VH = e("rocking-chair", jH);
const PH = [["path", { d: "M6 19V5", key: "1r845m" }], ["path", { d: "M10 19V6.8", key: "9j2tfs" }], ["path", { d: "M14 19v-7.8", key: "10s8qv" }], ["path", { d: "M18 5v4", key: "1tajlv" }], ["path", { d: "M18 19v-6", key: "ielfq3" }], ["path", { d: "M22 19V9", key: "158nzp" }], ["path", { d: "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65", key: "1930oh" }]], BH = e("roller-coaster", PH);
const FH = [["path", { d: "M17 10h-1a4 4 0 1 1 4-4v.534", key: "7qf5zm" }], ["path", { d: "M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31", key: "1et29u" }], ["path", { d: "M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2", key: "kiv2lz" }], ["path", { d: "M9.77 12C4 15 2 22 2 22", key: "h28rw0" }], ["circle", { cx: "17", cy: "8", r: "2", key: "1330xn" }]], DH = e("rose", FH);
const RH = [["path", { d: "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2", key: "10n0gc" }], ["path", { d: "m15.194 13.707 3.814 1.86-1.86 3.814", key: "16shm9" }], ["path", { d: "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4", key: "1lxi77" }]], TH = e("rotate-3d", RH);
const UH = [["path", { d: "m14.5 9.5 1 1", key: "159eiq" }], ["path", { d: "m15.5 8.5-4 4", key: "iirg3q" }], ["path", { d: "M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8", key: "g2jlw" }], ["path", { d: "M3 3v5h5", key: "1xhq8a" }], ["circle", { cx: "10", cy: "14", r: "2", key: "1239so" }]], OH = e("rotate-ccw-key", UH);
const GH = [["path", { d: "M20 9V7a2 2 0 0 0-2-2h-6", key: "19z8uc" }], ["path", { d: "m15 2-3 3 3 3", key: "177bxs" }], ["path", { d: "M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2", key: "d36hnl" }]], ZH = e("rotate-ccw-square", GH);
const WH = [["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }], ["path", { d: "M3 3v5h5", key: "1xhq8a" }]], EH = e("rotate-ccw", WH);
const XH = [["path", { d: "M12 5H6a2 2 0 0 0-2 2v3", key: "l96uqu" }], ["path", { d: "m9 8 3-3-3-3", key: "1gzgc3" }], ["path", { d: "M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2", key: "1w2k5h" }]], KH = e("rotate-cw-square", XH);
const QH = [["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }], ["path", { d: "M21 3v5h-5", key: "1q7to0" }]], JH = e("rotate-cw", QH);
const YH = [["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }], ["path", { d: "M9 19h8.5c.4 0 .9-.1 1.3-.2", key: "1effex" }], ["path", { d: "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12", key: "k9y2ds" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M21 15.3a3.5 3.5 0 0 0-3.3-3.3", key: "11nlu2" }], ["path", { d: "M15 5h-4.3", key: "6537je" }], ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]], ej = e("route-off", YH);
const aj = [["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }], ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15", key: "1d8sl" }], ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]], cj = e("route", aj);
const tj = [["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }], ["path", { d: "M6.01 18H6", key: "19vcac" }], ["path", { d: "M10.01 18H10", key: "uamcmx" }], ["path", { d: "M15 10v4", key: "qjz1xs" }], ["path", { d: "M17.84 7.17a4 4 0 0 0-5.66 0", key: "1rif40" }], ["path", { d: "M20.66 4.34a8 8 0 0 0-11.31 0", key: "6a5xfq" }]], oj = e("router", tj);
const dj = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M3 12h18", key: "1i2n21" }]], nj = e("rows-2", dj);
const hj = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M21 9H3", key: "1338ky" }], ["path", { d: "M21 15H3", key: "9uk58r" }]], sj = e("rows-3", hj);
const ij = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M21 7.5H3", key: "1hm9pq" }], ["path", { d: "M21 12H3", key: "2avoz0" }], ["path", { d: "M21 16.5H3", key: "n7jzkj" }]], yj = e("rows-4", ij);
const rj = [["path", { d: "M4 11a9 9 0 0 1 9 9", key: "pv89mb" }], ["path", { d: "M4 4a16 16 0 0 1 16 16", key: "k0647b" }], ["circle", { cx: "5", cy: "19", r: "1", key: "bfqh0e" }]], kj = e("rss", rj);
const pj = [["path", { d: "M10 15v-3", key: "1pjskw" }], ["path", { d: "M14 15v-3", key: "1o1mqj" }], ["path", { d: "M18 15v-3", key: "cws6he" }], ["path", { d: "M2 8V4", key: "3jv1jz" }], ["path", { d: "M22 6H2", key: "1iqbfk" }], ["path", { d: "M22 8V4", key: "16f4ou" }], ["path", { d: "M6 15v-3", key: "1ij1qe" }], ["rect", { x: "2", y: "12", width: "20", height: "8", rx: "2", key: "1tqiko" }]], lj = e("ruler-dimension-line", pj);
const uj = [["path", { d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z", key: "icamh8" }], ["path", { d: "m14.5 12.5 2-2", key: "inckbg" }], ["path", { d: "m11.5 9.5 2-2", key: "fmmyf7" }], ["path", { d: "m8.5 6.5 2-2", key: "vc6u1g" }], ["path", { d: "m17.5 15.5 2-2", key: "wo5hmg" }]], Mj = e("ruler", uj);
const vj = [["path", { d: "M6 11h8a4 4 0 0 0 0-8H9v18", key: "18ai8t" }], ["path", { d: "M6 15h8", key: "1y8f6l" }]], mj = e("russian-ruble", vj);
const _j = [["path", { d: "M10 2v15", key: "1qf71f" }], ["path", { d: "M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z", key: "1pxcvx" }], ["path", { d: "M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z", key: "5oog16" }]], gj = e("sailboat", _j);
const xj = [["path", { d: "M7 21h10", key: "1b0cd5" }], ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z", key: "4rw317" }], ["path", { d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1", key: "10xrj0" }], ["path", { d: "m13 12 4-4", key: "1hckqy" }], ["path", { d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2", key: "1p4srx" }]], Lj = e("salad", xj);
const wj = [["path", { d: "m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777", key: "f1wd0e" }], ["path", { d: "M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25", key: "1pfu07" }], ["path", { d: "M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9", key: "1oq9qw" }], ["path", { d: "m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2", key: "1fnwu5" }], ["rect", { width: "20", height: "4", x: "2", y: "11", rx: "1", key: "itshg" }]], fj = e("sandwich", wj);
const Ij = [["path", { d: "M4 10a7.31 7.31 0 0 0 10 10Z", key: "1fzpp3" }], ["path", { d: "m9 15 3-3", key: "88sc13" }], ["path", { d: "M17 13a6 6 0 0 0-6-6", key: "15cc6u" }], ["path", { d: "M21 13A10 10 0 0 0 11 3", key: "11nf8s" }]], Cj = e("satellite-dish", Ij);
const Nj = [["path", { d: "m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5", key: "dzhfyz" }], ["path", { d: "M16.5 7.5 19 5", key: "1ltcjm" }], ["path", { d: "m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5", key: "nfoymv" }], ["path", { d: "M9 21a6 6 0 0 0-6-6", key: "1iajcf" }], ["path", { d: "M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z", key: "nv9zqy" }]], bj = e("satellite", Nj);
const $j = [["path", { d: "m20 19.5-5.5 1.2", key: "1aenhr" }], ["path", { d: "M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2", key: "2rtezt" }], ["path", { d: "m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2", key: "1kbm92" }], ["path", { d: "M20 10 4 13.5", key: "8nums9" }]], qj = e("saudi-riyal", $j);
const zj = [["path", { d: "M10 2v3a1 1 0 0 0 1 1h5", key: "1xspal" }], ["path", { d: "M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6", key: "1ra60u" }], ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6", key: "pblm9e" }], ["path", { d: "M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z", key: "1yve0x" }]], Sj = e("save-all", zj);
const Aj = [["path", { d: "M13 13H8a1 1 0 0 0-1 1v7", key: "h8g396" }], ["path", { d: "M14 8h1", key: "1lfen6" }], ["path", { d: "M17 21v-4", key: "1yknxs" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41", key: "1t4vdl" }], ["path", { d: "M29.5 11.5s5 5 4 5", key: "zzn4i6" }], ["path", { d: "M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15", key: "24cby9" }]], Hj = e("save-off", Aj);
const jj = [["path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z", key: "1c8476" }], ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }], ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]], Vj = e("save", jj);
const Pj = [["path", { d: "M5 7v11a1 1 0 0 0 1 1h11", key: "13dt1j" }], ["path", { d: "M5.293 18.707 11 13", key: "ezgbsx" }], ["circle", { cx: "19", cy: "19", r: "2", key: "17f5cg" }], ["circle", { cx: "5", cy: "5", r: "2", key: "1gwv83" }]], Bj = e("scale-3d", Pj);
const Fj = [["path", { d: "M12 3v18", key: "108xh3" }], ["path", { d: "m19 8 3 8a5 5 0 0 1-6 0zV7", key: "zcdpyk" }], ["path", { d: "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1", key: "1yorad" }], ["path", { d: "m5 8 3 8a5 5 0 0 1-6 0zV7", key: "eua70x" }], ["path", { d: "M7 21h10", key: "1b0cd5" }]], Dj = e("scale", Fj);
const Rj = [["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }], ["path", { d: "M14 15H9v-5", key: "pi4jk9" }], ["path", { d: "M16 3h5v5", key: "1806ms" }], ["path", { d: "M21 3 9 15", key: "15kdhq" }]], Tj = e("scaling", Rj);
const Uj = [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }], ["path", { d: "M8 7v10", key: "23sfjj" }], ["path", { d: "M12 7v10", key: "jspqdw" }], ["path", { d: "M17 7v10", key: "578dap" }]], Oj = e("scan-barcode", Uj);
const Gj = [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }], ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }], ["path", { d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0", key: "11ak4c" }]], Zj = e("scan-eye", Gj);
const Wj = [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }], ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }], ["path", { d: "M9 9h.01", key: "1q5me6" }], ["path", { d: "M15 9h.01", key: "x1ddxp" }]], Ej = e("scan-face", Wj);
const Xj = [["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }], ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }], ["path", { d: "M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.306l-3.447 3.62a1 1 0 0 1-1.449 0z", key: "1ak1ef" }]], Kj = e("scan-heart", Xj);
const Qj = [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }], ["path", { d: "M7 12h10", key: "b7w52i" }]], Jj = e("scan-line", Qj);
const Yj = [["path", { d: "M17 12v4a1 1 0 0 1-1 1h-4", key: "uk4fdo" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }], ["path", { d: "M17 8V7", key: "q2g9wo" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }], ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }], ["path", { d: "M7 17h.01", key: "19xn7k" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }], ["rect", { x: "7", y: "7", width: "5", height: "5", rx: "1", key: "m9kyts" }]], eV = e("scan-qr-code", Yj);
const aV = [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }], ["path", { d: "m16 16-1.9-1.9", key: "1dq9hf" }]], cV = e("scan-search", aV);
const tV = [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }], ["path", { d: "M7 8h8", key: "1jbsf9" }], ["path", { d: "M7 12h10", key: "b7w52i" }], ["path", { d: "M7 16h6", key: "1vyc9m" }]], oV = e("scan-text", tV);
const dV = [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]], nV = e("scan", dV);
const hV = [["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }], ["path", { d: "M18 5v16", key: "1ethyx" }], ["path", { d: "m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6", key: "zywc2d" }], ["path", { d: "m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11", key: "1d4ql0" }], ["path", { d: "M6 5v16", key: "1sn0nx" }], ["circle", { cx: "12", cy: "9", r: "2", key: "1092wv" }]], sV = e("school", hV);
const iV = [["path", { d: "M5.42 9.42 8 12", key: "12pkuq" }], ["circle", { cx: "4", cy: "8", r: "2", key: "107mxr" }], ["path", { d: "m14 6-8.58 8.58", key: "gvzu5l" }], ["circle", { cx: "4", cy: "16", r: "2", key: "1ehqvc" }], ["path", { d: "M10.8 14.8 14 18", key: "ax7m9r" }], ["path", { d: "M16 12h-2", key: "10asgb" }], ["path", { d: "M22 12h-2", key: "14jgyd" }]], yV = e("scissors-line-dashed", iV);
const rV = [["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }], ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }], ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }], ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }], ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }]], kV = e("scissors", rV);
const pV = [["path", { d: "M21 4h-3.5l2 11.05", key: "1gktiw" }], ["path", { d: "M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009", key: "1bq3u3" }], ["circle", { cx: "19.5", cy: "17.5", r: "2.5", key: "e4zhv9" }], ["circle", { cx: "4.5", cy: "17.5", r: "2.5", key: "50vk4p" }]], lV = e("scooter", pV);
const uV = [["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3", key: "i8wdob" }], ["path", { d: "M8 21h8", key: "1ev6f3" }], ["path", { d: "M12 17v4", key: "1riwvh" }], ["path", { d: "m22 3-5 5", key: "12jva0" }], ["path", { d: "m17 3 5 5", key: "k36vhe" }]], MV = e("screen-share-off", uV);
const vV = [["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3", key: "i8wdob" }], ["path", { d: "M8 21h8", key: "1ev6f3" }], ["path", { d: "M12 17v4", key: "1riwvh" }], ["path", { d: "m17 8 5-5", key: "fqif7o" }], ["path", { d: "M17 3h5v5", key: "1o3tu8" }]], mV = e("screen-share", vV);
const _V = [["path", { d: "M15 12h-5", key: "r7krc0" }], ["path", { d: "M15 8h-5", key: "1khuty" }], ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }], ["path", { d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3", key: "1ph1d7" }]], gV = e("scroll-text", _V);
const xV = [["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }], ["path", { d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3", key: "1ph1d7" }]], LV = e("scroll", xV);
const wV = [["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }], ["path", { d: "M11 7v4", key: "m2edmq" }], ["path", { d: "M11 15h.01", key: "k85uqc" }]], fV = e("search-alert", wV);
const IV = [["path", { d: "m8 11 2 2 4-4", key: "1sed1v" }], ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]], CV = e("search-check", IV);
const NV = [["path", { d: "m13 13.5 2-2.5-2-2.5", key: "1rvxrh" }], ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }], ["path", { d: "M9 8.5 7 11l2 2.5", key: "6ffwbx" }], ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]], bV = e("search-code", NV);
const $V = [["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }], ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]], qV = e("search-slash", $V);
const zV = [["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }], ["path", { d: "m8.5 8.5 5 5", key: "a8mexj" }], ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]], SV = e("search-x", zV);
const AV = [["path", { d: "M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0", key: "vqan6v" }], ["path", { d: "M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0", key: "wdjd8o" }]], HV = e("section", AV);
const jV = [["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }], ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]], VV = e("search", jV);
const PV = [["path", { d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z", key: "117uat" }], ["path", { d: "M6 12h16", key: "s4cdu5" }]], BV = e("send-horizontal", PV);
const FV = [["rect", { x: "14", y: "14", width: "8", height: "8", rx: "2", key: "1b0bso" }], ["rect", { x: "2", y: "2", width: "8", height: "8", rx: "2", key: "1x09vl" }], ["path", { d: "M7 14v1a2 2 0 0 0 2 2h1", key: "pao6x6" }], ["path", { d: "M14 7h1a2 2 0 0 1 2 2v1", key: "19tdru" }]], DV = e("send-to-back", FV);
const RV = [["path", { d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z", key: "1ffxy3" }], ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]], TV = e("send", RV);
const UV = [["path", { d: "m16 16-4 4-4-4", key: "3dv8je" }], ["path", { d: "M3 12h18", key: "1i2n21" }], ["path", { d: "m8 8 4-4 4 4", key: "2bscm2" }]], OV = e("separator-horizontal", UV);
const GV = [["path", { d: "M12 3v18", key: "108xh3" }], ["path", { d: "m16 16 4-4-4-4", key: "1js579" }], ["path", { d: "m8 8-4 4 4 4", key: "1whems" }]], ZV = e("separator-vertical", GV);
const WV = [["path", { d: "m10.852 14.772-.383.923", key: "11vil6" }], ["path", { d: "M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923", key: "1v3clb" }], ["path", { d: "m13.148 9.228.383-.923", key: "t2zzyc" }], ["path", { d: "m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544", key: "1bxfiv" }], ["path", { d: "m14.772 10.852.923-.383", key: "k9m8cz" }], ["path", { d: "m14.772 13.148.923.383", key: "1xvhww" }], ["path", { d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5", key: "tn8das" }], ["path", { d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5", key: "1g2pve" }], ["path", { d: "M6 18h.01", key: "uhywen" }], ["path", { d: "M6 6h.01", key: "1utrut" }], ["path", { d: "m9.228 10.852-.923-.383", key: "1wtb30" }], ["path", { d: "m9.228 13.148-.923.383", key: "1a830x" }]], EV = e("server-cog", WV);
const XV = [["path", { d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2", key: "4b9dqc" }], ["path", { d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2", key: "22nnkd" }], ["path", { d: "M6 6h.01", key: "1utrut" }], ["path", { d: "M6 18h.01", key: "uhywen" }], ["path", { d: "m13 6-4 6h6l-4 6", key: "14hqih" }]], KV = e("server-crash", XV);
const QV = [["path", { d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5", key: "bt2siv" }], ["path", { d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z", key: "1hjrv1" }], ["path", { d: "M22 17v-1a2 2 0 0 0-2-2h-1", key: "1iynyr" }], ["path", { d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z", key: "161ggg" }], ["path", { d: "M6 18h.01", key: "uhywen" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]], JV = e("server-off", QV);
const YV = [["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }], ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }], ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }], ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]], eP = e("server", YV);
const aP = [["path", { d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915", key: "1i5ecw" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]], cP = e("settings", aP);
const tP = [["path", { d: "M14 17H5", key: "gfn3mx" }], ["path", { d: "M19 7h-9", key: "6i9tg" }], ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }], ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]], oP = e("settings-2", tP);
const dP = [["path", { d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z", key: "1bo67w" }], ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1", key: "1bkyp8" }], ["circle", { cx: "17.5", cy: "17.5", r: "3.5", key: "w3z12y" }]], nP = e("shapes", dP);
const hP = [["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }], ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }], ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }], ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }], ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]], sP = e("share-2", hP);
const iP = [["path", { d: "M12 2v13", key: "1km8f5" }], ["path", { d: "m16 6-4-4-4 4", key: "13yo43" }], ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }]], yP = e("share", iP);
const rP = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }], ["line", { x1: "3", x2: "21", y1: "9", y2: "9", key: "1vqk6q" }], ["line", { x1: "3", x2: "21", y1: "15", y2: "15", key: "o2sbyz" }], ["line", { x1: "9", x2: "9", y1: "9", y2: "21", key: "1ib60c" }], ["line", { x1: "15", x2: "15", y1: "9", y2: "21", key: "1n26ft" }]], kP = e("sheet", rP);
const pP = [["path", { d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44", key: "1cn552" }]], lP = e("shell", pP);
const uP = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "M12 8v4", key: "1got3b" }], ["path", { d: "M12 16h.01", key: "1drbdi" }]], MP = e("shield-alert", uP);
const vP = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "m4.243 5.21 14.39 12.472", key: "1c9a7c" }]], mP = e("shield-ban", vP);
const _P = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]], gP = e("shield-check", _P);
const xP = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "M8 12h.01", key: "czm47f" }], ["path", { d: "M12 12h.01", key: "1mp3jc" }], ["path", { d: "M16 12h.01", key: "1l6xoz" }]], LP = e("shield-ellipsis", xP);
const wP = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "M12 22V2", key: "zs6s6o" }]], fP = e("shield-half", wP);
const IP = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "M9 12h6", key: "1c52cq" }]], CP = e("shield-minus", IP);
const NP = [["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71", key: "1jlk70" }], ["path", { d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264", key: "18rp1v" }]], bP = e("shield-off", NP);
const $P = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "M9 12h6", key: "1c52cq" }], ["path", { d: "M12 9v6", key: "199k2o" }]], qP = e("shield-plus", $P);
const zP = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3", key: "mhlwft" }], ["path", { d: "M12 17h.01", key: "p32p05" }]], SP = e("shield-question-mark", zP);
const AP = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "M6.376 18.91a6 6 0 0 1 11.249.003", key: "hnjrf2" }], ["circle", { cx: "12", cy: "11", r: "4", key: "1gt34v" }]], HP = e("shield-user", AP);
const jP = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "m14.5 9.5-5 5", key: "17q4r4" }], ["path", { d: "m9.5 9.5 5 5", key: "18nt4w" }]], VP = e("shield-x", jP);
const PP = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }]], BP = e("shield", PP);
const FP = [["circle", { cx: "12", cy: "12", r: "8", key: "46899m" }], ["path", { d: "M12 2v7.5", key: "1e5rl5" }], ["path", { d: "m19 5-5.23 5.23", key: "1ezxxf" }], ["path", { d: "M22 12h-7.5", key: "le1719" }], ["path", { d: "m19 19-5.23-5.23", key: "p3fmgn" }], ["path", { d: "M12 14.5V22", key: "dgcmos" }], ["path", { d: "M10.23 13.77 5 19", key: "qwopd4" }], ["path", { d: "M9.5 12H2", key: "r7bup8" }], ["path", { d: "M10.23 10.23 5 5", key: "k2y7lj" }], ["circle", { cx: "12", cy: "12", r: "2.5", key: "ix0uyj" }]], DP = e("ship-wheel", FP);
const RP = [["path", { d: "M12 10.189V14", key: "1p8cqu" }], ["path", { d: "M12 2v3", key: "qbqxhf" }], ["path", { d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6", key: "qpkstq" }], ["path", { d: "M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76", key: "7tigtc" }], ["path", { d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1", key: "1924j5" }]], TP = e("ship", RP);
const UP = [["path", { d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z", key: "1wgbhj" }]], OP = e("shirt", UP);
const GP = [["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }], ["path", { d: "M3.103 6.034h17.794", key: "awc11p" }], ["path", { d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z", key: "o988cm" }]], ZP = e("shopping-bag", GP);
const WP = [["path", { d: "m15 11-1 9", key: "5wnq3a" }], ["path", { d: "m19 11-4-7", key: "cnml18" }], ["path", { d: "M2 11h20", key: "3eubbj" }], ["path", { d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4", key: "yiazzp" }], ["path", { d: "M4.5 15.5h15", key: "13mye1" }], ["path", { d: "m5 11 4-7", key: "116ra9" }], ["path", { d: "m9 11 1 9", key: "1ojof7" }]], EP = e("shopping-basket", WP);
const XP = [["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }], ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }], ["path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12", key: "9zh506" }]], KP = e("shopping-cart", XP);
const QP = [["path", { d: "M21.56 4.56a1.5 1.5 0 0 1 0 2.122l-.47.47a3 3 0 0 1-4.212-.03 3 3 0 0 1 0-4.243l.44-.44a1.5 1.5 0 0 1 2.121 0z", key: "1gcedi" }], ["path", { d: "M3 22a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l3.355-3.355a1.205 1.205 0 0 1 1.704 0l3.296 3.296a1.205 1.205 0 0 1 0 1.704l-3.355 3.355a1 1 0 0 1-.707.293z", key: "pg9kv3" }], ["path", { d: "m9 15 7.879-7.878", key: "1o1zgh" }]], JP = e("shovel", QP);
const YP = [["path", { d: "m4 4 2.5 2.5", key: "uv2vmf" }], ["path", { d: "M13.5 6.5a4.95 4.95 0 0 0-7 7", key: "frdkwv" }], ["path", { d: "M15 5 5 15", key: "1ag8rq" }], ["path", { d: "M14 17v.01", key: "eokfpp" }], ["path", { d: "M10 16v.01", key: "14uyyl" }], ["path", { d: "M13 13v.01", key: "1v1k97" }], ["path", { d: "M16 10v.01", key: "5169yg" }], ["path", { d: "M11 20v.01", key: "cj92p8" }], ["path", { d: "M17 14v.01", key: "11cswd" }], ["path", { d: "M20 11v.01", key: "19e0od" }]], eB = e("shower-head", YP);
const aB = [["path", { d: "M11 12h.01", key: "1lr4k6" }], ["path", { d: "M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1", key: "fatpdi" }], ["path", { d: "M14 2a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8", key: "kehrqe" }], ["path", { d: "M14 8a8.5 8.5 0 0 1 0 8", key: "1imjx2" }], ["path", { d: "M16 16c2 0 4.5-4 4-6", key: "z0nejz" }]], cB = e("shrimp", aB);
const tB = [["path", { d: "M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5", key: "1eob4r" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M10 22v-5", key: "sfixh4" }], ["path", { d: "M14 19v-2", key: "pdve8j" }], ["path", { d: "M18 20v-3", key: "uox2gk" }], ["path", { d: "M2 13h20", key: "5evz65" }], ["path", { d: "M6 20v-3", key: "c6pdcb" }]], oB = e("shredder", tB);
const dB = [["path", { d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8", key: "17vawe" }], ["path", { d: "M9 19.8V15m0 0H4.2M9 15l-6 6", key: "chjx8e" }], ["path", { d: "M15 4.2V9m0 0h4.8M15 9l6-6", key: "lav6yq" }], ["path", { d: "M9 4.2V9m0 0H4.2M9 9 3 3", key: "1pxi2q" }]], nB = e("shrink", dB);
const hB = [["path", { d: "M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5", key: "1p17fm" }], ["path", { d: "M14.5 14.5 12 17", key: "dy5w4y" }], ["path", { d: "M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z", key: "6z7b3o" }]], sB = e("shrub", hB);
const iB = [["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }], ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }], ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22", key: "1ailkh" }], ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2", key: "km57vx" }], ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45", key: "os18l9" }]], yB = e("shuffle", iB);
const rB = [["path", { d: "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2", key: "wuwx1p" }]], kB = e("sigma", rB);
const pB = [["path", { d: "M2 20h.01", key: "4haj6o" }], ["path", { d: "M7 20v-4", key: "j294jx" }], ["path", { d: "M12 20v-8", key: "i3yub9" }], ["path", { d: "M17 20V8", key: "1tkaf5" }]], lB = e("signal-high", pB);
const uB = [["path", { d: "M2 20h.01", key: "4haj6o" }], ["path", { d: "M7 20v-4", key: "j294jx" }]], MB = e("signal-low", uB);
const vB = [["path", { d: "M2 20h.01", key: "4haj6o" }], ["path", { d: "M7 20v-4", key: "j294jx" }], ["path", { d: "M12 20v-8", key: "i3yub9" }]], mB = e("signal-medium", vB);
const _B = [["path", { d: "M2 20h.01", key: "4haj6o" }], ["path", { d: "M7 20v-4", key: "j294jx" }], ["path", { d: "M12 20v-8", key: "i3yub9" }], ["path", { d: "M17 20V8", key: "1tkaf5" }], ["path", { d: "M22 4v16", key: "sih9yq" }]], gB = e("signal", _B);
const xB = [["path", { d: "M2 20h.01", key: "4haj6o" }]], LB = e("signal-zero", xB);
const wB = [["path", { d: "m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284", key: "y32ogt" }], ["path", { d: "M3 21h18", key: "itz85i" }]], fB = e("signature", wB);
const IB = [["path", { d: "M10 9H4L2 7l2-2h6", key: "1hq7x2" }], ["path", { d: "M14 5h6l2 2-2 2h-6", key: "bv62ej" }], ["path", { d: "M10 22V4a2 2 0 1 1 4 0v18", key: "eqpcf2" }], ["path", { d: "M8 22h8", key: "rmew8v" }]], CB = e("signpost-big", IB);
const NB = [["path", { d: "M12 13v8", key: "1l5pq0" }], ["path", { d: "M12 3v3", key: "1n5kay" }], ["path", { d: "M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z", key: "gqqp9m" }]], bB = e("signpost", NB);
const $B = [["path", { d: "M7 18v-6a5 5 0 1 1 10 0v6", key: "pcx96s" }], ["path", { d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z", key: "1b4s83" }], ["path", { d: "M21 12h1", key: "jtio3y" }], ["path", { d: "M18.5 4.5 18 5", key: "g5sp9y" }], ["path", { d: "M2 12h1", key: "1uaihz" }], ["path", { d: "M12 2v1", key: "11qlp1" }], ["path", { d: "m4.929 4.929.707.707", key: "1i51kw" }], ["path", { d: "M12 12v6", key: "3ahymv" }]], qB = e("siren", $B);
const zB = [["path", { d: "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z", key: "15892j" }], ["path", { d: "M3 20V4", key: "1ptbpl" }]], SB = e("skip-back", zB);
const AB = [["path", { d: "M21 4v16", key: "7j8fe9" }], ["path", { d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z", key: "zs4d6" }]], HB = e("skip-forward", AB);
const jB = [["path", { d: "m12.5 17-.5-1-.5 1h1z", key: "3me087" }], ["path", { d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z", key: "1o5pge" }], ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }], ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }]], VB = e("skull", jB);
const PB = [["rect", { width: "3", height: "8", x: "13", y: "2", rx: "1.5", key: "diqz80" }], ["path", { d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5", key: "183iwg" }], ["rect", { width: "3", height: "8", x: "8", y: "14", rx: "1.5", key: "hqg7r1" }], ["path", { d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5", key: "76g71w" }], ["rect", { width: "8", height: "3", x: "14", y: "13", rx: "1.5", key: "1kmz0a" }], ["path", { d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5", key: "jc4sz0" }], ["rect", { width: "8", height: "3", x: "2", y: "8", rx: "1.5", key: "1omvl4" }], ["path", { d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5", key: "16f3cl" }]], BB = e("slack", PB);
const FB = [["path", { d: "M22 2 2 22", key: "y4kqgn" }]], DB = e("slash", FB);
const RB = [["path", { d: "M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14", key: "1sllp5" }]], TB = e("slice", RB);
const UB = [["path", { d: "M10 5H3", key: "1qgfaw" }], ["path", { d: "M12 19H3", key: "yhmn1j" }], ["path", { d: "M14 3v4", key: "1sua03" }], ["path", { d: "M16 17v4", key: "1q0r14" }], ["path", { d: "M21 12h-9", key: "1o4lsq" }], ["path", { d: "M21 19h-5", key: "1rlt1p" }], ["path", { d: "M21 5h-7", key: "1oszz2" }], ["path", { d: "M8 10v4", key: "tgpxqk" }], ["path", { d: "M8 12H3", key: "a7s4jb" }]], OB = e("sliders-horizontal", UB);
const GB = [["path", { d: "M10 8h4", key: "1sr2af" }], ["path", { d: "M12 21v-9", key: "17s77i" }], ["path", { d: "M12 8V3", key: "13r4qs" }], ["path", { d: "M17 16h4", key: "h1uq16" }], ["path", { d: "M19 12V3", key: "o1uvq1" }], ["path", { d: "M19 21v-5", key: "qua636" }], ["path", { d: "M3 14h4", key: "bcjad9" }], ["path", { d: "M5 10V3", key: "cb8scm" }], ["path", { d: "M5 21v-7", key: "1w1uti" }]], ZB = e("sliders-vertical", GB);
const WB = [["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }], ["path", { d: "M12.667 8 10 12h4l-2.667 4", key: "h9lk2d" }]], EB = e("smartphone-charging", WB);
const XB = [["rect", { width: "7", height: "12", x: "2", y: "6", rx: "1", key: "5nje8w" }], ["path", { d: "M13 8.32a7.43 7.43 0 0 1 0 7.36", key: "1g306n" }], ["path", { d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58", key: "uqvjvo" }], ["path", { d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8", key: "ujntz3" }]], KB = e("smartphone-nfc", XB);
const QB = [["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }], ["path", { d: "M12 18h.01", key: "mhygvu" }]], JB = e("smartphone", QB);
const YB = [["path", { d: "M22 11v1a10 10 0 1 1-9-10", key: "ew0xw9" }], ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }], ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }], ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }], ["path", { d: "M16 5h6", key: "1vod17" }], ["path", { d: "M19 2v6", key: "4bpg5p" }]], eF = e("smile-plus", YB);
const aF = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }], ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }], ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]], cF = e("smile", aF);
const tF = [["path", { d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0", key: "hneq2s" }], ["circle", { cx: "10", cy: "13", r: "8", key: "194lz3" }], ["path", { d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6", key: "ixqyt7" }], ["path", { d: "M18 3 19.1 5.2", key: "9tjm43" }], ["path", { d: "M22 3 20.9 5.2", key: "j3odrs" }]], oF = e("snail", tF);
const dF = [["path", { d: "M10.5 2v4", key: "1xt6in" }], ["path", { d: "M14 2H7a2 2 0 0 0-2 2", key: "e6xig3" }], ["path", { d: "M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19", key: "adq7uc" }], ["path", { d: "M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3", key: "t9hm96" }]], nF = e("soap-dispenser-droplet", dF);
const hF = [["path", { d: "m10 20-1.25-2.5L6 18", key: "18frcb" }], ["path", { d: "M10 4 8.75 6.5 6 6", key: "7mghy3" }], ["path", { d: "m14 20 1.25-2.5L18 18", key: "1chtki" }], ["path", { d: "m14 4 1.25 2.5L18 6", key: "1b4wsy" }], ["path", { d: "m17 21-3-6h-4", key: "15hhxa" }], ["path", { d: "m17 3-3 6 1.5 3", key: "11697g" }], ["path", { d: "M2 12h6.5L10 9", key: "kv9z4n" }], ["path", { d: "m20 10-1.5 2 1.5 2", key: "1swlpi" }], ["path", { d: "M22 12h-6.5L14 15", key: "1mxi28" }], ["path", { d: "m4 10 1.5 2L4 14", key: "k9enpj" }], ["path", { d: "m7 21 3-6-1.5-3", key: "j8hb9u" }], ["path", { d: "m7 3 3 6h4", key: "1otusx" }]], sF = e("snowflake", hF);
const iF = [["path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3", key: "1dgpiv" }], ["path", { d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z", key: "xacw8m" }], ["path", { d: "M4 18v2", key: "jwo5n2" }], ["path", { d: "M20 18v2", key: "1ar1qi" }], ["path", { d: "M12 4v9", key: "oqhhn3" }]], yF = e("sofa", iF);
const rF = [["path", { d: "M11 2h2", key: "isr7bz" }], ["path", { d: "m14.28 14-4.56 8", key: "4anwcf" }], ["path", { d: "m21 22-1.558-4H4.558", key: "enk13h" }], ["path", { d: "M3 10v2", key: "w8mti9" }], ["path", { d: "M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z", key: "pouggg" }], ["path", { d: "M7 2a4 4 0 0 1-4 4", key: "78s8of" }], ["path", { d: "m8.66 7.66 1.41 1.41", key: "1vaqj8" }]], kF = e("solar-panel", rF);
const pF = [["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z", key: "4rw317" }], ["path", { d: "M7 21h10", key: "1b0cd5" }], ["path", { d: "M19.5 12 22 6", key: "shfsr5" }], ["path", { d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62", key: "rpc6vp" }], ["path", { d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62", key: "1lf63m" }], ["path", { d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62", key: "97tijn" }]], lF = e("soup", pF);
const uF = [["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1", key: "lt2kga" }]], MF = e("space", uF);
const vF = [["path", { d: "M12 18v4", key: "jadmvz" }], ["path", { d: "M2 14.499a5.5 5.5 0 0 0 9.591 3.675.6.6 0 0 1 .818.001A5.5 5.5 0 0 0 22 14.5c0-2.29-1.5-4-3-5.5l-5.492-5.312a2 2 0 0 0-3-.02L5 8.999c-1.5 1.5-3 3.2-3 5.5", key: "1aw2pz" }]], mF = e("spade", vF);
const _F = [["path", { d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z", key: "1s2grr" }]], gF = e("sparkle", _F);
const xF = [["path", { d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z", key: "1s2grr" }], ["path", { d: "M20 2v4", key: "1rf3ol" }], ["path", { d: "M22 4h-4", key: "gwowj6" }], ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]], LF = e("sparkles", xF);
const wF = [["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }], ["path", { d: "M12 6h.01", key: "1vi96p" }], ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }], ["path", { d: "M12 14h.01", key: "1etili" }]], fF = e("speaker", wF);
const IF = [["path", { d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20", key: "11atix" }], ["path", { d: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603", key: "yol142" }], ["path", { d: "M17 15a3.5 3.5 0 0 0-.025-4.975", key: "ssbmkc" }]], CF = e("speech", IF);
const NF = [["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }], ["path", { d: "M8 12h8", key: "1wcyev" }], ["path", { d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1", key: "8mdmtu" }]], bF = e("spell-check-2", NF);
const $F = [["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }], ["path", { d: "M8 12h8", key: "1wcyev" }], ["path", { d: "m16 20 2 2 4-4", key: "13tcca" }]], qF = e("spell-check", $F);
const zF = [["path", { d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z", key: "xwnzip" }], ["path", { d: "M5 17A12 12 0 0 1 17 5", key: "1okkup" }], ["circle", { cx: "19", cy: "5", r: "2", key: "mhkx31" }], ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }]], SF = e("spline-pointer", zF);
const AF = [["circle", { cx: "19", cy: "5", r: "2", key: "mhkx31" }], ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }], ["path", { d: "M5 17A12 12 0 0 1 17 5", key: "1okkup" }]], HF = e("spline", AF);
const jF = [["path", { d: "M16 3h5v5", key: "1806ms" }], ["path", { d: "M8 3H3v5", key: "15dfkv" }], ["path", { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3", key: "1qrqzj" }], ["path", { d: "m15 9 6-6", key: "ko1vev" }]], VF = e("split", jF);
const PF = [["path", { d: "M17 13.44 4.442 17.082A2 2 0 0 0 4.982 21H19a2 2 0 0 0 .558-3.921l-1.115-.32A2 2 0 0 1 17 14.837V7.66", key: "13vns8" }], ["path", { d: "m7 10.56 12.558-3.642A2 2 0 0 0 19.018 3H5a2 2 0 0 0-.558 3.921l1.115.32A2 2 0 0 1 7 9.163v7.178", key: "s8x3u0" }]], BF = e("spool", PF);
const FF = [["path", { d: "M3 3h.01", key: "159qn6" }], ["path", { d: "M7 5h.01", key: "1hq22a" }], ["path", { d: "M11 7h.01", key: "1osv80" }], ["path", { d: "M3 7h.01", key: "1xzrh3" }], ["path", { d: "M7 9h.01", key: "19b3jx" }], ["path", { d: "M3 11h.01", key: "1eifu7" }], ["rect", { width: "4", height: "4", x: "15", y: "5", key: "mri9e4" }], ["path", { d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2", key: "aib6hk" }], ["path", { d: "m13 14 8-2", key: "1d7bmk" }], ["path", { d: "m13 19 8-2", key: "1y2vml" }]], DF = e("spray-can", FF);
const RF = [["path", { d: "M15.295 19.562 16 22", key: "31jsb7" }], ["path", { d: "m17 16 3.758 2.098", key: "121ar7" }], ["path", { d: "m19 12.5 3.026-.598", key: "19ukd3" }], ["path", { d: "M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341z", key: "lwb9l9" }], ["path", { d: "M8 9V2", key: "1xa0v7" }]], TF = e("spotlight", RF);
const UF = [["path", { d: "M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3", key: "139s4v" }], ["path", { d: "M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4", key: "1dlkgp" }], ["path", { d: "M5 21h14", key: "11awu3" }]], OF = e("sprout", UF);
const GF = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M17 12h-2l-2 5-2-10-2 5H7", key: "15hlnc" }]], ZF = e("square-activity", GF);
const WF = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "m16 8-8 8", key: "166keh" }], ["path", { d: "M16 16H8V8", key: "1w2ppm" }]], EF = e("square-arrow-down-left", WF);
const XF = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "m8 8 8 8", key: "1imecy" }], ["path", { d: "M16 8v8H8", key: "1lbpgo" }]], KF = e("square-arrow-down-right", XF);
const QF = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M12 8v8", key: "napkw2" }], ["path", { d: "m8 12 4 4 4-4", key: "k98ssh" }]], JF = e("square-arrow-down", QF);
const YF = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "m12 8-4 4 4 4", key: "15vm53" }], ["path", { d: "M16 12H8", key: "1fr5h0" }]], eD = e("square-arrow-left", YF);
const aD = [["path", { d: "M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6", key: "14qz4y" }], ["path", { d: "m3 21 9-9", key: "1jfql5" }], ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]], cD = e("square-arrow-out-down-left", aD);
const tD = [["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6", key: "14rsvq" }], ["path", { d: "m21 21-9-9", key: "1et2py" }], ["path", { d: "M21 15v6h-6", key: "1jko0i" }]], oD = e("square-arrow-out-down-right", tD);
const dD = [["path", { d: "M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6", key: "14mv1t" }], ["path", { d: "m3 3 9 9", key: "rks13r" }], ["path", { d: "M3 9V3h6", key: "ira0h2" }]], nD = e("square-arrow-out-up-left", dD);
const hD = [["path", { d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6", key: "y09zxi" }], ["path", { d: "m21 3-9 9", key: "mpx6sq" }], ["path", { d: "M15 3h6v6", key: "1q9fwt" }]], sD = e("square-arrow-out-up-right", hD);
const iD = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M8 12h8", key: "1wcyev" }], ["path", { d: "m12 16 4-4-4-4", key: "1i9zcv" }]], yD = e("square-arrow-right", iD);
const rD = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M8 16V8h8", key: "19xb1h" }], ["path", { d: "M16 16 8 8", key: "1qdy8n" }]], kD = e("square-arrow-up-left", rD);
const pD = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M8 8h8v8", key: "b65dnt" }], ["path", { d: "m8 16 8-8", key: "13b9ih" }]], lD = e("square-arrow-up-right", pD);
const uD = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "m16 12-4-4-4 4", key: "177agl" }], ["path", { d: "M12 16V8", key: "1sbj14" }]], MD = e("square-arrow-up", uD);
const vD = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M12 8v8", key: "napkw2" }], ["path", { d: "m8.5 14 7-4", key: "12hpby" }], ["path", { d: "m8.5 10 7 4", key: "wwy2dy" }]], mD = e("square-asterisk", vD);
const _D = [["line", { x1: "5", y1: "3", x2: "19", y2: "3", key: "x74652" }], ["line", { x1: "3", y1: "5", x2: "3", y2: "19", key: "31ivqu" }], ["line", { x1: "21", y1: "5", x2: "21", y2: "19", key: "1am4cd" }], ["line", { x1: "9", y1: "21", x2: "10", y2: "21", key: "sb02er" }], ["line", { x1: "14", y1: "21", x2: "15", y2: "21", key: "1bvb1m" }], ["path", { d: "M 3 5 A2 2 0 0 1 5 3", key: "dbypyf" }], ["path", { d: "M 19 3 A2 2 0 0 1 21 5", key: "y6haui" }], ["path", { d: "M 5 21 A2 2 0 0 1 3 19", key: "kb75wq" }], ["path", { d: "M 21 19 A2 2 0 0 1 19 21", key: "1p3zbf" }], ["circle", { cx: "8.5", cy: "8.5", r: "1.5", key: "cn5opk" }], ["line", { x1: "9.56066", y1: "9.56066", x2: "12", y2: "12", key: "mksg6j" }], ["line", { x1: "17", y1: "17", x2: "14.82", y2: "14.82", key: "1lwi1d" }], ["circle", { cx: "8.5", cy: "15.5", r: "1.5", key: "12hfy1" }], ["line", { x1: "9.56066", y1: "14.43934", x2: "17", y2: "7", key: "4jyfgs" }]], gD = e("square-bottom-dashed-scissors", _D);
const xD = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M9 8h7", key: "kbo1nt" }], ["path", { d: "M8 12h6", key: "ikassy" }], ["path", { d: "M11 16h5", key: "oq65wt" }]], LD = e("square-chart-gantt", xD);
const wD = [["path", { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]], fD = e("square-check-big", wD);
const ID = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]], CD = e("square-check", ID);
const ND = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "m16 10-4 4-4-4", key: "894hmk" }]], bD = e("square-chevron-down", ND);
const $D = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "m14 16-4-4 4-4", key: "ojs7w8" }]], qD = e("square-chevron-left", $D);
const zD = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "m10 8 4 4-4 4", key: "1wy4r4" }]], SD = e("square-chevron-right", zD);
const AD = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "m8 14 4-4 4 4", key: "fy2ptz" }]], HD = e("square-chevron-up", AD);
const jD = [["path", { d: "M10 9.5 8 12l2 2.5", key: "3mjy60" }], ["path", { d: "M14 21h1", key: "v9vybs" }], ["path", { d: "m14 9.5 2 2.5-2 2.5", key: "1bir2l" }], ["path", { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2", key: "as5y1o" }], ["path", { d: "M9 21h1", key: "15o7lz" }]], VD = e("square-dashed-bottom-code", jD);
const PD = [["path", { d: "m10 9-3 3 3 3", key: "1oro0q" }], ["path", { d: "m14 15 3-3-3-3", key: "bz13h7" }], ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]], BD = e("square-code", PD);
const FD = [["path", { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2", key: "as5y1o" }], ["path", { d: "M9 21h1", key: "15o7lz" }], ["path", { d: "M14 21h1", key: "v9vybs" }]], DD = e("square-dashed-bottom", FD);
const RD = [["path", { d: "M8 7v7", key: "1x2jlm" }], ["path", { d: "M12 7v4", key: "xawao1" }], ["path", { d: "M16 7v9", key: "1hp2iy" }], ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }], ["path", { d: "M9 3h1", key: "1yesri" }], ["path", { d: "M14 3h1", key: "1ec4yj" }], ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }], ["path", { d: "M21 9v1", key: "mxsmne" }], ["path", { d: "M21 14v1", key: "169vum" }], ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }], ["path", { d: "M14 21h1", key: "v9vybs" }], ["path", { d: "M9 21h1", key: "15o7lz" }], ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }], ["path", { d: "M3 14v1", key: "vnatye" }], ["path", { d: "M3 9v1", key: "1r0deq" }]], TD = e("square-dashed-kanban", RD);
const UD = [["path", { d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z", key: "xwnzip" }], ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }], ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }], ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }], ["path", { d: "M9 3h1", key: "1yesri" }], ["path", { d: "M9 21h2", key: "1qve2z" }], ["path", { d: "M14 3h1", key: "1ec4yj" }], ["path", { d: "M3 9v1", key: "1r0deq" }], ["path", { d: "M21 9v2", key: "p14lih" }], ["path", { d: "M3 14v1", key: "vnatye" }]], OD = e("square-dashed-mouse-pointer", UD);
const GD = [["path", { d: "M14 21h1", key: "v9vybs" }], ["path", { d: "M21 14v1", key: "169vum" }], ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }], ["path", { d: "M21 9v1", key: "mxsmne" }], ["path", { d: "M3 14v1", key: "vnatye" }], ["path", { d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2", key: "89voep" }], ["path", { d: "M3 9v1", key: "1r0deq" }], ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }], ["path", { d: "M9 21h1", key: "15o7lz" }]], ZD = e("square-dashed-top-solid", GD);
const WD = [["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }], ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }], ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }], ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }], ["path", { d: "M9 3h1", key: "1yesri" }], ["path", { d: "M9 21h1", key: "15o7lz" }], ["path", { d: "M14 3h1", key: "1ec4yj" }], ["path", { d: "M14 21h1", key: "v9vybs" }], ["path", { d: "M3 9v1", key: "1r0deq" }], ["path", { d: "M21 9v1", key: "mxsmne" }], ["path", { d: "M3 14v1", key: "vnatye" }], ["path", { d: "M21 14v1", key: "169vum" }]], ED = e("square-dashed", WD);
const XD = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }], ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }], ["line", { x1: "12", x2: "12", y1: "16", y2: "16", key: "aqc6ln" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "8", key: "1mkcni" }]], KD = e("square-divide", XD);
const QD = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]], JD = e("square-dot", QD);
const YD = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M7 10h10", key: "1101jm" }], ["path", { d: "M7 14h10", key: "1mhdw3" }]], eR = e("square-equal", YD);
const aR = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }], ["path", { d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3", key: "m1af9g" }], ["path", { d: "M9 11.2h5.7", key: "3zgcl2" }]], cR = e("square-function", aR);
const tR = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M8 7v7", key: "1x2jlm" }], ["path", { d: "M12 7v4", key: "xawao1" }], ["path", { d: "M16 7v9", key: "1hp2iy" }]], oR = e("square-kanban", tR);
const dR = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M7 7v10", key: "d5nglc" }], ["path", { d: "M11 7v10", key: "pptsnr" }], ["path", { d: "m15 7 2 10", key: "1m7qm5" }]], nR = e("square-library", dR);
const hR = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M7 8h10", key: "1jw688" }], ["path", { d: "M7 12h10", key: "b7w52i" }], ["path", { d: "M7 16h10", key: "wp8him" }]], sR = e("square-menu", hR);
const iR = [["path", { d: "M8 16V8.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3V16", key: "1ywlsj" }], ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]], yR = e("square-m", iR);
const rR = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M8 12h8", key: "1wcyev" }]], kR = e("square-minus", rR);
const pR = [["path", { d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z", key: "xwnzip" }], ["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6", key: "14rsvq" }]], lR = e("square-mouse-pointer", pR);
const uR = [["path", { d: "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41", key: "9l1ft6" }], ["path", { d: "M3 8.7V19a2 2 0 0 0 2 2h10.3", key: "17knke" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2", key: "uoagbd" }], ["path", { d: "M9 17v-2.3", key: "1jxgo2" }]], MR = e("square-parking-off", uR);
const vR = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9", key: "1dfk2c" }]], mR = e("square-parking", vR);
const _R = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["line", { x1: "10", x2: "10", y1: "15", y2: "9", key: "c1nkhi" }], ["line", { x1: "14", x2: "14", y1: "15", y2: "9", key: "h65svq" }]], gR = e("square-pause", _R);
const xR = [["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }], ["path", { d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z", key: "ohrbg2" }]], LR = e("square-pen", xR);
const wR = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "m15 9-6 6", key: "1uzhvr" }], ["path", { d: "M9 9h.01", key: "1q5me6" }], ["path", { d: "M15 15h.01", key: "lqbp3k" }]], fR = e("square-percent", wR);
const IR = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17", key: "1l9586" }], ["path", { d: "M12 7v10", key: "jspqdw" }], ["path", { d: "M16 7v10", key: "lavkr4" }]], CR = e("square-pilcrow", IR);
const NR = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M7 7h10", key: "udp07y" }], ["path", { d: "M10 7v10", key: "i1d9ee" }], ["path", { d: "M16 17a2 2 0 0 1-2-2V7", key: "ftwdc7" }]], bR = e("square-pi", NR);
const $R = [["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }], ["path", { d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z", key: "kmsa83" }]], qR = e("square-play", $R);
const zR = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M8 12h8", key: "1wcyev" }], ["path", { d: "M12 8v8", key: "napkw2" }]], SR = e("square-plus", zR);
const AR = [["path", { d: "M12 7v4", key: "xawao1" }], ["path", { d: "M7.998 9.003a5 5 0 1 0 8-.005", key: "1pek45" }], ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]], HR = e("square-power", AR);
const jR = [["path", { d: "M7 12h2l2 5 2-10h4", key: "1fxv6h" }], ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]], VR = e("square-radical", jR);
const PR = [["path", { d: "M21 11a8 8 0 0 0-8-8", key: "1lxwo5" }], ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1dv2y5" }]], BR = e("square-round-corner", PR);
const FR = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["circle", { cx: "8.5", cy: "8.5", r: "1.5", key: "cn5opk" }], ["line", { x1: "9.56066", y1: "9.56066", x2: "12", y2: "12", key: "mksg6j" }], ["line", { x1: "17", y1: "17", x2: "14.82", y2: "14.82", key: "1lwi1d" }], ["circle", { cx: "8.5", cy: "15.5", r: "1.5", key: "12hfy1" }], ["line", { x1: "9.56066", y1: "14.43934", x2: "17", y2: "7", key: "4jyfgs" }]], DR = e("square-scissors", FR);
const RR = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M16 8.9V7H8l4 5-4 5h8v-1.9", key: "9nih0i" }]], TR = e("square-sigma", RR);
const UR = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["line", { x1: "9", x2: "15", y1: "15", y2: "9", key: "1dfufj" }]], OR = e("square-slash", UR);
const GR = [["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3", key: "lubmu8" }], ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3", key: "1ag34g" }], ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]], ZR = e("square-split-horizontal", GR);
const WR = [["path", { d: "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3", key: "1pi83i" }], ["path", { d: "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3", key: "ido5k7" }], ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]], ER = e("square-split-vertical", WR);
const XR = [["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }], ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" }]], KR = e("square-square", XR);
const QR = [["path", { d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2", key: "4i38lg" }], ["path", { d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2", key: "mlte4a" }], ["rect", { width: "8", height: "8", x: "14", y: "14", rx: "2", key: "1fa9i4" }]], JR = e("square-stack", QR);
const YR = [["path", { d: "M11.035 7.69a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z", key: "13edca" }], ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]], eT = e("square-star", YR);
const aT = [["path", { d: "m7 11 2-2-2-2", key: "1lz0vl" }], ["path", { d: "M11 13h4", key: "1p7l4v" }], ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }]], cT = e("square-terminal", aT);
const tT = [["path", { d: "M18 21a6 6 0 0 0-12 0", key: "kaz2du" }], ["circle", { cx: "12", cy: "11", r: "4", key: "1gt34v" }], ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]], oT = e("square-user-round", tT);
const dT = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1", key: "1ssd4o" }]], nT = e("square-stop", dT);
const hT = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }], ["path", { d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2", key: "1m6ac2" }]], sT = e("square-user", hT);
const iT = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }], ["path", { d: "m15 9-6 6", key: "1uzhvr" }], ["path", { d: "m9 9 6 6", key: "z0biqf" }]], yT = e("square-x", iT);
const rT = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]], kT = e("square", rT);
const pT = [["path", { d: "M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0", key: "1mcohs" }], ["path", { d: "M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2", key: "1r1efp" }]], lT = e("squares-exclude", pT);
const uT = [["path", { d: "M10 22a2 2 0 0 1-2-2", key: "i7yj1i" }], ["path", { d: "M14 2a2 2 0 0 1 2 2", key: "170a0m" }], ["path", { d: "M16 22h-2", key: "18d249" }], ["path", { d: "M2 10V8", key: "7yj4fe" }], ["path", { d: "M2 4a2 2 0 0 1 2-2", key: "ddgnws" }], ["path", { d: "M20 8a2 2 0 0 1 2 2", key: "1770vt" }], ["path", { d: "M22 14v2", key: "iot8ja" }], ["path", { d: "M22 20a2 2 0 0 1-2 2", key: "qj8q6g" }], ["path", { d: "M4 16a2 2 0 0 1-2-2", key: "1dnafg" }], ["path", { d: "M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z", key: "ci6f0b" }], ["path", { d: "M8 2h2", key: "1gmkwm" }]], MT = e("squares-intersect", uT);
const vT = [["path", { d: "M10 22a2 2 0 0 1-2-2", key: "i7yj1i" }], ["path", { d: "M16 22h-2", key: "18d249" }], ["path", { d: "M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z", key: "1njgbb" }], ["path", { d: "M20 8a2 2 0 0 1 2 2", key: "1770vt" }], ["path", { d: "M22 14v2", key: "iot8ja" }], ["path", { d: "M22 20a2 2 0 0 1-2 2", key: "qj8q6g" }]], mT = e("squares-subtract", vT);
const _T = [["path", { d: "M13.77 3.043a34 34 0 0 0-3.54 0", key: "1oaobr" }], ["path", { d: "M13.771 20.956a33 33 0 0 1-3.541.001", key: "95iq0j" }], ["path", { d: "M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44", key: "1u6qty" }], ["path", { d: "M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438", key: "1ew6g6" }], ["path", { d: "M20.957 10.23a33 33 0 0 1 0 3.54", key: "1l9npr" }], ["path", { d: "M3.043 10.23a34 34 0 0 0 .001 3.541", key: "1it6jm" }], ["path", { d: "M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438", key: "14uchd" }], ["path", { d: "M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44", key: "8k4agb" }]], gT = e("squircle-dashed", _T);
const xT = [["path", { d: "M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z", key: "17jnth" }]], LT = e("squares-unite", xT);
const wT = [["path", { d: "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9", key: "garfkc" }]], fT = e("squircle", wT);
const IT = [["path", { d: "M15.236 22a3 3 0 0 0-2.2-5", key: "21bitc" }], ["path", { d: "M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4", key: "oh0fg0" }], ["path", { d: "M18 13h.01", key: "9veqaj" }], ["path", { d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10", key: "980v8a" }]], CT = e("squirrel", IT);
const NT = [["path", { d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13", key: "i9gjdv" }], ["path", { d: "M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z", key: "1vzg3v" }], ["path", { d: "M5 22h14", key: "ehvnwv" }]], bT = e("stamp", NT);
const $T = [["path", { d: "M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2", key: "2ksp49" }]], qT = e("star-half", $T);
const zT = [["path", { d: "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43", key: "16m0ql" }], ["path", { d: "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91", key: "1vt8nq" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]], ST = e("star-off", zT);
const AT = [["path", { d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z", key: "r04s7s" }]], HT = e("star", AT);
const jT = [["path", { d: "M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z", key: "19qhus" }], ["path", { d: "M21 20V4", key: "cb8qj8" }]], VT = e("step-back", jT);
const PT = [["path", { d: "M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z", key: "1ystz2" }], ["path", { d: "M3 4v16", key: "1ph11n" }]], BT = e("step-forward", PT);
const FT = [["path", { d: "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z", key: "1dfntj" }], ["path", { d: "M15 3v5a1 1 0 0 0 1 1h5", key: "6s6qgf" }], ["path", { d: "M8 13h.01", key: "1sbv64" }], ["path", { d: "M16 13h.01", key: "wip0gl" }], ["path", { d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1", key: "1vvgv3" }]], DT = e("sticker", FT);
const RT = [["path", { d: "M11 2v2", key: "1539x4" }], ["path", { d: "M5 2v2", key: "1yf1q8" }], ["path", { d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1", key: "rb5t3r" }], ["path", { d: "M8 15a6 6 0 0 0 12 0v-3", key: "x18d4x" }], ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }]], TT = e("stethoscope", RT);
const UT = [["path", { d: "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z", key: "1dfntj" }], ["path", { d: "M15 3v5a1 1 0 0 0 1 1h5", key: "6s6qgf" }]], OT = e("sticky-note", UT);
const GT = [["path", { d: "M11.264 2.205A4 4 0 0 0 6.42 4.211l-4 8a4 4 0 0 0 1.359 5.117l6 4a4 4 0 0 0 4.438 0l6-4a4 4 0 0 0 1.576-4.592l-2-6a4 4 0 0 0-2.53-2.53z", key: "1si4ox" }], ["path", { d: "M11.99 22 14 12l7.822 3.184", key: "1u8to0" }], ["path", { d: "M14 12 8.47 2.302", key: "guo3d5" }]], ZT = e("stone", GT);
const WT = [["path", { d: "M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5", key: "slp6dd" }], ["path", { d: "M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244", key: "o0xfot" }], ["path", { d: "M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05", key: "wn3emo" }]], ET = e("store", WT);
const XT = [["rect", { width: "20", height: "6", x: "2", y: "4", rx: "2", key: "qdearl" }], ["rect", { width: "20", height: "6", x: "2", y: "14", rx: "2", key: "1xrn6j" }]], KT = e("stretch-horizontal", XT);
const QT = [["rect", { width: "6", height: "20", x: "4", y: "2", rx: "2", key: "19qu7m" }], ["rect", { width: "6", height: "20", x: "14", y: "2", rx: "2", key: "24v0nk" }]], JT = e("stretch-vertical", QT);
const YT = [["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }], ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }], ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]], eU = e("strikethrough", YT);
const aU = [["path", { d: "m4 5 8 8", key: "1eunvl" }], ["path", { d: "m12 5-8 8", key: "1ah0jp" }], ["path", { d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07", key: "e8ta8j" }]], cU = e("subscript", aU);
const tU = [["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }], ["path", { d: "M12 4h.01", key: "1ujb9j" }], ["path", { d: "M20 12h.01", key: "1ykeid" }], ["path", { d: "M12 20h.01", key: "zekei9" }], ["path", { d: "M4 12h.01", key: "158zrr" }], ["path", { d: "M17.657 6.343h.01", key: "31pqzk" }], ["path", { d: "M17.657 17.657h.01", key: "jehnf4" }], ["path", { d: "M6.343 17.657h.01", key: "gdk6ow" }], ["path", { d: "M6.343 6.343h.01", key: "1uurf0" }]], oU = e("sun-dim", tU);
const dU = [["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }], ["path", { d: "M12 3v1", key: "1asbbs" }], ["path", { d: "M12 20v1", key: "1wcdkc" }], ["path", { d: "M3 12h1", key: "lp3yf2" }], ["path", { d: "M20 12h1", key: "1vloll" }], ["path", { d: "m18.364 5.636-.707.707", key: "1hakh0" }], ["path", { d: "m6.343 17.657-.707.707", key: "18m9nf" }], ["path", { d: "m5.636 5.636.707.707", key: "1xv1c5" }], ["path", { d: "m17.657 17.657.707.707", key: "vl76zb" }]], nU = e("sun-medium", dU);
const hU = [["path", { d: "M12 2v2", key: "tus03m" }], ["path", { d: "M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715", key: "xlf6rm" }], ["path", { d: "M16 12a4 4 0 0 0-4-4", key: "6vsxu" }], ["path", { d: "m19 5-1.256 1.256", key: "1yg6a6" }], ["path", { d: "M20 12h2", key: "1q8mjw" }]], sU = e("sun-moon", hU);
const iU = [["path", { d: "M10 21v-1", key: "1u8rkd" }], ["path", { d: "M10 4V3", key: "pkzwkn" }], ["path", { d: "M10 9a3 3 0 0 0 0 6", key: "gv75dk" }], ["path", { d: "m14 20 1.25-2.5L18 18", key: "1chtki" }], ["path", { d: "m14 4 1.25 2.5L18 6", key: "1b4wsy" }], ["path", { d: "m17 21-3-6 1.5-3H22", key: "o5qa3v" }], ["path", { d: "m17 3-3 6 1.5 3", key: "11697g" }], ["path", { d: "M2 12h1", key: "1uaihz" }], ["path", { d: "m20 10-1.5 2 1.5 2", key: "1swlpi" }], ["path", { d: "m3.64 18.36.7-.7", key: "105rm9" }], ["path", { d: "m4.34 6.34-.7-.7", key: "d3unjp" }]], yU = e("sun-snow", iU);
const rU = [["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }], ["path", { d: "M12 2v2", key: "tus03m" }], ["path", { d: "M12 20v2", key: "1lh1kg" }], ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }], ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }], ["path", { d: "M2 12h2", key: "1t8f8n" }], ["path", { d: "M20 12h2", key: "1q8mjw" }], ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }], ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]], kU = e("sun", rU);
const pU = [["path", { d: "M12 2v8", key: "1q4o3n" }], ["path", { d: "m4.93 10.93 1.41 1.41", key: "2a7f42" }], ["path", { d: "M2 18h2", key: "j10viu" }], ["path", { d: "M20 18h2", key: "wocana" }], ["path", { d: "m19.07 10.93-1.41 1.41", key: "15zs5n" }], ["path", { d: "M22 22H2", key: "19qnx5" }], ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }], ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }]], lU = e("sunrise", pU);
const uU = [["path", { d: "M12 10V2", key: "16sf7g" }], ["path", { d: "m4.93 10.93 1.41 1.41", key: "2a7f42" }], ["path", { d: "M2 18h2", key: "j10viu" }], ["path", { d: "M20 18h2", key: "wocana" }], ["path", { d: "m19.07 10.93-1.41 1.41", key: "15zs5n" }], ["path", { d: "M22 22H2", key: "19qnx5" }], ["path", { d: "m16 6-4 4-4-4", key: "6wukr" }], ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }]], MU = e("sunset", uU);
const vU = [["path", { d: "m4 19 8-8", key: "hr47gm" }], ["path", { d: "m12 19-8-8", key: "1dhhmo" }], ["path", { d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06", key: "1dfcux" }]], mU = e("superscript", vU);
const _U = [["path", { d: "M10 21V3h8", key: "br2l0g" }], ["path", { d: "M6 16h9", key: "2py0wn" }], ["path", { d: "M10 9.5h7", key: "13dmhz" }]], gU = e("swiss-franc", _U);
const xU = [["path", { d: "M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z", key: "1ldrpk" }], ["path", { d: "M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7", key: "11i5po" }], ["path", { d: "M 7 17h.01", key: "1euzgo" }], ["path", { d: "m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8", key: "o2gii7" }]], LU = e("swatch-book", xU);
const wU = [["path", { d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5", key: "mtk2lu" }], ["path", { d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5", key: "120jsl" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }], ["path", { d: "m18 22-3-3 3-3", key: "kgdoj7" }], ["path", { d: "m6 2 3 3-3 3", key: "1fnbkv" }]], fU = e("switch-camera", wU);
const IU = [["path", { d: "m11 19-6-6", key: "s7kpr" }], ["path", { d: "m5 21-2-2", key: "1kw20b" }], ["path", { d: "m8 16-4 4", key: "1oqv8h" }], ["path", { d: "M9.5 17.5 21 6V3h-3L6.5 14.5", key: "pkxemp" }]], CU = e("sword", IU);
const NU = [["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" }], ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }], ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }], ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }], ["polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5", key: "hbey2j" }], ["line", { x1: "5", x2: "9", y1: "14", y2: "18", key: "1hf58s" }], ["line", { x1: "7", x2: "4", y1: "17", y2: "20", key: "pidxm4" }], ["line", { x1: "3", x2: "5", y1: "19", y2: "21", key: "1pehsh" }]], bU = e("swords", NU);
const $U = [["path", { d: "m18 2 4 4", key: "22kx64" }], ["path", { d: "m17 7 3-3", key: "1w1zoj" }], ["path", { d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5", key: "1exhtz" }], ["path", { d: "m9 11 4 4", key: "rovt3i" }], ["path", { d: "m5 19-3 3", key: "59f2uf" }], ["path", { d: "m14 4 6 6", key: "yqp9t2" }]], qU = e("syringe", $U);
const zU = [["path", { d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18", key: "gugj83" }]], SU = e("table-2", zU);
const AU = [["path", { d: "M12 21v-6", key: "lihzve" }], ["path", { d: "M12 9V3", key: "da5inc" }], ["path", { d: "M3 15h18", key: "5xshup" }], ["path", { d: "M3 9h18", key: "1pudct" }], ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]], HU = e("table-cells-merge", AU);
const jU = [["path", { d: "M12 15V9", key: "8c7uyn" }], ["path", { d: "M3 15h18", key: "5xshup" }], ["path", { d: "M3 9h18", key: "1pudct" }], ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]], VU = e("table-cells-split", jU);
const PU = [["path", { d: "M14 14v2", key: "w2a1xv" }], ["path", { d: "M14 20v2", key: "1lq872" }], ["path", { d: "M14 2v2", key: "6buw04" }], ["path", { d: "M14 8v2", key: "i67w9a" }], ["path", { d: "M2 15h8", key: "82wtch" }], ["path", { d: "M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2", key: "up0l64" }], ["path", { d: "M2 9h8", key: "yelfik" }], ["path", { d: "M22 15h-4", key: "1es58f" }], ["path", { d: "M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2", key: "pdjoqf" }], ["path", { d: "M22 9h-4", key: "1luja7" }], ["path", { d: "M5 3v18", key: "14hmio" }]], BU = e("table-columns-split", PU);
const FU = [["path", { d: "M16 5H3", key: "m91uny" }], ["path", { d: "M16 12H3", key: "1a2rj7" }], ["path", { d: "M16 19H3", key: "zzsher" }], ["path", { d: "M21 5h.01", key: "wa75ra" }], ["path", { d: "M21 12h.01", key: "msek7k" }], ["path", { d: "M21 19h.01", key: "qvbq2j" }]], DU = e("table-of-contents", FU);
const RU = [["path", { d: "M15 3v18", key: "14nvp0" }], ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M21 9H3", key: "1338ky" }], ["path", { d: "M21 15H3", key: "9uk58r" }]], TU = e("table-properties", RU);
const UU = [["path", { d: "M14 10h2", key: "1lstlu" }], ["path", { d: "M15 22v-8", key: "1fwwgm" }], ["path", { d: "M15 2v4", key: "1044rn" }], ["path", { d: "M2 10h2", key: "1r8dkt" }], ["path", { d: "M20 10h2", key: "1ug425" }], ["path", { d: "M3 19h18", key: "awlh7x" }], ["path", { d: "M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6", key: "ibqhof" }], ["path", { d: "M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2", key: "1uenja" }], ["path", { d: "M8 10h2", key: "66od0" }], ["path", { d: "M9 22v-8", key: "fmnu31" }], ["path", { d: "M9 2v4", key: "j1yeou" }]], OU = e("table-rows-split", UU);
const GU = [["path", { d: "M12 3v18", key: "108xh3" }], ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M3 9h18", key: "1pudct" }], ["path", { d: "M3 15h18", key: "5xshup" }]], ZU = e("table", GU);
const WU = [["rect", { width: "10", height: "14", x: "3", y: "8", rx: "2", key: "1vrsiq" }], ["path", { d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4", key: "1j4zmg" }], ["path", { d: "M8 18h.01", key: "lrp35t" }]], EU = e("tablet-smartphone", WU);
const XU = [["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }], ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }]], KU = e("tablet", XU);
const QU = [["circle", { cx: "7", cy: "7", r: "5", key: "x29byf" }], ["circle", { cx: "17", cy: "17", r: "5", key: "1op1d2" }], ["path", { d: "M12 17h10", key: "ls21zv" }], ["path", { d: "m3.46 10.54 7.08-7.08", key: "1rehiu" }]], JU = e("tablets", QU);
const YU = [["path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z", key: "vktsd0" }], ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]], eO = e("tag", YU);
const aO = [["path", { d: "M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z", key: "16rjxf" }], ["path", { d: "M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193", key: "178nd4" }], ["circle", { cx: "10.5", cy: "6.5", r: ".5", fill: "currentColor", key: "12ikhr" }]], cO = e("tags", aO);
const tO = [["path", { d: "M4 4v16", key: "6qkkli" }]], oO = e("tally-1", tO);
const dO = [["path", { d: "M4 4v16", key: "6qkkli" }], ["path", { d: "M9 4v16", key: "81ygyz" }]], nO = e("tally-2", dO);
const hO = [["path", { d: "M4 4v16", key: "6qkkli" }], ["path", { d: "M9 4v16", key: "81ygyz" }], ["path", { d: "M14 4v16", key: "12vmem" }]], sO = e("tally-3", hO);
const iO = [["path", { d: "M4 4v16", key: "6qkkli" }], ["path", { d: "M9 4v16", key: "81ygyz" }], ["path", { d: "M14 4v16", key: "12vmem" }], ["path", { d: "M19 4v16", key: "8ij5ei" }]], yO = e("tally-4", iO);
const rO = [["path", { d: "M4 4v16", key: "6qkkli" }], ["path", { d: "M9 4v16", key: "81ygyz" }], ["path", { d: "M14 4v16", key: "12vmem" }], ["path", { d: "M19 4v16", key: "8ij5ei" }], ["path", { d: "M22 6 2 18", key: "h9moai" }]], kO = e("tally-5", rO);
const pO = [["circle", { cx: "17", cy: "4", r: "2", key: "y5j2s2" }], ["path", { d: "M15.59 5.41 5.41 15.59", key: "l0vprr" }], ["circle", { cx: "4", cy: "17", r: "2", key: "9p4efm" }], ["path", { d: "M12 22s-4-9-1.5-11.5S22 12 22 12", key: "1twk4o" }]], lO = e("tangent", pO);
const uO = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]], MO = e("target", uO);
const vO = [["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }], ["path", { d: "m14 5 3-3 3 3", key: "1sorif" }], ["path", { d: "m14 10 3-3 3 3", key: "1jyi9h" }], ["path", { d: "M17 14V2", key: "8ymqnk" }], ["path", { d: "M17 14H7l-5 8h20Z", key: "13ar7p" }], ["path", { d: "M8 14v8", key: "1ghmqk" }], ["path", { d: "m9 14 5 8", key: "13pgi6" }]], mO = e("tent-tree", vO);
const _O = [["path", { d: "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44", key: "k4qptu" }], ["path", { d: "m13.56 11.747 4.332-.924", key: "19l80z" }], ["path", { d: "m16 21-3.105-6.21", key: "7oh9d" }], ["path", { d: "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z", key: "m7xp4m" }], ["path", { d: "m6.158 8.633 1.114 4.456", key: "74o979" }], ["path", { d: "m8 21 3.105-6.21", key: "1fvxut" }], ["circle", { cx: "12", cy: "13", r: "2", key: "1c1ljs" }]], gO = e("telescope", _O);
const xO = [["path", { d: "M3.5 21 14 3", key: "1szst5" }], ["path", { d: "M20.5 21 10 3", key: "1310c3" }], ["path", { d: "M15.5 21 12 15l-3.5 6", key: "1ddtfw" }], ["path", { d: "M2 21h20", key: "1nyx9w" }]], LO = e("tent", xO);
const wO = [["path", { d: "M12 19h8", key: "baeox8" }], ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }]], fO = e("terminal", wO);
const IO = [["path", { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3", key: "1ub6xw" }], ["path", { d: "m16 2 6 6", key: "1gw87d" }], ["path", { d: "M12 16H4", key: "1cjfip" }]], CO = e("test-tube-diagonal", IO);
const NO = [["path", { d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2", key: "125lnx" }], ["path", { d: "M8.5 2h7", key: "csnxdl" }], ["path", { d: "M14.5 16h-5", key: "1ox875" }]], bO = e("test-tube", NO);
const $O = [["path", { d: "M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2", key: "1hjrqt" }], ["path", { d: "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2", key: "16lc8n" }], ["path", { d: "M3 2h7", key: "7s29d5" }], ["path", { d: "M14 2h7", key: "7sicin" }], ["path", { d: "M9 16H4", key: "1bfye3" }], ["path", { d: "M20 16h-5", key: "ddnjpe" }]], qO = e("test-tubes", $O);
const zO = [["path", { d: "M21 5H3", key: "1fi0y6" }], ["path", { d: "M17 12H7", key: "16if0g" }], ["path", { d: "M19 19H5", key: "vjpgq2" }]], SO = e("text-align-center", zO);
const AO = [["path", { d: "M21 5H3", key: "1fi0y6" }], ["path", { d: "M21 12H9", key: "dn1m92" }], ["path", { d: "M21 19H7", key: "4cu937" }]], HO = e("text-align-end", AO);
const jO = [["path", { d: "M3 5h18", key: "1u36vt" }], ["path", { d: "M3 12h18", key: "1i2n21" }], ["path", { d: "M3 19h18", key: "awlh7x" }]], VO = e("text-align-justify", jO);
const PO = [["path", { d: "M21 5H3", key: "1fi0y6" }], ["path", { d: "M15 12H3", key: "6jk70r" }], ["path", { d: "M17 19H3", key: "z6ezky" }]], BO = e("text-align-start", PO);
const FO = [["path", { d: "M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6", key: "1528k5" }], ["path", { d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7", key: "13ksps" }], ["path", { d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1", key: "1n9rhb" }], ["path", { d: "M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1", key: "1mj8rg" }], ["path", { d: "M9 6v12", key: "velyjx" }]], DO = e("text-cursor-input", FO);
const RO = [["path", { d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1", key: "uvaxm9" }], ["path", { d: "M7 22h1a4 4 0 0 0 4-4v-1", key: "11xy8d" }], ["path", { d: "M7 2h1a4 4 0 0 1 4 4v1", key: "1uw06m" }]], TO = e("text-cursor", RO);
const UO = [["path", { d: "M15 5h6", key: "1pr8yx" }], ["path", { d: "M15 12h6", key: "upa0zy" }], ["path", { d: "M3 19h18", key: "awlh7x" }], ["path", { d: "m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12", key: "6lvno8" }], ["path", { d: "M3.92 10h6.16", key: "1tl8ex" }]], OO = e("text-initial", UO);
const GO = [["path", { d: "M17 5H3", key: "1cn7zz" }], ["path", { d: "M21 12H8", key: "scolzb" }], ["path", { d: "M21 19H8", key: "13qgcb" }], ["path", { d: "M3 12v7", key: "1ri8j3" }]], ZO = e("text-quote", GO);
const WO = [["path", { d: "M21 5H3", key: "1fi0y6" }], ["path", { d: "M10 12H3", key: "1ulcyk" }], ["path", { d: "M10 19H3", key: "108z41" }], ["circle", { cx: "17", cy: "15", r: "3", key: "1upz2a" }], ["path", { d: "m21 19-1.9-1.9", key: "dwi7p8" }]], EO = e("text-search", WO);
const XO = [["path", { d: "M14 21h1", key: "v9vybs" }], ["path", { d: "M14 3h1", key: "1ec4yj" }], ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }], ["path", { d: "M21 14v1", key: "169vum" }], ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }], ["path", { d: "M21 9v1", key: "mxsmne" }], ["path", { d: "M3 14v1", key: "vnatye" }], ["path", { d: "M3 9v1", key: "1r0deq" }], ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }], ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }], ["path", { d: "M7 12h10", key: "b7w52i" }], ["path", { d: "M7 16h6", key: "1vyc9m" }], ["path", { d: "M7 8h8", key: "1jbsf9" }], ["path", { d: "M9 21h1", key: "15o7lz" }], ["path", { d: "M9 3h1", key: "1yesri" }]], KO = e("text-select", XO);
const QO = [["path", { d: "m16 16-3 3 3 3", key: "117b85" }], ["path", { d: "M3 12h14.5a1 1 0 0 1 0 7H13", key: "18xa6z" }], ["path", { d: "M3 19h6", key: "1ygdsz" }], ["path", { d: "M3 5h18", key: "1u36vt" }]], JO = e("text-wrap", QO);
const YO = [["path", { d: "M2 10s3-3 3-8", key: "3xiif0" }], ["path", { d: "M22 10s-3-3-3-8", key: "ioaa5q" }], ["path", { d: "M10 2c0 4.4-3.6 8-8 8", key: "16fkpi" }], ["path", { d: "M14 2c0 4.4 3.6 8 8 8", key: "b9eulq" }], ["path", { d: "M2 10s2 2 2 5", key: "1au1lb" }], ["path", { d: "M22 10s-2 2-2 5", key: "qi2y5e" }], ["path", { d: "M8 15h8", key: "45n4r" }], ["path", { d: "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1", key: "1vsc2m" }], ["path", { d: "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1", key: "hrha4u" }]], eG = e("theater", YO);
const aG = [["path", { d: "m10 20-1.25-2.5L6 18", key: "18frcb" }], ["path", { d: "M10 4 8.75 6.5 6 6", key: "7mghy3" }], ["path", { d: "M10.585 15H10", key: "4nqulp" }], ["path", { d: "M2 12h6.5L10 9", key: "kv9z4n" }], ["path", { d: "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z", key: "yu0u2z" }], ["path", { d: "m4 10 1.5 2L4 14", key: "k9enpj" }], ["path", { d: "m7 21 3-6-1.5-3", key: "j8hb9u" }], ["path", { d: "m7 3 3 6h2", key: "1bbqgq" }]], cG = e("thermometer-snowflake", aG);
const tG = [["path", { d: "M12 2v2", key: "tus03m" }], ["path", { d: "M12 8a4 4 0 0 0-1.645 7.647", key: "wz5p04" }], ["path", { d: "M2 12h2", key: "1t8f8n" }], ["path", { d: "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z", key: "yu0u2z" }], ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }], ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }]], oG = e("thermometer-sun", tG);
const dG = [["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]], nG = e("thermometer", dG);
const hG = [["path", { d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z", key: "m61m77" }], ["path", { d: "M17 14V2", key: "8ymqnk" }]], sG = e("thumbs-down", hG);
const iG = [["path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z", key: "emmmcr" }], ["path", { d: "M7 10v12", key: "1qc93n" }]], yG = e("thumbs-up", iG);
const rG = [["path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z", key: "qn84l0" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]], kG = e("ticket-check", rG);
const pG = [["path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z", key: "qn84l0" }], ["path", { d: "M9 12h6", key: "1c52cq" }]], lG = e("ticket-minus", pG);
const uG = [["path", { d: "M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z", key: "1l48ns" }], ["path", { d: "M9 9h.01", key: "1q5me6" }], ["path", { d: "m15 9-6 6", key: "1uzhvr" }], ["path", { d: "M15 15h.01", key: "lqbp3k" }]], MG = e("ticket-percent", uG);
const vG = [["path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z", key: "qn84l0" }], ["path", { d: "M9 12h6", key: "1c52cq" }], ["path", { d: "M12 9v6", key: "199k2o" }]], mG = e("ticket-plus", vG);
const _G = [["path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z", key: "qn84l0" }], ["path", { d: "m9.5 14.5 5-5", key: "qviqfa" }]], gG = e("ticket-slash", _G);
const xG = [["path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z", key: "qn84l0" }], ["path", { d: "m9.5 14.5 5-5", key: "qviqfa" }], ["path", { d: "m9.5 9.5 5 5", key: "18nt4w" }]], LG = e("ticket-x", xG);
const wG = [["path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z", key: "qn84l0" }], ["path", { d: "M13 5v2", key: "dyzc3o" }], ["path", { d: "M13 17v2", key: "1ont0d" }], ["path", { d: "M13 11v2", key: "1wjjxi" }]], fG = e("ticket", wG);
const IG = [["path", { d: "M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12", key: "16muxl" }], ["path", { d: "m12 13.5 3.75.5", key: "1i9qhk" }], ["path", { d: "m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8", key: "15hfpj" }], ["path", { d: "M6 10V8", key: "1y41hn" }], ["path", { d: "M6 14v1", key: "cao2tf" }], ["path", { d: "M6 19v2", key: "1loha6" }], ["rect", { x: "2", y: "8", width: "20", height: "13", rx: "2", key: "p3bz5l" }]], CG = e("tickets-plane", IG);
const NG = [["path", { d: "m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8", key: "15hfpj" }], ["path", { d: "M6 10V8", key: "1y41hn" }], ["path", { d: "M6 14v1", key: "cao2tf" }], ["path", { d: "M6 19v2", key: "1loha6" }], ["rect", { x: "2", y: "8", width: "20", height: "13", rx: "2", key: "p3bz5l" }]], bG = e("tickets", NG);
const $G = [["path", { d: "M10 2h4", key: "n1abiw" }], ["path", { d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7", key: "10he05" }], ["path", { d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2", key: "15f7sh" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M12 12v-2", key: "fwoke6" }]], qG = e("timer-off", $G);
const zG = [["path", { d: "M10 2h4", key: "n1abiw" }], ["path", { d: "M12 14v-4", key: "1evpnu" }], ["path", { d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6", key: "1ts96g" }], ["path", { d: "M9 17H4v5", key: "8t5av" }]], SG = e("timer-reset", zG);
const AG = [["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }], ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }], ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]], HG = e("timer", AG);
const jG = [["circle", { cx: "9", cy: "12", r: "3", key: "u3jwor" }], ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "7", key: "g7kal2" }]], VG = e("toggle-left", jG);
const PG = [["circle", { cx: "15", cy: "12", r: "3", key: "1afu0r" }], ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "7", key: "g7kal2" }]], BG = e("toggle-right", PG);
const FG = [["path", { d: "M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18", key: "kc4kqr" }], ["path", { d: "M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8", key: "1tqs57" }]], DG = e("toilet", FG);
const RG = [["path", { d: "M10 15h4", key: "192ueg" }], ["path", { d: "m14.817 10.995-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27", key: "xbnumr" }], ["path", { d: "m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122", key: "eaw7gc" }], ["path", { d: "M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z", key: "1vaooh" }]], TG = e("tool-case", RG);
const UG = [["path", { d: "M16 12v4", key: "vf1vip" }], ["path", { d: "M16 6a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 22 12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 .586-1.414l4-4A2 2 0 0 1 8 6z", key: "1h1rvn" }], ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2", key: "1ksdt3" }], ["path", { d: "M2 14h20", key: "myj16y" }], ["path", { d: "M8 12v4", key: "1w4uao" }]], OG = e("toolbox", UG);
const GG = [["path", { d: "M21 4H3", key: "1hwok0" }], ["path", { d: "M18 8H6", key: "41n648" }], ["path", { d: "M19 12H9", key: "1g4lpz" }], ["path", { d: "M16 16h-6", key: "1j5d54" }], ["path", { d: "M11 20H9", key: "39obr8" }]], ZG = e("tornado", GG);
const WG = [["ellipse", { cx: "12", cy: "11", rx: "3", ry: "2", key: "1b2qxu" }], ["ellipse", { cx: "12", cy: "12.5", rx: "10", ry: "8.5", key: "h8emeu" }]], EG = e("torus", WG);
const XG = [["path", { d: "M12 20v-6", key: "1rm09r" }], ["path", { d: "M19.656 14H22", key: "170xzr" }], ["path", { d: "M2 14h12", key: "d8icqz" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2", key: "s23sx2" }], ["path", { d: "M9.656 4H20a2 2 0 0 1 2 2v10.344", key: "ovjcvl" }]], KG = e("touchpad-off", XG);
const QG = [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }], ["path", { d: "M2 14h20", key: "myj16y" }], ["path", { d: "M12 20v-6", key: "1rm09r" }]], JG = e("touchpad", QG);
const YG = [["path", { d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z", key: "1pledb" }], ["path", { d: "M8 13v9", key: "hmv0ci" }], ["path", { d: "M16 22v-9", key: "ylnf1u" }], ["path", { d: "m9 6 1 7", key: "dpdgam" }], ["path", { d: "m15 6-1 7", key: "ls7zgu" }], ["path", { d: "M12 6V2", key: "1pj48d" }], ["path", { d: "M13 2h-2", key: "mj6ths" }]], eZ = e("tower-control", YG);
const aZ = [["rect", { width: "18", height: "12", x: "3", y: "8", rx: "1", key: "158fvp" }], ["path", { d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3", key: "s0042v" }], ["path", { d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3", key: "9wmeh2" }]], cZ = e("toy-brick", aZ);
const tZ = [["path", { d: "m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20", key: "she1j9" }], ["path", { d: "M16 18h-5", key: "bq60fd" }], ["path", { d: "M18 5a1 1 0 0 0-1 1v5.573", key: "1kv8ia" }], ["path", { d: "M3 4h8.129a1 1 0 0 1 .99.863L13 11.246", key: "1q1ert" }], ["path", { d: "M4 11V4", key: "9ft8pt" }], ["path", { d: "M7 15h.01", key: "k5ht0j" }], ["path", { d: "M8 10.1V4", key: "1jgyzo" }], ["circle", { cx: "18", cy: "18", r: "2", key: "1emm8v" }], ["circle", { cx: "7", cy: "15", r: "5", key: "ddtuc" }]], oZ = e("tractor", tZ);
const dZ = [["path", { d: "M16.05 10.966a5 2.5 0 0 1-8.1 0", key: "m5jpwb" }], ["path", { d: "m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04", key: "rbg3g8" }], ["path", { d: "M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z", key: "vap8c8" }], ["path", { d: "M9.194 6.57a5 2.5 0 0 0 5.61 0", key: "15hn5c" }]], nZ = e("traffic-cone", dZ);
const hZ = [["path", { d: "M2 22V12a10 10 0 1 1 20 0v10", key: "o0fyp0" }], ["path", { d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8", key: "m8q3n9" }], ["path", { d: "M10 15h.01", key: "44in9x" }], ["path", { d: "M14 15h.01", key: "5mohn5" }], ["path", { d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z", key: "hckbmu" }], ["path", { d: "m9 19-2 3", key: "iij7hm" }], ["path", { d: "m15 19 2 3", key: "npx8sa" }]], sZ = e("train-front-tunnel", hZ);
const iZ = [["path", { d: "M8 3.1V7a4 4 0 0 0 8 0V3.1", key: "1v71zp" }], ["path", { d: "m9 15-1-1", key: "1yrq24" }], ["path", { d: "m15 15 1-1", key: "1t0d6s" }], ["path", { d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z", key: "1p0hjs" }], ["path", { d: "m8 19-2 3", key: "13i0xs" }], ["path", { d: "m16 19 2 3", key: "xo31yx" }]], yZ = e("train-front", iZ);
const rZ = [["path", { d: "M2 17 17 2", key: "18b09t" }], ["path", { d: "m2 14 8 8", key: "1gv9hu" }], ["path", { d: "m5 11 8 8", key: "189pqp" }], ["path", { d: "m8 8 8 8", key: "1imecy" }], ["path", { d: "m11 5 8 8", key: "ummqn6" }], ["path", { d: "m14 2 8 8", key: "1vk7dn" }], ["path", { d: "M7 22 22 7", key: "15mb1i" }]], kZ = e("train-track", rZ);
const pZ = [["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2", key: "1wxw4b" }], ["path", { d: "M4 11h16", key: "mpoxn0" }], ["path", { d: "M12 3v8", key: "1h2ygw" }], ["path", { d: "m8 19-2 3", key: "13i0xs" }], ["path", { d: "m18 22-2-3", key: "1p0ohu" }], ["path", { d: "M8 15h.01", key: "a7atzg" }], ["path", { d: "M16 15h.01", key: "rnfrdf" }]], lZ = e("tram-front", pZ);
const uZ = [["path", { d: "M12 16v6", key: "c8a4gj" }], ["path", { d: "M14 20h-4", key: "m8m19d" }], ["path", { d: "M18 2h4v4", key: "1341mj" }], ["path", { d: "m2 2 7.17 7.17", key: "13q8l2" }], ["path", { d: "M2 5.355V2h3.357", key: "18136r" }], ["path", { d: "m22 2-7.17 7.17", key: "1epvy4" }], ["path", { d: "M8 5 5 8", key: "mgbjhz" }], ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }]], MZ = e("transgender", uZ);
const vZ = [["path", { d: "M10 11v6", key: "nco0om" }], ["path", { d: "M14 11v6", key: "outv1u" }], ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }], ["path", { d: "M3 6h18", key: "d0wm0j" }], ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]], mZ = e("trash-2", vZ);
const _Z = [["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }], ["path", { d: "M3 6h18", key: "d0wm0j" }], ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]], gZ = e("trash", _Z);
const xZ = [["path", { d: "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z", key: "oadzkq" }], ["path", { d: "M12 19v3", key: "npa21l" }]], LZ = e("tree-deciduous", xZ);
const wZ = [["path", { d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4", key: "foxbe7" }], ["path", { d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3", key: "18arnh" }], ["path", { d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35", key: "ywahnh" }], ["path", { d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14", key: "ft0feo" }]], fZ = e("tree-palm", wZ);
const IZ = [["path", { d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z", key: "cpyugq" }], ["path", { d: "M12 22v-3", key: "kmzjlo" }]], CZ = e("tree-pine", IZ);
const NZ = [["path", { d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z", key: "1l6gj6" }], ["path", { d: "M7 16v6", key: "1a82de" }], ["path", { d: "M13 19v3", key: "13sx9i" }], ["path", { d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5", key: "1sj9kv" }]], bZ = e("trees", NZ);
const $Z = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }], ["rect", { width: "3", height: "9", x: "7", y: "7", key: "14n3xi" }], ["rect", { width: "3", height: "5", x: "14", y: "7", key: "s4azjd" }]], qZ = e("trello", $Z);
const zZ = [["path", { d: "M16 17h6v-6", key: "t6n2it" }], ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]], SZ = e("trending-down", zZ);
const AZ = [["path", { d: "M14.828 14.828 21 21", key: "ar5fw7" }], ["path", { d: "M21 16v5h-5", key: "1ck2sf" }], ["path", { d: "m21 3-9 9-4-4-6 6", key: "1h02xo" }], ["path", { d: "M21 8V3h-5", key: "1qoq8a" }]], HZ = e("trending-up-down", AZ);
const jZ = [["path", { d: "M16 7h6v6", key: "box55l" }], ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]], VZ = e("trending-up", jZ);
const PZ = [["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", key: "wmoenq" }], ["path", { d: "M12 9v4", key: "juzpu7" }], ["path", { d: "M12 17h.01", key: "p32p05" }]], BZ = e("triangle-alert", PZ);
const FZ = [["path", { d: "M10.17 4.193a2 2 0 0 1 3.666.013", key: "pltmmw" }], ["path", { d: "M14 21h2", key: "v4qezv" }], ["path", { d: "m15.874 7.743 1 1.732", key: "10m0iw" }], ["path", { d: "m18.849 12.952 1 1.732", key: "zadnam" }], ["path", { d: "M21.824 18.18a2 2 0 0 1-1.835 2.824", key: "fvwuk4" }], ["path", { d: "M4.024 21a2 2 0 0 1-1.839-2.839", key: "1e1kah" }], ["path", { d: "m5.136 12.952-1 1.732", key: "1u4ldi" }], ["path", { d: "M8 21h2", key: "i9zjee" }], ["path", { d: "m8.102 7.743-1 1.732", key: "1zzo4u" }]], DZ = e("triangle-dashed", FZ);
const RZ = [["path", { d: "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z", key: "183wce" }]], TZ = e("triangle-right", RZ);
const UZ = [["path", { d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z", key: "14u9p9" }]], OZ = e("triangle", UZ);
const GZ = [["path", { d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978", key: "1n3hpd" }], ["path", { d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978", key: "rfe1zi" }], ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }], ["path", { d: "M4 22h16", key: "57wxv0" }], ["path", { d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z", key: "1mhfuq" }], ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }]], ZZ = e("trophy", GZ);
const WZ = [["path", { d: "M14 19V7a2 2 0 0 0-2-2H9", key: "15peso" }], ["path", { d: "M15 19H9", key: "18q6dt" }], ["path", { d: "M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14", key: "1dkp3j" }], ["path", { d: "M2 13v5a1 1 0 0 0 1 1h2", key: "pkmmzz" }], ["path", { d: "M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02", key: "1n26pd" }], ["circle", { cx: "17", cy: "19", r: "2", key: "1nxcgd" }], ["circle", { cx: "7", cy: "19", r: "2", key: "gzo7y7" }]], EZ = e("truck-electric", WZ);
const XZ = [["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }], ["path", { d: "M15 18H9", key: "1lyqi6" }], ["path", { d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14", key: "lysw3i" }], ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }], ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]], KZ = e("truck", XZ);
const QZ = [["path", { d: "M15 4 5 9", key: "14bkc9" }], ["path", { d: "m15 8.5-10 5", key: "1grtsx" }], ["path", { d: "M18 12a9 9 0 0 1-9 9V3", key: "1sst7f" }]], JZ = e("turkish-lira", QZ);
const YZ = [["path", { d: "M10 12.01h.01", key: "7rp0yl" }], ["path", { d: "M18 8v4a8 8 0 0 1-1.07 4", key: "1st48v" }], ["circle", { cx: "10", cy: "12", r: "4", key: "19levz" }], ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]], eW = e("turntable", YZ);
const aW = [["path", { d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z", key: "1lbbv7" }], ["path", { d: "M4.82 7.9 8 10", key: "m9wose" }], ["path", { d: "M15.18 7.9 12 10", key: "p8dp2u" }], ["path", { d: "M16.93 10H20a2 2 0 0 1 0 4H2", key: "12nsm7" }]], cW = e("turtle", aW);
const tW = [["path", { d: "M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z", key: "vbtd3f" }], ["path", { d: "M7 21h10", key: "1b0cd5" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }]], oW = e("tv-minimal-play", tW);
const dW = [["path", { d: "M7 21h10", key: "1b0cd5" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }]], nW = e("tv-minimal", dW);
const hW = [["path", { d: "m17 2-5 5-5-5", key: "16satq" }], ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", key: "1e6viu" }]], sW = e("tv", hW);
const iW = [["path", { d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7", key: "c0yzno" }]], yW = e("twitch", iW);
const rW = [["path", { d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z", key: "pff0z6" }]], kW = e("twitter", rW);
const pW = [["path", { d: "M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z", key: "1reda3" }]], lW = e("type-outline", pW);
const uW = [["path", { d: "M12 4v16", key: "1654pz" }], ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }], ["path", { d: "M9 20h6", key: "s66wpe" }]], MW = e("type", uW);
const vW = [["path", { d: "M12 13v7a2 2 0 0 0 4 0", key: "rpgb42" }], ["path", { d: "M12 2v2", key: "tus03m" }], ["path", { d: "M18.656 13h2.336a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-12.07-7.51", key: "yawknk" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "M5.961 5.957a10.28 10.28 0 0 0-3.922 5.769A1 1 0 0 0 3 13h10", key: "5sfalc" }]], mW = e("umbrella-off", vW);
const _W = [["path", { d: "M12 13v7a2 2 0 0 0 4 0", key: "rpgb42" }], ["path", { d: "M12 2v2", key: "tus03m" }], ["path", { d: "M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z", key: "124nyo" }]], gW = e("umbrella", _W);
const xW = [["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }], ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]], LW = e("underline", xW);
const wW = [["path", { d: "M9 14 4 9l5-5", key: "102s5s" }], ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", key: "f3b9sd" }]], fW = e("undo-2", wW);
const IW = [["path", { d: "M21 17a9 9 0 0 0-15-6.7L3 13", key: "8mp6z9" }], ["path", { d: "M3 7v6h6", key: "1v2h90" }], ["circle", { cx: "12", cy: "17", r: "1", key: "1ixnty" }]], CW = e("undo-dot", IW);
const NW = [["path", { d: "M3 7v6h6", key: "1v2h90" }], ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]], bW = e("undo", NW);
const $W = [["path", { d: "M16 12h6", key: "15xry1" }], ["path", { d: "M8 12H2", key: "1jqql6" }], ["path", { d: "M12 2v2", key: "tus03m" }], ["path", { d: "M12 8v2", key: "1woqiv" }], ["path", { d: "M12 14v2", key: "8jcxud" }], ["path", { d: "M12 20v2", key: "1lh1kg" }], ["path", { d: "m19 15 3-3-3-3", key: "wjy7rq" }], ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }]], qW = e("unfold-horizontal", $W);
const zW = [["path", { d: "M12 22v-6", key: "6o8u61" }], ["path", { d: "M12 8V2", key: "1wkif3" }], ["path", { d: "M4 12H2", key: "rhcxmi" }], ["path", { d: "M10 12H8", key: "s88cx1" }], ["path", { d: "M16 12h-2", key: "10asgb" }], ["path", { d: "M22 12h-2", key: "14jgyd" }], ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }], ["path", { d: "m15 5-3-3-3 3", key: "itvq4r" }]], SW = e("unfold-vertical", zW);
const AW = [["rect", { width: "8", height: "6", x: "5", y: "4", rx: "1", key: "nzclkv" }], ["rect", { width: "8", height: "6", x: "11", y: "14", rx: "1", key: "4tytwb" }]], HW = e("ungroup", AW);
const jW = [["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }], ["path", { d: "M18 12h.01", key: "yjnet6" }], ["path", { d: "M18 16h.01", key: "plv8zi" }], ["path", { d: "M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z", key: "1ogmi3" }], ["path", { d: "M6 12h.01", key: "c2rlol" }], ["path", { d: "M6 16h.01", key: "1pmjb7" }], ["circle", { cx: "12", cy: "10", r: "2", key: "1yojzk" }]], VW = e("university", jW);
const PW = [["path", { d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2", key: "1re2ne" }]], BW = e("unlink-2", PW);
const FW = [["path", { d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71", key: "yqzxt4" }], ["path", { d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71", key: "4qinb0" }], ["line", { x1: "8", x2: "8", y1: "2", y2: "5", key: "1041cp" }], ["line", { x1: "2", x2: "5", y1: "8", y2: "8", key: "14m1p5" }], ["line", { x1: "16", x2: "16", y1: "19", y2: "22", key: "rzdirn" }], ["line", { x1: "19", x2: "22", y1: "16", y2: "16", key: "ox905f" }]], DW = e("unlink", FW);
const RW = [["path", { d: "m19 5 3-3", key: "yk6iyv" }], ["path", { d: "m2 22 3-3", key: "19mgm9" }], ["path", { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z", key: "goz73y" }], ["path", { d: "M7.5 13.5 10 11", key: "7xgeeb" }], ["path", { d: "M10.5 16.5 13 14", key: "10btkg" }], ["path", { d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z", key: "1snsnr" }]], TW = e("unplug", RW);
const UW = [["path", { d: "M12 3v12", key: "1x0j5s" }], ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }], ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]], OW = e("upload", UW);
const GW = [["circle", { cx: "10", cy: "7", r: "1", key: "dypaad" }], ["circle", { cx: "4", cy: "20", r: "1", key: "22iqad" }], ["path", { d: "M4.7 19.3 19 5", key: "1enqfc" }], ["path", { d: "m21 3-3 1 2 2Z", key: "d3ov82" }], ["path", { d: "M9.26 7.68 5 12l2 5", key: "1esawj" }], ["path", { d: "m10 14 5 2 3.5-3.5", key: "v8oal5" }], ["path", { d: "m18 12 1-1 1 1-1 1Z", key: "1bh22v" }]], ZW = e("usb", GW);
const WW = [["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }], ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]], EW = e("user-check", WW);
const XW = [["path", { d: "M10 15H6a4 4 0 0 0-4 4v2", key: "1nfge6" }], ["path", { d: "m14.305 16.53.923-.382", key: "1itpsq" }], ["path", { d: "m15.228 13.852-.923-.383", key: "eplpkm" }], ["path", { d: "m16.852 12.228-.383-.923", key: "13v3q0" }], ["path", { d: "m16.852 17.772-.383.924", key: "1i8mnm" }], ["path", { d: "m19.148 12.228.383-.923", key: "1q8j1v" }], ["path", { d: "m19.53 18.696-.382-.924", key: "vk1qj3" }], ["path", { d: "m20.772 13.852.924-.383", key: "n880s0" }], ["path", { d: "m20.772 16.148.924.383", key: "1g6xey" }], ["circle", { cx: "18", cy: "15", r: "3", key: "gjjjvw" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]], KW = e("user-cog", XW);
const QW = [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }], ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]], JW = e("user-minus", QW);
const YW = [["circle", { cx: "10", cy: "7", r: "4", key: "e45bow" }], ["path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2", key: "3bnktk" }], ["path", { d: "M15 15.5V14a2 2 0 0 1 4 0v1.5", key: "12ym5i" }], ["rect", { width: "8", height: "5", x: "13", y: "16", rx: ".899", key: "4p176n" }]], eE = e("user-lock", YW);
const aE = [["path", { d: "M11.5 15H7a4 4 0 0 0-4 4v2", key: "15lzij" }], ["path", { d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z", key: "1817ys" }], ["circle", { cx: "10", cy: "7", r: "4", key: "e45bow" }]], cE = e("user-pen", aE);
const tE = [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }], ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }], ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]], oE = e("user-plus", tE);
const dE = [["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }], ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }], ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]], nE = e("user-round-check", dE);
const hE = [["path", { d: "m14.305 19.53.923-.382", key: "3m78fa" }], ["path", { d: "m15.228 16.852-.923-.383", key: "npixar" }], ["path", { d: "m16.852 15.228-.383-.923", key: "5xggr7" }], ["path", { d: "m16.852 20.772-.383.924", key: "dpfhf9" }], ["path", { d: "m19.148 15.228.383-.923", key: "1reyyz" }], ["path", { d: "m19.53 21.696-.382-.924", key: "1goivc" }], ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62", key: "1yezr2" }], ["path", { d: "m20.772 16.852.924-.383", key: "htqkph" }], ["path", { d: "m20.772 19.148.924.383", key: "9w9pjp" }], ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }], ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }]], sE = e("user-round-cog", hE);
const iE = [["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }], ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }], ["path", { d: "M22 19h-6", key: "vcuq98" }]], yE = e("user-round-minus", iE);
const rE = [["path", { d: "M2 21a8 8 0 0 1 10.821-7.487", key: "1c8h7z" }], ["path", { d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z", key: "1817ys" }], ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }]], kE = e("user-round-pen", rE);
const pE = [["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }], ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }], ["path", { d: "M19 16v6", key: "tddt3s" }], ["path", { d: "M22 19h-6", key: "vcuq98" }]], lE = e("user-round-plus", pE);
const uE = [["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }], ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62", key: "1yezr2" }], ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }], ["path", { d: "m22 22-1.9-1.9", key: "1e5ubv" }]], ME = e("user-round-search", uE);
const vE = [["path", { d: "M2 21a8 8 0 0 1 11.873-7", key: "74fkxq" }], ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }], ["path", { d: "m17 17 5 5", key: "p7ous7" }], ["path", { d: "m22 17-5 5", key: "gqnmv0" }]], mE = e("user-round-x", vE);
const _E = [["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }], ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]], gE = e("user-round", _E);
const xE = [["circle", { cx: "10", cy: "7", r: "4", key: "e45bow" }], ["path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2", key: "3bnktk" }], ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }], ["path", { d: "m21 21-1.9-1.9", key: "1g2n9r" }]], LE = e("user-search", xE);
const wE = [["path", { d: "M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z", key: "1m8t9f" }], ["path", { d: "M8 15H7a4 4 0 0 0-4 4v2", key: "l9tmp8" }], ["circle", { cx: "10", cy: "7", r: "4", key: "e45bow" }]], fE = e("user-star", wE);
const IE = [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }], ["line", { x1: "17", x2: "22", y1: "8", y2: "13", key: "3nzzx3" }], ["line", { x1: "22", x2: "17", y1: "8", y2: "13", key: "1swrse" }]], CE = e("user-x", IE);
const NE = [["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }], ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]], bE = e("user", NE);
const $E = [["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }], ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }], ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" }]], qE = e("users-round", $E);
const zE = [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }], ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]], SE = e("users", zE);
const AE = [["path", { d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8", key: "n7qcjb" }], ["path", { d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7", key: "d0u48b" }], ["path", { d: "m2.1 21.8 6.4-6.3", key: "yn04lh" }], ["path", { d: "m19 5-7 7", key: "194lzd" }]], HE = e("utensils-crossed", AE);
const jE = [["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }], ["path", { d: "M7 2v20", key: "1473qp" }], ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" }]], VE = e("utensils", jE);
const PE = [["path", { d: "M12 2v20", key: "t6zp3m" }], ["path", { d: "M2 5h20", key: "1fs1ex" }], ["path", { d: "M3 3v2", key: "9imdir" }], ["path", { d: "M7 3v2", key: "n0os7" }], ["path", { d: "M17 3v2", key: "1l2re6" }], ["path", { d: "M21 3v2", key: "1duuac" }], ["path", { d: "m19 5-7 7-7-7", key: "133zxf" }]], BE = e("utility-pole", PE);
const FE = [["path", { d: "M13 6v5a1 1 0 0 0 1 1h6.102a1 1 0 0 1 .712.298l.898.91a1 1 0 0 1 .288.702V17a1 1 0 0 1-1 1h-3", key: "k3s650" }], ["path", { d: "M5 18H3a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h12c1.1 0 2.1.8 2.4 1.8l1.176 4.2", key: "fnd93u" }], ["path", { d: "M9 18h5", key: "lrx6i" }], ["circle", { cx: "16", cy: "18", r: "2", key: "1v4tcr" }], ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]], DE = e("van", FE);
const RE = [["path", { d: "M8 21s-4-3-4-9 4-9 4-9", key: "uto9ud" }], ["path", { d: "M16 3s4 3 4 9-4 9-4 9", key: "4w2vsq" }], ["line", { x1: "15", x2: "9", y1: "9", y2: "15", key: "f7djnv" }], ["line", { x1: "9", x2: "15", y1: "9", y2: "15", key: "1shsy8" }]], TE = e("variable", RE);
const UE = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }], ["path", { d: "m7.9 7.9 2.7 2.7", key: "hpeyl3" }], ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }], ["path", { d: "m13.4 10.6 2.7-2.7", key: "264c1n" }], ["circle", { cx: "7.5", cy: "16.5", r: ".5", fill: "currentColor", key: "nkw3mc" }], ["path", { d: "m7.9 16.1 2.7-2.7", key: "p81g5e" }], ["circle", { cx: "16.5", cy: "16.5", r: ".5", fill: "currentColor", key: "fubopw" }], ["path", { d: "m13.4 13.4 2.7 2.7", key: "abhel3" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]], OE = e("vault", UE);
const GE = [["path", { d: "M19.5 7a24 24 0 0 1 0 10", key: "8n60xe" }], ["path", { d: "M4.5 7a24 24 0 0 0 0 10", key: "2lmadr" }], ["path", { d: "M7 19.5a24 24 0 0 0 10 0", key: "1q94o2" }], ["path", { d: "M7 4.5a24 24 0 0 1 10 0", key: "2z8ypa" }], ["rect", { x: "17", y: "17", width: "5", height: "5", rx: "1", key: "1ac74s" }], ["rect", { x: "17", y: "2", width: "5", height: "5", rx: "1", key: "1e7h5j" }], ["rect", { x: "2", y: "17", width: "5", height: "5", rx: "1", key: "1t4eah" }], ["rect", { x: "2", y: "2", width: "5", height: "5", rx: "1", key: "940dhs" }]], ZE = e("vector-square", GE);
const WE = [["path", { d: "M16 8q6 0 6-6-6 0-6 6", key: "qsyyc4" }], ["path", { d: "M17.41 3.59a10 10 0 1 0 3 3", key: "41m9h7" }], ["path", { d: "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14", key: "qiv7li" }]], EE = e("vegan", WE);
const XE = [["path", { d: "M18 11c-1.5 0-2.5.5-3 2", key: "1fod00" }], ["path", { d: "M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z", key: "d70hit" }], ["path", { d: "M6 11c1.5 0 2.5.5 3 2", key: "136fht" }]], KE = e("venetian-mask", XE);
const QE = [["path", { d: "M10 20h4", key: "ni2waw" }], ["path", { d: "M12 16v6", key: "c8a4gj" }], ["path", { d: "M17 2h4v4", key: "vhe59" }], ["path", { d: "m21 2-5.46 5.46", key: "19kypf" }], ["circle", { cx: "12", cy: "11", r: "5", key: "16gxyc" }]], JE = e("venus-and-mars", QE);
const YE = [["path", { d: "M12 15v7", key: "t2xh3l" }], ["path", { d: "M9 19h6", key: "456am0" }], ["circle", { cx: "12", cy: "9", r: "6", key: "1nw4tq" }]], eX = e("venus", YE);
const aX = [["path", { d: "m2 8 2 2-2 2 2 2-2 2", key: "sv1b1" }], ["path", { d: "m22 8-2 2 2 2-2 2 2 2", key: "101i4y" }], ["path", { d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2", key: "1hbad5" }], ["path", { d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34", key: "1x5tf0" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]], cX = e("vibrate-off", aX);
const tX = [["path", { d: "m2 8 2 2-2 2 2 2-2 2", key: "sv1b1" }], ["path", { d: "m22 8-2 2 2 2-2 2 2 2", key: "101i4y" }], ["rect", { width: "8", height: "14", x: "8", y: "5", rx: "1", key: "1oyrl4" }]], oX = e("vibrate", tX);
const dX = [["path", { d: "M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196", key: "w8jjjt" }], ["path", { d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2", key: "1xawa7" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]], nX = e("video-off", dX);
const hX = [["path", { d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5", key: "ftymec" }], ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]], sX = e("video", hX);
const iX = [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }], ["path", { d: "M2 8h20", key: "d11cs7" }], ["circle", { cx: "8", cy: "14", r: "2", key: "1k2qr5" }], ["path", { d: "M8 12h8", key: "1wcyev" }], ["circle", { cx: "16", cy: "14", r: "2", key: "14k7lr" }]], yX = e("videotape", iX);
const rX = [["path", { d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2", key: "mrq65r" }], ["path", { d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2", key: "be3xqs" }], ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }], ["path", { d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0", key: "11ak4c" }]], kX = e("view", rX);
const pX = [["circle", { cx: "6", cy: "12", r: "4", key: "1ehtga" }], ["circle", { cx: "18", cy: "12", r: "4", key: "4vafl8" }], ["line", { x1: "6", x2: "18", y1: "16", y2: "16", key: "pmt8us" }]], lX = e("voicemail", pX);
const uX = [["path", { d: "M11.1 7.1a16.55 16.55 0 0 1 10.9 4", key: "2880wi" }], ["path", { d: "M12 12a12.6 12.6 0 0 1-8.7 5", key: "113sja" }], ["path", { d: "M16.8 13.6a16.55 16.55 0 0 1-9 7.5", key: "1qmsgl" }], ["path", { d: "M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10", key: "1bmeqp" }], ["path", { d: "M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5", key: "iekzv9" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], MX = e("volleyball", uX);
const vX = [["path", { d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z", key: "uqj9uw" }], ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }]], mX = e("volume-1", vX);
const _X = [["path", { d: "M16 9a5 5 0 0 1 .95 2.293", key: "1fgyg8" }], ["path", { d: "M19.364 5.636a9 9 0 0 1 1.889 9.96", key: "l3zxae" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }], ["path", { d: "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11", key: "1gbwow" }], ["path", { d: "M9.828 4.172A.686.686 0 0 1 11 4.657v.686", key: "s2je0y" }]], gX = e("volume-off", _X);
const xX = [["path", { d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z", key: "uqj9uw" }], ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }], ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]], LX = e("volume-2", xX);
const wX = [["path", { d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z", key: "uqj9uw" }], ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }], ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]], fX = e("volume-x", wX);
const IX = [["path", { d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z", key: "uqj9uw" }]], CX = e("volume", IX);
const NX = [["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }], ["path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z", key: "1ezoue" }], ["path", { d: "M22 19H2", key: "nuriw5" }]], bX = e("vote", NX);
const $X = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2", key: "4125el" }], ["path", { d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21", key: "1dpki6" }]], qX = e("wallet-cards", $X);
const zX = [["path", { d: "M17 14h.01", key: "7oqj8z" }], ["path", { d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14", key: "u1rqew" }]], SX = e("wallet-minimal", zX);
const AX = [["path", { d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1", key: "18etb6" }], ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]], HX = e("wallet", AX);
const jX = [["path", { d: "M12 17v4", key: "1riwvh" }], ["path", { d: "M8 21h8", key: "1ev6f3" }], ["path", { d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15", key: "1sl52q" }], ["circle", { cx: "8", cy: "9", r: "2", key: "gjzl9d" }], ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", key: "x3v2xh" }]], VX = e("wallpaper", jX);
const PX = [["path", { d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72", key: "ul74o6" }], ["path", { d: "m14 7 3 3", key: "1r5n42" }], ["path", { d: "M5 6v4", key: "ilb8ba" }], ["path", { d: "M19 14v4", key: "blhpug" }], ["path", { d: "M10 2v2", key: "7u0qdc" }], ["path", { d: "M7 8H3", key: "zfb6yr" }], ["path", { d: "M21 16h-4", key: "1cnmox" }], ["path", { d: "M11 3H9", key: "1obp7u" }]], BX = e("wand-sparkles", PX);
const FX = [["path", { d: "M15 4V2", key: "z1p9b7" }], ["path", { d: "M15 16v-2", key: "px0unx" }], ["path", { d: "M8 9h2", key: "1g203m" }], ["path", { d: "M20 9h2", key: "19tzq7" }], ["path", { d: "M17.8 11.8 19 13", key: "yihg8r" }], ["path", { d: "M15 9h.01", key: "x1ddxp" }], ["path", { d: "M17.8 6.2 19 5", key: "fd4us0" }], ["path", { d: "m3 21 9-9", key: "1jfql5" }], ["path", { d: "M12.2 6.2 11 5", key: "i3da3b" }]], DX = e("wand", FX);
const RX = [["path", { d: "M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11", key: "pb2vm6" }], ["path", { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z", key: "doq5xv" }], ["path", { d: "M6 13h12", key: "yf64js" }], ["path", { d: "M6 17h12", key: "1jwigz" }]], TX = e("warehouse", RX);
const UX = [["path", { d: "M3 6h3", key: "155dbl" }], ["path", { d: "M17 6h.01", key: "e2y6kg" }], ["rect", { width: "18", height: "20", x: "3", y: "2", rx: "2", key: "od3kk9" }], ["circle", { cx: "12", cy: "13", r: "5", key: "nlbqau" }], ["path", { d: "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5", key: "17lach" }]], OX = e("washing-machine", UX);
const GX = [["path", { d: "M12 10v2.2l1.6 1", key: "n3r21l" }], ["path", { d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05", key: "18k57s" }], ["path", { d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05", key: "16ny36" }], ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }]], ZX = e("watch", GX);
const WX = [["path", { d: "M12 10L12 2", key: "jvb0aw" }], ["path", { d: "M16 6L12 10L8 6", key: "9j6vje" }], ["path", { d: "M2 15C2.6 15.5 3.2 16 4.5 16C7 16 7 14 9.5 14C12.1 14 11.9 16 14.5 16C17 16 17 14 19.5 14C20.8 14 21.4 14.5 22 15", key: "s2zepw" }], ["path", { d: "M2 21C2.6 21.5 3.2 22 4.5 22C7 22 7 20 9.5 20C12.1 20 11.9 22 14.5 22C17 22 17 20 19.5 20C20.8 20 21.4 20.5 22 21", key: "u68omc" }]], EX = e("waves-arrow-down", WX);
const XX = [["path", { d: "M12 2v8", key: "1q4o3n" }], ["path", { d: "M2 15c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1", key: "1p9f19" }], ["path", { d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1", key: "vbxynw" }], ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }]], KX = e("waves-arrow-up", XX);
const QX = [["path", { d: "M19 5a2 2 0 0 0-2 2v11", key: "s41o68" }], ["path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1", key: "rd2r6e" }], ["path", { d: "M7 13h10", key: "1rwob1" }], ["path", { d: "M7 9h10", key: "12czzb" }], ["path", { d: "M9 5a2 2 0 0 0-2 2v11", key: "x0q4gh" }]], JX = e("waves-ladder", QX);
const YX = [["path", { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1", key: "knzxuh" }], ["path", { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1", key: "2jd2cc" }], ["path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1", key: "rd2r6e" }]], eK = e("waves", YX);
const aK = [["circle", { cx: "12", cy: "4.5", r: "2.5", key: "r5ysbb" }], ["path", { d: "m10.2 6.3-3.9 3.9", key: "1nzqf6" }], ["circle", { cx: "4.5", cy: "12", r: "2.5", key: "jydg6v" }], ["path", { d: "M7 12h10", key: "b7w52i" }], ["circle", { cx: "19.5", cy: "12", r: "2.5", key: "1piiel" }], ["path", { d: "m13.8 17.7 3.9-3.9", key: "1wyg1y" }], ["circle", { cx: "12", cy: "19.5", r: "2.5", key: "13o1pw" }]], cK = e("waypoints", aK);
const tK = [["circle", { cx: "12", cy: "10", r: "8", key: "1gshiw" }], ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }], ["path", { d: "M7 22h10", key: "10w4w3" }], ["path", { d: "M12 22v-4", key: "1utk9m" }]], oK = e("webcam", tK);
const dK = [["path", { d: "M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15", key: "1tvl6x" }], ["path", { d: "M9 3.4a4 4 0 0 1 6.52.66", key: "q04jfq" }], ["path", { d: "m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05", key: "azowf0" }], ["path", { d: "M20.3 20.3a4 4 0 0 1-2.3.7", key: "5joiws" }], ["path", { d: "M18.6 13a4 4 0 0 1 3.357 3.414", key: "cangb8" }], ["path", { d: "m12 6 .6 1", key: "tpjl1n" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]], nK = e("webhook-off", dK);
const hK = [["path", { d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2", key: "q3hayz" }], ["path", { d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06", key: "1go1hn" }], ["path", { d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8", key: "qlwsc0" }]], sK = e("webhook", hK);
const iK = [["path", { d: "M6.5 8a2 2 0 0 0-1.906 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8z", key: "1wl739" }], ["path", { d: "M7.999 15a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 0 4 0", key: "1egezo" }], ["circle", { cx: "12", cy: "5", r: "3", key: "rqqgnr" }]], yK = e("weight-tilde", iK);
const rK = [["circle", { cx: "12", cy: "5", r: "3", key: "rqqgnr" }], ["path", { d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z", key: "56o5sh" }]], kK = e("weight", rK);
const pK = [["path", { d: "m2 22 10-10", key: "28ilpk" }], ["path", { d: "m16 8-1.17 1.17", key: "1qqm82" }], ["path", { d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z", key: "1rdhi6" }], ["path", { d: "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97", key: "4wz8re" }], ["path", { d: "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62", key: "rves66" }], ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z", key: "19rau1" }], ["path", { d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z", key: "tc8ph9" }], ["path", { d: "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98", key: "ak46r" }], ["path", { d: "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28", key: "1tw520" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]], lK = e("wheat-off", pK);
const uK = [["path", { d: "M2 22 16 8", key: "60hf96" }], ["path", { d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z", key: "1rdhi6" }], ["path", { d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z", key: "1sdzmb" }], ["path", { d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z", key: "eoatbi" }], ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z", key: "19rau1" }], ["path", { d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z", key: "tc8ph9" }], ["path", { d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z", key: "2m8kc5" }], ["path", { d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z", key: "vex3ng" }]], MK = e("wheat", uK);
const vK = [["circle", { cx: "7", cy: "12", r: "3", key: "12clwm" }], ["path", { d: "M10 9v6", key: "17i7lo" }], ["circle", { cx: "17", cy: "12", r: "3", key: "gl7c2s" }], ["path", { d: "M14 7v8", key: "dl84cr" }], ["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1", key: "lt2kga" }]], mK = e("whole-word", vK);
const _K = [["path", { d: "m14.305 19.53.923-.382", key: "3m78fa" }], ["path", { d: "m15.228 16.852-.923-.383", key: "npixar" }], ["path", { d: "m16.852 15.228-.383-.923", key: "5xggr7" }], ["path", { d: "m16.852 20.772-.383.924", key: "dpfhf9" }], ["path", { d: "m19.148 15.228.383-.923", key: "1reyyz" }], ["path", { d: "m19.53 21.696-.382-.924", key: "1goivc" }], ["path", { d: "M2 7.82a15 15 0 0 1 20 0", key: "1ovjuk" }], ["path", { d: "m20.772 16.852.924-.383", key: "htqkph" }], ["path", { d: "m20.772 19.148.924.383", key: "9w9pjp" }], ["path", { d: "M5 11.858a10 10 0 0 1 11.5-1.785", key: "3sn16i" }], ["path", { d: "M8.5 15.429a5 5 0 0 1 2.413-1.31", key: "1pxovh" }], ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }]], gK = e("wifi-cog", _K);
const xK = [["path", { d: "M12 20h.01", key: "zekei9" }], ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]], LK = e("wifi-high", xK);
const wK = [["path", { d: "M12 20h.01", key: "zekei9" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]], fK = e("wifi-low", wK);
const IK = [["path", { d: "M12 20h.01", key: "zekei9" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }], ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }], ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }], ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }], ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]], CK = e("wifi-off", IK);
const NK = [["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }], ["path", { d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z", key: "1817ys" }], ["path", { d: "M5 12.859a10 10 0 0 1 10.5-2.222", key: "rpb7oy" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 3-1.406", key: "r8bmzl" }]], bK = e("wifi-pen", NK);
const $K = [["path", { d: "M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5", key: "1immaq" }], ["path", { d: "M11.965 14.105h4", key: "uejny8" }], ["path", { d: "M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5", key: "1i3a7e" }], ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }], ["path", { d: "M21.965 22.105v-4", key: "1ku6vx" }], ["path", { d: "M5 12.86a10 10 0 0 1 3-2.032", key: "pemdtu" }], ["path", { d: "M8.5 16.429h.01", key: "2bm739" }]], qK = e("wifi-sync", $K);
const zK = [["path", { d: "M12 20h.01", key: "zekei9" }]], SK = e("wifi-zero", zK);
const AK = [["path", { d: "M12 20h.01", key: "zekei9" }], ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }], ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]], HK = e("wifi", AK);
const jK = [["path", { d: "M10 2v8", key: "d4bbey" }], ["path", { d: "M12.8 21.6A2 2 0 1 0 14 18H2", key: "19kp1d" }], ["path", { d: "M17.5 10a2.5 2.5 0 1 1 2 4H2", key: "19kpjc" }], ["path", { d: "m6 6 4 4 4-4", key: "k13n16" }]], VK = e("wind-arrow-down", jK);
const PK = [["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }], ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }], ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]], BK = e("wind", PK);
const FK = [["path", { d: "M8 22h8", key: "rmew8v" }], ["path", { d: "M7 10h3m7 0h-1.343", key: "v48bem" }], ["path", { d: "M12 15v7", key: "t2xh3l" }], ["path", { d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198", key: "1ymjlu" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]], DK = e("wine-off", FK);
const RK = [["path", { d: "M8 22h8", key: "rmew8v" }], ["path", { d: "M7 10h10", key: "1101jm" }], ["path", { d: "M12 15v7", key: "t2xh3l" }], ["path", { d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z", key: "10ffi3" }]], TK = e("wine", RK);
const UK = [["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }], ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }], ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]], OK = e("workflow", UK);
const GK = [["path", { d: "m19 12-1.5 3", key: "9bcu4o" }], ["path", { d: "M19.63 18.81 22 20", key: "121v98" }], ["path", { d: "M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z", key: "1tij6q" }]], ZK = e("worm", GK);
const WK = [["path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z", key: "1ngwbx" }]], EK = e("wrench", WK);
const XK = [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]], KK = e("x", XK);
const QK = [["path", { d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17", key: "1q2vi4" }], ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }]], JK = e("youtube", QK);
const YK = [["path", { d: "M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317", key: "193nxd" }], ["path", { d: "M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773", key: "27a7lr" }], ["path", { d: "M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643", key: "1e0qe9" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]], eQ = e("zap-off", YK);
const aQ = [["path", { d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z", key: "1xq2db" }]], cQ = e("zap", aQ);
const tQ = [["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }], ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }], ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]], oQ = e("zoom-in", tQ);
const dQ = [["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }], ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]], nQ = e("zoom-out", dQ);
const iQ = Object.freeze(Object.defineProperty({ __proto__: null, AArrowDown: x, AArrowUp: I, ALargeSmall: w, Accessibility: N, Activity: $, AirVent: z, Airplay: A, AlarmClock: U, AlarmClockCheck: j, AlarmClockMinus: P, AlarmClockOff: F, AlarmClockPlus: R, AlarmSmoke: G, Album: W, AlignCenterHorizontal: X, AlignCenterVertical: Q, AlignEndHorizontal: Y, AlignEndVertical: a1, AlignHorizontalDistributeCenter: t1, AlignHorizontalDistributeEnd: d1, AlignHorizontalDistributeStart: h1, AlignHorizontalJustifyCenter: i1, AlignHorizontalJustifyEnd: r1, AlignHorizontalJustifyStart: p1, AlignHorizontalSpaceAround: u1, AlignHorizontalSpaceBetween: v1, AlignStartHorizontal: _1, AlignStartVertical: x1, AlignVerticalDistributeCenter: w1, AlignVerticalDistributeEnd: I1, AlignVerticalDistributeStart: N1, AlignVerticalJustifyCenter: $1, AlignVerticalJustifyEnd: z1, AlignVerticalJustifyStart: A1, AlignVerticalSpaceAround: j1, AlignVerticalSpaceBetween: P1, Ambulance: F1, Ampersand: R1, Ampersands: U1, Amphora: G1, Anchor: W1, Angry: X1, Annoyed: Q1, Antenna: Y1, Anvil: a2, Aperture: t2, AppWindow: h2, AppWindowMac: d2, Apple: i2, Archive: v2, ArchiveRestore: r2, ArchiveX: p2, Armchair: u2, ArrowBigDown: x2, ArrowBigDownDash: _2, ArrowBigLeft: I2, ArrowBigLeftDash: w2, ArrowBigRight: $2, ArrowBigRightDash: N2, ArrowBigUp: A2, ArrowBigUpDash: z2, ArrowDown: de, ArrowDown01: j2, ArrowDown10: P2, ArrowDownAZ: F2, ArrowDownFromLine: U2, ArrowDownLeft: R2, ArrowDownNarrowWide: G2, ArrowDownRight: W2, ArrowDownToDot: Q2, ArrowDownToLine: X2, ArrowDownUp: Y2, ArrowDownWideNarrow: ae, ArrowDownZA: te, ArrowLeft: pe, ArrowLeftFromLine: he, ArrowLeftRight: ie, ArrowLeftToLine: re, ArrowRight: xe, ArrowRightFromLine: ue, ArrowRightLeft: ve, ArrowRightToLine: _e, ArrowUp: We, ArrowUp01: we, ArrowUp10: Ie, ArrowUpAZ: Ne, ArrowUpDown: $e, ArrowUpFromDot: Ae, ArrowUpFromLine: ze, ArrowUpLeft: je, ArrowUpNarrowWide: Pe, ArrowUpRight: Fe, ArrowUpToLine: Re, ArrowUpWideNarrow: Ue, ArrowUpZA: Ge, ArrowsUpFromLine: Xe, Asterisk: Qe, AtSign: Ye, Atom: aa, AudioLines: ta, AudioWaveform: da, Award: ha, Axe: ia, Axis3d: ra, Baby: pa, Backpack: ua, Badge: Qa, BadgeAlert: va, BadgeCent: _a, BadgeCheck: xa, BadgeDollarSign: wa, BadgeEuro: Ia, BadgeIndianRupee: Na, BadgeInfo: za, BadgeJapaneseYen: $a, BadgeMinus: Aa, BadgePercent: ja, BadgePlus: Pa, BadgePoundSterling: Ra, BadgeQuestionMark: Fa, BadgeRussianRuble: Ua, BadgeSwissFranc: Ga, BadgeTurkishLira: Wa, BadgeX: Xa, BaggageClaim: Ya, Balloon: a0, Ban: t0, Banana: d0, Bandage: h0, Banknote: u0, BanknoteArrowDown: i0, BanknoteArrowUp: r0, BanknoteX: p0, Barcode: v0, Barrel: _0, Baseline: x0, Bath: w0, Battery: P0, BatteryCharging: I0, BatteryFull: N0, BatteryLow: $0, BatteryMedium: z0, BatteryPlus: A0, BatteryWarning: j0, Beaker: F0, Bean: U0, BeanOff: R0, Bed: X0, BedDouble: G0, BedSingle: W0, Beef: Q0, Beer: ac, BeerOff: Y0, Bell: uc, BellDot: tc, BellElectric: dc, BellMinus: hc, BellOff: ic, BellPlus: rc, BellRing: pc, BetweenHorizontalEnd: vc, BetweenHorizontalStart: _c, BetweenVerticalEnd: xc, BetweenVerticalStart: wc, BicepsFlexed: Ic, Bike: Nc, Binary: $c, Binoculars: zc, Biohazard: Ac, Bird: jc, Birdhouse: Pc, Bitcoin: Rc, Blend: Fc, Blinds: Uc, Blocks: Gc, Bluetooth: Yc, BluetoothConnected: Wc, BluetoothOff: Xc, BluetoothSearching: Qc, Bold: at, Bolt: tt, Bomb: dt, Bone: ht, Book: no, BookA: it, BookAlert: pt, BookAudio: rt, BookCheck: ut, BookCopy: vt, BookDashed: _t, BookDown: xt, BookHeadphones: wt, BookHeart: It, BookImage: Nt, BookKey: $t, BookLock: zt, BookMarked: At, BookMinus: jt, BookOpen: Rt, BookOpenCheck: Pt, BookOpenText: Ft, BookPlus: Ut, BookSearch: Gt, BookText: Wt, BookType: Xt, BookUp: Qt, BookUp2: Yt, BookUser: ao, BookX: to, Bookmark: Mo, BookmarkCheck: so, BookmarkMinus: yo, BookmarkPlus: ko, BookmarkX: lo, BoomBox: mo, Bot: fo, BotMessageSquare: go, BotOff: Lo, BottleWine: Co, BowArrow: bo, Box: qo, Boxes: So, Braces: Ho, Brackets: Vo, Brain: To, BrainCircuit: Bo, BrainCog: Do, BrickWall: Eo, BrickWallFire: Oo, BrickWallShield: Zo, Briefcase: cd, BriefcaseBusiness: Ko, BriefcaseConveyorBelt: Jo, BriefcaseMedical: ed, BringToFront: od, Brush: sd, BrushCleaning: nd, Bubbles: yd, Bug: Md, BugOff: kd, BugPlay: ld, Building: gd, Building2: md, Bus: fd, BusFront: Ld, Cable: bd, CableCar: Cd, Cake: Sd, CakeSlice: qd, Calculator: Hd, Calendar: wn, Calendar1: Vd, CalendarArrowDown: Bd, CalendarArrowUp: Dd, CalendarCheck: Zd, CalendarCheck2: Td, CalendarClock: Od, CalendarCog: Ed, CalendarDays: Kd, CalendarFold: Jd, CalendarHeart: en, CalendarMinus: on, CalendarMinus2: cn, CalendarOff: nn, CalendarPlus: rn, CalendarPlus2: sn, CalendarRange: pn, CalendarSearch: un, CalendarSync: vn, CalendarX: xn, CalendarX2: _n, Calendars: In, Camera: $n, CameraOff: Nn, Candy: jn, CandyCane: zn, CandyOff: An, Cannabis: Pn, CannabisOff: Fn, Captions: Un, CaptionsOff: Rn, Car: Xn, CarFront: Gn, CarTaxiFront: Wn, Caravan: Qn, CardSim: Yn, Carrot: ah, CaseLower: th, CaseSensitive: dh, CaseUpper: hh, CassetteTape: ih, Cast: rh, Castle: uh, Cat: ph, Cctv: vh, ChartArea: _h, ChartBar: $h, ChartBarBig: xh, ChartBarDecreasing: wh, ChartBarIncreasing: Ih, ChartBarStacked: Nh, ChartCandlestick: zh, ChartColumn: Rh, ChartColumnBig: Ah, ChartColumnDecreasing: jh, ChartColumnIncreasing: Ph, ChartColumnStacked: Fh, ChartGantt: Uh, ChartLine: Gh, ChartNetwork: Wh, ChartNoAxesColumn: Yh, ChartNoAxesColumnDecreasing: Xh, ChartNoAxesColumnIncreasing: Qh, ChartNoAxesCombined: as, ChartNoAxesGantt: ts, ChartPie: ds, ChartScatter: hs, ChartSpline: is, Check: us, CheckCheck: rs, CheckLine: ps, ChefHat: vs, Cherry: _s, ChessBishop: xs, ChessKing: ws, ChessKnight: Is, ChessPawn: Ns, ChessQueen: $s, ChessRook: As, ChevronDown: zs, ChevronFirst: js, ChevronLast: Ps, ChevronLeft: Fs, ChevronRight: Rs, ChevronUp: Us, ChevronsDown: Ws, ChevronsDownUp: Gs, ChevronsLeft: Ys, ChevronsLeftRight: Qs, ChevronsLeftRightEllipsis: Xs, ChevronsRight: ai, ChevronsRightLeft: ti, ChevronsUp: hi, ChevronsUpDown: di, Chromium: ii, Church: ri, Cigarette: ui, CigaretteOff: pi, Circle: Yy, CircleAlert: vi, CircleArrowDown: _i, CircleArrowLeft: xi, CircleArrowOutDownLeft: wi, CircleArrowOutDownRight: Ii, CircleArrowOutUpLeft: Ni, CircleArrowOutUpRight: $i, CircleArrowRight: zi, CircleArrowUp: Ai, CircleCheck: Pi, CircleCheckBig: ji, CircleChevronDown: Fi, CircleChevronLeft: Ri, CircleChevronRight: Ui, CircleChevronUp: Gi, CircleDashed: Wi, CircleDivide: Xi, CircleDollarSign: Qi, CircleDot: ay, CircleDotDashed: Yi, CircleEllipsis: ty, CircleEqual: dy, CircleFadingArrowUp: hy, CircleFadingPlus: iy, CircleGauge: ry, CircleMinus: py, CircleOff: uy, CircleParking: _y, CircleParkingOff: vy, CirclePause: xy, CirclePercent: wy, CirclePile: Iy, CirclePlay: Ny, CirclePlus: $y, CirclePoundSterling: zy, CirclePower: Ay, CircleQuestionMark: jy, CircleSlash: Fy, CircleSlash2: Py, CircleSmall: Ry, CircleStar: Uy, CircleStop: Gy, CircleUser: Xy, CircleUserRound: Wy, CircleX: Qy, CircuitBoard: a4, Citrus: t4, Clapperboard: d4, Clipboard: $4, ClipboardCheck: h4, ClipboardClock: i4, ClipboardCopy: r4, ClipboardList: p4, ClipboardMinus: u4, ClipboardPaste: v4, ClipboardPen: x4, ClipboardPenLine: _4, ClipboardPlus: w4, ClipboardType: I4, ClipboardX: N4, Clock: p5, Clock1: z4, Clock10: A4, Clock11: j4, Clock12: P4, Clock2: F4, Clock3: R4, Clock4: U4, Clock5: G4, Clock6: W4, Clock7: X4, Clock8: Q4, Clock9: Y4, ClockAlert: a5, ClockArrowDown: t5, ClockArrowUp: d5, ClockCheck: h5, ClockFading: i5, ClockPlus: r5, ClosedCaption: u5, Cloud: ar, CloudAlert: v5, CloudBackup: _5, CloudCheck: x5, CloudCog: w5, CloudDownload: I5, CloudDrizzle: N5, CloudFog: $5, CloudHail: z5, CloudLightning: A5, CloudMoon: P5, CloudMoonRain: j5, CloudOff: F5, CloudRain: U5, CloudRainWind: R5, CloudSnow: G5, CloudSun: X5, CloudSunRain: W5, CloudSync: Q5, CloudUpload: Y5, Cloudy: tr, Clover: dr, Club: hr, Code: rr, CodeXml: ir, Codepen: pr, Codesandbox: ur, Coffee: vr, Cog: _r, Coins: xr, Columns2: wr, Columns3: Nr, Columns3Cog: Ir, Columns4: $r, Combine: zr, Command: Ar, Compass: jr, Component: Pr, Computer: Fr, ConciergeBell: Rr, Cone: Ur, Construction: Gr, Contact: Xr, ContactRound: Wr, Container: Qr, Contrast: Yr, Cookie: ak, CookingPot: tk, Copy: uk, CopyCheck: dk, CopyMinus: hk, CopyPlus: ik, CopySlash: rk, CopyX: pk, Copyleft: vk, Copyright: _k, CornerDownLeft: xk, CornerDownRight: wk, CornerLeftDown: Ik, CornerLeftUp: Nk, CornerRightDown: $k, CornerRightUp: zk, CornerUpLeft: Ak, CornerUpRight: jk, Cpu: Pk, CreativeCommons: Fk, CreditCard: Rk, Croissant: Uk, Crop: Gk, Cross: Wk, Crosshair: Xk, Crown: Qk, Cuboid: ap, CupSoda: Yk, Currency: tp, Cylinder: dp, Dam: hp, Database: pp, DatabaseBackup: ip, DatabaseZap: rp, DecimalsArrowLeft: up, DecimalsArrowRight: vp, Delete: _p, Dessert: xp, Diameter: wp, Diamond: zp, DiamondMinus: Ip, DiamondPercent: Np, DiamondPlus: $p, Dice1: Ap, Dice2: jp, Dice3: Pp, Dice4: Fp, Dice5: Rp, Dice6: Up, Dices: Gp, Diff: Wp, Disc: a3, Disc2: Xp, Disc3: Qp, DiscAlbum: Yp, Divide: t3, Dna: h3, DnaOff: d3, Dock: i3, Dog: r3, DollarSign: p3, Donut: u3, DoorClosed: _3, DoorClosedLocked: v3, DoorOpen: x3, Dot: w3, Download: I3, DraftingCompass: N3, Drama: $3, Dribbble: z3, Drill: A3, Drone: j3, Droplet: F3, DropletOff: P3, Droplets: R3, Drum: U3, Drumstick: G3, Dumbbell: W3, Ear: Q3, EarOff: X3, Earth: a8, EarthLock: Y3, Eclipse: t8, Egg: i8, EggFried: d8, EggOff: h8, Ellipsis: p8, EllipsisVertical: r8, Equal: _8, EqualApproximately: u8, EqualNot: v8, Eraser: x8, EthernetPort: w8, Euro: I8, EvCharger: N8, Expand: $8, ExternalLink: z8, Eye: P8, EyeClosed: A8, EyeOff: j8, Facebook: F8, Factory: R8, Fan: U8, FastForward: G8, Feather: W8, Fence: X8, FerrisWheel: Q8, Figma: Y8, File: a7, FileArchive: a6, FileAxis3d: t6, FileBadge: d6, FileBox: h6, FileBraces: r6, FileBracesCorner: i6, FileChartColumn: u6, FileChartColumnIncreasing: p6, FileChartLine: v6, FileChartPie: x6, FileCheck: w6, FileCheckCorner: _6, FileClock: I6, FileCode: $6, FileCodeCorner: N6, FileCog: z6, FileDiff: A6, FileDigit: j6, FileDown: P6, FileExclamationPoint: F6, FileHeadphone: R6, FileHeart: U6, FileImage: G6, FileInput: W6, FileKey: Q6, FileLock: X6, FileMinus: al, FileMinusCorner: Y6, FileMusic: tl, FileOutput: dl, FilePen: il, FilePenLine: hl, FilePlay: rl, FilePlus: ul, FilePlusCorner: pl, FileQuestionMark: vl, FileScan: _l, FileSearch: wl, FileSearchCorner: xl, FileSignal: Il, FileSliders: Nl, FileSpreadsheet: $l, FileStack: zl, FileSymlink: Al, FileTerminal: jl, FileText: Pl, FileType: Rl, FileTypeCorner: Fl, FileUp: Gl, FileUser: Ul, FileVideoCamera: Wl, FileVolume: Xl, FileX: Yl, FileXCorner: Ql, Files: t7, Film: d7, FingerprintPattern: h7, FireExtinguisher: i7, Fish: u7, FishOff: r7, FishSymbol: p7, FishingHook: v7, Flag: I7, FlagOff: _7, FlagTriangleLeft: x7, FlagTriangleRight: w7, Flame: $7, FlameKindling: N7, Flashlight: A7, FlashlightOff: z7, FlaskConical: j7, FlaskConicalOff: P7, FlaskRound: F7, FlipHorizontal: U7, FlipHorizontal2: R7, FlipVertical: W7, FlipVertical2: G7, Flower: Q7, Flower2: X7, Focus: Y7, FoldHorizontal: a9, FoldVertical: t9, Folder: iu, FolderArchive: d9, FolderCheck: h9, FolderClock: i9, FolderClosed: r9, FolderCode: p9, FolderCog: u9, FolderDot: v9, FolderDown: _9, FolderGit: w9, FolderGit2: x9, FolderHeart: I9, FolderInput: N9, FolderKanban: $9, FolderKey: z9, FolderLock: A9, FolderMinus: j9, FolderOpen: F9, FolderOpenDot: P9, FolderOutput: R9, FolderPen: U9, FolderPlus: G9, FolderRoot: W9, FolderSearch: Q9, FolderSearch2: X9, FolderSymlink: Y9, FolderSync: au, FolderTree: tu, FolderUp: du, FolderX: hu, Folders: ru, Footprints: pu, Forklift: uu, Form: vu, Forward: _u, Frame: xu, Framer: wu, Frown: Iu, Fuel: $u, Fullscreen: Nu, Funnel: ju, FunnelPlus: zu, FunnelX: Au, GalleryHorizontal: Fu, GalleryHorizontalEnd: Pu, GalleryThumbnails: Ru, GalleryVertical: Gu, GalleryVerticalEnd: Uu, Gamepad: Qu, Gamepad2: Wu, GamepadDirectional: Xu, Gauge: Yu, Gavel: aM, Gem: tM, GeorgianLari: dM, Ghost: hM, Gift: iM, GitBranch: uM, GitBranchMinus: rM, GitBranchPlus: pM, GitCommitHorizontal: vM, GitCommitVertical: _M, GitCompare: wM, GitCompareArrows: xM, GitFork: IM, GitGraph: NM, GitMerge: $M, GitPullRequest: RM, GitPullRequestArrow: zM, GitPullRequestClosed: AM, GitPullRequestCreate: jM, GitPullRequestCreateArrow: PM, GitPullRequestDraft: FM, Github: UM, Gitlab: GM, GlassWater: WM, Glasses: XM, Globe: YM, GlobeLock: QM, Goal: av, Gpu: tv, GraduationCap: dv, Grape: hv, Grid2x2: uv, Grid2x2Check: iv, Grid2x2Plus: rv, Grid2x2X: pv, Grid3x2: vv, Grid3x3: _v, Grip: Iv, GripHorizontal: xv, GripVertical: wv, Group: Nv, Guitar: $v, Ham: zv, Hamburger: Av, Hammer: jv, Hand: Qv, HandCoins: Pv, HandFist: Fv, HandGrab: Rv, HandHeart: Uv, HandHelping: Gv, HandMetal: Wv, HandPlatter: Xv, Handbag: Yv, Handshake: am, HardDrive: hm, HardDriveDownload: tm, HardDriveUpload: dm, HardHat: im, Hash: rm, HatGlasses: pm, Haze: um, Hd: vm, HdmiPort: _m, Heading: Am, Heading1: xm, Heading2: wm, Heading3: Im, Heading4: Nm, Heading5: $m, Heading6: zm, HeadphoneOff: jm, Headphones: Pm, Headset: Fm, Heart: Ym, HeartCrack: Rm, HeartHandshake: Um, HeartMinus: Gm, HeartOff: Wm, HeartPlus: Xm, HeartPulse: Qm, Heater: a_, Helicopter: d_, Hexagon: t_, Highlighter: h_, History: i_, Hop: p_, HopOff: r_, Hospital: u_, Hotel: v_, Hourglass: __, House: $_, HouseHeart: w_, HousePlug: x_, HousePlus: I_, HouseWifi: N_, IceCreamBowl: z_, IceCreamCone: A_, IdCard: P_, IdCardLanyard: j_, Image: Y_, ImageDown: R_, ImageMinus: F_, ImageOff: U_, ImagePlay: G_, ImagePlus: W_, ImageUp: X_, ImageUpscale: Q_, Images: ag, Import: tg, Inbox: dg, IndianRupee: hg, Infinity: ig, Info: rg, InspectionPanel: pg, Instagram: ug, Italic: vg, IterationCcw: _g, IterationCw: xg, JapaneseYen: wg, Joystick: Ig, Kanban: Ng, Kayak: $g, Key: jg, KeyRound: zg, KeySquare: Ag, Keyboard: Rg, KeyboardMusic: Pg, KeyboardOff: Fg, Lamp: ax, LampCeiling: Ug, LampDesk: Gg, LampFloor: Wg, LampWallDown: Xg, LampWallUp: Qg, LandPlot: Yg, Landmark: tx, Languages: dx, Laptop: rx, LaptopMinimal: ix, LaptopMinimalCheck: hx, Lasso: ux, LassoSelect: px, Laugh: vx, Layers: wx, Layers2: _x, LayersPlus: xx, LayoutDashboard: Ix, LayoutGrid: Nx, LayoutList: $x, LayoutPanelLeft: zx, LayoutPanelTop: Ax, LayoutTemplate: jx, Leaf: Px, LeafyGreen: Fx, Lectern: Rx, Library: Gx, LibraryBig: Ux, LifeBuoy: Wx, Ligature: Xx, Lightbulb: Yx, LightbulbOff: Qx, LineSquiggle: aL, Link: hL, Link2: dL, Link2Off: tL, Linkedin: iL, List: QL, ListCheck: rL, ListChecks: pL, ListChevronsDownUp: uL, ListChevronsUpDown: vL, ListCollapse: _L, ListEnd: xL, ListFilter: IL, ListFilterPlus: wL, ListIndentDecrease: NL, ListIndentIncrease: zL, ListMinus: $L, ListMusic: AL, ListOrdered: jL, ListPlus: PL, ListRestart: FL, ListStart: RL, ListTodo: UL, ListTree: GL, ListVideo: WL, ListX: XL, Loader: tw, LoaderCircle: YL, LoaderPinwheel: aw, Locate: iw, LocateFixed: hw, LocateOff: dw, Lock: vw, LockKeyhole: pw, LockKeyholeOpen: rw, LockOpen: uw, LogIn: _w, LogOut: xw, Logs: ww, Lollipop: Iw, Luggage: Nw, Magnet: zw, Mail: Ww, MailCheck: $w, MailMinus: Aw, MailOpen: jw, MailPlus: Pw, MailQuestionMark: Fw, MailSearch: Rw, MailWarning: Uw, MailX: Gw, Mailbox: Xw, Mails: Qw, Map: qf, MapMinus: Yw, MapPin: ff, MapPinCheck: tf, MapPinCheckInside: af, MapPinHouse: df, MapPinMinus: yf, MapPinMinusInside: hf, MapPinOff: kf, MapPinPen: lf, MapPinPlus: mf, MapPinPlusInside: Mf, MapPinX: Lf, MapPinXInside: gf, MapPinned: Cf, MapPlus: bf, Mars: Hf, MarsStroke: Sf, Martini: Vf, Maximize: Df, Maximize2: Bf, Medal: Tf, Megaphone: Zf, MegaphoneOff: Of, Meh: Kf, MemoryStick: Ef, Menu: Jf, Merge: eI, MessageCircle: LI, MessageCircleCode: cI, MessageCircleDashed: oI, MessageCircleHeart: nI, MessageCircleMore: sI, MessageCircleOff: yI, MessageCirclePlus: kI, MessageCircleQuestionMark: lI, MessageCircleReply: MI, MessageCircleWarning: mI, MessageCircleX: gI, MessageSquare: eC, MessageSquareCode: fI, MessageSquareDashed: CI, MessageSquareDiff: bI, MessageSquareDot: qI, MessageSquareHeart: SI, MessageSquareLock: HI, MessageSquareMore: VI, MessageSquareOff: BI, MessageSquarePlus: DI, MessageSquareQuote: TI, MessageSquareReply: OI, MessageSquareShare: ZI, MessageSquareText: EI, MessageSquareWarning: KI, MessageSquareX: JI, MessagesSquare: cC, Mic: sC, MicOff: oC, MicVocal: nC, Microchip: yC, Microscope: kC, Microwave: lC, Milestone: MC, Milk: gC, MilkOff: mC, Minimize: fC, Minimize2: LC, Minus: CC, Monitor: eN, MonitorCheck: bC, MonitorCloud: qC, MonitorCog: SC, MonitorDot: HC, MonitorDown: VC, MonitorOff: BC, MonitorPause: DC, MonitorPlay: TC, MonitorSmartphone: OC, MonitorSpeaker: ZC, MonitorStop: EC, MonitorUp: KC, MonitorX: JC, Moon: oN, MoonStar: cN, Motorbike: nN, Mountain: yN, MountainSnow: sN, Mouse: fN, MouseOff: lN, MousePointer: LN, MousePointer2: MN, MousePointer2Off: kN, MousePointerBan: mN, MousePointerClick: gN, Move: JN, Move3d: CN, MoveDiagonal: qN, MoveDiagonal2: bN, MoveDown: VN, MoveDownLeft: SN, MoveDownRight: HN, MoveHorizontal: BN, MoveLeft: DN, MoveRight: TN, MoveUp: EN, MoveUpLeft: ON, MoveUpRight: ZN, MoveVertical: KN, Music: nb, Music2: eb, Music3: cb, Music4: ob, Navigation: lb, Navigation2: yb, Navigation2Off: sb, NavigationOff: kb, Network: Mb, Newspaper: gb, Nfc: mb, NonBinary: fb, Notebook: Sb, NotebookPen: Lb, NotebookTabs: Cb, NotebookText: bb, NotepadText: Hb, NotepadTextDashed: qb, Nut: Bb, NutOff: Vb, Octagon: Eb, OctagonAlert: Db, OctagonMinus: Tb, OctagonPause: Ob, OctagonX: Zb, Omega: Kb, Option: Jb, Orbit: e$, Origami: o$, Package: m$, Package2: c$, PackageCheck: n$, PackageMinus: k$, PackageOpen: s$, PackagePlus: y$, PackageSearch: l$, PackageX: M$, PaintBucket: g$, PaintRoller: L$, Paintbrush: C$, PaintbrushVertical: f$, Palette: b$, Panda: q$, PanelBottom: B$, PanelBottomClose: S$, PanelBottomDashed: H$, PanelBottomOpen: V$, PanelLeft: E$, PanelLeftClose: D$, PanelLeftDashed: T$, PanelLeftOpen: O$, PanelLeftRightDashed: Z$, PanelRight: cq, PanelRightClose: K$, PanelRightDashed: J$, PanelRightOpen: eq, PanelTop: yq, PanelTopBottomDashed: oq, PanelTopClose: nq, PanelTopDashed: sq, PanelTopOpen: kq, PanelsLeftBottom: lq, PanelsRightBottom: Mq, PanelsTopLeft: mq, Paperclip: gq, Parentheses: Lq, ParkingMeter: fq, PartyPopper: Cq, Pause: bq, PawPrint: qq, PcCase: Sq, Pen: Dq, PenLine: Hq, PenOff: Vq, PenTool: Bq, Pencil: Eq, PencilLine: Tq, PencilOff: Oq, PencilRuler: Zq, Pentagon: Kq, Percent: Jq, PersonStanding: ez, PhilippinePeso: cz, Phone: Mz, PhoneCall: oz, PhoneForwarded: nz, PhoneIncoming: sz, PhoneMissed: yz, PhoneOff: kz, PhoneOutgoing: lz, Pi: mz, Piano: Lz, Pickaxe: gz, PictureInPicture: Cz, PictureInPicture2: fz, PiggyBank: bz, Pilcrow: Hz, PilcrowLeft: qz, PilcrowRight: Sz, Pill: Bz, PillBottle: Vz, Pin: Tz, PinOff: Dz, Pipette: Oz, Pizza: Zz, Plane: Jz, PlaneLanding: Ez, PlaneTakeoff: Kz, Play: eS, Plug: nS, Plug2: cS, PlugZap: oS, Plus: sS, Pocket: kS, PocketKnife: yS, Podcast: lS, Pointer: MS, PointerOff: mS, Popcorn: LS, Popsicle: gS, PoundSterling: fS, Power: bS, PowerOff: CS, Presentation: qS, Printer: HS, PrinterCheck: SS, Projector: VS, Proportions: BS, Puzzle: DS, Pyramid: TS, QrCode: OS, Quote: ZS, Rabbit: ES, Radar: KS, Radiation: JS, Radical: eA, Radio: nA, RadioReceiver: cA, RadioTower: oA, Radius: sA, RailSymbol: yA, Rainbow: kA, Rat: lA, Ratio: MA, Receipt: BA, ReceiptCent: mA, ReceiptEuro: gA, ReceiptIndianRupee: LA, ReceiptJapaneseYen: fA, ReceiptPoundSterling: CA, ReceiptRussianRuble: bA, ReceiptSwissFranc: qA, ReceiptText: SA, ReceiptTurkishLira: HA, RectangleCircle: VA, RectangleEllipsis: DA, RectangleGoggles: TA, RectangleHorizontal: OA, RectangleVertical: ZA, Recycle: EA, Redo: eH, Redo2: KA, RedoDot: JA, RefreshCcw: oH, RefreshCcwDot: cH, RefreshCw: sH, RefreshCwOff: nH, Refrigerator: yH, Regex: kH, RemoveFormatting: lH, Repeat: gH, Repeat1: MH, Repeat2: mH, Replace: fH, ReplaceAll: LH, Reply: bH, ReplyAll: CH, Rewind: qH, Ribbon: SH, Rocket: HH, RockingChair: VH, RollerCoaster: BH, Rose: DH, Rotate3d: TH, RotateCcw: EH, RotateCcwKey: OH, RotateCcwSquare: ZH, RotateCw: JH, RotateCwSquare: KH, Route: cj, RouteOff: ej, Router: oj, Rows2: nj, Rows3: sj, Rows4: yj, Rss: kj, Ruler: Mj, RulerDimensionLine: lj, RussianRuble: mj, Sailboat: gj, Salad: Lj, Sandwich: fj, Satellite: bj, SatelliteDish: Cj, SaudiRiyal: qj, Save: Vj, SaveAll: Sj, SaveOff: Hj, Scale: Dj, Scale3d: Bj, Scaling: Tj, Scan: nV, ScanBarcode: Oj, ScanEye: Zj, ScanFace: Ej, ScanHeart: Kj, ScanLine: Jj, ScanQrCode: eV, ScanSearch: cV, ScanText: oV, School: sV, Scissors: kV, ScissorsLineDashed: yV, Scooter: lV, ScreenShare: mV, ScreenShareOff: MV, Scroll: LV, ScrollText: gV, Search: VV, SearchAlert: fV, SearchCheck: CV, SearchCode: bV, SearchSlash: qV, SearchX: SV, Section: HV, Send: TV, SendHorizontal: BV, SendToBack: DV, SeparatorHorizontal: OV, SeparatorVertical: ZV, Server: eP, ServerCog: EV, ServerCrash: KV, ServerOff: JV, Settings: cP, Settings2: oP, Shapes: nP, Share: yP, Share2: sP, Sheet: kP, Shell: lP, Shield: BP, ShieldAlert: MP, ShieldBan: mP, ShieldCheck: gP, ShieldEllipsis: LP, ShieldHalf: fP, ShieldMinus: CP, ShieldOff: bP, ShieldPlus: qP, ShieldQuestionMark: SP, ShieldUser: HP, ShieldX: VP, Ship: TP, ShipWheel: DP, Shirt: OP, ShoppingBag: ZP, ShoppingBasket: EP, ShoppingCart: KP, Shovel: JP, ShowerHead: eB, Shredder: oB, Shrimp: cB, Shrink: nB, Shrub: sB, Shuffle: yB, Sigma: kB, Signal: gB, SignalHigh: lB, SignalLow: MB, SignalMedium: mB, SignalZero: LB, Signature: fB, Signpost: bB, SignpostBig: CB, Siren: qB, SkipBack: SB, SkipForward: HB, Skull: VB, Slack: BB, Slash: DB, Slice: TB, SlidersHorizontal: OB, SlidersVertical: ZB, Smartphone: JB, SmartphoneCharging: EB, SmartphoneNfc: KB, Smile: cF, SmilePlus: eF, Snail: oF, Snowflake: sF, SoapDispenserDroplet: nF, Sofa: yF, SolarPanel: kF, Soup: lF, Space: MF, Spade: mF, Sparkle: gF, Sparkles: LF, Speaker: fF, Speech: CF, SpellCheck: qF, SpellCheck2: bF, Spline: HF, SplinePointer: SF, Split: VF, Spool: BF, Spotlight: TF, SprayCan: DF, Sprout: OF, Square: kT, SquareActivity: ZF, SquareArrowDown: JF, SquareArrowDownLeft: EF, SquareArrowDownRight: KF, SquareArrowLeft: eD, SquareArrowOutDownLeft: cD, SquareArrowOutDownRight: oD, SquareArrowOutUpLeft: nD, SquareArrowOutUpRight: sD, SquareArrowRight: yD, SquareArrowUp: MD, SquareArrowUpLeft: kD, SquareArrowUpRight: lD, SquareAsterisk: mD, SquareBottomDashedScissors: gD, SquareChartGantt: LD, SquareCheck: CD, SquareCheckBig: fD, SquareChevronDown: bD, SquareChevronLeft: qD, SquareChevronRight: SD, SquareChevronUp: HD, SquareCode: BD, SquareDashed: ED, SquareDashedBottom: DD, SquareDashedBottomCode: VD, SquareDashedKanban: TD, SquareDashedMousePointer: OD, SquareDashedTopSolid: ZD, SquareDivide: KD, SquareDot: JD, SquareEqual: eR, SquareFunction: cR, SquareKanban: oR, SquareLibrary: nR, SquareM: yR, SquareMenu: sR, SquareMinus: kR, SquareMousePointer: lR, SquareParking: mR, SquareParkingOff: MR, SquarePause: gR, SquarePen: LR, SquarePercent: fR, SquarePi: bR, SquarePilcrow: CR, SquarePlay: qR, SquarePlus: SR, SquarePower: HR, SquareRadical: VR, SquareRoundCorner: BR, SquareScissors: DR, SquareSigma: TR, SquareSlash: OR, SquareSplitHorizontal: ZR, SquareSplitVertical: ER, SquareSquare: KR, SquareStack: JR, SquareStar: eT, SquareStop: nT, SquareTerminal: cT, SquareUser: sT, SquareUserRound: oT, SquareX: yT, SquaresExclude: lT, SquaresIntersect: MT, SquaresSubtract: mT, SquaresUnite: LT, Squircle: fT, SquircleDashed: gT, Squirrel: CT, Stamp: bT, Star: HT, StarHalf: qT, StarOff: ST, StepBack: VT, StepForward: BT, Stethoscope: TT, Sticker: DT, StickyNote: OT, Stone: ZT, Store: ET, StretchHorizontal: KT, StretchVertical: JT, Strikethrough: eU, Subscript: cU, Sun: kU, SunDim: oU, SunMedium: nU, SunMoon: sU, SunSnow: yU, Sunrise: lU, Sunset: MU, Superscript: mU, SwatchBook: LU, SwissFranc: gU, SwitchCamera: fU, Sword: CU, Swords: bU, Syringe: qU, Table: ZU, Table2: SU, TableCellsMerge: HU, TableCellsSplit: VU, TableColumnsSplit: BU, TableOfContents: DU, TableProperties: TU, TableRowsSplit: OU, Tablet: KU, TabletSmartphone: EU, Tablets: JU, Tag: eO, Tags: cO, Tally1: oO, Tally2: nO, Tally3: sO, Tally4: yO, Tally5: kO, Tangent: lO, Target: MO, Telescope: gO, Tent: LO, TentTree: mO, Terminal: fO, TestTube: bO, TestTubeDiagonal: CO, TestTubes: qO, TextAlignCenter: SO, TextAlignEnd: HO, TextAlignJustify: VO, TextAlignStart: BO, TextCursor: TO, TextCursorInput: DO, TextInitial: OO, TextQuote: ZO, TextSearch: EO, TextSelect: KO, TextWrap: JO, Theater: eG, Thermometer: nG, ThermometerSnowflake: cG, ThermometerSun: oG, ThumbsDown: sG, ThumbsUp: yG, Ticket: fG, TicketCheck: kG, TicketMinus: lG, TicketPercent: MG, TicketPlus: mG, TicketSlash: gG, TicketX: LG, Tickets: bG, TicketsPlane: CG, Timer: HG, TimerOff: qG, TimerReset: SG, ToggleLeft: VG, ToggleRight: BG, Toilet: DG, ToolCase: TG, Toolbox: OG, Tornado: ZG, Torus: EG, Touchpad: JG, TouchpadOff: KG, TowerControl: eZ, ToyBrick: cZ, Tractor: oZ, TrafficCone: nZ, TrainFront: yZ, TrainFrontTunnel: sZ, TrainTrack: kZ, TramFront: lZ, Transgender: MZ, Trash: gZ, Trash2: mZ, TreeDeciduous: LZ, TreePalm: fZ, TreePine: CZ, Trees: bZ, Trello: qZ, TrendingDown: SZ, TrendingUp: VZ, TrendingUpDown: HZ, Triangle: OZ, TriangleAlert: BZ, TriangleDashed: DZ, TriangleRight: TZ, Trophy: ZZ, Truck: KZ, TruckElectric: EZ, TurkishLira: JZ, Turntable: eW, Turtle: cW, Tv: sW, TvMinimal: nW, TvMinimalPlay: oW, Twitch: yW, Twitter: kW, Type: MW, TypeOutline: lW, Umbrella: gW, UmbrellaOff: mW, Underline: LW, Undo: bW, Undo2: fW, UndoDot: CW, UnfoldHorizontal: qW, UnfoldVertical: SW, Ungroup: HW, University: VW, Unlink: DW, Unlink2: BW, Unplug: TW, Upload: OW, Usb: ZW, User: bE, UserCheck: EW, UserCog: KW, UserLock: eE, UserMinus: JW, UserPen: cE, UserPlus: oE, UserRound: gE, UserRoundCheck: nE, UserRoundCog: sE, UserRoundMinus: yE, UserRoundPen: kE, UserRoundPlus: lE, UserRoundSearch: ME, UserRoundX: mE, UserSearch: LE, UserStar: fE, UserX: CE, Users: SE, UsersRound: qE, Utensils: VE, UtensilsCrossed: HE, UtilityPole: BE, Van: DE, Variable: TE, Vault: OE, VectorSquare: ZE, Vegan: EE, VenetianMask: KE, Venus: eX, VenusAndMars: JE, Vibrate: oX, VibrateOff: cX, Video: sX, VideoOff: nX, Videotape: yX, View: kX, Voicemail: lX, Volleyball: MX, Volume: CX, Volume1: mX, Volume2: LX, VolumeOff: gX, VolumeX: fX, Vote: bX, Wallet: HX, WalletCards: qX, WalletMinimal: SX, Wallpaper: VX, Wand: DX, WandSparkles: BX, Warehouse: TX, WashingMachine: OX, Watch: ZX, Waves: eK, WavesArrowDown: EX, WavesArrowUp: KX, WavesLadder: JX, Waypoints: cK, Webcam: oK, Webhook: sK, WebhookOff: nK, Weight: kK, WeightTilde: yK, Wheat: MK, WheatOff: lK, WholeWord: mK, Wifi: HK, WifiCog: gK, WifiHigh: LK, WifiLow: fK, WifiOff: CK, WifiPen: bK, WifiSync: qK, WifiZero: SK, Wind: BK, WindArrowDown: VK, Wine: TK, WineOff: DK, Workflow: OK, Worm: ZK, Wrench: EK, X: KK, Youtube: JK, Zap: cQ, ZapOff: eQ, ZoomIn: oQ, ZoomOut: nQ }, Symbol.toStringTag, { value: "Module" }));
export {
  x as AArrowDown,
  x as AArrowDownIcon,
  I as AArrowUp,
  I as AArrowUpIcon,
  w as ALargeSmall,
  w as ALargeSmallIcon,
  N as Accessibility,
  N as AccessibilityIcon,
  $ as Activity,
  $ as ActivityIcon,
  ZF as ActivitySquare,
  ZF as ActivitySquareIcon,
  z as AirVent,
  z as AirVentIcon,
  A as Airplay,
  A as AirplayIcon,
  j as AlarmCheck,
  j as AlarmCheckIcon,
  U as AlarmClock,
  j as AlarmClockCheck,
  j as AlarmClockCheckIcon,
  U as AlarmClockIcon,
  P as AlarmClockMinus,
  P as AlarmClockMinusIcon,
  F as AlarmClockOff,
  F as AlarmClockOffIcon,
  R as AlarmClockPlus,
  R as AlarmClockPlusIcon,
  P as AlarmMinus,
  P as AlarmMinusIcon,
  R as AlarmPlus,
  R as AlarmPlusIcon,
  G as AlarmSmoke,
  G as AlarmSmokeIcon,
  W as Album,
  W as AlbumIcon,
  vi as AlertCircle,
  vi as AlertCircleIcon,
  Db as AlertOctagon,
  Db as AlertOctagonIcon,
  BZ as AlertTriangle,
  BZ as AlertTriangleIcon,
  SO as AlignCenter,
  X as AlignCenterHorizontal,
  X as AlignCenterHorizontalIcon,
  SO as AlignCenterIcon,
  Q as AlignCenterVertical,
  Q as AlignCenterVerticalIcon,
  Y as AlignEndHorizontal,
  Y as AlignEndHorizontalIcon,
  a1 as AlignEndVertical,
  a1 as AlignEndVerticalIcon,
  t1 as AlignHorizontalDistributeCenter,
  t1 as AlignHorizontalDistributeCenterIcon,
  d1 as AlignHorizontalDistributeEnd,
  d1 as AlignHorizontalDistributeEndIcon,
  h1 as AlignHorizontalDistributeStart,
  h1 as AlignHorizontalDistributeStartIcon,
  i1 as AlignHorizontalJustifyCenter,
  i1 as AlignHorizontalJustifyCenterIcon,
  r1 as AlignHorizontalJustifyEnd,
  r1 as AlignHorizontalJustifyEndIcon,
  p1 as AlignHorizontalJustifyStart,
  p1 as AlignHorizontalJustifyStartIcon,
  u1 as AlignHorizontalSpaceAround,
  u1 as AlignHorizontalSpaceAroundIcon,
  v1 as AlignHorizontalSpaceBetween,
  v1 as AlignHorizontalSpaceBetweenIcon,
  VO as AlignJustify,
  VO as AlignJustifyIcon,
  BO as AlignLeft,
  BO as AlignLeftIcon,
  HO as AlignRight,
  HO as AlignRightIcon,
  _1 as AlignStartHorizontal,
  _1 as AlignStartHorizontalIcon,
  x1 as AlignStartVertical,
  x1 as AlignStartVerticalIcon,
  w1 as AlignVerticalDistributeCenter,
  w1 as AlignVerticalDistributeCenterIcon,
  I1 as AlignVerticalDistributeEnd,
  I1 as AlignVerticalDistributeEndIcon,
  N1 as AlignVerticalDistributeStart,
  N1 as AlignVerticalDistributeStartIcon,
  $1 as AlignVerticalJustifyCenter,
  $1 as AlignVerticalJustifyCenterIcon,
  z1 as AlignVerticalJustifyEnd,
  z1 as AlignVerticalJustifyEndIcon,
  A1 as AlignVerticalJustifyStart,
  A1 as AlignVerticalJustifyStartIcon,
  j1 as AlignVerticalSpaceAround,
  j1 as AlignVerticalSpaceAroundIcon,
  P1 as AlignVerticalSpaceBetween,
  P1 as AlignVerticalSpaceBetweenIcon,
  F1 as Ambulance,
  F1 as AmbulanceIcon,
  R1 as Ampersand,
  R1 as AmpersandIcon,
  U1 as Ampersands,
  U1 as AmpersandsIcon,
  G1 as Amphora,
  G1 as AmphoraIcon,
  W1 as Anchor,
  W1 as AnchorIcon,
  X1 as Angry,
  X1 as AngryIcon,
  Q1 as Annoyed,
  Q1 as AnnoyedIcon,
  Y1 as Antenna,
  Y1 as AntennaIcon,
  a2 as Anvil,
  a2 as AnvilIcon,
  t2 as Aperture,
  t2 as ApertureIcon,
  h2 as AppWindow,
  h2 as AppWindowIcon,
  d2 as AppWindowMac,
  d2 as AppWindowMacIcon,
  i2 as Apple,
  i2 as AppleIcon,
  v2 as Archive,
  v2 as ArchiveIcon,
  r2 as ArchiveRestore,
  r2 as ArchiveRestoreIcon,
  p2 as ArchiveX,
  p2 as ArchiveXIcon,
  _h as AreaChart,
  _h as AreaChartIcon,
  u2 as Armchair,
  u2 as ArmchairIcon,
  x2 as ArrowBigDown,
  _2 as ArrowBigDownDash,
  _2 as ArrowBigDownDashIcon,
  x2 as ArrowBigDownIcon,
  I2 as ArrowBigLeft,
  w2 as ArrowBigLeftDash,
  w2 as ArrowBigLeftDashIcon,
  I2 as ArrowBigLeftIcon,
  $2 as ArrowBigRight,
  N2 as ArrowBigRightDash,
  N2 as ArrowBigRightDashIcon,
  $2 as ArrowBigRightIcon,
  A2 as ArrowBigUp,
  z2 as ArrowBigUpDash,
  z2 as ArrowBigUpDashIcon,
  A2 as ArrowBigUpIcon,
  de as ArrowDown,
  j2 as ArrowDown01,
  j2 as ArrowDown01Icon,
  P2 as ArrowDown10,
  P2 as ArrowDown10Icon,
  F2 as ArrowDownAZ,
  F2 as ArrowDownAZIcon,
  F2 as ArrowDownAz,
  F2 as ArrowDownAzIcon,
  _i as ArrowDownCircle,
  _i as ArrowDownCircleIcon,
  U2 as ArrowDownFromLine,
  U2 as ArrowDownFromLineIcon,
  de as ArrowDownIcon,
  R2 as ArrowDownLeft,
  wi as ArrowDownLeftFromCircle,
  wi as ArrowDownLeftFromCircleIcon,
  cD as ArrowDownLeftFromSquare,
  cD as ArrowDownLeftFromSquareIcon,
  R2 as ArrowDownLeftIcon,
  EF as ArrowDownLeftSquare,
  EF as ArrowDownLeftSquareIcon,
  G2 as ArrowDownNarrowWide,
  G2 as ArrowDownNarrowWideIcon,
  W2 as ArrowDownRight,
  Ii as ArrowDownRightFromCircle,
  Ii as ArrowDownRightFromCircleIcon,
  oD as ArrowDownRightFromSquare,
  oD as ArrowDownRightFromSquareIcon,
  W2 as ArrowDownRightIcon,
  KF as ArrowDownRightSquare,
  KF as ArrowDownRightSquareIcon,
  JF as ArrowDownSquare,
  JF as ArrowDownSquareIcon,
  Q2 as ArrowDownToDot,
  Q2 as ArrowDownToDotIcon,
  X2 as ArrowDownToLine,
  X2 as ArrowDownToLineIcon,
  Y2 as ArrowDownUp,
  Y2 as ArrowDownUpIcon,
  ae as ArrowDownWideNarrow,
  ae as ArrowDownWideNarrowIcon,
  te as ArrowDownZA,
  te as ArrowDownZAIcon,
  te as ArrowDownZa,
  te as ArrowDownZaIcon,
  pe as ArrowLeft,
  xi as ArrowLeftCircle,
  xi as ArrowLeftCircleIcon,
  he as ArrowLeftFromLine,
  he as ArrowLeftFromLineIcon,
  pe as ArrowLeftIcon,
  ie as ArrowLeftRight,
  ie as ArrowLeftRightIcon,
  eD as ArrowLeftSquare,
  eD as ArrowLeftSquareIcon,
  re as ArrowLeftToLine,
  re as ArrowLeftToLineIcon,
  xe as ArrowRight,
  zi as ArrowRightCircle,
  zi as ArrowRightCircleIcon,
  ue as ArrowRightFromLine,
  ue as ArrowRightFromLineIcon,
  xe as ArrowRightIcon,
  ve as ArrowRightLeft,
  ve as ArrowRightLeftIcon,
  yD as ArrowRightSquare,
  yD as ArrowRightSquareIcon,
  _e as ArrowRightToLine,
  _e as ArrowRightToLineIcon,
  We as ArrowUp,
  we as ArrowUp01,
  we as ArrowUp01Icon,
  Ie as ArrowUp10,
  Ie as ArrowUp10Icon,
  Ne as ArrowUpAZ,
  Ne as ArrowUpAZIcon,
  Ne as ArrowUpAz,
  Ne as ArrowUpAzIcon,
  Ai as ArrowUpCircle,
  Ai as ArrowUpCircleIcon,
  $e as ArrowUpDown,
  $e as ArrowUpDownIcon,
  Ae as ArrowUpFromDot,
  Ae as ArrowUpFromDotIcon,
  ze as ArrowUpFromLine,
  ze as ArrowUpFromLineIcon,
  We as ArrowUpIcon,
  je as ArrowUpLeft,
  Ni as ArrowUpLeftFromCircle,
  Ni as ArrowUpLeftFromCircleIcon,
  nD as ArrowUpLeftFromSquare,
  nD as ArrowUpLeftFromSquareIcon,
  je as ArrowUpLeftIcon,
  kD as ArrowUpLeftSquare,
  kD as ArrowUpLeftSquareIcon,
  Pe as ArrowUpNarrowWide,
  Pe as ArrowUpNarrowWideIcon,
  Fe as ArrowUpRight,
  $i as ArrowUpRightFromCircle,
  $i as ArrowUpRightFromCircleIcon,
  sD as ArrowUpRightFromSquare,
  sD as ArrowUpRightFromSquareIcon,
  Fe as ArrowUpRightIcon,
  lD as ArrowUpRightSquare,
  lD as ArrowUpRightSquareIcon,
  MD as ArrowUpSquare,
  MD as ArrowUpSquareIcon,
  Re as ArrowUpToLine,
  Re as ArrowUpToLineIcon,
  Ue as ArrowUpWideNarrow,
  Ue as ArrowUpWideNarrowIcon,
  Ge as ArrowUpZA,
  Ge as ArrowUpZAIcon,
  Ge as ArrowUpZa,
  Ge as ArrowUpZaIcon,
  Xe as ArrowsUpFromLine,
  Xe as ArrowsUpFromLineIcon,
  Qe as Asterisk,
  Qe as AsteriskIcon,
  mD as AsteriskSquare,
  mD as AsteriskSquareIcon,
  Ye as AtSign,
  Ye as AtSignIcon,
  aa as Atom,
  aa as AtomIcon,
  ta as AudioLines,
  ta as AudioLinesIcon,
  da as AudioWaveform,
  da as AudioWaveformIcon,
  ha as Award,
  ha as AwardIcon,
  ia as Axe,
  ia as AxeIcon,
  ra as Axis3D,
  ra as Axis3DIcon,
  ra as Axis3d,
  ra as Axis3dIcon,
  pa as Baby,
  pa as BabyIcon,
  ua as Backpack,
  ua as BackpackIcon,
  Qa as Badge,
  va as BadgeAlert,
  va as BadgeAlertIcon,
  _a as BadgeCent,
  _a as BadgeCentIcon,
  xa as BadgeCheck,
  xa as BadgeCheckIcon,
  wa as BadgeDollarSign,
  wa as BadgeDollarSignIcon,
  Ia as BadgeEuro,
  Ia as BadgeEuroIcon,
  Fa as BadgeHelp,
  Fa as BadgeHelpIcon,
  Qa as BadgeIcon,
  Na as BadgeIndianRupee,
  Na as BadgeIndianRupeeIcon,
  za as BadgeInfo,
  za as BadgeInfoIcon,
  $a as BadgeJapaneseYen,
  $a as BadgeJapaneseYenIcon,
  Aa as BadgeMinus,
  Aa as BadgeMinusIcon,
  ja as BadgePercent,
  ja as BadgePercentIcon,
  Pa as BadgePlus,
  Pa as BadgePlusIcon,
  Ra as BadgePoundSterling,
  Ra as BadgePoundSterlingIcon,
  Fa as BadgeQuestionMark,
  Fa as BadgeQuestionMarkIcon,
  Ua as BadgeRussianRuble,
  Ua as BadgeRussianRubleIcon,
  Ga as BadgeSwissFranc,
  Ga as BadgeSwissFrancIcon,
  Wa as BadgeTurkishLira,
  Wa as BadgeTurkishLiraIcon,
  Xa as BadgeX,
  Xa as BadgeXIcon,
  Ya as BaggageClaim,
  Ya as BaggageClaimIcon,
  a0 as Balloon,
  a0 as BalloonIcon,
  t0 as Ban,
  t0 as BanIcon,
  d0 as Banana,
  d0 as BananaIcon,
  h0 as Bandage,
  h0 as BandageIcon,
  u0 as Banknote,
  i0 as BanknoteArrowDown,
  i0 as BanknoteArrowDownIcon,
  r0 as BanknoteArrowUp,
  r0 as BanknoteArrowUpIcon,
  u0 as BanknoteIcon,
  p0 as BanknoteX,
  p0 as BanknoteXIcon,
  Qh as BarChart,
  Yh as BarChart2,
  Yh as BarChart2Icon,
  Rh as BarChart3,
  Rh as BarChart3Icon,
  Ph as BarChart4,
  Ph as BarChart4Icon,
  Ah as BarChartBig,
  Ah as BarChartBigIcon,
  $h as BarChartHorizontal,
  xh as BarChartHorizontalBig,
  xh as BarChartHorizontalBigIcon,
  $h as BarChartHorizontalIcon,
  Qh as BarChartIcon,
  v0 as Barcode,
  v0 as BarcodeIcon,
  _0 as Barrel,
  _0 as BarrelIcon,
  x0 as Baseline,
  x0 as BaselineIcon,
  w0 as Bath,
  w0 as BathIcon,
  P0 as Battery,
  I0 as BatteryCharging,
  I0 as BatteryChargingIcon,
  N0 as BatteryFull,
  N0 as BatteryFullIcon,
  P0 as BatteryIcon,
  $0 as BatteryLow,
  $0 as BatteryLowIcon,
  z0 as BatteryMedium,
  z0 as BatteryMediumIcon,
  A0 as BatteryPlus,
  A0 as BatteryPlusIcon,
  j0 as BatteryWarning,
  j0 as BatteryWarningIcon,
  F0 as Beaker,
  F0 as BeakerIcon,
  U0 as Bean,
  U0 as BeanIcon,
  R0 as BeanOff,
  R0 as BeanOffIcon,
  X0 as Bed,
  G0 as BedDouble,
  G0 as BedDoubleIcon,
  X0 as BedIcon,
  W0 as BedSingle,
  W0 as BedSingleIcon,
  Q0 as Beef,
  Q0 as BeefIcon,
  ac as Beer,
  ac as BeerIcon,
  Y0 as BeerOff,
  Y0 as BeerOffIcon,
  uc as Bell,
  tc as BellDot,
  tc as BellDotIcon,
  dc as BellElectric,
  dc as BellElectricIcon,
  uc as BellIcon,
  hc as BellMinus,
  hc as BellMinusIcon,
  ic as BellOff,
  ic as BellOffIcon,
  rc as BellPlus,
  rc as BellPlusIcon,
  pc as BellRing,
  pc as BellRingIcon,
  vc as BetweenHorizonalEnd,
  vc as BetweenHorizonalEndIcon,
  _c as BetweenHorizonalStart,
  _c as BetweenHorizonalStartIcon,
  vc as BetweenHorizontalEnd,
  vc as BetweenHorizontalEndIcon,
  _c as BetweenHorizontalStart,
  _c as BetweenHorizontalStartIcon,
  xc as BetweenVerticalEnd,
  xc as BetweenVerticalEndIcon,
  wc as BetweenVerticalStart,
  wc as BetweenVerticalStartIcon,
  Ic as BicepsFlexed,
  Ic as BicepsFlexedIcon,
  Nc as Bike,
  Nc as BikeIcon,
  $c as Binary,
  $c as BinaryIcon,
  zc as Binoculars,
  zc as BinocularsIcon,
  Ac as Biohazard,
  Ac as BiohazardIcon,
  jc as Bird,
  jc as BirdIcon,
  Pc as Birdhouse,
  Pc as BirdhouseIcon,
  Rc as Bitcoin,
  Rc as BitcoinIcon,
  Fc as Blend,
  Fc as BlendIcon,
  Uc as Blinds,
  Uc as BlindsIcon,
  Gc as Blocks,
  Gc as BlocksIcon,
  Yc as Bluetooth,
  Wc as BluetoothConnected,
  Wc as BluetoothConnectedIcon,
  Yc as BluetoothIcon,
  Xc as BluetoothOff,
  Xc as BluetoothOffIcon,
  Qc as BluetoothSearching,
  Qc as BluetoothSearchingIcon,
  at as Bold,
  at as BoldIcon,
  tt as Bolt,
  tt as BoltIcon,
  dt as Bomb,
  dt as BombIcon,
  ht as Bone,
  ht as BoneIcon,
  no as Book,
  it as BookA,
  it as BookAIcon,
  pt as BookAlert,
  pt as BookAlertIcon,
  rt as BookAudio,
  rt as BookAudioIcon,
  ut as BookCheck,
  ut as BookCheckIcon,
  vt as BookCopy,
  vt as BookCopyIcon,
  _t as BookDashed,
  _t as BookDashedIcon,
  xt as BookDown,
  xt as BookDownIcon,
  wt as BookHeadphones,
  wt as BookHeadphonesIcon,
  It as BookHeart,
  It as BookHeartIcon,
  no as BookIcon,
  Nt as BookImage,
  Nt as BookImageIcon,
  $t as BookKey,
  $t as BookKeyIcon,
  zt as BookLock,
  zt as BookLockIcon,
  At as BookMarked,
  At as BookMarkedIcon,
  jt as BookMinus,
  jt as BookMinusIcon,
  Rt as BookOpen,
  Pt as BookOpenCheck,
  Pt as BookOpenCheckIcon,
  Rt as BookOpenIcon,
  Ft as BookOpenText,
  Ft as BookOpenTextIcon,
  Ut as BookPlus,
  Ut as BookPlusIcon,
  Gt as BookSearch,
  Gt as BookSearchIcon,
  _t as BookTemplate,
  _t as BookTemplateIcon,
  Wt as BookText,
  Wt as BookTextIcon,
  Xt as BookType,
  Xt as BookTypeIcon,
  Qt as BookUp,
  Yt as BookUp2,
  Yt as BookUp2Icon,
  Qt as BookUpIcon,
  ao as BookUser,
  ao as BookUserIcon,
  to as BookX,
  to as BookXIcon,
  Mo as Bookmark,
  so as BookmarkCheck,
  so as BookmarkCheckIcon,
  Mo as BookmarkIcon,
  yo as BookmarkMinus,
  yo as BookmarkMinusIcon,
  ko as BookmarkPlus,
  ko as BookmarkPlusIcon,
  lo as BookmarkX,
  lo as BookmarkXIcon,
  mo as BoomBox,
  mo as BoomBoxIcon,
  fo as Bot,
  fo as BotIcon,
  go as BotMessageSquare,
  go as BotMessageSquareIcon,
  Lo as BotOff,
  Lo as BotOffIcon,
  Co as BottleWine,
  Co as BottleWineIcon,
  bo as BowArrow,
  bo as BowArrowIcon,
  qo as Box,
  qo as BoxIcon,
  ED as BoxSelect,
  ED as BoxSelectIcon,
  So as Boxes,
  So as BoxesIcon,
  Ho as Braces,
  Ho as BracesIcon,
  Vo as Brackets,
  Vo as BracketsIcon,
  To as Brain,
  Bo as BrainCircuit,
  Bo as BrainCircuitIcon,
  Do as BrainCog,
  Do as BrainCogIcon,
  To as BrainIcon,
  Eo as BrickWall,
  Oo as BrickWallFire,
  Oo as BrickWallFireIcon,
  Eo as BrickWallIcon,
  Zo as BrickWallShield,
  Zo as BrickWallShieldIcon,
  cd as Briefcase,
  Ko as BriefcaseBusiness,
  Ko as BriefcaseBusinessIcon,
  Jo as BriefcaseConveyorBelt,
  Jo as BriefcaseConveyorBeltIcon,
  cd as BriefcaseIcon,
  ed as BriefcaseMedical,
  ed as BriefcaseMedicalIcon,
  od as BringToFront,
  od as BringToFrontIcon,
  sd as Brush,
  nd as BrushCleaning,
  nd as BrushCleaningIcon,
  sd as BrushIcon,
  yd as Bubbles,
  yd as BubblesIcon,
  Md as Bug,
  Md as BugIcon,
  kd as BugOff,
  kd as BugOffIcon,
  ld as BugPlay,
  ld as BugPlayIcon,
  gd as Building,
  md as Building2,
  md as Building2Icon,
  gd as BuildingIcon,
  fd as Bus,
  Ld as BusFront,
  Ld as BusFrontIcon,
  fd as BusIcon,
  bd as Cable,
  Cd as CableCar,
  Cd as CableCarIcon,
  bd as CableIcon,
  Sd as Cake,
  Sd as CakeIcon,
  qd as CakeSlice,
  qd as CakeSliceIcon,
  Hd as Calculator,
  Hd as CalculatorIcon,
  wn as Calendar,
  Vd as Calendar1,
  Vd as Calendar1Icon,
  Bd as CalendarArrowDown,
  Bd as CalendarArrowDownIcon,
  Dd as CalendarArrowUp,
  Dd as CalendarArrowUpIcon,
  Zd as CalendarCheck,
  Td as CalendarCheck2,
  Td as CalendarCheck2Icon,
  Zd as CalendarCheckIcon,
  Od as CalendarClock,
  Od as CalendarClockIcon,
  Ed as CalendarCog,
  Ed as CalendarCogIcon,
  Kd as CalendarDays,
  Kd as CalendarDaysIcon,
  Jd as CalendarFold,
  Jd as CalendarFoldIcon,
  en as CalendarHeart,
  en as CalendarHeartIcon,
  wn as CalendarIcon,
  on as CalendarMinus,
  cn as CalendarMinus2,
  cn as CalendarMinus2Icon,
  on as CalendarMinusIcon,
  nn as CalendarOff,
  nn as CalendarOffIcon,
  rn as CalendarPlus,
  sn as CalendarPlus2,
  sn as CalendarPlus2Icon,
  rn as CalendarPlusIcon,
  pn as CalendarRange,
  pn as CalendarRangeIcon,
  un as CalendarSearch,
  un as CalendarSearchIcon,
  vn as CalendarSync,
  vn as CalendarSyncIcon,
  xn as CalendarX,
  _n as CalendarX2,
  _n as CalendarX2Icon,
  xn as CalendarXIcon,
  In as Calendars,
  In as CalendarsIcon,
  $n as Camera,
  $n as CameraIcon,
  Nn as CameraOff,
  Nn as CameraOffIcon,
  zh as CandlestickChart,
  zh as CandlestickChartIcon,
  jn as Candy,
  zn as CandyCane,
  zn as CandyCaneIcon,
  jn as CandyIcon,
  An as CandyOff,
  An as CandyOffIcon,
  Pn as Cannabis,
  Pn as CannabisIcon,
  Fn as CannabisOff,
  Fn as CannabisOffIcon,
  Un as Captions,
  Un as CaptionsIcon,
  Rn as CaptionsOff,
  Rn as CaptionsOffIcon,
  Xn as Car,
  Gn as CarFront,
  Gn as CarFrontIcon,
  Xn as CarIcon,
  Wn as CarTaxiFront,
  Wn as CarTaxiFrontIcon,
  Qn as Caravan,
  Qn as CaravanIcon,
  Yn as CardSim,
  Yn as CardSimIcon,
  ah as Carrot,
  ah as CarrotIcon,
  th as CaseLower,
  th as CaseLowerIcon,
  dh as CaseSensitive,
  dh as CaseSensitiveIcon,
  hh as CaseUpper,
  hh as CaseUpperIcon,
  ih as CassetteTape,
  ih as CassetteTapeIcon,
  rh as Cast,
  rh as CastIcon,
  uh as Castle,
  uh as CastleIcon,
  ph as Cat,
  ph as CatIcon,
  vh as Cctv,
  vh as CctvIcon,
  _h as ChartArea,
  _h as ChartAreaIcon,
  $h as ChartBar,
  xh as ChartBarBig,
  xh as ChartBarBigIcon,
  wh as ChartBarDecreasing,
  wh as ChartBarDecreasingIcon,
  $h as ChartBarIcon,
  Ih as ChartBarIncreasing,
  Ih as ChartBarIncreasingIcon,
  Nh as ChartBarStacked,
  Nh as ChartBarStackedIcon,
  zh as ChartCandlestick,
  zh as ChartCandlestickIcon,
  Rh as ChartColumn,
  Ah as ChartColumnBig,
  Ah as ChartColumnBigIcon,
  jh as ChartColumnDecreasing,
  jh as ChartColumnDecreasingIcon,
  Rh as ChartColumnIcon,
  Ph as ChartColumnIncreasing,
  Ph as ChartColumnIncreasingIcon,
  Fh as ChartColumnStacked,
  Fh as ChartColumnStackedIcon,
  Uh as ChartGantt,
  Uh as ChartGanttIcon,
  Gh as ChartLine,
  Gh as ChartLineIcon,
  Wh as ChartNetwork,
  Wh as ChartNetworkIcon,
  Yh as ChartNoAxesColumn,
  Xh as ChartNoAxesColumnDecreasing,
  Xh as ChartNoAxesColumnDecreasingIcon,
  Yh as ChartNoAxesColumnIcon,
  Qh as ChartNoAxesColumnIncreasing,
  Qh as ChartNoAxesColumnIncreasingIcon,
  as as ChartNoAxesCombined,
  as as ChartNoAxesCombinedIcon,
  ts as ChartNoAxesGantt,
  ts as ChartNoAxesGanttIcon,
  ds as ChartPie,
  ds as ChartPieIcon,
  hs as ChartScatter,
  hs as ChartScatterIcon,
  is as ChartSpline,
  is as ChartSplineIcon,
  us as Check,
  rs as CheckCheck,
  rs as CheckCheckIcon,
  ji as CheckCircle,
  Pi as CheckCircle2,
  Pi as CheckCircle2Icon,
  ji as CheckCircleIcon,
  us as CheckIcon,
  ps as CheckLine,
  ps as CheckLineIcon,
  fD as CheckSquare,
  CD as CheckSquare2,
  CD as CheckSquare2Icon,
  fD as CheckSquareIcon,
  vs as ChefHat,
  vs as ChefHatIcon,
  _s as Cherry,
  _s as CherryIcon,
  xs as ChessBishop,
  xs as ChessBishopIcon,
  ws as ChessKing,
  ws as ChessKingIcon,
  Is as ChessKnight,
  Is as ChessKnightIcon,
  Ns as ChessPawn,
  Ns as ChessPawnIcon,
  $s as ChessQueen,
  $s as ChessQueenIcon,
  As as ChessRook,
  As as ChessRookIcon,
  zs as ChevronDown,
  Fi as ChevronDownCircle,
  Fi as ChevronDownCircleIcon,
  zs as ChevronDownIcon,
  bD as ChevronDownSquare,
  bD as ChevronDownSquareIcon,
  js as ChevronFirst,
  js as ChevronFirstIcon,
  Ps as ChevronLast,
  Ps as ChevronLastIcon,
  Fs as ChevronLeft,
  Ri as ChevronLeftCircle,
  Ri as ChevronLeftCircleIcon,
  Fs as ChevronLeftIcon,
  qD as ChevronLeftSquare,
  qD as ChevronLeftSquareIcon,
  Rs as ChevronRight,
  Ui as ChevronRightCircle,
  Ui as ChevronRightCircleIcon,
  Rs as ChevronRightIcon,
  SD as ChevronRightSquare,
  SD as ChevronRightSquareIcon,
  Us as ChevronUp,
  Gi as ChevronUpCircle,
  Gi as ChevronUpCircleIcon,
  Us as ChevronUpIcon,
  HD as ChevronUpSquare,
  HD as ChevronUpSquareIcon,
  Ws as ChevronsDown,
  Ws as ChevronsDownIcon,
  Gs as ChevronsDownUp,
  Gs as ChevronsDownUpIcon,
  Ys as ChevronsLeft,
  Ys as ChevronsLeftIcon,
  Qs as ChevronsLeftRight,
  Xs as ChevronsLeftRightEllipsis,
  Xs as ChevronsLeftRightEllipsisIcon,
  Qs as ChevronsLeftRightIcon,
  ai as ChevronsRight,
  ai as ChevronsRightIcon,
  ti as ChevronsRightLeft,
  ti as ChevronsRightLeftIcon,
  hi as ChevronsUp,
  di as ChevronsUpDown,
  di as ChevronsUpDownIcon,
  hi as ChevronsUpIcon,
  ii as Chrome,
  ii as ChromeIcon,
  ii as Chromium,
  ii as ChromiumIcon,
  ri as Church,
  ri as ChurchIcon,
  ui as Cigarette,
  ui as CigaretteIcon,
  pi as CigaretteOff,
  pi as CigaretteOffIcon,
  Yy as Circle,
  vi as CircleAlert,
  vi as CircleAlertIcon,
  _i as CircleArrowDown,
  _i as CircleArrowDownIcon,
  xi as CircleArrowLeft,
  xi as CircleArrowLeftIcon,
  wi as CircleArrowOutDownLeft,
  wi as CircleArrowOutDownLeftIcon,
  Ii as CircleArrowOutDownRight,
  Ii as CircleArrowOutDownRightIcon,
  Ni as CircleArrowOutUpLeft,
  Ni as CircleArrowOutUpLeftIcon,
  $i as CircleArrowOutUpRight,
  $i as CircleArrowOutUpRightIcon,
  zi as CircleArrowRight,
  zi as CircleArrowRightIcon,
  Ai as CircleArrowUp,
  Ai as CircleArrowUpIcon,
  Pi as CircleCheck,
  ji as CircleCheckBig,
  ji as CircleCheckBigIcon,
  Pi as CircleCheckIcon,
  Fi as CircleChevronDown,
  Fi as CircleChevronDownIcon,
  Ri as CircleChevronLeft,
  Ri as CircleChevronLeftIcon,
  Ui as CircleChevronRight,
  Ui as CircleChevronRightIcon,
  Gi as CircleChevronUp,
  Gi as CircleChevronUpIcon,
  Wi as CircleDashed,
  Wi as CircleDashedIcon,
  Xi as CircleDivide,
  Xi as CircleDivideIcon,
  Qi as CircleDollarSign,
  Qi as CircleDollarSignIcon,
  ay as CircleDot,
  Yi as CircleDotDashed,
  Yi as CircleDotDashedIcon,
  ay as CircleDotIcon,
  ty as CircleEllipsis,
  ty as CircleEllipsisIcon,
  dy as CircleEqual,
  dy as CircleEqualIcon,
  hy as CircleFadingArrowUp,
  hy as CircleFadingArrowUpIcon,
  iy as CircleFadingPlus,
  iy as CircleFadingPlusIcon,
  ry as CircleGauge,
  ry as CircleGaugeIcon,
  jy as CircleHelp,
  jy as CircleHelpIcon,
  Yy as CircleIcon,
  py as CircleMinus,
  py as CircleMinusIcon,
  uy as CircleOff,
  uy as CircleOffIcon,
  _y as CircleParking,
  _y as CircleParkingIcon,
  vy as CircleParkingOff,
  vy as CircleParkingOffIcon,
  xy as CirclePause,
  xy as CirclePauseIcon,
  wy as CirclePercent,
  wy as CirclePercentIcon,
  Iy as CirclePile,
  Iy as CirclePileIcon,
  Ny as CirclePlay,
  Ny as CirclePlayIcon,
  $y as CirclePlus,
  $y as CirclePlusIcon,
  zy as CirclePoundSterling,
  zy as CirclePoundSterlingIcon,
  Ay as CirclePower,
  Ay as CirclePowerIcon,
  jy as CircleQuestionMark,
  jy as CircleQuestionMarkIcon,
  Fy as CircleSlash,
  Py as CircleSlash2,
  Py as CircleSlash2Icon,
  Fy as CircleSlashIcon,
  Py as CircleSlashed,
  Py as CircleSlashedIcon,
  Ry as CircleSmall,
  Ry as CircleSmallIcon,
  Uy as CircleStar,
  Uy as CircleStarIcon,
  Gy as CircleStop,
  Gy as CircleStopIcon,
  Xy as CircleUser,
  Xy as CircleUserIcon,
  Wy as CircleUserRound,
  Wy as CircleUserRoundIcon,
  Qy as CircleX,
  Qy as CircleXIcon,
  a4 as CircuitBoard,
  a4 as CircuitBoardIcon,
  t4 as Citrus,
  t4 as CitrusIcon,
  d4 as Clapperboard,
  d4 as ClapperboardIcon,
  $4 as Clipboard,
  h4 as ClipboardCheck,
  h4 as ClipboardCheckIcon,
  i4 as ClipboardClock,
  i4 as ClipboardClockIcon,
  r4 as ClipboardCopy,
  r4 as ClipboardCopyIcon,
  x4 as ClipboardEdit,
  x4 as ClipboardEditIcon,
  $4 as ClipboardIcon,
  p4 as ClipboardList,
  p4 as ClipboardListIcon,
  u4 as ClipboardMinus,
  u4 as ClipboardMinusIcon,
  v4 as ClipboardPaste,
  v4 as ClipboardPasteIcon,
  x4 as ClipboardPen,
  x4 as ClipboardPenIcon,
  _4 as ClipboardPenLine,
  _4 as ClipboardPenLineIcon,
  w4 as ClipboardPlus,
  w4 as ClipboardPlusIcon,
  _4 as ClipboardSignature,
  _4 as ClipboardSignatureIcon,
  I4 as ClipboardType,
  I4 as ClipboardTypeIcon,
  N4 as ClipboardX,
  N4 as ClipboardXIcon,
  p5 as Clock,
  z4 as Clock1,
  A4 as Clock10,
  A4 as Clock10Icon,
  j4 as Clock11,
  j4 as Clock11Icon,
  P4 as Clock12,
  P4 as Clock12Icon,
  z4 as Clock1Icon,
  F4 as Clock2,
  F4 as Clock2Icon,
  R4 as Clock3,
  R4 as Clock3Icon,
  U4 as Clock4,
  U4 as Clock4Icon,
  G4 as Clock5,
  G4 as Clock5Icon,
  W4 as Clock6,
  W4 as Clock6Icon,
  X4 as Clock7,
  X4 as Clock7Icon,
  Q4 as Clock8,
  Q4 as Clock8Icon,
  Y4 as Clock9,
  Y4 as Clock9Icon,
  a5 as ClockAlert,
  a5 as ClockAlertIcon,
  t5 as ClockArrowDown,
  t5 as ClockArrowDownIcon,
  d5 as ClockArrowUp,
  d5 as ClockArrowUpIcon,
  h5 as ClockCheck,
  h5 as ClockCheckIcon,
  i5 as ClockFading,
  i5 as ClockFadingIcon,
  p5 as ClockIcon,
  r5 as ClockPlus,
  r5 as ClockPlusIcon,
  u5 as ClosedCaption,
  u5 as ClosedCaptionIcon,
  ar as Cloud,
  v5 as CloudAlert,
  v5 as CloudAlertIcon,
  _5 as CloudBackup,
  _5 as CloudBackupIcon,
  x5 as CloudCheck,
  x5 as CloudCheckIcon,
  w5 as CloudCog,
  w5 as CloudCogIcon,
  I5 as CloudDownload,
  I5 as CloudDownloadIcon,
  N5 as CloudDrizzle,
  N5 as CloudDrizzleIcon,
  $5 as CloudFog,
  $5 as CloudFogIcon,
  z5 as CloudHail,
  z5 as CloudHailIcon,
  ar as CloudIcon,
  A5 as CloudLightning,
  A5 as CloudLightningIcon,
  P5 as CloudMoon,
  P5 as CloudMoonIcon,
  j5 as CloudMoonRain,
  j5 as CloudMoonRainIcon,
  F5 as CloudOff,
  F5 as CloudOffIcon,
  U5 as CloudRain,
  U5 as CloudRainIcon,
  R5 as CloudRainWind,
  R5 as CloudRainWindIcon,
  G5 as CloudSnow,
  G5 as CloudSnowIcon,
  X5 as CloudSun,
  X5 as CloudSunIcon,
  W5 as CloudSunRain,
  W5 as CloudSunRainIcon,
  Q5 as CloudSync,
  Q5 as CloudSyncIcon,
  Y5 as CloudUpload,
  Y5 as CloudUploadIcon,
  tr as Cloudy,
  tr as CloudyIcon,
  dr as Clover,
  dr as CloverIcon,
  hr as Club,
  hr as ClubIcon,
  rr as Code,
  ir as Code2,
  ir as Code2Icon,
  rr as CodeIcon,
  BD as CodeSquare,
  BD as CodeSquareIcon,
  ir as CodeXml,
  ir as CodeXmlIcon,
  pr as Codepen,
  pr as CodepenIcon,
  ur as Codesandbox,
  ur as CodesandboxIcon,
  vr as Coffee,
  vr as CoffeeIcon,
  _r as Cog,
  _r as CogIcon,
  xr as Coins,
  xr as CoinsIcon,
  wr as Columns,
  wr as Columns2,
  wr as Columns2Icon,
  Nr as Columns3,
  Ir as Columns3Cog,
  Ir as Columns3CogIcon,
  Nr as Columns3Icon,
  $r as Columns4,
  $r as Columns4Icon,
  wr as ColumnsIcon,
  Ir as ColumnsSettings,
  Ir as ColumnsSettingsIcon,
  zr as Combine,
  zr as CombineIcon,
  Ar as Command,
  Ar as CommandIcon,
  jr as Compass,
  jr as CompassIcon,
  Pr as Component,
  Pr as ComponentIcon,
  Fr as Computer,
  Fr as ComputerIcon,
  Rr as ConciergeBell,
  Rr as ConciergeBellIcon,
  Ur as Cone,
  Ur as ConeIcon,
  Gr as Construction,
  Gr as ConstructionIcon,
  Xr as Contact,
  Wr as Contact2,
  Wr as Contact2Icon,
  Xr as ContactIcon,
  Wr as ContactRound,
  Wr as ContactRoundIcon,
  Qr as Container,
  Qr as ContainerIcon,
  Yr as Contrast,
  Yr as ContrastIcon,
  ak as Cookie,
  ak as CookieIcon,
  tk as CookingPot,
  tk as CookingPotIcon,
  uk as Copy,
  dk as CopyCheck,
  dk as CopyCheckIcon,
  uk as CopyIcon,
  hk as CopyMinus,
  hk as CopyMinusIcon,
  ik as CopyPlus,
  ik as CopyPlusIcon,
  rk as CopySlash,
  rk as CopySlashIcon,
  pk as CopyX,
  pk as CopyXIcon,
  vk as Copyleft,
  vk as CopyleftIcon,
  _k as Copyright,
  _k as CopyrightIcon,
  xk as CornerDownLeft,
  xk as CornerDownLeftIcon,
  wk as CornerDownRight,
  wk as CornerDownRightIcon,
  Ik as CornerLeftDown,
  Ik as CornerLeftDownIcon,
  Nk as CornerLeftUp,
  Nk as CornerLeftUpIcon,
  $k as CornerRightDown,
  $k as CornerRightDownIcon,
  zk as CornerRightUp,
  zk as CornerRightUpIcon,
  Ak as CornerUpLeft,
  Ak as CornerUpLeftIcon,
  jk as CornerUpRight,
  jk as CornerUpRightIcon,
  Pk as Cpu,
  Pk as CpuIcon,
  Fk as CreativeCommons,
  Fk as CreativeCommonsIcon,
  Rk as CreditCard,
  Rk as CreditCardIcon,
  Uk as Croissant,
  Uk as CroissantIcon,
  Gk as Crop,
  Gk as CropIcon,
  Wk as Cross,
  Wk as CrossIcon,
  Xk as Crosshair,
  Xk as CrosshairIcon,
  Qk as Crown,
  Qk as CrownIcon,
  ap as Cuboid,
  ap as CuboidIcon,
  Yk as CupSoda,
  Yk as CupSodaIcon,
  Ho as CurlyBraces,
  Ho as CurlyBracesIcon,
  tp as Currency,
  tp as CurrencyIcon,
  dp as Cylinder,
  dp as CylinderIcon,
  hp as Dam,
  hp as DamIcon,
  pp as Database,
  ip as DatabaseBackup,
  ip as DatabaseBackupIcon,
  pp as DatabaseIcon,
  rp as DatabaseZap,
  rp as DatabaseZapIcon,
  up as DecimalsArrowLeft,
  up as DecimalsArrowLeftIcon,
  vp as DecimalsArrowRight,
  vp as DecimalsArrowRightIcon,
  _p as Delete,
  _p as DeleteIcon,
  xp as Dessert,
  xp as DessertIcon,
  wp as Diameter,
  wp as DiameterIcon,
  zp as Diamond,
  zp as DiamondIcon,
  Ip as DiamondMinus,
  Ip as DiamondMinusIcon,
  Np as DiamondPercent,
  Np as DiamondPercentIcon,
  $p as DiamondPlus,
  $p as DiamondPlusIcon,
  Ap as Dice1,
  Ap as Dice1Icon,
  jp as Dice2,
  jp as Dice2Icon,
  Pp as Dice3,
  Pp as Dice3Icon,
  Fp as Dice4,
  Fp as Dice4Icon,
  Rp as Dice5,
  Rp as Dice5Icon,
  Up as Dice6,
  Up as Dice6Icon,
  Gp as Dices,
  Gp as DicesIcon,
  Wp as Diff,
  Wp as DiffIcon,
  a3 as Disc,
  Xp as Disc2,
  Xp as Disc2Icon,
  Qp as Disc3,
  Qp as Disc3Icon,
  Yp as DiscAlbum,
  Yp as DiscAlbumIcon,
  a3 as DiscIcon,
  t3 as Divide,
  Xi as DivideCircle,
  Xi as DivideCircleIcon,
  t3 as DivideIcon,
  KD as DivideSquare,
  KD as DivideSquareIcon,
  h3 as Dna,
  h3 as DnaIcon,
  d3 as DnaOff,
  d3 as DnaOffIcon,
  i3 as Dock,
  i3 as DockIcon,
  r3 as Dog,
  r3 as DogIcon,
  p3 as DollarSign,
  p3 as DollarSignIcon,
  u3 as Donut,
  u3 as DonutIcon,
  _3 as DoorClosed,
  _3 as DoorClosedIcon,
  v3 as DoorClosedLocked,
  v3 as DoorClosedLockedIcon,
  x3 as DoorOpen,
  x3 as DoorOpenIcon,
  w3 as Dot,
  w3 as DotIcon,
  JD as DotSquare,
  JD as DotSquareIcon,
  I3 as Download,
  I5 as DownloadCloud,
  I5 as DownloadCloudIcon,
  I3 as DownloadIcon,
  N3 as DraftingCompass,
  N3 as DraftingCompassIcon,
  $3 as Drama,
  $3 as DramaIcon,
  z3 as Dribbble,
  z3 as DribbbleIcon,
  A3 as Drill,
  A3 as DrillIcon,
  j3 as Drone,
  j3 as DroneIcon,
  F3 as Droplet,
  F3 as DropletIcon,
  P3 as DropletOff,
  P3 as DropletOffIcon,
  R3 as Droplets,
  R3 as DropletsIcon,
  U3 as Drum,
  U3 as DrumIcon,
  G3 as Drumstick,
  G3 as DrumstickIcon,
  W3 as Dumbbell,
  W3 as DumbbellIcon,
  Q3 as Ear,
  Q3 as EarIcon,
  X3 as EarOff,
  X3 as EarOffIcon,
  a8 as Earth,
  a8 as EarthIcon,
  Y3 as EarthLock,
  Y3 as EarthLockIcon,
  t8 as Eclipse,
  t8 as EclipseIcon,
  LR as Edit,
  Dq as Edit2,
  Dq as Edit2Icon,
  Hq as Edit3,
  Hq as Edit3Icon,
  LR as EditIcon,
  i8 as Egg,
  d8 as EggFried,
  d8 as EggFriedIcon,
  i8 as EggIcon,
  h8 as EggOff,
  h8 as EggOffIcon,
  p8 as Ellipsis,
  p8 as EllipsisIcon,
  r8 as EllipsisVertical,
  r8 as EllipsisVerticalIcon,
  _8 as Equal,
  u8 as EqualApproximately,
  u8 as EqualApproximatelyIcon,
  _8 as EqualIcon,
  v8 as EqualNot,
  v8 as EqualNotIcon,
  eR as EqualSquare,
  eR as EqualSquareIcon,
  x8 as Eraser,
  x8 as EraserIcon,
  w8 as EthernetPort,
  w8 as EthernetPortIcon,
  I8 as Euro,
  I8 as EuroIcon,
  N8 as EvCharger,
  N8 as EvChargerIcon,
  $8 as Expand,
  $8 as ExpandIcon,
  z8 as ExternalLink,
  z8 as ExternalLinkIcon,
  P8 as Eye,
  A8 as EyeClosed,
  A8 as EyeClosedIcon,
  P8 as EyeIcon,
  j8 as EyeOff,
  j8 as EyeOffIcon,
  F8 as Facebook,
  F8 as FacebookIcon,
  R8 as Factory,
  R8 as FactoryIcon,
  U8 as Fan,
  U8 as FanIcon,
  G8 as FastForward,
  G8 as FastForwardIcon,
  W8 as Feather,
  W8 as FeatherIcon,
  X8 as Fence,
  X8 as FenceIcon,
  Q8 as FerrisWheel,
  Q8 as FerrisWheelIcon,
  Y8 as Figma,
  Y8 as FigmaIcon,
  a7 as File,
  a6 as FileArchive,
  a6 as FileArchiveIcon,
  R6 as FileAudio,
  R6 as FileAudio2,
  R6 as FileAudio2Icon,
  R6 as FileAudioIcon,
  t6 as FileAxis3D,
  t6 as FileAxis3DIcon,
  t6 as FileAxis3d,
  t6 as FileAxis3dIcon,
  d6 as FileBadge,
  d6 as FileBadge2,
  d6 as FileBadge2Icon,
  d6 as FileBadgeIcon,
  p6 as FileBarChart,
  u6 as FileBarChart2,
  u6 as FileBarChart2Icon,
  p6 as FileBarChartIcon,
  h6 as FileBox,
  h6 as FileBoxIcon,
  r6 as FileBraces,
  i6 as FileBracesCorner,
  i6 as FileBracesCornerIcon,
  r6 as FileBracesIcon,
  u6 as FileChartColumn,
  u6 as FileChartColumnIcon,
  p6 as FileChartColumnIncreasing,
  p6 as FileChartColumnIncreasingIcon,
  v6 as FileChartLine,
  v6 as FileChartLineIcon,
  x6 as FileChartPie,
  x6 as FileChartPieIcon,
  w6 as FileCheck,
  _6 as FileCheck2,
  _6 as FileCheck2Icon,
  _6 as FileCheckCorner,
  _6 as FileCheckCornerIcon,
  w6 as FileCheckIcon,
  I6 as FileClock,
  I6 as FileClockIcon,
  $6 as FileCode,
  N6 as FileCode2,
  N6 as FileCode2Icon,
  N6 as FileCodeCorner,
  N6 as FileCodeCornerIcon,
  $6 as FileCodeIcon,
  z6 as FileCog,
  z6 as FileCog2,
  z6 as FileCog2Icon,
  z6 as FileCogIcon,
  A6 as FileDiff,
  A6 as FileDiffIcon,
  j6 as FileDigit,
  j6 as FileDigitIcon,
  P6 as FileDown,
  P6 as FileDownIcon,
  il as FileEdit,
  il as FileEditIcon,
  F6 as FileExclamationPoint,
  F6 as FileExclamationPointIcon,
  R6 as FileHeadphone,
  R6 as FileHeadphoneIcon,
  U6 as FileHeart,
  U6 as FileHeartIcon,
  a7 as FileIcon,
  G6 as FileImage,
  G6 as FileImageIcon,
  W6 as FileInput,
  W6 as FileInputIcon,
  r6 as FileJson,
  i6 as FileJson2,
  i6 as FileJson2Icon,
  r6 as FileJsonIcon,
  Q6 as FileKey,
  Q6 as FileKey2,
  Q6 as FileKey2Icon,
  Q6 as FileKeyIcon,
  v6 as FileLineChart,
  v6 as FileLineChartIcon,
  X6 as FileLock,
  X6 as FileLock2,
  X6 as FileLock2Icon,
  X6 as FileLockIcon,
  al as FileMinus,
  Y6 as FileMinus2,
  Y6 as FileMinus2Icon,
  Y6 as FileMinusCorner,
  Y6 as FileMinusCornerIcon,
  al as FileMinusIcon,
  tl as FileMusic,
  tl as FileMusicIcon,
  dl as FileOutput,
  dl as FileOutputIcon,
  il as FilePen,
  il as FilePenIcon,
  hl as FilePenLine,
  hl as FilePenLineIcon,
  x6 as FilePieChart,
  x6 as FilePieChartIcon,
  rl as FilePlay,
  rl as FilePlayIcon,
  ul as FilePlus,
  pl as FilePlus2,
  pl as FilePlus2Icon,
  pl as FilePlusCorner,
  pl as FilePlusCornerIcon,
  ul as FilePlusIcon,
  vl as FileQuestion,
  vl as FileQuestionIcon,
  vl as FileQuestionMark,
  vl as FileQuestionMarkIcon,
  _l as FileScan,
  _l as FileScanIcon,
  wl as FileSearch,
  xl as FileSearch2,
  xl as FileSearch2Icon,
  xl as FileSearchCorner,
  xl as FileSearchCornerIcon,
  wl as FileSearchIcon,
  Il as FileSignal,
  Il as FileSignalIcon,
  hl as FileSignature,
  hl as FileSignatureIcon,
  Nl as FileSliders,
  Nl as FileSlidersIcon,
  $l as FileSpreadsheet,
  $l as FileSpreadsheetIcon,
  zl as FileStack,
  zl as FileStackIcon,
  Al as FileSymlink,
  Al as FileSymlinkIcon,
  jl as FileTerminal,
  jl as FileTerminalIcon,
  Pl as FileText,
  Pl as FileTextIcon,
  Rl as FileType,
  Fl as FileType2,
  Fl as FileType2Icon,
  Fl as FileTypeCorner,
  Fl as FileTypeCornerIcon,
  Rl as FileTypeIcon,
  Gl as FileUp,
  Gl as FileUpIcon,
  Ul as FileUser,
  Ul as FileUserIcon,
  rl as FileVideo,
  Wl as FileVideo2,
  Wl as FileVideo2Icon,
  Wl as FileVideoCamera,
  Wl as FileVideoCameraIcon,
  rl as FileVideoIcon,
  Xl as FileVolume,
  Il as FileVolume2,
  Il as FileVolume2Icon,
  Xl as FileVolumeIcon,
  F6 as FileWarning,
  F6 as FileWarningIcon,
  Yl as FileX,
  Ql as FileX2,
  Ql as FileX2Icon,
  Ql as FileXCorner,
  Ql as FileXCornerIcon,
  Yl as FileXIcon,
  t7 as Files,
  t7 as FilesIcon,
  d7 as Film,
  d7 as FilmIcon,
  ju as Filter,
  ju as FilterIcon,
  Au as FilterX,
  Au as FilterXIcon,
  h7 as Fingerprint,
  h7 as FingerprintIcon,
  h7 as FingerprintPattern,
  h7 as FingerprintPatternIcon,
  i7 as FireExtinguisher,
  i7 as FireExtinguisherIcon,
  u7 as Fish,
  u7 as FishIcon,
  r7 as FishOff,
  r7 as FishOffIcon,
  p7 as FishSymbol,
  p7 as FishSymbolIcon,
  v7 as FishingHook,
  v7 as FishingHookIcon,
  I7 as Flag,
  I7 as FlagIcon,
  _7 as FlagOff,
  _7 as FlagOffIcon,
  x7 as FlagTriangleLeft,
  x7 as FlagTriangleLeftIcon,
  w7 as FlagTriangleRight,
  w7 as FlagTriangleRightIcon,
  $7 as Flame,
  $7 as FlameIcon,
  N7 as FlameKindling,
  N7 as FlameKindlingIcon,
  A7 as Flashlight,
  A7 as FlashlightIcon,
  z7 as FlashlightOff,
  z7 as FlashlightOffIcon,
  j7 as FlaskConical,
  j7 as FlaskConicalIcon,
  P7 as FlaskConicalOff,
  P7 as FlaskConicalOffIcon,
  F7 as FlaskRound,
  F7 as FlaskRoundIcon,
  U7 as FlipHorizontal,
  R7 as FlipHorizontal2,
  R7 as FlipHorizontal2Icon,
  U7 as FlipHorizontalIcon,
  W7 as FlipVertical,
  G7 as FlipVertical2,
  G7 as FlipVertical2Icon,
  W7 as FlipVerticalIcon,
  Q7 as Flower,
  X7 as Flower2,
  X7 as Flower2Icon,
  Q7 as FlowerIcon,
  Y7 as Focus,
  Y7 as FocusIcon,
  a9 as FoldHorizontal,
  a9 as FoldHorizontalIcon,
  t9 as FoldVertical,
  t9 as FoldVerticalIcon,
  iu as Folder,
  d9 as FolderArchive,
  d9 as FolderArchiveIcon,
  h9 as FolderCheck,
  h9 as FolderCheckIcon,
  i9 as FolderClock,
  i9 as FolderClockIcon,
  r9 as FolderClosed,
  r9 as FolderClosedIcon,
  p9 as FolderCode,
  p9 as FolderCodeIcon,
  u9 as FolderCog,
  u9 as FolderCog2,
  u9 as FolderCog2Icon,
  u9 as FolderCogIcon,
  v9 as FolderDot,
  v9 as FolderDotIcon,
  _9 as FolderDown,
  _9 as FolderDownIcon,
  U9 as FolderEdit,
  U9 as FolderEditIcon,
  w9 as FolderGit,
  x9 as FolderGit2,
  x9 as FolderGit2Icon,
  w9 as FolderGitIcon,
  I9 as FolderHeart,
  I9 as FolderHeartIcon,
  iu as FolderIcon,
  N9 as FolderInput,
  N9 as FolderInputIcon,
  $9 as FolderKanban,
  $9 as FolderKanbanIcon,
  z9 as FolderKey,
  z9 as FolderKeyIcon,
  A9 as FolderLock,
  A9 as FolderLockIcon,
  j9 as FolderMinus,
  j9 as FolderMinusIcon,
  F9 as FolderOpen,
  P9 as FolderOpenDot,
  P9 as FolderOpenDotIcon,
  F9 as FolderOpenIcon,
  R9 as FolderOutput,
  R9 as FolderOutputIcon,
  U9 as FolderPen,
  U9 as FolderPenIcon,
  G9 as FolderPlus,
  G9 as FolderPlusIcon,
  W9 as FolderRoot,
  W9 as FolderRootIcon,
  Q9 as FolderSearch,
  X9 as FolderSearch2,
  X9 as FolderSearch2Icon,
  Q9 as FolderSearchIcon,
  Y9 as FolderSymlink,
  Y9 as FolderSymlinkIcon,
  au as FolderSync,
  au as FolderSyncIcon,
  tu as FolderTree,
  tu as FolderTreeIcon,
  du as FolderUp,
  du as FolderUpIcon,
  hu as FolderX,
  hu as FolderXIcon,
  ru as Folders,
  ru as FoldersIcon,
  pu as Footprints,
  pu as FootprintsIcon,
  VE as ForkKnife,
  HE as ForkKnifeCrossed,
  HE as ForkKnifeCrossedIcon,
  VE as ForkKnifeIcon,
  uu as Forklift,
  uu as ForkliftIcon,
  vu as Form,
  vu as FormIcon,
  DA as FormInput,
  DA as FormInputIcon,
  _u as Forward,
  _u as ForwardIcon,
  xu as Frame,
  xu as FrameIcon,
  wu as Framer,
  wu as FramerIcon,
  Iu as Frown,
  Iu as FrownIcon,
  $u as Fuel,
  $u as FuelIcon,
  Nu as Fullscreen,
  Nu as FullscreenIcon,
  cR as FunctionSquare,
  cR as FunctionSquareIcon,
  ju as Funnel,
  ju as FunnelIcon,
  zu as FunnelPlus,
  zu as FunnelPlusIcon,
  Au as FunnelX,
  Au as FunnelXIcon,
  Fu as GalleryHorizontal,
  Pu as GalleryHorizontalEnd,
  Pu as GalleryHorizontalEndIcon,
  Fu as GalleryHorizontalIcon,
  Ru as GalleryThumbnails,
  Ru as GalleryThumbnailsIcon,
  Gu as GalleryVertical,
  Uu as GalleryVerticalEnd,
  Uu as GalleryVerticalEndIcon,
  Gu as GalleryVerticalIcon,
  Qu as Gamepad,
  Wu as Gamepad2,
  Wu as Gamepad2Icon,
  Xu as GamepadDirectional,
  Xu as GamepadDirectionalIcon,
  Qu as GamepadIcon,
  ts as GanttChart,
  ts as GanttChartIcon,
  LD as GanttChartSquare,
  LD as GanttChartSquareIcon,
  Yu as Gauge,
  ry as GaugeCircle,
  ry as GaugeCircleIcon,
  Yu as GaugeIcon,
  aM as Gavel,
  aM as GavelIcon,
  tM as Gem,
  tM as GemIcon,
  dM as GeorgianLari,
  dM as GeorgianLariIcon,
  hM as Ghost,
  hM as GhostIcon,
  iM as Gift,
  iM as GiftIcon,
  uM as GitBranch,
  uM as GitBranchIcon,
  rM as GitBranchMinus,
  rM as GitBranchMinusIcon,
  pM as GitBranchPlus,
  pM as GitBranchPlusIcon,
  vM as GitCommit,
  vM as GitCommitHorizontal,
  vM as GitCommitHorizontalIcon,
  vM as GitCommitIcon,
  _M as GitCommitVertical,
  _M as GitCommitVerticalIcon,
  wM as GitCompare,
  xM as GitCompareArrows,
  xM as GitCompareArrowsIcon,
  wM as GitCompareIcon,
  IM as GitFork,
  IM as GitForkIcon,
  NM as GitGraph,
  NM as GitGraphIcon,
  $M as GitMerge,
  $M as GitMergeIcon,
  RM as GitPullRequest,
  zM as GitPullRequestArrow,
  zM as GitPullRequestArrowIcon,
  AM as GitPullRequestClosed,
  AM as GitPullRequestClosedIcon,
  jM as GitPullRequestCreate,
  PM as GitPullRequestCreateArrow,
  PM as GitPullRequestCreateArrowIcon,
  jM as GitPullRequestCreateIcon,
  FM as GitPullRequestDraft,
  FM as GitPullRequestDraftIcon,
  RM as GitPullRequestIcon,
  UM as Github,
  UM as GithubIcon,
  GM as Gitlab,
  GM as GitlabIcon,
  WM as GlassWater,
  WM as GlassWaterIcon,
  XM as Glasses,
  XM as GlassesIcon,
  YM as Globe,
  a8 as Globe2,
  a8 as Globe2Icon,
  YM as GlobeIcon,
  QM as GlobeLock,
  QM as GlobeLockIcon,
  av as Goal,
  av as GoalIcon,
  tv as Gpu,
  tv as GpuIcon,
  Rv as Grab,
  Rv as GrabIcon,
  dv as GraduationCap,
  dv as GraduationCapIcon,
  hv as Grape,
  hv as GrapeIcon,
  _v as Grid,
  uv as Grid2X2,
  iv as Grid2X2Check,
  iv as Grid2X2CheckIcon,
  uv as Grid2X2Icon,
  rv as Grid2X2Plus,
  rv as Grid2X2PlusIcon,
  pv as Grid2X2X,
  pv as Grid2X2XIcon,
  uv as Grid2x2,
  iv as Grid2x2Check,
  iv as Grid2x2CheckIcon,
  uv as Grid2x2Icon,
  rv as Grid2x2Plus,
  rv as Grid2x2PlusIcon,
  pv as Grid2x2X,
  pv as Grid2x2XIcon,
  _v as Grid3X3,
  _v as Grid3X3Icon,
  vv as Grid3x2,
  vv as Grid3x2Icon,
  _v as Grid3x3,
  _v as Grid3x3Icon,
  _v as GridIcon,
  Iv as Grip,
  xv as GripHorizontal,
  xv as GripHorizontalIcon,
  Iv as GripIcon,
  wv as GripVertical,
  wv as GripVerticalIcon,
  Nv as Group,
  Nv as GroupIcon,
  $v as Guitar,
  $v as GuitarIcon,
  zv as Ham,
  zv as HamIcon,
  Av as Hamburger,
  Av as HamburgerIcon,
  jv as Hammer,
  jv as HammerIcon,
  Qv as Hand,
  Pv as HandCoins,
  Pv as HandCoinsIcon,
  Fv as HandFist,
  Fv as HandFistIcon,
  Rv as HandGrab,
  Rv as HandGrabIcon,
  Uv as HandHeart,
  Uv as HandHeartIcon,
  Gv as HandHelping,
  Gv as HandHelpingIcon,
  Qv as HandIcon,
  Wv as HandMetal,
  Wv as HandMetalIcon,
  Xv as HandPlatter,
  Xv as HandPlatterIcon,
  Yv as Handbag,
  Yv as HandbagIcon,
  am as Handshake,
  am as HandshakeIcon,
  hm as HardDrive,
  tm as HardDriveDownload,
  tm as HardDriveDownloadIcon,
  hm as HardDriveIcon,
  dm as HardDriveUpload,
  dm as HardDriveUploadIcon,
  im as HardHat,
  im as HardHatIcon,
  rm as Hash,
  rm as HashIcon,
  pm as HatGlasses,
  pm as HatGlassesIcon,
  um as Haze,
  um as HazeIcon,
  vm as Hd,
  vm as HdIcon,
  _m as HdmiPort,
  _m as HdmiPortIcon,
  Am as Heading,
  xm as Heading1,
  xm as Heading1Icon,
  wm as Heading2,
  wm as Heading2Icon,
  Im as Heading3,
  Im as Heading3Icon,
  Nm as Heading4,
  Nm as Heading4Icon,
  $m as Heading5,
  $m as Heading5Icon,
  zm as Heading6,
  zm as Heading6Icon,
  Am as HeadingIcon,
  jm as HeadphoneOff,
  jm as HeadphoneOffIcon,
  Pm as Headphones,
  Pm as HeadphonesIcon,
  Fm as Headset,
  Fm as HeadsetIcon,
  Ym as Heart,
  Rm as HeartCrack,
  Rm as HeartCrackIcon,
  Um as HeartHandshake,
  Um as HeartHandshakeIcon,
  Ym as HeartIcon,
  Gm as HeartMinus,
  Gm as HeartMinusIcon,
  Wm as HeartOff,
  Wm as HeartOffIcon,
  Xm as HeartPlus,
  Xm as HeartPlusIcon,
  Qm as HeartPulse,
  Qm as HeartPulseIcon,
  a_ as Heater,
  a_ as HeaterIcon,
  d_ as Helicopter,
  d_ as HelicopterIcon,
  jy as HelpCircle,
  jy as HelpCircleIcon,
  Gv as HelpingHand,
  Gv as HelpingHandIcon,
  t_ as Hexagon,
  t_ as HexagonIcon,
  h_ as Highlighter,
  h_ as HighlighterIcon,
  i_ as History,
  i_ as HistoryIcon,
  $_ as Home,
  $_ as HomeIcon,
  p_ as Hop,
  p_ as HopIcon,
  r_ as HopOff,
  r_ as HopOffIcon,
  u_ as Hospital,
  u_ as HospitalIcon,
  v_ as Hotel,
  v_ as HotelIcon,
  __ as Hourglass,
  __ as HourglassIcon,
  $_ as House,
  w_ as HouseHeart,
  w_ as HouseHeartIcon,
  $_ as HouseIcon,
  x_ as HousePlug,
  x_ as HousePlugIcon,
  I_ as HousePlus,
  I_ as HousePlusIcon,
  N_ as HouseWifi,
  N_ as HouseWifiIcon,
  A_ as IceCream,
  z_ as IceCream2,
  z_ as IceCream2Icon,
  z_ as IceCreamBowl,
  z_ as IceCreamBowlIcon,
  A_ as IceCreamCone,
  A_ as IceCreamConeIcon,
  A_ as IceCreamIcon,
  _ as Icon,
  P_ as IdCard,
  P_ as IdCardIcon,
  j_ as IdCardLanyard,
  j_ as IdCardLanyardIcon,
  Y_ as Image,
  R_ as ImageDown,
  R_ as ImageDownIcon,
  Y_ as ImageIcon,
  F_ as ImageMinus,
  F_ as ImageMinusIcon,
  U_ as ImageOff,
  U_ as ImageOffIcon,
  G_ as ImagePlay,
  G_ as ImagePlayIcon,
  W_ as ImagePlus,
  W_ as ImagePlusIcon,
  X_ as ImageUp,
  X_ as ImageUpIcon,
  Q_ as ImageUpscale,
  Q_ as ImageUpscaleIcon,
  ag as Images,
  ag as ImagesIcon,
  tg as Import,
  tg as ImportIcon,
  dg as Inbox,
  dg as InboxIcon,
  zL as Indent,
  NL as IndentDecrease,
  NL as IndentDecreaseIcon,
  zL as IndentIcon,
  zL as IndentIncrease,
  zL as IndentIncreaseIcon,
  hg as IndianRupee,
  hg as IndianRupeeIcon,
  ig as Infinity,
  ig as InfinityIcon,
  rg as Info,
  rg as InfoIcon,
  lR as Inspect,
  lR as InspectIcon,
  pg as InspectionPanel,
  pg as InspectionPanelIcon,
  ug as Instagram,
  ug as InstagramIcon,
  vg as Italic,
  vg as ItalicIcon,
  _g as IterationCcw,
  _g as IterationCcwIcon,
  xg as IterationCw,
  xg as IterationCwIcon,
  wg as JapaneseYen,
  wg as JapaneseYenIcon,
  Ig as Joystick,
  Ig as JoystickIcon,
  Ng as Kanban,
  Ng as KanbanIcon,
  oR as KanbanSquare,
  TD as KanbanSquareDashed,
  TD as KanbanSquareDashedIcon,
  oR as KanbanSquareIcon,
  $g as Kayak,
  $g as KayakIcon,
  jg as Key,
  jg as KeyIcon,
  zg as KeyRound,
  zg as KeyRoundIcon,
  Ag as KeySquare,
  Ag as KeySquareIcon,
  Rg as Keyboard,
  Rg as KeyboardIcon,
  Pg as KeyboardMusic,
  Pg as KeyboardMusicIcon,
  Fg as KeyboardOff,
  Fg as KeyboardOffIcon,
  ax as Lamp,
  Ug as LampCeiling,
  Ug as LampCeilingIcon,
  Gg as LampDesk,
  Gg as LampDeskIcon,
  Wg as LampFloor,
  Wg as LampFloorIcon,
  ax as LampIcon,
  Xg as LampWallDown,
  Xg as LampWallDownIcon,
  Qg as LampWallUp,
  Qg as LampWallUpIcon,
  Yg as LandPlot,
  Yg as LandPlotIcon,
  tx as Landmark,
  tx as LandmarkIcon,
  dx as Languages,
  dx as LanguagesIcon,
  rx as Laptop,
  ix as Laptop2,
  ix as Laptop2Icon,
  rx as LaptopIcon,
  ix as LaptopMinimal,
  hx as LaptopMinimalCheck,
  hx as LaptopMinimalCheckIcon,
  ix as LaptopMinimalIcon,
  ux as Lasso,
  ux as LassoIcon,
  px as LassoSelect,
  px as LassoSelectIcon,
  vx as Laugh,
  vx as LaughIcon,
  wx as Layers,
  _x as Layers2,
  _x as Layers2Icon,
  wx as Layers3,
  wx as Layers3Icon,
  wx as LayersIcon,
  xx as LayersPlus,
  xx as LayersPlusIcon,
  mq as Layout,
  Ix as LayoutDashboard,
  Ix as LayoutDashboardIcon,
  Nx as LayoutGrid,
  Nx as LayoutGridIcon,
  mq as LayoutIcon,
  $x as LayoutList,
  $x as LayoutListIcon,
  zx as LayoutPanelLeft,
  zx as LayoutPanelLeftIcon,
  Ax as LayoutPanelTop,
  Ax as LayoutPanelTopIcon,
  jx as LayoutTemplate,
  jx as LayoutTemplateIcon,
  Px as Leaf,
  Px as LeafIcon,
  Fx as LeafyGreen,
  Fx as LeafyGreenIcon,
  Rx as Lectern,
  Rx as LecternIcon,
  OO as LetterText,
  OO as LetterTextIcon,
  Gx as Library,
  Ux as LibraryBig,
  Ux as LibraryBigIcon,
  Gx as LibraryIcon,
  nR as LibrarySquare,
  nR as LibrarySquareIcon,
  Wx as LifeBuoy,
  Wx as LifeBuoyIcon,
  Xx as Ligature,
  Xx as LigatureIcon,
  Yx as Lightbulb,
  Yx as LightbulbIcon,
  Qx as LightbulbOff,
  Qx as LightbulbOffIcon,
  Gh as LineChart,
  Gh as LineChartIcon,
  aL as LineSquiggle,
  aL as LineSquiggleIcon,
  hL as Link,
  dL as Link2,
  dL as Link2Icon,
  tL as Link2Off,
  tL as Link2OffIcon,
  hL as LinkIcon,
  iL as Linkedin,
  iL as LinkedinIcon,
  QL as List,
  rL as ListCheck,
  rL as ListCheckIcon,
  pL as ListChecks,
  pL as ListChecksIcon,
  uL as ListChevronsDownUp,
  uL as ListChevronsDownUpIcon,
  vL as ListChevronsUpDown,
  vL as ListChevronsUpDownIcon,
  _L as ListCollapse,
  _L as ListCollapseIcon,
  xL as ListEnd,
  xL as ListEndIcon,
  IL as ListFilter,
  IL as ListFilterIcon,
  wL as ListFilterPlus,
  wL as ListFilterPlusIcon,
  QL as ListIcon,
  NL as ListIndentDecrease,
  NL as ListIndentDecreaseIcon,
  zL as ListIndentIncrease,
  zL as ListIndentIncreaseIcon,
  $L as ListMinus,
  $L as ListMinusIcon,
  AL as ListMusic,
  AL as ListMusicIcon,
  jL as ListOrdered,
  jL as ListOrderedIcon,
  PL as ListPlus,
  PL as ListPlusIcon,
  FL as ListRestart,
  FL as ListRestartIcon,
  RL as ListStart,
  RL as ListStartIcon,
  UL as ListTodo,
  UL as ListTodoIcon,
  GL as ListTree,
  GL as ListTreeIcon,
  WL as ListVideo,
  WL as ListVideoIcon,
  XL as ListX,
  XL as ListXIcon,
  tw as Loader,
  YL as Loader2,
  YL as Loader2Icon,
  YL as LoaderCircle,
  YL as LoaderCircleIcon,
  tw as LoaderIcon,
  aw as LoaderPinwheel,
  aw as LoaderPinwheelIcon,
  iw as Locate,
  hw as LocateFixed,
  hw as LocateFixedIcon,
  iw as LocateIcon,
  dw as LocateOff,
  dw as LocateOffIcon,
  lf as LocationEdit,
  lf as LocationEditIcon,
  vw as Lock,
  vw as LockIcon,
  pw as LockKeyhole,
  pw as LockKeyholeIcon,
  rw as LockKeyholeOpen,
  rw as LockKeyholeOpenIcon,
  uw as LockOpen,
  uw as LockOpenIcon,
  _w as LogIn,
  _w as LogInIcon,
  xw as LogOut,
  xw as LogOutIcon,
  ww as Logs,
  ww as LogsIcon,
  Iw as Lollipop,
  Iw as LollipopIcon,
  x as LucideAArrowDown,
  I as LucideAArrowUp,
  w as LucideALargeSmall,
  N as LucideAccessibility,
  $ as LucideActivity,
  ZF as LucideActivitySquare,
  z as LucideAirVent,
  A as LucideAirplay,
  j as LucideAlarmCheck,
  U as LucideAlarmClock,
  j as LucideAlarmClockCheck,
  P as LucideAlarmClockMinus,
  F as LucideAlarmClockOff,
  R as LucideAlarmClockPlus,
  P as LucideAlarmMinus,
  R as LucideAlarmPlus,
  G as LucideAlarmSmoke,
  W as LucideAlbum,
  vi as LucideAlertCircle,
  Db as LucideAlertOctagon,
  BZ as LucideAlertTriangle,
  SO as LucideAlignCenter,
  X as LucideAlignCenterHorizontal,
  Q as LucideAlignCenterVertical,
  Y as LucideAlignEndHorizontal,
  a1 as LucideAlignEndVertical,
  t1 as LucideAlignHorizontalDistributeCenter,
  d1 as LucideAlignHorizontalDistributeEnd,
  h1 as LucideAlignHorizontalDistributeStart,
  i1 as LucideAlignHorizontalJustifyCenter,
  r1 as LucideAlignHorizontalJustifyEnd,
  p1 as LucideAlignHorizontalJustifyStart,
  u1 as LucideAlignHorizontalSpaceAround,
  v1 as LucideAlignHorizontalSpaceBetween,
  VO as LucideAlignJustify,
  BO as LucideAlignLeft,
  HO as LucideAlignRight,
  _1 as LucideAlignStartHorizontal,
  x1 as LucideAlignStartVertical,
  w1 as LucideAlignVerticalDistributeCenter,
  I1 as LucideAlignVerticalDistributeEnd,
  N1 as LucideAlignVerticalDistributeStart,
  $1 as LucideAlignVerticalJustifyCenter,
  z1 as LucideAlignVerticalJustifyEnd,
  A1 as LucideAlignVerticalJustifyStart,
  j1 as LucideAlignVerticalSpaceAround,
  P1 as LucideAlignVerticalSpaceBetween,
  F1 as LucideAmbulance,
  R1 as LucideAmpersand,
  U1 as LucideAmpersands,
  G1 as LucideAmphora,
  W1 as LucideAnchor,
  X1 as LucideAngry,
  Q1 as LucideAnnoyed,
  Y1 as LucideAntenna,
  a2 as LucideAnvil,
  t2 as LucideAperture,
  h2 as LucideAppWindow,
  d2 as LucideAppWindowMac,
  i2 as LucideApple,
  v2 as LucideArchive,
  r2 as LucideArchiveRestore,
  p2 as LucideArchiveX,
  _h as LucideAreaChart,
  u2 as LucideArmchair,
  x2 as LucideArrowBigDown,
  _2 as LucideArrowBigDownDash,
  I2 as LucideArrowBigLeft,
  w2 as LucideArrowBigLeftDash,
  $2 as LucideArrowBigRight,
  N2 as LucideArrowBigRightDash,
  A2 as LucideArrowBigUp,
  z2 as LucideArrowBigUpDash,
  de as LucideArrowDown,
  j2 as LucideArrowDown01,
  P2 as LucideArrowDown10,
  F2 as LucideArrowDownAZ,
  F2 as LucideArrowDownAz,
  _i as LucideArrowDownCircle,
  U2 as LucideArrowDownFromLine,
  R2 as LucideArrowDownLeft,
  wi as LucideArrowDownLeftFromCircle,
  cD as LucideArrowDownLeftFromSquare,
  EF as LucideArrowDownLeftSquare,
  G2 as LucideArrowDownNarrowWide,
  W2 as LucideArrowDownRight,
  Ii as LucideArrowDownRightFromCircle,
  oD as LucideArrowDownRightFromSquare,
  KF as LucideArrowDownRightSquare,
  JF as LucideArrowDownSquare,
  Q2 as LucideArrowDownToDot,
  X2 as LucideArrowDownToLine,
  Y2 as LucideArrowDownUp,
  ae as LucideArrowDownWideNarrow,
  te as LucideArrowDownZA,
  te as LucideArrowDownZa,
  pe as LucideArrowLeft,
  xi as LucideArrowLeftCircle,
  he as LucideArrowLeftFromLine,
  ie as LucideArrowLeftRight,
  eD as LucideArrowLeftSquare,
  re as LucideArrowLeftToLine,
  xe as LucideArrowRight,
  zi as LucideArrowRightCircle,
  ue as LucideArrowRightFromLine,
  ve as LucideArrowRightLeft,
  yD as LucideArrowRightSquare,
  _e as LucideArrowRightToLine,
  We as LucideArrowUp,
  we as LucideArrowUp01,
  Ie as LucideArrowUp10,
  Ne as LucideArrowUpAZ,
  Ne as LucideArrowUpAz,
  Ai as LucideArrowUpCircle,
  $e as LucideArrowUpDown,
  Ae as LucideArrowUpFromDot,
  ze as LucideArrowUpFromLine,
  je as LucideArrowUpLeft,
  Ni as LucideArrowUpLeftFromCircle,
  nD as LucideArrowUpLeftFromSquare,
  kD as LucideArrowUpLeftSquare,
  Pe as LucideArrowUpNarrowWide,
  Fe as LucideArrowUpRight,
  $i as LucideArrowUpRightFromCircle,
  sD as LucideArrowUpRightFromSquare,
  lD as LucideArrowUpRightSquare,
  MD as LucideArrowUpSquare,
  Re as LucideArrowUpToLine,
  Ue as LucideArrowUpWideNarrow,
  Ge as LucideArrowUpZA,
  Ge as LucideArrowUpZa,
  Xe as LucideArrowsUpFromLine,
  Qe as LucideAsterisk,
  mD as LucideAsteriskSquare,
  Ye as LucideAtSign,
  aa as LucideAtom,
  ta as LucideAudioLines,
  da as LucideAudioWaveform,
  ha as LucideAward,
  ia as LucideAxe,
  ra as LucideAxis3D,
  ra as LucideAxis3d,
  pa as LucideBaby,
  ua as LucideBackpack,
  Qa as LucideBadge,
  va as LucideBadgeAlert,
  _a as LucideBadgeCent,
  xa as LucideBadgeCheck,
  wa as LucideBadgeDollarSign,
  Ia as LucideBadgeEuro,
  Fa as LucideBadgeHelp,
  Na as LucideBadgeIndianRupee,
  za as LucideBadgeInfo,
  $a as LucideBadgeJapaneseYen,
  Aa as LucideBadgeMinus,
  ja as LucideBadgePercent,
  Pa as LucideBadgePlus,
  Ra as LucideBadgePoundSterling,
  Fa as LucideBadgeQuestionMark,
  Ua as LucideBadgeRussianRuble,
  Ga as LucideBadgeSwissFranc,
  Wa as LucideBadgeTurkishLira,
  Xa as LucideBadgeX,
  Ya as LucideBaggageClaim,
  a0 as LucideBalloon,
  t0 as LucideBan,
  d0 as LucideBanana,
  h0 as LucideBandage,
  u0 as LucideBanknote,
  i0 as LucideBanknoteArrowDown,
  r0 as LucideBanknoteArrowUp,
  p0 as LucideBanknoteX,
  Qh as LucideBarChart,
  Yh as LucideBarChart2,
  Rh as LucideBarChart3,
  Ph as LucideBarChart4,
  Ah as LucideBarChartBig,
  $h as LucideBarChartHorizontal,
  xh as LucideBarChartHorizontalBig,
  v0 as LucideBarcode,
  _0 as LucideBarrel,
  x0 as LucideBaseline,
  w0 as LucideBath,
  P0 as LucideBattery,
  I0 as LucideBatteryCharging,
  N0 as LucideBatteryFull,
  $0 as LucideBatteryLow,
  z0 as LucideBatteryMedium,
  A0 as LucideBatteryPlus,
  j0 as LucideBatteryWarning,
  F0 as LucideBeaker,
  U0 as LucideBean,
  R0 as LucideBeanOff,
  X0 as LucideBed,
  G0 as LucideBedDouble,
  W0 as LucideBedSingle,
  Q0 as LucideBeef,
  ac as LucideBeer,
  Y0 as LucideBeerOff,
  uc as LucideBell,
  tc as LucideBellDot,
  dc as LucideBellElectric,
  hc as LucideBellMinus,
  ic as LucideBellOff,
  rc as LucideBellPlus,
  pc as LucideBellRing,
  vc as LucideBetweenHorizonalEnd,
  _c as LucideBetweenHorizonalStart,
  vc as LucideBetweenHorizontalEnd,
  _c as LucideBetweenHorizontalStart,
  xc as LucideBetweenVerticalEnd,
  wc as LucideBetweenVerticalStart,
  Ic as LucideBicepsFlexed,
  Nc as LucideBike,
  $c as LucideBinary,
  zc as LucideBinoculars,
  Ac as LucideBiohazard,
  jc as LucideBird,
  Pc as LucideBirdhouse,
  Rc as LucideBitcoin,
  Fc as LucideBlend,
  Uc as LucideBlinds,
  Gc as LucideBlocks,
  Yc as LucideBluetooth,
  Wc as LucideBluetoothConnected,
  Xc as LucideBluetoothOff,
  Qc as LucideBluetoothSearching,
  at as LucideBold,
  tt as LucideBolt,
  dt as LucideBomb,
  ht as LucideBone,
  no as LucideBook,
  it as LucideBookA,
  pt as LucideBookAlert,
  rt as LucideBookAudio,
  ut as LucideBookCheck,
  vt as LucideBookCopy,
  _t as LucideBookDashed,
  xt as LucideBookDown,
  wt as LucideBookHeadphones,
  It as LucideBookHeart,
  Nt as LucideBookImage,
  $t as LucideBookKey,
  zt as LucideBookLock,
  At as LucideBookMarked,
  jt as LucideBookMinus,
  Rt as LucideBookOpen,
  Pt as LucideBookOpenCheck,
  Ft as LucideBookOpenText,
  Ut as LucideBookPlus,
  Gt as LucideBookSearch,
  _t as LucideBookTemplate,
  Wt as LucideBookText,
  Xt as LucideBookType,
  Qt as LucideBookUp,
  Yt as LucideBookUp2,
  ao as LucideBookUser,
  to as LucideBookX,
  Mo as LucideBookmark,
  so as LucideBookmarkCheck,
  yo as LucideBookmarkMinus,
  ko as LucideBookmarkPlus,
  lo as LucideBookmarkX,
  mo as LucideBoomBox,
  fo as LucideBot,
  go as LucideBotMessageSquare,
  Lo as LucideBotOff,
  Co as LucideBottleWine,
  bo as LucideBowArrow,
  qo as LucideBox,
  ED as LucideBoxSelect,
  So as LucideBoxes,
  Ho as LucideBraces,
  Vo as LucideBrackets,
  To as LucideBrain,
  Bo as LucideBrainCircuit,
  Do as LucideBrainCog,
  Eo as LucideBrickWall,
  Oo as LucideBrickWallFire,
  Zo as LucideBrickWallShield,
  cd as LucideBriefcase,
  Ko as LucideBriefcaseBusiness,
  Jo as LucideBriefcaseConveyorBelt,
  ed as LucideBriefcaseMedical,
  od as LucideBringToFront,
  sd as LucideBrush,
  nd as LucideBrushCleaning,
  yd as LucideBubbles,
  Md as LucideBug,
  kd as LucideBugOff,
  ld as LucideBugPlay,
  gd as LucideBuilding,
  md as LucideBuilding2,
  fd as LucideBus,
  Ld as LucideBusFront,
  bd as LucideCable,
  Cd as LucideCableCar,
  Sd as LucideCake,
  qd as LucideCakeSlice,
  Hd as LucideCalculator,
  wn as LucideCalendar,
  Vd as LucideCalendar1,
  Bd as LucideCalendarArrowDown,
  Dd as LucideCalendarArrowUp,
  Zd as LucideCalendarCheck,
  Td as LucideCalendarCheck2,
  Od as LucideCalendarClock,
  Ed as LucideCalendarCog,
  Kd as LucideCalendarDays,
  Jd as LucideCalendarFold,
  en as LucideCalendarHeart,
  on as LucideCalendarMinus,
  cn as LucideCalendarMinus2,
  nn as LucideCalendarOff,
  rn as LucideCalendarPlus,
  sn as LucideCalendarPlus2,
  pn as LucideCalendarRange,
  un as LucideCalendarSearch,
  vn as LucideCalendarSync,
  xn as LucideCalendarX,
  _n as LucideCalendarX2,
  In as LucideCalendars,
  $n as LucideCamera,
  Nn as LucideCameraOff,
  zh as LucideCandlestickChart,
  jn as LucideCandy,
  zn as LucideCandyCane,
  An as LucideCandyOff,
  Pn as LucideCannabis,
  Fn as LucideCannabisOff,
  Un as LucideCaptions,
  Rn as LucideCaptionsOff,
  Xn as LucideCar,
  Gn as LucideCarFront,
  Wn as LucideCarTaxiFront,
  Qn as LucideCaravan,
  Yn as LucideCardSim,
  ah as LucideCarrot,
  th as LucideCaseLower,
  dh as LucideCaseSensitive,
  hh as LucideCaseUpper,
  ih as LucideCassetteTape,
  rh as LucideCast,
  uh as LucideCastle,
  ph as LucideCat,
  vh as LucideCctv,
  _h as LucideChartArea,
  $h as LucideChartBar,
  xh as LucideChartBarBig,
  wh as LucideChartBarDecreasing,
  Ih as LucideChartBarIncreasing,
  Nh as LucideChartBarStacked,
  zh as LucideChartCandlestick,
  Rh as LucideChartColumn,
  Ah as LucideChartColumnBig,
  jh as LucideChartColumnDecreasing,
  Ph as LucideChartColumnIncreasing,
  Fh as LucideChartColumnStacked,
  Uh as LucideChartGantt,
  Gh as LucideChartLine,
  Wh as LucideChartNetwork,
  Yh as LucideChartNoAxesColumn,
  Xh as LucideChartNoAxesColumnDecreasing,
  Qh as LucideChartNoAxesColumnIncreasing,
  as as LucideChartNoAxesCombined,
  ts as LucideChartNoAxesGantt,
  ds as LucideChartPie,
  hs as LucideChartScatter,
  is as LucideChartSpline,
  us as LucideCheck,
  rs as LucideCheckCheck,
  ji as LucideCheckCircle,
  Pi as LucideCheckCircle2,
  ps as LucideCheckLine,
  fD as LucideCheckSquare,
  CD as LucideCheckSquare2,
  vs as LucideChefHat,
  _s as LucideCherry,
  xs as LucideChessBishop,
  ws as LucideChessKing,
  Is as LucideChessKnight,
  Ns as LucideChessPawn,
  $s as LucideChessQueen,
  As as LucideChessRook,
  zs as LucideChevronDown,
  Fi as LucideChevronDownCircle,
  bD as LucideChevronDownSquare,
  js as LucideChevronFirst,
  Ps as LucideChevronLast,
  Fs as LucideChevronLeft,
  Ri as LucideChevronLeftCircle,
  qD as LucideChevronLeftSquare,
  Rs as LucideChevronRight,
  Ui as LucideChevronRightCircle,
  SD as LucideChevronRightSquare,
  Us as LucideChevronUp,
  Gi as LucideChevronUpCircle,
  HD as LucideChevronUpSquare,
  Ws as LucideChevronsDown,
  Gs as LucideChevronsDownUp,
  Ys as LucideChevronsLeft,
  Qs as LucideChevronsLeftRight,
  Xs as LucideChevronsLeftRightEllipsis,
  ai as LucideChevronsRight,
  ti as LucideChevronsRightLeft,
  hi as LucideChevronsUp,
  di as LucideChevronsUpDown,
  ii as LucideChrome,
  ii as LucideChromium,
  ri as LucideChurch,
  ui as LucideCigarette,
  pi as LucideCigaretteOff,
  Yy as LucideCircle,
  vi as LucideCircleAlert,
  _i as LucideCircleArrowDown,
  xi as LucideCircleArrowLeft,
  wi as LucideCircleArrowOutDownLeft,
  Ii as LucideCircleArrowOutDownRight,
  Ni as LucideCircleArrowOutUpLeft,
  $i as LucideCircleArrowOutUpRight,
  zi as LucideCircleArrowRight,
  Ai as LucideCircleArrowUp,
  Pi as LucideCircleCheck,
  ji as LucideCircleCheckBig,
  Fi as LucideCircleChevronDown,
  Ri as LucideCircleChevronLeft,
  Ui as LucideCircleChevronRight,
  Gi as LucideCircleChevronUp,
  Wi as LucideCircleDashed,
  Xi as LucideCircleDivide,
  Qi as LucideCircleDollarSign,
  ay as LucideCircleDot,
  Yi as LucideCircleDotDashed,
  ty as LucideCircleEllipsis,
  dy as LucideCircleEqual,
  hy as LucideCircleFadingArrowUp,
  iy as LucideCircleFadingPlus,
  ry as LucideCircleGauge,
  jy as LucideCircleHelp,
  py as LucideCircleMinus,
  uy as LucideCircleOff,
  _y as LucideCircleParking,
  vy as LucideCircleParkingOff,
  xy as LucideCirclePause,
  wy as LucideCirclePercent,
  Iy as LucideCirclePile,
  Ny as LucideCirclePlay,
  $y as LucideCirclePlus,
  zy as LucideCirclePoundSterling,
  Ay as LucideCirclePower,
  jy as LucideCircleQuestionMark,
  Fy as LucideCircleSlash,
  Py as LucideCircleSlash2,
  Py as LucideCircleSlashed,
  Ry as LucideCircleSmall,
  Uy as LucideCircleStar,
  Gy as LucideCircleStop,
  Xy as LucideCircleUser,
  Wy as LucideCircleUserRound,
  Qy as LucideCircleX,
  a4 as LucideCircuitBoard,
  t4 as LucideCitrus,
  d4 as LucideClapperboard,
  $4 as LucideClipboard,
  h4 as LucideClipboardCheck,
  i4 as LucideClipboardClock,
  r4 as LucideClipboardCopy,
  x4 as LucideClipboardEdit,
  p4 as LucideClipboardList,
  u4 as LucideClipboardMinus,
  v4 as LucideClipboardPaste,
  x4 as LucideClipboardPen,
  _4 as LucideClipboardPenLine,
  w4 as LucideClipboardPlus,
  _4 as LucideClipboardSignature,
  I4 as LucideClipboardType,
  N4 as LucideClipboardX,
  p5 as LucideClock,
  z4 as LucideClock1,
  A4 as LucideClock10,
  j4 as LucideClock11,
  P4 as LucideClock12,
  F4 as LucideClock2,
  R4 as LucideClock3,
  U4 as LucideClock4,
  G4 as LucideClock5,
  W4 as LucideClock6,
  X4 as LucideClock7,
  Q4 as LucideClock8,
  Y4 as LucideClock9,
  a5 as LucideClockAlert,
  t5 as LucideClockArrowDown,
  d5 as LucideClockArrowUp,
  h5 as LucideClockCheck,
  i5 as LucideClockFading,
  r5 as LucideClockPlus,
  u5 as LucideClosedCaption,
  ar as LucideCloud,
  v5 as LucideCloudAlert,
  _5 as LucideCloudBackup,
  x5 as LucideCloudCheck,
  w5 as LucideCloudCog,
  I5 as LucideCloudDownload,
  N5 as LucideCloudDrizzle,
  $5 as LucideCloudFog,
  z5 as LucideCloudHail,
  A5 as LucideCloudLightning,
  P5 as LucideCloudMoon,
  j5 as LucideCloudMoonRain,
  F5 as LucideCloudOff,
  U5 as LucideCloudRain,
  R5 as LucideCloudRainWind,
  G5 as LucideCloudSnow,
  X5 as LucideCloudSun,
  W5 as LucideCloudSunRain,
  Q5 as LucideCloudSync,
  Y5 as LucideCloudUpload,
  tr as LucideCloudy,
  dr as LucideClover,
  hr as LucideClub,
  rr as LucideCode,
  ir as LucideCode2,
  BD as LucideCodeSquare,
  ir as LucideCodeXml,
  pr as LucideCodepen,
  ur as LucideCodesandbox,
  vr as LucideCoffee,
  _r as LucideCog,
  xr as LucideCoins,
  wr as LucideColumns,
  wr as LucideColumns2,
  Nr as LucideColumns3,
  Ir as LucideColumns3Cog,
  $r as LucideColumns4,
  Ir as LucideColumnsSettings,
  zr as LucideCombine,
  Ar as LucideCommand,
  jr as LucideCompass,
  Pr as LucideComponent,
  Fr as LucideComputer,
  Rr as LucideConciergeBell,
  Ur as LucideCone,
  Gr as LucideConstruction,
  Xr as LucideContact,
  Wr as LucideContact2,
  Wr as LucideContactRound,
  Qr as LucideContainer,
  Yr as LucideContrast,
  ak as LucideCookie,
  tk as LucideCookingPot,
  uk as LucideCopy,
  dk as LucideCopyCheck,
  hk as LucideCopyMinus,
  ik as LucideCopyPlus,
  rk as LucideCopySlash,
  pk as LucideCopyX,
  vk as LucideCopyleft,
  _k as LucideCopyright,
  xk as LucideCornerDownLeft,
  wk as LucideCornerDownRight,
  Ik as LucideCornerLeftDown,
  Nk as LucideCornerLeftUp,
  $k as LucideCornerRightDown,
  zk as LucideCornerRightUp,
  Ak as LucideCornerUpLeft,
  jk as LucideCornerUpRight,
  Pk as LucideCpu,
  Fk as LucideCreativeCommons,
  Rk as LucideCreditCard,
  Uk as LucideCroissant,
  Gk as LucideCrop,
  Wk as LucideCross,
  Xk as LucideCrosshair,
  Qk as LucideCrown,
  ap as LucideCuboid,
  Yk as LucideCupSoda,
  Ho as LucideCurlyBraces,
  tp as LucideCurrency,
  dp as LucideCylinder,
  hp as LucideDam,
  pp as LucideDatabase,
  ip as LucideDatabaseBackup,
  rp as LucideDatabaseZap,
  up as LucideDecimalsArrowLeft,
  vp as LucideDecimalsArrowRight,
  _p as LucideDelete,
  xp as LucideDessert,
  wp as LucideDiameter,
  zp as LucideDiamond,
  Ip as LucideDiamondMinus,
  Np as LucideDiamondPercent,
  $p as LucideDiamondPlus,
  Ap as LucideDice1,
  jp as LucideDice2,
  Pp as LucideDice3,
  Fp as LucideDice4,
  Rp as LucideDice5,
  Up as LucideDice6,
  Gp as LucideDices,
  Wp as LucideDiff,
  a3 as LucideDisc,
  Xp as LucideDisc2,
  Qp as LucideDisc3,
  Yp as LucideDiscAlbum,
  t3 as LucideDivide,
  Xi as LucideDivideCircle,
  KD as LucideDivideSquare,
  h3 as LucideDna,
  d3 as LucideDnaOff,
  i3 as LucideDock,
  r3 as LucideDog,
  p3 as LucideDollarSign,
  u3 as LucideDonut,
  _3 as LucideDoorClosed,
  v3 as LucideDoorClosedLocked,
  x3 as LucideDoorOpen,
  w3 as LucideDot,
  JD as LucideDotSquare,
  I3 as LucideDownload,
  I5 as LucideDownloadCloud,
  N3 as LucideDraftingCompass,
  $3 as LucideDrama,
  z3 as LucideDribbble,
  A3 as LucideDrill,
  j3 as LucideDrone,
  F3 as LucideDroplet,
  P3 as LucideDropletOff,
  R3 as LucideDroplets,
  U3 as LucideDrum,
  G3 as LucideDrumstick,
  W3 as LucideDumbbell,
  Q3 as LucideEar,
  X3 as LucideEarOff,
  a8 as LucideEarth,
  Y3 as LucideEarthLock,
  t8 as LucideEclipse,
  LR as LucideEdit,
  Dq as LucideEdit2,
  Hq as LucideEdit3,
  i8 as LucideEgg,
  d8 as LucideEggFried,
  h8 as LucideEggOff,
  p8 as LucideEllipsis,
  r8 as LucideEllipsisVertical,
  _8 as LucideEqual,
  u8 as LucideEqualApproximately,
  v8 as LucideEqualNot,
  eR as LucideEqualSquare,
  x8 as LucideEraser,
  w8 as LucideEthernetPort,
  I8 as LucideEuro,
  N8 as LucideEvCharger,
  $8 as LucideExpand,
  z8 as LucideExternalLink,
  P8 as LucideEye,
  A8 as LucideEyeClosed,
  j8 as LucideEyeOff,
  F8 as LucideFacebook,
  R8 as LucideFactory,
  U8 as LucideFan,
  G8 as LucideFastForward,
  W8 as LucideFeather,
  X8 as LucideFence,
  Q8 as LucideFerrisWheel,
  Y8 as LucideFigma,
  a7 as LucideFile,
  a6 as LucideFileArchive,
  R6 as LucideFileAudio,
  R6 as LucideFileAudio2,
  t6 as LucideFileAxis3D,
  t6 as LucideFileAxis3d,
  d6 as LucideFileBadge,
  d6 as LucideFileBadge2,
  p6 as LucideFileBarChart,
  u6 as LucideFileBarChart2,
  h6 as LucideFileBox,
  r6 as LucideFileBraces,
  i6 as LucideFileBracesCorner,
  u6 as LucideFileChartColumn,
  p6 as LucideFileChartColumnIncreasing,
  v6 as LucideFileChartLine,
  x6 as LucideFileChartPie,
  w6 as LucideFileCheck,
  _6 as LucideFileCheck2,
  _6 as LucideFileCheckCorner,
  I6 as LucideFileClock,
  $6 as LucideFileCode,
  N6 as LucideFileCode2,
  N6 as LucideFileCodeCorner,
  z6 as LucideFileCog,
  z6 as LucideFileCog2,
  A6 as LucideFileDiff,
  j6 as LucideFileDigit,
  P6 as LucideFileDown,
  il as LucideFileEdit,
  F6 as LucideFileExclamationPoint,
  R6 as LucideFileHeadphone,
  U6 as LucideFileHeart,
  G6 as LucideFileImage,
  W6 as LucideFileInput,
  r6 as LucideFileJson,
  i6 as LucideFileJson2,
  Q6 as LucideFileKey,
  Q6 as LucideFileKey2,
  v6 as LucideFileLineChart,
  X6 as LucideFileLock,
  X6 as LucideFileLock2,
  al as LucideFileMinus,
  Y6 as LucideFileMinus2,
  Y6 as LucideFileMinusCorner,
  tl as LucideFileMusic,
  dl as LucideFileOutput,
  il as LucideFilePen,
  hl as LucideFilePenLine,
  x6 as LucideFilePieChart,
  rl as LucideFilePlay,
  ul as LucideFilePlus,
  pl as LucideFilePlus2,
  pl as LucideFilePlusCorner,
  vl as LucideFileQuestion,
  vl as LucideFileQuestionMark,
  _l as LucideFileScan,
  wl as LucideFileSearch,
  xl as LucideFileSearch2,
  xl as LucideFileSearchCorner,
  Il as LucideFileSignal,
  hl as LucideFileSignature,
  Nl as LucideFileSliders,
  $l as LucideFileSpreadsheet,
  zl as LucideFileStack,
  Al as LucideFileSymlink,
  jl as LucideFileTerminal,
  Pl as LucideFileText,
  Rl as LucideFileType,
  Fl as LucideFileType2,
  Fl as LucideFileTypeCorner,
  Gl as LucideFileUp,
  Ul as LucideFileUser,
  rl as LucideFileVideo,
  Wl as LucideFileVideo2,
  Wl as LucideFileVideoCamera,
  Xl as LucideFileVolume,
  Il as LucideFileVolume2,
  F6 as LucideFileWarning,
  Yl as LucideFileX,
  Ql as LucideFileX2,
  Ql as LucideFileXCorner,
  t7 as LucideFiles,
  d7 as LucideFilm,
  ju as LucideFilter,
  Au as LucideFilterX,
  h7 as LucideFingerprint,
  h7 as LucideFingerprintPattern,
  i7 as LucideFireExtinguisher,
  u7 as LucideFish,
  r7 as LucideFishOff,
  p7 as LucideFishSymbol,
  v7 as LucideFishingHook,
  I7 as LucideFlag,
  _7 as LucideFlagOff,
  x7 as LucideFlagTriangleLeft,
  w7 as LucideFlagTriangleRight,
  $7 as LucideFlame,
  N7 as LucideFlameKindling,
  A7 as LucideFlashlight,
  z7 as LucideFlashlightOff,
  j7 as LucideFlaskConical,
  P7 as LucideFlaskConicalOff,
  F7 as LucideFlaskRound,
  U7 as LucideFlipHorizontal,
  R7 as LucideFlipHorizontal2,
  W7 as LucideFlipVertical,
  G7 as LucideFlipVertical2,
  Q7 as LucideFlower,
  X7 as LucideFlower2,
  Y7 as LucideFocus,
  a9 as LucideFoldHorizontal,
  t9 as LucideFoldVertical,
  iu as LucideFolder,
  d9 as LucideFolderArchive,
  h9 as LucideFolderCheck,
  i9 as LucideFolderClock,
  r9 as LucideFolderClosed,
  p9 as LucideFolderCode,
  u9 as LucideFolderCog,
  u9 as LucideFolderCog2,
  v9 as LucideFolderDot,
  _9 as LucideFolderDown,
  U9 as LucideFolderEdit,
  w9 as LucideFolderGit,
  x9 as LucideFolderGit2,
  I9 as LucideFolderHeart,
  N9 as LucideFolderInput,
  $9 as LucideFolderKanban,
  z9 as LucideFolderKey,
  A9 as LucideFolderLock,
  j9 as LucideFolderMinus,
  F9 as LucideFolderOpen,
  P9 as LucideFolderOpenDot,
  R9 as LucideFolderOutput,
  U9 as LucideFolderPen,
  G9 as LucideFolderPlus,
  W9 as LucideFolderRoot,
  Q9 as LucideFolderSearch,
  X9 as LucideFolderSearch2,
  Y9 as LucideFolderSymlink,
  au as LucideFolderSync,
  tu as LucideFolderTree,
  du as LucideFolderUp,
  hu as LucideFolderX,
  ru as LucideFolders,
  pu as LucideFootprints,
  VE as LucideForkKnife,
  HE as LucideForkKnifeCrossed,
  uu as LucideForklift,
  vu as LucideForm,
  DA as LucideFormInput,
  _u as LucideForward,
  xu as LucideFrame,
  wu as LucideFramer,
  Iu as LucideFrown,
  $u as LucideFuel,
  Nu as LucideFullscreen,
  cR as LucideFunctionSquare,
  ju as LucideFunnel,
  zu as LucideFunnelPlus,
  Au as LucideFunnelX,
  Fu as LucideGalleryHorizontal,
  Pu as LucideGalleryHorizontalEnd,
  Ru as LucideGalleryThumbnails,
  Gu as LucideGalleryVertical,
  Uu as LucideGalleryVerticalEnd,
  Qu as LucideGamepad,
  Wu as LucideGamepad2,
  Xu as LucideGamepadDirectional,
  ts as LucideGanttChart,
  LD as LucideGanttChartSquare,
  Yu as LucideGauge,
  ry as LucideGaugeCircle,
  aM as LucideGavel,
  tM as LucideGem,
  dM as LucideGeorgianLari,
  hM as LucideGhost,
  iM as LucideGift,
  uM as LucideGitBranch,
  rM as LucideGitBranchMinus,
  pM as LucideGitBranchPlus,
  vM as LucideGitCommit,
  vM as LucideGitCommitHorizontal,
  _M as LucideGitCommitVertical,
  wM as LucideGitCompare,
  xM as LucideGitCompareArrows,
  IM as LucideGitFork,
  NM as LucideGitGraph,
  $M as LucideGitMerge,
  RM as LucideGitPullRequest,
  zM as LucideGitPullRequestArrow,
  AM as LucideGitPullRequestClosed,
  jM as LucideGitPullRequestCreate,
  PM as LucideGitPullRequestCreateArrow,
  FM as LucideGitPullRequestDraft,
  UM as LucideGithub,
  GM as LucideGitlab,
  WM as LucideGlassWater,
  XM as LucideGlasses,
  YM as LucideGlobe,
  a8 as LucideGlobe2,
  QM as LucideGlobeLock,
  av as LucideGoal,
  tv as LucideGpu,
  Rv as LucideGrab,
  dv as LucideGraduationCap,
  hv as LucideGrape,
  _v as LucideGrid,
  uv as LucideGrid2X2,
  iv as LucideGrid2X2Check,
  rv as LucideGrid2X2Plus,
  pv as LucideGrid2X2X,
  uv as LucideGrid2x2,
  iv as LucideGrid2x2Check,
  rv as LucideGrid2x2Plus,
  pv as LucideGrid2x2X,
  _v as LucideGrid3X3,
  vv as LucideGrid3x2,
  _v as LucideGrid3x3,
  Iv as LucideGrip,
  xv as LucideGripHorizontal,
  wv as LucideGripVertical,
  Nv as LucideGroup,
  $v as LucideGuitar,
  zv as LucideHam,
  Av as LucideHamburger,
  jv as LucideHammer,
  Qv as LucideHand,
  Pv as LucideHandCoins,
  Fv as LucideHandFist,
  Rv as LucideHandGrab,
  Uv as LucideHandHeart,
  Gv as LucideHandHelping,
  Wv as LucideHandMetal,
  Xv as LucideHandPlatter,
  Yv as LucideHandbag,
  am as LucideHandshake,
  hm as LucideHardDrive,
  tm as LucideHardDriveDownload,
  dm as LucideHardDriveUpload,
  im as LucideHardHat,
  rm as LucideHash,
  pm as LucideHatGlasses,
  um as LucideHaze,
  vm as LucideHd,
  _m as LucideHdmiPort,
  Am as LucideHeading,
  xm as LucideHeading1,
  wm as LucideHeading2,
  Im as LucideHeading3,
  Nm as LucideHeading4,
  $m as LucideHeading5,
  zm as LucideHeading6,
  jm as LucideHeadphoneOff,
  Pm as LucideHeadphones,
  Fm as LucideHeadset,
  Ym as LucideHeart,
  Rm as LucideHeartCrack,
  Um as LucideHeartHandshake,
  Gm as LucideHeartMinus,
  Wm as LucideHeartOff,
  Xm as LucideHeartPlus,
  Qm as LucideHeartPulse,
  a_ as LucideHeater,
  d_ as LucideHelicopter,
  jy as LucideHelpCircle,
  Gv as LucideHelpingHand,
  t_ as LucideHexagon,
  h_ as LucideHighlighter,
  i_ as LucideHistory,
  $_ as LucideHome,
  p_ as LucideHop,
  r_ as LucideHopOff,
  u_ as LucideHospital,
  v_ as LucideHotel,
  __ as LucideHourglass,
  $_ as LucideHouse,
  w_ as LucideHouseHeart,
  x_ as LucideHousePlug,
  I_ as LucideHousePlus,
  N_ as LucideHouseWifi,
  A_ as LucideIceCream,
  z_ as LucideIceCream2,
  z_ as LucideIceCreamBowl,
  A_ as LucideIceCreamCone,
  P_ as LucideIdCard,
  j_ as LucideIdCardLanyard,
  Y_ as LucideImage,
  R_ as LucideImageDown,
  F_ as LucideImageMinus,
  U_ as LucideImageOff,
  G_ as LucideImagePlay,
  W_ as LucideImagePlus,
  X_ as LucideImageUp,
  Q_ as LucideImageUpscale,
  ag as LucideImages,
  tg as LucideImport,
  dg as LucideInbox,
  zL as LucideIndent,
  NL as LucideIndentDecrease,
  zL as LucideIndentIncrease,
  hg as LucideIndianRupee,
  ig as LucideInfinity,
  rg as LucideInfo,
  lR as LucideInspect,
  pg as LucideInspectionPanel,
  ug as LucideInstagram,
  vg as LucideItalic,
  _g as LucideIterationCcw,
  xg as LucideIterationCw,
  wg as LucideJapaneseYen,
  Ig as LucideJoystick,
  Ng as LucideKanban,
  oR as LucideKanbanSquare,
  TD as LucideKanbanSquareDashed,
  $g as LucideKayak,
  jg as LucideKey,
  zg as LucideKeyRound,
  Ag as LucideKeySquare,
  Rg as LucideKeyboard,
  Pg as LucideKeyboardMusic,
  Fg as LucideKeyboardOff,
  ax as LucideLamp,
  Ug as LucideLampCeiling,
  Gg as LucideLampDesk,
  Wg as LucideLampFloor,
  Xg as LucideLampWallDown,
  Qg as LucideLampWallUp,
  Yg as LucideLandPlot,
  tx as LucideLandmark,
  dx as LucideLanguages,
  rx as LucideLaptop,
  ix as LucideLaptop2,
  ix as LucideLaptopMinimal,
  hx as LucideLaptopMinimalCheck,
  ux as LucideLasso,
  px as LucideLassoSelect,
  vx as LucideLaugh,
  wx as LucideLayers,
  _x as LucideLayers2,
  wx as LucideLayers3,
  xx as LucideLayersPlus,
  mq as LucideLayout,
  Ix as LucideLayoutDashboard,
  Nx as LucideLayoutGrid,
  $x as LucideLayoutList,
  zx as LucideLayoutPanelLeft,
  Ax as LucideLayoutPanelTop,
  jx as LucideLayoutTemplate,
  Px as LucideLeaf,
  Fx as LucideLeafyGreen,
  Rx as LucideLectern,
  OO as LucideLetterText,
  Gx as LucideLibrary,
  Ux as LucideLibraryBig,
  nR as LucideLibrarySquare,
  Wx as LucideLifeBuoy,
  Xx as LucideLigature,
  Yx as LucideLightbulb,
  Qx as LucideLightbulbOff,
  Gh as LucideLineChart,
  aL as LucideLineSquiggle,
  hL as LucideLink,
  dL as LucideLink2,
  tL as LucideLink2Off,
  iL as LucideLinkedin,
  QL as LucideList,
  rL as LucideListCheck,
  pL as LucideListChecks,
  uL as LucideListChevronsDownUp,
  vL as LucideListChevronsUpDown,
  _L as LucideListCollapse,
  xL as LucideListEnd,
  IL as LucideListFilter,
  wL as LucideListFilterPlus,
  NL as LucideListIndentDecrease,
  zL as LucideListIndentIncrease,
  $L as LucideListMinus,
  AL as LucideListMusic,
  jL as LucideListOrdered,
  PL as LucideListPlus,
  FL as LucideListRestart,
  RL as LucideListStart,
  UL as LucideListTodo,
  GL as LucideListTree,
  WL as LucideListVideo,
  XL as LucideListX,
  tw as LucideLoader,
  YL as LucideLoader2,
  YL as LucideLoaderCircle,
  aw as LucideLoaderPinwheel,
  iw as LucideLocate,
  hw as LucideLocateFixed,
  dw as LucideLocateOff,
  lf as LucideLocationEdit,
  vw as LucideLock,
  pw as LucideLockKeyhole,
  rw as LucideLockKeyholeOpen,
  uw as LucideLockOpen,
  _w as LucideLogIn,
  xw as LucideLogOut,
  ww as LucideLogs,
  Iw as LucideLollipop,
  Nw as LucideLuggage,
  yR as LucideMSquare,
  zw as LucideMagnet,
  Ww as LucideMail,
  $w as LucideMailCheck,
  Aw as LucideMailMinus,
  jw as LucideMailOpen,
  Pw as LucideMailPlus,
  Fw as LucideMailQuestion,
  Fw as LucideMailQuestionMark,
  Rw as LucideMailSearch,
  Uw as LucideMailWarning,
  Gw as LucideMailX,
  Xw as LucideMailbox,
  Qw as LucideMails,
  qf as LucideMap,
  Yw as LucideMapMinus,
  ff as LucideMapPin,
  tf as LucideMapPinCheck,
  af as LucideMapPinCheckInside,
  df as LucideMapPinHouse,
  yf as LucideMapPinMinus,
  hf as LucideMapPinMinusInside,
  kf as LucideMapPinOff,
  lf as LucideMapPinPen,
  mf as LucideMapPinPlus,
  Mf as LucideMapPinPlusInside,
  Lf as LucideMapPinX,
  gf as LucideMapPinXInside,
  Cf as LucideMapPinned,
  bf as LucideMapPlus,
  Hf as LucideMars,
  Sf as LucideMarsStroke,
  Vf as LucideMartini,
  Df as LucideMaximize,
  Bf as LucideMaximize2,
  Tf as LucideMedal,
  Zf as LucideMegaphone,
  Of as LucideMegaphoneOff,
  Kf as LucideMeh,
  Ef as LucideMemoryStick,
  Jf as LucideMenu,
  sR as LucideMenuSquare,
  eI as LucideMerge,
  LI as LucideMessageCircle,
  cI as LucideMessageCircleCode,
  oI as LucideMessageCircleDashed,
  nI as LucideMessageCircleHeart,
  sI as LucideMessageCircleMore,
  yI as LucideMessageCircleOff,
  kI as LucideMessageCirclePlus,
  lI as LucideMessageCircleQuestion,
  lI as LucideMessageCircleQuestionMark,
  MI as LucideMessageCircleReply,
  mI as LucideMessageCircleWarning,
  gI as LucideMessageCircleX,
  eC as LucideMessageSquare,
  fI as LucideMessageSquareCode,
  CI as LucideMessageSquareDashed,
  bI as LucideMessageSquareDiff,
  qI as LucideMessageSquareDot,
  SI as LucideMessageSquareHeart,
  HI as LucideMessageSquareLock,
  VI as LucideMessageSquareMore,
  BI as LucideMessageSquareOff,
  DI as LucideMessageSquarePlus,
  TI as LucideMessageSquareQuote,
  OI as LucideMessageSquareReply,
  ZI as LucideMessageSquareShare,
  EI as LucideMessageSquareText,
  KI as LucideMessageSquareWarning,
  JI as LucideMessageSquareX,
  cC as LucideMessagesSquare,
  sC as LucideMic,
  nC as LucideMic2,
  oC as LucideMicOff,
  nC as LucideMicVocal,
  yC as LucideMicrochip,
  kC as LucideMicroscope,
  lC as LucideMicrowave,
  MC as LucideMilestone,
  gC as LucideMilk,
  mC as LucideMilkOff,
  fC as LucideMinimize,
  LC as LucideMinimize2,
  CC as LucideMinus,
  py as LucideMinusCircle,
  kR as LucideMinusSquare,
  eN as LucideMonitor,
  bC as LucideMonitorCheck,
  qC as LucideMonitorCloud,
  SC as LucideMonitorCog,
  HC as LucideMonitorDot,
  VC as LucideMonitorDown,
  BC as LucideMonitorOff,
  DC as LucideMonitorPause,
  TC as LucideMonitorPlay,
  OC as LucideMonitorSmartphone,
  ZC as LucideMonitorSpeaker,
  EC as LucideMonitorStop,
  KC as LucideMonitorUp,
  JC as LucideMonitorX,
  oN as LucideMoon,
  cN as LucideMoonStar,
  p8 as LucideMoreHorizontal,
  r8 as LucideMoreVertical,
  nN as LucideMotorbike,
  yN as LucideMountain,
  sN as LucideMountainSnow,
  fN as LucideMouse,
  lN as LucideMouseOff,
  LN as LucideMousePointer,
  MN as LucideMousePointer2,
  kN as LucideMousePointer2Off,
  mN as LucideMousePointerBan,
  gN as LucideMousePointerClick,
  OD as LucideMousePointerSquareDashed,
  JN as LucideMove,
  CN as LucideMove3D,
  CN as LucideMove3d,
  qN as LucideMoveDiagonal,
  bN as LucideMoveDiagonal2,
  VN as LucideMoveDown,
  SN as LucideMoveDownLeft,
  HN as LucideMoveDownRight,
  BN as LucideMoveHorizontal,
  DN as LucideMoveLeft,
  TN as LucideMoveRight,
  EN as LucideMoveUp,
  ON as LucideMoveUpLeft,
  ZN as LucideMoveUpRight,
  KN as LucideMoveVertical,
  nb as LucideMusic,
  eb as LucideMusic2,
  cb as LucideMusic3,
  ob as LucideMusic4,
  lb as LucideNavigation,
  yb as LucideNavigation2,
  sb as LucideNavigation2Off,
  kb as LucideNavigationOff,
  Mb as LucideNetwork,
  gb as LucideNewspaper,
  mb as LucideNfc,
  fb as LucideNonBinary,
  Sb as LucideNotebook,
  Lb as LucideNotebookPen,
  Cb as LucideNotebookTabs,
  bb as LucideNotebookText,
  Hb as LucideNotepadText,
  qb as LucideNotepadTextDashed,
  Bb as LucideNut,
  Vb as LucideNutOff,
  Eb as LucideOctagon,
  Db as LucideOctagonAlert,
  Tb as LucideOctagonMinus,
  Ob as LucideOctagonPause,
  Zb as LucideOctagonX,
  Kb as LucideOmega,
  Jb as LucideOption,
  e$ as LucideOrbit,
  o$ as LucideOrigami,
  NL as LucideOutdent,
  m$ as LucidePackage,
  c$ as LucidePackage2,
  n$ as LucidePackageCheck,
  k$ as LucidePackageMinus,
  s$ as LucidePackageOpen,
  y$ as LucidePackagePlus,
  l$ as LucidePackageSearch,
  M$ as LucidePackageX,
  g$ as LucidePaintBucket,
  L$ as LucidePaintRoller,
  C$ as LucidePaintbrush,
  f$ as LucidePaintbrush2,
  f$ as LucidePaintbrushVertical,
  b$ as LucidePalette,
  fZ as LucidePalmtree,
  q$ as LucidePanda,
  B$ as LucidePanelBottom,
  S$ as LucidePanelBottomClose,
  H$ as LucidePanelBottomDashed,
  H$ as LucidePanelBottomInactive,
  V$ as LucidePanelBottomOpen,
  E$ as LucidePanelLeft,
  D$ as LucidePanelLeftClose,
  T$ as LucidePanelLeftDashed,
  T$ as LucidePanelLeftInactive,
  O$ as LucidePanelLeftOpen,
  Z$ as LucidePanelLeftRightDashed,
  cq as LucidePanelRight,
  K$ as LucidePanelRightClose,
  J$ as LucidePanelRightDashed,
  J$ as LucidePanelRightInactive,
  eq as LucidePanelRightOpen,
  yq as LucidePanelTop,
  oq as LucidePanelTopBottomDashed,
  nq as LucidePanelTopClose,
  sq as LucidePanelTopDashed,
  sq as LucidePanelTopInactive,
  kq as LucidePanelTopOpen,
  lq as LucidePanelsLeftBottom,
  Nr as LucidePanelsLeftRight,
  Mq as LucidePanelsRightBottom,
  sj as LucidePanelsTopBottom,
  mq as LucidePanelsTopLeft,
  gq as LucidePaperclip,
  Lq as LucideParentheses,
  _y as LucideParkingCircle,
  vy as LucideParkingCircleOff,
  fq as LucideParkingMeter,
  mR as LucideParkingSquare,
  MR as LucideParkingSquareOff,
  Cq as LucidePartyPopper,
  bq as LucidePause,
  xy as LucidePauseCircle,
  Ob as LucidePauseOctagon,
  qq as LucidePawPrint,
  Sq as LucidePcCase,
  Dq as LucidePen,
  LR as LucidePenBox,
  Hq as LucidePenLine,
  Vq as LucidePenOff,
  LR as LucidePenSquare,
  Bq as LucidePenTool,
  Eq as LucidePencil,
  Tq as LucidePencilLine,
  Oq as LucidePencilOff,
  Zq as LucidePencilRuler,
  Kq as LucidePentagon,
  Jq as LucidePercent,
  wy as LucidePercentCircle,
  Np as LucidePercentDiamond,
  fR as LucidePercentSquare,
  ez as LucidePersonStanding,
  cz as LucidePhilippinePeso,
  Mz as LucidePhone,
  oz as LucidePhoneCall,
  nz as LucidePhoneForwarded,
  sz as LucidePhoneIncoming,
  yz as LucidePhoneMissed,
  kz as LucidePhoneOff,
  lz as LucidePhoneOutgoing,
  mz as LucidePi,
  bR as LucidePiSquare,
  Lz as LucidePiano,
  gz as LucidePickaxe,
  Cz as LucidePictureInPicture,
  fz as LucidePictureInPicture2,
  ds as LucidePieChart,
  bz as LucidePiggyBank,
  Hz as LucidePilcrow,
  qz as LucidePilcrowLeft,
  Sz as LucidePilcrowRight,
  CR as LucidePilcrowSquare,
  Bz as LucidePill,
  Vz as LucidePillBottle,
  Tz as LucidePin,
  Dz as LucidePinOff,
  Oz as LucidePipette,
  Zz as LucidePizza,
  Jz as LucidePlane,
  Ez as LucidePlaneLanding,
  Kz as LucidePlaneTakeoff,
  eS as LucidePlay,
  Ny as LucidePlayCircle,
  qR as LucidePlaySquare,
  nS as LucidePlug,
  cS as LucidePlug2,
  oS as LucidePlugZap,
  oS as LucidePlugZap2,
  sS as LucidePlus,
  $y as LucidePlusCircle,
  SR as LucidePlusSquare,
  kS as LucidePocket,
  yS as LucidePocketKnife,
  lS as LucidePodcast,
  MS as LucidePointer,
  mS as LucidePointerOff,
  LS as LucidePopcorn,
  gS as LucidePopsicle,
  fS as LucidePoundSterling,
  bS as LucidePower,
  Ay as LucidePowerCircle,
  CS as LucidePowerOff,
  HR as LucidePowerSquare,
  qS as LucidePresentation,
  HS as LucidePrinter,
  SS as LucidePrinterCheck,
  VS as LucideProjector,
  BS as LucideProportions,
  DS as LucidePuzzle,
  TS as LucidePyramid,
  OS as LucideQrCode,
  ZS as LucideQuote,
  ES as LucideRabbit,
  KS as LucideRadar,
  JS as LucideRadiation,
  eA as LucideRadical,
  nA as LucideRadio,
  cA as LucideRadioReceiver,
  oA as LucideRadioTower,
  sA as LucideRadius,
  yA as LucideRailSymbol,
  kA as LucideRainbow,
  lA as LucideRat,
  MA as LucideRatio,
  BA as LucideReceipt,
  mA as LucideReceiptCent,
  gA as LucideReceiptEuro,
  LA as LucideReceiptIndianRupee,
  fA as LucideReceiptJapaneseYen,
  CA as LucideReceiptPoundSterling,
  bA as LucideReceiptRussianRuble,
  qA as LucideReceiptSwissFranc,
  SA as LucideReceiptText,
  HA as LucideReceiptTurkishLira,
  VA as LucideRectangleCircle,
  DA as LucideRectangleEllipsis,
  TA as LucideRectangleGoggles,
  OA as LucideRectangleHorizontal,
  ZA as LucideRectangleVertical,
  EA as LucideRecycle,
  eH as LucideRedo,
  KA as LucideRedo2,
  JA as LucideRedoDot,
  oH as LucideRefreshCcw,
  cH as LucideRefreshCcwDot,
  sH as LucideRefreshCw,
  nH as LucideRefreshCwOff,
  yH as LucideRefrigerator,
  kH as LucideRegex,
  lH as LucideRemoveFormatting,
  gH as LucideRepeat,
  MH as LucideRepeat1,
  mH as LucideRepeat2,
  fH as LucideReplace,
  LH as LucideReplaceAll,
  bH as LucideReply,
  CH as LucideReplyAll,
  qH as LucideRewind,
  SH as LucideRibbon,
  HH as LucideRocket,
  VH as LucideRockingChair,
  BH as LucideRollerCoaster,
  DH as LucideRose,
  TH as LucideRotate3D,
  TH as LucideRotate3d,
  EH as LucideRotateCcw,
  OH as LucideRotateCcwKey,
  ZH as LucideRotateCcwSquare,
  JH as LucideRotateCw,
  KH as LucideRotateCwSquare,
  cj as LucideRoute,
  ej as LucideRouteOff,
  oj as LucideRouter,
  nj as LucideRows,
  nj as LucideRows2,
  sj as LucideRows3,
  yj as LucideRows4,
  kj as LucideRss,
  Mj as LucideRuler,
  lj as LucideRulerDimensionLine,
  mj as LucideRussianRuble,
  gj as LucideSailboat,
  Lj as LucideSalad,
  fj as LucideSandwich,
  bj as LucideSatellite,
  Cj as LucideSatelliteDish,
  qj as LucideSaudiRiyal,
  Vj as LucideSave,
  Sj as LucideSaveAll,
  Hj as LucideSaveOff,
  Dj as LucideScale,
  Bj as LucideScale3D,
  Bj as LucideScale3d,
  Tj as LucideScaling,
  nV as LucideScan,
  Oj as LucideScanBarcode,
  Zj as LucideScanEye,
  Ej as LucideScanFace,
  Kj as LucideScanHeart,
  Jj as LucideScanLine,
  eV as LucideScanQrCode,
  cV as LucideScanSearch,
  oV as LucideScanText,
  hs as LucideScatterChart,
  sV as LucideSchool,
  VW as LucideSchool2,
  kV as LucideScissors,
  yV as LucideScissorsLineDashed,
  DR as LucideScissorsSquare,
  gD as LucideScissorsSquareDashedBottom,
  lV as LucideScooter,
  mV as LucideScreenShare,
  MV as LucideScreenShareOff,
  LV as LucideScroll,
  gV as LucideScrollText,
  VV as LucideSearch,
  fV as LucideSearchAlert,
  CV as LucideSearchCheck,
  bV as LucideSearchCode,
  qV as LucideSearchSlash,
  SV as LucideSearchX,
  HV as LucideSection,
  TV as LucideSend,
  BV as LucideSendHorizonal,
  BV as LucideSendHorizontal,
  DV as LucideSendToBack,
  OV as LucideSeparatorHorizontal,
  ZV as LucideSeparatorVertical,
  eP as LucideServer,
  EV as LucideServerCog,
  KV as LucideServerCrash,
  JV as LucideServerOff,
  cP as LucideSettings,
  oP as LucideSettings2,
  nP as LucideShapes,
  yP as LucideShare,
  sP as LucideShare2,
  kP as LucideSheet,
  lP as LucideShell,
  BP as LucideShield,
  MP as LucideShieldAlert,
  mP as LucideShieldBan,
  gP as LucideShieldCheck,
  VP as LucideShieldClose,
  LP as LucideShieldEllipsis,
  fP as LucideShieldHalf,
  CP as LucideShieldMinus,
  bP as LucideShieldOff,
  qP as LucideShieldPlus,
  SP as LucideShieldQuestion,
  SP as LucideShieldQuestionMark,
  HP as LucideShieldUser,
  VP as LucideShieldX,
  TP as LucideShip,
  DP as LucideShipWheel,
  OP as LucideShirt,
  ZP as LucideShoppingBag,
  EP as LucideShoppingBasket,
  KP as LucideShoppingCart,
  JP as LucideShovel,
  eB as LucideShowerHead,
  oB as LucideShredder,
  cB as LucideShrimp,
  nB as LucideShrink,
  sB as LucideShrub,
  yB as LucideShuffle,
  E$ as LucideSidebar,
  D$ as LucideSidebarClose,
  O$ as LucideSidebarOpen,
  kB as LucideSigma,
  TR as LucideSigmaSquare,
  gB as LucideSignal,
  lB as LucideSignalHigh,
  MB as LucideSignalLow,
  mB as LucideSignalMedium,
  LB as LucideSignalZero,
  fB as LucideSignature,
  bB as LucideSignpost,
  CB as LucideSignpostBig,
  qB as LucideSiren,
  SB as LucideSkipBack,
  HB as LucideSkipForward,
  VB as LucideSkull,
  BB as LucideSlack,
  DB as LucideSlash,
  OR as LucideSlashSquare,
  TB as LucideSlice,
  ZB as LucideSliders,
  OB as LucideSlidersHorizontal,
  ZB as LucideSlidersVertical,
  JB as LucideSmartphone,
  EB as LucideSmartphoneCharging,
  KB as LucideSmartphoneNfc,
  cF as LucideSmile,
  eF as LucideSmilePlus,
  oF as LucideSnail,
  sF as LucideSnowflake,
  nF as LucideSoapDispenserDroplet,
  yF as LucideSofa,
  kF as LucideSolarPanel,
  Pe as LucideSortAsc,
  ae as LucideSortDesc,
  lF as LucideSoup,
  MF as LucideSpace,
  mF as LucideSpade,
  gF as LucideSparkle,
  LF as LucideSparkles,
  fF as LucideSpeaker,
  CF as LucideSpeech,
  qF as LucideSpellCheck,
  bF as LucideSpellCheck2,
  HF as LucideSpline,
  SF as LucideSplinePointer,
  VF as LucideSplit,
  ZR as LucideSplitSquareHorizontal,
  ER as LucideSplitSquareVertical,
  BF as LucideSpool,
  TF as LucideSpotlight,
  DF as LucideSprayCan,
  OF as LucideSprout,
  kT as LucideSquare,
  ZF as LucideSquareActivity,
  JF as LucideSquareArrowDown,
  EF as LucideSquareArrowDownLeft,
  KF as LucideSquareArrowDownRight,
  eD as LucideSquareArrowLeft,
  cD as LucideSquareArrowOutDownLeft,
  oD as LucideSquareArrowOutDownRight,
  nD as LucideSquareArrowOutUpLeft,
  sD as LucideSquareArrowOutUpRight,
  yD as LucideSquareArrowRight,
  MD as LucideSquareArrowUp,
  kD as LucideSquareArrowUpLeft,
  lD as LucideSquareArrowUpRight,
  mD as LucideSquareAsterisk,
  gD as LucideSquareBottomDashedScissors,
  LD as LucideSquareChartGantt,
  CD as LucideSquareCheck,
  fD as LucideSquareCheckBig,
  bD as LucideSquareChevronDown,
  qD as LucideSquareChevronLeft,
  SD as LucideSquareChevronRight,
  HD as LucideSquareChevronUp,
  BD as LucideSquareCode,
  ED as LucideSquareDashed,
  DD as LucideSquareDashedBottom,
  VD as LucideSquareDashedBottomCode,
  TD as LucideSquareDashedKanban,
  OD as LucideSquareDashedMousePointer,
  ZD as LucideSquareDashedTopSolid,
  KD as LucideSquareDivide,
  JD as LucideSquareDot,
  eR as LucideSquareEqual,
  cR as LucideSquareFunction,
  LD as LucideSquareGanttChart,
  oR as LucideSquareKanban,
  nR as LucideSquareLibrary,
  yR as LucideSquareM,
  sR as LucideSquareMenu,
  kR as LucideSquareMinus,
  lR as LucideSquareMousePointer,
  mR as LucideSquareParking,
  MR as LucideSquareParkingOff,
  gR as LucideSquarePause,
  LR as LucideSquarePen,
  fR as LucideSquarePercent,
  bR as LucideSquarePi,
  CR as LucideSquarePilcrow,
  qR as LucideSquarePlay,
  SR as LucideSquarePlus,
  HR as LucideSquarePower,
  VR as LucideSquareRadical,
  BR as LucideSquareRoundCorner,
  DR as LucideSquareScissors,
  TR as LucideSquareSigma,
  OR as LucideSquareSlash,
  ZR as LucideSquareSplitHorizontal,
  ER as LucideSquareSplitVertical,
  KR as LucideSquareSquare,
  JR as LucideSquareStack,
  eT as LucideSquareStar,
  nT as LucideSquareStop,
  cT as LucideSquareTerminal,
  sT as LucideSquareUser,
  oT as LucideSquareUserRound,
  yT as LucideSquareX,
  lT as LucideSquaresExclude,
  MT as LucideSquaresIntersect,
  mT as LucideSquaresSubtract,
  LT as LucideSquaresUnite,
  fT as LucideSquircle,
  gT as LucideSquircleDashed,
  CT as LucideSquirrel,
  bT as LucideStamp,
  HT as LucideStar,
  qT as LucideStarHalf,
  ST as LucideStarOff,
  LF as LucideStars,
  VT as LucideStepBack,
  BT as LucideStepForward,
  TT as LucideStethoscope,
  DT as LucideSticker,
  OT as LucideStickyNote,
  ZT as LucideStone,
  Gy as LucideStopCircle,
  ET as LucideStore,
  KT as LucideStretchHorizontal,
  JT as LucideStretchVertical,
  eU as LucideStrikethrough,
  cU as LucideSubscript,
  Un as LucideSubtitles,
  kU as LucideSun,
  oU as LucideSunDim,
  nU as LucideSunMedium,
  sU as LucideSunMoon,
  yU as LucideSunSnow,
  lU as LucideSunrise,
  MU as LucideSunset,
  mU as LucideSuperscript,
  LU as LucideSwatchBook,
  gU as LucideSwissFranc,
  fU as LucideSwitchCamera,
  CU as LucideSword,
  bU as LucideSwords,
  qU as LucideSyringe,
  ZU as LucideTable,
  SU as LucideTable2,
  HU as LucideTableCellsMerge,
  VU as LucideTableCellsSplit,
  BU as LucideTableColumnsSplit,
  Ir as LucideTableConfig,
  DU as LucideTableOfContents,
  TU as LucideTableProperties,
  OU as LucideTableRowsSplit,
  KU as LucideTablet,
  EU as LucideTabletSmartphone,
  JU as LucideTablets,
  eO as LucideTag,
  cO as LucideTags,
  oO as LucideTally1,
  nO as LucideTally2,
  sO as LucideTally3,
  yO as LucideTally4,
  kO as LucideTally5,
  lO as LucideTangent,
  MO as LucideTarget,
  gO as LucideTelescope,
  LO as LucideTent,
  mO as LucideTentTree,
  fO as LucideTerminal,
  cT as LucideTerminalSquare,
  bO as LucideTestTube,
  CO as LucideTestTube2,
  CO as LucideTestTubeDiagonal,
  qO as LucideTestTubes,
  BO as LucideText,
  SO as LucideTextAlignCenter,
  HO as LucideTextAlignEnd,
  VO as LucideTextAlignJustify,
  BO as LucideTextAlignStart,
  TO as LucideTextCursor,
  DO as LucideTextCursorInput,
  OO as LucideTextInitial,
  ZO as LucideTextQuote,
  EO as LucideTextSearch,
  KO as LucideTextSelect,
  KO as LucideTextSelection,
  JO as LucideTextWrap,
  eG as LucideTheater,
  nG as LucideThermometer,
  cG as LucideThermometerSnowflake,
  oG as LucideThermometerSun,
  sG as LucideThumbsDown,
  yG as LucideThumbsUp,
  fG as LucideTicket,
  kG as LucideTicketCheck,
  lG as LucideTicketMinus,
  MG as LucideTicketPercent,
  mG as LucideTicketPlus,
  gG as LucideTicketSlash,
  LG as LucideTicketX,
  bG as LucideTickets,
  CG as LucideTicketsPlane,
  HG as LucideTimer,
  qG as LucideTimerOff,
  SG as LucideTimerReset,
  VG as LucideToggleLeft,
  BG as LucideToggleRight,
  DG as LucideToilet,
  TG as LucideToolCase,
  OG as LucideToolbox,
  ZG as LucideTornado,
  EG as LucideTorus,
  JG as LucideTouchpad,
  KG as LucideTouchpadOff,
  eZ as LucideTowerControl,
  cZ as LucideToyBrick,
  oZ as LucideTractor,
  nZ as LucideTrafficCone,
  lZ as LucideTrain,
  yZ as LucideTrainFront,
  sZ as LucideTrainFrontTunnel,
  kZ as LucideTrainTrack,
  lZ as LucideTramFront,
  MZ as LucideTransgender,
  gZ as LucideTrash,
  mZ as LucideTrash2,
  LZ as LucideTreeDeciduous,
  fZ as LucideTreePalm,
  CZ as LucideTreePine,
  bZ as LucideTrees,
  qZ as LucideTrello,
  SZ as LucideTrendingDown,
  VZ as LucideTrendingUp,
  HZ as LucideTrendingUpDown,
  OZ as LucideTriangle,
  BZ as LucideTriangleAlert,
  DZ as LucideTriangleDashed,
  TZ as LucideTriangleRight,
  ZZ as LucideTrophy,
  KZ as LucideTruck,
  EZ as LucideTruckElectric,
  JZ as LucideTurkishLira,
  eW as LucideTurntable,
  cW as LucideTurtle,
  sW as LucideTv,
  nW as LucideTv2,
  nW as LucideTvMinimal,
  oW as LucideTvMinimalPlay,
  yW as LucideTwitch,
  kW as LucideTwitter,
  MW as LucideType,
  lW as LucideTypeOutline,
  gW as LucideUmbrella,
  mW as LucideUmbrellaOff,
  LW as LucideUnderline,
  bW as LucideUndo,
  fW as LucideUndo2,
  CW as LucideUndoDot,
  qW as LucideUnfoldHorizontal,
  SW as LucideUnfoldVertical,
  HW as LucideUngroup,
  VW as LucideUniversity,
  DW as LucideUnlink,
  BW as LucideUnlink2,
  uw as LucideUnlock,
  rw as LucideUnlockKeyhole,
  TW as LucideUnplug,
  OW as LucideUpload,
  Y5 as LucideUploadCloud,
  ZW as LucideUsb,
  bE as LucideUser,
  gE as LucideUser2,
  EW as LucideUserCheck,
  nE as LucideUserCheck2,
  Xy as LucideUserCircle,
  Wy as LucideUserCircle2,
  KW as LucideUserCog,
  sE as LucideUserCog2,
  eE as LucideUserLock,
  JW as LucideUserMinus,
  yE as LucideUserMinus2,
  cE as LucideUserPen,
  oE as LucideUserPlus,
  lE as LucideUserPlus2,
  gE as LucideUserRound,
  nE as LucideUserRoundCheck,
  sE as LucideUserRoundCog,
  yE as LucideUserRoundMinus,
  kE as LucideUserRoundPen,
  lE as LucideUserRoundPlus,
  ME as LucideUserRoundSearch,
  mE as LucideUserRoundX,
  LE as LucideUserSearch,
  sT as LucideUserSquare,
  oT as LucideUserSquare2,
  fE as LucideUserStar,
  CE as LucideUserX,
  mE as LucideUserX2,
  SE as LucideUsers,
  qE as LucideUsers2,
  qE as LucideUsersRound,
  VE as LucideUtensils,
  HE as LucideUtensilsCrossed,
  BE as LucideUtilityPole,
  DE as LucideVan,
  TE as LucideVariable,
  OE as LucideVault,
  ZE as LucideVectorSquare,
  EE as LucideVegan,
  KE as LucideVenetianMask,
  eX as LucideVenus,
  JE as LucideVenusAndMars,
  xa as LucideVerified,
  oX as LucideVibrate,
  cX as LucideVibrateOff,
  sX as LucideVideo,
  nX as LucideVideoOff,
  yX as LucideVideotape,
  kX as LucideView,
  lX as LucideVoicemail,
  MX as LucideVolleyball,
  CX as LucideVolume,
  mX as LucideVolume1,
  LX as LucideVolume2,
  gX as LucideVolumeOff,
  fX as LucideVolumeX,
  bX as LucideVote,
  HX as LucideWallet,
  SX as LucideWallet2,
  qX as LucideWalletCards,
  SX as LucideWalletMinimal,
  VX as LucideWallpaper,
  DX as LucideWand,
  BX as LucideWand2,
  BX as LucideWandSparkles,
  TX as LucideWarehouse,
  OX as LucideWashingMachine,
  ZX as LucideWatch,
  eK as LucideWaves,
  EX as LucideWavesArrowDown,
  KX as LucideWavesArrowUp,
  JX as LucideWavesLadder,
  cK as LucideWaypoints,
  oK as LucideWebcam,
  sK as LucideWebhook,
  nK as LucideWebhookOff,
  kK as LucideWeight,
  yK as LucideWeightTilde,
  MK as LucideWheat,
  lK as LucideWheatOff,
  mK as LucideWholeWord,
  HK as LucideWifi,
  gK as LucideWifiCog,
  LK as LucideWifiHigh,
  fK as LucideWifiLow,
  CK as LucideWifiOff,
  bK as LucideWifiPen,
  qK as LucideWifiSync,
  SK as LucideWifiZero,
  BK as LucideWind,
  VK as LucideWindArrowDown,
  TK as LucideWine,
  DK as LucideWineOff,
  OK as LucideWorkflow,
  ZK as LucideWorm,
  JO as LucideWrapText,
  EK as LucideWrench,
  KK as LucideX,
  Qy as LucideXCircle,
  Zb as LucideXOctagon,
  yT as LucideXSquare,
  JK as LucideYoutube,
  cQ as LucideZap,
  eQ as LucideZapOff,
  oQ as LucideZoomIn,
  nQ as LucideZoomOut,
  Nw as Luggage,
  Nw as LuggageIcon,
  yR as MSquare,
  yR as MSquareIcon,
  zw as Magnet,
  zw as MagnetIcon,
  Ww as Mail,
  $w as MailCheck,
  $w as MailCheckIcon,
  Ww as MailIcon,
  Aw as MailMinus,
  Aw as MailMinusIcon,
  jw as MailOpen,
  jw as MailOpenIcon,
  Pw as MailPlus,
  Pw as MailPlusIcon,
  Fw as MailQuestion,
  Fw as MailQuestionIcon,
  Fw as MailQuestionMark,
  Fw as MailQuestionMarkIcon,
  Rw as MailSearch,
  Rw as MailSearchIcon,
  Uw as MailWarning,
  Uw as MailWarningIcon,
  Gw as MailX,
  Gw as MailXIcon,
  Xw as Mailbox,
  Xw as MailboxIcon,
  Qw as Mails,
  Qw as MailsIcon,
  qf as Map,
  qf as MapIcon,
  Yw as MapMinus,
  Yw as MapMinusIcon,
  ff as MapPin,
  tf as MapPinCheck,
  tf as MapPinCheckIcon,
  af as MapPinCheckInside,
  af as MapPinCheckInsideIcon,
  df as MapPinHouse,
  df as MapPinHouseIcon,
  ff as MapPinIcon,
  yf as MapPinMinus,
  yf as MapPinMinusIcon,
  hf as MapPinMinusInside,
  hf as MapPinMinusInsideIcon,
  kf as MapPinOff,
  kf as MapPinOffIcon,
  lf as MapPinPen,
  lf as MapPinPenIcon,
  mf as MapPinPlus,
  mf as MapPinPlusIcon,
  Mf as MapPinPlusInside,
  Mf as MapPinPlusInsideIcon,
  Lf as MapPinX,
  Lf as MapPinXIcon,
  gf as MapPinXInside,
  gf as MapPinXInsideIcon,
  Cf as MapPinned,
  Cf as MapPinnedIcon,
  bf as MapPlus,
  bf as MapPlusIcon,
  Hf as Mars,
  Hf as MarsIcon,
  Sf as MarsStroke,
  Sf as MarsStrokeIcon,
  Vf as Martini,
  Vf as MartiniIcon,
  Df as Maximize,
  Bf as Maximize2,
  Bf as Maximize2Icon,
  Df as MaximizeIcon,
  Tf as Medal,
  Tf as MedalIcon,
  Zf as Megaphone,
  Zf as MegaphoneIcon,
  Of as MegaphoneOff,
  Of as MegaphoneOffIcon,
  Kf as Meh,
  Kf as MehIcon,
  Ef as MemoryStick,
  Ef as MemoryStickIcon,
  Jf as Menu,
  Jf as MenuIcon,
  sR as MenuSquare,
  sR as MenuSquareIcon,
  eI as Merge,
  eI as MergeIcon,
  LI as MessageCircle,
  cI as MessageCircleCode,
  cI as MessageCircleCodeIcon,
  oI as MessageCircleDashed,
  oI as MessageCircleDashedIcon,
  nI as MessageCircleHeart,
  nI as MessageCircleHeartIcon,
  LI as MessageCircleIcon,
  sI as MessageCircleMore,
  sI as MessageCircleMoreIcon,
  yI as MessageCircleOff,
  yI as MessageCircleOffIcon,
  kI as MessageCirclePlus,
  kI as MessageCirclePlusIcon,
  lI as MessageCircleQuestion,
  lI as MessageCircleQuestionIcon,
  lI as MessageCircleQuestionMark,
  lI as MessageCircleQuestionMarkIcon,
  MI as MessageCircleReply,
  MI as MessageCircleReplyIcon,
  mI as MessageCircleWarning,
  mI as MessageCircleWarningIcon,
  gI as MessageCircleX,
  gI as MessageCircleXIcon,
  eC as MessageSquare,
  fI as MessageSquareCode,
  fI as MessageSquareCodeIcon,
  CI as MessageSquareDashed,
  CI as MessageSquareDashedIcon,
  bI as MessageSquareDiff,
  bI as MessageSquareDiffIcon,
  qI as MessageSquareDot,
  qI as MessageSquareDotIcon,
  SI as MessageSquareHeart,
  SI as MessageSquareHeartIcon,
  eC as MessageSquareIcon,
  HI as MessageSquareLock,
  HI as MessageSquareLockIcon,
  VI as MessageSquareMore,
  VI as MessageSquareMoreIcon,
  BI as MessageSquareOff,
  BI as MessageSquareOffIcon,
  DI as MessageSquarePlus,
  DI as MessageSquarePlusIcon,
  TI as MessageSquareQuote,
  TI as MessageSquareQuoteIcon,
  OI as MessageSquareReply,
  OI as MessageSquareReplyIcon,
  ZI as MessageSquareShare,
  ZI as MessageSquareShareIcon,
  EI as MessageSquareText,
  EI as MessageSquareTextIcon,
  KI as MessageSquareWarning,
  KI as MessageSquareWarningIcon,
  JI as MessageSquareX,
  JI as MessageSquareXIcon,
  cC as MessagesSquare,
  cC as MessagesSquareIcon,
  sC as Mic,
  nC as Mic2,
  nC as Mic2Icon,
  sC as MicIcon,
  oC as MicOff,
  oC as MicOffIcon,
  nC as MicVocal,
  nC as MicVocalIcon,
  yC as Microchip,
  yC as MicrochipIcon,
  kC as Microscope,
  kC as MicroscopeIcon,
  lC as Microwave,
  lC as MicrowaveIcon,
  MC as Milestone,
  MC as MilestoneIcon,
  gC as Milk,
  gC as MilkIcon,
  mC as MilkOff,
  mC as MilkOffIcon,
  fC as Minimize,
  LC as Minimize2,
  LC as Minimize2Icon,
  fC as MinimizeIcon,
  CC as Minus,
  py as MinusCircle,
  py as MinusCircleIcon,
  CC as MinusIcon,
  kR as MinusSquare,
  kR as MinusSquareIcon,
  eN as Monitor,
  bC as MonitorCheck,
  bC as MonitorCheckIcon,
  qC as MonitorCloud,
  qC as MonitorCloudIcon,
  SC as MonitorCog,
  SC as MonitorCogIcon,
  HC as MonitorDot,
  HC as MonitorDotIcon,
  VC as MonitorDown,
  VC as MonitorDownIcon,
  eN as MonitorIcon,
  BC as MonitorOff,
  BC as MonitorOffIcon,
  DC as MonitorPause,
  DC as MonitorPauseIcon,
  TC as MonitorPlay,
  TC as MonitorPlayIcon,
  OC as MonitorSmartphone,
  OC as MonitorSmartphoneIcon,
  ZC as MonitorSpeaker,
  ZC as MonitorSpeakerIcon,
  EC as MonitorStop,
  EC as MonitorStopIcon,
  KC as MonitorUp,
  KC as MonitorUpIcon,
  JC as MonitorX,
  JC as MonitorXIcon,
  oN as Moon,
  oN as MoonIcon,
  cN as MoonStar,
  cN as MoonStarIcon,
  p8 as MoreHorizontal,
  p8 as MoreHorizontalIcon,
  r8 as MoreVertical,
  r8 as MoreVerticalIcon,
  nN as Motorbike,
  nN as MotorbikeIcon,
  yN as Mountain,
  yN as MountainIcon,
  sN as MountainSnow,
  sN as MountainSnowIcon,
  fN as Mouse,
  fN as MouseIcon,
  lN as MouseOff,
  lN as MouseOffIcon,
  LN as MousePointer,
  MN as MousePointer2,
  MN as MousePointer2Icon,
  kN as MousePointer2Off,
  kN as MousePointer2OffIcon,
  mN as MousePointerBan,
  mN as MousePointerBanIcon,
  gN as MousePointerClick,
  gN as MousePointerClickIcon,
  LN as MousePointerIcon,
  OD as MousePointerSquareDashed,
  OD as MousePointerSquareDashedIcon,
  JN as Move,
  CN as Move3D,
  CN as Move3DIcon,
  CN as Move3d,
  CN as Move3dIcon,
  qN as MoveDiagonal,
  bN as MoveDiagonal2,
  bN as MoveDiagonal2Icon,
  qN as MoveDiagonalIcon,
  VN as MoveDown,
  VN as MoveDownIcon,
  SN as MoveDownLeft,
  SN as MoveDownLeftIcon,
  HN as MoveDownRight,
  HN as MoveDownRightIcon,
  BN as MoveHorizontal,
  BN as MoveHorizontalIcon,
  JN as MoveIcon,
  DN as MoveLeft,
  DN as MoveLeftIcon,
  TN as MoveRight,
  TN as MoveRightIcon,
  EN as MoveUp,
  EN as MoveUpIcon,
  ON as MoveUpLeft,
  ON as MoveUpLeftIcon,
  ZN as MoveUpRight,
  ZN as MoveUpRightIcon,
  KN as MoveVertical,
  KN as MoveVerticalIcon,
  nb as Music,
  eb as Music2,
  eb as Music2Icon,
  cb as Music3,
  cb as Music3Icon,
  ob as Music4,
  ob as Music4Icon,
  nb as MusicIcon,
  lb as Navigation,
  yb as Navigation2,
  yb as Navigation2Icon,
  sb as Navigation2Off,
  sb as Navigation2OffIcon,
  lb as NavigationIcon,
  kb as NavigationOff,
  kb as NavigationOffIcon,
  Mb as Network,
  Mb as NetworkIcon,
  gb as Newspaper,
  gb as NewspaperIcon,
  mb as Nfc,
  mb as NfcIcon,
  fb as NonBinary,
  fb as NonBinaryIcon,
  Sb as Notebook,
  Sb as NotebookIcon,
  Lb as NotebookPen,
  Lb as NotebookPenIcon,
  Cb as NotebookTabs,
  Cb as NotebookTabsIcon,
  bb as NotebookText,
  bb as NotebookTextIcon,
  Hb as NotepadText,
  qb as NotepadTextDashed,
  qb as NotepadTextDashedIcon,
  Hb as NotepadTextIcon,
  Bb as Nut,
  Bb as NutIcon,
  Vb as NutOff,
  Vb as NutOffIcon,
  Eb as Octagon,
  Db as OctagonAlert,
  Db as OctagonAlertIcon,
  Eb as OctagonIcon,
  Tb as OctagonMinus,
  Tb as OctagonMinusIcon,
  Ob as OctagonPause,
  Ob as OctagonPauseIcon,
  Zb as OctagonX,
  Zb as OctagonXIcon,
  Kb as Omega,
  Kb as OmegaIcon,
  Jb as Option,
  Jb as OptionIcon,
  e$ as Orbit,
  e$ as OrbitIcon,
  o$ as Origami,
  o$ as OrigamiIcon,
  NL as Outdent,
  NL as OutdentIcon,
  m$ as Package,
  c$ as Package2,
  c$ as Package2Icon,
  n$ as PackageCheck,
  n$ as PackageCheckIcon,
  m$ as PackageIcon,
  k$ as PackageMinus,
  k$ as PackageMinusIcon,
  s$ as PackageOpen,
  s$ as PackageOpenIcon,
  y$ as PackagePlus,
  y$ as PackagePlusIcon,
  l$ as PackageSearch,
  l$ as PackageSearchIcon,
  M$ as PackageX,
  M$ as PackageXIcon,
  g$ as PaintBucket,
  g$ as PaintBucketIcon,
  L$ as PaintRoller,
  L$ as PaintRollerIcon,
  C$ as Paintbrush,
  f$ as Paintbrush2,
  f$ as Paintbrush2Icon,
  C$ as PaintbrushIcon,
  f$ as PaintbrushVertical,
  f$ as PaintbrushVerticalIcon,
  b$ as Palette,
  b$ as PaletteIcon,
  fZ as Palmtree,
  fZ as PalmtreeIcon,
  q$ as Panda,
  q$ as PandaIcon,
  B$ as PanelBottom,
  S$ as PanelBottomClose,
  S$ as PanelBottomCloseIcon,
  H$ as PanelBottomDashed,
  H$ as PanelBottomDashedIcon,
  B$ as PanelBottomIcon,
  H$ as PanelBottomInactive,
  H$ as PanelBottomInactiveIcon,
  V$ as PanelBottomOpen,
  V$ as PanelBottomOpenIcon,
  E$ as PanelLeft,
  D$ as PanelLeftClose,
  D$ as PanelLeftCloseIcon,
  T$ as PanelLeftDashed,
  T$ as PanelLeftDashedIcon,
  E$ as PanelLeftIcon,
  T$ as PanelLeftInactive,
  T$ as PanelLeftInactiveIcon,
  O$ as PanelLeftOpen,
  O$ as PanelLeftOpenIcon,
  Z$ as PanelLeftRightDashed,
  Z$ as PanelLeftRightDashedIcon,
  cq as PanelRight,
  K$ as PanelRightClose,
  K$ as PanelRightCloseIcon,
  J$ as PanelRightDashed,
  J$ as PanelRightDashedIcon,
  cq as PanelRightIcon,
  J$ as PanelRightInactive,
  J$ as PanelRightInactiveIcon,
  eq as PanelRightOpen,
  eq as PanelRightOpenIcon,
  yq as PanelTop,
  oq as PanelTopBottomDashed,
  oq as PanelTopBottomDashedIcon,
  nq as PanelTopClose,
  nq as PanelTopCloseIcon,
  sq as PanelTopDashed,
  sq as PanelTopDashedIcon,
  yq as PanelTopIcon,
  sq as PanelTopInactive,
  sq as PanelTopInactiveIcon,
  kq as PanelTopOpen,
  kq as PanelTopOpenIcon,
  lq as PanelsLeftBottom,
  lq as PanelsLeftBottomIcon,
  Nr as PanelsLeftRight,
  Nr as PanelsLeftRightIcon,
  Mq as PanelsRightBottom,
  Mq as PanelsRightBottomIcon,
  sj as PanelsTopBottom,
  sj as PanelsTopBottomIcon,
  mq as PanelsTopLeft,
  mq as PanelsTopLeftIcon,
  gq as Paperclip,
  gq as PaperclipIcon,
  Lq as Parentheses,
  Lq as ParenthesesIcon,
  _y as ParkingCircle,
  _y as ParkingCircleIcon,
  vy as ParkingCircleOff,
  vy as ParkingCircleOffIcon,
  fq as ParkingMeter,
  fq as ParkingMeterIcon,
  mR as ParkingSquare,
  mR as ParkingSquareIcon,
  MR as ParkingSquareOff,
  MR as ParkingSquareOffIcon,
  Cq as PartyPopper,
  Cq as PartyPopperIcon,
  bq as Pause,
  xy as PauseCircle,
  xy as PauseCircleIcon,
  bq as PauseIcon,
  Ob as PauseOctagon,
  Ob as PauseOctagonIcon,
  qq as PawPrint,
  qq as PawPrintIcon,
  Sq as PcCase,
  Sq as PcCaseIcon,
  Dq as Pen,
  LR as PenBox,
  LR as PenBoxIcon,
  Dq as PenIcon,
  Hq as PenLine,
  Hq as PenLineIcon,
  Vq as PenOff,
  Vq as PenOffIcon,
  LR as PenSquare,
  LR as PenSquareIcon,
  Bq as PenTool,
  Bq as PenToolIcon,
  Eq as Pencil,
  Eq as PencilIcon,
  Tq as PencilLine,
  Tq as PencilLineIcon,
  Oq as PencilOff,
  Oq as PencilOffIcon,
  Zq as PencilRuler,
  Zq as PencilRulerIcon,
  Kq as Pentagon,
  Kq as PentagonIcon,
  Jq as Percent,
  wy as PercentCircle,
  wy as PercentCircleIcon,
  Np as PercentDiamond,
  Np as PercentDiamondIcon,
  Jq as PercentIcon,
  fR as PercentSquare,
  fR as PercentSquareIcon,
  ez as PersonStanding,
  ez as PersonStandingIcon,
  cz as PhilippinePeso,
  cz as PhilippinePesoIcon,
  Mz as Phone,
  oz as PhoneCall,
  oz as PhoneCallIcon,
  nz as PhoneForwarded,
  nz as PhoneForwardedIcon,
  Mz as PhoneIcon,
  sz as PhoneIncoming,
  sz as PhoneIncomingIcon,
  yz as PhoneMissed,
  yz as PhoneMissedIcon,
  kz as PhoneOff,
  kz as PhoneOffIcon,
  lz as PhoneOutgoing,
  lz as PhoneOutgoingIcon,
  mz as Pi,
  mz as PiIcon,
  bR as PiSquare,
  bR as PiSquareIcon,
  Lz as Piano,
  Lz as PianoIcon,
  gz as Pickaxe,
  gz as PickaxeIcon,
  Cz as PictureInPicture,
  fz as PictureInPicture2,
  fz as PictureInPicture2Icon,
  Cz as PictureInPictureIcon,
  ds as PieChart,
  ds as PieChartIcon,
  bz as PiggyBank,
  bz as PiggyBankIcon,
  Hz as Pilcrow,
  Hz as PilcrowIcon,
  qz as PilcrowLeft,
  qz as PilcrowLeftIcon,
  Sz as PilcrowRight,
  Sz as PilcrowRightIcon,
  CR as PilcrowSquare,
  CR as PilcrowSquareIcon,
  Bz as Pill,
  Vz as PillBottle,
  Vz as PillBottleIcon,
  Bz as PillIcon,
  Tz as Pin,
  Tz as PinIcon,
  Dz as PinOff,
  Dz as PinOffIcon,
  Oz as Pipette,
  Oz as PipetteIcon,
  Zz as Pizza,
  Zz as PizzaIcon,
  Jz as Plane,
  Jz as PlaneIcon,
  Ez as PlaneLanding,
  Ez as PlaneLandingIcon,
  Kz as PlaneTakeoff,
  Kz as PlaneTakeoffIcon,
  eS as Play,
  Ny as PlayCircle,
  Ny as PlayCircleIcon,
  eS as PlayIcon,
  qR as PlaySquare,
  qR as PlaySquareIcon,
  nS as Plug,
  cS as Plug2,
  cS as Plug2Icon,
  nS as PlugIcon,
  oS as PlugZap,
  oS as PlugZap2,
  oS as PlugZap2Icon,
  oS as PlugZapIcon,
  sS as Plus,
  $y as PlusCircle,
  $y as PlusCircleIcon,
  sS as PlusIcon,
  SR as PlusSquare,
  SR as PlusSquareIcon,
  kS as Pocket,
  kS as PocketIcon,
  yS as PocketKnife,
  yS as PocketKnifeIcon,
  lS as Podcast,
  lS as PodcastIcon,
  MS as Pointer,
  MS as PointerIcon,
  mS as PointerOff,
  mS as PointerOffIcon,
  LS as Popcorn,
  LS as PopcornIcon,
  gS as Popsicle,
  gS as PopsicleIcon,
  fS as PoundSterling,
  fS as PoundSterlingIcon,
  bS as Power,
  Ay as PowerCircle,
  Ay as PowerCircleIcon,
  bS as PowerIcon,
  CS as PowerOff,
  CS as PowerOffIcon,
  HR as PowerSquare,
  HR as PowerSquareIcon,
  qS as Presentation,
  qS as PresentationIcon,
  HS as Printer,
  SS as PrinterCheck,
  SS as PrinterCheckIcon,
  HS as PrinterIcon,
  VS as Projector,
  VS as ProjectorIcon,
  BS as Proportions,
  BS as ProportionsIcon,
  DS as Puzzle,
  DS as PuzzleIcon,
  TS as Pyramid,
  TS as PyramidIcon,
  OS as QrCode,
  OS as QrCodeIcon,
  ZS as Quote,
  ZS as QuoteIcon,
  ES as Rabbit,
  ES as RabbitIcon,
  KS as Radar,
  KS as RadarIcon,
  JS as Radiation,
  JS as RadiationIcon,
  eA as Radical,
  eA as RadicalIcon,
  nA as Radio,
  nA as RadioIcon,
  cA as RadioReceiver,
  cA as RadioReceiverIcon,
  oA as RadioTower,
  oA as RadioTowerIcon,
  sA as Radius,
  sA as RadiusIcon,
  yA as RailSymbol,
  yA as RailSymbolIcon,
  kA as Rainbow,
  kA as RainbowIcon,
  lA as Rat,
  lA as RatIcon,
  MA as Ratio,
  MA as RatioIcon,
  BA as Receipt,
  mA as ReceiptCent,
  mA as ReceiptCentIcon,
  gA as ReceiptEuro,
  gA as ReceiptEuroIcon,
  BA as ReceiptIcon,
  LA as ReceiptIndianRupee,
  LA as ReceiptIndianRupeeIcon,
  fA as ReceiptJapaneseYen,
  fA as ReceiptJapaneseYenIcon,
  CA as ReceiptPoundSterling,
  CA as ReceiptPoundSterlingIcon,
  bA as ReceiptRussianRuble,
  bA as ReceiptRussianRubleIcon,
  qA as ReceiptSwissFranc,
  qA as ReceiptSwissFrancIcon,
  SA as ReceiptText,
  SA as ReceiptTextIcon,
  HA as ReceiptTurkishLira,
  HA as ReceiptTurkishLiraIcon,
  VA as RectangleCircle,
  VA as RectangleCircleIcon,
  DA as RectangleEllipsis,
  DA as RectangleEllipsisIcon,
  TA as RectangleGoggles,
  TA as RectangleGogglesIcon,
  OA as RectangleHorizontal,
  OA as RectangleHorizontalIcon,
  ZA as RectangleVertical,
  ZA as RectangleVerticalIcon,
  EA as Recycle,
  EA as RecycleIcon,
  eH as Redo,
  KA as Redo2,
  KA as Redo2Icon,
  JA as RedoDot,
  JA as RedoDotIcon,
  eH as RedoIcon,
  oH as RefreshCcw,
  cH as RefreshCcwDot,
  cH as RefreshCcwDotIcon,
  oH as RefreshCcwIcon,
  sH as RefreshCw,
  sH as RefreshCwIcon,
  nH as RefreshCwOff,
  nH as RefreshCwOffIcon,
  yH as Refrigerator,
  yH as RefrigeratorIcon,
  kH as Regex,
  kH as RegexIcon,
  lH as RemoveFormatting,
  lH as RemoveFormattingIcon,
  gH as Repeat,
  MH as Repeat1,
  MH as Repeat1Icon,
  mH as Repeat2,
  mH as Repeat2Icon,
  gH as RepeatIcon,
  fH as Replace,
  LH as ReplaceAll,
  LH as ReplaceAllIcon,
  fH as ReplaceIcon,
  bH as Reply,
  CH as ReplyAll,
  CH as ReplyAllIcon,
  bH as ReplyIcon,
  qH as Rewind,
  qH as RewindIcon,
  SH as Ribbon,
  SH as RibbonIcon,
  HH as Rocket,
  HH as RocketIcon,
  VH as RockingChair,
  VH as RockingChairIcon,
  BH as RollerCoaster,
  BH as RollerCoasterIcon,
  DH as Rose,
  DH as RoseIcon,
  TH as Rotate3D,
  TH as Rotate3DIcon,
  TH as Rotate3d,
  TH as Rotate3dIcon,
  EH as RotateCcw,
  EH as RotateCcwIcon,
  OH as RotateCcwKey,
  OH as RotateCcwKeyIcon,
  ZH as RotateCcwSquare,
  ZH as RotateCcwSquareIcon,
  JH as RotateCw,
  JH as RotateCwIcon,
  KH as RotateCwSquare,
  KH as RotateCwSquareIcon,
  cj as Route,
  cj as RouteIcon,
  ej as RouteOff,
  ej as RouteOffIcon,
  oj as Router,
  oj as RouterIcon,
  nj as Rows,
  nj as Rows2,
  nj as Rows2Icon,
  sj as Rows3,
  sj as Rows3Icon,
  yj as Rows4,
  yj as Rows4Icon,
  nj as RowsIcon,
  kj as Rss,
  kj as RssIcon,
  Mj as Ruler,
  lj as RulerDimensionLine,
  lj as RulerDimensionLineIcon,
  Mj as RulerIcon,
  mj as RussianRuble,
  mj as RussianRubleIcon,
  gj as Sailboat,
  gj as SailboatIcon,
  Lj as Salad,
  Lj as SaladIcon,
  fj as Sandwich,
  fj as SandwichIcon,
  bj as Satellite,
  Cj as SatelliteDish,
  Cj as SatelliteDishIcon,
  bj as SatelliteIcon,
  qj as SaudiRiyal,
  qj as SaudiRiyalIcon,
  Vj as Save,
  Sj as SaveAll,
  Sj as SaveAllIcon,
  Vj as SaveIcon,
  Hj as SaveOff,
  Hj as SaveOffIcon,
  Dj as Scale,
  Bj as Scale3D,
  Bj as Scale3DIcon,
  Bj as Scale3d,
  Bj as Scale3dIcon,
  Dj as ScaleIcon,
  Tj as Scaling,
  Tj as ScalingIcon,
  nV as Scan,
  Oj as ScanBarcode,
  Oj as ScanBarcodeIcon,
  Zj as ScanEye,
  Zj as ScanEyeIcon,
  Ej as ScanFace,
  Ej as ScanFaceIcon,
  Kj as ScanHeart,
  Kj as ScanHeartIcon,
  nV as ScanIcon,
  Jj as ScanLine,
  Jj as ScanLineIcon,
  eV as ScanQrCode,
  eV as ScanQrCodeIcon,
  cV as ScanSearch,
  cV as ScanSearchIcon,
  oV as ScanText,
  oV as ScanTextIcon,
  hs as ScatterChart,
  hs as ScatterChartIcon,
  sV as School,
  VW as School2,
  VW as School2Icon,
  sV as SchoolIcon,
  kV as Scissors,
  kV as ScissorsIcon,
  yV as ScissorsLineDashed,
  yV as ScissorsLineDashedIcon,
  DR as ScissorsSquare,
  gD as ScissorsSquareDashedBottom,
  gD as ScissorsSquareDashedBottomIcon,
  DR as ScissorsSquareIcon,
  lV as Scooter,
  lV as ScooterIcon,
  mV as ScreenShare,
  mV as ScreenShareIcon,
  MV as ScreenShareOff,
  MV as ScreenShareOffIcon,
  LV as Scroll,
  LV as ScrollIcon,
  gV as ScrollText,
  gV as ScrollTextIcon,
  VV as Search,
  fV as SearchAlert,
  fV as SearchAlertIcon,
  CV as SearchCheck,
  CV as SearchCheckIcon,
  bV as SearchCode,
  bV as SearchCodeIcon,
  VV as SearchIcon,
  qV as SearchSlash,
  qV as SearchSlashIcon,
  SV as SearchX,
  SV as SearchXIcon,
  HV as Section,
  HV as SectionIcon,
  TV as Send,
  BV as SendHorizonal,
  BV as SendHorizonalIcon,
  BV as SendHorizontal,
  BV as SendHorizontalIcon,
  TV as SendIcon,
  DV as SendToBack,
  DV as SendToBackIcon,
  OV as SeparatorHorizontal,
  OV as SeparatorHorizontalIcon,
  ZV as SeparatorVertical,
  ZV as SeparatorVerticalIcon,
  eP as Server,
  EV as ServerCog,
  EV as ServerCogIcon,
  KV as ServerCrash,
  KV as ServerCrashIcon,
  eP as ServerIcon,
  JV as ServerOff,
  JV as ServerOffIcon,
  cP as Settings,
  oP as Settings2,
  oP as Settings2Icon,
  cP as SettingsIcon,
  nP as Shapes,
  nP as ShapesIcon,
  yP as Share,
  sP as Share2,
  sP as Share2Icon,
  yP as ShareIcon,
  kP as Sheet,
  kP as SheetIcon,
  lP as Shell,
  lP as ShellIcon,
  BP as Shield,
  MP as ShieldAlert,
  MP as ShieldAlertIcon,
  mP as ShieldBan,
  mP as ShieldBanIcon,
  gP as ShieldCheck,
  gP as ShieldCheckIcon,
  VP as ShieldClose,
  VP as ShieldCloseIcon,
  LP as ShieldEllipsis,
  LP as ShieldEllipsisIcon,
  fP as ShieldHalf,
  fP as ShieldHalfIcon,
  BP as ShieldIcon,
  CP as ShieldMinus,
  CP as ShieldMinusIcon,
  bP as ShieldOff,
  bP as ShieldOffIcon,
  qP as ShieldPlus,
  qP as ShieldPlusIcon,
  SP as ShieldQuestion,
  SP as ShieldQuestionIcon,
  SP as ShieldQuestionMark,
  SP as ShieldQuestionMarkIcon,
  HP as ShieldUser,
  HP as ShieldUserIcon,
  VP as ShieldX,
  VP as ShieldXIcon,
  TP as Ship,
  TP as ShipIcon,
  DP as ShipWheel,
  DP as ShipWheelIcon,
  OP as Shirt,
  OP as ShirtIcon,
  ZP as ShoppingBag,
  ZP as ShoppingBagIcon,
  EP as ShoppingBasket,
  EP as ShoppingBasketIcon,
  KP as ShoppingCart,
  KP as ShoppingCartIcon,
  JP as Shovel,
  JP as ShovelIcon,
  eB as ShowerHead,
  eB as ShowerHeadIcon,
  oB as Shredder,
  oB as ShredderIcon,
  cB as Shrimp,
  cB as ShrimpIcon,
  nB as Shrink,
  nB as ShrinkIcon,
  sB as Shrub,
  sB as ShrubIcon,
  yB as Shuffle,
  yB as ShuffleIcon,
  E$ as Sidebar,
  D$ as SidebarClose,
  D$ as SidebarCloseIcon,
  E$ as SidebarIcon,
  O$ as SidebarOpen,
  O$ as SidebarOpenIcon,
  kB as Sigma,
  kB as SigmaIcon,
  TR as SigmaSquare,
  TR as SigmaSquareIcon,
  gB as Signal,
  lB as SignalHigh,
  lB as SignalHighIcon,
  gB as SignalIcon,
  MB as SignalLow,
  MB as SignalLowIcon,
  mB as SignalMedium,
  mB as SignalMediumIcon,
  LB as SignalZero,
  LB as SignalZeroIcon,
  fB as Signature,
  fB as SignatureIcon,
  bB as Signpost,
  CB as SignpostBig,
  CB as SignpostBigIcon,
  bB as SignpostIcon,
  qB as Siren,
  qB as SirenIcon,
  SB as SkipBack,
  SB as SkipBackIcon,
  HB as SkipForward,
  HB as SkipForwardIcon,
  VB as Skull,
  VB as SkullIcon,
  BB as Slack,
  BB as SlackIcon,
  DB as Slash,
  DB as SlashIcon,
  OR as SlashSquare,
  OR as SlashSquareIcon,
  TB as Slice,
  TB as SliceIcon,
  ZB as Sliders,
  OB as SlidersHorizontal,
  OB as SlidersHorizontalIcon,
  ZB as SlidersIcon,
  ZB as SlidersVertical,
  ZB as SlidersVerticalIcon,
  JB as Smartphone,
  EB as SmartphoneCharging,
  EB as SmartphoneChargingIcon,
  JB as SmartphoneIcon,
  KB as SmartphoneNfc,
  KB as SmartphoneNfcIcon,
  cF as Smile,
  cF as SmileIcon,
  eF as SmilePlus,
  eF as SmilePlusIcon,
  oF as Snail,
  oF as SnailIcon,
  sF as Snowflake,
  sF as SnowflakeIcon,
  nF as SoapDispenserDroplet,
  nF as SoapDispenserDropletIcon,
  yF as Sofa,
  yF as SofaIcon,
  kF as SolarPanel,
  kF as SolarPanelIcon,
  Pe as SortAsc,
  Pe as SortAscIcon,
  ae as SortDesc,
  ae as SortDescIcon,
  lF as Soup,
  lF as SoupIcon,
  MF as Space,
  MF as SpaceIcon,
  mF as Spade,
  mF as SpadeIcon,
  gF as Sparkle,
  gF as SparkleIcon,
  LF as Sparkles,
  LF as SparklesIcon,
  fF as Speaker,
  fF as SpeakerIcon,
  CF as Speech,
  CF as SpeechIcon,
  qF as SpellCheck,
  bF as SpellCheck2,
  bF as SpellCheck2Icon,
  qF as SpellCheckIcon,
  HF as Spline,
  HF as SplineIcon,
  SF as SplinePointer,
  SF as SplinePointerIcon,
  VF as Split,
  VF as SplitIcon,
  ZR as SplitSquareHorizontal,
  ZR as SplitSquareHorizontalIcon,
  ER as SplitSquareVertical,
  ER as SplitSquareVerticalIcon,
  BF as Spool,
  BF as SpoolIcon,
  TF as Spotlight,
  TF as SpotlightIcon,
  DF as SprayCan,
  DF as SprayCanIcon,
  OF as Sprout,
  OF as SproutIcon,
  kT as Square,
  ZF as SquareActivity,
  ZF as SquareActivityIcon,
  JF as SquareArrowDown,
  JF as SquareArrowDownIcon,
  EF as SquareArrowDownLeft,
  EF as SquareArrowDownLeftIcon,
  KF as SquareArrowDownRight,
  KF as SquareArrowDownRightIcon,
  eD as SquareArrowLeft,
  eD as SquareArrowLeftIcon,
  cD as SquareArrowOutDownLeft,
  cD as SquareArrowOutDownLeftIcon,
  oD as SquareArrowOutDownRight,
  oD as SquareArrowOutDownRightIcon,
  nD as SquareArrowOutUpLeft,
  nD as SquareArrowOutUpLeftIcon,
  sD as SquareArrowOutUpRight,
  sD as SquareArrowOutUpRightIcon,
  yD as SquareArrowRight,
  yD as SquareArrowRightIcon,
  MD as SquareArrowUp,
  MD as SquareArrowUpIcon,
  kD as SquareArrowUpLeft,
  kD as SquareArrowUpLeftIcon,
  lD as SquareArrowUpRight,
  lD as SquareArrowUpRightIcon,
  mD as SquareAsterisk,
  mD as SquareAsteriskIcon,
  gD as SquareBottomDashedScissors,
  gD as SquareBottomDashedScissorsIcon,
  LD as SquareChartGantt,
  LD as SquareChartGanttIcon,
  CD as SquareCheck,
  fD as SquareCheckBig,
  fD as SquareCheckBigIcon,
  CD as SquareCheckIcon,
  bD as SquareChevronDown,
  bD as SquareChevronDownIcon,
  qD as SquareChevronLeft,
  qD as SquareChevronLeftIcon,
  SD as SquareChevronRight,
  SD as SquareChevronRightIcon,
  HD as SquareChevronUp,
  HD as SquareChevronUpIcon,
  BD as SquareCode,
  BD as SquareCodeIcon,
  ED as SquareDashed,
  DD as SquareDashedBottom,
  VD as SquareDashedBottomCode,
  VD as SquareDashedBottomCodeIcon,
  DD as SquareDashedBottomIcon,
  ED as SquareDashedIcon,
  TD as SquareDashedKanban,
  TD as SquareDashedKanbanIcon,
  OD as SquareDashedMousePointer,
  OD as SquareDashedMousePointerIcon,
  ZD as SquareDashedTopSolid,
  ZD as SquareDashedTopSolidIcon,
  KD as SquareDivide,
  KD as SquareDivideIcon,
  JD as SquareDot,
  JD as SquareDotIcon,
  eR as SquareEqual,
  eR as SquareEqualIcon,
  cR as SquareFunction,
  cR as SquareFunctionIcon,
  LD as SquareGanttChart,
  LD as SquareGanttChartIcon,
  kT as SquareIcon,
  oR as SquareKanban,
  oR as SquareKanbanIcon,
  nR as SquareLibrary,
  nR as SquareLibraryIcon,
  yR as SquareM,
  yR as SquareMIcon,
  sR as SquareMenu,
  sR as SquareMenuIcon,
  kR as SquareMinus,
  kR as SquareMinusIcon,
  lR as SquareMousePointer,
  lR as SquareMousePointerIcon,
  mR as SquareParking,
  mR as SquareParkingIcon,
  MR as SquareParkingOff,
  MR as SquareParkingOffIcon,
  gR as SquarePause,
  gR as SquarePauseIcon,
  LR as SquarePen,
  LR as SquarePenIcon,
  fR as SquarePercent,
  fR as SquarePercentIcon,
  bR as SquarePi,
  bR as SquarePiIcon,
  CR as SquarePilcrow,
  CR as SquarePilcrowIcon,
  qR as SquarePlay,
  qR as SquarePlayIcon,
  SR as SquarePlus,
  SR as SquarePlusIcon,
  HR as SquarePower,
  HR as SquarePowerIcon,
  VR as SquareRadical,
  VR as SquareRadicalIcon,
  BR as SquareRoundCorner,
  BR as SquareRoundCornerIcon,
  DR as SquareScissors,
  DR as SquareScissorsIcon,
  TR as SquareSigma,
  TR as SquareSigmaIcon,
  OR as SquareSlash,
  OR as SquareSlashIcon,
  ZR as SquareSplitHorizontal,
  ZR as SquareSplitHorizontalIcon,
  ER as SquareSplitVertical,
  ER as SquareSplitVerticalIcon,
  KR as SquareSquare,
  KR as SquareSquareIcon,
  JR as SquareStack,
  JR as SquareStackIcon,
  eT as SquareStar,
  eT as SquareStarIcon,
  nT as SquareStop,
  nT as SquareStopIcon,
  cT as SquareTerminal,
  cT as SquareTerminalIcon,
  sT as SquareUser,
  sT as SquareUserIcon,
  oT as SquareUserRound,
  oT as SquareUserRoundIcon,
  yT as SquareX,
  yT as SquareXIcon,
  lT as SquaresExclude,
  lT as SquaresExcludeIcon,
  MT as SquaresIntersect,
  MT as SquaresIntersectIcon,
  mT as SquaresSubtract,
  mT as SquaresSubtractIcon,
  LT as SquaresUnite,
  LT as SquaresUniteIcon,
  fT as Squircle,
  gT as SquircleDashed,
  gT as SquircleDashedIcon,
  fT as SquircleIcon,
  CT as Squirrel,
  CT as SquirrelIcon,
  bT as Stamp,
  bT as StampIcon,
  HT as Star,
  qT as StarHalf,
  qT as StarHalfIcon,
  HT as StarIcon,
  ST as StarOff,
  ST as StarOffIcon,
  LF as Stars,
  LF as StarsIcon,
  VT as StepBack,
  VT as StepBackIcon,
  BT as StepForward,
  BT as StepForwardIcon,
  TT as Stethoscope,
  TT as StethoscopeIcon,
  DT as Sticker,
  DT as StickerIcon,
  OT as StickyNote,
  OT as StickyNoteIcon,
  ZT as Stone,
  ZT as StoneIcon,
  Gy as StopCircle,
  Gy as StopCircleIcon,
  ET as Store,
  ET as StoreIcon,
  KT as StretchHorizontal,
  KT as StretchHorizontalIcon,
  JT as StretchVertical,
  JT as StretchVerticalIcon,
  eU as Strikethrough,
  eU as StrikethroughIcon,
  cU as Subscript,
  cU as SubscriptIcon,
  Un as Subtitles,
  Un as SubtitlesIcon,
  kU as Sun,
  oU as SunDim,
  oU as SunDimIcon,
  kU as SunIcon,
  nU as SunMedium,
  nU as SunMediumIcon,
  sU as SunMoon,
  sU as SunMoonIcon,
  yU as SunSnow,
  yU as SunSnowIcon,
  lU as Sunrise,
  lU as SunriseIcon,
  MU as Sunset,
  MU as SunsetIcon,
  mU as Superscript,
  mU as SuperscriptIcon,
  LU as SwatchBook,
  LU as SwatchBookIcon,
  gU as SwissFranc,
  gU as SwissFrancIcon,
  fU as SwitchCamera,
  fU as SwitchCameraIcon,
  CU as Sword,
  CU as SwordIcon,
  bU as Swords,
  bU as SwordsIcon,
  qU as Syringe,
  qU as SyringeIcon,
  ZU as Table,
  SU as Table2,
  SU as Table2Icon,
  HU as TableCellsMerge,
  HU as TableCellsMergeIcon,
  VU as TableCellsSplit,
  VU as TableCellsSplitIcon,
  BU as TableColumnsSplit,
  BU as TableColumnsSplitIcon,
  Ir as TableConfig,
  Ir as TableConfigIcon,
  ZU as TableIcon,
  DU as TableOfContents,
  DU as TableOfContentsIcon,
  TU as TableProperties,
  TU as TablePropertiesIcon,
  OU as TableRowsSplit,
  OU as TableRowsSplitIcon,
  KU as Tablet,
  KU as TabletIcon,
  EU as TabletSmartphone,
  EU as TabletSmartphoneIcon,
  JU as Tablets,
  JU as TabletsIcon,
  eO as Tag,
  eO as TagIcon,
  cO as Tags,
  cO as TagsIcon,
  oO as Tally1,
  oO as Tally1Icon,
  nO as Tally2,
  nO as Tally2Icon,
  sO as Tally3,
  sO as Tally3Icon,
  yO as Tally4,
  yO as Tally4Icon,
  kO as Tally5,
  kO as Tally5Icon,
  lO as Tangent,
  lO as TangentIcon,
  MO as Target,
  MO as TargetIcon,
  gO as Telescope,
  gO as TelescopeIcon,
  LO as Tent,
  LO as TentIcon,
  mO as TentTree,
  mO as TentTreeIcon,
  fO as Terminal,
  fO as TerminalIcon,
  cT as TerminalSquare,
  cT as TerminalSquareIcon,
  bO as TestTube,
  CO as TestTube2,
  CO as TestTube2Icon,
  CO as TestTubeDiagonal,
  CO as TestTubeDiagonalIcon,
  bO as TestTubeIcon,
  qO as TestTubes,
  qO as TestTubesIcon,
  BO as Text,
  SO as TextAlignCenter,
  SO as TextAlignCenterIcon,
  HO as TextAlignEnd,
  HO as TextAlignEndIcon,
  VO as TextAlignJustify,
  VO as TextAlignJustifyIcon,
  BO as TextAlignStart,
  BO as TextAlignStartIcon,
  TO as TextCursor,
  TO as TextCursorIcon,
  DO as TextCursorInput,
  DO as TextCursorInputIcon,
  BO as TextIcon,
  OO as TextInitial,
  OO as TextInitialIcon,
  ZO as TextQuote,
  ZO as TextQuoteIcon,
  EO as TextSearch,
  EO as TextSearchIcon,
  KO as TextSelect,
  KO as TextSelectIcon,
  KO as TextSelection,
  KO as TextSelectionIcon,
  JO as TextWrap,
  JO as TextWrapIcon,
  eG as Theater,
  eG as TheaterIcon,
  nG as Thermometer,
  nG as ThermometerIcon,
  cG as ThermometerSnowflake,
  cG as ThermometerSnowflakeIcon,
  oG as ThermometerSun,
  oG as ThermometerSunIcon,
  sG as ThumbsDown,
  sG as ThumbsDownIcon,
  yG as ThumbsUp,
  yG as ThumbsUpIcon,
  fG as Ticket,
  kG as TicketCheck,
  kG as TicketCheckIcon,
  fG as TicketIcon,
  lG as TicketMinus,
  lG as TicketMinusIcon,
  MG as TicketPercent,
  MG as TicketPercentIcon,
  mG as TicketPlus,
  mG as TicketPlusIcon,
  gG as TicketSlash,
  gG as TicketSlashIcon,
  LG as TicketX,
  LG as TicketXIcon,
  bG as Tickets,
  bG as TicketsIcon,
  CG as TicketsPlane,
  CG as TicketsPlaneIcon,
  HG as Timer,
  HG as TimerIcon,
  qG as TimerOff,
  qG as TimerOffIcon,
  SG as TimerReset,
  SG as TimerResetIcon,
  VG as ToggleLeft,
  VG as ToggleLeftIcon,
  BG as ToggleRight,
  BG as ToggleRightIcon,
  DG as Toilet,
  DG as ToiletIcon,
  TG as ToolCase,
  TG as ToolCaseIcon,
  OG as Toolbox,
  OG as ToolboxIcon,
  ZG as Tornado,
  ZG as TornadoIcon,
  EG as Torus,
  EG as TorusIcon,
  JG as Touchpad,
  JG as TouchpadIcon,
  KG as TouchpadOff,
  KG as TouchpadOffIcon,
  eZ as TowerControl,
  eZ as TowerControlIcon,
  cZ as ToyBrick,
  cZ as ToyBrickIcon,
  oZ as Tractor,
  oZ as TractorIcon,
  nZ as TrafficCone,
  nZ as TrafficConeIcon,
  lZ as Train,
  yZ as TrainFront,
  yZ as TrainFrontIcon,
  sZ as TrainFrontTunnel,
  sZ as TrainFrontTunnelIcon,
  lZ as TrainIcon,
  kZ as TrainTrack,
  kZ as TrainTrackIcon,
  lZ as TramFront,
  lZ as TramFrontIcon,
  MZ as Transgender,
  MZ as TransgenderIcon,
  gZ as Trash,
  mZ as Trash2,
  mZ as Trash2Icon,
  gZ as TrashIcon,
  LZ as TreeDeciduous,
  LZ as TreeDeciduousIcon,
  fZ as TreePalm,
  fZ as TreePalmIcon,
  CZ as TreePine,
  CZ as TreePineIcon,
  bZ as Trees,
  bZ as TreesIcon,
  qZ as Trello,
  qZ as TrelloIcon,
  SZ as TrendingDown,
  SZ as TrendingDownIcon,
  VZ as TrendingUp,
  HZ as TrendingUpDown,
  HZ as TrendingUpDownIcon,
  VZ as TrendingUpIcon,
  OZ as Triangle,
  BZ as TriangleAlert,
  BZ as TriangleAlertIcon,
  DZ as TriangleDashed,
  DZ as TriangleDashedIcon,
  OZ as TriangleIcon,
  TZ as TriangleRight,
  TZ as TriangleRightIcon,
  ZZ as Trophy,
  ZZ as TrophyIcon,
  KZ as Truck,
  EZ as TruckElectric,
  EZ as TruckElectricIcon,
  KZ as TruckIcon,
  JZ as TurkishLira,
  JZ as TurkishLiraIcon,
  eW as Turntable,
  eW as TurntableIcon,
  cW as Turtle,
  cW as TurtleIcon,
  sW as Tv,
  nW as Tv2,
  nW as Tv2Icon,
  sW as TvIcon,
  nW as TvMinimal,
  nW as TvMinimalIcon,
  oW as TvMinimalPlay,
  oW as TvMinimalPlayIcon,
  yW as Twitch,
  yW as TwitchIcon,
  kW as Twitter,
  kW as TwitterIcon,
  MW as Type,
  MW as TypeIcon,
  lW as TypeOutline,
  lW as TypeOutlineIcon,
  gW as Umbrella,
  gW as UmbrellaIcon,
  mW as UmbrellaOff,
  mW as UmbrellaOffIcon,
  LW as Underline,
  LW as UnderlineIcon,
  bW as Undo,
  fW as Undo2,
  fW as Undo2Icon,
  CW as UndoDot,
  CW as UndoDotIcon,
  bW as UndoIcon,
  qW as UnfoldHorizontal,
  qW as UnfoldHorizontalIcon,
  SW as UnfoldVertical,
  SW as UnfoldVerticalIcon,
  HW as Ungroup,
  HW as UngroupIcon,
  VW as University,
  VW as UniversityIcon,
  DW as Unlink,
  BW as Unlink2,
  BW as Unlink2Icon,
  DW as UnlinkIcon,
  uw as Unlock,
  uw as UnlockIcon,
  rw as UnlockKeyhole,
  rw as UnlockKeyholeIcon,
  TW as Unplug,
  TW as UnplugIcon,
  OW as Upload,
  Y5 as UploadCloud,
  Y5 as UploadCloudIcon,
  OW as UploadIcon,
  ZW as Usb,
  ZW as UsbIcon,
  bE as User,
  gE as User2,
  gE as User2Icon,
  EW as UserCheck,
  nE as UserCheck2,
  nE as UserCheck2Icon,
  EW as UserCheckIcon,
  Xy as UserCircle,
  Wy as UserCircle2,
  Wy as UserCircle2Icon,
  Xy as UserCircleIcon,
  KW as UserCog,
  sE as UserCog2,
  sE as UserCog2Icon,
  KW as UserCogIcon,
  bE as UserIcon,
  eE as UserLock,
  eE as UserLockIcon,
  JW as UserMinus,
  yE as UserMinus2,
  yE as UserMinus2Icon,
  JW as UserMinusIcon,
  cE as UserPen,
  cE as UserPenIcon,
  oE as UserPlus,
  lE as UserPlus2,
  lE as UserPlus2Icon,
  oE as UserPlusIcon,
  gE as UserRound,
  nE as UserRoundCheck,
  nE as UserRoundCheckIcon,
  sE as UserRoundCog,
  sE as UserRoundCogIcon,
  gE as UserRoundIcon,
  yE as UserRoundMinus,
  yE as UserRoundMinusIcon,
  kE as UserRoundPen,
  kE as UserRoundPenIcon,
  lE as UserRoundPlus,
  lE as UserRoundPlusIcon,
  ME as UserRoundSearch,
  ME as UserRoundSearchIcon,
  mE as UserRoundX,
  mE as UserRoundXIcon,
  LE as UserSearch,
  LE as UserSearchIcon,
  sT as UserSquare,
  oT as UserSquare2,
  oT as UserSquare2Icon,
  sT as UserSquareIcon,
  fE as UserStar,
  fE as UserStarIcon,
  CE as UserX,
  mE as UserX2,
  mE as UserX2Icon,
  CE as UserXIcon,
  SE as Users,
  qE as Users2,
  qE as Users2Icon,
  SE as UsersIcon,
  qE as UsersRound,
  qE as UsersRoundIcon,
  VE as Utensils,
  HE as UtensilsCrossed,
  HE as UtensilsCrossedIcon,
  VE as UtensilsIcon,
  BE as UtilityPole,
  BE as UtilityPoleIcon,
  DE as Van,
  DE as VanIcon,
  TE as Variable,
  TE as VariableIcon,
  OE as Vault,
  OE as VaultIcon,
  ZE as VectorSquare,
  ZE as VectorSquareIcon,
  EE as Vegan,
  EE as VeganIcon,
  KE as VenetianMask,
  KE as VenetianMaskIcon,
  eX as Venus,
  JE as VenusAndMars,
  JE as VenusAndMarsIcon,
  eX as VenusIcon,
  xa as Verified,
  xa as VerifiedIcon,
  oX as Vibrate,
  oX as VibrateIcon,
  cX as VibrateOff,
  cX as VibrateOffIcon,
  sX as Video,
  sX as VideoIcon,
  nX as VideoOff,
  nX as VideoOffIcon,
  yX as Videotape,
  yX as VideotapeIcon,
  kX as View,
  kX as ViewIcon,
  lX as Voicemail,
  lX as VoicemailIcon,
  MX as Volleyball,
  MX as VolleyballIcon,
  CX as Volume,
  mX as Volume1,
  mX as Volume1Icon,
  LX as Volume2,
  LX as Volume2Icon,
  CX as VolumeIcon,
  gX as VolumeOff,
  gX as VolumeOffIcon,
  fX as VolumeX,
  fX as VolumeXIcon,
  bX as Vote,
  bX as VoteIcon,
  HX as Wallet,
  SX as Wallet2,
  SX as Wallet2Icon,
  qX as WalletCards,
  qX as WalletCardsIcon,
  HX as WalletIcon,
  SX as WalletMinimal,
  SX as WalletMinimalIcon,
  VX as Wallpaper,
  VX as WallpaperIcon,
  DX as Wand,
  BX as Wand2,
  BX as Wand2Icon,
  DX as WandIcon,
  BX as WandSparkles,
  BX as WandSparklesIcon,
  TX as Warehouse,
  TX as WarehouseIcon,
  OX as WashingMachine,
  OX as WashingMachineIcon,
  ZX as Watch,
  ZX as WatchIcon,
  eK as Waves,
  EX as WavesArrowDown,
  EX as WavesArrowDownIcon,
  KX as WavesArrowUp,
  KX as WavesArrowUpIcon,
  eK as WavesIcon,
  JX as WavesLadder,
  JX as WavesLadderIcon,
  cK as Waypoints,
  cK as WaypointsIcon,
  oK as Webcam,
  oK as WebcamIcon,
  sK as Webhook,
  sK as WebhookIcon,
  nK as WebhookOff,
  nK as WebhookOffIcon,
  kK as Weight,
  kK as WeightIcon,
  yK as WeightTilde,
  yK as WeightTildeIcon,
  MK as Wheat,
  MK as WheatIcon,
  lK as WheatOff,
  lK as WheatOffIcon,
  mK as WholeWord,
  mK as WholeWordIcon,
  HK as Wifi,
  gK as WifiCog,
  gK as WifiCogIcon,
  LK as WifiHigh,
  LK as WifiHighIcon,
  HK as WifiIcon,
  fK as WifiLow,
  fK as WifiLowIcon,
  CK as WifiOff,
  CK as WifiOffIcon,
  bK as WifiPen,
  bK as WifiPenIcon,
  qK as WifiSync,
  qK as WifiSyncIcon,
  SK as WifiZero,
  SK as WifiZeroIcon,
  BK as Wind,
  VK as WindArrowDown,
  VK as WindArrowDownIcon,
  BK as WindIcon,
  TK as Wine,
  TK as WineIcon,
  DK as WineOff,
  DK as WineOffIcon,
  OK as Workflow,
  OK as WorkflowIcon,
  ZK as Worm,
  ZK as WormIcon,
  JO as WrapText,
  JO as WrapTextIcon,
  EK as Wrench,
  EK as WrenchIcon,
  KK as X,
  Qy as XCircle,
  Qy as XCircleIcon,
  KK as XIcon,
  Zb as XOctagon,
  Zb as XOctagonIcon,
  yT as XSquare,
  yT as XSquareIcon,
  JK as Youtube,
  JK as YoutubeIcon,
  cQ as Zap,
  cQ as ZapIcon,
  eQ as ZapOff,
  eQ as ZapOffIcon,
  oQ as ZoomIn,
  oQ as ZoomInIcon,
  nQ as ZoomOut,
  nQ as ZoomOutIcon,
  e as createLucideIcon,
  iQ as icons
};

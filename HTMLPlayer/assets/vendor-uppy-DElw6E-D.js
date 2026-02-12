var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _e2, _Ut_instances, t_fn, _e3, _e4, _Ii_instances, t_fn2, _e5, _t2, _d, _n, _u, _c, _s, _Dt_instances, i_fn, f_fn, b_fn, w_fn, S_fn, h_fn, p_fn, g_fn, __fn, _F, m_fn, _o, x_fn, E_fn, _r2, _y, a_fn, T_fn, v_fn, l_fn;
import { r as Yt, g as Q, c as G } from "./vendor-react-C6Febm84.js";
import "./vendor-ui-BG0coi97.js";
var te = { exports: {} }, ie = {};
var qe;
function Vt() {
  if (qe) return ie;
  qe = 1;
  var i = Yt();
  function e(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var t = typeof Object.is == "function" ? Object.is : e, r = i.useState, n = i.useEffect, s = i.useLayoutEffect, o = i.useDebugValue;
  function a(u, f) {
    var h = f(), p = r({ inst: { value: h, getSnapshot: f } }), g = p[0].inst, y = p[1];
    return s(function() {
      g.value = h, g.getSnapshot = f, c(g) && y({ inst: g });
    }, [u, h, f]), n(function() {
      return c(g) && y({ inst: g }), u(function() {
        c(g) && y({ inst: g });
      });
    }, [u]), o(h), h;
  }
  function c(u) {
    var f = u.getSnapshot;
    u = u.value;
    try {
      var h = f();
      return !t(u, h);
    } catch {
      return true;
    }
  }
  function l(u, f) {
    return f();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : a;
  return ie.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : d, ie;
}
var Ie;
function Xt() {
  return Ie || (Ie = 1, te.exports = Vt()), te.exports;
}
var fr = Xt();
const Kt = /^data:([^/]+\/[^,;]+(?:[^,]*?))(;base64)?,([\s\S]*)$/;
function hr(i, e, t) {
  const r = Kt.exec(i), n = e.mimeType ?? (r == null ? void 0 : r[1]) ?? "plain/text";
  let s;
  if ((r == null ? void 0 : r[2]) != null) {
    const o = atob(decodeURIComponent(r[3])), a = new Uint8Array(o.length);
    for (let c = 0; c < o.length; c++) a[c] = o.charCodeAt(c);
    s = [a];
  } else (r == null ? void 0 : r[3]) != null && (s = [decodeURIComponent(r[3])]);
  return new Blob(s, { type: n });
}
function pr(i, e, t, r) {
  return i === e ? i : r === 0 ? e : i + (e - i) * 2 ** (-r / t);
}
const gr = ['a[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'area[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', "input:not([disabled]):not([inert]):not([aria-hidden])", "select:not([disabled]):not([inert]):not([aria-hidden])", "textarea:not([disabled]):not([inert]):not([aria-hidden])", "button:not([disabled]):not([inert]):not([aria-hidden])", 'iframe:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'object:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'embed:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[contenteditable]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[tabindex]:not([tabindex^="-"]):not([inert]):not([aria-hidden])'];
function St(i) {
  return typeof i != "object" || i === null || !("nodeType" in i) ? false : i.nodeType === Node.ELEMENT_NODE;
}
function _r(i) {
  if (typeof i == "string") {
    const e = document.querySelectorAll(i);
    return e.length === 0 ? null : Array.from(e);
  }
  return typeof i == "object" && St(i) ? [i] : null;
}
function Jt(i, e = document) {
  return typeof i == "string" ? e.querySelector(i) : St(i) ? i : null;
}
function Ft(i) {
  const e = i.lastIndexOf(".");
  return e === -1 || e === i.length - 1 ? { name: i, extension: void 0 } : { name: i.slice(0, e), extension: i.slice(e + 1) };
}
const ze = { __proto__: null, md: "text/markdown", markdown: "text/markdown", mp4: "video/mp4", mp3: "audio/mp3", svg: "image/svg+xml", jpg: "image/jpeg", png: "image/png", webp: "image/webp", gif: "image/gif", heic: "image/heic", heif: "image/heif", yaml: "text/yaml", yml: "text/yaml", csv: "text/csv", tsv: "text/tab-separated-values", tab: "text/tab-separated-values", avi: "video/x-msvideo", mks: "video/x-matroska", mkv: "video/x-matroska", mov: "video/quicktime", dicom: "application/dicom", doc: "application/msword", msg: "application/vnd.ms-outlook", docm: "application/vnd.ms-word.document.macroenabled.12", docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", dot: "application/msword", dotm: "application/vnd.ms-word.template.macroenabled.12", dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template", xla: "application/vnd.ms-excel", xlam: "application/vnd.ms-excel.addin.macroenabled.12", xlc: "application/vnd.ms-excel", xlf: "application/x-xliff+xml", xlm: "application/vnd.ms-excel", xls: "application/vnd.ms-excel", xlsb: "application/vnd.ms-excel.sheet.binary.macroenabled.12", xlsm: "application/vnd.ms-excel.sheet.macroenabled.12", xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", xlt: "application/vnd.ms-excel", xltm: "application/vnd.ms-excel.template.macroenabled.12", xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template", xlw: "application/vnd.ms-excel", txt: "text/plain", text: "text/plain", conf: "text/plain", log: "text/plain", pdf: "application/pdf", zip: "application/zip", "7z": "application/x-7z-compressed", rar: "application/x-rar-compressed", tar: "application/x-tar", gz: "application/gzip", dmg: "application/x-apple-diskimage" };
function xt(i) {
  var _a;
  if (i.type) return i.type;
  const e = i.name ? (_a = Ft(i.name).extension) == null ? void 0 : _a.toLowerCase() : null;
  return e && e in ze ? ze[e] : "application/octet-stream";
}
function Zt(i) {
  return i.charCodeAt(0).toString(32);
}
function Le(i) {
  let e = "";
  return i.replace(/[^A-Z0-9]/gi, (t) => (e += `-${Zt(t)}`, "/")) + e;
}
function Qt(i, e) {
  var _a;
  let t = e || "uppy";
  return typeof i.name == "string" && (t += `-${Le(i.name.toLowerCase())}`), i.type !== void 0 && (t += `-${i.type}`), i.meta && typeof i.meta.relativePath == "string" && (t += `-${Le(i.meta.relativePath.toLowerCase())}`), ((_a = i.data) == null ? void 0 : _a.size) !== void 0 && (t += `-${i.data.size}`), i.data.lastModified !== void 0 && (t += `-${i.data.lastModified}`), t;
}
function ei(i) {
  return !i.isRemote || !i.remote ? false : (/* @__PURE__ */ new Set(["box", "dropbox", "drive", "facebook", "unsplash"])).has(i.remote.provider);
}
function ti(i, e) {
  if (ei(i)) return i.id;
  const t = xt(i);
  return Qt({ ...i, type: t }, e);
}
const ii = Array.from;
function ri(i) {
  const e = ii(i.files);
  return Promise.resolve(e);
}
function Et(i, e, t, { onSuccess: r }) {
  i.readEntries((n) => {
    const s = [...e, ...n];
    n.length ? queueMicrotask(() => {
      Et(i, s, t, { onSuccess: r });
    }) : r(s);
  }, (n) => {
    t(n), r(e);
  });
}
function Tt(i, e) {
  return i == null ? i : { kind: i.isFile ? "file" : i.isDirectory ? "directory" : void 0, name: i.name, getFile() {
    return new Promise((t, r) => i.file(t, r));
  }, async *values() {
    const t = i.createReader();
    yield* await new Promise((n) => {
      Et(t, [], e, { onSuccess: (s) => n(s.map((o) => Tt(o, e))) });
    });
  }, isSameEntry: void 0 };
}
async function* Pt(i, e, t = void 0) {
  const r = () => `${e}/${i.name}`;
  if (i.kind === "file") {
    const n = await i.getFile();
    n != null ? (n.relativePath = e ? r() : null, yield n) : t != null && (yield t);
  } else if (i.kind === "directory") for await (const n of i.values()) yield* Pt(n, e ? r() : i.name);
  else t != null && (yield t);
}
async function* ni(i, e) {
  const t = await Promise.all(Array.from(i.items, async (r) => {
    let n;
    return n ?? (n = Tt(typeof r.getAsEntry == "function" ? r.getAsEntry() : r.webkitGetAsEntry(), e)), { fileSystemHandle: n, lastResortFile: r.getAsFile() };
  }));
  for (const { lastResortFile: r, fileSystemHandle: n } of t) if (n != null) try {
    yield* Pt(n, "", r);
  } catch (s) {
    r != null ? yield r : e(s);
  }
  else r != null && (yield r);
}
async function mr(i, e) {
  const t = (e == null ? void 0 : e.logDropError) ?? Function.prototype;
  try {
    const r = [];
    for await (const n of ni(i, t)) r.push(n);
    return r;
  } catch {
    return ri(i);
  }
}
function si(i) {
  for (; i && !i.dir; ) i = i.parentNode;
  return i == null ? void 0 : i.dir;
}
function re(i) {
  return i < 10 ? `0${i}` : i.toString();
}
function X() {
  const i = /* @__PURE__ */ new Date(), e = re(i.getHours()), t = re(i.getMinutes()), r = re(i.getSeconds());
  return `${e}:${t}:${r}`;
}
function yr() {
  if (typeof window > "u") return false;
  const i = document.body;
  return !(i == null || window == null || !("draggable" in i) || !("ondragstart" in i) || !("ondrop" in i) || !("FormData" in window) || !("FileReader" in window));
}
function vr(i) {
  return i.startsWith("blob:");
}
function br(i) {
  return i ? /^[^/]+\/(jpe?g|gif|png|svg|svg\+xml|bmp|webp|avif)$/.test(i) : false;
}
function oi(i) {
  const e = Math.floor(i / 3600) % 24, t = Math.floor(i / 60) % 60, r = Math.floor(i % 60);
  return { hours: e, minutes: t, seconds: r };
}
function wr(i) {
  const e = oi(i), t = e.hours === 0 ? "" : `${e.hours}h`, r = e.minutes === 0 ? "" : `${e.hours === 0 ? e.minutes : ` ${e.minutes.toString(10).padStart(2, "0")}`}m`, n = e.hours !== 0 ? "" : `${e.minutes === 0 ? e.seconds : ` ${e.seconds.toString(10).padStart(2, "0")}`}s`;
  return `${t}${r}${n}`;
}
function ai(i, e, t) {
  const r = [];
  return i.forEach((n) => typeof n != "string" ? r.push(n) : e[Symbol.split](n).forEach((s, o, a) => {
    s !== "" && r.push(s), o < a.length - 1 && r.push(t);
  })), r;
}
function Be(i, e) {
  const t = /\$/g, r = "$$$$";
  let n = [i];
  if (e == null) return n;
  for (const s of Object.keys(e)) if (s !== "_") {
    let o = e[s];
    typeof o == "string" && (o = t[Symbol.replace](o, r)), n = ai(n, new RegExp(`%\\{${s}\\}`, "g"), o);
  }
  return n;
}
const li = (i) => {
  throw new Error(`missing string: ${i}`);
};
class Ut {
  constructor(e, { onMissingKey: t = li } = {}) {
    __privateAdd(this, _Ut_instances);
    __publicField(this, "locale");
    __privateAdd(this, _e2);
    this.locale = { strings: {}, pluralize(r) {
      return r === 1 ? 0 : 1;
    } }, Array.isArray(e) ? e.forEach(__privateMethod(this, _Ut_instances, t_fn), this) : __privateMethod(this, _Ut_instances, t_fn).call(this, e), __privateSet(this, _e2, t);
  }
  translate(e, t) {
    return this.translateArray(e, t).join("");
  }
  translateArray(e, t) {
    let r = this.locale.strings[e];
    if (r == null && (__privateGet(this, _e2).call(this, e), r = e), typeof r == "object") {
      if (t && typeof t.smart_count < "u") {
        const s = this.locale.pluralize(t.smart_count);
        return Be(r[s], t);
      }
      throw new Error("Attempted to use a string with plural forms, but no value was given for %{smart_count}");
    }
    if (typeof r != "string") throw new Error("string was not a string");
    return Be(r, t);
  }
}
_e2 = new WeakMap();
_Ut_instances = new WeakSet();
t_fn = function(e) {
  if (!(e == null ? void 0 : e.strings)) return;
  const t = this.locale;
  Object.assign(this.locale, { strings: { ...t.strings, ...e.strings }, pluralize: e.pluralize || t.pluralize });
};
const ne = "...";
function Sr(i, e) {
  if (e === 0) return "";
  if (i.length <= e) return i;
  if (e <= ne.length + 1) return `${i.slice(0, e - 1)}\u2026`;
  const t = e - ne.length, r = Math.ceil(t / 2), n = Math.floor(t / 2);
  return i.slice(0, r) + ne + i.slice(-n);
}
var H, v, $t, O, He, Rt, kt, At, ke, Te, Pe, z = {}, Ot = [], ui = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, W = Array.isArray;
function U(i, e) {
  for (var t in e) i[t] = e[t];
  return i;
}
function Ae(i) {
  i && i.parentNode && i.parentNode.removeChild(i);
}
function ci(i, e, t) {
  var r, n, s, o = {};
  for (s in e) s == "key" ? r = e[s] : s == "ref" ? n = e[s] : o[s] = e[s];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? H.call(arguments, 2) : t), typeof i == "function" && i.defaultProps != null) for (s in i.defaultProps) o[s] === void 0 && (o[s] = i.defaultProps[s]);
  return I(i, o, r, n, null);
}
function I(i, e, t, r, n) {
  var s = { type: i, props: e, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: n ?? ++$t, __i: -1, __u: 0 };
  return n == null && v.vnode != null && v.vnode(s), s;
}
function Fr() {
  return { current: null };
}
function ee(i) {
  return i.children;
}
function K(i, e) {
  this.props = i, this.context = e;
}
function M(i, e) {
  if (e == null) return i.__ ? M(i.__, i.__i + 1) : null;
  for (var t; e < i.__k.length; e++) if ((t = i.__k[e]) != null && t.__e != null) return t.__e;
  return typeof i.type == "function" ? M(i) : null;
}
function Nt(i) {
  var e, t;
  if ((i = i.__) != null && i.__c != null) {
    for (i.__e = i.__c.base = null, e = 0; e < i.__k.length; e++) if ((t = i.__k[e]) != null && t.__e != null) {
      i.__e = i.__c.base = t.__e;
      break;
    }
    return Nt(i);
  }
}
function We(i) {
  (!i.__d && (i.__d = true) && O.push(i) && !Z.__r++ || He != v.debounceRendering) && ((He = v.debounceRendering) || Rt)(Z);
}
function Z() {
  for (var i, e, t, r, n, s, o, a = 1; O.length; ) O.length > a && O.sort(kt), i = O.shift(), a = O.length, i.__d && (t = void 0, r = void 0, n = (r = (e = i).__v).__e, s = [], o = [], e.__P && ((t = U({}, r)).__v = r.__v + 1, v.vnode && v.vnode(t), Oe(e.__P, t, r, e.__n, e.__P.namespaceURI, 32 & r.__u ? [n] : null, s, n ?? M(r), !!(32 & r.__u), o), t.__v = r.__v, t.__.__k[t.__i] = t, Ct(s, t, o), r.__e = r.__ = null, t.__e != n && Nt(t)));
  Z.__r = 0;
}
function Mt(i, e, t, r, n, s, o, a, c, l, d) {
  var u, f, h, p, g, y, m, _ = r && r.__k || Ot, F = e.length;
  for (c = di(t, e, _, c, F), u = 0; u < F; u++) (h = t.__k[u]) != null && (f = h.__i == -1 ? z : _[h.__i] || z, h.__i = u, y = Oe(i, h, f, n, s, o, a, c, l, d), p = h.__e, h.ref && f.ref != h.ref && (f.ref && Ne(f.ref, null, h), d.push(h.ref, h.__c || p, h)), g == null && p != null && (g = p), (m = !!(4 & h.__u)) || f.__k === h.__k ? c = jt(h, c, i, m) : typeof h.type == "function" && y !== void 0 ? c = y : p && (c = p.nextSibling), h.__u &= -7);
  return t.__e = g, c;
}
function di(i, e, t, r, n) {
  var s, o, a, c, l, d = t.length, u = d, f = 0;
  for (i.__k = new Array(n), s = 0; s < n; s++) (o = e[s]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = i.__k[s] = I(null, o, null, null, null) : W(o) ? o = i.__k[s] = I(ee, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = i.__k[s] = I(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : i.__k[s] = o, c = s + f, o.__ = i, o.__b = i.__b + 1, a = null, (l = o.__i = hi(o, t, c, u)) != -1 && (u--, (a = t[l]) && (a.__u |= 2)), a == null || a.__v == null ? (l == -1 && (n > d ? f-- : n < d && f++), typeof o.type != "function" && (o.__u |= 4)) : l != c && (l == c - 1 ? f-- : l == c + 1 ? f++ : (l > c ? f-- : f++, o.__u |= 4))) : i.__k[s] = null;
  if (u) for (s = 0; s < d; s++) (a = t[s]) != null && (2 & a.__u) == 0 && (a.__e == r && (r = M(a)), It(a, a));
  return r;
}
function jt(i, e, t, r) {
  var n, s;
  if (typeof i.type == "function") {
    for (n = i.__k, s = 0; n && s < n.length; s++) n[s] && (n[s].__ = i, e = jt(n[s], e, t, r));
    return e;
  }
  i.__e != e && (r && (e && i.type && !e.parentNode && (e = M(i)), t.insertBefore(i.__e, e || null)), e = i.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function fi(i, e) {
  return e = e || [], i == null || typeof i == "boolean" || (W(i) ? i.some(function(t) {
    fi(t, e);
  }) : e.push(i)), e;
}
function hi(i, e, t, r) {
  var n, s, o, a = i.key, c = i.type, l = e[t], d = l != null && (2 & l.__u) == 0;
  if (l === null && a == null || d && a == l.key && c == l.type) return t;
  if (r > (d ? 1 : 0)) {
    for (n = t - 1, s = t + 1; n >= 0 || s < e.length; ) if ((l = e[o = n >= 0 ? n-- : s++]) != null && (2 & l.__u) == 0 && a == l.key && c == l.type) return o;
  }
  return -1;
}
function Ge(i, e, t) {
  e[0] == "-" ? i.setProperty(e, t ?? "") : i[e] = t == null ? "" : typeof t != "number" || ui.test(e) ? t : t + "px";
}
function D(i, e, t, r, n) {
  var s, o;
  e: if (e == "style") if (typeof t == "string") i.style.cssText = t;
  else {
    if (typeof r == "string" && (i.style.cssText = r = ""), r) for (e in r) t && e in t || Ge(i.style, e, "");
    if (t) for (e in t) r && t[e] == r[e] || Ge(i.style, e, t[e]);
  }
  else if (e[0] == "o" && e[1] == "n") s = e != (e = e.replace(At, "$1")), o = e.toLowerCase(), e = o in i || e == "onFocusOut" || e == "onFocusIn" ? o.slice(2) : e.slice(2), i.l || (i.l = {}), i.l[e + s] = t, t ? r ? t.u = r.u : (t.u = ke, i.addEventListener(e, s ? Pe : Te, s)) : i.removeEventListener(e, s ? Pe : Te, s);
  else {
    if (n == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in i) try {
      i[e] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || t === false && e[4] != "-" ? i.removeAttribute(e) : i.setAttribute(e, e == "popover" && t == 1 ? "" : t));
  }
}
function De(i) {
  return function(e) {
    if (this.l) {
      var t = this.l[e.type + i];
      if (e.t == null) e.t = ke++;
      else if (e.t < t.u) return;
      return t(v.event ? v.event(e) : e);
    }
  };
}
function Oe(i, e, t, r, n, s, o, a, c, l) {
  var d, u, f, h, p, g, y, m, _, F, E, N, A, j, $, R, C, x = e.type;
  if (e.constructor !== void 0) return null;
  128 & t.__u && (c = !!(32 & t.__u), s = [a = e.__e = t.__e]), (d = v.__b) && d(e);
  e: if (typeof x == "function") try {
    if (m = e.props, _ = "prototype" in x && x.prototype.render, F = (d = x.contextType) && r[d.__c], E = d ? F ? F.props.value : d.__ : r, t.__c ? y = (u = e.__c = t.__c).__ = u.__E : (_ ? e.__c = u = new x(m, E) : (e.__c = u = new K(m, E), u.constructor = x, u.render = gi), F && F.sub(u), u.state || (u.state = {}), u.__n = r, f = u.__d = true, u.__h = [], u._sb = []), _ && u.__s == null && (u.__s = u.state), _ && x.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = U({}, u.__s)), U(u.__s, x.getDerivedStateFromProps(m, u.__s))), h = u.props, p = u.state, u.__v = e, f) _ && x.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), _ && u.componentDidMount != null && u.__h.push(u.componentDidMount);
    else {
      if (_ && x.getDerivedStateFromProps == null && m !== h && u.componentWillReceiveProps != null && u.componentWillReceiveProps(m, E), e.__v == t.__v || !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(m, u.__s, E) === false) {
        for (e.__v != t.__v && (u.props = m, u.state = u.__s, u.__d = false), e.__e = t.__e, e.__k = t.__k, e.__k.some(function(P) {
          P && (P.__ = e);
        }), N = 0; N < u._sb.length; N++) u.__h.push(u._sb[N]);
        u._sb = [], u.__h.length && o.push(u);
        break e;
      }
      u.componentWillUpdate != null && u.componentWillUpdate(m, u.__s, E), _ && u.componentDidUpdate != null && u.__h.push(function() {
        u.componentDidUpdate(h, p, g);
      });
    }
    if (u.context = E, u.props = m, u.__P = i, u.__e = false, A = v.__r, j = 0, _) {
      for (u.state = u.__s, u.__d = false, A && A(e), d = u.render(u.props, u.state, u.context), $ = 0; $ < u._sb.length; $++) u.__h.push(u._sb[$]);
      u._sb = [];
    } else do
      u.__d = false, A && A(e), d = u.render(u.props, u.state, u.context), u.state = u.__s;
    while (u.__d && ++j < 25);
    u.state = u.__s, u.getChildContext != null && (r = U(U({}, r), u.getChildContext())), _ && !f && u.getSnapshotBeforeUpdate != null && (g = u.getSnapshotBeforeUpdate(h, p)), R = d, d != null && d.type === ee && d.key == null && (R = qt(d.props.children)), a = Mt(i, W(R) ? R : [R], e, t, r, n, s, o, a, c, l), u.base = e.__e, e.__u &= -161, u.__h.length && o.push(u), y && (u.__E = u.__ = null);
  } catch (P) {
    if (e.__v = null, c || s != null) if (P.then) {
      for (e.__u |= c ? 160 : 128; a && a.nodeType == 8 && a.nextSibling; ) a = a.nextSibling;
      s[s.indexOf(a)] = null, e.__e = a;
    } else {
      for (C = s.length; C--; ) Ae(s[C]);
      Ue(e);
    }
    else e.__e = t.__e, e.__k = t.__k, P.then || Ue(e);
    v.__e(P, e, t);
  }
  else s == null && e.__v == t.__v ? (e.__k = t.__k, e.__e = t.__e) : a = e.__e = pi(t.__e, e, t, r, n, s, o, c, l);
  return (d = v.diffed) && d(e), 128 & e.__u ? void 0 : a;
}
function Ue(i) {
  i && i.__c && (i.__c.__e = true), i && i.__k && i.__k.forEach(Ue);
}
function Ct(i, e, t) {
  for (var r = 0; r < t.length; r++) Ne(t[r], t[++r], t[++r]);
  v.__c && v.__c(e, i), i.some(function(n) {
    try {
      i = n.__h, n.__h = [], i.some(function(s) {
        s.call(n);
      });
    } catch (s) {
      v.__e(s, n.__v);
    }
  });
}
function qt(i) {
  return typeof i != "object" || i == null || i.__b && i.__b > 0 ? i : W(i) ? i.map(qt) : U({}, i);
}
function pi(i, e, t, r, n, s, o, a, c) {
  var l, d, u, f, h, p, g, y = t.props || z, m = e.props, _ = e.type;
  if (_ == "svg" ? n = "http://www.w3.org/2000/svg" : _ == "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), s != null) {
    for (l = 0; l < s.length; l++) if ((h = s[l]) && "setAttribute" in h == !!_ && (_ ? h.localName == _ : h.nodeType == 3)) {
      i = h, s[l] = null;
      break;
    }
  }
  if (i == null) {
    if (_ == null) return document.createTextNode(m);
    i = document.createElementNS(n, _, m.is && m), a && (v.__m && v.__m(e, s), a = false), s = null;
  }
  if (_ == null) y === m || a && i.data == m || (i.data = m);
  else {
    if (s = s && H.call(i.childNodes), !a && s != null) for (y = {}, l = 0; l < i.attributes.length; l++) y[(h = i.attributes[l]).name] = h.value;
    for (l in y) if (h = y[l], l != "children") {
      if (l == "dangerouslySetInnerHTML") u = h;
      else if (!(l in m)) {
        if (l == "value" && "defaultValue" in m || l == "checked" && "defaultChecked" in m) continue;
        D(i, l, null, h, n);
      }
    }
    for (l in m) h = m[l], l == "children" ? f = h : l == "dangerouslySetInnerHTML" ? d = h : l == "value" ? p = h : l == "checked" ? g = h : a && typeof h != "function" || y[l] === h || D(i, l, h, y[l], n);
    if (d) a || u && (d.__html == u.__html || d.__html == i.innerHTML) || (i.innerHTML = d.__html), e.__k = [];
    else if (u && (i.innerHTML = ""), Mt(e.type == "template" ? i.content : i, W(f) ? f : [f], e, t, r, _ == "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, s, o, s ? s[0] : t.__k && M(t, 0), a, c), s != null) for (l = s.length; l--; ) Ae(s[l]);
    a || (l = "value", _ == "progress" && p == null ? i.removeAttribute("value") : p != null && (p !== i[l] || _ == "progress" && !p || _ == "option" && p != y[l]) && D(i, l, p, y[l], n), l = "checked", g != null && g != i[l] && D(i, l, g, y[l], n));
  }
  return i;
}
function Ne(i, e, t) {
  try {
    if (typeof i == "function") {
      var r = typeof i.__u == "function";
      r && i.__u(), r && e == null || (i.__u = i(e));
    } else i.current = e;
  } catch (n) {
    v.__e(n, t);
  }
}
function It(i, e, t) {
  var r, n;
  if (v.unmount && v.unmount(i), (r = i.ref) && (r.current && r.current != i.__e || Ne(r, null, e)), (r = i.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (s) {
      v.__e(s, e);
    }
    r.base = r.__P = null;
  }
  if (r = i.__k) for (n = 0; n < r.length; n++) r[n] && It(r[n], e, t || typeof i.type != "function");
  t || Ae(i.__e), i.__c = i.__ = i.__e = void 0;
}
function gi(i, e, t) {
  return this.constructor(i, t);
}
function Ye(i, e, t) {
  var r, n, s, o;
  e == document && (e = document.documentElement), v.__ && v.__(i, e), n = (r = false) ? null : e.__k, s = [], o = [], Oe(e, i = e.__k = ci(ee, null, [i]), n || z, z, e.namespaceURI, n ? null : e.firstChild ? H.call(e.childNodes) : null, s, n ? n.__e : e.firstChild, r, o), Ct(s, i, o);
}
function xr(i, e, t) {
  var r, n, s, o, a = U({}, i.props);
  for (s in i.type && i.type.defaultProps && (o = i.type.defaultProps), e) s == "key" ? r = e[s] : s == "ref" ? n = e[s] : a[s] = e[s] === void 0 && o != null ? o[s] : e[s];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? H.call(arguments, 2) : t), I(i.type, a, r || i.key, n || i.ref, null);
}
H = Ot.slice, v = { __e: function(i, e, t, r) {
  for (var n, s, o; e = e.__; ) if ((n = e.__c) && !n.__) try {
    if ((s = n.constructor) && s.getDerivedStateFromError != null && (n.setState(s.getDerivedStateFromError(i)), o = n.__d), n.componentDidCatch != null && (n.componentDidCatch(i, r || {}), o = n.__d), o) return n.__E = n;
  } catch (a) {
    i = a;
  }
  throw i;
} }, $t = 0, K.prototype.setState = function(i, e) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = U({}, this.state), typeof i == "function" && (i = i(U({}, t), this.props)), i && U(t, i), i != null && this.__v && (e && this._sb.push(e), We(this));
}, K.prototype.forceUpdate = function(i) {
  this.__v && (this.__e = true, i && this.__h.push(i), We(this));
}, K.prototype.render = ee, O = [], Rt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, kt = function(i, e) {
  return i.__v.__b - e.__v.__b;
}, Z.__r = 0, At = /(PointerCapture)$|Capture$/i, ke = 0, Te = De(false), Pe = De(true);
var _i = 0;
function se(i, e, t, r, n, s) {
  e || (e = {});
  var o, a, c = e;
  if ("ref" in c) for (a in c = {}, e) a == "ref" ? o = e[a] : c[a] = e[a];
  var l = { type: i, props: c, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --_i, __i: -1, __u: 0, __source: n, __self: s };
  if (typeof i == "function" && (o = i.defaultProps)) for (a in o) c[a] === void 0 && (c[a] = o[a]);
  return v.vnode && v.vnode(l), l;
}
var L, b, oe, Ve, B = 0, zt = [], w = v, Xe = w.__b, Ke = w.__r, Je = w.diffed, Ze = w.__c, Qe = w.unmount, et = w.__;
function Me(i, e) {
  w.__h && w.__h(b, i, B || e), B = 0;
  var t = b.__H || (b.__H = { __: [], __h: [] });
  return i >= t.__.length && t.__.push({}), t.__[i];
}
function tt(i) {
  return B = 1, mi(Ht, i);
}
function mi(i, e, t) {
  var r = Me(L++, 2);
  if (r.t = i, !r.__c && (r.__ = [Ht(void 0, e), function(a) {
    var c = r.__N ? r.__N[0] : r.__[0], l = r.t(c, a);
    c !== l && (r.__N = [l, r.__[1]], r.__c.setState({}));
  }], r.__c = b, !b.__f)) {
    var n = function(a, c, l) {
      if (!r.__c.__H) return true;
      var d = r.__c.__H.__.filter(function(f) {
        return !!f.__c;
      });
      if (d.every(function(f) {
        return !f.__N;
      })) return !s || s.call(this, a, c, l);
      var u = r.__c.props !== a;
      return d.forEach(function(f) {
        if (f.__N) {
          var h = f.__[0];
          f.__ = f.__N, f.__N = void 0, h !== f.__[0] && (u = true);
        }
      }), s && s.call(this, a, c, l) || u;
    };
    b.__f = true;
    var s = b.shouldComponentUpdate, o = b.componentWillUpdate;
    b.componentWillUpdate = function(a, c, l) {
      if (this.__e) {
        var d = s;
        s = void 0, n(a, c, l), s = d;
      }
      o && o.call(this, a, c, l);
    }, b.shouldComponentUpdate = n;
  }
  return r.__N || r.__;
}
function yi(i, e) {
  var t = Me(L++, 3);
  !w.__s && Bt(t.__H, e) && (t.__ = i, t.u = e, b.__H.__h.push(t));
}
function vi(i) {
  return B = 5, Lt(function() {
    return { current: i };
  }, []);
}
function Lt(i, e) {
  var t = Me(L++, 7);
  return Bt(t.__H, e) && (t.__ = i(), t.__H = e, t.__h = i), t.__;
}
function bi(i, e) {
  return B = 8, Lt(function() {
    return i;
  }, e);
}
function wi() {
  for (var i; i = zt.shift(); ) if (i.__P && i.__H) try {
    i.__H.__h.forEach(J), i.__H.__h.forEach($e), i.__H.__h = [];
  } catch (e) {
    i.__H.__h = [], w.__e(e, i.__v);
  }
}
w.__b = function(i) {
  b = null, Xe && Xe(i);
}, w.__ = function(i, e) {
  i && e.__k && e.__k.__m && (i.__m = e.__k.__m), et && et(i, e);
}, w.__r = function(i) {
  Ke && Ke(i), L = 0;
  var e = (b = i.__c).__H;
  e && (oe === b ? (e.__h = [], b.__h = [], e.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (e.__h.forEach(J), e.__h.forEach($e), e.__h = [], L = 0)), oe = b;
}, w.diffed = function(i) {
  Je && Je(i);
  var e = i.__c;
  e && e.__H && (e.__H.__h.length && (zt.push(e) !== 1 && Ve === w.requestAnimationFrame || ((Ve = w.requestAnimationFrame) || Si)(wi)), e.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), oe = b = null;
}, w.__c = function(i, e) {
  e.some(function(t) {
    try {
      t.__h.forEach(J), t.__h = t.__h.filter(function(r) {
        return !r.__ || $e(r);
      });
    } catch (r) {
      e.some(function(n) {
        n.__h && (n.__h = []);
      }), e = [], w.__e(r, t.__v);
    }
  }), Ze && Ze(i, e);
}, w.unmount = function(i) {
  Qe && Qe(i);
  var e, t = i.__c;
  t && t.__H && (t.__H.__.forEach(function(r) {
    try {
      J(r);
    } catch (n) {
      e = n;
    }
  }), t.__H = void 0, e && w.__e(e, t.__v));
};
var it = typeof requestAnimationFrame == "function";
function Si(i) {
  var e, t = function() {
    clearTimeout(r), it && cancelAnimationFrame(e), setTimeout(i);
  }, r = setTimeout(t, 35);
  it && (e = requestAnimationFrame(t));
}
function J(i) {
  var e = b, t = i.__c;
  typeof t == "function" && (i.__c = void 0, t()), b = e;
}
function $e(i) {
  var e = b;
  i.__c = i.__(), b = e;
}
function Bt(i, e) {
  return !i || i.length !== e.length || e.some(function(t, r) {
    return t !== i[r];
  });
}
function Ht(i, e) {
  return typeof e == "function" ? e(i) : e;
}
const Fi = { position: "relative", width: "100%", minHeight: "100%" }, xi = { position: "absolute", top: 0, left: 0, width: "100%", overflow: "visible" };
function Er({ data: i, rowHeight: e, renderRow: t, overscanCount: r = 10, padding: n = 4, ...s }) {
  const o = vi(null), [a, c] = tt(0), [l, d] = tt(0);
  yi(() => {
    function _() {
      o.current != null && l !== o.current.offsetHeight && d(o.current.offsetHeight);
    }
    return _(), window.addEventListener("resize", _), () => {
      window.removeEventListener("resize", _);
    };
  }, [l]);
  const u = bi(() => {
    o.current && c(o.current.scrollTop);
  }, []);
  let f = Math.floor(a / e), h = Math.floor(l / e);
  r && (f = Math.max(0, f - f % r), h += r);
  const p = f + h + n, g = i.slice(f, p), y = { ...Fi, height: i.length * e }, m = { ...xi, top: f * e };
  return se("div", { onScroll: u, ref: o, ...s, children: se("div", { role: "presentation", style: y, children: se("div", { role: "presentation", style: m, children: g.map(t) }) }) });
}
class Ei {
  constructor(e, t) {
    __publicField(this, "uppy");
    __publicField(this, "opts");
    __publicField(this, "id");
    __publicField(this, "defaultLocale");
    __publicField(this, "i18n");
    __publicField(this, "i18nArray");
    __publicField(this, "type");
    __publicField(this, "VERSION");
    this.uppy = e, this.opts = t ?? {};
  }
  getPluginState() {
    const { plugins: e } = this.uppy.getState();
    return (e == null ? void 0 : e[this.id]) || {};
  }
  setPluginState(e) {
    const { plugins: t } = this.uppy.getState();
    this.uppy.setState({ plugins: { ...t, [this.id]: { ...t[this.id], ...e } } });
  }
  setOptions(e) {
    this.opts = { ...this.opts, ...e }, this.setPluginState(void 0), this.i18nInit();
  }
  i18nInit() {
    const e = new Ut([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = e.translate.bind(e), this.i18nArray = e.translateArray.bind(e), this.setPluginState(void 0);
  }
  addTarget(e) {
    throw new Error("Extend the addTarget method to add your plugin to another plugin's target");
  }
  install() {
  }
  uninstall() {
  }
  update(e) {
  }
  afterUpdate() {
  }
}
const Ti = { debug: () => {
}, warn: () => {
}, error: (...i) => console.error(`[Uppy] [${X()}]`, ...i) }, Pi = { debug: (...i) => console.debug(`[Uppy] [${X()}]`, ...i), warn: (...i) => console.warn(`[Uppy] [${X()}]`, ...i), error: (...i) => console.error(`[Uppy] [${X()}]`, ...i) };
var ae, rt;
function Ui() {
  return rt || (rt = 1, ae = function(e) {
    if (typeof e != "number" || Number.isNaN(e)) throw new TypeError(`Expected a number, got ${typeof e}`);
    const t = e < 0;
    let r = Math.abs(e);
    if (t && (r = -r), r === 0) return "0 B";
    const n = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], s = Math.min(Math.floor(Math.log(r) / Math.log(1024)), n.length - 1), o = Number(r / 1024 ** s), a = n[s];
    return `${o >= 10 || o % 1 === 0 ? Math.round(o) : o.toFixed(1)} ${a}`;
  }), ae;
}
var $i = Ui();
const Y = Q($i);
var le, nt;
function Ri() {
  if (nt) return le;
  nt = 1;
  function i(e, t) {
    this.text = e = e || "", this.hasWild = ~e.indexOf("*"), this.separator = t, this.parts = e.split(t);
  }
  return i.prototype.match = function(e) {
    var t = true, r = this.parts, n, s = r.length, o;
    if (typeof e == "string" || e instanceof String) if (!this.hasWild && this.text != e) t = false;
    else {
      for (o = (e || "").split(this.separator), n = 0; t && n < s; n++) r[n] !== "*" && (n < o.length ? t = r[n] === o[n] : t = false);
      t = t && o;
    }
    else if (typeof e.splice == "function") for (t = [], n = e.length; n--; ) this.match(e[n]) && (t[t.length] = e[n]);
    else if (typeof e == "object") {
      t = {};
      for (var a in e) this.match(a) && (t[a] = e[a]);
    }
    return t;
  }, le = function(e, t, r) {
    var n = new i(e, r || /[\/\.]/);
    return typeof t < "u" ? n.match(t) : n;
  }, le;
}
var ue, st;
function ki() {
  if (st) return ue;
  st = 1;
  var i = Ri(), e = /[\/\+\.]/;
  return ue = function(t, r) {
    function n(s) {
      var o = i(s, t, e);
      return o && o.length >= 2;
    }
    return r ? n(r.split(";")[0]) : n;
  }, ue;
}
var Ai = ki();
const Oi = Q(Ai), Ni = { maxFileSize: null, minFileSize: null, maxTotalFileSize: null, maxNumberOfFiles: null, minNumberOfFiles: null, allowedFileTypes: null, requiredMetaFields: [] };
class T extends Error {
  constructor(e, t) {
    super(e);
    __publicField(this, "isUserFacing");
    __publicField(this, "file");
    __publicField(this, "isRestriction", true);
    this.isUserFacing = (t == null ? void 0 : t.isUserFacing) ?? true, (t == null ? void 0 : t.file) && (this.file = t.file);
  }
}
class Mi {
  constructor(e, t) {
    __publicField(this, "getI18n");
    __publicField(this, "getOpts");
    this.getI18n = t, this.getOpts = () => {
      var _a;
      const r = e();
      if (((_a = r.restrictions) == null ? void 0 : _a.allowedFileTypes) != null && !Array.isArray(r.restrictions.allowedFileTypes)) throw new TypeError("`restrictions.allowedFileTypes` must be an array");
      return r;
    };
  }
  validateAggregateRestrictions(e, t) {
    const { maxTotalFileSize: r, maxNumberOfFiles: n } = this.getOpts().restrictions;
    if (n && e.filter((o) => !o.isGhost).length + t.length > n) throw new T(`${this.getI18n()("youCanOnlyUploadX", { smart_count: n })}`);
    if (r) {
      const s = [...e, ...t].reduce((o, a) => o + (a.size ?? 0), 0);
      if (s > r) throw new T(this.getI18n()("aggregateExceedsSize", { sizeAllowed: Y(r), size: Y(s) }));
    }
  }
  validateSingleFile(e) {
    const { maxFileSize: t, minFileSize: r, allowedFileTypes: n } = this.getOpts().restrictions;
    if (n && !n.some((o) => o.includes("/") ? e.type ? Oi(e.type.replace(/;.*?$/, ""), o) : false : o[0] === "." && e.extension ? e.extension.toLowerCase() === o.slice(1).toLowerCase() : false)) {
      const o = n.join(", ");
      throw new T(this.getI18n()("youCanOnlyUploadFileTypes", { types: o }), { file: e });
    }
    if (t && e.size != null && e.size > t) throw new T(this.getI18n()("exceedsSize", { size: Y(t), file: e.name ?? this.getI18n()("unnamed") }), { file: e });
    if (r && e.size != null && e.size < r) throw new T(this.getI18n()("inferiorSize", { size: Y(r) }), { file: e });
  }
  validate(e, t) {
    t.forEach((r) => {
      this.validateSingleFile(r);
    }), this.validateAggregateRestrictions(e, t);
  }
  validateMinNumberOfFiles(e) {
    const { minNumberOfFiles: t } = this.getOpts().restrictions;
    if (t && Object.keys(e).length < t) throw new T(this.getI18n()("youHaveToAtLeastSelectX", { smart_count: t }));
  }
  getMissingRequiredMetaFields(e) {
    const t = new T(this.getI18n()("missingRequiredMetaFieldOnFile", { fileName: e.name ?? this.getI18n()("unnamed") })), { requiredMetaFields: r } = this.getOpts().restrictions, n = [];
    for (const s of r) (!Object.hasOwn(e.meta, s) || e.meta[s] === "") && n.push(s);
    return { missingFields: n, error: t };
  }
}
function ji(i) {
  let e = null, t;
  return (...r) => (t = r, e || (e = Promise.resolve().then(() => (e = null, i(...t)))), e);
}
const _Re = class _Re extends Ei {
  constructor() {
    super(...arguments);
    __privateAdd(this, _e3);
    __publicField(this, "isTargetDOMEl");
    __publicField(this, "el");
    __publicField(this, "parent");
    __publicField(this, "title");
  }
  getTargetPlugin(e) {
    let t;
    if (typeof (e == null ? void 0 : e.addTarget) == "function") t = e, t instanceof _Re || console.warn(new Error("The provided plugin is not an instance of UIPlugin. This is an indication of a bug with the way Uppy is bundled.", { cause: { targetPlugin: t, UIPlugin: _Re } }));
    else if (typeof e == "function") {
      const r = e;
      this.uppy.iteratePlugins((n) => {
        n instanceof r && (t = n);
      });
    }
    return t;
  }
  mount(e, t) {
    const r = t.id, n = Jt(e);
    if (n) {
      this.isTargetDOMEl = true;
      const a = document.createElement("div");
      return a.classList.add("uppy-Root"), __privateSet(this, _e3, ji((c) => {
        this.uppy.getPlugin(this.id) && (Ye(this.render(c, a), a), this.afterUpdate());
      })), this.uppy.log(`Installing ${r} to a DOM element '${e}'`), this.opts.replaceTargetContent && (n.innerHTML = ""), Ye(this.render(this.uppy.getState(), a), a), this.el = a, n.appendChild(a), a.dir = this.opts.direction || si(a) || "ltr", this.onMount(), this.el;
    }
    const s = this.getTargetPlugin(e);
    if (s) return this.uppy.log(`Installing ${r} to ${s.id}`), this.parent = s, this.el = s.addTarget(t), this.onMount(), this.el;
    this.uppy.log(`Not installing ${r}`);
    let o = `Invalid target option given to ${r}.`;
    throw typeof e == "function" ? o += " The given target is not a Plugin class. Please check that you're not specifying a React Component instead of a plugin. If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly." : o += "If you meant to target an HTML element, please make sure that the element exists. Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. (see https://github.com/transloadit/uppy/issues/1042)\n\nIf you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.", new Error(o);
  }
  render(e, t) {
    throw new Error("Extend the render method to add your plugin to a DOM element");
  }
  update(e) {
    var _a;
    this.el != null && ((_a = __privateGet(this, _e3)) == null ? void 0 : _a.call(this, e));
  }
  unmount() {
    var _a;
    this.isTargetDOMEl && ((_a = this.el) == null ? void 0 : _a.remove()), this.onUnmount();
  }
  onMount() {
  }
  onUnmount() {
  }
};
_e3 = new WeakMap();
let Re = _Re;
const Ci = "5.0.0", qi = { version: Ci };
class Ii {
  constructor() {
    __privateAdd(this, _Ii_instances);
    __publicField(this, "state", {});
    __privateAdd(this, _e4, /* @__PURE__ */ new Set());
  }
  getState() {
    return this.state;
  }
  setState(e) {
    const t = { ...this.state }, r = { ...this.state, ...e };
    this.state = r, __privateMethod(this, _Ii_instances, t_fn2).call(this, t, r, e);
  }
  subscribe(e) {
    return __privateGet(this, _e4).add(e), () => {
      __privateGet(this, _e4).delete(e);
    };
  }
}
_e4 = new WeakMap();
_Ii_instances = new WeakSet();
t_fn2 = function(...e) {
  __privateGet(this, _e4).forEach((t) => {
    t(...e);
  });
};
__publicField(Ii, "VERSION", qi.version);
var ce, ot;
function je() {
  if (ot) return ce;
  ot = 1;
  function i(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  return ce = i, ce;
}
var de, at;
function zi() {
  if (at) return de;
  at = 1;
  var i = typeof G == "object" && G && G.Object === Object && G;
  return de = i, de;
}
var fe, lt;
function Wt() {
  if (lt) return fe;
  lt = 1;
  var i = zi(), e = typeof self == "object" && self && self.Object === Object && self, t = i || e || Function("return this")();
  return fe = t, fe;
}
var he, ut;
function Li() {
  if (ut) return he;
  ut = 1;
  var i = Wt(), e = function() {
    return i.Date.now();
  };
  return he = e, he;
}
var pe, ct;
function Bi() {
  if (ct) return pe;
  ct = 1;
  var i = /\s/;
  function e(t) {
    for (var r = t.length; r-- && i.test(t.charAt(r)); ) ;
    return r;
  }
  return pe = e, pe;
}
var ge, dt;
function Hi() {
  if (dt) return ge;
  dt = 1;
  var i = Bi(), e = /^\s+/;
  function t(r) {
    return r && r.slice(0, i(r) + 1).replace(e, "");
  }
  return ge = t, ge;
}
var _e, ft;
function Gt() {
  if (ft) return _e;
  ft = 1;
  var i = Wt(), e = i.Symbol;
  return _e = e, _e;
}
var me, ht;
function Wi() {
  if (ht) return me;
  ht = 1;
  var i = Gt(), e = Object.prototype, t = e.hasOwnProperty, r = e.toString, n = i ? i.toStringTag : void 0;
  function s(o) {
    var a = t.call(o, n), c = o[n];
    try {
      o[n] = void 0;
      var l = true;
    } catch {
    }
    var d = r.call(o);
    return l && (a ? o[n] = c : delete o[n]), d;
  }
  return me = s, me;
}
var ye, pt;
function Gi() {
  if (pt) return ye;
  pt = 1;
  var i = Object.prototype, e = i.toString;
  function t(r) {
    return e.call(r);
  }
  return ye = t, ye;
}
var ve, gt;
function Di() {
  if (gt) return ve;
  gt = 1;
  var i = Gt(), e = Wi(), t = Gi(), r = "[object Null]", n = "[object Undefined]", s = i ? i.toStringTag : void 0;
  function o(a) {
    return a == null ? a === void 0 ? n : r : s && s in Object(a) ? e(a) : t(a);
  }
  return ve = o, ve;
}
var be, _t;
function Yi() {
  if (_t) return be;
  _t = 1;
  function i(e) {
    return e != null && typeof e == "object";
  }
  return be = i, be;
}
var we, mt;
function Vi() {
  if (mt) return we;
  mt = 1;
  var i = Di(), e = Yi(), t = "[object Symbol]";
  function r(n) {
    return typeof n == "symbol" || e(n) && i(n) == t;
  }
  return we = r, we;
}
var Se, yt;
function Xi() {
  if (yt) return Se;
  yt = 1;
  var i = Hi(), e = je(), t = Vi(), r = NaN, n = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, o = /^0o[0-7]+$/i, a = parseInt;
  function c(l) {
    if (typeof l == "number") return l;
    if (t(l)) return r;
    if (e(l)) {
      var d = typeof l.valueOf == "function" ? l.valueOf() : l;
      l = e(d) ? d + "" : d;
    }
    if (typeof l != "string") return l === 0 ? l : +l;
    l = i(l);
    var u = s.test(l);
    return u || o.test(l) ? a(l.slice(2), u ? 2 : 8) : n.test(l) ? r : +l;
  }
  return Se = c, Se;
}
var Fe, vt;
function Ki() {
  if (vt) return Fe;
  vt = 1;
  var i = je(), e = Li(), t = Xi(), r = "Expected a function", n = Math.max, s = Math.min;
  function o(a, c, l) {
    var d, u, f, h, p, g, y = 0, m = false, _ = false, F = true;
    if (typeof a != "function") throw new TypeError(r);
    c = t(c) || 0, i(l) && (m = !!l.leading, _ = "maxWait" in l, f = _ ? n(t(l.maxWait) || 0, c) : f, F = "trailing" in l ? !!l.trailing : F);
    function E(S) {
      var k = d, q = u;
      return d = u = void 0, y = S, h = a.apply(q, k), h;
    }
    function N(S) {
      return y = S, p = setTimeout($, c), m ? E(S) : h;
    }
    function A(S) {
      var k = S - g, q = S - y, Ce = c - k;
      return _ ? s(Ce, f - q) : Ce;
    }
    function j(S) {
      var k = S - g, q = S - y;
      return g === void 0 || k >= c || k < 0 || _ && q >= f;
    }
    function $() {
      var S = e();
      if (j(S)) return R(S);
      p = setTimeout($, A(S));
    }
    function R(S) {
      return p = void 0, F && d ? E(S) : (d = u = void 0, h);
    }
    function C() {
      p !== void 0 && clearTimeout(p), y = 0, d = g = u = p = void 0;
    }
    function x() {
      return p === void 0 ? h : R(e());
    }
    function P() {
      var S = e(), k = j(S);
      if (d = arguments, u = this, g = S, k) {
        if (p === void 0) return N(g);
        if (_) return clearTimeout(p), p = setTimeout($, c), E(g);
      }
      return p === void 0 && (p = setTimeout($, c)), h;
    }
    return P.cancel = C, P.flush = x, P;
  }
  return Fe = o, Fe;
}
var xe, bt;
function Ji() {
  if (bt) return xe;
  bt = 1;
  var i = Ki(), e = je(), t = "Expected a function";
  function r(n, s, o) {
    var a = true, c = true;
    if (typeof n != "function") throw new TypeError(t);
    return e(o) && (a = "leading" in o ? !!o.leading : a, c = "trailing" in o ? !!o.trailing : c), i(n, s, { leading: a, maxWait: s, trailing: c });
  }
  return xe = r, xe;
}
var Zi = Ji();
const Qi = Q(Zi);
var Ee, wt;
function er() {
  return wt || (wt = 1, Ee = function() {
    var e = {}, t = e._fns = {};
    e.emit = function(o, a, c, l, d, u, f) {
      var h = r(o);
      h.length && n(o, h, [a, c, l, d, u, f]);
    }, e.on = function(o, a) {
      t[o] || (t[o] = []), t[o].push(a);
    }, e.once = function(o, a) {
      function c() {
        a.apply(this, arguments), e.off(o, c);
      }
      this.on(o, c);
    }, e.off = function(o, a) {
      var c = [];
      if (o && a) {
        var l = this._fns[o], d = 0, u = l ? l.length : 0;
        for (d; d < u; d++) l[d] !== a && c.push(l[d]);
      }
      c.length ? this._fns[o] = c : delete this._fns[o];
    };
    function r(s) {
      var o = t[s] ? t[s] : [], a = s.indexOf(":"), c = a === -1 ? [s] : [s.substring(0, a), s.substring(a + 1)], l = Object.keys(t), d = 0, u = l.length;
      for (d; d < u; d++) {
        var f = l[d];
        if (f === "*" && (o = o.concat(t[f])), c.length === 2 && c[0] === f) {
          o = o.concat(t[f]);
          break;
        }
      }
      return o;
    }
    function n(s, o, a) {
      var c = 0, l = o.length;
      for (c; c < l && o[c]; c++) o[c].event = s, o[c].apply(o[c], a);
    }
    return e;
  }), Ee;
}
var tr = er();
const ir = Q(tr);
let rr = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", nr = (i = 21) => {
  let e = "", t = i | 0;
  for (; t--; ) e += rr[Math.random() * 64 | 0];
  return e;
};
const sr = "5.2.0", or = { version: sr };
function ar(i, e) {
  return e.name ? e.name : i.split("/")[0] === "image" ? `${i.split("/")[0]}.${i.split("/")[1]}` : "noname";
}
const lr = { strings: { addBulkFilesFailed: { 0: "Failed to add %{smart_count} file due to an internal error", 1: "Failed to add %{smart_count} files due to internal errors" }, youCanOnlyUploadX: { 0: "You can only upload %{smart_count} file", 1: "You can only upload %{smart_count} files" }, youHaveToAtLeastSelectX: { 0: "You have to select at least %{smart_count} file", 1: "You have to select at least %{smart_count} files" }, aggregateExceedsSize: "You selected %{size} of files, but maximum allowed size is %{sizeAllowed}", exceedsSize: "%{file} exceeds maximum allowed size of %{size}", missingRequiredMetaField: "Missing required meta fields", missingRequiredMetaFieldOnFile: "Missing required meta fields in %{fileName}", inferiorSize: "This file is smaller than the allowed size of %{size}", youCanOnlyUploadFileTypes: "You can only upload: %{types}", noMoreFilesAllowed: "Cannot add more files", noDuplicates: "Cannot add the duplicate file '%{fileName}', it already exists", companionError: "Connection with Companion failed", authAborted: "Authentication aborted", companionUnauthorizeHint: "To unauthorize to your %{provider} account, please go to %{url}", failedToUpload: "Failed to upload %{file}", noInternetConnection: "No Internet connection", connectedToInternet: "Connected to the Internet", noFilesFound: "You have no files or folders here", noSearchResults: "Unfortunately, there are no results for this search", selectX: { 0: "Select %{smart_count}", 1: "Select %{smart_count}" }, allFilesFromFolderNamed: "All files from folder %{name}", openFolderNamed: "Open folder %{name}", cancel: "Cancel", logOut: "Log out", logIn: "Log in", pickFiles: "Pick files", pickPhotos: "Pick photos", filter: "Filter", resetFilter: "Reset filter", loading: "Loading...", loadedXFiles: "Loaded %{numFiles} files", authenticateWithTitle: "Please authenticate with %{pluginName} to select files", authenticateWith: "Connect to %{pluginName}", signInWithGoogle: "Sign in with Google", searchImages: "Search for images", enterTextToSearch: "Enter text to search for images", search: "Search", resetSearch: "Reset search", emptyFolderAdded: "No files were added from empty folder", addedNumFiles: "Added %{numFiles} file(s)", folderAlreadyAdded: 'The folder "%{folder}" was already added', folderAdded: { 0: "Added %{smart_count} file from %{folder}", 1: "Added %{smart_count} files from %{folder}" }, additionalRestrictionsFailed: "%{count} additional restrictions were not fulfilled", unnamed: "Unnamed", pleaseWait: "Please wait" } };
function ur(i) {
  if (i == null && typeof navigator < "u" && (i = navigator.userAgent), !i) return true;
  const e = /Edge\/(\d+\.\d+)/.exec(i);
  if (!e) return true;
  const r = e[1].split(".", 2), n = parseInt(r[0], 10), s = parseInt(r[1], 10);
  return n < 15 || n === 15 && s < 15063 || n > 18 || n === 18 && s >= 18218;
}
const V = { totalProgress: 0, allowNewUpload: true, error: null, recoveredState: null };
const _Dt = class _Dt {
  constructor(e) {
    __privateAdd(this, _Dt_instances);
    __privateAdd(this, _e5, /* @__PURE__ */ Object.create(null));
    __privateAdd(this, _t2);
    __privateAdd(this, _d);
    __privateAdd(this, _n, ir());
    __privateAdd(this, _u, /* @__PURE__ */ new Set());
    __privateAdd(this, _c, /* @__PURE__ */ new Set());
    __privateAdd(this, _s, /* @__PURE__ */ new Set());
    __publicField(this, "defaultLocale");
    __publicField(this, "locale");
    __publicField(this, "opts");
    __publicField(this, "store");
    __publicField(this, "i18n");
    __publicField(this, "i18nArray");
    __publicField(this, "scheduledAutoProceed", null);
    __publicField(this, "wasOffline", false);
    __privateAdd(this, _F, (e, t) => {
      const r = e ? this.getFile(e.id) : void 0;
      if (e == null || !r) {
        this.log(`Not setting progress for a file that has been removed: ${e == null ? void 0 : e.id}`);
        return;
      }
      if (r.progress.percentage === 100) {
        this.log(`Not setting progress for a file that has been already uploaded: ${e.id}`);
        return;
      }
      const n = { bytesTotal: t.bytesTotal, percentage: t.bytesTotal != null && Number.isFinite(t.bytesTotal) && t.bytesTotal > 0 ? Math.round(t.bytesUploaded / t.bytesTotal * 100) : void 0 };
      r.progress.uploadStarted != null ? this.setFileState(e.id, { progress: { ...r.progress, ...n, bytesUploaded: t.bytesUploaded } }) : this.setFileState(e.id, { progress: { ...r.progress, ...n } }), __privateGet(this, _o).call(this);
    });
    __privateAdd(this, _o, Qi(() => __privateMethod(this, _Dt_instances, m_fn).call(this), 500, { leading: true, trailing: true }));
    __privateAdd(this, _r2, this.updateOnlineStatus.bind(this));
    __privateAdd(this, _y, /* @__PURE__ */ new Map());
    this.defaultLocale = lr;
    const t = { id: "uppy", autoProceed: false, allowMultipleUploadBatches: true, debug: false, restrictions: Ni, meta: {}, onBeforeFileAdded: (n, s) => !Object.hasOwn(s, n.id), onBeforeUpload: (n) => n, store: new Ii(), logger: Ti, infoTimeout: 5e3 }, r = { ...t, ...e };
    this.opts = { ...r, restrictions: { ...t.restrictions, ...e == null ? void 0 : e.restrictions } }, (e == null ? void 0 : e.logger) && e.debug ? this.log("You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.", "warning") : (e == null ? void 0 : e.debug) && (this.opts.logger = Pi), this.log(`Using Core v${_Dt.VERSION}`), this.i18nInit(), this.store = this.opts.store, this.setState({ ...V, plugins: {}, files: {}, currentUploads: {}, capabilities: { uploadProgress: ur(), individualCancellation: true, resumableUploads: false }, meta: { ...this.opts.meta }, info: [] }), __privateSet(this, _t2, new Mi(() => this.opts, () => this.i18n)), __privateSet(this, _d, this.store.subscribe((n, s, o) => {
      this.emit("state-update", n, s, o), this.updateAll(s);
    })), this.opts.debug && typeof window < "u" && (window[this.opts.id] = this), __privateMethod(this, _Dt_instances, E_fn).call(this);
  }
  emit(e, ...t) {
    __privateGet(this, _n).emit(e, ...t);
  }
  on(e, t) {
    return __privateGet(this, _n).on(e, t), this;
  }
  once(e, t) {
    return __privateGet(this, _n).once(e, t), this;
  }
  off(e, t) {
    return __privateGet(this, _n).off(e, t), this;
  }
  updateAll(e) {
    this.iteratePlugins((t) => {
      t.update(e);
    });
  }
  setState(e) {
    this.store.setState(e);
  }
  getState() {
    return this.store.getState();
  }
  patchFilesState(e) {
    const t = this.getState().files;
    this.setState({ files: { ...t, ...Object.fromEntries(Object.entries(e).map(([r, n]) => [r, { ...t[r], ...n }])) } });
  }
  setFileState(e, t) {
    if (!this.getState().files[e]) throw new Error(`Can\u2019t set state for ${e} (the file could have been removed)`);
    this.patchFilesState({ [e]: t });
  }
  i18nInit() {
    const e = (r) => this.log(`Missing i18n string: ${r}`, "error"), t = new Ut([this.defaultLocale, this.opts.locale], { onMissingKey: e });
    this.i18n = t.translate.bind(t), this.i18nArray = t.translateArray.bind(t), this.locale = t.locale;
  }
  setOptions(e) {
    this.opts = { ...this.opts, ...e, restrictions: { ...this.opts.restrictions, ...e == null ? void 0 : e.restrictions } }, e.meta && this.setMeta(e.meta), this.i18nInit(), e.locale && this.iteratePlugins((t) => {
      t.setOptions(e);
    }), this.setState(void 0);
  }
  resetProgress() {
    const e = { percentage: 0, bytesUploaded: false, uploadComplete: false, uploadStarted: null }, t = { ...this.getState().files }, r = /* @__PURE__ */ Object.create(null);
    Object.keys(t).forEach((n) => {
      r[n] = { ...t[n], progress: { ...t[n].progress, ...e }, tus: void 0, transloadit: void 0 };
    }), this.setState({ files: r, ...V });
  }
  clear() {
    const { capabilities: e, currentUploads: t } = this.getState();
    if (Object.keys(t).length > 0 && !e.individualCancellation) throw new Error("The installed uploader plugin does not allow removing files during an upload.");
    this.setState({ ...V, files: {} });
  }
  addPreProcessor(e) {
    __privateGet(this, _u).add(e);
  }
  removePreProcessor(e) {
    return __privateGet(this, _u).delete(e);
  }
  addPostProcessor(e) {
    __privateGet(this, _s).add(e);
  }
  removePostProcessor(e) {
    return __privateGet(this, _s).delete(e);
  }
  addUploader(e) {
    __privateGet(this, _c).add(e);
  }
  removeUploader(e) {
    return __privateGet(this, _c).delete(e);
  }
  setMeta(e) {
    const t = { ...this.getState().meta, ...e }, r = { ...this.getState().files };
    Object.keys(r).forEach((n) => {
      r[n] = { ...r[n], meta: { ...r[n].meta, ...e } };
    }), this.log("Adding metadata:"), this.log(e), this.setState({ meta: t, files: r });
  }
  setFileMeta(e, t) {
    const r = { ...this.getState().files };
    if (!r[e]) {
      this.log(`Was trying to set metadata for a file that has been removed: ${e}`);
      return;
    }
    const n = { ...r[e].meta, ...t };
    r[e] = { ...r[e], meta: n }, this.setState({ files: r });
  }
  getFile(e) {
    return this.getState().files[e];
  }
  getFiles() {
    const { files: e } = this.getState();
    return Object.values(e);
  }
  getFilesByIds(e) {
    return e.map((t) => this.getFile(t));
  }
  getObjectOfFilesPerState() {
    const { files: e, totalProgress: t, error: r } = this.getState(), n = Object.values(e), s = [], o = [], a = [], c = [], l = [], d = [], u = [], f = [], h = [];
    for (const p of n) {
      const { progress: g } = p;
      !g.uploadComplete && g.uploadStarted && (s.push(p), p.isPaused || f.push(p)), g.uploadStarted || o.push(p), (g.uploadStarted || g.preprocess || g.postprocess) && a.push(p), g.uploadStarted && c.push(p), p.isPaused && l.push(p), g.uploadComplete && d.push(p), p.error && u.push(p), (g.preprocess || g.postprocess) && h.push(p);
    }
    return { newFiles: o, startedFiles: a, uploadStartedFiles: c, pausedFiles: l, completeFiles: d, erroredFiles: u, inProgressFiles: s, inProgressNotPausedFiles: f, processingFiles: h, isUploadStarted: c.length > 0, isAllComplete: t === 100 && d.length === n.length && h.length === 0, isAllErrored: !!r && u.length === n.length, isAllPaused: s.length !== 0 && l.length === s.length, isUploadInProgress: s.length > 0, isSomeGhost: n.some((p) => p.isGhost) };
  }
  validateRestrictions(e, t = this.getFiles()) {
    try {
      __privateGet(this, _t2).validate(t, [e]);
    } catch (r) {
      return r;
    }
    return null;
  }
  validateSingleFile(e) {
    try {
      __privateGet(this, _t2).validateSingleFile(e);
    } catch (t) {
      return t.message;
    }
    return null;
  }
  validateAggregateRestrictions(e) {
    const t = this.getFiles();
    try {
      __privateGet(this, _t2).validateAggregateRestrictions(t, e);
    } catch (r) {
      return r.message;
    }
    return null;
  }
  checkIfFileAlreadyExists(e) {
    const { files: t } = this.getState();
    return !!(t[e] && !t[e].isGhost);
  }
  addFile(e) {
    const { nextFilesState: t, validFilesToAdd: r, errors: n } = __privateMethod(this, _Dt_instances, p_fn).call(this, [e]), s = n.filter((a) => a.isRestriction);
    if (__privateMethod(this, _Dt_instances, i_fn).call(this, s), n.length > 0) throw n[0];
    this.setState({ files: t });
    const [o] = r;
    return this.emit("file-added", o), this.emit("files-added", r), this.log(`Added file: ${o.name}, ${o.id}, mime type: ${o.type}`), __privateMethod(this, _Dt_instances, h_fn).call(this), o.id;
  }
  addFiles(e) {
    const { nextFilesState: t, validFilesToAdd: r, errors: n } = __privateMethod(this, _Dt_instances, p_fn).call(this, e), s = n.filter((a) => a.isRestriction);
    __privateMethod(this, _Dt_instances, i_fn).call(this, s);
    const o = n.filter((a) => !a.isRestriction);
    if (o.length > 0) {
      let a = `Multiple errors occurred while adding files:
`;
      if (o.forEach((c) => {
        a += `
 * ${c.message}`;
      }), this.info({ message: this.i18n("addBulkFilesFailed", { smart_count: o.length }), details: a }, "error", this.opts.infoTimeout), typeof AggregateError == "function") throw new AggregateError(o, a);
      {
        const c = new Error(a);
        throw c.errors = o, c;
      }
    }
    this.setState({ files: t }), r.forEach((a) => {
      this.emit("file-added", a);
    }), this.emit("files-added", r), r.length > 5 ? this.log(`Added batch of ${r.length} files`) : Object.values(r).forEach((a) => {
      this.log(`Added file: ${a.name}
 id: ${a.id}
 type: ${a.type}`);
    }), r.length > 0 && __privateMethod(this, _Dt_instances, h_fn).call(this);
  }
  removeFiles(e) {
    const { files: t, currentUploads: r } = this.getState(), n = { ...t }, s = { ...r }, o = /* @__PURE__ */ Object.create(null);
    e.forEach((d) => {
      t[d] && (o[d] = t[d], delete n[d]);
    });
    function a(d) {
      return o[d] === void 0;
    }
    Object.keys(s).forEach((d) => {
      const u = r[d].fileIDs.filter(a);
      if (u.length === 0) {
        delete s[d];
        return;
      }
      const { capabilities: f } = this.getState();
      if (u.length !== r[d].fileIDs.length && !f.individualCancellation) throw new Error("The installed uploader plugin does not allow removing files during an upload.");
      s[d] = { ...r[d], fileIDs: u };
    });
    const c = { currentUploads: s, files: n };
    Object.keys(n).length === 0 && (c.allowNewUpload = true, c.error = null, c.recoveredState = null), this.setState(c), __privateGet(this, _o).call(this);
    const l = Object.keys(o);
    l.forEach((d) => {
      this.emit("file-removed", o[d]);
    }), l.length > 5 ? this.log(`Removed ${l.length} files`) : this.log(`Removed files: ${l.join(", ")}`);
  }
  removeFile(e) {
    this.removeFiles([e]);
  }
  pauseResume(e) {
    if (!this.getState().capabilities.resumableUploads || this.getFile(e).progress.uploadComplete) return;
    const t = this.getFile(e), n = !(t.isPaused || false);
    return this.setFileState(e, { isPaused: n }), this.emit("upload-pause", t, n), n;
  }
  pauseAll() {
    const e = { ...this.getState().files };
    Object.keys(e).filter((r) => !e[r].progress.uploadComplete && e[r].progress.uploadStarted).forEach((r) => {
      const n = { ...e[r], isPaused: true };
      e[r] = n;
    }), this.setState({ files: e }), this.emit("pause-all");
  }
  resumeAll() {
    const e = { ...this.getState().files };
    Object.keys(e).filter((r) => !e[r].progress.uploadComplete && e[r].progress.uploadStarted).forEach((r) => {
      const n = { ...e[r], isPaused: false, error: null };
      e[r] = n;
    }), this.setState({ files: e }), this.emit("resume-all");
  }
  async retryAll() {
    const e = await __privateMethod(this, _Dt_instances, __fn).call(this);
    return this.emit("complete", e), e;
  }
  cancelAll() {
    this.emit("cancel-all");
    const { files: e } = this.getState(), t = Object.keys(e);
    t.length && this.removeFiles(t), this.setState(V);
  }
  retryUpload(e) {
    this.setFileState(e, { error: null, isPaused: false }), this.emit("upload-retry", this.getFile(e));
    const t = __privateMethod(this, _Dt_instances, a_fn).call(this, [e], { forceAllowNewUpload: true });
    return __privateMethod(this, _Dt_instances, l_fn).call(this, t);
  }
  logout() {
    this.iteratePlugins((e) => {
      var _a, _b;
      (_b = (_a = e.provider) == null ? void 0 : _a.logout) == null ? void 0 : _b.call(_a);
    });
  }
  [/* @__PURE__ */ Symbol.for("uppy test: updateTotalProgress")]() {
    return __privateMethod(this, _Dt_instances, m_fn).call(this);
  }
  updateOnlineStatus() {
    window.navigator.onLine ?? true ? (this.emit("is-online"), this.wasOffline && (this.emit("back-online"), this.info(this.i18n("connectedToInternet"), "success", 3e3), this.wasOffline = false)) : (this.emit("is-offline"), this.info(this.i18n("noInternetConnection"), "error", 0), this.wasOffline = true);
  }
  getID() {
    return this.opts.id;
  }
  use(e, ...t) {
    if (typeof e != "function") {
      const o = `Expected a plugin class, but got ${e === null ? "null" : typeof e}. Please verify that the plugin was imported and spelled correctly.`;
      throw new TypeError(o);
    }
    const r = new e(this, ...t), n = r.id;
    if (!n) throw new Error("Your plugin must have an id");
    if (!r.type) throw new Error("Your plugin must have a type");
    const s = this.getPlugin(n);
    if (s) {
      const o = `Already found a plugin named '${s.id}'. Tried to use: '${n}'.
Uppy plugins must have unique \`id\` options.`;
      throw new Error(o);
    }
    return e.VERSION && this.log(`Using ${n} v${e.VERSION}`), r.type in __privateGet(this, _e5) ? __privateGet(this, _e5)[r.type].push(r) : __privateGet(this, _e5)[r.type] = [r], r.install(), this.emit("plugin-added", r), this;
  }
  getPlugin(e) {
    for (const t of Object.values(__privateGet(this, _e5))) {
      const r = t.find((n) => n.id === e);
      if (r != null) return r;
    }
  }
  [/* @__PURE__ */ Symbol.for("uppy test: getPlugins")](e) {
    return __privateGet(this, _e5)[e];
  }
  iteratePlugins(e) {
    Object.values(__privateGet(this, _e5)).flat(1).forEach(e);
  }
  removePlugin(e) {
    this.log(`Removing plugin ${e.id}`), this.emit("plugin-remove", e), e.uninstall && e.uninstall();
    const t = __privateGet(this, _e5)[e.type], r = t.findIndex((o) => o.id === e.id);
    r !== -1 && t.splice(r, 1);
    const s = { plugins: { ...this.getState().plugins, [e.id]: void 0 } };
    this.setState(s);
  }
  destroy() {
    this.log(`Closing Uppy instance ${this.opts.id}: removing all files and uninstalling plugins`), this.cancelAll(), __privateGet(this, _d).call(this), this.iteratePlugins((e) => {
      this.removePlugin(e);
    }), typeof window < "u" && window.removeEventListener && (window.removeEventListener("online", __privateGet(this, _r2)), window.removeEventListener("offline", __privateGet(this, _r2)));
  }
  hideInfo() {
    const { info: e } = this.getState();
    this.setState({ info: e.slice(1) }), this.emit("info-hidden");
  }
  info(e, t = "info", r = 3e3) {
    const n = typeof e == "object";
    this.setState({ info: [...this.getState().info, { type: t, message: n ? e.message : e, details: n ? e.details : null }] }), setTimeout(() => this.hideInfo(), r), this.emit("info-visible");
  }
  log(e, t) {
    const { logger: r } = this.opts;
    switch (t) {
      case "error":
        r.error(e);
        break;
      case "warning":
        r.warn(e);
        break;
      default:
        r.debug(e);
        break;
    }
  }
  registerRequestClient(e, t) {
    __privateGet(this, _y).set(e, t);
  }
  getRequestClientForFile(e) {
    if (!("remote" in e && e.remote)) throw new Error(`Tried to get RequestClient for a non-remote file ${e.id}`);
    const t = __privateGet(this, _y).get(e.remote.requestClientId);
    if (t == null) throw new Error(`requestClientId "${e.remote.requestClientId}" not registered for file "${e.id}"`);
    return t;
  }
  async restore(e) {
    this.log(`Core: Running restored upload "${e}"`);
    const t = await __privateMethod(this, _Dt_instances, l_fn).call(this, e);
    return this.emit("complete", t), t;
  }
  [/* @__PURE__ */ Symbol.for("uppy test: createUpload")](...e) {
    return __privateMethod(this, _Dt_instances, a_fn).call(this, ...e);
  }
  addResultData(e, t) {
    if (!__privateMethod(this, _Dt_instances, T_fn).call(this, e)) {
      this.log(`Not setting result for an upload that has been removed: ${e}`);
      return;
    }
    const { currentUploads: r } = this.getState(), n = { ...r[e], result: { ...r[e].result, ...t } };
    this.setState({ currentUploads: { ...r, [e]: n } });
  }
  async upload() {
    var _a;
    ((_a = __privateGet(this, _e5).uploader) == null ? void 0 : _a.length) || this.log("No uploader type plugins are used", "warning");
    let { files: e } = this.getState();
    if (__privateMethod(this, _Dt_instances, g_fn).call(this).length > 0) {
      const n = await __privateMethod(this, _Dt_instances, __fn).call(this);
      if (!(this.getFiles().filter((o) => o.progress.uploadStarted == null).length > 0)) return this.emit("complete", n), n;
      ({ files: e } = this.getState());
    }
    const r = this.opts.onBeforeUpload(e);
    if (r === false) throw new Error("Not starting the upload because onBeforeUpload returned false");
    r && typeof r == "object" && (e = r, this.setState({ files: e }));
    try {
      if (__privateGet(this, _t2).validateMinNumberOfFiles(e), !__privateMethod(this, _Dt_instances, b_fn).call(this, e)) throw new T(this.i18n("missingRequiredMetaField"));
      const { currentUploads: n } = this.getState(), s = Object.values(n).flatMap((l) => l.fileIDs), o = Object.keys(e).filter((l) => {
        const d = this.getFile(l);
        return d && !d.progress.uploadStarted && !s.includes(l);
      }), a = __privateMethod(this, _Dt_instances, a_fn).call(this, o), c = await __privateMethod(this, _Dt_instances, l_fn).call(this, a);
      return this.emit("complete", c), c;
    } catch (n) {
      throw __privateMethod(this, _Dt_instances, i_fn).call(this, [n]), n;
    }
  }
};
_e5 = new WeakMap();
_t2 = new WeakMap();
_d = new WeakMap();
_n = new WeakMap();
_u = new WeakMap();
_c = new WeakMap();
_s = new WeakMap();
_Dt_instances = new WeakSet();
i_fn = function(e) {
  for (const o of e) o.isRestriction ? this.emit("restriction-failed", o.file, o) : this.emit("error", o, o.file), this.log(o, "warning");
  const t = e.filter((o) => o.isUserFacing), r = 4, n = t.slice(0, r), s = t.slice(r);
  n.forEach(({ message: o, details: a = "" }) => {
    this.info({ message: o, details: a }, "error", this.opts.infoTimeout);
  }), s.length > 0 && this.info({ message: this.i18n("additionalRestrictionsFailed", { count: s.length }) });
};
f_fn = function(e) {
  const { missingFields: t, error: r } = __privateGet(this, _t2).getMissingRequiredMetaFields(e);
  return t.length > 0 ? (this.setFileState(e.id, { missingRequiredMetaFields: t, error: r.message }), this.log(r.message), this.emit("restriction-failed", e, r), false) : (t.length === 0 && e.missingRequiredMetaFields && this.setFileState(e.id, { missingRequiredMetaFields: [] }), true);
};
b_fn = function(e) {
  let t = true;
  for (const r of Object.values(e)) __privateMethod(this, _Dt_instances, f_fn).call(this, r) || (t = false);
  return t;
};
w_fn = function(e) {
  const { allowNewUpload: t } = this.getState();
  if (t === false) {
    const r = new T(this.i18n("noMoreFilesAllowed"), { file: e });
    throw __privateMethod(this, _Dt_instances, i_fn).call(this, [r]), r;
  }
};
S_fn = function(e) {
  const t = e instanceof File ? { name: e.name, type: e.type, size: e.size, data: e, meta: {}, isRemote: false, source: void 0, preview: void 0 } : e, r = xt(t), n = ar(r, t), s = Ft(n).extension, o = ti(t, this.getID()), a = { ...t.meta, name: n, type: r }, c = Number.isFinite(t.data.size) ? t.data.size : null;
  return { source: t.source || "", id: o, name: n, extension: s || "", meta: { ...this.getState().meta, ...a }, type: r, progress: { percentage: 0, bytesUploaded: false, bytesTotal: c, uploadComplete: false, uploadStarted: null }, size: c, isGhost: false, ...t.isRemote ? { isRemote: true, remote: t.remote, data: t.data } : { isRemote: false, data: t.data }, preview: t.preview };
};
h_fn = function() {
  this.opts.autoProceed && !this.scheduledAutoProceed && (this.scheduledAutoProceed = setTimeout(() => {
    this.scheduledAutoProceed = null, this.upload().catch((e) => {
      e.isRestriction || this.log(e.stack || e.message || e);
    });
  }, 4));
};
p_fn = function(e) {
  let { files: t } = this.getState(), r = { ...t };
  const n = [], s = [];
  for (const o of e) try {
    let a = __privateMethod(this, _Dt_instances, S_fn).call(this, o);
    __privateMethod(this, _Dt_instances, w_fn).call(this, a);
    const c = t[a.id], l = c == null ? void 0 : c.isGhost;
    if (l && !a.isRemote) {
      if (a.data == null) throw new Error("File data is missing");
      a = { ...c, isGhost: false, data: a.data }, this.log(`Replaced the blob in the restored ghost file: ${a.name}, ${a.id}`);
    }
    const d = this.opts.onBeforeFileAdded(a, r);
    if (t = this.getState().files, r = { ...t, ...r }, !d && this.checkIfFileAlreadyExists(a.id)) throw new T(this.i18n("noDuplicates", { fileName: a.name ?? this.i18n("unnamed") }), { file: a });
    if (d === false && !l) throw new T("Cannot add the file because onBeforeFileAdded returned false.", { isUserFacing: false, file: a });
    typeof d == "object" && d !== null && (a = d), __privateGet(this, _t2).validateSingleFile(a), r[a.id] = a, n.push(a);
  } catch (a) {
    s.push(a);
  }
  try {
    __privateGet(this, _t2).validateAggregateRestrictions(Object.values(t), n);
  } catch (o) {
    return s.push(o), { nextFilesState: t, validFilesToAdd: [], errors: s };
  }
  return { nextFilesState: r, validFilesToAdd: n, errors: s };
};
g_fn = function() {
  const { files: e } = this.getState();
  return Object.keys(e).filter((t) => {
    const r = e[t];
    return r.error && (!r.missingRequiredMetaFields || r.missingRequiredMetaFields.length === 0);
  });
};
__fn = async function() {
  const e = __privateMethod(this, _Dt_instances, g_fn).call(this), t = { ...this.getState().files };
  if (e.forEach((n) => {
    t[n] = { ...t[n], isPaused: false, error: null };
  }), this.setState({ files: t, error: null }), this.emit("retry-all", this.getFilesByIds(e)), e.length === 0) return { successful: [], failed: [] };
  const r = __privateMethod(this, _Dt_instances, a_fn).call(this, e, { forceAllowNewUpload: true });
  return __privateMethod(this, _Dt_instances, l_fn).call(this, r);
};
_F = new WeakMap();
m_fn = function() {
  const e = __privateMethod(this, _Dt_instances, x_fn).call(this);
  let t = null;
  e != null && (t = Math.round(e * 100), t > 100 ? t = 100 : t < 0 && (t = 0)), this.emit("progress", t ?? 0), this.setState({ totalProgress: t ?? 0 });
};
_o = new WeakMap();
x_fn = function() {
  const t = this.getFiles().filter((c) => c.progress.uploadStarted || c.progress.preprocess || c.progress.postprocess);
  if (t.length === 0) return 0;
  if (t.every((c) => c.progress.uploadComplete)) return 1;
  const r = (c) => c.progress.bytesTotal != null && c.progress.bytesTotal !== 0, n = t.filter(r), s = t.filter((c) => !r(c));
  if (n.every((c) => c.progress.uploadComplete) && s.length > 0 && !s.every((c) => c.progress.uploadComplete)) return null;
  const o = n.reduce((c, l) => c + (l.progress.bytesTotal ?? 0), 0), a = n.reduce((c, l) => c + (l.progress.bytesUploaded || 0), 0);
  return o === 0 ? 0 : a / o;
};
E_fn = function() {
  const e = (n, s, o) => {
    let a = n.message || "Unknown error";
    n.details && (a += ` ${n.details}`), this.setState({ error: a }), s != null && s.id in this.getState().files && this.setFileState(s.id, { error: a, response: o });
  };
  this.on("error", e), this.on("upload-error", (n, s, o) => {
    if (e(s, n, o), typeof s == "object" && s.message) {
      this.log(s.message, "error");
      const a = new Error(this.i18n("failedToUpload", { file: (n == null ? void 0 : n.name) ?? "" }));
      a.isUserFacing = true, a.details = s.message, s.details && (a.details += ` ${s.details}`), __privateMethod(this, _Dt_instances, i_fn).call(this, [a]);
    } else __privateMethod(this, _Dt_instances, i_fn).call(this, [s]);
  });
  let t = null;
  this.on("upload-stalled", (n, s) => {
    const { message: o } = n, a = s.map((c) => c.meta.name).join(", ");
    t || (this.info({ message: o, details: a }, "warning", this.opts.infoTimeout), t = setTimeout(() => {
      t = null;
    }, this.opts.infoTimeout)), this.log(`${o} ${a}`.trim(), "warning");
  }), this.on("upload", () => {
    this.setState({ error: null });
  });
  const r = (n) => {
    const s = n.filter((a) => {
      const c = a != null && this.getFile(a.id);
      return c || this.log(`Not setting progress for a file that has been removed: ${a == null ? void 0 : a.id}`), c;
    }), o = Object.fromEntries(s.map((a) => [a.id, { progress: { uploadStarted: Date.now(), uploadComplete: false, bytesUploaded: 0, bytesTotal: a.size } }]));
    this.patchFilesState(o);
  };
  this.on("upload-start", r), this.on("upload-progress", __privateGet(this, _F)), this.on("upload-success", (n, s) => {
    if (n == null || !this.getFile(n.id)) {
      this.log(`Not setting progress for a file that has been removed: ${n == null ? void 0 : n.id}`);
      return;
    }
    const o = this.getFile(n.id).progress, a = __privateGet(this, _s).size > 0;
    this.setFileState(n.id, { progress: { ...o, postprocess: a ? { mode: "indeterminate" } : void 0, uploadComplete: true, ...!a && { complete: true }, percentage: 100, bytesUploaded: o.bytesTotal }, response: s, uploadURL: s.uploadURL, isPaused: false }), n.size == null && this.setFileState(n.id, { size: s.bytesUploaded || o.bytesTotal }), __privateGet(this, _o).call(this);
  }), this.on("preprocess-progress", (n, s) => {
    if (n == null || !this.getFile(n.id)) {
      this.log(`Not setting progress for a file that has been removed: ${n == null ? void 0 : n.id}`);
      return;
    }
    this.setFileState(n.id, { progress: { ...this.getFile(n.id).progress, preprocess: s } });
  }), this.on("preprocess-complete", (n) => {
    if (n == null || !this.getFile(n.id)) {
      this.log(`Not setting progress for a file that has been removed: ${n == null ? void 0 : n.id}`);
      return;
    }
    const s = { ...this.getState().files };
    s[n.id] = { ...s[n.id], progress: { ...s[n.id].progress } }, delete s[n.id].progress.preprocess, this.setState({ files: s });
  }), this.on("postprocess-progress", (n, s) => {
    if (n == null || !this.getFile(n.id)) {
      this.log(`Not setting progress for a file that has been removed: ${n == null ? void 0 : n.id}`);
      return;
    }
    this.setFileState(n.id, { progress: { ...this.getState().files[n.id].progress, postprocess: s } });
  }), this.on("postprocess-complete", (n) => {
    const s = n && this.getFile(n.id);
    if (s == null) {
      this.log(`Not setting progress for a file that has been removed: ${n == null ? void 0 : n.id}`);
      return;
    }
    const { postprocess: o, ...a } = s.progress;
    this.patchFilesState({ [s.id]: { progress: { ...a, complete: true } } });
  }), this.on("restored", () => {
    __privateGet(this, _o).call(this);
  }), this.on("dashboard:file-edit-complete", (n) => {
    n && __privateMethod(this, _Dt_instances, f_fn).call(this, n);
  }), typeof window < "u" && window.addEventListener && (window.addEventListener("online", __privateGet(this, _r2)), window.addEventListener("offline", __privateGet(this, _r2)), setTimeout(__privateGet(this, _r2), 3e3));
};
_r2 = new WeakMap();
_y = new WeakMap();
a_fn = function(e, t = {}) {
  const { forceAllowNewUpload: r = false } = t, { allowNewUpload: n, currentUploads: s } = this.getState();
  if (!n && !r) throw new Error("Cannot create a new upload: already uploading.");
  const o = nr();
  return this.emit("upload", o, this.getFilesByIds(e)), this.setState({ allowNewUpload: this.opts.allowMultipleUploadBatches !== false && this.opts.allowMultipleUploads !== false, currentUploads: { ...s, [o]: { fileIDs: e, step: 0, result: {} } } }), o;
};
T_fn = function(e) {
  const { currentUploads: t } = this.getState();
  return t[e];
};
v_fn = function(e) {
  const { [e]: t, ...r } = this.getState().currentUploads;
  this.setState({ currentUploads: r });
};
l_fn = async function(e) {
  const t = () => {
    const { currentUploads: o } = this.getState();
    return o[e];
  };
  let r = t();
  if (!r) throw new Error("Nonexistent upload");
  const n = [...__privateGet(this, _u), ...__privateGet(this, _c), ...__privateGet(this, _s)];
  try {
    for (let o = r.step || 0; o < n.length; o++) {
      const a = n[o];
      this.setState({ currentUploads: { ...this.getState().currentUploads, [e]: { ...r, step: o } } });
      const { fileIDs: c } = r;
      if (await a(c, e), r = t(), !r) break;
    }
  } catch (o) {
    throw __privateMethod(this, _Dt_instances, v_fn).call(this, e), o;
  }
  if (r) {
    r.fileIDs.forEach((l) => {
      const d = this.getFile(l);
      (d == null ? void 0 : d.progress.postprocess) && this.emit("postprocess-complete", d);
    });
    const o = r.fileIDs.map((l) => this.getFile(l)), a = o.filter((l) => !l.error), c = o.filter((l) => l.error);
    this.addResultData(e, { successful: a, failed: c, uploadID: e }), r = t();
  }
  let s;
  return r && (s = r.result, __privateMethod(this, _Dt_instances, v_fn).call(this, e)), s == null && (this.log(`Not setting result for an upload that has been removed: ${e}`), s = { successful: [], failed: [], uploadID: e }), s;
};
__publicField(_Dt, "VERSION", or.version);
let Dt = _Dt;
export {
  vi as A,
  gr as F,
  fi as H,
  xr as K,
  Lt as T,
  Re as U,
  Er as V,
  ci as _,
  vr as a,
  tt as b,
  Fr as c,
  hr as d,
  wr as e,
  pr as f,
  yr as g,
  ii as h,
  br as i,
  mr as j,
  ee as k,
  _r as l,
  Dt as m,
  nr as n,
  Y as p,
  bi as q,
  Ki as r,
  fr as s,
  Sr as t,
  se as u,
  K as x,
  yi as y
};

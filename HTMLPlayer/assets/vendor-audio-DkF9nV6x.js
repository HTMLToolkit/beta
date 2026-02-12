const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MpegParser-CcEZ7J4I.js","assets/AbstractID3Parser-3xbdiBE3.js","assets/ID3v2Parser-Boz_HjH8.js","assets/vendor-react-C6Febm84.js","assets/vendor-i18n-Knli4vfm.js","assets/vendor-ui-BG0coi97.js","assets/vendor-uppy-DElw6E-D.js","assets/AsfParser-IfMumDOH.js","assets/DsdiffParser-B_eCHt49.js","assets/AiffParser-DLVUqm1u.js","assets/DsfParser-D8QVcgO8.js","assets/FlacParser-_kX-wXA6.js","assets/MatroskaParser-CGn_QwS8.js","assets/MP4Parser-B3fn7q6p.js","assets/MusepackParser-Dp4ivfjy.js","assets/OggParser-OpRnxClm.js","assets/WavPackParser-6g8ZHXvo.js","assets/WaveParser-D_osXoc3.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { g as Ze } from "./vendor-react-C6Febm84.js";
import { _ as S, __tla as __tla_0 } from "./vendor-i18n-Knli4vfm.js";
let Tn, In, mt, En, x, I, nt, qe, T, jt, F, Kt, dt, X, ke, Yt, Vt, ii, ei, b, Vi, V, Zt, wn, rt, Ht, ve, gn, Mn, Ur, Xi, tt, Dn, Rn, Bn, Fn, D, ut, N, kn, K, at, bn, Ui, An, ht, Cn, Hi, it, _n, Z, H, Xe, Ae, vn, Yi, Sn;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const yt = "End-Of-Stream";
  I = class extends Error {
    constructor() {
      super(yt), this.name = "EndOfStreamError";
    }
  };
  class bt extends Error {
    constructor(e = "The operation was aborted") {
      super(e), this.name = "AbortError";
    }
  }
  class Ke {
    constructor() {
      this.endOfStream = false, this.interrupted = false, this.peekQueue = [];
    }
    async peek(e, t = false) {
      const r = await this.read(e, t);
      return this.peekQueue.push(e.subarray(0, r)), r;
    }
    async read(e, t = false) {
      if (e.length === 0) return 0;
      let r = this.readFromPeekBuffer(e);
      if (this.endOfStream || (r += await this.readRemainderFromStream(e.subarray(r), t)), r === 0 && !t) throw new I();
      return r;
    }
    readFromPeekBuffer(e) {
      let t = e.length, r = 0;
      for (; this.peekQueue.length > 0 && t > 0; ) {
        const n = this.peekQueue.pop();
        if (!n) throw new Error("peekData should be defined");
        const a = Math.min(n.length, t);
        e.set(n.subarray(0, a), r), r += a, t -= a, a < n.length && this.peekQueue.push(n.subarray(a));
      }
      return r;
    }
    async readRemainderFromStream(e, t) {
      let r = 0;
      for (; r < e.length && !this.endOfStream; ) {
        if (this.interrupted) throw new bt();
        const n = await this.readFromStream(e.subarray(r), t);
        if (n === 0) break;
        r += n;
      }
      if (!t && r < e.length) throw new I();
      return r;
    }
  }
  class kt extends Ke {
    constructor(e) {
      super(), this.reader = e;
    }
    async abort() {
      return this.close();
    }
    async close() {
      this.reader.releaseLock();
    }
  }
  class vt extends kt {
    async readFromStream(e, t) {
      if (e.length === 0) return 0;
      const r = await this.reader.read(new Uint8Array(e.length), {
        min: t ? void 0 : e.length
      });
      return r.done && (this.endOfStream = r.done), r.value ? (e.set(r.value), r.value.length) : 0;
    }
  }
  class De extends Ke {
    constructor(e) {
      super(), this.reader = e, this.buffer = null;
    }
    writeChunk(e, t) {
      const r = Math.min(t.length, e.length);
      return e.set(t.subarray(0, r)), r < t.length ? this.buffer = t.subarray(r) : this.buffer = null, r;
    }
    async readFromStream(e, t) {
      if (e.length === 0) return 0;
      let r = 0;
      for (this.buffer && (r += this.writeChunk(e, this.buffer)); r < e.length && !this.endOfStream; ) {
        const n = await this.reader.read();
        if (n.done) {
          this.endOfStream = true;
          break;
        }
        n.value && (r += this.writeChunk(e.subarray(r), n.value));
      }
      if (!t && r === 0 && this.endOfStream) throw new I();
      return r;
    }
    abort() {
      return this.interrupted = true, this.reader.cancel();
    }
    async close() {
      await this.abort(), this.reader.releaseLock();
    }
  }
  function It(i) {
    try {
      const e = i.getReader({
        mode: "byob"
      });
      return e instanceof ReadableStreamDefaultReader ? new De(e) : new vt(e);
    } catch (e) {
      if (e instanceof TypeError) return new De(i.getReader());
      throw e;
    }
  }
  class Se {
    constructor(e) {
      this.numBuffer = new Uint8Array(8), this.position = 0, this.onClose = e == null ? void 0 : e.onClose, (e == null ? void 0 : e.abortSignal) && e.abortSignal.addEventListener("abort", () => {
        this.abort();
      });
    }
    async readToken(e, t = this.position) {
      const r = new Uint8Array(e.len);
      if (await this.readBuffer(r, {
        position: t
      }) < e.len) throw new I();
      return e.get(r, 0);
    }
    async peekToken(e, t = this.position) {
      const r = new Uint8Array(e.len);
      if (await this.peekBuffer(r, {
        position: t
      }) < e.len) throw new I();
      return e.get(r, 0);
    }
    async readNumber(e) {
      if (await this.readBuffer(this.numBuffer, {
        length: e.len
      }) < e.len) throw new I();
      return e.get(this.numBuffer, 0);
    }
    async peekNumber(e) {
      if (await this.peekBuffer(this.numBuffer, {
        length: e.len
      }) < e.len) throw new I();
      return e.get(this.numBuffer, 0);
    }
    async ignore(e) {
      if (this.fileInfo.size !== void 0) {
        const t = this.fileInfo.size - this.position;
        if (e > t) return this.position += t, t;
      }
      return this.position += e, e;
    }
    async close() {
      var _a;
      await this.abort(), await ((_a = this.onClose) == null ? void 0 : _a.call(this));
    }
    normalizeOptions(e, t) {
      if (!this.supportsRandomAccess() && t && t.position !== void 0 && t.position < this.position) throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
      return {
        mayBeLess: false,
        offset: 0,
        length: e.length,
        position: this.position,
        ...t
      };
    }
    abort() {
      return Promise.resolve();
    }
  }
  const At = 256e3;
  class Et extends Se {
    constructor(e, t) {
      super(t), this.streamReader = e, this.fileInfo = (t == null ? void 0 : t.fileInfo) ?? {};
    }
    async readBuffer(e, t) {
      const r = this.normalizeOptions(e, t), n = r.position - this.position;
      if (n > 0) return await this.ignore(n), this.readBuffer(e, t);
      if (n < 0) throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
      if (r.length === 0) return 0;
      const a = await this.streamReader.read(e.subarray(0, r.length), r.mayBeLess);
      if (this.position += a, (!t || !t.mayBeLess) && a < r.length) throw new I();
      return a;
    }
    async peekBuffer(e, t) {
      const r = this.normalizeOptions(e, t);
      let n = 0;
      if (r.position) {
        const a = r.position - this.position;
        if (a > 0) {
          const s = new Uint8Array(r.length + a);
          return n = await this.peekBuffer(s, {
            mayBeLess: r.mayBeLess
          }), e.set(s.subarray(a)), n - a;
        }
        if (a < 0) throw new Error("Cannot peek from a negative offset in a stream");
      }
      if (r.length > 0) {
        try {
          n = await this.streamReader.peek(e.subarray(0, r.length), r.mayBeLess);
        } catch (a) {
          if ((t == null ? void 0 : t.mayBeLess) && a instanceof I) return 0;
          throw a;
        }
        if (!r.mayBeLess && n < r.length) throw new I();
      }
      return n;
    }
    async ignore(e) {
      const t = Math.min(At, e), r = new Uint8Array(t);
      let n = 0;
      for (; n < e; ) {
        const a = e - n, s = await this.readBuffer(r, {
          length: Math.min(t, a)
        });
        if (s < 0) return s;
        n += s;
      }
      return n;
    }
    abort() {
      return this.streamReader.abort();
    }
    async close() {
      return this.streamReader.close();
    }
    supportsRandomAccess() {
      return false;
    }
  }
  class St extends Se {
    constructor(e, t) {
      super(t), this.uint8Array = e, this.fileInfo = {
        ...(t == null ? void 0 : t.fileInfo) ?? {},
        size: e.length
      };
    }
    async readBuffer(e, t) {
      (t == null ? void 0 : t.position) && (this.position = t.position);
      const r = await this.peekBuffer(e, t);
      return this.position += r, r;
    }
    async peekBuffer(e, t) {
      const r = this.normalizeOptions(e, t), n = Math.min(this.uint8Array.length - r.position, r.length);
      if (!r.mayBeLess && n < r.length) throw new I();
      return e.set(this.uint8Array.subarray(r.position, r.position + n)), n;
    }
    close() {
      return super.close();
    }
    supportsRandomAccess() {
      return true;
    }
    setPosition(e) {
      this.position = e;
    }
  }
  class Ct extends Se {
    constructor(e, t) {
      super(t), this.blob = e, this.fileInfo = {
        ...(t == null ? void 0 : t.fileInfo) ?? {},
        size: e.size,
        mimeType: e.type
      };
    }
    async readBuffer(e, t) {
      (t == null ? void 0 : t.position) && (this.position = t.position);
      const r = await this.peekBuffer(e, t);
      return this.position += r, r;
    }
    async peekBuffer(e, t) {
      const r = this.normalizeOptions(e, t), n = Math.min(this.blob.size - r.position, r.length);
      if (!r.mayBeLess && n < r.length) throw new I();
      const a = await this.blob.slice(r.position, r.position + n).arrayBuffer();
      return e.set(new Uint8Array(a)), n;
    }
    close() {
      return super.close();
    }
    supportsRandomAccess() {
      return true;
    }
    setPosition(e) {
      this.position = e;
    }
  }
  function _t(i, e) {
    const t = It(i), r = e ?? {}, n = r.onClose;
    return r.onClose = async () => {
      if (await t.close(), n) return n();
    }, new Et(t, r);
  }
  ke = function(i, e) {
    return new St(i, e);
  };
  function Je(i, e) {
    return new Ct(i, e);
  }
  var ie = {};
  var Be;
  function Rt() {
    return Be || (Be = 1, ie.read = function(i, e, t, r, n) {
      var a, s, l = n * 8 - r - 1, m = (1 << l) - 1, d = m >> 1, c = -7, o = t ? n - 1 : 0, u = t ? -1 : 1, f = i[e + o];
      for (o += u, a = f & (1 << -c) - 1, f >>= -c, c += l; c > 0; a = a * 256 + i[e + o], o += u, c -= 8) ;
      for (s = a & (1 << -c) - 1, a >>= -c, c += r; c > 0; s = s * 256 + i[e + o], o += u, c -= 8) ;
      if (a === 0) a = 1 - d;
      else {
        if (a === m) return s ? NaN : (f ? -1 : 1) * (1 / 0);
        s = s + Math.pow(2, r), a = a - d;
      }
      return (f ? -1 : 1) * s * Math.pow(2, a - r);
    }, ie.write = function(i, e, t, r, n, a) {
      var s, l, m, d = a * 8 - n - 1, c = (1 << d) - 1, o = c >> 1, u = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = r ? 0 : a - 1, g = r ? 1 : -1, k = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
      for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (l = isNaN(e) ? 1 : 0, s = c) : (s = Math.floor(Math.log(e) / Math.LN2), e * (m = Math.pow(2, -s)) < 1 && (s--, m *= 2), s + o >= 1 ? e += u / m : e += u * Math.pow(2, 1 - o), e * m >= 2 && (s++, m /= 2), s + o >= c ? (l = 0, s = c) : s + o >= 1 ? (l = (e * m - 1) * Math.pow(2, n), s = s + o) : (l = e * Math.pow(2, o - 1) * Math.pow(2, n), s = 0)); n >= 8; i[t + f] = l & 255, f += g, l /= 256, n -= 8) ;
      for (s = s << n | l, d += n; d > 0; i[t + f] = s & 255, f += g, s /= 256, d -= 8) ;
      i[t + f - g] |= k * 128;
    }), ie;
  }
  var P = Rt();
  const Qe = {
    128: "\u20AC",
    130: "\u201A",
    131: "\u0192",
    132: "\u201E",
    133: "\u2026",
    134: "\u2020",
    135: "\u2021",
    136: "\u02C6",
    137: "\u2030",
    138: "\u0160",
    139: "\u2039",
    140: "\u0152",
    142: "\u017D",
    145: "\u2018",
    146: "\u2019",
    147: "\u201C",
    148: "\u201D",
    149: "\u2022",
    150: "\u2013",
    151: "\u2014",
    152: "\u02DC",
    153: "\u2122",
    154: "\u0161",
    155: "\u203A",
    156: "\u0153",
    158: "\u017E",
    159: "\u0178"
  }, et = {};
  for (const [i, e] of Object.entries(Qe)) et[e] = Number.parseInt(i, 10);
  let re, ne;
  function Ft() {
    if (!(typeof globalThis.TextDecoder > "u")) return re ?? (re = new globalThis.TextDecoder("utf-8"));
  }
  function Mt() {
    if (!(typeof globalThis.TextEncoder > "u")) return ne ?? (ne = new globalThis.TextEncoder());
  }
  const U = 32 * 1024;
  Z = function(i, e = "utf-8") {
    switch (e.toLowerCase()) {
      case "utf-8":
      case "utf8": {
        const t = Ft();
        return t ? t.decode(i) : Bt(i);
      }
      case "utf-16le":
        return Pt(i);
      case "us-ascii":
      case "ascii":
        return Lt(i);
      case "latin1":
      case "iso-8859-1":
        return Ot(i);
      case "windows-1252":
        return zt(i);
      default:
        throw new RangeError(`Encoding '${e}' not supported`);
    }
  };
  function Dt(i = "", e = "utf-8") {
    switch (e.toLowerCase()) {
      case "utf-8":
      case "utf8": {
        const t = Mt();
        return t ? t.encode(i) : Nt(i);
      }
      case "utf-16le":
        return Ut(i);
      case "us-ascii":
      case "ascii":
        return Xt(i);
      case "latin1":
      case "iso-8859-1":
        return Gt(i);
      case "windows-1252":
        return $t(i);
      default:
        throw new RangeError(`Encoding '${e}' not supported`);
    }
  }
  function Bt(i) {
    const e = [];
    let t = "", r = 0;
    for (; r < i.length; ) {
      const n = i[r++];
      if (n < 128) t += String.fromCharCode(n);
      else if (n < 224) {
        const a = i[r++] & 63;
        t += String.fromCharCode((n & 31) << 6 | a);
      } else if (n < 240) {
        const a = i[r++] & 63, s = i[r++] & 63;
        t += String.fromCharCode((n & 15) << 12 | a << 6 | s);
      } else {
        const a = i[r++] & 63, s = i[r++] & 63, l = i[r++] & 63;
        let m = (n & 7) << 18 | a << 12 | s << 6 | l;
        m -= 65536, t += String.fromCharCode(55296 + (m >> 10 & 1023), 56320 + (m & 1023));
      }
      t.length >= U && (e.push(t), t = "");
    }
    return t && e.push(t), e.join("");
  }
  function Pt(i) {
    const e = i.length & -2;
    if (e === 0) return "";
    const t = [], r = U;
    for (let n = 0; n < e; ) {
      const a = Math.min(r, e - n >> 1), s = new Array(a);
      for (let l = 0; l < a; l++, n += 2) s[l] = i[n] | i[n + 1] << 8;
      t.push(String.fromCharCode.apply(null, s));
    }
    return t.join("");
  }
  function Lt(i) {
    const e = [];
    for (let t = 0; t < i.length; t += U) {
      const r = Math.min(i.length, t + U), n = new Array(r - t);
      for (let a = t, s = 0; a < r; a++, s++) n[s] = i[a] & 127;
      e.push(String.fromCharCode.apply(null, n));
    }
    return e.join("");
  }
  function Ot(i) {
    const e = [];
    for (let t = 0; t < i.length; t += U) {
      const r = Math.min(i.length, t + U), n = new Array(r - t);
      for (let a = t, s = 0; a < r; a++, s++) n[s] = i[a];
      e.push(String.fromCharCode.apply(null, n));
    }
    return e.join("");
  }
  function zt(i) {
    const e = [];
    let t = "";
    for (let r = 0; r < i.length; r++) {
      const n = i[r], a = n >= 128 && n <= 159 ? Qe[n] : void 0;
      t += a ?? String.fromCharCode(n), t.length >= U && (e.push(t), t = "");
    }
    return t && e.push(t), e.join("");
  }
  function Nt(i) {
    const e = [];
    for (let t = 0; t < i.length; t++) {
      let r = i.charCodeAt(t);
      if (r >= 55296 && r <= 56319 && t + 1 < i.length) {
        const n = i.charCodeAt(t + 1);
        n >= 56320 && n <= 57343 && (r = 65536 + (r - 55296 << 10) + (n - 56320), t++);
      }
      r < 128 ? e.push(r) : r < 2048 ? e.push(192 | r >> 6, 128 | r & 63) : r < 65536 ? e.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | r & 63) : e.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | r & 63);
    }
    return new Uint8Array(e);
  }
  function Ut(i) {
    const e = new Uint8Array(i.length * 2);
    for (let t = 0; t < i.length; t++) {
      const r = i.charCodeAt(t), n = t * 2;
      e[n] = r & 255, e[n + 1] = r >>> 8;
    }
    return e;
  }
  function Xt(i) {
    const e = new Uint8Array(i.length);
    for (let t = 0; t < i.length; t++) e[t] = i.charCodeAt(t) & 127;
    return e;
  }
  function Gt(i) {
    const e = new Uint8Array(i.length);
    for (let t = 0; t < i.length; t++) e[t] = i.charCodeAt(t) & 255;
    return e;
  }
  function $t(i) {
    const e = new Uint8Array(i.length);
    for (let t = 0; t < i.length; t++) {
      const r = i[t], n = r.charCodeAt(0);
      if (n <= 255) {
        e[t] = n;
        continue;
      }
      const a = et[r];
      e[t] = a !== void 0 ? a : 63;
    }
    return e;
  }
  function h(i) {
    return new DataView(i.buffer, i.byteOffset);
  }
  let Wt, qt, Jt, Qt, ti, ri, ni, ai;
  N = {
    len: 1,
    get(i, e) {
      return h(i).getUint8(e);
    },
    put(i, e, t) {
      return h(i).setUint8(e, t), e + 1;
    }
  };
  T = {
    len: 2,
    get(i, e) {
      return h(i).getUint16(e, true);
    },
    put(i, e, t) {
      return h(i).setUint16(e, t, true), e + 2;
    }
  };
  D = {
    len: 2,
    get(i, e) {
      return h(i).getUint16(e);
    },
    put(i, e, t) {
      return h(i).setUint16(e, t), e + 2;
    }
  };
  tt = {
    len: 3,
    get(i, e) {
      const t = h(i);
      return t.getUint8(e) + (t.getUint16(e + 1, true) << 8);
    },
    put(i, e, t) {
      const r = h(i);
      return r.setUint8(e, t & 255), r.setUint16(e + 1, t >> 8, true), e + 3;
    }
  };
  it = {
    len: 3,
    get(i, e) {
      const t = h(i);
      return (t.getUint16(e) << 8) + t.getUint8(e + 2);
    },
    put(i, e, t) {
      const r = h(i);
      return r.setUint16(e, t >> 8), r.setUint8(e + 2, t & 255), e + 3;
    }
  };
  x = {
    len: 4,
    get(i, e) {
      return h(i).getUint32(e, true);
    },
    put(i, e, t) {
      return h(i).setUint32(e, t, true), e + 4;
    }
  };
  V = {
    len: 4,
    get(i, e) {
      return h(i).getUint32(e);
    },
    put(i, e, t) {
      return h(i).setUint32(e, t), e + 4;
    }
  };
  ve = {
    len: 1,
    get(i, e) {
      return h(i).getInt8(e);
    },
    put(i, e, t) {
      return h(i).setInt8(e, t), e + 1;
    }
  };
  jt = {
    len: 2,
    get(i, e) {
      return h(i).getInt16(e);
    },
    put(i, e, t) {
      return h(i).setInt16(e, t), e + 2;
    }
  };
  Wt = {
    len: 2,
    get(i, e) {
      return h(i).getInt16(e, true);
    },
    put(i, e, t) {
      return h(i).setInt16(e, t, true), e + 2;
    }
  };
  qt = {
    len: 3,
    get(i, e) {
      const t = tt.get(i, e);
      return t > 8388607 ? t - 16777216 : t;
    },
    put(i, e, t) {
      const r = h(i);
      return r.setUint8(e, t & 255), r.setUint16(e + 1, t >> 8, true), e + 3;
    }
  };
  Ht = {
    len: 3,
    get(i, e) {
      const t = it.get(i, e);
      return t > 8388607 ? t - 16777216 : t;
    },
    put(i, e, t) {
      const r = h(i);
      return r.setUint16(e, t >> 8), r.setUint8(e + 2, t & 255), e + 3;
    }
  };
  rt = {
    len: 4,
    get(i, e) {
      return h(i).getInt32(e);
    },
    put(i, e, t) {
      return h(i).setInt32(e, t), e + 4;
    }
  };
  Vt = {
    len: 4,
    get(i, e) {
      return h(i).getInt32(e, true);
    },
    put(i, e, t) {
      return h(i).setInt32(e, t, true), e + 4;
    }
  };
  nt = {
    len: 8,
    get(i, e) {
      return h(i).getBigUint64(e, true);
    },
    put(i, e, t) {
      return h(i).setBigUint64(e, t, true), e + 8;
    }
  };
  Yt = {
    len: 8,
    get(i, e) {
      return h(i).getBigInt64(e, true);
    },
    put(i, e, t) {
      return h(i).setBigInt64(e, t, true), e + 8;
    }
  };
  Zt = {
    len: 8,
    get(i, e) {
      return h(i).getBigUint64(e);
    },
    put(i, e, t) {
      return h(i).setBigUint64(e, t), e + 8;
    }
  };
  Kt = {
    len: 8,
    get(i, e) {
      return h(i).getBigInt64(e);
    },
    put(i, e, t) {
      return h(i).setBigInt64(e, t), e + 8;
    }
  };
  Jt = {
    len: 2,
    get(i, e) {
      return P.read(i, e, false, 10, this.len);
    },
    put(i, e, t) {
      return P.write(i, t, e, false, 10, this.len), e + this.len;
    }
  };
  Qt = {
    len: 2,
    get(i, e) {
      return P.read(i, e, true, 10, this.len);
    },
    put(i, e, t) {
      return P.write(i, t, e, true, 10, this.len), e + this.len;
    }
  };
  ei = {
    len: 4,
    get(i, e) {
      return h(i).getFloat32(e);
    },
    put(i, e, t) {
      return h(i).setFloat32(e, t), e + 4;
    }
  };
  ti = {
    len: 4,
    get(i, e) {
      return h(i).getFloat32(e, true);
    },
    put(i, e, t) {
      return h(i).setFloat32(e, t, true), e + 4;
    }
  };
  ii = {
    len: 8,
    get(i, e) {
      return h(i).getFloat64(e);
    },
    put(i, e, t) {
      return h(i).setFloat64(e, t), e + 8;
    }
  };
  ri = {
    len: 8,
    get(i, e) {
      return h(i).getFloat64(e, true);
    },
    put(i, e, t) {
      return h(i).setFloat64(e, t, true), e + 8;
    }
  };
  ni = {
    len: 10,
    get(i, e) {
      return P.read(i, e, false, 63, this.len);
    },
    put(i, e, t) {
      return P.write(i, t, e, false, 63, this.len), e + this.len;
    }
  };
  ai = {
    len: 10,
    get(i, e) {
      return P.read(i, e, true, 63, this.len);
    },
    put(i, e, t) {
      return P.write(i, t, e, true, 63, this.len), e + this.len;
    }
  };
  class si {
    constructor(e) {
      this.len = e;
    }
    get(e, t) {
    }
  }
  at = class {
    constructor(e) {
      this.len = e;
    }
    get(e, t) {
      return e.subarray(t, t + this.len);
    }
  };
  b = class {
    constructor(e, t) {
      this.len = e, this.encoding = t;
    }
    get(e, t = 0) {
      const r = e.subarray(t, t + this.len);
      return Z(r, this.encoding);
    }
  };
  class oi extends b {
    constructor(e) {
      super(e, "windows-1252");
    }
  }
  gn = Object.freeze(Object.defineProperty({
    __proto__: null,
    AnsiStringType: oi,
    Float16_BE: Jt,
    Float16_LE: Qt,
    Float32_BE: ei,
    Float32_LE: ti,
    Float64_BE: ii,
    Float64_LE: ri,
    Float80_BE: ni,
    Float80_LE: ai,
    INT16_BE: jt,
    INT16_LE: Wt,
    INT24_BE: Ht,
    INT24_LE: qt,
    INT32_BE: rt,
    INT32_LE: Vt,
    INT64_BE: Kt,
    INT64_LE: Yt,
    INT8: ve,
    IgnoreType: si,
    StringType: b,
    UINT16_BE: D,
    UINT16_LE: T,
    UINT24_BE: it,
    UINT24_LE: tt,
    UINT32_BE: V,
    UINT32_LE: x,
    UINT64_BE: Zt,
    UINT64_LE: nt,
    UINT8: N,
    Uint8ArrayType: at
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  var ae = {
    exports: {}
  }, xe, Pe;
  function ci() {
    if (Pe) return xe;
    Pe = 1;
    var i = 1e3, e = i * 60, t = e * 60, r = t * 24, n = r * 7, a = r * 365.25;
    xe = function(c, o) {
      o = o || {};
      var u = typeof c;
      if (u === "string" && c.length > 0) return s(c);
      if (u === "number" && isFinite(c)) return o.long ? m(c) : l(c);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(c));
    };
    function s(c) {
      if (c = String(c), !(c.length > 100)) {
        var o = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(c);
        if (o) {
          var u = parseFloat(o[1]), f = (o[2] || "ms").toLowerCase();
          switch (f) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return u * a;
            case "weeks":
            case "week":
            case "w":
              return u * n;
            case "days":
            case "day":
            case "d":
              return u * r;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return u * t;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return u * e;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return u * i;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return u;
            default:
              return;
          }
        }
      }
    }
    function l(c) {
      var o = Math.abs(c);
      return o >= r ? Math.round(c / r) + "d" : o >= t ? Math.round(c / t) + "h" : o >= e ? Math.round(c / e) + "m" : o >= i ? Math.round(c / i) + "s" : c + "ms";
    }
    function m(c) {
      var o = Math.abs(c);
      return o >= r ? d(c, o, r, "day") : o >= t ? d(c, o, t, "hour") : o >= e ? d(c, o, e, "minute") : o >= i ? d(c, o, i, "second") : c + " ms";
    }
    function d(c, o, u, f) {
      var g = o >= u * 1.5;
      return Math.round(c / u) + " " + f + (g ? "s" : "");
    }
    return xe;
  }
  var ge, Le;
  function ui() {
    if (Le) return ge;
    Le = 1;
    function i(e) {
      r.debug = r, r.default = r, r.coerce = d, r.disable = l, r.enable = a, r.enabled = m, r.humanize = ci(), r.destroy = c, Object.keys(e).forEach((o) => {
        r[o] = e[o];
      }), r.names = [], r.skips = [], r.formatters = {};
      function t(o) {
        let u = 0;
        for (let f = 0; f < o.length; f++) u = (u << 5) - u + o.charCodeAt(f), u |= 0;
        return r.colors[Math.abs(u) % r.colors.length];
      }
      r.selectColor = t;
      function r(o) {
        let u, f = null, g, k;
        function y(...w) {
          if (!y.enabled) return;
          const v = y, ee = Number(/* @__PURE__ */ new Date()), gt = ee - (u || ee);
          v.diff = gt, v.prev = u, v.curr = ee, u = ee, w[0] = r.coerce(w[0]), typeof w[0] != "string" && w.unshift("%O");
          let te = 0;
          w[0] = w[0].replace(/%([a-zA-Z%])/g, (he, Tt) => {
            if (he === "%%") return "%";
            te++;
            const Me = r.formatters[Tt];
            if (typeof Me == "function") {
              const wt = w[te];
              he = Me.call(v, wt), w.splice(te, 1), te--;
            }
            return he;
          }), r.formatArgs.call(v, w), (v.log || r.log).apply(v, w);
        }
        return y.namespace = o, y.useColors = r.useColors(), y.color = r.selectColor(o), y.extend = n, y.destroy = r.destroy, Object.defineProperty(y, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => f !== null ? f : (g !== r.namespaces && (g = r.namespaces, k = r.enabled(o)), k),
          set: (w) => {
            f = w;
          }
        }), typeof r.init == "function" && r.init(y), y;
      }
      function n(o, u) {
        const f = r(this.namespace + (typeof u > "u" ? ":" : u) + o);
        return f.log = this.log, f;
      }
      function a(o) {
        r.save(o), r.namespaces = o, r.names = [], r.skips = [];
        const u = (typeof o == "string" ? o : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
        for (const f of u) f[0] === "-" ? r.skips.push(f.slice(1)) : r.names.push(f);
      }
      function s(o, u) {
        let f = 0, g = 0, k = -1, y = 0;
        for (; f < o.length; ) if (g < u.length && (u[g] === o[f] || u[g] === "*")) u[g] === "*" ? (k = g, y = f, g++) : (f++, g++);
        else if (k !== -1) g = k + 1, y++, f = y;
        else return false;
        for (; g < u.length && u[g] === "*"; ) g++;
        return g === u.length;
      }
      function l() {
        const o = [
          ...r.names,
          ...r.skips.map((u) => "-" + u)
        ].join(",");
        return r.enable(""), o;
      }
      function m(o) {
        for (const u of r.skips) if (s(o, u)) return false;
        for (const u of r.names) if (s(o, u)) return true;
        return false;
      }
      function d(o) {
        return o instanceof Error ? o.stack || o.message : o;
      }
      function c() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      return r.enable(r.load()), r;
    }
    return ge = i, ge;
  }
  var Oe;
  function li() {
    return Oe || (Oe = 1, (function(i, e) {
      var t = {};
      e.formatArgs = n, e.save = a, e.load = s, e.useColors = r, e.storage = l(), e.destroy = /* @__PURE__ */ (() => {
        let d = false;
        return () => {
          d || (d = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
        };
      })(), e.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33"
      ];
      function r() {
        if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return true;
        if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
        let d;
        return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (d = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(d[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }
      function n(d) {
        if (d[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + d[0] + (this.useColors ? "%c " : " ") + "+" + i.exports.humanize(this.diff), !this.useColors) return;
        const c = "color: " + this.color;
        d.splice(1, 0, c, "color: inherit");
        let o = 0, u = 0;
        d[0].replace(/%[a-zA-Z%]/g, (f) => {
          f !== "%%" && (o++, f === "%c" && (u = o));
        }), d.splice(u, 0, c);
      }
      e.log = console.debug || console.log || (() => {
      });
      function a(d) {
        try {
          d ? e.storage.setItem("debug", d) : e.storage.removeItem("debug");
        } catch {
        }
      }
      function s() {
        let d;
        try {
          d = e.storage.getItem("debug") || e.storage.getItem("DEBUG");
        } catch {
        }
        return !d && typeof process < "u" && "env" in process && (d = t.DEBUG), d;
      }
      function l() {
        try {
          return localStorage;
        } catch {
        }
      }
      i.exports = ui()(e);
      const { formatters: m } = i.exports;
      m.j = function(d) {
        try {
          return JSON.stringify(d);
        } catch (c) {
          return "[UnexpectedJSONParseError]: " + c.message;
        }
      };
    })(ae, ae.exports)), ae.exports;
  }
  var pi = li();
  let $, ze, mi, di, fi;
  K = Ze(pi);
  $ = {
    LocalFileHeader: 67324752,
    DataDescriptor: 134695760,
    CentralFileHeader: 33639248,
    EndOfCentralDirectory: 101010256
  };
  ze = {
    get(i) {
      return {
        signature: x.get(i, 0),
        compressedSize: x.get(i, 8),
        uncompressedSize: x.get(i, 12)
      };
    },
    len: 16
  };
  mi = {
    get(i) {
      const e = T.get(i, 6);
      return {
        signature: x.get(i, 0),
        minVersion: T.get(i, 4),
        dataDescriptor: !!(e & 8),
        compressedMethod: T.get(i, 8),
        compressedSize: x.get(i, 18),
        uncompressedSize: x.get(i, 22),
        filenameLength: T.get(i, 26),
        extraFieldLength: T.get(i, 28),
        filename: null
      };
    },
    len: 30
  };
  di = {
    get(i) {
      return {
        signature: x.get(i, 0),
        nrOfThisDisk: T.get(i, 4),
        nrOfThisDiskWithTheStart: T.get(i, 6),
        nrOfEntriesOnThisDisk: T.get(i, 8),
        nrOfEntriesOfSize: T.get(i, 10),
        sizeOfCd: x.get(i, 12),
        offsetOfStartOfCd: x.get(i, 16),
        zipFileCommentLength: T.get(i, 20)
      };
    },
    len: 22
  };
  fi = {
    get(i) {
      const e = T.get(i, 8);
      return {
        signature: x.get(i, 0),
        minVersion: T.get(i, 6),
        dataDescriptor: !!(e & 8),
        compressedMethod: T.get(i, 10),
        compressedSize: x.get(i, 20),
        uncompressedSize: x.get(i, 24),
        filenameLength: T.get(i, 28),
        extraFieldLength: T.get(i, 30),
        fileCommentLength: T.get(i, 32),
        relativeOffsetOfLocalHeader: x.get(i, 42),
        filename: null
      };
    },
    len: 46
  };
  function st(i) {
    const e = new Uint8Array(x.len);
    return x.put(e, 0, i), e;
  }
  const C = K("tokenizer:inflate"), Te = 256 * 1024, hi = st($.DataDescriptor), se = st($.EndOfCentralDirectory);
  class Ce {
    constructor(e) {
      this.tokenizer = e, this.syncBuffer = new Uint8Array(Te);
    }
    async isZip() {
      return await this.peekSignature() === $.LocalFileHeader;
    }
    peekSignature() {
      return this.tokenizer.peekToken(x);
    }
    async findEndOfCentralDirectoryLocator() {
      const e = this.tokenizer, t = Math.min(16 * 1024, e.fileInfo.size), r = this.syncBuffer.subarray(0, t);
      await this.tokenizer.readBuffer(r, {
        position: e.fileInfo.size - t
      });
      for (let n = r.length - 4; n >= 0; n--) if (r[n] === se[0] && r[n + 1] === se[1] && r[n + 2] === se[2] && r[n + 3] === se[3]) return e.fileInfo.size - t + n;
      return -1;
    }
    async readCentralDirectory() {
      if (!this.tokenizer.supportsRandomAccess()) {
        C("Cannot reading central-directory without random-read support");
        return;
      }
      C("Reading central-directory...");
      const e = this.tokenizer.position, t = await this.findEndOfCentralDirectoryLocator();
      if (t > 0) {
        C("Central-directory 32-bit signature found");
        const r = await this.tokenizer.readToken(di, t), n = [];
        this.tokenizer.setPosition(r.offsetOfStartOfCd);
        for (let a = 0; a < r.nrOfEntriesOfSize; ++a) {
          const s = await this.tokenizer.readToken(fi);
          if (s.signature !== $.CentralFileHeader) throw new Error("Expected Central-File-Header signature");
          s.filename = await this.tokenizer.readToken(new b(s.filenameLength, "utf-8")), await this.tokenizer.ignore(s.extraFieldLength), await this.tokenizer.ignore(s.fileCommentLength), n.push(s), C(`Add central-directory file-entry: n=${a + 1}/${n.length}: filename=${n[a].filename}`);
        }
        return this.tokenizer.setPosition(e), n;
      }
      this.tokenizer.setPosition(e);
    }
    async unzip(e) {
      const t = await this.readCentralDirectory();
      if (t) return this.iterateOverCentralDirectory(t, e);
      let r = false;
      do {
        const n = await this.readLocalFileHeader();
        if (!n) break;
        const a = e(n);
        r = !!a.stop;
        let s;
        if (await this.tokenizer.ignore(n.extraFieldLength), n.dataDescriptor && n.compressedSize === 0) {
          const l = [];
          let m = Te;
          C("Compressed-file-size unknown, scanning for next data-descriptor-signature....");
          let d = -1;
          for (; d < 0 && m === Te; ) {
            m = await this.tokenizer.peekBuffer(this.syncBuffer, {
              mayBeLess: true
            }), d = xi(this.syncBuffer.subarray(0, m), hi);
            const c = d >= 0 ? d : m;
            if (a.handler) {
              const o = new Uint8Array(c);
              await this.tokenizer.readBuffer(o), l.push(o);
            } else await this.tokenizer.ignore(c);
          }
          C(`Found data-descriptor-signature at pos=${this.tokenizer.position}`), a.handler && await this.inflate(n, gi(l), a.handler);
        } else a.handler ? (C(`Reading compressed-file-data: ${n.compressedSize} bytes`), s = new Uint8Array(n.compressedSize), await this.tokenizer.readBuffer(s), await this.inflate(n, s, a.handler)) : (C(`Ignoring compressed-file-data: ${n.compressedSize} bytes`), await this.tokenizer.ignore(n.compressedSize));
        if (C(`Reading data-descriptor at pos=${this.tokenizer.position}`), n.dataDescriptor && (await this.tokenizer.readToken(ze)).signature !== 134695760) throw new Error(`Expected data-descriptor-signature at position ${this.tokenizer.position - ze.len}`);
      } while (!r);
    }
    async iterateOverCentralDirectory(e, t) {
      for (const r of e) {
        const n = t(r);
        if (n.handler) {
          this.tokenizer.setPosition(r.relativeOffsetOfLocalHeader);
          const a = await this.readLocalFileHeader();
          if (a) {
            await this.tokenizer.ignore(a.extraFieldLength);
            const s = new Uint8Array(r.compressedSize);
            await this.tokenizer.readBuffer(s), await this.inflate(a, s, n.handler);
          }
        }
        if (n.stop) break;
      }
    }
    async inflate(e, t, r) {
      if (e.compressedMethod === 0) return r(t);
      if (e.compressedMethod !== 8) throw new Error(`Unsupported ZIP compression method: ${e.compressedMethod}`);
      C(`Decompress filename=${e.filename}, compressed-size=${t.length}`);
      const n = await Ce.decompressDeflateRaw(t);
      return r(n);
    }
    static async decompressDeflateRaw(e) {
      const t = new ReadableStream({
        start(a) {
          a.enqueue(e), a.close();
        }
      }), r = new DecompressionStream("deflate-raw"), n = t.pipeThrough(r);
      try {
        const s = await new Response(n).arrayBuffer();
        return new Uint8Array(s);
      } catch (a) {
        const s = a instanceof Error ? `Failed to deflate ZIP entry: ${a.message}` : "Unknown decompression error in ZIP entry";
        throw new TypeError(s);
      }
    }
    async readLocalFileHeader() {
      const e = await this.tokenizer.peekToken(x);
      if (e === $.LocalFileHeader) {
        const t = await this.tokenizer.readToken(mi);
        return t.filename = await this.tokenizer.readToken(new b(t.filenameLength, "utf-8")), t;
      }
      if (e === $.CentralFileHeader) return false;
      throw e === 3759263696 ? new Error("Encrypted ZIP") : new Error("Unexpected signature");
    }
  }
  function xi(i, e) {
    const t = i.length, r = e.length;
    if (r > t) return -1;
    for (let n = 0; n <= t - r; n++) {
      let a = true;
      for (let s = 0; s < r; s++) if (i[n + s] !== e[s]) {
        a = false;
        break;
      }
      if (a) return n;
    }
    return -1;
  }
  function gi(i) {
    const e = i.reduce((n, a) => n + a.length, 0), t = new Uint8Array(e);
    let r = 0;
    for (const n of i) t.set(n, r), r += n.length;
    return t;
  }
  class Ti {
    constructor(e) {
      this.tokenizer = e;
    }
    inflate() {
      const e = this.tokenizer;
      return new ReadableStream({
        async pull(t) {
          const r = new Uint8Array(1024), n = await e.readBuffer(r, {
            mayBeLess: true
          });
          if (n === 0) {
            t.close();
            return;
          }
          t.enqueue(r.subarray(0, n));
        }
      }).pipeThrough(new DecompressionStream("gzip"));
    }
  }
  const wi = Object.prototype.toString, yi = "[object Uint8Array]";
  function bi(i, e, t) {
    return i ? i.constructor === e ? true : wi.call(i) === t : false;
  }
  function ki(i) {
    return bi(i, Uint8Array, yi);
  }
  function vi(i) {
    if (!ki(i)) throw new TypeError(`Expected \`Uint8Array\`, got \`${typeof i}\``);
  }
  new globalThis.TextDecoder("utf8");
  new globalThis.TextEncoder();
  const Ii = Array.from({
    length: 256
  }, (i, e) => e.toString(16).padStart(2, "0"));
  Tn = function(i) {
    vi(i);
    let e = "";
    for (let t = 0; t < i.length; t++) e += Ii[i[t]];
    return e;
  };
  function Ie(i) {
    const { byteLength: e } = i;
    if (e === 6) return i.getUint16(0) * 2 ** 32 + i.getUint32(2);
    if (e === 5) return i.getUint8(0) * 2 ** 32 + i.getUint32(1);
    if (e === 4) return i.getUint32(0);
    if (e === 3) return i.getUint8(0) * 2 ** 16 + i.getUint16(1);
    if (e === 2) return i.getUint16(0);
    if (e === 1) return i.getUint8(0);
  }
  function Ai(i, e) {
    if (e === "utf-16le") {
      const t = [];
      for (let r = 0; r < i.length; r++) {
        const n = i.charCodeAt(r);
        t.push(n & 255, n >> 8 & 255);
      }
      return t;
    }
    if (e === "utf-16be") {
      const t = [];
      for (let r = 0; r < i.length; r++) {
        const n = i.charCodeAt(r);
        t.push(n >> 8 & 255, n & 255);
      }
      return t;
    }
    return [
      ...i
    ].map((t) => t.charCodeAt(0));
  }
  function Ei(i, e = 0) {
    const t = Number.parseInt(new b(6).get(i, 148).replace(/\0.*$/, "").trim(), 8);
    if (Number.isNaN(t)) return false;
    let r = 256;
    for (let n = e; n < e + 148; n++) r += i[n];
    for (let n = e + 156; n < e + 512; n++) r += i[n];
    return t === r;
  }
  const Si = {
    get: (i, e) => i[e + 3] & 127 | i[e + 2] << 7 | i[e + 1] << 14 | i[e] << 21,
    len: 4
  }, Ci = [
    "jpg",
    "png",
    "apng",
    "gif",
    "webp",
    "flif",
    "xcf",
    "cr2",
    "cr3",
    "orf",
    "arw",
    "dng",
    "nef",
    "rw2",
    "raf",
    "tif",
    "bmp",
    "icns",
    "jxr",
    "psd",
    "indd",
    "zip",
    "tar",
    "rar",
    "gz",
    "bz2",
    "7z",
    "dmg",
    "mp4",
    "mid",
    "mkv",
    "webm",
    "mov",
    "avi",
    "mpg",
    "mp2",
    "mp3",
    "m4a",
    "oga",
    "ogg",
    "ogv",
    "opus",
    "flac",
    "wav",
    "spx",
    "amr",
    "pdf",
    "epub",
    "elf",
    "macho",
    "exe",
    "swf",
    "rtf",
    "wasm",
    "woff",
    "woff2",
    "eot",
    "ttf",
    "otf",
    "ttc",
    "ico",
    "flv",
    "ps",
    "xz",
    "sqlite",
    "nes",
    "crx",
    "xpi",
    "cab",
    "deb",
    "ar",
    "rpm",
    "Z",
    "lz",
    "cfb",
    "mxf",
    "mts",
    "blend",
    "bpg",
    "docx",
    "pptx",
    "xlsx",
    "3gp",
    "3g2",
    "j2c",
    "jp2",
    "jpm",
    "jpx",
    "mj2",
    "aif",
    "qcp",
    "odt",
    "ods",
    "odp",
    "xml",
    "mobi",
    "heic",
    "cur",
    "ktx",
    "ape",
    "wv",
    "dcm",
    "ics",
    "glb",
    "pcap",
    "dsf",
    "lnk",
    "alias",
    "voc",
    "ac3",
    "m4v",
    "m4p",
    "m4b",
    "f4v",
    "f4p",
    "f4b",
    "f4a",
    "mie",
    "asf",
    "ogm",
    "ogx",
    "mpc",
    "arrow",
    "shp",
    "aac",
    "mp1",
    "it",
    "s3m",
    "xm",
    "skp",
    "avif",
    "eps",
    "lzh",
    "pgp",
    "asar",
    "stl",
    "chm",
    "3mf",
    "zst",
    "jxl",
    "vcf",
    "jls",
    "pst",
    "dwg",
    "parquet",
    "class",
    "arj",
    "cpio",
    "ace",
    "avro",
    "icc",
    "fbx",
    "vsdx",
    "vtt",
    "apk",
    "drc",
    "lz4",
    "potx",
    "xltx",
    "dotx",
    "xltm",
    "ott",
    "ots",
    "otp",
    "odg",
    "otg",
    "xlsm",
    "docm",
    "dotm",
    "potm",
    "pptm",
    "jar",
    "jmp",
    "rm",
    "sav",
    "ppsm",
    "ppsx",
    "tar.gz",
    "reg",
    "dat"
  ], _i = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/flif",
    "image/x-xcf",
    "image/x-canon-cr2",
    "image/x-canon-cr3",
    "image/tiff",
    "image/bmp",
    "image/vnd.ms-photo",
    "image/vnd.adobe.photoshop",
    "application/x-indesign",
    "application/epub+zip",
    "application/x-xpinstall",
    "application/vnd.ms-powerpoint.slideshow.macroenabled.12",
    "application/vnd.oasis.opendocument.text",
    "application/vnd.oasis.opendocument.spreadsheet",
    "application/vnd.oasis.opendocument.presentation",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
    "application/zip",
    "application/x-tar",
    "application/x-rar-compressed",
    "application/gzip",
    "application/x-bzip2",
    "application/x-7z-compressed",
    "application/x-apple-diskimage",
    "application/vnd.apache.arrow.file",
    "video/mp4",
    "audio/midi",
    "video/matroska",
    "video/webm",
    "video/quicktime",
    "video/vnd.avi",
    "audio/wav",
    "audio/qcelp",
    "audio/x-ms-asf",
    "video/x-ms-asf",
    "application/vnd.ms-asf",
    "video/mpeg",
    "video/3gpp",
    "audio/mpeg",
    "audio/mp4",
    "video/ogg",
    "audio/ogg",
    "audio/ogg; codecs=opus",
    "application/ogg",
    "audio/flac",
    "audio/ape",
    "audio/wavpack",
    "audio/amr",
    "application/pdf",
    "application/x-elf",
    "application/x-mach-binary",
    "application/x-msdownload",
    "application/x-shockwave-flash",
    "application/rtf",
    "application/wasm",
    "font/woff",
    "font/woff2",
    "application/vnd.ms-fontobject",
    "font/ttf",
    "font/otf",
    "font/collection",
    "image/x-icon",
    "video/x-flv",
    "application/postscript",
    "application/eps",
    "application/x-xz",
    "application/x-sqlite3",
    "application/x-nintendo-nes-rom",
    "application/x-google-chrome-extension",
    "application/vnd.ms-cab-compressed",
    "application/x-deb",
    "application/x-unix-archive",
    "application/x-rpm",
    "application/x-compress",
    "application/x-lzip",
    "application/x-cfb",
    "application/x-mie",
    "application/mxf",
    "video/mp2t",
    "application/x-blender",
    "image/bpg",
    "image/j2c",
    "image/jp2",
    "image/jpx",
    "image/jpm",
    "image/mj2",
    "audio/aiff",
    "application/xml",
    "application/x-mobipocket-ebook",
    "image/heif",
    "image/heif-sequence",
    "image/heic",
    "image/heic-sequence",
    "image/icns",
    "image/ktx",
    "application/dicom",
    "audio/x-musepack",
    "text/calendar",
    "text/vcard",
    "text/vtt",
    "model/gltf-binary",
    "application/vnd.tcpdump.pcap",
    "audio/x-dsf",
    "application/x.ms.shortcut",
    "application/x.apple.alias",
    "audio/x-voc",
    "audio/vnd.dolby.dd-raw",
    "audio/x-m4a",
    "image/apng",
    "image/x-olympus-orf",
    "image/x-sony-arw",
    "image/x-adobe-dng",
    "image/x-nikon-nef",
    "image/x-panasonic-rw2",
    "image/x-fujifilm-raf",
    "video/x-m4v",
    "video/3gpp2",
    "application/x-esri-shape",
    "audio/aac",
    "audio/x-it",
    "audio/x-s3m",
    "audio/x-xm",
    "video/MP1S",
    "video/MP2P",
    "application/vnd.sketchup.skp",
    "image/avif",
    "application/x-lzh-compressed",
    "application/pgp-encrypted",
    "application/x-asar",
    "model/stl",
    "application/vnd.ms-htmlhelp",
    "model/3mf",
    "image/jxl",
    "application/zstd",
    "image/jls",
    "application/vnd.ms-outlook",
    "image/vnd.dwg",
    "application/vnd.apache.parquet",
    "application/java-vm",
    "application/x-arj",
    "application/x-cpio",
    "application/x-ace-compressed",
    "application/avro",
    "application/vnd.iccprofile",
    "application/x.autodesk.fbx",
    "application/vnd.visio",
    "application/vnd.android.package-archive",
    "application/vnd.google.draco",
    "application/x-lz4",
    "application/vnd.openxmlformats-officedocument.presentationml.template",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
    "application/vnd.ms-excel.template.macroenabled.12",
    "application/vnd.oasis.opendocument.text-template",
    "application/vnd.oasis.opendocument.spreadsheet-template",
    "application/vnd.oasis.opendocument.presentation-template",
    "application/vnd.oasis.opendocument.graphics",
    "application/vnd.oasis.opendocument.graphics-template",
    "application/vnd.ms-excel.sheet.macroenabled.12",
    "application/vnd.ms-word.document.macroenabled.12",
    "application/vnd.ms-word.template.macroenabled.12",
    "application/vnd.ms-powerpoint.template.macroenabled.12",
    "application/vnd.ms-powerpoint.presentation.macroenabled.12",
    "application/java-archive",
    "application/vnd.rn-realmedia",
    "application/x-spss-sav",
    "application/x-ms-regedit",
    "application/x-ft-windows-registry-hive",
    "application/x-jmp-data"
  ], we = 4100;
  async function ot(i, e) {
    return new Ri(e).fromBuffer(i);
  }
  function ye(i) {
    switch (i = i.toLowerCase(), i) {
      case "application/epub+zip":
        return {
          ext: "epub",
          mime: i
        };
      case "application/vnd.oasis.opendocument.text":
        return {
          ext: "odt",
          mime: i
        };
      case "application/vnd.oasis.opendocument.text-template":
        return {
          ext: "ott",
          mime: i
        };
      case "application/vnd.oasis.opendocument.spreadsheet":
        return {
          ext: "ods",
          mime: i
        };
      case "application/vnd.oasis.opendocument.spreadsheet-template":
        return {
          ext: "ots",
          mime: i
        };
      case "application/vnd.oasis.opendocument.presentation":
        return {
          ext: "odp",
          mime: i
        };
      case "application/vnd.oasis.opendocument.presentation-template":
        return {
          ext: "otp",
          mime: i
        };
      case "application/vnd.oasis.opendocument.graphics":
        return {
          ext: "odg",
          mime: i
        };
      case "application/vnd.oasis.opendocument.graphics-template":
        return {
          ext: "otg",
          mime: i
        };
      case "application/vnd.openxmlformats-officedocument.presentationml.slideshow":
        return {
          ext: "ppsx",
          mime: i
        };
      case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
        return {
          ext: "xlsx",
          mime: i
        };
      case "application/vnd.ms-excel.sheet.macroenabled":
        return {
          ext: "xlsm",
          mime: "application/vnd.ms-excel.sheet.macroenabled.12"
        };
      case "application/vnd.openxmlformats-officedocument.spreadsheetml.template":
        return {
          ext: "xltx",
          mime: i
        };
      case "application/vnd.ms-excel.template.macroenabled":
        return {
          ext: "xltm",
          mime: "application/vnd.ms-excel.template.macroenabled.12"
        };
      case "application/vnd.ms-powerpoint.slideshow.macroenabled":
        return {
          ext: "ppsm",
          mime: "application/vnd.ms-powerpoint.slideshow.macroenabled.12"
        };
      case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        return {
          ext: "docx",
          mime: i
        };
      case "application/vnd.ms-word.document.macroenabled":
        return {
          ext: "docm",
          mime: "application/vnd.ms-word.document.macroenabled.12"
        };
      case "application/vnd.openxmlformats-officedocument.wordprocessingml.template":
        return {
          ext: "dotx",
          mime: i
        };
      case "application/vnd.ms-word.template.macroenabledtemplate":
        return {
          ext: "dotm",
          mime: "application/vnd.ms-word.template.macroenabled.12"
        };
      case "application/vnd.openxmlformats-officedocument.presentationml.template":
        return {
          ext: "potx",
          mime: i
        };
      case "application/vnd.ms-powerpoint.template.macroenabled":
        return {
          ext: "potm",
          mime: "application/vnd.ms-powerpoint.template.macroenabled.12"
        };
      case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        return {
          ext: "pptx",
          mime: i
        };
      case "application/vnd.ms-powerpoint.presentation.macroenabled":
        return {
          ext: "pptm",
          mime: "application/vnd.ms-powerpoint.presentation.macroenabled.12"
        };
      case "application/vnd.ms-visio.drawing":
        return {
          ext: "vsdx",
          mime: "application/vnd.visio"
        };
      case "application/vnd.ms-package.3dmanufacturing-3dmodel+xml":
        return {
          ext: "3mf",
          mime: "model/3mf"
        };
    }
  }
  function _(i, e, t) {
    t = {
      offset: 0,
      ...t
    };
    for (const [r, n] of e.entries()) if (t.mask) {
      if (n !== (t.mask[r] & i[r + t.offset])) return false;
    } else if (n !== i[r + t.offset]) return false;
    return true;
  }
  class Ri {
    constructor(e) {
      __publicField(this, "detectConfident", async (e) => {
        if (this.buffer = new Uint8Array(we), e.fileInfo.size === void 0 && (e.fileInfo.size = Number.MAX_SAFE_INTEGER), this.tokenizer = e, await e.peekBuffer(this.buffer, {
          length: 32,
          mayBeLess: true
        }), this.check([
          66,
          77
        ])) return {
          ext: "bmp",
          mime: "image/bmp"
        };
        if (this.check([
          11,
          119
        ])) return {
          ext: "ac3",
          mime: "audio/vnd.dolby.dd-raw"
        };
        if (this.check([
          120,
          1
        ])) return {
          ext: "dmg",
          mime: "application/x-apple-diskimage"
        };
        if (this.check([
          77,
          90
        ])) return {
          ext: "exe",
          mime: "application/x-msdownload"
        };
        if (this.check([
          37,
          33
        ])) return await e.peekBuffer(this.buffer, {
          length: 24,
          mayBeLess: true
        }), this.checkString("PS-Adobe-", {
          offset: 2
        }) && this.checkString(" EPSF-", {
          offset: 14
        }) ? {
          ext: "eps",
          mime: "application/eps"
        } : {
          ext: "ps",
          mime: "application/postscript"
        };
        if (this.check([
          31,
          160
        ]) || this.check([
          31,
          157
        ])) return {
          ext: "Z",
          mime: "application/x-compress"
        };
        if (this.check([
          199,
          113
        ])) return {
          ext: "cpio",
          mime: "application/x-cpio"
        };
        if (this.check([
          96,
          234
        ])) return {
          ext: "arj",
          mime: "application/x-arj"
        };
        if (this.check([
          239,
          187,
          191
        ])) return this.tokenizer.ignore(3), this.detectConfident(e);
        if (this.check([
          71,
          73,
          70
        ])) return {
          ext: "gif",
          mime: "image/gif"
        };
        if (this.check([
          73,
          73,
          188
        ])) return {
          ext: "jxr",
          mime: "image/vnd.ms-photo"
        };
        if (this.check([
          31,
          139,
          8
        ])) {
          const r = new Ti(e).inflate();
          let n = true;
          try {
            let a;
            try {
              a = await this.fromStream(r);
            } catch {
              n = false;
            }
            if (a && a.ext === "tar") return {
              ext: "tar.gz",
              mime: "application/gzip"
            };
          } finally {
            n && await r.cancel();
          }
          return {
            ext: "gz",
            mime: "application/gzip"
          };
        }
        if (this.check([
          66,
          90,
          104
        ])) return {
          ext: "bz2",
          mime: "application/x-bzip2"
        };
        if (this.checkString("ID3")) {
          await e.ignore(6);
          const t = await e.readToken(Si);
          return e.position + t > e.fileInfo.size ? {
            ext: "mp3",
            mime: "audio/mpeg"
          } : (await e.ignore(t), this.fromTokenizer(e));
        }
        if (this.checkString("MP+")) return {
          ext: "mpc",
          mime: "audio/x-musepack"
        };
        if ((this.buffer[0] === 67 || this.buffer[0] === 70) && this.check([
          87,
          83
        ], {
          offset: 1
        })) return {
          ext: "swf",
          mime: "application/x-shockwave-flash"
        };
        if (this.check([
          255,
          216,
          255
        ])) return this.check([
          247
        ], {
          offset: 3
        }) ? {
          ext: "jls",
          mime: "image/jls"
        } : {
          ext: "jpg",
          mime: "image/jpeg"
        };
        if (this.check([
          79,
          98,
          106,
          1
        ])) return {
          ext: "avro",
          mime: "application/avro"
        };
        if (this.checkString("FLIF")) return {
          ext: "flif",
          mime: "image/flif"
        };
        if (this.checkString("8BPS")) return {
          ext: "psd",
          mime: "image/vnd.adobe.photoshop"
        };
        if (this.checkString("MPCK")) return {
          ext: "mpc",
          mime: "audio/x-musepack"
        };
        if (this.checkString("FORM")) return {
          ext: "aif",
          mime: "audio/aiff"
        };
        if (this.checkString("icns", {
          offset: 0
        })) return {
          ext: "icns",
          mime: "image/icns"
        };
        if (this.check([
          80,
          75,
          3,
          4
        ])) {
          let t;
          return await new Ce(e).unzip((r) => {
            switch (r.filename) {
              case "META-INF/mozilla.rsa":
                return t = {
                  ext: "xpi",
                  mime: "application/x-xpinstall"
                }, {
                  stop: true
                };
              case "META-INF/MANIFEST.MF":
                return t = {
                  ext: "jar",
                  mime: "application/java-archive"
                }, {
                  stop: true
                };
              case "mimetype":
                return {
                  async handler(n) {
                    const a = new TextDecoder("utf-8").decode(n).trim();
                    t = ye(a);
                  },
                  stop: true
                };
              case "[Content_Types].xml":
                return {
                  async handler(n) {
                    let a = new TextDecoder("utf-8").decode(n);
                    const s = a.indexOf('.main+xml"');
                    if (s === -1) {
                      const l = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml";
                      a.includes(`ContentType="${l}"`) && (t = ye(l));
                    } else {
                      a = a.slice(0, Math.max(0, s));
                      const l = a.lastIndexOf('"'), m = a.slice(Math.max(0, l + 1));
                      t = ye(m);
                    }
                  },
                  stop: true
                };
              default:
                return /classes\d*\.dex/.test(r.filename) ? (t = {
                  ext: "apk",
                  mime: "application/vnd.android.package-archive"
                }, {
                  stop: true
                }) : {};
            }
          }).catch((r) => {
            if (!(r instanceof I)) throw r;
          }), t ?? {
            ext: "zip",
            mime: "application/zip"
          };
        }
        if (this.checkString("OggS")) {
          await e.ignore(28);
          const t = new Uint8Array(8);
          return await e.readBuffer(t), _(t, [
            79,
            112,
            117,
            115,
            72,
            101,
            97,
            100
          ]) ? {
            ext: "opus",
            mime: "audio/ogg; codecs=opus"
          } : _(t, [
            128,
            116,
            104,
            101,
            111,
            114,
            97
          ]) ? {
            ext: "ogv",
            mime: "video/ogg"
          } : _(t, [
            1,
            118,
            105,
            100,
            101,
            111,
            0
          ]) ? {
            ext: "ogm",
            mime: "video/ogg"
          } : _(t, [
            127,
            70,
            76,
            65,
            67
          ]) ? {
            ext: "oga",
            mime: "audio/ogg"
          } : _(t, [
            83,
            112,
            101,
            101,
            120,
            32,
            32
          ]) ? {
            ext: "spx",
            mime: "audio/ogg"
          } : _(t, [
            1,
            118,
            111,
            114,
            98,
            105,
            115
          ]) ? {
            ext: "ogg",
            mime: "audio/ogg"
          } : {
            ext: "ogx",
            mime: "application/ogg"
          };
        }
        if (this.check([
          80,
          75
        ]) && (this.buffer[2] === 3 || this.buffer[2] === 5 || this.buffer[2] === 7) && (this.buffer[3] === 4 || this.buffer[3] === 6 || this.buffer[3] === 8)) return {
          ext: "zip",
          mime: "application/zip"
        };
        if (this.checkString("MThd")) return {
          ext: "mid",
          mime: "audio/midi"
        };
        if (this.checkString("wOFF") && (this.check([
          0,
          1,
          0,
          0
        ], {
          offset: 4
        }) || this.checkString("OTTO", {
          offset: 4
        }))) return {
          ext: "woff",
          mime: "font/woff"
        };
        if (this.checkString("wOF2") && (this.check([
          0,
          1,
          0,
          0
        ], {
          offset: 4
        }) || this.checkString("OTTO", {
          offset: 4
        }))) return {
          ext: "woff2",
          mime: "font/woff2"
        };
        if (this.check([
          212,
          195,
          178,
          161
        ]) || this.check([
          161,
          178,
          195,
          212
        ])) return {
          ext: "pcap",
          mime: "application/vnd.tcpdump.pcap"
        };
        if (this.checkString("DSD ")) return {
          ext: "dsf",
          mime: "audio/x-dsf"
        };
        if (this.checkString("LZIP")) return {
          ext: "lz",
          mime: "application/x-lzip"
        };
        if (this.checkString("fLaC")) return {
          ext: "flac",
          mime: "audio/flac"
        };
        if (this.check([
          66,
          80,
          71,
          251
        ])) return {
          ext: "bpg",
          mime: "image/bpg"
        };
        if (this.checkString("wvpk")) return {
          ext: "wv",
          mime: "audio/wavpack"
        };
        if (this.checkString("%PDF")) return {
          ext: "pdf",
          mime: "application/pdf"
        };
        if (this.check([
          0,
          97,
          115,
          109
        ])) return {
          ext: "wasm",
          mime: "application/wasm"
        };
        if (this.check([
          73,
          73
        ])) {
          const t = await this.readTiffHeader(false);
          if (t) return t;
        }
        if (this.check([
          77,
          77
        ])) {
          const t = await this.readTiffHeader(true);
          if (t) return t;
        }
        if (this.checkString("MAC ")) return {
          ext: "ape",
          mime: "audio/ape"
        };
        if (this.check([
          26,
          69,
          223,
          163
        ])) {
          async function t() {
            const l = await e.peekNumber(N);
            let m = 128, d = 0;
            for (; (l & m) === 0 && m !== 0; ) ++d, m >>= 1;
            const c = new Uint8Array(d + 1);
            return await e.readBuffer(c), c;
          }
          async function r() {
            const l = await t(), m = await t();
            m[0] ^= 128 >> m.length - 1;
            const d = Math.min(6, m.length), c = new DataView(l.buffer), o = new DataView(m.buffer, m.length - d, d);
            return {
              id: Ie(c),
              len: Ie(o)
            };
          }
          async function n(l) {
            for (; l > 0; ) {
              const m = await r();
              if (m.id === 17026) return (await e.readToken(new b(m.len))).replaceAll(/\00.*$/g, "");
              await e.ignore(m.len), --l;
            }
          }
          const a = await r();
          switch (await n(a.len)) {
            case "webm":
              return {
                ext: "webm",
                mime: "video/webm"
              };
            case "matroska":
              return {
                ext: "mkv",
                mime: "video/matroska"
              };
            default:
              return;
          }
        }
        if (this.checkString("SQLi")) return {
          ext: "sqlite",
          mime: "application/x-sqlite3"
        };
        if (this.check([
          78,
          69,
          83,
          26
        ])) return {
          ext: "nes",
          mime: "application/x-nintendo-nes-rom"
        };
        if (this.checkString("Cr24")) return {
          ext: "crx",
          mime: "application/x-google-chrome-extension"
        };
        if (this.checkString("MSCF") || this.checkString("ISc(")) return {
          ext: "cab",
          mime: "application/vnd.ms-cab-compressed"
        };
        if (this.check([
          237,
          171,
          238,
          219
        ])) return {
          ext: "rpm",
          mime: "application/x-rpm"
        };
        if (this.check([
          197,
          208,
          211,
          198
        ])) return {
          ext: "eps",
          mime: "application/eps"
        };
        if (this.check([
          40,
          181,
          47,
          253
        ])) return {
          ext: "zst",
          mime: "application/zstd"
        };
        if (this.check([
          127,
          69,
          76,
          70
        ])) return {
          ext: "elf",
          mime: "application/x-elf"
        };
        if (this.check([
          33,
          66,
          68,
          78
        ])) return {
          ext: "pst",
          mime: "application/vnd.ms-outlook"
        };
        if (this.checkString("PAR1") || this.checkString("PARE")) return {
          ext: "parquet",
          mime: "application/vnd.apache.parquet"
        };
        if (this.checkString("ttcf")) return {
          ext: "ttc",
          mime: "font/collection"
        };
        if (this.check([
          254,
          237,
          250,
          206
        ]) || this.check([
          254,
          237,
          250,
          207
        ]) || this.check([
          206,
          250,
          237,
          254
        ]) || this.check([
          207,
          250,
          237,
          254
        ])) return {
          ext: "macho",
          mime: "application/x-mach-binary"
        };
        if (this.check([
          4,
          34,
          77,
          24
        ])) return {
          ext: "lz4",
          mime: "application/x-lz4"
        };
        if (this.checkString("regf")) return {
          ext: "dat",
          mime: "application/x-ft-windows-registry-hive"
        };
        if (this.checkString("$FL2") || this.checkString("$FL3")) return {
          ext: "sav",
          mime: "application/x-spss-sav"
        };
        if (this.check([
          79,
          84,
          84,
          79,
          0
        ])) return {
          ext: "otf",
          mime: "font/otf"
        };
        if (this.checkString("#!AMR")) return {
          ext: "amr",
          mime: "audio/amr"
        };
        if (this.checkString("{\\rtf")) return {
          ext: "rtf",
          mime: "application/rtf"
        };
        if (this.check([
          70,
          76,
          86,
          1
        ])) return {
          ext: "flv",
          mime: "video/x-flv"
        };
        if (this.checkString("IMPM")) return {
          ext: "it",
          mime: "audio/x-it"
        };
        if (this.checkString("-lh0-", {
          offset: 2
        }) || this.checkString("-lh1-", {
          offset: 2
        }) || this.checkString("-lh2-", {
          offset: 2
        }) || this.checkString("-lh3-", {
          offset: 2
        }) || this.checkString("-lh4-", {
          offset: 2
        }) || this.checkString("-lh5-", {
          offset: 2
        }) || this.checkString("-lh6-", {
          offset: 2
        }) || this.checkString("-lh7-", {
          offset: 2
        }) || this.checkString("-lzs-", {
          offset: 2
        }) || this.checkString("-lz4-", {
          offset: 2
        }) || this.checkString("-lz5-", {
          offset: 2
        }) || this.checkString("-lhd-", {
          offset: 2
        })) return {
          ext: "lzh",
          mime: "application/x-lzh-compressed"
        };
        if (this.check([
          0,
          0,
          1,
          186
        ])) {
          if (this.check([
            33
          ], {
            offset: 4,
            mask: [
              241
            ]
          })) return {
            ext: "mpg",
            mime: "video/MP1S"
          };
          if (this.check([
            68
          ], {
            offset: 4,
            mask: [
              196
            ]
          })) return {
            ext: "mpg",
            mime: "video/MP2P"
          };
        }
        if (this.checkString("ITSF")) return {
          ext: "chm",
          mime: "application/vnd.ms-htmlhelp"
        };
        if (this.check([
          202,
          254,
          186,
          190
        ])) {
          const t = V.get(this.buffer, 4), r = D.get(this.buffer, 6);
          if (t > 0 && t <= 30) return {
            ext: "macho",
            mime: "application/x-mach-binary"
          };
          if (r > 30) return {
            ext: "class",
            mime: "application/java-vm"
          };
        }
        if (this.checkString(".RMF")) return {
          ext: "rm",
          mime: "application/vnd.rn-realmedia"
        };
        if (this.checkString("DRACO")) return {
          ext: "drc",
          mime: "application/vnd.google.draco"
        };
        if (this.check([
          253,
          55,
          122,
          88,
          90,
          0
        ])) return {
          ext: "xz",
          mime: "application/x-xz"
        };
        if (this.checkString("<?xml ")) return {
          ext: "xml",
          mime: "application/xml"
        };
        if (this.check([
          55,
          122,
          188,
          175,
          39,
          28
        ])) return {
          ext: "7z",
          mime: "application/x-7z-compressed"
        };
        if (this.check([
          82,
          97,
          114,
          33,
          26,
          7
        ]) && (this.buffer[6] === 0 || this.buffer[6] === 1)) return {
          ext: "rar",
          mime: "application/x-rar-compressed"
        };
        if (this.checkString("solid ")) return {
          ext: "stl",
          mime: "model/stl"
        };
        if (this.checkString("AC")) {
          const t = new b(4, "latin1").get(this.buffer, 2);
          if (t.match("^d*") && t >= 1e3 && t <= 1050) return {
            ext: "dwg",
            mime: "image/vnd.dwg"
          };
        }
        if (this.checkString("070707")) return {
          ext: "cpio",
          mime: "application/x-cpio"
        };
        if (this.checkString("BLENDER")) return {
          ext: "blend",
          mime: "application/x-blender"
        };
        if (this.checkString("!<arch>")) return await e.ignore(8), await e.readToken(new b(13, "ascii")) === "debian-binary" ? {
          ext: "deb",
          mime: "application/x-deb"
        } : {
          ext: "ar",
          mime: "application/x-unix-archive"
        };
        if (this.checkString("WEBVTT") && [
          `
`,
          "\r",
          "	",
          " ",
          "\0"
        ].some((t) => this.checkString(t, {
          offset: 6
        }))) return {
          ext: "vtt",
          mime: "text/vtt"
        };
        if (this.check([
          137,
          80,
          78,
          71,
          13,
          10,
          26,
          10
        ])) {
          await e.ignore(8);
          async function t() {
            return {
              length: await e.readToken(rt),
              type: await e.readToken(new b(4, "latin1"))
            };
          }
          do {
            const r = await t();
            if (r.length < 0) return;
            switch (r.type) {
              case "IDAT":
                return {
                  ext: "png",
                  mime: "image/png"
                };
              case "acTL":
                return {
                  ext: "apng",
                  mime: "image/apng"
                };
              default:
                await e.ignore(r.length + 4);
            }
          } while (e.position + 8 < e.fileInfo.size);
          return {
            ext: "png",
            mime: "image/png"
          };
        }
        if (this.check([
          65,
          82,
          82,
          79,
          87,
          49,
          0,
          0
        ])) return {
          ext: "arrow",
          mime: "application/vnd.apache.arrow.file"
        };
        if (this.check([
          103,
          108,
          84,
          70,
          2,
          0,
          0,
          0
        ])) return {
          ext: "glb",
          mime: "model/gltf-binary"
        };
        if (this.check([
          102,
          114,
          101,
          101
        ], {
          offset: 4
        }) || this.check([
          109,
          100,
          97,
          116
        ], {
          offset: 4
        }) || this.check([
          109,
          111,
          111,
          118
        ], {
          offset: 4
        }) || this.check([
          119,
          105,
          100,
          101
        ], {
          offset: 4
        })) return {
          ext: "mov",
          mime: "video/quicktime"
        };
        if (this.check([
          73,
          73,
          82,
          79,
          8,
          0,
          0,
          0,
          24
        ])) return {
          ext: "orf",
          mime: "image/x-olympus-orf"
        };
        if (this.checkString("gimp xcf ")) return {
          ext: "xcf",
          mime: "image/x-xcf"
        };
        if (this.checkString("ftyp", {
          offset: 4
        }) && (this.buffer[8] & 96) !== 0) {
          const t = new b(4, "latin1").get(this.buffer, 8).replace("\0", " ").trim();
          switch (t) {
            case "avif":
            case "avis":
              return {
                ext: "avif",
                mime: "image/avif"
              };
            case "mif1":
              return {
                ext: "heic",
                mime: "image/heif"
              };
            case "msf1":
              return {
                ext: "heic",
                mime: "image/heif-sequence"
              };
            case "heic":
            case "heix":
              return {
                ext: "heic",
                mime: "image/heic"
              };
            case "hevc":
            case "hevx":
              return {
                ext: "heic",
                mime: "image/heic-sequence"
              };
            case "qt":
              return {
                ext: "mov",
                mime: "video/quicktime"
              };
            case "M4V":
            case "M4VH":
            case "M4VP":
              return {
                ext: "m4v",
                mime: "video/x-m4v"
              };
            case "M4P":
              return {
                ext: "m4p",
                mime: "video/mp4"
              };
            case "M4B":
              return {
                ext: "m4b",
                mime: "audio/mp4"
              };
            case "M4A":
              return {
                ext: "m4a",
                mime: "audio/x-m4a"
              };
            case "F4V":
              return {
                ext: "f4v",
                mime: "video/mp4"
              };
            case "F4P":
              return {
                ext: "f4p",
                mime: "video/mp4"
              };
            case "F4A":
              return {
                ext: "f4a",
                mime: "audio/mp4"
              };
            case "F4B":
              return {
                ext: "f4b",
                mime: "audio/mp4"
              };
            case "crx":
              return {
                ext: "cr3",
                mime: "image/x-canon-cr3"
              };
            default:
              return t.startsWith("3g") ? t.startsWith("3g2") ? {
                ext: "3g2",
                mime: "video/3gpp2"
              } : {
                ext: "3gp",
                mime: "video/3gpp"
              } : {
                ext: "mp4",
                mime: "video/mp4"
              };
          }
        }
        if (this.checkString(`REGEDIT4\r
`)) return {
          ext: "reg",
          mime: "application/x-ms-regedit"
        };
        if (this.check([
          82,
          73,
          70,
          70
        ])) {
          if (this.checkString("WEBP", {
            offset: 8
          })) return {
            ext: "webp",
            mime: "image/webp"
          };
          if (this.check([
            65,
            86,
            73
          ], {
            offset: 8
          })) return {
            ext: "avi",
            mime: "video/vnd.avi"
          };
          if (this.check([
            87,
            65,
            86,
            69
          ], {
            offset: 8
          })) return {
            ext: "wav",
            mime: "audio/wav"
          };
          if (this.check([
            81,
            76,
            67,
            77
          ], {
            offset: 8
          })) return {
            ext: "qcp",
            mime: "audio/qcelp"
          };
        }
        if (this.check([
          73,
          73,
          85,
          0,
          24,
          0,
          0,
          0,
          136,
          231,
          116,
          216
        ])) return {
          ext: "rw2",
          mime: "image/x-panasonic-rw2"
        };
        if (this.check([
          48,
          38,
          178,
          117,
          142,
          102,
          207,
          17,
          166,
          217
        ])) {
          async function t() {
            const r = new Uint8Array(16);
            return await e.readBuffer(r), {
              id: r,
              size: Number(await e.readToken(nt))
            };
          }
          for (await e.ignore(30); e.position + 24 < e.fileInfo.size; ) {
            const r = await t();
            let n = r.size - 24;
            if (_(r.id, [
              145,
              7,
              220,
              183,
              183,
              169,
              207,
              17,
              142,
              230,
              0,
              192,
              12,
              32,
              83,
              101
            ])) {
              const a = new Uint8Array(16);
              if (n -= await e.readBuffer(a), _(a, [
                64,
                158,
                105,
                248,
                77,
                91,
                207,
                17,
                168,
                253,
                0,
                128,
                95,
                92,
                68,
                43
              ])) return {
                ext: "asf",
                mime: "audio/x-ms-asf"
              };
              if (_(a, [
                192,
                239,
                25,
                188,
                77,
                91,
                207,
                17,
                168,
                253,
                0,
                128,
                95,
                92,
                68,
                43
              ])) return {
                ext: "asf",
                mime: "video/x-ms-asf"
              };
              break;
            }
            await e.ignore(n);
          }
          return {
            ext: "asf",
            mime: "application/vnd.ms-asf"
          };
        }
        if (this.check([
          171,
          75,
          84,
          88,
          32,
          49,
          49,
          187,
          13,
          10,
          26,
          10
        ])) return {
          ext: "ktx",
          mime: "image/ktx"
        };
        if ((this.check([
          126,
          16,
          4
        ]) || this.check([
          126,
          24,
          4
        ])) && this.check([
          48,
          77,
          73,
          69
        ], {
          offset: 4
        })) return {
          ext: "mie",
          mime: "application/x-mie"
        };
        if (this.check([
          39,
          10,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ], {
          offset: 2
        })) return {
          ext: "shp",
          mime: "application/x-esri-shape"
        };
        if (this.check([
          255,
          79,
          255,
          81
        ])) return {
          ext: "j2c",
          mime: "image/j2c"
        };
        if (this.check([
          0,
          0,
          0,
          12,
          106,
          80,
          32,
          32,
          13,
          10,
          135,
          10
        ])) switch (await e.ignore(20), await e.readToken(new b(4, "ascii"))) {
          case "jp2 ":
            return {
              ext: "jp2",
              mime: "image/jp2"
            };
          case "jpx ":
            return {
              ext: "jpx",
              mime: "image/jpx"
            };
          case "jpm ":
            return {
              ext: "jpm",
              mime: "image/jpm"
            };
          case "mjp2":
            return {
              ext: "mj2",
              mime: "image/mj2"
            };
          default:
            return;
        }
        if (this.check([
          255,
          10
        ]) || this.check([
          0,
          0,
          0,
          12,
          74,
          88,
          76,
          32,
          13,
          10,
          135,
          10
        ])) return {
          ext: "jxl",
          mime: "image/jxl"
        };
        if (this.check([
          254,
          255
        ])) return this.checkString("<?xml ", {
          offset: 2,
          encoding: "utf-16be"
        }) ? {
          ext: "xml",
          mime: "application/xml"
        } : void 0;
        if (this.check([
          208,
          207,
          17,
          224,
          161,
          177,
          26,
          225
        ])) return {
          ext: "cfb",
          mime: "application/x-cfb"
        };
        if (await e.peekBuffer(this.buffer, {
          length: Math.min(256, e.fileInfo.size),
          mayBeLess: true
        }), this.check([
          97,
          99,
          115,
          112
        ], {
          offset: 36
        })) return {
          ext: "icc",
          mime: "application/vnd.iccprofile"
        };
        if (this.checkString("**ACE", {
          offset: 7
        }) && this.checkString("**", {
          offset: 12
        })) return {
          ext: "ace",
          mime: "application/x-ace-compressed"
        };
        if (this.checkString("BEGIN:")) {
          if (this.checkString("VCARD", {
            offset: 6
          })) return {
            ext: "vcf",
            mime: "text/vcard"
          };
          if (this.checkString("VCALENDAR", {
            offset: 6
          })) return {
            ext: "ics",
            mime: "text/calendar"
          };
        }
        if (this.checkString("FUJIFILMCCD-RAW")) return {
          ext: "raf",
          mime: "image/x-fujifilm-raf"
        };
        if (this.checkString("Extended Module:")) return {
          ext: "xm",
          mime: "audio/x-xm"
        };
        if (this.checkString("Creative Voice File")) return {
          ext: "voc",
          mime: "audio/x-voc"
        };
        if (this.check([
          4,
          0,
          0,
          0
        ]) && this.buffer.length >= 16) {
          const t = new DataView(this.buffer.buffer).getUint32(12, true);
          if (t > 12 && this.buffer.length >= t + 16) try {
            const r = new TextDecoder().decode(this.buffer.subarray(16, t + 16));
            if (JSON.parse(r).files) return {
              ext: "asar",
              mime: "application/x-asar"
            };
          } catch {
          }
        }
        if (this.check([
          6,
          14,
          43,
          52,
          2,
          5,
          1,
          1,
          13,
          1,
          2,
          1,
          1,
          2
        ])) return {
          ext: "mxf",
          mime: "application/mxf"
        };
        if (this.checkString("SCRM", {
          offset: 44
        })) return {
          ext: "s3m",
          mime: "audio/x-s3m"
        };
        if (this.check([
          71
        ]) && this.check([
          71
        ], {
          offset: 188
        })) return {
          ext: "mts",
          mime: "video/mp2t"
        };
        if (this.check([
          71
        ], {
          offset: 4
        }) && this.check([
          71
        ], {
          offset: 196
        })) return {
          ext: "mts",
          mime: "video/mp2t"
        };
        if (this.check([
          66,
          79,
          79,
          75,
          77,
          79,
          66,
          73
        ], {
          offset: 60
        })) return {
          ext: "mobi",
          mime: "application/x-mobipocket-ebook"
        };
        if (this.check([
          68,
          73,
          67,
          77
        ], {
          offset: 128
        })) return {
          ext: "dcm",
          mime: "application/dicom"
        };
        if (this.check([
          76,
          0,
          0,
          0,
          1,
          20,
          2,
          0,
          0,
          0,
          0,
          0,
          192,
          0,
          0,
          0,
          0,
          0,
          0,
          70
        ])) return {
          ext: "lnk",
          mime: "application/x.ms.shortcut"
        };
        if (this.check([
          98,
          111,
          111,
          107,
          0,
          0,
          0,
          0,
          109,
          97,
          114,
          107,
          0,
          0,
          0,
          0
        ])) return {
          ext: "alias",
          mime: "application/x.apple.alias"
        };
        if (this.checkString("Kaydara FBX Binary  \0")) return {
          ext: "fbx",
          mime: "application/x.autodesk.fbx"
        };
        if (this.check([
          76,
          80
        ], {
          offset: 34
        }) && (this.check([
          0,
          0,
          1
        ], {
          offset: 8
        }) || this.check([
          1,
          0,
          2
        ], {
          offset: 8
        }) || this.check([
          2,
          0,
          2
        ], {
          offset: 8
        }))) return {
          ext: "eot",
          mime: "application/vnd.ms-fontobject"
        };
        if (this.check([
          6,
          6,
          237,
          245,
          216,
          29,
          70,
          229,
          189,
          49,
          239,
          231,
          254,
          116,
          183,
          29
        ])) return {
          ext: "indd",
          mime: "application/x-indesign"
        };
        if (this.check([
          255,
          255,
          0,
          0,
          7,
          0,
          0,
          0,
          4,
          0,
          0,
          0,
          1,
          0,
          1,
          0
        ]) || this.check([
          0,
          0,
          255,
          255,
          0,
          0,
          0,
          7,
          0,
          0,
          0,
          4,
          0,
          1,
          0,
          1
        ])) return {
          ext: "jmp",
          mime: "application/x-jmp-data"
        };
        if (await e.peekBuffer(this.buffer, {
          length: Math.min(512, e.fileInfo.size),
          mayBeLess: true
        }), this.checkString("ustar", {
          offset: 257
        }) && (this.checkString("\0", {
          offset: 262
        }) || this.checkString(" ", {
          offset: 262
        })) || this.check([
          0,
          0,
          0,
          0,
          0,
          0
        ], {
          offset: 257
        }) && Ei(this.buffer)) return {
          ext: "tar",
          mime: "application/x-tar"
        };
        if (this.check([
          255,
          254
        ])) {
          const t = "utf-16le";
          return this.checkString("<?xml ", {
            offset: 2,
            encoding: t
          }) ? {
            ext: "xml",
            mime: "application/xml"
          } : this.check([
            255,
            14
          ], {
            offset: 2
          }) && this.checkString("SketchUp Model", {
            offset: 4,
            encoding: t
          }) ? {
            ext: "skp",
            mime: "application/vnd.sketchup.skp"
          } : this.checkString(`Windows Registry Editor Version 5.00\r
`, {
            offset: 2,
            encoding: t
          }) ? {
            ext: "reg",
            mime: "application/x-ms-regedit"
          } : void 0;
        }
        if (this.checkString("-----BEGIN PGP MESSAGE-----")) return {
          ext: "pgp",
          mime: "application/pgp-encrypted"
        };
      });
      __publicField(this, "detectImprecise", async (e) => {
        if (this.buffer = new Uint8Array(we), await e.peekBuffer(this.buffer, {
          length: Math.min(8, e.fileInfo.size),
          mayBeLess: true
        }), this.check([
          0,
          0,
          1,
          186
        ]) || this.check([
          0,
          0,
          1,
          179
        ])) return {
          ext: "mpg",
          mime: "video/mpeg"
        };
        if (this.check([
          0,
          1,
          0,
          0,
          0
        ])) return {
          ext: "ttf",
          mime: "font/ttf"
        };
        if (this.check([
          0,
          0,
          1,
          0
        ])) return {
          ext: "ico",
          mime: "image/x-icon"
        };
        if (this.check([
          0,
          0,
          2,
          0
        ])) return {
          ext: "cur",
          mime: "image/x-icon"
        };
        if (await e.peekBuffer(this.buffer, {
          length: Math.min(2 + this.options.mpegOffsetTolerance, e.fileInfo.size),
          mayBeLess: true
        }), this.buffer.length >= 2 + this.options.mpegOffsetTolerance) for (let t = 0; t <= this.options.mpegOffsetTolerance; ++t) {
          const r = this.scanMpeg(t);
          if (r) return r;
        }
      });
      this.options = {
        mpegOffsetTolerance: 0,
        ...e
      }, this.detectors = [
        ...(e == null ? void 0 : e.customDetectors) ?? [],
        {
          id: "core",
          detect: this.detectConfident
        },
        {
          id: "core.imprecise",
          detect: this.detectImprecise
        }
      ], this.tokenizerOptions = {
        abortSignal: e == null ? void 0 : e.signal
      };
    }
    async fromTokenizer(e) {
      const t = e.position;
      for (const r of this.detectors) {
        const n = await r.detect(e);
        if (n) return n;
        if (t !== e.position) return;
      }
    }
    async fromBuffer(e) {
      if (!(e instanceof Uint8Array || e instanceof ArrayBuffer)) throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof e}\``);
      const t = e instanceof Uint8Array ? e : new Uint8Array(e);
      if ((t == null ? void 0 : t.length) > 1) return this.fromTokenizer(ke(t, this.tokenizerOptions));
    }
    async fromBlob(e) {
      const t = Je(e, this.tokenizerOptions);
      try {
        return await this.fromTokenizer(t);
      } finally {
        await t.close();
      }
    }
    async fromStream(e) {
      const t = _t(e, this.tokenizerOptions);
      try {
        return await this.fromTokenizer(t);
      } finally {
        await t.close();
      }
    }
    async toDetectionStream(e, t) {
      const { sampleSize: r = we } = t;
      let n, a;
      const s = e.getReader({
        mode: "byob"
      });
      try {
        const { value: d, done: c } = await s.read(new Uint8Array(r));
        if (a = d, !c && d) try {
          n = await this.fromBuffer(d.subarray(0, r));
        } catch (o) {
          if (!(o instanceof I)) throw o;
          n = void 0;
        }
        a = d;
      } finally {
        s.releaseLock();
      }
      const l = new TransformStream({
        async start(d) {
          d.enqueue(a);
        },
        transform(d, c) {
          c.enqueue(d);
        }
      }), m = e.pipeThrough(l);
      return m.fileType = n, m;
    }
    check(e, t) {
      return _(this.buffer, e, t);
    }
    checkString(e, t) {
      return this.check(Ai(e, t == null ? void 0 : t.encoding), t);
    }
    async readTiffTag(e) {
      const t = await this.tokenizer.readToken(e ? D : T);
      switch (this.tokenizer.ignore(10), t) {
        case 50341:
          return {
            ext: "arw",
            mime: "image/x-sony-arw"
          };
        case 50706:
          return {
            ext: "dng",
            mime: "image/x-adobe-dng"
          };
      }
    }
    async readTiffIFD(e) {
      const t = await this.tokenizer.readToken(e ? D : T);
      for (let r = 0; r < t; ++r) {
        const n = await this.readTiffTag(e);
        if (n) return n;
      }
    }
    async readTiffHeader(e) {
      const t = (e ? D : T).get(this.buffer, 2), r = (e ? V : x).get(this.buffer, 4);
      if (t === 42) {
        if (r >= 6) {
          if (this.checkString("CR", {
            offset: 8
          })) return {
            ext: "cr2",
            mime: "image/x-canon-cr2"
          };
          if (r >= 8) {
            const a = (e ? D : T).get(this.buffer, 8), s = (e ? D : T).get(this.buffer, 10);
            if (a === 28 && s === 254 || a === 31 && s === 11) return {
              ext: "nef",
              mime: "image/x-nikon-nef"
            };
          }
        }
        return await this.tokenizer.ignore(r), await this.readTiffIFD(e) ?? {
          ext: "tif",
          mime: "image/tiff"
        };
      }
      if (t === 43) return {
        ext: "tif",
        mime: "image/tiff"
      };
    }
    scanMpeg(e) {
      if (this.check([
        255,
        224
      ], {
        offset: e,
        mask: [
          255,
          224
        ]
      })) {
        if (this.check([
          16
        ], {
          offset: e + 1,
          mask: [
            22
          ]
        })) return this.check([
          8
        ], {
          offset: e + 1,
          mask: [
            8
          ]
        }) ? {
          ext: "aac",
          mime: "audio/aac"
        } : {
          ext: "aac",
          mime: "audio/aac"
        };
        if (this.check([
          2
        ], {
          offset: e + 1,
          mask: [
            6
          ]
        })) return {
          ext: "mp3",
          mime: "audio/mpeg"
        };
        if (this.check([
          4
        ], {
          offset: e + 1,
          mask: [
            6
          ]
        })) return {
          ext: "mp2",
          mime: "audio/mpeg"
        };
        if (this.check([
          6
        ], {
          offset: e + 1,
          mask: [
            6
          ]
        })) return {
          ext: "mp1",
          mime: "audio/mpeg"
        };
      }
    }
  }
  new Set(Ci);
  new Set(_i);
  var oe = {};
  var Ne;
  function Fi() {
    if (Ne) return oe;
    Ne = 1;
    var i = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g, e = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/, t = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/, r = /\\([\u000b\u0020-\u00ff])/g, n = /([\\"])/g, a = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
    oe.format = s, oe.parse = l;
    function s(o) {
      if (!o || typeof o != "object") throw new TypeError("argument obj is required");
      var u = o.parameters, f = o.type;
      if (!f || !a.test(f)) throw new TypeError("invalid type");
      var g = f;
      if (u && typeof u == "object") for (var k, y = Object.keys(u).sort(), w = 0; w < y.length; w++) {
        if (k = y[w], !t.test(k)) throw new TypeError("invalid parameter name");
        g += "; " + k + "=" + d(u[k]);
      }
      return g;
    }
    function l(o) {
      if (!o) throw new TypeError("argument string is required");
      var u = typeof o == "object" ? m(o) : o;
      if (typeof u != "string") throw new TypeError("argument string is required to be a string");
      var f = u.indexOf(";"), g = f !== -1 ? u.slice(0, f).trim() : u.trim();
      if (!a.test(g)) throw new TypeError("invalid media type");
      var k = new c(g.toLowerCase());
      if (f !== -1) {
        var y, w, v;
        for (i.lastIndex = f; w = i.exec(u); ) {
          if (w.index !== f) throw new TypeError("invalid parameter format");
          f += w[0].length, y = w[1].toLowerCase(), v = w[2], v.charCodeAt(0) === 34 && (v = v.slice(1, -1), v.indexOf("\\") !== -1 && (v = v.replace(r, "$1"))), k.parameters[y] = v;
        }
        if (f !== u.length) throw new TypeError("invalid parameter format");
      }
      return k;
    }
    function m(o) {
      var u;
      if (typeof o.getHeader == "function" ? u = o.getHeader("content-type") : typeof o.headers == "object" && (u = o.headers && o.headers["content-type"]), typeof u != "string") throw new TypeError("content-type header is missing from object");
      return u;
    }
    function d(o) {
      var u = String(o);
      if (t.test(u)) return u;
      if (u.length > 0 && !e.test(u)) throw new TypeError("invalid parameter value");
      return '"' + u.replace(n, "\\$1") + '"';
    }
    function c(o) {
      this.parameters = /* @__PURE__ */ Object.create(null), this.type = o;
    }
    return oe;
  }
  var Mi = Fi();
  const Di = Ze(Mi);
  var q = {};
  var Ue;
  function Bi() {
    if (Ue) return q;
    Ue = 1;
    var i = /^[A-Za-z0-9][A-Za-z0-9!#$&^_.-]{0,126}$/, e = /^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}$/, t = /^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;
    q.format = r, q.parse = a, q.test = n;
    function r(l) {
      if (!l || typeof l != "object") throw new TypeError("argument obj is required");
      var m = l.subtype, d = l.suffix, c = l.type;
      if (!c || !e.test(c)) throw new TypeError("invalid type");
      if (!m || !i.test(m)) throw new TypeError("invalid subtype");
      var o = c + "/" + m;
      if (d) {
        if (!e.test(d)) throw new TypeError("invalid suffix");
        o += "+" + d;
      }
      return o;
    }
    function n(l) {
      if (!l) throw new TypeError("argument string is required");
      if (typeof l != "string") throw new TypeError("argument string is required to be a string");
      return t.test(l.toLowerCase());
    }
    function a(l) {
      if (!l) throw new TypeError("argument string is required");
      if (typeof l != "string") throw new TypeError("argument string is required to be a string");
      var m = t.exec(l.toLowerCase());
      if (!m) throw new TypeError("invalid media type");
      var d = m[1], c = m[2], o, u = c.lastIndexOf("+");
      return u !== -1 && (o = c.substr(u + 1), c = c.substr(0, u)), new s(d, c, o);
    }
    function s(l, m, d) {
      this.type = l, this.subtype = m, this.suffix = d;
    }
    return q;
  }
  var Pi = Bi();
  let Li, J;
  wn = {
    10: "shot",
    20: "scene",
    30: "track",
    40: "part",
    50: "album",
    60: "edition",
    70: "collection"
  };
  F = {
    video: 1,
    audio: 2,
    complex: 3,
    logo: 4,
    subtitle: 17,
    button: 18,
    control: 32
  };
  Li = {
    [F.video]: "video",
    [F.audio]: "audio",
    [F.complex]: "complex",
    [F.logo]: "logo",
    [F.subtitle]: "subtitle",
    [F.button]: "button",
    [F.control]: "control"
  };
  J = (i) => class extends Error {
    constructor(t) {
      super(t), this.name = i;
    }
  };
  class Oi extends J("CouldNotDetermineFileTypeError") {
  }
  class zi extends J("UnsupportedFileTypeError") {
  }
  class Ni extends J("UnexpectedFileContentError") {
    constructor(e, t) {
      super(t), this.fileType = e;
    }
    toString() {
      return `${this.name} (FileType: ${this.fileType}): ${this.message}`;
    }
  }
  class _e extends J("FieldDecodingError") {
  }
  class ct extends J("InternalParserError") {
  }
  Ui = (i) => class extends Ni {
    constructor(e) {
      super(i, e);
    }
  };
  H = function(i, e, t) {
    return (i[e] & 1 << t) !== 0;
  };
  Xe = function(i, e) {
    const t = i.length;
    if (e === "utf-16le") {
      for (let r = 0; r + 1 < t; r += 2) if (i[r] === 0 && i[r + 1] === 0) return r;
      return t;
    }
    for (let r = 0; r < t; r++) if (i[r] === 0) return r;
    return t;
  };
  Xi = function(i) {
    const e = i.indexOf("\0");
    return e === -1 ? i : i.substring(0, e);
  };
  function Gi(i) {
    const e = i.length;
    if ((e & 1) !== 0) throw new _e("Buffer length must be even");
    for (let t = 0; t < e; t += 2) {
      const r = i[t];
      i[t] = i[t + 1], i[t + 1] = r;
    }
    return i;
  }
  Ae = function(i, e) {
    if (i[0] === 255 && i[1] === 254) return Ae(i.subarray(2), e);
    if (e === "utf-16le" && i[0] === 254 && i[1] === 255) {
      if ((i.length & 1) !== 0) throw new _e("Expected even number of octets for 16-bit unicode string");
      return Ae(Gi(i), e);
    }
    return new b(i.length, e).get(i, 0);
  };
  bn = function(i) {
    return i = i.replace(/^\x00+/g, ""), i = i.replace(/\x00+$/g, ""), i;
  };
  ut = function(i, e, t, r) {
    const n = e + ~~(t / 8), a = t % 8;
    let s = i[n];
    s &= 255 >> a;
    const l = 8 - a, m = r - l;
    return m < 0 ? s >>= 8 - a - r : m > 0 && (s <<= m, s |= ut(i, e, t + l, m)), s;
  };
  kn = function(i, e, t) {
    return ut(i, e, t, 1) === 1;
  };
  function $i(i) {
    const e = [];
    for (let t = 0, r = i.length; t < r; t++) {
      const n = Number(i.charCodeAt(t)).toString(16);
      e.push(n.length === 1 ? `0${n}` : n);
    }
    return e.join(" ");
  }
  function ji(i) {
    return 10 * Math.log10(i);
  }
  function Wi(i) {
    return 10 ** (i / 10);
  }
  function qi(i) {
    const e = i.split(" ").map((t) => t.trim().toLowerCase());
    if (e.length >= 1) {
      const t = Number.parseFloat(e[0]);
      return e.length === 2 && e[1] === "db" ? {
        dB: t,
        ratio: Wi(t)
      } : {
        dB: ji(t),
        ratio: t
      };
    }
  }
  vn = function(i) {
    if (i.length === 0) throw new Error("decodeUintBE: empty Uint8Array");
    const e = new DataView(i.buffer, i.byteOffset, i.byteLength);
    return Ie(e);
  };
  let lt, pt, p, de;
  In = {
    0: "Other",
    1: "32x32 pixels 'file icon' (PNG only)",
    2: "Other file icon",
    3: "Cover (front)",
    4: "Cover (back)",
    5: "Leaflet page",
    6: "Media (e.g. label side of CD)",
    7: "Lead artist/lead performer/soloist",
    8: "Artist/performer",
    9: "Conductor",
    10: "Band/Orchestra",
    11: "Composer",
    12: "Lyricist/text writer",
    13: "Recording Location",
    14: "During recording",
    15: "During performance",
    16: "Movie/video screen capture",
    17: "A bright coloured fish",
    18: "Illustration",
    19: "Band/artist logotype",
    20: "Publisher/Studio logotype"
  };
  lt = {
    lyrics: 1
  };
  pt = {
    notSynchronized: 0,
    milliseconds: 2
  };
  Hi = {
    get: (i, e) => i[e + 3] & 127 | i[e + 2] << 7 | i[e + 1] << 14 | i[e] << 21,
    len: 4
  };
  An = {
    len: 10,
    get: (i, e) => ({
      fileIdentifier: new b(3, "ascii").get(i, e),
      version: {
        major: ve.get(i, e + 3),
        revision: ve.get(i, e + 4)
      },
      flags: {
        unsynchronisation: H(i, e + 5, 7),
        isExtendedHeader: H(i, e + 5, 6),
        expIndicator: H(i, e + 5, 5),
        footer: H(i, e + 5, 4)
      },
      size: Hi.get(i, e + 6)
    })
  };
  En = {
    len: 10,
    get: (i, e) => ({
      size: V.get(i, e),
      extendedFlags: D.get(i, e + 4),
      sizeOfPadding: V.get(i, e + 6),
      crcDataPresent: H(i, e + 4, 31)
    })
  };
  Vi = {
    len: 1,
    get: (i, e) => {
      switch (i[e]) {
        case 0:
          return {
            encoding: "latin1"
          };
        case 1:
          return {
            encoding: "utf-16le",
            bom: true
          };
        case 2:
          return {
            encoding: "utf-16le",
            bom: false
          };
        case 3:
          return {
            encoding: "utf8",
            bom: false
          };
        default:
          return {
            encoding: "utf8",
            bom: false
          };
      }
    }
  };
  Yi = {
    len: 4,
    get: (i, e) => ({
      encoding: Vi.get(i, e),
      language: new b(3, "latin1").get(i, e + 1)
    })
  };
  Sn = {
    len: 6,
    get: (i, e) => {
      const t = Yi.get(i, e);
      return {
        encoding: t.encoding,
        language: t.language,
        timeStampFormat: N.get(i, e + 4),
        contentType: N.get(i, e + 5)
      };
    }
  };
  p = {
    multiple: false
  };
  de = {
    year: p,
    track: p,
    disk: p,
    title: p,
    artist: p,
    artists: {
      multiple: true,
      unique: true
    },
    albumartist: p,
    albumartists: {
      multiple: true,
      unique: true
    },
    album: p,
    date: p,
    originaldate: p,
    originalyear: p,
    releasedate: p,
    comment: {
      multiple: true,
      unique: false
    },
    genre: {
      multiple: true,
      unique: true
    },
    picture: {
      multiple: true,
      unique: true
    },
    composer: {
      multiple: true,
      unique: true
    },
    lyrics: {
      multiple: true,
      unique: false
    },
    albumsort: {
      multiple: false,
      unique: true
    },
    titlesort: {
      multiple: false,
      unique: true
    },
    work: {
      multiple: false,
      unique: true
    },
    artistsort: {
      multiple: false,
      unique: true
    },
    albumartistsort: {
      multiple: false,
      unique: true
    },
    composersort: {
      multiple: false,
      unique: true
    },
    lyricist: {
      multiple: true,
      unique: true
    },
    writer: {
      multiple: true,
      unique: true
    },
    conductor: {
      multiple: true,
      unique: true
    },
    remixer: {
      multiple: true,
      unique: true
    },
    arranger: {
      multiple: true,
      unique: true
    },
    engineer: {
      multiple: true,
      unique: true
    },
    producer: {
      multiple: true,
      unique: true
    },
    technician: {
      multiple: true,
      unique: true
    },
    djmixer: {
      multiple: true,
      unique: true
    },
    mixer: {
      multiple: true,
      unique: true
    },
    label: {
      multiple: true,
      unique: true
    },
    grouping: p,
    subtitle: {
      multiple: true
    },
    discsubtitle: p,
    totaltracks: p,
    totaldiscs: p,
    compilation: p,
    rating: {
      multiple: true
    },
    bpm: p,
    mood: p,
    media: p,
    catalognumber: {
      multiple: true,
      unique: true
    },
    tvShow: p,
    tvShowSort: p,
    tvSeason: p,
    tvEpisode: p,
    tvEpisodeId: p,
    tvNetwork: p,
    podcast: p,
    podcasturl: p,
    releasestatus: p,
    releasetype: {
      multiple: true
    },
    releasecountry: p,
    script: p,
    language: p,
    copyright: p,
    license: p,
    encodedby: p,
    encodersettings: p,
    gapless: p,
    barcode: p,
    isrc: {
      multiple: true
    },
    asin: p,
    musicbrainz_recordingid: p,
    musicbrainz_trackid: p,
    musicbrainz_albumid: p,
    musicbrainz_artistid: {
      multiple: true
    },
    musicbrainz_albumartistid: {
      multiple: true
    },
    musicbrainz_releasegroupid: p,
    musicbrainz_workid: p,
    musicbrainz_trmid: p,
    musicbrainz_discid: p,
    acoustid_id: p,
    acoustid_fingerprint: p,
    musicip_puid: p,
    musicip_fingerprint: p,
    website: p,
    "performer:instrument": {
      multiple: true,
      unique: true
    },
    averageLevel: p,
    peakLevel: p,
    notes: {
      multiple: true,
      unique: false
    },
    key: p,
    originalalbum: p,
    originalartist: p,
    discogs_artist_id: {
      multiple: true,
      unique: true
    },
    discogs_release_id: p,
    discogs_label_id: p,
    discogs_master_release_id: p,
    discogs_votes: p,
    discogs_rating: p,
    replaygain_track_peak: p,
    replaygain_track_gain: p,
    replaygain_album_peak: p,
    replaygain_album_gain: p,
    replaygain_track_minmax: p,
    replaygain_album_minmax: p,
    replaygain_undo: p,
    description: {
      multiple: true
    },
    longDescription: p,
    category: {
      multiple: true
    },
    hdVideo: p,
    keywords: {
      multiple: true
    },
    movement: p,
    movementIndex: p,
    movementTotal: p,
    podcastId: p,
    showMovement: p,
    stik: p,
    playCounter: p
  };
  function Zi(i) {
    return de[i] && !de[i].multiple;
  }
  function Ki(i) {
    return !de[i].multiple || de[i].unique || false;
  }
  class E {
    static toIntOrNull(e) {
      const t = Number.parseInt(e, 10);
      return Number.isNaN(t) ? null : t;
    }
    static normalizeTrack(e) {
      const t = e.toString().split("/");
      return {
        no: Number.parseInt(t[0], 10) || null,
        of: Number.parseInt(t[1], 10) || null
      };
    }
    constructor(e, t) {
      this.tagTypes = e, this.tagMap = t;
    }
    mapGenericTag(e, t) {
      e = {
        id: e.id,
        value: e.value
      }, this.postMap(e, t);
      const r = this.getCommonName(e.id);
      return r ? {
        id: r,
        value: e.value
      } : null;
    }
    getCommonName(e) {
      return this.tagMap[e];
    }
    postMap(e, t) {
    }
  }
  E.maxRatingScore = 1;
  const Ji = {
    title: "title",
    artist: "artist",
    album: "album",
    year: "year",
    comment: "comment",
    track: "track",
    genre: "genre"
  };
  class Qi extends E {
    constructor() {
      super([
        "ID3v1"
      ], Ji);
    }
  }
  class Q extends E {
    constructor(e, t) {
      const r = {};
      for (const n of Object.keys(t)) r[n.toUpperCase()] = t[n];
      super(e, r);
    }
    getCommonName(e) {
      return this.tagMap[e.toUpperCase()];
    }
  }
  const er = {
    TIT2: "title",
    TPE1: "artist",
    "TXXX:Artists": "artists",
    TPE2: "albumartist",
    TALB: "album",
    TDRV: "date",
    TORY: "originalyear",
    TPOS: "disk",
    TCON: "genre",
    APIC: "picture",
    TCOM: "composer",
    USLT: "lyrics",
    TSOA: "albumsort",
    TSOT: "titlesort",
    TOAL: "originalalbum",
    TSOP: "artistsort",
    TSO2: "albumartistsort",
    TSOC: "composersort",
    TEXT: "lyricist",
    "TXXX:Writer": "writer",
    TPE3: "conductor",
    TPE4: "remixer",
    "IPLS:arranger": "arranger",
    "IPLS:engineer": "engineer",
    "IPLS:producer": "producer",
    "IPLS:DJ-mix": "djmixer",
    "IPLS:mix": "mixer",
    TPUB: "label",
    TIT1: "grouping",
    TIT3: "subtitle",
    TRCK: "track",
    TCMP: "compilation",
    POPM: "rating",
    TBPM: "bpm",
    TMED: "media",
    "TXXX:CATALOGNUMBER": "catalognumber",
    "TXXX:MusicBrainz Album Status": "releasestatus",
    "TXXX:MusicBrainz Album Type": "releasetype",
    "TXXX:MusicBrainz Album Release Country": "releasecountry",
    "TXXX:RELEASECOUNTRY": "releasecountry",
    "TXXX:SCRIPT": "script",
    TLAN: "language",
    TCOP: "copyright",
    WCOP: "license",
    TENC: "encodedby",
    TSSE: "encodersettings",
    "TXXX:BARCODE": "barcode",
    "TXXX:ISRC": "isrc",
    TSRC: "isrc",
    "TXXX:ASIN": "asin",
    "TXXX:originalyear": "originalyear",
    "UFID:http://musicbrainz.org": "musicbrainz_recordingid",
    "TXXX:MusicBrainz Release Track Id": "musicbrainz_trackid",
    "TXXX:MusicBrainz Album Id": "musicbrainz_albumid",
    "TXXX:MusicBrainz Artist Id": "musicbrainz_artistid",
    "TXXX:MusicBrainz Album Artist Id": "musicbrainz_albumartistid",
    "TXXX:MusicBrainz Release Group Id": "musicbrainz_releasegroupid",
    "TXXX:MusicBrainz Work Id": "musicbrainz_workid",
    "TXXX:MusicBrainz TRM Id": "musicbrainz_trmid",
    "TXXX:MusicBrainz Disc Id": "musicbrainz_discid",
    "TXXX:ACOUSTID_ID": "acoustid_id",
    "TXXX:Acoustid Id": "acoustid_id",
    "TXXX:Acoustid Fingerprint": "acoustid_fingerprint",
    "TXXX:MusicIP PUID": "musicip_puid",
    "TXXX:MusicMagic Fingerprint": "musicip_fingerprint",
    WOAR: "website",
    TDRC: "date",
    TYER: "year",
    TDOR: "originaldate",
    "TIPL:arranger": "arranger",
    "TIPL:engineer": "engineer",
    "TIPL:producer": "producer",
    "TIPL:DJ-mix": "djmixer",
    "TIPL:mix": "mixer",
    TMOO: "mood",
    SYLT: "lyrics",
    TSST: "discsubtitle",
    TKEY: "key",
    COMM: "comment",
    TOPE: "originalartist",
    "PRIV:AverageLevel": "averageLevel",
    "PRIV:PeakLevel": "peakLevel",
    "TXXX:DISCOGS_ARTIST_ID": "discogs_artist_id",
    "TXXX:DISCOGS_ARTISTS": "artists",
    "TXXX:DISCOGS_ARTIST_NAME": "artists",
    "TXXX:DISCOGS_ALBUM_ARTISTS": "albumartist",
    "TXXX:DISCOGS_CATALOG": "catalognumber",
    "TXXX:DISCOGS_COUNTRY": "releasecountry",
    "TXXX:DISCOGS_DATE": "originaldate",
    "TXXX:DISCOGS_LABEL": "label",
    "TXXX:DISCOGS_LABEL_ID": "discogs_label_id",
    "TXXX:DISCOGS_MASTER_RELEASE_ID": "discogs_master_release_id",
    "TXXX:DISCOGS_RATING": "discogs_rating",
    "TXXX:DISCOGS_RELEASED": "date",
    "TXXX:DISCOGS_RELEASE_ID": "discogs_release_id",
    "TXXX:DISCOGS_VOTES": "discogs_votes",
    "TXXX:CATALOGID": "catalognumber",
    "TXXX:STYLE": "genre",
    "TXXX:REPLAYGAIN_TRACK_PEAK": "replaygain_track_peak",
    "TXXX:REPLAYGAIN_TRACK_GAIN": "replaygain_track_gain",
    "TXXX:REPLAYGAIN_ALBUM_PEAK": "replaygain_album_peak",
    "TXXX:REPLAYGAIN_ALBUM_GAIN": "replaygain_album_gain",
    "TXXX:MP3GAIN_MINMAX": "replaygain_track_minmax",
    "TXXX:MP3GAIN_ALBUM_MINMAX": "replaygain_album_minmax",
    "TXXX:MP3GAIN_UNDO": "replaygain_undo",
    MVNM: "movement",
    MVIN: "movementIndex",
    PCST: "podcast",
    TCAT: "category",
    TDES: "description",
    TDRL: "releasedate",
    TGID: "podcastId",
    TKWD: "keywords",
    WFED: "podcasturl",
    GRP1: "grouping",
    PCNT: "playCounter"
  };
  class Re extends Q {
    static toRating(e) {
      return {
        source: e.email,
        rating: e.rating > 0 ? (e.rating - 1) / 254 * E.maxRatingScore : void 0
      };
    }
    constructor() {
      super([
        "ID3v2.3",
        "ID3v2.4"
      ], er);
    }
    postMap(e, t) {
      switch (e.id) {
        case "UFID":
          {
            const r = e.value;
            r.owner_identifier === "http://musicbrainz.org" && (e.id += `:${r.owner_identifier}`, e.value = Ae(r.identifier, "latin1"));
          }
          break;
        case "PRIV":
          {
            const r = e.value;
            switch (r.owner_identifier) {
              case "AverageLevel":
              case "PeakValue":
                e.id += `:${r.owner_identifier}`, e.value = r.data.length === 4 ? x.get(r.data, 0) : null, e.value === null && t.addWarning("Failed to parse PRIV:PeakValue");
                break;
              default:
                t.addWarning(`Unknown PRIV owner-identifier: ${r.data}`);
            }
          }
          break;
        case "POPM":
          e.value = Re.toRating(e.value);
          break;
      }
    }
  }
  const tr = {
    Title: "title",
    Author: "artist",
    "WM/AlbumArtist": "albumartist",
    "WM/AlbumTitle": "album",
    "WM/Year": "date",
    "WM/OriginalReleaseTime": "originaldate",
    "WM/OriginalReleaseYear": "originalyear",
    Description: "comment",
    "WM/TrackNumber": "track",
    "WM/PartOfSet": "disk",
    "WM/Genre": "genre",
    "WM/Composer": "composer",
    "WM/Lyrics": "lyrics",
    "WM/AlbumSortOrder": "albumsort",
    "WM/TitleSortOrder": "titlesort",
    "WM/ArtistSortOrder": "artistsort",
    "WM/AlbumArtistSortOrder": "albumartistsort",
    "WM/ComposerSortOrder": "composersort",
    "WM/Writer": "lyricist",
    "WM/Conductor": "conductor",
    "WM/ModifiedBy": "remixer",
    "WM/Engineer": "engineer",
    "WM/Producer": "producer",
    "WM/DJMixer": "djmixer",
    "WM/Mixer": "mixer",
    "WM/Publisher": "label",
    "WM/ContentGroupDescription": "grouping",
    "WM/SubTitle": "subtitle",
    "WM/SetSubTitle": "discsubtitle",
    "WM/IsCompilation": "compilation",
    "WM/SharedUserRating": "rating",
    "WM/BeatsPerMinute": "bpm",
    "WM/Mood": "mood",
    "WM/Media": "media",
    "WM/CatalogNo": "catalognumber",
    "MusicBrainz/Album Status": "releasestatus",
    "MusicBrainz/Album Type": "releasetype",
    "MusicBrainz/Album Release Country": "releasecountry",
    "WM/Script": "script",
    "WM/Language": "language",
    Copyright: "copyright",
    LICENSE: "license",
    "WM/EncodedBy": "encodedby",
    "WM/EncodingSettings": "encodersettings",
    "WM/Barcode": "barcode",
    "WM/ISRC": "isrc",
    "MusicBrainz/Track Id": "musicbrainz_recordingid",
    "MusicBrainz/Release Track Id": "musicbrainz_trackid",
    "MusicBrainz/Album Id": "musicbrainz_albumid",
    "MusicBrainz/Artist Id": "musicbrainz_artistid",
    "MusicBrainz/Album Artist Id": "musicbrainz_albumartistid",
    "MusicBrainz/Release Group Id": "musicbrainz_releasegroupid",
    "MusicBrainz/Work Id": "musicbrainz_workid",
    "MusicBrainz/TRM Id": "musicbrainz_trmid",
    "MusicBrainz/Disc Id": "musicbrainz_discid",
    "Acoustid/Id": "acoustid_id",
    "Acoustid/Fingerprint": "acoustid_fingerprint",
    "MusicIP/PUID": "musicip_puid",
    "WM/ARTISTS": "artists",
    "WM/InitialKey": "key",
    ASIN: "asin",
    "WM/Work": "work",
    "WM/AuthorURL": "website",
    "WM/Picture": "picture"
  };
  class Fe extends E {
    static toRating(e) {
      return {
        rating: Number.parseFloat(e + 1) / 5
      };
    }
    constructor() {
      super([
        "asf"
      ], tr);
    }
    postMap(e) {
      if (e.id === "WM/SharedUserRating") {
        const t = e.id.split(":");
        e.value = Fe.toRating(e.value), e.id = t[0];
      }
    }
  }
  const ir = {
    TT2: "title",
    TP1: "artist",
    TP2: "albumartist",
    TAL: "album",
    TYE: "year",
    COM: "comment",
    TRK: "track",
    TPA: "disk",
    TCO: "genre",
    PIC: "picture",
    TCM: "composer",
    TOR: "originaldate",
    TOT: "originalalbum",
    TXT: "lyricist",
    TP3: "conductor",
    TPB: "label",
    TT1: "grouping",
    TT3: "subtitle",
    TLA: "language",
    TCR: "copyright",
    WCP: "license",
    TEN: "encodedby",
    TSS: "encodersettings",
    WAR: "website",
    PCS: "podcast",
    TCP: "compilation",
    TDR: "date",
    TS2: "albumartistsort",
    TSA: "albumsort",
    TSC: "composersort",
    TSP: "artistsort",
    TST: "titlesort",
    WFD: "podcasturl",
    TBP: "bpm",
    GP1: "grouping"
  };
  class rr extends Q {
    constructor() {
      super([
        "ID3v2.2"
      ], ir);
    }
  }
  const nr = {
    Title: "title",
    Artist: "artist",
    Artists: "artists",
    "Album Artist": "albumartist",
    Album: "album",
    Year: "date",
    Originalyear: "originalyear",
    Originaldate: "originaldate",
    Releasedate: "releasedate",
    Comment: "comment",
    Track: "track",
    Disc: "disk",
    DISCNUMBER: "disk",
    Genre: "genre",
    "Cover Art (Front)": "picture",
    "Cover Art (Back)": "picture",
    Composer: "composer",
    Lyrics: "lyrics",
    ALBUMSORT: "albumsort",
    TITLESORT: "titlesort",
    WORK: "work",
    ARTISTSORT: "artistsort",
    ALBUMARTISTSORT: "albumartistsort",
    COMPOSERSORT: "composersort",
    Lyricist: "lyricist",
    Writer: "writer",
    Conductor: "conductor",
    MixArtist: "remixer",
    Arranger: "arranger",
    Engineer: "engineer",
    Producer: "producer",
    DJMixer: "djmixer",
    Mixer: "mixer",
    Label: "label",
    Grouping: "grouping",
    Subtitle: "subtitle",
    DiscSubtitle: "discsubtitle",
    Compilation: "compilation",
    BPM: "bpm",
    Mood: "mood",
    Media: "media",
    CatalogNumber: "catalognumber",
    MUSICBRAINZ_ALBUMSTATUS: "releasestatus",
    MUSICBRAINZ_ALBUMTYPE: "releasetype",
    RELEASECOUNTRY: "releasecountry",
    Script: "script",
    Language: "language",
    Copyright: "copyright",
    LICENSE: "license",
    EncodedBy: "encodedby",
    EncoderSettings: "encodersettings",
    Barcode: "barcode",
    ISRC: "isrc",
    ASIN: "asin",
    musicbrainz_trackid: "musicbrainz_recordingid",
    musicbrainz_releasetrackid: "musicbrainz_trackid",
    MUSICBRAINZ_ALBUMID: "musicbrainz_albumid",
    MUSICBRAINZ_ARTISTID: "musicbrainz_artistid",
    MUSICBRAINZ_ALBUMARTISTID: "musicbrainz_albumartistid",
    MUSICBRAINZ_RELEASEGROUPID: "musicbrainz_releasegroupid",
    MUSICBRAINZ_WORKID: "musicbrainz_workid",
    MUSICBRAINZ_TRMID: "musicbrainz_trmid",
    MUSICBRAINZ_DISCID: "musicbrainz_discid",
    Acoustid_Id: "acoustid_id",
    ACOUSTID_FINGERPRINT: "acoustid_fingerprint",
    MUSICIP_PUID: "musicip_puid",
    Weblink: "website",
    REPLAYGAIN_TRACK_GAIN: "replaygain_track_gain",
    REPLAYGAIN_TRACK_PEAK: "replaygain_track_peak",
    MP3GAIN_MINMAX: "replaygain_track_minmax",
    MP3GAIN_UNDO: "replaygain_undo"
  };
  class ar extends Q {
    constructor() {
      super([
        "APEv2"
      ], nr);
    }
  }
  const sr = {
    "\xA9nam": "title",
    "\xA9ART": "artist",
    aART: "albumartist",
    "----:com.apple.iTunes:Band": "albumartist",
    "\xA9alb": "album",
    "\xA9day": "date",
    "\xA9cmt": "comment",
    "\xA9com": "comment",
    trkn: "track",
    disk: "disk",
    "\xA9gen": "genre",
    covr: "picture",
    "\xA9wrt": "composer",
    "\xA9lyr": "lyrics",
    soal: "albumsort",
    sonm: "titlesort",
    soar: "artistsort",
    soaa: "albumartistsort",
    soco: "composersort",
    "----:com.apple.iTunes:LYRICIST": "lyricist",
    "----:com.apple.iTunes:CONDUCTOR": "conductor",
    "----:com.apple.iTunes:REMIXER": "remixer",
    "----:com.apple.iTunes:ENGINEER": "engineer",
    "----:com.apple.iTunes:PRODUCER": "producer",
    "----:com.apple.iTunes:DJMIXER": "djmixer",
    "----:com.apple.iTunes:MIXER": "mixer",
    "----:com.apple.iTunes:LABEL": "label",
    "\xA9grp": "grouping",
    "----:com.apple.iTunes:SUBTITLE": "subtitle",
    "----:com.apple.iTunes:DISCSUBTITLE": "discsubtitle",
    cpil: "compilation",
    tmpo: "bpm",
    "----:com.apple.iTunes:MOOD": "mood",
    "----:com.apple.iTunes:MEDIA": "media",
    "----:com.apple.iTunes:CATALOGNUMBER": "catalognumber",
    tvsh: "tvShow",
    tvsn: "tvSeason",
    tves: "tvEpisode",
    sosn: "tvShowSort",
    tven: "tvEpisodeId",
    tvnn: "tvNetwork",
    pcst: "podcast",
    purl: "podcasturl",
    "----:com.apple.iTunes:MusicBrainz Album Status": "releasestatus",
    "----:com.apple.iTunes:MusicBrainz Album Type": "releasetype",
    "----:com.apple.iTunes:MusicBrainz Album Release Country": "releasecountry",
    "----:com.apple.iTunes:SCRIPT": "script",
    "----:com.apple.iTunes:LANGUAGE": "language",
    cprt: "copyright",
    "\xA9cpy": "copyright",
    "----:com.apple.iTunes:LICENSE": "license",
    "\xA9too": "encodedby",
    pgap: "gapless",
    "----:com.apple.iTunes:BARCODE": "barcode",
    "----:com.apple.iTunes:ISRC": "isrc",
    "----:com.apple.iTunes:ASIN": "asin",
    "----:com.apple.iTunes:NOTES": "comment",
    "----:com.apple.iTunes:MusicBrainz Track Id": "musicbrainz_recordingid",
    "----:com.apple.iTunes:MusicBrainz Release Track Id": "musicbrainz_trackid",
    "----:com.apple.iTunes:MusicBrainz Album Id": "musicbrainz_albumid",
    "----:com.apple.iTunes:MusicBrainz Artist Id": "musicbrainz_artistid",
    "----:com.apple.iTunes:MusicBrainz Album Artist Id": "musicbrainz_albumartistid",
    "----:com.apple.iTunes:MusicBrainz Release Group Id": "musicbrainz_releasegroupid",
    "----:com.apple.iTunes:MusicBrainz Work Id": "musicbrainz_workid",
    "----:com.apple.iTunes:MusicBrainz TRM Id": "musicbrainz_trmid",
    "----:com.apple.iTunes:MusicBrainz Disc Id": "musicbrainz_discid",
    "----:com.apple.iTunes:Acoustid Id": "acoustid_id",
    "----:com.apple.iTunes:Acoustid Fingerprint": "acoustid_fingerprint",
    "----:com.apple.iTunes:MusicIP PUID": "musicip_puid",
    "----:com.apple.iTunes:fingerprint": "musicip_fingerprint",
    "----:com.apple.iTunes:replaygain_track_gain": "replaygain_track_gain",
    "----:com.apple.iTunes:replaygain_track_peak": "replaygain_track_peak",
    "----:com.apple.iTunes:replaygain_album_gain": "replaygain_album_gain",
    "----:com.apple.iTunes:replaygain_album_peak": "replaygain_album_peak",
    "----:com.apple.iTunes:replaygain_track_minmax": "replaygain_track_minmax",
    "----:com.apple.iTunes:replaygain_album_minmax": "replaygain_album_minmax",
    "----:com.apple.iTunes:replaygain_undo": "replaygain_undo",
    gnre: "genre",
    "----:com.apple.iTunes:ALBUMARTISTSORT": "albumartistsort",
    "----:com.apple.iTunes:ARTISTS": "artists",
    "----:com.apple.iTunes:ORIGINALDATE": "originaldate",
    "----:com.apple.iTunes:ORIGINALYEAR": "originalyear",
    "----:com.apple.iTunes:RELEASEDATE": "releasedate",
    desc: "description",
    ldes: "longDescription",
    "\xA9mvn": "movement",
    "\xA9mvi": "movementIndex",
    "\xA9mvc": "movementTotal",
    "\xA9wrk": "work",
    catg: "category",
    egid: "podcastId",
    hdvd: "hdVideo",
    keyw: "keywords",
    shwm: "showMovement",
    stik: "stik",
    rate: "rating"
  }, or = "iTunes";
  class Ge extends Q {
    constructor() {
      super([
        or
      ], sr);
    }
    postMap(e, t) {
      e.id === "rate" && (e.value = {
        source: void 0,
        rating: Number.parseFloat(e.value) / 100
      });
    }
  }
  const cr = {
    TITLE: "title",
    ARTIST: "artist",
    ARTISTS: "artists",
    ALBUMARTIST: "albumartist",
    "ALBUM ARTIST": "albumartist",
    ALBUM: "album",
    DATE: "date",
    ORIGINALDATE: "originaldate",
    ORIGINALYEAR: "originalyear",
    RELEASEDATE: "releasedate",
    COMMENT: "comment",
    TRACKNUMBER: "track",
    DISCNUMBER: "disk",
    GENRE: "genre",
    METADATA_BLOCK_PICTURE: "picture",
    COMPOSER: "composer",
    LYRICS: "lyrics",
    ALBUMSORT: "albumsort",
    TITLESORT: "titlesort",
    WORK: "work",
    ARTISTSORT: "artistsort",
    ALBUMARTISTSORT: "albumartistsort",
    COMPOSERSORT: "composersort",
    LYRICIST: "lyricist",
    WRITER: "writer",
    CONDUCTOR: "conductor",
    REMIXER: "remixer",
    ARRANGER: "arranger",
    ENGINEER: "engineer",
    PRODUCER: "producer",
    DJMIXER: "djmixer",
    MIXER: "mixer",
    LABEL: "label",
    GROUPING: "grouping",
    SUBTITLE: "subtitle",
    DISCSUBTITLE: "discsubtitle",
    TRACKTOTAL: "totaltracks",
    DISCTOTAL: "totaldiscs",
    COMPILATION: "compilation",
    RATING: "rating",
    BPM: "bpm",
    KEY: "key",
    MOOD: "mood",
    MEDIA: "media",
    CATALOGNUMBER: "catalognumber",
    RELEASESTATUS: "releasestatus",
    RELEASETYPE: "releasetype",
    RELEASECOUNTRY: "releasecountry",
    SCRIPT: "script",
    LANGUAGE: "language",
    COPYRIGHT: "copyright",
    LICENSE: "license",
    ENCODEDBY: "encodedby",
    ENCODERSETTINGS: "encodersettings",
    BARCODE: "barcode",
    ISRC: "isrc",
    ASIN: "asin",
    MUSICBRAINZ_TRACKID: "musicbrainz_recordingid",
    MUSICBRAINZ_RELEASETRACKID: "musicbrainz_trackid",
    MUSICBRAINZ_ALBUMID: "musicbrainz_albumid",
    MUSICBRAINZ_ARTISTID: "musicbrainz_artistid",
    MUSICBRAINZ_ALBUMARTISTID: "musicbrainz_albumartistid",
    MUSICBRAINZ_RELEASEGROUPID: "musicbrainz_releasegroupid",
    MUSICBRAINZ_WORKID: "musicbrainz_workid",
    MUSICBRAINZ_TRMID: "musicbrainz_trmid",
    MUSICBRAINZ_DISCID: "musicbrainz_discid",
    ACOUSTID_ID: "acoustid_id",
    ACOUSTID_ID_FINGERPRINT: "acoustid_fingerprint",
    MUSICIP_PUID: "musicip_puid",
    WEBSITE: "website",
    NOTES: "notes",
    TOTALTRACKS: "totaltracks",
    TOTALDISCS: "totaldiscs",
    DISCOGS_ARTIST_ID: "discogs_artist_id",
    DISCOGS_ARTISTS: "artists",
    DISCOGS_ARTIST_NAME: "artists",
    DISCOGS_ALBUM_ARTISTS: "albumartist",
    DISCOGS_CATALOG: "catalognumber",
    DISCOGS_COUNTRY: "releasecountry",
    DISCOGS_DATE: "originaldate",
    DISCOGS_LABEL: "label",
    DISCOGS_LABEL_ID: "discogs_label_id",
    DISCOGS_MASTER_RELEASE_ID: "discogs_master_release_id",
    DISCOGS_RATING: "discogs_rating",
    DISCOGS_RELEASED: "date",
    DISCOGS_RELEASE_ID: "discogs_release_id",
    DISCOGS_VOTES: "discogs_votes",
    CATALOGID: "catalognumber",
    STYLE: "genre",
    REPLAYGAIN_TRACK_GAIN: "replaygain_track_gain",
    REPLAYGAIN_TRACK_PEAK: "replaygain_track_peak",
    REPLAYGAIN_ALBUM_GAIN: "replaygain_album_gain",
    REPLAYGAIN_ALBUM_PEAK: "replaygain_album_peak",
    REPLAYGAIN_MINMAX: "replaygain_track_minmax",
    REPLAYGAIN_ALBUM_MINMAX: "replaygain_album_minmax",
    REPLAYGAIN_UNDO: "replaygain_undo"
  };
  class fe extends E {
    static toRating(e, t, r) {
      return {
        source: e ? e.toLowerCase() : void 0,
        rating: Number.parseFloat(t) / r * E.maxRatingScore
      };
    }
    constructor() {
      super([
        "vorbis"
      ], cr);
    }
    postMap(e) {
      if (e.id === "RATING") e.value = fe.toRating(void 0, e.value, 100);
      else if (e.id.indexOf("RATING:") === 0) {
        const t = e.id.split(":");
        e.value = fe.toRating(t[1], e.value, 1), e.id = t[0];
      }
    }
  }
  const ur = {
    IART: "artist",
    ICRD: "date",
    INAM: "title",
    TITL: "title",
    IPRD: "album",
    ITRK: "track",
    IPRT: "track",
    COMM: "comment",
    ICMT: "comment",
    ICNT: "releasecountry",
    GNRE: "genre",
    IWRI: "writer",
    RATE: "rating",
    YEAR: "year",
    ISFT: "encodedby",
    CODE: "encodedby",
    TURL: "website",
    IGNR: "genre",
    IENG: "engineer",
    ITCH: "technician",
    IMED: "media",
    IRPD: "album"
  };
  class lr extends E {
    constructor() {
      super([
        "exif"
      ], ur);
    }
  }
  const pr = {
    "segment:title": "title",
    "album:ARTIST": "albumartist",
    "album:ARTISTSORT": "albumartistsort",
    "album:TITLE": "album",
    "album:DATE_RECORDED": "originaldate",
    "album:DATE_RELEASED": "releasedate",
    "album:PART_NUMBER": "disk",
    "album:TOTAL_PARTS": "totaltracks",
    "track:ARTIST": "artist",
    "track:ARTISTSORT": "artistsort",
    "track:TITLE": "title",
    "track:PART_NUMBER": "track",
    "track:MUSICBRAINZ_TRACKID": "musicbrainz_recordingid",
    "track:MUSICBRAINZ_ALBUMID": "musicbrainz_albumid",
    "track:MUSICBRAINZ_ARTISTID": "musicbrainz_artistid",
    "track:PUBLISHER": "label",
    "track:GENRE": "genre",
    "track:ENCODER": "encodedby",
    "track:ENCODER_OPTIONS": "encodersettings",
    "edition:TOTAL_PARTS": "totaldiscs",
    picture: "picture"
  };
  class mr extends Q {
    constructor() {
      super([
        "matroska"
      ], pr);
    }
  }
  const dr = {
    NAME: "title",
    AUTH: "artist",
    "(c) ": "copyright",
    ANNO: "comment"
  };
  class fr extends E {
    constructor() {
      super([
        "AIFF"
      ], dr);
    }
  }
  class hr {
    constructor() {
      this.tagMappers = {}, [
        new Qi(),
        new rr(),
        new Re(),
        new Ge(),
        new Ge(),
        new fe(),
        new ar(),
        new Fe(),
        new lr(),
        new mr(),
        new fr()
      ].forEach((e) => {
        this.registerTagMapper(e);
      });
    }
    mapTag(e, t, r) {
      if (this.tagMappers[e]) return this.tagMappers[e].mapGenericTag(t, r);
      throw new ct(`No generic tag mapper defined for tag-format: ${e}`);
    }
    registerTagMapper(e) {
      for (const t of e.tagTypes) this.tagMappers[t] = e;
    }
  }
  const Ee = /\[(\d{2}):(\d{2})\.(\d{2,3})]/;
  function xr(i) {
    return Ee.test(i) ? Tr(i) : gr(i);
  }
  function gr(i) {
    return {
      contentType: lt.lyrics,
      timeStampFormat: pt.notSynchronized,
      text: i.trim(),
      syncText: []
    };
  }
  function Tr(i) {
    const e = i.split(`
`), t = [];
    for (const r of e) {
      const n = r.match(Ee);
      if (n) {
        const a = Number.parseInt(n[1], 10), s = Number.parseInt(n[2], 10), l = n[3].length === 3 ? Number.parseInt(n[3], 10) : Number.parseInt(n[3], 10) * 10, m = (a * 60 + s) * 1e3 + l, d = r.replace(Ee, "").trim();
        t.push({
          timestamp: m,
          text: d
        });
      }
    }
    return {
      contentType: lt.lyrics,
      timeStampFormat: pt.milliseconds,
      text: t.map((r) => r.text).join(`
`),
      syncText: t
    };
  }
  const O = K("music-metadata:collector"), wr = [
    "matroska",
    "APEv2",
    "vorbis",
    "ID3v2.4",
    "ID3v2.3",
    "ID3v2.2",
    "exif",
    "asf",
    "iTunes",
    "AIFF",
    "ID3v1"
  ];
  class yr {
    constructor(e) {
      this.format = {
        tagTypes: [],
        trackInfo: []
      }, this.native = {}, this.common = {
        track: {
          no: null,
          of: null
        },
        disk: {
          no: null,
          of: null
        },
        movementIndex: {
          no: null,
          of: null
        }
      }, this.quality = {
        warnings: []
      }, this.commonOrigin = {}, this.originPriority = {}, this.tagMapper = new hr(), this.opts = e;
      let t = 1;
      for (const r of wr) this.originPriority[r] = t++;
      this.originPriority.artificial = 500, this.originPriority.id3v1 = 600;
    }
    hasAny() {
      return Object.keys(this.native).length > 0;
    }
    addStreamInfo(e) {
      O(`streamInfo: type=${e.type ? Li[e.type] : "?"}, codec=${e.codecName}`), this.format.trackInfo.push(e);
    }
    setFormat(e, t) {
      var _a;
      O(`format: ${e} = ${t}`), this.format[e] = t, ((_a = this.opts) == null ? void 0 : _a.observer) && this.opts.observer({
        metadata: this,
        tag: {
          type: "format",
          id: e,
          value: t
        }
      });
    }
    setAudioOnly() {
      this.setFormat("hasAudio", true), this.setFormat("hasVideo", false);
    }
    async addTag(e, t, r) {
      O(`tag ${e}.${t} = ${r}`), this.native[e] || (this.format.tagTypes.push(e), this.native[e] = []), this.native[e].push({
        id: t,
        value: r
      }), await this.toCommon(e, t, r);
    }
    addWarning(e) {
      this.quality.warnings.push({
        message: e
      });
    }
    async postMap(e, t) {
      switch (t.id) {
        case "artist":
          return this.handleSingularArtistTag(e, t, "artist", "artists");
        case "albumartist":
          return this.handleSingularArtistTag(e, t, "albumartist", "albumartists");
        case "artists":
          return this.handlePluralArtistTag(e, t, "artist", "artists");
        case "albumartists":
          return this.handlePluralArtistTag(e, t, "albumartist", "albumartists");
        case "picture":
          return this.postFixPicture(t.value).then((r) => {
            r !== null && (t.value = r, this.setGenericTag(e, t));
          });
        case "totaltracks":
          this.common.track.of = E.toIntOrNull(t.value);
          return;
        case "totaldiscs":
          this.common.disk.of = E.toIntOrNull(t.value);
          return;
        case "movementTotal":
          this.common.movementIndex.of = E.toIntOrNull(t.value);
          return;
        case "track":
        case "disk":
        case "movementIndex": {
          const r = this.common[t.id].of;
          this.common[t.id] = E.normalizeTrack(t.value), this.common[t.id].of = r ?? this.common[t.id].of;
          return;
        }
        case "bpm":
        case "year":
        case "originalyear":
          t.value = Number.parseInt(t.value, 10);
          break;
        case "date": {
          const r = Number.parseInt(t.value.substr(0, 4), 10);
          Number.isNaN(r) || (this.common.year = r);
          break;
        }
        case "discogs_label_id":
        case "discogs_release_id":
        case "discogs_master_release_id":
        case "discogs_artist_id":
        case "discogs_votes":
          t.value = typeof t.value == "string" ? Number.parseInt(t.value, 10) : t.value;
          break;
        case "replaygain_track_gain":
        case "replaygain_track_peak":
        case "replaygain_album_gain":
        case "replaygain_album_peak":
          t.value = qi(t.value);
          break;
        case "replaygain_track_minmax":
          t.value = t.value.split(",").map((r) => Number.parseInt(r, 10));
          break;
        case "replaygain_undo": {
          const r = t.value.split(",").map((n) => Number.parseInt(n, 10));
          t.value = {
            leftChannel: r[0],
            rightChannel: r[1]
          };
          break;
        }
        case "gapless":
        case "compilation":
        case "podcast":
        case "showMovement":
          t.value = t.value === "1" || t.value === 1;
          break;
        case "isrc": {
          const r = this.common[t.id];
          if (r && r.indexOf(t.value) !== -1) return;
          break;
        }
        case "comment":
          typeof t.value == "string" && (t.value = {
            text: t.value
          }), t.value.descriptor === "iTunPGAP" && this.setGenericTag(e, {
            id: "gapless",
            value: t.value.text === "1"
          });
          break;
        case "lyrics":
          typeof t.value == "string" && (t.value = xr(t.value));
          break;
      }
      t.value !== null && this.setGenericTag(e, t);
    }
    toCommonMetadata() {
      return {
        format: this.format,
        native: this.native,
        quality: this.quality,
        common: this.common
      };
    }
    handleSingularArtistTag(e, t, r, n) {
      if (this.commonOrigin[r] === this.originPriority[e]) return this.postMap("artificial", {
        id: n,
        value: t.value
      });
      this.common[n] || this.setGenericTag("artificial", {
        id: n,
        value: t.value
      }), this.setGenericTag(e, t);
    }
    handlePluralArtistTag(e, t, r, n) {
      if ((!this.common[r] || this.commonOrigin[r] === this.originPriority.artificial) && (!this.common[n] || this.common[n].indexOf(t.value) === -1)) {
        const a = (this.common[n] || []).concat([
          t.value
        ]), s = br(a);
        this.setGenericTag("artificial", {
          id: r,
          value: s
        });
      }
      this.setGenericTag(e, t);
    }
    async postFixPicture(e) {
      if (e.data && e.data.length > 0) {
        if (!e.format) {
          const t = await ot(Uint8Array.from(e.data));
          if (t) e.format = t.mime;
          else return null;
        }
        return e.format = e.format.toLocaleLowerCase(), e.format === "image/jpg" && (e.format = "image/jpeg"), e;
      }
      return this.addWarning("Empty picture tag found"), null;
    }
    async toCommon(e, t, r) {
      const n = {
        id: t,
        value: r
      }, a = this.tagMapper.mapTag(e, n, this);
      a && await this.postMap(e, a);
    }
    setGenericTag(e, t) {
      var _a;
      O(`common.${t.id} = ${t.value}`);
      const r = this.commonOrigin[t.id] || 1e3, n = this.originPriority[e];
      if (Zi(t.id)) if (n <= r) this.common[t.id] = t.value, this.commonOrigin[t.id] = n;
      else return O(`Ignore native tag (singleton): ${e}.${t.id} = ${t.value}`);
      else if (n === r) !Ki(t.id) || this.common[t.id].indexOf(t.value) === -1 ? this.common[t.id].push(t.value) : O(`Ignore duplicate value: ${e}.${t.id} = ${t.value}`);
      else if (n < r) this.common[t.id] = [
        t.value
      ], this.commonOrigin[t.id] = n;
      else return O(`Ignore native tag (list): ${e}.${t.id} = ${t.value}`);
      ((_a = this.opts) == null ? void 0 : _a.observer) && this.opts.observer({
        metadata: this,
        tag: {
          type: "common",
          id: t.id,
          value: t.value
        }
      });
    }
  }
  function br(i) {
    return i.length > 2 ? `${i.slice(0, i.length - 1).join(", ")} & ${i[i.length - 1]}` : i.join(" & ");
  }
  const kr = {
    parserType: "mpeg",
    extensions: [
      ".mp2",
      ".mp3",
      ".m2a",
      ".aac",
      "aacp"
    ],
    mimeTypes: [
      "audio/mpeg",
      "audio/mp3",
      "audio/aacs",
      "audio/aacp"
    ],
    async load() {
      return (await S(async () => {
        const { MpegParser: i } = await import("./MpegParser-CcEZ7J4I.js");
        return {
          MpegParser: i
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6]))).MpegParser;
    }
  }, vr = {
    parserType: "apev2",
    extensions: [
      ".ape"
    ],
    mimeTypes: [
      "audio/ape",
      "audio/monkeys-audio"
    ],
    async load() {
      return (await S(async () => {
        const { APEv2Parser: i } = await Promise.resolve().then(() => Xr);
        return {
          APEv2Parser: i
        };
      }, void 0)).APEv2Parser;
    }
  }, Ir = {
    parserType: "asf",
    extensions: [
      ".asf"
    ],
    mimeTypes: [
      "audio/ms-wma",
      "video/ms-wmv",
      "audio/ms-asf",
      "video/ms-asf",
      "application/vnd.ms-asf"
    ],
    async load() {
      return (await S(async () => {
        const { AsfParser: i } = await import("./AsfParser-IfMumDOH.js");
        return {
          AsfParser: i
        };
      }, __vite__mapDeps([7,3,4,5,6]))).AsfParser;
    }
  }, Ar = {
    parserType: "dsdiff",
    extensions: [
      ".dff"
    ],
    mimeTypes: [
      "audio/dsf",
      "audio/dsd"
    ],
    async load() {
      return (await S(async () => {
        const { DsdiffParser: i } = await import("./DsdiffParser-B_eCHt49.js");
        return {
          DsdiffParser: i
        };
      }, __vite__mapDeps([8,2,3,4,5,6]))).DsdiffParser;
    }
  }, Er = {
    parserType: "aiff",
    extensions: [
      ".aif",
      "aiff",
      "aifc"
    ],
    mimeTypes: [
      "audio/aiff",
      "audio/aif",
      "audio/aifc",
      "application/aiff"
    ],
    async load() {
      return (await S(async () => {
        const { AIFFParser: i } = await import("./AiffParser-DLVUqm1u.js");
        return {
          AIFFParser: i
        };
      }, __vite__mapDeps([9,2,3,4,5,6]))).AIFFParser;
    }
  }, Sr = {
    parserType: "dsf",
    extensions: [
      ".dsf"
    ],
    mimeTypes: [
      "audio/dsf"
    ],
    async load() {
      return (await S(async () => {
        const { DsfParser: i } = await import("./DsfParser-D8QVcgO8.js");
        return {
          DsfParser: i
        };
      }, __vite__mapDeps([10,1,2,3,4,5,6]))).DsfParser;
    }
  }, Cr = {
    parserType: "flac",
    extensions: [
      ".flac"
    ],
    mimeTypes: [
      "audio/flac"
    ],
    async load() {
      return (await S(async () => {
        const { FlacParser: i } = await import("./FlacParser-_kX-wXA6.js").then((e) => e.d);
        return {
          FlacParser: i
        };
      }, __vite__mapDeps([11,1,2]))).FlacParser;
    }
  }, _r = {
    parserType: "matroska",
    extensions: [
      ".mka",
      ".mkv",
      ".mk3d",
      ".mks",
      "webm"
    ],
    mimeTypes: [
      "audio/matroska",
      "video/matroska",
      "audio/webm",
      "video/webm"
    ],
    async load() {
      return (await S(async () => {
        const { MatroskaParser: i } = await import("./MatroskaParser-CGn_QwS8.js");
        return {
          MatroskaParser: i
        };
      }, __vite__mapDeps([12,3,4,5,6]))).MatroskaParser;
    }
  }, Rr = {
    parserType: "mp4",
    extensions: [
      ".mp4",
      ".m4a",
      ".m4b",
      ".m4pa",
      "m4v",
      "m4r",
      "3gp",
      ".mov",
      ".movie",
      ".qt"
    ],
    mimeTypes: [
      "audio/mp4",
      "audio/m4a",
      "video/m4v",
      "video/mp4",
      "video/quicktime"
    ],
    async load() {
      return (await S(async () => {
        const { MP4Parser: i } = await import("./MP4Parser-B3fn7q6p.js");
        return {
          MP4Parser: i
        };
      }, __vite__mapDeps([13,3,4,5,6]))).MP4Parser;
    }
  }, Fr = {
    parserType: "musepack",
    extensions: [
      ".mpc"
    ],
    mimeTypes: [
      "audio/musepack"
    ],
    async load() {
      return (await S(async () => {
        const { MusepackParser: i } = await import("./MusepackParser-Dp4ivfjy.js");
        return {
          MusepackParser: i
        };
      }, __vite__mapDeps([14,1,2,3,4,5,6]))).MusepackParser;
    }
  }, Mr = {
    parserType: "ogg",
    extensions: [
      ".ogg",
      ".ogv",
      ".oga",
      ".ogm",
      ".ogx",
      ".opus",
      ".spx"
    ],
    mimeTypes: [
      "audio/ogg",
      "audio/opus",
      "audio/speex",
      "video/ogg"
    ],
    async load() {
      return (await S(async () => {
        const { OggParser: i } = await import("./OggParser-OpRnxClm.js");
        return {
          OggParser: i
        };
      }, __vite__mapDeps([15,11,1,2,3,4,5,6]))).OggParser;
    }
  }, Dr = {
    parserType: "wavpack",
    extensions: [
      ".wv",
      ".wvp"
    ],
    mimeTypes: [
      "audio/wavpack"
    ],
    async load() {
      return (await S(async () => {
        const { WavPackParser: i } = await import("./WavPackParser-6g8ZHXvo.js");
        return {
          WavPackParser: i
        };
      }, __vite__mapDeps([16,3,4,5,6]))).WavPackParser;
    }
  }, Br = {
    parserType: "riff",
    extensions: [
      ".wav",
      "wave",
      ".bwf"
    ],
    mimeTypes: [
      "audio/vnd.wave",
      "audio/wav",
      "audio/wave"
    ],
    async load() {
      return (await S(async () => {
        const { WaveParser: i } = await import("./WaveParser-D_osXoc3.js");
        return {
          WaveParser: i
        };
      }, __vite__mapDeps([17,2,3,4,5,6]))).WaveParser;
    }
  }, z = K("music-metadata:parser:factory");
  function Pr(i) {
    const e = Di.parse(i), t = Pi.parse(e.type);
    return {
      type: t.type,
      subtype: t.subtype,
      suffix: t.suffix,
      parameters: e.parameters
    };
  }
  class Lr {
    constructor() {
      this.parsers = [], [
        Cr,
        kr,
        vr,
        Rr,
        _r,
        Br,
        Mr,
        Ir,
        Er,
        Dr,
        Fr,
        Sr,
        Ar
      ].forEach((e) => {
        this.registerParser(e);
      });
    }
    registerParser(e) {
      this.parsers.push(e);
    }
    async parse(e, t, r) {
      if (e.supportsRandomAccess() ? (z("tokenizer supports random-access, scanning for appending headers"), await qr(e, r)) : z("tokenizer does not support random-access, cannot scan for appending headers"), !t) {
        const l = new Uint8Array(4100);
        if (e.fileInfo.mimeType && (t = this.findLoaderForContentType(e.fileInfo.mimeType)), !t && e.fileInfo.path && (t = this.findLoaderForExtension(e.fileInfo.path)), !t) {
          z("Guess parser on content..."), await e.peekBuffer(l, {
            mayBeLess: true
          });
          const m = await ot(l, {
            mpegOffsetTolerance: 10
          });
          if (!m || !m.mime) throw new Oi("Failed to determine audio format");
          if (z(`Guessed file type is mime=${m.mime}, extension=${m.ext}`), t = this.findLoaderForContentType(m.mime), !t) throw new zi(`Guessed MIME-type not supported: ${m.mime}`);
        }
      }
      z(`Loading ${t.parserType} parser...`);
      const n = new yr(r), a = await t.load(), s = new a(n, e, r ?? {});
      return z(`Parser ${t.parserType} loaded`), await s.parse(), n.format.trackInfo && (n.format.hasAudio === void 0 && n.setFormat("hasAudio", !!n.format.trackInfo.find((l) => l.type === F.audio)), n.format.hasVideo === void 0 && n.setFormat("hasVideo", !!n.format.trackInfo.find((l) => l.type === F.video))), n.toCommonMetadata();
    }
    findLoaderForExtension(e) {
      if (!e) return;
      const t = Or(e).toLocaleLowerCase() || e;
      return this.parsers.find((r) => r.extensions.indexOf(t) !== -1);
    }
    findLoaderForContentType(e) {
      let t;
      if (!e) return;
      try {
        t = Pr(e);
      } catch {
        z(`Invalid HTTP Content-Type header value: ${e}`);
        return;
      }
      const r = t.subtype.indexOf("x-") === 0 ? t.subtype.substring(2) : t.subtype;
      return this.parsers.find((n) => n.mimeTypes.find((a) => a.indexOf(`${t.type}/${r}`) !== -1));
    }
    getSupportedMimeTypes() {
      const e = /* @__PURE__ */ new Set();
      return this.parsers.forEach((t) => {
        t.mimeTypes.forEach((r) => {
          e.add(r), e.add(r.replace("/", "/x-"));
        });
      }), Array.from(e);
    }
  }
  function Or(i) {
    const e = i.lastIndexOf(".");
    return e === -1 ? "" : i.substring(e);
  }
  mt = class {
    constructor(e, t, r) {
      this.metadata = e, this.tokenizer = t, this.options = r;
    }
  };
  let zr, ce, $e, Nr, A, be;
  zr = /^[\x21-\x7e©][\x20-\x7e\x00()]{3}/;
  dt = {
    len: 4,
    get: (i, e) => {
      const t = Z(i.subarray(e, e + dt.len), "latin1");
      if (!t.match(zr)) throw new _e(`FourCC contains invalid characters: ${$i(t)} "${t}"`);
      return t;
    },
    put: (i, e, t) => {
      const r = Dt(t, "latin1");
      if (r.length !== 4) throw new ct("Invalid length");
      return i.set(r, e), e + 4;
    }
  };
  ce = {
    text_utf8: 0,
    binary: 1,
    external_info: 2,
    reserved: 3
  };
  $e = {
    len: 52,
    get: (i, e) => ({
      ID: dt.get(i, e),
      version: x.get(i, e + 4) / 1e3,
      descriptorBytes: x.get(i, e + 8),
      headerBytes: x.get(i, e + 12),
      seekTableBytes: x.get(i, e + 16),
      headerDataBytes: x.get(i, e + 20),
      apeFrameDataBytes: x.get(i, e + 24),
      apeFrameDataBytesHigh: x.get(i, e + 28),
      terminatingDataBytes: x.get(i, e + 32),
      fileMD5: new at(16).get(i, e + 36)
    })
  };
  Nr = {
    len: 24,
    get: (i, e) => ({
      compressionLevel: T.get(i, e),
      formatFlags: T.get(i, e + 2),
      blocksPerFrame: x.get(i, e + 4),
      finalFrameBlocks: x.get(i, e + 8),
      totalFrames: x.get(i, e + 12),
      bitsPerSample: T.get(i, e + 16),
      channel: T.get(i, e + 18),
      sampleRate: x.get(i, e + 20)
    })
  };
  A = {
    len: 32,
    get: (i, e) => ({
      ID: new b(8, "ascii").get(i, e),
      version: x.get(i, e + 8),
      size: x.get(i, e + 12),
      fields: x.get(i, e + 16),
      flags: ft(x.get(i, e + 20))
    })
  };
  be = {
    len: 8,
    get: (i, e) => ({
      size: x.get(i, e),
      flags: ft(x.get(i, e + 4))
    })
  };
  function ft(i) {
    return {
      containsHeader: ue(i, 31),
      containsFooter: ue(i, 30),
      isHeader: ue(i, 29),
      readOnly: ue(i, 0),
      dataType: (i & 6) >> 1
    };
  }
  function ue(i, e) {
    return (i & 1 << e) !== 0;
  }
  const M = K("music-metadata:parser:APEv2"), je = "APEv2", We = "APETAGEX";
  class me extends Ui("APEv2") {
  }
  Ur = function(i, e, t) {
    return new B(i, e, t).tryParseApeHeader();
  };
  class B extends mt {
    constructor() {
      super(...arguments), this.ape = {};
    }
    static calculateDuration(e) {
      let t = e.totalFrames > 1 ? e.blocksPerFrame * (e.totalFrames - 1) : 0;
      return t += e.finalFrameBlocks, t / e.sampleRate;
    }
    static async findApeFooterOffset(e, t) {
      const r = new Uint8Array(A.len), n = e.position;
      if (t <= A.len) {
        M(`Offset is too small to read APE footer: offset=${t}`);
        return;
      }
      if (t > A.len) {
        await e.readBuffer(r, {
          position: t - A.len
        }), e.setPosition(n);
        const a = A.get(r, 0);
        if (a.ID === "APETAGEX") return a.flags.isHeader ? M(`APE Header found at offset=${t - A.len}`) : (M(`APE Footer found at offset=${t - A.len}`), t -= a.size), {
          footer: a,
          offset: t
        };
      }
    }
    static parseTagFooter(e, t, r) {
      const n = A.get(t, t.length - A.len);
      if (n.ID !== We) throw new me("Unexpected APEv2 Footer ID preamble value");
      return ke(t), new B(e, ke(t), r).parseTags(n);
    }
    async tryParseApeHeader() {
      if (this.tokenizer.fileInfo.size && this.tokenizer.fileInfo.size - this.tokenizer.position < A.len) {
        M("No APEv2 header found, end-of-file reached");
        return;
      }
      const e = await this.tokenizer.peekToken(A);
      if (e.ID === We) return await this.tokenizer.ignore(A.len), this.parseTags(e);
      if (M(`APEv2 header not found at offset=${this.tokenizer.position}`), this.tokenizer.fileInfo.size) {
        const t = this.tokenizer.fileInfo.size - this.tokenizer.position, r = new Uint8Array(t);
        return await this.tokenizer.readBuffer(r), B.parseTagFooter(this.metadata, r, this.options);
      }
    }
    async parse() {
      const e = await this.tokenizer.readToken($e);
      if (e.ID !== "MAC ") throw new me("Unexpected descriptor ID");
      this.ape.descriptor = e;
      const t = e.descriptorBytes - $e.len, r = await (t > 0 ? this.parseDescriptorExpansion(t) : this.parseHeader());
      return this.metadata.setAudioOnly(), await this.tokenizer.ignore(r.forwardBytes), this.tryParseApeHeader();
    }
    async parseTags(e) {
      const t = new Uint8Array(256);
      let r = e.size - A.len;
      M(`Parse APE tags at offset=${this.tokenizer.position}, size=${r}`);
      for (let n = 0; n < e.fields; n++) {
        if (r < be.len) {
          this.metadata.addWarning(`APEv2 Tag-header: ${e.fields - n} items remaining, but no more tag data to read.`);
          break;
        }
        const a = await this.tokenizer.readToken(be);
        r -= be.len + a.size, await this.tokenizer.peekBuffer(t, {
          length: Math.min(t.length, r)
        });
        let s = Xe(t);
        const l = await this.tokenizer.readToken(new b(s, "ascii"));
        switch (await this.tokenizer.ignore(1), r -= l.length + 1, a.flags.dataType) {
          case ce.text_utf8: {
            const d = (await this.tokenizer.readToken(new b(a.size, "utf8"))).split(/\x00/g);
            await Promise.all(d.map((c) => this.metadata.addTag(je, l, c)));
            break;
          }
          case ce.binary:
            if (this.options.skipCovers) await this.tokenizer.ignore(a.size);
            else {
              const m = new Uint8Array(a.size);
              await this.tokenizer.readBuffer(m), s = Xe(m);
              const d = Z(m.subarray(0, s), "utf-8"), c = m.subarray(s + 1);
              await this.metadata.addTag(je, l, {
                description: d,
                data: c
              });
            }
            break;
          case ce.external_info:
            M(`Ignore external info ${l}`), await this.tokenizer.ignore(a.size);
            break;
          case ce.reserved:
            M(`Ignore external info ${l}`), this.metadata.addWarning(`APEv2 header declares a reserved datatype for "${l}"`), await this.tokenizer.ignore(a.size);
            break;
        }
      }
    }
    async parseDescriptorExpansion(e) {
      return await this.tokenizer.ignore(e), this.parseHeader();
    }
    async parseHeader() {
      const e = await this.tokenizer.readToken(Nr);
      if (this.metadata.setFormat("lossless", true), this.metadata.setFormat("container", "Monkey's Audio"), this.metadata.setFormat("bitsPerSample", e.bitsPerSample), this.metadata.setFormat("sampleRate", e.sampleRate), this.metadata.setFormat("numberOfChannels", e.channel), this.metadata.setFormat("duration", B.calculateDuration(e)), !this.ape.descriptor) throw new me("Missing APE descriptor");
      return {
        forwardBytes: this.ape.descriptor.seekTableBytes + this.ape.descriptor.headerDataBytes + this.ape.descriptor.apeFrameDataBytes + this.ape.descriptor.terminatingDataBytes
      };
    }
  }
  let Xr, le, pe;
  Xr = Object.freeze(Object.defineProperty({
    __proto__: null,
    APEv2Parser: B,
    ApeContentError: me,
    tryParseApeHeader: Ur
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  le = K("music-metadata:parser:ID3v1");
  qe = [
    "Blues",
    "Classic Rock",
    "Country",
    "Dance",
    "Disco",
    "Funk",
    "Grunge",
    "Hip-Hop",
    "Jazz",
    "Metal",
    "New Age",
    "Oldies",
    "Other",
    "Pop",
    "R&B",
    "Rap",
    "Reggae",
    "Rock",
    "Techno",
    "Industrial",
    "Alternative",
    "Ska",
    "Death Metal",
    "Pranks",
    "Soundtrack",
    "Euro-Techno",
    "Ambient",
    "Trip-Hop",
    "Vocal",
    "Jazz+Funk",
    "Fusion",
    "Trance",
    "Classical",
    "Instrumental",
    "Acid",
    "House",
    "Game",
    "Sound Clip",
    "Gospel",
    "Noise",
    "Alt. Rock",
    "Bass",
    "Soul",
    "Punk",
    "Space",
    "Meditative",
    "Instrumental Pop",
    "Instrumental Rock",
    "Ethnic",
    "Gothic",
    "Darkwave",
    "Techno-Industrial",
    "Electronic",
    "Pop-Folk",
    "Eurodance",
    "Dream",
    "Southern Rock",
    "Comedy",
    "Cult",
    "Gangsta Rap",
    "Top 40",
    "Christian Rap",
    "Pop/Funk",
    "Jungle",
    "Native American",
    "Cabaret",
    "New Wave",
    "Psychedelic",
    "Rave",
    "Showtunes",
    "Trailer",
    "Lo-Fi",
    "Tribal",
    "Acid Punk",
    "Acid Jazz",
    "Polka",
    "Retro",
    "Musical",
    "Rock & Roll",
    "Hard Rock",
    "Folk",
    "Folk/Rock",
    "National Folk",
    "Swing",
    "Fast-Fusion",
    "Bebob",
    "Latin",
    "Revival",
    "Celtic",
    "Bluegrass",
    "Avantgarde",
    "Gothic Rock",
    "Progressive Rock",
    "Psychedelic Rock",
    "Symphonic Rock",
    "Slow Rock",
    "Big Band",
    "Chorus",
    "Easy Listening",
    "Acoustic",
    "Humour",
    "Speech",
    "Chanson",
    "Opera",
    "Chamber Music",
    "Sonata",
    "Symphony",
    "Booty Bass",
    "Primus",
    "Porn Groove",
    "Satire",
    "Slow Jam",
    "Club",
    "Tango",
    "Samba",
    "Folklore",
    "Ballad",
    "Power Ballad",
    "Rhythmic Soul",
    "Freestyle",
    "Duet",
    "Punk Rock",
    "Drum Solo",
    "A Cappella",
    "Euro-House",
    "Dance Hall",
    "Goa",
    "Drum & Bass",
    "Club-House",
    "Hardcore",
    "Terror",
    "Indie",
    "BritPop",
    "Negerpunk",
    "Polsk Punk",
    "Beat",
    "Christian Gangsta Rap",
    "Heavy Metal",
    "Black Metal",
    "Crossover",
    "Contemporary Christian",
    "Christian Rock",
    "Merengue",
    "Salsa",
    "Thrash Metal",
    "Anime",
    "JPop",
    "Synthpop",
    "Abstract",
    "Art Rock",
    "Baroque",
    "Bhangra",
    "Big Beat",
    "Breakbeat",
    "Chillout",
    "Downtempo",
    "Dub",
    "EBM",
    "Eclectic",
    "Electro",
    "Electroclash",
    "Emo",
    "Experimental",
    "Garage",
    "Global",
    "IDM",
    "Illbient",
    "Industro-Goth",
    "Jam Band",
    "Krautrock",
    "Leftfield",
    "Lounge",
    "Math Rock",
    "New Romantic",
    "Nu-Breakz",
    "Post-Punk",
    "Post-Rock",
    "Psytrance",
    "Shoegaze",
    "Space Rock",
    "Trop Rock",
    "World Music",
    "Neoclassical",
    "Audiobook",
    "Audio Theatre",
    "Neue Deutsche Welle",
    "Podcast",
    "Indie Rock",
    "G-Funk",
    "Dubstep",
    "Garage Rock",
    "Psybient"
  ];
  pe = {
    len: 128,
    get: (i, e) => {
      const t = new G(3).get(i, e);
      return t === "TAG" ? {
        header: t,
        title: new G(30).get(i, e + 3),
        artist: new G(30).get(i, e + 33),
        album: new G(30).get(i, e + 63),
        year: new G(4).get(i, e + 93),
        comment: new G(28).get(i, e + 97),
        zeroByte: N.get(i, e + 127),
        track: N.get(i, e + 126),
        genre: N.get(i, e + 127)
      } : null;
    }
  };
  class G {
    constructor(e) {
      this.len = e, this.stringType = new b(e, "latin1");
    }
    get(e, t) {
      let r = this.stringType.get(e, t);
      return r = Xi(r), r = r.trim(), r.length > 0 ? r : void 0;
    }
  }
  ht = class extends mt {
    constructor(e, t, r) {
      super(e, t, r), this.apeHeader = r.apeHeader;
    }
    static getGenre(e) {
      if (e < qe.length) return qe[e];
    }
    async parse() {
      if (!this.tokenizer.fileInfo.size) {
        le("Skip checking for ID3v1 because the file-size is unknown");
        return;
      }
      this.apeHeader && (this.tokenizer.ignore(this.apeHeader.offset - this.tokenizer.position), await new B(this.metadata, this.tokenizer, this.options).parseTags(this.apeHeader.footer));
      const e = this.tokenizer.fileInfo.size - pe.len;
      if (this.tokenizer.position > e) {
        le("Already consumed the last 128 bytes");
        return;
      }
      const t = await this.tokenizer.readToken(pe, e);
      if (t) {
        le("ID3v1 header found at: pos=%s", this.tokenizer.fileInfo.size - pe.len);
        const r = [
          "title",
          "artist",
          "album",
          "comment",
          "track",
          "year"
        ];
        for (const a of r) t[a] && t[a] !== "" && await this.addTag(a, t[a]);
        const n = ht.getGenre(t.genre);
        n && await this.addTag("genre", n);
      } else le("ID3v1 header not found at: pos=%s", this.tokenizer.fileInfo.size - pe.len);
    }
    async addTag(e, t) {
      await this.metadata.addTag("ID3v1", e, t);
    }
  };
  async function Gr(i) {
    if (i.fileInfo.size >= 128) {
      const e = new Uint8Array(3), t = i.position;
      return await i.readBuffer(e, {
        position: i.fileInfo.size - 128
      }), i.setPosition(t), Z(e, "latin1") === "TAG";
    }
    return false;
  }
  const $r = "LYRICS200";
  async function jr(i) {
    const e = i.fileInfo.size;
    if (e >= 143) {
      const t = new Uint8Array(15), r = i.position;
      await i.readBuffer(t, {
        position: e - 143
      }), i.setPosition(r);
      const n = Z(t, "latin1");
      if (n.substring(6) === $r) return Number.parseInt(n.substring(0, 6), 10) + 15;
    }
    return 0;
  }
  Cn = async function(i, e = {}) {
    const t = Je(i);
    try {
      return await Wr(t, e);
    } finally {
      await t.close();
    }
  };
  function Wr(i, e) {
    return new Lr().parse(i, void 0, e);
  }
  _n = function(i) {
    return i ? i.reduce((e, t) => t.name && t.name.toLowerCase() in [
      "front",
      "cover",
      "cover (front)"
    ] ? t : e) : null;
  };
  async function qr(i, e = {}) {
    let t = i.fileInfo.size;
    if (await Gr(i)) {
      t -= 128;
      const r = await jr(i);
      t -= r;
    }
    e.apeHeader = await B.findApeFooterOffset(i, t);
  }
  function Hr(i) {
    if (!i) throw new TypeError("No filter set is specified!");
    if (typeof i != "object") throw new TypeError(`Invalid filter set: expected 'object', got '${typeof i}'`);
    for (const e in i) Vr(i[e]);
  }
  function Vr(i) {
    Array.isArray(i) ? Yr(i) : xt(i);
  }
  function Yr(i) {
    i.forEach(xt);
  }
  function xt(i) {
    if (typeof i != "function") throw new TypeError(`Invalid filter function: expected 'function', got '${typeof i}'`);
  }
  X = class {
    constructor(e) {
      this.mergedFilterSet = {}, this.appendFilters(e);
    }
    filterField(e, t) {
      if (e in this.mergedFilterSet) return this.filterText(t, this.mergedFilterSet[e]);
      throw new TypeError(`Invalid filter field: ${e}`);
    }
    append(e) {
      return this.appendFilters(e), this;
    }
    extend(e) {
      if (!e) throw new TypeError("No filter is specified!");
      if (!(e instanceof X)) throw new TypeError(`Invalid filter: expected 'MetadataFilter', got '${typeof e}'`);
      return this.appendFilters(e.mergedFilterSet), this;
    }
    canFilterField(e) {
      return e in this.mergedFilterSet;
    }
    getFields() {
      return Object.keys(this.mergedFilterSet);
    }
    filterText(e, t) {
      return e && t.reduce((r, n) => n(r), e);
    }
    wrapFiltersIntoArray(e) {
      return Array.isArray(e) ? e : [
        e
      ];
    }
    appendFilters(e) {
      Hr(e);
      for (const t in e) {
        t in this.mergedFilterSet || (this.mergedFilterSet[t] = []);
        const r = this.wrapFiltersIntoArray(e[t]);
        this.mergedFilterSet[t].push(...r);
      }
    }
  };
  const Zr = [
    {
      source: /\s[([]Explicit[)\]]/i,
      target: ""
    },
    {
      source: /\s[([]Clean[)\]]/i,
      target: ""
    }
  ], Kr = [
    {
      source: /\s[([]feat. .+[)\]]/i,
      target: ""
    },
    {
      source: /\s(feat. .+)/i,
      target: ""
    }
  ], Jr = [
    {
      source: /\s-\sLive(\s.+)?$/,
      target: ""
    },
    {
      source: /\s[([]Live[)\]]$/,
      target: ""
    }
  ], Qr = [
    {
      source: /\s[([](feat. .+)[)\]]/i,
      target: " $1"
    }
  ], en = [
    {
      source: /\s\(Parody of ".*" by .*\)$/,
      target: ""
    },
    {
      source: /\s\(Parody of ".*" by .* feat\. .*\)$/,
      target: ""
    },
    {
      source: /\s\(Lyrical Adaption of ".*"\)$/,
      target: ""
    }
  ], tn = [
    {
      source: /\sRe-?issue$/i,
      target: ""
    },
    {
      source: /\s\[.*?Re-?issue.*?\]/i,
      target: ""
    },
    {
      source: /\s\(.*?Re-?issue.*?\)/i,
      target: ""
    }
  ], rn = [
    {
      source: /Live\s\/\sRemastered/,
      target: "Live"
    },
    {
      source: /\s[([].*Re-?[Mm]aster(ed)?.*[)\]]$/,
      target: ""
    },
    {
      source: /\s-\s\d{4}(\s-)?\s.*Re-?[Mm]aster(ed)?.*$/,
      target: ""
    },
    {
      source: /\s-\sRe-?[Mm]aster(ed)?.*$/,
      target: ""
    },
    {
      source: /\s\[Remastered\]\s\(Remastered\sVersion\)$/,
      target: ""
    }
  ], nn = [
    {
      source: /-\s(.+?)\s((Re)?mix|edit|dub|mix|vip|version)$/i,
      target: "($1 $2)"
    },
    {
      source: /-\s(Remix|VIP|Instrumental)$/i,
      target: "($1)"
    }
  ], an = [
    {
      source: /\(+\s*\)+/,
      target: ""
    },
    {
      source: /^[/,:;~\s"-]+/,
      target: ""
    },
    {
      source: /[/,:;~\s"-]+$/,
      target: ""
    },
    {
      source: /\u0020{1,}/,
      target: " "
    }
  ], sn = [
    {
      source: /\s[([]Album Version[)\]]$/,
      target: ""
    },
    {
      source: /\s[([]Re-?recorded[)\]]$/,
      target: ""
    },
    {
      source: /\s[([]Single Version[)\]]$/,
      target: ""
    },
    {
      source: /\s[([]Edit[)\]]$/,
      target: ""
    },
    {
      source: /\s-\sMono Version$/,
      target: ""
    },
    {
      source: /\s-\sStereo Version$/,
      target: ""
    },
    {
      source: /\s\(Deluxe Edition\)$/,
      target: ""
    },
    {
      source: /\s[([]Expanded.*[)\]]$/,
      target: ""
    },
    {
      source: /\s-\sExpanded Edition$/,
      target: ""
    },
    {
      source: /\s[([]Explicit Version[)\]]/i,
      target: ""
    },
    {
      source: /\s[([]Bonus Track Edition[)\]]/i,
      target: ""
    },
    {
      source: /\s[([]\d+th\sAnniversary.*[)\]]/i,
      target: ""
    },
    {
      source: /\s-\sOriginal$/i,
      target: ""
    },
    {
      source: /\s-\sOriginal.*Version(\s\d{4})?$/i,
      target: ""
    }
  ], on = [
    {
      source: /^\s+|\s+$/g,
      target: ""
    },
    {
      source: /\*+\s?\S+\s?\*+$/,
      target: ""
    },
    {
      source: /\[[^\]]+\]/,
      target: ""
    },
    {
      source: /【[^\]]+】/,
      target: ""
    },
    {
      source: /（[^\]]+）/,
      target: ""
    },
    {
      source: /\([^)]*version\)$/i,
      target: ""
    },
    {
      source: /\.(avi|wmv|mpg|mpeg|flv)$/i,
      target: ""
    },
    {
      source: /\(.*lyrics?\s*(video)?\)/i,
      target: ""
    },
    {
      source: /\((of+icial\s*)?(track\s*)?stream\)/i,
      target: ""
    },
    {
      source: /\((of+icial\s*)?(music\s*)?(video|audio)\)/i,
      target: ""
    },
    {
      source: /-\s(of+icial\s*)?(music\s*)?(video|audio)$/i,
      target: ""
    },
    {
      source: /\(.*Album\sTrack\)/i,
      target: ""
    },
    {
      source: /\(\s*of+icial\s*\)/i,
      target: ""
    },
    {
      source: /\(\s*[0-9]{4}\s*\)/i,
      target: ""
    },
    {
      source: /\(\s*(HD|HQ)\s*\)$/,
      target: ""
    },
    {
      source: /(HD|HQ)\s?$/,
      target: ""
    },
    {
      source: /(vid[\u00E9e]o)?\s?clip\sof+ici[ae]l/i,
      target: ""
    },
    {
      source: /of+iziel+es\s*video/i,
      target: ""
    },
    {
      source: /vid[\u00E9e]o\s?clip/i,
      target: ""
    },
    {
      source: /\sclip/i,
      target: ""
    },
    {
      source: /full\s*album/i,
      target: ""
    },
    {
      source: /\(live.*?\)$/i,
      target: ""
    },
    {
      source: /\|.*$/i,
      target: ""
    },
    {
      source: /^(|.*\s)"(.{5,})"(\s.*|)$/,
      target: "$2"
    },
    {
      source: /^(|.*\s)'(.{5,})'(\s.*|)$/,
      target: "$2"
    },
    {
      source: /\(.*[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4}.*\)/i,
      target: ""
    },
    {
      source: /sub\s*español/i,
      target: ""
    },
    {
      source: /\s\(Letra\)/i,
      target: ""
    },
    {
      source: /\s\(En\svivo\)/i,
      target: ""
    },
    {
      source: /sub\s*español/i,
      target: ""
    }
  ], He = {
    "&": /&amp;/g,
    "<": /&lt;/g,
    ">": /&gt;/g,
    '"': /&quot;/g
  };
  function cn(i) {
    return i.includes(" feat. ") ? i.split(" feat. ")[0] : i;
  }
  function un(i) {
    let e = i;
    for (const t in He) {
      const r = He[t];
      e = e.replace(r, t);
    }
    return e = e.replace(/&#x([a-fA-f0-9]+);/g, (t, r) => {
      const n = parseInt(r, 16);
      return String.fromCharCode(n);
    }), e = e.replace(/&#(\d+);/g, (t, r) => String.fromCharCode(r)), e;
  }
  function R(i, e) {
    return e.reduce((t, r) => {
      const { source: n, target: a } = r;
      return t.replace(n, a);
    }, i);
  }
  function j(i) {
    return R(i, nn);
  }
  function Ve(i) {
    return R(i, Qr);
  }
  function Ye(i) {
    return R(i, Zr);
  }
  function ln(i) {
    return R(i, Kr);
  }
  function W(i) {
    return R(i, Jr);
  }
  function pn(i) {
    return R(i, en);
  }
  function mn(i) {
    return R(i, tn);
  }
  function L(i) {
    return R(i, rn);
  }
  function Y(i) {
    return R(i, sn);
  }
  function dn(i) {
    return R(i, [
      ...on,
      ...an
    ]);
  }
  Rn = function() {
    return new X({
      track: dn
    });
  };
  Fn = function() {
    return new X({
      track: L,
      album: L
    });
  };
  Mn = function() {
    return new X({
      track: [
        L,
        pn,
        j,
        W
      ],
      album: [
        L,
        j,
        W,
        mn,
        Y
      ]
    });
  };
  Dn = function() {
    return new X({
      artist: [
        Ve
      ],
      track: [
        Ye,
        ln,
        L,
        j,
        Y,
        W
      ],
      album: [
        un,
        Ye,
        L,
        j,
        Y,
        W
      ],
      albumArtist: [
        Ve,
        cn
      ]
    });
  };
  Bn = function() {
    return new X({
      track: [
        L,
        j,
        Y,
        W
      ],
      album: [
        L,
        j,
        Y,
        W
      ]
    });
  };
});
export {
  Tn as $,
  In as A,
  mt as B,
  En as C,
  x as D,
  I as E,
  nt as F,
  qe as G,
  T as H,
  jt as I,
  F as J,
  Kt as K,
  dt as L,
  X as M,
  ke as N,
  Yt as O,
  Vt as P,
  ii as Q,
  ei as R,
  b as S,
  Vi as T,
  V as U,
  Zt as V,
  wn as W,
  rt as X,
  Ht as Y,
  ve as Z,
  gn as _,
  __tla,
  Mn as a,
  Ur as a0,
  Xi as a1,
  tt as a2,
  Dn as b,
  Rn as c,
  Bn as d,
  Fn as e,
  D as f,
  ut as g,
  N as h,
  kn as i,
  K as j,
  at as k,
  bn as l,
  Ui as m,
  An as n,
  ht as o,
  Cn as p,
  Hi as q,
  it as r,
  _n as s,
  Z as t,
  H as u,
  Xe as v,
  Ae as w,
  vn as x,
  Yi as y,
  Sn as z
};

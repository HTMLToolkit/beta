let o;
function Z(t) {
  const e = o.__externref_table_alloc();
  return o.__wbindgen_externrefs.set(e, t), e;
}
function L(t) {
  const e = typeof t;
  if (e == "number" || e == "boolean" || t == null) return `${t}`;
  if (e == "string") return `"${t}"`;
  if (e == "symbol") {
    const _ = t.description;
    return _ == null ? "Symbol" : `Symbol(${_})`;
  }
  if (e == "function") {
    const _ = t.name;
    return typeof _ == "string" && _.length > 0 ? `Function(${_})` : "Function";
  }
  if (Array.isArray(t)) {
    const _ = t.length;
    let c = "[";
    _ > 0 && (c += L(t[0]));
    for (let s = 1; s < _; s++) c += ", " + L(t[s]);
    return c += "]", c;
  }
  const n = /\[object ([^\]]+)\]/.exec(toString.call(t));
  let r;
  if (n && n.length > 1) r = n[1];
  else return toString.call(t);
  if (r == "Object") try {
    return "Object(" + JSON.stringify(t) + ")";
  } catch {
    return "Object";
  }
  return t instanceof Error ? `${t.name}: ${t.message}
${t.stack}` : r;
}
function P(t, e) {
  return t = t >>> 0, G().subarray(t / 4, t / 4 + e);
}
function W(t, e) {
  return t = t >>> 0, h().subarray(t / 1, t / 1 + e);
}
let l = null;
function f() {
  return (l === null || l.buffer.detached === true || l.buffer.detached === void 0 && l.buffer !== o.memory.buffer) && (l = new DataView(o.memory.buffer)), l;
}
let I = null;
function G() {
  return (I === null || I.byteLength === 0) && (I = new Float32Array(o.memory.buffer)), I;
}
function x(t, e) {
  return t = t >>> 0, te(t, e);
}
let $ = null;
function h() {
  return ($ === null || $.byteLength === 0) && ($ = new Uint8Array(o.memory.buffer)), $;
}
function F(t, e) {
  try {
    return t.apply(this, e);
  } catch (n) {
    const r = Z(n);
    o.__wbindgen_exn_store(r);
  }
}
function p(t) {
  return t == null;
}
function K(t, e) {
  const n = e(t.length * 1, 1) >>> 0;
  return h().set(t, n / 1), w = t.length, n;
}
function U(t, e, n) {
  if (n === void 0) {
    const b = O.encode(t), a = e(b.length, 1) >>> 0;
    return h().subarray(a, a + b.length).set(b), w = b.length, a;
  }
  let r = t.length, _ = e(r, 1) >>> 0;
  const c = h();
  let s = 0;
  for (; s < r; s++) {
    const b = t.charCodeAt(s);
    if (b > 127) break;
    c[_ + s] = b;
  }
  if (s !== r) {
    s !== 0 && (t = t.slice(s)), _ = n(_, r, r = s + t.length * 3, 1) >>> 0;
    const b = h().subarray(_ + s, _ + r), a = O.encodeInto(t, b);
    s += a.written, _ = n(_, r, s, 1) >>> 0;
  }
  return w = s, _;
}
function Q(t) {
  const e = o.__wbindgen_externrefs.get(t);
  return o.__externref_table_dealloc(t), e;
}
let z = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
z.decode();
const ee = 2146435072;
let D = 0;
function te(t, e) {
  return D += e, D >= ee && (z = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), z.decode(), D = e), z.decode(h().subarray(t, t + e));
}
const O = new TextEncoder();
"encodeInto" in O || (O.encodeInto = function(t, e) {
  const n = O.encode(t);
  return e.set(n), { read: t.length, written: n.length };
});
let w = 0;
const V = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t) => o.__wbg_audioinfo_free(t >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((t) => o.__wbg_floinfo_free(t >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((t) => o.__wbg_wasmstreamingdecoder_free(t >>> 0, 1));
let J = class Y {
  static __wrap(e) {
    e = e >>> 0;
    const n = Object.create(Y.prototype);
    return n.__wbg_ptr = e, V.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, V.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    o.__wbg_audioinfo_free(e, 0);
  }
  get sample_rate() {
    return o.__wbg_get_audioinfo_sample_rate(this.__wbg_ptr) >>> 0;
  }
  set sample_rate(e) {
    o.__wbg_set_audioinfo_sample_rate(this.__wbg_ptr, e);
  }
  get channels() {
    return o.__wbg_get_audioinfo_channels(this.__wbg_ptr);
  }
  set channels(e) {
    o.__wbg_set_audioinfo_channels(this.__wbg_ptr, e);
  }
  get bit_depth() {
    return o.__wbg_get_audioinfo_bit_depth(this.__wbg_ptr);
  }
  set bit_depth(e) {
    o.__wbg_set_audioinfo_bit_depth(this.__wbg_ptr, e);
  }
  get total_frames() {
    const e = o.__wbg_get_audioinfo_total_frames(this.__wbg_ptr);
    return BigInt.asUintN(64, e);
  }
  set total_frames(e) {
    o.__wbg_set_audioinfo_total_frames(this.__wbg_ptr, e);
  }
  get duration_secs() {
    return o.__wbg_get_audioinfo_duration_secs(this.__wbg_ptr);
  }
  set duration_secs(e) {
    o.__wbg_set_audioinfo_duration_secs(this.__wbg_ptr, e);
  }
  get file_size() {
    return o.__wbg_get_audioinfo_file_size(this.__wbg_ptr) >>> 0;
  }
  set file_size(e) {
    o.__wbg_set_audioinfo_file_size(this.__wbg_ptr, e);
  }
  get compression_ratio() {
    return o.__wbg_get_audioinfo_compression_ratio(this.__wbg_ptr);
  }
  set compression_ratio(e) {
    o.__wbg_set_audioinfo_compression_ratio(this.__wbg_ptr, e);
  }
  get crc_valid() {
    return o.__wbg_get_audioinfo_crc_valid(this.__wbg_ptr) !== 0;
  }
  set crc_valid(e) {
    o.__wbg_set_audioinfo_crc_valid(this.__wbg_ptr, e);
  }
  get is_lossy() {
    return o.__wbg_get_audioinfo_is_lossy(this.__wbg_ptr) !== 0;
  }
  set is_lossy(e) {
    o.__wbg_set_audioinfo_is_lossy(this.__wbg_ptr, e);
  }
  get lossy_quality() {
    return o.__wbg_get_audioinfo_lossy_quality(this.__wbg_ptr);
  }
  set lossy_quality(e) {
    o.__wbg_set_audioinfo_lossy_quality(this.__wbg_ptr, e);
  }
  get version() {
    let e, n;
    try {
      const r = o.audioinfo_version(this.__wbg_ptr);
      return e = r[0], n = r[1], x(r[0], r[1]);
    } finally {
      o.__wbindgen_free(e, n, 1);
    }
  }
};
Symbol.dispose && (J.prototype[Symbol.dispose] = J.prototype.free);
function le(t) {
  const e = K(t, o.__wbindgen_malloc), n = w, r = o.decode_flo_to_wav(e, n);
  if (r[3]) throw Q(r[2]);
  var _ = W(r[0], r[1]).slice();
  return o.__wbindgen_free(r[0], r[1] * 1, 1), _;
}
const ne = /* @__PURE__ */ new Set(["basic", "cors", "default"]);
async function re(t, e) {
  if (typeof Response == "function" && t instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(t, e);
    } catch (r) {
      if (t.ok && ne.has(t.type) && t.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
      else throw r;
    }
    const n = await t.arrayBuffer();
    return await WebAssembly.instantiate(n, e);
  } else {
    const n = await WebAssembly.instantiate(t, e);
    return n instanceof WebAssembly.Instance ? { instance: n, module: t } : n;
  }
}
function _e() {
  const t = {};
  return t.wbg = {}, t.wbg.__wbg_Error_52673b7de5a0ca89 = function(e, n) {
    return Error(x(e, n));
  }, t.wbg.__wbg_Number_2d1dcfcf4ec51736 = function(e) {
    return Number(e);
  }, t.wbg.__wbg_String_8f0eb39a4a4c2f66 = function(e, n) {
    const r = String(n), _ = U(r, o.__wbindgen_malloc, o.__wbindgen_realloc), c = w;
    f().setInt32(e + 4, c, true), f().setInt32(e + 0, _, true);
  }, t.wbg.__wbg___wbindgen_bigint_get_as_i64_6e32f5e6aff02e1d = function(e, n) {
    const r = n, _ = typeof r == "bigint" ? r : void 0;
    f().setBigInt64(e + 8, p(_) ? BigInt(0) : _, true), f().setInt32(e + 0, !p(_), true);
  }, t.wbg.__wbg___wbindgen_boolean_get_dea25b33882b895b = function(e) {
    const n = e, r = typeof n == "boolean" ? n : void 0;
    return p(r) ? 16777215 : r ? 1 : 0;
  }, t.wbg.__wbg___wbindgen_debug_string_adfb662ae34724b6 = function(e, n) {
    const r = L(n), _ = U(r, o.__wbindgen_malloc, o.__wbindgen_realloc), c = w;
    f().setInt32(e + 4, c, true), f().setInt32(e + 0, _, true);
  }, t.wbg.__wbg___wbindgen_in_0d3e1e8f0c669317 = function(e, n) {
    return e in n;
  }, t.wbg.__wbg___wbindgen_is_bigint_0e1a2e3f55cfae27 = function(e) {
    return typeof e == "bigint";
  }, t.wbg.__wbg___wbindgen_is_function_8d400b8b1af978cd = function(e) {
    return typeof e == "function";
  }, t.wbg.__wbg___wbindgen_is_null_dfda7d66506c95b5 = function(e) {
    return e === null;
  }, t.wbg.__wbg___wbindgen_is_object_ce774f3490692386 = function(e) {
    const n = e;
    return typeof n == "object" && n !== null;
  }, t.wbg.__wbg___wbindgen_is_string_704ef9c8fc131030 = function(e) {
    return typeof e == "string";
  }, t.wbg.__wbg___wbindgen_is_undefined_f6b95eab589e0269 = function(e) {
    return e === void 0;
  }, t.wbg.__wbg___wbindgen_jsval_eq_b6101cc9cef1fe36 = function(e, n) {
    return e === n;
  }, t.wbg.__wbg___wbindgen_jsval_loose_eq_766057600fdd1b0d = function(e, n) {
    return e == n;
  }, t.wbg.__wbg___wbindgen_number_get_9619185a74197f95 = function(e, n) {
    const r = n, _ = typeof r == "number" ? r : void 0;
    f().setFloat64(e + 8, p(_) ? 0 : _, true), f().setInt32(e + 0, !p(_), true);
  }, t.wbg.__wbg___wbindgen_string_get_a2a31e16edf96e42 = function(e, n) {
    const r = n, _ = typeof r == "string" ? r : void 0;
    var c = p(_) ? 0 : U(_, o.__wbindgen_malloc, o.__wbindgen_realloc), s = w;
    f().setInt32(e + 4, s, true), f().setInt32(e + 0, c, true);
  }, t.wbg.__wbg___wbindgen_throw_dd24417ed36fc46e = function(e, n) {
    throw new Error(x(e, n));
  }, t.wbg.__wbg_call_abb4ff46ce38be40 = function() {
    return F(function(e, n) {
      return e.call(n);
    }, arguments);
  }, t.wbg.__wbg_done_62ea16af4ce34b24 = function(e) {
    return e.done;
  }, t.wbg.__wbg_entries_83c79938054e065f = function(e) {
    return Object.entries(e);
  }, t.wbg.__wbg_error_7534b8e9a36f1ab4 = function(e, n) {
    let r, _;
    try {
      r = e, _ = n, console.error(x(e, n));
    } finally {
      o.__wbindgen_free(r, _, 1);
    }
  }, t.wbg.__wbg_from_29a8414a7a7cd19d = function(e) {
    return Array.from(e);
  }, t.wbg.__wbg_get_6b7bd52aca3f9671 = function(e, n) {
    return e[n >>> 0];
  }, t.wbg.__wbg_get_af9dab7e9603ea93 = function() {
    return F(function(e, n) {
      return Reflect.get(e, n);
    }, arguments);
  }, t.wbg.__wbg_get_with_ref_key_1dc361bd10053bfe = function(e, n) {
    return e[n];
  }, t.wbg.__wbg_instanceof_ArrayBuffer_f3320d2419cd0355 = function(e) {
    let n;
    try {
      n = e instanceof ArrayBuffer;
    } catch {
      n = false;
    }
    return n;
  }, t.wbg.__wbg_instanceof_Object_577e21051f7bcb79 = function(e) {
    let n;
    try {
      n = e instanceof Object;
    } catch {
      n = false;
    }
    return n;
  }, t.wbg.__wbg_instanceof_Uint8Array_da54ccc9d3e09434 = function(e) {
    let n;
    try {
      n = e instanceof Uint8Array;
    } catch {
      n = false;
    }
    return n;
  }, t.wbg.__wbg_isArray_51fd9e6422c0a395 = function(e) {
    return Array.isArray(e);
  }, t.wbg.__wbg_isSafeInteger_ae7d3f054d55fa16 = function(e) {
    return Number.isSafeInteger(e);
  }, t.wbg.__wbg_iterator_27b7c8b35ab3e86b = function() {
    return Symbol.iterator;
  }, t.wbg.__wbg_length_22ac23eaec9d8053 = function(e) {
    return e.length;
  }, t.wbg.__wbg_length_86ce4877baf913bb = function(e) {
    return e.length;
  }, t.wbg.__wbg_length_d45040a40c570362 = function(e) {
    return e.length;
  }, t.wbg.__wbg_new_1ba21ce319a06297 = function() {
    return new Object();
  }, t.wbg.__wbg_new_25f239778d6112b9 = function() {
    return new Array();
  }, t.wbg.__wbg_new_6421f6084cc5bc5a = function(e) {
    return new Uint8Array(e);
  }, t.wbg.__wbg_new_8a6f238a6ece86ea = function() {
    return new Error();
  }, t.wbg.__wbg_new_b546ae120718850e = function() {
    return /* @__PURE__ */ new Map();
  }, t.wbg.__wbg_new_from_slice_41e2764a343e3cb1 = function(e, n) {
    return new Float32Array(P(e, n));
  }, t.wbg.__wbg_new_from_slice_f9c22b9153b26992 = function(e, n) {
    return new Uint8Array(W(e, n));
  }, t.wbg.__wbg_new_with_length_95ba657dfb7d3dfb = function(e) {
    return new Float32Array(e >>> 0);
  }, t.wbg.__wbg_next_138a17bbf04e926c = function(e) {
    return e.next;
  }, t.wbg.__wbg_next_3cfe5c0fe2a4cc53 = function() {
    return F(function(e) {
      return e.next();
    }, arguments);
  }, t.wbg.__wbg_prototypesetcall_dfe9b766cdc1f1fd = function(e, n, r) {
    Uint8Array.prototype.set.call(W(e, n), r);
  }, t.wbg.__wbg_set_3f1d0b984ed272ed = function(e, n, r) {
    e[n] = r;
  }, t.wbg.__wbg_set_781438a03c0c3c81 = function() {
    return F(function(e, n, r) {
      return Reflect.set(e, n, r);
    }, arguments);
  }, t.wbg.__wbg_set_7df433eea03a5c14 = function(e, n, r) {
    e[n >>> 0] = r;
  }, t.wbg.__wbg_set_cb0e657d1901c8d8 = function(e, n, r) {
    e.set(P(n, r));
  }, t.wbg.__wbg_set_efaaf145b9377369 = function(e, n, r) {
    return e.set(n, r);
  }, t.wbg.__wbg_stack_0ed75d68575b0f3c = function(e, n) {
    const r = n.stack, _ = U(r, o.__wbindgen_malloc, o.__wbindgen_realloc), c = w;
    f().setInt32(e + 4, c, true), f().setInt32(e + 0, _, true);
  }, t.wbg.__wbg_stringify_655a6390e1f5eb6b = function() {
    return F(function(e) {
      return JSON.stringify(e);
    }, arguments);
  }, t.wbg.__wbg_value_57b7b035e117f7ee = function(e) {
    return e.value;
  }, t.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(e, n) {
    return x(e, n);
  }, t.wbg.__wbindgen_cast_4625c577ab2ec9ee = function(e) {
    return BigInt.asUintN(64, e);
  }, t.wbg.__wbindgen_cast_cb9088102bce6b30 = function(e, n) {
    return W(e, n);
  }, t.wbg.__wbindgen_cast_d6cd19b81560fd6e = function(e) {
    return e;
  }, t.wbg.__wbindgen_init_externref_table = function() {
    const e = o.__wbindgen_externrefs, n = e.grow(4);
    e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, true), e.set(n + 3, false);
  }, t;
}
function ie(t, e) {
  return o = t.exports, oe.__wbindgen_wasm_module = e, l = null, I = null, $ = null, o.__wbindgen_start(), o;
}
async function oe(t) {
  if (o !== void 0) return o;
  typeof t < "u" && (Object.getPrototypeOf(t) === Object.prototype ? { module_or_path: t } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof t > "u" && (t = new URL("/beta/HTMLPlayer/assets/reflo_bg-DROH2Zqt.wasm", import.meta.url));
  const e = _e();
  (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
  const { instance: n, module: r } = await re(await t, e);
  return ie(n, r);
}
let i;
function se(t) {
  const e = i.__externref_table_alloc();
  return i.__wbindgen_externrefs.set(e, t), e;
}
function C(t) {
  const e = typeof t;
  if (e == "number" || e == "boolean" || t == null) return `${t}`;
  if (e == "string") return `"${t}"`;
  if (e == "symbol") {
    const _ = t.description;
    return _ == null ? "Symbol" : `Symbol(${_})`;
  }
  if (e == "function") {
    const _ = t.name;
    return typeof _ == "string" && _.length > 0 ? `Function(${_})` : "Function";
  }
  if (Array.isArray(t)) {
    const _ = t.length;
    let c = "[";
    _ > 0 && (c += C(t[0]));
    for (let s = 1; s < _; s++) c += ", " + C(t[s]);
    return c += "]", c;
  }
  const n = /\[object ([^\]]+)\]/.exec(toString.call(t));
  let r;
  if (n && n.length > 1) r = n[1];
  else return toString.call(t);
  if (r == "Object") try {
    return "Object(" + JSON.stringify(t) + ")";
  } catch {
    return "Object";
  }
  return t instanceof Error ? `${t.name}: ${t.message}
${t.stack}` : r;
}
function H(t, e) {
  return t = t >>> 0, ce().subarray(t / 4, t / 4 + e);
}
function q(t, e) {
  return t = t >>> 0, A().subarray(t / 1, t / 1 + e);
}
let y = null;
function g() {
  return (y === null || y.buffer.detached === true || y.buffer.detached === void 0 && y.buffer !== i.memory.buffer) && (y = new DataView(i.memory.buffer)), y;
}
let E = null;
function ce() {
  return (E === null || E.byteLength === 0) && (E = new Float32Array(i.memory.buffer)), E;
}
function B(t, e) {
  return t = t >>> 0, fe(t, e);
}
let R = null;
function A() {
  return (R === null || R.byteLength === 0) && (R = new Uint8Array(i.memory.buffer)), R;
}
function S(t, e) {
  try {
    return t.apply(this, e);
  } catch (n) {
    const r = se(n);
    i.__wbindgen_exn_store(r);
  }
}
function m(t) {
  return t == null;
}
function M(t, e) {
  const n = e(t.length * 1, 1) >>> 0;
  return A().set(t, n / 1), u = t.length, n;
}
function v(t, e, n) {
  if (n === void 0) {
    const b = j.encode(t), a = e(b.length, 1) >>> 0;
    return A().subarray(a, a + b.length).set(b), u = b.length, a;
  }
  let r = t.length, _ = e(r, 1) >>> 0;
  const c = A();
  let s = 0;
  for (; s < r; s++) {
    const b = t.charCodeAt(s);
    if (b > 127) break;
    c[_ + s] = b;
  }
  if (s !== r) {
    s !== 0 && (t = t.slice(s)), _ = n(_, r, r = s + t.length * 3, 1) >>> 0;
    const b = A().subarray(_ + s, _ + r), a = j.encodeInto(t, b);
    s += a.written, _ = n(_, r, s, 1) >>> 0;
  }
  return u = s, _;
}
function d(t) {
  const e = i.__wbindgen_externrefs.get(t);
  return i.__externref_table_dealloc(t), e;
}
let N = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
N.decode();
const be = 2146435072;
let k = 0;
function fe(t, e) {
  return k += e, k >= be && (N = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), N.decode(), k = e), N.decode(A().subarray(t, t + e));
}
const j = new TextEncoder();
"encodeInto" in j || (j.encodeInto = function(t, e) {
  const n = j.encode(t);
  return e.set(n), { read: t.length, written: n.length };
});
let u = 0;
const X = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t) => i.__wbg_audioinfo_free(t >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((t) => i.__wbg_wasmstreamingdecoder_free(t >>> 0, 1));
class T {
  static __wrap(e) {
    e = e >>> 0;
    const n = Object.create(T.prototype);
    return n.__wbg_ptr = e, X.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, X.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    i.__wbg_audioinfo_free(e, 0);
  }
  get sample_rate() {
    return i.__wbg_get_audioinfo_sample_rate(this.__wbg_ptr) >>> 0;
  }
  set sample_rate(e) {
    i.__wbg_set_audioinfo_sample_rate(this.__wbg_ptr, e);
  }
  get channels() {
    return i.__wbg_get_audioinfo_channels(this.__wbg_ptr);
  }
  set channels(e) {
    i.__wbg_set_audioinfo_channels(this.__wbg_ptr, e);
  }
  get bit_depth() {
    return i.__wbg_get_audioinfo_bit_depth(this.__wbg_ptr);
  }
  set bit_depth(e) {
    i.__wbg_set_audioinfo_bit_depth(this.__wbg_ptr, e);
  }
  get total_frames() {
    const e = i.__wbg_get_audioinfo_total_frames(this.__wbg_ptr);
    return BigInt.asUintN(64, e);
  }
  set total_frames(e) {
    i.__wbg_set_audioinfo_total_frames(this.__wbg_ptr, e);
  }
  get duration_secs() {
    return i.__wbg_get_audioinfo_duration_secs(this.__wbg_ptr);
  }
  set duration_secs(e) {
    i.__wbg_set_audioinfo_duration_secs(this.__wbg_ptr, e);
  }
  get file_size() {
    return i.__wbg_get_audioinfo_file_size(this.__wbg_ptr) >>> 0;
  }
  set file_size(e) {
    i.__wbg_set_audioinfo_file_size(this.__wbg_ptr, e);
  }
  get compression_ratio() {
    return i.__wbg_get_audioinfo_compression_ratio(this.__wbg_ptr);
  }
  set compression_ratio(e) {
    i.__wbg_set_audioinfo_compression_ratio(this.__wbg_ptr, e);
  }
  get crc_valid() {
    return i.__wbg_get_audioinfo_crc_valid(this.__wbg_ptr) !== 0;
  }
  set crc_valid(e) {
    i.__wbg_set_audioinfo_crc_valid(this.__wbg_ptr, e);
  }
  get is_lossy() {
    return i.__wbg_get_audioinfo_is_lossy(this.__wbg_ptr) !== 0;
  }
  set is_lossy(e) {
    i.__wbg_set_audioinfo_is_lossy(this.__wbg_ptr, e);
  }
  get lossy_quality() {
    return i.__wbg_get_audioinfo_lossy_quality(this.__wbg_ptr);
  }
  set lossy_quality(e) {
    i.__wbg_set_audioinfo_lossy_quality(this.__wbg_ptr, e);
  }
  get version() {
    let e, n;
    try {
      const r = i.audioinfo_version(this.__wbg_ptr);
      return e = r[0], n = r[1], B(r[0], r[1]);
    } finally {
      i.__wbindgen_free(e, n, 1);
    }
  }
}
Symbol.dispose && (T.prototype[Symbol.dispose] = T.prototype.free);
function ye(t) {
  const e = M(t, i.__wbindgen_malloc), n = u, r = i.decode(e, n);
  if (r[3]) throw d(r[2]);
  var _ = H(r[0], r[1]).slice();
  return i.__wbindgen_free(r[0], r[1] * 4, 4), _;
}
function pe(t) {
  const e = M(t, i.__wbindgen_malloc), n = u, r = i.get_cover_art(e, n);
  if (r[2]) throw d(r[1]);
  return d(r[0]);
}
function me(t) {
  const e = M(t, i.__wbindgen_malloc), n = u, r = i.get_metadata(e, n);
  if (r[2]) throw d(r[1]);
  return d(r[0]);
}
function he(t) {
  const e = M(t, i.__wbindgen_malloc), n = u, r = i.get_synced_lyrics(e, n);
  if (r[2]) throw d(r[1]);
  return d(r[0]);
}
function Ae(t) {
  const e = M(t, i.__wbindgen_malloc), n = u, r = i.info(e, n);
  if (r[2]) throw d(r[1]);
  return T.__wrap(r[0]);
}
const ae = /* @__PURE__ */ new Set(["basic", "cors", "default"]);
async function ue(t, e) {
  if (typeof Response == "function" && t instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(t, e);
    } catch (r) {
      if (t.ok && ae.has(t.type) && t.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
      else throw r;
    }
    const n = await t.arrayBuffer();
    return await WebAssembly.instantiate(n, e);
  } else {
    const n = await WebAssembly.instantiate(t, e);
    return n instanceof WebAssembly.Instance ? { instance: n, module: t } : n;
  }
}
function ge() {
  const t = {};
  return t.wbg = {}, t.wbg.__wbg_Error_52673b7de5a0ca89 = function(e, n) {
    return Error(B(e, n));
  }, t.wbg.__wbg_Number_2d1dcfcf4ec51736 = function(e) {
    return Number(e);
  }, t.wbg.__wbg_String_8f0eb39a4a4c2f66 = function(e, n) {
    const r = String(n), _ = v(r, i.__wbindgen_malloc, i.__wbindgen_realloc), c = u;
    g().setInt32(e + 4, c, true), g().setInt32(e + 0, _, true);
  }, t.wbg.__wbg___wbindgen_bigint_get_as_i64_6e32f5e6aff02e1d = function(e, n) {
    const r = n, _ = typeof r == "bigint" ? r : void 0;
    g().setBigInt64(e + 8, m(_) ? BigInt(0) : _, true), g().setInt32(e + 0, !m(_), true);
  }, t.wbg.__wbg___wbindgen_boolean_get_dea25b33882b895b = function(e) {
    const n = e, r = typeof n == "boolean" ? n : void 0;
    return m(r) ? 16777215 : r ? 1 : 0;
  }, t.wbg.__wbg___wbindgen_debug_string_adfb662ae34724b6 = function(e, n) {
    const r = C(n), _ = v(r, i.__wbindgen_malloc, i.__wbindgen_realloc), c = u;
    g().setInt32(e + 4, c, true), g().setInt32(e + 0, _, true);
  }, t.wbg.__wbg___wbindgen_in_0d3e1e8f0c669317 = function(e, n) {
    return e in n;
  }, t.wbg.__wbg___wbindgen_is_bigint_0e1a2e3f55cfae27 = function(e) {
    return typeof e == "bigint";
  }, t.wbg.__wbg___wbindgen_is_function_8d400b8b1af978cd = function(e) {
    return typeof e == "function";
  }, t.wbg.__wbg___wbindgen_is_null_dfda7d66506c95b5 = function(e) {
    return e === null;
  }, t.wbg.__wbg___wbindgen_is_object_ce774f3490692386 = function(e) {
    const n = e;
    return typeof n == "object" && n !== null;
  }, t.wbg.__wbg___wbindgen_is_string_704ef9c8fc131030 = function(e) {
    return typeof e == "string";
  }, t.wbg.__wbg___wbindgen_is_undefined_f6b95eab589e0269 = function(e) {
    return e === void 0;
  }, t.wbg.__wbg___wbindgen_jsval_eq_b6101cc9cef1fe36 = function(e, n) {
    return e === n;
  }, t.wbg.__wbg___wbindgen_jsval_loose_eq_766057600fdd1b0d = function(e, n) {
    return e == n;
  }, t.wbg.__wbg___wbindgen_number_get_9619185a74197f95 = function(e, n) {
    const r = n, _ = typeof r == "number" ? r : void 0;
    g().setFloat64(e + 8, m(_) ? 0 : _, true), g().setInt32(e + 0, !m(_), true);
  }, t.wbg.__wbg___wbindgen_string_get_a2a31e16edf96e42 = function(e, n) {
    const r = n, _ = typeof r == "string" ? r : void 0;
    var c = m(_) ? 0 : v(_, i.__wbindgen_malloc, i.__wbindgen_realloc), s = u;
    g().setInt32(e + 4, s, true), g().setInt32(e + 0, c, true);
  }, t.wbg.__wbg___wbindgen_throw_dd24417ed36fc46e = function(e, n) {
    throw new Error(B(e, n));
  }, t.wbg.__wbg_call_abb4ff46ce38be40 = function() {
    return S(function(e, n) {
      return e.call(n);
    }, arguments);
  }, t.wbg.__wbg_done_62ea16af4ce34b24 = function(e) {
    return e.done;
  }, t.wbg.__wbg_entries_83c79938054e065f = function(e) {
    return Object.entries(e);
  }, t.wbg.__wbg_from_29a8414a7a7cd19d = function(e) {
    return Array.from(e);
  }, t.wbg.__wbg_get_6b7bd52aca3f9671 = function(e, n) {
    return e[n >>> 0];
  }, t.wbg.__wbg_get_af9dab7e9603ea93 = function() {
    return S(function(e, n) {
      return Reflect.get(e, n);
    }, arguments);
  }, t.wbg.__wbg_get_with_ref_key_1dc361bd10053bfe = function(e, n) {
    return e[n];
  }, t.wbg.__wbg_instanceof_ArrayBuffer_f3320d2419cd0355 = function(e) {
    let n;
    try {
      n = e instanceof ArrayBuffer;
    } catch {
      n = false;
    }
    return n;
  }, t.wbg.__wbg_instanceof_Uint8Array_da54ccc9d3e09434 = function(e) {
    let n;
    try {
      n = e instanceof Uint8Array;
    } catch {
      n = false;
    }
    return n;
  }, t.wbg.__wbg_isArray_51fd9e6422c0a395 = function(e) {
    return Array.isArray(e);
  }, t.wbg.__wbg_isSafeInteger_ae7d3f054d55fa16 = function(e) {
    return Number.isSafeInteger(e);
  }, t.wbg.__wbg_iterator_27b7c8b35ab3e86b = function() {
    return Symbol.iterator;
  }, t.wbg.__wbg_length_22ac23eaec9d8053 = function(e) {
    return e.length;
  }, t.wbg.__wbg_length_86ce4877baf913bb = function(e) {
    return e.length;
  }, t.wbg.__wbg_length_d45040a40c570362 = function(e) {
    return e.length;
  }, t.wbg.__wbg_new_1ba21ce319a06297 = function() {
    return new Object();
  }, t.wbg.__wbg_new_25f239778d6112b9 = function() {
    return new Array();
  }, t.wbg.__wbg_new_6421f6084cc5bc5a = function(e) {
    return new Uint8Array(e);
  }, t.wbg.__wbg_new_b546ae120718850e = function() {
    return /* @__PURE__ */ new Map();
  }, t.wbg.__wbg_new_from_slice_f9c22b9153b26992 = function(e, n) {
    return new Uint8Array(q(e, n));
  }, t.wbg.__wbg_new_with_length_95ba657dfb7d3dfb = function(e) {
    return new Float32Array(e >>> 0);
  }, t.wbg.__wbg_next_138a17bbf04e926c = function(e) {
    return e.next;
  }, t.wbg.__wbg_next_3cfe5c0fe2a4cc53 = function() {
    return S(function(e) {
      return e.next();
    }, arguments);
  }, t.wbg.__wbg_prototypesetcall_dfe9b766cdc1f1fd = function(e, n, r) {
    Uint8Array.prototype.set.call(q(e, n), r);
  }, t.wbg.__wbg_set_3f1d0b984ed272ed = function(e, n, r) {
    e[n] = r;
  }, t.wbg.__wbg_set_781438a03c0c3c81 = function() {
    return S(function(e, n, r) {
      return Reflect.set(e, n, r);
    }, arguments);
  }, t.wbg.__wbg_set_7df433eea03a5c14 = function(e, n, r) {
    e[n >>> 0] = r;
  }, t.wbg.__wbg_set_cb0e657d1901c8d8 = function(e, n, r) {
    e.set(H(n, r));
  }, t.wbg.__wbg_set_efaaf145b9377369 = function(e, n, r) {
    return e.set(n, r);
  }, t.wbg.__wbg_stringify_655a6390e1f5eb6b = function() {
    return S(function(e) {
      return JSON.stringify(e);
    }, arguments);
  }, t.wbg.__wbg_value_57b7b035e117f7ee = function(e) {
    return e.value;
  }, t.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(e, n) {
    return B(e, n);
  }, t.wbg.__wbindgen_cast_4625c577ab2ec9ee = function(e) {
    return BigInt.asUintN(64, e);
  }, t.wbg.__wbindgen_cast_cb9088102bce6b30 = function(e, n) {
    return q(e, n);
  }, t.wbg.__wbindgen_cast_d6cd19b81560fd6e = function(e) {
    return e;
  }, t.wbg.__wbindgen_init_externref_table = function() {
    const e = i.__wbindgen_externrefs, n = e.grow(4);
    e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, true), e.set(n + 3, false);
  }, t;
}
function we(t, e) {
  return i = t.exports, de.__wbindgen_wasm_module = e, y = null, E = null, R = null, i.__wbindgen_start(), i;
}
async function de(t) {
  if (i !== void 0) return i;
  typeof t < "u" && (Object.getPrototypeOf(t) === Object.prototype ? { module_or_path: t } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof t > "u" && (t = new URL("/beta/HTMLPlayer/assets/libflo_audio_bg-B6Abkcq5.wasm", import.meta.url));
  const e = ge();
  (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
  const { instance: n, module: r } = await ue(await t, e);
  return we(n, r);
}
export {
  de as _,
  pe as a,
  he as b,
  le as c,
  ye as d,
  oe as e,
  me as g,
  Ae as i
};

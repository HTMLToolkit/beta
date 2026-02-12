const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/browser-ponyfill-D6KoWY7P.js","assets/vendor-react-C6Febm84.js"])))=>i.map(i=>d[i]);
import { r as P } from "./vendor-ui-BG0coi97.js";
import { s as it } from "./vendor-uppy-DElw6E-D.js";
let tn, On, ot, bn, vn, j, wn;
let __tla = (async () => {
  let st, rt, xe, g, X, Se, at, lt, ve, we, J, Oe, ut, ne, ft, ze, K;
  st = "modulepreload";
  rt = function(s) {
    return "/beta/HTMLPlayer/" + s;
  };
  xe = {};
  ot = function(e, t, n) {
    let i = Promise.resolve();
    if (t && t.length > 0) {
      let l = function(u) {
        return Promise.all(u.map((c) => Promise.resolve(c).then((f) => ({
          status: "fulfilled",
          value: f
        }), (f) => ({
          status: "rejected",
          reason: f
        }))));
      };
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"), a = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
      i = l(t.map((u) => {
        if (u = rt(u), u in xe) return;
        xe[u] = true;
        const c = u.endsWith(".css"), f = c ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${u}"]${f}`)) return;
        const d = document.createElement("link");
        if (d.rel = c ? "stylesheet" : st, c || (d.as = "script"), d.crossOrigin = "", d.href = u, a && d.setAttribute("nonce", a), document.head.appendChild(d), c) return new Promise((h, p) => {
          d.addEventListener("load", h), d.addEventListener("error", () => p(new Error(`Unable to preload CSS for ${u}`)));
        });
      }));
    }
    function r(o) {
      const a = new Event("vite:preloadError", {
        cancelable: true
      });
      if (a.payload = o, window.dispatchEvent(a), !a.defaultPrevented) throw o;
    }
    return i.then((o) => {
      for (const a of o || []) a.status === "rejected" && r(a.reason);
      return e().catch(r);
    });
  };
  g = (s) => typeof s == "string";
  X = () => {
    let s, e;
    const t = new Promise((n, i) => {
      s = n, e = i;
    });
    return t.resolve = s, t.reject = e, t;
  };
  Se = (s) => s == null ? "" : "" + s;
  at = (s, e, t) => {
    s.forEach((n) => {
      e[n] && (t[n] = e[n]);
    });
  };
  lt = /###/g;
  ve = (s) => s && s.indexOf("###") > -1 ? s.replace(lt, ".") : s;
  we = (s) => !s || g(s);
  J = (s, e, t) => {
    const n = g(e) ? e.split(".") : e;
    let i = 0;
    for (; i < n.length - 1; ) {
      if (we(s)) return {};
      const r = ve(n[i]);
      !s[r] && t && (s[r] = new t()), Object.prototype.hasOwnProperty.call(s, r) ? s = s[r] : s = {}, ++i;
    }
    return we(s) ? {} : {
      obj: s,
      k: ve(n[i])
    };
  };
  Oe = (s, e, t) => {
    const { obj: n, k: i } = J(s, e, Object);
    if (n !== void 0 || e.length === 1) {
      n[i] = t;
      return;
    }
    let r = e[e.length - 1], o = e.slice(0, e.length - 1), a = J(s, o, Object);
    for (; a.obj === void 0 && o.length; ) r = `${o[o.length - 1]}.${r}`, o = o.slice(0, o.length - 1), a = J(s, o, Object), (a == null ? void 0 : a.obj) && typeof a.obj[`${a.k}.${r}`] < "u" && (a.obj = void 0);
    a.obj[`${a.k}.${r}`] = t;
  };
  ut = (s, e, t, n) => {
    const { obj: i, k: r } = J(s, e, Object);
    i[r] = i[r] || [], i[r].push(t);
  };
  ne = (s, e) => {
    const { obj: t, k: n } = J(s, e);
    if (t && Object.prototype.hasOwnProperty.call(t, n)) return t[n];
  };
  ft = (s, e, t) => {
    const n = ne(s, t);
    return n !== void 0 ? n : ne(e, t);
  };
  ze = (s, e, t) => {
    for (const n in e) n !== "__proto__" && n !== "constructor" && (n in s ? g(s[n]) || s[n] instanceof String || g(e[n]) || e[n] instanceof String ? t && (s[n] = e[n]) : ze(s[n], e[n], t) : s[n] = e[n]);
    return s;
  };
  K = (s) => s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  var ct = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
  };
  const dt = (s) => g(s) ? s.replace(/[&<>"'\/]/g, (e) => ct[e]) : s;
  class ht {
    constructor(e) {
      this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
    }
    getRegExp(e) {
      const t = this.regExpMap.get(e);
      if (t !== void 0) return t;
      const n = new RegExp(e);
      return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n;
    }
  }
  const pt = [
    " ",
    ",",
    "?",
    "!",
    ";"
  ], gt = new ht(20), mt = (s, e, t) => {
    e = e || "", t = t || "";
    const n = pt.filter((o) => e.indexOf(o) < 0 && t.indexOf(o) < 0);
    if (n.length === 0) return true;
    const i = gt.getRegExp(`(${n.map((o) => o === "?" ? "\\?" : o).join("|")})`);
    let r = !i.test(s);
    if (!r) {
      const o = s.indexOf(t);
      o > 0 && !i.test(s.substring(0, o)) && (r = true);
    }
    return r;
  }, ce = (s, e, t = ".") => {
    if (!s) return;
    if (s[e]) return Object.prototype.hasOwnProperty.call(s, e) ? s[e] : void 0;
    const n = e.split(t);
    let i = s;
    for (let r = 0; r < n.length; ) {
      if (!i || typeof i != "object") return;
      let o, a = "";
      for (let l = r; l < n.length; ++l) if (l !== r && (a += t), a += n[l], o = i[a], o !== void 0) {
        if ([
          "string",
          "number",
          "boolean"
        ].indexOf(typeof o) > -1 && l < n.length - 1) continue;
        r += l - r + 1;
        break;
      }
      i = o;
    }
    return i;
  }, Q = (s) => s == null ? void 0 : s.replace("_", "-"), yt = {
    type: "logger",
    log(s) {
      this.output("log", s);
    },
    warn(s) {
      this.output("warn", s);
    },
    error(s) {
      this.output("error", s);
    },
    output(s, e) {
      var _a, _b;
      (_b = (_a = console == null ? void 0 : console[s]) == null ? void 0 : _a.apply) == null ? void 0 : _b.call(_a, console, e);
    }
  };
  class ie {
    constructor(e, t = {}) {
      this.init(e, t);
    }
    init(e, t = {}) {
      this.prefix = t.prefix || "i18next:", this.logger = e || yt, this.options = t, this.debug = t.debug;
    }
    log(...e) {
      return this.forward(e, "log", "", true);
    }
    warn(...e) {
      return this.forward(e, "warn", "", true);
    }
    error(...e) {
      return this.forward(e, "error", "");
    }
    deprecate(...e) {
      return this.forward(e, "warn", "WARNING DEPRECATED: ", true);
    }
    forward(e, t, n, i) {
      return i && !this.debug ? null : (g(e[0]) && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e));
    }
    create(e) {
      return new ie(this.logger, {
        prefix: `${this.prefix}:${e}:`,
        ...this.options
      });
    }
    clone(e) {
      return e = e || this.options, e.prefix = e.prefix || this.prefix, new ie(this.logger, e);
    }
  }
  var F = new ie();
  class oe {
    constructor() {
      this.observers = {};
    }
    on(e, t) {
      return e.split(" ").forEach((n) => {
        this.observers[n] || (this.observers[n] = /* @__PURE__ */ new Map());
        const i = this.observers[n].get(t) || 0;
        this.observers[n].set(t, i + 1);
      }), this;
    }
    off(e, t) {
      if (this.observers[e]) {
        if (!t) {
          delete this.observers[e];
          return;
        }
        this.observers[e].delete(t);
      }
    }
    emit(e, ...t) {
      this.observers[e] && Array.from(this.observers[e].entries()).forEach(([i, r]) => {
        for (let o = 0; o < r; o++) i(...t);
      }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([i, r]) => {
        for (let o = 0; o < r; o++) i.apply(i, [
          e,
          ...t
        ]);
      });
    }
  }
  class Le extends oe {
    constructor(e, t = {
      ns: [
        "translation"
      ],
      defaultNS: "translation"
    }) {
      super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = true);
    }
    addNamespaces(e) {
      this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
    }
    removeNamespaces(e) {
      const t = this.options.ns.indexOf(e);
      t > -1 && this.options.ns.splice(t, 1);
    }
    getResource(e, t, n, i = {}) {
      var _a, _b;
      const r = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, o = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
      let a;
      e.indexOf(".") > -1 ? a = e.split(".") : (a = [
        e,
        t
      ], n && (Array.isArray(n) ? a.push(...n) : g(n) && r ? a.push(...n.split(r)) : a.push(n)));
      const l = ne(this.data, a);
      return !l && !t && !n && e.indexOf(".") > -1 && (e = a[0], t = a[1], n = a.slice(2).join(".")), l || !o || !g(n) ? l : ce((_b = (_a = this.data) == null ? void 0 : _a[e]) == null ? void 0 : _b[t], n, r);
    }
    addResource(e, t, n, i, r = {
      silent: false
    }) {
      const o = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
      let a = [
        e,
        t
      ];
      n && (a = a.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && (a = e.split("."), i = t, t = a[1]), this.addNamespaces(t), Oe(this.data, a, i), r.silent || this.emit("added", e, t, n, i);
    }
    addResources(e, t, n, i = {
      silent: false
    }) {
      for (const r in n) (g(n[r]) || Array.isArray(n[r])) && this.addResource(e, t, r, n[r], {
        silent: true
      });
      i.silent || this.emit("added", e, t, n);
    }
    addResourceBundle(e, t, n, i, r, o = {
      silent: false,
      skipCopy: false
    }) {
      let a = [
        e,
        t
      ];
      e.indexOf(".") > -1 && (a = e.split("."), i = n, n = t, t = a[1]), this.addNamespaces(t);
      let l = ne(this.data, a) || {};
      o.skipCopy || (n = JSON.parse(JSON.stringify(n))), i ? ze(l, n, r) : l = {
        ...l,
        ...n
      }, Oe(this.data, a, l), o.silent || this.emit("added", e, t, n);
    }
    removeResourceBundle(e, t) {
      this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
    }
    hasResourceBundle(e, t) {
      return this.getResource(e, t) !== void 0;
    }
    getResourceBundle(e, t) {
      return t || (t = this.options.defaultNS), this.getResource(e, t);
    }
    getDataByLanguage(e) {
      return this.data[e];
    }
    hasLanguageSomeTranslations(e) {
      const t = this.getDataByLanguage(e);
      return !!(t && Object.keys(t) || []).find((i) => t[i] && Object.keys(t[i]).length > 0);
    }
    toJSON() {
      return this.data;
    }
  }
  var Be = {
    processors: {},
    addPostProcessor(s) {
      this.processors[s.name] = s;
    },
    handle(s, e, t, n, i) {
      return s.forEach((r) => {
        var _a;
        e = ((_a = this.processors[r]) == null ? void 0 : _a.process(e, t, n, i)) ?? e;
      }), e;
    }
  };
  const Xe = /* @__PURE__ */ Symbol("i18next/PATH_KEY");
  function bt() {
    const s = [], e = /* @__PURE__ */ Object.create(null);
    let t;
    return e.get = (n, i) => {
      var _a;
      return (_a = t == null ? void 0 : t.revoke) == null ? void 0 : _a.call(t), i === Xe ? s : (s.push(i), t = Proxy.revocable(n, e), t.proxy);
    }, Proxy.revocable(/* @__PURE__ */ Object.create(null), e).proxy;
  }
  function de(s, e) {
    const { [Xe]: t } = s(bt());
    return t.join((e == null ? void 0 : e.keySeparator) ?? ".");
  }
  const Pe = {}, ae = (s) => !g(s) && typeof s != "boolean" && typeof s != "number";
  class se extends oe {
    constructor(e, t = {}) {
      super(), at([
        "resourceStore",
        "languageUtils",
        "pluralResolver",
        "interpolator",
        "backendConnector",
        "i18nFormat",
        "utils"
      ], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = F.create("translator");
    }
    changeLanguage(e) {
      e && (this.language = e);
    }
    exists(e, t = {
      interpolation: {}
    }) {
      const n = {
        ...t
      };
      if (e == null) return false;
      const i = this.resolve(e, n);
      if ((i == null ? void 0 : i.res) === void 0) return false;
      const r = ae(i.res);
      return !(n.returnObjects === false && r);
    }
    extractFromKey(e, t) {
      let n = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
      n === void 0 && (n = ":");
      const i = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
      let r = t.ns || this.options.defaultNS || [];
      const o = n && e.indexOf(n) > -1, a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !mt(e, n, i);
      if (o && !a) {
        const l = e.match(this.interpolator.nestingRegexp);
        if (l && l.length > 0) return {
          key: e,
          namespaces: g(r) ? [
            r
          ] : r
        };
        const u = e.split(n);
        (n !== i || n === i && this.options.ns.indexOf(u[0]) > -1) && (r = u.shift()), e = u.join(i);
      }
      return {
        key: e,
        namespaces: g(r) ? [
          r
        ] : r
      };
    }
    translate(e, t, n) {
      let i = typeof t == "object" ? {
        ...t
      } : t;
      if (typeof i != "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), typeof i == "object" && (i = {
        ...i
      }), i || (i = {}), e == null) return "";
      typeof e == "function" && (e = de(e, {
        ...this.options,
        ...i
      })), Array.isArray(e) || (e = [
        String(e)
      ]);
      const r = i.returnDetails !== void 0 ? i.returnDetails : this.options.returnDetails, o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, { key: a, namespaces: l } = this.extractFromKey(e[e.length - 1], i), u = l[l.length - 1];
      let c = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
      c === void 0 && (c = ":");
      const f = i.lng || this.language, d = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if ((f == null ? void 0 : f.toLowerCase()) === "cimode") return d ? r ? {
        res: `${u}${c}${a}`,
        usedKey: a,
        exactUsedKey: a,
        usedLng: f,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(i)
      } : `${u}${c}${a}` : r ? {
        res: a,
        usedKey: a,
        exactUsedKey: a,
        usedLng: f,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(i)
      } : a;
      const h = this.resolve(e, i);
      let p = h == null ? void 0 : h.res;
      const b = (h == null ? void 0 : h.usedKey) || a, x = (h == null ? void 0 : h.exactUsedKey) || a, $ = [
        "[object Number]",
        "[object Function]",
        "[object RegExp]"
      ], v = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays, C = !this.i18nFormat || this.i18nFormat.handleAsObject, O = i.count !== void 0 && !g(i.count), k = se.hasDefaultValue(i), E = O ? this.pluralResolver.getSuffix(f, i.count, i) : "", I = i.ordinal && O ? this.pluralResolver.getSuffix(f, i.count, {
        ordinal: false
      }) : "", G = O && !i.ordinal && i.count === 0, y = G && i[`defaultValue${this.options.pluralSeparator}zero`] || i[`defaultValue${E}`] || i[`defaultValue${I}`] || i.defaultValue;
      let m = p;
      C && !p && k && (m = y);
      const S = ae(m), w = Object.prototype.toString.apply(m);
      if (C && m && S && $.indexOf(w) < 0 && !(g(v) && Array.isArray(m))) {
        if (!i.returnObjects && !this.options.returnObjects) {
          this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          const L = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(b, m, {
            ...i,
            ns: l
          }) : `key '${a} (${this.language})' returned an object instead of string.`;
          return r ? (h.res = L, h.usedParams = this.getUsedParamsDetails(i), h) : L;
        }
        if (o) {
          const L = Array.isArray(m), R = L ? [] : {}, Z = L ? x : b;
          for (const T in m) if (Object.prototype.hasOwnProperty.call(m, T)) {
            const D = `${Z}${o}${T}`;
            k && !p ? R[T] = this.translate(D, {
              ...i,
              defaultValue: ae(y) ? y[T] : void 0,
              joinArrays: false,
              ns: l
            }) : R[T] = this.translate(D, {
              ...i,
              joinArrays: false,
              ns: l
            }), R[T] === D && (R[T] = m[T]);
          }
          p = R;
        }
      } else if (C && g(v) && Array.isArray(p)) p = p.join(v), p && (p = this.extendTranslation(p, e, i, n));
      else {
        let L = false, R = false;
        !this.isValidLookup(p) && k && (L = true, p = y), this.isValidLookup(p) || (R = true, p = a);
        const T = (i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && R ? void 0 : p, D = k && y !== p && this.options.updateMissing;
        if (R || L || D) {
          if (this.logger.log(D ? "updateKey" : "missingKey", f, u, a, D ? y : p), o) {
            const N = this.resolve(a, {
              ...i,
              keySeparator: false
            });
            N && N.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          let z = [];
          const ee = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
          if (this.options.saveMissingTo === "fallback" && ee && ee[0]) for (let N = 0; N < ee.length; N++) z.push(ee[N]);
          else this.options.saveMissingTo === "all" ? z = this.languageUtils.toResolveHierarchy(i.lng || this.language) : z.push(i.lng || this.language);
          const ye = (N, H, B) => {
            var _a;
            const be = k && B !== p ? B : T;
            this.options.missingKeyHandler ? this.options.missingKeyHandler(N, u, H, be, D, i) : ((_a = this.backendConnector) == null ? void 0 : _a.saveMissing) && this.backendConnector.saveMissing(N, u, H, be, D, i), this.emit("missingKey", N, u, H, p);
          };
          this.options.saveMissing && (this.options.saveMissingPlurals && O ? z.forEach((N) => {
            const H = this.pluralResolver.getSuffixes(N, i);
            G && i[`defaultValue${this.options.pluralSeparator}zero`] && H.indexOf(`${this.options.pluralSeparator}zero`) < 0 && H.push(`${this.options.pluralSeparator}zero`), H.forEach((B) => {
              ye([
                N
              ], a + B, i[`defaultValue${B}`] || y);
            });
          }) : ye(z, a, y));
        }
        p = this.extendTranslation(p, e, i, h, n), R && p === a && this.options.appendNamespaceToMissingKey && (p = `${u}${c}${a}`), (R || L) && this.options.parseMissingKeyHandler && (p = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}${c}${a}` : a, L ? p : void 0, i));
      }
      return r ? (h.res = p, h.usedParams = this.getUsedParamsDetails(i), h) : p;
    }
    extendTranslation(e, t, n, i, r) {
      var _a, _b;
      if ((_a = this.i18nFormat) == null ? void 0 : _a.parse) e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...n
      }, n.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
        resolved: i
      });
      else if (!n.skipInterpolation) {
        n.interpolation && this.interpolator.init({
          ...n,
          interpolation: {
            ...this.options.interpolation,
            ...n.interpolation
          }
        });
        const l = g(e) && (((_b = n == null ? void 0 : n.interpolation) == null ? void 0 : _b.skipOnVariables) !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
        let u;
        if (l) {
          const f = e.match(this.interpolator.nestingRegexp);
          u = f && f.length;
        }
        let c = n.replace && !g(n.replace) ? n.replace : n;
        if (this.options.interpolation.defaultVariables && (c = {
          ...this.options.interpolation.defaultVariables,
          ...c
        }), e = this.interpolator.interpolate(e, c, n.lng || this.language || i.usedLng, n), l) {
          const f = e.match(this.interpolator.nestingRegexp), d = f && f.length;
          u < d && (n.nest = false);
        }
        !n.lng && i && i.res && (n.lng = this.language || i.usedLng), n.nest !== false && (e = this.interpolator.nest(e, (...f) => (r == null ? void 0 : r[0]) === f[0] && !n.context ? (this.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${t[0]}`), null) : this.translate(...f, t), n)), n.interpolation && this.interpolator.reset();
      }
      const o = n.postProcess || this.options.postProcess, a = g(o) ? [
        o
      ] : o;
      return e != null && (a == null ? void 0 : a.length) && n.applyPostProcessor !== false && (e = Be.handle(a, e, t, this.options && this.options.postProcessPassResolved ? {
        i18nResolved: {
          ...i,
          usedParams: this.getUsedParamsDetails(n)
        },
        ...n
      } : n, this)), e;
    }
    resolve(e, t = {}) {
      let n, i, r, o, a;
      return g(e) && (e = [
        e
      ]), e.forEach((l) => {
        if (this.isValidLookup(n)) return;
        const u = this.extractFromKey(l, t), c = u.key;
        i = c;
        let f = u.namespaces;
        this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
        const d = t.count !== void 0 && !g(t.count), h = d && !t.ordinal && t.count === 0, p = t.context !== void 0 && (g(t.context) || typeof t.context == "number") && t.context !== "", b = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
        f.forEach((x) => {
          var _a, _b;
          this.isValidLookup(n) || (a = x, !Pe[`${b[0]}-${x}`] && ((_a = this.utils) == null ? void 0 : _a.hasLoadedNamespace) && !((_b = this.utils) == null ? void 0 : _b.hasLoadedNamespace(a)) && (Pe[`${b[0]}-${x}`] = true, this.logger.warn(`key "${i}" for languages "${b.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), b.forEach(($) => {
            var _a2;
            if (this.isValidLookup(n)) return;
            o = $;
            const v = [
              c
            ];
            if ((_a2 = this.i18nFormat) == null ? void 0 : _a2.addLookupKeys) this.i18nFormat.addLookupKeys(v, c, $, x, t);
            else {
              let O;
              d && (O = this.pluralResolver.getSuffix($, t.count, t));
              const k = `${this.options.pluralSeparator}zero`, E = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
              if (d && (t.ordinal && O.indexOf(E) === 0 && v.push(c + O.replace(E, this.options.pluralSeparator)), v.push(c + O), h && v.push(c + k)), p) {
                const I = `${c}${this.options.contextSeparator || "_"}${t.context}`;
                v.push(I), d && (t.ordinal && O.indexOf(E) === 0 && v.push(I + O.replace(E, this.options.pluralSeparator)), v.push(I + O), h && v.push(I + k));
              }
            }
            let C;
            for (; C = v.pop(); ) this.isValidLookup(n) || (r = C, n = this.getResource($, x, C, t));
          }));
        });
      }), {
        res: n,
        usedKey: i,
        exactUsedKey: r,
        usedLng: o,
        usedNS: a
      };
    }
    isValidLookup(e) {
      return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
    }
    getResource(e, t, n, i = {}) {
      var _a;
      return ((_a = this.i18nFormat) == null ? void 0 : _a.getResource) ? this.i18nFormat.getResource(e, t, n, i) : this.resourceStore.getResource(e, t, n, i);
    }
    getUsedParamsDetails(e = {}) {
      const t = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation"
      ], n = e.replace && !g(e.replace);
      let i = n ? e.replace : e;
      if (n && typeof e.count < "u" && (i.count = e.count), this.options.interpolation.defaultVariables && (i = {
        ...this.options.interpolation.defaultVariables,
        ...i
      }), !n) {
        i = {
          ...i
        };
        for (const r of t) delete i[r];
      }
      return i;
    }
    static hasDefaultValue(e) {
      const t = "defaultValue";
      for (const n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && e[n] !== void 0) return true;
      return false;
    }
  }
  class Ce {
    constructor(e) {
      this.options = e, this.supportedLngs = this.options.supportedLngs || false, this.logger = F.create("languageUtils");
    }
    getScriptPartFromCode(e) {
      if (e = Q(e), !e || e.indexOf("-") < 0) return null;
      const t = e.split("-");
      return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
    }
    getLanguagePartFromCode(e) {
      if (e = Q(e), !e || e.indexOf("-") < 0) return e;
      const t = e.split("-");
      return this.formatLanguageCode(t[0]);
    }
    formatLanguageCode(e) {
      if (g(e) && e.indexOf("-") > -1) {
        let t;
        try {
          t = Intl.getCanonicalLocales(e)[0];
        } catch {
        }
        return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
      }
      return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
    }
    isSupportedCode(e) {
      return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
    }
    getBestMatchFromCodes(e) {
      if (!e) return null;
      let t;
      return e.forEach((n) => {
        if (t) return;
        const i = this.formatLanguageCode(n);
        (!this.options.supportedLngs || this.isSupportedCode(i)) && (t = i);
      }), !t && this.options.supportedLngs && e.forEach((n) => {
        if (t) return;
        const i = this.getScriptPartFromCode(n);
        if (this.isSupportedCode(i)) return t = i;
        const r = this.getLanguagePartFromCode(n);
        if (this.isSupportedCode(r)) return t = r;
        t = this.options.supportedLngs.find((o) => {
          if (o === r) return o;
          if (!(o.indexOf("-") < 0 && r.indexOf("-") < 0) && (o.indexOf("-") > 0 && r.indexOf("-") < 0 && o.substring(0, o.indexOf("-")) === r || o.indexOf(r) === 0 && r.length > 1)) return o;
        });
      }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
    }
    getFallbackCodes(e, t) {
      if (!e) return [];
      if (typeof e == "function" && (e = e(t)), g(e) && (e = [
        e
      ]), Array.isArray(e)) return e;
      if (!t) return e.default || [];
      let n = e[t];
      return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || [];
    }
    toResolveHierarchy(e, t) {
      const n = this.getFallbackCodes((t === false ? [] : t) || this.options.fallbackLng || [], e), i = [], r = (o) => {
        o && (this.isSupportedCode(o) ? i.push(o) : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
      };
      return g(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && r(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && r(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && r(this.getLanguagePartFromCode(e))) : g(e) && r(this.formatLanguageCode(e)), n.forEach((o) => {
        i.indexOf(o) < 0 && r(this.formatLanguageCode(o));
      }), i;
    }
  }
  const ke = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
  }, Re = {
    select: (s) => s === 1 ? "one" : "other",
    resolvedOptions: () => ({
      pluralCategories: [
        "one",
        "other"
      ]
    })
  };
  class xt {
    constructor(e, t = {}) {
      this.languageUtils = e, this.options = t, this.logger = F.create("pluralResolver"), this.pluralRulesCache = {};
    }
    clearCache() {
      this.pluralRulesCache = {};
    }
    getRule(e, t = {}) {
      const n = Q(e === "dev" ? "en" : e), i = t.ordinal ? "ordinal" : "cardinal", r = JSON.stringify({
        cleanedCode: n,
        type: i
      });
      if (r in this.pluralRulesCache) return this.pluralRulesCache[r];
      let o;
      try {
        o = new Intl.PluralRules(n, {
          type: i
        });
      } catch {
        if (!Intl) return this.logger.error("No Intl support, please use an Intl polyfill!"), Re;
        if (!e.match(/-|_/)) return Re;
        const l = this.languageUtils.getLanguagePartFromCode(e);
        o = this.getRule(l, t);
      }
      return this.pluralRulesCache[r] = o, o;
    }
    needsPlural(e, t = {}) {
      let n = this.getRule(e, t);
      return n || (n = this.getRule("dev", t)), (n == null ? void 0 : n.resolvedOptions().pluralCategories.length) > 1;
    }
    getPluralFormsOfKey(e, t, n = {}) {
      return this.getSuffixes(e, n).map((i) => `${t}${i}`);
    }
    getSuffixes(e, t = {}) {
      let n = this.getRule(e, t);
      return n || (n = this.getRule("dev", t)), n ? n.resolvedOptions().pluralCategories.sort((i, r) => ke[i] - ke[r]).map((i) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : [];
    }
    getSuffix(e, t, n = {}) {
      const i = this.getRule(e, n);
      return i ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, n));
    }
  }
  const je = (s, e, t, n = ".", i = true) => {
    let r = ft(s, e, t);
    return !r && i && g(t) && (r = ce(s, t, n), r === void 0 && (r = ce(e, t, n))), r;
  }, le = (s) => s.replace(/\$/g, "$$$$");
  class $e {
    constructor(e = {}) {
      var _a;
      this.logger = F.create("interpolator"), this.options = e, this.format = ((_a = e == null ? void 0 : e.interpolation) == null ? void 0 : _a.format) || ((t) => t), this.init(e);
    }
    init(e = {}) {
      e.interpolation || (e.interpolation = {
        escapeValue: true
      });
      const { escape: t, escapeValue: n, useRawValueToEscape: i, prefix: r, prefixEscaped: o, suffix: a, suffixEscaped: l, formatSeparator: u, unescapeSuffix: c, unescapePrefix: f, nestingPrefix: d, nestingPrefixEscaped: h, nestingSuffix: p, nestingSuffixEscaped: b, nestingOptionsSeparator: x, maxReplaces: $, alwaysFormat: v } = e.interpolation;
      this.escape = t !== void 0 ? t : dt, this.escapeValue = n !== void 0 ? n : true, this.useRawValueToEscape = i !== void 0 ? i : false, this.prefix = r ? K(r) : o || "{{", this.suffix = a ? K(a) : l || "}}", this.formatSeparator = u || ",", this.unescapePrefix = c ? "" : f || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = d ? K(d) : h || K("$t("), this.nestingSuffix = p ? K(p) : b || K(")"), this.nestingOptionsSeparator = x || ",", this.maxReplaces = $ || 1e3, this.alwaysFormat = v !== void 0 ? v : false, this.resetRegExp();
    }
    reset() {
      this.options && this.init(this.options);
    }
    resetRegExp() {
      const e = (t, n) => (t == null ? void 0 : t.source) === n ? (t.lastIndex = 0, t) : new RegExp(n, "g");
      this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
    }
    interpolate(e, t, n, i) {
      var _a;
      let r, o, a;
      const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (h) => {
        if (h.indexOf(this.formatSeparator) < 0) {
          const $ = je(t, l, h, this.options.keySeparator, this.options.ignoreJSONStructure);
          return this.alwaysFormat ? this.format($, void 0, n, {
            ...i,
            ...t,
            interpolationkey: h
          }) : $;
        }
        const p = h.split(this.formatSeparator), b = p.shift().trim(), x = p.join(this.formatSeparator).trim();
        return this.format(je(t, l, b, this.options.keySeparator, this.options.ignoreJSONStructure), x, n, {
          ...i,
          ...t,
          interpolationkey: b
        });
      };
      this.resetRegExp();
      const c = (i == null ? void 0 : i.missingInterpolationHandler) || this.options.missingInterpolationHandler, f = ((_a = i == null ? void 0 : i.interpolation) == null ? void 0 : _a.skipOnVariables) !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
      return [
        {
          regex: this.regexpUnescape,
          safeValue: (h) => le(h)
        },
        {
          regex: this.regexp,
          safeValue: (h) => this.escapeValue ? le(this.escape(h)) : le(h)
        }
      ].forEach((h) => {
        for (a = 0; r = h.regex.exec(e); ) {
          const p = r[1].trim();
          if (o = u(p), o === void 0) if (typeof c == "function") {
            const x = c(e, r, i);
            o = g(x) ? x : "";
          } else if (i && Object.prototype.hasOwnProperty.call(i, p)) o = "";
          else if (f) {
            o = r[0];
            continue;
          } else this.logger.warn(`missed to pass in variable ${p} for interpolating ${e}`), o = "";
          else !g(o) && !this.useRawValueToEscape && (o = Se(o));
          const b = h.safeValue(o);
          if (e = e.replace(r[0], b), f ? (h.regex.lastIndex += o.length, h.regex.lastIndex -= r[0].length) : h.regex.lastIndex = 0, a++, a >= this.maxReplaces) break;
        }
      }), e;
    }
    nest(e, t, n = {}) {
      let i, r, o;
      const a = (l, u) => {
        const c = this.nestingOptionsSeparator;
        if (l.indexOf(c) < 0) return l;
        const f = l.split(new RegExp(`${c}[ ]*{`));
        let d = `{${f[1]}`;
        l = f[0], d = this.interpolate(d, o);
        const h = d.match(/'/g), p = d.match(/"/g);
        (((h == null ? void 0 : h.length) ?? 0) % 2 === 0 && !p || p.length % 2 !== 0) && (d = d.replace(/'/g, '"'));
        try {
          o = JSON.parse(d), u && (o = {
            ...u,
            ...o
          });
        } catch (b) {
          return this.logger.warn(`failed parsing options string in nesting for key ${l}`, b), `${l}${c}${d}`;
        }
        return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, l;
      };
      for (; i = this.nestingRegexp.exec(e); ) {
        let l = [];
        o = {
          ...n
        }, o = o.replace && !g(o.replace) ? o.replace : o, o.applyPostProcessor = false, delete o.defaultValue;
        const u = /{.*}/.test(i[1]) ? i[1].lastIndexOf("}") + 1 : i[1].indexOf(this.formatSeparator);
        if (u !== -1 && (l = i[1].slice(u).split(this.formatSeparator).map((c) => c.trim()).filter(Boolean), i[1] = i[1].slice(0, u)), r = t(a.call(this, i[1].trim(), o), o), r && i[0] === e && !g(r)) return r;
        g(r) || (r = Se(r)), r || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`), r = ""), l.length && (r = l.reduce((c, f) => this.format(c, f, n.lng, {
          ...n,
          interpolationkey: i[1].trim()
        }), r.trim())), e = e.replace(i[0], r), this.regexp.lastIndex = 0;
      }
      return e;
    }
  }
  const St = (s) => {
    let e = s.toLowerCase().trim();
    const t = {};
    if (s.indexOf("(") > -1) {
      const n = s.split("(");
      e = n[0].toLowerCase().trim();
      const i = n[1].substring(0, n[1].length - 1);
      e === "currency" && i.indexOf(":") < 0 ? t.currency || (t.currency = i.trim()) : e === "relativetime" && i.indexOf(":") < 0 ? t.range || (t.range = i.trim()) : i.split(";").forEach((o) => {
        if (o) {
          const [a, ...l] = o.split(":"), u = l.join(":").trim().replace(/^'+|'+$/g, ""), c = a.trim();
          t[c] || (t[c] = u), u === "false" && (t[c] = false), u === "true" && (t[c] = true), isNaN(u) || (t[c] = parseInt(u, 10));
        }
      });
    }
    return {
      formatName: e,
      formatOptions: t
    };
  }, Ne = (s) => {
    const e = {};
    return (t, n, i) => {
      let r = i;
      i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (r = {
        ...r,
        [i.interpolationkey]: void 0
      });
      const o = n + JSON.stringify(r);
      let a = e[o];
      return a || (a = s(Q(n), i), e[o] = a), a(t);
    };
  }, vt = (s) => (e, t, n) => s(Q(t), n)(e);
  class wt {
    constructor(e = {}) {
      this.logger = F.create("formatter"), this.options = e, this.init(e);
    }
    init(e, t = {
      interpolation: {}
    }) {
      this.formatSeparator = t.interpolation.formatSeparator || ",";
      const n = t.cacheInBuiltFormats ? Ne : vt;
      this.formats = {
        number: n((i, r) => {
          const o = new Intl.NumberFormat(i, {
            ...r
          });
          return (a) => o.format(a);
        }),
        currency: n((i, r) => {
          const o = new Intl.NumberFormat(i, {
            ...r,
            style: "currency"
          });
          return (a) => o.format(a);
        }),
        datetime: n((i, r) => {
          const o = new Intl.DateTimeFormat(i, {
            ...r
          });
          return (a) => o.format(a);
        }),
        relativetime: n((i, r) => {
          const o = new Intl.RelativeTimeFormat(i, {
            ...r
          });
          return (a) => o.format(a, r.range || "day");
        }),
        list: n((i, r) => {
          const o = new Intl.ListFormat(i, {
            ...r
          });
          return (a) => o.format(a);
        })
      };
    }
    add(e, t) {
      this.formats[e.toLowerCase().trim()] = t;
    }
    addCached(e, t) {
      this.formats[e.toLowerCase().trim()] = Ne(t);
    }
    format(e, t, n, i = {}) {
      const r = t.split(this.formatSeparator);
      if (r.length > 1 && r[0].indexOf("(") > 1 && r[0].indexOf(")") < 0 && r.find((a) => a.indexOf(")") > -1)) {
        const a = r.findIndex((l) => l.indexOf(")") > -1);
        r[0] = [
          r[0],
          ...r.splice(1, a)
        ].join(this.formatSeparator);
      }
      return r.reduce((a, l) => {
        var _a;
        const { formatName: u, formatOptions: c } = St(l);
        if (this.formats[u]) {
          let f = a;
          try {
            const d = ((_a = i == null ? void 0 : i.formatParams) == null ? void 0 : _a[i.interpolationkey]) || {}, h = d.locale || d.lng || i.locale || i.lng || n;
            f = this.formats[u](a, h, {
              ...c,
              ...i,
              ...d
            });
          } catch (d) {
            this.logger.warn(d);
          }
          return f;
        } else this.logger.warn(`there was no format function for ${u}`);
        return a;
      }, e);
    }
  }
  const Ot = (s, e) => {
    s.pending[e] !== void 0 && (delete s.pending[e], s.pendingCount--);
  };
  class Lt extends oe {
    constructor(e, t, n, i = {}) {
      var _a, _b;
      super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = i, this.logger = F.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], (_b = (_a = this.backend) == null ? void 0 : _a.init) == null ? void 0 : _b.call(_a, n, i.backend, i);
    }
    queueLoad(e, t, n, i) {
      const r = {}, o = {}, a = {}, l = {};
      return e.forEach((u) => {
        let c = true;
        t.forEach((f) => {
          const d = `${u}|${f}`;
          !n.reload && this.store.hasResourceBundle(u, f) ? this.state[d] = 2 : this.state[d] < 0 || (this.state[d] === 1 ? o[d] === void 0 && (o[d] = true) : (this.state[d] = 1, c = false, o[d] === void 0 && (o[d] = true), r[d] === void 0 && (r[d] = true), l[f] === void 0 && (l[f] = true)));
        }), c || (a[u] = true);
      }), (Object.keys(r).length || Object.keys(o).length) && this.queue.push({
        pending: o,
        pendingCount: Object.keys(o).length,
        loaded: {},
        errors: [],
        callback: i
      }), {
        toLoad: Object.keys(r),
        pending: Object.keys(o),
        toLoadLanguages: Object.keys(a),
        toLoadNamespaces: Object.keys(l)
      };
    }
    loaded(e, t, n) {
      const i = e.split("|"), r = i[0], o = i[1];
      t && this.emit("failedLoading", r, o, t), !t && n && this.store.addResourceBundle(r, o, n, void 0, void 0, {
        skipCopy: true
      }), this.state[e] = t ? -1 : 2, t && n && (this.state[e] = 0);
      const a = {};
      this.queue.forEach((l) => {
        ut(l.loaded, [
          r
        ], o), Ot(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((u) => {
          a[u] || (a[u] = {});
          const c = l.loaded[u];
          c.length && c.forEach((f) => {
            a[u][f] === void 0 && (a[u][f] = true);
          });
        }), l.done = true, l.errors.length ? l.callback(l.errors) : l.callback());
      }), this.emit("loaded", a), this.queue = this.queue.filter((l) => !l.done);
    }
    read(e, t, n, i = 0, r = this.retryTimeout, o) {
      if (!e.length) return o(null, {});
      if (this.readingCalls >= this.maxParallelReads) {
        this.waitingReads.push({
          lng: e,
          ns: t,
          fcName: n,
          tried: i,
          wait: r,
          callback: o
        });
        return;
      }
      this.readingCalls++;
      const a = (u, c) => {
        if (this.readingCalls--, this.waitingReads.length > 0) {
          const f = this.waitingReads.shift();
          this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
        }
        if (u && c && i < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, e, t, n, i + 1, r * 2, o);
          }, r);
          return;
        }
        o(u, c);
      }, l = this.backend[n].bind(this.backend);
      if (l.length === 2) {
        try {
          const u = l(e, t);
          u && typeof u.then == "function" ? u.then((c) => a(null, c)).catch(a) : a(null, u);
        } catch (u) {
          a(u);
        }
        return;
      }
      return l(e, t, a);
    }
    prepareLoading(e, t, n = {}, i) {
      if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
      g(e) && (e = this.languageUtils.toResolveHierarchy(e)), g(t) && (t = [
        t
      ]);
      const r = this.queueLoad(e, t, n, i);
      if (!r.toLoad.length) return r.pending.length || i(), null;
      r.toLoad.forEach((o) => {
        this.loadOne(o);
      });
    }
    load(e, t, n) {
      this.prepareLoading(e, t, {}, n);
    }
    reload(e, t, n) {
      this.prepareLoading(e, t, {
        reload: true
      }, n);
    }
    loadOne(e, t = "") {
      const n = e.split("|"), i = n[0], r = n[1];
      this.read(i, r, "read", void 0, void 0, (o, a) => {
        o && this.logger.warn(`${t}loading namespace ${r} for language ${i} failed`, o), !o && a && this.logger.log(`${t}loaded namespace ${r} for language ${i}`, a), this.loaded(e, o, a);
      });
    }
    saveMissing(e, t, n, i, r, o = {}, a = () => {
    }) {
      var _a, _b, _c, _d, _e2;
      if (((_b = (_a = this.services) == null ? void 0 : _a.utils) == null ? void 0 : _b.hasLoadedNamespace) && !((_d = (_c = this.services) == null ? void 0 : _c.utils) == null ? void 0 : _d.hasLoadedNamespace(t))) {
        this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        return;
      }
      if (!(n == null || n === "")) {
        if ((_e2 = this.backend) == null ? void 0 : _e2.create) {
          const l = {
            ...o,
            isUpdate: r
          }, u = this.backend.create.bind(this.backend);
          if (u.length < 6) try {
            let c;
            u.length === 5 ? c = u(e, t, n, i, l) : c = u(e, t, n, i), c && typeof c.then == "function" ? c.then((f) => a(null, f)).catch(a) : a(null, c);
          } catch (c) {
            a(c);
          }
          else u(e, t, n, i, a, l);
        }
        !e || !e[0] || this.store.addResource(e[0], t, n, i);
      }
    }
  }
  const ue = () => ({
    debug: false,
    initAsync: true,
    ns: [
      "translation"
    ],
    defaultNS: [
      "translation"
    ],
    fallbackLng: [
      "dev"
    ],
    fallbackNS: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: "all",
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: "fallback",
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: false,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: (s) => {
      let e = {};
      if (typeof s[1] == "object" && (e = s[1]), g(s[1]) && (e.defaultValue = s[1]), g(s[2]) && (e.tDescription = s[2]), typeof s[2] == "object" || typeof s[3] == "object") {
        const t = s[3] || s[2];
        Object.keys(t).forEach((n) => {
          e[n] = t[n];
        });
      }
      return e;
    },
    interpolation: {
      escapeValue: true,
      format: (s) => s,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: true
    },
    cacheInBuiltFormats: true
  }), Ee = (s) => {
    var _a, _b;
    return g(s.ns) && (s.ns = [
      s.ns
    ]), g(s.fallbackLng) && (s.fallbackLng = [
      s.fallbackLng
    ]), g(s.fallbackNS) && (s.fallbackNS = [
      s.fallbackNS
    ]), ((_b = (_a = s.supportedLngs) == null ? void 0 : _a.indexOf) == null ? void 0 : _b.call(_a, "cimode")) < 0 && (s.supportedLngs = s.supportedLngs.concat([
      "cimode"
    ])), typeof s.initImmediate == "boolean" && (s.initAsync = s.initImmediate), s;
  }, te = () => {
  }, Pt = (s) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach((t) => {
      typeof s[t] == "function" && (s[t] = s[t].bind(s));
    });
  };
  let Te = false;
  const Ct = (s) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i;
    return !!(((_c = (_b = (_a = s == null ? void 0 : s.modules) == null ? void 0 : _a.backend) == null ? void 0 : _b.name) == null ? void 0 : _c.indexOf("Locize")) > 0 || ((_g = (_f = (_e2 = (_d = s == null ? void 0 : s.modules) == null ? void 0 : _d.backend) == null ? void 0 : _e2.constructor) == null ? void 0 : _f.name) == null ? void 0 : _g.indexOf("Locize")) > 0 || ((_i = (_h = s == null ? void 0 : s.options) == null ? void 0 : _h.backend) == null ? void 0 : _i.backends) && s.options.backend.backends.some((e) => {
      var _a2, _b2, _c2;
      return ((_a2 = e == null ? void 0 : e.name) == null ? void 0 : _a2.indexOf("Locize")) > 0 || ((_c2 = (_b2 = e == null ? void 0 : e.constructor) == null ? void 0 : _b2.name) == null ? void 0 : _c2.indexOf("Locize")) > 0;
    }));
  };
  class W extends oe {
    constructor(e = {}, t) {
      if (super(), this.options = Ee(e), this.services = {}, this.logger = F, this.modules = {
        external: []
      }, Pt(this), t && !this.isInitialized && !e.isClone) {
        if (!this.options.initAsync) return this.init(e, t), this;
        setTimeout(() => {
          this.init(e, t);
        }, 0);
      }
    }
    init(e = {}, t) {
      this.isInitializing = true, typeof e == "function" && (t = e, e = {}), e.defaultNS == null && e.ns && (g(e.ns) ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
      const n = ue();
      this.options = {
        ...n,
        ...this.options,
        ...Ee(e)
      }, this.options.interpolation = {
        ...n.interpolation,
        ...this.options.interpolation
      }, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator), typeof this.options.overloadTranslationOptionHandler != "function" && (this.options.overloadTranslationOptionHandler = n.overloadTranslationOptionHandler), this.options.showSupportNotice !== false && !Ct(this) && !Te && (typeof console < "u" && typeof console.info < "u" && console.info("\u{1F310} i18next is maintained with support from Locize \u2014 consider powering your project with managed localization (AI, CDN, integrations): https://locize.com \u{1F499}"), Te = true);
      const i = (u) => u ? typeof u == "function" ? new u() : u : null;
      if (!this.options.isClone) {
        this.modules.logger ? F.init(i(this.modules.logger), this.options) : F.init(null, this.options);
        let u;
        this.modules.formatter ? u = this.modules.formatter : u = wt;
        const c = new Ce(this.options);
        this.store = new Le(this.options.resources, this.options);
        const f = this.services;
        f.logger = F, f.resourceStore = this.store, f.languageUtils = c, f.pluralResolver = new xt(c, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        }), this.options.interpolation.format && this.options.interpolation.format !== n.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), u && (!this.options.interpolation.format || this.options.interpolation.format === n.interpolation.format) && (f.formatter = i(u), f.formatter.init && f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new $e(this.options), f.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        }, f.backendConnector = new Lt(i(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", (h, ...p) => {
          this.emit(h, ...p);
        }), this.modules.languageDetector && (f.languageDetector = i(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = i(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new se(this.services, this.options), this.translator.on("*", (h, ...p) => {
          this.emit(h, ...p);
        }), this.modules.external.forEach((h) => {
          h.init && h.init(this);
        });
      }
      if (this.format = this.options.interpolation.format, t || (t = te), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        const u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
      }
      !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage"
      ].forEach((u) => {
        this[u] = (...c) => this.store[u](...c);
      }), [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle"
      ].forEach((u) => {
        this[u] = (...c) => (this.store[u](...c), this);
      });
      const a = X(), l = () => {
        const u = (c, f) => {
          this.isInitializing = false, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = true, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(f), t(c, f);
        };
        if (this.languages && !this.isInitialized) return u(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, u);
      };
      return this.options.resources || !this.options.initAsync ? l() : setTimeout(l, 0), a;
    }
    loadResources(e, t = te) {
      var _a, _b;
      let n = t;
      const i = g(e) ? e : this.language;
      if (typeof e == "function" && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
        if ((i == null ? void 0 : i.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return n();
        const r = [], o = (a) => {
          if (!a || a === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(a).forEach((u) => {
            u !== "cimode" && r.indexOf(u) < 0 && r.push(u);
          });
        };
        i ? o(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => o(l)), (_b = (_a = this.options.preload) == null ? void 0 : _a.forEach) == null ? void 0 : _b.call(_a, (a) => o(a)), this.services.backendConnector.load(r, this.options.ns, (a) => {
          !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(a);
        });
      } else n(null);
    }
    reloadResources(e, t, n) {
      const i = X();
      return typeof e == "function" && (n = e, e = void 0), typeof t == "function" && (n = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), n || (n = te), this.services.backendConnector.reload(e, t, (r) => {
        i.resolve(), n(r);
      }), i;
    }
    use(e) {
      if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
      if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
      return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Be.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
    }
    setResolvedLanguage(e) {
      if (!(!e || !this.languages) && !([
        "cimode",
        "dev"
      ].indexOf(e) > -1)) {
        for (let t = 0; t < this.languages.length; t++) {
          const n = this.languages[t];
          if (!([
            "cimode",
            "dev"
          ].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
            this.resolvedLanguage = n;
            break;
          }
        }
        !this.resolvedLanguage && this.languages.indexOf(e) < 0 && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
      }
    }
    changeLanguage(e, t) {
      this.isLanguageChangingTo = e;
      const n = X();
      this.emit("languageChanging", e);
      const i = (a) => {
        this.language = a, this.languages = this.services.languageUtils.toResolveHierarchy(a), this.resolvedLanguage = void 0, this.setResolvedLanguage(a);
      }, r = (a, l) => {
        l ? this.isLanguageChangingTo === e && (i(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, n.resolve((...u) => this.t(...u)), t && t(a, (...u) => this.t(...u));
      }, o = (a) => {
        var _a, _b;
        !e && !a && this.services.languageDetector && (a = []);
        const l = g(a) ? a : a && a[0], u = this.store.hasLanguageSomeTranslations(l) ? l : this.services.languageUtils.getBestMatchFromCodes(g(a) ? [
          a
        ] : a);
        u && (this.language || i(u), this.translator.language || this.translator.changeLanguage(u), (_b = (_a = this.services.languageDetector) == null ? void 0 : _a.cacheUserLanguage) == null ? void 0 : _b.call(_a, u)), this.loadResources(u, (c) => {
          r(c, u);
        });
      };
      return !e && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(e), n;
    }
    getFixedT(e, t, n) {
      const i = (r, o, ...a) => {
        let l;
        typeof o != "object" ? l = this.options.overloadTranslationOptionHandler([
          r,
          o
        ].concat(a)) : l = {
          ...o
        }, l.lng = l.lng || i.lng, l.lngs = l.lngs || i.lngs, l.ns = l.ns || i.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || n || i.keyPrefix);
        const u = this.options.keySeparator || ".";
        let c;
        return l.keyPrefix && Array.isArray(r) ? c = r.map((f) => (typeof f == "function" && (f = de(f, {
          ...this.options,
          ...o
        })), `${l.keyPrefix}${u}${f}`)) : (typeof r == "function" && (r = de(r, {
          ...this.options,
          ...o
        })), c = l.keyPrefix ? `${l.keyPrefix}${u}${r}` : r), this.t(c, l);
      };
      return g(e) ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = n, i;
    }
    t(...e) {
      var _a;
      return (_a = this.translator) == null ? void 0 : _a.translate(...e);
    }
    exists(...e) {
      var _a;
      return (_a = this.translator) == null ? void 0 : _a.exists(...e);
    }
    setDefaultNamespace(e) {
      this.options.defaultNS = e;
    }
    hasLoadedNamespace(e, t = {}) {
      if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), false;
      if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), false;
      const n = t.lng || this.resolvedLanguage || this.languages[0], i = this.options ? this.options.fallbackLng : false, r = this.languages[this.languages.length - 1];
      if (n.toLowerCase() === "cimode") return true;
      const o = (a, l) => {
        const u = this.services.backendConnector.state[`${a}|${l}`];
        return u === -1 || u === 0 || u === 2;
      };
      if (t.precheck) {
        const a = t.precheck(this, o);
        if (a !== void 0) return a;
      }
      return !!(this.hasResourceBundle(n, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(n, e) && (!i || o(r, e)));
    }
    loadNamespaces(e, t) {
      const n = X();
      return this.options.ns ? (g(e) && (e = [
        e
      ]), e.forEach((i) => {
        this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
      }), this.loadResources((i) => {
        n.resolve(), t && t(i);
      }), n) : (t && t(), Promise.resolve());
    }
    loadLanguages(e, t) {
      const n = X();
      g(e) && (e = [
        e
      ]);
      const i = this.options.preload || [], r = e.filter((o) => i.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o));
      return r.length ? (this.options.preload = i.concat(r), this.loadResources((o) => {
        n.resolve(), t && t(o);
      }), n) : (t && t(), Promise.resolve());
    }
    dir(e) {
      var _a, _b;
      if (e || (e = this.resolvedLanguage || (((_a = this.languages) == null ? void 0 : _a.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
      try {
        const i = new Intl.Locale(e);
        if (i && i.getTextInfo) {
          const r = i.getTextInfo();
          if (r && r.direction) return r.direction;
        }
      } catch {
      }
      const t = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb"
      ], n = ((_b = this.services) == null ? void 0 : _b.languageUtils) || new Ce(ue());
      return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : t.indexOf(n.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    }
    static createInstance(e = {}, t) {
      const n = new W(e, t);
      return n.createInstance = W.createInstance, n;
    }
    cloneInstance(e = {}, t = te) {
      const n = e.forkResourceStore;
      n && delete e.forkResourceStore;
      const i = {
        ...this.options,
        ...e,
        isClone: true
      }, r = new W(i);
      if ((e.debug !== void 0 || e.prefix !== void 0) && (r.logger = r.logger.clone(e)), [
        "store",
        "services",
        "language"
      ].forEach((a) => {
        r[a] = this[a];
      }), r.services = {
        ...this.services
      }, r.services.utils = {
        hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
      }, n) {
        const a = Object.keys(this.store.data).reduce((l, u) => (l[u] = {
          ...this.store.data[u]
        }, l[u] = Object.keys(l[u]).reduce((c, f) => (c[f] = {
          ...l[u][f]
        }, c), l[u]), l), {});
        r.store = new Le(a, i), r.services.resourceStore = r.store;
      }
      if (e.interpolation) {
        const l = {
          ...ue().interpolation,
          ...this.options.interpolation,
          ...e.interpolation
        }, u = {
          ...i,
          interpolation: l
        };
        r.services.interpolator = new $e(u);
      }
      return r.translator = new se(r.services, i), r.translator.on("*", (a, ...l) => {
        r.emit(a, ...l);
      }), r.init(i, t), r.translator.options = i, r.translator.backendConnector.services.utils = {
        hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
      }, r;
    }
    toJSON() {
      return {
        options: this.options,
        store: this.store,
        language: this.language,
        languages: this.languages,
        resolvedLanguage: this.resolvedLanguage
      };
    }
  }
  j = W.createInstance();
  j.createInstance;
  j.dir;
  j.init;
  j.loadResources;
  j.reloadResources;
  j.use;
  j.changeLanguage;
  j.getFixedT;
  j.t;
  j.exists;
  j.setDefaultNamespace;
  j.hasLoadedNamespace;
  j.loadNamespaces;
  j.loadLanguages;
  const kt = (s, e, t, n) => {
    var _a, _b, _c, _d;
    const i = [
      t,
      {
        code: e,
        ...n || {}
      }
    ];
    if ((_b = (_a = s == null ? void 0 : s.services) == null ? void 0 : _a.logger) == null ? void 0 : _b.forward) return s.services.logger.forward(i, "warn", "react-i18next::", true);
    U(i[0]) && (i[0] = `react-i18next:: ${i[0]}`), ((_d = (_c = s == null ? void 0 : s.services) == null ? void 0 : _c.logger) == null ? void 0 : _d.warn) ? s.services.logger.warn(...i) : (console == null ? void 0 : console.warn) && console.warn(...i);
  }, Fe = {}, Je = (s, e, t, n) => {
    U(t) && Fe[t] || (U(t) && (Fe[t] = /* @__PURE__ */ new Date()), kt(s, e, t, n));
  }, We = (s, e) => () => {
    if (s.isInitialized) e();
    else {
      const t = () => {
        setTimeout(() => {
          s.off("initialized", t);
        }, 0), e();
      };
      s.on("initialized", t);
    }
  }, he = (s, e, t) => {
    s.loadNamespaces(e, We(s, t));
  }, Ie = (s, e, t, n) => {
    if (U(t) && (t = [
      t
    ]), s.options.preload && s.options.preload.indexOf(e) > -1) return he(s, t, n);
    t.forEach((i) => {
      s.options.ns.indexOf(i) < 0 && s.options.ns.push(i);
    }), s.loadLanguages(e, We(s, n));
  }, Rt = (s, e, t = {}) => !e.languages || !e.languages.length ? (Je(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
    languages: e.languages
  }), true) : e.hasLoadedNamespace(s, {
    lng: t.lng,
    precheck: (n, i) => {
      if (t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && n.services.backendConnector.backend && n.isLanguageChangingTo && !i(n.isLanguageChangingTo, s)) return false;
    }
  }), U = (s) => typeof s == "string", jt = (s) => typeof s == "object" && s !== null, $t = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Nt = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "\xA9",
    "&#169;": "\xA9",
    "&reg;": "\xAE",
    "&#174;": "\xAE",
    "&hellip;": "\u2026",
    "&#8230;": "\u2026",
    "&#x2F;": "/",
    "&#47;": "/"
  }, Et = (s) => Nt[s], Tt = (s) => s.replace($t, Et);
  let pe = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: true,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: [
      "br",
      "strong",
      "i",
      "p"
    ],
    useSuspense: true,
    unescape: Tt,
    transDefaultProps: void 0
  };
  const Ft = (s = {}) => {
    pe = {
      ...pe,
      ...s
    };
  }, It = () => pe;
  let Qe;
  let Dt, At, Ye;
  Dt = (s) => {
    Qe = s;
  };
  At = () => Qe;
  vn = {
    type: "3rdParty",
    init(s) {
      Ft(s.options.react), Dt(s);
    }
  };
  Ye = P.createContext();
  class Ht {
    constructor() {
      this.usedNamespaces = {};
    }
    addUsedNamespaces(e) {
      e.forEach((t) => {
        this.usedNamespaces[t] || (this.usedNamespaces[t] = true);
      });
    }
    getUsedNamespaces() {
      return Object.keys(this.usedNamespaces);
    }
  }
  let Ut, Mt, Kt;
  Ut = (s, e) => U(e) ? e : jt(e) && U(e.defaultValue) ? e.defaultValue : Array.isArray(s) ? s[s.length - 1] : s;
  Mt = {
    t: Ut,
    ready: false
  };
  Kt = () => () => {
  };
  wn = (s, e = {}) => {
    var _a, _b, _c;
    const { i18n: t } = e, { i18n: n, defaultNS: i } = P.useContext(Ye) || {}, r = t || n || At();
    r && !r.reportNamespaces && (r.reportNamespaces = new Ht()), r || Je(r, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const o = P.useMemo(() => {
      var _a2;
      return {
        ...It(),
        ...(_a2 = r == null ? void 0 : r.options) == null ? void 0 : _a2.react,
        ...e
      };
    }, [
      r,
      e
    ]), { useSuspense: a, keyPrefix: l } = o, u = i || ((_a = r == null ? void 0 : r.options) == null ? void 0 : _a.defaultNS), c = U(u) ? [
      u
    ] : u || [
      "translation"
    ], f = P.useMemo(() => c, c);
    (_c = (_b = r == null ? void 0 : r.reportNamespaces) == null ? void 0 : _b.addUsedNamespaces) == null ? void 0 : _c.call(_b, f);
    const d = P.useRef(0), h = P.useCallback((y) => {
      if (!r) return Kt;
      const { bindI18n: m, bindI18nStore: S } = o, w = () => {
        d.current += 1, y();
      };
      return m && r.on(m, w), S && r.store.on(S, w), () => {
        m && m.split(" ").forEach((L) => r.off(L, w)), S && S.split(" ").forEach((L) => r.store.off(L, w));
      };
    }, [
      r,
      o
    ]), p = P.useRef(), b = P.useCallback(() => {
      if (!r) return Mt;
      const y = !!(r.isInitialized || r.initializedStoreOnce) && f.every((Z) => Rt(Z, r, o)), m = e.lng || r.language, S = d.current, w = p.current;
      if (w && w.ready === y && w.lng === m && w.keyPrefix === l && w.revision === S) return w;
      const R = {
        t: r.getFixedT(m, o.nsMode === "fallback" ? f : f[0], l),
        ready: y,
        lng: m,
        keyPrefix: l,
        revision: S
      };
      return p.current = R, R;
    }, [
      r,
      f,
      l,
      o,
      e.lng
    ]), [x, $] = P.useState(0), { t: v, ready: C } = it.useSyncExternalStore(h, b, b);
    P.useEffect(() => {
      if (r && !C && !a) {
        const y = () => $((m) => m + 1);
        e.lng ? Ie(r, e.lng, f, y) : he(r, f, y);
      }
    }, [
      r,
      e.lng,
      f,
      C,
      a,
      x
    ]);
    const O = r || {}, k = P.useRef(null), E = P.useRef(), I = (y) => {
      const m = Object.getOwnPropertyDescriptors(y);
      m.__original && delete m.__original;
      const S = Object.create(Object.getPrototypeOf(y), m);
      if (!Object.prototype.hasOwnProperty.call(S, "__original")) try {
        Object.defineProperty(S, "__original", {
          value: y,
          writable: false,
          enumerable: false,
          configurable: false
        });
      } catch {
      }
      return S;
    }, G = P.useMemo(() => {
      const y = O, m = y == null ? void 0 : y.language;
      let S = y;
      y && (k.current && k.current.__original === y ? E.current !== m ? (S = I(y), k.current = S, E.current = m) : S = k.current : (S = I(y), k.current = S, E.current = m));
      const w = [
        v,
        S,
        C
      ];
      return w.t = v, w.i18n = S, w.ready = C, w;
    }, [
      v,
      O,
      C,
      O.resolvedLanguage,
      O.language,
      O.languages
    ]);
    if (r && a && !C) throw new Promise((y) => {
      const m = () => y();
      e.lng ? Ie(r, e.lng, f, m) : he(r, f, m);
    });
    return G;
  };
  On = function({ i18n: s, defaultNS: e, children: t }) {
    const n = P.useMemo(() => ({
      i18n: s,
      defaultNS: e
    }), [
      s,
      e
    ]);
    return P.createElement(Ye.Provider, {
      value: n
    }, t);
  };
  function ge(s) {
    "@babel/helpers - typeof";
    return ge = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, ge(s);
  }
  function Ge() {
    return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : ge(XMLHttpRequest)) === "object";
  }
  function Vt(s) {
    return !!s && typeof s.then == "function";
  }
  function _t(s) {
    return Vt(s) ? s : Promise.resolve(s);
  }
  function De(s, e) {
    var t = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(s);
      e && (n = n.filter(function(i) {
        return Object.getOwnPropertyDescriptor(s, i).enumerable;
      })), t.push.apply(t, n);
    }
    return t;
  }
  function Ae(s) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e] != null ? arguments[e] : {};
      e % 2 ? De(Object(t), true).forEach(function(n) {
        qt(s, n, t[n]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(t)) : De(Object(t)).forEach(function(n) {
        Object.defineProperty(s, n, Object.getOwnPropertyDescriptor(t, n));
      });
    }
    return s;
  }
  function qt(s, e, t) {
    return (e = zt(e)) in s ? Object.defineProperty(s, e, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : s[e] = t, s;
  }
  function zt(s) {
    var e = Bt(s, "string");
    return M(e) == "symbol" ? e : e + "";
  }
  function Bt(s, e) {
    if (M(s) != "object" || !s) return s;
    var t = s[Symbol.toPrimitive];
    if (t !== void 0) {
      var n = t.call(s, e);
      if (M(n) != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(s);
  }
  function M(s) {
    "@babel/helpers - typeof";
    return M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, M(s);
  }
  var A = typeof fetch == "function" ? fetch : void 0;
  typeof global < "u" && global.fetch ? A = global.fetch : typeof window < "u" && window.fetch && (A = window.fetch);
  var Y;
  Ge() && (typeof global < "u" && global.XMLHttpRequest ? Y = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (Y = window.XMLHttpRequest));
  var re;
  typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? re = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (re = window.ActiveXObject));
  typeof A != "function" && (A = void 0);
  if (!A && !Y && !re) try {
    ot(() => import("./browser-ponyfill-D6KoWY7P.js").then((s) => s.b), __vite__mapDeps([0,1])).then(function(s) {
      A = s.default;
    }).catch(function() {
    });
  } catch {
  }
  var me = function(e, t) {
    if (t && M(t) === "object") {
      var n = "";
      for (var i in t) n += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(t[i]);
      if (!n) return e;
      e = e + (e.indexOf("?") !== -1 ? "&" : "?") + n.slice(1);
    }
    return e;
  }, He = function(e, t, n, i) {
    var r = function(l) {
      if (!l.ok) return n(l.statusText || "Error", {
        status: l.status
      });
      l.text().then(function(u) {
        n(null, {
          status: l.status,
          data: u
        });
      }).catch(n);
    };
    if (i) {
      var o = i(e, t);
      if (o instanceof Promise) {
        o.then(r).catch(n);
        return;
      }
    }
    typeof fetch == "function" ? fetch(e, t).then(r).catch(n) : A(e, t).then(r).catch(n);
  }, Ue = false, Xt = function(e, t, n, i) {
    e.queryStringParams && (t = me(t, e.queryStringParams));
    var r = Ae({}, typeof e.customHeaders == "function" ? e.customHeaders() : e.customHeaders);
    typeof window > "u" && typeof global < "u" && typeof global.process < "u" && global.process.versions && global.process.versions.node && (r["User-Agent"] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")")), n && (r["Content-Type"] = "application/json");
    var o = typeof e.requestOptions == "function" ? e.requestOptions(n) : e.requestOptions, a = Ae({
      method: n ? "POST" : "GET",
      body: n ? e.stringify(n) : void 0,
      headers: r
    }, Ue ? {} : o), l = typeof e.alternateFetch == "function" && e.alternateFetch.length >= 1 ? e.alternateFetch : void 0;
    try {
      He(t, a, i, l);
    } catch (u) {
      if (!o || Object.keys(o).length === 0 || !u.message || u.message.indexOf("not implemented") < 0) return i(u);
      try {
        Object.keys(o).forEach(function(c) {
          delete a[c];
        }), He(t, a, i, l), Ue = true;
      } catch (c) {
        i(c);
      }
    }
  }, Jt = function(e, t, n, i) {
    n && M(n) === "object" && (n = me("", n).slice(1)), e.queryStringParams && (t = me(t, e.queryStringParams));
    try {
      var r = Y ? new Y() : new re("MSXML2.XMLHTTP.3.0");
      r.open(n ? "POST" : "GET", t, 1), e.crossDomain || r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.withCredentials = !!e.withCredentials, n && r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), r.overrideMimeType && r.overrideMimeType("application/json");
      var o = e.customHeaders;
      if (o = typeof o == "function" ? o() : o, o) for (var a in o) r.setRequestHeader(a, o[a]);
      r.onreadystatechange = function() {
        r.readyState > 3 && i(r.status >= 400 ? r.statusText : null, {
          status: r.status,
          data: r.responseText
        });
      }, r.send(n);
    } catch (l) {
      console && console.log(l);
    }
  }, Wt = function(e, t, n, i) {
    if (typeof n == "function" && (i = n, n = void 0), i = i || function() {
    }, A && t.indexOf("file:") !== 0) return Xt(e, t, n, i);
    if (Ge() || typeof ActiveXObject == "function") return Jt(e, t, n, i);
    i(new Error("No fetch and no xhr implementation found!"));
  };
  function q(s) {
    "@babel/helpers - typeof";
    return q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, q(s);
  }
  function Me(s, e) {
    var t = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(s);
      e && (n = n.filter(function(i) {
        return Object.getOwnPropertyDescriptor(s, i).enumerable;
      })), t.push.apply(t, n);
    }
    return t;
  }
  function fe(s) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e] != null ? arguments[e] : {};
      e % 2 ? Me(Object(t), true).forEach(function(n) {
        Ze(s, n, t[n]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(t)) : Me(Object(t)).forEach(function(n) {
        Object.defineProperty(s, n, Object.getOwnPropertyDescriptor(t, n));
      });
    }
    return s;
  }
  function Qt(s, e) {
    if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function Yt(s, e) {
    for (var t = 0; t < e.length; t++) {
      var n = e[t];
      n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(s, et(n.key), n);
    }
  }
  function Gt(s, e, t) {
    return e && Yt(s.prototype, e), Object.defineProperty(s, "prototype", {
      writable: false
    }), s;
  }
  function Ze(s, e, t) {
    return (e = et(e)) in s ? Object.defineProperty(s, e, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : s[e] = t, s;
  }
  function et(s) {
    var e = Zt(s, "string");
    return q(e) == "symbol" ? e : e + "";
  }
  function Zt(s, e) {
    if (q(s) != "object" || !s) return s;
    var t = s[Symbol.toPrimitive];
    if (t !== void 0) {
      var n = t.call(s, e);
      if (q(n) != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(s);
  }
  let en;
  en = function() {
    return {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
      addPath: "/locales/add/{{lng}}/{{ns}}",
      parse: function(t) {
        return JSON.parse(t);
      },
      stringify: JSON.stringify,
      parsePayload: function(t, n, i) {
        return Ze({}, n, i || "");
      },
      parseLoadPayload: function(t, n) {
      },
      request: Wt,
      reloadInterval: typeof window < "u" ? false : 3600 * 1e3,
      customHeaders: {},
      queryStringParams: {},
      crossDomain: false,
      withCredentials: false,
      overrideMimeType: false,
      requestOptions: {
        mode: "cors",
        credentials: "same-origin",
        cache: "default"
      }
    };
  };
  tn = (function() {
    function s(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      Qt(this, s), this.services = e, this.options = t, this.allOptions = n, this.type = "backend", this.init(e, t, n);
    }
    return Gt(s, [
      {
        key: "init",
        value: function(t) {
          var n = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          if (this.services = t, this.options = fe(fe(fe({}, en()), this.options || {}), i), this.allOptions = r, this.services && this.options.reloadInterval) {
            var o = setInterval(function() {
              return n.reload();
            }, this.options.reloadInterval);
            q(o) === "object" && typeof o.unref == "function" && o.unref();
          }
        }
      },
      {
        key: "readMulti",
        value: function(t, n, i) {
          this._readAny(t, t, n, n, i);
        }
      },
      {
        key: "read",
        value: function(t, n, i) {
          this._readAny([
            t
          ], t, [
            n
          ], n, i);
        }
      },
      {
        key: "_readAny",
        value: function(t, n, i, r, o) {
          var a = this, l = this.options.loadPath;
          typeof this.options.loadPath == "function" && (l = this.options.loadPath(t, i)), l = _t(l), l.then(function(u) {
            if (!u) return o(null, {});
            var c = a.services.interpolator.interpolate(u, {
              lng: t.join("+"),
              ns: i.join("+")
            });
            a.loadUrl(c, o, n, r);
          });
        }
      },
      {
        key: "loadUrl",
        value: function(t, n, i, r) {
          var o = this, a = typeof i == "string" ? [
            i
          ] : i, l = typeof r == "string" ? [
            r
          ] : r, u = this.options.parseLoadPayload(a, l);
          this.options.request(this.options, t, u, function(c, f) {
            if (f && (f.status >= 500 && f.status < 600 || !f.status)) return n("failed loading " + t + "; status code: " + f.status, true);
            if (f && f.status >= 400 && f.status < 500) return n("failed loading " + t + "; status code: " + f.status, false);
            if (!f && c && c.message) {
              var d = c.message.toLowerCase(), h = [
                "failed",
                "fetch",
                "network",
                "load"
              ].find(function(x) {
                return d.indexOf(x) > -1;
              });
              if (h) return n("failed loading " + t + ": " + c.message, true);
            }
            if (c) return n(c, false);
            var p, b;
            try {
              typeof f.data == "string" ? p = o.options.parse(f.data, i, r) : p = f.data;
            } catch {
              b = "failed parsing " + t + " to json";
            }
            if (b) return n(b, false);
            n(null, p);
          });
        }
      },
      {
        key: "create",
        value: function(t, n, i, r, o) {
          var a = this;
          if (this.options.addPath) {
            typeof t == "string" && (t = [
              t
            ]);
            var l = this.options.parsePayload(n, i, r), u = 0, c = [], f = [];
            t.forEach(function(d) {
              var h = a.options.addPath;
              typeof a.options.addPath == "function" && (h = a.options.addPath(d, n));
              var p = a.services.interpolator.interpolate(h, {
                lng: d,
                ns: n
              });
              a.options.request(a.options, p, l, function(b, x) {
                u += 1, c.push(b), f.push(x), u === t.length && typeof o == "function" && o(c, f);
              });
            });
          }
        }
      },
      {
        key: "reload",
        value: function() {
          var t = this, n = this.services, i = n.backendConnector, r = n.languageUtils, o = n.logger, a = i.language;
          if (!(a && a.toLowerCase() === "cimode")) {
            var l = [], u = function(f) {
              var d = r.toResolveHierarchy(f);
              d.forEach(function(h) {
                l.indexOf(h) < 0 && l.push(h);
              });
            };
            u(a), this.allOptions.preload && this.allOptions.preload.forEach(function(c) {
              return u(c);
            }), l.forEach(function(c) {
              t.allOptions.ns.forEach(function(f) {
                i.read(c, f, "read", null, null, function(d, h) {
                  d && o.warn("loading namespace ".concat(f, " for language ").concat(c, " failed"), d), !d && h && o.log("loaded namespace ".concat(f, " for language ").concat(c), h), i.loaded("".concat(c, "|").concat(f), d, h);
                });
              });
            });
          }
        }
      }
    ]);
  })();
  tn.type = "backend";
  const { slice: nn, forEach: sn } = [];
  function rn(s) {
    return sn.call(nn.call(arguments, 1), (e) => {
      if (e) for (const t in e) s[t] === void 0 && (s[t] = e[t]);
    }), s;
  }
  function on(s) {
    return typeof s != "string" ? false : [
      /<\s*script.*?>/i,
      /<\s*\/\s*script\s*>/i,
      /<\s*img.*?on\w+\s*=/i,
      /<\s*\w+\s*on\w+\s*=.*?>/i,
      /javascript\s*:/i,
      /vbscript\s*:/i,
      /expression\s*\(/i,
      /eval\s*\(/i,
      /alert\s*\(/i,
      /document\.cookie/i,
      /document\.write\s*\(/i,
      /window\.location/i,
      /innerHTML/i
    ].some((t) => t.test(s));
  }
  const Ke = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, an = function(s, e) {
    const n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      path: "/"
    }, i = encodeURIComponent(e);
    let r = `${s}=${i}`;
    if (n.maxAge > 0) {
      const o = n.maxAge - 0;
      if (Number.isNaN(o)) throw new Error("maxAge should be a Number");
      r += `; Max-Age=${Math.floor(o)}`;
    }
    if (n.domain) {
      if (!Ke.test(n.domain)) throw new TypeError("option domain is invalid");
      r += `; Domain=${n.domain}`;
    }
    if (n.path) {
      if (!Ke.test(n.path)) throw new TypeError("option path is invalid");
      r += `; Path=${n.path}`;
    }
    if (n.expires) {
      if (typeof n.expires.toUTCString != "function") throw new TypeError("option expires is invalid");
      r += `; Expires=${n.expires.toUTCString()}`;
    }
    if (n.httpOnly && (r += "; HttpOnly"), n.secure && (r += "; Secure"), n.sameSite) switch (typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite) {
      case true:
        r += "; SameSite=Strict";
        break;
      case "lax":
        r += "; SameSite=Lax";
        break;
      case "strict":
        r += "; SameSite=Strict";
        break;
      case "none":
        r += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
    return n.partitioned && (r += "; Partitioned"), r;
  }, Ve = {
    create(s, e, t, n) {
      let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        path: "/",
        sameSite: "strict"
      };
      t && (i.expires = /* @__PURE__ */ new Date(), i.expires.setTime(i.expires.getTime() + t * 60 * 1e3)), n && (i.domain = n), document.cookie = an(s, e, i);
    },
    read(s) {
      const e = `${s}=`, t = document.cookie.split(";");
      for (let n = 0; n < t.length; n++) {
        let i = t[n];
        for (; i.charAt(0) === " "; ) i = i.substring(1, i.length);
        if (i.indexOf(e) === 0) return i.substring(e.length, i.length);
      }
      return null;
    },
    remove(s, e) {
      this.create(s, "", -1, e);
    }
  };
  var ln = {
    name: "cookie",
    lookup(s) {
      let { lookupCookie: e } = s;
      if (e && typeof document < "u") return Ve.read(e) || void 0;
    },
    cacheUserLanguage(s, e) {
      let { lookupCookie: t, cookieMinutes: n, cookieDomain: i, cookieOptions: r } = e;
      t && typeof document < "u" && Ve.create(t, s, n, i, r);
    }
  }, un = {
    name: "querystring",
    lookup(s) {
      var _a;
      let { lookupQuerystring: e } = s, t;
      if (typeof window < "u") {
        let { search: n } = window.location;
        !window.location.search && ((_a = window.location.hash) == null ? void 0 : _a.indexOf("?")) > -1 && (n = window.location.hash.substring(window.location.hash.indexOf("?")));
        const r = n.substring(1).split("&");
        for (let o = 0; o < r.length; o++) {
          const a = r[o].indexOf("=");
          a > 0 && r[o].substring(0, a) === e && (t = r[o].substring(a + 1));
        }
      }
      return t;
    }
  }, fn = {
    name: "hash",
    lookup(s) {
      var _a;
      let { lookupHash: e, lookupFromHashIndex: t } = s, n;
      if (typeof window < "u") {
        const { hash: i } = window.location;
        if (i && i.length > 2) {
          const r = i.substring(1);
          if (e) {
            const o = r.split("&");
            for (let a = 0; a < o.length; a++) {
              const l = o[a].indexOf("=");
              l > 0 && o[a].substring(0, l) === e && (n = o[a].substring(l + 1));
            }
          }
          if (n) return n;
          if (!n && t > -1) {
            const o = i.match(/\/([a-zA-Z-]*)/g);
            return Array.isArray(o) ? (_a = o[typeof t == "number" ? t : 0]) == null ? void 0 : _a.replace("/", "") : void 0;
          }
        }
      }
      return n;
    }
  };
  let V = null;
  const _e = () => {
    if (V !== null) return V;
    try {
      if (V = typeof window < "u" && window.localStorage !== null, !V) return false;
      const s = "i18next.translate.boo";
      window.localStorage.setItem(s, "foo"), window.localStorage.removeItem(s);
    } catch {
      V = false;
    }
    return V;
  };
  var cn = {
    name: "localStorage",
    lookup(s) {
      let { lookupLocalStorage: e } = s;
      if (e && _e()) return window.localStorage.getItem(e) || void 0;
    },
    cacheUserLanguage(s, e) {
      let { lookupLocalStorage: t } = e;
      t && _e() && window.localStorage.setItem(t, s);
    }
  };
  let _ = null;
  const qe = () => {
    if (_ !== null) return _;
    try {
      if (_ = typeof window < "u" && window.sessionStorage !== null, !_) return false;
      const s = "i18next.translate.boo";
      window.sessionStorage.setItem(s, "foo"), window.sessionStorage.removeItem(s);
    } catch {
      _ = false;
    }
    return _;
  };
  var dn = {
    name: "sessionStorage",
    lookup(s) {
      let { lookupSessionStorage: e } = s;
      if (e && qe()) return window.sessionStorage.getItem(e) || void 0;
    },
    cacheUserLanguage(s, e) {
      let { lookupSessionStorage: t } = e;
      t && qe() && window.sessionStorage.setItem(t, s);
    }
  }, hn = {
    name: "navigator",
    lookup(s) {
      const e = [];
      if (typeof navigator < "u") {
        const { languages: t, userLanguage: n, language: i } = navigator;
        if (t) for (let r = 0; r < t.length; r++) e.push(t[r]);
        n && e.push(n), i && e.push(i);
      }
      return e.length > 0 ? e : void 0;
    }
  }, pn = {
    name: "htmlTag",
    lookup(s) {
      let { htmlTag: e } = s, t;
      const n = e || (typeof document < "u" ? document.documentElement : null);
      return n && typeof n.getAttribute == "function" && (t = n.getAttribute("lang")), t;
    }
  }, gn = {
    name: "path",
    lookup(s) {
      var _a;
      let { lookupFromPathIndex: e } = s;
      if (typeof window > "u") return;
      const t = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      return Array.isArray(t) ? (_a = t[typeof e == "number" ? e : 0]) == null ? void 0 : _a.replace("/", "") : void 0;
    }
  }, mn = {
    name: "subdomain",
    lookup(s) {
      var _a, _b;
      let { lookupFromSubdomainIndex: e } = s;
      const t = typeof e == "number" ? e + 1 : 1, n = typeof window < "u" && ((_b = (_a = window.location) == null ? void 0 : _a.hostname) == null ? void 0 : _b.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
      if (n) return n[t];
    }
  };
  let tt = false;
  try {
    document.cookie, tt = true;
  } catch {
  }
  const nt = [
    "querystring",
    "cookie",
    "localStorage",
    "sessionStorage",
    "navigator",
    "htmlTag"
  ];
  tt || nt.splice(1, 1);
  const yn = () => ({
    order: nt,
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: [
      "localStorage"
    ],
    excludeCacheFor: [
      "cimode"
    ],
    convertDetectedLanguage: (s) => s
  });
  bn = class {
    constructor(e) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.type = "languageDetector", this.detectors = {}, this.init(e, t);
    }
    init() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        languageUtils: {}
      }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = e, this.options = rn(t, this.options || {}, yn()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (i) => i.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = n, this.addDetector(ln), this.addDetector(un), this.addDetector(cn), this.addDetector(dn), this.addDetector(hn), this.addDetector(pn), this.addDetector(gn), this.addDetector(mn), this.addDetector(fn);
    }
    addDetector(e) {
      return this.detectors[e.name] = e, this;
    }
    detect() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order, t = [];
      return e.forEach((n) => {
        if (this.detectors[n]) {
          let i = this.detectors[n].lookup(this.options);
          i && typeof i == "string" && (i = [
            i
          ]), i && (t = t.concat(i));
        }
      }), t = t.filter((n) => n != null && !on(n)).map((n) => this.options.convertDetectedLanguage(n)), this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes ? t : t.length > 0 ? t[0] : null;
    }
    cacheUserLanguage(e) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
      t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach((n) => {
        this.detectors[n] && this.detectors[n].cacheUserLanguage(e, this.options);
      }));
    }
  };
  bn.type = "languageDetector";
})();
export {
  tn as B,
  On as I,
  ot as _,
  __tla,
  bn as a,
  vn as b,
  j as i,
  wn as u
};

import { r as cs, g as So, a as ls } from "./vendor-react-qkC6yhPU.js";
function us(e, t) {
  for (var n = 0; n < t.length; n++) {
    const o = t[n];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const r in o) if (r !== "default" && !(r in e)) {
        const i = Object.getOwnPropertyDescriptor(o, r);
        i && Object.defineProperty(e, r, i.get ? i : { enumerable: true, get: () => o[r] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var zt = { exports: {} }, Ge = {};
var Kn;
function ds() {
  if (Kn) return Ge;
  Kn = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(o, r, i) {
    var c = null;
    if (i !== void 0 && (c = "" + i), r.key !== void 0 && (c = "" + r.key), "key" in r) {
      i = {};
      for (var a in r) a !== "key" && (i[a] = r[a]);
    } else i = r;
    return r = i.ref, { $$typeof: e, type: o, key: c, ref: r !== void 0 ? r : null, props: i };
  }
  return Ge.Fragment = t, Ge.jsx = n, Ge.jsxs = n, Ge;
}
var Gn;
function fs() {
  return Gn || (Gn = 1, zt.exports = ds()), zt.exports;
}
var m = fs(), s = cs();
const Se = So(s), xn = us({ __proto__: null, default: Se }, [s]);
function zn(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function ye(...e) {
  return (t) => {
    let n = false;
    const o = e.map((r) => {
      const i = zn(r, t);
      return !n && typeof i == "function" && (n = true), i;
    });
    if (n) return () => {
      for (let r = 0; r < o.length; r++) {
        const i = o[r];
        typeof i == "function" ? i() : zn(e[r], null);
      }
    };
  };
}
function B(...e) {
  return s.useCallback(ye(...e), e);
}
var ps = /* @__PURE__ */ Symbol.for("react.lazy"), pt = xn[" use ".trim().toString()];
function ms(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Co(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === ps && "_payload" in e && ms(e._payload);
}
function bo(e) {
  const t = hs(e), n = s.forwardRef((o, r) => {
    let { children: i, ...c } = o;
    Co(i) && typeof pt == "function" && (i = pt(i._payload));
    const a = s.Children.toArray(i), l = a.find(gs);
    if (l) {
      const u = l.props.children, f = a.map((d) => d === l ? s.Children.count(u) > 1 ? s.Children.only(null) : s.isValidElement(u) ? u.props.children : null : d);
      return m.jsx(t, { ...c, ref: r, children: s.isValidElement(u) ? s.cloneElement(u, void 0, f) : null });
    }
    return m.jsx(t, { ...c, ref: r, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Yd = bo("Slot");
function hs(e) {
  const t = s.forwardRef((n, o) => {
    let { children: r, ...i } = n;
    if (Co(r) && typeof pt == "function" && (r = pt(r._payload)), s.isValidElement(r)) {
      const c = ys(r), a = ws(i, r.props);
      return r.type !== s.Fragment && (a.ref = o ? ye(o, c) : c), s.cloneElement(r, a);
    }
    return s.Children.count(r) > 1 ? s.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var vs = /* @__PURE__ */ Symbol("radix.slottable");
function gs(e) {
  return s.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === vs;
}
function ws(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], i = t[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...a) => {
      const l = i(...a);
      return r(...a), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...i } : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ys(e) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a2.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Qe = ls();
const xs = So(Qe);
var Ss = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], Cs = Ss.reduce((e, t) => {
  const n = bo(`Primitive.${t}`), o = s.forwardRef((r, i) => {
    const { asChild: c, ...a } = r, l = c ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = true), m.jsx(l, { ...a, ref: i });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), bs = "Separator", Yn = "horizontal", Es = ["horizontal", "vertical"], Eo = s.forwardRef((e, t) => {
  const { decorative: n, orientation: o = Yn, ...r } = e, i = Rs(o) ? o : Yn, a = n ? { role: "none" } : { "aria-orientation": i === "vertical" ? i : void 0, role: "separator" };
  return m.jsx(Cs.div, { "data-orientation": i, ...a, ...r, ref: t });
});
Eo.displayName = bs;
function Rs(e) {
  return Es.includes(e);
}
var Xd = Eo;
function P(e, t, { checkForDefaultPrevented: n = true } = {}) {
  return function(r) {
    if (e == null ? void 0 : e(r), n === false || !r.defaultPrevented) return t == null ? void 0 : t(r);
  };
}
function Ps(e, t) {
  const n = s.createContext(t), o = (i) => {
    const { children: c, ...a } = i, l = s.useMemo(() => a, Object.values(a));
    return m.jsx(n.Provider, { value: l, children: c });
  };
  o.displayName = e + "Provider";
  function r(i) {
    const c = s.useContext(n);
    if (c) return c;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [o, r];
}
function xe(e, t = []) {
  let n = [];
  function o(i, c) {
    const a = s.createContext(c), l = n.length;
    n = [...n, c];
    const u = (d) => {
      var _a2;
      const { scope: h, children: v, ...w } = d, p = ((_a2 = h == null ? void 0 : h[e]) == null ? void 0 : _a2[l]) || a, g = s.useMemo(() => w, Object.values(w));
      return m.jsx(p.Provider, { value: g, children: v });
    };
    u.displayName = i + "Provider";
    function f(d, h) {
      var _a2;
      const v = ((_a2 = h == null ? void 0 : h[e]) == null ? void 0 : _a2[l]) || a, w = s.useContext(v);
      if (w) return w;
      if (c !== void 0) return c;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [u, f];
  }
  const r = () => {
    const i = n.map((c) => s.createContext(c));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return s.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return r.scopeName = e, [o, Ms(r, ...t)];
}
function Ms(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((r) => ({ useScope: r(), scopeName: r.scopeName }));
    return function(i) {
      const c = o.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(i)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return s.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var z = (globalThis == null ? void 0 : globalThis.document) ? s.useLayoutEffect : () => {
}, As = xn[" useId ".trim().toString()] || (() => {
}), _s = 0;
function ve(e) {
  const [t, n] = s.useState(As());
  return z(() => {
    n((o) => o ?? String(_s++));
  }, [e]), t ? `radix-${t}` : "";
}
var Is = xn[" useInsertionEffect ".trim().toString()] || z;
function _e({ prop: e, defaultProp: t, onChange: n = () => {
}, caller: o }) {
  const [r, i, c] = Ts({ defaultProp: t, onChange: n }), a = e !== void 0, l = a ? e : r;
  {
    const f = s.useRef(e !== void 0);
    s.useEffect(() => {
      const d = f.current;
      d !== a && console.warn(`${o} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), f.current = a;
    }, [a, o]);
  }
  const u = s.useCallback((f) => {
    var _a2;
    if (a) {
      const d = Os(f) ? f(e) : f;
      d !== e && ((_a2 = c.current) == null ? void 0 : _a2.call(c, d));
    } else i(f);
  }, [a, e, i, c]);
  return [l, u];
}
function Ts({ defaultProp: e, onChange: t }) {
  const [n, o] = s.useState(e), r = s.useRef(n), i = s.useRef(t);
  return Is(() => {
    i.current = t;
  }, [t]), s.useEffect(() => {
    var _a2;
    r.current !== n && ((_a2 = i.current) == null ? void 0 : _a2.call(i, n), r.current = n);
  }, [n, r]), [n, o, i];
}
function Os(e) {
  return typeof e == "function";
}
function Ds(e) {
  const t = Ns(e), n = s.forwardRef((o, r) => {
    const { children: i, ...c } = o, a = s.Children.toArray(i), l = a.find(js);
    if (l) {
      const u = l.props.children, f = a.map((d) => d === l ? s.Children.count(u) > 1 ? s.Children.only(null) : s.isValidElement(u) ? u.props.children : null : d);
      return m.jsx(t, { ...c, ref: r, children: s.isValidElement(u) ? s.cloneElement(u, void 0, f) : null });
    }
    return m.jsx(t, { ...c, ref: r, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
function Ns(e) {
  const t = s.forwardRef((n, o) => {
    const { children: r, ...i } = n;
    if (s.isValidElement(r)) {
      const c = Fs(r), a = ks(i, r.props);
      return r.type !== s.Fragment && (a.ref = o ? ye(o, c) : c), s.cloneElement(r, a);
    }
    return s.Children.count(r) > 1 ? s.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ls = /* @__PURE__ */ Symbol("radix.slottable");
function js(e) {
  return s.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ls;
}
function ks(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], i = t[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...a) => {
      const l = i(...a);
      return r(...a), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...i } : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Fs(e) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a2.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var $s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], N = $s.reduce((e, t) => {
  const n = Ds(`Primitive.${t}`), o = s.forwardRef((r, i) => {
    const { asChild: c, ...a } = r, l = c ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = true), m.jsx(l, { ...a, ref: i });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function Ro(e, t) {
  e && Qe.flushSync(() => e.dispatchEvent(t));
}
function de(e) {
  const t = s.useRef(e);
  return s.useEffect(() => {
    t.current = e;
  }), s.useMemo(() => (...n) => {
    var _a2;
    return (_a2 = t.current) == null ? void 0 : _a2.call(t, ...n);
  }, []);
}
function Bs(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = de(e);
  s.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return t.addEventListener("keydown", o, { capture: true }), () => t.removeEventListener("keydown", o, { capture: true });
  }, [n, t]);
}
var Vs = "DismissableLayer", rn = "dismissableLayer.update", Ws = "dismissableLayer.pointerDownOutside", Hs = "dismissableLayer.focusOutside", Xn, Po = s.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), bt = s.forwardRef((e, t) => {
  const { disableOutsidePointerEvents: n = false, onEscapeKeyDown: o, onPointerDownOutside: r, onFocusOutside: i, onInteractOutside: c, onDismiss: a, ...l } = e, u = s.useContext(Po), [f, d] = s.useState(null), h = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = s.useState({}), w = B(t, (E) => d(E)), p = Array.from(u.layers), [g] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = p.indexOf(g), S = f ? p.indexOf(f) : -1, x = u.layersWithOutsidePointerEventsDisabled.size > 0, C = S >= y, b = Gs((E) => {
    const _ = E.target, F = [...u.branches].some((D) => D.contains(_));
    !C || F || (r == null ? void 0 : r(E), c == null ? void 0 : c(E), E.defaultPrevented || (a == null ? void 0 : a()));
  }, h), I = zs((E) => {
    const _ = E.target;
    [...u.branches].some((D) => D.contains(_)) || (i == null ? void 0 : i(E), c == null ? void 0 : c(E), E.defaultPrevented || (a == null ? void 0 : a()));
  }, h);
  return Bs((E) => {
    S === u.layers.size - 1 && (o == null ? void 0 : o(E), !E.defaultPrevented && a && (E.preventDefault(), a()));
  }, h), s.useEffect(() => {
    if (f) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Xn = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), qn(), () => {
      n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Xn);
    };
  }, [f, h, n, u]), s.useEffect(() => () => {
    f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), qn());
  }, [f, u]), s.useEffect(() => {
    const E = () => v({});
    return document.addEventListener(rn, E), () => document.removeEventListener(rn, E);
  }, []), m.jsx(N.div, { ...l, ref: w, style: { pointerEvents: x ? C ? "auto" : "none" : void 0, ...e.style }, onFocusCapture: P(e.onFocusCapture, I.onFocusCapture), onBlurCapture: P(e.onBlurCapture, I.onBlurCapture), onPointerDownCapture: P(e.onPointerDownCapture, b.onPointerDownCapture) });
});
bt.displayName = Vs;
var Us = "DismissableLayerBranch", Ks = s.forwardRef((e, t) => {
  const n = s.useContext(Po), o = s.useRef(null), r = B(t, o);
  return s.useEffect(() => {
    const i = o.current;
    if (i) return n.branches.add(i), () => {
      n.branches.delete(i);
    };
  }, [n.branches]), m.jsx(N.div, { ...e, ref: r });
});
Ks.displayName = Us;
function Gs(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = de(e), o = s.useRef(false), r = s.useRef(() => {
  });
  return s.useEffect(() => {
    const i = (a) => {
      if (a.target && !o.current) {
        let l = function() {
          Mo(Ws, n, u, { discrete: true });
        };
        const u = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = l, t.addEventListener("click", r.current, { once: true })) : l();
      } else t.removeEventListener("click", r.current);
      o.current = false;
    }, c = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(c), t.removeEventListener("pointerdown", i), t.removeEventListener("click", r.current);
    };
  }, [t, n]), { onPointerDownCapture: () => o.current = true };
}
function zs(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = de(e), o = s.useRef(false);
  return s.useEffect(() => {
    const r = (i) => {
      i.target && !o.current && Mo(Hs, n, { originalEvent: i }, { discrete: false });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [t, n]), { onFocusCapture: () => o.current = true, onBlurCapture: () => o.current = false };
}
function qn() {
  const e = new CustomEvent(rn);
  document.dispatchEvent(e);
}
function Mo(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, i = new CustomEvent(e, { bubbles: false, cancelable: true, detail: n });
  t && r.addEventListener(e, t, { once: true }), o ? Ro(r, i) : r.dispatchEvent(i);
}
var Yt = "focusScope.autoFocusOnMount", Xt = "focusScope.autoFocusOnUnmount", Zn = { bubbles: false, cancelable: true }, Ys = "FocusScope", Et = s.forwardRef((e, t) => {
  const { loop: n = false, trapped: o = false, onMountAutoFocus: r, onUnmountAutoFocus: i, ...c } = e, [a, l] = s.useState(null), u = de(r), f = de(i), d = s.useRef(null), h = B(t, (p) => l(p)), v = s.useRef({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  s.useEffect(() => {
    if (o) {
      let p = function(x) {
        if (v.paused || !a) return;
        const C = x.target;
        a.contains(C) ? d.current = C : Ce(d.current, { select: true });
      }, g = function(x) {
        if (v.paused || !a) return;
        const C = x.relatedTarget;
        C !== null && (a.contains(C) || Ce(d.current, { select: true }));
      }, y = function(x) {
        if (document.activeElement === document.body) for (const b of x) b.removedNodes.length > 0 && Ce(a);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", g);
      const S = new MutationObserver(y);
      return a && S.observe(a, { childList: true, subtree: true }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", g), S.disconnect();
      };
    }
  }, [o, a, v.paused]), s.useEffect(() => {
    if (a) {
      Qn.add(v);
      const p = document.activeElement;
      if (!a.contains(p)) {
        const y = new CustomEvent(Yt, Zn);
        a.addEventListener(Yt, u), a.dispatchEvent(y), y.defaultPrevented || (Xs(ea(Ao(a)), { select: true }), document.activeElement === p && Ce(a));
      }
      return () => {
        a.removeEventListener(Yt, u), setTimeout(() => {
          const y = new CustomEvent(Xt, Zn);
          a.addEventListener(Xt, f), a.dispatchEvent(y), y.defaultPrevented || Ce(p ?? document.body, { select: true }), a.removeEventListener(Xt, f), Qn.remove(v);
        }, 0);
      };
    }
  }, [a, u, f, v]);
  const w = s.useCallback((p) => {
    if (!n && !o || v.paused) return;
    const g = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, y = document.activeElement;
    if (g && y) {
      const S = p.currentTarget, [x, C] = qs(S);
      x && C ? !p.shiftKey && y === C ? (p.preventDefault(), n && Ce(x, { select: true })) : p.shiftKey && y === x && (p.preventDefault(), n && Ce(C, { select: true })) : y === S && p.preventDefault();
    }
  }, [n, o, v.paused]);
  return m.jsx(N.div, { tabIndex: -1, ...c, ref: h, onKeyDown: w });
});
Et.displayName = Ys;
function Xs(e, { select: t = false } = {}) {
  const n = document.activeElement;
  for (const o of e) if (Ce(o, { select: t }), document.activeElement !== n) return;
}
function qs(e) {
  const t = Ao(e), n = Jn(t, e), o = Jn(t.reverse(), e);
  return [n, o];
}
function Ao(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (o) => {
    const r = o.tagName === "INPUT" && o.type === "hidden";
    return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Jn(e, t) {
  for (const n of e) if (!Zs(n, { upTo: t })) return n;
}
function Zs(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return true;
  for (; e; ) {
    if (t !== void 0 && e === t) return false;
    if (getComputedStyle(e).display === "none") return true;
    e = e.parentElement;
  }
  return false;
}
function Js(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ce(e, { select: t = false } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: true }), e !== n && Js(e) && t && e.select();
  }
}
var Qn = Qs();
function Qs() {
  let e = [];
  return { add(t) {
    const n = e[0];
    t !== n && (n == null ? void 0 : n.pause()), e = eo(e, t), e.unshift(t);
  }, remove(t) {
    var _a2;
    e = eo(e, t), (_a2 = e[0]) == null ? void 0 : _a2.resume();
  } };
}
function eo(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function ea(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ta = "Portal", Rt = s.forwardRef((e, t) => {
  var _a2;
  const { container: n, ...o } = e, [r, i] = s.useState(false);
  z(() => i(true), []);
  const c = n || r && ((_a2 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a2.body);
  return c ? xs.createPortal(m.jsx(N.div, { ...o, ref: t }), c) : null;
});
Rt.displayName = ta;
function na(e, t) {
  return s.useReducer((n, o) => t[n][o] ?? n, e);
}
var Re = (e) => {
  const { present: t, children: n } = e, o = oa(t), r = typeof n == "function" ? n({ present: o.isPresent }) : s.Children.only(n), i = B(o.ref, ra(r));
  return typeof n == "function" || o.isPresent ? s.cloneElement(r, { ref: i }) : null;
};
Re.displayName = "Presence";
function oa(e) {
  const [t, n] = s.useState(), o = s.useRef(null), r = s.useRef(e), i = s.useRef("none"), c = e ? "mounted" : "unmounted", [a, l] = na(c, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return s.useEffect(() => {
    const u = rt(o.current);
    i.current = a === "mounted" ? u : "none";
  }, [a]), z(() => {
    const u = o.current, f = r.current;
    if (f !== e) {
      const h = i.current, v = rt(u);
      e ? l("MOUNT") : v === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(f && h !== v ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [e, l]), z(() => {
    if (t) {
      let u;
      const f = t.ownerDocument.defaultView ?? window, d = (v) => {
        const p = rt(o.current).includes(CSS.escape(v.animationName));
        if (v.target === t && p && (l("ANIMATION_END"), !r.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, h = (v) => {
        v.target === t && (i.current = rt(o.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        f.clearTimeout(u), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else l("ANIMATION_END");
  }, [t, l]), { isPresent: ["mounted", "unmountSuspended"].includes(a), ref: s.useCallback((u) => {
    o.current = u ? getComputedStyle(u) : null, n(u);
  }, []) };
}
function rt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ra(e) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a2.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var qt = 0;
function Sn() {
  s.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? to()), document.body.insertAdjacentElement("beforeend", e[1] ?? to()), qt++, () => {
      qt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), qt--;
    };
  }, []);
}
function to() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ce = function() {
  return ce = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, ce.apply(this, arguments);
};
function _o(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function ia(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, r = t.length, i; o < r; o++) (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var ut = "right-scroll-bar-position", dt = "width-before-scroll-bar", sa = "with-scroll-bars-hidden", aa = "--removed-body-scroll-bar-size";
function Zt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ca(e, t) {
  var n = s.useState(function() {
    return { value: e, callback: t, facade: { get current() {
      return n.value;
    }, set current(o) {
      var r = n.value;
      r !== o && (n.value = o, n.callback(o, r));
    } } };
  })[0];
  return n.callback = t, n.facade;
}
var la = typeof window < "u" ? s.useLayoutEffect : s.useEffect, no = /* @__PURE__ */ new WeakMap();
function ua(e, t) {
  var n = ca(null, function(o) {
    return e.forEach(function(r) {
      return Zt(r, o);
    });
  });
  return la(function() {
    var o = no.get(n);
    if (o) {
      var r = new Set(o), i = new Set(e), c = n.current;
      r.forEach(function(a) {
        i.has(a) || Zt(a, null);
      }), i.forEach(function(a) {
        r.has(a) || Zt(a, c);
      });
    }
    no.set(n, e);
  }, [e]), n;
}
function da(e) {
  return e;
}
function fa(e, t) {
  t === void 0 && (t = da);
  var n = [], o = false, r = { read: function() {
    if (o) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    return n.length ? n[n.length - 1] : e;
  }, useMedium: function(i) {
    var c = t(i, o);
    return n.push(c), function() {
      n = n.filter(function(a) {
        return a !== c;
      });
    };
  }, assignSyncMedium: function(i) {
    for (o = true; n.length; ) {
      var c = n;
      n = [], c.forEach(i);
    }
    n = { push: function(a) {
      return i(a);
    }, filter: function() {
      return n;
    } };
  }, assignMedium: function(i) {
    o = true;
    var c = [];
    if (n.length) {
      var a = n;
      n = [], a.forEach(i), c = n;
    }
    var l = function() {
      var f = c;
      c = [], f.forEach(i);
    }, u = function() {
      return Promise.resolve().then(l);
    };
    u(), n = { push: function(f) {
      c.push(f), u();
    }, filter: function(f) {
      return c = c.filter(f), n;
    } };
  } };
  return r;
}
function pa(e) {
  e === void 0 && (e = {});
  var t = fa(null);
  return t.options = ce({ async: true, ssr: false }, e), t;
}
var Io = function(e) {
  var t = e.sideCar, n = _o(e, ["sideCar"]);
  if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o) throw new Error("Sidecar medium not found");
  return s.createElement(o, ce({}, n));
};
Io.isSideCarExport = true;
function ma(e, t) {
  return e.useMedium(t), Io;
}
var To = pa(), Jt = function() {
}, Pt = s.forwardRef(function(e, t) {
  var n = s.useRef(null), o = s.useState({ onScrollCapture: Jt, onWheelCapture: Jt, onTouchMoveCapture: Jt }), r = o[0], i = o[1], c = e.forwardProps, a = e.children, l = e.className, u = e.removeScrollBar, f = e.enabled, d = e.shards, h = e.sideCar, v = e.noRelative, w = e.noIsolation, p = e.inert, g = e.allowPinchZoom, y = e.as, S = y === void 0 ? "div" : y, x = e.gapMode, C = _o(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), b = h, I = ua([n, t]), E = ce(ce({}, C), r);
  return s.createElement(s.Fragment, null, f && s.createElement(b, { sideCar: To, removeScrollBar: u, shards: d, noRelative: v, noIsolation: w, inert: p, setCallbacks: i, allowPinchZoom: !!g, lockRef: n, gapMode: x }), c ? s.cloneElement(s.Children.only(a), ce(ce({}, E), { ref: I })) : s.createElement(S, ce({}, E, { className: l, ref: I }), a));
});
Pt.defaultProps = { enabled: true, removeScrollBar: true, inert: false };
Pt.classNames = { fullWidth: dt, zeroRight: ut };
var ha = function() {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function va() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ha();
  return t && e.setAttribute("nonce", t), e;
}
function ga(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function wa(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ya = function() {
  var e = 0, t = null;
  return { add: function(n) {
    e == 0 && (t = va()) && (ga(t, n), wa(t)), e++;
  }, remove: function() {
    e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
  } };
}, xa = function() {
  var e = ya();
  return function(t, n) {
    s.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Oo = function() {
  var e = xa(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, Sa = { left: 0, top: 0, right: 0, gap: 0 }, Qt = function(e) {
  return parseInt(e || "", 10) || 0;
}, Ca = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Qt(n), Qt(o), Qt(r)];
}, ba = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u") return Sa;
  var t = Ca(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, o - n + t[2] - t[0]) };
}, Ea = Oo(), $e = "data-scroll-locked", Ra = function(e, t, n, o) {
  var r = e.left, i = e.top, c = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(sa, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(a, "px ").concat(o, `;
  }
  body[`).concat($e, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(o, ";"), n === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(o, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(o, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(ut, ` {
    right: `).concat(a, "px ").concat(o, `;
  }
  
  .`).concat(dt, ` {
    margin-right: `).concat(a, "px ").concat(o, `;
  }
  
  .`).concat(ut, " .").concat(ut, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(dt, " .").concat(dt, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat($e, `] {
    `).concat(aa, ": ").concat(a, `px;
  }
`);
}, oo = function() {
  var e = parseInt(document.body.getAttribute($e) || "0", 10);
  return isFinite(e) ? e : 0;
}, Pa = function() {
  s.useEffect(function() {
    return document.body.setAttribute($e, (oo() + 1).toString()), function() {
      var e = oo() - 1;
      e <= 0 ? document.body.removeAttribute($e) : document.body.setAttribute($e, e.toString());
    };
  }, []);
}, Ma = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o;
  Pa();
  var i = s.useMemo(function() {
    return ba(r);
  }, [r]);
  return s.createElement(Ea, { styles: Ra(i, !t, r, n ? "" : "!important") });
}, sn = false;
if (typeof window < "u") try {
  var it = Object.defineProperty({}, "passive", { get: function() {
    return sn = true, true;
  } });
  window.addEventListener("test", it, it), window.removeEventListener("test", it, it);
} catch {
  sn = false;
}
var je = sn ? { passive: false } : false, Aa = function(e) {
  return e.tagName === "TEXTAREA";
}, Do = function(e, t) {
  if (!(e instanceof Element)) return false;
  var n = window.getComputedStyle(e);
  return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Aa(e) && n[t] === "visible");
}, _a = function(e) {
  return Do(e, "overflowY");
}, Ia = function(e) {
  return Do(e, "overflowX");
}, ro = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var r = No(e, o);
    if (r) {
      var i = Lo(e, o), c = i[1], a = i[2];
      if (c > a) return true;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return false;
}, Ta = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [t, n, o];
}, Oa = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [t, n, o];
}, No = function(e, t) {
  return e === "v" ? _a(t) : Ia(t);
}, Lo = function(e, t) {
  return e === "v" ? Ta(t) : Oa(t);
}, Da = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Na = function(e, t, n, o, r) {
  var i = Da(e, window.getComputedStyle(t).direction), c = i * o, a = n.target, l = t.contains(a), u = false, f = c > 0, d = 0, h = 0;
  do {
    if (!a) break;
    var v = Lo(e, a), w = v[0], p = v[1], g = v[2], y = p - g - i * w;
    (w || y) && No(e, a) && (d += y, h += w);
    var S = a.parentNode;
    a = S && S.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? S.host : S;
  } while (!l && a !== document.body || l && (t.contains(a) || t === a));
  return (f && Math.abs(d) < 1 || !f && Math.abs(h) < 1) && (u = true), u;
}, st = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, io = function(e) {
  return [e.deltaX, e.deltaY];
}, so = function(e) {
  return e && "current" in e ? e.current : e;
}, La = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, ja = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ka = 0, ke = [];
function Fa(e) {
  var t = s.useRef([]), n = s.useRef([0, 0]), o = s.useRef(), r = s.useState(ka++)[0], i = s.useState(Oo)[0], c = s.useRef(e);
  s.useEffect(function() {
    c.current = e;
  }, [e]), s.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var p = ia([e.lockRef.current], (e.shards || []).map(so), true).filter(Boolean);
      return p.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), p.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = s.useCallback(function(p, g) {
    if ("touches" in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey) return !c.current.allowPinchZoom;
    var y = st(p), S = n.current, x = "deltaX" in p ? p.deltaX : S[0] - y[0], C = "deltaY" in p ? p.deltaY : S[1] - y[1], b, I = p.target, E = Math.abs(x) > Math.abs(C) ? "h" : "v";
    if ("touches" in p && E === "h" && I.type === "range") return false;
    var _ = ro(E, I);
    if (!_) return true;
    if (_ ? b = E : (b = E === "v" ? "h" : "v", _ = ro(E, I)), !_) return false;
    if (!o.current && "changedTouches" in p && (x || C) && (o.current = b), !b) return true;
    var F = o.current || b;
    return Na(F, g, p, F === "h" ? x : C);
  }, []), l = s.useCallback(function(p) {
    var g = p;
    if (!(!ke.length || ke[ke.length - 1] !== i)) {
      var y = "deltaY" in g ? io(g) : st(g), S = t.current.filter(function(b) {
        return b.name === g.type && (b.target === g.target || g.target === b.shadowParent) && La(b.delta, y);
      })[0];
      if (S && S.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!S) {
        var x = (c.current.shards || []).map(so).filter(Boolean).filter(function(b) {
          return b.contains(g.target);
        }), C = x.length > 0 ? a(g, x[0]) : !c.current.noIsolation;
        C && g.cancelable && g.preventDefault();
      }
    }
  }, []), u = s.useCallback(function(p, g, y, S) {
    var x = { name: p, delta: g, target: y, should: S, shadowParent: $a(y) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== x;
      });
    }, 1);
  }, []), f = s.useCallback(function(p) {
    n.current = st(p), o.current = void 0;
  }, []), d = s.useCallback(function(p) {
    u(p.type, io(p), p.target, a(p, e.lockRef.current));
  }, []), h = s.useCallback(function(p) {
    u(p.type, st(p), p.target, a(p, e.lockRef.current));
  }, []);
  s.useEffect(function() {
    return ke.push(i), e.setCallbacks({ onScrollCapture: d, onWheelCapture: d, onTouchMoveCapture: h }), document.addEventListener("wheel", l, je), document.addEventListener("touchmove", l, je), document.addEventListener("touchstart", f, je), function() {
      ke = ke.filter(function(p) {
        return p !== i;
      }), document.removeEventListener("wheel", l, je), document.removeEventListener("touchmove", l, je), document.removeEventListener("touchstart", f, je);
    };
  }, []);
  var v = e.removeScrollBar, w = e.inert;
  return s.createElement(s.Fragment, null, w ? s.createElement(i, { styles: ja(r) }) : null, v ? s.createElement(Ma, { noRelative: e.noRelative, gapMode: e.gapMode }) : null);
}
function $a(e) {
  for (var t = null; e !== null; ) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Ba = ma(To, Fa);
var Mt = s.forwardRef(function(e, t) {
  return s.createElement(Pt, ce({}, e, { ref: t, sideCar: Ba }));
});
Mt.classNames = Pt.classNames;
var Va = function(e) {
  if (typeof document > "u") return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Fe = /* @__PURE__ */ new WeakMap(), at = /* @__PURE__ */ new WeakMap(), ct = {}, en = 0, jo = function(e) {
  return e && (e.host || jo(e.parentNode));
}, Wa = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n)) return n;
    var o = jo(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ha = function(e, t, n, o) {
  var r = Wa(t, Array.isArray(e) ? e : [e]);
  ct[n] || (ct[n] = /* @__PURE__ */ new WeakMap());
  var i = ct[n], c = [], a = /* @__PURE__ */ new Set(), l = new Set(r), u = function(d) {
    !d || a.has(d) || (a.add(d), u(d.parentNode));
  };
  r.forEach(u);
  var f = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(h) {
      if (a.has(h)) f(h);
      else try {
        var v = h.getAttribute(o), w = v !== null && v !== "false", p = (Fe.get(h) || 0) + 1, g = (i.get(h) || 0) + 1;
        Fe.set(h, p), i.set(h, g), c.push(h), p === 1 && w && at.set(h, true), g === 1 && h.setAttribute(n, "true"), w || h.setAttribute(o, "true");
      } catch (y) {
        console.error("aria-hidden: cannot operate on ", h, y);
      }
    });
  };
  return f(t), a.clear(), en++, function() {
    c.forEach(function(d) {
      var h = Fe.get(d) - 1, v = i.get(d) - 1;
      Fe.set(d, h), i.set(d, v), h || (at.has(d) || d.removeAttribute(o), at.delete(d)), v || d.removeAttribute(n);
    }), en--, en || (Fe = /* @__PURE__ */ new WeakMap(), Fe = /* @__PURE__ */ new WeakMap(), at = /* @__PURE__ */ new WeakMap(), ct = {});
  };
}, Cn = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = Va(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live], script"))), Ha(o, r, n, "aria-hidden")) : function() {
    return null;
  };
};
function Ua(e) {
  const t = Ka(e), n = s.forwardRef((o, r) => {
    const { children: i, ...c } = o, a = s.Children.toArray(i), l = a.find(za);
    if (l) {
      const u = l.props.children, f = a.map((d) => d === l ? s.Children.count(u) > 1 ? s.Children.only(null) : s.isValidElement(u) ? u.props.children : null : d);
      return m.jsx(t, { ...c, ref: r, children: s.isValidElement(u) ? s.cloneElement(u, void 0, f) : null });
    }
    return m.jsx(t, { ...c, ref: r, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
function Ka(e) {
  const t = s.forwardRef((n, o) => {
    const { children: r, ...i } = n;
    if (s.isValidElement(r)) {
      const c = Xa(r), a = Ya(i, r.props);
      return r.type !== s.Fragment && (a.ref = o ? ye(o, c) : c), s.cloneElement(r, a);
    }
    return s.Children.count(r) > 1 ? s.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ga = /* @__PURE__ */ Symbol("radix.slottable");
function za(e) {
  return s.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ga;
}
function Ya(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], i = t[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...a) => {
      const l = i(...a);
      return r(...a), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...i } : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Xa(e) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a2.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var At = "Dialog", [ko] = xe(At), [qa, ae] = ko(At), Fo = (e) => {
  const { __scopeDialog: t, children: n, open: o, defaultOpen: r, onOpenChange: i, modal: c = true } = e, a = s.useRef(null), l = s.useRef(null), [u, f] = _e({ prop: o, defaultProp: r ?? false, onChange: i, caller: At });
  return m.jsx(qa, { scope: t, triggerRef: a, contentRef: l, contentId: ve(), titleId: ve(), descriptionId: ve(), open: u, onOpenChange: f, onOpenToggle: s.useCallback(() => f((d) => !d), [f]), modal: c, children: n });
};
Fo.displayName = At;
var $o = "DialogTrigger", Za = s.forwardRef((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = ae($o, n), i = B(t, r.triggerRef);
  return m.jsx(N.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": r.open, "aria-controls": r.contentId, "data-state": Rn(r.open), ...o, ref: i, onClick: P(e.onClick, r.onOpenToggle) });
});
Za.displayName = $o;
var bn = "DialogPortal", [Ja, Bo] = ko(bn, { forceMount: void 0 }), Vo = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, i = ae(bn, t);
  return m.jsx(Ja, { scope: t, forceMount: n, children: s.Children.map(o, (c) => m.jsx(Re, { present: n || i.open, children: m.jsx(Rt, { asChild: true, container: r, children: c }) })) });
};
Vo.displayName = bn;
var mt = "DialogOverlay", Wo = s.forwardRef((e, t) => {
  const n = Bo(mt, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, i = ae(mt, e.__scopeDialog);
  return i.modal ? m.jsx(Re, { present: o || i.open, children: m.jsx(ec, { ...r, ref: t }) }) : null;
});
Wo.displayName = mt;
var Qa = Ua("DialogOverlay.RemoveScroll"), ec = s.forwardRef((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = ae(mt, n);
  return m.jsx(Mt, { as: Qa, allowPinchZoom: true, shards: [r.contentRef], children: m.jsx(N.div, { "data-state": Rn(r.open), ...o, ref: t, style: { pointerEvents: "auto", ...o.style } }) });
}), Ie = "DialogContent", Ho = s.forwardRef((e, t) => {
  const n = Bo(Ie, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, i = ae(Ie, e.__scopeDialog);
  return m.jsx(Re, { present: o || i.open, children: i.modal ? m.jsx(tc, { ...r, ref: t }) : m.jsx(nc, { ...r, ref: t }) });
});
Ho.displayName = Ie;
var tc = s.forwardRef((e, t) => {
  const n = ae(Ie, e.__scopeDialog), o = s.useRef(null), r = B(t, n.contentRef, o);
  return s.useEffect(() => {
    const i = o.current;
    if (i) return Cn(i);
  }, []), m.jsx(Uo, { ...e, ref: r, trapFocus: n.open, disableOutsidePointerEvents: true, onCloseAutoFocus: P(e.onCloseAutoFocus, (i) => {
    var _a2;
    i.preventDefault(), (_a2 = n.triggerRef.current) == null ? void 0 : _a2.focus();
  }), onPointerDownOutside: P(e.onPointerDownOutside, (i) => {
    const c = i.detail.originalEvent, a = c.button === 0 && c.ctrlKey === true;
    (c.button === 2 || a) && i.preventDefault();
  }), onFocusOutside: P(e.onFocusOutside, (i) => i.preventDefault()) });
}), nc = s.forwardRef((e, t) => {
  const n = ae(Ie, e.__scopeDialog), o = s.useRef(false), r = s.useRef(false);
  return m.jsx(Uo, { ...e, ref: t, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (i) => {
    var _a2, _b;
    (_a2 = e.onCloseAutoFocus) == null ? void 0 : _a2.call(e, i), i.defaultPrevented || (o.current || ((_b = n.triggerRef.current) == null ? void 0 : _b.focus()), i.preventDefault()), o.current = false, r.current = false;
  }, onInteractOutside: (i) => {
    var _a2, _b;
    (_a2 = e.onInteractOutside) == null ? void 0 : _a2.call(e, i), i.defaultPrevented || (o.current = true, i.detail.originalEvent.type === "pointerdown" && (r.current = true));
    const c = i.target;
    ((_b = n.triggerRef.current) == null ? void 0 : _b.contains(c)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && r.current && i.preventDefault();
  } });
}), Uo = s.forwardRef((e, t) => {
  const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: i, ...c } = e, a = ae(Ie, n), l = s.useRef(null), u = B(t, l);
  return Sn(), m.jsxs(m.Fragment, { children: [m.jsx(Et, { asChild: true, loop: true, trapped: o, onMountAutoFocus: r, onUnmountAutoFocus: i, children: m.jsx(bt, { role: "dialog", id: a.contentId, "aria-describedby": a.descriptionId, "aria-labelledby": a.titleId, "data-state": Rn(a.open), ...c, ref: u, onDismiss: () => a.onOpenChange(false) }) }), m.jsxs(m.Fragment, { children: [m.jsx(oc, { titleId: a.titleId }), m.jsx(ic, { contentRef: l, descriptionId: a.descriptionId })] })] });
}), En = "DialogTitle", Ko = s.forwardRef((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = ae(En, n);
  return m.jsx(N.h2, { id: r.titleId, ...o, ref: t });
});
Ko.displayName = En;
var Go = "DialogDescription", zo = s.forwardRef((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = ae(Go, n);
  return m.jsx(N.p, { id: r.descriptionId, ...o, ref: t });
});
zo.displayName = Go;
var Yo = "DialogClose", Xo = s.forwardRef((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = ae(Yo, n);
  return m.jsx(N.button, { type: "button", ...o, ref: t, onClick: P(e.onClick, () => r.onOpenChange(false)) });
});
Xo.displayName = Yo;
function Rn(e) {
  return e ? "open" : "closed";
}
var qo = "DialogTitleWarning", [qd, Zo] = Ps(qo, { contentName: Ie, titleName: En, docsSlug: "dialog" }), oc = ({ titleId: e }) => {
  const t = Zo(qo), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return s.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, rc = "DialogDescriptionWarning", ic = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Zo(rc).contentName}}.`;
  return s.useEffect(() => {
    var _a2;
    const r = (_a2 = e.current) == null ? void 0 : _a2.getAttribute("aria-describedby");
    t && r && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, Zd = Fo, Jd = Vo, Qd = Wo, ef = Ho, tf = Ko, nf = zo, of = Xo;
function Pn(e) {
  const t = s.useRef({ value: e, previous: e });
  return s.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Mn(e) {
  const [t, n] = s.useState(void 0);
  return z(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length) return;
        const i = r[0];
        let c, a;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          c = u.inlineSize, a = u.blockSize;
        } else c = e.offsetWidth, a = e.offsetHeight;
        n({ width: c, height: a });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else n(void 0);
  }, [e]), t;
}
var _t = "Switch", [sc] = xe(_t), [ac, cc] = sc(_t), Jo = s.forwardRef((e, t) => {
  const { __scopeSwitch: n, name: o, checked: r, defaultChecked: i, required: c, disabled: a, value: l = "on", onCheckedChange: u, form: f, ...d } = e, [h, v] = s.useState(null), w = B(t, (x) => v(x)), p = s.useRef(false), g = h ? f || !!h.closest("form") : true, [y, S] = _e({ prop: r, defaultProp: i ?? false, onChange: u, caller: _t });
  return m.jsxs(ac, { scope: n, checked: y, disabled: a, children: [m.jsx(N.button, { type: "button", role: "switch", "aria-checked": y, "aria-required": c, "data-state": nr(y), "data-disabled": a ? "" : void 0, disabled: a, value: l, ...d, ref: w, onClick: P(e.onClick, (x) => {
    S((C) => !C), g && (p.current = x.isPropagationStopped(), p.current || x.stopPropagation());
  }) }), g && m.jsx(tr, { control: h, bubbles: !p.current, name: o, value: l, checked: y, required: c, disabled: a, form: f, style: { transform: "translateX(-100%)" } })] });
});
Jo.displayName = _t;
var Qo = "SwitchThumb", er = s.forwardRef((e, t) => {
  const { __scopeSwitch: n, ...o } = e, r = cc(Qo, n);
  return m.jsx(N.span, { "data-state": nr(r.checked), "data-disabled": r.disabled ? "" : void 0, ...o, ref: t });
});
er.displayName = Qo;
var lc = "SwitchBubbleInput", tr = s.forwardRef(({ __scopeSwitch: e, control: t, checked: n, bubbles: o = true, ...r }, i) => {
  const c = s.useRef(null), a = B(c, i), l = Pn(n), u = Mn(t);
  return s.useEffect(() => {
    const f = c.current;
    if (!f) return;
    const d = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(d, "checked").set;
    if (l !== n && v) {
      const w = new Event("click", { bubbles: o });
      v.call(f, n), f.dispatchEvent(w);
    }
  }, [l, n, o]), m.jsx("input", { type: "checkbox", "aria-hidden": true, defaultChecked: n, ...r, tabIndex: -1, ref: a, style: { ...r.style, ...u, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } });
});
tr.displayName = lc;
function nr(e) {
  return e ? "checked" : "unchecked";
}
var rf = Jo, sf = er;
function ht(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var uc = s.createContext(void 0);
function It(e) {
  const t = s.useContext(uc);
  return e || t || "ltr";
}
function ao(e) {
  const t = dc(e), n = s.forwardRef((o, r) => {
    const { children: i, ...c } = o, a = s.Children.toArray(i), l = a.find(pc);
    if (l) {
      const u = l.props.children, f = a.map((d) => d === l ? s.Children.count(u) > 1 ? s.Children.only(null) : s.isValidElement(u) ? u.props.children : null : d);
      return m.jsx(t, { ...c, ref: r, children: s.isValidElement(u) ? s.cloneElement(u, void 0, f) : null });
    }
    return m.jsx(t, { ...c, ref: r, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
function dc(e) {
  const t = s.forwardRef((n, o) => {
    const { children: r, ...i } = n;
    if (s.isValidElement(r)) {
      const c = hc(r), a = mc(i, r.props);
      return r.type !== s.Fragment && (a.ref = o ? ye(o, c) : c), s.cloneElement(r, a);
    }
    return s.Children.count(r) > 1 ? s.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var fc = /* @__PURE__ */ Symbol("radix.slottable");
function pc(e) {
  return s.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === fc;
}
function mc(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], i = t[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...a) => {
      const l = i(...a);
      return r(...a), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...i } : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function hc(e) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a2.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Tt(e) {
  const t = e + "CollectionProvider", [n, o] = xe(t), [r, i] = n(t, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), c = (p) => {
    const { scope: g, children: y } = p, S = Se.useRef(null), x = Se.useRef(/* @__PURE__ */ new Map()).current;
    return m.jsx(r, { scope: g, itemMap: x, collectionRef: S, children: y });
  };
  c.displayName = t;
  const a = e + "CollectionSlot", l = ao(a), u = Se.forwardRef((p, g) => {
    const { scope: y, children: S } = p, x = i(a, y), C = B(g, x.collectionRef);
    return m.jsx(l, { ref: C, children: S });
  });
  u.displayName = a;
  const f = e + "CollectionItemSlot", d = "data-radix-collection-item", h = ao(f), v = Se.forwardRef((p, g) => {
    const { scope: y, children: S, ...x } = p, C = Se.useRef(null), b = B(g, C), I = i(f, y);
    return Se.useEffect(() => (I.itemMap.set(C, { ref: C, ...x }), () => {
      I.itemMap.delete(C);
    })), m.jsx(h, { [d]: "", ref: b, children: S });
  });
  v.displayName = f;
  function w(p) {
    const g = i(e + "CollectionConsumer", p);
    return Se.useCallback(() => {
      const S = g.collectionRef.current;
      if (!S) return [];
      const x = Array.from(S.querySelectorAll(`[${d}]`));
      return Array.from(g.itemMap.values()).sort((I, E) => x.indexOf(I.ref.current) - x.indexOf(E.ref.current));
    }, [g.collectionRef, g.itemMap]);
  }
  return [{ Provider: c, Slot: u, ItemSlot: v }, w, o];
}
var or = ["PageUp", "PageDown"], rr = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], ir = { "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"], "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"], "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"], "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"] }, We = "Slider", [an, vc, gc] = Tt(We), [sr] = xe(We, [gc]), [wc, Ot] = sr(We), ar = s.forwardRef((e, t) => {
  const { name: n, min: o = 0, max: r = 100, step: i = 1, orientation: c = "horizontal", disabled: a = false, minStepsBetweenThumbs: l = 0, defaultValue: u = [o], value: f, onValueChange: d = () => {
  }, onValueCommit: h = () => {
  }, inverted: v = false, form: w, ...p } = e, g = s.useRef(/* @__PURE__ */ new Set()), y = s.useRef(0), x = c === "horizontal" ? yc : xc, [C = [], b] = _e({ prop: f, defaultProp: u, onChange: (O) => {
    var _a2;
    (_a2 = [...g.current][y.current]) == null ? void 0 : _a2.focus(), d(O);
  } }), I = s.useRef(C);
  function E(O) {
    const L = Rc(C, O);
    D(O, L);
  }
  function _(O) {
    D(O, y.current);
  }
  function F() {
    const O = I.current[y.current];
    C[y.current] !== O && h(C);
  }
  function D(O, L, { commit: $ } = { commit: false }) {
    const j = _c(i), V = Ic(Math.round((O - o) / i) * i + o, j), T = ht(V, [o, r]);
    b((k = []) => {
      const A = bc(k, T, L);
      if (Ac(A, l * i)) {
        y.current = A.indexOf(T);
        const R = String(A) !== String(k);
        return R && $ && h(A), R ? A : k;
      } else return k;
    });
  }
  return m.jsx(wc, { scope: e.__scopeSlider, name: n, disabled: a, min: o, max: r, valueIndexToChangeRef: y, thumbs: g.current, values: C, orientation: c, form: w, children: m.jsx(an.Provider, { scope: e.__scopeSlider, children: m.jsx(an.Slot, { scope: e.__scopeSlider, children: m.jsx(x, { "aria-disabled": a, "data-disabled": a ? "" : void 0, ...p, ref: t, onPointerDown: P(p.onPointerDown, () => {
    a || (I.current = C);
  }), min: o, max: r, inverted: v, onSlideStart: a ? void 0 : E, onSlideMove: a ? void 0 : _, onSlideEnd: a ? void 0 : F, onHomeKeyDown: () => !a && D(o, 0, { commit: true }), onEndKeyDown: () => !a && D(r, C.length - 1, { commit: true }), onStepKeyDown: ({ event: O, direction: L }) => {
    if (!a) {
      const V = or.includes(O.key) || O.shiftKey && rr.includes(O.key) ? 10 : 1, T = y.current, k = C[T], A = i * V * L;
      D(k + A, T, { commit: true });
    }
  } }) }) }) });
});
ar.displayName = We;
var [cr, lr] = sr(We, { startEdge: "left", endEdge: "right", size: "width", direction: 1 }), yc = s.forwardRef((e, t) => {
  const { min: n, max: o, dir: r, inverted: i, onSlideStart: c, onSlideMove: a, onSlideEnd: l, onStepKeyDown: u, ...f } = e, [d, h] = s.useState(null), v = B(t, (x) => h(x)), w = s.useRef(void 0), p = It(r), g = p === "ltr", y = g && !i || !g && i;
  function S(x) {
    const C = w.current || d.getBoundingClientRect(), b = [0, C.width], E = An(b, y ? [n, o] : [o, n]);
    return w.current = C, E(x - C.left);
  }
  return m.jsx(cr, { scope: e.__scopeSlider, startEdge: y ? "left" : "right", endEdge: y ? "right" : "left", direction: y ? 1 : -1, size: "width", children: m.jsx(ur, { dir: p, "data-orientation": "horizontal", ...f, ref: v, style: { ...f.style, "--radix-slider-thumb-transform": "translateX(-50%)" }, onSlideStart: (x) => {
    const C = S(x.clientX);
    c == null ? void 0 : c(C);
  }, onSlideMove: (x) => {
    const C = S(x.clientX);
    a == null ? void 0 : a(C);
  }, onSlideEnd: () => {
    w.current = void 0, l == null ? void 0 : l();
  }, onStepKeyDown: (x) => {
    const b = ir[y ? "from-left" : "from-right"].includes(x.key);
    u == null ? void 0 : u({ event: x, direction: b ? -1 : 1 });
  } }) });
}), xc = s.forwardRef((e, t) => {
  const { min: n, max: o, inverted: r, onSlideStart: i, onSlideMove: c, onSlideEnd: a, onStepKeyDown: l, ...u } = e, f = s.useRef(null), d = B(t, f), h = s.useRef(void 0), v = !r;
  function w(p) {
    const g = h.current || f.current.getBoundingClientRect(), y = [0, g.height], x = An(y, v ? [o, n] : [n, o]);
    return h.current = g, x(p - g.top);
  }
  return m.jsx(cr, { scope: e.__scopeSlider, startEdge: v ? "bottom" : "top", endEdge: v ? "top" : "bottom", size: "height", direction: v ? 1 : -1, children: m.jsx(ur, { "data-orientation": "vertical", ...u, ref: d, style: { ...u.style, "--radix-slider-thumb-transform": "translateY(50%)" }, onSlideStart: (p) => {
    const g = w(p.clientY);
    i == null ? void 0 : i(g);
  }, onSlideMove: (p) => {
    const g = w(p.clientY);
    c == null ? void 0 : c(g);
  }, onSlideEnd: () => {
    h.current = void 0, a == null ? void 0 : a();
  }, onStepKeyDown: (p) => {
    const y = ir[v ? "from-bottom" : "from-top"].includes(p.key);
    l == null ? void 0 : l({ event: p, direction: y ? -1 : 1 });
  } }) });
}), ur = s.forwardRef((e, t) => {
  const { __scopeSlider: n, onSlideStart: o, onSlideMove: r, onSlideEnd: i, onHomeKeyDown: c, onEndKeyDown: a, onStepKeyDown: l, ...u } = e, f = Ot(We, n);
  return m.jsx(N.span, { ...u, ref: t, onKeyDown: P(e.onKeyDown, (d) => {
    d.key === "Home" ? (c(d), d.preventDefault()) : d.key === "End" ? (a(d), d.preventDefault()) : or.concat(rr).includes(d.key) && (l(d), d.preventDefault());
  }), onPointerDown: P(e.onPointerDown, (d) => {
    const h = d.target;
    h.setPointerCapture(d.pointerId), d.preventDefault(), f.thumbs.has(h) ? h.focus() : o(d);
  }), onPointerMove: P(e.onPointerMove, (d) => {
    d.target.hasPointerCapture(d.pointerId) && r(d);
  }), onPointerUp: P(e.onPointerUp, (d) => {
    const h = d.target;
    h.hasPointerCapture(d.pointerId) && (h.releasePointerCapture(d.pointerId), i(d));
  }) });
}), dr = "SliderTrack", fr = s.forwardRef((e, t) => {
  const { __scopeSlider: n, ...o } = e, r = Ot(dr, n);
  return m.jsx(N.span, { "data-disabled": r.disabled ? "" : void 0, "data-orientation": r.orientation, ...o, ref: t });
});
fr.displayName = dr;
var cn = "SliderRange", pr = s.forwardRef((e, t) => {
  const { __scopeSlider: n, ...o } = e, r = Ot(cn, n), i = lr(cn, n), c = s.useRef(null), a = B(t, c), l = r.values.length, u = r.values.map((h) => vr(h, r.min, r.max)), f = l > 1 ? Math.min(...u) : 0, d = 100 - Math.max(...u);
  return m.jsx(N.span, { "data-orientation": r.orientation, "data-disabled": r.disabled ? "" : void 0, ...o, ref: a, style: { ...e.style, [i.startEdge]: f + "%", [i.endEdge]: d + "%" } });
});
pr.displayName = cn;
var ln = "SliderThumb", mr = s.forwardRef((e, t) => {
  const n = vc(e.__scopeSlider), [o, r] = s.useState(null), i = B(t, (a) => r(a)), c = s.useMemo(() => o ? n().findIndex((a) => a.ref.current === o) : -1, [n, o]);
  return m.jsx(Sc, { ...e, ref: i, index: c });
}), Sc = s.forwardRef((e, t) => {
  const { __scopeSlider: n, index: o, name: r, ...i } = e, c = Ot(ln, n), a = lr(ln, n), [l, u] = s.useState(null), f = B(t, (S) => u(S)), d = l ? c.form || !!l.closest("form") : true, h = Mn(l), v = c.values[o], w = v === void 0 ? 0 : vr(v, c.min, c.max), p = Ec(o, c.values.length), g = h == null ? void 0 : h[a.size], y = g ? Pc(g, w, a.direction) : 0;
  return s.useEffect(() => {
    if (l) return c.thumbs.add(l), () => {
      c.thumbs.delete(l);
    };
  }, [l, c.thumbs]), m.jsxs("span", { style: { transform: "var(--radix-slider-thumb-transform)", position: "absolute", [a.startEdge]: `calc(${w}% + ${y}px)` }, children: [m.jsx(an.ItemSlot, { scope: e.__scopeSlider, children: m.jsx(N.span, { role: "slider", "aria-label": e["aria-label"] || p, "aria-valuemin": c.min, "aria-valuenow": v, "aria-valuemax": c.max, "aria-orientation": c.orientation, "data-orientation": c.orientation, "data-disabled": c.disabled ? "" : void 0, tabIndex: c.disabled ? void 0 : 0, ...i, ref: f, style: v === void 0 ? { display: "none" } : e.style, onFocus: P(e.onFocus, () => {
    c.valueIndexToChangeRef.current = o;
  }) }) }), d && m.jsx(hr, { name: r ?? (c.name ? c.name + (c.values.length > 1 ? "[]" : "") : void 0), form: c.form, value: v }, o)] });
});
mr.displayName = ln;
var Cc = "RadioBubbleInput", hr = s.forwardRef(({ __scopeSlider: e, value: t, ...n }, o) => {
  const r = s.useRef(null), i = B(r, o), c = Pn(t);
  return s.useEffect(() => {
    const a = r.current;
    if (!a) return;
    const l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "value").set;
    if (c !== t && f) {
      const d = new Event("input", { bubbles: true });
      f.call(a, t), a.dispatchEvent(d);
    }
  }, [c, t]), m.jsx(N.input, { style: { display: "none" }, ...n, ref: i, defaultValue: t });
});
hr.displayName = Cc;
function bc(e = [], t, n) {
  const o = [...e];
  return o[n] = t, o.sort((r, i) => r - i);
}
function vr(e, t, n) {
  const i = 100 / (n - t) * (e - t);
  return ht(i, [0, 100]);
}
function Ec(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function Rc(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((r) => Math.abs(r - t)), o = Math.min(...n);
  return n.indexOf(o);
}
function Pc(e, t, n) {
  const o = e / 2, i = An([0, 50], [0, o]);
  return (o - i(t) * n) * n;
}
function Mc(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function Ac(e, t) {
  if (t > 0) {
    const n = Mc(e);
    return Math.min(...n) >= t;
  }
  return true;
}
function An(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function _c(e) {
  return (String(e).split(".")[1] || "").length;
}
function Ic(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var af = ar, cf = fr, lf = pr, uf = mr;
const Tc = ["top", "right", "bottom", "left"], be = Math.min, J = Math.max, vt = Math.round, lt = Math.floor, ue = (e) => ({ x: e, y: e }), Oc = { left: "right", right: "left", bottom: "top", top: "bottom" }, Dc = { start: "end", end: "start" };
function un(e, t, n) {
  return J(e, be(t, n));
}
function ge(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function we(e) {
  return e.split("-")[0];
}
function He(e) {
  return e.split("-")[1];
}
function _n(e) {
  return e === "x" ? "y" : "x";
}
function In(e) {
  return e === "y" ? "height" : "width";
}
const Nc = /* @__PURE__ */ new Set(["top", "bottom"]);
function le(e) {
  return Nc.has(we(e)) ? "y" : "x";
}
function Tn(e) {
  return _n(le(e));
}
function Lc(e, t, n) {
  n === void 0 && (n = false);
  const o = He(e), r = Tn(e), i = In(r);
  let c = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (c = gt(c)), [c, gt(c)];
}
function jc(e) {
  const t = gt(e);
  return [dn(e), t, dn(t)];
}
function dn(e) {
  return e.replace(/start|end/g, (t) => Dc[t]);
}
const co = ["left", "right"], lo = ["right", "left"], kc = ["top", "bottom"], Fc = ["bottom", "top"];
function $c(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? lo : co : t ? co : lo;
    case "left":
    case "right":
      return t ? kc : Fc;
    default:
      return [];
  }
}
function Bc(e, t, n, o) {
  const r = He(e);
  let i = $c(we(e), n === "start", o);
  return r && (i = i.map((c) => c + "-" + r), t && (i = i.concat(i.map(dn)))), i;
}
function gt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Oc[t]);
}
function Vc(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function gr(e) {
  return typeof e != "number" ? Vc(e) : { top: e, right: e, bottom: e, left: e };
}
function wt(e) {
  const { x: t, y: n, width: o, height: r } = e;
  return { width: o, height: r, top: n, left: t, right: t + o, bottom: n + r, x: t, y: n };
}
function uo(e, t, n) {
  let { reference: o, floating: r } = e;
  const i = le(t), c = Tn(t), a = In(c), l = we(t), u = i === "y", f = o.x + o.width / 2 - r.width / 2, d = o.y + o.height / 2 - r.height / 2, h = o[a] / 2 - r[a] / 2;
  let v;
  switch (l) {
    case "top":
      v = { x: f, y: o.y - r.height };
      break;
    case "bottom":
      v = { x: f, y: o.y + o.height };
      break;
    case "right":
      v = { x: o.x + o.width, y: d };
      break;
    case "left":
      v = { x: o.x - r.width, y: d };
      break;
    default:
      v = { x: o.x, y: o.y };
  }
  switch (He(t)) {
    case "start":
      v[c] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      v[c] += h * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const Wc = async (e, t, n) => {
  const { placement: o = "bottom", strategy: r = "absolute", middleware: i = [], platform: c } = n, a = i.filter(Boolean), l = await (c.isRTL == null ? void 0 : c.isRTL(t));
  let u = await c.getElementRects({ reference: e, floating: t, strategy: r }), { x: f, y: d } = uo(u, o, l), h = o, v = {}, w = 0;
  for (let p = 0; p < a.length; p++) {
    const { name: g, fn: y } = a[p], { x: S, y: x, data: C, reset: b } = await y({ x: f, y: d, initialPlacement: o, placement: h, strategy: r, middlewareData: v, rects: u, platform: c, elements: { reference: e, floating: t } });
    f = S ?? f, d = x ?? d, v = { ...v, [g]: { ...v[g], ...C } }, b && w <= 50 && (w++, typeof b == "object" && (b.placement && (h = b.placement), b.rects && (u = b.rects === true ? await c.getElementRects({ reference: e, floating: t, strategy: r }) : b.rects), { x: f, y: d } = uo(u, h, l)), p = -1);
  }
  return { x: f, y: d, placement: h, strategy: r, middlewareData: v };
};
async function Xe(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: r, platform: i, rects: c, elements: a, strategy: l } = e, { boundary: u = "clippingAncestors", rootBoundary: f = "viewport", elementContext: d = "floating", altBoundary: h = false, padding: v = 0 } = ge(t, e), w = gr(v), g = a[h ? d === "floating" ? "reference" : "floating" : d], y = wt(await i.getClippingRect({ element: (n = await (i.isElement == null ? void 0 : i.isElement(g))) == null || n ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)), boundary: u, rootBoundary: f, strategy: l })), S = d === "floating" ? { x: o, y: r, width: c.floating.width, height: c.floating.height } : c.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), C = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || { x: 1, y: 1 } : { x: 1, y: 1 }, b = wt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: a, rect: S, offsetParent: x, strategy: l }) : S);
  return { top: (y.top - b.top + w.top) / C.y, bottom: (b.bottom - y.bottom + w.bottom) / C.y, left: (y.left - b.left + w.left) / C.x, right: (b.right - y.right + w.right) / C.x };
}
const Hc = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: o, placement: r, rects: i, platform: c, elements: a, middlewareData: l } = t, { element: u, padding: f = 0 } = ge(e, t) || {};
  if (u == null) return {};
  const d = gr(f), h = { x: n, y: o }, v = Tn(r), w = In(v), p = await c.getDimensions(u), g = v === "y", y = g ? "top" : "left", S = g ? "bottom" : "right", x = g ? "clientHeight" : "clientWidth", C = i.reference[w] + i.reference[v] - h[v] - i.floating[w], b = h[v] - i.reference[v], I = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(u));
  let E = I ? I[x] : 0;
  (!E || !await (c.isElement == null ? void 0 : c.isElement(I))) && (E = a.floating[x] || i.floating[w]);
  const _ = C / 2 - b / 2, F = E / 2 - p[w] / 2 - 1, D = be(d[y], F), O = be(d[S], F), L = D, $ = E - p[w] - O, j = E / 2 - p[w] / 2 + _, V = un(L, j, $), T = !l.arrow && He(r) != null && j !== V && i.reference[w] / 2 - (j < L ? D : O) - p[w] / 2 < 0, k = T ? j < L ? j - L : j - $ : 0;
  return { [v]: h[v] + k, data: { [v]: V, centerOffset: j - V - k, ...T && { alignmentOffset: k } }, reset: T };
} }), Uc = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n, o;
    const { placement: r, middlewareData: i, rects: c, initialPlacement: a, platform: l, elements: u } = t, { mainAxis: f = true, crossAxis: d = true, fallbackPlacements: h, fallbackStrategy: v = "bestFit", fallbackAxisSideDirection: w = "none", flipAlignment: p = true, ...g } = ge(e, t);
    if ((n = i.arrow) != null && n.alignmentOffset) return {};
    const y = we(r), S = le(a), x = we(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), b = h || (x || !p ? [gt(a)] : jc(a)), I = w !== "none";
    !h && I && b.push(...Bc(a, p, w, C));
    const E = [a, ...b], _ = await Xe(t, g), F = [];
    let D = ((o = i.flip) == null ? void 0 : o.overflows) || [];
    if (f && F.push(_[y]), d) {
      const j = Lc(r, c, C);
      F.push(_[j[0]], _[j[1]]);
    }
    if (D = [...D, { placement: r, overflows: F }], !F.every((j) => j <= 0)) {
      var O, L;
      const j = (((O = i.flip) == null ? void 0 : O.index) || 0) + 1, V = E[j];
      if (V && (!(d === "alignment" ? S !== le(V) : false) || D.every((A) => le(A.placement) === S ? A.overflows[0] > 0 : true))) return { data: { index: j, overflows: D }, reset: { placement: V } };
      let T = (L = D.filter((k) => k.overflows[0] <= 0).sort((k, A) => k.overflows[1] - A.overflows[1])[0]) == null ? void 0 : L.placement;
      if (!T) switch (v) {
        case "bestFit": {
          var $;
          const k = ($ = D.filter((A) => {
            if (I) {
              const R = le(A.placement);
              return R === S || R === "y";
            }
            return true;
          }).map((A) => [A.placement, A.overflows.filter((R) => R > 0).reduce((R, K) => R + K, 0)]).sort((A, R) => A[1] - R[1])[0]) == null ? void 0 : $[0];
          k && (T = k);
          break;
        }
        case "initialPlacement":
          T = a;
          break;
      }
      if (r !== T) return { reset: { placement: T } };
    }
    return {};
  } };
};
function fo(e, t) {
  return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function po(e) {
  return Tc.some((t) => e[t] >= 0);
}
const Kc = function(e) {
  return e === void 0 && (e = {}), { name: "hide", options: e, async fn(t) {
    const { rects: n } = t, { strategy: o = "referenceHidden", ...r } = ge(e, t);
    switch (o) {
      case "referenceHidden": {
        const i = await Xe(t, { ...r, elementContext: "reference" }), c = fo(i, n.reference);
        return { data: { referenceHiddenOffsets: c, referenceHidden: po(c) } };
      }
      case "escaped": {
        const i = await Xe(t, { ...r, altBoundary: true }), c = fo(i, n.floating);
        return { data: { escapedOffsets: c, escaped: po(c) } };
      }
      default:
        return {};
    }
  } };
}, wr = /* @__PURE__ */ new Set(["left", "top"]);
async function Gc(e, t) {
  const { placement: n, platform: o, elements: r } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), c = we(n), a = He(n), l = le(n) === "y", u = wr.has(c) ? -1 : 1, f = i && l ? -1 : 1, d = ge(t, e);
  let { mainAxis: h, crossAxis: v, alignmentAxis: w } = typeof d == "number" ? { mainAxis: d, crossAxis: 0, alignmentAxis: null } : { mainAxis: d.mainAxis || 0, crossAxis: d.crossAxis || 0, alignmentAxis: d.alignmentAxis };
  return a && typeof w == "number" && (v = a === "end" ? w * -1 : w), l ? { x: v * f, y: h * u } : { x: h * u, y: v * f };
}
const zc = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    var n, o;
    const { x: r, y: i, placement: c, middlewareData: a } = t, l = await Gc(t, e);
    return c === ((n = a.offset) == null ? void 0 : n.placement) && (o = a.arrow) != null && o.alignmentOffset ? {} : { x: r + l.x, y: i + l.y, data: { ...l, placement: c } };
  } };
}, Yc = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: o, placement: r } = t, { mainAxis: i = true, crossAxis: c = false, limiter: a = { fn: (g) => {
      let { x: y, y: S } = g;
      return { x: y, y: S };
    } }, ...l } = ge(e, t), u = { x: n, y: o }, f = await Xe(t, l), d = le(we(r)), h = _n(d);
    let v = u[h], w = u[d];
    if (i) {
      const g = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", S = v + f[g], x = v - f[y];
      v = un(S, v, x);
    }
    if (c) {
      const g = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", S = w + f[g], x = w - f[y];
      w = un(S, w, x);
    }
    const p = a.fn({ ...t, [h]: v, [d]: w });
    return { ...p, data: { x: p.x - n, y: p.y - o, enabled: { [h]: i, [d]: c } } };
  } };
}, Xc = function(e) {
  return e === void 0 && (e = {}), { options: e, fn(t) {
    const { x: n, y: o, placement: r, rects: i, middlewareData: c } = t, { offset: a = 0, mainAxis: l = true, crossAxis: u = true } = ge(e, t), f = { x: n, y: o }, d = le(r), h = _n(d);
    let v = f[h], w = f[d];
    const p = ge(a, t), g = typeof p == "number" ? { mainAxis: p, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...p };
    if (l) {
      const x = h === "y" ? "height" : "width", C = i.reference[h] - i.floating[x] + g.mainAxis, b = i.reference[h] + i.reference[x] - g.mainAxis;
      v < C ? v = C : v > b && (v = b);
    }
    if (u) {
      var y, S;
      const x = h === "y" ? "width" : "height", C = wr.has(we(r)), b = i.reference[d] - i.floating[x] + (C && ((y = c.offset) == null ? void 0 : y[d]) || 0) + (C ? 0 : g.crossAxis), I = i.reference[d] + i.reference[x] + (C ? 0 : ((S = c.offset) == null ? void 0 : S[d]) || 0) - (C ? g.crossAxis : 0);
      w < b ? w = b : w > I && (w = I);
    }
    return { [h]: v, [d]: w };
  } };
}, qc = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    var n, o;
    const { placement: r, rects: i, platform: c, elements: a } = t, { apply: l = () => {
    }, ...u } = ge(e, t), f = await Xe(t, u), d = we(r), h = He(r), v = le(r) === "y", { width: w, height: p } = i.floating;
    let g, y;
    d === "top" || d === "bottom" ? (g = d, y = h === (await (c.isRTL == null ? void 0 : c.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = d, g = h === "end" ? "top" : "bottom");
    const S = p - f.top - f.bottom, x = w - f.left - f.right, C = be(p - f[g], S), b = be(w - f[y], x), I = !t.middlewareData.shift;
    let E = C, _ = b;
    if ((n = t.middlewareData.shift) != null && n.enabled.x && (_ = x), (o = t.middlewareData.shift) != null && o.enabled.y && (E = S), I && !h) {
      const D = J(f.left, 0), O = J(f.right, 0), L = J(f.top, 0), $ = J(f.bottom, 0);
      v ? _ = w - 2 * (D !== 0 || O !== 0 ? D + O : J(f.left, f.right)) : E = p - 2 * (L !== 0 || $ !== 0 ? L + $ : J(f.top, f.bottom));
    }
    await l({ ...t, availableWidth: _, availableHeight: E });
    const F = await c.getDimensions(a.floating);
    return w !== F.width || p !== F.height ? { reset: { rects: true } } : {};
  } };
};
function Dt() {
  return typeof window < "u";
}
function Ue(e) {
  return yr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Q(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function pe(e) {
  var t;
  return (t = (yr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function yr(e) {
  return Dt() ? e instanceof Node || e instanceof Q(e).Node : false;
}
function ie(e) {
  return Dt() ? e instanceof Element || e instanceof Q(e).Element : false;
}
function fe(e) {
  return Dt() ? e instanceof HTMLElement || e instanceof Q(e).HTMLElement : false;
}
function mo(e) {
  return !Dt() || typeof ShadowRoot > "u" ? false : e instanceof ShadowRoot || e instanceof Q(e).ShadowRoot;
}
const Zc = /* @__PURE__ */ new Set(["inline", "contents"]);
function et(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: r } = se(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !Zc.has(r);
}
const Jc = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Qc(e) {
  return Jc.has(Ue(e));
}
const el = [":popover-open", ":modal"];
function Nt(e) {
  return el.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return false;
    }
  });
}
const tl = ["transform", "translate", "scale", "rotate", "perspective"], nl = ["transform", "translate", "scale", "rotate", "perspective", "filter"], ol = ["paint", "layout", "strict", "content"];
function On(e) {
  const t = Dn(), n = ie(e) ? se(e) : e;
  return tl.some((o) => n[o] ? n[o] !== "none" : false) || (n.containerType ? n.containerType !== "normal" : false) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !t && (n.filter ? n.filter !== "none" : false) || nl.some((o) => (n.willChange || "").includes(o)) || ol.some((o) => (n.contain || "").includes(o));
}
function rl(e) {
  let t = Ee(e);
  for (; fe(t) && !Ve(t); ) {
    if (On(t)) return t;
    if (Nt(t)) return null;
    t = Ee(t);
  }
  return null;
}
function Dn() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
const il = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ve(e) {
  return il.has(Ue(e));
}
function se(e) {
  return Q(e).getComputedStyle(e);
}
function Lt(e) {
  return ie(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Ee(e) {
  if (Ue(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || mo(e) && e.host || pe(e);
  return mo(t) ? t.host : t;
}
function xr(e) {
  const t = Ee(e);
  return Ve(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : fe(t) && et(t) ? t : xr(t);
}
function qe(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = true);
  const r = xr(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), c = Q(r);
  if (i) {
    const a = fn(c);
    return t.concat(c, c.visualViewport || [], et(r) ? r : [], a && n ? qe(a) : []);
  }
  return t.concat(r, qe(r, [], n));
}
function fn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Sr(e) {
  const t = se(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = fe(e), i = r ? e.offsetWidth : n, c = r ? e.offsetHeight : o, a = vt(n) !== i || vt(o) !== c;
  return a && (n = i, o = c), { width: n, height: o, $: a };
}
function Nn(e) {
  return ie(e) ? e : e.contextElement;
}
function Be(e) {
  const t = Nn(e);
  if (!fe(t)) return ue(1);
  const n = t.getBoundingClientRect(), { width: o, height: r, $: i } = Sr(t);
  let c = (i ? vt(n.width) : n.width) / o, a = (i ? vt(n.height) : n.height) / r;
  return (!c || !Number.isFinite(c)) && (c = 1), (!a || !Number.isFinite(a)) && (a = 1), { x: c, y: a };
}
const sl = ue(0);
function Cr(e) {
  const t = Q(e);
  return !Dn() || !t.visualViewport ? sl : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function al(e, t, n) {
  return t === void 0 && (t = false), !n || t && n !== Q(e) ? false : t;
}
function Te(e, t, n, o) {
  t === void 0 && (t = false), n === void 0 && (n = false);
  const r = e.getBoundingClientRect(), i = Nn(e);
  let c = ue(1);
  t && (o ? ie(o) && (c = Be(o)) : c = Be(e));
  const a = al(i, n, o) ? Cr(i) : ue(0);
  let l = (r.left + a.x) / c.x, u = (r.top + a.y) / c.y, f = r.width / c.x, d = r.height / c.y;
  if (i) {
    const h = Q(i), v = o && ie(o) ? Q(o) : o;
    let w = h, p = fn(w);
    for (; p && o && v !== w; ) {
      const g = Be(p), y = p.getBoundingClientRect(), S = se(p), x = y.left + (p.clientLeft + parseFloat(S.paddingLeft)) * g.x, C = y.top + (p.clientTop + parseFloat(S.paddingTop)) * g.y;
      l *= g.x, u *= g.y, f *= g.x, d *= g.y, l += x, u += C, w = Q(p), p = fn(w);
    }
  }
  return wt({ width: f, height: d, x: l, y: u });
}
function jt(e, t) {
  const n = Lt(e).scrollLeft;
  return t ? t.left + n : Te(pe(e)).left + n;
}
function br(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - jt(e, n), r = n.top + t.scrollTop;
  return { x: o, y: r };
}
function cl(e) {
  let { elements: t, rect: n, offsetParent: o, strategy: r } = e;
  const i = r === "fixed", c = pe(o), a = t ? Nt(t.floating) : false;
  if (o === c || a && i) return n;
  let l = { scrollLeft: 0, scrollTop: 0 }, u = ue(1);
  const f = ue(0), d = fe(o);
  if ((d || !d && !i) && ((Ue(o) !== "body" || et(c)) && (l = Lt(o)), fe(o))) {
    const v = Te(o);
    u = Be(o), f.x = v.x + o.clientLeft, f.y = v.y + o.clientTop;
  }
  const h = c && !d && !i ? br(c, l) : ue(0);
  return { width: n.width * u.x, height: n.height * u.y, x: n.x * u.x - l.scrollLeft * u.x + f.x + h.x, y: n.y * u.y - l.scrollTop * u.y + f.y + h.y };
}
function ll(e) {
  return Array.from(e.getClientRects());
}
function ul(e) {
  const t = pe(e), n = Lt(e), o = e.ownerDocument.body, r = J(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), i = J(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let c = -n.scrollLeft + jt(e);
  const a = -n.scrollTop;
  return se(o).direction === "rtl" && (c += J(t.clientWidth, o.clientWidth) - r), { width: r, height: i, x: c, y: a };
}
const ho = 25;
function dl(e, t) {
  const n = Q(e), o = pe(e), r = n.visualViewport;
  let i = o.clientWidth, c = o.clientHeight, a = 0, l = 0;
  if (r) {
    i = r.width, c = r.height;
    const f = Dn();
    (!f || f && t === "fixed") && (a = r.offsetLeft, l = r.offsetTop);
  }
  const u = jt(o);
  if (u <= 0) {
    const f = o.ownerDocument, d = f.body, h = getComputedStyle(d), v = f.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, w = Math.abs(o.clientWidth - d.clientWidth - v);
    w <= ho && (i -= w);
  } else u <= ho && (i += u);
  return { width: i, height: c, x: a, y: l };
}
const fl = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function pl(e, t) {
  const n = Te(e, true, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, i = fe(e) ? Be(e) : ue(1), c = e.clientWidth * i.x, a = e.clientHeight * i.y, l = r * i.x, u = o * i.y;
  return { width: c, height: a, x: l, y: u };
}
function vo(e, t, n) {
  let o;
  if (t === "viewport") o = dl(e, n);
  else if (t === "document") o = ul(pe(e));
  else if (ie(t)) o = pl(t, n);
  else {
    const r = Cr(e);
    o = { x: t.x - r.x, y: t.y - r.y, width: t.width, height: t.height };
  }
  return wt(o);
}
function Er(e, t) {
  const n = Ee(e);
  return n === t || !ie(n) || Ve(n) ? false : se(n).position === "fixed" || Er(n, t);
}
function ml(e, t) {
  const n = t.get(e);
  if (n) return n;
  let o = qe(e, [], false).filter((a) => ie(a) && Ue(a) !== "body"), r = null;
  const i = se(e).position === "fixed";
  let c = i ? Ee(e) : e;
  for (; ie(c) && !Ve(c); ) {
    const a = se(c), l = On(c);
    !l && a.position === "fixed" && (r = null), (i ? !l && !r : !l && a.position === "static" && !!r && fl.has(r.position) || et(c) && !l && Er(e, c)) ? o = o.filter((f) => f !== c) : r = a, c = Ee(c);
  }
  return t.set(e, o), o;
}
function hl(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: r } = e;
  const c = [...n === "clippingAncestors" ? Nt(t) ? [] : ml(t, this._c) : [].concat(n), o], a = c[0], l = c.reduce((u, f) => {
    const d = vo(t, f, r);
    return u.top = J(d.top, u.top), u.right = be(d.right, u.right), u.bottom = be(d.bottom, u.bottom), u.left = J(d.left, u.left), u;
  }, vo(t, a, r));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}
function vl(e) {
  const { width: t, height: n } = Sr(e);
  return { width: t, height: n };
}
function gl(e, t, n) {
  const o = fe(t), r = pe(t), i = n === "fixed", c = Te(e, true, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = ue(0);
  function u() {
    l.x = jt(r);
  }
  if (o || !o && !i) if ((Ue(t) !== "body" || et(r)) && (a = Lt(t)), o) {
    const v = Te(t, true, i, t);
    l.x = v.x + t.clientLeft, l.y = v.y + t.clientTop;
  } else r && u();
  i && !o && r && u();
  const f = r && !o && !i ? br(r, a) : ue(0), d = c.left + a.scrollLeft - l.x - f.x, h = c.top + a.scrollTop - l.y - f.y;
  return { x: d, y: h, width: c.width, height: c.height };
}
function tn(e) {
  return se(e).position === "static";
}
function go(e, t) {
  if (!fe(e) || se(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return pe(e) === n && (n = n.ownerDocument.body), n;
}
function Rr(e, t) {
  const n = Q(e);
  if (Nt(e)) return n;
  if (!fe(e)) {
    let r = Ee(e);
    for (; r && !Ve(r); ) {
      if (ie(r) && !tn(r)) return r;
      r = Ee(r);
    }
    return n;
  }
  let o = go(e, t);
  for (; o && Qc(o) && tn(o); ) o = go(o, t);
  return o && Ve(o) && tn(o) && !On(o) ? n : o || rl(e) || n;
}
const wl = async function(e) {
  const t = this.getOffsetParent || Rr, n = this.getDimensions, o = await n(e.floating);
  return { reference: gl(e.reference, await t(e.floating), e.strategy), floating: { x: 0, y: 0, width: o.width, height: o.height } };
};
function yl(e) {
  return se(e).direction === "rtl";
}
const xl = { convertOffsetParentRelativeRectToViewportRelativeRect: cl, getDocumentElement: pe, getClippingRect: hl, getOffsetParent: Rr, getElementRects: wl, getClientRects: ll, getDimensions: vl, getScale: Be, isElement: ie, isRTL: yl };
function Pr(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Sl(e, t) {
  let n = null, o;
  const r = pe(e);
  function i() {
    var a;
    clearTimeout(o), (a = n) == null || a.disconnect(), n = null;
  }
  function c(a, l) {
    a === void 0 && (a = false), l === void 0 && (l = 1), i();
    const u = e.getBoundingClientRect(), { left: f, top: d, width: h, height: v } = u;
    if (a || t(), !h || !v) return;
    const w = lt(d), p = lt(r.clientWidth - (f + h)), g = lt(r.clientHeight - (d + v)), y = lt(f), x = { rootMargin: -w + "px " + -p + "px " + -g + "px " + -y + "px", threshold: J(0, be(1, l)) || 1 };
    let C = true;
    function b(I) {
      const E = I[0].intersectionRatio;
      if (E !== l) {
        if (!C) return c();
        E ? c(false, E) : o = setTimeout(() => {
          c(false, 1e-7);
        }, 1e3);
      }
      E === 1 && !Pr(u, e.getBoundingClientRect()) && c(), C = false;
    }
    try {
      n = new IntersectionObserver(b, { ...x, root: r.ownerDocument });
    } catch {
      n = new IntersectionObserver(b, x);
    }
    n.observe(e);
  }
  return c(true), i;
}
function Cl(e, t, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: r = true, ancestorResize: i = true, elementResize: c = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = false } = o, u = Nn(e), f = r || i ? [...u ? qe(u) : [], ...qe(t)] : [];
  f.forEach((y) => {
    r && y.addEventListener("scroll", n, { passive: true }), i && y.addEventListener("resize", n);
  });
  const d = u && a ? Sl(u, n) : null;
  let h = -1, v = null;
  c && (v = new ResizeObserver((y) => {
    let [S] = y;
    S && S.target === u && v && (v.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var x;
      (x = v) == null || x.observe(t);
    })), n();
  }), u && !l && v.observe(u), v.observe(t));
  let w, p = l ? Te(e) : null;
  l && g();
  function g() {
    const y = Te(e);
    p && !Pr(p, y) && n(), p = y, w = requestAnimationFrame(g);
  }
  return n(), () => {
    var y;
    f.forEach((S) => {
      r && S.removeEventListener("scroll", n), i && S.removeEventListener("resize", n);
    }), d == null ? void 0 : d(), (y = v) == null || y.disconnect(), v = null, l && cancelAnimationFrame(w);
  };
}
const bl = zc, El = Yc, Rl = Uc, Pl = qc, Ml = Kc, wo = Hc, Al = Xc, _l = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = { platform: xl, ...n }, i = { ...r.platform, _c: o };
  return Wc(e, t, { ...r, platform: i });
};
var Il = typeof document < "u", Tl = function() {
}, ft = Il ? s.useLayoutEffect : Tl;
function yt(e, t) {
  if (e === t) return true;
  if (typeof e != typeof t) return false;
  if (typeof e == "function" && e.toString() === t.toString()) return true;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return false;
      for (o = n; o-- !== 0; ) if (!yt(e[o], t[o])) return false;
      return true;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length) return false;
    for (o = n; o-- !== 0; ) if (!{}.hasOwnProperty.call(t, r[o])) return false;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (!(i === "_owner" && e.$$typeof) && !yt(e[i], t[i])) return false;
    }
    return true;
  }
  return e !== e && t !== t;
}
function Mr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function yo(e, t) {
  const n = Mr(e);
  return Math.round(t * n) / n;
}
function nn(e) {
  const t = s.useRef(e);
  return ft(() => {
    t.current = e;
  }), t;
}
function Ol(e) {
  e === void 0 && (e = {});
  const { placement: t = "bottom", strategy: n = "absolute", middleware: o = [], platform: r, elements: { reference: i, floating: c } = {}, transform: a = true, whileElementsMounted: l, open: u } = e, [f, d] = s.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: false }), [h, v] = s.useState(o);
  yt(h, o) || v(o);
  const [w, p] = s.useState(null), [g, y] = s.useState(null), S = s.useCallback((A) => {
    A !== I.current && (I.current = A, p(A));
  }, []), x = s.useCallback((A) => {
    A !== E.current && (E.current = A, y(A));
  }, []), C = i || w, b = c || g, I = s.useRef(null), E = s.useRef(null), _ = s.useRef(f), F = l != null, D = nn(l), O = nn(r), L = nn(u), $ = s.useCallback(() => {
    if (!I.current || !E.current) return;
    const A = { placement: t, strategy: n, middleware: h };
    O.current && (A.platform = O.current), _l(I.current, E.current, A).then((R) => {
      const K = { ...R, isPositioned: L.current !== false };
      j.current && !yt(_.current, K) && (_.current = K, Qe.flushSync(() => {
        d(K);
      }));
    });
  }, [h, t, n, O, L]);
  ft(() => {
    u === false && _.current.isPositioned && (_.current.isPositioned = false, d((A) => ({ ...A, isPositioned: false })));
  }, [u]);
  const j = s.useRef(false);
  ft(() => (j.current = true, () => {
    j.current = false;
  }), []), ft(() => {
    if (C && (I.current = C), b && (E.current = b), C && b) {
      if (D.current) return D.current(C, b, $);
      $();
    }
  }, [C, b, $, D, F]);
  const V = s.useMemo(() => ({ reference: I, floating: E, setReference: S, setFloating: x }), [S, x]), T = s.useMemo(() => ({ reference: C, floating: b }), [C, b]), k = s.useMemo(() => {
    const A = { position: n, left: 0, top: 0 };
    if (!T.floating) return A;
    const R = yo(T.floating, f.x), K = yo(T.floating, f.y);
    return a ? { ...A, transform: "translate(" + R + "px, " + K + "px)", ...Mr(T.floating) >= 1.5 && { willChange: "transform" } } : { position: n, left: R, top: K };
  }, [n, a, T.floating, f.x, f.y]);
  return s.useMemo(() => ({ ...f, update: $, refs: V, elements: T, floatingStyles: k }), [f, $, V, T, k]);
}
const Dl = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return { name: "arrow", options: e, fn(n) {
    const { element: o, padding: r } = typeof e == "function" ? e(n) : e;
    return o && t(o) ? o.current != null ? wo({ element: o.current, padding: r }).fn(n) : {} : o ? wo({ element: o, padding: r }).fn(n) : {};
  } };
}, Nl = (e, t) => ({ ...bl(e), options: [e, t] }), Ll = (e, t) => ({ ...El(e), options: [e, t] }), jl = (e, t) => ({ ...Al(e), options: [e, t] }), kl = (e, t) => ({ ...Rl(e), options: [e, t] }), Fl = (e, t) => ({ ...Pl(e), options: [e, t] }), $l = (e, t) => ({ ...Ml(e), options: [e, t] }), Bl = (e, t) => ({ ...Dl(e), options: [e, t] });
var Vl = "Arrow", Ar = s.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...i } = e;
  return m.jsx(N.svg, { ...i, ref: t, width: o, height: r, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: e.asChild ? n : m.jsx("polygon", { points: "0,0 30,0 15,10" }) });
});
Ar.displayName = Vl;
var Wl = Ar, Ln = "Popper", [_r, kt] = xe(Ln), [Hl, Ir] = _r(Ln), Tr = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = s.useState(null);
  return m.jsx(Hl, { scope: t, anchor: o, onAnchorChange: r, children: n });
};
Tr.displayName = Ln;
var Or = "PopperAnchor", Dr = s.forwardRef((e, t) => {
  const { __scopePopper: n, virtualRef: o, ...r } = e, i = Ir(Or, n), c = s.useRef(null), a = B(t, c), l = s.useRef(null);
  return s.useEffect(() => {
    const u = l.current;
    l.current = (o == null ? void 0 : o.current) || c.current, u !== l.current && i.onAnchorChange(l.current);
  }), o ? null : m.jsx(N.div, { ...r, ref: a });
});
Dr.displayName = Or;
var jn = "PopperContent", [Ul, Kl] = _r(jn), Nr = s.forwardRef((e, t) => {
  var _a2, _b, _c2, _d2, _e2, _f2;
  const { __scopePopper: n, side: o = "bottom", sideOffset: r = 0, align: i = "center", alignOffset: c = 0, arrowPadding: a = 0, avoidCollisions: l = true, collisionBoundary: u = [], collisionPadding: f = 0, sticky: d = "partial", hideWhenDetached: h = false, updatePositionStrategy: v = "optimized", onPlaced: w, ...p } = e, g = Ir(jn, n), [y, S] = s.useState(null), x = B(t, (M) => S(M)), [C, b] = s.useState(null), I = Mn(C), E = (I == null ? void 0 : I.width) ?? 0, _ = (I == null ? void 0 : I.height) ?? 0, F = o + (i !== "center" ? "-" + i : ""), D = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, O = Array.isArray(u) ? u : [u], L = O.length > 0, $ = { padding: D, boundary: O.filter(zl), altBoundary: L }, { refs: j, floatingStyles: V, placement: T, isPositioned: k, middlewareData: A } = Ol({ strategy: "fixed", placement: F, whileElementsMounted: (...M) => Cl(...M, { animationFrame: v === "always" }), elements: { reference: g.anchor }, middleware: [Nl({ mainAxis: r + _, alignmentAxis: c }), l && Ll({ mainAxis: true, crossAxis: false, limiter: d === "partial" ? jl() : void 0, ...$ }), l && kl({ ...$ }), Fl({ ...$, apply: ({ elements: M, rects: W, availableWidth: X, availableHeight: H }) => {
    const { width: U, height: G } = W.reference, te = M.floating.style;
    te.setProperty("--radix-popper-available-width", `${X}px`), te.setProperty("--radix-popper-available-height", `${H}px`), te.setProperty("--radix-popper-anchor-width", `${U}px`), te.setProperty("--radix-popper-anchor-height", `${G}px`);
  } }), C && Bl({ element: C, padding: a }), Yl({ arrowWidth: E, arrowHeight: _ }), h && $l({ strategy: "referenceHidden", ...$ })] }), [R, K] = kr(T), Y = de(w);
  z(() => {
    k && (Y == null ? void 0 : Y());
  }, [k, Y]);
  const oe = (_a2 = A.arrow) == null ? void 0 : _a2.x, me = (_b = A.arrow) == null ? void 0 : _b.y, ee = ((_c2 = A.arrow) == null ? void 0 : _c2.centerOffset) !== 0, [he, Z] = s.useState();
  return z(() => {
    y && Z(window.getComputedStyle(y).zIndex);
  }, [y]), m.jsx("div", { ref: j.setFloating, "data-radix-popper-content-wrapper": "", style: { ...V, transform: k ? V.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: he, "--radix-popper-transform-origin": [(_d2 = A.transformOrigin) == null ? void 0 : _d2.x, (_e2 = A.transformOrigin) == null ? void 0 : _e2.y].join(" "), ...((_f2 = A.hide) == null ? void 0 : _f2.referenceHidden) && { visibility: "hidden", pointerEvents: "none" } }, dir: e.dir, children: m.jsx(Ul, { scope: n, placedSide: R, onArrowChange: b, arrowX: oe, arrowY: me, shouldHideArrow: ee, children: m.jsx(N.div, { "data-side": R, "data-align": K, ...p, ref: x, style: { ...p.style, animation: k ? void 0 : "none" } }) }) });
});
Nr.displayName = jn;
var Lr = "PopperArrow", Gl = { top: "bottom", right: "left", bottom: "top", left: "right" }, jr = s.forwardRef(function(t, n) {
  const { __scopePopper: o, ...r } = t, i = Kl(Lr, o), c = Gl[i.placedSide];
  return m.jsx("span", { ref: i.onArrowChange, style: { position: "absolute", left: i.arrowX, top: i.arrowY, [c]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[i.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[i.placedSide], visibility: i.shouldHideArrow ? "hidden" : void 0 }, children: m.jsx(Wl, { ...r, ref: n, style: { ...r.style, display: "block" } }) });
});
jr.displayName = Lr;
function zl(e) {
  return e !== null;
}
var Yl = (e) => ({ name: "transformOrigin", options: e, fn(t) {
  var _a2, _b, _c2;
  const { placement: n, rects: o, middlewareData: r } = t, c = ((_a2 = r.arrow) == null ? void 0 : _a2.centerOffset) !== 0, a = c ? 0 : e.arrowWidth, l = c ? 0 : e.arrowHeight, [u, f] = kr(n), d = { start: "0%", center: "50%", end: "100%" }[f], h = (((_b = r.arrow) == null ? void 0 : _b.x) ?? 0) + a / 2, v = (((_c2 = r.arrow) == null ? void 0 : _c2.y) ?? 0) + l / 2;
  let w = "", p = "";
  return u === "bottom" ? (w = c ? d : `${h}px`, p = `${-l}px`) : u === "top" ? (w = c ? d : `${h}px`, p = `${o.floating.height + l}px`) : u === "right" ? (w = `${-l}px`, p = c ? d : `${v}px`) : u === "left" && (w = `${o.floating.width + l}px`, p = c ? d : `${v}px`), { data: { x: w, y: p } };
} });
function kr(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Fr = Tr, $r = Dr, Br = Nr, Vr = jr;
function Xl(e) {
  const t = ql(e), n = s.forwardRef((o, r) => {
    const { children: i, ...c } = o, a = s.Children.toArray(i), l = a.find(Jl);
    if (l) {
      const u = l.props.children, f = a.map((d) => d === l ? s.Children.count(u) > 1 ? s.Children.only(null) : s.isValidElement(u) ? u.props.children : null : d);
      return m.jsx(t, { ...c, ref: r, children: s.isValidElement(u) ? s.cloneElement(u, void 0, f) : null });
    }
    return m.jsx(t, { ...c, ref: r, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
function ql(e) {
  const t = s.forwardRef((n, o) => {
    const { children: r, ...i } = n;
    if (s.isValidElement(r)) {
      const c = eu(r), a = Ql(i, r.props);
      return r.type !== s.Fragment && (a.ref = o ? ye(o, c) : c), s.cloneElement(r, a);
    }
    return s.Children.count(r) > 1 ? s.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Zl = /* @__PURE__ */ Symbol("radix.slottable");
function Jl(e) {
  return s.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Zl;
}
function Ql(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], i = t[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...a) => {
      const l = i(...a);
      return r(...a), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...i } : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function eu(e) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a2.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Wr = Object.freeze({ position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal" }), tu = "VisuallyHidden", nu = s.forwardRef((e, t) => m.jsx(N.span, { ...e, ref: t, style: { ...Wr, ...e.style } }));
nu.displayName = tu;
var ou = [" ", "Enter", "ArrowUp", "ArrowDown"], ru = [" ", "Enter"], Oe = "Select", [Ft, $t, iu] = Tt(Oe), [Ke] = xe(Oe, [iu, kt]), Bt = kt(), [su, Pe] = Ke(Oe), [au, cu] = Ke(Oe), Hr = (e) => {
  const { __scopeSelect: t, children: n, open: o, defaultOpen: r, onOpenChange: i, value: c, defaultValue: a, onValueChange: l, dir: u, name: f, autoComplete: d, disabled: h, required: v, form: w } = e, p = Bt(t), [g, y] = s.useState(null), [S, x] = s.useState(null), [C, b] = s.useState(false), I = It(u), [E, _] = _e({ prop: o, defaultProp: r ?? false, onChange: i, caller: Oe }), [F, D] = _e({ prop: c, defaultProp: a, onChange: l, caller: Oe }), O = s.useRef(null), L = g ? w || !!g.closest("form") : true, [$, j] = s.useState(/* @__PURE__ */ new Set()), V = Array.from($).map((T) => T.props.value).join(";");
  return m.jsx(Fr, { ...p, children: m.jsxs(su, { required: v, scope: t, trigger: g, onTriggerChange: y, valueNode: S, onValueNodeChange: x, valueNodeHasChildren: C, onValueNodeHasChildrenChange: b, contentId: ve(), value: F, onValueChange: D, open: E, onOpenChange: _, dir: I, triggerPointerDownPosRef: O, disabled: h, children: [m.jsx(Ft.Provider, { scope: t, children: m.jsx(au, { scope: e.__scopeSelect, onNativeOptionAdd: s.useCallback((T) => {
    j((k) => new Set(k).add(T));
  }, []), onNativeOptionRemove: s.useCallback((T) => {
    j((k) => {
      const A = new Set(k);
      return A.delete(T), A;
    });
  }, []), children: n }) }), L ? m.jsxs(pi, { "aria-hidden": true, required: v, tabIndex: -1, name: f, autoComplete: d, value: F, onChange: (T) => D(T.target.value), disabled: h, form: w, children: [F === void 0 ? m.jsx("option", { value: "" }) : null, Array.from($)] }, V) : null] }) });
};
Hr.displayName = Oe;
var Ur = "SelectTrigger", Kr = s.forwardRef((e, t) => {
  const { __scopeSelect: n, disabled: o = false, ...r } = e, i = Bt(n), c = Pe(Ur, n), a = c.disabled || o, l = B(t, c.onTriggerChange), u = $t(n), f = s.useRef("touch"), [d, h, v] = hi((p) => {
    const g = u().filter((x) => !x.disabled), y = g.find((x) => x.value === c.value), S = vi(g, p, y);
    S !== void 0 && c.onValueChange(S.value);
  }), w = (p) => {
    a || (c.onOpenChange(true), v()), p && (c.triggerPointerDownPosRef.current = { x: Math.round(p.pageX), y: Math.round(p.pageY) });
  };
  return m.jsx($r, { asChild: true, ...i, children: m.jsx(N.button, { type: "button", role: "combobox", "aria-controls": c.contentId, "aria-expanded": c.open, "aria-required": c.required, "aria-autocomplete": "none", dir: c.dir, "data-state": c.open ? "open" : "closed", disabled: a, "data-disabled": a ? "" : void 0, "data-placeholder": mi(c.value) ? "" : void 0, ...r, ref: l, onClick: P(r.onClick, (p) => {
    p.currentTarget.focus(), f.current !== "mouse" && w(p);
  }), onPointerDown: P(r.onPointerDown, (p) => {
    f.current = p.pointerType;
    const g = p.target;
    g.hasPointerCapture(p.pointerId) && g.releasePointerCapture(p.pointerId), p.button === 0 && p.ctrlKey === false && p.pointerType === "mouse" && (w(p), p.preventDefault());
  }), onKeyDown: P(r.onKeyDown, (p) => {
    const g = d.current !== "";
    !(p.ctrlKey || p.altKey || p.metaKey) && p.key.length === 1 && h(p.key), !(g && p.key === " ") && ou.includes(p.key) && (w(), p.preventDefault());
  }) }) });
});
Kr.displayName = Ur;
var Gr = "SelectValue", zr = s.forwardRef((e, t) => {
  const { __scopeSelect: n, className: o, style: r, children: i, placeholder: c = "", ...a } = e, l = Pe(Gr, n), { onValueNodeHasChildrenChange: u } = l, f = i !== void 0, d = B(t, l.onValueNodeChange);
  return z(() => {
    u(f);
  }, [u, f]), m.jsx(N.span, { ...a, ref: d, style: { pointerEvents: "none" }, children: mi(l.value) ? m.jsx(m.Fragment, { children: c }) : i });
});
zr.displayName = Gr;
var lu = "SelectIcon", Yr = s.forwardRef((e, t) => {
  const { __scopeSelect: n, children: o, ...r } = e;
  return m.jsx(N.span, { "aria-hidden": true, ...r, ref: t, children: o || "\u25BC" });
});
Yr.displayName = lu;
var uu = "SelectPortal", Xr = (e) => m.jsx(Rt, { asChild: true, ...e });
Xr.displayName = uu;
var De = "SelectContent", qr = s.forwardRef((e, t) => {
  const n = Pe(De, e.__scopeSelect), [o, r] = s.useState();
  if (z(() => {
    r(new DocumentFragment());
  }, []), !n.open) {
    const i = o;
    return i ? Qe.createPortal(m.jsx(Zr, { scope: e.__scopeSelect, children: m.jsx(Ft.Slot, { scope: e.__scopeSelect, children: m.jsx("div", { children: e.children }) }) }), i) : null;
  }
  return m.jsx(Jr, { ...e, ref: t });
});
qr.displayName = De;
var re = 10, [Zr, Me] = Ke(De), du = "SelectContentImpl", fu = Xl("SelectContent.RemoveScroll"), Jr = s.forwardRef((e, t) => {
  const { __scopeSelect: n, position: o = "item-aligned", onCloseAutoFocus: r, onEscapeKeyDown: i, onPointerDownOutside: c, side: a, sideOffset: l, align: u, alignOffset: f, arrowPadding: d, collisionBoundary: h, collisionPadding: v, sticky: w, hideWhenDetached: p, avoidCollisions: g, ...y } = e, S = Pe(De, n), [x, C] = s.useState(null), [b, I] = s.useState(null), E = B(t, (M) => C(M)), [_, F] = s.useState(null), [D, O] = s.useState(null), L = $t(n), [$, j] = s.useState(false), V = s.useRef(false);
  s.useEffect(() => {
    if (x) return Cn(x);
  }, [x]), Sn();
  const T = s.useCallback((M) => {
    const [W, ...X] = L().map((G) => G.ref.current), [H] = X.slice(-1), U = document.activeElement;
    for (const G of M) if (G === U || (G == null ? void 0 : G.scrollIntoView({ block: "nearest" }), G === W && b && (b.scrollTop = 0), G === H && b && (b.scrollTop = b.scrollHeight), G == null ? void 0 : G.focus(), document.activeElement !== U)) return;
  }, [L, b]), k = s.useCallback(() => T([_, x]), [T, _, x]);
  s.useEffect(() => {
    $ && k();
  }, [$, k]);
  const { onOpenChange: A, triggerPointerDownPosRef: R } = S;
  s.useEffect(() => {
    if (x) {
      let M = { x: 0, y: 0 };
      const W = (H) => {
        var _a2, _b;
        M = { x: Math.abs(Math.round(H.pageX) - (((_a2 = R.current) == null ? void 0 : _a2.x) ?? 0)), y: Math.abs(Math.round(H.pageY) - (((_b = R.current) == null ? void 0 : _b.y) ?? 0)) };
      }, X = (H) => {
        M.x <= 10 && M.y <= 10 ? H.preventDefault() : x.contains(H.target) || A(false), document.removeEventListener("pointermove", W), R.current = null;
      };
      return R.current !== null && (document.addEventListener("pointermove", W), document.addEventListener("pointerup", X, { capture: true, once: true })), () => {
        document.removeEventListener("pointermove", W), document.removeEventListener("pointerup", X, { capture: true });
      };
    }
  }, [x, A, R]), s.useEffect(() => {
    const M = () => A(false);
    return window.addEventListener("blur", M), window.addEventListener("resize", M), () => {
      window.removeEventListener("blur", M), window.removeEventListener("resize", M);
    };
  }, [A]);
  const [K, Y] = hi((M) => {
    const W = L().filter((U) => !U.disabled), X = W.find((U) => U.ref.current === document.activeElement), H = vi(W, M, X);
    H && setTimeout(() => H.ref.current.focus());
  }), oe = s.useCallback((M, W, X) => {
    const H = !V.current && !X;
    (S.value !== void 0 && S.value === W || H) && (F(M), H && (V.current = true));
  }, [S.value]), me = s.useCallback(() => x == null ? void 0 : x.focus(), [x]), ee = s.useCallback((M, W, X) => {
    const H = !V.current && !X;
    (S.value !== void 0 && S.value === W || H) && O(M);
  }, [S.value]), he = o === "popper" ? pn : Qr, Z = he === pn ? { side: a, sideOffset: l, align: u, alignOffset: f, arrowPadding: d, collisionBoundary: h, collisionPadding: v, sticky: w, hideWhenDetached: p, avoidCollisions: g } : {};
  return m.jsx(Zr, { scope: n, content: x, viewport: b, onViewportChange: I, itemRefCallback: oe, selectedItem: _, onItemLeave: me, itemTextRefCallback: ee, focusSelectedItem: k, selectedItemText: D, position: o, isPositioned: $, searchRef: K, children: m.jsx(Mt, { as: fu, allowPinchZoom: true, children: m.jsx(Et, { asChild: true, trapped: S.open, onMountAutoFocus: (M) => {
    M.preventDefault();
  }, onUnmountAutoFocus: P(r, (M) => {
    var _a2;
    (_a2 = S.trigger) == null ? void 0 : _a2.focus({ preventScroll: true }), M.preventDefault();
  }), children: m.jsx(bt, { asChild: true, disableOutsidePointerEvents: true, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: (M) => M.preventDefault(), onDismiss: () => S.onOpenChange(false), children: m.jsx(he, { role: "listbox", id: S.contentId, "data-state": S.open ? "open" : "closed", dir: S.dir, onContextMenu: (M) => M.preventDefault(), ...y, ...Z, onPlaced: () => j(true), ref: E, style: { display: "flex", flexDirection: "column", outline: "none", ...y.style }, onKeyDown: P(y.onKeyDown, (M) => {
    const W = M.ctrlKey || M.altKey || M.metaKey;
    if (M.key === "Tab" && M.preventDefault(), !W && M.key.length === 1 && Y(M.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(M.key)) {
      let H = L().filter((U) => !U.disabled).map((U) => U.ref.current);
      if (["ArrowUp", "End"].includes(M.key) && (H = H.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(M.key)) {
        const U = M.target, G = H.indexOf(U);
        H = H.slice(G + 1);
      }
      setTimeout(() => T(H)), M.preventDefault();
    }
  }) }) }) }) }) });
});
Jr.displayName = du;
var pu = "SelectItemAlignedPosition", Qr = s.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...r } = e, i = Pe(De, n), c = Me(De, n), [a, l] = s.useState(null), [u, f] = s.useState(null), d = B(t, (E) => f(E)), h = $t(n), v = s.useRef(false), w = s.useRef(true), { viewport: p, selectedItem: g, selectedItemText: y, focusSelectedItem: S } = c, x = s.useCallback(() => {
    if (i.trigger && i.valueNode && a && u && p && g && y) {
      const E = i.trigger.getBoundingClientRect(), _ = u.getBoundingClientRect(), F = i.valueNode.getBoundingClientRect(), D = y.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const U = D.left - _.left, G = F.left - U, te = E.left - G, Ae = E.width + te, Ut = Math.max(Ae, _.width), Kt = window.innerWidth - re, Gt = ht(G, [re, Math.max(re, Kt - Ut)]);
        a.style.minWidth = Ae + "px", a.style.left = Gt + "px";
      } else {
        const U = _.right - D.right, G = window.innerWidth - F.right - U, te = window.innerWidth - E.right - G, Ae = E.width + te, Ut = Math.max(Ae, _.width), Kt = window.innerWidth - re, Gt = ht(G, [re, Math.max(re, Kt - Ut)]);
        a.style.minWidth = Ae + "px", a.style.right = Gt + "px";
      }
      const O = h(), L = window.innerHeight - re * 2, $ = p.scrollHeight, j = window.getComputedStyle(u), V = parseInt(j.borderTopWidth, 10), T = parseInt(j.paddingTop, 10), k = parseInt(j.borderBottomWidth, 10), A = parseInt(j.paddingBottom, 10), R = V + T + $ + A + k, K = Math.min(g.offsetHeight * 5, R), Y = window.getComputedStyle(p), oe = parseInt(Y.paddingTop, 10), me = parseInt(Y.paddingBottom, 10), ee = E.top + E.height / 2 - re, he = L - ee, Z = g.offsetHeight / 2, M = g.offsetTop + Z, W = V + T + M, X = R - W;
      if (W <= ee) {
        const U = O.length > 0 && g === O[O.length - 1].ref.current;
        a.style.bottom = "0px";
        const G = u.clientHeight - p.offsetTop - p.offsetHeight, te = Math.max(he, Z + (U ? me : 0) + G + k), Ae = W + te;
        a.style.height = Ae + "px";
      } else {
        const U = O.length > 0 && g === O[0].ref.current;
        a.style.top = "0px";
        const te = Math.max(ee, V + p.offsetTop + (U ? oe : 0) + Z) + X;
        a.style.height = te + "px", p.scrollTop = W - ee + p.offsetTop;
      }
      a.style.margin = `${re}px 0`, a.style.minHeight = K + "px", a.style.maxHeight = L + "px", o == null ? void 0 : o(), requestAnimationFrame(() => v.current = true);
    }
  }, [h, i.trigger, i.valueNode, a, u, p, g, y, i.dir, o]);
  z(() => x(), [x]);
  const [C, b] = s.useState();
  z(() => {
    u && b(window.getComputedStyle(u).zIndex);
  }, [u]);
  const I = s.useCallback((E) => {
    E && w.current === true && (x(), S == null ? void 0 : S(), w.current = false);
  }, [x, S]);
  return m.jsx(hu, { scope: n, contentWrapper: a, shouldExpandOnScrollRef: v, onScrollButtonChange: I, children: m.jsx("div", { ref: l, style: { display: "flex", flexDirection: "column", position: "fixed", zIndex: C }, children: m.jsx(N.div, { ...r, ref: d, style: { boxSizing: "border-box", maxHeight: "100%", ...r.style } }) }) });
});
Qr.displayName = pu;
var mu = "SelectPopperPosition", pn = s.forwardRef((e, t) => {
  const { __scopeSelect: n, align: o = "start", collisionPadding: r = re, ...i } = e, c = Bt(n);
  return m.jsx(Br, { ...c, ...i, ref: t, align: o, collisionPadding: r, style: { boxSizing: "border-box", ...i.style, "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-select-content-available-width": "var(--radix-popper-available-width)", "--radix-select-content-available-height": "var(--radix-popper-available-height)", "--radix-select-trigger-width": "var(--radix-popper-anchor-width)", "--radix-select-trigger-height": "var(--radix-popper-anchor-height)" } });
});
pn.displayName = mu;
var [hu, kn] = Ke(De, {}), mn = "SelectViewport", ei = s.forwardRef((e, t) => {
  const { __scopeSelect: n, nonce: o, ...r } = e, i = Me(mn, n), c = kn(mn, n), a = B(t, i.onViewportChange), l = s.useRef(0);
  return m.jsxs(m.Fragment, { children: [m.jsx("style", { dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" }, nonce: o }), m.jsx(Ft.Slot, { scope: n, children: m.jsx(N.div, { "data-radix-select-viewport": "", role: "presentation", ...r, ref: a, style: { position: "relative", flex: 1, overflow: "hidden auto", ...r.style }, onScroll: P(r.onScroll, (u) => {
    const f = u.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: h } = c;
    if ((h == null ? void 0 : h.current) && d) {
      const v = Math.abs(l.current - f.scrollTop);
      if (v > 0) {
        const w = window.innerHeight - re * 2, p = parseFloat(d.style.minHeight), g = parseFloat(d.style.height), y = Math.max(p, g);
        if (y < w) {
          const S = y + v, x = Math.min(w, S), C = S - x;
          d.style.height = x + "px", d.style.bottom === "0px" && (f.scrollTop = C > 0 ? C : 0, d.style.justifyContent = "flex-end");
        }
      }
    }
    l.current = f.scrollTop;
  }) }) })] });
});
ei.displayName = mn;
var ti = "SelectGroup", [vu, gu] = Ke(ti), wu = s.forwardRef((e, t) => {
  const { __scopeSelect: n, ...o } = e, r = ve();
  return m.jsx(vu, { scope: n, id: r, children: m.jsx(N.div, { role: "group", "aria-labelledby": r, ...o, ref: t }) });
});
wu.displayName = ti;
var ni = "SelectLabel", oi = s.forwardRef((e, t) => {
  const { __scopeSelect: n, ...o } = e, r = gu(ni, n);
  return m.jsx(N.div, { id: r.id, ...o, ref: t });
});
oi.displayName = ni;
var xt = "SelectItem", [yu, ri] = Ke(xt), ii = s.forwardRef((e, t) => {
  const { __scopeSelect: n, value: o, disabled: r = false, textValue: i, ...c } = e, a = Pe(xt, n), l = Me(xt, n), u = a.value === o, [f, d] = s.useState(i ?? ""), [h, v] = s.useState(false), w = B(t, (S) => {
    var _a2;
    return (_a2 = l.itemRefCallback) == null ? void 0 : _a2.call(l, S, o, r);
  }), p = ve(), g = s.useRef("touch"), y = () => {
    r || (a.onValueChange(o), a.onOpenChange(false));
  };
  if (o === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return m.jsx(yu, { scope: n, value: o, disabled: r, textId: p, isSelected: u, onItemTextChange: s.useCallback((S) => {
    d((x) => x || ((S == null ? void 0 : S.textContent) ?? "").trim());
  }, []), children: m.jsx(Ft.ItemSlot, { scope: n, value: o, disabled: r, textValue: f, children: m.jsx(N.div, { role: "option", "aria-labelledby": p, "data-highlighted": h ? "" : void 0, "aria-selected": u && h, "data-state": u ? "checked" : "unchecked", "aria-disabled": r || void 0, "data-disabled": r ? "" : void 0, tabIndex: r ? void 0 : -1, ...c, ref: w, onFocus: P(c.onFocus, () => v(true)), onBlur: P(c.onBlur, () => v(false)), onClick: P(c.onClick, () => {
    g.current !== "mouse" && y();
  }), onPointerUp: P(c.onPointerUp, () => {
    g.current === "mouse" && y();
  }), onPointerDown: P(c.onPointerDown, (S) => {
    g.current = S.pointerType;
  }), onPointerMove: P(c.onPointerMove, (S) => {
    var _a2;
    g.current = S.pointerType, r ? (_a2 = l.onItemLeave) == null ? void 0 : _a2.call(l) : g.current === "mouse" && S.currentTarget.focus({ preventScroll: true });
  }), onPointerLeave: P(c.onPointerLeave, (S) => {
    var _a2;
    S.currentTarget === document.activeElement && ((_a2 = l.onItemLeave) == null ? void 0 : _a2.call(l));
  }), onKeyDown: P(c.onKeyDown, (S) => {
    var _a2;
    ((_a2 = l.searchRef) == null ? void 0 : _a2.current) !== "" && S.key === " " || (ru.includes(S.key) && y(), S.key === " " && S.preventDefault());
  }) }) }) });
});
ii.displayName = xt;
var ze = "SelectItemText", si = s.forwardRef((e, t) => {
  const { __scopeSelect: n, className: o, style: r, ...i } = e, c = Pe(ze, n), a = Me(ze, n), l = ri(ze, n), u = cu(ze, n), [f, d] = s.useState(null), h = B(t, (y) => d(y), l.onItemTextChange, (y) => {
    var _a2;
    return (_a2 = a.itemTextRefCallback) == null ? void 0 : _a2.call(a, y, l.value, l.disabled);
  }), v = f == null ? void 0 : f.textContent, w = s.useMemo(() => m.jsx("option", { value: l.value, disabled: l.disabled, children: v }, l.value), [l.disabled, l.value, v]), { onNativeOptionAdd: p, onNativeOptionRemove: g } = u;
  return z(() => (p(w), () => g(w)), [p, g, w]), m.jsxs(m.Fragment, { children: [m.jsx(N.span, { id: l.textId, ...i, ref: h }), l.isSelected && c.valueNode && !c.valueNodeHasChildren ? Qe.createPortal(i.children, c.valueNode) : null] });
});
si.displayName = ze;
var ai = "SelectItemIndicator", ci = s.forwardRef((e, t) => {
  const { __scopeSelect: n, ...o } = e;
  return ri(ai, n).isSelected ? m.jsx(N.span, { "aria-hidden": true, ...o, ref: t }) : null;
});
ci.displayName = ai;
var hn = "SelectScrollUpButton", li = s.forwardRef((e, t) => {
  const n = Me(hn, e.__scopeSelect), o = kn(hn, e.__scopeSelect), [r, i] = s.useState(false), c = B(t, o.onScrollButtonChange);
  return z(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollTop > 0;
        i(u);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), r ? m.jsx(di, { ...e, ref: c, onAutoScroll: () => {
    const { viewport: a, selectedItem: l } = n;
    a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
  } }) : null;
});
li.displayName = hn;
var vn = "SelectScrollDownButton", ui = s.forwardRef((e, t) => {
  const n = Me(vn, e.__scopeSelect), o = kn(vn, e.__scopeSelect), [r, i] = s.useState(false), c = B(t, o.onScrollButtonChange);
  return z(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < u;
        i(f);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), r ? m.jsx(di, { ...e, ref: c, onAutoScroll: () => {
    const { viewport: a, selectedItem: l } = n;
    a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
  } }) : null;
});
ui.displayName = vn;
var di = s.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: o, ...r } = e, i = Me("SelectScrollButton", n), c = s.useRef(null), a = $t(n), l = s.useCallback(() => {
    c.current !== null && (window.clearInterval(c.current), c.current = null);
  }, []);
  return s.useEffect(() => () => l(), [l]), z(() => {
    var _a2, _b;
    (_b = (_a2 = a().find((f) => f.ref.current === document.activeElement)) == null ? void 0 : _a2.ref.current) == null ? void 0 : _b.scrollIntoView({ block: "nearest" });
  }, [a]), m.jsx(N.div, { "aria-hidden": true, ...r, ref: t, style: { flexShrink: 0, ...r.style }, onPointerDown: P(r.onPointerDown, () => {
    c.current === null && (c.current = window.setInterval(o, 50));
  }), onPointerMove: P(r.onPointerMove, () => {
    var _a2;
    (_a2 = i.onItemLeave) == null ? void 0 : _a2.call(i), c.current === null && (c.current = window.setInterval(o, 50));
  }), onPointerLeave: P(r.onPointerLeave, () => {
    l();
  }) });
}), xu = "SelectSeparator", fi = s.forwardRef((e, t) => {
  const { __scopeSelect: n, ...o } = e;
  return m.jsx(N.div, { "aria-hidden": true, ...o, ref: t });
});
fi.displayName = xu;
var gn = "SelectArrow", Su = s.forwardRef((e, t) => {
  const { __scopeSelect: n, ...o } = e, r = Bt(n), i = Pe(gn, n), c = Me(gn, n);
  return i.open && c.position === "popper" ? m.jsx(Vr, { ...r, ...o, ref: t }) : null;
});
Su.displayName = gn;
var Cu = "SelectBubbleInput", pi = s.forwardRef(({ __scopeSelect: e, value: t, ...n }, o) => {
  const r = s.useRef(null), i = B(o, r), c = Pn(t);
  return s.useEffect(() => {
    const a = r.current;
    if (!a) return;
    const l = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(l, "value").set;
    if (c !== t && f) {
      const d = new Event("change", { bubbles: true });
      f.call(a, t), a.dispatchEvent(d);
    }
  }, [c, t]), m.jsx(N.select, { ...n, style: { ...Wr, ...n.style }, ref: i, defaultValue: t });
});
pi.displayName = Cu;
function mi(e) {
  return e === "" || e === void 0;
}
function hi(e) {
  const t = de(e), n = s.useRef(""), o = s.useRef(0), r = s.useCallback((c) => {
    const a = n.current + c;
    t(a), (function l(u) {
      n.current = u, window.clearTimeout(o.current), u !== "" && (o.current = window.setTimeout(() => l(""), 1e3));
    })(a);
  }, [t]), i = s.useCallback(() => {
    n.current = "", window.clearTimeout(o.current);
  }, []);
  return s.useEffect(() => () => window.clearTimeout(o.current), []), [n, r, i];
}
function vi(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let c = bu(e, Math.max(i, 0));
  r.length === 1 && (c = c.filter((u) => u !== n));
  const l = c.find((u) => u.textValue.toLowerCase().startsWith(r.toLowerCase()));
  return l !== n ? l : void 0;
}
function bu(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var df = Hr, ff = Kr, pf = zr, mf = Yr, hf = Xr, vf = qr, gf = ei, wf = oi, yf = ii, xf = si, Sf = ci, Cf = li, bf = ui, Ef = fi, on = "rovingFocusGroup.onEntryFocus", Eu = { bubbles: false, cancelable: true }, tt = "RovingFocusGroup", [wn, gi, Ru] = Tt(tt), [Pu, wi] = xe(tt, [Ru]), [Mu, Au] = Pu(tt), yi = s.forwardRef((e, t) => m.jsx(wn.Provider, { scope: e.__scopeRovingFocusGroup, children: m.jsx(wn.Slot, { scope: e.__scopeRovingFocusGroup, children: m.jsx(_u, { ...e, ref: t }) }) }));
yi.displayName = tt;
var _u = s.forwardRef((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: o, loop: r = false, dir: i, currentTabStopId: c, defaultCurrentTabStopId: a, onCurrentTabStopIdChange: l, onEntryFocus: u, preventScrollOnEntryFocus: f = false, ...d } = e, h = s.useRef(null), v = B(t, h), w = It(i), [p, g] = _e({ prop: c, defaultProp: a ?? null, onChange: l, caller: tt }), [y, S] = s.useState(false), x = de(u), C = gi(n), b = s.useRef(false), [I, E] = s.useState(0);
  return s.useEffect(() => {
    const _ = h.current;
    if (_) return _.addEventListener(on, x), () => _.removeEventListener(on, x);
  }, [x]), m.jsx(Mu, { scope: n, orientation: o, dir: w, loop: r, currentTabStopId: p, onItemFocus: s.useCallback((_) => g(_), [g]), onItemShiftTab: s.useCallback(() => S(true), []), onFocusableItemAdd: s.useCallback(() => E((_) => _ + 1), []), onFocusableItemRemove: s.useCallback(() => E((_) => _ - 1), []), children: m.jsx(N.div, { tabIndex: y || I === 0 ? -1 : 0, "data-orientation": o, ...d, ref: v, style: { outline: "none", ...e.style }, onMouseDown: P(e.onMouseDown, () => {
    b.current = true;
  }), onFocus: P(e.onFocus, (_) => {
    const F = !b.current;
    if (_.target === _.currentTarget && F && !y) {
      const D = new CustomEvent(on, Eu);
      if (_.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
        const O = C().filter((T) => T.focusable), L = O.find((T) => T.active), $ = O.find((T) => T.id === p), V = [L, $, ...O].filter(Boolean).map((T) => T.ref.current);
        Ci(V, f);
      }
    }
    b.current = false;
  }), onBlur: P(e.onBlur, () => S(false)) }) });
}), xi = "RovingFocusGroupItem", Si = s.forwardRef((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: o = true, active: r = false, tabStopId: i, children: c, ...a } = e, l = ve(), u = i || l, f = Au(xi, n), d = f.currentTabStopId === u, h = gi(n), { onFocusableItemAdd: v, onFocusableItemRemove: w, currentTabStopId: p } = f;
  return s.useEffect(() => {
    if (o) return v(), () => w();
  }, [o, v, w]), m.jsx(wn.ItemSlot, { scope: n, id: u, focusable: o, active: r, children: m.jsx(N.span, { tabIndex: d ? 0 : -1, "data-orientation": f.orientation, ...a, ref: t, onMouseDown: P(e.onMouseDown, (g) => {
    o ? f.onItemFocus(u) : g.preventDefault();
  }), onFocus: P(e.onFocus, () => f.onItemFocus(u)), onKeyDown: P(e.onKeyDown, (g) => {
    if (g.key === "Tab" && g.shiftKey) {
      f.onItemShiftTab();
      return;
    }
    if (g.target !== g.currentTarget) return;
    const y = Ou(g, f.orientation, f.dir);
    if (y !== void 0) {
      if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
      g.preventDefault();
      let x = h().filter((C) => C.focusable).map((C) => C.ref.current);
      if (y === "last") x.reverse();
      else if (y === "prev" || y === "next") {
        y === "prev" && x.reverse();
        const C = x.indexOf(g.currentTarget);
        x = f.loop ? Du(x, C + 1) : x.slice(C + 1);
      }
      setTimeout(() => Ci(x));
    }
  }), children: typeof c == "function" ? c({ isCurrentTabStop: d, hasTabStop: p != null }) : c }) });
});
Si.displayName = xi;
var Iu = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function Tu(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Ou(e, t, n) {
  const o = Tu(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o))) return Iu[o];
}
function Ci(e, t = false) {
  const n = document.activeElement;
  for (const o of e) if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Du(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var Nu = yi, Lu = Si;
function ju(e) {
  const t = ku(e), n = s.forwardRef((o, r) => {
    const { children: i, ...c } = o, a = s.Children.toArray(i), l = a.find($u);
    if (l) {
      const u = l.props.children, f = a.map((d) => d === l ? s.Children.count(u) > 1 ? s.Children.only(null) : s.isValidElement(u) ? u.props.children : null : d);
      return m.jsx(t, { ...c, ref: r, children: s.isValidElement(u) ? s.cloneElement(u, void 0, f) : null });
    }
    return m.jsx(t, { ...c, ref: r, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
function ku(e) {
  const t = s.forwardRef((n, o) => {
    const { children: r, ...i } = n;
    if (s.isValidElement(r)) {
      const c = Vu(r), a = Bu(i, r.props);
      return r.type !== s.Fragment && (a.ref = o ? ye(o, c) : c), s.cloneElement(r, a);
    }
    return s.Children.count(r) > 1 ? s.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Fu = /* @__PURE__ */ Symbol("radix.slottable");
function $u(e) {
  return s.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Fu;
}
function Bu(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], i = t[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...a) => {
      const l = i(...a);
      return r(...a), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...i } : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Vu(e) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a2.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var yn = ["Enter", " "], Wu = ["ArrowDown", "PageUp", "Home"], bi = ["ArrowUp", "PageDown", "End"], Hu = [...Wu, ...bi], Uu = { ltr: [...yn, "ArrowRight"], rtl: [...yn, "ArrowLeft"] }, Ku = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] }, nt = "Menu", [Ze, Gu, zu] = Tt(nt), [Ne, Ei] = xe(nt, [zu, kt, wi]), Vt = kt(), Ri = wi(), [Yu, Le] = Ne(nt), [Xu, ot] = Ne(nt), Pi = (e) => {
  const { __scopeMenu: t, open: n = false, children: o, dir: r, onOpenChange: i, modal: c = true } = e, a = Vt(t), [l, u] = s.useState(null), f = s.useRef(false), d = de(i), h = It(r);
  return s.useEffect(() => {
    const v = () => {
      f.current = true, document.addEventListener("pointerdown", w, { capture: true, once: true }), document.addEventListener("pointermove", w, { capture: true, once: true });
    }, w = () => f.current = false;
    return document.addEventListener("keydown", v, { capture: true }), () => {
      document.removeEventListener("keydown", v, { capture: true }), document.removeEventListener("pointerdown", w, { capture: true }), document.removeEventListener("pointermove", w, { capture: true });
    };
  }, []), m.jsx(Fr, { ...a, children: m.jsx(Yu, { scope: t, open: n, onOpenChange: d, content: l, onContentChange: u, children: m.jsx(Xu, { scope: t, onClose: s.useCallback(() => d(false), [d]), isUsingKeyboardRef: f, dir: h, modal: c, children: o }) }) });
};
Pi.displayName = nt;
var qu = "MenuAnchor", Fn = s.forwardRef((e, t) => {
  const { __scopeMenu: n, ...o } = e, r = Vt(n);
  return m.jsx($r, { ...r, ...o, ref: t });
});
Fn.displayName = qu;
var $n = "MenuPortal", [Zu, Mi] = Ne($n, { forceMount: void 0 }), Ai = (e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, i = Le($n, t);
  return m.jsx(Zu, { scope: t, forceMount: n, children: m.jsx(Re, { present: n || i.open, children: m.jsx(Rt, { asChild: true, container: r, children: o }) }) });
};
Ai.displayName = $n;
var ne = "MenuContent", [Ju, Bn] = Ne(ne), _i = s.forwardRef((e, t) => {
  const n = Mi(ne, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, i = Le(ne, e.__scopeMenu), c = ot(ne, e.__scopeMenu);
  return m.jsx(Ze.Provider, { scope: e.__scopeMenu, children: m.jsx(Re, { present: o || i.open, children: m.jsx(Ze.Slot, { scope: e.__scopeMenu, children: c.modal ? m.jsx(Qu, { ...r, ref: t }) : m.jsx(ed, { ...r, ref: t }) }) }) });
}), Qu = s.forwardRef((e, t) => {
  const n = Le(ne, e.__scopeMenu), o = s.useRef(null), r = B(t, o);
  return s.useEffect(() => {
    const i = o.current;
    if (i) return Cn(i);
  }, []), m.jsx(Vn, { ...e, ref: r, trapFocus: n.open, disableOutsidePointerEvents: n.open, disableOutsideScroll: true, onFocusOutside: P(e.onFocusOutside, (i) => i.preventDefault(), { checkForDefaultPrevented: false }), onDismiss: () => n.onOpenChange(false) });
}), ed = s.forwardRef((e, t) => {
  const n = Le(ne, e.__scopeMenu);
  return m.jsx(Vn, { ...e, ref: t, trapFocus: false, disableOutsidePointerEvents: false, disableOutsideScroll: false, onDismiss: () => n.onOpenChange(false) });
}), td = ju("MenuContent.ScrollLock"), Vn = s.forwardRef((e, t) => {
  const { __scopeMenu: n, loop: o = false, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: c, disableOutsidePointerEvents: a, onEntryFocus: l, onEscapeKeyDown: u, onPointerDownOutside: f, onFocusOutside: d, onInteractOutside: h, onDismiss: v, disableOutsideScroll: w, ...p } = e, g = Le(ne, n), y = ot(ne, n), S = Vt(n), x = Ri(n), C = Gu(n), [b, I] = s.useState(null), E = s.useRef(null), _ = B(t, E, g.onContentChange), F = s.useRef(0), D = s.useRef(""), O = s.useRef(0), L = s.useRef(null), $ = s.useRef("right"), j = s.useRef(0), V = w ? Mt : s.Fragment, T = w ? { as: td, allowPinchZoom: true } : void 0, k = (R) => {
    var _a2, _b;
    const K = D.current + R, Y = C().filter((M) => !M.disabled), oe = document.activeElement, me = (_a2 = Y.find((M) => M.ref.current === oe)) == null ? void 0 : _a2.textValue, ee = Y.map((M) => M.textValue), he = pd(ee, K, me), Z = (_b = Y.find((M) => M.textValue === he)) == null ? void 0 : _b.ref.current;
    (function M(W) {
      D.current = W, window.clearTimeout(F.current), W !== "" && (F.current = window.setTimeout(() => M(""), 1e3));
    })(K), Z && setTimeout(() => Z.focus());
  };
  s.useEffect(() => () => window.clearTimeout(F.current), []), Sn();
  const A = s.useCallback((R) => {
    var _a2, _b;
    return $.current === ((_a2 = L.current) == null ? void 0 : _a2.side) && hd(R, (_b = L.current) == null ? void 0 : _b.area);
  }, []);
  return m.jsx(Ju, { scope: n, searchRef: D, onItemEnter: s.useCallback((R) => {
    A(R) && R.preventDefault();
  }, [A]), onItemLeave: s.useCallback((R) => {
    var _a2;
    A(R) || ((_a2 = E.current) == null ? void 0 : _a2.focus(), I(null));
  }, [A]), onTriggerLeave: s.useCallback((R) => {
    A(R) && R.preventDefault();
  }, [A]), pointerGraceTimerRef: O, onPointerGraceIntentChange: s.useCallback((R) => {
    L.current = R;
  }, []), children: m.jsx(V, { ...T, children: m.jsx(Et, { asChild: true, trapped: r, onMountAutoFocus: P(i, (R) => {
    var _a2;
    R.preventDefault(), (_a2 = E.current) == null ? void 0 : _a2.focus({ preventScroll: true });
  }), onUnmountAutoFocus: c, children: m.jsx(bt, { asChild: true, disableOutsidePointerEvents: a, onEscapeKeyDown: u, onPointerDownOutside: f, onFocusOutside: d, onInteractOutside: h, onDismiss: v, children: m.jsx(Nu, { asChild: true, ...x, dir: y.dir, orientation: "vertical", loop: o, currentTabStopId: b, onCurrentTabStopIdChange: I, onEntryFocus: P(l, (R) => {
    y.isUsingKeyboardRef.current || R.preventDefault();
  }), preventScrollOnEntryFocus: true, children: m.jsx(Br, { role: "menu", "aria-orientation": "vertical", "data-state": Ki(g.open), "data-radix-menu-content": "", dir: y.dir, ...S, ...p, ref: _, style: { outline: "none", ...p.style }, onKeyDown: P(p.onKeyDown, (R) => {
    const Y = R.target.closest("[data-radix-menu-content]") === R.currentTarget, oe = R.ctrlKey || R.altKey || R.metaKey, me = R.key.length === 1;
    Y && (R.key === "Tab" && R.preventDefault(), !oe && me && k(R.key));
    const ee = E.current;
    if (R.target !== ee || !Hu.includes(R.key)) return;
    R.preventDefault();
    const Z = C().filter((M) => !M.disabled).map((M) => M.ref.current);
    bi.includes(R.key) && Z.reverse(), dd(Z);
  }), onBlur: P(e.onBlur, (R) => {
    R.currentTarget.contains(R.target) || (window.clearTimeout(F.current), D.current = "");
  }), onPointerMove: P(e.onPointerMove, Je((R) => {
    const K = R.target, Y = j.current !== R.clientX;
    if (R.currentTarget.contains(K) && Y) {
      const oe = R.clientX > j.current ? "right" : "left";
      $.current = oe, j.current = R.clientX;
    }
  })) }) }) }) }) }) });
});
_i.displayName = ne;
var nd = "MenuGroup", Wn = s.forwardRef((e, t) => {
  const { __scopeMenu: n, ...o } = e;
  return m.jsx(N.div, { role: "group", ...o, ref: t });
});
Wn.displayName = nd;
var od = "MenuLabel", Ii = s.forwardRef((e, t) => {
  const { __scopeMenu: n, ...o } = e;
  return m.jsx(N.div, { ...o, ref: t });
});
Ii.displayName = od;
var St = "MenuItem", xo = "menu.itemSelect", Wt = s.forwardRef((e, t) => {
  const { disabled: n = false, onSelect: o, ...r } = e, i = s.useRef(null), c = ot(St, e.__scopeMenu), a = Bn(St, e.__scopeMenu), l = B(t, i), u = s.useRef(false), f = () => {
    const d = i.current;
    if (!n && d) {
      const h = new CustomEvent(xo, { bubbles: true, cancelable: true });
      d.addEventListener(xo, (v) => o == null ? void 0 : o(v), { once: true }), Ro(d, h), h.defaultPrevented ? u.current = false : c.onClose();
    }
  };
  return m.jsx(Ti, { ...r, ref: l, disabled: n, onClick: P(e.onClick, f), onPointerDown: (d) => {
    var _a2;
    (_a2 = e.onPointerDown) == null ? void 0 : _a2.call(e, d), u.current = true;
  }, onPointerUp: P(e.onPointerUp, (d) => {
    var _a2;
    u.current || ((_a2 = d.currentTarget) == null ? void 0 : _a2.click());
  }), onKeyDown: P(e.onKeyDown, (d) => {
    const h = a.searchRef.current !== "";
    n || h && d.key === " " || yn.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
  }) });
});
Wt.displayName = St;
var Ti = s.forwardRef((e, t) => {
  const { __scopeMenu: n, disabled: o = false, textValue: r, ...i } = e, c = Bn(St, n), a = Ri(n), l = s.useRef(null), u = B(t, l), [f, d] = s.useState(false), [h, v] = s.useState("");
  return s.useEffect(() => {
    const w = l.current;
    w && v((w.textContent ?? "").trim());
  }, [i.children]), m.jsx(Ze.ItemSlot, { scope: n, disabled: o, textValue: r ?? h, children: m.jsx(Lu, { asChild: true, ...a, focusable: !o, children: m.jsx(N.div, { role: "menuitem", "data-highlighted": f ? "" : void 0, "aria-disabled": o || void 0, "data-disabled": o ? "" : void 0, ...i, ref: u, onPointerMove: P(e.onPointerMove, Je((w) => {
    o ? c.onItemLeave(w) : (c.onItemEnter(w), w.defaultPrevented || w.currentTarget.focus({ preventScroll: true }));
  })), onPointerLeave: P(e.onPointerLeave, Je((w) => c.onItemLeave(w))), onFocus: P(e.onFocus, () => d(true)), onBlur: P(e.onBlur, () => d(false)) }) }) });
}), rd = "MenuCheckboxItem", Oi = s.forwardRef((e, t) => {
  const { checked: n = false, onCheckedChange: o, ...r } = e;
  return m.jsx(ki, { scope: e.__scopeMenu, checked: n, children: m.jsx(Wt, { role: "menuitemcheckbox", "aria-checked": Ct(n) ? "mixed" : n, ...r, ref: t, "data-state": Un(n), onSelect: P(r.onSelect, () => o == null ? void 0 : o(Ct(n) ? true : !n), { checkForDefaultPrevented: false }) }) });
});
Oi.displayName = rd;
var Di = "MenuRadioGroup", [id, sd] = Ne(Di, { value: void 0, onValueChange: () => {
} }), Ni = s.forwardRef((e, t) => {
  const { value: n, onValueChange: o, ...r } = e, i = de(o);
  return m.jsx(id, { scope: e.__scopeMenu, value: n, onValueChange: i, children: m.jsx(Wn, { ...r, ref: t }) });
});
Ni.displayName = Di;
var Li = "MenuRadioItem", ji = s.forwardRef((e, t) => {
  const { value: n, ...o } = e, r = sd(Li, e.__scopeMenu), i = n === r.value;
  return m.jsx(ki, { scope: e.__scopeMenu, checked: i, children: m.jsx(Wt, { role: "menuitemradio", "aria-checked": i, ...o, ref: t, "data-state": Un(i), onSelect: P(o.onSelect, () => {
    var _a2;
    return (_a2 = r.onValueChange) == null ? void 0 : _a2.call(r, n);
  }, { checkForDefaultPrevented: false }) }) });
});
ji.displayName = Li;
var Hn = "MenuItemIndicator", [ki, ad] = Ne(Hn, { checked: false }), Fi = s.forwardRef((e, t) => {
  const { __scopeMenu: n, forceMount: o, ...r } = e, i = ad(Hn, n);
  return m.jsx(Re, { present: o || Ct(i.checked) || i.checked === true, children: m.jsx(N.span, { ...r, ref: t, "data-state": Un(i.checked) }) });
});
Fi.displayName = Hn;
var cd = "MenuSeparator", $i = s.forwardRef((e, t) => {
  const { __scopeMenu: n, ...o } = e;
  return m.jsx(N.div, { role: "separator", "aria-orientation": "horizontal", ...o, ref: t });
});
$i.displayName = cd;
var ld = "MenuArrow", Bi = s.forwardRef((e, t) => {
  const { __scopeMenu: n, ...o } = e, r = Vt(n);
  return m.jsx(Vr, { ...r, ...o, ref: t });
});
Bi.displayName = ld;
var ud = "MenuSub", [Rf, Vi] = Ne(ud), Ye = "MenuSubTrigger", Wi = s.forwardRef((e, t) => {
  const n = Le(Ye, e.__scopeMenu), o = ot(Ye, e.__scopeMenu), r = Vi(Ye, e.__scopeMenu), i = Bn(Ye, e.__scopeMenu), c = s.useRef(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: l } = i, u = { __scopeMenu: e.__scopeMenu }, f = s.useCallback(() => {
    c.current && window.clearTimeout(c.current), c.current = null;
  }, []);
  return s.useEffect(() => f, [f]), s.useEffect(() => {
    const d = a.current;
    return () => {
      window.clearTimeout(d), l(null);
    };
  }, [a, l]), m.jsx(Fn, { asChild: true, ...u, children: m.jsx(Ti, { id: r.triggerId, "aria-haspopup": "menu", "aria-expanded": n.open, "aria-controls": r.contentId, "data-state": Ki(n.open), ...e, ref: ye(t, r.onTriggerChange), onClick: (d) => {
    var _a2;
    (_a2 = e.onClick) == null ? void 0 : _a2.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(true));
  }, onPointerMove: P(e.onPointerMove, Je((d) => {
    i.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !c.current && (i.onPointerGraceIntentChange(null), c.current = window.setTimeout(() => {
      n.onOpenChange(true), f();
    }, 100));
  })), onPointerLeave: P(e.onPointerLeave, Je((d) => {
    var _a2, _b;
    f();
    const h = (_a2 = n.content) == null ? void 0 : _a2.getBoundingClientRect();
    if (h) {
      const v = (_b = n.content) == null ? void 0 : _b.dataset.side, w = v === "right", p = w ? -5 : 5, g = h[w ? "left" : "right"], y = h[w ? "right" : "left"];
      i.onPointerGraceIntentChange({ area: [{ x: d.clientX + p, y: d.clientY }, { x: g, y: h.top }, { x: y, y: h.top }, { x: y, y: h.bottom }, { x: g, y: h.bottom }], side: v }), window.clearTimeout(a.current), a.current = window.setTimeout(() => i.onPointerGraceIntentChange(null), 300);
    } else {
      if (i.onTriggerLeave(d), d.defaultPrevented) return;
      i.onPointerGraceIntentChange(null);
    }
  })), onKeyDown: P(e.onKeyDown, (d) => {
    var _a2;
    const h = i.searchRef.current !== "";
    e.disabled || h && d.key === " " || Uu[o.dir].includes(d.key) && (n.onOpenChange(true), (_a2 = n.content) == null ? void 0 : _a2.focus(), d.preventDefault());
  }) }) });
});
Wi.displayName = Ye;
var Hi = "MenuSubContent", Ui = s.forwardRef((e, t) => {
  const n = Mi(ne, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, i = Le(ne, e.__scopeMenu), c = ot(ne, e.__scopeMenu), a = Vi(Hi, e.__scopeMenu), l = s.useRef(null), u = B(t, l);
  return m.jsx(Ze.Provider, { scope: e.__scopeMenu, children: m.jsx(Re, { present: o || i.open, children: m.jsx(Ze.Slot, { scope: e.__scopeMenu, children: m.jsx(Vn, { id: a.contentId, "aria-labelledby": a.triggerId, ...r, ref: u, align: "start", side: c.dir === "rtl" ? "left" : "right", disableOutsidePointerEvents: false, disableOutsideScroll: false, trapFocus: false, onOpenAutoFocus: (f) => {
    var _a2;
    c.isUsingKeyboardRef.current && ((_a2 = l.current) == null ? void 0 : _a2.focus()), f.preventDefault();
  }, onCloseAutoFocus: (f) => f.preventDefault(), onFocusOutside: P(e.onFocusOutside, (f) => {
    f.target !== a.trigger && i.onOpenChange(false);
  }), onEscapeKeyDown: P(e.onEscapeKeyDown, (f) => {
    c.onClose(), f.preventDefault();
  }), onKeyDown: P(e.onKeyDown, (f) => {
    var _a2;
    const d = f.currentTarget.contains(f.target), h = Ku[c.dir].includes(f.key);
    d && h && (i.onOpenChange(false), (_a2 = a.trigger) == null ? void 0 : _a2.focus(), f.preventDefault());
  }) }) }) }) });
});
Ui.displayName = Hi;
function Ki(e) {
  return e ? "open" : "closed";
}
function Ct(e) {
  return e === "indeterminate";
}
function Un(e) {
  return Ct(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function dd(e) {
  const t = document.activeElement;
  for (const n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function fd(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function pd(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let c = fd(e, Math.max(i, 0));
  r.length === 1 && (c = c.filter((u) => u !== n));
  const l = c.find((u) => u.toLowerCase().startsWith(r.toLowerCase()));
  return l !== n ? l : void 0;
}
function md(e, t) {
  const { x: n, y: o } = e;
  let r = false;
  for (let i = 0, c = t.length - 1; i < t.length; c = i++) {
    const a = t[i], l = t[c], u = a.x, f = a.y, d = l.x, h = l.y;
    f > o != h > o && n < (d - u) * (o - f) / (h - f) + u && (r = !r);
  }
  return r;
}
function hd(e, t) {
  if (!t) return false;
  const n = { x: e.clientX, y: e.clientY };
  return md(n, t);
}
function Je(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var vd = Pi, gd = Fn, wd = Ai, yd = _i, xd = Wn, Sd = Ii, Cd = Wt, bd = Oi, Ed = Ni, Rd = ji, Pd = Fi, Md = $i, Ad = Bi, _d = Wi, Id = Ui, Ht = "DropdownMenu", [Td] = xe(Ht, [Ei]), q = Ei(), [Od, Gi] = Td(Ht), zi = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: o, open: r, defaultOpen: i, onOpenChange: c, modal: a = true } = e, l = q(t), u = s.useRef(null), [f, d] = _e({ prop: r, defaultProp: i ?? false, onChange: c, caller: Ht });
  return m.jsx(Od, { scope: t, triggerId: ve(), triggerRef: u, contentId: ve(), open: f, onOpenChange: d, onOpenToggle: s.useCallback(() => d((h) => !h), [d]), modal: a, children: m.jsx(vd, { ...l, open: f, onOpenChange: d, dir: o, modal: a, children: n }) });
};
zi.displayName = Ht;
var Yi = "DropdownMenuTrigger", Xi = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, disabled: o = false, ...r } = e, i = Gi(Yi, n), c = q(n);
  return m.jsx(gd, { asChild: true, ...c, children: m.jsx(N.button, { type: "button", id: i.triggerId, "aria-haspopup": "menu", "aria-expanded": i.open, "aria-controls": i.open ? i.contentId : void 0, "data-state": i.open ? "open" : "closed", "data-disabled": o ? "" : void 0, disabled: o, ...r, ref: ye(t, i.triggerRef), onPointerDown: P(e.onPointerDown, (a) => {
    !o && a.button === 0 && a.ctrlKey === false && (i.onOpenToggle(), i.open || a.preventDefault());
  }), onKeyDown: P(e.onKeyDown, (a) => {
    o || (["Enter", " "].includes(a.key) && i.onOpenToggle(), a.key === "ArrowDown" && i.onOpenChange(true), ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
  }) }) });
});
Xi.displayName = Yi;
var Dd = "DropdownMenuPortal", qi = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = q(t);
  return m.jsx(wd, { ...o, ...n });
};
qi.displayName = Dd;
var Zi = "DropdownMenuContent", Ji = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = Gi(Zi, n), i = q(n), c = s.useRef(false);
  return m.jsx(yd, { id: r.contentId, "aria-labelledby": r.triggerId, ...i, ...o, ref: t, onCloseAutoFocus: P(e.onCloseAutoFocus, (a) => {
    var _a2;
    c.current || ((_a2 = r.triggerRef.current) == null ? void 0 : _a2.focus()), c.current = false, a.preventDefault();
  }), onInteractOutside: P(e.onInteractOutside, (a) => {
    const l = a.detail.originalEvent, u = l.button === 0 && l.ctrlKey === true, f = l.button === 2 || u;
    (!r.modal || f) && (c.current = true);
  }), style: { ...e.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" } });
});
Ji.displayName = Zi;
var Nd = "DropdownMenuGroup", Ld = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = q(n);
  return m.jsx(xd, { ...r, ...o, ref: t });
});
Ld.displayName = Nd;
var jd = "DropdownMenuLabel", Qi = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = q(n);
  return m.jsx(Sd, { ...r, ...o, ref: t });
});
Qi.displayName = jd;
var kd = "DropdownMenuItem", es = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = q(n);
  return m.jsx(Cd, { ...r, ...o, ref: t });
});
es.displayName = kd;
var Fd = "DropdownMenuCheckboxItem", ts = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = q(n);
  return m.jsx(bd, { ...r, ...o, ref: t });
});
ts.displayName = Fd;
var $d = "DropdownMenuRadioGroup", ns = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = q(n);
  return m.jsx(Ed, { ...r, ...o, ref: t });
});
ns.displayName = $d;
var Bd = "DropdownMenuRadioItem", os = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = q(n);
  return m.jsx(Rd, { ...r, ...o, ref: t });
});
os.displayName = Bd;
var Vd = "DropdownMenuItemIndicator", rs = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = q(n);
  return m.jsx(Pd, { ...r, ...o, ref: t });
});
rs.displayName = Vd;
var Wd = "DropdownMenuSeparator", is = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = q(n);
  return m.jsx(Md, { ...r, ...o, ref: t });
});
is.displayName = Wd;
var Hd = "DropdownMenuArrow", Ud = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = q(n);
  return m.jsx(Ad, { ...r, ...o, ref: t });
});
Ud.displayName = Hd;
var Kd = "DropdownMenuSubTrigger", ss = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = q(n);
  return m.jsx(_d, { ...r, ...o, ref: t });
});
ss.displayName = Kd;
var Gd = "DropdownMenuSubContent", as = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = q(n);
  return m.jsx(Id, { ...r, ...o, ref: t, style: { ...e.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" } });
});
as.displayName = Gd;
var Pf = zi, Mf = Xi, Af = qi, _f = Ji, If = Qi, Tf = es, Of = ts, Df = ns, Nf = os, Lf = rs, jf = is, kf = ss, Ff = as;
export {
  B as $,
  _f as A,
  Tf as B,
  ef as C,
  nf as D,
  Of as E,
  Lf as F,
  Nf as G,
  If as H,
  mf as I,
  jf as J,
  Pf as K,
  wf as L,
  Mf as M,
  Df as N,
  Qd as O,
  Jd as P,
  Qe as Q,
  Se as R,
  Yd as S,
  tf as T,
  _e as U,
  gf as V,
  xe as W,
  ve as X,
  N as Y,
  P as Z,
  Re as _,
  xs as a,
  z as a0,
  Xd as b,
  of as c,
  Zd as d,
  rf as e,
  sf as f,
  af as g,
  cf as h,
  lf as i,
  m as j,
  uf as k,
  ff as l,
  Cf as m,
  bf as n,
  hf as o,
  vf as p,
  yf as q,
  s as r,
  xf as s,
  Sf as t,
  Ef as u,
  df as v,
  pf as w,
  kf as x,
  Ff as y,
  Af as z
};

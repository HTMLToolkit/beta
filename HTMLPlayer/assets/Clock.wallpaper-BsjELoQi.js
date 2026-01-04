import { r as n, j as t } from "./vendor-ui-WM1JXJ50.js";
import "./vendor-react-qkC6yhPU.js";
const l = (e) => e.toString().padStart(2, "0"), d = ({ now: e }) => {
  const i = e.getHours() % 12, s = e.getMinutes(), r = e.getSeconds();
  return t.jsxs("div", { style: { position: "relative", width: 300, height: 300 }, children: [t.jsx("div", { style: { position: "absolute", width: "100%", height: "100%", borderRadius: "50%", background: "rgba(255, 255, 255, 0.9)", border: "4px solid #333", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" } }), Array.from({ length: 12 }, (a, o) => t.jsx("div", { style: { position: "absolute", width: 4, height: 20, background: "#333", left: "50%", top: 10, transformOrigin: "2px 140px", transform: `translateX(-50%) rotate(${o * 30}deg)` } }, o)), Array.from({ length: 60 }, (a, o) => t.jsx("div", { style: { position: "absolute", width: 2, height: 10, background: "#666", left: "50%", top: 5, transformOrigin: "1px 145px", transform: `translateX(-50%) rotate(${o * 6}deg)` } }, o)), t.jsx("div", { style: { position: "absolute", width: 6, height: 80, background: "#333", left: "50%", bottom: "50%", transformOrigin: "3px 80px", transform: `translateX(-50%) rotate(${(i + s / 60) * 30}deg)`, borderRadius: "3px" } }), t.jsx("div", { style: { position: "absolute", width: 4, height: 120, background: "#555", left: "50%", bottom: "50%", transformOrigin: "2px 120px", transform: `translateX(-50%) rotate(${(s + r / 60) * 6}deg)`, borderRadius: "2px" } }), t.jsx("div", { style: { position: "absolute", width: 2, height: 130, background: "#e74c3c", left: "50%", bottom: "50%", transformOrigin: "1px 130px", transform: `translateX(-50%) rotate(${r * 6}deg)`, borderRadius: "1px" } }), t.jsx("div", { style: { position: "absolute", width: 12, height: 12, background: "#333", borderRadius: "50%", left: "50%", top: "50%", transform: "translate(-50%, -50%)" } })] });
}, c = ({ now: e }) => t.jsxs("div", { style: { textAlign: "center" }, children: [t.jsxs("div", { style: { fontSize: "6rem", fontFamily: "monospace", fontWeight: "bold" }, children: [l(e.getHours()), ":", l(e.getMinutes()), ":", l(e.getSeconds())] }), t.jsx("div", { style: { marginTop: 8, opacity: 0.8, fontSize: "1.2rem" }, children: e.toLocaleDateString() })] }), x = () => {
  const [e, i] = n.useState(/* @__PURE__ */ new Date()), [s, r] = n.useState(() => {
    const o = localStorage.getItem("clock-mode");
    return o ? o === "analog" : false;
  });
  n.useEffect(() => {
    const o = setInterval(() => i(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(o);
  }, []);
  const a = () => {
    const o = !s;
    r(o), localStorage.setItem("clock-mode", o ? "analog" : "digital");
  };
  return t.jsx("div", { style: { position: "fixed", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#f5f7fa,#c3dafe)", zIndex: -1, color: "#222", cursor: "pointer" }, onClick: a, title: `Click to switch to ${s ? "digital" : "analog"} clock`, children: s ? t.jsx(d, { now: e }) : t.jsx(c, { now: e }) });
};
export {
  x as default
};

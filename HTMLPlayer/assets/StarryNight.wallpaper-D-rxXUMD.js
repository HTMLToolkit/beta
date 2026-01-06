import { r as i, j as m } from "./vendor-ui-WM1JXJ50.js";
import "./vendor-react-qkC6yhPU.js";
const S = () => {
  const l = i.useRef(null), h = i.useRef(null), c = i.useRef([]), u = i.useRef(0), [e, g] = i.useState({ width: 0, height: 0 }), p = (r, d) => ({ x: Math.random() * r, y: Math.random() * d, size: Math.random() * 2 + 0.5, brightness: Math.random() * 0.8 + 0.2, twinkleSpeed: Math.random() * 0.02 + 0.01, twinkleOffset: Math.random() * Math.PI * 2 }), s = () => {
    g({ width: window.innerWidth, height: window.innerHeight });
  };
  return i.useEffect(() => (s(), window.addEventListener("resize", s), () => window.removeEventListener("resize", s)), []), i.useEffect(() => {
    const r = l.current;
    if (!r || e.width === 0 || e.height === 0) return;
    r.width = e.width, r.height = e.height;
    const d = Math.min(200, Math.floor(e.width * e.height / 8e3));
    c.current = Array.from({ length: d }, () => p(e.width, e.height));
    const t = r.getContext("2d");
    if (!t) return;
    const w = () => {
      u.current += 0.02;
      const o = t.createRadialGradient(e.width / 2, e.height / 2, 0, e.width / 2, e.height / 2, Math.max(e.width, e.height) / 2);
      if (o.addColorStop(0, "#0f0f23"), o.addColorStop(0.5, "#1a1a2e"), o.addColorStop(1, "#16213e"), t.fillStyle = o, t.fillRect(0, 0, e.width, e.height), c.current.forEach((n) => {
        const a = Math.sin(u.current * n.twinkleSpeed + n.twinkleOffset) * 0.5 + 0.5, f = n.brightness * (0.3 + a * 0.7);
        t.globalAlpha = f, t.fillStyle = "#ffffff", t.shadowColor = "#ffffff", t.shadowBlur = n.size * 3, t.beginPath(), t.arc(n.x, n.y, n.size, 0, Math.PI * 2), t.fill(), t.shadowBlur = 0;
      }), t.globalAlpha = 1, Math.random() < 5e-3) {
        const n = Math.random() * e.width, a = Math.random() * e.height * 0.3, f = n + 200, M = a + 100;
        t.strokeStyle = "rgba(255, 255, 255, 0.8)", t.lineWidth = 2, t.shadowColor = "#ffffff", t.shadowBlur = 10, t.beginPath(), t.moveTo(n, a), t.lineTo(f, M), t.stroke(), t.shadowBlur = 0;
      }
      h.current = requestAnimationFrame(w);
    };
    return w(), () => {
      h.current && cancelAnimationFrame(h.current);
    };
  }, [e]), m.jsx("div", { style: { position: "fixed", inset: 0, zIndex: -1 }, children: m.jsx("canvas", { ref: l, style: { width: "100%", height: "100%", display: "block" } }) });
};
export {
  S as default
};

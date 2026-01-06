import { r as a, j as l } from "./vendor-ui-WM1JXJ50.js";
import "./vendor-react-qkC6yhPU.js";
const z = () => {
  const h = a.useRef(null), d = a.useRef(null), i = a.useRef([]), [s, g] = a.useState({ width: 0, height: 0 }), f = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7", "#dda0dd", "#98d8c8", "#f7dc6f", "#bb8fce", "#85c1e9"], w = (n, o) => ({ x: Math.random() * n, y: Math.random() * o, vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5, size: Math.random() * 3 + 1, opacity: Math.random() * 0.8 + 0.2, color: f[Math.floor(Math.random() * f.length)] }), M = (n, o) => {
    i.current.forEach((e) => {
      e.x += e.vx, e.y += e.vy, e.x < 0 && (e.x = n), e.x > n && (e.x = 0), e.y < 0 && (e.y = o), e.y > o && (e.y = 0), e.opacity += (Math.random() - 0.5) * 0.01, e.opacity = Math.max(0.1, Math.min(1, e.opacity));
    });
  }, b = (n, o, e) => {
    n.clearRect(0, 0, o, e), i.current.forEach((t, v) => {
      i.current.slice(v + 1).forEach((r) => {
        const u = t.x - r.x, m = t.y - r.y, y = Math.sqrt(u * u + m * m);
        if (y < 100) {
          const E = (1 - y / 100) * 0.3;
          n.strokeStyle = `rgba(255, 255, 255, ${E})`, n.lineWidth = 0.5, n.beginPath(), n.moveTo(t.x, t.y), n.lineTo(r.x, r.y), n.stroke();
        }
      });
    }), i.current.forEach((t) => {
      n.globalAlpha = t.opacity, n.fillStyle = t.color, n.beginPath(), n.arc(t.x, t.y, t.size, 0, Math.PI * 2), n.fill(), n.shadowColor = t.color, n.shadowBlur = t.size * 2, n.fill(), n.shadowBlur = 0;
    }), n.globalAlpha = 1;
  }, c = () => {
    const n = h.current;
    if (!n) return;
    const o = n.getContext("2d");
    o && (M(n.width, n.height), b(o, n.width, n.height), d.current = requestAnimationFrame(c));
  };
  return a.useEffect(() => {
    const n = () => {
      g({ width: window.innerWidth, height: window.innerHeight });
    };
    return n(), window.addEventListener("resize", n), () => {
      window.removeEventListener("resize", n);
    };
  }, []), a.useEffect(() => {
    const n = h.current;
    if (!n || s.width === 0 || s.height === 0) return;
    n.width = s.width, n.height = s.height;
    const o = Math.min(150, Math.floor(s.width * s.height / 1e4));
    return i.current = Array.from({ length: o }, () => w(s.width, s.height)), c(), () => {
      d.current && cancelAnimationFrame(d.current);
    };
  }, [s]), l.jsx("div", { style: { position: "fixed", inset: 0, zIndex: -1, background: "linear-gradient(135deg, #0f0f23, #1a1a2e, #16213e)" }, children: l.jsx("canvas", { ref: h, style: { width: "100%", height: "100%", display: "block" } }) });
};
export {
  z as default
};

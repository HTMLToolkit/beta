import { r as s, j as f } from "./vendor-ui-WM1JXJ50.js";
import "./vendor-react-qkC6yhPU.js";
const p = () => {
  const l = s.useRef(null), a = s.useRef(null), n = s.useRef(0);
  return s.useEffect(() => {
    const e = l.current;
    if (!e) return;
    const t = e.getContext("2d");
    if (!t) return;
    const c = () => {
      e.width = window.innerWidth, e.height = window.innerHeight;
    };
    c(), window.addEventListener("resize", c);
    const h = () => {
      n.current += 0.01;
      const d = t.createLinearGradient(0, 0, e.width, e.height), u = [`hsl(${n.current * 20 % 360}, 70%, 60%)`, `hsl(${(n.current * 20 + 60) % 360}, 70%, 50%)`, `hsl(${(n.current * 20 + 120) % 360}, 70%, 40%)`, `hsl(${(n.current * 20 + 180) % 360}, 70%, 30%)`];
      u.forEach((r, i) => {
        d.addColorStop(i / (u.length - 1), r);
      }), t.fillStyle = d, t.fillRect(0, 0, e.width, e.height);
      for (let r = 0; r < 3; r++) {
        t.beginPath(), t.moveTo(0, e.height);
        for (let o = 0; o <= e.width; o += 2) {
          const g = e.height / 2 + Math.sin(o * 0.01 + n.current + r) * 50 + Math.sin(o * 5e-3 + n.current * 0.5 + r) * 30;
          t.lineTo(o, g);
        }
        t.lineTo(e.width, e.height), t.closePath();
        const i = t.createLinearGradient(0, 0, 0, e.height);
        i.addColorStop(0, `rgba(255, 255, 255, ${0.1 + r * 0.05})`), i.addColorStop(1, "rgba(255, 255, 255, 0)"), t.fillStyle = i, t.fill();
      }
      a.current = requestAnimationFrame(h);
    };
    return h(), () => {
      window.removeEventListener("resize", c), a.current && cancelAnimationFrame(a.current);
    };
  }, []), f.jsx("div", { style: { position: "fixed", inset: 0, zIndex: -1 }, children: f.jsx("canvas", { ref: l, style: { width: "100%", height: "100%", display: "block" } }) });
};
export {
  p as default
};

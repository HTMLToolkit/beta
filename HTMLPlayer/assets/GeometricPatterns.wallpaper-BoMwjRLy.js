import { r as d, j as k } from "./vendor-ui-WM1JXJ50.js";
import "./vendor-react-qkC6yhPU.js";
const j = () => {
  const x = d.useRef(null), f = d.useRef(null), c = d.useRef(0);
  return d.useEffect(() => {
    const o = x.current;
    if (!o) return;
    const e = o.getContext("2d");
    if (!e) return;
    const u = () => {
      o.width = window.innerWidth, o.height = window.innerHeight;
    };
    u(), window.addEventListener("resize", u);
    const M = (s, a, n, r) => {
      e.save(), e.translate(s, a), e.rotate(r), e.beginPath();
      for (let t = 0; t < 6; t++) {
        const i = Math.PI / 3 * t, l = n * Math.cos(i), h = n * Math.sin(i);
        t === 0 ? e.moveTo(l, h) : e.lineTo(l, h);
      }
      e.closePath(), e.stroke(), e.restore();
    }, b = (s, a, n, r) => {
      e.save(), e.translate(s, a), e.rotate(r), e.beginPath(), e.moveTo(0, -n), e.lineTo(-n * 0.866, n * 0.5), e.lineTo(n * 0.866, n * 0.5), e.closePath(), e.stroke(), e.restore();
    }, P = (s, a, n) => {
      e.beginPath(), e.arc(s, a, n, 0, Math.PI * 2), e.stroke();
    }, v = () => {
      c.current += 0.02, e.clearRect(0, 0, o.width, o.height), e.strokeStyle = `hsl(${c.current * 10 % 360}, 70%, 60%)`, e.lineWidth = 2;
      const s = 80, a = Math.ceil(o.height / s) + 1, n = Math.ceil(o.width / s) + 1;
      for (let r = 0; r < a; r++) for (let t = 0; t < n; t++) {
        const i = t * s, l = r * s, h = Math.sin(c.current + r * 0.5 + t * 0.3) * 20, R = Math.cos(c.current + r * 0.3 + t * 0.5) * 20, w = i + h, g = l + R, y = (r + t) % 3, p = c.current + r * 0.2 + t * 0.1, m = 25 + Math.sin(c.current * 2 + r + t) * 10;
        switch (y) {
          case 0:
            M(w, g, m, p);
            break;
          case 1:
            b(w, g, m, p);
            break;
          case 2:
            P(w, g, m);
            break;
        }
      }
      f.current = requestAnimationFrame(v);
    };
    return v(), () => {
      window.removeEventListener("resize", u), f.current && cancelAnimationFrame(f.current);
    };
  }, []), k.jsx("div", { style: { position: "fixed", inset: 0, zIndex: -1, background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f0f23)" }, children: k.jsx("canvas", { ref: x, style: { width: "100%", height: "100%", display: "block" } }) });
};
export {
  j as default
};

import { r as l, j as g } from "./vendor-ui-WM1JXJ50.js";
import "./vendor-react-qkC6yhPU.js";
const y = ({ playbackState: o }) => {
  const h = l.useRef(null), s = l.useRef(null);
  return l.useEffect(() => {
    const e = h.current;
    if (!e) return;
    const t = e.getContext("2d");
    if (!t) return;
    const c = () => {
      e.width = window.innerWidth, e.height = window.innerHeight;
    };
    c(), window.addEventListener("resize", c);
    let a = (o == null ? void 0 : o.analyserNode) || null, n = null;
    if (a) {
      const i = a.frequencyBinCount;
      n = new Uint8Array(i);
    }
    const u = () => {
      if (!(!t || !e)) {
        if (t.clearRect(0, 0, e.width, e.height), a && n) {
          a.getByteFrequencyData(n);
          const i = e.width / n.length;
          for (let r = 0; r < n.length; r++) {
            const f = n[r] / 255, d = f * e.height;
            t.fillStyle = `hsl(${r / n.length * 360}, 80%, ${30 + f * 50}%)`, t.fillRect(r * i, e.height - d, Math.ceil(i), d);
          }
        } else {
          const i = Date.now() / 300, r = 30 + ((o == null ? void 0 : o.isPlaying) ? (Math.sin(i) + 1) * 40 : 10);
          t.beginPath(), t.fillStyle = "#6ee7b7", t.arc(e.width / 2, e.height / 2, r, 0, Math.PI * 2), t.fill();
        }
        s.current = requestAnimationFrame(u);
      }
    };
    return s.current = requestAnimationFrame(u), () => {
      s.current && cancelAnimationFrame(s.current), window.removeEventListener("resize", c);
    };
  }, [o]), g.jsx("canvas", { ref: h, style: { background: "navy", position: "fixed", inset: 0, zIndex: -1, width: "100%", height: "100%" } });
};
export {
  y as default
};

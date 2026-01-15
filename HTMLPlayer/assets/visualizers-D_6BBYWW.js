import { _ as P } from "./vendor-i18n-WLbSf5LT.js";
const T = /* @__PURE__ */ new Map();
function F(f) {
  var _a, _b;
  if (f) {
    const t = T.get(f);
    t && (t.offscreen && (t.offscreen.width = 0, t.offscreen.height = 0, t.offscreenCtx = null), t.points && (t.points.length = 0), t.particles && (t.particles.length = 0), ((_a = t.config) == null ? void 0 : _a.points) && (t.config.points.forEach((e) => e.length = 0), t.config.points.length = 0), T.delete(f));
  } else {
    for (const [, t] of T.entries()) t.offscreen && (t.offscreen.width = 0, t.offscreen.height = 0, t.offscreenCtx = null), t.points && (t.points.length = 0), t.particles && (t.particles.length = 0), ((_b = t.config) == null ? void 0 : _b.points) && (t.config.points.forEach((e) => e.length = 0), t.config.points.length = 0);
    T.clear();
  }
}
const $ = Object.assign({ "../visualizers/abstractart.visualizer.tsx": () => P(() => Promise.resolve().then(() => G), void 0), "../visualizers/architecturalblueprint.visualizer.tsx": () => P(() => Promise.resolve().then(() => L), void 0), "../visualizers/bargraph.visualizer.tsx": () => P(() => Promise.resolve().then(() => K), void 0), "../visualizers/biologicalcell.visualizer.tsx": () => P(() => Promise.resolve().then(() => U), void 0), "../visualizers/circuitboard.visualizer.tsx": () => P(() => Promise.resolve().then(() => J), void 0), "../visualizers/circularspectrogram.visualizer.tsx": () => P(() => Promise.resolve().then(() => ee), void 0), "../visualizers/circularwave.visualizer.tsx": () => P(() => Promise.resolve().then(() => oe), void 0), "../visualizers/cityscape.visualizer.tsx": () => P(() => Promise.resolve().then(() => ie), void 0), "../visualizers/constellation.visualizer.tsx": () => P(() => Promise.resolve().then(() => ne), void 0), "../visualizers/cosmicpulse.visualizer.tsx": () => P(() => Promise.resolve().then(() => se), void 0), "../visualizers/crystal.visualizer.tsx": () => P(() => Promise.resolve().then(() => he), void 0), "../visualizers/crystalv2.visualizer.tsx": () => P(() => Promise.resolve().then(() => de), void 0), "../visualizers/dna.visualizer.tsx": () => P(() => Promise.resolve().then(() => pe), void 0), "../visualizers/dnav2.visualizer.tsx": () => P(() => Promise.resolve().then(() => ye), void 0), "../visualizers/firespectrum.visualizer.tsx": () => P(() => Promise.resolve().then(() => me), void 0), "../visualizers/flower.visualizer.tsx": () => P(() => Promise.resolve().then(() => Se), void 0), "../visualizers/fluid.visualizer.tsx": () => P(() => Promise.resolve().then(() => ve), void 0), "../visualizers/fluidwave.visualizer.tsx": () => P(() => Promise.resolve().then(() => we), void 0), "../visualizers/fractal.visualizer.tsx": () => P(() => Promise.resolve().then(() => Te), void 0), "../visualizers/fracture.visualizer.tsx": () => P(() => Promise.resolve().then(() => Oe), void 0), "../visualizers/fracturedcircle.visualizer.tsx": () => P(() => Promise.resolve().then(() => Re), void 0), "../visualizers/fracturedprism.visualizer.tsx": () => P(() => Promise.resolve().then(() => qe), void 0), "../visualizers/frequencyflower.visualizer.tsx": () => P(() => Promise.resolve().then(() => Ee), void 0), "../visualizers/frequencymesh.visualizer.tsx": () => P(() => Promise.resolve().then(() => De), void 0), "../visualizers/frequencystars.visualizer.tsx": () => P(() => Promise.resolve().then(() => Ve), void 0), "../visualizers/galaxy.visualizer.tsx": () => P(() => Promise.resolve().then(() => Fe), void 0), "../visualizers/galaxyv2.visualizer.tsx": () => P(() => Promise.resolve().then(() => Ye), void 0), "../visualizers/geometricpulse.visualizer.tsx": () => P(() => Promise.resolve().then(() => Ge), void 0), "../visualizers/interference.visualizer.tsx": () => P(() => Promise.resolve().then(() => Le), void 0), "../visualizers/kaleidoscope.visualizer.tsx": () => P(() => Promise.resolve().then(() => Ke), void 0), "../visualizers/kaleidoscopespectrogram.visualizer.tsx": () => P(() => Promise.resolve().then(() => Ue), void 0), "../visualizers/layeredripplevoronoi.visualizer.tsx": () => P(() => Promise.resolve().then(() => Je), void 0), "../visualizers/liquidmetal.visualizer.tsx": () => P(() => Promise.resolve().then(() => et), void 0), "../visualizers/matrixrain.visualizer.tsx": () => P(() => Promise.resolve().then(() => ot), void 0), "../visualizers/nebula.visualizer.tsx": () => P(() => Promise.resolve().then(() => it), void 0), "../visualizers/neonwave.visualizer.tsx": () => P(() => Promise.resolve().then(() => nt), void 0), "../visualizers/neural.visualizer.tsx": () => P(() => Promise.resolve().then(() => st), void 0), "../visualizers/neurospectogram.visualizer.tsx": () => P(() => Promise.resolve().then(() => ht), void 0), "../visualizers/oceanwaves.visualizer.tsx": () => P(() => Promise.resolve().then(() => dt), void 0), "../visualizers/organic.visualizer.tsx": () => P(() => Promise.resolve().then(() => pt), void 0), "../visualizers/oscilloscope.visualizer.tsx": () => P(() => Promise.resolve().then(() => yt), void 0), "../visualizers/particlefield.visualizer.tsx": () => P(() => Promise.resolve().then(() => mt), void 0), "../visualizers/pixeldust.visualizer.tsx": () => P(() => Promise.resolve().then(() => St), void 0), "../visualizers/pulsingorbs.visualizer.tsx": () => P(() => Promise.resolve().then(() => vt), void 0), "../visualizers/quantum.visualizer.tsx": () => P(() => Promise.resolve().then(() => wt), void 0), "../visualizers/rainbowspiral.visualizer.tsx": () => P(() => Promise.resolve().then(() => Tt), void 0), "../visualizers/ribbondance.visualizer.tsx": () => P(() => Promise.resolve().then(() => Ot), void 0), "../visualizers/sacredgeometry.visualizer.tsx": () => P(() => Promise.resolve().then(() => Rt), void 0), "../visualizers/spectrumripple.visualizer.tsx": () => P(() => Promise.resolve().then(() => qt), void 0), "../visualizers/spiralspectogram.visualizer.tsx": () => P(() => Promise.resolve().then(() => Et), void 0), "../visualizers/spiralv2.visualizer.tsx": () => P(() => Promise.resolve().then(() => Dt), void 0), "../visualizers/starfield.visualizer.tsx": () => P(() => Promise.resolve().then(() => Vt), void 0), "../visualizers/tesselation.visualizer.tsx": () => P(() => Promise.resolve().then(() => Ft), void 0), "../visualizers/topwater.visualizer.tsx": () => P(() => Promise.resolve().then(() => Yt), void 0), "../visualizers/voltaicarcs.visualizer.tsx": () => P(() => Promise.resolve().then(() => Gt), void 0), "../visualizers/voronoi.visualizer.tsx": () => P(() => Promise.resolve().then(() => Lt), void 0), "../visualizers/vortex.visualizer.tsx": () => P(() => Promise.resolve().then(() => Kt), void 0), "../visualizers/water.visualizer.tsx": () => P(() => Promise.resolve().then(() => Ut), void 0), "../visualizers/waterfall.visualizer.tsx": () => P(() => Promise.resolve().then(() => Jt), void 0), "../visualizers/waveformrings.visualizer.tsx": () => P(() => Promise.resolve().then(() => eo), void 0), "../visualizers/waveformspectrum.visualizer.tsx": () => P(() => Promise.resolve().then(() => oo), void 0), "../visualizers/waveformtunnel.visualizer.tsx": () => P(() => Promise.resolve().then(() => io), void 0), "../visualizers/waveinterference.visualizer.tsx": () => P(() => Promise.resolve().then(() => no), void 0), "../visualizers/weather.visualizer.tsx": () => P(() => Promise.resolve().then(() => so), void 0) }), I = /* @__PURE__ */ new Map(), A = 5;
async function Y(f) {
  if (I.has(f)) return I.get(f);
  const t = `../visualizers/${f}.visualizer.tsx`, e = $[t];
  if (e) try {
    const s = (await e()).default;
    if (s) {
      if (I.size >= A) {
        const y = I.keys().next().value;
        y && (I.delete(y), F(y), console.log(`Evicted visualizer from cache: ${y}`));
      }
      return I.set(f, s), s;
    }
  } catch (a) {
    console.error(`Failed to load visualizer ${f}:`, a);
  }
  return null;
}
function ho() {
  return Object.keys($).map((f) => {
    var _a;
    return (_a = f.split("/").pop()) == null ? void 0 : _a.replace(".visualizer.tsx", "");
  }).filter(Boolean);
}
const k = {};
async function co(f) {
  if (k[f]) return k[f];
  const t = await Y(f);
  return t && (k[f] = t), t;
}
const X = { name: "Abstract Art", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { shapeColor: p = "hsla({hue}, 90%, 50%, {alpha})", backgroundColor: _ = "rgb(20, 20, 20)", curveScale: d = 1, shapeCount: c = a } = m;
  if (y === "frequency") {
    f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
    for (let r = 0; r < c; r++) {
      const n = s[r] / 256;
      e.fillStyle = p.replace("{hue}", `${r * 360 / a}`).replace("{alpha}", `${n}`), e.beginPath(), e.moveTo(Math.random() * t.width, Math.random() * t.height), e.bezierCurveTo(n * t.width * d, n * t.height * d, (1 - n) * t.width * d, (1 - n) * t.height * d, Math.random() * t.width, Math.random() * t.height), e.fill();
    }
  }
} }, G = Object.freeze(Object.defineProperty({ __proto__: null, default: X }, Symbol.toStringTag, { value: "Module" })), H = { name: "Architectural Blueprint", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { lineColor: p = "rgba(0, 149, 255, {alpha})", fillColor: _ = "rgba(0, 149, 255, {alpha})", backgroundColor: d = "rgba(20, 20, 20, 0.2)", margin: c = 50, amplitudeThreshold: r = 0.5, fontSize: n = 8 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = d, e.fillRect(0, 0, t.width, t.height);
  const l = (t.width - c * 2) / Math.sqrt(a);
  for (let o = 0; o < a; o++) {
    const i = s[o] / 256, u = o % Math.floor(Math.sqrt(a)), h = Math.floor(o / Math.floor(Math.sqrt(a))), g = c + u * l, b = c + h * l;
    e.strokeStyle = p.replace("{alpha}", "0.5"), e.beginPath(), e.rect(g, b, l * i, l * i), e.stroke(), i > r && (e.fillStyle = _.replace("{alpha}", "0.1"), e.beginPath(), e.arc(g + l / 2, b + l / 2, l / 4 * i, 0, Math.PI * 2), e.fill(), e.stroke(), e.strokeStyle = p.replace("{alpha}", "0.5"), e.beginPath(), e.moveTo(g, b + l + 5), e.lineTo(g + l * i, b + l + 5), e.stroke(), e.fillStyle = p.replace("{alpha}", "1.0"), e.font = `${n}px Arial`, e.fillText(`${Math.round(i * 100)}%`, g, b + l + 15));
  }
} }, L = Object.freeze(Object.defineProperty({ __proto__: null, default: H }, Symbol.toStringTag, { value: "Module" })), N = { name: "Bar Graph", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { barColor: p = "hsl({hue}, 80%, 50%)", backgroundColor: _ = "rgb(20, 20, 20)", barSpacing: d = 1, shadowBlur: c = 5 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.width / a - d;
  let n = 0;
  for (let l = 0; l < a; l++) {
    const o = s[l] / 255 * t.height;
    e.fillStyle = p.replace("{hue}", `${l * 360 / a}`), e.shadowBlur = c, e.shadowColor = e.fillStyle, e.fillRect(n, t.height - o, r, o), n += r + d;
  }
  e.shadowBlur = 0;
} }, K = Object.freeze(Object.defineProperty({ __proto__: null, default: N }, Symbol.toStringTag, { value: "Module" })), Q = { name: "Biological Cell", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { membraneColor: p = "rgba(255, 255, 255, {alpha})", organelleColor: _ = "hsla({hue}, 70%, 50%, {alpha})", connectionColor: d = "rgba(255, 255, 255, {alpha})", backgroundColor: c = "rgba(20, 20, 20, 0.2)", cellRadiusScale: r = 0.8, organelleSize: n = 20 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = c, e.fillRect(0, 0, t.width, t.height);
  const l = t.width / 2, o = t.height / 2, i = Math.min(l, o) * r;
  e.strokeStyle = p.replace("{alpha}", "0.2"), e.beginPath(), e.arc(l, o, i, 0, Math.PI * 2), e.stroke();
  for (let u = 0; u < a; u++) {
    const h = s[u] / 256, g = u * Math.PI * 2 / a, b = i * (0.2 + h * 0.6), S = l + Math.cos(g) * b, v = o + Math.sin(g) * b;
    if (e.fillStyle = _.replace("{hue}", `${u * 360 / a}`).replace("{alpha}", `${h}`), e.beginPath(), e.arc(S, v, h * n, 0, Math.PI * 2), e.fill(), u > 0) {
      e.strokeStyle = d.replace("{alpha}", `${h * 0.3}`), e.beginPath(), e.moveTo(S, v);
      const M = (u - 1) * Math.PI * 2 / a, w = l + Math.cos(M) * b, z = o + Math.sin(M) * b;
      e.lineTo(w, z), e.stroke();
    }
  }
} }, U = Object.freeze(Object.defineProperty({ __proto__: null, default: Q }, Symbol.toStringTag, { value: "Module" })), Z = { name: "Circuit Board", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { circuitColor: p = "rgba(0, 255, 0, {alpha})", backgroundColor: _ = "rgb(20, 20, 20)", gridSize: d = 20, nodeSize: c = 3 } = m;
  if (y === "frequency") {
    f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
    for (let r = 0; r < a; r++) {
      const n = s[r] / 256, l = r % (t.width / d) * d, o = Math.floor(r / (t.width / d)) * d;
      e.strokeStyle = p.replace("{alpha}", `${n}`), e.lineWidth = 2, e.beginPath(), e.moveTo(l, o), n > 0.5 ? (e.lineTo(l + d, o), e.lineTo(l + d, o + d)) : (e.lineTo(l, o + d), e.lineTo(l + d, o + d)), e.stroke(), e.fillStyle = p.replace("{alpha}", `${n}`), e.beginPath(), e.arc(l, o, c, 0, Math.PI * 2), e.fill();
    }
  }
} }, J = Object.freeze(Object.defineProperty({ __proto__: null, default: Z }, Symbol.toStringTag, { value: "Module" })), x = { name: "Circular Spectrogram", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { baseColor: p = "hsl({hue}, 100%, 50%)", backgroundColor: _ = "rgb(20, 20, 20)", pointSize: d = 3, radiusScale: c = 1 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.width / 2, n = t.height / 2, l = Math.min(r, n) * c - 10;
  for (let o = 0; o < a; o++) {
    const i = o * 2 * Math.PI / a, u = s[o] / 256, h = r + l * u * Math.cos(i), g = n + l * u * Math.sin(i);
    e.fillStyle = p.replace("{hue}", `${o * 360 / a}`), e.beginPath(), e.arc(h, g, d, 0, 2 * Math.PI), e.fill();
  }
} }, ee = Object.freeze(Object.defineProperty({ __proto__: null, default: x }, Symbol.toStringTag, { value: "Module" })), te = { name: "Circular Wave", dataType: "time", draw: function(f, t, e, a, s, y, m = {}) {
  const { lineColor: p = "hsl({hue}, 100%, 50%)", backgroundColor: _ = "rgba(0, 0, 0, 0.1)", lineWidth: d = 2, waveAmplitude: c = 50 } = m;
  if (y !== "time") return;
  f.getByteTimeDomainData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.width / 2, n = t.height / 2, l = Math.min(r, n) * 0.8;
  e.beginPath();
  for (let o = 0; o < a; o++) {
    const i = o * 2 * Math.PI / a, u = s[o] / 128 - 1, h = l + u * c, g = r + h * Math.cos(i), b = n + h * Math.sin(i);
    o === 0 ? e.moveTo(g, b) : e.lineTo(g, b);
  }
  e.closePath(), e.strokeStyle = p.replace("{hue}", `${Date.now() / 50 % 360}`), e.lineWidth = d, e.stroke();
} }, oe = Object.freeze(Object.defineProperty({ __proto__: null, default: te }, Symbol.toStringTag, { value: "Module" })), le = { name: "Dynamic Cityscape", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { buildingColor: p = "rgb(20, 20, {blue})", windowColor: _ = "rgba({brightness}, {brightness}, 0, 0.8)", backgroundColor: d = "rgba(20, 20, 20, 0.2)", buildingCount: c = 40, baseHeightScale: r = 0.2, windowRows: n = 20 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = d, e.fillRect(0, 0, t.width, t.height);
  const l = t.width / c, o = t.height * r;
  for (let i = 0; i < c; i++) {
    const u = Math.floor(i / c * a), h = s[u] / 256 * t.height * 0.7;
    e.fillStyle = p.replace("{blue}", `${30 + h / 2}`);
    const g = i * l;
    e.fillRect(g, t.height - h - o, l - 2, h);
    const b = Math.floor(h / n), S = 2;
    for (let v = 0; v < b; v++) for (let M = 0; M < S; M++) {
      const w = Math.random() * 155 + 100;
      e.fillStyle = _.replace("{brightness}", `${w}`), e.fillRect(g + M * (l / 3) + 2, t.height - h - o + v * n + 5, l / 4, n / 2);
    }
  }
} }, ie = Object.freeze(Object.defineProperty({ __proto__: null, default: le }, Symbol.toStringTag, { value: "Module" })), re = { name: "Constellation Spectrogram", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { pointColor: p = "hsla({hue}, 80%, 50%, {alpha})", lineColor: _ = "hsla({hue}, 70%, 50%, {alpha})", backgroundColor: d = "rgb(20, 20, 20)", connectionCount: c = 3 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = d, e.fillRect(0, 0, t.width, t.height);
  const r = [], n = c;
  for (let l = 0; l < a; l += 2) {
    const o = s[l] / 256, i = l * 2 * Math.PI / a, u = Math.min(t.width, t.height) / 3 * (0.5 + o * 0.5);
    r.push({ x: t.width / 2 + u * Math.cos(i), y: t.height / 2 + u * Math.sin(i), amplitude: o });
  }
  for (let l = 0; l < r.length; l++) {
    const o = r[l];
    for (let i = 0; i < n; i++) {
      const u = (l + i + 1) % r.length, h = r[u];
      Math.hypot(h.x - o.x, h.y - o.y) < 100 && (e.beginPath(), e.moveTo(o.x, o.y), e.lineTo(h.x, h.y), e.strokeStyle = _.replace("{hue}", `${l * 360 / r.length}`).replace("{alpha}", `${0.15 + (o.amplitude + h.amplitude) * 0.2}`), e.lineWidth = 1, e.stroke());
    }
    e.fillStyle = p.replace("{hue}", `${l * 360 / r.length}`).replace("{alpha}", `${0.3 + o.amplitude * 0.7}`), e.beginPath(), e.arc(o.x, o.y, 2 + o.amplitude * 3, 0, 2 * Math.PI), e.fill();
  }
} }, ne = Object.freeze(Object.defineProperty({ __proto__: null, default: re }, Symbol.toStringTag, { value: "Module" })), ae = { name: "Cosmic Pulse", dataType: "time", draw: function(f, t, e, a, s, y, m = {}) {
  const { pointColor: p = "hsla({hue}, 80%, 50%, {alpha})", lineColor: _ = "hsla({hue}, 80%, 50%, 0.2)", backgroundColor: d = "rgba(0, 0, 20, 0.2)", pointInterval: c = 8, pointSize: r = 5, radiusScale: n = 1 } = m;
  if (y !== "time") return;
  f.getByteTimeDomainData(s), e.fillStyle = d, e.fillRect(0, 0, t.width, t.height);
  const l = t.width / 2, o = t.height / 2;
  for (let i = 0; i < a; i += c) {
    const u = s[i] / 128, h = u * Math.min(l, o) * n, g = i * 2 * Math.PI / a;
    e.beginPath(), e.fillStyle = p.replace("{hue}", `${i / a * 360}`).replace("{alpha}", `${u * 0.5}`);
    const b = l + Math.cos(g) * h, S = o + Math.sin(g) * h, v = l + Math.cos(g + 0.2) * (h * 0.8), M = o + Math.sin(g + 0.2) * (h * 0.8);
    e.arc(b, S, u * r, 0, Math.PI * 2), e.fill(), e.beginPath(), e.strokeStyle = _.replace("{hue}", `${i / a * 360}`), e.moveTo(b, S), e.lineTo(v, M), e.stroke();
  }
} }, se = Object.freeze(Object.defineProperty({ __proto__: null, default: ae }, Symbol.toStringTag, { value: "Module" })), ue = { name: "Crystal Formation", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { branchColor: p = "hsla({hue}, 85%, 50%, {alpha})", backgroundColor: _ = "rgb(20, 20, 20)", branchCount: d = 6, subBranchCount: c = 3 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.width / 2, n = t.height / 2, l = d;
  for (let o = 0; o < a; o++) {
    const i = s[o] / 256, u = o * 2 * Math.PI / a;
    for (let h = 0; h < l; h++) {
      const g = u + h * 2 * Math.PI / l, b = Math.min(r, n) * (0.2 + i * 0.8), S = r + b * Math.cos(g), v = n + b * Math.sin(g);
      e.beginPath(), e.moveTo(r, n), e.lineTo(S, v), e.strokeStyle = p.replace("{hue}", `${o * 360 / a}`).replace("{alpha}", `${0.3 + i * 0.7}`), e.lineWidth = 2 + i * 3, e.stroke();
      const M = c;
      for (let w = 0; w < M; w++) {
        const z = g + (w - 1) * Math.PI / 6 * i, C = b * 0.3, O = S + C * Math.cos(z), R = v + C * Math.sin(z);
        e.beginPath(), e.moveTo(S, v), e.lineTo(O, R), e.strokeStyle = p.replace("{hue}", `${o * 360 / a}`).replace("{alpha}", `${0.2 + i * 0.5}`), e.lineWidth = 1 + i * 2, e.stroke();
      }
    }
  }
} }, he = Object.freeze(Object.defineProperty({ __proto__: null, default: ue }, Symbol.toStringTag, { value: "Module" })), ce = { name: "Crystalline Formation", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { lineColor: p = "hsla({hue}, 90%, 70%, {alpha})", backgroundColor: _ = "rgb(20, 20, 20)", lineCount: d = 5, radiusScale: c = 200 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.width / 2, n = t.height / 2;
  for (let l = 0; l < a; l++) {
    const o = s[l] / 256, i = l * 72 * Math.PI / 180;
    for (let u = 0; u < d; u++) {
      const h = o * c + u * 30, g = r + h * Math.cos(i), b = n + h * Math.sin(i);
      e.strokeStyle = p.replace("{hue}", `${l * 360 / a}`).replace("{alpha}", `${o}`), e.beginPath(), e.moveTo(r, n), e.lineTo(g, b), e.stroke();
    }
  }
} }, de = Object.freeze(Object.defineProperty({ __proto__: null, default: ce }, Symbol.toStringTag, { value: "Module" })), fe = { name: "DNA Helix Spectrogram", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { strandColor: p = "hsla({hue}, 70%, 50%, 0.8)", barColor: _ = "hsla({hue}, 70%, 50%, 0.3)", backgroundColor: d = "rgb(20, 20, 20)", strandCount: c = 2 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = d, e.fillRect(0, 0, t.width, t.height);
  const r = c, n = 2, l = a / r;
  for (let o = 0; o < r; o++) {
    e.beginPath();
    for (let i = 0; i < l; i++) {
      const u = Math.floor(i + o * l), h = s[u] / 256, g = i / l, b = g * t.width, S = Math.PI * o, v = t.height / 2 + Math.sin(g * Math.PI * 2 * n + S) * 100 * (0.5 + h * 0.5);
      if (i === 0 ? e.moveTo(b, v) : e.lineTo(b, v), o === 0) {
        const M = t.height / 2 + Math.sin(g * Math.PI * 2 * n + Math.PI) * 100 * (0.5 + h * 0.5);
        e.fillStyle = _.replace("{hue}", `${u * 360 / a}`), e.fillRect(b, v, 2, M - v);
      }
    }
    e.strokeStyle = p.replace("{hue}", `${o * 180}`), e.lineWidth = 3, e.stroke();
  }
} }, pe = Object.freeze(Object.defineProperty({ __proto__: null, default: fe }, Symbol.toStringTag, { value: "Module" })), ge = { name: "DNA Helix", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { lineColor: p = "hsla({hue}, 70%, 50%, {alpha})", backgroundColor: _ = "rgb(20, 20, 20)", frequency: d = 0.02, amplitudeScale: c = 100 } = m;
  if (y === "frequency") {
    f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
    for (let r = 0; r < a; r++) {
      const n = r * 5, l = Math.sin(n * d) * c, o = Math.sin(n * d + Math.PI) * c, i = n + t.width / 4, u = t.height / 2 + l, h = n + t.width / 4, g = t.height / 2 + o, b = s[r] / 256;
      e.strokeStyle = p.replace("{hue}", `${r}`).replace("{alpha}", `${b}`), e.beginPath(), e.moveTo(i, u), e.lineTo(h, g), e.stroke();
    }
  }
} }, ye = Object.freeze(Object.defineProperty({ __proto__: null, default: ge }, Symbol.toStringTag, { value: "Module" })), _e = { name: "Fire Spectrum", dataType: "time", draw: function(f, t, e, a, s, y, m = {}) {
  const { gradientColors: p = [{ stop: 0, color: "#ff0000" }, { stop: 0.5, color: "#ff8c00" }, { stop: 1, color: "#ffff00" }], backgroundColor: _ = "rgba(0, 0, 0, 0.2)", lineWidth: d = 3, glowIntensity: c = 0.5 } = m;
  if (y !== "time") return;
  f.getByteTimeDomainData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = e.createLinearGradient(0, 0, 0, t.height);
  p.forEach(({ stop: o, color: i }) => r.addColorStop(o, i)), e.lineWidth = d, e.strokeStyle = r, e.shadowBlur = 10 * c, e.shadowColor = "#ff8c00", e.beginPath();
  const n = t.width / a;
  let l = 0;
  for (let o = 0; o < a; o++) {
    const u = s[o] / 128 * t.height / 2;
    o === 0 ? e.moveTo(l, u) : e.lineTo(l, u), l += n;
  }
  e.stroke(), e.shadowBlur = 0;
} }, me = Object.freeze(Object.defineProperty({ __proto__: null, default: _e }, Symbol.toStringTag, { value: "Module" })), be = { name: "Flower Spectrogram", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { pointColor: p = "hsla({hue}, 80%, 50%, 0.6)", backgroundColor: _ = "rgb(20, 20, 20)", pointSize: d = 3, petalCount: c = 12 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.width / 2, n = t.height / 2;
  for (let l = 0; l < a; l++) {
    const o = s[l] / 256, i = l * 2 * Math.PI / a, u = Math.min(r, n) * o, h = i * c, g = r + u * Math.cos(h), b = n + u * Math.sin(h);
    e.fillStyle = p.replace("{hue}", `${l * 360 / a}`), e.beginPath(), e.arc(g, b, d, 0, 2 * Math.PI), e.fill();
  }
} }, Se = Object.freeze(Object.defineProperty({ __proto__: null, default: be }, Symbol.toStringTag, { value: "Module" })), Pe = { name: "Fluid Dynamics", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { particleColor: p = "hsla({hue}, 80%, 50%, {alpha})", backgroundColor: _ = "rgba(20, 20, 20, 0.2)", particleSize: d = 15, particleLife: c = 0.99, particleCount: r = 100, velocityScale: n = 2 } = m;
  if (y !== "frequency") return;
  let l = T.get("fluidSpectrogram") || {};
  l.particles || (l.particles = new Array(r).fill(null).map(() => ({ x: t.width / 2 + Math.cos(Math.random() * 2 * Math.PI) * 100, y: t.height / 2 + Math.sin(Math.random() * 2 * Math.PI) * 100, vx: (Math.random() - 0.5) * n, vy: (Math.random() - 0.5) * n, life: 1 })), T.set("fluidSpectrogram", l)), f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height), l.particles.forEach((o, i) => {
    const u = i % a, h = s[u] / 256;
    o.x += o.vx * (1 + h * n), o.y += o.vy * (1 + h * n), o.life *= c, (o.x < 0 || o.x > t.width) && (o.vx *= -1), (o.y < 0 || o.y > t.height) && (o.vy *= -1), o.life < 0.01 && (o.x = t.width / 2 + Math.cos(Math.random() * 2 * Math.PI) * 100, o.y = t.height / 2 + Math.sin(Math.random() * 2 * Math.PI) * 100, o.vx = (Math.random() - 0.5) * n, o.vy = (Math.random() - 0.5) * n, o.life = 1), e.fillStyle = p.replace("{hue}", `${u * 360 / a}`).replace("{alpha}", `${o.life * h}`), e.beginPath(), e.arc(o.x, o.y, d * o.life * (0.5 + h * 0.5), 0, Math.PI * 2), e.fill();
  });
} }, ve = Object.freeze(Object.defineProperty({ __proto__: null, default: Pe }, Symbol.toStringTag, { value: "Module" })), Me = { name: "Fluid Wave", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { waveColor: p = "hsla({hue}, 70%, 50%, {alpha})", backgroundColor: _ = "rgb(20, 20, 20)", layerCount: d = 4, lineWidth: c = 3 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = d;
  for (let n = 0; n < r; n++) {
    e.beginPath();
    const l = n * t.height / r;
    for (let i = 0; i <= a; i++) {
      const u = i / a * t.width, h = i % a, g = s[h] / 256, b = Math.sin(i * 0.1 + n * 0.5) * 30 * g, S = Math.cos(i * 0.05 + n * 0.3) * 20 * g, v = l + b + S;
      i === 0 ? e.moveTo(u, v) : e.lineTo(u, v);
    }
    const o = e.createLinearGradient(0, l - 50, 0, l + 50);
    o.addColorStop(0, p.replace("{hue}", `${n * 90}`).replace("{alpha}", "0")), o.addColorStop(0.5, p.replace("{hue}", `${n * 90}`).replace("{alpha}", "0.3")), o.addColorStop(1, p.replace("{hue}", `${n * 90}`).replace("{alpha}", "0")), e.strokeStyle = o, e.lineWidth = c, e.stroke();
  }
} }, we = Object.freeze(Object.defineProperty({ __proto__: null, default: Me }, Symbol.toStringTag, { value: "Module" })), ze = { name: "Fractal Tree", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { branchColor: p = "hsla({hue}, 70%, 50%, {alpha})", backgroundColor: _ = "rgb(20, 20, 20)", branchDepth: d = 9, branchLength: c = 100 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = (l, o, i, u, h, g) => {
    if (h === 0) return;
    const b = l + i * Math.cos(u), S = o - i * Math.sin(u);
    e.strokeStyle = p.replace("{hue}", `${h * 30}`).replace("{alpha}", `${g}`), e.lineWidth = h, e.beginPath(), e.moveTo(l, o), e.lineTo(b, S), e.stroke(), r(b, S, i * 0.7, u + g, h - 1, g), r(b, S, i * 0.7, u - g, h - 1, g);
  }, n = s[0] / 256;
  r(t.width / 2, t.height, c, Math.PI / 2, d, n);
} }, Te = Object.freeze(Object.defineProperty({ __proto__: null, default: ze }, Symbol.toStringTag, { value: "Module" })), Ce = { name: "Fracture Spectrogram", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { segmentColor: p = "hsla({hue}, {saturation}%, 50%, {alpha})", backgroundColor: _ = "rgb(20, 20, 20)", segmentCount: d = 16, layerCount: c = 4 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = d, n = c;
  for (let l = 0; l < n; l++) {
    const o = (l + 1) * Math.min(t.width, t.height) / (n * 2);
    for (let i = 0; i < r; i++) {
      const u = (l * r + i) % a, h = s[u] / 256, g = i * 2 * Math.PI / r + l * Math.PI / (n * 2), b = (i + 1) * 2 * Math.PI / r + l * Math.PI / (n * 2);
      e.beginPath(), e.arc(t.width / 2, t.height / 2, o * (1 + h * 0.3), g, b), e.strokeStyle = p.replace("{hue}", `${u * 360 / a}`).replace("{saturation}", `${70 + h * 30}`).replace("{alpha}", `${0.3 + h * 0.7}`), e.lineWidth = 2 + h * 4, e.stroke(), h > 0.5 && (e.beginPath(), e.moveTo(t.width / 2, t.height / 2), e.lineTo(t.width / 2 + o * Math.cos(g), t.height / 2 + o * Math.sin(g)), e.strokeStyle = p.replace("{hue}", `${u * 360 / a}`).replace("{saturation}", "70").replace("{alpha}", `${h - 0.5}`), e.stroke());
    }
  }
} }, Oe = Object.freeze(Object.defineProperty({ __proto__: null, default: Ce }, Symbol.toStringTag, { value: "Module" })), Ie = { name: "Fractured Circle", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { segmentColor: p = "hsl({hue}, 70%, 50%)", backgroundColor: _ = "rgb(20, 20, 20)", segmentCount: d = 32, lineWidth: c = 3 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.width / 2, n = t.height / 2, l = d;
  for (let o = 0; o < l; o++) {
    const i = Math.floor(o / l * a), u = s[i] / 256, h = o * 2 * Math.PI / l, g = (o + 1) * 2 * Math.PI / l, b = Math.min(r, n) * (0.5 + u * 0.5);
    e.beginPath(), e.arc(r, n, b, h, g), e.strokeStyle = p.replace("{hue}", `${o * 360 / l}`), e.lineWidth = c + u * 5, e.stroke();
  }
} }, Re = Object.freeze(Object.defineProperty({ __proto__: null, default: Ie }, Symbol.toStringTag, { value: "Module" })), ke = { name: "Fractured Prism", dataType: "time", draw: function(f, t, e, a, s, y, m = {}) {
  const { lineColor: p = "hsla({hue}, 70%, 50%, 0.6)", backgroundColor: _ = "rgba(0, 0, 0, 0.2)", layerCount: d = 3, displacementScale: c = 30, jitterInterval: r = 5, jitterAmplitude: n = 5 } = m;
  if (y !== "time") return;
  f.getByteTimeDomainData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const l = t.height / 2, o = t.width / a;
  for (let i = 0; i < d; i++) {
    let u = 0;
    e.beginPath(), e.strokeStyle = p.replace("{hue}", `${120 * i}`), e.lineWidth = 2;
    for (let h = 0; h < a; h++) {
      const g = s[h] / 128, b = Math.sin(h * 0.05 + i * Math.PI / 3) * c, S = l + g * b;
      h === 0 ? e.moveTo(u, S) : h % r === 0 ? e.lineTo(u + Math.random() * n, S + Math.random() * n) : e.lineTo(u, S), u += o;
    }
    e.stroke();
  }
} }, qe = Object.freeze(Object.defineProperty({ __proto__: null, default: ke }, Symbol.toStringTag, { value: "Module" })), je = { name: "Frequency Flower", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { lineColor: p = "hsl({hue}, 100%, 50%)", backgroundColor: _ = "rgba(0, 0, 0, 0.1)", lineWidth: d = 2, petalCount: c = 8 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.width / 2, n = t.height / 2, l = Math.min(r, n) * 0.3;
  e.beginPath();
  for (let o = 0; o < a; o++) {
    const i = o * 2 * Math.PI / a, u = s[o] / 256, h = l + u * l * Math.sin(c * i), g = r + h * Math.cos(i), b = n + h * Math.sin(i);
    o === 0 ? e.moveTo(g, b) : e.lineTo(g, b);
  }
  e.closePath(), e.strokeStyle = p.replace("{hue}", `${Date.now() / 30 % 360}`), e.lineWidth = d, e.stroke();
} }, Ee = Object.freeze(Object.defineProperty({ __proto__: null, default: je }, Symbol.toStringTag, { value: "Module" })), $e = { name: "Frequency Mesh", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { lineColor: p = "rgba(0, 255, 255, 0.5)", backgroundColor: _ = "black", pointCount: d = 20, lineWidth: c = 1 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = [], n = d;
  for (let l = 0; l < n; l++) {
    const o = Math.floor(l * a / n), i = s[o] / 256;
    r.push({ x: t.width * l / (n - 1), y: t.height / 2 + (i - 0.5) * t.height });
  }
  e.strokeStyle = p, e.lineWidth = c, e.beginPath();
  for (let l = 0; l < r.length; l++) for (let o = l + 1; o < r.length; o++) e.moveTo(r[l].x, r[l].y), e.lineTo(r[o].x, r[o].y);
  e.stroke();
} }, De = Object.freeze(Object.defineProperty({ __proto__: null, default: $e }, Symbol.toStringTag, { value: "Module" })), Be = { name: "Frequency Stars", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { starColor: p = "hsl({hue}, 100%, 80%)", backgroundColor: _ = "rgba(0, 0, 0, 0.2)", starSize: d = 4, threshold: c = 128 } = m;
  if (y === "frequency") {
    f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
    for (let r = 0; r < a; r++) {
      const n = s[r];
      if (n > c) {
        const l = Math.random() * t.width, o = Math.random() * t.height, i = (n - c) / 32 * d;
        e.fillStyle = p.replace("{hue}", `${r * 360 / a}`), e.beginPath();
        for (let u = 0; u < 5; u++) {
          const h = u * 4 * Math.PI / 5, g = l + i * Math.cos(h), b = o + i * Math.sin(h);
          u === 0 ? e.moveTo(g, b) : e.lineTo(g, b);
        }
        e.closePath(), e.fill();
      }
    }
  }
} }, Ve = Object.freeze(Object.defineProperty({ __proto__: null, default: Be }, Symbol.toStringTag, { value: "Module" })), We = { name: "Galaxy Formation", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { particleColor: p = "hsla({hue}, {saturation}%, {lightness}%, {alpha})", backgroundColor: _ = "rgb(20, 20, 20)", armCount: d = 4, particleSize: c = 4 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.width / 2, n = t.height / 2, l = d, o = a / l;
  for (let i = 0; i < l; i++) for (let u = 0; u < o; u++) {
    const h = Math.floor(i * o + u), g = s[h] / 256, b = u / o * 2 * Math.PI + i * 2 * Math.PI / l, S = u / o * 5, v = u / o * Math.min(r, n) * (0.3 + g * 0.7), M = r + v * Math.cos(b + S), w = n + v * Math.sin(b + S), z = 1 + g * c;
    e.fillStyle = p.replace("{hue}", `${h * 360 / a}`).replace("{saturation}", `${70 + g * 30}`).replace("{lightness}", `${50 + g * 50}`).replace("{alpha}", `${0.1 + g * 0.6}`), e.beginPath(), e.arc(M, w, z, 0, 2 * Math.PI), e.fill();
  }
} }, Fe = Object.freeze(Object.defineProperty({ __proto__: null, default: We }, Symbol.toStringTag, { value: "Module" })), Ae = { name: "Galaxy Spectrogram v2", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { particleColor: p = "hsla({hue}, {saturation}%, {lightness}%, {alpha})", backgroundColor: _ = "rgb(20, 20, 20)", armCount: d = 4, particleSize: c = 4 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.width / 2, n = t.height / 2, l = d, o = a / l;
  for (let i = 0; i < l; i++) for (let u = 0; u < o; u++) {
    const h = Math.floor(i * o + u), g = s[h] / 256, b = u / o * Math.min(r, n), S = i * (2 * Math.PI / l) + u / o * 4 * Math.PI, v = r + b * Math.cos(S), M = n + b * Math.sin(S), w = 1 + g * c;
    e.fillStyle = p.replace("{hue}", `${h * 360 / a}`).replace("{saturation}", `${70 + g * 30}`).replace("{lightness}", `${50 + g * 50}`).replace("{alpha}", `${0.1 + g * 0.4}`), e.beginPath(), e.arc(v, M, w, 0, 2 * Math.PI), e.fill();
  }
} }, Ye = Object.freeze(Object.defineProperty({ __proto__: null, default: Ae }, Symbol.toStringTag, { value: "Module" })), Xe = { name: "Geometric Pulse", dataType: "time", draw: function(f, t, e, a, s, y, m = {}) {
  const { shapeColor: p = "hsla({hue}, 80%, 50%, {alpha})", backgroundColor: _ = "rgba(0, 0, 0, 0.2)", shapeInterval: d = 4, heightScale: c = 0.3 } = m;
  if (y !== "time") return;
  f.getByteTimeDomainData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.height / 2, n = t.width / a;
  let l = 0;
  for (let o = 0; o < a; o += d) {
    const i = s[o] / 128, u = i * t.height * c;
    e.beginPath(), e.fillStyle = p.replace("{hue}", `${o / a * 360}`).replace("{alpha}", `${i}`), e.moveTo(l, r), e.lineTo(l + n * 2, r - u), e.lineTo(l + n * 4, r), e.lineTo(l + n * 2, r + u), e.closePath(), e.fill(), l += n * d;
  }
} }, Ge = Object.freeze(Object.defineProperty({ __proto__: null, default: Xe }, Symbol.toStringTag, { value: "Module" })), He = { name: "Wave Interference Spectrogram", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { pointColor: p = "hsla({hue}, 70%, 50%, {alpha})", backgroundColor: _ = "rgb(20, 20, 20)", pointSize: d = 2, waveSpacing: c = 20 } = m;
  if (y === "frequency") {
    f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
    for (let r = 0; r < a; r++) {
      const n = r * t.width / a, l = s[r] / 256;
      for (let o = 0; o < t.height; o += c) {
        const i = Math.sin(n / 50 + l * 10) * 10, u = Math.cos(n / 30) * 10, h = i + u;
        e.fillStyle = p.replace("{hue}", `${o + h * 10}`).replace("{alpha}", `${l}`), e.beginPath(), e.arc(n, o + h, d, 0, 2 * Math.PI), e.fill();
      }
    }
  }
} }, Le = Object.freeze(Object.defineProperty({ __proto__: null, default: He }, Symbol.toStringTag, { value: "Module" })), Ne = { name: "Kaleidoscope", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { pointColor: p = "hsl({hue}, 100%, 50%)", backgroundColor: _ = "rgba(0, 0, 0, 0.1)", segmentCount: d = 8, pointSize: c = 2 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s);
  const r = t.width / 2, n = t.height / 2, l = d;
  e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  for (let o = 0; o < a; o += 4) {
    const u = s[o] / 256 * Math.min(r, n);
    for (let h = 0; h < l; h++) {
      const g = h * 2 * Math.PI / l + o * Math.PI / a, b = r + u * Math.cos(g), S = n + u * Math.sin(g);
      e.fillStyle = p.replace("{hue}", `${o * 360 / a}`), e.beginPath(), e.arc(b, S, c, 0, 2 * Math.PI), e.fill();
    }
  }
} }, Ke = Object.freeze(Object.defineProperty({ __proto__: null, default: Ne }, Symbol.toStringTag, { value: "Module" })), Qe = { name: "Kaleidoscope Spectrogram", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { pointColor: p = "hsla({hue}, 85%, 50%, 0.5)", backgroundColor: _ = "rgb(20, 20, 20)", mirrorCount: d = 8, pointSize: c = 3 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.width / 2, n = t.height / 2, l = d;
  for (let o = 0; o < a; o++) {
    const i = s[o] / 256, u = o * 2 * Math.PI / a, h = Math.min(r, n) * i;
    for (let g = 0; g < l; g++) {
      const b = u + g * 2 * Math.PI / l, S = r + h * Math.cos(b), v = n + h * Math.sin(b);
      e.fillStyle = p.replace("{hue}", `${o * 360 / a}`), e.beginPath(), e.arc(S, v, c, 0, 2 * Math.PI), e.fill();
    }
  }
} }, Ue = Object.freeze(Object.defineProperty({ __proto__: null, default: Qe }, Symbol.toStringTag, { value: "Module" })), Ze = { name: "Layered Ripple Voronoi", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { rippleColor: p = "hsla({hue}, 70%, 50%, 0.5)", pointColor: _ = "hsla({hue}, 80%, 50%, 0.6)", backgroundColor: d = "rgba(0, 0, 0, 0.2)", pointCount: c = 20, pixelSize: r = 4, radiusScale: n = 0.8 } = m;
  if (y !== "frequency") return;
  let l = T.get("LayeredRippleVoronoi") || {};
  l.points || (l = { points: new Array(c).fill(null).map((u, h) => ({ x: 0, y: 0, color: "", freqIndex: Math.floor(h * 1024 / c) })), numPoints: c, pixelSize: r }, T.set("LayeredRippleVoronoi", l)), f.getByteFrequencyData(s);
  const o = t.width / 2, i = t.height / 2;
  e.fillStyle = d, e.fillRect(0, 0, t.width, t.height);
  for (let u = 0; u < a; u += 4) {
    const g = s[u] / 256 * Math.min(o, i) * n;
    e.beginPath(), e.arc(o, i, g, 0, 2 * Math.PI), e.strokeStyle = p.replace("{hue}", `${u * 360 / a}`), e.lineWidth = 2, e.stroke();
  }
  for (let u = 0; u < l.numPoints; u++) {
    const h = l.points[u], g = s[h.freqIndex], b = u * 2 * Math.PI / l.numPoints, S = g / 256 * Math.min(o, i) * 0.6;
    h.x = o + Math.cos(b) * S, h.y = i + Math.sin(b) * S, h.color = _.replace("{hue}", `${h.freqIndex * 360 / a}`);
  }
  for (let u = 0; u < t.width; u += l.pixelSize) for (let h = 0; h < t.height; h += l.pixelSize) {
    let g = 1 / 0, b = null;
    for (let S of l.points) {
      const v = u - S.x, M = h - S.y, w = v * v + M * M;
      w < g && (g = w, b = S);
    }
    b && (e.fillStyle = b.color, e.fillRect(u, h, l.pixelSize, l.pixelSize));
  }
} }, Je = Object.freeze(Object.defineProperty({ __proto__: null, default: Ze }, Symbol.toStringTag, { value: "Module" })), xe = { name: "Liquid Metal", dataType: "time", draw: function(f, t, e, a, s, y, m = {}) {
  const { gradientColors: p = [{ stop: 0, color: "#666" }, { stop: 0.5, color: "#fff" }, { stop: 1, color: "#888" }], backgroundColor: _ = "rgba(20, 20, 20, 0.2)", lineWidth: d = 4, curveAmplitude: c = 20 } = m;
  if (y !== "time") return;
  f.getByteTimeDomainData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = e.createLinearGradient(0, 0, 0, t.height);
  p.forEach(({ stop: o, color: i }) => r.addColorStop(o, i)), e.lineWidth = d, e.strokeStyle = r, e.beginPath();
  const n = t.width / a;
  let l = 0;
  for (let o = 0; o < a; o++) {
    const u = s[o] / 128 * t.height / 2;
    if (o === 0) e.moveTo(l, u);
    else {
      const h = l - n / 2, g = u + Math.sin(Date.now() / 1e3 + o / 20) * c;
      e.quadraticCurveTo(h, g, l, u);
    }
    l += n;
  }
  e.stroke();
} }, et = Object.freeze(Object.defineProperty({ __proto__: null, default: xe }, Symbol.toStringTag, { value: "Module" })), tt = { name: "Matrix Rain", dataType: "time", draw: function(f, t, e, a, s, y, m = {}) {
  const { lineColor: p = "#0f0", textColor: _ = "#0f0", backgroundColor: d = "rgba(0, 20, 0, 0.1)", lineWidth: c = 2, textInterval: r = 20, fontSize: n = 12 } = m;
  if (y !== "time") return;
  f.getByteTimeDomainData(s), e.fillStyle = d, e.fillRect(0, 0, t.width, t.height), e.lineWidth = c, e.strokeStyle = p, e.beginPath();
  const l = t.width / a;
  let o = 0;
  for (let i = 0; i < a; i++) {
    const h = s[i] / 128 * t.height / 2;
    i === 0 ? e.moveTo(o, h) : (e.lineTo(o, h), i % r === 0 && (e.fillStyle = _, e.font = `${n}px monospace`, e.fillText(String.fromCharCode(33 + Math.random() * 93), o, h))), o += l;
  }
  e.stroke();
} }, ot = Object.freeze(Object.defineProperty({ __proto__: null, default: tt }, Symbol.toStringTag, { value: "Module" })), lt = { name: "Cosmic Nebula", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { nebulaColor: p = "hsla({hue}, 80%, 50%, {alpha})", backgroundColor: _ = "rgb(20, 20, 20)", radiusScale: d = 200, pointSize: c = 50 } = m;
  if (y === "frequency") {
    f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height), e.createRadialGradient(t.width / 2, t.height / 2, 0, t.width / 2, t.height / 2, t.width / 2);
    for (let r = 0; r < a; r++) {
      const n = s[r] / 256, l = r * Math.PI * 2 / a, o = t.width / 2 + Math.cos(l) * (n * d), i = t.height / 2 + Math.sin(l) * (n * d);
      e.fillStyle = p.replace("{hue}", `${270 + r}`).replace("{alpha}", `${n * 0.1}`), e.beginPath(), e.arc(o, i, n * c, 0, Math.PI * 2), e.fill();
    }
  }
} }, it = Object.freeze(Object.defineProperty({ __proto__: null, default: lt }, Symbol.toStringTag, { value: "Module" })), rt = { name: "Neon Wave", dataType: "time", draw: function(f, t, e, a, s, y, m = {}) {
  const { lineColor: p = "hsl({hue}, 100%, 50%)", backgroundColor: _ = "rgba(0, 0, 0, 0.2)", lineWidth: d = 3, glowIntensity: c = 0.5 } = m;
  if (y !== "time") return;
  f.getByteTimeDomainData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height), e.lineWidth = d, e.strokeStyle = p.replace("{hue}", `${Date.now() % 360}`), e.shadowBlur = 10 * c, e.shadowColor = e.strokeStyle, e.beginPath();
  const r = t.width / a;
  let n = 0;
  for (let l = 0; l < a; l++) {
    const i = s[l] / 128 * t.height / 2;
    l === 0 ? e.moveTo(n, i) : e.lineTo(n, i), n += r;
  }
  e.stroke(), e.shadowBlur = 0;
} }, nt = Object.freeze(Object.defineProperty({ __proto__: null, default: rt }, Symbol.toStringTag, { value: "Module" })), at = { name: "Neural Network Visualization", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { lineColor: p = "rgba(0, 255, 255, {alpha})", backgroundColor: _ = "rgb(20, 20, 20)", connectionDistance: d = 100 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const c = [], r = Math.floor(a / 4);
  for (let n = 0; n < r; n++) {
    const l = t.width / r * n, o = t.height / 2 + (s[n] - 128) * 1.5;
    c.push({ x: l, y: o });
    for (let i = 0; i < c.length; i++) {
      const u = Math.hypot(c[i].x - l, c[i].y - o);
      if (u < d) {
        const h = 1 - u / d;
        e.strokeStyle = p.replace("{alpha}", `${h}`), e.beginPath(), e.moveTo(l, o), e.lineTo(c[i].x, c[i].y), e.stroke();
      }
    }
  }
} }, st = Object.freeze(Object.defineProperty({ __proto__: null, default: at }, Symbol.toStringTag, { value: "Module" })), ut = { name: "Neural Network Spectrogram", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { nodeColor: p = "hsla({hue}, 80%, 50%, {alpha})", lineColor: _ = "hsla({hue}, 70%, 50%, {alpha})", backgroundColor: d = "rgb(20, 20, 20)", nodesPerLayer: c = 8 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = d, e.fillRect(0, 0, t.width, t.height);
  const r = 3, n = t.width / (r + 1), l = t.height / (c + 1), o = [];
  for (let i = 0; i < r; i++) for (let u = 0; u < c; u++) {
    const h = (i * c + u) % a, g = s[h] / 256;
    o.push({ x: n * (i + 1), y: l * (u + 1), amplitude: g });
  }
  for (let i = 0; i < o.length; i++) {
    const u = o[i], h = Math.floor(i / c);
    if (h < r - 1) for (let g = 0; g < c; g++) {
      const b = (h + 1) * c + g, S = o[b], v = (u.amplitude + S.amplitude) / 2;
      e.beginPath(), e.moveTo(u.x, u.y), e.lineTo(S.x, S.y), e.strokeStyle = _.replace("{hue}", `${i * 360 / o.length}`).replace("{alpha}", `${0.1 + v * 0.3}`), e.lineWidth = v * 2, e.stroke();
    }
    e.fillStyle = p.replace("{hue}", `${i * 360 / o.length}`).replace("{alpha}", `${0.3 + u.amplitude * 0.7}`), e.beginPath(), e.arc(u.x, u.y, 3 + u.amplitude * 5, 0, 2 * Math.PI), e.fill();
  }
} }, ht = Object.freeze(Object.defineProperty({ __proto__: null, default: ut }, Symbol.toStringTag, { value: "Module" })), ct = { name: "Ocean Waves", dataType: "time", draw: function(f, t, e, a, s, y, m = {}) {
  const { lineColor: p = "rgba(0, 150, 255, 0.8)", backgroundColor: _ = "rgba(0, 50, 100, 0.2)", lineWidth: d = 4, curveDepth: c = 10 } = m;
  if (y !== "time") return;
  f.getByteTimeDomainData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height), e.lineWidth = d, e.strokeStyle = p, e.beginPath();
  const r = t.width / a;
  let n = 0;
  for (let l = 0; l < a; l++) {
    const i = s[l] / 128 * t.height / 2;
    l === 0 ? e.moveTo(n, i) : e.quadraticCurveTo(n - r / 2, i - c, n, i), n += r;
  }
  e.stroke();
} }, dt = Object.freeze(Object.defineProperty({ __proto__: null, default: ct }, Symbol.toStringTag, { value: "Module" })), ft = { name: "Organic Growth Spectrogram", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { pointColor: p = "hsla({hue}, 80%, 50%, {alpha})", backgroundColor: _ = "rgb(20, 20, 20)", pointSize: d = 5, growthAngle: c = 137.5 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.width / 2, n = t.height / 2;
  for (let l = 0; l < a; l++) {
    const o = l * c * Math.PI / 180, i = s[l] / 256, u = i * l / 2, h = r + u * Math.cos(o), g = n + u * Math.sin(o);
    e.fillStyle = p.replace("{hue}", `${l * 360 / a}`).replace("{alpha}", `${i}`), e.beginPath(), e.arc(h, g, i * d, 0, 2 * Math.PI), e.fill();
  }
} }, pt = Object.freeze(Object.defineProperty({ __proto__: null, default: ft }, Symbol.toStringTag, { value: "Module" })), gt = { name: "Oscilloscope", dataType: "time", draw: function(f, t, e, a, s, y, m = {}) {
  const { lineColor: p = "rgb(0, 255, 0)", backgroundColor: _ = "rgb(20, 20, 20)", lineWidth: d = 3, glowIntensity: c = 0.5 } = m;
  if (y !== "time") return;
  f.getByteTimeDomainData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height), e.lineWidth = d, e.strokeStyle = p, e.shadowBlur = 10 * c, e.shadowColor = p, e.beginPath();
  const r = t.width / a;
  let n = 0;
  for (let l = 0; l < a; l++) {
    const i = s[l] / 128 * t.height / 2;
    l === 0 ? e.moveTo(n, i) : e.lineTo(n, i), n += r;
  }
  e.lineTo(t.width, t.height / 2), e.stroke(), e.shadowBlur = 0;
} }, yt = Object.freeze(Object.defineProperty({ __proto__: null, default: gt }, Symbol.toStringTag, { value: "Module" })), _t = { name: "Particle Field", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { particleColor: p = "hsla({hue}, {saturation}%, {lightness}%, {alpha})", backgroundColor: _ = "rgb(20, 20, 20)", particleCount: d = 100, baseRadius: c = 0.25 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = d, n = Math.min(t.width, t.height) * c;
  for (let l = 0; l < r; l++) {
    const o = Math.floor(l / r * a), i = s[o] / 256, u = l * 2 * Math.PI / r, h = n + i * 100, g = t.width / 2 + h * Math.cos(u), b = t.height / 2 + h * Math.sin(u), S = 2 + i * 5;
    e.fillStyle = p.replace("{hue}", `${o * 360 / a}`).replace("{saturation}", `${80 + i * 20}`).replace("{lightness}", `${50 + i * 50}`).replace("{alpha}", `${0.3 + i * 0.7}`), e.beginPath(), e.arc(g, b, S, 0, 2 * Math.PI), e.fill();
  }
} }, mt = Object.freeze(Object.defineProperty({ __proto__: null, default: _t }, Symbol.toStringTag, { value: "Module" })), bt = { name: "Pixel Dust", dataType: "time", draw: function(f, t, e, a, s, y, m = {}) {
  const { pixelColor: p = "hsl({hue}, 70%, 50%)", backgroundColor: _ = "rgba(0, 0, 0, 0.2)", pixelSizeScale: d = 8, pixelOpacity: c = 1 } = m;
  if (y !== "time") return;
  f.getByteTimeDomainData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.width / a;
  let n = 0;
  for (let l = 0; l < a; l++) {
    const o = s[l] / 128, i = o * t.height / 2, u = Math.abs(o - 1) * d;
    e.fillStyle = p.replace("{hue}", `${l / a * 360}`).replace("{alpha}", `${c}`), e.fillRect(n, i - u / 2, u, u), n += r;
  }
} }, St = Object.freeze(Object.defineProperty({ __proto__: null, default: bt }, Symbol.toStringTag, { value: "Module" })), Pt = { name: "Pulsing Orbs", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { orbColor: p = "hsl({hue}, 80%, 50%)", backgroundColor: _ = "rgba(0, 0, 0, 0.2)", orbCount: d = 12, maxRadius: c = 0.5 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.width / d;
  for (let n = 0; n < d; n++) {
    const l = Math.floor(n * a / d), i = s[l] / 256 * r * c;
    e.fillStyle = p.replace("{hue}", `${n * 360 / d}`), e.beginPath(), e.arc(r * (n + 0.5), t.height / 2, i, 0, 2 * Math.PI), e.fill();
  }
} }, vt = Object.freeze(Object.defineProperty({ __proto__: null, default: Pt }, Symbol.toStringTag, { value: "Module" })), Mt = { name: "Quantum Field", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { pointColor: p = "hsla({hue}, 90%, 50%, {alpha})", lineColor: _ = "rgba(255, 255, 255, {alpha})", backgroundColor: d = "rgba(20, 20, 20, 0.2)", fieldSize: c = 20, probabilityThreshold: r = 0.5 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = d, e.fillRect(0, 0, t.width, t.height);
  const n = Math.floor(t.width / c), l = Math.floor(t.height / c);
  for (let o = 0; o < n; o++) for (let i = 0; i < l; i++) {
    const u = Math.floor((o + i) % a), h = s[u] / 256;
    if (Math.random() * h > r) {
      const b = o * c + c / 2, S = i * c + c / 2;
      e.fillStyle = p.replace("{hue}", `${u * 360 / a}`).replace("{alpha}", `${h}`), e.beginPath(), e.arc(b, S, h * c * 0.5, 0, Math.PI * 2), e.fill(), o > 0 && i > 0 && (e.strokeStyle = _.replace("{alpha}", `${h * 0.2}`), e.beginPath(), e.moveTo(b, S), e.lineTo(b - c, S - c), e.stroke());
    }
  }
} }, wt = Object.freeze(Object.defineProperty({ __proto__: null, default: Mt }, Symbol.toStringTag, { value: "Module" })), zt = { name: "Rainbow Spiral", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { pointColor: p = "hsl({hue}, 100%, 50%)", backgroundColor: _ = "rgba(0, 0, 0, 0.1)", pointSize: d = 2, rotationSpeed: c = 1 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.width / 2, n = t.height / 2;
  for (let l = 0; l < a; l++) {
    const i = s[l] / 256 * Math.min(r, n), u = l * 2 * Math.PI / a + Date.now() / (1e3 / c), h = r + i * Math.cos(u), g = n + i * Math.sin(u);
    e.fillStyle = p.replace("{hue}", `${l * 360 / a}`), e.beginPath(), e.arc(h, g, d, 0, 2 * Math.PI), e.fill();
  }
} }, Tt = Object.freeze(Object.defineProperty({ __proto__: null, default: zt }, Symbol.toStringTag, { value: "Module" })), Ct = { name: "Ribbon Dance", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { ribbonColor: p = "hsla({hue}, 70%, 50%, 0.6)", backgroundColor: _ = "rgb(20, 20, 20)", ribbonCount: d = 3, lineWidth: c = 3 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = d, n = a / r;
  for (let l = 0; l < r; l++) {
    e.beginPath();
    for (let o = 0; o < n; o++) {
      const i = Math.floor(o + l * n), u = s[i] / 256, h = o / n * t.width, g = t.height / 2 + Math.sin(o * 0.1 + l * 2) * 100 * u;
      o === 0 ? e.moveTo(h, g) : e.lineTo(h, g);
    }
    e.strokeStyle = p.replace("{hue}", `${l * 120}`), e.lineWidth = c, e.stroke();
  }
} }, Ot = Object.freeze(Object.defineProperty({ __proto__: null, default: Ct }, Symbol.toStringTag, { value: "Module" })), It = { name: "Sacred Geometry", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { lineColor: p = "hsla({hue}, 70%, 50%, {alpha})", backgroundColor: _ = "rgba(20, 20, 20, 0.2)", layerCount: d = 5, radiusScale: c = 0.8, amplitudeScale: r = 0.3 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const n = t.width / 2, l = t.height / 2, o = Math.min(n, l) * c;
  for (let i = 0; i < d; i++) {
    const u = i * 3 + 3, h = o * (1 - i * 0.15);
    e.beginPath();
    for (let g = 0; g < u; g++) {
      const b = Math.floor(g * a / u), S = s[b] / 256, v = g * Math.PI * 2 / u, M = n + Math.cos(v) * (h * (1 + S * r)), w = l + Math.sin(v) * (h * (1 + S * r));
      g === 0 ? e.moveTo(M, w) : e.lineTo(M, w);
    }
    if (e.closePath(), e.strokeStyle = p.replace("{hue}", `${i * 72}`).replace("{alpha}", `${0.5 + i * 0.1}`), e.stroke(), i > 0) for (let g = 0; g < u; g++) {
      const b = Math.floor(g * a / u), S = s[b] / 256, v = g * Math.PI * 2 / u;
      e.beginPath(), e.moveTo(n, l);
      const M = n + Math.cos(v) * (h * (1 + S * r)), w = l + Math.sin(v) * (h * (1 + S * r));
      e.lineTo(M, w), e.strokeStyle = p.replace("{hue}", `${i * 72}`).replace("{alpha}", `${S * 0.3}`), e.stroke();
    }
  }
} }, Rt = Object.freeze(Object.defineProperty({ __proto__: null, default: It }, Symbol.toStringTag, { value: "Module" })), kt = { name: "Spectrum Ripple", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { rippleColor: p = "hsla({hue}, 100%, 50%, 0.5)", backgroundColor: _ = "rgba(0, 0, 0, 0.1)", lineWidth: d = 2, rippleStep: c = 4 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.width / 2, n = t.height / 2;
  for (let l = 0; l < a; l += c) {
    const i = s[l] / 256 * Math.min(r, n);
    e.beginPath(), e.arc(r, n, i, 0, 2 * Math.PI), e.strokeStyle = p.replace("{hue}", `${l * 360 / a}`), e.lineWidth = d, e.stroke();
  }
} }, qt = Object.freeze(Object.defineProperty({ __proto__: null, default: kt }, Symbol.toStringTag, { value: "Module" })), jt = { name: "Spiral Spectrogram", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { pointColor: p = "hsl({hue}, 100%, 50%)", backgroundColor: _ = "rgb(20, 20, 20)", pointSize: d = 5, spiralTightness: c = 0.1 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.width / 2, n = t.height / 2;
  let l = 10;
  for (let o = 0; o < a; o++) {
    const i = o * 2 * Math.PI / 64, u = s[o] / 256;
    l += c;
    const h = r + l * Math.cos(i), g = n + l * Math.sin(i);
    e.fillStyle = p.replace("{hue}", `${s[o]}`), e.beginPath(), e.arc(h, g, u * d, 0, 2 * Math.PI), e.fill();
  }
} }, Et = Object.freeze(Object.defineProperty({ __proto__: null, default: jt }, Symbol.toStringTag, { value: "Module" })), $t = { name: "Spiral Spectrogram v2", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { pointColor: p = "hsl({hue}, {saturation}%, 50%)", backgroundColor: _ = "rgb(20, 20, 20)", pointSize: d = 2, spiralTightness: c = 0.5 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.width / 2, n = t.height / 2, l = Math.min(r, n);
  for (let o = 0; o < a; o++) {
    const i = s[o] / 256, u = o * 2 * Math.PI / 64, h = o / a * l * c + i * 50, g = r + h * Math.cos(u), b = n + h * Math.sin(u);
    e.fillStyle = p.replace("{hue}", `${o * 360 / a}`).replace("{saturation}", `${i * 100}`), e.beginPath(), e.arc(g, b, d, 0, 2 * Math.PI), e.fill();
  }
} }, Dt = Object.freeze(Object.defineProperty({ __proto__: null, default: $t }, Symbol.toStringTag, { value: "Module" })), Bt = { name: "Star Field", dataType: "time", draw: function(f, t, e, a, s, y, m = {}) {
  const { lineColor: p = "rgba(255, 255, 255, 0.8)", starColor: _ = "rgba(255, 255, 255, {alpha})", backgroundColor: d = "rgba(0, 0, 20, 0.3)", lineWidth: c = 2, starInterval: r = 15, starSize: n = 2 } = m;
  if (y !== "time") return;
  f.getByteTimeDomainData(s), e.fillStyle = d, e.fillRect(0, 0, t.width, t.height), e.lineWidth = c, e.strokeStyle = p, e.beginPath();
  const l = t.width / a;
  let o = 0;
  for (let i = 0; i < a; i++) {
    const h = s[i] / 128 * t.height / 2;
    i === 0 ? e.moveTo(o, h) : e.lineTo(o, h), i % r === 0 && (e.fillStyle = _.replace("{alpha}", `${Math.random()}`), e.fillRect(o, Math.random() * t.height, n, n)), o += l;
  }
  e.stroke();
} }, Vt = Object.freeze(Object.defineProperty({ __proto__: null, default: Bt }, Symbol.toStringTag, { value: "Module" })), Wt = { name: "Tessellation Spectrogram", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { tileColor: p = "hsla({hue}, 70%, 50%, {alpha})", backgroundColor: _ = "rgb(20, 20, 20)", tileSize: d = 30, tileShape: c = "hexagon" } = m;
  if (y === "frequency") {
    f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
    for (let r = 0; r < a; r++) {
      const n = r % (t.width / d) * d, l = Math.floor(r / (t.width / d)) * d, o = s[r] / 256;
      if (e.fillStyle = p.replace("{hue}", `${o * 360}`).replace("{alpha}", `${o}`), e.beginPath(), c === "hexagon") for (let i = 0; i < 6; i++) {
        const u = i * Math.PI / 3, h = n + d * Math.cos(u), g = l + d * Math.sin(u);
        i === 0 ? e.moveTo(h, g) : e.lineTo(h, g);
      }
      else e.rect(n, l, d, d);
      e.closePath(), e.fill();
    }
  }
} }, Ft = Object.freeze(Object.defineProperty({ __proto__: null, default: Wt }, Symbol.toStringTag, { value: "Module" })), At = { name: "Top-Down Water Spectrogram", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { lineColor: p = "rgba(0, 255, 255, {alpha})", gradientColor: _ = "rgba(0, 255, 255, {alpha})", backgroundColor: d = "rgba(20, 20, 20, 0.2)", ringCount: c = 10, radiusScale: r = 0.4, waveAmplitude: n = 30, segmentStep: l = 4 } = m;
  if (y !== "frequency") return;
  let o = T.get("topwaterSpectrogram") || {};
  if (!o.config) {
    o.config = { sinTable: new Float32Array(360), initialized: false };
    for (let S = 0; S < 360; S++) o.config.sinTable[S] = Math.sin(S * Math.PI / 180);
    o.config.initialized = true, T.set("topwaterSpectrogram", o);
  }
  f.getByteFrequencyData(s), e.fillStyle = d, e.fillRect(0, 0, t.width, t.height);
  const i = Date.now() / 1e3, u = Math.min(t.width, t.height) * r, h = t.width / 2, g = t.height / 2, b = Math.floor(a / l);
  for (let S = 0; S < c; S++) {
    const v = u - S * 20, M = 1 - S * 0.1;
    e.beginPath();
    for (let O = 0; O <= b; O++) {
      const R = O / b * Math.PI * 2, D = O % a, B = s[D], V = o.config.sinTable[Math.floor((i * 2 + S + O / 5) % (Math.PI * 2) * (180 / Math.PI)) % 360] * 10, W = B / 255 * n + V, q = v + W, j = h + Math.cos(R) * q, E = g + Math.sin(R) * q;
      O === 0 ? e.moveTo(j, E) : e.lineTo(j, E);
    }
    e.closePath(), e.strokeStyle = p.replace("{alpha}", `${M * 0.8}`), e.lineWidth = 2, e.stroke();
    const w = Math.max(0, v - 20);
    let z = Math.max(0, v + 20);
    z < w && (z = w);
    const C = e.createRadialGradient(h, g, w, h, g, z);
    C.addColorStop(0, _.replace("{alpha}", `${M * 0.1}`)), C.addColorStop(1, _.replace("{alpha}", "0")), e.fillStyle = C, e.fill();
  }
} }, Yt = Object.freeze(Object.defineProperty({ __proto__: null, default: At }, Symbol.toStringTag, { value: "Module" })), Xt = { name: "Voltaic Arcs", dataType: "time", draw: function(f, t, e, a, s, y, m = {}) {
  const { lineColor: p = "rgba(0, {green}, {blue}, 0.8)", backgroundColor: _ = "rgba(0, 0, 0, 0.2)", lineWidth: d = 2, arcInterval: c = 10, arcHeightScale: r = 50 } = m;
  if (y !== "time") return;
  f.getByteTimeDomainData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const n = t.width / a;
  let l = 0;
  e.lineWidth = d, e.strokeStyle = p.replace("{green}", `${Math.floor(255 * (s[0] / 128))}`).replace("{blue}", `${Math.floor(255 * (s[0] / 128))}`), e.beginPath();
  for (let o = 0; o < a; o++) {
    const i = s[o] / 128;
    let u = i * t.height / 2;
    if (o % c === 0) {
      const h = Math.random() * r * i;
      e.lineTo(l, u), e.lineTo(l + 5, u - h), e.lineTo(l + 10, u);
    } else o === 0 ? e.moveTo(l, u) : e.lineTo(l, u);
    o % 20 === 0 && (e.strokeStyle = p.replace("{green}", `${Math.floor(255 * i)}`).replace("{blue}", `${Math.floor(255 * i)}`)), l += n;
  }
  e.stroke();
} }, Gt = Object.freeze(Object.defineProperty({ __proto__: null, default: Xt }, Symbol.toStringTag, { value: "Module" })), Ht = { name: "Voronoi Spectrum", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { pointCount: p = 20, pixelSize: _ = 4, backgroundColor: d = "rgba(0, 0, 0, 0.1)", pointColor: c = "hsl({hue}, 100%, {lightness}%)" } = m;
  if (y !== "frequency") return;
  let r = T.get("voronoiSpectrum") || {};
  r.points || (r = { points: new Array(p).fill(null).map((n, l) => ({ x: 0, y: 0, color: "", freqIndex: Math.floor(l * 1024 / p) })), numPoints: p, pixelSize: _, offscreen: document.createElement("canvas"), offscreenCtx: null }, r.offscreen.width = t.width, r.offscreen.height = t.height, r.offscreenCtx = r.offscreen.getContext("2d"), T.set("voronoiSpectrum", r)), f.getByteFrequencyData(s), e.fillStyle = d, e.fillRect(0, 0, t.width, t.height);
  for (let n = 0; n < r.numPoints; n++) {
    const l = r.points[n];
    l.x = Math.random() * t.width, l.y = Math.random() * t.height;
    const o = s[l.freqIndex] / 256;
    l.color = c.replace("{hue}", `${l.freqIndex * 360 / a}`).replace("{lightness}", `${o * 100}`);
  }
  r.offscreenCtx.clearRect(0, 0, t.width, t.height);
  for (let n = 0; n < t.width; n += r.pixelSize) for (let l = 0; l < t.height; l += r.pixelSize) {
    let o = 1 / 0, i = "";
    for (let u of r.points) {
      const h = n - u.x, g = l - u.y, b = h * h + g * g;
      b < o && (o = b, i = u.color);
    }
    r.offscreenCtx.fillStyle = i, r.offscreenCtx.fillRect(n, l, r.pixelSize, r.pixelSize);
  }
  e.drawImage(r.offscreen, 0, 0);
} }, Lt = Object.freeze(Object.defineProperty({ __proto__: null, default: Ht }, Symbol.toStringTag, { value: "Module" })), Nt = { name: "Vortex Spectrogram", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { pointColor: p = "hsla({hue}, 90%, {lightness}%, {alpha})", backgroundColor: _ = "rgb(20, 20, 20)", pointSize: d = 2, vortexScale: c = 0.5 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.width / 2, n = t.height / 2, l = Math.min(r, n);
  for (let o = 0; o < a; o++) {
    const i = s[o] / 256, u = o * 8 * Math.PI / a, h = o / a * l * (1 + i * c), g = r + h * Math.cos(u), b = n + h * Math.sin(u);
    e.fillStyle = p.replace("{hue}", `${o * 360 / a}`).replace("{lightness}", `${40 + i * 60}`).replace("{alpha}", `${0.1 + i * 0.6}`), e.beginPath(), e.arc(g, b, d + i * 4, 0, 2 * Math.PI), e.fill();
  }
} }, Kt = Object.freeze(Object.defineProperty({ __proto__: null, default: Nt }, Symbol.toStringTag, { value: "Module" })), Qt = { name: "3D Water Spectrogram", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { lineColor: p = "rgba(0, 255, 255, {alpha})", fillColor: _ = "rgba(0, 255, 255, {alpha})", backgroundColor: d = "rgba(20, 20, 20, 0.2)", layerCount: c = 15, connectionStep: r = 4, waveAmplitude: n = 20 } = m;
  if (y !== "frequency") return;
  let l = T.get("waterSpectrogram") || {};
  if (!l.config) {
    l.config = { layers: c, sinTable: new Float32Array(360), points: [], initialized: false };
    for (let b = 0; b < 360; b++) l.config.sinTable[b] = Math.sin(b * Math.PI / 180);
    l.config.initialized = true, T.set("waterSpectrogram", l);
  }
  f.getByteFrequencyData(s), e.fillStyle = d, e.fillRect(0, 0, t.width, t.height);
  const o = Date.now() / 1e3, i = l.config.points, u = l.config.layers, h = Math.floor(a / r);
  if (i.length !== u) {
    i.length = 0;
    for (let b = 0; b < u; b++) i[b] = new Array(h).fill(null).map(() => ({ x: 0, y: 0, z: 0, perspective: 0 }));
  }
  const g = t.width / h;
  for (let b = 0; b < u; b++) {
    const S = 1 - b * 0.05, v = b * 20, M = i[b];
    for (let w = 0; w < h; w++) {
      const z = s[w * r] * S, C = M[w];
      C.x = g * w, C.y = t.height / 2 + (z - 128) * 1.5 * S + l.config.sinTable[Math.floor((o + b / 2 + w / 10) % (Math.PI * 2) * (180 / Math.PI)) % 360] * n, C.z = v, C.perspective = S;
    }
  }
  e.beginPath();
  for (let b = u - 1; b >= 0; b--) {
    const S = i[b];
    for (let v = 0; v < h - 1; v++) {
      const M = S[v], w = S[v + 1];
      e.strokeStyle = p.replace("{alpha}", `${M.perspective * 0.8}`), e.lineWidth = M.perspective * 2, e.moveTo(M.x, M.y), e.lineTo(w.x, w.y);
    }
    if (b > 0) {
      const v = i[b - 1];
      e.strokeStyle = p.replace("{alpha}", `${S[0].perspective * 0.4}`);
      for (let M = 0; M < h; M += 2) {
        const w = S[M], z = v[M];
        e.moveTo(w.x, w.y), e.lineTo(z.x, z.y);
      }
    }
  }
  e.stroke(), e.beginPath();
  for (let b = 0; b < u; b++) {
    const S = i[b];
    for (let v = 0; v < h - 1; v++) {
      const M = S[v], w = S[v + 1];
      e.moveTo(M.x, M.y), e.lineTo(w.x, w.y), e.lineTo(w.x, t.height), e.lineTo(M.x, t.height);
    }
  }
  e.fillStyle = _.replace("{alpha}", "0.1"), e.fill();
} }, Ut = Object.freeze(Object.defineProperty({ __proto__: null, default: Qt }, Symbol.toStringTag, { value: "Module" })), Zt = { name: "Waterfall", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { hueBase: p = 240, saturation: _ = 100, lightness: d = 50, scrollSpeed: c = 1 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s);
  const r = e.getImageData(0, c, t.width, t.height - c);
  e.putImageData(r, 0, 0);
  const n = t.width / a;
  for (let l = 0; l < a; l++) {
    const o = s[l], i = p - o / 255 * 240, u = _, h = d;
    e.fillStyle = `hsl(${i}, ${u}%, ${h}%)`, e.fillRect(l * n, t.height - c, n, c);
  }
} }, Jt = Object.freeze(Object.defineProperty({ __proto__: null, default: Zt }, Symbol.toStringTag, { value: "Module" })), xt = { name: "Waveform Rings", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { ringColor: p = "hsla({hue}, 70%, 50%, 0.5)", backgroundColor: _ = "rgb(20, 20, 20)", ringCount: d = 5, lineWidth: c = 2 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.width / 2, n = t.height / 2, l = d;
  for (let o = 0; o < l; o++) {
    const i = (o + 1) * (Math.min(r, n) / l);
    e.beginPath();
    for (let u = 0; u < a; u++) {
      const h = s[u] / 256, g = u * 2 * Math.PI / a, b = i + h * 20, S = r + b * Math.cos(g), v = n + b * Math.sin(g);
      u === 0 ? e.moveTo(S, v) : e.lineTo(S, v);
    }
    e.closePath(), e.strokeStyle = p.replace("{hue}", `${o * 360 / l}`), e.lineWidth = c, e.stroke();
  }
} }, eo = Object.freeze(Object.defineProperty({ __proto__: null, default: xt }, Symbol.toStringTag, { value: "Module" })), to = { name: "Waveform Spectrum", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { lineColor: p = "rgb(0, 255, 0)", backgroundColor: _ = "rgb(20, 20, 20)", lineWidth: d = 2, glowIntensity: c = 0.5 } = m;
  if (y === "frequency") {
    f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height), e.beginPath(), e.moveTo(0, t.height / 2);
    for (let r = 0; r < a; r++) {
      const n = r * t.width / a, l = s[r] / 256 * t.height;
      e.lineTo(n, l);
    }
    e.lineWidth = d, e.strokeStyle = p, e.shadowBlur = 10 * c, e.shadowColor = p, e.stroke(), e.shadowBlur = 0;
  }
} }, oo = Object.freeze(Object.defineProperty({ __proto__: null, default: to }, Symbol.toStringTag, { value: "Module" })), lo = { name: "Waveform Tunnel", dataType: "time", draw: function(f, t, e, a, s, y, m = {}) {
  const { lineColor: p = "hsl({hue}, 100%, 50%)", backgroundColor: _ = "rgba(0, 0, 0, 0.1)", lineWidth: d = 2, radiusStep: c = 10 } = m;
  if (y !== "time") return;
  f.getByteTimeDomainData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.width / 2, n = t.height / 2, l = Math.min(r, n);
  for (let o = l; o > 0; o -= c) {
    e.beginPath();
    for (let i = 0; i < a; i++) {
      const u = i * 2 * Math.PI / a, h = s[i] / 128 - 1, g = o + h * 20, b = r + g * Math.cos(u), S = n + g * Math.sin(u);
      i === 0 ? e.moveTo(b, S) : e.lineTo(b, S);
    }
    e.closePath(), e.strokeStyle = p.replace("{hue}", `${o * 360 / l}`), e.lineWidth = d, e.stroke();
  }
} }, io = Object.freeze(Object.defineProperty({ __proto__: null, default: lo }, Symbol.toStringTag, { value: "Module" })), ro = { name: "Wave Interference Spectrogram", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { pointColor: p = "hsla({hue}, 70%, 50%, {alpha})", backgroundColor: _ = "rgb(20, 20, 20)", pointSize: d = 2, waveSpacing: c = 20 } = m;
  if (y === "frequency") {
    f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
    for (let r = 0; r < a; r++) {
      const n = r * t.width / a, l = s[r] / 256;
      for (let o = 0; o < t.height; o += c) {
        const i = Math.sin(n / 50 + l * 10) * 10, u = Math.cos(n / 30) * 10, h = i + u;
        e.fillStyle = p.replace("{hue}", `${o + h * 10}`).replace("{alpha}", `${l}`), e.beginPath(), e.arc(n, o + h, d, 0, 2 * Math.PI), e.fill();
      }
    }
  }
} }, no = Object.freeze(Object.defineProperty({ __proto__: null, default: ro }, Symbol.toStringTag, { value: "Module" })), ao = { name: "Weather Pattern Spectrogram", dataType: "frequency", draw: function(f, t, e, a, s, y, m = {}) {
  const { cloudColor: p = "rgba(255, 255, 255, {alpha})", backgroundColor: _ = "rgb(20, 20, 20)", cloudHeight: d = 0.33, curveScale: c = 100 } = m;
  if (y !== "frequency") return;
  f.getByteFrequencyData(s), e.fillStyle = _, e.fillRect(0, 0, t.width, t.height);
  const r = t.height * d;
  for (let n = 0; n < a; n++) {
    const l = n * t.width / a, o = s[n] / 256;
    e.fillStyle = p.replace("{alpha}", `${o}`), e.beginPath(), e.moveTo(l, r), e.quadraticCurveTo(l + 10, r - o * c, l + 20, r), e.fill();
  }
} }, so = Object.freeze(Object.defineProperty({ __proto__: null, default: ao }, Symbol.toStringTag, { value: "Module" }));
export {
  co as a,
  F as c,
  ho as g
};

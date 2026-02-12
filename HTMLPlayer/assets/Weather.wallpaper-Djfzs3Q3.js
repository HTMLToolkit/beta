import { r as i, j as t } from "./vendor-ui-BG0coi97.js";
import "./vendor-react-C6Febm84.js";
const j = { sunny: "\u2600\uFE0F", cloudy: "\u2601\uFE0F", rain: "\u{1F327}\uFE0F", snow: "\u2744\uFE0F", storm: "\u26C8\uFE0F", fog: "\u{1F32B}\uFE0F" }, b = (e) => e === 0 ? "sunny" : [1, 2, 3].includes(e) ? "cloudy" : [45, 48].includes(e) ? "fog" : [51, 53, 55, 56, 57].includes(e) || [61, 63, 65, 66, 67].includes(e) ? "rain" : [71, 73, 75, 77].includes(e) ? "snow" : [80, 81, 82, 85, 86].includes(e) ? "rain" : [95, 96, 99].includes(e) ? "storm" : "sunny", w = (e, d) => d ? { sunny: "linear-gradient(180deg,#fffb8f,#ffd27f)", cloudy: "linear-gradient(180deg,#e0e7ff,#cbd5e1)", rain: "linear-gradient(180deg,#b6d0e6,#6b8ea3)", snow: "linear-gradient(180deg,#ffffff,#cfe8ff)", storm: "linear-gradient(180deg,#6b6b6b,#2b2b2b)", fog: "linear-gradient(180deg,#f0f0f0,#d0d0d0)" }[e] : { sunny: "linear-gradient(180deg,#1a1a2e,#16213e)", cloudy: "linear-gradient(180deg,#2c3e50,#34495e)", rain: "linear-gradient(180deg,#2c3e50,#34495e)", snow: "linear-gradient(180deg,#34495e,#2c3e50)", storm: "linear-gradient(180deg,#1a1a1a,#0f0f0f)", fog: "linear-gradient(180deg,#34495e,#2c3e50)" }[e], I = () => {
  const [e, d] = i.useState(null), [y, a] = i.useState(true), [h, f] = i.useState(null), u = i.useCallback(async (r, s) => {
    try {
      a(true), f(null);
      const n = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${r}&longitude=${s}&current=temperature_2m,weather_code,is_day&timezone=auto`);
      if (!n.ok) throw new Error(`Weather API error: ${n.status}`);
      const c = await n.json();
      if (!c.current) throw new Error("Invalid weather data received");
      let p = "Your Location";
      try {
        const l = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${r}&longitude=${s}&localityLanguage=en`);
        if (l.ok) {
          const m = await l.json();
          p = m.city || m.locality || "Your Location";
        }
      } catch (l) {
        console.warn("Could not fetch location name:", l);
      }
      const v = { temperature: Math.round(c.current.temperature_2m), weatherCode: c.current.weather_code, location: p, isDay: c.current.is_day === 1 };
      d(v);
    } catch (n) {
      console.error("Weather fetch error:", n), f(n instanceof Error ? n.message : "Failed to fetch weather");
    } finally {
      a(false);
    }
  }, []), g = i.useCallback(() => {
    if (!navigator.geolocation) {
      f("Geolocation not supported"), a(false);
      return;
    }
    navigator.geolocation.getCurrentPosition((r) => {
      const { latitude: s, longitude: n } = r.coords;
      u(s, n);
    }, (r) => {
      console.warn("Geolocation error:", r), u(40.7128, -74.006);
    }, { enableHighAccuracy: false, timeout: 1e4, maximumAge: 3e5 });
  }, [u]);
  if (i.useEffect(() => {
    g();
    const r = setInterval(g, 1800 * 1e3);
    return () => clearInterval(r);
  }, [g]), y) return t.jsx("div", { style: { position: "fixed", inset: 0, zIndex: -1, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(180deg,#e0e7ff,#cbd5e1)" }, children: t.jsxs("div", { style: { textAlign: "center", fontSize: "2rem", color: "#666" }, children: [t.jsx("div", { children: "\u{1F324}\uFE0F" }), t.jsx("div", { style: { fontSize: 16, marginTop: 8 }, children: "Loading weather..." })] }) });
  if (h || !e) return t.jsx("div", { style: { position: "fixed", inset: 0, zIndex: -1, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(180deg,#ffe6e6,#ffcccc)" }, children: t.jsxs("div", { style: { textAlign: "center", fontSize: "2rem", color: "#666" }, children: [t.jsx("div", { children: "\u274C" }), t.jsx("div", { style: { fontSize: 16, marginTop: 8 }, children: h || "Weather unavailable" })] }) });
  const o = b(e.weatherCode), x = w(o, e.isDay);
  return t.jsx("div", { style: { position: "fixed", inset: 0, zIndex: -1, display: "flex", alignItems: "center", justifyContent: "center", background: x }, children: t.jsxs("div", { style: { textAlign: "center", fontSize: "6rem" }, children: [t.jsx("div", { children: j[o] }), t.jsxs("div", { style: { fontSize: 24, marginTop: 8, opacity: 0.9 }, children: [e.temperature, "\xB0C"] }), t.jsx("div", { style: { fontSize: 16, marginTop: 4, opacity: 0.7 }, children: e.location }), t.jsx("div", { style: { fontSize: 14, marginTop: 4, opacity: 0.6 }, children: o.charAt(0).toUpperCase() + o.slice(1) })] }) });
};
export {
  I as default
};

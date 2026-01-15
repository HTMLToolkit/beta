import { r as _, j as s } from "./vendor-ui-WM1JXJ50.js";
import { _ as W, u as v, __tla as __tla_0 } from "./vendor-i18n-WLbSf5LT.js";
import { I as R, B as x, __tla as __tla_1 } from "./index-CTKCKDjx.js";
import "./vendor-react-qkC6yhPU.js";
import "./vendor-uppy-CguFdeWP.js";
import "./vendor-utils-jeg-bMVB.js";
import { __tla as __tla_2 } from "./vendor-audio-DrJdxnoN.js";
import "./visualizers-D_6BBYWW.js";
let H;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })()
]).then(async () => {
  function S(l = {}) {
    const { immediate: r = false, onNeedRefresh: m, onOfflineReady: i, onRegistered: o, onRegisteredSW: u, onRegisterError: p } = l;
    let t, a, n;
    const d = async (e = true) => {
      await a, n == null ? void 0 : n();
    };
    async function g() {
      if ("serviceWorker" in navigator) {
        if (t = await W(async () => {
          const { Workbox: e } = await import("./workbox-window.prod.es5-BIl4cyR9.js");
          return {
            Workbox: e
          };
        }, []).then(({ Workbox: e }) => new e("/beta/HTMLPlayer/sw.js", {
          scope: "/beta/HTMLPlayer/",
          type: "classic"
        })).catch((e) => {
          p == null ? void 0 : p(e);
        }), !t) return;
        n = () => {
          t == null ? void 0 : t.messageSkipWaiting();
        };
        {
          let e = false;
          const h = () => {
            e = true, t == null ? void 0 : t.addEventListener("controlling", (f) => {
              f.isUpdate && window.location.reload();
            }), m == null ? void 0 : m();
          };
          t.addEventListener("installed", (f) => {
            typeof f.isUpdate > "u" ? typeof f.isExternal < "u" && f.isExternal ? h() : !e && (i == null ? void 0 : i()) : f.isUpdate || (i == null ? void 0 : i());
          }), t.addEventListener("waiting", h);
        }
        t.register({
          immediate: r
        }).then((e) => {
          u ? u("/beta/HTMLPlayer/sw.js", e) : o == null ? void 0 : o(e);
        }).catch((e) => {
          p == null ? void 0 : p(e);
        });
      }
    }
    return a = g(), d;
  }
  function y(l = {}) {
    const { immediate: r = true, onNeedRefresh: m, onOfflineReady: i, onRegistered: o, onRegisteredSW: u, onRegisterError: p } = l, [t, a] = _.useState(false), [n, d] = _.useState(false), [g] = _.useState(() => S({
      immediate: r,
      onOfflineReady() {
        d(true), i == null ? void 0 : i();
      },
      onNeedRefresh() {
        a(true), m == null ? void 0 : m();
      },
      onRegistered: o,
      onRegisteredSW: u,
      onRegisterError: p
    }));
    return {
      needRefresh: [
        t,
        a
      ],
      offlineReady: [
        n,
        d
      ],
      updateServiceWorker: g
    };
  }
  const j = "_updatePrompt_1buu0_1", w = "_content_1buu0_35", b = "_iconWrapper_1buu0_41", E = "_text_1buu0_53", N = "_title_1buu0_59", P = "_description_1buu0_65", k = "_actions_1buu0_71", c = {
    updatePrompt: j,
    content: w,
    iconWrapper: b,
    text: E,
    title: N,
    description: P,
    actions: k
  };
  H = function({ checkInterval: l = 3600 * 1e3 }) {
    const { t: r } = v(), [m, i] = _.useState(false), { needRefresh: [o, u], updateServiceWorker: p } = y({
      onRegisteredSW(n, d) {
        console.log("SW registered:", n), d && l > 0 && setInterval(() => {
          console.log("Checking for SW updates..."), d.update();
        }, l);
      },
      onRegisterError(n) {
        console.error("SW registration error:", n);
      }
    });
    _.useEffect(() => {
      o && i(false);
    }, [
      o
    ]);
    const t = () => {
      p(true);
    }, a = () => {
      i(true), u(false);
    };
    return !o || m ? null : s.jsxs("div", {
      className: c.updatePrompt,
      role: "alert",
      "aria-live": "polite",
      children: [
        s.jsxs("div", {
          className: c.content,
          children: [
            s.jsx("div", {
              className: c.iconWrapper,
              children: s.jsx(R, {
                name: "refreshCw",
                size: 20,
                decorative: true
              })
            }),
            s.jsxs("div", {
              className: c.text,
              children: [
                s.jsx("strong", {
                  className: c.title,
                  children: r("update.available")
                }),
                s.jsx("p", {
                  className: c.description,
                  children: r("update.description")
                })
              ]
            })
          ]
        }),
        s.jsxs("div", {
          className: c.actions,
          children: [
            s.jsx(x, {
              variant: "ghost",
              size: "sm",
              onClick: a,
              children: r("update.later")
            }),
            s.jsxs(x, {
              variant: "primary",
              size: "sm",
              onClick: t,
              children: [
                s.jsx(R, {
                  name: "download",
                  size: 14,
                  decorative: true
                }),
                r("update.now")
              ]
            })
          ]
        })
      ]
    });
  };
});
export {
  H as UpdatePrompt,
  __tla,
  H as default
};

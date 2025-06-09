"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9648],
  {
    7719: function (e, t, r) {
      var n = r(4198),
        o = r(6551),
        i = (r(5170), r(1992)),
        a = r(2312),
        c = r(3010);
      var l = (0, n.Z)("div", { target: "e1lg2uf51" })({
          name: "1cwloic",
          styles: "width:100%;overflow:hidden",
        }),
        s = { name: "1c2w7fn", styles: "transform:translateY(0)" },
        u = {
          name: "xvf0o2",
          styles: "text-shadow:2px 2px 10px rgba(0, 0, 0, 0.2)",
        },
        g = (0, n.Z)(a.Ff, { target: "e1lg2uf50" })(
          "color:",
          i.Z.white,
          ";transform:translateY(100%);transition:transform 0.7s;",
          function (e) {
            return e.shadow && u;
          },
          " ",
          function (e) {
            var t = e.color;
            return t && (0, o.css)("color:", t, ";", "");
          },
          " ",
          function (e) {
            return e.visible && s;
          },
          " ",
          function (e) {
            var t = e.delay;
            return t && (0, o.css)("transition-delay:", t, "s;", "");
          },
          ";"
        );
      t.Z = function (e) {
        var t = e.color,
          r = void 0 === t ? i.Z.white : t,
          n = e.visible,
          o = e.delay,
          a = e.shadow,
          s = void 0 === a || a,
          u = e.children;
        return (0, c.jsx)(l, {
          children: (0, c.jsx)(g, {
            color: r,
            visible: n,
            delay: o,
            shadow: s,
            children: u,
          }),
        });
      };
    },
    8119: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return p;
        },
      });
      var n = r(4198),
        o = r(5170),
        i = r(3746),
        a = r(1513),
        c = r(7719),
        l = r(3010);
      var s = (0, n.Z)("section", { target: "e5u5wi02" })(
          "position:relative;width:100%;height:100vh;max-height:800px;background-repeat:no-repeat;background-size:cover;background-position:center center;",
          (0, a.mq)("mobile"),
          "{height:700px;}"
        ),
        u = (0, n.Z)("div", { target: "e5u5wi01" })({
          name: "19j5g34",
          styles:
            "position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0.5) 1.48%,\n      rgba(0, 0, 0, 0.245) 10.61%,\n      rgba(0, 0, 0, 0.105) 19.35%,\n      rgba(0, 0, 0, 0) 29.08%\n    ),rgba(79, 68, 224, 0.03)",
        }),
        g = {
          name: "ixa8lh",
          styles:
            "justify-content:flex-start;padding-bottom:0px;padding-top:135px",
        },
        f = { name: "1kx2ysr", styles: "align-items:flex-end" },
        d = (0, n.Z)("div", { target: "e5u5wi00" })(
          "width:100%;height:100%;max-width:1280px;margin:0 auto;display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:200px;",
          function (e) {
            return e.right && f;
          },
          " ",
          function (e) {
            return e.top && g;
          },
          " ",
          (0, a.mq)("mobile"),
          "{text-align:center;padding-bottom:70px;}"
        );
      var p = function (e) {
        var t = e.src,
          r = e.message,
          n = e.textRight,
          a = e.textTop,
          g = e.messageWrapperStyle,
          f = (0, o.useRef)(null),
          p = (0, i.Z)({ ref: f, src: t });
        return (0, l.jsxs)(s, {
          src: t,
          ref: f,
          children: [
            (0, l.jsx)(u, {}),
            (0, l.jsxs)(d, {
              right: n,
              top: a,
              style: g,
              children: [
                (0, l.jsx)(c.Z, {
                  shadow: r.shadow,
                  color: r.color,
                  visible: p,
                  children: r.top,
                }),
                (0, l.jsx)(c.Z, {
                  shadow: r.shadow,
                  color: r.color,
                  visible: p,
                  delay: 0.3,
                  children: r.bottom,
                }),
              ],
            }),
          ],
        });
      };
    },
    8821: function (e, t, r) {
      var n = r(3326),
        o = r(9939),
        i = r(4198),
        a = r(6551),
        c = (r(5170), r(1992)),
        l = r(1513),
        s = r(2312),
        u = r(170),
        g = r(3010),
        f = [
          "category",
          "categoryColor",
          "title",
          "description",
          "darken",
          "align",
        ];
      function d(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var h = (0, i.Z)(s.B7, { target: "e19iin3j3" })(
          "margin-bottom:17px;",
          (0, l.mq)("mobile"),
          "{margin-bottom:12px;}"
        ),
        x = (0, i.Z)(s.O6, { target: "e19iin3j2" })(
          "margin-bottom:30px;",
          (0, l.mq)("mobile"),
          "{margin-bottom:20px;}"
        ),
        m = (0, i.Z)(u._p, { target: "e19iin3j1" })(
          (0, l.mq)("mobile"),
          "{font-size:18px;font-style:normal;font-weight:400;line-height:28px;letter-spacing:-0.36px;word-break:keep-all;}"
        ),
        b = (0, i.Z)("div", { target: "e19iin3j0" })(
          "text-align:",
          function (e) {
            return e.align;
          },
          "!important;",
          function (e) {
            return (
              e.darken && (0, a.css)(x, ",", m, "{color:", c.Z.white, ";}", "")
            );
          },
          " ",
          (0, l.mq)("mobile"),
          "{text-align:left;}"
        );
      t.Z = function (e) {
        var t = e.category,
          r = e.categoryColor,
          n = void 0 === r ? c.Z.kcdBlue : r,
          i = e.title,
          a = e.description,
          l = e.darken,
          s = e.align,
          u = void 0 === s ? "center" : s,
          d = (0, o.Z)(e, f);
        return (0, g.jsxs)(
          b,
          p(
            p({ align: u, darken: l }, d),
            {},
            {
              children: [
                (0, g.jsx)(h, { color: n, children: t }),
                (0, g.jsx)(x, { children: i }),
                a && (0, g.jsx)(m, { children: a }),
              ],
            }
          )
        );
      };
    },
    7190: function (e, t, r) {
      r.d(t, {
        DG: function () {
          return u;
        },
        W6: function () {
          return l;
        },
        lx: function () {
          return s;
        },
      });
      var n = r(4198),
        o = r(6551),
        i = r(1992),
        a = r(1513),
        c = (0, o.css)(
          "color:",
          i.Z.primary,
          ";word-break:keep-all;white-space:pre-line;",
          ""
        ),
        l = (0, n.Z)("h4", { target: "ekzxz9e2" })(
          c,
          " font-weight:600;font-size:22px;line-height:32px;",
          function (e) {
            var t = e.color;
            return t && (0, o.css)("color:", t, ";", "");
          },
          " ",
          (0, a.mq)("mobile"),
          "{font-size:18px;line-height:24px;}"
        ),
        s = (0, n.Z)("h3", { target: "ekzxz9e1" })(
          c,
          " font-weight:",
          function (e) {
            return e.bold ? 700 : 300;
          },
          ";font-size:30px;line-height:42px;",
          (0, a.mq)("mobile"),
          "{font-size:20px;line-height:30px;}",
          function (e) {
            var t = e.color;
            return t && (0, o.css)("color:", t, ";", "");
          },
          ";"
        ),
        u = (0, n.Z)("h2", { target: "ekzxz9e0" })(
          c,
          " font-weight:300;font-size:44px;line-height:54px;",
          function (e) {
            var t = e.color;
            return t && (0, o.css)("color:", t, ";", "");
          },
          " ",
          (0, a.mq)("mobile"),
          "{font-size:34px;line-height:42px;}"
        );
    },
    3746: function (e, t, r) {
      var n = r(5170);
      t.Z = function (e) {
        var t = e.ref,
          r = e.src,
          o = (0, n.useState)(!1),
          i = o[0],
          a = o[1];
        return (
          (0, n.useEffect)(
            function () {
              (function (e) {
                return new Promise(function (t, r) {
                  var n = new Image();
                  n.addEventListener("load", t),
                    n.addEventListener("error", r),
                    (n.src = e);
                });
              })(r).then(function () {
                t.current &&
                  ((t.current.style.backgroundImage = "url(".concat(r, ")")),
                  a(!0));
              });
            },
            [r, t]
          ),
          i
        );
      };
    },
  },
]);

"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9555],
  {
    9555: function (e, r, t) {
      t.d(r, {
        Z: function () {
          return w;
        },
      });
      var n,
        o,
        i = t(3326),
        c = t(5170),
        a = t(4198),
        p = t(6551),
        u = t(7666),
        l = t(1992),
        s = t(1513);
      function d() {
        return (
          (d = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var r = 1; r < arguments.length; r++) {
                  var t = arguments[r];
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }
                return e;
              }),
          d.apply(this, arguments)
        );
      }
      var f = function (e) {
          return c.createElement(
            "svg",
            d(
              {
                width: "1em",
                height: "1em",
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            n ||
              (n = c.createElement("path", {
                fill: "#fff",
                d: "M0 8V6h14v2z",
              })),
            o ||
              (o = c.createElement("path", { fill: "#fff", d: "M8 14H6V0h2z" }))
          );
        },
        g = t(7190),
        h = t(3010);
      var b = (0, a.Z)("div", { target: "eodfpus5" })(
          "background-color:transparent;padding:37px 20px;border-bottom:1px solid ",
          l.Z.lineGray,
          ";border-top:1px solid ",
          l.Z.lineGray,
          ";margin-bottom:-1px;",
          (0, s.mq)("mobile"),
          "{padding:37px 7px 37px 0px;}",
          function (e) {
            return (
              e.darken && (0, p.css)("border-color:", l.Z.primary, ";", "")
            );
          },
          ";"
        ),
        m = (0, a.Z)(g.W6, { target: "eodfpus4" })(
          (0, s.mq)("mobile"),
          "{padding-right:12px;}",
          function (e) {
            var r = e.open;
            return (0, p.css)(
              "color:",
              r ? l.Z.blueBlue : l.Z.primary,
              ";",
              ""
            );
          },
          " ",
          (0, s.mq)("mobile"),
          "{",
          function (e) {
            var r = e.open;
            return (0, p.css)(
              "color:",
              r ? l.Z.blueBlue : l.Z.primary,
              "!important;",
              ""
            );
          },
          ";}"
        ),
        v = (0, a.Z)("div", { target: "eodfpus3" })(
          "display:flex;justify-content:center;align-items:center;flex-shrink:0;width:32px;height:32px;border-radius:100%;svg{transition:0.4s;}",
          function (e) {
            var r = e.open;
            return (0, p.css)(
              "background-color:",
              r ? l.Z.blueBlue : l.Z.componentGray,
              ";svg{transform:",
              r ? "rotate(135deg)" : "rotate(0deg)",
              ";}",
              ""
            );
          },
          " ",
          (0, s.mq)("mobile"),
          "{",
          function (e) {
            var r = e.open;
            return (0, p.css)(
              "background-color:",
              r ? l.Z.blueBlue : l.Z.componentGray,
              "!important;",
              ""
            );
          },
          ";}"
        ),
        x = (0, a.Z)("div", { target: "eodfpus2" })(
          "display:flex;justify-content:space-between;align-items:center;cursor:pointer;&:hover{",
          m,
          "{color:",
          l.Z.blueBlue,
          ";}",
          v,
          "{background-color:",
          l.Z.blueBlue,
          ";}}"
        ),
        y = (0, a.Z)("div", { target: "eodfpus1" })({
          name: "1dujadk",
          styles: "overflow:hidden;transition:0.4s",
        }),
        j = (0, a.Z)("div", { target: "eodfpus0" })(
          "font-weight:400;white-space:pre-line;word-break:keep-all;font-size:18px;line-height:30px;padding-top:42px;padding-right:72px;color:",
          l.Z.paragraphGray,
          ";",
          (0, s.mq)("mobile"),
          "{font-size:16px;line-height:26px;padding-right:0px;}"
        );
      var Z = function (e) {
        var r = e.title,
          t = e.content,
          n = e.open,
          o = e.darken,
          i = e.onClick,
          c = (0, u.F)(),
          a = c.height,
          p = c.ref;
        return (0, h.jsxs)(b, {
          darken: o,
          children: [
            (0, h.jsxs)(x, {
              role: "button",
              onClick: i,
              children: [
                (0, h.jsx)(m, { open: n, children: r }),
                (0, h.jsx)(v, { open: n, children: (0, h.jsx)(f, {}) }),
              ],
            }),
            (0, h.jsx)(y, {
              style: n ? { height: a, opacity: 1 } : { height: 0, opacity: 0 },
              children: (0, h.jsx)(j, { ref: p, children: t }),
            }),
          ],
        });
      };
      function k(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      var w = function (e) {
        var r = e.items,
          t = e.darken,
          n = (0, c.useState)(-1),
          o = n[0],
          a = n[1];
        return (0, h.jsx)("div", {
          children: r.map(function (e, r) {
            return (0, h.jsx)(
              Z,
              (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                  var t = null != arguments[r] ? arguments[r] : {};
                  r % 2
                    ? k(Object(t), !0).forEach(function (r) {
                        (0, i.Z)(e, r, t[r]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(t)
                      )
                    : k(Object(t)).forEach(function (r) {
                        Object.defineProperty(
                          e,
                          r,
                          Object.getOwnPropertyDescriptor(t, r)
                        );
                      });
                }
                return e;
              })(
                {
                  darken: t,
                  onClick: function () {
                    return (function (e) {
                      a(o === e ? -1 : e);
                    })(r);
                  },
                  open: o === r,
                },
                e
              ),
              r
            );
          }),
        });
      };
    },
    7666: function (e, r, t) {
      t.d(r, {
        F: function () {
          return o;
        },
      });
      var n = t(5170),
        o = function () {
          var e = (0, n.useState)(0),
            r = e[0],
            t = e[1],
            o = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(function () {
              o.current && t(o.current.getBoundingClientRect().height);
            }, []),
            { ref: o, height: r }
          );
        };
    },
  },
]);

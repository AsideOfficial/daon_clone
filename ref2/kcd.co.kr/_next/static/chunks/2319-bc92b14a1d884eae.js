"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2319],
  {
    7808: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return z;
        },
      });
      var r = t(4198),
        i = t(6551),
        o = t(4810),
        l = t(5170),
        a = t(9473),
        s = t(4910),
        c = t(2564),
        u = t.n(c),
        f = function (e) {
          (0, l.useEffect)(function () {
            function n() {
              return (n = (0, s.Z)(
                u().mark(function n() {
                  return u().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), document.fonts.ready;
                        case 2:
                          null === e || void 0 === e || e();
                        case 3:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )).apply(this, arguments);
            }
            !(function () {
              n.apply(this, arguments);
            })();
          }, []);
        },
        d = t(1992),
        p = t(1513),
        h = t(170),
        g = t(7190),
        x = t(3010);
      var m = (0, r.Z)("div", { target: "e1m4gnxe6" })({
          name: "s5xdrg",
          styles: "display:flex;align-items:center",
        }),
        v = (0, r.Z)("span", { target: "e1m4gnxe5" })(
          "position:relative;font-weight:500;font-size:124px;line-height:130px;letter-spacing:-0.04em;",
          (0, p.mq)("mobile"),
          "{font-size:80px;line-height:84px;}"
        ),
        b = (0, r.Z)(v, { target: "e1m4gnxe4" })({
          name: "bx7hzz",
          styles: "display:inline-block;height:0;overflow:hidden",
        }),
        w = (0, r.Z)("span", { target: "e1m4gnxe3" })(
          "display:inline-block;padding:4px 20px;border-radius:100px;background:",
          d.Z.lightBlue,
          ";font-weight:400;font-size:18px;line-height:30px;margin-bottom:16px;color:",
          d.Z.black,
          ";"
        ),
        y = (0, r.Z)("span", { target: "e1m4gnxe2" })(
          "display:flex;align-items:center;font-weight:600;font-size:64px;line-height:68px;margin-left:8px;",
          (0, p.mq)("mobile"),
          "{font-size:38px;font-style:normal;line-height:50px;}&>span{font-size:46px;font-style:normal;font-weight:600;line-height:52px;letter-spacing:-2.3px;",
          (0, p.mq)("mobile"),
          "{font-size:28px;font-style:normal;font-weight:600;line-height:36px;letter-spacing:-1.4px;}}"
        ),
        Z = (0, r.Z)(g.W6, { target: "e1m4gnxe1" })(
          function (e) {
            var n = e.color;
            return n && (0, i.css)("color:", n, ";", "");
          },
          " ",
          (0, p.mq)("mobile"),
          "{",
          function (e) {
            var n = e.mobileColor;
            return n && (0, i.css)("color:", n, ";", "");
          },
          ";}"
        ),
        k = (0, r.Z)("div", { target: "e1m4gnxe0" })(
          "text-align:left;",
          function (e) {
            return (
              e.darken && (0, i.css)(v, ",", y, "{color:", d.Z.white, ";}", "")
            );
          },
          ";"
        );
      var z = function (e) {
        var n = e.title,
          t = e.titleColor,
          r = void 0 === t ? d.Z.lightBlueBlue : t,
          i = e.titleMobileColor,
          s = void 0 === i ? d.Z.blueBlue : i,
          c = e.count,
          u = e.description,
          p = e.suffix,
          g = e.darken,
          z = e.badge,
          j = l.useRef(null),
          E = l.useRef(null),
          _ = (0, a.YD)({ triggerOnce: !0 }),
          C = _.ref,
          q = _.inView,
          B = (0, l.useState)(0),
          L = B[0],
          W = B[1];
        return (
          l.useEffect(
            function () {
              var e = j.current,
                n = new o.I(e, c, { separator: "", duration: 1.5 });
              q && n.start();
            },
            [q, c]
          ),
          f(function () {
            E.current && W(E.current.clientWidth);
          }),
          (0, l.useEffect)(function () {
            var e = function () {
              E.current && W(E.current.clientWidth);
            };
            return (
              window.addEventListener("resize", e),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, x.jsxs)(k, {
            ref: C,
            darken: g,
            children: [
              z && (0, x.jsx)(w, { children: z }),
              (0, x.jsx)(Z, { color: r, mobileColor: s, children: n }),
              (0, x.jsx)(b, { ref: E, children: c }),
              (0, x.jsxs)(m, {
                children: [
                  (0, x.jsx)(v, { style: { width: L }, ref: j, children: c }),
                  (0, x.jsx)(y, { dangerouslySetInnerHTML: { __html: p } }),
                ],
              }),
              (0, x.jsx)(h.xe, { color: d.Z.paragraphGray, children: u }),
            ],
          })
        );
      };
    },
    5103: function (e, n, t) {
      t.d(n, {
        b: function () {
          return i;
        },
      });
      var r = t(4931),
        i = function () {
          return (0, r.Z)({ content_type: "user-count" });
        };
    },
    7101: function (e, n) {
      n.Z = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = e.sequence,
          t = void 0 === n ? 0 : n,
          r = e.anchor;
        return {
          "data-aos": "fade-up",
          "data-aos-delay": 250 * t,
          "data-aos-anchor": r,
        };
      };
    },
  },
]);

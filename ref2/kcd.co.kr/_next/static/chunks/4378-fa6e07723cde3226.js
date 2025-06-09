"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4378],
  {
    202: function (e, r, t) {
      var n = t(3006),
        o = t(9089),
        i = t.n(o),
        c = (t(5170), t(1992), t(2374)),
        a = t(8255),
        p = t(3123),
        s = t(6377),
        l = t(3010),
        u = i()(
          function () {
            return Promise.all([t.e(793), t.e(1446)]).then(t.bind(t, 1446));
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return [1446];
              },
            },
          }
        );
      r.Z = function (e) {
        var r = e.children,
          t = e.title,
          o = e.fixed;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(s.Z, { title: t }),
            (0, l.jsx)(u, { fixed: o }),
            (0, l.jsx)("main", {
              className: (0, n.iv)("padding-top:", o ? "60px" : "0px", ";", ""),
              children: r,
            }),
            (0, l.jsx)(p.Z, {
              pc: (0, l.jsx)(c.Z, {}),
              mobile: (0, l.jsx)(a.Z, {}),
            }),
          ],
        });
      };
    },
    2330: function (e, r, t) {
      var n = t(3326),
        o = t(9939),
        i = t(4198),
        c = t(6551),
        a = (t(5170), t(1513)),
        p = t(3010),
        s = ["children", "backgroundColor", "row"];
      function l(e, r) {
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
      function u(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? l(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var f = (0, i.Z)("section", { target: "ertclp51" })(
          "padding:0 30px;",
          function (e) {
            var r = e.padding;
            return (0, c.css)(
              "padding-top:",
              r.pc[0],
              "px;padding-bottom:",
              r.pc[1],
              "px;",
              ""
            );
          },
          " ",
          function (e) {
            var r = e.backgroundColor,
              t = void 0 === r ? "#fff" : r;
            return t && (0, c.css)("background-color:", t, ";", "");
          },
          " ",
          (0, a.mq)("mobile"),
          "{",
          function (e) {
            var r = e.padding;
            return (0, c.css)(
              "padding-top:",
              r.mobile[0],
              "px;padding-bottom:",
              r.mobile[1],
              "px;",
              ""
            );
          },
          " height:auto;}"
        ),
        d = { name: "mcnhyd", styles: "flex-direction:row" },
        h = (0, i.Z)("div", { target: "ertclp50" })(
          "max-width:1280px;margin:0 auto;",
          function (e) {
            return e.row && d;
          },
          ";"
        );
      r.Z = function (e) {
        var r = e.children,
          t = e.backgroundColor,
          n = e.row,
          i = (0, o.Z)(e, s);
        return (0, p.jsx)(
          f,
          u(
            u({ backgroundColor: t }, i),
            {},
            { children: (0, p.jsx)(h, { row: n, children: r }) }
          )
        );
      };
    },
    2312: function (e, r, t) {
      t.d(r, {
        B7: function () {
          return s;
        },
        Ff: function () {
          return f;
        },
        O6: function () {
          return l;
        },
      });
      var n = t(4198),
        o = t(6551),
        i = t(1992),
        c = t(1513);
      var a = (0, o.css)(
          "color:",
          i.Z.primary,
          ";white-space:pre-line;word-break:keep-all;",
          ""
        ),
        p = {
          name: "1cs405l",
          styles: "text-shadow:1px 1px 3px rgba(0, 0, 0, 0.25)",
        },
        s = (0, n.Z)("h4", { target: "e1rco82o2" })(
          a,
          " font-weight:600;font-size:18px;line-height:28px;",
          function (e) {
            var r = e.color;
            return r && (0, o.css)("color:", r, ";", "");
          },
          " ",
          function (e) {
            return e.shadow && p;
          },
          " ",
          (0, c.mq)("mobile"),
          "{font-size:16px;line-height:22px;}"
        ),
        l = (0, n.Z)("h3", { target: "e1rco82o1" })(
          a,
          " font-weight:700;font-size:46px;line-height:62px;",
          (0, c.mq)("mobile"),
          "{font-size:34px;line-height:46px;}",
          function (e) {
            var r = e.color;
            return r && (0, o.css)("color:", r, ";", "");
          },
          ";"
        ),
        u = {
          name: "xvf0o2",
          styles: "text-shadow:2px 2px 10px rgba(0, 0, 0, 0.2)",
        },
        f = (0, n.Z)("h2", { target: "e1rco82o0" })(
          a,
          " font-weight:700;font-size:52px;line-height:66px;",
          function (e) {
            return e.shadow && u;
          },
          " ",
          (0, c.mq)("mobile"),
          "{font-size:42px;line-height:52px;}"
        );
    },
  },
]);

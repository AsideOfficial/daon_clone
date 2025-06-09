"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1446],
  {
    1446: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return N;
          },
        });
      var n = i(4198),
        a = i(6551),
        r = i(6773),
        s = i.n(r),
        l = i(9513),
        c = i(5170),
        o = i(1992),
        h = i(6433),
        d = i(1513),
        p = i(1451),
        x = i(6157),
        f = i(5258),
        g = i(7227),
        u = i(6849),
        m = i(4688),
        v = i(3010);
      var Z = (0, n.Z)("nav", { target: "esm396n5" })(
          "display:flex;margin-left:-20px;align-items:center;",
          (0, d.mq)("mobile"),
          "{display:none;}"
        ),
        b = (0, n.Z)("a", { target: "esm396n4" })(
          "color:",
          o.Z.white,
          ";margin-left:62px;font-size:16px;",
          function (e) {
            return (
              e.active && (0, a.css)("color:", o.Z.blueBlue, "!important;", "")
            );
          },
          ";"
        ),
        j = (0, n.Z)("div", { target: "esm396n3" })({
          name: "1fvi0c1",
          styles: "margin-left:62px;display:flex;align-items:center",
        }),
        k = (0, n.Z)("a", { target: "esm396n2" })(
          "position:relative;display:flex;align-items:center;font-size:16px;color:",
          o.Z.black600,
          ";&:first-of-type{margin-right:45px;&::after{content:'';position:absolute;width:1px;height:90%;background-color:",
          o.Z.componentGray,
          ";right:calc(-45px / 2);top:0;}}svg path{fill:",
          o.Z.black600,
          ";}"
        ),
        w = (0, n.Z)("div", { target: "esm396n1" })({
          name: "3t2las",
          styles:
            "display:flex;align-items:center;justify-content:space-between;width:100%;max-width:1280px;margin:0 auto",
        }),
        y = (0, n.Z)("header", { target: "esm396n0" })(
          "position:fixed;display:flex;align-items:center;width:100%;height:60px;top:0;left:0;z-index:9999;padding:0 30px;background:transparent;transition:0.3s;",
          function (e) {
            return (
              e.active &&
              (0, a.css)(
                "background:",
                o.Z.white,
                ";box-shadow:0px 4px 12px rgba(0, 0, 0, 0.06);",
                b,
                "{color:",
                o.Z.black,
                ";}.logo{svg path{fill:",
                o.Z.darkNavy,
                ";}}",
                ""
              )
            );
          },
          ";"
        );
      function _(e) {
        var t = e.fixed,
          i = (0, l.useRouter)(),
          n = (0, d.d)(),
          a = (0, c.useState)(!1),
          r = a[0],
          o = a[1],
          _ = (0, u.U)();
        return (0, v.jsx)(y, {
          active: t || _,
          children: (0, v.jsxs)(w, {
            children: [
              (0, v.jsx)(s(), {
                href: "/",
                children: (0, v.jsx)("a", {
                  className: "logo",
                  children: n
                    ? (0, v.jsx)(f.Z, { width: 160, height: 8 })
                    : (0, v.jsx)(x.Z, { width: 154, height: 40 }),
                }),
              }),
              (0, v.jsxs)(Z, {
                children: [
                  h.Ok.map(function (e) {
                    var t = e.title,
                      n = e.href;
                    return (0,
                    v.jsx)(s(), { href: n, passHref: !0, children: (0, v.jsx)(b, { active: i.asPath.includes(n), children: t }) }, n);
                  }),
                  (0, v.jsx)(j, {
                    children: h.ge.map(function (e) {
                      var t = e.title,
                        i = e.href;
                      return (0,
                      v.jsxs)(k, { href: i, target: "_blank", children: [t, (0, v.jsx)(p.Z, { width: 11, height: 11, style: { marginLeft: 4 } })] }, i);
                    }),
                  }),
                ],
              }),
              (0, v.jsx)(g.Z, { onChange: o, darken: t || _ }),
              (0, v.jsx)(m.Z, { active: r }),
            ],
          }),
        });
      }
      var N = c.memo(_);
    },
  },
]);

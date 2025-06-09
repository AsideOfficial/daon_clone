(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7687],
  {
    874: function (e, t, a) {
      "use strict";
      var n = a(6935),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var a,
          r,
          i,
          s,
          c,
          l,
          p = !1;
        t || (t = {}), (a = t.debug || !1);
        try {
          if (
            ((i = n()),
            (s = document.createRange()),
            (c = document.getSelection()),
            ((l = document.createElement("span")).textContent = e),
            (l.ariaHidden = "true"),
            (l.style.all = "unset"),
            (l.style.position = "fixed"),
            (l.style.top = 0),
            (l.style.clip = "rect(0, 0, 0, 0)"),
            (l.style.whiteSpace = "pre"),
            (l.style.webkitUserSelect = "text"),
            (l.style.MozUserSelect = "text"),
            (l.style.msUserSelect = "text"),
            (l.style.userSelect = "text"),
            l.addEventListener("copy", function (n) {
              if ((n.stopPropagation(), t.format))
                if (
                  (n.preventDefault(), "undefined" === typeof n.clipboardData)
                ) {
                  a && console.warn("unable to use e.clipboardData"),
                    a && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var r = o[t.format] || o.default;
                  window.clipboardData.setData(r, e);
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(t.format, e);
              t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
            }),
            document.body.appendChild(l),
            s.selectNodeContents(l),
            c.addRange(s),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          p = !0;
        } catch (d) {
          a && console.error("unable to copy using execCommand: ", d),
            a && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (p = !0);
          } catch (d) {
            a && console.error("unable to copy using clipboardData: ", d),
              a && console.error("falling back to prompt"),
              (r = (function (e) {
                var t =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return e.replace(/#{\s*key\s*}/g, t);
              })(
                "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(r, e);
          }
        } finally {
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(s)
              : c.removeAllRanges()),
            l && document.body.removeChild(l),
            i();
        }
        return p;
      };
    },
    6095: function (e, t, a) {
      "use strict";
      var n = a(4198),
        o = a(6551),
        r = a(6773),
        i = a.n(r),
        s = a(9513),
        c = a(5170),
        l = a(7227),
        p = a(4688),
        d = a(1992),
        u = a(6433),
        f = a(1513),
        g = a(6157),
        m = a(5258),
        x = a(3010);
      var h = (0, n.Z)("nav", { target: "e8s4wdp5" })(
          "display:flex;margin-left:-20px;",
          (0, f.mq)("mobile"),
          "{display:none;}"
        ),
        y = (0, n.Z)("a", { target: "e8s4wdp4" })(
          "color:",
          d.Z.black,
          ";margin-left:62px;font-size:16px;",
          function (e) {
            return (
              e.active && (0, o.css)("color:", d.Z.kcdBlue, "!important;", "")
            );
          },
          ";"
        ),
        w = (0, n.Z)("div", { target: "e8s4wdp3" })({
          name: "1pho79p",
          styles: "margin-left:62px",
        }),
        b = (0, n.Z)("a", { target: "e8s4wdp2" })(
          "position:relative;font-size:16px;color:",
          d.Z.componentGray,
          ";&:first-of-type{margin-right:45px;&::after{content:'';position:absolute;width:1px;height:90%;background-color:",
          d.Z.componentGray,
          ";right:calc(-45px / 2);top:0;}}"
        ),
        v = (0, n.Z)("div", { target: "e8s4wdp1" })({
          name: "3t2las",
          styles:
            "display:flex;align-items:center;justify-content:space-between;width:100%;max-width:1280px;margin:0 auto",
        }),
        C = (0, n.Z)("header", { target: "e8s4wdp0" })(
          "position:fixed;display:flex;align-items:center;width:100%;height:60px;top:0;left:0;z-index:9999;padding:0 30px;background:",
          d.Z.white,
          ";box-shadow:0px 4px 12px rgba(0, 0, 0, 0.06);svg path{fill:",
          d.Z.black,
          ";}"
        );
      function k() {
        var e = (0, s.useRouter)(),
          t = (0, f.d)(),
          a = (0, c.useState)(!1),
          n = a[0],
          o = a[1];
        return (0, x.jsx)(C, {
          children: (0, x.jsxs)(v, {
            children: [
              (0, x.jsx)(i(), {
                href: "/",
                children: (0, x.jsx)("a", {
                  children: t
                    ? (0, x.jsx)(m.Z, { width: 160, height: 8 })
                    : (0, x.jsx)(g.Z, { width: 154, height: 40 }),
                }),
              }),
              (0, x.jsxs)(h, {
                children: [
                  u.Ok.map(function (t) {
                    var a = t.title,
                      n = t.href;
                    return (0,
                    x.jsx)(i(), { href: n, passHref: !0, children: (0, x.jsx)(y, { active: e.asPath.includes(n), children: a }) }, n);
                  }),
                  (0, x.jsx)(w, {
                    children: u.ge.map(function (e) {
                      var t = e.title,
                        a = e.href;
                      return (0,
                      x.jsxs)(b, { href: a, target: "_blank", children: [t, "\u2197"] }, a);
                    }),
                  }),
                ],
              }),
              (0, x.jsx)(l.Z, { onChange: o, darken: !0 }),
              (0, x.jsx)(p.Z, { active: n }),
            ],
          }),
        });
      }
      t.Z = c.memo(k);
    },
    7814: function (e, t, a) {
      e.exports = a(1881);
    },
    9513: function (e, t, a) {
      e.exports = a(3631);
    },
    6935: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, a = [], n = 0;
          n < e.rangeCount;
          n++
        )
          a.push(e.getRangeAt(n));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                a.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
  },
]);

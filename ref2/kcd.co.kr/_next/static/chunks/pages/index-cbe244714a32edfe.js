(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    1286: function (e, t, n) {
      "use strict";
      var r,
        i = n(5170);
      function o() {
        return (
          (o = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          o.apply(this, arguments)
        );
      }
      t.Z = function (e) {
        return i.createElement(
          "svg",
          o(
            {
              width: "1em",
              height: "1em",
              viewBox: "0 0 18 11",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          r ||
            (r = i.createElement("path", {
              d: "m1 1 8 8 8-8",
              stroke: "currentColor",
              strokeWidth: 2,
            }))
        );
      };
    },
    6005: function (e, t, n) {
      "use strict";
      var r = n(3326),
        i = n(9939),
        o = n(4198),
        a = n(6773),
        s = n.n(a),
        c = (n(5170), n(1992)),
        l = n(3010),
        d = ["children", "href"];
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var f = { name: "1y5k4vp", styles: "border-color:#fff;color:#fff" },
        h = (0, o.Z)("a", { target: "e19trqx50" })(
          "display:flex;align-items:center;justify-content:center;width:100%;padding:15px 32px;font-size:16px;font-weight:700;border:1px solid ",
          c.Z.primary,
          ";border-radius:6px;transition:0.2s;&:hover{background-color:",
          c.Z.kcdBlue,
          ";border-color:",
          c.Z.kcdBlue,
          ";color:",
          c.Z.white,
          ";}",
          function (e) {
            return e.inverse && f;
          },
          ";"
        );
      t.Z = function (e) {
        var t = e.children,
          n = e.href,
          r = (0, i.Z)(e, d);
        return (0, l.jsx)(s(), {
          href: n,
          passHref: !0,
          children: (0, l.jsx)(h, p(p({}, r), {}, { children: t })),
        });
      };
    },
    8821: function (e, t, n) {
      "use strict";
      var r = n(3326),
        i = n(9939),
        o = n(4198),
        a = n(6551),
        s = (n(5170), n(1992)),
        c = n(1513),
        l = n(2312),
        d = n(170),
        u = n(3010),
        p = [
          "category",
          "categoryColor",
          "title",
          "description",
          "darken",
          "align",
        ];
      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var m = (0, o.Z)(l.B7, { target: "e19iin3j3" })(
          "margin-bottom:17px;",
          (0, c.mq)("mobile"),
          "{margin-bottom:12px;}"
        ),
        g = (0, o.Z)(l.O6, { target: "e19iin3j2" })(
          "margin-bottom:30px;",
          (0, c.mq)("mobile"),
          "{margin-bottom:20px;}"
        ),
        x = (0, o.Z)(d._p, { target: "e19iin3j1" })(
          (0, c.mq)("mobile"),
          "{font-size:18px;font-style:normal;font-weight:400;line-height:28px;letter-spacing:-0.36px;word-break:keep-all;}"
        ),
        v = (0, o.Z)("div", { target: "e19iin3j0" })(
          "text-align:",
          function (e) {
            return e.align;
          },
          "!important;",
          function (e) {
            return (
              e.darken && (0, a.css)(g, ",", x, "{color:", s.Z.white, ";}", "")
            );
          },
          " ",
          (0, c.mq)("mobile"),
          "{text-align:left;}"
        );
      t.Z = function (e) {
        var t = e.category,
          n = e.categoryColor,
          r = void 0 === n ? s.Z.kcdBlue : n,
          o = e.title,
          a = e.description,
          c = e.darken,
          l = e.align,
          d = void 0 === l ? "center" : l,
          f = (0, i.Z)(e, p);
        return (0, u.jsxs)(
          v,
          h(
            h({ align: d, darken: c }, f),
            {},
            {
              children: [
                (0, u.jsx)(m, { color: r, children: t }),
                (0, u.jsx)(g, { children: o }),
                a && (0, u.jsx)(x, { children: a }),
              ],
            }
          )
        );
      };
    },
    7190: function (e, t, n) {
      "use strict";
      n.d(t, {
        DG: function () {
          return d;
        },
        W6: function () {
          return c;
        },
        lx: function () {
          return l;
        },
      });
      var r = n(4198),
        i = n(6551),
        o = n(1992),
        a = n(1513),
        s = (0, i.css)(
          "color:",
          o.Z.primary,
          ";word-break:keep-all;white-space:pre-line;",
          ""
        ),
        c = (0, r.Z)("h4", { target: "ekzxz9e2" })(
          s,
          " font-weight:600;font-size:22px;line-height:32px;",
          function (e) {
            var t = e.color;
            return t && (0, i.css)("color:", t, ";", "");
          },
          " ",
          (0, a.mq)("mobile"),
          "{font-size:18px;line-height:24px;}"
        ),
        l = (0, r.Z)("h3", { target: "ekzxz9e1" })(
          s,
          " font-weight:",
          function (e) {
            return e.bold ? 700 : 300;
          },
          ";font-size:30px;line-height:42px;",
          (0, a.mq)("mobile"),
          "{font-size:20px;line-height:30px;}",
          function (e) {
            var t = e.color;
            return t && (0, i.css)("color:", t, ";", "");
          },
          ";"
        ),
        d = (0, r.Z)("h2", { target: "ekzxz9e0" })(
          s,
          " font-weight:300;font-size:44px;line-height:54px;",
          function (e) {
            var t = e.color;
            return t && (0, i.css)("color:", t, ";", "");
          },
          " ",
          (0, a.mq)("mobile"),
          "{font-size:34px;line-height:42px;}"
        );
    },
    3809: function (e, t, n) {
      "use strict";
      var r = n(4198),
        i = (n(5170), n(2437)),
        o = n(9759),
        a = n(170),
        s = n(7190),
        c = n(1992),
        l = n(1513),
        d = n(3010);
      var u = (0, r.Z)(s.W6, { target: "e1px5nmb3" })({
          name: "m778nf",
          styles: "transition:0.1s",
        }),
        p = (0, r.Z)("div", { target: "e1px5nmb2" })(
          "display:flex;justify-content:center;align-items:center;background:",
          c.Z.componentGray,
          ";color:",
          c.Z.white,
          ";width:32px;height:32px;border-radius:50%;transition:0.1s;",
          (0, l.mq)("mobile"),
          "{display:none;}"
        ),
        f = (0, r.Z)("a", { target: "e1px5nmb1" })(
          "display:flex;align-items:center;justify-content:space-between;width:100%;padding:24px 0px;border-top:1px solid ",
          c.Z.lineGray,
          ";border-bottom:1px solid ",
          c.Z.lineGray,
          ";cursor:pointer;margin-bottom:-1px;&:hover{",
          u,
          "{color:",
          c.Z.blueBlue,
          ";}",
          p,
          "{background:",
          c.Z.blueBlue,
          ";}}"
        ),
        h = (0, r.Z)("div", { target: "e1px5nmb0" })({
          name: "1269c88",
          styles: "display:flex;gap:7px",
        });
      t.Z = function (e) {
        var t = e.title,
          n = e.newspaper,
          r = e.date,
          s = e.url,
          l = e.onClick;
        return (0, d.jsxs)(f, {
          href: s,
          onClick: l,
          target: "_blank",
          children: [
            (0, d.jsxs)(o.Z, {
              vertical: !0,
              children: [
                (0, d.jsx)(u, { children: t }),
                (0, d.jsxs)(h, {
                  children: [
                    (0, d.jsx)(a.kM, { color: c.Z.blueBlue, children: n }),
                    (0, d.jsx)(a.kM, { color: c.Z.paragraphGray, children: r }),
                  ],
                }),
              ],
            }),
            (0, d.jsx)(p, { children: (0, d.jsx)(i.FNi, { size: 24 }) }),
          ],
        });
      };
    },
    60: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return c;
        },
        P: function () {
          return l;
        },
      });
      var r = n(4910),
        i = n(2564),
        o = n.n(i),
        a = n(2522),
        s = n(4931),
        c = function () {
          return (0, s.Z)({
            content_type: "news",
            order: "-fields.date",
            limit: 4,
          });
        },
        l = function (e) {
          return (0, a.useQuery)({
            queryFn: (function () {
              var t = (0, r.Z)(
                o().mark(function t() {
                  return o().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            s.a.getEntries({
                              content_type: "press-release",
                              "sys.id": e,
                            })
                          );
                        case 2:
                          return t.abrupt("return", t.sent);
                        case 3:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            enabled: !!e,
          });
        };
    },
    5264: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return Xe;
          },
        });
      var r = n(202),
        i = n(3326),
        o = n(4198),
        a = n(3006),
        s = n(7213),
        c = n.n(s),
        l = n(9513),
        d = n(5170),
        u = n(3373),
        p = n(2330),
        f = n(3123),
        h = n(8821),
        m = n(1992),
        g = n(7101),
        x = n(1513),
        v = n(8949),
        b = n(3010);
      var y = (0, o.Z)("div", { target: "ehiyloh1" })({
          name: "icrkq6",
          styles: "width:calc(100% + 60px);margin-left:-30px;margin-top:75px",
        }),
        j = (0, o.Z)("div", { target: "ehiyloh0" })({
          name: "nkt64x",
          styles: "margin-right:10px",
        });
      var w = function () {
        return (0, b.jsx)(y, {
          children: (0, b.jsxs)(v.Z, {
            loop: 0,
            gradientWidth: 0,
            children: [
              (0, b.jsx)(j, {
                children: (0, b.jsx)(c(), {
                  src: "/images/main/img__photo__main_teamkcd_1-mobile.png",
                  width: 249,
                  height: 220,
                  layout: "fixed",
                  alt: "team-kcd",
                }),
              }),
              (0, b.jsx)(j, {
                children: (0, b.jsx)(c(), {
                  src: "/images/main/img__photo__main_teamkcd_2-mobile.png",
                  width: 182,
                  height: 220,
                  layout: "fixed",
                  alt: "team-kcd",
                }),
              }),
              (0, b.jsx)(j, {
                children: (0, b.jsx)(c(), {
                  src: "/images/main/img__photo__main_teamkcd_3-mobile.png",
                  width: 282,
                  height: 220,
                  layout: "fixed",
                  alt: "team-kcd",
                }),
              }),
            ],
          }),
        });
      };
      function O(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Z = (0, o.Z)("div", { target: "eoc69hc1" })({
          name: "1gdi8le",
          styles: "display:flex;align-items:center;gap:40px;width:100%",
        }),
        E = (0, o.Z)("div", { target: "eoc69hc0" })(
          (0, x.mq)("mobile"),
          "{width:100%;}"
        );
      var _ = function () {
          var e = (0, l.useRouter)();
          return (0, b.jsx)(p.Z, {
            backgroundColor: m.Z.textWhite,
            padding: { pc: [148, 120], mobile: [105, 150] },
            children: (0, b.jsxs)(Z, {
              children: [
                (0, b.jsxs)(E, {
                  children: [
                    (0, b.jsx)(h.Z, {
                      category: "Team KCD",
                      title:
                        "\ubaa8\ub4e0 \uace0\ubbfc\uc740 \uc0ac\uc7a5\ub2d8\uc5d0 \ub300\ud55c\n\uacf5\uac10\uc5d0\uc11c \uc2dc\uc791\ud569\ub2c8\ub2e4.",
                      description:
                        "\uc6b0\ub9ac\ub294 \uc0ac\uc5c5\uc758 \ubaa8\ub4e0 \uc21c\uac04, \uc0ac\uc7a5\ub2d8\uc774 \uacaa\ub294 \ubb38\uc81c\ub97c\n\ud574\uacb0\ud558\uae30 \uc704\ud574 \ubaa8\uc5ec \uc788\uc2b5\ub2c8\ub2e4.\n\uc6b0\ub9ac\ub294 \ud558\ub098\uc758 \ubaa9\ud45c\ub97c \uacf5\uc720\ud558\uba70 \ud568\uaed8 \ub3c4\uc804\ud558\uace0 \uc131\uc7a5\ud569\ub2c8\ub2e4.\n\ubbff\uc744 \uc218 \uc788\ub294 \ub3d9\ub8cc\ub4e4\uacfc \ube60\ub974\uac8c \uc6c0\uc9c1\uc774\uba70\n\uc5b8\uc81c\ub098 \ud55c \ubc1c \uba3c\uc800 \ub098\uc544\uac11\ub2c8\ub2e4.",
                      align: "left",
                    }),
                    (0, b.jsx)(f.Z, { mobile: (0, b.jsx)(w, {}), pc: null }),
                    (0, b.jsx)(u.Z, {
                      onClick: function () {
                        return e.push("team");
                      },
                      className: (0, a.iv)(
                        "width:260px;margin-top:65px;",
                        (0, x.mq)("mobile"),
                        "{width:210px;margin:0 auto;margin-top:78px;}",
                        ""
                      ),
                      children: "\uc790\uc138\ud788 \ubcf4\uae30",
                    }),
                  ],
                }),
                (0, b.jsx)(f.Z, {
                  mobile: null,
                  pc: (0, b.jsx)(
                    E,
                    k(
                      k({}, (0, g.Z)()),
                      {},
                      {
                        children: (0, b.jsx)(c(), {
                          src: "/images/main/img__photo__main_teamkcd.png",
                          width: 705,
                          height: 811,
                          alt: "team-kcd",
                        }),
                      }
                    )
                  ),
                }),
              ],
            }),
          });
        },
        P = n(5147),
        M = n(1286),
        q = (0, o.Z)("div", { target: "e9n9l1p2" })(
          "width:32px;height:32px;display:flex;justify-content:center;align-items:center;border-radius:50%;font-size:16px;background:",
          m.Z.lightBlue,
          ";transition:0.2s;path{stroke:rgba(0, 0, 0, 0.4);}",
          (0, x.mq)("mobile"),
          "{width:22px;height:22px;}"
        ),
        D = (0, o.Z)("span", { target: "e9n9l1p1" })(
          "color:",
          m.Z.lightBlue,
          ";font-weight:500;font-size:18px;line-height:30px;margin-bottom:8px;transition:0.2s;",
          (0, x.mq)("mobile"),
          "{font-size:16px;line-height:22px;margin-right:7px;margin-bottom:0px;}"
        ),
        z = (0, o.Z)("button", { target: "e9n9l1p0" })(
          "position:absolute;bottom:46px;left:50%;transform:translateX(-50%);display:flex;justify-content:center;align-items:center;flex-direction:column;",
          (0, x.mq)("mobile"),
          "{flex-direction:row;}",
          D,
          "{color:#f3faff;}",
          q,
          "{background:#f3faff;}&:hover{",
          D,
          "{color:",
          m.Z.kcdBlue,
          ";}",
          q,
          "{background:",
          m.Z.kcdBlue,
          ";}}"
        );
      var C = function (e) {
          var t = e.title,
            n = e.to,
            r = (0, x.d)();
          return (0, b.jsxs)(z, {
            onClick: function () {
              try {
                var e = document.querySelector(n);
                if (!e) throw new Error();
                window.scrollTo({ top: e.offsetTop, behavior: "smooth" });
              } catch (t) {
                console.warn(
                  "\ud0c0\uac9f\uc774 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. <Signpost /> \uc758 to \uc18d\uc131\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694."
                );
              }
            },
            children: [
              (0, b.jsx)(D, { children: t }),
              (0, b.jsx)(q, {
                children: (0, b.jsx)(M.Z, {
                  width: r ? 12 : 18,
                  height: r ? 6 : 10,
                }),
              }),
            ],
          });
        },
        B = n(2312);
      var W = function () {
        return (0, b.jsx)(c(), {
          src: "/images/main/logo_video_symbol.png",
          width: 168,
          height: 43,
          alt: "logo",
        });
      };
      var N = (0, o.Z)("div", { target: "e1piklyq3" })({
          name: "s1n8ed",
          styles: "height:100vh",
        }),
        S = (0, o.Z)("div", { target: "e1piklyq2" })({
          name: "52u7x",
          styles:
            "position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex;align-items:center;justify-content:center;width:100%;padding:0 20px",
        }),
        H = (0, o.Z)(B.Ff, { target: "e1piklyq1" })(
          "color:",
          m.Z.white,
          ";text-shadow:1px 2px 10px rgba(0, 0, 0, 0.2);text-align:center;animation:up 0.5s backwards;@keyframes up{0%{opacity:0;}100%{opacity:1;}}"
        ),
        R = (0, o.Z)("video", { target: "e1piklyq0" })({
          name: "qx6f09",
          styles: "position:absolute;width:100%;height:100%;object-fit:cover",
        });
      var X = function () {
          var e = d.useState({ isEnding: !1, description: "" }),
            t = (0, P.Z)(e, 2),
            n = t[0],
            r = t[1],
            i = d.useRef(null),
            o = (0, d.useRef)(null),
            a = (0, x.d)(),
            s = (0, d.useCallback)(function (e) {
              if (i.current) {
                var t = (function (e) {
                  switch (!0) {
                    case e >= 0 && e < 1:
                      return {
                        isEnding: !1,
                        description:
                          "\uc0ac\uc5c5\uc744 \uc2dc\uc791\ud558\uace0",
                      };
                    case e <= 1 && e < 2:
                      return {
                        isEnding: !1,
                        description:
                          "\uc0ac\uc5c5\uc744 \uc6b4\uc601\ud558\uace0",
                      };
                    case e <= 2 && e < 4:
                      return {
                        isEnding: !1,
                        description:
                          "\uc0ac\uc5c5\uc744 \uc131\uc7a5\uc2dc\ud0a4\ub294",
                      };
                    case e <= 4 && e < 5:
                      return {
                        isEnding: !1,
                        description:
                          "\ubaa8\ub4e0 \uacfc\uc815\uc774 \uc26c\uc6cc\uc9c0\ub3c4\ub85d \ub3d5\uc2b5\ub2c8\ub2e4",
                      };
                    case e <= 5 && e < 7:
                      return {
                        isEnding: !1,
                        description:
                          "\uc0ac\uc5c5\uc758 \ubaa8\ub4e0 \uc21c\uac04",
                      };
                    case e <= 7 && e < 8:
                      return {
                        isEnding: !1,
                        description: "\ub354 \uc27d\uac8c,",
                      };
                    case e <= 8 && e < 9:
                      return {
                        isEnding: !1,
                        description:
                          "\ub354 \uc27d\uac8c, \ub354 \ube60\ub974\uac8c,",
                      };
                    case e <= 9 && e < 10:
                      return {
                        isEnding: !1,
                        description:
                          "\ub354 \uc27d\uac8c, \ub354 \ube60\ub974\uac8c, \ub354 \ub611\ub611\ud558\uac8c",
                      };
                    default:
                      return { isEnding: !0, description: "" };
                  }
                })(e.target.currentTime);
                r(t);
              }
            }, []);
          return (0, b.jsxs)(N, {
            ref: o,
            children: [
              (0, b.jsx)(R, {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                onTimeUpdate: s,
                ref: i,
                preload: "auto",
                children: (0, b.jsx)("source", {
                  src: a ? "/main__video-m.mp4" : "/main__video.mp4",
                }),
              }),
              (0, b.jsxs)(
                S,
                {
                  children: [
                    (null === n || void 0 === n ? void 0 : n.isEnding) &&
                      (0, b.jsx)(W, {}),
                    (null === n || void 0 === n ? void 0 : n.description) &&
                      (0, b.jsx)(H, { children: n.description }),
                  ],
                },
                null === n || void 0 === n ? void 0 : n.description
              ),
              (0, b.jsx)(C, { title: "Our Story", to: "#section2" }),
            ],
          });
        },
        T = n(6005),
        V = n(60),
        F = n(3809);
      function A(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var G,
        $,
        L,
        Y,
        I = function () {
          var e = (0, V.J)();
          return (0, b.jsxs)(p.Z, {
            padding: { pc: [162, 137], mobile: [105, 142] },
            children: [
              (0, b.jsx)(h.Z, {
                category: "Team News",
                title:
                  "\ud55c\uad6d\uc2e0\uc6a9\ub370\uc774\ud130 \uc8fc\uc694 \uc18c\uc2dd",
                align: "left",
              }),
              null === e || void 0 === e
                ? void 0
                : e.items.map(function (e) {
                    return (0, b.jsx)(
                      F.Z,
                      (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? A(Object(n), !0).forEach(function (t) {
                                (0, i.Z)(e, t, n[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n)
                              )
                            : A(Object(n)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                                );
                              });
                        }
                        return e;
                      })({}, e.fields),
                      e.fields.title
                    );
                  }),
              (0, b.jsx)(T.Z, {
                href: "/news?type=\ucd5c\uc2e0\ub274\uc2a4",
                className: (0, a.iv)(
                  "width:260px;margin:0 auto;margin-top:50px;",
                  (0, x.mq)("mobile"),
                  "{width:210px;margin-top:78px;}",
                  ""
                ),
                children: "\ub354\ubcf4\uae30",
              }),
            ],
          });
        },
        J = n(7190);
      function K() {
        return (
          (K = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          K.apply(this, arguments)
        );
      }
      var Q,
        U,
        ee = function (e) {
          return d.createElement(
            "svg",
            K(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "0 0 34 34",
                fill: "none",
              },
              e
            ),
            G ||
              (G = d.createElement("path", {
                d: "M1 12.14h4.64v9.09",
                stroke: "#fff",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              })),
            $ ||
              ($ = d.createElement("path", {
                d: "M1 23.62h4.64v6.74h26V4h-26v5.75",
                stroke: "#fff",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              })),
            L ||
              (L = d.createElement("path", {
                d: "m12.89 11.9 3.44 10.41M21.09 22.31l3.45-10.41M16.331 22.311l2.38-6.61M18.71 15.701l2.38 6.61",
                stroke: "#fff",
                strokeWidth: 2,
                strokeMiterlimit: 10,
                strokeLinecap: "round",
              })),
            Y ||
              (Y = d.createElement("path", {
                d: "M13.93 16.371H10.9M26.52 16.371h-3.03",
                stroke: "#fff",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }))
          );
        };
      function te() {
        return (
          (te = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          te.apply(this, arguments)
        );
      }
      var ne,
        re,
        ie = function (e) {
          return d.createElement(
            "svg",
            te(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "0 0 34 34",
                fill: "none",
              },
              e
            ),
            Q ||
              (Q = d.createElement("path", {
                d: "m23.76 26 6.49 5.64V6.82H7.63V26h16.13Z",
                stroke: "#fff",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              })),
            U ||
              (U = d.createElement("path", {
                d: "M4 24.96V3h21.05M12.82 12.22h12.23M12.82 15.86h12.23",
                stroke: "#fff",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }))
          );
        };
      function oe() {
        return (
          (oe = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          oe.apply(this, arguments)
        );
      }
      var ae,
        se,
        ce = function (e) {
          return d.createElement(
            "svg",
            oe(
              {
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 27",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            ne ||
              (ne = d.createElement(
                "g",
                {
                  clipPath: "url(#ic__finance_svg__a)",
                  stroke: "#fff",
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                },
                d.createElement("path", {
                  d: "M17.5 22.7V8.8M6.5 22.7V8.8M12 22.7V1.41M14.95 4.37 12 1.41 9.05 4.37M23 1.41v24.07H1v-6.73",
                })
              )),
            re ||
              (re = d.createElement(
                "defs",
                null,
                d.createElement(
                  "clipPath",
                  { id: "ic__finance_svg__a" },
                  d.createElement("path", {
                    fill: "#fff",
                    d: "M0 0h24v26.48H0z",
                  })
                )
              ))
          );
        };
      function le() {
        return (
          (le = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          le.apply(this, arguments)
        );
      }
      var de,
        ue,
        pe = function (e) {
          return d.createElement(
            "svg",
            le(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "0 0 34 31",
                fill: "none",
              },
              e
            ),
            ae ||
              (ae = d.createElement(
                "g",
                {
                  clipPath: "url(#ic__market_svg__a)",
                  stroke: "#fff",
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                },
                d.createElement("path", {
                  d: "M0 1h4.84l3.62 21.16-1.08 3.42h24.7M14.81 27.28a2 2 0 1 1-4 0M28.32 27.28a2 2 0 1 1-4 0",
                }),
                d.createElement("path", {
                  d: "M6.39 6.62h25.67l-2.29 15.54H10.44M13.85 9.43v10.04M19.2 9.43v10.04M24.55 9.43v10.04M9.97 14.45h18.46",
                })
              )),
            se ||
              (se = d.createElement(
                "defs",
                null,
                d.createElement(
                  "clipPath",
                  { id: "ic__market_svg__a" },
                  d.createElement("path", {
                    fill: "#fff",
                    d: "M0 0h33.22v30.29H0z",
                  })
                )
              ))
          );
        };
      function fe() {
        return (
          (fe = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          fe.apply(this, arguments)
        );
      }
      var he = function (e) {
          return d.createElement(
            "svg",
            fe(
              {
                width: "1em",
                height: "1em",
                viewBox: "0 0 31 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            de ||
              (de = d.createElement(
                "g",
                {
                  clipPath: "url(#ic__pos_svg__a)",
                  stroke: "#fff",
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                },
                d.createElement("path", {
                  d: "M27.66 9.5H3.21v14.05h24.45V9.5ZM29.86 23.55H1v7.43h28.86v-7.43ZM26.9 1H14.18v4.47H26.9V1ZM20.54 5.47V9.5M6.84 13.85h6.17M6.77 17.38h6.18",
                })
              )),
            ue ||
              (ue = d.createElement(
                "defs",
                null,
                d.createElement(
                  "clipPath",
                  { id: "ic__pos_svg__a" },
                  d.createElement("path", {
                    fill: "#fff",
                    d: "M0 0h30.86v31.98H0z",
                  })
                )
              ))
          );
        },
        me = [
          { title: "\uc7a5\ubd80", icon: (0, b.jsx)(ee, {}) },
          { title: "\uae08\uc735", icon: (0, b.jsx)(ce, {}) },
          { title: "\ub9c8\ucf13", icon: (0, b.jsx)(pe, {}) },
          { title: "\ud3ec\uc2a4", icon: (0, b.jsx)(he, {}) },
          { title: "\ucee4\ubba4\ub2c8\ud2f0", icon: (0, b.jsx)(ie, {}) },
        ];
      function ge(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function xe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ge(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ge(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ve = (0, o.Z)("div", { target: "e14bghqy2" })({
          name: "1lxnzgl",
          styles:
            "display:grid;grid-template-columns:1fr 1fr;grid-row-gap:20px;grid-column-gap:64px",
        }),
        be = (0, o.Z)("div", { target: "e14bghqy1" })({
          name: "qn4837",
          styles:
            "display:flex;justify-content:center;align-items:center;flex-shrink:0;width:62px;height:62px;margin-right:13px;border-radius:50%;&:nth-of-type(even){}",
        }),
        ye = (0, o.Z)("div", { target: "e14bghqy0" })(
          "display:flex;align-items:center;font-size:30px;&:last-child{grid-column:span 2;}&:nth-of-type(odd) ",
          be,
          "{background:",
          m.Z.blueBlue,
          ";}&:nth-of-type(even) ",
          be,
          "{background:",
          m.Z.kcdBlue,
          ";}"
        );
      var je = function () {
          return (0, b.jsx)(
            ve,
            xe(
              xe({}, (0, g.Z)()),
              {},
              {
                children: me.map(function (e) {
                  var t = e.title,
                    n = e.icon;
                  return (0,
                  b.jsxs)(ye, { children: [(0, b.jsx)(be, { children: n }), (0, b.jsx)(J.W6, { children: t })] }, t);
                }),
              }
            )
          );
        },
        we = n(9473);
      var Oe = (0, o.Z)("div", { target: "e1wp1kd2" })({
          name: "zjik7",
          styles: "display:flex",
        }),
        ke = (0, o.Z)("div", { target: "e1wp1kd1" })(
          "display:flex;justify-content:center;align-items:center;gap:18px;width:200px;height:200px;border-radius:50%;color:",
          m.Z.white,
          ";transition:1s;visibility:hidden;&:nth-of-type(even){z-index:1;&:before{content:'';border-radius:50%;position:absolute;width:100%;height:100%;opacity:0.8;background:",
          m.Z.kcdBlue,
          ";}}&:nth-of-type(odd){background:",
          m.Z.blueBlue,
          ";}&:nth-of-type(3){visibility:visible;transform:scale(0);}&:nth-of-type(1){transform:translateX(200%);}&:nth-of-type(2){transform:translateX(100%);}&:nth-of-type(4){transform:translateX(-100%);}&:nth-of-type(5){transform:translateX(-200%);}"
        ),
        Ze = (0, o.Z)("div", { target: "e1wp1kd0" })(
          "text-align:center;opacity:0;font-size:32px;h4{color:",
          m.Z.white,
          ";}"
        );
      var Ee = function () {
        var e = (0, d.useRef)(null),
          t = (0, d.useRef)([]),
          n = (0, d.useRef)([]),
          r = (function (e) {
            var t = e.ref,
              n = e.onAnimationFinish,
              r = (0, we.YD)({ triggerOnce: !0 }),
              i = r.ref,
              o = r.inView;
            return (
              (0, d.useEffect)(
                function () {
                  if (o) {
                    var e,
                      r =
                        null === (e = t.current) || void 0 === e
                          ? void 0
                          : e.animate(
                              [
                                { transform: "scale(0)" },
                                { transform: "scale(1)" },
                              ],
                              { duration: 500, fill: "forwards" }
                            );
                    null === r ||
                      void 0 === r ||
                      r.addEventListener("finish", function () {
                        return null === n || void 0 === n ? void 0 : n();
                      });
                  }
                },
                [o, n, t]
              ),
              i
            );
          })({
            ref: e,
            onAnimationFinish: function () {
              t.current.forEach(function (e, t) {
                (e.style.visibility = "visible"),
                  0 === t && (e.style.transform = "translateX(20%)"),
                  1 === t && (e.style.transform = "translateX(10%)"),
                  2 === t && (e.style.transform = "translateX(-10%)"),
                  3 === t && (e.style.transform = "translateX(-20%)");
              });
            },
          });
        return (0, b.jsxs)(Oe, {
          ref: r,
          children: [
            (0, b.jsx)(ke, {
              ref: function (e) {
                t.current[0] = e;
              },
              onTransitionEnd: function () {
                n.current.map(function (e) {
                  return e.animate([{ opacity: 0 }, { opacity: 1 }], {
                    duration: 1e3,
                    easing: "ease",
                    fill: "forwards",
                  });
                });
              },
              children: (0, b.jsxs)(Ze, {
                ref: function (e) {
                  return (n.current[0] = e);
                },
                children: [
                  (0, b.jsx)(ee, {}),
                  (0, b.jsx)(J.W6, { children: "\uc7a5\ubd80" }),
                ],
              }),
            }),
            (0, b.jsx)(ke, {
              ref: function (e) {
                t.current[1] = e;
              },
              children: (0, b.jsxs)(Ze, {
                ref: function (e) {
                  return (n.current[1] = e);
                },
                children: [
                  (0, b.jsx)(ce, {}),
                  (0, b.jsx)(J.W6, {
                    color: m.Z.white,
                    children: "\uae08\uc735",
                  }),
                ],
              }),
            }),
            (0, b.jsx)(ke, {
              ref: e,
              children: (0, b.jsxs)(Ze, {
                ref: function (e) {
                  return (n.current[2] = e);
                },
                children: [
                  (0, b.jsx)(pe, {}),
                  (0, b.jsx)(J.W6, { children: "\ub9c8\ucf13" }),
                ],
              }),
            }),
            (0, b.jsx)(ke, {
              ref: function (e) {
                t.current[2] = e;
              },
              children: (0, b.jsxs)(Ze, {
                ref: function (e) {
                  return (n.current[3] = e);
                },
                children: [
                  (0, b.jsx)(he, {}),
                  (0, b.jsx)(J.W6, {
                    color: m.Z.white,
                    children: "\ud3ec\uc2a4",
                  }),
                ],
              }),
            }),
            (0, b.jsx)(ke, {
              ref: function (e) {
                t.current[3] = e;
              },
              children: (0, b.jsxs)(Ze, {
                ref: function (e) {
                  return (n.current[4] = e);
                },
                children: [
                  (0, b.jsx)(ie, {}),
                  (0, b.jsx)(J.W6, { children: "\ucee4\ubba4\ub2c8\ud2f0" }),
                ],
              }),
            }),
          ],
        });
      };
      function _e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _e(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _e(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Me = (0, o.Z)("div", { target: "eootppl2" })(
          "display:flex;flex-direction:column;align-items:center;margin-top:54px;",
          (0, x.mq)("mobile"),
          "{width:100%;align-items:flex-start;margin-top:75px;gap:35px;}"
        ),
        qe = (0, o.Z)("div", { target: "eootppl1" })(
          "width:260px;margin:0 auto;margin-top:76px;",
          (0, x.mq)("mobile"),
          "{width:210px;margin-top:78px;}"
        ),
        De = (0, o.Z)(J.W6, { target: "eootppl0" })(
          "text-align:center;",
          (0, x.mq)("mobile"),
          "{width:100%;text-align:left;}"
        );
      var ze = function () {
          var e = (0, l.useRouter)(),
            t = (0, x.d)();
          return (0, b.jsxs)(p.Z, {
            id: "section2",
            padding: { pc: [185, 208], mobile: [105, 150] },
            children: [
              (0, b.jsx)(h.Z, {
                category: "Our Story",
                title:
                  "\uc0ac\uc5c5\uc758 \ubaa8\ub4e0 \uc21c\uac04 \ub9c8\uc8fc\ud558\ub294 \ubb38\uc81c\ub97c\n\ub370\uc774\ud130\uc640 \uc5f0\uacb0\ub85c \ud480\uc5b4\ub0b4\uace0\uc790 \ud569\ub2c8\ub2e4.",
                description:
                  "NO.1 \uc0ac\uc5c5\uc790 \uacbd\uc601\uad00\ub9ac \uc11c\ube44\uc2a4",
                align: t ? "left" : "center",
              }),
              (0, b.jsx)(De, { children: "\uce90\uc2dc\ub178\ud2b8" }),
              (0, b.jsxs)(Me, {
                children: [
                  (0, b.jsx)(f.Z, {
                    pc: (0, b.jsx)(Ee, {}),
                    mobile: (0, b.jsx)(je, {}),
                  }),
                  (0, b.jsx)(
                    qe,
                    Pe(
                      Pe({}, (0, g.Z)()),
                      {},
                      {
                        children: (0, b.jsx)(u.Z, {
                          onClick: function () {
                            return e.push("service");
                          },
                          children: "\uc11c\ube44\uc2a4 \ubcf4\uae30",
                        }),
                      }
                    )
                  ),
                ],
              }),
            ],
          });
        },
        Ce = n(7808),
        Be = n(5103),
        We = (0, o.Z)(B.O6, { target: "e14gxev61" })(
          "margin-bottom:105px;text-align:center;",
          (0, x.mq)("mobile"),
          "{margin-bottom:68px;text-align:left;}"
        ),
        Ne = (0, o.Z)("div", { target: "e14gxev60" })(
          "display:flex;justify-content:space-between;",
          (0, x.mq)("mobile"),
          "{flex-direction:column;gap:58px;h4{transform:translateY(15px);}}"
        );
      var Se = function () {
          var e = (0, Be.b)(),
            t =
              (null === e || void 0 === e
                ? void 0
                : e.items[0].fields.turnover) || 470,
            n =
              (null === e || void 0 === e ? void 0 : e.items[0].fields.users) ||
              150,
            r =
              (null === e || void 0 === e
                ? void 0
                : e.items[0].fields.baseDateStr) ||
              ""
                .concat(new Date().getFullYear(), "\ub144 ")
                .concat(new Date().getMonth() + 1, "\uc6d4 \uae30\uc900");
          return (0, b.jsxs)(p.Z, {
            backgroundColor: m.Z.darkNavy,
            padding: { pc: [203, 324], mobile: [158, 163] },
            children: [
              (0, b.jsxs)(We, {
                color: m.Z.white,
                children: [
                  "\uc0ac\uc5c5\uc758 \ubaa8\ub4e0 \uc21c\uac04",
                  (0, b.jsx)("br", {}),
                  "\ub204\uad6c\ub098 \uae30\uc220 \ud61c\ud0dd\uc744 \ub204\ub9b4 \uc218 \uc788\ub294 \uc138\uc0c1\uc744 \ub9cc\ub4ed\ub2c8\ub2e4.",
                ],
              }),
              (0, b.jsxs)(Ne, {
                children: [
                  (0, b.jsx)(Ce.Z, {
                    darken: !0,
                    title:
                      "\uce90\uc2dc\ub178\ud2b8 \uc774\uc6a9 \uc0ac\uc5c5\uc7a5",
                    description: r,
                    count: n,
                    suffix: "\ub9cc<span>+</span>",
                  }),
                  (0, b.jsx)(Ce.Z, {
                    darken: !0,
                    title:
                      "\ubd84\uc11d \uc911\uc778 \uac70\ub798 \uc815\ubcf4",
                    description: "\uc5f0\uac04 ".concat(
                      t,
                      "\uc870 \uc6d0 \uaddc\ubaa8"
                    ),
                    count: t,
                    suffix: "\uc870<span>+</span>",
                  }),
                  (0, b.jsx)(Ce.Z, {
                    darken: !0,
                    title: "\ub204\uc801 \ud22c\uc790 \uc720\uce58\uc561",
                    description: r,
                    count: 3100,
                    suffix: "\uc5b5<span>+</span>",
                    minWidth: 370,
                  }),
                ],
              }),
            ],
          });
        },
        He = (0, o.Z)("div", { target: "ec2q1wx0" })(
          "position:relative;background:",
          m.Z.darkNavy,
          ";padding:165px 30px 167px 30px;",
          (0, x.mq)("mobile"),
          "{padding:171px 30px 149px 30px;}"
        );
      var Re = function () {
          return (0, b.jsxs)(He, {
            children: [
              (0, b.jsx)(h.Z, {
                category: "Team KCD",
                categoryColor: m.Z.lightBlueBlue,
                title:
                  "\ud55c\uad6d\uc2e0\uc6a9\ub370\uc774\ud130\uc640 \ud568\uaed8 \ub098\uc544\uac08 \ubd84\ub4e4\uc744 \ucc3e\uc2b5\ub2c8\ub2e4.",
                darken: !0,
                align: "center",
              }),
              (0, b.jsx)(T.Z, {
                href: "/recruit?type=\uc804\uccb4",
                inverse: !0,
                className: (0, a.iv)(
                  "width:260px;margin:0 auto;margin-top:41px;",
                  (0, x.mq)("mobile"),
                  "{width:210px;margin-top:33px;}",
                  ""
                ),
                children: "\uc778\uc7ac\uc601\uc785 \uc911",
              }),
            ],
          });
        },
        Xe = function () {
          return (0, b.jsxs)(r.Z, {
            children: [
              (0, b.jsx)(X, {}),
              (0, b.jsx)(ze, {}),
              (0, b.jsx)(Se, {}),
              (0, b.jsx)(_, {}),
              (0, b.jsx)(I, {}),
              (0, b.jsx)(Re, {}),
            ],
          });
        };
    },
    7922: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(5264);
        },
      ]);
    },
    8949: function (e, t, n) {
      var r = n(5170);
      function i(e) {
        return e && "object" === typeof e && "default" in e
          ? e
          : { default: e };
      }
      var o = i(r);
      !(function (e) {
        if (!e || "undefined" === typeof window) return;
        const t = document.createElement("style");
        t.setAttribute("type", "text/css"),
          (t.innerHTML = e),
          document.head.appendChild(t);
      })(
        '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0.1));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'
      );
      const a = r.forwardRef(function (
        {
          style: e = {},
          className: t = "",
          autoFill: n = !1,
          play: i = !0,
          pauseOnHover: a = !1,
          pauseOnClick: s = !1,
          direction: c = "left",
          speed: l = 50,
          delay: d = 0,
          loop: u = 0,
          gradient: p = !1,
          gradientColor: f = "white",
          gradientWidth: h = 200,
          onFinish: m,
          onCycleComplete: g,
          onMount: x,
          children: v,
        },
        b
      ) {
        const [y, j] = r.useState(0),
          [w, O] = r.useState(0),
          [k, Z] = r.useState(1),
          [E, _] = r.useState(!1),
          P = r.useRef(null),
          M = b || P,
          q = r.useRef(null),
          D = r.useCallback(() => {
            if (q.current && M.current) {
              const e = M.current.getBoundingClientRect(),
                t = q.current.getBoundingClientRect();
              let r = e.width,
                i = t.width;
              ("up" !== c && "down" !== c) || ((r = e.height), (i = t.height)),
                Z(n && r && i && i < r ? Math.ceil(r / i) : 1),
                j(r),
                O(i);
            }
          }, [n, M, c]);
        r.useEffect(() => {
          if (E && (D(), q.current && M.current)) {
            const e = new ResizeObserver(() => D());
            return (
              e.observe(M.current),
              e.observe(q.current),
              () => {
                e && e.disconnect();
              }
            );
          }
        }, [D, M, E]),
          r.useEffect(() => {
            D();
          }, [D, v]),
          r.useEffect(() => {
            _(!0);
          }, []),
          r.useEffect(() => {
            "function" === typeof x && x();
          }, []);
        const z = r.useMemo(
            () => (n ? (w * k) / l : w < y ? y / l : w / l),
            [n, y, w, k, l]
          ),
          C = r.useMemo(
            () =>
              Object.assign(Object.assign({}, e), {
                "--pause-on-hover": !i || a ? "paused" : "running",
                "--pause-on-click": !i || (a && !s) || s ? "paused" : "running",
                "--width": "up" === c || "down" === c ? "100vh" : "100%",
                "--transform":
                  "up" === c
                    ? "rotate(-90deg)"
                    : "down" === c
                    ? "rotate(90deg)"
                    : "none",
              }),
            [e, i, a, s, c]
          ),
          B = r.useMemo(
            () => ({
              "--gradient-color": f,
              "--gradient-width": "number" === typeof h ? `${h}px` : h,
            }),
            [f, h]
          ),
          W = r.useMemo(
            () => ({
              "--play": i ? "running" : "paused",
              "--direction": "left" === c ? "normal" : "reverse",
              "--duration": `${z}s`,
              "--delay": `${d}s`,
              "--iteration-count": u ? `${u}` : "infinite",
              "--min-width": n ? "auto" : "100%",
            }),
            [i, c, z, d, u, n]
          ),
          N = r.useMemo(
            () => ({
              "--transform":
                "up" === c
                  ? "rotate(90deg)"
                  : "down" === c
                  ? "rotate(-90deg)"
                  : "none",
            }),
            [c]
          ),
          S = r.useCallback(
            (e) =>
              [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                o.default.createElement(
                  r.Fragment,
                  { key: t },
                  r.Children.map(v, (e) =>
                    o.default.createElement(
                      "div",
                      { style: N, className: "rfm-child" },
                      e
                    )
                  )
                )
              ),
            [N, v]
          );
        return E
          ? o.default.createElement(
              "div",
              { ref: M, style: C, className: "rfm-marquee-container " + t },
              p &&
                o.default.createElement("div", {
                  style: B,
                  className: "rfm-overlay",
                }),
              o.default.createElement(
                "div",
                {
                  className: "rfm-marquee",
                  style: W,
                  onAnimationIteration: g,
                  onAnimationEnd: m,
                },
                o.default.createElement(
                  "div",
                  { className: "rfm-initial-child-container", ref: q },
                  r.Children.map(v, (e) =>
                    o.default.createElement(
                      "div",
                      { style: N, className: "rfm-child" },
                      e
                    )
                  )
                ),
                S(k - 1)
              ),
              o.default.createElement(
                "div",
                { className: "rfm-marquee", style: W },
                S(k)
              )
            )
          : null;
      });
      t.Z = a;
    },
  },
  function (e) {
    e.O(
      0,
      [
        7144, 5544, 648, 8413, 2850, 5626, 6562, 4378, 2323, 2319, 9774, 2888,
        179,
      ],
      function () {
        return (t = 7922), e((e.s = t));
        var t;
      }
    );
    var t = e.O();
    _N_E = t;
  },
]);

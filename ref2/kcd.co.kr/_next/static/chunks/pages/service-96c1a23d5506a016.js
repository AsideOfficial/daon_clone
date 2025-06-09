(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2423],
  {
    3373: function (e, t, r) {
      "use strict";
      var n = r(3326),
        i = r(9939),
        o = r(4198),
        c = r(6551),
        s = (r(5170), r(1992)),
        a = r(3010),
        p = ["children", "icon"];
      function l(e, t) {
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var u = { name: "1y5k4vp", styles: "border-color:#fff;color:#fff" },
        f = (0, o.Z)("button", { target: "e1eifqiz1" })(
          "display:flex;align-items:center;justify-content:center;width:100%;padding:15px 32px;font-size:16px;font-weight:700;border:1px solid ",
          s.Z.primary,
          ";border-radius:6px;",
          function (e) {
            return e.inverse && u;
          },
          " ",
          function (e) {
            var t = e.width;
            return t && (0, c.css)("width:", t, "px;", "");
          },
          " transition:.2s;&:hover{background-color:",
          s.Z.kcdBlue,
          ";border-color:",
          s.Z.kcdBlue,
          ";color:",
          s.Z.white,
          ";}"
        ),
        g = (0, o.Z)("span", { target: "e1eifqiz0" })("");
      t.Z = function (e) {
        var t = e.children,
          r = e.icon,
          n = (0, i.Z)(e, p);
        return (0, a.jsxs)(
          f,
          m(
            m({}, n),
            {},
            {
              children: [
                r,
                (0, a.jsx)(g, {
                  style: { marginLeft: r ? 4 : 0 },
                  children: t,
                }),
              ],
            }
          )
        );
      };
    },
    4931: function (e, t, r) {
      "use strict";
      r.d(t, {
        a: function () {
          return a;
        },
      });
      var n = r(4910),
        i = r(2564),
        o = r.n(i),
        c = r(8649),
        s = r(5170),
        a = (0, c.e)({
          space: "4io3pho3xfqe",
          accessToken: "R4CjfAVANnb9vdkStCaGCFQFTqCx4zLlJnq14mc3TGA",
        });
      t.Z = function (e) {
        var t = e.content_type,
          r = e.limit,
          i = void 0 === r ? 100 : r,
          c = e.skip,
          p = void 0 === c ? 0 : c,
          l = e.order,
          m = (0, s.useState)(null),
          u = m[0],
          f = m[1];
        return (
          (0, s.useEffect)(
            function () {
              function e() {
                return (
                  (e = (0, n.Z)(
                    o().mark(function e() {
                      var r;
                      return o().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                a.getEntries({
                                  content_type: t,
                                  limit: i,
                                  skip: p,
                                  order: l,
                                })
                              );
                            case 2:
                              (r = e.sent), f(r);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )),
                  e.apply(this, arguments)
                );
              }
              !(function () {
                e.apply(this, arguments);
              })();
            },
            [t, i, p, l]
          ),
          u
        );
      };
    },
    9093: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return Qe;
          },
        });
      var n = r(9089),
        i = r.n(n),
        o = r(202),
        c = r(4198),
        s = r(3006),
        a = r(5170),
        p = r(3373),
        l = r(2330),
        m = r(3123),
        u = r(8821),
        f = r(170),
        g = r(7190),
        b = r(1992),
        d = r(1640),
        j = r(4400),
        y = r(1513),
        x = r(3326),
        O = r(7213),
        v = r.n(O),
        h = r(7101),
        w = r(3010);
      function P(e, t) {
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
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? P(Object(r), !0).forEach(function (t) {
                (0, x.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : P(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var k = (0, c.Z)("div", { target: "e1gdtyrm0" })({
        name: "zjik7",
        styles: "display:flex",
      });
      var _ = function () {
        return (0, w.jsx)(k, {
          children: (0, w.jsx)(
            v(),
            Z(
              {
                src: "/images/service/img__photo__service_dataportal.png",
                width: 600,
                height: 536,
                alt: "market__app",
              },
              (0, h.Z)({ sequence: 1 })
            )
          ),
        });
      };
      function D(e, t) {
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
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? D(Object(r), !0).forEach(function (t) {
                (0, x.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : D(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var q = (0, c.Z)("div", { target: "euefmil0" })({
        name: "zl1inp",
        styles: "display:flex;justify-content:center",
      });
      var S = function () {
          return (0, w.jsx)(q, {
            children: (0, w.jsx)(
              v(),
              E(
                {
                  src: "/images/service/img__photo__service_dataportal-m.png",
                  width: 354,
                  height: 340,
                  alt: "market__app",
                },
                (0, h.Z)({ sequence: 1 })
              )
            ),
          });
        },
        C = (0, c.Z)("div", { target: "emfy8xp4" })(
          "display:inline-block;",
          (0, y.mq)("mobile"),
          "{text-align:center;}"
        ),
        N = (0, c.Z)("div", { target: "emfy8xp3" })(
          "display:flex;",
          (0, y.mq)("mobile"),
          "{flex-direction:column;align-items:center;}"
        ),
        z = (0, c.Z)(g.lx, { target: "emfy8xp2" })(
          "color:",
          b.Z.white,
          ";",
          (0, y.mq)("mobile"),
          "{margin-top:50px;}"
        ),
        A = (0, c.Z)(f.YB, { target: "emfy8xp1" })(
          "color:",
          b.Z.white,
          ";margin-top:22px;margin-bottom:64px;"
        ),
        B = (0, c.Z)("div", { target: "emfy8xp0" })(
          "width:260px;",
          (0, y.mq)("mobile"),
          "{width:210px;margin:0 auto;}"
        );
      var G = function () {
          var e = (0, y.d)();
          return (0, w.jsx)(l.Z, {
            padding: { pc: [182, 182], mobile: [50, 70] },
            backgroundColor: b.Z.darkNavy,
            row: !e,
            id: d.W.SERVICE.DATA_LAB,
            children: (0, w.jsxs)(N, {
              children: [
                (0, w.jsxs)(C, {
                  className: (0, s.iv)(
                    "margin-left:13px;margin-right:210px;",
                    (0, y.mq)("mobile"),
                    "{margin-right:0;margin-bottom:50px;}",
                    ""
                  ),
                  children: [
                    (0, w.jsx)(u.Z, {
                      category: "Our Service",
                      categoryColor: b.Z.lightBlueBlue,
                      title: "KCD \ub370\uc774\ud130 \ub7a9",
                      darken: !0,
                      align: e ? "center" : "left",
                    }),
                    (0, w.jsxs)(z, {
                      children: [
                        "\uc18c\uc0c1\uacf5\uc778\uc744 \uc774\ud574\ud560 \uc218 \uc788\ub294 ",
                        (0, w.jsx)("br", {}),
                        "\uac00\uc7a5 \ube60\ub974\uace0 \ud3ed\ub113\uc740 \ub370\uc774\ud130",
                      ],
                    }),
                    (0, w.jsxs)(A, {
                      children: [
                        "\uc9c0\uc5ed \uacbd\uc81c\uc640 \uc18c\ube44 \ud750\ub984\uc744 KCD\uac00 \ubcf4\uc720\ud55c \ub370\uc774\ud130\ub85c ",
                        (0, w.jsx)("br", {}),
                        "\ubcf4\ub2e4 \uc815\ud655\ud558\uac8c \ud30c\uc545\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
                      ],
                    }),
                    (0, w.jsx)(B, {
                      children: (0, w.jsx)(p.Z, {
                        inverse: !0,
                        onClick: function () {
                          return window.open(j.nm);
                        },
                        children:
                          "\ub370\uc774\ud130 \ub7a9 \ubc14\ub85c\uac00\uae30",
                      }),
                    }),
                  ],
                }),
                (0, w.jsx)(C, {
                  className: (0, s.iv)(
                    "display:flex;gap:42px;",
                    (0, y.mq)("mobile"),
                    "{gap:0;width:100%;}",
                    ""
                  ),
                  children: (0, w.jsx)(m.Z, {
                    pc: (0, w.jsx)(_, {}),
                    mobile: (0, w.jsx)(S, {}),
                  }),
                }),
              ],
            }),
          });
        },
        T = r(7808),
        W = r(6551),
        I = (0, c.Z)("div", { target: "e1eevydm1" })(
          "width:2px;min-height:100%;background:",
          function (e) {
            var t = e.color;
            return t || b.Z.componentGray;
          },
          ";"
        ),
        R = (0, c.Z)("div", { target: "e1eevydm0" })(
          "display:flex;",
          I,
          "{margin:",
          function (e) {
            var t = e.size;
            return "0 ".concat(t, "px");
          },
          ";}",
          function (e) {
            var t = e.vertical,
              r = e.size;
            return (
              t &&
              (0, W.css)(
                "flex-direction:column;",
                I,
                "{width:100%;height:1px;margin:",
                r,
                "px 0;}",
                ""
              )
            );
          },
          ";"
        );
      var V = function (e) {
          var t = e.children,
            r = e.vertical,
            n = e.size,
            i = void 0 === n ? 35 : n,
            o = e.color,
            c = a.Children.toArray(t),
            s = c.length;
          return (0, w.jsx)(R, {
            vertical: r,
            size: i,
            children: c.map(function (e, t) {
              return t < s - 1
                ? (0, w.jsxs)(
                    a.Fragment,
                    { children: [e, (0, w.jsx)(I, { color: o })] },
                    t
                  )
                : e;
            }),
          });
        },
        F = r(5103),
        K = (0, c.Z)("div", { target: "exy7dv41" })(
          "display:flex;justify-content:center;margin-top:66px;margin-bottom:90px;",
          (0, y.mq)("mobile"),
          "{margin-top:60px;margin-bottom:75px;flex-direction:column;align-items:center;}"
        ),
        L = (0, c.Z)("div", { target: "exy7dv40" })(
          "display:grid;grid-template-columns:repeat(3, 260px);grid-column-gap:10px;justify-content:center;",
          (0, y.mq)("mobile"),
          "{grid-template-columns:1fr;grid-row-gap:16px;width:210px;margin:0 auto;}"
        );
      var X = function () {
        var e = (0, y.d)(),
          t = (0, F.b)();
        return (0, w.jsxs)(l.Z, {
          padding: { pc: [156, 193], mobile: [105, 142] },
          id: d.W.SERVICE.CASHNOTE,
          children: [
            (0, w.jsx)(u.Z, {
              category: "Our Service",
              title: "\uce90\uc2dc\ub178\ud2b8",
              description: "".concat(
                (null === t || void 0 === t
                  ? void 0
                  : t.items[0].fields.users) || 150,
                "\ub9cc \uc0ac\uc7a5\ub2d8\uc774 \uc120\ud0dd\ud55c \uac00\uc7a5 \uc26c\uc6b4 \uacbd\uc601 \uad00\ub9ac"
              ),
            }),
            (0, w.jsx)(K, {
              children: (0, w.jsxs)(V, {
                vertical: e,
                color: b.Z.borderColor,
                children: [
                  (0, w.jsx)(T.Z, {
                    title: "\uad00\ub9ac \uac70\ub798\uc561",
                    titleColor: b.Z.componentGray,
                    count:
                      (null === t || void 0 === t
                        ? void 0
                        : t.items[0].fields.turnover) || 470,
                    suffix: "\uc870+",
                  }),
                  (0, w.jsx)(T.Z, {
                    title: "\uc774\uc6a9 \uc0ac\uc5c5\uc7a5",
                    titleColor: b.Z.componentGray,
                    count:
                      (null === t || void 0 === t
                        ? void 0
                        : t.items[0].fields.users) || 150,
                    suffix: "\ub9cc+",
                  }),
                ],
              }),
            }),
            (0, w.jsxs)(L, {
              children: [
                (0, w.jsx)(p.Z, {
                  onClick: function () {
                    return window.open(j.KN);
                  },
                  children: "\uce90\uc2dc\ub178\ud2b8 \ubc14\ub85c\uac00\uae30",
                }),
                (0, w.jsx)(p.Z, {
                  onClick: function () {
                    return window.open(j.VE);
                  },
                  icon: (0, w.jsx)(v(), {
                    src: "/images/service/ic__system__service_playstore.png",
                    width: 27,
                    height: 27,
                    alt: "playstore",
                    layout: "fixed",
                  }),
                  children: "Google Play",
                }),
                (0, w.jsx)(p.Z, {
                  onClick: function () {
                    return window.open(j.BN);
                  },
                  icon: (0, w.jsx)(v(), {
                    src: "/images/service/ic__system__service_appstore.png",
                    width: 27,
                    height: 27,
                    alt: "appstore",
                    layout: "fixed",
                  }),
                  children: "Apple Store",
                }),
              ],
            }),
          ],
        });
      };
      function H(e, t) {
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
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? H(Object(r), !0).forEach(function (t) {
                (0, x.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : H(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Q = (0, c.Z)("div", { target: "ekqnfyj0" })({
        name: "oixwks",
        styles:
          "position:relative;height:fit-content;width:100%;margin-top:77px;margin-bottom:89px;display:flex;justify-content:center",
      });
      var Y = function () {
        return (0, w.jsx)(Q, {
          id: "banking-m",
          children: (0, w.jsx)(
            "img",
            J(
              {
                src: "/images/service__bank-app-m.png",
                width: 314,
                alt: "app-bank",
              },
              (0, h.Z)({ anchor: "#banking-m" })
            )
          ),
        });
      };
      function M(e, t) {
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
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? M(Object(r), !0).forEach(function (t) {
                (0, x.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : M(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var $ = (0, c.Z)("div", { target: "eqbotaj0" })({
        name: "5ob2ly",
        styles: "display:flex;position:relative",
      });
      var ee = function () {
          return (0, w.jsx)($, {
            id: "banking",
            children: (0, w.jsx)(
              "img",
              U(
                {
                  src: "/images/service__bank-app-1.png",
                  width: 360,
                  alt: "app-bank",
                },
                (0, h.Z)({ anchor: "#banking" })
              )
            ),
          });
        },
        te = (0, c.Z)("div", { target: "e1e62umq3" })(
          "flex-shrink:0;",
          (0, y.mq)("mobile"),
          "{text-align:center;}"
        ),
        re = (0, c.Z)(f._p, { target: "e1e62umq2" })(
          "display:inline-block;color:",
          b.Z.kcdBlue,
          ";border:1px solid ",
          b.Z.kcdBlue,
          ";border-radius:100px;margin-bottom:20px;padding:3px 25px;"
        ),
        ne = (0, c.Z)(g.DG, { target: "e1e62umq1" })(
          "margin-bottom:40px;",
          (0, y.mq)("mobile"),
          "{margin-bottom:30px;}"
        ),
        ie = (0, c.Z)(f._p, { target: "e1e62umq0" })(
          "color:",
          b.Z.paragraphGray,
          ";"
        );
      var oe = function (e) {
          var t = e.category,
            r = e.title,
            n = e.description,
            i = e.className;
          return (0, w.jsxs)(te, {
            className: i,
            children: [
              (0, w.jsx)(re, { children: t }),
              (0, w.jsx)(ne, { children: r }),
              (0, w.jsx)(ie, { children: n }),
            ],
          });
        },
        ce = (0, c.Z)("div", { target: "e19iguzs0" })(
          "display:flex;gap:282px;overflow:hidden;align-items:center;justify-content:center;",
          (0, y.mq)("mobile"),
          "{flex-direction:column;gap:0;align-items:center;justify-content:center;overflow:visible;}"
        );
      var se = function () {
        return (0, w.jsx)(l.Z, {
          padding: { pc: [140, 140], mobile: [60, 0] },
          children: (0, w.jsxs)(ce, {
            children: [
              (0, w.jsx)(oe, {
                category: "\uce90\uc2dc\ub178\ud2b8 \uae08\uc735",
                title:
                  "\uc0ac\uc7a5\ub2d8\uc5d0\uac8c \ub531 \ub9de\ub294\n\uac00\uc7a5 \uac04\ud3b8\ud55c \uae08\uc735",
                description:
                  "\uc0ac\uc7a5\ub2d8\uc774 \uac71\uc815 \uc5c6\uc774 \uc0ac\uc5c5\ud558\uc2e4 \uc218 \uc788\ub3c4\ub85d\n\uce74\ub4dc, \ub300\ucd9c \ube44\uad50, \uc2e0\uc6a9\uc810\uc218 \uc870\ud68c, \uc808\uc138\uae4c\uc9c0\n\uc0ac\uc5c5 \uc790\uae08 \ud574\uacb0 \ubc29\ubc95\uc744 \ubaa8\ub450 \ubaa8\uc544\n\uac00\uc7a5 \uc88b\uc740 \uae08\uc735 \ud61c\ud0dd\uc73c\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4.",
              }),
              " ",
              (0, w.jsx)(m.Z, {
                pc: (0, w.jsx)(ee, {}),
                mobile: (0, w.jsx)(Y, {}),
              }),
            ],
          }),
        });
      };
      function ae(e, t) {
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
      function pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ae(Object(r), !0).forEach(function (t) {
                (0, x.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ae(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var le = (0, c.Z)("div", { target: "ehg15ap0" })({
        name: "xkwme3",
        styles: "display:flex;position:relative;margin-top:46px",
      });
      var me = function () {
        return (0, w.jsxs)(le, {
          id: "books",
          children: [
            (0, w.jsx)(
              "img",
              pe(
                pe({}, (0, h.Z)({ anchor: "#books" })),
                {},
                {
                  src: "/images/service__book__app-1.png",
                  width: 360,
                  alt: "book-app",
                }
              )
            ),
            (0, w.jsx)(
              "img",
              pe(
                pe({}, (0, h.Z)({ anchor: "#books", sequence: 1 })),
                {},
                {
                  src: "/images/service__book__app-2.png",
                  width: 439,
                  className: (0, s.iv)({
                    name: "4y9g3u",
                    styles: "position:absolute;top:74px;right:-24px",
                  }),
                  alt: "book-app",
                }
              )
            ),
          ],
        });
      };
      function ue(e, t) {
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
      function fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ue(Object(r), !0).forEach(function (t) {
                (0, x.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ue(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var ge = (0, c.Z)("div", { target: "e198f93e0" })({
        name: "1jykvq1",
        styles:
          "position:relative;margin-top:56px;display:flex;justify-content:center;width:100%;height:fit-content;z-index:1",
      });
      var be = function () {
          return (0, w.jsx)(ge, {
            id: "books-m",
            children: (0, w.jsx)(
              "img",
              fe(
                {
                  src: "/images/service__book__app-m.png",
                  alt: "book-app",
                  width: 354,
                  className: (0, s.iv)("", ""),
                },
                (0, h.Z)({ anchor: "#books-m" })
              )
            ),
          });
        },
        de = (0, c.Z)("main", { target: "e19zijow0" })(
          "display:flex;justify-content:center;gap:180px;overflow:hidden;",
          (0, y.mq)("mobile"),
          "{gap:0;flex-direction:column;overflow:visible;}"
        );
      var je = function () {
        return (0, w.jsx)(l.Z, {
          padding: { pc: [110, 0], mobile: [60, 0] },
          backgroundColor: b.Z.textWhite100,
          children: (0, w.jsxs)(de, {
            children: [
              (0, w.jsx)(m.Z, {
                pc: (0, w.jsx)(me, {}),
                mobile: (0, w.jsx)(be, {}),
              }),
              (0, w.jsx)(oe, {
                category: "\uce90\uc2dc\ub178\ud2b8 \uc7a5\ubd80",
                title:
                  "\uc2e4\uc801, \uc790\uae08, \uc138\uae08\n\uacbd\uc601 \uad00\ub9ac\ub97c \ud55c\ubc88\uc5d0",
                description:
                  "\ub0b4 \ubaa8\ub4e0 \ub9e4\ucd9c\uacfc \ube44\uc6a9\uc744 \ud55c \ub208\uc5d0 \uc870\ud68c\ud558\uace0 \uc190\uc775 \uad00\ub9ac\ud558\uc138\uc694.\n\uc5b8\uc81c \uc5bc\ub9c8\uac00 \ub4e4\uc5b4\uc62c\uc9c0, \ub2e4\uc74c\uc5d0 \ub0bc \uc138\uae08\uc740 \uc5bc\ub9c8\uc778\uc9c0,\n\uc0ac\uc5c5\uc7a5 \uc6b4\uc601\uc5d0 \ud544\uc694\ud55c \ub2e4\uc591\ud55c \uc815\ubcf4\ub97c \n\uce90\uc2dc\ub178\ud2b8 \uc7a5\ubd80\ub85c \uac04\ud3b8\ud558\uac8c \uad00\ub9ac\ud558\uc138\uc694.",
                className: (0, s.iv)(
                  "margin-top:85px;",
                  (0, y.mq)("mobile"),
                  "{margin-top:0;order:-1;}",
                  ""
                ),
              }),
            ],
          }),
        });
      };
      function ye(e, t) {
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
      function xe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ye(Object(r), !0).forEach(function (t) {
                (0, x.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ye(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Oe = (0, c.Z)("div", { target: "ep9obfo0" })({
        name: "zjik7",
        styles: "display:flex",
      });
      var ve = function () {
        return (0, w.jsx)(Oe, {
          id: "comment",
          children: (0, w.jsx)(
            "img",
            xe(
              {
                src: "/images/service__comment.png",
                width: 430,
                alt: "comment",
              },
              (0, h.Z)({ anchor: "#comment" })
            )
          ),
        });
      };
      function he(e, t) {
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
      function we(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? he(Object(r), !0).forEach(function (t) {
                (0, x.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : he(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Pe = (0, c.Z)("div", { target: "e1ika9pk0" })({
        name: "1iix5jm",
        styles:
          "position:relative;display:flex;flex-direction:column;align-items:center;height:fit-content;z-index:1;margin-top:30px;margin-bottom:34px",
      });
      var Ze = function () {
          return (0, w.jsx)(Pe, {
            id: "comment-m",
            children: (0, w.jsx)(
              "img",
              we(
                {
                  src: "/images/service__comment-m.png",
                  width: 345,
                  alt: "comment",
                },
                (0, h.Z)({ anchor: "#comment-m" })
              )
            ),
          });
        },
        ke = (0, c.Z)("main", { target: "ett8e3d0" })(
          "display:flex;justify-content:center;align-items:center;gap:130px;",
          (0, y.mq)("mobile"),
          "{gap:0;flex-direction:column;}"
        );
      var _e = function () {
          return (0, w.jsx)(l.Z, {
            padding: { pc: [133, 75], mobile: [60, 0] },
            backgroundColor: b.Z.textWhite100,
            children: (0, w.jsxs)(ke, {
              children: [
                (0, w.jsx)(m.Z, {
                  pc: (0, w.jsx)(ve, {}),
                  mobile: (0, w.jsx)(Ze, {}),
                }),
                (0, w.jsx)(oe, {
                  category: "\uce90\uc2dc\ub178\ud2b8 \ud1a0\ud06c",
                  title:
                    "\uc9c4\uc9dc \uc0ac\uc7a5\ub2d8\ub4e4\uacfc\n\ud1a0\ud06c\uc5d0\uc11c \uc7a5\uc0ac \uace0\ubbfc \ud574\uacb0!",
                  description:
                    "\uad6d\ub0b4 \uc720\uc77c \ud604\uc5c5 \uc0ac\uc7a5\ub2d8\ub4e4\uc744 \uc704\ud55c \uc18c\ud1b5 \uacf5\uac04\uc785\ub2c8\ub2e4.\n\uac19\uc740 \uc5c5\uc885, \uc9c0\uc5ed \uc0ac\uc7a5\ub2d8\uacfc \uad50\ub958\ud558\uace0 \uc9c0\uc6d0\uc815\ucc45, \uc18c\uc0c1\uacf5\uc778 \ub274\uc2a4,\n\uc804\ubb38\uac00 \uce7c\ub7fc\uae4c\uc9c0 \ub9e4\uc77c \uc5bb\uc5b4\uac00\uc138\uc694. \uc7a5\uc0ac \uace0\ubbfc, \uc18c\uc18c\ud55c \uc77c\uc0c1\uc744 140\ub9cc\uba85\uc758 \uc9c4\uc9dc \uc0ac\uc7a5\ub2d8\ub4e4\uacfc \ud568\uaed8 \ub098\ub220\ubcfc\uae4c\uc694?",
                  className: (0, s.iv)(
                    "max-width:437px;",
                    (0, y.mq)("mobile"),
                    "{margin-top:0;order:-1;}",
                    ""
                  ),
                }),
              ],
            }),
          });
        },
        De = r(8119);
      var Ee = function () {
        var e = (0, y.d)();
        return (0, w.jsx)(De.Z, {
          src: e
            ? "/images/intro__service-m.jpg"
            : "/images/intro__service.jpg",
          message: {
            top: e
              ? "\uc6b0\ub9ac\ub294 \uc0ac\uc5c5\uc758\n\ubaa8\ub4e0 \uc21c\uac04\uc744"
              : "\uc6b0\ub9ac\ub294 \uc0ac\uc5c5\uc758 \ubaa8\ub4e0 \uc21c\uac04\uc744",
            bottom: "\ud568\uaed8\ud569\ub2c8\ub2e4",
          },
          textRight: !0,
        });
      };
      function qe(e, t) {
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
      function Se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? qe(Object(r), !0).forEach(function (t) {
                (0, x.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : qe(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Ce = (0, c.Z)("div", { target: "er97hip0" })({
        name: "8w178r",
        styles:
          "display:flex;justify-content:center;position:relative;margin:30px auto;width:100%",
      });
      var Ne = function () {
        return (0, w.jsx)(Ce, {
          id: "market-m",
          children: (0, w.jsx)(
            "img",
            Se(
              {
                src: "/images/service__market-app-m.png",
                width: 314,
                alt: "market-app",
              },
              (0, h.Z)({ anchor: "#market-m" })
            )
          ),
        });
      };
      function ze(e, t) {
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
      function Ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ze(Object(r), !0).forEach(function (t) {
                (0, x.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ze(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Be = (0, c.Z)("div", { target: "e1on8g350" })({
        name: "1fq0tse",
        styles:
          "display:flex;justify-content:center;position:relative;overflow:hidden",
      });
      var Ge = function () {
          return (0, w.jsx)(Be, {
            id: "market",
            children: (0, w.jsx)(
              "img",
              Ae(
                {
                  src: "/images/service__market-app.png",
                  width: 360,
                  alt: "market-app",
                },
                (0, h.Z)({ anchor: "#market" })
              )
            ),
          });
        },
        Te = (0, c.Z)("div", { target: "e165raz0" })(
          "display:flex;justify-content:center;gap:208px;",
          (0, y.mq)("mobile"),
          "{flex-direction:column;gap:0;}"
        );
      var We = function () {
        return (0, w.jsx)(l.Z, {
          padding: { pc: [138, 0], mobile: [60, 0] },
          children: (0, w.jsxs)(Te, {
            children: [
              (0, w.jsx)(oe, {
                category: "\uce90\uc2dc\ub178\ud2b8 \ub9c8\ucf13",
                title:
                  "\uc7a5\uc0ac\uc5d0 \ud544\uc694\ud55c \uc2dd\uc790\uc7ac\n\ud569\ub9ac\uc801\uc778 \uac00\uaca9\uc73c\ub85c \uc27d\uac8c",
                description:
                  "\uc0ac\uc5c5\uc5d0 \ud544\uc694\ud55c \ubaa8\ub4e0 \uc0c1\ud488\uc744 \ud55c \ubc88\uc5d0 \uad6c\ub9e4\ud560 \uc218 \uc788\ub3c4\ub85d\n\ub2e4\uc591\ud558\uace0 \ud488\uc9c8 \uc88b\uc740 \uc0c1\ud488\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",
                className: (0, s.iv)(
                  "margin-top:97px;",
                  (0, y.mq)("mobile"),
                  "{margin-top:0;}",
                  ""
                ),
              }),
              (0, w.jsx)(m.Z, {
                pc: (0, w.jsx)(Ge, {}),
                mobile: (0, w.jsx)(Ne, {}),
              }),
            ],
          }),
        });
      };
      function Ie(e, t) {
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
      function Re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ie(Object(r), !0).forEach(function (t) {
                (0, x.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ie(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Ve = (0, c.Z)("div", { target: "e1i38i7s0" })(
        "display:flex;gap:180px;justify-content:center;",
        (0, y.mq)("mobile"),
        "{flex-direction:column;gap:0;text-align:center;}"
      );
      var Fe = function () {
        var e = (0, y.d)();
        return (0, w.jsx)(l.Z, {
          padding: { pc: [182, 0], mobile: [60, 0] },
          backgroundColor: b.Z.textWhite100,
          children: (0, w.jsxs)(Ve, {
            id: "membership",
            children: [
              (0, w.jsx)(m.Z, {
                pc: (0, w.jsx)(
                  "img",
                  Re(
                    {
                      src: "/images/service__membership-app.png",
                      width: 360,
                      alt: "membership-app",
                    },
                    (0, h.Z)({ anchor: "#membership" })
                  )
                ),
                mobile: (0, w.jsx)(
                  "img",
                  Re(
                    {
                      src: "/images/service__membership-app-m.png",
                      width: 314,
                      className: (0, s.iv)({
                        name: "1d0nbku",
                        styles: "margin-top:24px",
                      }),
                      alt: "membership-app",
                    },
                    (0, h.Z)({ anchor: "#membership" })
                  )
                ),
              }),
              (0, w.jsx)(oe, {
                category:
                  "\uce90\uc2dc\ub178\ud2b8\ud50c\ub7ec\uc2a4 \uba64\ubc84\uc2ed",
                title:
                  "\uc0ac\uc7a5\ub2d8\uc758 \uc131\uacf5\uc744 \uc704\ud55c\n\ub9e4\uc7a5 \uc6b4\uc601 \ud1b5\ud569 \uc194\ub8e8\uc158",
                description: e
                  ? "\uc0ac\uc7a5\ub2d8\uc758 \ub9e4\ucd9c\uc740 \ub192\uc774\uace0, \ube44\uc6a9\uc740 \ub0ae\ucd9c \uc218 \uc788\ub3c4\ub85d\nAI \ub9e4\ucd9c \uc608\uce21 \ub4f1 \ud504\ub9ac\ubbf8\uc5c4 \uc7a5\ubd80 \uae30\ub2a5,\n\uc6d4 15\ub9cc\uc6d0 \uc0c1\ub2f9 \ub9c8\ucf13\ucfe0\ud3f0 \ubc0f \uccb4\ud5d8\ub2e8 \ud61c\ud0dd,\n\uba64\ubc84\uc2ed \uc804\uc6a9 \uc81c\ud734 \uc11c\ube44\uc2a4 \ub4f1\uc774 \uc81c\uacf5\ub429\ub2c8\ub2e4."
                  : "\uc0ac\uc7a5\ub2d8\uc758 \ub9e4\ucd9c\uc740 \ub192\uc774\uace0, \ube44\uc6a9\uc740 \ub0ae\ucd9c \uc218 \uc788\ub3c4\ub85d\nAI \ub9e4\ucd9c \uc608\uce21 \ub4f1 \ud504\ub9ac\ubbf8\uc5c4 \uc7a5\ubd80 \uae30\ub2a5, \uc6d4 15\ub9cc\uc6d0 \uc0c1\ub2f9 \ub9c8\ucf13\ucfe0\ud3f0 \ubc0f \n\uccb4\ud5d8\ub2e8 \ud61c\ud0dd, \uba64\ubc84\uc2ed \uc804\uc6a9 \uc81c\ud734 \uc11c\ube44\uc2a4 \ub4f1\uc774 \uc81c\uacf5\ub429\ub2c8\ub2e4.",
                className: (0, s.iv)(
                  "margin-top:60px;",
                  (0, y.mq)("mobile"),
                  "{order:-1;margin-top:0;}",
                  ""
                ),
              }),
            ],
          }),
        });
      };
      function Ke(e, t) {
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
      function Le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ke(Object(r), !0).forEach(function (t) {
                (0, x.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ke(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Xe = (0, c.Z)("div", { target: "e9ps5lg0" })(
        "display:flex;justify-content:center;align-items:center;gap:58px;",
        (0, y.mq)("mobile"),
        "{flex-direction:column;gap:0;text-align:center;}"
      );
      var He = function () {
          return (0, w.jsx)(l.Z, {
            padding: { pc: [93, 48], mobile: [60, 0] },
            style: { position: "relative" },
            className: (0, s.iv)(
              "box-shadow:0 5px 20px rgba(0, 0, 0, 0.1);",
              (0, y.mq)("mobile"),
              "{box-shadow:none;}",
              ""
            ),
            children: (0, w.jsxs)(Xe, {
              id: "mystore",
              children: [
                (0, w.jsx)(oe, {
                  category: "\uce90\uc2dc\ub178\ud2b8 \ub0b4 \ub9e4\uc7a5",
                  title:
                    "\ub9e4\uc7a5 \ud64d\ubcf4\ubd80\ud130 \uc6b4\uc601\uad00\ub9ac\uae4c\uc9c0\n\uce90\uc2dc\ub178\ud2b8 \ud558\ub098\ub85c ",
                  description:
                    "\ub9e4\uc7a5\uc744 \ud64d\ubcf4\ud558\uace0 \ub2e8\uace8\uc5d0\uac8c \uce74\uce74\uc624\ud1a1 \uba54\uc138\uc9c0\ub97c \ubcf4\ub0b4\ubcf4\uc138\uc694.\n\uc0ac\uc5c5 \uc6b4\uc601\uc5d0 \ud544\uc694\ud55c \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud574 \uc6b4\uc601\ud6a8\uc728\uc744 \ub192\uc77c \uc218 \uc788\uc5b4\uc694. ",
                  className: (0, s.iv)((0, y.mq)("mobile"), "{order:-1;}", ""),
                }),
                (0, w.jsx)(m.Z, {
                  pc: (0, w.jsx)(
                    "img",
                    Le(
                      {
                        src: "/images/service__mystore-app.png",
                        width: 451,
                        alt: "mystore-app",
                      },
                      (0, h.Z)({ anchor: "#mystore" })
                    )
                  ),
                  mobile: (0, w.jsx)(
                    "img",
                    Le(
                      {
                        src: "/images/service__mystore-app-m.png",
                        width: 314,
                        alt: "mystore-app",
                        className: (0, s.iv)({
                          name: "cx293f",
                          styles: "margin-top:25px;margin-bottom:30px",
                        }),
                      },
                      (0, h.Z)({ anchor: "#mystore" })
                    )
                  ),
                }),
              ],
            }),
          });
        },
        Je = i()(
          function () {
            return Promise.all([r.e(3645), r.e(6306), r.e(7010)]).then(
              r.bind(r, 5487)
            );
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return [5487];
              },
            },
          }
        ),
        Qe = function () {
          return (0, w.jsxs)(o.Z, {
            title: "\uc11c\ube44\uc2a4",
            children: [
              (0, w.jsx)(Ee, {}),
              (0, w.jsx)(X, {}),
              (0, w.jsx)(je, {}),
              (0, w.jsx)(se, {}),
              (0, w.jsx)(_e, {}),
              (0, w.jsx)(We, {}),
              (0, w.jsx)(Fe, {}),
              (0, w.jsx)(He, {}),
              (0, w.jsx)(Je, {}),
              (0, w.jsx)(G, {}),
            ],
          });
        };
    },
    1609: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/service",
        function () {
          return r(9093);
        },
      ]);
    },
    5660: function () {},
  },
  function (e) {
    e.O(
      0,
      [5544, 648, 8413, 2850, 5626, 6562, 4378, 9648, 2319, 9774, 2888, 179],
      function () {
        return (t = 1609), e((e.s = t));
        var t;
      }
    );
    var t = e.O();
    _N_E = t;
  },
]);

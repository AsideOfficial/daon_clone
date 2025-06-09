(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6136],
  {
    7190: function (e, t, r) {
      "use strict";
      r.d(t, {
        DG: function () {
          return u;
        },
        W6: function () {
          return s;
        },
        lx: function () {
          return l;
        },
      });
      var n = r(4198),
        o = r(6551),
        i = r(1992),
        c = r(1513),
        a = (0, o.css)(
          "color:",
          i.Z.primary,
          ";word-break:keep-all;white-space:pre-line;",
          ""
        ),
        s = (0, n.Z)("h4", { target: "ekzxz9e2" })(
          a,
          " font-weight:600;font-size:22px;line-height:32px;",
          function (e) {
            var t = e.color;
            return t && (0, o.css)("color:", t, ";", "");
          },
          " ",
          (0, c.mq)("mobile"),
          "{font-size:18px;line-height:24px;}"
        ),
        l = (0, n.Z)("h3", { target: "ekzxz9e1" })(
          a,
          " font-weight:",
          function (e) {
            return e.bold ? 700 : 300;
          },
          ";font-size:30px;line-height:42px;",
          (0, c.mq)("mobile"),
          "{font-size:20px;line-height:30px;}",
          function (e) {
            var t = e.color;
            return t && (0, o.css)("color:", t, ";", "");
          },
          ";"
        ),
        u = (0, n.Z)("h2", { target: "ekzxz9e0" })(
          a,
          " font-weight:300;font-size:44px;line-height:54px;",
          function (e) {
            var t = e.color;
            return t && (0, o.css)("color:", t, ";", "");
          },
          " ",
          (0, c.mq)("mobile"),
          "{font-size:34px;line-height:42px;}"
        );
    },
    7101: function (e, t) {
      "use strict";
      t.Z = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.sequence,
          r = void 0 === t ? 0 : t,
          n = e.anchor;
        return {
          "data-aos": "fade-up",
          "data-aos-delay": 250 * r,
          "data-aos-anchor": n,
        };
      };
    },
    4239: function (e, t, r) {
      "use strict";
      var n = r(4341),
        o = r(3440);
      t.Z = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.autoplay,
          r = void 0 !== t && t;
        return {
          pagination: { clickable: !0 },
          autoplay: r,
          modules: [o.tl].concat((0, n.Z)(r ? [o.pt] : [])),
        };
      };
    },
    1431: function (e, t, r) {
      "use strict";
      r.d(t, {
        U: function () {
          return n;
        },
      });
      var n = function (e) {
        return new URLSearchParams(new URL(window.location.href).search).get(e);
      };
    },
    3746: function (e, t, r) {
      "use strict";
      var n = r(5170);
      t.Z = function (e) {
        var t = e.ref,
          r = e.src,
          o = (0, n.useState)(!1),
          i = o[0],
          c = o[1];
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
                  c(!0));
              });
            },
            [r, t]
          ),
          i
        );
      };
    },
    2621: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return _e;
          },
          default: function () {
            return ze;
          },
        });
      var n = r(9089),
        o = r.n(n),
        i = r(9513),
        c = r(5170),
        a = r(202),
        s = r(3326),
        l = r(4198),
        u = r(9164),
        p = (r(8883), r(8875), r(1992)),
        f = r(4239),
        d = r(3746),
        g = r(3373),
        h = r(2312),
        b = r(7101),
        y = r(1513),
        m = r(4910),
        x = r(2564),
        v = r.n(x),
        j = r(3010);
      function O(e, t) {
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
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(r), !0).forEach(function (t) {
                (0, s.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : O(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Z = (0, l.Z)("div", { target: "e1u4qs0k3" })(
          "width:100%;height:800px;background-size:cover;background-position:center;background-repeat:no-repeat;display:flex;justify-content:center;align-items:center;flex-direction:column;",
          (0, y.mq)("mobile"),
          "{height:700px;}"
        ),
        P = (0, l.Z)(h.B7, { target: "e1u4qs0k2" })(
          "color:",
          p.Z.white,
          ";margin-bottom:17px;"
        ),
        k = (0, l.Z)(h.Ff, { target: "e1u4qs0k1" })(
          "color:",
          p.Z.white,
          ";padding:0 25px;margin-bottom:35px;text-align:center;white-space:pre-wrap;"
        ),
        E = (0, l.Z)(g.Z, { target: "e1u4qs0k0" })(
          "width:260px;border-color:",
          p.Z.white,
          ";color:",
          p.Z.white,
          ";"
        );
      var D = function (e) {
        var t = e.url,
          r = e.title,
          n = e.description,
          o = e.link,
          a = (0, c.useRef)(null),
          s = (0, d.Z)({ ref: a, src: t }),
          l = (function (e, t) {
            var r = (0, i.useRouter)(),
              n = (function () {
                var n = (0, m.Z)(
                  v().mark(function n() {
                    return v().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (!e.includes("https")) {
                              n.next = 4;
                              break;
                            }
                            return window.open(e), n.abrupt("return");
                          case 4:
                            return (
                              (n.next = 6),
                              r.push("".concat(e, "&category=\uc804\uccb4"))
                            );
                          case 6:
                            t();
                          case 7:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                );
                return function () {
                  return n.apply(this, arguments);
                };
              })();
            return n;
          })((null === o || void 0 === o ? void 0 : o.url) || "", function () {
            var e,
              t =
                null === (e = a.current) || void 0 === e
                  ? void 0
                  : e.getBoundingClientRect();
            t && window.scrollTo({ top: t.height, behavior: "smooth" });
          });
        return (0, j.jsx)(Z, {
          ref: a,
          children:
            s &&
            (0, j.jsxs)(j.Fragment, {
              children: [
                (0, j.jsx)(
                  P,
                  w(w({ shadow: !0 }, (0, b.Z)()), {}, { children: r })
                ),
                (0, j.jsx)(
                  k,
                  w(
                    w({ shadow: !0 }, (0, b.Z)({ sequence: 1 })),
                    {},
                    { children: n.replaceAll("\\n", "\n") }
                  )
                ),
                o &&
                  (0, j.jsx)(
                    E,
                    w(
                      w({ inverse: !0 }, (0, b.Z)({ sequence: 2 })),
                      {},
                      { onClick: l, children: o.name }
                    )
                  ),
              ],
            }),
        });
      };
      function q(e, t) {
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
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? q(Object(r), !0).forEach(function (t) {
                (0, s.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : q(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var C = (0, l.Z)("div", { target: "e1xeli530" })(
        "background-color:",
        p.Z.white,
        ";.swiper-slide{width:100%;}"
      );
      function _(e) {
        var t = e.items;
        return (0, j.jsx)(C, {
          children: (0, j.jsx)(
            u.tq,
            S(
              S({ loop: !0 }, (0, f.Z)({ autoplay: !1 })),
              {},
              {
                children: t.map(function (e) {
                  var t = e.fields,
                    r = t.title,
                    n = t.description,
                    o = t.banner,
                    i = t.link_name,
                    c = t.link_url,
                    a = e.sys;
                  return (0,
                  j.jsx)(u.o5, { children: (0, j.jsx)(D, { title: r, description: n, url: o.fields.file.url, link: i && c ? { name: i, url: c } : void 0 }) }, a.id);
                }),
              }
            )
          ),
        });
      }
      var z = c.memo(_),
        R = r(2330),
        G = r(7190),
        L = r(4400);
      var U = (0, l.Z)("div", { target: "eqseflo2" })(
          "border-top:1px solid ",
          p.Z.lineGray,
          ";padding:50px 0;display:flex;justify-content:center;flex-direction:column;align-items:center;"
        ),
        I = (0, l.Z)(G.lx, { target: "eqseflo1" })({
          name: "17pc8nr",
          styles: "text-align:center;margin-bottom:26px",
        }),
        N = (0, l.Z)(g.Z, { target: "eqseflo0" })(
          "width:260px;margin-top:4px;",
          (0, y.mq)("mobile"),
          "{width:210px;}"
        );
      var B = function () {
          return (0, j.jsxs)(U, {
            children: [
              (0, j.jsx)(I, {
                children: "\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc5b4\uc694",
              }),
              (0, j.jsx)(N, {
                onClick: function () {
                  return window.open(L.xq);
                },
                children: "\uc778\uc7ac\ud480 \ub4f1\ub85d",
              }),
            ],
          });
        },
        M = r(2437),
        T = r(170);
      var W = (0, l.Z)(G.W6, { target: "e1oseiwt4" })({
          name: "z75bzf",
          styles: "transition:0.1s;flex:1",
        }),
        F = (0, l.Z)("div", { target: "e1oseiwt3" })(
          "display:flex;justify-content:center;align-items:center;background:",
          p.Z.componentGray,
          ";color:",
          p.Z.white,
          ";width:32px;height:32px;border-radius:50%;transition:0.1s;",
          (0, y.mq)("mobile"),
          "{display:none;}"
        ),
        X = (0, l.Z)("a", { target: "e1oseiwt2" })(
          "display:flex;align-items:center;justify-content:space-between;padding:34px 0px;border-top:1px solid ",
          p.Z.lineGray,
          ";border-bottom:1px solid ",
          p.Z.lineGray,
          ";cursor:pointer;margin-bottom:-1px;&:hover{",
          W,
          "{color:",
          p.Z.blueBlue,
          ";}",
          F,
          "{background:",
          p.Z.blueBlue,
          ";}}"
        ),
        A = (0, l.Z)("div", { target: "e1oseiwt1" })(
          "display:flex;align-items:center;flex:1;",
          (0, y.mq)("mobile"),
          "{flex-direction:column;align-items:flex-start;}"
        ),
        K = (0, l.Z)("div", { target: "e1oseiwt0" })({
          name: "afnq78",
          styles: "display:flex;gap:7px;flex:1",
        });
      var Y = function (e) {
        var t = e.title,
          r = e.description,
          n = e.url,
          o = e.onClick;
        return (0, j.jsxs)(X, {
          href: n,
          target: "_blank",
          onClick: o,
          children: [
            (0, j.jsxs)(A, {
              children: [
                (0, j.jsx)(W, { children: t }),
                (0, j.jsx)(K, {
                  children: (0, j.jsx)(T.kM, {
                    color: p.Z.paragraphGray,
                    children: r,
                  }),
                }),
              ],
            }),
            (0, j.jsx)(F, { children: (0, j.jsx)(M.FNi, { size: 24 }) }),
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
        var t = e.items;
        return (0, j.jsxs)(R.Z, {
          padding: { pc: [135, 248], mobile: [53, 152] },
          children: [
            t.map(function (e) {
              var t = e.fields,
                r = e.sys;
              return (0, j.jsx)(
                Y,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? H(Object(r), !0).forEach(function (t) {
                          (0, s.Z)(e, t, r[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r)
                        )
                      : H(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(r, t)
                          );
                        });
                  }
                  return e;
                })({}, t),
                r.id
              );
            }),
            0 === t.length && (0, j.jsx)(B, {}),
          ],
        });
      }
      var Q,
        V,
        $ = c.memo(J),
        ee = r(1640),
        te = r(1431),
        re = function (e) {
          var t = (0, i.useRouter)();
          return "string" === typeof t.query[e]
            ? decodeURIComponent(t.query[e])
            : "";
        };
      function ne() {
        return (
          (ne = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ne.apply(this, arguments)
        );
      }
      var oe = function (e) {
          return c.createElement(
            "svg",
            ne(
              {
                width: "1em",
                height: "1em",
                viewBox: "0 0 26 26",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            Q ||
              (Q = c.createElement("circle", {
                cx: 11.957,
                cy: 11.957,
                r: 7.707,
                stroke: "#0D1741",
                strokeWidth: 1.5,
              })),
            V ||
              (V = c.createElement("path", {
                d: "M17.242 17.243 22 22",
                stroke: "#0D1741",
                strokeWidth: 1.5,
              }))
          );
        },
        ie = (0, r(6551).css)(
          "width:568px;height:48px;border:1px solid ",
          p.Z.lineGray,
          ";border-radius:50px;font-weight:400;font-size:18px;padding:12px 42px 12px 34px;outline:none;",
          (0, y.mq)("mobile"),
          "{width:100%;}",
          ""
        );
      function ce(e, t) {
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
      function ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ce(Object(r), !0).forEach(function (t) {
                (0, s.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ce(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var se = (0, l.Z)("div", { target: "e1uupet42" })(""),
        le = (0, l.Z)("input", { target: "e1uupet41" })(
          ie,
          " &::placeholder{color:",
          p.Z.componentGray,
          ";}"
        ),
        ue = (0, l.Z)(oe, { target: "e1uupet40" })(
          "position:absolute;font-size:20px;right:22px;top:50%;transform:translateY(-50%);color:",
          p.Z.primary,
          ";width:26px;height:26px;",
          (0, y.mq)("mobile"),
          "{right:42px;}"
        );
      var pe,
        fe,
        de = function (e) {
          return (0, j.jsxs)(se, {
            children: [
              (0, j.jsx)(le, ae({}, e)),
              (0, j.jsx)("button", {
                type: "submit",
                children: (0, j.jsx)(ue, {}),
              }),
            ],
          });
        };
      function ge() {
        return (
          (ge = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ge.apply(this, arguments)
        );
      }
      var he = function (e) {
          return c.createElement(
            "svg",
            ge(
              {
                width: "1em",
                height: "1em",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            pe ||
              (pe = c.createElement("circle", {
                cx: 8,
                cy: 8,
                r: 8,
                fill: "currentcolor",
              })),
            fe ||
              (fe = c.createElement("path", {
                stroke: "#fff",
                d: "m4.983 5.017 5.918 5.917M4.934 10.934l5.917-5.918",
              }))
          );
        },
        be = (0, l.Z)("div", { target: "e1xln6941" })(
          ie,
          " text-align:left;display:flex;align-items:center;"
        ),
        ye = (0, l.Z)(he, { target: "e1xln6940" })(
          "cursor:pointer;margin-left:4px;color:",
          p.Z.disabled,
          ";"
        );
      var me = function (e) {
        var t = e.value,
          r = e.onClose;
        return (0, j.jsxs)(be, {
          children: [
            (0, j.jsx)(T._p, { children: t }),
            (0, j.jsx)(ye, { width: 16, height: 16, onClick: r }),
          ],
        });
      };
      function xe(e, t) {
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
      function ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? xe(Object(r), !0).forEach(function (t) {
                (0, s.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : xe(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var je = (0, l.Z)("section", { target: "e3oamg22" })(
          "padding-top:170px;margin-bottom:53px;text-align:center;",
          (0, y.mq)("mobile"),
          "{margin-top:105px;margin-bottom:100px;}"
        ),
        Oe = (0, l.Z)(h.O6, { target: "e3oamg21" })(
          "margin-bottom:35px;",
          (0, y.mq)("mobile"),
          "{text-align:left;padding-left:47px;}"
        ),
        we = (0, l.Z)("div", { target: "e3oamg20" })(
          "position:relative;display:inline-block;",
          (0, y.mq)("mobile"),
          "{display:block;padding:0 30px;}"
        ),
        Ze = (0, c.forwardRef)(function (e) {
          var t = re("search"),
            r = Boolean(t);
          return (0,
          j.jsxs)(je, { id: ee.W.RECRUIT.POSITION, children: [(0, j.jsx)(Oe, { children: "\uad00\uc2ec\uc788\ub294 \ud3ec\uc9c0\uc158, \ubc14\ub85c \ucc3e\uc544\ubcf4\uc138\uc694." }), (0, j.jsx)(we, { children: r ? (0, j.jsx)(me, { value: t, onClose: e.onClose }) : (0, j.jsx)(de, ve({ placeholder: "ex. \uc5d4\uc9c0\ub2c8\uc5b4, \ub514\uc790\uc774\ub108, \ubc45\ud0b9" }, e)) })] });
        });
      function Pe(e, t) {
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
      function ke(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Pe(Object(r), !0).forEach(function (t) {
                (0, s.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Pe(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Ee = ["title", "description", "keywords"],
        De = function (e) {
          return window.encodeURIComponent(e.toLocaleLowerCase());
        },
        qe = r(5147),
        Se = r(4931),
        Ce = o()(
          function () {
            return r.e(1473).then(r.bind(r, 1473));
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return [1473];
              },
            },
          }
        ),
        _e = !0,
        ze = function (e) {
          var t = e.banner,
            r = (0, i.useRouter)(),
            n = (function () {
              var e = (0, c.useState)(),
                t = e[0],
                r = e[1],
                n = (0, c.useState)(),
                o = n[0],
                i = n[1];
              return (
                (0, c.useEffect)(function () {
                  function e() {
                    return (e = (0, m.Z)(
                      v().mark(function e() {
                        var t, n, o, c;
                        return v().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Promise.all([
                                    Se.a.getEntries({
                                      content_type: "recruit",
                                    }),
                                    Se.a.getEntries({
                                      content_type: "job_category",
                                      order: "-fields.priority",
                                    }),
                                  ])
                                );
                              case 2:
                                (t = e.sent),
                                  (n = (0, qe.Z)(t, 2)),
                                  (o = n[0]),
                                  (c = n[1]),
                                  r(o),
                                  i(c);
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )).apply(this, arguments);
                  }
                  !(function () {
                    e.apply(this, arguments);
                  })();
                }, []),
                { recruit: t, category: o }
              );
            })(),
            o = n.recruit,
            l = n.category,
            u = re("search"),
            p = re("category"),
            f = (0, c.useState)(u),
            d = f[0],
            g = f[1],
            h = (0, c.useRef)(null);
          !(function () {
            var e = (0, i.useRouter)();
            (0, c.useEffect)(function () {
              var t = (0, te.U)("search") || "",
                r = (0, te.U)("category") || "\uc804\uccb4";
              e.replace(
                ""
                  .concat(e.pathname, "?search=")
                  .concat(t, "&category=")
                  .concat(r),
                void 0,
                { shallow: !0 }
              );
            }, []);
          })();
          var b,
            y = function (e) {
              r.push(
                ""
                  .concat(r.pathname, "?search=")
                  .concat(e, "&category=")
                  .concat(De("\uc804\uccb4")),
                void 0,
                { shallow: !0 }
              );
            },
            x = (0, c.useMemo)(
              function () {
                return o
                  ? ((e = o.items),
                    (t = u)
                      ? e.filter(function (e) {
                          return Ee.some(function (r) {
                            var n;
                            return null === (n = e.fields[r]) || void 0 === n
                              ? void 0
                              : n.toLowerCase().includes(t.toLowerCase());
                          });
                        })
                      : e)
                  : [];
                var e, t;
              },
              [o, u]
            ),
            O = (0, c.useMemo)(
              function () {
                return (function (e, t) {
                  return t && "\uc804\uccb4" !== t
                    ? e.filter(function (e) {
                        return (
                          e.fields.category.fields.title.toLocaleLowerCase() ===
                          t
                        );
                      })
                    : e;
                })(x, p);
              },
              [x, p]
            ),
            w = (0, c.useMemo)(
              function () {
                return (function (e) {
                  var t = e.category,
                    r = e.recruit;
                  return t.reduce(function (e, t) {
                    var n = t.fields.title;
                    return ke(
                      ke({}, e),
                      {},
                      (0, s.Z)(
                        { "\uc804\uccb4": r.length },
                        n,
                        r.filter(function (e) {
                          return e.fields.category.fields.title === n;
                        }).length
                      )
                    );
                  }, {});
                })({
                  category:
                    (null === l || void 0 === l ? void 0 : l.items) || [],
                  recruit: x,
                });
              },
              [x, l]
            );
          return (
            (0, c.useEffect)(function () {
              g((0, te.U)("search"));
            }, []),
            (0, j.jsxs)(a.Z, {
              title: "\uc778\uc7ac\uc601\uc785",
              children: [
                (0, j.jsx)(z, {
                  items: (null === t || void 0 === t ? void 0 : t.items) || [],
                }),
                (0, j.jsxs)(c.Suspense, {
                  fallback: (0, j.jsx)(j.Fragment, {}),
                  children: [
                    (0, j.jsx)("form", {
                      onSubmit: function (e) {
                        e.preventDefault(), d && y(d);
                      },
                      children: (0, j.jsx)(Ze, {
                        ref: h,
                        onKeyDown: function (e) {
                          var t,
                            r = "Enter" === e.key,
                            n = e.target.value;
                          r &&
                            (null === (t = h.current) ||
                              void 0 === t ||
                              t.blur(),
                            y(n));
                        },
                        value: d,
                        onChange: function (e) {
                          g(e.target.value);
                        },
                        onClose: function () {
                          g(""),
                            r.push(
                              ""
                                .concat(r.pathname, "?search=&category=")
                                .concat(De("\uc804\uccb4")),
                              void 0,
                              { shallow: !0 }
                            );
                        },
                      }),
                    }),
                    (0, j.jsx)(Ce, {
                      category: w,
                      onCategoryChange: function (e) {
                        r.push(
                          ""
                            .concat(r.pathname, "?search=")
                            .concat(u, "&category=")
                            .concat(De(e)),
                          void 0,
                          { shallow: !0 }
                        );
                      },
                    }),
                    (0, j.jsx)($, {
                      items:
                        ((b = O),
                        b.sort(function (e, t) {
                          return e.fields.title.localeCompare(t.fields.title);
                        })),
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
    1454: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/recruit",
        function () {
          return r(2621);
        },
      ]);
    },
    8875: function () {},
    9939: function (e, t, r) {
      "use strict";
      function n(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
  },
  function (e) {
    e.O(
      0,
      [7144, 5544, 648, 8413, 3645, 6562, 4378, 2323, 9774, 2888, 179],
      function () {
        return (t = 1454), e((e.s = t));
        var t;
      }
    );
    var t = e.O();
    _N_E = t;
  },
]);

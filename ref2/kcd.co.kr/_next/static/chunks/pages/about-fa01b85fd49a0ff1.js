(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2521],
  {
    1451: function (e, t, r) {
      "use strict";
      var n,
        i = r(5170);
      function o() {
        return (
          (o = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
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
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          n ||
            (n = i.createElement("path", {
              d: "M11.974 3.464 1.442 14 0 12.542 10.532 2.005H3L3.018 0H14v11h-2.044l.018-7.536Z",
              fill: "#2D91FF",
            }))
        );
      };
    },
    8045: function (e, t, r) {
      "use strict";
      var n,
        i = r(5170);
      function o() {
        return (
          (o = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
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
              viewBox: "0 0 23 42",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          n ||
            (n = i.createElement("path", {
              d: "M22 1 2 21l20 20",
              stroke: "currentColor",
              strokeWidth: 2,
            }))
        );
      };
    },
    4743: function (e, t, r) {
      "use strict";
      var n,
        i = r(5170);
      function o() {
        return (
          (o = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
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
              viewBox: "0 0 23 42",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          n ||
            (n = i.createElement("path", {
              d: "m1 41 20-20L1 1",
              stroke: "currentColor",
              strokeWidth: 2,
            }))
        );
      };
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
        i = r(3440);
      t.Z = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.autoplay,
          r = void 0 !== t && t;
        return {
          pagination: { clickable: !0 },
          autoplay: r,
          modules: [i.tl].concat((0, n.Z)(r ? [i.pt] : [])),
        };
      };
    },
    4931: function (e, t, r) {
      "use strict";
      r.d(t, {
        a: function () {
          return c;
        },
      });
      var n = r(4910),
        i = r(2564),
        o = r.n(i),
        a = r(8649),
        s = r(5170),
        c = (0, a.e)({
          space: "4io3pho3xfqe",
          accessToken: "R4CjfAVANnb9vdkStCaGCFQFTqCx4zLlJnq14mc3TGA",
        });
      t.Z = function (e) {
        var t = e.content_type,
          r = e.limit,
          i = void 0 === r ? 100 : r,
          a = e.skip,
          l = void 0 === a ? 0 : a,
          p = e.order,
          d = (0, s.useState)(null),
          g = d[0],
          u = d[1];
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
                                c.getEntries({
                                  content_type: t,
                                  limit: i,
                                  skip: l,
                                  order: p,
                                })
                              );
                            case 2:
                              (r = e.sent), u(r);
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
            [t, i, l, p]
          ),
          g
        );
      };
    },
    8268: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return Yt;
          },
        });
      var n = r(202),
        i = r(5170),
        o = r(8119),
        a = r(4198),
        s = r(3746),
        c = r(7719),
        l = r(3010);
      var p = (0, a.Z)("div", { target: "ezjp7ql2" })({
          name: "utz9xr",
          styles:
            "width:100%;height:100%;max-width:1280px;margin:0 auto;display:flex;flex-direction:column;justify-content:flex-end;text-align:left;padding:0 30px 70px",
        }),
        d = (0, a.Z)("section", { target: "ezjp7ql1" })({
          name: "1pwxe3k",
          styles:
            "position:relative;width:100%;height:100vh;max-height:800px;background-repeat:no-repeat;background-size:cover;background-position:center center;height:700px",
        }),
        g = (0, a.Z)("div", { target: "ezjp7ql0" })({
          name: "19j5g34",
          styles:
            "position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0.5) 1.48%,\n      rgba(0, 0, 0, 0.245) 10.61%,\n      rgba(0, 0, 0, 0.105) 19.35%,\n      rgba(0, 0, 0, 0) 29.08%\n    ),rgba(79, 68, 224, 0.03)",
        });
      var u = function () {
          var e = (0, i.useRef)(null),
            t = (0, s.Z)({ ref: e, src: "/images/intro__about-m.png" });
          return (0, l.jsxs)(d, {
            src: "/images/intro__about-m.png",
            ref: e,
            children: [
              (0, l.jsx)(g, {}),
              (0, l.jsxs)(p, {
                children: [
                  (0, l.jsx)(c.Z, {
                    visible: t,
                    children: "\uc0ac\uc5c5\uc758 \ubaa8\ub4e0 \uc21c\uac04",
                  }),
                  (0, l.jsx)(c.Z, {
                    visible: t,
                    delay: 0.2,
                    children: "\ub354 \uc27d\uac8c,",
                  }),
                  (0, l.jsx)(c.Z, {
                    visible: t,
                    delay: 0.4,
                    children: "\ub354 \ube60\ub974\uac8c,",
                  }),
                  (0, l.jsx)(c.Z, {
                    visible: t,
                    delay: 0.6,
                    children: "\ub354 \ub611\ub611\ud558\uac8c.",
                  }),
                ],
              }),
            ],
          });
        },
        m = r(1513);
      var f = function () {
          return (0, m.d)()
            ? (0, l.jsx)(u, {})
            : (0, l.jsx)(o.Z, {
                src: "/images/intro__about.png",
                message: {
                  top: "\uc0ac\uc5c5\uc758 \ubaa8\ub4e0 \uc21c\uac04",
                  bottom:
                    "\ub354 \uc27d\uac8c, \ub354 \ube60\ub974\uac8c, \ub354 \ub611\ub611\ud558\uac8c.",
                },
              });
        },
        h = r(3326),
        x = r(2330),
        b = r(8821),
        y = r(1992),
        j = r(1640),
        v = r(170),
        w = r(7101);
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
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(r), !0).forEach(function (t) {
                (0, h.Z)(e, t, r[t]);
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
      var P = (0, a.Z)("section", { target: "e1mweot010" })(""),
        _ = (0, a.Z)("div", { target: "e1mweot09" })(
          "position:relative;display:flex;flex-wrap:wrap;&::before{content:'';position:absolute;width:2px;height:100%;background:linear-gradient(180deg, #cae7ff 90.12%, #1d2137 100%);left:calc(50% - 1px);}",
          (0, m.mq)("mobile"),
          "{&::before{left:5px;}}"
        ),
        k = (0, a.Z)("div", { target: "e1mweot08" })(
          "display:inline-block;color:",
          y.Z.lightBlueBlue,
          ";border-bottom:1px solid ",
          y.Z.lineGray,
          ";padding:0 12px;flex-shrink:0;overflow:hidden;>span{display:inline-block;margin-bottom:7px;}margin-right:24px;padding-bottom:15px;",
          (0, m.mq)("mobile"),
          "{margin-right:12px;}"
        ),
        C = (0, a.Z)("div", { target: "e1mweot07" })(
          "position:relative;min-height:100px;margin-bottom:20px;width:100%;&:last-child{margin-bottom:0;}&:nth-of-type(even){padding-right:calc(50% + 30px);text-align:right;",
          k,
          "{order:1;margin-right:0;margin-left:12px;",
          (0, m.mq)("mobile"),
          "{margin-right:12px;}}}&:nth-of-type(odd){padding-left:calc(50% + 30px);}",
          (0, m.mq)("mobile"),
          "{&:nth-of-type(even){padding-right:0;text-align:left;",
          k,
          "{order:0;margin-left:0;}}&:nth-of-type(odd),&:nth-of-type(even){padding-left:37px;}}"
        ),
        q = (0, a.Z)("div", { target: "e1mweot06" })(
          "position:absolute;left:calc(50% - 6px);height:12px;width:12px;background-color:",
          y.Z.lightBlueBlue,
          ";border-radius:50%;",
          (0, m.mq)("mobile"),
          "{left:0;}"
        ),
        D = (0, a.Z)("div", { target: "e1mweot05" })({
          name: "1pot2mv",
          styles: "display:flex;align-items:start;margin-top:-25px",
        }),
        E = (0, a.Z)("div", { target: "e1mweot04" })({
          name: "inxa61",
          styles: "flex:1;overflow:hidden",
        }),
        z = (0, a.Z)("h3", { target: "e1mweot03" })(
          "font-weight:600;font-size:34px;line-height:50px;color:",
          y.Z.white,
          ";",
          (0, m.mq)("mobile"),
          "{font-size:28px;}"
        ),
        B = (0, a.Z)(v.YB, { target: "e1mweot02" })(
          "color:",
          y.Z.white,
          ";margin-top:2px;",
          (0, m.mq)("mobile"),
          "{font-size:18px;}"
        ),
        S = (0, a.Z)(v._p, { target: "e1mweot01" })(
          "color:",
          y.Z.lightBlueBlue,
          ";margin-top:22px;",
          (0, m.mq)("mobile"),
          "{display:none;}"
        ),
        K = (0, a.Z)(S, { target: "e1mweot00" })(
          "display:none;margin-bottom:100px;",
          (0, m.mq)("mobile"),
          "{display:block;}"
        );
      var M = function (e) {
          var t = e.items;
          return (0, l.jsx)(P, {
            children: (0, l.jsx)(_, {
              children: t.map(function (e, t) {
                var r = e.icon,
                  n = e.date,
                  i = e.title,
                  o = e.description,
                  a = "timeline-".concat(t);
                return (0,
                l.jsxs)(C, { children: [(0, l.jsx)(q, {}), (0, l.jsxs)(D, { id: a, children: [(0, l.jsx)(k, { children: (0, l.jsx)("img", Z({ src: "https:".concat(r), width: 28, height: 28, alt: "icon" }, (0, w.Z)({ anchor: "#".concat(a) }))) }), (0, l.jsxs)(E, Z(Z({}, (0, w.Z)({ sequence: 1, anchor: "#".concat(a) })), {}, { children: [(0, l.jsx)(z, { children: n }), (0, l.jsx)(B, { children: i }), (0, l.jsx)(S, { children: o })] }))] }), (0, l.jsx)(K, Z(Z({}, (0, w.Z)({ sequence: 2, anchor: "#".concat(a) })), {}, { children: o }))] }, t);
              }),
            }),
          });
        },
        N = r(4910),
        G = r(2564),
        T = r.n(G),
        X = r(4931);
      function A(e, t) {
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
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(Object(r), !0).forEach(function (t) {
                (0, h.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : A(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var I = (0, a.Z)("div", { target: "exzgmn0" })(
        "margin-top:98px;",
        (0, m.mq)("mobile"),
        "{margin-top:135px;}"
      );
      var L = function () {
          var e = (function () {
              var e = (0, i.useState)([]),
                t = e[0],
                r = e[1];
              return (
                (0, i.useEffect)(function () {
                  function e() {
                    return (e = (0, N.Z)(
                      T().mark(function e() {
                        var t;
                        return T().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  X.a.getEntries({
                                    content_type: "history",
                                    order: "fields.date",
                                  })
                                );
                              case 2:
                                (t = e.sent), r(t.items);
                              case 4:
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
                t
              );
            })(),
            t = e.map(function (e) {
              return R(
                R({}, e.fields),
                {},
                {
                  icon: e.fields.icon.fields.file.url,
                  date: e.fields.date.split("-").splice(0, 2).join(". "),
                }
              );
            });
          return (0, l.jsxs)(x.Z, {
            padding: { pc: [156, 129], mobile: [105, 0] },
            backgroundColor: y.Z.darkNavy,
            id: j.W.COMPANY.HISTORY,
            children: [
              (0, l.jsx)(b.Z, {
                align: "left",
                category: "\uc9c0\ub098\uc628 \uae38",
                categoryColor: y.Z.lightBlueBlue,
                title:
                  '"\uadf8\ub798\uc11c \uc624\ub298 \ud1b5\uc7a5\uc5d0 \ub3c8\uc774 \uc5bc\ub9c8 \ub4e4\uc5b4\uc62c\uae4c?"',
                description:
                  "\uc2dc\uc791\uc740 \uc0ac\uc7a5\ub2d8\ub4e4\uc774 \ub9e4\uc77c \ud558\ub294 \uc9e7\uc740 \uc9c8\ubb38\uc774\uc5c8\uc2b5\ub2c8\ub2e4.\n2017\ub144, \uc774 \uc22b\uc790\ub97c \uc27d\uac8c \ud655\uc778\ud560 \uc218 \uc788\ub3c4\ub85d \uce74\uce74\uc624\ud1a1 \ucc57\ubd07 \uae30\ubc18\uc758 \uce90\uc2dc\ub178\ud2b8\uac00 \ud0c4\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",
                darken: !0,
              }),
              (0, l.jsx)(I, { children: (0, l.jsx)(M, { items: t }) }),
            ],
          });
        },
        F = r(7190),
        H = r(1451);
      var W = (0, a.Z)("article", { target: "ej29kqm6" })(
          "display:flex;flex-direction:column;justify-content:space-between;border-bottom:1px solid ",
          y.Z.lineGray,
          ";padding-top:70px;padding-bottom:25px;",
          (0, m.mq)("mobile"),
          "{padding:50px 0;&:nth-of-type(1){border-top:1px solid ",
          y.Z.lineGray,
          ";}}"
        ),
        Y = (0, a.Z)(F.lx, { target: "ej29kqm5" })(""),
        U = (0, a.Z)("h4", { target: "ej29kqm4" })(
          "color:",
          y.Z.primary,
          ";font-family:Pretendard;font-size:20px;font-style:normal;font-weight:700;line-height:32px;margin:2px 0 0;",
          (0, m.mq)("mobile"),
          "{font-size:20px;font-style:normal;font-weight:700;line-height:32px;}"
        ),
        J = (0, a.Z)(v._p, { target: "ej29kqm3" })({
          name: "wt3lag",
          styles: "margin:20px 0",
        }),
        Q = (0, a.Z)(v._p, { target: "ej29kqm2" })(
          "color:",
          y.Z.paragraphGray,
          ";"
        ),
        V = (0, a.Z)("img", { target: "ej29kqm1" })(
          "height:80px;width:auto;margin-bottom:20px;",
          (0, m.mq)("mobile"),
          "{height:60px;}"
        ),
        $ = (0, a.Z)("a", { target: "ej29kqm0" })(
          "display:flex;align-items:center;color:",
          y.Z.blueBlue,
          ";font-family:Pretendard;font-size:18px;font-style:normal;font-weight:700;line-height:28px;margin-top:41px;&:hover{}",
          (0, m.mq)("mobile"),
          "{font-size:16px;line-height:26px;margin-top:20px;}"
        );
      var ee = function (e) {
        var t = e.title,
          r = e.titleEng,
          n = e.link,
          i = e.caption,
          o = e.description,
          a = e.src;
        return (0, l.jsxs)(W, {
          children: [
            (0, l.jsxs)("div", {
              children: [
                a && (0, l.jsx)(V, { src: a }),
                (0, l.jsx)(Y, { bold: !0, children: t }),
                (0, l.jsx)(U, { children: r }),
                (0, l.jsx)(J, { children: i }),
                (0, l.jsx)(Q, { children: o }),
              ],
            }),
            (0, l.jsxs)($, {
              href: n,
              target: "_blank",
              children: [
                "\ubc14\ub85c\uac00\uae30 ",
                (0, l.jsx)(H.Z, {
                  width: 14,
                  height: 14,
                  style: { marginLeft: 7 },
                }),
              ],
            }),
          ],
        });
      };
      function te(e, t) {
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
      function re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? te(Object(r), !0).forEach(function (t) {
                (0, h.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : te(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var ne = r(6459).X.map(function (e) {
          switch (e.title) {
            case "\ud55c\uad6d\ud3c9\uac00\uc815\ubcf4":
              return re(
                re({}, e),
                {},
                {
                  titleEng: "(Korea Credit Service, KCS)",
                  caption:
                    "\ub370\uc774\ud130\ub85c \ud601\uc2e0\ud558\ub294 \uac1c\uc778\uc0ac\uc5c5\uc790CB",
                  description:
                    "\ud55c\uad6d\ud3c9\uac00\uc815\ubcf4(KCS)\ub294 \ub2e4\uc591\ud55c \ub370\uc774\ud130\ub97c \ubc14\ud0d5\uc73c\ub85c \ud55c \uc2e0\uc6a9 \ud3c9\uac00\ub97c \ud1b5\ud574 \uc911\uae08\ub9ac \uc2dc\uc7a5\uc744 \ud601\uc2e0\ud569\ub2c8\ub2e4. 2022\ub144 7\uc6d4 \uc804\uc5c5 \uc0ac\uc5c5\uc790\ub85c\ub294 \ucd5c\ucd08\ub85c \uae08\uc735\uc704\uc6d0\ud68c\ub85c\ubd80\ud130 \uac1c\uc778\uc0ac\uc5c5\uc790 CB \ud5c8\uac00\ub97c \ud68d\ub4dd\ud588\uc2b5\ub2c8\ub2e4. \uc815\uad50\ud55c \uc2e0\uc6a9\ud3c9\uac00\ub97c \ud1b5\ud574 \uae08\ub9ac\uc808\ubcbd\uc744 \ud574\uc18c\ud558\uace0 \ud3ec\uc6a9\uc801 \uae08\uc735\uc744 \uc2e4\ud604\ud558\uae30 \uc704\ud574 \ub178\ub825\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
                  src: "/images/logos/KCS_logo.png",
                }
              );
            case "\ud55c\uad6d\uacb0\uc81c\ub124\ud2b8\uc6cd\uc2a4":
              return re(
                re({}, e),
                {},
                {
                  titleEng: "(Korea Payment Networks, KPN)",
                  caption:
                    "\uacb0\uc81c\uc758 \ubaa8\ub4e0 \ub2e8\uacc4\uc5d0\uc11c \ucd5c\uace0\uc758 \uacbd\ud5d8\uc744",
                  description:
                    "\ud55c\uad6d\uacb0\uc81c\ub124\ud2b8\uc6cd\uc2a4(KPN)\ub294 \ub300\ud615\uc5d0\uc11c \uc18c\ud615 \uac00\ub9f9\uc810\uc758 \uacb0\uc81c\uc5d0 \ub300\ud55c \ubaa8\ub4e0 \uc194\ub8e8\uc158\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \ud55c\uad6d\uacb0\uc81c\ub124\ud2b8\uc6cd\uc2a4\ub294 \uc2e0\ub8b0\uc131\uc788\ub294 \uae30\uc220\uc744 \uae30\ubc18\uc73c\ub85c \uacb0\uc81c \ub2e8\ub9d0\uae30\uc5d0\uc11c\ubd80\ud130 \uacb0\uc81c\ucc98\ub9ac, \ubd84\uc11d \ubc0f \ubcf4\uace0\uc5d0 \uad00\ub828\ub41c \ucd5c\uace0\uc758 \uace0\uac1d \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.",
                  src: "/images/logos/KPN_logo.png",
                }
              );
            case "\uc544\uc784\uc720":
              return re(
                re({}, e),
                {},
                {
                  titleEng: "(IMU)",
                  caption: "\ud3ec\uc2a4 \uc804\ubb38 \uae30\uc5c5",
                  description:
                    "\uc544\uc784\uc720(ImU)\ub294 \uad6d\ub0b4\uc678\uc5d0\uc11c \uae30\uc220\ub825\uc744 \uc778\uc815\ubc1b\ub294 \ud3ec\uc2a4(POS) \uc804\ubb38 \uae30\uc5c5\uc785\ub2c8\ub2e4. \uafb8\uc900\ud55c \uc5f0\uad6c \uac1c\ubc1c\uc744 \ud1b5\ud574 \ud3ec\uc2a4 \uad6c\uc131\uc758 \uc591\ub300 \ucd95\uc778 \ud558\ub4dc\uc6e8\uc5b4 \uc81c\uc870\uc640 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c \uc5ed\ub7c9\uc744 \ubaa8\ub450 \ubcf4\uc720\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ud575\uc2ec \ubd80\ud488\uc778 \uba54\uc778\ubcf4\ub4dc \uc124\uacc4 \uae30\uc220\ub825\uacfc, \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uba74\uc5d0\uc11c\ub294 \ud074\ub77c\uc6b0\ub4dc \uae30\ubc18 \ud3ec\uc2a4, \ud0a4\uc624\uc2a4\ud06c, \ubaa8\ubc14\uc77c \ud1b5\ud569 \uc5f0\uacb0 \uc194\ub8e8\uc158\uacfc \uad00\ub828 \ud2b9\ud5c8\ub3c4 \ub2e4\uc218 \ubcf4\uc720\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
                  src: "/images/logos/IMU_logo.png",
                }
              );
            case "\ud55c\uad6d\uc0ac\uc5c5\uc790\uacbd\ud5d8":
              return re(
                re({}, e),
                {},
                {
                  titleEng: "(Korea Merchant eXperience, KMX)",
                  caption:
                    "\uc0ac\uc7a5\ub2d8 \uc804\ubb38 \uc0c1\ub2f4 \ud68c\uc0ac",
                  description:
                    "\ud55c\uad6d\uc0ac\uc5c5\uc790\uacbd\ud5d8(KMX)\ub294 \uc18c\uc0c1\uacf5\uc778 \uc0ac\uc7a5\ub2d8\ub4e4\uc5d0\uac8c \ucd5c\uc801\uc758 \uace0\uac1d \uacbd\ud5d8\uc744 \uc81c\uacf5\ud558\ub294 \uc0ac\uc5c5\uc790\uacbd\ud5d8(MX, Merchant eXperience) \uc804\ubb38 \uae30\uc5c5\uc785\ub2c8\ub2e4. \uc0ac\uc7a5\ub2d8\ub4e4\uc5d0 \ub300\ud55c \uacf5\uac10\uc744 \ubc14\ud0d5\uc73c\ub85c \uc804\ubb38\uc801\uc774\uace0 \ucc28\ubcc4\ud654\ub41c \uace0\uac1d \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. KCD \uacf5\ub3d9\uccb4\uc0ac\uac00 \uc6b4\uc601\ud558\ub294 \uc11c\ube44\uc2a4\ub97c \uae30\ubc18\uc73c\ub85c \ud55c \uc885\ud569 \ucee8\uc124\ud305\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",
                  src: "/images/logos/KMX_logo.png",
                }
              );
            default:
              throw new Error(
                "\ucee4\ubba4\ub2c8\ud2f0 \ud0c0\uc785\uc744 \ucc3e\uc744 \uc218\uac00 \uc5c6\uc5b4\uc694."
              );
          }
        }),
        ie = [
          "kakao",
          "kbbank",
          "kb",
          "kt",
          "shinhancard",
          "samsung",
          "gs",
          "dunamu",
          "lguplus",
          "kakaoventures",
          "pavillioncapital",
          "quad",
          "kgic",
          "shinhanivvestment",
          "dcamp",
          "kclavis",
          "kg",
          "ryukyung",
          "morgan",
          "hanhwa",
        ],
        oe = [
          {
            category: "\ube0c\ub79c\ub4dc \uc790\uc0b0",
            title:
              "KCD \uacf5\ub3d9\uccb4 \ube0c\ub79c\ub4dc \uac00\uc774\ub4dc",
            url: "/docs/mediakit/KCD\uacf5\ub3d9\uccb4_\uac00\uc774\ub4dc\ub77c\uc778_240105.pdf",
            filename:
              "KCD\uacf5\ub3d9\uccb4_\uac00\uc774\ub4dc\ub77c\uc778_240105",
          },
          {
            category: "\ube0c\ub79c\ub4dc \uc790\uc0b0",
            title: "KCD \uacf5\ub3d9\uccb4 \ube0c\ub79c\ub4dc \ub85c\uace0",
            url: "/docs/mediakit/KCD_\uacf5\ub3d9\uccb4_\ub85c\uace0_240105.zip",
            filename: "KCD_\uacf5\ub3d9\uccb4_\ub85c\uace0_240105",
          },
        ],
        ae = [
          {
            category: "\uc11c\ube44\uc2a4 \ube0c\ub79c\ub4dc \uc790\uc0b0",
            title:
              "\uce90\uc2dc\ub178\ud2b8 \ube0c\ub79c\ub4dc \uac00\uc774\ub4dc",
            url: "/docs/mediakit/Cashnote_\uac00\uc774\ub4dc\ub77c\uc778_240105.pdf",
            filename: "Cashnote_\uac00\uc774\ub4dc\ub77c\uc778_240105",
          },
          {
            category: "\uc11c\ube44\uc2a4 \ube0c\ub79c\ub4dc \uc790\uc0b0",
            title: "\uce90\uc2dc\ub178\ud2b8 \ube0c\ub79c\ub4dc \ub85c\uace0",
            url: "/docs/mediakit/Cashnote_\ub85c\uace0_240105.zip",
            filename: "Cashnote_\ub85c\uace0_240105",
          },
        ],
        se = {
          "c-level": [
            {
              name: "\uae40\ub3d9\ud638",
              role: "CEO, Co - Founder",
              description:
                "\uae40\ub3d9\ud638 \ub300\ud45c(CEO)\ub294 2016\ub144 \ud55c\uad6d\uc2e0\uc6a9\ub370\uc774\ud130(KCD)\ub97c \uacf5\ub3d9 \ucc3d\uc5c5\ud55c \uc5f0\uc1c4\ucc3d\uc5c5\uc790\uc785\ub2c8\ub2e4. \uc0ac\uc5c5\uc790\uac00 \uc0ac\uc5c5\uc758 \ubaa8\ub4e0 \uc21c\uac04 \uc9c1\uba74\ud558\ub294 \ub2e4\uc591\ud55c \ubb38\uc81c\ub97c \ub3d5\uae30 \uc704\ud574 KCD\ub97c \ucc3d\uc5c5\ud588\uc2b5\ub2c8\ub2e4. \uc5f0\uc138\ub300\ud559\uad50 \uc7ac\ud559 \uc911\uc778 2011\ub144 \uc544\uc774\ub514\uc778\ud050(\uc624\ud508\uc11c\ubca0\uc774)\ub97c \uacf5\ub3d9 \ucc3d\uc5c5\ud588\uc73c\uba70, 2016\ub144\uc5d0\ub294 \ud3ec\ube0c\uc2a4 \uc544\uc2dc\uc544\ub85c\ubd80\ud130 \u201930 under 30\u2019 \uc5d0 \uc120\uc815\ub410\uc2b5\ub2c8\ub2e4.",
              image: {
                pc: "/images/about__leadership__clevel-kim.png",
                mobile: "/images/about__leadership__clevel-kim-m.png",
              },
            },
            {
              name: "\uc784\uc815\uae30",
              role: "CTO",
              description:
                "\uc784\uc815\uae30 \ucd5c\uace0\uae30\uc220\ucc45\uc784\uc790(CTO)\ub294 \ud55c\uad6d\uc2e0\uc6a9\ub370\uc774\ud130(KCD)\uc758 \uae30\uc220 \ubd80\ubb38 \ucd1d\uad04\uc785\ub2c8\ub2e4. \ubcf4\ub2e4 \ub9ce\uc740 \uc0ac\uc5c5\uc790\uc5d0\uac8c \ub354 \ub098\uc740 \uc194\ub8e8\uc158\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \uc804\ub2ec\ud558\uae30 \uc704\ud574 KCD\uc5d0 \ud569\ub958\ud588\uc2b5\ub2c8\ub2e4. \uc6b0\uc544\ud55c\ud615\uc81c\ub4e4, \ucfe0\ud321, \ub124\uc774\ubc84 \ub4f1\uc5d0\uc11c \ub2e4\uc591\ud55c \ud504\ub85c\uc81d\ud2b8\ub97c \uc774\ub04c\uba70 \uae30\uc220 \ub9ac\ub354\uc2ed\uc744 \ub2e4\uc838\uc654\uc73c\uba70, 2022\ub144 9\uc6d4\ubd80\ud130 CTO\ub85c \uc7ac\uc784\uc911\uc785\ub2c8\ub2e4.",
              image: {
                pc: "/images/about__leadership__clevel-lim.png",
                mobile: "/images/about__leadership__clevel-lim-m.png",
              },
            },
          ],
          advisor: [
            {
              name: "\uc815\ubcf4\ub77c \uace0\ubb38",
              role: "Product Experience",
              description:
                '"\uc790\uc601\uc5c5\uc790\uc758 Digitization\uc744 \uc704\ud574 \ud55c\uad6d\uc2e0\uc6a9\ub370\uc774\ud130\uc640 \ud568\uaed8\ud569\ub2c8\ub2e4."',
              image: {
                pc: "/images/about__leadership__advisor-jung.png",
                mobile: "/images/about__leadership__advisor-jung-m.png",
              },
              history: [
                "\ud604) Bill.com \ucd5c\uace0\uacbd\ud5d8\ucc45\uc784\uc790",
                "\ud604) Remitly \uc774\uc0ac",
                "eBay \ucf54\ub9ac\uc544 \ucd5c\uace0\uc81c\ud488\ucc45\uc784\uc790",
                "\uc560\ud50c \uc628\ub77c\uc778\uc2a4\ud1a0\uc5b4 \uc9c0\ubd88\uacb0\uc81c \ub514\ub809\ud130",
                "\ud398\uc774\ud314 \ud50c\ub7ab\ud3fc \uc2dc\ub2c8\uc5b4 \ub514\ub809\ud130",
              ],
            },
            {
              name: "\uc2e0\uba85\uc12d \uace0\ubb38",
              role: "Brand Experience",
              description:
                '"\uc633\uc740 \uac00\uce58\ub97c \ucd94\uad6c\ud558\ub294 \uc633\uc740 \uc11c\ube44\uc2a4\uc758 \ube0c\ub79c\ub4dc \uacbd\ud5d8\uc744 \uc704\ud574 KCD\uc640 \ud568\uaed8\ud569\ub2c8\ub2e4."',
              image: {
                pc: "/images/about__leadership__advisor-shin.png",
                mobile: "/images/about__leadership__advisor-shin-m.png",
              },
              history: [
                "\ud604) PlusX Co-Founder / \uace0\ubb38",
                "\ud64d\uc775\ub300\ud559\uad50 \uc2dc\uac01\ub514\uc790\uc778\uacfc \uc678\ub798\uad50\uc218",
                "\ub124\uc774\ubc84 \ube0c\ub79c\ub4dc\uacbd\ud5d8\ub514\uc790\uc778 \ud300\uc7a5",
                "IF, \ub808\ub4dc\ub2f7 \ub4f1 \uae00\ub85c\ubc8c \ub514\uc790\uc778 \uc5b4\uc6cc\ub4dc 130\uc5ec\ucc28\ub840 \uc218\uc0c1",
              ],
            },
            {
              name: "\ud669\uc131\ud604 \uace0\ubb38",
              role: "HR Experience",
              description:
                '"\ud3ec\uc6a9\uc801 \uae08\uc735\uc758 \ud655\ub300\ub97c \uc704\ud574 \ud55c\uad6d\uc2e0\uc6a9\ub370\uc774\ud130\uc640 \ud568\uaed8\ud569\ub2c8\ub2e4."',
              image: {
                pc: "/images/about__leadership__advisor-hwang.png",
                mobile: "/images/about__leadership__advisor-hwang-m.png",
              },
              history: [
                "\ud604) \ud000\ud140\uc778\uc0ac\uc774\ud2b8 \ub300\ud45c",
                "\ud604) \ud55c\uae00\uacfc\ucef4\ud4e8\ud130 \uc0ac\uc678\uc774\uc0ac",
                "\uce74\uce74\uc624 \uc778\uc0ac\ucd1d\uad04 \ubd80\uc0ac\uc7a5",
                "\uad6c\uae00 \ubcf8\uc0ac \uae30\uc220 \ubd80\ubb38 HRBP(HR Business Partner)",
                "\uad6c\uae00\ucf54\ub9ac\uc544 \uc778\uc0ac\ucd1d\uad04",
                "\uc57c\ud6c4!\ucf54\ub9ac\uc544 \uc778\uc0ac\ucd1d\ubb34 \ubd80\ubb38\uc7a5",
              ],
            },
          ],
        };
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
      var le = (0, a.Z)("div", { target: "eecqz9p4" })(
          (0, m.mq)("mobile"),
          "{>*{text-align:left;}}"
        ),
        pe = (0, a.Z)("div", { target: "eecqz9p3" })(
          "display:grid;grid-template-columns:repeat(2, 1fr);grid-column-gap:40px;grid-row-gap:30px;",
          (0, m.mq)("mobile"),
          "{grid-template-columns:1fr;margin-top:75px;}"
        ),
        de = (0, a.Z)(pe, { target: "eecqz9p2" })(
          (0, m.mq)("mobile"),
          "{grid-template-columns:1fr;margin-top:120px;}"
        ),
        ge = (0, a.Z)("hr", { target: "eecqz9p1" })({
          name: "1as0if2",
          styles:
            "margin:150px 0 0;background:#5b6a81;height:1px;width:100%;border:none",
        }),
        ue = (0, a.Z)("div", { target: "eecqz9p0" })(
          "border-bottom:1px solid ",
          y.Z.lineGray,
          ";padding-bottom:70px;",
          (0, m.mq)("mobile"),
          "{border-top:1px solid ",
          y.Z.lineGray,
          ";}>img{width:270px;height:40px;margin:90px 0 20px;",
          (0, m.mq)("mobile"),
          "{width:202px;height:30px;margin:65px 0 20px;}}>h3{color:",
          y.Z.primary,
          ";font-family:Pretendard;font-size:30px;font-style:normal;font-weight:700;line-height:42px;margin-top:20px;",
          (0, m.mq)("mobile"),
          "{font-size:22px;font-style:normal;font-weight:700;line-height:30px;letter-spacing:-0.44px;}}>h4{color:",
          y.Z.primary,
          ";font-family:Pretendard;font-size:20px;font-style:normal;font-weight:700;line-height:32px;margin-top:2px;",
          (0, m.mq)("mobile"),
          "{font-size:18px;font-style:normal;font-weight:700;line-height:30px;letter-spacing:-0.36px;}}>.caption{color:",
          y.Z.primary,
          ";font-family:Pretendard;font-size:18px;font-style:normal;font-weight:400;line-height:30px;margin-top:20px;",
          (0, m.mq)("mobile"),
          "{font-size:16px;font-style:normal;font-weight:400;line-height:26px;}}>.description{color:",
          y.Z.paragraphGray,
          ";font-family:Pretendard;font-size:18px;font-style:normal;font-weight:400;line-height:30px;margin-top:20px;",
          (0, m.mq)("mobile"),
          "{font-size:16px;font-style:normal;font-weight:400;line-height:26px;}}"
        );
      var me = function () {
          var e = (0, m.d)();
          return (0, l.jsxs)(x.Z, {
            padding: { pc: [250, 0], mobile: [180, 0] },
            id: j.W.COMPANY.COMMUNITY,
            children: [
              (0, l.jsx)(le, {
                children: (0, l.jsx)(b.Z, {
                  category: "KCD \uacf5\ub3d9\uccb4",
                  categoryColor: y.Z.kcdBlue,
                  title:
                    " \ud568\uaed8 \ub9cc\ub4dc\ub294 \uc0ac\uc5c5\uc790 \uc911\uc2ec \ub370\uc774\ud130/\ube44\uc988\ub2c8\uc2a4 \uc0dd\ud0dc\uacc4",
                  align: e ? "left" : "center",
                }),
              }),
              !e && (0, l.jsx)(ge, {}),
              (0, l.jsx)(pe, {
                children: ne.map(function (e) {
                  return (0, l.jsx)(
                    ee,
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? ce(Object(r), !0).forEach(function (t) {
                              (0, h.Z)(e, t, r[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r)
                            )
                          : ce(Object(r)).forEach(function (t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(r, t)
                              );
                            });
                      }
                      return e;
                    })({}, e),
                    e.title
                  );
                }),
              }),
              !e && (0, l.jsx)(ge, {}),
              (0, l.jsx)(de, {
                children: (0, l.jsxs)(ue, {
                  children: [
                    (0, l.jsx)("img", {
                      src: "/images/logos/BOTTLED_logo.png",
                      loading: "lazy",
                    }),
                    (0, l.jsx)("h3", { children: "\ubc14\ud2c0\ub4dc" }),
                    (0, l.jsx)("h4", { children: "(BOTTLED)" }),
                    (0, l.jsx)("p", {
                      className: "caption",
                      children:
                        "\uc0ac\uc7a5\ub2d8\uc758 \uace0\ubbfc\uacfc \uacf5\uac10\uc73c\ub85c \uc11c\ube44\uc2a4\ub97c \ub9cc\ub4dc\ub294 UX \uc2a4\ud1a0\uc5b4",
                    }),
                    (0, l.jsxs)("p", {
                      className: "description",
                      children: [
                        "\ubc14\ud2c0\ub4dc\ub294 \ud55c\uad6d\uc2e0\uc6a9\ub370\uc774\ud130\uac00 \ub300\ud55c\ubbfc\uad6d \uc18c\uc0c1\uacf5\uc778\uc758 \uace0\ubbfc\uc744 \uc9c1\uc811 \uacbd\ud5d8\ud558\ub294 \ub3d9\uc2dc\uc5d0, \uc0c8\ub85c\uc6b4 \uce90\uc2dc\ub178\ud2b8 \uc11c\ube44\uc2a4\ub97c \uac00\uc7a5 \uba3c\uc800 \uc2e4\ud5d8\ud558\ub294 UX \uc2a4\ud1a0\uc5b4\uc785\ub2c8\ub2e4.",
                        (0, l.jsx)("br", {}),
                        "\ubaa8\ub4e0 \uad6c\uc131\uc6d0\ub4e4\uc740 \u2018\uc0ac\uc7a5\ub2d8 \ub418\uc5b4\ubcf4\uae30\u2019 \uc628\ubcf4\ub529 \ud504\ub85c\uadf8\ub7a8\uc744 \ud1b5\ud574 \uc0ac\uc5c5\uc758 \ud604\uc2e4\uc744 \uc774\ud574\ud558\uace0, \uc774\ub97c \ubc14\ud0d5\uc73c\ub85c \uaf2d \ud544\uc694\ud55c \ud601\uc2e0\uc801\uc778 \uc11c\ube44\uc2a4\ub97c \uc120\ubcf4\uc774\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub9e4\uc7a5\uc740 \uac15\ub0a8\uc5ed \uc778\uadfc\uc5d0 \uc788\uc73c\uba70 \uc640\uc778\uc744 \ube44\ub86f\ud55c \ub2e4\uc591\ud55c \uc8fc\ub958\ub97c \ud310\ub9e4\ud569\ub2c8\ub2e4.",
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        fe = r(6551);
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
      function xe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? he(Object(r), !0).forEach(function (t) {
                (0, h.Z)(e, t, r[t]);
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
      var be = (0, a.Z)("button", { target: "e1r7aq7t2" })(
          "display:flex;justify-content:center;align-items:center;position:relative;min-width:75px;height:44px;padding:0 23px;font-weight:500;font-size:18px;line-height:26px;color:",
          y.Z.componentGray,
          ";border:1px solid ",
          y.Z.lineGray,
          ";border-radius:100px;scroll-snap-align:start;flex-shrink:0;svg{width:24px;height:24px;}",
          function (e) {
            return (
              e.selected &&
              (0, fe.css)(
                "transition-delay:0.2s;color:",
                y.Z.white,
                ";border-color:",
                y.Z.kcdBlue,
                ";",
                ""
              )
            );
          },
          ";"
        ),
        ye = (0, a.Z)("div", { target: "e1r7aq7t1" })(
          "display:flex;align-items:center;justify-content:center;position:absolute;left:0;border-radius:100px;background:",
          y.Z.kcdBlue,
          ";height:100%;transition:0.2s ease-in;"
        ),
        je = (0, a.Z)("div", { target: "e1r7aq7t0" })(
          "display:flex;position:relative;-webkit-overflow-scrolling:touch;overflow-y:hidden;overflow-x:auto;white-space:nowrap;scroll-snap-type:x mandatory;overscroll-behavior-x:contain;gap:7px;",
          function (e) {
            return (
              e.noAnimation &&
              (0, fe.css)(ye, ",", be, "{transition:none;}", "")
            );
          },
          " &::-webkit-scrollbar{display:none;}"
        );
      var ve = function (e) {
        var t = e.items,
          r = e.noAnimation,
          n = void 0 !== r && r,
          o = e.currentTab,
          a = e.onChange,
          s = (0, i.useState)({ left: 0, width: 0, height: 0 }),
          c = s[0],
          p = s[1],
          d = (0, i.useRef)([]),
          g = (0, i.useRef)(null),
          u = function (e) {
            var t = d.current[e].offsetLeft,
              r = d.current[e].getBoundingClientRect();
            return { left: t, width: r.width, height: r.height };
          },
          m = function (e, t) {
            return function () {
              var r,
                n = u(e);
              p(n),
                null === (r = g.current) ||
                  void 0 === r ||
                  r.scrollTo({ left: n.left, behavior: "smooth" }),
                null === a || void 0 === a || a(t);
            };
          };
        return (
          (0, i.useEffect)(
            function () {
              var e = t.findIndex(function (e) {
                return e === o;
              });
              -1 !== e && p(u(e));
            },
            [t, o]
          ),
          (0, l.jsxs)(je, {
            noAnimation: n,
            ref: g,
            children: [
              (0, l.jsx)(ye, { style: xe({}, c) }),
              t.map(function (e, t) {
                return (0, l.jsx)(
                  be,
                  {
                    selected: o === e,
                    onClick: m(t, e),
                    ref: function (e) {
                      return (d.current[t] = e);
                    },
                    children: e,
                  },
                  t
                );
              }),
            ],
          })
        );
      };
      var we = {
          name: "5z4cco",
          styles:
            ">span{transform:rotate(90deg);&:last-child{left:50%;right:50%;}}",
        },
        Oe = (0, a.Z)("div", { target: "eergvm70" })(
          "position:relative;width:24px;height:24px;border-radius:50%;color:#ecf0f1;background:#9f9f9f;>span{position:absolute;transition:0.3s;background:#fff;&:first-of-type{top:25%;bottom:25%;width:10%;left:45%;}&:last-child{left:25%;right:25%;height:10%;top:45%;}}",
          function (e) {
            return e.toMinus && we;
          },
          ";"
        );
      var Ze = function (e) {
        var t = e.toMinus;
        return (0, l.jsxs)(Oe, {
          toMinus: t,
          children: [(0, l.jsx)("span", {}), (0, l.jsx)("span", {})],
        });
      };
      var Pe = (0, a.Z)("div", { target: "e1ocldv18" })(
          "width:100%;height:100%;background-image:",
          function (e) {
            var t = e.src;
            return "url(".concat(t, ")");
          },
          ";background-size:contain;background-repeat:no-repeat;background-position:bottom;background-color:#dcdfe3;transition:filter 0.3s ease;"
        ),
        _e = (0, a.Z)("div", { target: "e1ocldv17" })({
          name: "4lt3pc",
          styles: "overflow:hidden;height:24px;transition:0.3s ease;opacity:1",
        }),
        ke = (0, a.Z)("div", { target: "e1ocldv16" })({
          name: "78egiy",
          styles:
            "font-size:14px;color:#222222;opacity:0;margin-top:32px;transition:0.3s ease",
        }),
        Ce = (0, a.Z)("div", { target: "e1ocldv15" })(
          "position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;&:hover{",
          Pe,
          "{filter:blur(30px);}",
          _e,
          "{height:0;opacity:0;}",
          ke,
          "{opacity:1;}}"
        ),
        qe = (0, a.Z)("div", { target: "e1ocldv14" })(
          "position:absolute;padding:30px;z-index:2;color:",
          y.Z.primary,
          ";"
        ),
        De = (0, a.Z)("span", { target: "e1ocldv13" })({
          name: "r9rlkt",
          styles: "font-weight:700;font-size:16px;line-height:24px",
        }),
        Ee = (0, a.Z)("p", { target: "e1ocldv12" })({
          name: "1kd3dku",
          styles: "font-weight:400;font-size:16px;margin-bottom:10px",
        }),
        ze = (0, a.Z)("p", { target: "e1ocldv11" })({
          name: "1dptoyy",
          styles: "font-weight:400;margin-bottom:32px;line-height:150%",
        }),
        Be = (0, a.Z)("p", { target: "e1ocldv10" })({
          name: "1u3apnh",
          styles: "white-space:pre-line;font-weight:600;line-height:150%",
        });
      var Se = function (e) {
        var t = e.name,
          r = e.role,
          n = e.description,
          i = e.history,
          o = void 0 === i ? [] : i,
          a = e.image;
        return (0, l.jsxs)(Ce, {
          children: [
            (0, l.jsxs)(qe, {
              children: [
                (0, l.jsx)(De, { children: t }),
                (0, l.jsx)(Ee, { children: r }),
                (0, l.jsx)(_e, { children: (0, l.jsx)(Ze, {}) }),
                (0, l.jsxs)(ke, {
                  children: [
                    (0, l.jsx)(ze, { children: n }),
                    (0, l.jsx)(Be, {
                      children: o.map(function (e, t) {
                        return (0,
                        l.jsx)("span", { children: "".concat(e, "\n") }, t);
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)(Pe, { src: a || "" }),
          ],
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
      function Me(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ke(Object(r), !0).forEach(function (t) {
                (0, h.Z)(e, t, r[t]);
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
      var Ne = (0, a.Z)("div", { target: "e14hocad1" })({
          name: "1q22zqe",
          styles: "display:flex;flex-wrap:wrap;gap:20px",
        }),
        Ge = (0, a.Z)("article", { target: "e14hocad0" })({
          name: "b6lkkd",
          styles:
            "position:relative;width:calc(33.3333% - 20px);padding-bottom:calc(33.3333% - 20px)",
        });
      var Te = function (e) {
          var t = e.items;
          return (0, l.jsx)(Ne, {
            children: t.map(function (e, t) {
              return (0,
              l.jsx)(Ge, { children: (0, l.jsx)(Se, Me(Me({}, e), {}, { image: e.image.pc })) }, t);
            }),
          });
        },
        Xe = r(9164),
        Ae = (r(8883), r(8875), r(4239)),
        Re = r(8045),
        Ie = r(4743);
      var Le = (0, a.Z)("div", { target: "e1snj19g2" })({
          name: "1nr2ljd",
          styles:
            "position:absolute;top:40px;width:100%;display:flex;justify-content:space-between",
        }),
        Fe = (0, fe.css)(
          "z-index:1;font-size:16px;color:",
          y.Z.componentGray,
          ";",
          ""
        ),
        He = (0, fe.css)(
          "color:",
          y.Z.whitishBlue,
          ";pointer-events:none;",
          ""
        ),
        We = (0, a.Z)("button", { target: "e1snj19g1" })(
          Fe,
          ";right:0;",
          function (e) {
            return e.disabled && (0, fe.css)(He, ";", "");
          },
          ";"
        ),
        Ye = (0, a.Z)("button", { target: "e1snj19g0" })(
          Fe,
          ";left:0;",
          function (e) {
            return e.disabled && (0, fe.css)(He, ";", "");
          },
          ";"
        );
      var Ue = function () {
          var e = (0, Xe.oc)(),
            t = (0, i.useState)(0),
            r = t[0],
            n = t[1];
          return (
            (0, i.useEffect)(
              function () {
                e.on("slideChange", function (e) {
                  n(e.progress);
                });
              },
              [e]
            ),
            (0, l.jsxs)(Le, {
              children: [
                (0, l.jsx)(Ye, {
                  onClick: function () {
                    return e.slidePrev();
                  },
                  disabled: 0 === r,
                  children: (0, l.jsx)(Re.Z, {}),
                }),
                (0, l.jsx)(We, {
                  onClick: function () {
                    return e.slideNext();
                  },
                  disabled: 1 === r,
                  children: (0, l.jsx)(Ie.Z, {}),
                }),
              ],
            })
          );
        },
        Je = r(7213),
        Qe = r.n(Je);
      var Ve = (0, a.Z)("article", { target: "e1afo51b5" })(""),
        $e = (0, a.Z)("div", { target: "e1afo51b4" })({
          name: "1azakc",
          styles: "text-align:center",
        }),
        et = (0, a.Z)(F.lx, { target: "e1afo51b3" })({
          name: "yz1nei",
          styles: "margin-top:16px",
        }),
        tt = (0, a.Z)("p", { target: "e1afo51b2" })(
          "font-weight:400;font-size:16px;line-height:26px;text-align:center;color:",
          y.Z.paragraphGray,
          ";white-space:pre-line;"
        ),
        rt = (0, a.Z)(tt, { target: "e1afo51b1" })({
          name: "yz1nei",
          styles: "margin-top:16px",
        }),
        nt = (0, a.Z)("div", { target: "e1afo51b0" })({
          name: "f70my9",
          styles: "margin-top:48px",
        });
      var it = function (e) {
        var t = e.name,
          r = e.role,
          n = e.description,
          i = e.history,
          o = void 0 === i ? [] : i,
          a = e.image;
        return (0, l.jsxs)(Ve, {
          children: [
            (0, l.jsxs)($e, {
              children: [
                a &&
                  (0, l.jsx)(Qe(), {
                    src: a,
                    width: 108,
                    height: 108,
                    style: { borderRadius: "100%" },
                    alt: t,
                  }),
                (0, l.jsx)(et, { bold: !0, children: t }),
                (0, l.jsx)("span", { children: r }),
              ],
            }),
            (0, l.jsxs)(nt, {
              children: [
                (0, l.jsx)(tt, { children: n }),
                (0, l.jsx)(rt, {
                  children: o.map(function (e, t) {
                    return (0,
                    l.jsx)("span", { children: "".concat(e, "\n") }, t);
                  }),
                }),
              ],
            }),
          ],
        });
      };
      function ot(e, t) {
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
      function at(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ot(Object(r), !0).forEach(function (t) {
                (0, h.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ot(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var st = (0, a.Z)("div", { target: "e1eyy7yw0" })(
        "position:relative;padding-bottom:48px;.swiper{position:static;}.swiper-pagination-bullet{background-color:",
        y.Z.lineGray,
        ";}.swiper-pagination-bullet-active{background-color:",
        y.Z.kcdBlue,
        ";}"
      );
      var ct = function (e) {
          var t = e.items;
          return (0, l.jsx)(st, {
            children: (0, l.jsxs)(
              Xe.tq,
              at(
                at({ autoHeight: !0 }, (0, Ae.Z)()),
                {},
                {
                  children: [
                    t.map(function (e, t) {
                      return (0,
                      l.jsx)(Xe.o5, { children: (0, l.jsx)(it, at(at({}, e), {}, { image: e.image.mobile })) }, t);
                    }),
                    (0, l.jsx)(Ue, {}),
                  ],
                }
              )
            ),
          });
        },
        lt = (0, a.Z)("div", { target: "eaiymjd0" })(
          "width:100%;display:flex;justify-content:center;margin-bottom:50px;",
          (0, m.mq)("mobile"),
          "{margin-top:46px;justify-content:flex-start;margin-bottom:60px;}"
        );
      var pt,
        dt = function () {
          var e = (0, m.d)(),
            t = (0, i.useState)("C-level"),
            r = t[0],
            n = t[1],
            o = se[r.toLocaleLowerCase()];
          return (0, l.jsxs)(x.Z, {
            padding: { pc: [144, 179], mobile: [38, 0] },
            children: [
              (0, l.jsx)(b.Z, {
                category: "KCD Leadership",
                title:
                  "KCD\ub97c \uc774\ub044\ub294 \ub9ac\ub354\ub4e4\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4",
                align: e ? "left" : "center",
              }),
              (0, l.jsx)(lt, {
                children: (0, l.jsx)(ve, {
                  items: ["C-level", "Advisor"],
                  currentTab: r,
                  onChange: n,
                }),
              }),
              e
                ? (0, l.jsx)(ct, { items: o }, r)
                : (0, l.jsx)(Te, { items: o }),
            ],
          });
        },
        gt = r(2312),
        ut = r(9939);
      function mt() {
        return (
          (mt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          mt.apply(this, arguments)
        );
      }
      var ft = function (e) {
          return i.createElement(
            "svg",
            mt(
              {
                width: "1em",
                height: "1em",
                viewBox: "0 0 14 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            pt ||
              (pt = i.createElement("path", {
                d: "m1 8 6 6 6-6M7 0v13.5",
                stroke: "#fff",
                strokeWidth: 2,
              }))
          );
        },
        ht = ["children"];
      function xt(e, t) {
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
      function bt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? xt(Object(r), !0).forEach(function (t) {
                (0, h.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : xt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var yt = (0, a.Z)(gt.B7, { target: "e1x20oan2" })({
          name: "pcy82y",
          styles: "transition:0.2s",
        }),
        jt = (0, a.Z)("div", { target: "e1x20oan1" })(
          "width:32px;height:32px;display:flex;justify-content:center;align-items:center;color:",
          y.Z.white,
          ";background:",
          y.Z.componentGray,
          ";border-radius:50%;transition:0.2s;"
        ),
        vt = (0, a.Z)("button", { target: "e1x20oan0" })(
          "display:flex;align-items:center;justify-content:space-between;width:100%;padding:43px 0px;border-top:1px solid ",
          y.Z.lineGray,
          ";&:hover{",
          yt,
          "{color:",
          y.Z.blueBlue,
          ";}",
          jt,
          "{background:",
          y.Z.blueBlue,
          ";}}&:last-of-type{border-bottom:1px solid ",
          y.Z.lineGray,
          ";}"
        );
      var wt = function (e) {
        var t = e.children,
          r = (0, ut.Z)(e, ht);
        return (0, l.jsxs)(
          vt,
          bt(
            bt({}, r),
            {},
            {
              children: [
                (0, l.jsx)(yt, { children: t }),
                (0, l.jsx)(jt, { children: (0, l.jsx)(ft, {}) }),
              ],
            }
          )
        );
      };
      var Ot = (0, a.Z)(gt.O6, { target: "e3ofjfu3" })({
          name: "1lgjqmt",
          styles: "text-align:center;margin-bottom:110px",
        }),
        Zt = (0, a.Z)("div", { target: "e3ofjfu2" })(
          "display:grid;grid-template-columns:repeat(2, 1fr);grid-column-gap:180px;",
          (0, m.mq)("mobile"),
          "{grid-template-columns:1fr;grid-column-gap:0px;grid-row-gap:56px;}"
        ),
        Pt = (0, a.Z)(gt.B7, { target: "e3ofjfu1" })(
          "color:",
          y.Z.kcdBlue,
          ";margin-bottom:18px;"
        ),
        _t = (0, a.Z)("div", { target: "e3ofjfu0" })("");
      var kt = function () {
        var e = function (e, t) {
          if (e) {
            var r = document.createElement("a");
            (r.href = e),
              (r.download = t),
              document.body.appendChild(r),
              r.click(),
              document.body.removeChild(r);
          } else alert("\uc900\ube44\uc911\uc785\ub2c8\ub2e4.");
        };
        return (0, l.jsxs)(x.Z, {
          padding: { pc: [100, 248], mobile: [0, 142] },
          id: j.W.COMPANY.NOTICE,
          children: [
            (0, l.jsx)(Ot, { children: "\ubbf8\ub514\uc5b4 \ud0a4\ud2b8" }),
            (0, l.jsxs)(Zt, {
              children: [
                (0, l.jsxs)(_t, {
                  children: [
                    (0, l.jsx)(Pt, {
                      children: "\uae30\uc5c5 \ube0c\ub79c\ub4dc \uc790\ub8cc",
                    }),
                    oe.map(function (t) {
                      var r = t.title,
                        n = t.category,
                        i = t.url,
                        o = t.filename;
                      return (0, l.jsx)(
                        wt,
                        {
                          category: n,
                          onClick: function () {
                            return e(i, o);
                          },
                          children: r,
                        },
                        r
                      );
                    }),
                  ],
                }),
                (0, l.jsxs)(_t, {
                  children: [
                    (0, l.jsx)(Pt, {
                      children:
                        "\uc11c\ube44\uc2a4 \ube0c\ub79c\ub4dc \uc790\ub8cc",
                    }),
                    ae.map(function (t) {
                      var r = t.title,
                        n = t.category,
                        i = t.url,
                        o = t.filename;
                      return (0, l.jsx)(
                        wt,
                        {
                          category: n,
                          onClick: function () {
                            return e(i, o);
                          },
                          children: r,
                        },
                        r
                      );
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      function Ct(e, t) {
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
      function qt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ct(Object(r), !0).forEach(function (t) {
                (0, h.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ct(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Dt = (0, a.Z)("div", { target: "e1iqw1hn0" })(
        "margin-top:85px;",
        (0, m.mq)("mobile"),
        "{width:calc(100% + 60px);margin-left:-30px;margin-top:105px;}"
      );
      var Et = function () {
          var e = (0, m.d)();
          return (0, l.jsxs)(x.Z, {
            padding: { pc: [156, 0], mobile: [97, 0] },
            id: j.W.COMPANY.MISSION,
            children: [
              (0, l.jsx)(b.Z, {
                align: "left",
                category: "Our Mission",
                title:
                  "\uc6b0\ub9ac\ub294 \uc0ac\uc5c5\uc744 \uc2dc\uc791\ud558\uace0 \uc6b4\uc601\ud558\uace0\n\uc131\uc7a5\uc2dc\ud0a4\ub294 \ubaa8\ub4e0 \uacfc\uc815\uc774 \uc26c\uc6cc\uc9c0\ub3c4\ub85d \ub3d5\uc2b5\ub2c8\ub2e4.",
                description:
                  "\ub370\uc774\ud130\ub97c \uc5f0\uacb0\ud574 \ud544\uc694\ud55c \uc815\ubcf4\ub97c \ud55c \ub208\uc5d0 \ubcf4\uace0, \ud569\ub9ac\uc801\uc73c\ub85c \uacb0\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4.\n\ubc88\uac70\ub86d\uace0 \ubcf5\uc7a1\ud55c \uc77c\ub4e4\uc740 \uac04\ud3b8\ud558\uac8c, \uadf8\ub798\uc11c \ubaa8\ub4e0 \uc0ac\uc5c5\uc790\uac00 \uc0ac\uc5c5\uc758 \ud575\uc2ec\uc5d0 \uc9d1\uc911\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4.\n\uc0ac\uc5c5\uc758 \ubaa8\ub4e0 \uc21c\uac04, \ub204\uad6c\ub098 \uae30\uc220 \ud61c\ud0dd\uc744 \ub204\ub9b4 \uc218 \uc788\ub294 \uc138\uc0c1\uc744 \ub9cc\ub4e4\uc5b4 \uac00\uace0 \uc788\uc2b5\ub2c8\ub2e4. ",
              }),
              (0, l.jsx)(
                Dt,
                qt(
                  qt({}, (0, w.Z)()),
                  {},
                  {
                    children: (0, l.jsx)(Qe(), {
                      src: e
                        ? "/images/about__ourmission-m.png"
                        : "/images/about__ourmission.png",
                      layout: "responsive",
                      width: e ? 414 : 1280,
                      height: e ? 414 : 716,
                      alt: "our-mission",
                    }),
                  }
                )
              ),
            ],
          });
        },
        zt = r(3006),
        Bt = r(9555),
        St = r(3123);
      function Kt(e, t) {
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
      function Mt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Kt(Object(r), !0).forEach(function (t) {
                (0, h.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Kt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Nt = (0, a.Z)("div", { target: "e1mwj6wy3" })(
          "display:flex;",
          (0, m.mq)("mobile"),
          "{flex-direction:column;}"
        ),
        Gt = (0, a.Z)(gt.B7, { target: "e1mwj6wy2" })(
          "color:",
          y.Z.kcdBlue,
          ";margin-bottom:42px;"
        ),
        Tt = (0, a.Z)("div", { target: "e1mwj6wy1" })(
          "flex:1;margin-right:70px;",
          (0, m.mq)("mobile"),
          "{margin-right:0px;margin-bottom:105px;}"
        ),
        Xt = (0, a.Z)("div", { target: "e1mwj6wy0" })(
          "width:550px;height:787px;",
          (0, m.mq)("mobile"),
          "{width:calc(100% + 60px);height:auto;margin-left:-30px;}"
        );
      var At = function () {
        var e = (0, m.d)();
        return (0, l.jsx)(x.Z, {
          padding: { pc: [194, 292], mobile: [105, 0] },
          row: !e,
          className: (0, zt.iv)({ name: "d3v9zr", styles: "overflow:hidden" }),
          children: (0, l.jsxs)(Nt, {
            children: [
              (0, l.jsxs)(Tt, {
                children: [
                  (0, l.jsx)(Gt, { children: "Mission Story" }),
                  (0, l.jsx)(Bt.Z, {
                    items: [
                      {
                        title:
                          "\uc6b0\ub9ac\ub294 \uc0ac\uc5c5\uc758 \ubaa8\ub4e0 \uc21c\uac04\uc774\n\uc9c0\uae08\ubcf4\ub2e4 \ub354 \uc26c\uc6cc\uc9c8 \uc218 \uc788\ub2e4\uace0 \ubbff\uc2b5\ub2c8\ub2e4.",
                        content:
                          "\uc9c0\uae08\uc758 \uc0ac\uc5c5\uc790\ub294 \ub108\ubb34\ub098 \ub9ce\uc740 \uc911\uc694\ud55c \uacb0\uc815\uc744 \ub193\uce58\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub108\ubb34\ub098 \ub9ce\uc740 \uc77c\uc0c1 \uc5c5\ubb34\uc5d0 \uc2dc\ub2ec\ub9ac\ub290\ub77c \uc0ac\uc5c5\uc5d0 \uaf2d \ud544\uc694\ud55c \uc815\ubcf4\uc870\ucc28 \uc5bb\uc9c0 \ubabb\ud558\uace0 \ud758\ub824\ubcf4\ub0c5\ub2c8\ub2e4. \ud604\uae08 \ud750\ub984\uc744 \uad00\ub9ac\ud558\ub294 \ubc95\ub3c4, \ub2e8\uace8\uc190\ub2d8\uc744 \ubaa8\uc73c\ub294 \ubc29\ubc95\ub3c4, \ub354 \ub0ae\uc740 \uae08\ub9ac\ub85c \ub3c8\uc744 \uad6c\ud558\ub294 \ubc29\ubc95\ub3c4, \uc815\ubd80\uc758 \uc18c\uc0c1\uacf5\uc778 \uc9c0\uc6d0\ucc45\ub3c4. \uc5b4\ub518\uac00\uc5d0 \uc788\uc9c0\ub9cc \uc0ac\uc5c5\uc790\uc5d0\uac8c \ub3c4\ub2ec\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc0ac\uc5c5\uc740 \ubcf8\uc9c8\uc801\uc73c\ub85c \uc5b4\ub835\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc801\uc808\ud55c \uc815\ubcf4\ub97c \uc81c \ub54c \uc5bb\uc744 \uc218 \uc788\ub2e4\uba74, \uc0ac\uc5c5\uc758 \ubaa8\ub4e0 \uc21c\uac04\uc740 \uc9c0\uae08\ubcf4\ub2e4 \ub354 \uc26c\uc6cc\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
                      },
                      {
                        title:
                          "\uc6b0\ub9ac\ub294 \ubaa8\ub4e0 \uc0ac\uc5c5\uc790\uac00 \uc801\uc808\ud55c \uc815\ubcf4\ub97c\n\uc5bb\uc744 \uc218 \uc788\uc5b4\uc57c \ud55c\ub2e4\uace0 \ubbff\uc2b5\ub2c8\ub2e4.",
                        content:
                          "KCD\ub294 \ub2e4\uc591\ud55c \ub370\uc774\ud130\ub97c \uc5f0\uacb0\ud574, \uc815\ud655\ud55c \uc815\ubcf4\uac00 \uc801\uc808\ud55c \ub54c \ub611\ub611\ud558\uac8c \uc0ac\uc5c5\uc790\uc5d0\uac8c \ucc3e\uc544\uac00\ub3c4\ub85d \ub9cc\ub4ed\ub2c8\ub2e4. \ubc88\uac70\ub85c\uc6b4 \ubc18\ubcf5 \uc791\uc5c5\uc740 \uc815\ubcf4\uae30\uc220\uc744 \ud1b5\ud574 \ube60\ub974\uac8c \ucc98\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d \ub3d5\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ub370\uc774\ud130\ub97c \ubc14\ud0d5\uc73c\ub85c \uc5b4\uc81c\ubcf4\ub2e4 \ub354 \ub098\uc740 \uc194\ub8e8\uc158\uc744 \uc81c\uacf5\ud558\uace0, \uac1c\ubcc4 \uc0ac\uc5c5\uc790\uc5d0\uac8c \uaf2d \ub9de\ub294 \uc11c\ube44\uc2a4\uc640 \uc0c1\ud488\uc744 \uc81c\uc548\ud569\ub2c8\ub2e4. \ubaa8\ub4e0 \uc0ac\uc5c5\uc790\uc5d0\uac8c \uc815\ubcf4\uae30\uc220\uc758 \ud61c\ud0dd\uc774 \ub3cc\uc544\uac08 \ub54c, \uc0ac\uc5c5\uc758 \ubaa8\ub4e0 \uc21c\uac04\uc740 \uc9c0\uae08\ubcf4\ub2e4 \ub354 \uc26c\uc6cc\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
                      },
                      {
                        title:
                          "\uc6b0\ub9ac\ub294 \uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \ub370\uc774\ud130/\ube44\uc988\ub2c8\uc2a4 \uc0dd\ud0dc\uacc4\uac00\n\ud544\uc694\ud558\ub2e4\uace0 \ubbff\uc2b5\ub2c8\ub2e4.",
                        content:
                          "KCD\ub294 \ub192\uc740 \uae30\uc900\uc758 \uac80\uc99d \uacfc\uc815\uc744 \uac70\uccd0 \uc2e0\ub8b0 \uc218\uc900\uc744 \uc785\uc99d\ud55c \ud30c\ud2b8\ub108\uc0ac\ub4e4\uacfc \ud568\uaed8 \uc0ac\uc5c5\uc790 \uc911\uc2ec \ub370\uc774\ud130/\ube44\uc988\ub2c8\uc2a4 \uc0dd\ud0dc\uacc4\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. \uc2e0\ub8b0\ub294 \uc624\uc9c1 \uc5c4\uaca9\ud55c \uac80\uc99d\uc758 \ud1a0\ub300 \uc704\uc5d0\uc11c\ub9cc \ub9cc\ub4e4\uc5b4\uc9c8 \uc218 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. KCD\ub294 \uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \ub370\uc774\ud130\uc640 \ud30c\ud2b8\ub108\ub97c \uc5f0\uacb0\ud574 \uc0ac\uc5c5\uc790\uac00 \ud544\uc694\ud55c \uc194\ub8e8\uc158\uc744 \uc5bb\uc744 \uc218 \uc788\ub294 \uc0dd\ud0dc\uacc4\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. \uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \uc0dd\ud0dc\uacc4\ub97c \ud1b5\ud574 \uc0ac\uc5c5\uc790\ub294 \uc790\uc2e0\uc5d0\uac8c \uac00\uc7a5 \ub3c4\uc6c0\uc774 \ub418\ub294 \uc0c1\ud488, \uc11c\ube44\uc2a4, \uc815\ubcf4\uc5d0 \ub3c4\ub2ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubbff\uc744 \uc218 \uc788\ub294 \uc0dd\ud0dc\uacc4\uc758 \uad6c\ucd95\uc744 \ud1b5\ud574, \uc0ac\uc5c5\uc758 \ubaa8\ub4e0 \uc21c\uac04\uc740 \uc9c0\uae08\ubcf4\ub2e4 \ub354 \uc26c\uc6cc\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
                      },
                    ],
                  }),
                ],
              }),
              (0, l.jsx)(
                Xt,
                Mt(
                  Mt({}, (0, w.Z)()),
                  {},
                  {
                    children: (0, l.jsx)(St.Z, {
                      pc: (0, l.jsx)(Qe(), {
                        src: "/images/about__missionstory.png",
                        width: 550,
                        height: 787,
                        layout: "responsive",
                        alt: "mission-story",
                      }),
                      mobile: (0, l.jsx)(Qe(), {
                        src: "/images/about__missionstory-m.png",
                        width: 414,
                        height: 414,
                        layout: "responsive",
                        alt: "mission-story",
                      }),
                    }),
                  }
                )
              ),
            ],
          }),
        });
      };
      var Rt = (0, a.Z)(gt.O6, { target: "e1bmmcn43" })({
          name: "1lgjqmt",
          styles: "text-align:center;margin-bottom:110px",
        }),
        It = (0, a.Z)("div", { target: "e1bmmcn42" })(
          "display:grid;grid-template-columns:repeat(6, 1fr);gap:62px;",
          (0, m.mq)("mobile"),
          "{display:none;}"
        ),
        Lt = (0, a.Z)("div", { target: "e1bmmcn41" })(
          "display:none;",
          (0, m.mq)("mobile"),
          "{display:block;border-bottom:1px solid ",
          y.Z.lineGray,
          ";margin-bottom:172px;}"
        ),
        Ft = (0, a.Z)("div", { target: "e1bmmcn40" })({
          name: "145q7hw",
          styles:
            "display:grid;grid-template-columns:1fr 1fr;gap:0px;grid-row-gap:60px;padding-bottom:64px",
        });
      function Ht() {
        return (0, l.jsx)(Lt, {
          children: (0, l.jsx)(Bt.Z, {
            items: [
              {
                title: "\ud22c\uc790\uc0ac\ubcf4\uae30",
                content: (0, l.jsx)(Ft, {
                  children: ie.map(function (e) {
                    return (0,
                    l.jsx)(Qe(), { src: "/images/about/logo__service__partner_".concat(e, ".png"), width: 135, height: 40, alt: "partner-logo", layout: "fixed" }, e);
                  }),
                }),
              },
            ],
          }),
        });
      }
      var Wt = function () {
          return (0, l.jsxs)(x.Z, {
            padding: { pc: [98, 144], mobile: [130, 0] },
            children: [
              (0, l.jsxs)(Rt, {
                children: [
                  "\uc5c5\uacc4 \uc120\ub3c4 \uae30\uc5c5\uc758 \uc804\ub7b5\uc801 \ud22c\uc790\uc640 \ud568\uaed8 ",
                  (0, l.jsx)("br", {}),
                  "\ucd5c\uace0\uc758 \uc0ac\uc5c5\uc790 \uc0dd\ud0dc\uacc4\ub97c \ub9cc\ub4e4\uc5b4\uac11\ub2c8\ub2e4",
                ],
              }),
              (0, l.jsx)(It, {
                children: ie.map(function (e) {
                  return (0,
                  l.jsx)(Qe(), { src: "/images/about/logo__service__partner_".concat(e, ".png"), width: 135, height: 40, alt: "partner-logo", layout: "fixed" }, e);
                }),
              }),
              (0, l.jsx)(Ht, {}),
            ],
          });
        },
        Yt = function () {
          return (0, l.jsxs)(n.Z, {
            title: "\ud68c\uc0ac\uc18c\uac1c",
            children: [
              (0, l.jsx)(f, {}),
              (0, l.jsx)(Et, {}),
              (0, l.jsx)(At, {}),
              (0, l.jsx)(L, {}),
              (0, l.jsx)(me, {}),
              (0, l.jsx)(dt, {}),
              (0, l.jsx)(Wt, {}),
              (0, l.jsx)(kt, {}),
            ],
          });
        };
    },
    1945: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about",
        function () {
          return r(8268);
        },
      ]);
    },
    8875: function () {},
    5660: function () {},
  },
  function (e) {
    e.O(
      0,
      [5544, 648, 8413, 2850, 3645, 6562, 4378, 9648, 9555, 9774, 2888, 179],
      function () {
        return (t = 1945), e((e.s = t));
        var t;
      }
    );
    var t = e.O();
    _N_E = t;
  },
]);

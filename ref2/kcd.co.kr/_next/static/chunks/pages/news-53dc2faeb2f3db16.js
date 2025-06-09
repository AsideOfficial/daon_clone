(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6134],
  {
    3809: function (e, t, r) {
      "use strict";
      var n = r(4198),
        o = (r(5170), r(2437)),
        i = r(9759),
        c = r(170),
        s = r(7190),
        a = r(1992),
        l = r(1513),
        u = r(3010);
      var p = (0, n.Z)(s.W6, { target: "e1px5nmb3" })({
          name: "m778nf",
          styles: "transition:0.1s",
        }),
        f = (0, n.Z)("div", { target: "e1px5nmb2" })(
          "display:flex;justify-content:center;align-items:center;background:",
          a.Z.componentGray,
          ";color:",
          a.Z.white,
          ";width:32px;height:32px;border-radius:50%;transition:0.1s;",
          (0, l.mq)("mobile"),
          "{display:none;}"
        ),
        d = (0, n.Z)("a", { target: "e1px5nmb1" })(
          "display:flex;align-items:center;justify-content:space-between;width:100%;padding:24px 0px;border-top:1px solid ",
          a.Z.lineGray,
          ";border-bottom:1px solid ",
          a.Z.lineGray,
          ";cursor:pointer;margin-bottom:-1px;&:hover{",
          p,
          "{color:",
          a.Z.blueBlue,
          ";}",
          f,
          "{background:",
          a.Z.blueBlue,
          ";}}"
        ),
        y = (0, n.Z)("div", { target: "e1px5nmb0" })({
          name: "1269c88",
          styles: "display:flex;gap:7px",
        });
      t.Z = function (e) {
        var t = e.title,
          r = e.newspaper,
          n = e.date,
          s = e.url,
          l = e.onClick;
        return (0, u.jsxs)(d, {
          href: s,
          onClick: l,
          target: "_blank",
          children: [
            (0, u.jsxs)(i.Z, {
              vertical: !0,
              children: [
                (0, u.jsx)(p, { children: t }),
                (0, u.jsxs)(y, {
                  children: [
                    (0, u.jsx)(c.kM, { color: a.Z.blueBlue, children: r }),
                    (0, u.jsx)(c.kM, { color: a.Z.paragraphGray, children: n }),
                  ],
                }),
              ],
            }),
            (0, u.jsx)(f, { children: (0, u.jsx)(o.FNi, { size: 24 }) }),
          ],
        });
      };
    },
    7610: function (e, t) {
      "use strict";
      t.Z = function (e) {
        return e.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
      };
    },
    3990: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return A;
          },
        });
      var n = r(202),
        o = r(4198),
        i = r(9513),
        c = r(5170),
        s = r(2330),
        a = r(8821),
        l = r(3326),
        u = r(6551),
        p = r(1992),
        f = r(7610),
        d = r(3010);
      function y(e, t) {
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
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(r), !0).forEach(function (t) {
                (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : y(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var h = (0, o.Z)("button", { target: "ea9ywvj2" })(
          "display:flex;justify-content:center;align-items:center;position:relative;min-width:75px;height:44px;padding:0 23px;font-weight:500;font-size:18px;line-height:26px;color:",
          p.Z.componentGray,
          ";border:1px solid ",
          p.Z.lineGray,
          ";border-radius:100px;scroll-snap-align:start;flex-shrink:0;svg{width:24px;height:24px;}",
          function (e) {
            return (
              e.selected &&
              (0, u.css)(
                "transition-delay:0.2s;color:",
                p.Z.white,
                ";background-color:",
                p.Z.kcdBlue,
                ";border-color:",
                p.Z.kcdBlue,
                ";",
                ""
              )
            );
          },
          ";"
        ),
        b = (0, o.Z)("div", { target: "ea9ywvj1" })(
          "display:flex;align-items:center;justify-content:center;position:absolute;left:0;border-radius:100px;background:",
          p.Z.kcdBlue,
          ";height:100%;transition:0.2s ease-in;"
        ),
        m = (0, o.Z)("div", { target: "ea9ywvj0" })(
          "display:flex;position:relative;-webkit-overflow-scrolling:touch;overflow-y:hidden;overflow-x:auto;white-space:nowrap;scroll-snap-type:x mandatory;overscroll-behavior-x:contain;gap:7px;",
          function (e) {
            return (
              e.noAnimation && (0, u.css)(b, ",", h, "{transition:none;}", "")
            );
          },
          " &::-webkit-scrollbar{display:none;}"
        );
      var x = function (e) {
          var t = e.items,
            r = e.noAnimation,
            n = void 0 !== r && r,
            o = (0, i.useRouter)(),
            s = (0, c.useState)({ left: 0, width: 0, height: 0 }),
            a = s[0],
            l = s[1],
            u = (0, c.useRef)([]),
            p = (0, c.useRef)(null),
            y = function (e) {
              var t = u.current[e].offsetLeft,
                r = u.current[e].getBoundingClientRect();
              return { left: t, width: r.width, height: r.height };
            },
            x = function (e, t) {
              return function () {
                var r,
                  n = y(e);
                l(n),
                  null === (r = p.current) ||
                    void 0 === r ||
                    r.scrollTo({ left: n.left, behavior: "smooth" }),
                  o.push(
                    "".concat(o.pathname, "?type=").concat((0, f.Z)(t)),
                    void 0,
                    { shallow: !0 }
                  );
              };
            };
          return (
            (0, c.useEffect)(
              function () {
                o.isReady &&
                  (o.query.type ||
                    o.replace(
                      "".concat(o.pathname, "?type=").concat(t[0]),
                      void 0,
                      { shallow: !0 }
                    ));
              },
              [o.query.type, o, t]
            ),
            (0, c.useEffect)(
              function () {
                var e = t.findIndex(function (e) {
                  return e === o.query.type;
                });
                -1 !== e && l(y(e));
              },
              [t, o.query.type]
            ),
            (0, d.jsxs)(m, {
              noAnimation: n,
              ref: p,
              children: [
                (0, d.jsx)(b, { style: g({}, a) }),
                t.map(function (e, t) {
                  return (0, d.jsx)(
                    h,
                    {
                      selected: o.query.type === (0, f.Z)(e),
                      onClick: x(t, e),
                      ref: function (e) {
                        return (u.current[t] = e);
                      },
                      children: e,
                    },
                    t
                  );
                }),
              ],
            })
          );
        },
        j = r(1640),
        v = r(1513),
        O = r(3006),
        w = r(4341),
        Z = r(4931);
      var k = function (e) {
          var t = (0, c.useState)([]),
            r = t[0],
            n = t[1],
            o = (0, c.useState)(0),
            i = o[0],
            s = o[1],
            a = (0, Z.Z)({ skip: i, content_type: e, order: "-fields.date" });
          return (
            (0, c.useEffect)(
              function () {
                a &&
                  a.items &&
                  n(function (e) {
                    return [].concat((0, w.Z)(e), (0, w.Z)(a.items));
                  });
              },
              [a]
            ),
            {
              items: r,
              more: function () {
                return s(function (e) {
                  return e + 1;
                });
              },
              noMore:
                (null === a || void 0 === a ? void 0 : a.total) === r.length,
            }
          );
        },
        P = r(3373),
        _ = r(3809);
      function E(e, t) {
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
      var S = function () {
        var e = k("news"),
          t = e.items,
          r = e.noMore,
          n = e.more,
          o = t.length > 0 && !r;
        return (0, d.jsxs)(d.Fragment, {
          children: [
            t.map(function (e) {
              return (0, d.jsx)(
                _.Z,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? E(Object(r), !0).forEach(function (t) {
                          (0, l.Z)(e, t, r[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r)
                        )
                      : E(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(r, t)
                          );
                        });
                  }
                  return e;
                })({}, e.fields),
                e.sys.id
              );
            }),
            o &&
              (0, d.jsx)(P.Z, {
                className: (0, O.iv)({
                  name: "o44fti",
                  styles: "width:260px;margin:0 auto;margin-top:50px",
                }),
                onClick: n,
                children: "\ub354 \ubcf4\uae30",
              }),
          ],
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
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? D(Object(r), !0).forEach(function (t) {
                (0, l.Z)(e, t, r[t]);
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
      var N = function () {
        var e = k("press-release"),
          t = e.items,
          r = e.noMore,
          n = e.more,
          o = (0, i.useRouter)(),
          c = t.length > 0 && !r;
        return (0, d.jsxs)(d.Fragment, {
          children: [
            t.map(function (e) {
              var t = e.sys,
                r = e.fields;
              return (0, d.jsx)(
                _.Z,
                C(
                  C({}, r),
                  {},
                  {
                    onClick: function () {
                      return o.push("/news/press-release/".concat(t.id));
                    },
                  }
                ),
                t.id
              );
            }),
            c &&
              (0, d.jsx)(P.Z, {
                className: (0, O.iv)({
                  name: "o44fti",
                  styles: "width:260px;margin:0 auto;margin-top:50px",
                }),
                onClick: n,
                children: "\ub354 \ubcf4\uae30",
              }),
          ],
        });
      };
      var q = (0, o.Z)("div", { target: "e1ad9kk1" })(
          "margin-top:90px;margin-bottom:38px;",
          (0, v.mq)("mobile"),
          "{margin-top:62;margin-bottom:23px;}"
        ),
        B = (0, o.Z)("article", { target: "e1ad9kk0" })({
          name: "fd34ai",
          styles: "min-height:50vh",
        });
      var R = function () {
          var e = (0, i.useRouter)().query.type;
          return (0, d.jsxs)(s.Z, {
            padding: { pc: [166, 248], mobile: [105, 152] },
            id: j.W.NEWS.OUR,
            children: [
              (0, d.jsx)(a.Z, {
                align: "left",
                category: "Our news",
                title:
                  "\ud55c\uad6d\uc2e0\uc6a9\ub370\uc774\ud130 \uc8fc\uc694 \uc18c\uc2dd",
              }),
              (0, d.jsx)(q, {
                children: (0, d.jsx)(x, {
                  items: [
                    "\ucd5c\uc2e0\ub274\uc2a4",
                    "\ubcf4\ub3c4\uc790\ub8cc",
                  ],
                }),
              }),
              (0, d.jsx)(B, {
                children:
                  "\ucd5c\uc2e0\ub274\uc2a4" === e
                    ? (0, d.jsx)(S, {})
                    : (0, d.jsx)(N, {}),
              }),
            ],
          });
        },
        G = r(8119);
      var M = function () {
          var e = (0, v.d)();
          return (0, d.jsx)(G.Z, {
            src: e ? "/images/intro__news-m.png" : "/images/intro__news.png",
            message: {
              top: "\ud55c\uad6d\uc2e0\uc6a9\ub370\uc774\ud130\uc758",
              bottom:
                "\uc0c8\ub85c\uc6b4 \uc18c\uc2dd\uc744 \uc804\ud569\ub2c8\ub2e4",
              color: p.Z.white,
              shadow: !0,
            },
            messageWrapperStyle: e
              ? { padding: "200px 30px 0", textAlign: "left" }
              : { paddingBottom: 410 },
            textTop: e,
          });
        },
        A = function () {
          return (0, d.jsxs)(n.Z, {
            title: "\uc0c8 \uc18c\uc2dd",
            children: [(0, d.jsx)(M, {}), (0, d.jsx)(R, {})],
          });
        };
    },
    9976: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/news",
        function () {
          return r(3990);
        },
      ]);
    },
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
      [7144, 5544, 648, 8413, 6562, 4378, 9648, 2323, 9774, 2888, 179],
      function () {
        return (t = 9976), e((e.s = t));
        var t;
      }
    );
    var t = e.O();
    _N_E = t;
  },
]);

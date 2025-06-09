(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8915],
  {
    4931: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return c;
        },
      });
      var r = n(4910),
        i = n(2564),
        o = n.n(i),
        l = n(8649),
        a = n(5170),
        c = (0, l.e)({
          space: "4io3pho3xfqe",
          accessToken: "R4CjfAVANnb9vdkStCaGCFQFTqCx4zLlJnq14mc3TGA",
        });
      t.Z = function (e) {
        var t = e.content_type,
          n = e.limit,
          i = void 0 === n ? 100 : n,
          l = e.skip,
          p = void 0 === l ? 0 : l,
          s = e.order,
          d = (0, a.useState)(null),
          u = d[0],
          f = d[1];
        return (
          (0, a.useEffect)(
            function () {
              function e() {
                return (
                  (e = (0, r.Z)(
                    o().mark(function e() {
                      var n;
                      return o().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                c.getEntries({
                                  content_type: t,
                                  limit: i,
                                  skip: p,
                                  order: s,
                                })
                              );
                            case 2:
                              (n = e.sent), f(n);
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
            [t, i, p, s]
          ),
          u
        );
      };
    },
    8606: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return V;
          },
        });
      var r,
        i = n(4198),
        o = n(3605),
        l = n(9513),
        a = n(6095),
        c = n(3123),
        p = n(6377),
        s = n(2374),
        d = n(8255),
        u = n(3326),
        f = n(1582),
        h = n(5170),
        x = n(1992),
        g = n(1513),
        m = Object.values(f.BLOCKS),
        b = n(3010),
        y = (0, i.Z)("h2", { target: "eke487n11" })(
          "margin-top:8px;margin-bottom:50px;font-family:Pretendard;font-size:30px;font-weight:700;line-height:42px;text-align:left;color:",
          x.Z.black100,
          ";&:before{height:62px;display:block;content:'';}",
          (0, g.mq)("mobile"),
          "{font-size:30px;font-style:normal;font-weight:700;line-height:42px;}"
        ),
        v = (0, i.Z)("h3", { target: "eke487n10" })(
          "margin-top:50px;margin-bottom:30px;font-family:Pretendard;font-size:22px;font-weight:600;line-height:32px;text-align:left;color:",
          x.Z.black100,
          ";",
          (0, g.mq)("mobile"),
          "{font-size:20px;line-height:30px;}"
        ),
        w = (0, i.Z)("p", { target: "eke487n9" })(
          "font-family:Pretendard;font-size:18px;font-style:normal;font-weight:400;line-height:30px;color:",
          x.Z.black200,
          ";",
          (0, g.mq)("mobile"),
          "{font-size:16px;font-style:normal;font-weight:400;line-height:26px;}"
        ),
        Z = (0, i.Z)(w, { target: "eke487n8" })(
          "text-align:center;",
          w,
          "{display:inline;text-align:center;}"
        ),
        j = (0, i.Z)("span", { target: "eke487n7" })(
          "text-decoration:underline;font-family:Pretendard;font-size:18px;font-weight:400;line-height:30px;text-align:left;color:",
          x.Z.black100,
          ";",
          (0, g.mq)("mobile"),
          "{font-size:16px;font-style:normal;font-weight:400;line-height:26px;text-decoration-line:underline;}"
        ),
        k = (0, i.Z)("div", { target: "eke487n6" })(
          "height:40px;",
          (0, g.mq)("mobile"),
          "{height:20px;}"
        ),
        O = (0, i.Z)("ol", { target: "eke487n5" })(
          "column-count:2;cursor:pointer;",
          w,
          "{font-family:Pretendard;font-size:20px;font-weight:400;line-height:32px;letter-spacing:-0.02em;color:",
          x.Z.black200,
          ";}",
          (0, g.mq)("mobile"),
          "{column-count:1;",
          w,
          "{font-size:18px;font-weight:400;line-height:28px;}}"
        ),
        L = (0, i.Z)("div", { target: "eke487n4" })(
          "height:1px;width:100%;margin-top:100px;background-color:",
          x.Z.border03,
          ";"
        ),
        C = (0, i.Z)("ul", { target: "eke487n3" })(
          "list-style:outside!important;padding-left:20px;ul{list-style:none!important;padding-left:0px;}",
          (0, g.mq)("mobile"),
          "{font-size:14px;line-height:22px;}"
        ),
        E = (0, i.Z)("table", { target: "eke487n2" })(
          "width:100%;margin-bottom:50px;overflow:hidden;border-collapse:collapse;border-radius:16px;border-style:hidden;box-shadow:0 0 0 1px ",
          x.Z.borderColor,
          ";"
        ),
        _ = (0, i.Z)("td", { target: "eke487n1" })(
          "padding:12px;border:1px solid ",
          x.Z.borderColor,
          ";",
          w,
          "{display:flex;align-items:center;font-family:Pretendard;font-size:18px;font-style:normal;font-weight:400;line-height:30px;word-break:break-all;color:",
          x.Z.black200,
          ";}",
          k,
          "{height:12px;}"
        ),
        P = (0, i.Z)("th", { target: "eke487n0" })(
          "padding-top:13px;padding-bottom:17px;min-width:60px;vertical-align:middle;color:",
          x.Z.white,
          ";background-color:",
          x.Z.darkNavy,
          ";border:1px solid ",
          x.Z.borderColor,
          ";",
          w,
          "{color:white;text-align:center;font-size:18px;font-style:normal;font-weight:700;line-height:30px;}"
        ),
        z = {
          renderNode:
            ((r = {}),
            (0, u.Z)(r, f.BLOCKS.HEADING_2, function (e, t) {
              var n = (function (e) {
                var t = e.replaceAll(" ", "");
                return "".concat(t.replace(/[^0-9]/g, ""));
              })(e.content[0].value);
              return (0, b.jsx)(y, { id: n, children: t });
            }),
            (0, u.Z)(r, f.BLOCKS.HEADING_3, function (e, t) {
              return (0, b.jsx)(v, { children: t });
            }),
            (0, u.Z)(r, f.BLOCKS.HEADING_6, function (e, t) {
              return t;
            }),
            (0, u.Z)(r, f.BLOCKS.PARAGRAPH, function (e, t) {
              var n = (function (e, t) {
                return (
                  "document" !== e.nodeType &&
                  !(
                    !(
                      m.includes(e.nodeType) &&
                      t &&
                      "object" === typeof t &&
                      t.length <= 1
                    ) || e.content[0].value
                  )
                );
              })(e, t);
              return n ? (0, b.jsx)(k, {}) : (0, b.jsx)(w, { children: t });
            }),
            (0, u.Z)(r, f.BLOCKS.TABLE, function (e, t) {
              return (0, b.jsx)(E, { children: t });
            }),
            (0, u.Z)(r, f.BLOCKS.TABLE_HEADER_CELL, function (e, t) {
              return (0, b.jsx)(P, { children: t });
            }),
            (0, u.Z)(r, f.BLOCKS.TABLE_CELL, function (e, t) {
              return "table-cell" === e.nodeType &&
                e.content[0].content[0].value.includes(
                  "\ud574\ub2f9\uc0ac\ud56d"
                )
                ? (0, b.jsx)(_, {
                    colSpan: 4,
                    children: (0, b.jsx)(Z, { children: t }),
                  })
                : "table-cell" !== e.nodeType || e.content[0].content[0].value
                ? (0, b.jsx)(_, { children: t })
                : (0, b.jsx)(b.Fragment, {});
            }),
            (0, u.Z)(r, f.BLOCKS.TABLE_ROW, function (e, t) {
              return (0, b.jsx)("tr", {
                children: h.Children.map(t, function (e) {
                  return e && "boolean" !== typeof e
                    ? h.cloneElement(e, {
                        style: { width: "".concat(100 / t.length, "%") },
                      })
                    : (0, b.jsx)(b.Fragment, {});
                }),
              });
            }),
            (0, u.Z)(r, f.BLOCKS.OL_LIST, function (e, t) {
              return (0,
              b.jsxs)(b.Fragment, { children: [(0, b.jsx)(O, { children: t }), (0, b.jsx)(L, {})] });
            }),
            (0, u.Z)(r, f.BLOCKS.UL_LIST, function (e, t) {
              return (0, b.jsx)(C, { children: t });
            }),
            (0, u.Z)(r, f.INLINES.HYPERLINK, function (e, t) {
              return (0, b.jsx)(j, {
                onClick: function () {
                  var t = e.data.uri.slice(1, e.data.uri.length),
                    n = document.getElementById(t);
                  n && n.scrollIntoView({ behavior: "smooth", block: "start" });
                },
                children: t,
              });
            }),
            r),
          preserveWhitespace: !0,
        },
        q = n(4910),
        S = n(2564),
        B = n.n(S),
        A = n(2522),
        T = n(4931);
      function N(e, t) {
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
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                (0, u.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var I = function (e) {
          return (0, A.useQuery)({
            queryFn: (function () {
              var t = (0, q.Z)(
                B().mark(function t() {
                  return B().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            T.a.getEntries(
                              K(
                                K({}, { content_type: "privacy" }),
                                e ? { "sys.id": e } : {}
                              )
                            )
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
            queryKey: ["privacy", e && e],
            keepPreviousData: !0,
          });
        },
        D = (0, i.Z)("select", { target: "e13nctap0" })(
          "margin-bottom:30px;padding:11px 20px;width:354px;",
          (0, g.mq)("mobile"),
          "{width:100%;}height:46px;border:1px solid ",
          x.Z.border03,
          ";border-radius:6px;font-family:Pretendard;font-weight:700;font-size:16px;line-height:24px;-webkit-appearance:none;-moz-appearance:none;background:white url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 120 120' width='24' height='24' xmlns='http://www.w3.org/2000/svg'><g><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='black'/></g></svg>\") no-repeat;background-position:right 16px top 50%;"
        ),
        R = function () {
          var e = I().data,
            t = (0, l.useRouter)();
          return (0, b.jsx)(D, {
            onChange: function (e) {
              return (
                (n = e.target.value), void t.push("/privacy?id=".concat(n))
              );
              var n;
            },
            value: t.query.id || "",
            children:
              null === e || void 0 === e
                ? void 0
                : e.items.map(function (e) {
                    return (0,
                    b.jsx)("option", { value: e.sys.id, children: e.fields.title || "" }, e.sys.id);
                  }),
          });
        },
        F = (0, i.Z)("section", { target: "e1wf3t0d0" })(
          "margin-top:100px;>p{margin-bottom:30px;font-family:Pretendard;font-size:20px;font-weight:400;line-height:32px;letter-spacing:-0.02em;text-align:left;color:",
          x.Z.black100,
          ";}",
          (0, g.mq)("mobile"),
          "{margin-top:70px;p{font-size:18px;line-height:28px;}}"
        ),
        G = function () {
          return (0, b.jsxs)(F, {
            children: [
              (0, b.jsx)("p", {
                children:
                  "\uc774\uc804 \uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68 \ubcf4\uae30",
              }),
              (0, b.jsx)(R, {}),
            ],
          });
        },
        H = (0, i.Z)("main", { target: "esdl3zs1" })(
          "margin:100px auto;max-width:1280px;",
          (0, g.mq)("mobile"),
          "{padding:0 30px;}"
        ),
        Q = (0, i.Z)("h1", { target: "esdl3zs0" })(
          "margin:140px 0 100px 0;font-family:Pretendard;font-size:36px;font-weight:700;line-height:50px;letter-spacing:-0.01em;text-align:left;word-break:keep-all;",
          (0, g.mq)("mobile"),
          "{margin:100px 0 70px 0;}"
        ),
        V = function () {
          var e = (0, l.useRouter)(),
            t = I(e.query.id).data;
          return (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsx)(p.Z, {
                title: "\uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\ubc29\uce68",
              }),
              (0, b.jsx)(a.Z, {}),
              (0, b.jsxs)(H, {
                children: [
                  !e.query.id &&
                    (0, b.jsx)(Q, {
                      children:
                        "\ud55c\uad6d\uc2e0\uc6a9\ub370\uc774\ud130 \uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68",
                    }),
                  (0, b.jsx)(R, {}),
                  (null === t || void 0 === t ? void 0 : t.items.length) &&
                    (0, o.h)(t.items[0].fields.content, z),
                  (0, b.jsx)(G, {}),
                ],
              }),
              (0, b.jsx)(c.Z, {
                pc: (0, b.jsx)(s.Z, {}),
                mobile: (0, b.jsx)(d.Z, {}),
              }),
            ],
          });
        };
    },
    822: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/privacy",
        function () {
          return n(8606);
        },
      ]);
    },
    5660: function () {},
  },
  function (e) {
    e.O(0, [5544, 8413, 7295, 6562, 793, 7687, 9774, 2888, 179], function () {
      return (t = 822), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);

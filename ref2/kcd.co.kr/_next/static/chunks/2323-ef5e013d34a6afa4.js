(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2323],
  {
    3373: function (t, e, r) {
      "use strict";
      var n = r(3326),
        o = r(9939),
        c = r(4198),
        i = r(6551),
        s = (r(5170), r(1992)),
        a = r(3010),
        l = ["children", "icon"];
      function u(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(r), !0).forEach(function (e) {
                (0, n.Z)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var p = { name: "1y5k4vp", styles: "border-color:#fff;color:#fff" },
        d = (0, c.Z)("button", { target: "e1eifqiz1" })(
          "display:flex;align-items:center;justify-content:center;width:100%;padding:15px 32px;font-size:16px;font-weight:700;border:1px solid ",
          s.Z.primary,
          ";border-radius:6px;",
          function (t) {
            return t.inverse && p;
          },
          " ",
          function (t) {
            var e = t.width;
            return e && (0, i.css)("width:", e, "px;", "");
          },
          " transition:.2s;&:hover{background-color:",
          s.Z.kcdBlue,
          ";border-color:",
          s.Z.kcdBlue,
          ";color:",
          s.Z.white,
          ";}"
        ),
        y = (0, c.Z)("span", { target: "e1eifqiz0" })("");
      e.Z = function (t) {
        var e = t.children,
          r = t.icon,
          n = (0, o.Z)(t, l);
        return (0, a.jsxs)(
          d,
          f(
            f({}, n),
            {},
            {
              children: [
                r,
                (0, a.jsx)(y, {
                  style: { marginLeft: r ? 4 : 0 },
                  children: e,
                }),
              ],
            }
          )
        );
      };
    },
    4931: function (t, e, r) {
      "use strict";
      r.d(e, {
        a: function () {
          return a;
        },
      });
      var n = r(4910),
        o = r(2564),
        c = r.n(o),
        i = r(8649),
        s = r(5170),
        a = (0, i.e)({
          space: "4io3pho3xfqe",
          accessToken: "R4CjfAVANnb9vdkStCaGCFQFTqCx4zLlJnq14mc3TGA",
        });
      e.Z = function (t) {
        var e = t.content_type,
          r = t.limit,
          o = void 0 === r ? 100 : r,
          i = t.skip,
          l = void 0 === i ? 0 : i,
          u = t.order,
          f = (0, s.useState)(null),
          p = f[0],
          d = f[1];
        return (
          (0, s.useEffect)(
            function () {
              function t() {
                return (
                  (t = (0, n.Z)(
                    c().mark(function t() {
                      var r;
                      return c().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2),
                                a.getEntries({
                                  content_type: e,
                                  limit: o,
                                  skip: l,
                                  order: u,
                                })
                              );
                            case 2:
                              (r = t.sent), d(r);
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )),
                  t.apply(this, arguments)
                );
              }
              !(function () {
                t.apply(this, arguments);
              })();
            },
            [e, o, l, u]
          ),
          p
        );
      };
    },
    3967: function (t, e, r) {
      "use strict";
      r.d(e, {
        w_: function () {
          return l;
        },
      });
      var n = r(5170),
        o = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        c = n.createContext && n.createContext(o),
        i = function () {
          return (
            (i =
              Object.assign ||
              function (t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                  for (var o in (e = arguments[r]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }),
            i.apply(this, arguments)
          );
        },
        s = function (t, e) {
          var r = {};
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) &&
              e.indexOf(n) < 0 &&
              (r[n] = t[n]);
          if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(t); o < n.length; o++)
              e.indexOf(n[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, n[o]) &&
                (r[n[o]] = t[n[o]]);
          }
          return r;
        };
      function a(t) {
        return (
          t &&
          t.map(function (t, e) {
            return n.createElement(t.tag, i({ key: e }, t.attr), a(t.child));
          })
        );
      }
      function l(t) {
        return function (e) {
          return n.createElement(u, i({ attr: i({}, t.attr) }, e), a(t.child));
        };
      }
      function u(t) {
        var e = function (e) {
          var r,
            o = t.attr,
            c = t.size,
            a = t.title,
            l = s(t, ["attr", "size", "title"]),
            u = c || e.size || "1em";
          return (
            e.className && (r = e.className),
            t.className && (r = (r ? r + " " : "") + t.className),
            n.createElement(
              "svg",
              i(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                e.attr,
                o,
                l,
                {
                  className: r,
                  style: i(i({ color: t.color || e.color }, e.style), t.style),
                  height: u,
                  width: u,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              a && n.createElement("title", null, a),
              t.children
            )
          );
        };
        return void 0 !== c
          ? n.createElement(c.Consumer, null, function (t) {
              return e(t);
            })
          : e(o);
      }
    },
    5660: function () {},
  },
]);

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5544],
  {
    2257: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, n, r) {
          return !1;
        });
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8929: function (e, t, n) {
      "use strict";
      var r = n(6042);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = n(7022).Z,
        a = n(5997).Z,
        u = o(n(5170)),
        l = n(1841),
        f = n(9681),
        i = n(475),
        c = n(8243),
        d = n(3733),
        s = n(2257),
        p = n(7830),
        v = {};
      function y(e, t, n, r) {
        if (e && l.isLocalURL(t)) {
          Promise.resolve(e.prefetch(t, n, r)).catch(function (e) {
            0;
          });
          var o =
            r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
          v[t + "%" + n + (o ? "%" + o : "")] = !0;
        }
      }
      var h = u.default.forwardRef(function (e, t) {
        var n,
          o = e.href,
          h = e.as,
          m = e.children,
          b = e.prefetch,
          g = e.passHref,
          _ = e.replace,
          C = e.shallow,
          M = e.scroll,
          x = e.locale,
          j = e.onClick,
          E = e.onMouseEnter,
          k = e.onTouchStart,
          O = e.legacyBehavior,
          S = void 0 === O ? !0 !== Boolean(!1) : O,
          w = a(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (n = m),
          !S ||
            ("string" !== typeof n && "number" !== typeof n) ||
            (n = u.default.createElement("a", null, n));
        var L = !1 !== b,
          P = u.default.useContext(i.RouterContext),
          R = u.default.useContext(c.AppRouterContext);
        R && (P = R);
        var A,
          I = u.default.useMemo(
            function () {
              var e = l.resolveHref(P, o, !0),
                t = r(e, 2),
                n = t[0],
                a = t[1];
              return { href: n, as: h ? l.resolveHref(P, h) : a || n };
            },
            [P, o, h]
          ),
          U = I.href,
          T = I.as,
          Z = u.default.useRef(U),
          H = u.default.useRef(T);
        S && (A = u.default.Children.only(n));
        var B = S ? A && "object" === typeof A && A.ref : t,
          N = d.useIntersection({ rootMargin: "200px" }),
          D = r(N, 3),
          K = D[0],
          q = D[1],
          z = D[2],
          F = u.default.useCallback(
            function (e) {
              (H.current === T && Z.current === U) ||
                (z(), (H.current = T), (Z.current = U)),
                K(e),
                B &&
                  ("function" === typeof B
                    ? B(e)
                    : "object" === typeof B && (B.current = e));
            },
            [T, B, U, z, K]
          );
        u.default.useEffect(
          function () {
            var e = q && L && l.isLocalURL(U),
              t = "undefined" !== typeof x ? x : P && P.locale,
              n = v[U + "%" + T + (t ? "%" + t : "")];
            e && !n && y(P, U, T, { locale: t });
          },
          [T, U, q, x, L, P]
        );
        var G = {
          ref: F,
          onClick: function (e) {
            S || "function" !== typeof j || j(e),
              S &&
                A.props &&
                "function" === typeof A.props.onClick &&
                A.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, o, a, f, i, c, d) {
                  if (
                    "A" !== e.currentTarget.nodeName.toUpperCase() ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      l.isLocalURL(n))
                  ) {
                    e.preventDefault();
                    var s = function () {
                      "beforePopState" in t
                        ? t[o ? "replace" : "push"](n, r, {
                            shallow: a,
                            locale: i,
                            scroll: f,
                          })
                        : t[o ? "replace" : "push"](n, {
                            forceOptimisticNavigation: !d,
                          });
                    };
                    c ? u.default.startTransition(s) : s();
                  }
                })(e, P, U, T, _, C, M, x, Boolean(R), L);
          },
          onMouseEnter: function (e) {
            S || "function" !== typeof E || E(e),
              S &&
                A.props &&
                "function" === typeof A.props.onMouseEnter &&
                A.props.onMouseEnter(e),
              (!L && R) || (l.isLocalURL(U) && y(P, U, T, { priority: !0 }));
          },
          onTouchStart: function (e) {
            S || "function" !== typeof k || k(e),
              S &&
                A.props &&
                "function" === typeof A.props.onTouchStart &&
                A.props.onTouchStart(e),
              (!L && R) || (l.isLocalURL(U) && y(P, U, T, { priority: !0 }));
          },
        };
        if (!S || g || ("a" === A.type && !("href" in A.props))) {
          var $ = "undefined" !== typeof x ? x : P && P.locale,
            Q =
              P &&
              P.isLocaleDomain &&
              s.getDomainLocale(T, $, P.locales, P.domainLocales);
          G.href = Q || p.addBasePath(f.addLocale(T, $, P && P.defaultLocale));
        }
        return S
          ? u.default.cloneElement(A, G)
          : u.default.createElement("a", Object.assign({}, w, G), n);
      });
      (t.default = h),
        ("function" === typeof t.default ||
          ("object" === typeof t.default && null !== t.default)) &&
          "undefined" === typeof t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    3733: function (e, t, n) {
      "use strict";
      var r = n(6042);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            n = e.rootMargin,
            i = e.disabled || !u,
            c = o.useState(!1),
            d = r(c, 2),
            s = d[0],
            p = d[1],
            v = o.useState(null),
            y = r(v, 2),
            h = y[0],
            m = y[1];
          o.useEffect(
            function () {
              if (u) {
                if (i || s) return;
                if (h && h.tagName) {
                  var e = (function (e, t, n) {
                    var r = (function (e) {
                        var t,
                          n = {
                            root: e.root || null,
                            margin: e.rootMargin || "",
                          },
                          r = f.find(function (e) {
                            return e.root === n.root && e.margin === n.margin;
                          });
                        if (r && (t = l.get(r))) return t;
                        var o = new Map(),
                          a = new IntersectionObserver(function (e) {
                            e.forEach(function (e) {
                              var t = o.get(e.target),
                                n = e.isIntersecting || e.intersectionRatio > 0;
                              t && n && t(n);
                            });
                          }, e);
                        return (
                          (t = { id: n, observer: a, elements: o }),
                          f.push(n),
                          l.set(n, t),
                          t
                        );
                      })(n),
                      o = r.id,
                      a = r.observer,
                      u = r.elements;
                    return (
                      u.set(e, t),
                      a.observe(e),
                      function () {
                        if ((u.delete(e), a.unobserve(e), 0 === u.size)) {
                          a.disconnect(), l.delete(o);
                          var t = f.findIndex(function (e) {
                            return e.root === o.root && e.margin === o.margin;
                          });
                          t > -1 && f.splice(t, 1);
                        }
                      }
                    );
                  })(
                    h,
                    function (e) {
                      return e && p(e);
                    },
                    { root: null == t ? void 0 : t.current, rootMargin: n }
                  );
                  return e;
                }
              } else if (!s) {
                var r = a.requestIdleCallback(function () {
                  return p(!0);
                });
                return function () {
                  return a.cancelIdleCallback(r);
                };
              }
            },
            [h, i, n, t, s]
          );
          var b = o.useCallback(function () {
            p(!1);
          }, []);
          return [m, s, b];
        });
      var o = n(5170),
        a = n(7972),
        u = "function" === typeof IntersectionObserver,
        l = new Map(),
        f = [];
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5436: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AmpStateContext = void 0);
      var r = (0, n(7022).Z)(n(5170)).default.createContext({});
      t.AmpStateContext = r;
    },
    1492: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isInAmpMode = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.ampFirst,
            n = void 0 !== t && t,
            r = e.hybrid,
            o = void 0 !== r && r,
            a = e.hasQuery,
            u = void 0 !== a && a;
          return n || (o && u);
        });
    },
    8243: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TemplateContext =
          t.GlobalLayoutRouterContext =
          t.LayoutRouterContext =
          t.AppRouterContext =
            void 0);
      var r = (0, n(7022).Z)(n(5170)),
        o = r.default.createContext(null);
      t.AppRouterContext = o;
      var a = r.default.createContext(null);
      t.LayoutRouterContext = a;
      var u = r.default.createContext(null);
      t.GlobalLayoutRouterContext = u;
      var l = r.default.createContext(null);
      t.TemplateContext = l;
    },
    1881: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultHead = c),
        (t.default = void 0);
      var r = n(5506).Z,
        o = n(7022).Z,
        a = (0, n(8889).Z)(n(5170)),
        u = o(n(3863)),
        l = n(5436),
        f = n(9348),
        i = n(1492);
      n(4926);
      function c() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [a.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              a.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function d(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === a.default.Fragment
          ? e.concat(
              a.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var s = ["name", "httpEquiv", "charSet", "itemProp"];
      function p(e, t) {
        var n = t.inAmpMode;
        return e
          .reduce(d, [])
          .reverse()
          .concat(c(n).reverse())
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (o) {
                var a = !0,
                  u = !1;
                if (
                  o.key &&
                  "number" !== typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  u = !0;
                  var l = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(l) ? (a = !1) : e.add(l);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (a = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (var f = 0, i = s.length; f < i; f++) {
                      var c = s[f];
                      if (o.props.hasOwnProperty(c))
                        if ("charSet" === c) n.has(c) ? (a = !1) : n.add(c);
                        else {
                          var d = o.props[c],
                            p = r[c] || new Set();
                          ("name" === c && u) || !p.has(d)
                            ? (p.add(d), (r[c] = p))
                            : (a = !1);
                        }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var o = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some(function (t) {
                return e.props.href.startsWith(t);
              })
            ) {
              var u = r({}, e.props || {});
              return (
                (u["data-href"] = u.href),
                (u.href = void 0),
                (u["data-optimized-fonts"] = !0),
                a.default.cloneElement(e, u)
              );
            }
            return a.default.cloneElement(e, { key: o });
          });
      }
      var v = function (e) {
        var t = e.children,
          n = a.useContext(l.AmpStateContext),
          r = a.useContext(f.HeadManagerContext);
        return a.default.createElement(
          u.default,
          {
            reduceComponentsToState: p,
            headManager: r,
            inAmpMode: i.isInAmpMode(n),
          },
          t
        );
      };
      (t.default = v),
        ("function" === typeof t.default ||
          ("object" === typeof t.default && null !== t.default)) &&
          "undefined" === typeof t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    3863: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var t = e.headManager,
            n = e.reduceComponentsToState;
          function l() {
            if (t && t.mountedInstances) {
              var o = r.Children.toArray(
                Array.from(t.mountedInstances).filter(Boolean)
              );
              t.updateHead(n(o, e));
            }
          }
          if (o) {
            var f;
            null == t || null == (f = t.mountedInstances) || f.add(e.children),
              l();
          }
          return (
            a(function () {
              var n;
              return (
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.add(e.children),
                function () {
                  var n;
                  null == t ||
                    null == (n = t.mountedInstances) ||
                    n.delete(e.children);
                }
              );
            }),
            a(function () {
              return (
                t && (t._pendingUpdate = l),
                function () {
                  t && (t._pendingUpdate = l);
                }
              );
            }),
            u(function () {
              return (
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null)),
                function () {
                  t &&
                    t._pendingUpdate &&
                    (t._pendingUpdate(), (t._pendingUpdate = null));
                }
              );
            }),
            null
          );
        });
      var r = (0, n(8889).Z)(n(5170));
      var o = !1,
        a = o ? function () {} : r.useLayoutEffect,
        u = o ? function () {} : r.useEffect;
    },
    6773: function (e, t, n) {
      e.exports = n(8929);
    },
    4341: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(3259);
      var o = n(9757);
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, r.Z)(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (0, o.Z)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
  },
]);

"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6562],
  {
    3123: function (e, t, r) {
      var n = r(4198),
        i = (r(5170), r(1513)),
        a = r(3010),
        c = (0, n.Z)("div", { target: "e3splua1" })(
          "display:block;",
          (0, i.mq)("mobile"),
          "{display:none;}"
        ),
        l = (0, n.Z)("div", { target: "e3splua0" })(
          "display:none;",
          (0, i.mq)("mobile"),
          "{display:block;width:100%;}"
        );
      t.Z = function (e) {
        var t = e.pc,
          r = e.mobile;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(c, { children: t }),
            (0, a.jsx)(l, { children: r }),
          ],
        });
      };
    },
    6377: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return h;
        },
      });
      var n = r(3326),
        i = r(7814),
        a = r.n(i),
        c = r(9513),
        l = r(3010);
      function o(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var f = {
        title: "\ud55c\uad6d\uc2e0\uc6a9\ub370\uc774\ud130",
        siteName: "\ud55c\uad6d\uc2e0\uc6a9\ub370\uc774\ud130",
        description:
          "\uc0ac\uc5c5\uc758 \ubaa8\ub4e0 \uc21c\uac04 - \ub354 \uc27d\uac8c, \ub354 \ube60\ub974\uac8c, \ub354 \ub611\ub611\ud558\uac8c",
        url: "https://kcd.co.kr",
        type: "website",
        robots: "follow, index",
        image: "/og.png",
      };
      function h(e) {
        var t = (0, c.useRouter)(),
          r = s(s({}, f), e);
        return (
          (r.title = e.title
            ? "".concat(e.title, " | ").concat(r.siteName)
            : r.siteName),
          (0, l.jsxs)(a(), {
            children: [
              (0, l.jsx)("title", { children: r.title }),
              (0, l.jsx)("meta", { name: "robots", content: r.robots }),
              (0, l.jsx)("meta", {
                content: r.description,
                name: "description",
              }),
              (0, l.jsx)("meta", {
                property: "og:url",
                content: "".concat(r.url).concat(t.asPath),
              }),
              (0, l.jsx)("link", {
                rel: "canonical",
                href: "".concat(r.url).concat(t.asPath),
              }),
              (0, l.jsx)("meta", { property: "og:type", content: r.type }),
              (0, l.jsx)("meta", {
                property: "og:site_name",
                content: r.siteName,
              }),
              (0, l.jsx)("meta", {
                property: "og:description",
                content: r.description,
              }),
              (0, l.jsx)("meta", { property: "og:title", content: r.title }),
              (0, l.jsx)("meta", {
                name: "image",
                property: "og:image",
                content: r.image,
              }),
              (0, l.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image",
              }),
              (0, l.jsx)("meta", {
                name: "twitter:site",
                content: "@th_clarence",
              }),
              (0, l.jsx)("meta", { name: "twitter:title", content: r.title }),
              (0, l.jsx)("meta", {
                name: "twitter:description",
                content: r.description,
              }),
              (0, l.jsx)("meta", { name: "twitter:image", content: r.image }),
            ],
          })
        );
      }
    },
    9059: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return R;
        },
      });
      var n,
        i,
        a = r(4198),
        c = r(5170),
        l = r(874),
        o = r.n(l),
        s = function (e) {
          o()(e),
            alert(
              "URL\uc774 \ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4."
            );
        };
      function f() {
        return (
          (f = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          f.apply(this, arguments)
        );
      }
      var h,
        p,
        d = function (e) {
          return c.createElement(
            "svg",
            f(
              {
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            n ||
              (n = c.createElement("path", {
                d: "M9.392 21.564a4.928 4.928 0 0 1-6.955 0 4.927 4.927 0 0 1 0-6.956l4.347-4.347c1.826-1.826 4.745-1.927 6.677-.265a.924.924 0 1 1-1.202 1.406 3.046 3.046 0 0 0-4.17.163L3.74 15.912a3.047 3.047 0 0 0 0 4.347 3.048 3.048 0 0 0 4.347 0l4.13-4.13a.925.925 0 0 1 1.312-.008.92.92 0 0 1-.008 1.312l-4.13 4.13Zm7.825-7.825c-1.827 1.826-4.746 1.927-6.677.265a.926.926 0 1 1 1.202-1.406 3.046 3.046 0 0 0 4.17-.163l4.348-4.348a3.047 3.047 0 0 0 0-4.346 3.048 3.048 0 0 0-4.348 0l-4.13 4.129a.92.92 0 0 1-1.313.01.922.922 0 0 1 .01-1.314l4.13-4.13a4.928 4.928 0 0 1 6.954 0 4.927 4.927 0 0 1 0 6.956l-4.346 4.347Z",
                fill: "#fff",
              })),
            i ||
              (i = c.createElement("path", {
                d: "M9.392 21.564a4.928 4.928 0 0 1-6.955 0 4.927 4.927 0 0 1 0-6.956l4.347-4.347c1.826-1.826 4.745-1.927 6.677-.265a.924.924 0 1 1-1.202 1.406 3.046 3.046 0 0 0-4.17.163L3.74 15.912a3.047 3.047 0 0 0 0 4.347 3.048 3.048 0 0 0 4.347 0l4.13-4.13a.925.925 0 0 1 1.312-.008.92.92 0 0 1-.008 1.312l-4.13 4.13Zm7.825-7.825c-1.827 1.826-4.746 1.927-6.677.265a.926.926 0 1 1 1.202-1.406 3.046 3.046 0 0 0 4.17-.163l4.348-4.348a3.047 3.047 0 0 0 0-4.346 3.048 3.048 0 0 0-4.348 0l-4.13 4.129a.92.92 0 0 1-1.313.01.922.922 0 0 1 .01-1.314l4.13-4.13a4.928 4.928 0 0 1 6.954 0 4.927 4.927 0 0 1 0 6.956l-4.346 4.347Z",
                fill: "#1E2137",
              }))
          );
        };
      function u() {
        return (
          (u = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          u.apply(this, arguments)
        );
      }
      var x,
        m,
        j = function (e) {
          return c.createElement(
            "svg",
            u(
              {
                width: "1em",
                height: "1em",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            h ||
              (h = c.createElement("path", {
                d: "M7.813 19h3.492V9.924h2.436L14 6.887h-2.695V5.156c0-.717.139-1.002.807-1.002H14V1h-2.418C8.985 1 7.813 2.19 7.813 4.462v2.421H6v3.076h1.813V19Z",
                fill: "#fff",
              })),
            p ||
              (p = c.createElement("path", {
                d: "M7.813 19h3.492V9.924h2.436L14 6.887h-2.695V5.156c0-.717.139-1.002.807-1.002H14V1h-2.418C8.985 1 7.813 2.19 7.813 4.462v2.421H6v3.076h1.813V19Z",
                fill: "#1E2137",
              }))
          );
        };
      function g() {
        return (
          (g = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          g.apply(this, arguments)
        );
      }
      var v,
        Z,
        C,
        b,
        y,
        w,
        H = function (e) {
          return c.createElement(
            "svg",
            g(
              {
                width: "1em",
                height: "1em",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            x ||
              (x = c.createElement(
                "g",
                { clipPath: "url(#ic__menu__social_insta_svg__a)" },
                c.createElement("path", {
                  d: "M1 13.297V6.703c.012-.047.032-.094.036-.143.015-.217.027-.434.036-.652.025-.61.162-1.196.373-1.769a4.504 4.504 0 0 1 1.498-2.018c.795-.62 1.729-.907 2.717-1.006.622-.061 1.25-.057 1.877-.077.22-.007.44.001.66-.003.054 0 .107-.023.16-.035h3.286c.036.012.071.035.107.035.599.014 1.197.016 1.795.04.404.018.807.06 1.21.106a4.714 4.714 0 0 1 1.605.504c.54.276 1.01.65 1.404 1.122.353.423.617.888.809 1.4.292.782.386 1.596.392 2.425 0 .071.023.142.036.214v6.344c-.012.024-.034.047-.035.071-.015.265-.017.53-.04.795-.027.32-.042.645-.113.956-.233 1.019-.667 1.927-1.472 2.639a4.769 4.769 0 0 1-1.616.954c-.79.273-1.608.36-2.439.36-.071 0-.142.022-.214.035H6.93c-.035-.012-.07-.033-.107-.036-.504-.037-1.01-.06-1.513-.112a4.757 4.757 0 0 1-1.518-.441 4.608 4.608 0 0 1-2.282-2.37c-.344-.825-.476-1.693-.473-2.584 0-.053-.024-.107-.036-.16Zm12.02 4.064.002-.016 1.127-.09a3.719 3.719 0 0 0 1.547-.458 2.903 2.903 0 0 0 1.193-1.257c.24-.478.347-1 .392-1.529.045-.522.074-1.048.073-1.572-.002-1.762-.021-3.523-.031-5.285-.003-.594-.024-1.185-.14-1.771-.13-.645-.394-1.219-.86-1.688-.408-.412-.912-.658-1.47-.808-.683-.185-1.386-.198-2.081-.203-1.956-.016-3.911.018-5.867.024-.543.001-1.082.03-1.613.146-.8.175-1.47.552-1.95 1.236-.398.568-.57 1.213-.622 1.884-.055.694-.064 1.392-.076 2.089a60.69 60.69 0 0 0-.001 1.942c.018 1.278.042 2.557.071 3.835.013.552.127 1.083.35 1.594.286.652.76 1.125 1.378 1.448.484.253 1.022.361 1.564.403.571.044 1.145.07 1.718.073 1.766.01 3.531.003 5.296.003Z",
                  fill: "#fff",
                }),
                c.createElement("path", {
                  d: "M1 13.297V6.703c.012-.047.032-.094.036-.143.015-.217.027-.434.036-.652.025-.61.162-1.196.373-1.769a4.504 4.504 0 0 1 1.498-2.018c.795-.62 1.729-.907 2.717-1.006.622-.061 1.25-.057 1.877-.077.22-.007.44.001.66-.003.054 0 .107-.023.16-.035h3.286c.036.012.071.035.107.035.599.014 1.197.016 1.795.04.404.018.807.06 1.21.106a4.714 4.714 0 0 1 1.605.504c.54.276 1.01.65 1.404 1.122.353.423.617.888.809 1.4.292.782.386 1.596.392 2.425 0 .071.023.142.036.214v6.344c-.012.024-.034.047-.035.071-.015.265-.017.53-.04.795-.027.32-.042.645-.113.956-.233 1.019-.667 1.927-1.472 2.639a4.769 4.769 0 0 1-1.616.954c-.79.273-1.608.36-2.439.36-.071 0-.142.022-.214.035H6.93c-.035-.012-.07-.033-.107-.036-.504-.037-1.01-.06-1.513-.112a4.757 4.757 0 0 1-1.518-.441 4.608 4.608 0 0 1-2.282-2.37c-.344-.825-.476-1.693-.473-2.584 0-.053-.024-.107-.036-.16Zm12.02 4.064.002-.016 1.127-.09a3.719 3.719 0 0 0 1.547-.458 2.903 2.903 0 0 0 1.193-1.257c.24-.478.347-1 .392-1.529.045-.522.074-1.048.073-1.572-.002-1.762-.021-3.523-.031-5.285-.003-.594-.024-1.185-.14-1.771-.13-.645-.394-1.219-.86-1.688-.408-.412-.912-.658-1.47-.808-.683-.185-1.386-.198-2.081-.203-1.956-.016-3.911.018-5.867.024-.543.001-1.082.03-1.613.146-.8.175-1.47.552-1.95 1.236-.398.568-.57 1.213-.622 1.884-.055.694-.064 1.392-.076 2.089a60.69 60.69 0 0 0-.001 1.942c.018 1.278.042 2.557.071 3.835.013.552.127 1.083.35 1.594.286.652.76 1.125 1.378 1.448.484.253 1.022.361 1.564.403.571.044 1.145.07 1.718.073 1.766.01 3.531.003 5.296.003Z",
                  fill: "#1E2137",
                }),
                c.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M5.358 10.02a4.618 4.618 0 0 1 4.85-4.633c2.36.092 4.49 2.023 4.427 4.746-.057 2.462-2.02 4.537-4.712 4.508-2.502-.027-4.55-2.02-4.565-4.62Zm7.608-.006c.024-1.654-1.345-2.995-2.973-2.98-1.693.016-2.975 1.314-2.98 2.982-.003 1.609 1.251 2.871 2.814 2.963 1.793.105 3.192-1.4 3.139-2.965Z",
                  fill: "#fff",
                }),
                c.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M5.358 10.02a4.618 4.618 0 0 1 4.85-4.633c2.36.092 4.49 2.023 4.427 4.746-.057 2.462-2.02 4.537-4.712 4.508-2.502-.027-4.55-2.02-4.565-4.62Zm7.608-.006c.024-1.654-1.345-2.995-2.973-2.98-1.693.016-2.975 1.314-2.98 2.982-.003 1.609 1.251 2.871 2.814 2.963 1.793.105 3.192-1.4 3.139-2.965Z",
                  fill: "#1E2137",
                }),
                c.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M13.716 5.221c-.07-.553.51-1.127 1.13-1.096.524.027 1.07.497 1.053 1.13-.014.536-.497 1.076-1.123 1.06-.535-.012-1.112-.485-1.06-1.094Z",
                  fill: "#fff",
                }),
                c.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M13.716 5.221c-.07-.553.51-1.127 1.13-1.096.524.027 1.07.497 1.053 1.13-.014.536-.497 1.076-1.123 1.06-.535-.012-1.112-.485-1.06-1.094Z",
                  fill: "#1E2137",
                })
              )),
            m ||
              (m = c.createElement(
                "defs",
                null,
                c.createElement(
                  "clipPath",
                  { id: "ic__menu__social_insta_svg__a" },
                  c.createElement("path", {
                    fill: "#fff",
                    transform: "translate(1 1)",
                    d: "M0 0h18v18H0z",
                  })
                )
              ))
          );
        };
      function k() {
        return (
          (k = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          k.apply(this, arguments)
        );
      }
      var V,
        M,
        O = function (e) {
          return c.createElement(
            "svg",
            k(
              {
                width: "1em",
                height: "1em",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            v ||
              (v = c.createElement("path", {
                d: "M5.622 7.332H2.318V18h3.304V7.332Z",
                fill: "#fff",
              })),
            Z ||
              (Z = c.createElement("path", {
                d: "M5.622 7.332H2.318V18h3.304V7.332Z",
                fill: "#1E2137",
              })),
            C ||
              (C = c.createElement("path", {
                d: "M3.954 5.937A1.963 1.963 0 0 0 5.907 3.97C5.907 2.883 5.031 2 3.954 2A1.963 1.963 0 0 0 2 3.967c0 1.088.876 1.97 1.954 1.97Z",
                fill: "#fff",
              })),
            b ||
              (b = c.createElement("path", {
                d: "M3.954 5.937A1.963 1.963 0 0 0 5.907 3.97C5.907 2.883 5.031 2 3.954 2A1.963 1.963 0 0 0 2 3.967c0 1.088.876 1.97 1.954 1.97Z",
                fill: "#1E2137",
              })),
            y ||
              (y = c.createElement("path", {
                d: "M10.9 12.4c0-1.501.692-2.395 2.013-2.395 1.215 0 1.798.858 1.798 2.394V18h3.286v-6.755c0-2.857-1.618-4.238-3.883-4.238-2.264 0-3.215 1.762-3.215 1.762V7.332H7.73V18h3.17v-5.6Z",
                fill: "#fff",
              })),
            w ||
              (w = c.createElement("path", {
                d: "M10.9 12.4c0-1.501.692-2.395 2.013-2.395 1.215 0 1.798.858 1.798 2.394V18h3.286v-6.755c0-2.857-1.618-4.238-3.883-4.238-2.264 0-3.215 1.762-3.215 1.762V7.332H7.73V18h3.17v-5.6Z",
                fill: "#1E2137",
              }))
          );
        };
      function E() {
        return (
          (E = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          E.apply(this, arguments)
        );
      }
      var L = function (e) {
          return c.createElement(
            "svg",
            E(
              {
                width: "1em",
                height: "1em",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e
            ),
            V ||
              (V = c.createElement("path", {
                d: "M19.604 5.186c-.218-.86-.863-1.538-1.68-1.767-1.482-.417-7.424-.417-7.424-.417s-5.942 0-7.423.417c-.818.23-1.463.908-1.68 1.767C1 6.746 1 10 1 10s0 3.254.396 4.813c.218.86.863 1.54 1.68 1.768 1.482.417 7.424.417 7.424.417s5.942 0 7.423-.417c.818-.231 1.463-.908 1.68-1.768C20 13.253 20 10 20 10s0-3.254-.396-4.814ZM8.07 13.3V6.7l5.836 3.3-5.836 3.3Z",
                fill: "#fff",
              })),
            M ||
              (M = c.createElement("path", {
                d: "M19.604 5.186c-.218-.86-.863-1.538-1.68-1.767-1.482-.417-7.424-.417-7.424-.417s-5.942 0-7.423.417c-.818.23-1.463.908-1.68 1.767C1 6.746 1 10 1 10s0 3.254.396 4.813c.218.86.863 1.54 1.68 1.768 1.482.417 7.424.417 7.424.417s5.942 0 7.423-.417c.818-.231 1.463-.908 1.68-1.768C20 13.253 20 10 20 10s0-3.254-.396-4.814ZM8.07 13.3V6.7l5.836 3.3-5.836 3.3Z",
                fill: "#1E2137",
              }))
          );
        },
        _ = r(3010);
      var P = (0, a.Z)("div", { target: "e28vva21" })({
          name: "1rm84nc",
          styles: "display:flex;gap:4px;margin-top:-7px;margin-left:-7px",
        }),
        I = (0, a.Z)("a", { target: "e28vva20" })({
          name: "ssaet5",
          styles: "cursor:pointer;padding:7px;font-size:20px",
        });
      var R = function (e) {
        var t = e.links;
        return (0, _.jsxs)(P, {
          children: [
            t.facebook &&
              (0, _.jsx)(I, {
                href: t.facebook,
                target: "_blank",
                children: (0, _.jsx)(j, {}),
              }),
            t.linkedin &&
              (0, _.jsx)(I, {
                href: t.linkedin,
                target: "_blank",
                children: (0, _.jsx)(O, {}),
              }),
            t.instagram &&
              (0, _.jsx)(I, {
                href: t.instagram,
                target: "_blank",
                children: (0, _.jsx)(H, {}),
              }),
            t.youtube &&
              (0, _.jsx)(I, {
                href: t.youtube,
                target: "_blank",
                children: (0, _.jsx)(L, {}),
              }),
            t.clipboard &&
              (0, _.jsx)(I, {
                onClick: function () {
                  return s(t.clipboard);
                },
                children: (0, _.jsx)(d, {}),
              }),
          ],
        });
      };
    },
    9759: function (e, t, r) {
      var n = r(4198),
        i = r(6551),
        a = (0, n.Z)("div", { target: "elmdpll0" })(
          "display:flex;gap:",
          function (e) {
            var t = e.size;
            return "".concat(void 0 === t ? 7 : t, "px");
          },
          ";flex-direction:",
          function (e) {
            var t = e.vertical;
            return void 0 !== t && t ? "column" : "row";
          },
          ";",
          function (e) {
            var t = e.center,
              r = e.vertical;
            return (
              t &&
              (0, i.css)(
                r ? "align-items: center" : "justify-content: center",
                ";",
                ""
              )
            );
          },
          ";"
        );
      t.Z = a;
    },
    170: function (e, t, r) {
      r.d(t, {
        YB: function () {
          return l;
        },
        _p: function () {
          return o;
        },
        kM: function () {
          return f;
        },
        xe: function () {
          return s;
        },
      });
      var n = r(4198),
        i = r(1992),
        a = r(1513);
      var c = (0, n.Z)("p", { target: "e1vdh6fv4" })(
          "font-weight:400;color:",
          function (e) {
            var t = e.color;
            return t || i.Z.primary;
          },
          ";white-space:pre-line;word-break:keep-all;"
        ),
        l = (0, n.Z)(c, { target: "e1vdh6fv3" })(
          "font-size:20px;line-height:32px;",
          (0, a.mq)("mobile"),
          "{}"
        ),
        o = (0, n.Z)(c, { target: "e1vdh6fv2" })(
          "font-size:18px;line-height:30px;",
          (0, a.mq)("mobile"),
          "{font-size:16px;line-height:26px;}"
        ),
        s = (0, n.Z)(c, { target: "e1vdh6fv1" })({
          name: "1sbw15v",
          styles: "font-size:16px;line-height:26px;opacity:0.7",
        }),
        f = (0, n.Z)(c, { target: "e1vdh6fv0" })(
          "font-size:14px;line-height:24px;opacity:0.8;",
          (0, a.mq)("mobile"),
          "{font-size:14px;line-height:22px;}"
        );
    },
    6459: function (e, t, r) {
      r.d(t, {
        X: function () {
          return n;
        },
      });
      var n = [
        {
          title: "\ud55c\uad6d\ud3c9\uac00\uc815\ubcf4",
          link: "https://www.kcs.co.kr/",
        },
        {
          title: "\ud55c\uad6d\uacb0\uc81c\ub124\ud2b8\uc6cd\uc2a4",
          link: "https://www.kpn.co.kr/main.do",
        },
        { title: "\uc544\uc784\uc720", link: "https://imupos.com/kr/" },
        {
          title: "\ud55c\uad6d\uc0ac\uc5c5\uc790\uacbd\ud5d8",
          link: "https://kmex.co.kr/",
        },
      ];
    },
    1640: function (e, t, r) {
      r.d(t, {
        W: function () {
          return n;
        },
      });
      var n = {
        COMPANY: {
          MISSION: "company-mission",
          HISTORY: "company-history",
          COMMUNITY: "company-community",
          NOTICE: "company-notice",
        },
        SERVICE: { CASHNOTE: "service-cashnote", DATA_LAB: "service-data-lab" },
        TEAM: {
          CORE_VALUE: "team-core-value",
          PRINCIPAL: "team-principal",
          BENEFIT: "team-benefit",
        },
        RECRUIT: { POSITION: "recurit-position" },
        NEWS: { OUR: "news-our" },
        PRINCIPAL: "principal",
      };
    },
    6433: function (e, t, r) {
      r.d(t, {
        Ok: function () {
          return i;
        },
        ge: function () {
          return c;
        },
        lT: function () {
          return a;
        },
      });
      var n = r(4400),
        i = [
          { title: "\ud68c\uc0ac\uc18c\uac1c", href: "/about" },
          { title: "\uc11c\ube44\uc2a4", href: "/service" },
          { title: "\ud300 \ubb38\ud654", href: "/team" },
          { title: "\uc778\uc7ac\uc601\uc785", href: "/recruit" },
          { title: "\uc0c8 \uc18c\uc2dd", href: "/news" },
        ],
        a = {
          title: "KCD\uc5d0\uc11c \uc77c\ud558\ub294 \uc6d0\uce59",
          href: "/how-we-work",
        },
        c = [
          { title: "\ube14\ub85c\uadf8", href: n.Ql },
          { title: "\ub370\uc774\ud130 \ub7a9", href: n.nm },
        ];
    },
    4400: function (e, t, r) {
      r.d(t, {
        BN: function () {
          return i;
        },
        Hk: function () {
          return o;
        },
        KN: function () {
          return n;
        },
        Ql: function () {
          return l;
        },
        VE: function () {
          return a;
        },
        _v: function () {
          return s;
        },
        g5: function () {
          return f;
        },
        kI: function () {
          return h;
        },
        nm: function () {
          return c;
        },
        xq: function () {
          return p;
        },
      });
      var n = "https://cashnote.kr/",
        i =
          "https://apps.apple.com/kr/app/%EC%BA%90%EC%8B%9C%EB%85%B8%ED%8A%B8/id1459090715",
        a =
          "https://play.google.com/store/apps/details?id=cashnote.com.albatross",
        c = "https://data-lab.kcd.co.kr/",
        l = "https://www.blog.kcd.co.kr/",
        o =
          "https://www.linkedin.com/company/korea-credit-data/?utm_source=kcdweb",
        s = "https://instagram.com/koreacreditdata/?utm_source=kcdweb",
        f = "https://www.youtube.com/channel/UCME5OlRMIrDXMofqIDuTrgg",
        h = "https://www.facebook.com/koreacreditdata/?utm_source=kcdweb",
        p = "https://kcd.career.greetinghr.com/o/10573";
    },
    8170: function (e, t, r) {
      r(5170);
      var n = r(170),
        i = r(1992),
        a = r(3010);
      t.Z = function () {
        return (0, a.jsxs)(n.kM, {
          color: i.Z.paragraphGray,
          children: [
            "\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 734-88-00358 | \ub300\ud45c \uae40\ub3d9\ud638 ",
            (0, a.jsx)("br", {}),
            "\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uac15\ub0a8\uad6c \ud14c\ud5e4\ub780\ub85c 127, 5F/6F (\ud558\ub098\uae08\uc735\uadf8\ub8f9 \uac15\ub0a8\uc0ac\uc625, \uc5ed\uc0bc\ub3d9)",
          ],
        });
      };
    },
    2530: function (e, t, r) {
      r(5170);
      var n = r(170),
        i = r(1992),
        a = r(3010);
      t.Z = function () {
        return (0, a.jsx)(n.kM, {
          color: i.Z.paragraphGray,
          children:
            "Copyright\xa9(\uc8fc)\ud55c\uad6d\uc2e0\uc6a9\ub370\uc774\ud130. All rights reserved.",
        });
      };
    },
    2374: function (e, t, r) {
      var n = r(4198),
        i = r(6773),
        a = r.n(i),
        c = (r(5170), r(9059)),
        l = r(9759),
        o = r(170),
        s = r(1992),
        f = r(6459),
        h = r(1640),
        p = r(4400),
        d = r(8170),
        u = r(2530),
        x = r(1694),
        m = r(3010);
      var j = (0, n.Z)("footer", { target: "enpa3a7" })(
          "display:flex;position:relative;background:",
          s.Z.textWhite100,
          ";padding:38px 20px 30px 20px;height:330px;"
        ),
        g = (0, n.Z)("div", { target: "enpa3a6" })({
          name: "1lb1rqj",
          styles: "display:flex;max-width:1280px;height:100%;margin:0 auto",
        }),
        v = (0, n.Z)("div", { target: "enpa3a5" })({
          name: "1vgoj7v",
          styles:
            "display:flex;flex-direction:column;justify-content:space-between",
        }),
        Z = (0, n.Z)("nav", { target: "enpa3a4" })({
          name: "139elgq",
          styles:
            "display:grid;grid-template-columns:repeat(7, 1fr);grid-gap:36px",
        }),
        C = (0, n.Z)("div", { target: "enpa3a3" })({
          name: "1fttcpj",
          styles: "display:flex;flex-direction:column",
        }),
        b = (0, n.Z)("h4", { target: "enpa3a2" })({
          name: "5gq906",
          styles:
            "font-weight:700;font-size:16px;line-height:24px;margin-bottom:16px",
        }),
        y = (0, n.Z)(o.xe, { target: "enpa3a1" })(""),
        w = (0, n.Z)("span", { target: "enpa3a0" })(
          "font-family:Pretendard;font-size:14px;font-weight:700;line-height:24px;text-align:left;color:",
          s.Z.black200,
          ";text-decoration:underline;cursor:pointer;"
        );
      t.Z = function () {
        return (0, m.jsx)(j, {
          children: (0, m.jsxs)(g, {
            children: [
              (0, m.jsxs)(v, {
                children: [
                  (0, m.jsxs)(Z, {
                    children: [
                      (0, m.jsxs)(C, {
                        children: [
                          (0, m.jsx)(b, {
                            children: "\ud68c\uc0ac\uc18c\uac1c",
                          }),
                          (0, m.jsx)(y, {
                            children: (0, m.jsx)(a(), {
                              href: "/about#".concat(h.W.COMPANY.MISSION),
                              children: "\ubbf8\uc158",
                            }),
                          }),
                          (0, m.jsx)(y, {
                            children: (0, m.jsx)(a(), {
                              href: "/about#".concat(h.W.COMPANY.HISTORY),
                              children: "\uc9c0\ub098\uc628 \uae38",
                            }),
                          }),
                          (0, m.jsx)(y, {
                            children: (0, m.jsx)(a(), {
                              href: "/about#".concat(h.W.COMPANY.COMMUNITY),
                              children: "KCD \uacf5\ub3d9\uccb4",
                            }),
                          }),
                          (0, m.jsx)(y, {
                            children: (0, m.jsx)(a(), {
                              href: "/announcement",
                              children: "\uacf5\uace0",
                            }),
                          }),
                        ],
                      }),
                      (0, m.jsxs)(C, {
                        children: [
                          (0, m.jsx)(b, { children: "\uc11c\ube44\uc2a4" }),
                          (0, m.jsx)(y, {
                            children: (0, m.jsx)(a(), {
                              href: "/service#".concat(h.W.SERVICE.CASHNOTE),
                              children: "\uce90\uc2dc\ub178\ud2b8",
                            }),
                          }),
                          (0, m.jsx)(y, {
                            children: (0, m.jsx)(a(), {
                              href: "/service#".concat(h.W.SERVICE.DATA_LAB),
                              children: "\ub370\uc774\ud130 \ub7a9",
                            }),
                          }),
                        ],
                      }),
                      (0, m.jsxs)(C, {
                        children: [
                          (0, m.jsx)(b, { children: "\ud300 \ubb38\ud654" }),
                          (0, m.jsx)(y, {
                            children: (0, m.jsx)(a(), {
                              href: "/team#".concat(h.W.TEAM.CORE_VALUE),
                              children: "\ud575\uc2ec\uac00\uce58",
                            }),
                          }),
                          (0, m.jsx)(y, {
                            children: (0, m.jsx)(a(), {
                              href: "/team#".concat(h.W.TEAM.PRINCIPAL),
                              children: "\uc77c\ud558\ub294 \uc6d0\uce59",
                            }),
                          }),
                          (0, m.jsx)(y, {
                            children: (0, m.jsx)(a(), {
                              href: "/team#".concat(h.W.TEAM.BENEFIT),
                              children: "\ubcf5\uc9c0",
                            }),
                          }),
                        ],
                      }),
                      (0, m.jsxs)(C, {
                        children: [
                          (0, m.jsx)(b, {
                            children: "\uc778\uc7ac\uc601\uc785",
                          }),
                          (0, m.jsx)(y, {
                            children: (0, m.jsx)(a(), {
                              href: "/recruit#".concat(h.W.RECRUIT.POSITION),
                              children: "\ud3ec\uc9c0\uc158 \uc548\ub0b4",
                            }),
                          }),
                        ],
                      }),
                      (0, m.jsxs)(C, {
                        children: [
                          (0, m.jsx)(b, { children: "\uc0c8 \uc18c\uc2dd" }),
                          (0, m.jsx)(y, {
                            children: (0, m.jsx)(a(), {
                              href: "/news?type=\ucd5c\uc2e0\ub274\uc2a4#".concat(
                                h.W.NEWS.OUR
                              ),
                              children: "\ucd5c\uc2e0\ub274\uc2a4",
                            }),
                          }),
                          (0, m.jsx)(y, {
                            children: (0, m.jsx)(a(), {
                              href: "/news?type=\ubcf4\ub3c4\uc790\ub8cc#".concat(
                                h.W.NEWS.OUR
                              ),
                              children: "\ubcf4\ub3c4\uc790\ub8cc",
                            }),
                          }),
                        ],
                      }),
                      (0, m.jsxs)(C, {
                        children: [
                          (0, m.jsx)(b, { children: "\ubb38\uc758" }),
                          (0, m.jsx)(y, {
                            children: (0, m.jsx)("a", {
                              href: "https://offline.cashnote.kr/partnership",
                              target: "_blank",
                              rel: "noreferrer",
                              children: "\uc0ac\uc5c5 \uc81c\ud734",
                            }),
                          }),
                          (0, m.jsx)(y, {
                            children: (0, m.jsx)("a", {
                              href: "mailto:data@kcd.co.kr",
                              target: "_blank",
                              rel: "noreferrer",
                              children: "\ub370\uc774\ud130 \ubb38\uc758",
                            }),
                          }),
                          (0, m.jsx)(y, {
                            children: (0, m.jsx)("a", {
                              href: "mailto:pr@kcd.co.kr",
                              target: "_blank",
                              rel: "noreferrer",
                              children: "PR",
                            }),
                          }),
                          (0, m.jsx)(y, {
                            children: (0, m.jsx)("a", {
                              href: "mailto:ir@kcd.co.kr",
                              target: "_blank",
                              rel: "noreferrer",
                              children: "IR",
                            }),
                          }),
                          (0, m.jsx)(y, {
                            children: (0, m.jsx)("a", {
                              href: "mailto:join@kcd.co.kr ",
                              target: "_blank",
                              rel: "noreferrer",
                              children: "\uc778\uc7ac\uc601\uc785",
                            }),
                          }),
                          (0, m.jsx)(y, {
                            children: (0, m.jsx)("a", {
                              href: "https://docs.google.com/forms/d/e/1FAIpQLSdhz7GNmT6u5_sVtJoFKVPeyLNqpQ1Maln1x-i0ysJSqCaGjA/viewform",
                              target: "_blank",
                              rel: "noreferrer",
                              children: "\ub9c8\ucf13 \uc785\uc810\ubb38\uc758",
                            }),
                          }),
                        ],
                      }),
                      (0, m.jsxs)(C, {
                        children: [
                          (0, m.jsx)(b, { children: "KCD \uacf5\ub3d9\uccb4" }),
                          f.X.map(function (e) {
                            var t = e.title,
                              r = e.link;
                            return (0,
                            m.jsx)(y, { children: (0, m.jsx)("a", { href: r, target: "_blank", rel: "noreferrer", children: t }) }, t);
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, m.jsx)(u.Z, {}),
                ],
              }),
              (0, m.jsx)(v, {
                style: { marginLeft: 83 },
                children: (0, m.jsxs)(l.Z, {
                  vertical: !0,
                  size: 12,
                  children: [
                    (0, m.jsxs)(l.Z, {
                      size: 48,
                      children: [
                        (0, m.jsx)(c.Z, {
                          links: {
                            facebook: p.kI,
                            instagram: p._v,
                            linkedin: p.Hk,
                            youtube: p.g5,
                          },
                        }),
                        (0, m.jsx)(x.Z, {}),
                      ],
                    }),
                    (0, m.jsx)(d.Z, {}),
                    (0, m.jsxs)(l.Z, {
                      children: [
                        (0, m.jsx)(a(), {
                          href: "/privacy/",
                          passHref: !0,
                          children: (0, m.jsx)(w, {
                            children:
                              "\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68",
                          }),
                        }),
                        (0, m.jsx)(a(), {
                          href: "/ethics/",
                          passHref: !0,
                          children: (0, m.jsx)(w, {
                            children: "KCD \uc724\ub9ac \uacbd\uc601",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
    },
    8255: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return C;
        },
      });
      var n = r(4198),
        i = r(6773),
        a = r.n(i),
        c = (r(5170), r(9059)),
        l = r(9759),
        o = r(1992),
        s = r(4400),
        f = r(3326),
        h = r(3010);
      function p(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                (0, f.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var u = function (e) {
          return (0, h.jsxs)(
            "svg",
            d(
              d({ width: "155", height: "40", viewBox: "0 0 155 40" }, e),
              {},
              {
                children: [
                  (0, h.jsx)("path", {
                    d: "M58.2298 15.5499H56.4398L53.6098 11.8399V15.5499H52.0498V7.63989H53.6098V11.1299L56.3198 7.63989H58.1198L55.1898 11.4799L58.2298 15.5499Z",
                    fill: "#fff",
                  }),
                  (0, h.jsx)("path", {
                    d: "M65.4797 15.73C67.8897 15.73 69.4997 13.87 69.4997 11.59C69.4997 9.30997 67.8897 7.45996 65.4797 7.45996C63.0897 7.45996 61.4697 9.30997 61.4697 11.59C61.4697 13.87 63.0897 15.73 65.4797 15.73ZM65.4797 14.19C64.1197 14.19 63.1297 13.09 63.1297 11.59C63.1297 10.08 64.1197 8.98996 65.4797 8.98996C66.8597 8.98996 67.8497 10.09 67.8497 11.59C67.8597 13.09 66.8697 14.19 65.4797 14.19Z",
                    fill: "#fff",
                  }),
                  (0, h.jsx)("path", {
                    d: "M73.7803 7.62988V15.5499H75.3803V12.9399H76.8803L78.6603 15.5499H80.4603V15.3899L78.6303 12.7899V12.6799C79.5903 12.2799 80.2003 11.4399 80.2003 10.2799C80.2003 8.67988 79.0003 7.62988 77.1603 7.62988H73.7803ZM78.5403 10.2999C78.5403 11.1499 77.9303 11.5699 77.1003 11.5699H75.3703V9.03989H77.0603C77.9403 9.02989 78.5403 9.43988 78.5403 10.2999Z",
                    fill: "#fff",
                  }),
                  (0, h.jsx)("path", {
                    d: "M89.9203 10.8899H86.4604V9.02988H90.5603V7.62988H84.8604V15.5499H90.5603V14.1499H86.4604V12.1799H89.9203V10.8899Z",
                    fill: "#fff",
                  }),
                  (0, h.jsx)("path", {
                    d: "M99.2497 7.62988H97.5697L94.4297 15.5499H96.1297L96.6997 14.0199H100.12L100.69 15.5499H102.39L99.2497 7.62988ZM98.3997 9.39989L99.6397 12.7199H97.1697L98.3997 9.39989Z",
                    fill: "#fff",
                  }),
                  (0, h.jsx)("path", {
                    d: "M57.26 30.4399C57.26 30.4399 56.65 31.1299 55.52 31.1299C54.11 31.1299 53.12 30.0199 53.12 28.5199C53.12 27.0099 54.11 25.9199 55.52 25.9199C56.65 25.9199 57.26 26.5899 57.26 26.5899L58.18 25.3599C58.18 25.3599 57.34 24.3799 55.5 24.3799C53.01 24.3799 51.46 26.2299 51.46 28.5099C51.46 30.7899 53 32.6499 55.5 32.6499C57.33 32.6499 58.18 31.6599 58.18 31.6599L57.26 30.4399Z",
                    fill: "#fff",
                  }),
                  (0, h.jsx)("path", {
                    d: "M62.4404 24.55V32.47H64.0404V29.86H65.5404L67.3204 32.47H69.1104V32.31L67.2804 29.7101V29.61C68.2404 29.21 68.8504 28.3701 68.8504 27.2101C68.8504 25.6101 67.6504 24.56 65.8204 24.56H62.4404V24.55ZM67.2104 27.22C67.2104 28.07 66.6004 28.4901 65.7704 28.4901H64.0404V25.9601H65.7304C66.6004 25.9501 67.2104 26.36 67.2104 27.22Z",
                    fill: "#fff",
                  }),
                  (0, h.jsx)("path", {
                    d: "M78.8195 27.81H75.3595V25.9501H79.4695V24.55H73.7695V32.47H79.4695V31.0701H75.3595V29.1001H78.8195V27.81Z",
                    fill: "#fff",
                  }),
                  (0, h.jsx)("path", {
                    d: "M91.7802 28.5101C91.7802 26.1901 90.1702 24.55 87.6602 24.55H84.7402V32.47H87.6602C90.1702 32.47 91.7802 30.8301 91.7802 28.5101ZM87.5602 25.9501C89.0002 25.9501 90.1302 26.8501 90.1302 28.5101C90.1302 30.1201 89.0002 31.0701 87.5602 31.0701H86.3502V25.9501H87.5602Z",
                    fill: "#fff",
                  }),
                  (0, h.jsx)("path", {
                    d: "M97.6703 24.55H96.0703V32.47H97.6703V24.55Z",
                    fill: "#fff",
                  }),
                  (0, h.jsx)("path", {
                    d: "M102.31 25.9501H104.66V32.47H106.26V25.9501H108.62V24.55H102.31V25.9501Z",
                    fill: "#fff",
                  }),
                  (0, h.jsx)("path", {
                    d: "M124.68 28.5101C124.68 26.1901 123.07 24.55 120.56 24.55H117.64V32.47H120.56C123.07 32.47 124.68 30.8301 124.68 28.5101ZM120.46 25.9501C121.9 25.9501 123.03 26.8501 123.03 28.5101C123.03 30.1201 121.9 31.0701 120.46 31.0701H119.25V25.9501H120.46Z",
                    fill: "#fff",
                  }),
                  (0, h.jsx)("path", {
                    d: "M132.38 24.55H130.7L127.56 32.47H129.26L129.83 30.94H133.25L133.82 32.47H135.52L132.38 24.55ZM131.54 26.3201L132.78 29.6501H130.31L131.54 26.3201Z",
                    fill: "#fff",
                  }),
                  (0, h.jsx)("path", {
                    d: "M137.89 25.9501H140.24V32.47H141.84V25.9501H144.2V24.55H137.89V25.9501Z",
                    fill: "#fff",
                  }),
                  (0, h.jsx)("path", {
                    d: "M151.39 24.55H149.71L146.57 32.47H148.27L148.84 30.94H152.26L152.83 32.47H154.53L151.39 24.55ZM150.54 26.3201L151.78 29.6501H149.31L150.54 26.3201Z",
                    fill: "#fff",
                  }),
                  (0, h.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0 39.49H39.49V0H0V39.49ZM18.29 30.11C18.74 30.57 19.33 30.8 20.06 30.8C20.49 30.8 20.88 30.7 21.23 30.5C21.58 30.3 21.84 30.03 22.02 29.7L23 30.26C22.71 30.76 22.31 31.16 21.79 31.46C21.27 31.76 20.69 31.9 20.07 31.9C19.04 31.9 18.19 31.56 17.51 30.88C16.83 30.2 16.5 29.36 16.5 28.36C16.5 27.36 16.84 26.52 17.51 25.84C18.19 25.16 19.04 24.82 20.07 24.82C20.69 24.82 21.26 24.97 21.78 25.26C22.3 25.55 22.71 25.95 23 26.45L22.02 27.02C21.84 26.68 21.57 26.41 21.23 26.21C20.88 26.01 20.49 25.91 20.06 25.91C19.33 25.91 18.74 26.14 18.29 26.6C17.84 27.06 17.61 27.65 17.61 28.36C17.61 29.07 17.84 29.65 18.29 30.11ZM12.2602 31.77L9.5702 28.52V31.77H8.4502V24.94H9.5702V28.01L12.1602 24.94H13.5002L10.7402 28.27L13.6002 31.77H12.2602ZM31.4604 25.93C30.8404 25.27 30.0604 24.94 29.1204 24.94H26.4404V31.77H29.1204C30.0604 31.77 30.8404 31.44 31.4604 30.78C32.0804 30.12 32.3904 29.31 32.3904 28.36C32.3904 27.39 32.0804 26.58 31.4604 25.93ZM30.7004 30.03C30.2904 30.47 29.7704 30.69 29.1204 30.69H27.5604V26.01H29.1204C29.7604 26.01 30.2904 26.23 30.7004 26.67C31.1104 27.11 31.3104 27.67 31.3104 28.35C31.3104 29.03 31.1004 29.59 30.7004 30.03ZM29.1597 7.84003C30.3697 7.84003 31.3497 8.82001 31.3497 10.03C31.3497 11.24 30.3697 12.22 29.1597 12.22C27.9497 12.22 26.9697 11.24 26.9697 10.03C26.9697 8.82001 27.9497 7.84003 29.1597 7.84003ZM29.1597 11.22C29.8197 11.22 30.3597 10.68 30.3597 10.02C30.3597 9.36002 29.8197 8.82002 29.1597 8.82002C28.4997 8.82002 27.9597 9.36002 27.9597 10.02C27.9597 10.69 28.4997 11.22 29.1597 11.22ZM10.44 7.88C11.65 7.88 12.63 8.86001 12.63 10.07C12.63 11.28 11.65 12.26 10.44 12.26C9.23 12.26 8.25 11.28 8.25 10.07C8.25 8.86001 9.23 7.88 10.44 7.88ZM10.44 11.26C11.1 11.26 11.64 10.72 11.64 10.06C11.64 9.4 11.1 8.86 10.44 8.86C9.78 8.86 9.24 9.4 9.24 10.06C9.24 10.72 9.78 11.26 10.44 11.26ZM19.8004 15.98C21.0103 15.98 21.9904 16.96 21.9904 18.17C21.9904 19.38 21.0103 20.36 19.8004 20.36C18.5904 20.36 17.6104 19.38 17.6104 18.17C17.6104 16.96 18.5904 15.98 19.8004 15.98ZM19.8004 19.37C20.4604 19.37 21.0004 18.83 21.0004 18.17C21.0004 17.51 20.4604 16.97 19.8004 16.97C19.1404 16.97 18.6004 17.51 18.6004 18.17C18.6004 18.83 19.1404 19.37 19.8004 19.37ZM20.28 12.15H19.29V8H20.28V12.15ZM10.9197 20.25H9.92969V16.11H10.9197V20.25ZM29.6902 20.25H28.7002V16.11H29.6902V20.25Z",
                    fill: "#fff",
                  }),
                ],
              }
            )
          );
        },
        x = r(8170),
        m = r(2530),
        j = r(1694),
        g = (0, n.Z)("footer", { target: "e1ufwyo32" })(
          "position:relative;display:flex;flex-direction:column;gap:143px;background:",
          o.Z.textWhite100,
          ";padding:48px 30px;"
        ),
        v = (0, n.Z)(u, { target: "e1ufwyo31" })(
          "path{fill:",
          o.Z.primary,
          ";}"
        ),
        Z = (0, n.Z)("span", { target: "e1ufwyo30" })(
          "font-family:Pretendard;font-size:14px;font-weight:700;line-height:24px;color:",
          o.Z.black200,
          ";text-decoration:underline;cursor:pointer;"
        );
      var C = function () {
        return (0, h.jsxs)(g, {
          children: [
            (0, h.jsxs)(l.Z, {
              size: 18,
              vertical: !0,
              children: [
                (0, h.jsxs)(l.Z, {
                  size: 25,
                  vertical: !0,
                  children: [
                    (0, h.jsx)(a(), {
                      href: "/",
                      passHref: !0,
                      children: (0, h.jsx)("a", {
                        children: (0, h.jsx)(v, {}),
                      }),
                    }),
                    (0, h.jsx)(x.Z, {}),
                  ],
                }),
                (0, h.jsx)(j.Z, {}),
              ],
            }),
            (0, h.jsxs)(l.Z, {
              size: 12,
              vertical: !0,
              children: [
                (0, h.jsx)(c.Z, {
                  links: {
                    facebook: s.kI,
                    instagram: s._v,
                    linkedin: s.Hk,
                    youtube: s.g5,
                  },
                }),
                (0, h.jsx)(m.Z, {}),
                (0, h.jsxs)(l.Z, {
                  children: [
                    (0, h.jsx)(a(), {
                      href: "/privacy/",
                      passHref: !0,
                      children: (0, h.jsx)(Z, {
                        children:
                          "\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68",
                      }),
                    }),
                    (0, h.jsx)(a(), {
                      href: "/ethics/",
                      passHref: !0,
                      children: (0, h.jsx)(Z, {
                        children: "KCD \uc724\ub9ac \uacbd\uc601",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    1694: function (e, t, r) {
      var n = r(4198),
        i = (r(5170), r(1992)),
        a = r(6433),
        c = r(3010),
        l = (0, n.Z)("div", { target: "e12h1i5k0" })(
          ">a{position:relative;font-weight:700;font-size:16px;line-height:24px;color:",
          i.Z.componentGray,
          ";}>a:first-of-type{margin-right:24px;}>a:first-of-type::after{content:'';position:absolute;width:1px;height:70%;background:",
          i.Z.componentGray,
          ";top:50%;right:-12px;transform:translateY(-50%);}"
        );
      t.Z = function () {
        return (0, c.jsx)(l, {
          children: a.ge.map(function (e) {
            var t = e.title,
              r = e.href;
            return (0,
            c.jsx)("a", { href: r, target: "_blank", rel: "noreferrer", children: t }, t);
          }),
        });
      };
    },
    1513: function (e, t, r) {
      r.d(t, {
        d: function () {
          return o;
        },
        mq: function () {
          return l;
        },
      });
      var n = r(4341),
        i = r(5147),
        a = r(8256),
        c = { mobile: 1080 },
        l = function (e) {
          var t = Object.keys(c)
            .map(function (e) {
              return [e, c[e]];
            })
            .reduce(function (t, r) {
              var a = (0, i.Z)(r, 2),
                c = a[0],
                l = a[1];
              return e === c
                ? [].concat((0, n.Z)(t), [
                    "@media (max-width: ".concat(l, "px)"),
                  ])
                : t;
            }, []);
          return (0, i.Z)(t, 1)[0];
        },
        o = function () {
          return (0, a.S)().width < c.mobile;
        };
    },
  },
]);

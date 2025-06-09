(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5279],
  {
    5726: function (t) {
      t.exports = (function () {
        "use strict";
        var t = 1e3,
          e = 6e4,
          n = 36e5,
          r = "millisecond",
          i = "second",
          s = "minute",
          u = "hour",
          a = "day",
          o = "week",
          c = "month",
          f = "quarter",
          h = "year",
          l = "date",
          d = "Invalid Date",
          p =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          $ =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          m = {
            name: "en",
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            ordinal: function (t) {
              var e = ["th", "st", "nd", "rd"],
                n = t % 100;
              return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
            },
          },
          g = function (t, e, n) {
            var r = String(t);
            return !r || r.length >= e
              ? t
              : "" + Array(e + 1 - r.length).join(n) + t;
          },
          v = {
            s: g,
            z: function (t) {
              var e = -t.utcOffset(),
                n = Math.abs(e),
                r = Math.floor(n / 60),
                i = n % 60;
              return (e <= 0 ? "+" : "-") + g(r, 2, "0") + ":" + g(i, 2, "0");
            },
            m: function t(e, n) {
              if (e.date() < n.date()) return -t(n, e);
              var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                i = e.clone().add(r, c),
                s = n - i < 0,
                u = e.clone().add(r + (s ? -1 : 1), c);
              return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
            },
            a: function (t) {
              return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
            },
            p: function (t) {
              return (
                { M: c, y: h, w: o, d: a, D: l, h: u, m: s, s: i, ms: r, Q: f }[
                  t
                ] ||
                String(t || "")
                  .toLowerCase()
                  .replace(/s$/, "")
              );
            },
            u: function (t) {
              return void 0 === t;
            },
          },
          y = "en",
          x = {};
        x[y] = m;
        var b = "$isDayjsObject",
          w = function (t) {
            return t instanceof S || !(!t || !t[b]);
          },
          D = function t(e, n, r) {
            var i;
            if (!e) return y;
            if ("string" == typeof e) {
              var s = e.toLowerCase();
              x[s] && (i = s), n && ((x[s] = n), (i = s));
              var u = e.split("-");
              if (!i && u.length > 1) return t(u[0]);
            } else {
              var a = e.name;
              (x[a] = e), (i = a);
            }
            return !r && i && (y = i), i || (!r && y);
          },
          M = function (t, e) {
            if (w(t)) return t.clone();
            var n = "object" == typeof e ? e : {};
            return (n.date = t), (n.args = arguments), new S(n);
          },
          O = v;
        (O.l = D),
          (O.i = w),
          (O.w = function (t, e) {
            return M(t, {
              locale: e.$L,
              utc: e.$u,
              x: e.$x,
              $offset: e.$offset,
            });
          });
        var S = (function () {
            function m(t) {
              (this.$L = D(t.locale, null, !0)),
                this.parse(t),
                (this.$x = this.$x || t.x || {}),
                (this[b] = !0);
            }
            var g = m.prototype;
            return (
              (g.parse = function (t) {
                (this.$d = (function (t) {
                  var e = t.date,
                    n = t.utc;
                  if (null === e) return new Date(NaN);
                  if (O.u(e)) return new Date();
                  if (e instanceof Date) return new Date(e);
                  if ("string" == typeof e && !/Z$/i.test(e)) {
                    var r = e.match(p);
                    if (r) {
                      var i = r[2] - 1 || 0,
                        s = (r[7] || "0").substring(0, 3);
                      return n
                        ? new Date(
                            Date.UTC(
                              r[1],
                              i,
                              r[3] || 1,
                              r[4] || 0,
                              r[5] || 0,
                              r[6] || 0,
                              s
                            )
                          )
                        : new Date(
                            r[1],
                            i,
                            r[3] || 1,
                            r[4] || 0,
                            r[5] || 0,
                            r[6] || 0,
                            s
                          );
                    }
                  }
                  return new Date(e);
                })(t)),
                  this.init();
              }),
              (g.init = function () {
                var t = this.$d;
                (this.$y = t.getFullYear()),
                  (this.$M = t.getMonth()),
                  (this.$D = t.getDate()),
                  (this.$W = t.getDay()),
                  (this.$H = t.getHours()),
                  (this.$m = t.getMinutes()),
                  (this.$s = t.getSeconds()),
                  (this.$ms = t.getMilliseconds());
              }),
              (g.$utils = function () {
                return O;
              }),
              (g.isValid = function () {
                return !(this.$d.toString() === d);
              }),
              (g.isSame = function (t, e) {
                var n = M(t);
                return this.startOf(e) <= n && n <= this.endOf(e);
              }),
              (g.isAfter = function (t, e) {
                return M(t) < this.startOf(e);
              }),
              (g.isBefore = function (t, e) {
                return this.endOf(e) < M(t);
              }),
              (g.$g = function (t, e, n) {
                return O.u(t) ? this[e] : this.set(n, t);
              }),
              (g.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (g.valueOf = function () {
                return this.$d.getTime();
              }),
              (g.startOf = function (t, e) {
                var n = this,
                  r = !!O.u(e) || e,
                  f = O.p(t),
                  d = function (t, e) {
                    var i = O.w(
                      n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t),
                      n
                    );
                    return r ? i : i.endOf(a);
                  },
                  p = function (t, e) {
                    return O.w(
                      n
                        .toDate()
                        [t].apply(
                          n.toDate("s"),
                          (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)
                        ),
                      n
                    );
                  },
                  $ = this.$W,
                  m = this.$M,
                  g = this.$D,
                  v = "set" + (this.$u ? "UTC" : "");
                switch (f) {
                  case h:
                    return r ? d(1, 0) : d(31, 11);
                  case c:
                    return r ? d(1, m) : d(0, m + 1);
                  case o:
                    var y = this.$locale().weekStart || 0,
                      x = ($ < y ? $ + 7 : $) - y;
                    return d(r ? g - x : g + (6 - x), m);
                  case a:
                  case l:
                    return p(v + "Hours", 0);
                  case u:
                    return p(v + "Minutes", 1);
                  case s:
                    return p(v + "Seconds", 2);
                  case i:
                    return p(v + "Milliseconds", 3);
                  default:
                    return this.clone();
                }
              }),
              (g.endOf = function (t) {
                return this.startOf(t, !1);
              }),
              (g.$set = function (t, e) {
                var n,
                  o = O.p(t),
                  f = "set" + (this.$u ? "UTC" : ""),
                  d = ((n = {}),
                  (n[a] = f + "Date"),
                  (n[l] = f + "Date"),
                  (n[c] = f + "Month"),
                  (n[h] = f + "FullYear"),
                  (n[u] = f + "Hours"),
                  (n[s] = f + "Minutes"),
                  (n[i] = f + "Seconds"),
                  (n[r] = f + "Milliseconds"),
                  n)[o],
                  p = o === a ? this.$D + (e - this.$W) : e;
                if (o === c || o === h) {
                  var $ = this.clone().set(l, 1);
                  $.$d[d](p),
                    $.init(),
                    (this.$d = $.set(l, Math.min(this.$D, $.daysInMonth())).$d);
                } else d && this.$d[d](p);
                return this.init(), this;
              }),
              (g.set = function (t, e) {
                return this.clone().$set(t, e);
              }),
              (g.get = function (t) {
                return this[O.p(t)]();
              }),
              (g.add = function (r, f) {
                var l,
                  d = this;
                r = Number(r);
                var p = O.p(f),
                  $ = function (t) {
                    var e = M(d);
                    return O.w(e.date(e.date() + Math.round(t * r)), d);
                  };
                if (p === c) return this.set(c, this.$M + r);
                if (p === h) return this.set(h, this.$y + r);
                if (p === a) return $(1);
                if (p === o) return $(7);
                var m =
                    ((l = {}), (l[s] = e), (l[u] = n), (l[i] = t), l)[p] || 1,
                  g = this.$d.getTime() + r * m;
                return O.w(g, this);
              }),
              (g.subtract = function (t, e) {
                return this.add(-1 * t, e);
              }),
              (g.format = function (t) {
                var e = this,
                  n = this.$locale();
                if (!this.isValid()) return n.invalidDate || d;
                var r = t || "YYYY-MM-DDTHH:mm:ssZ",
                  i = O.z(this),
                  s = this.$H,
                  u = this.$m,
                  a = this.$M,
                  o = n.weekdays,
                  c = n.months,
                  f = n.meridiem,
                  h = function (t, n, i, s) {
                    return (t && (t[n] || t(e, r))) || i[n].slice(0, s);
                  },
                  l = function (t) {
                    return O.s(s % 12 || 12, t, "0");
                  },
                  p =
                    f ||
                    function (t, e, n) {
                      var r = t < 12 ? "AM" : "PM";
                      return n ? r.toLowerCase() : r;
                    };
                return r.replace($, function (t, r) {
                  return (
                    r ||
                    (function (t) {
                      switch (t) {
                        case "YY":
                          return String(e.$y).slice(-2);
                        case "YYYY":
                          return O.s(e.$y, 4, "0");
                        case "M":
                          return a + 1;
                        case "MM":
                          return O.s(a + 1, 2, "0");
                        case "MMM":
                          return h(n.monthsShort, a, c, 3);
                        case "MMMM":
                          return h(c, a);
                        case "D":
                          return e.$D;
                        case "DD":
                          return O.s(e.$D, 2, "0");
                        case "d":
                          return String(e.$W);
                        case "dd":
                          return h(n.weekdaysMin, e.$W, o, 2);
                        case "ddd":
                          return h(n.weekdaysShort, e.$W, o, 3);
                        case "dddd":
                          return o[e.$W];
                        case "H":
                          return String(s);
                        case "HH":
                          return O.s(s, 2, "0");
                        case "h":
                          return l(1);
                        case "hh":
                          return l(2);
                        case "a":
                          return p(s, u, !0);
                        case "A":
                          return p(s, u, !1);
                        case "m":
                          return String(u);
                        case "mm":
                          return O.s(u, 2, "0");
                        case "s":
                          return String(e.$s);
                        case "ss":
                          return O.s(e.$s, 2, "0");
                        case "SSS":
                          return O.s(e.$ms, 3, "0");
                        case "Z":
                          return i;
                      }
                      return null;
                    })(t) ||
                    i.replace(":", "")
                  );
                });
              }),
              (g.utcOffset = function () {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
              }),
              (g.diff = function (r, l, d) {
                var p,
                  $ = this,
                  m = O.p(l),
                  g = M(r),
                  v = (g.utcOffset() - this.utcOffset()) * e,
                  y = this - g,
                  x = function () {
                    return O.m($, g);
                  };
                switch (m) {
                  case h:
                    p = x() / 12;
                    break;
                  case c:
                    p = x();
                    break;
                  case f:
                    p = x() / 3;
                    break;
                  case o:
                    p = (y - v) / 6048e5;
                    break;
                  case a:
                    p = (y - v) / 864e5;
                    break;
                  case u:
                    p = y / n;
                    break;
                  case s:
                    p = y / e;
                    break;
                  case i:
                    p = y / t;
                    break;
                  default:
                    p = y;
                }
                return d ? p : O.a(p);
              }),
              (g.daysInMonth = function () {
                return this.endOf(c).$D;
              }),
              (g.$locale = function () {
                return x[this.$L];
              }),
              (g.locale = function (t, e) {
                if (!t) return this.$L;
                var n = this.clone(),
                  r = D(t, e, !0);
                return r && (n.$L = r), n;
              }),
              (g.clone = function () {
                return O.w(this.$d, this);
              }),
              (g.toDate = function () {
                return new Date(this.valueOf());
              }),
              (g.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (g.toISOString = function () {
                return this.$d.toISOString();
              }),
              (g.toString = function () {
                return this.$d.toUTCString();
              }),
              m
            );
          })(),
          _ = S.prototype;
        return (
          (M.prototype = _),
          [
            ["$ms", r],
            ["$s", i],
            ["$m", s],
            ["$H", u],
            ["$W", a],
            ["$M", c],
            ["$y", h],
            ["$D", l],
          ].forEach(function (t) {
            _[t[1]] = function (e) {
              return this.$g(e, t[0], t[1]);
            };
          }),
          (M.extend = function (t, e) {
            return t.$i || (t(e, S, M), (t.$i = !0)), M;
          }),
          (M.locale = D),
          (M.isDayjs = w),
          (M.unix = function (t) {
            return M(1e3 * t);
          }),
          (M.en = x[y]),
          (M.Ls = x),
          (M.p = {}),
          M
        );
      })();
    },
    202: function (t, e, n) {
      "use strict";
      var r = n(3006),
        i = n(9089),
        s = n.n(i),
        u = (n(5170), n(1992), n(2374)),
        a = n(8255),
        o = n(3123),
        c = n(6377),
        f = n(3010),
        h = s()(
          function () {
            return Promise.all([n.e(793), n.e(1446)]).then(n.bind(n, 1446));
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return [1446];
              },
            },
          }
        );
      e.Z = function (t) {
        var e = t.children,
          n = t.title,
          i = t.fixed;
        return (0, f.jsxs)(f.Fragment, {
          children: [
            (0, f.jsx)(c.Z, { title: n }),
            (0, f.jsx)(h, { fixed: i }),
            (0, f.jsx)("main", {
              className: (0, r.iv)("padding-top:", i ? "60px" : "0px", ";", ""),
              children: e,
            }),
            (0, f.jsx)(o.Z, {
              pc: (0, f.jsx)(u.Z, {}),
              mobile: (0, f.jsx)(a.Z, {}),
            }),
          ],
        });
      };
    },
    7190: function (t, e, n) {
      "use strict";
      n.d(e, {
        DG: function () {
          return f;
        },
        W6: function () {
          return o;
        },
        lx: function () {
          return c;
        },
      });
      var r = n(4198),
        i = n(6551),
        s = n(1992),
        u = n(1513),
        a = (0, i.css)(
          "color:",
          s.Z.primary,
          ";word-break:keep-all;white-space:pre-line;",
          ""
        ),
        o = (0, r.Z)("h4", { target: "ekzxz9e2" })(
          a,
          " font-weight:600;font-size:22px;line-height:32px;",
          function (t) {
            var e = t.color;
            return e && (0, i.css)("color:", e, ";", "");
          },
          " ",
          (0, u.mq)("mobile"),
          "{font-size:18px;line-height:24px;}"
        ),
        c = (0, r.Z)("h3", { target: "ekzxz9e1" })(
          a,
          " font-weight:",
          function (t) {
            return t.bold ? 700 : 300;
          },
          ";font-size:30px;line-height:42px;",
          (0, u.mq)("mobile"),
          "{font-size:20px;line-height:30px;}",
          function (t) {
            var e = t.color;
            return e && (0, i.css)("color:", e, ";", "");
          },
          ";"
        ),
        f = (0, r.Z)("h2", { target: "ekzxz9e0" })(
          a,
          " font-weight:300;font-size:44px;line-height:54px;",
          function (t) {
            var e = t.color;
            return e && (0, i.css)("color:", e, ";", "");
          },
          " ",
          (0, u.mq)("mobile"),
          "{font-size:34px;line-height:42px;}"
        );
    },
    6656: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return D;
          },
        });
      n(5170);
      var r = n(4931),
        i = n(202),
        s = n(3326),
        u = n(4198),
        a = n(7190),
        o = n(1513),
        c = n(3605),
        f = n(5726),
        h = n.n(f),
        l = n(1992),
        d = n(2107),
        p = n(3010);
      var $ = (0, u.Z)("article", { target: "eu8u01t2" })(
          "border-bottom:1px solid ",
          l.Z.lineGray,
          ";padding-bottom:60px;margin-bottom:60px;"
        ),
        m = (0, u.Z)(a.W6, { target: "eu8u01t1" })({
          name: "pr10xp",
          styles: "margin-bottom:10px",
        }),
        g = (0, u.Z)("div", { target: "eu8u01t0" })({
          name: "5s3ua9",
          styles: "margin-bottom:24px;font-size:18px",
        });
      var v = function (t) {
        var e = t.fields;
        return (0, p.jsxs)($, {
          children: [
            (0, p.jsx)(m, { children: e.title }),
            (0, p.jsx)(g, {
              children: h()(e.createdAt).format("YYYY. MM. DD."),
            }),
            (0, c.h)(e.content, d.Z),
            e.pdf &&
              (0, p.jsx)("a", {
                target: "_blank",
                href: "https:".concat(e.pdf.fields.file.url),
                rel: "noreferrer",
                children: "\uc6d0\ubb38\ubcf4\uae30",
              }),
          ],
        });
      };
      function y(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var x = (0, u.Z)("section", { target: "e1yhr5641" })(
          "max-width:1280px;margin:0 auto;min-height:100vh;padding:0 20px;padding-top:120px;",
          (0, o.mq)("mobile"),
          "{padding-top:50px;}"
        ),
        b = (0, u.Z)(a.DG, { target: "e1yhr5640" })({
          name: "i7lu2r",
          styles: "font-weight:bold;margin-bottom:52px",
        });
      var w = function (t) {
          var e = t.items;
          return (0, p.jsxs)(x, {
            children: [
              (0, p.jsx)(b, { children: "\uacf5\uace0" }),
              e.map(function (t) {
                return (0, p.jsx)(
                  v,
                  (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? y(Object(n), !0).forEach(function (e) {
                            (0, s.Z)(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : y(Object(n)).forEach(function (e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(n, e)
                            );
                          });
                    }
                    return t;
                  })({}, t),
                  t.sys.id
                );
              }),
            ],
          });
        },
        D = function () {
          var t = (0, r.Z)({
            content_type: "announcement",
            order: "-sys.createdAt",
          });
          return (0, p.jsx)(i.Z, {
            title: "\uacf5\uace0",
            fixed: !0,
            children: (0, p.jsx)(w, {
              items: (null === t || void 0 === t ? void 0 : t.items) || [],
            }),
          });
        };
    },
    5707: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/announcement",
        function () {
          return n(6656);
        },
      ]);
    },
  },
  function (t) {
    t.O(0, [5544, 648, 8413, 7295, 6562, 9579, 9774, 2888, 179], function () {
      return (e = 5707), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);

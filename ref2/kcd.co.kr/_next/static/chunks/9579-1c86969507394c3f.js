(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9579],
  {
    2107: function (t, e, r) {
      "use strict";
      var n,
        a = r(3326),
        i = r(4198),
        o = r(1582),
        l = (r(5170), r(1992)),
        p = r(170),
        s = r(3010);
      var c = (0, i.Z)(p._p, { target: "e1vc8fww3" })(
          "text-align:left;color:",
          l.Z.paragraphGray,
          ";margin-bottom:12px;"
        ),
        u = (0, i.Z)("ul", { target: "e1vc8fww2" })(
          "li{position:relative;}li>p{position:relative;padding-left:20px;margin-left:24px;}li>p::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:6px;height:6px;background:",
          l.Z.paragraphGray,
          ";border-radius:100%;}li>ul>li>p{margin-left:42px;}li>ul>li>p::before{content:'';border-radius:0;}li>ul>li>ul>li>p{margin-left:62px;}li>ul>li>ul>li>p::before{content:'';transform:translateY(-50%) rotate(45deg);}"
        ),
        f = (0, i.Z)("a", { target: "e1vc8fww1" })({
          name: "nilrrz",
          styles: "text-decoration:underline;font-weight:bold",
        }),
        d = (0, i.Z)("table", { target: "e1vc8fww0" })({
          name: "55ad4l",
          styles:
            "width:100%;text-align:left;border-radius:2px 2px 0 0;border-collapse:separate;border-spacing:0;p{margin:0;}th,td{position:relative;border-bottom:1px solid rgba(0, 0, 0, 0.06);padding:16px;overflow-wrap:break-word;}th{background:#fafafa;}th:not(:last-child)::after{content:'';position:absolute;right:0;top:50%;width:1px;height:50%;background-color:rgba(0, 0, 0, 0.06);transform:translateY(-50%);}",
        }),
        g = {
          renderNode:
            ((n = {}),
            (0, a.Z)(n, o.BLOCKS.PARAGRAPH, function (t, e) {
              return (0, s.jsx)(c, { children: e });
            }),
            (0, a.Z)(n, o.BLOCKS.UL_LIST, function (t, e) {
              return (0, s.jsx)(u, { children: e });
            }),
            (0, a.Z)(n, o.BLOCKS.TABLE, function (t, e) {
              return (0, s.jsx)(d, { children: e });
            }),
            (0, a.Z)(n, o.INLINES.HYPERLINK, function (t, e) {
              return (0,
              s.jsx)(f, { href: t.data.uri, target: "_blank", children: e });
            }),
            n),
        };
      e.Z = g;
    },
    4931: function (t, e, r) {
      "use strict";
      r.d(e, {
        a: function () {
          return p;
        },
      });
      var n = r(4910),
        a = r(2564),
        i = r.n(a),
        o = r(8649),
        l = r(5170),
        p = (0, o.e)({
          space: "4io3pho3xfqe",
          accessToken: "R4CjfAVANnb9vdkStCaGCFQFTqCx4zLlJnq14mc3TGA",
        });
      e.Z = function (t) {
        var e = t.content_type,
          r = t.limit,
          a = void 0 === r ? 100 : r,
          o = t.skip,
          s = void 0 === o ? 0 : o,
          c = t.order,
          u = (0, l.useState)(null),
          f = u[0],
          d = u[1];
        return (
          (0, l.useEffect)(
            function () {
              function t() {
                return (
                  (t = (0, n.Z)(
                    i().mark(function t() {
                      var r;
                      return i().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2),
                                p.getEntries({
                                  content_type: e,
                                  limit: a,
                                  skip: s,
                                  order: c,
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
            [e, a, s, c]
          ),
          f
        );
      };
    },
    5660: function () {},
  },
]);

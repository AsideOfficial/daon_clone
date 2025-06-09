"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7295],
  {
    3605: function (e, t, n) {
      var E,
        r = n(5170),
        L = (E = r) && "object" === typeof E && "default" in E ? E.default : E,
        u = function () {
          return (
            (u =
              Object.assign ||
              function (e) {
                for (var t, n = 1, E = arguments.length; n < E; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }),
            u.apply(this, arguments)
          );
        },
        S =
          ("function" === typeof SuppressedError && SuppressedError,
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof window
            ? window
            : "undefined" !== typeof n.g
            ? n.g
            : "undefined" !== typeof self
            ? self
            : {});
      function O(e) {
        return e &&
          e.__esModule &&
          Object.prototype.hasOwnProperty.call(e, "default")
          ? e.default
          : e;
      }
      function _(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
      }
      var l = _(function (e, t) {
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BLOCKS = void 0),
          (function (e) {
            (e.DOCUMENT = "document"),
              (e.PARAGRAPH = "paragraph"),
              (e.HEADING_1 = "heading-1"),
              (e.HEADING_2 = "heading-2"),
              (e.HEADING_3 = "heading-3"),
              (e.HEADING_4 = "heading-4"),
              (e.HEADING_5 = "heading-5"),
              (e.HEADING_6 = "heading-6"),
              (e.OL_LIST = "ordered-list"),
              (e.UL_LIST = "unordered-list"),
              (e.LIST_ITEM = "list-item"),
              (e.HR = "hr"),
              (e.QUOTE = "blockquote"),
              (e.EMBEDDED_ENTRY = "embedded-entry-block"),
              (e.EMBEDDED_ASSET = "embedded-asset-block"),
              (e.EMBEDDED_RESOURCE = "embedded-resource-block"),
              (e.TABLE = "table"),
              (e.TABLE_ROW = "table-row"),
              (e.TABLE_CELL = "table-cell"),
              (e.TABLE_HEADER_CELL = "table-header-cell");
          })(n || (t.BLOCKS = n = {}));
      });
      O(l);
      l.BLOCKS;
      var o = _(function (e, t) {
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.INLINES = void 0),
          (function (e) {
            (e.HYPERLINK = "hyperlink"),
              (e.ENTRY_HYPERLINK = "entry-hyperlink"),
              (e.ASSET_HYPERLINK = "asset-hyperlink"),
              (e.RESOURCE_HYPERLINK = "resource-hyperlink"),
              (e.EMBEDDED_ENTRY = "embedded-entry-inline"),
              (e.EMBEDDED_RESOURCE = "embedded-resource-inline");
          })(n || (t.INLINES = n = {}));
      });
      O(o);
      o.INLINES;
      var i = _(function (e, t) {
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e) {
            (e.BOLD = "bold"),
              (e.ITALIC = "italic"),
              (e.UNDERLINE = "underline"),
              (e.CODE = "code"),
              (e.SUPERSCRIPT = "superscript"),
              (e.SUBSCRIPT = "subscript");
          })(n || (n = {})),
          (t.default = n);
      });
      O(i);
      var B = _(function (e, t) {
        var n,
          E =
            (S && S.__spreadArray) ||
            function (e, t, n) {
              if (n || 2 === arguments.length)
                for (var E, r = 0, L = t.length; r < L; r++)
                  (!E && r in t) ||
                    (E || (E = Array.prototype.slice.call(t, 0, r)),
                    (E[r] = t[r]));
              return e.concat(E || Array.prototype.slice.call(t));
            },
          r =
            (S && S.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.V1_MARKS =
            t.V1_NODE_TYPES =
            t.TEXT_CONTAINERS =
            t.HEADINGS =
            t.CONTAINERS =
            t.VOID_BLOCKS =
            t.TABLE_BLOCKS =
            t.LIST_ITEM_BLOCKS =
            t.TOP_LEVEL_BLOCKS =
              void 0);
        var L = r(i);
        (t.TOP_LEVEL_BLOCKS = [
          l.BLOCKS.PARAGRAPH,
          l.BLOCKS.HEADING_1,
          l.BLOCKS.HEADING_2,
          l.BLOCKS.HEADING_3,
          l.BLOCKS.HEADING_4,
          l.BLOCKS.HEADING_5,
          l.BLOCKS.HEADING_6,
          l.BLOCKS.OL_LIST,
          l.BLOCKS.UL_LIST,
          l.BLOCKS.HR,
          l.BLOCKS.QUOTE,
          l.BLOCKS.EMBEDDED_ENTRY,
          l.BLOCKS.EMBEDDED_ASSET,
          l.BLOCKS.EMBEDDED_RESOURCE,
          l.BLOCKS.TABLE,
        ]),
          (t.LIST_ITEM_BLOCKS = [
            l.BLOCKS.PARAGRAPH,
            l.BLOCKS.HEADING_1,
            l.BLOCKS.HEADING_2,
            l.BLOCKS.HEADING_3,
            l.BLOCKS.HEADING_4,
            l.BLOCKS.HEADING_5,
            l.BLOCKS.HEADING_6,
            l.BLOCKS.OL_LIST,
            l.BLOCKS.UL_LIST,
            l.BLOCKS.HR,
            l.BLOCKS.QUOTE,
            l.BLOCKS.EMBEDDED_ENTRY,
            l.BLOCKS.EMBEDDED_ASSET,
            l.BLOCKS.EMBEDDED_RESOURCE,
          ]),
          (t.TABLE_BLOCKS = [
            l.BLOCKS.TABLE,
            l.BLOCKS.TABLE_ROW,
            l.BLOCKS.TABLE_CELL,
            l.BLOCKS.TABLE_HEADER_CELL,
          ]),
          (t.VOID_BLOCKS = [
            l.BLOCKS.HR,
            l.BLOCKS.EMBEDDED_ENTRY,
            l.BLOCKS.EMBEDDED_ASSET,
            l.BLOCKS.EMBEDDED_RESOURCE,
          ]),
          (t.CONTAINERS =
            (((n = {})[l.BLOCKS.OL_LIST] = [l.BLOCKS.LIST_ITEM]),
            (n[l.BLOCKS.UL_LIST] = [l.BLOCKS.LIST_ITEM]),
            (n[l.BLOCKS.LIST_ITEM] = t.LIST_ITEM_BLOCKS),
            (n[l.BLOCKS.QUOTE] = [l.BLOCKS.PARAGRAPH]),
            (n[l.BLOCKS.TABLE] = [l.BLOCKS.TABLE_ROW]),
            (n[l.BLOCKS.TABLE_ROW] = [
              l.BLOCKS.TABLE_CELL,
              l.BLOCKS.TABLE_HEADER_CELL,
            ]),
            (n[l.BLOCKS.TABLE_CELL] = [l.BLOCKS.PARAGRAPH]),
            (n[l.BLOCKS.TABLE_HEADER_CELL] = [l.BLOCKS.PARAGRAPH]),
            n)),
          (t.HEADINGS = [
            l.BLOCKS.HEADING_1,
            l.BLOCKS.HEADING_2,
            l.BLOCKS.HEADING_3,
            l.BLOCKS.HEADING_4,
            l.BLOCKS.HEADING_5,
            l.BLOCKS.HEADING_6,
          ]),
          (t.TEXT_CONTAINERS = E([l.BLOCKS.PARAGRAPH], t.HEADINGS, !0)),
          (t.V1_NODE_TYPES = [
            l.BLOCKS.DOCUMENT,
            l.BLOCKS.PARAGRAPH,
            l.BLOCKS.HEADING_1,
            l.BLOCKS.HEADING_2,
            l.BLOCKS.HEADING_3,
            l.BLOCKS.HEADING_4,
            l.BLOCKS.HEADING_5,
            l.BLOCKS.HEADING_6,
            l.BLOCKS.OL_LIST,
            l.BLOCKS.UL_LIST,
            l.BLOCKS.LIST_ITEM,
            l.BLOCKS.HR,
            l.BLOCKS.QUOTE,
            l.BLOCKS.EMBEDDED_ENTRY,
            l.BLOCKS.EMBEDDED_ASSET,
            o.INLINES.HYPERLINK,
            o.INLINES.ENTRY_HYPERLINK,
            o.INLINES.ASSET_HYPERLINK,
            o.INLINES.EMBEDDED_ENTRY,
            "text",
          ]),
          (t.V1_MARKS = [
            L.default.BOLD,
            L.default.CODE,
            L.default.ITALIC,
            L.default.UNDERLINE,
          ]);
      });
      O(B);
      B.V1_MARKS,
        B.V1_NODE_TYPES,
        B.TEXT_CONTAINERS,
        B.HEADINGS,
        B.CONTAINERS,
        B.VOID_BLOCKS,
        B.TABLE_BLOCKS,
        B.LIST_ITEM_BLOCKS,
        B.TOP_LEVEL_BLOCKS;
      var a = _(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
      });
      O(a);
      var C = _(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
      });
      O(C);
      var c = _(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = {
          nodeType: l.BLOCKS.DOCUMENT,
          data: {},
          content: [
            {
              nodeType: l.BLOCKS.PARAGRAPH,
              data: {},
              content: [{ nodeType: "text", value: "", marks: [], data: {} }],
            },
          ],
        };
        t.default = n;
      });
      O(c);
      var D = _(function (e, t) {
        function n(e, t) {
          for (var n = 0, E = Object.keys(e); n < E.length; n++) {
            if (t === e[E[n]]) return !0;
          }
          return !1;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isText = t.isBlock = t.isInline = void 0),
          (t.isInline = function (e) {
            return n(o.INLINES, e.nodeType);
          }),
          (t.isBlock = function (e) {
            return n(l.BLOCKS, e.nodeType);
          }),
          (t.isText = function (e) {
            return "text" === e.nodeType;
          });
      });
      O(D);
      D.isText, D.isBlock, D.isInline;
      var I = _(function (e, t) {
        var n =
            (S && S.__createBinding) ||
            (Object.create
              ? function (e, t, n, E) {
                  void 0 === E && (E = n);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  (r &&
                    !("get" in r
                      ? !t.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, E, r);
                }
              : function (e, t, n, E) {
                  void 0 === E && (E = n), (e[E] = t[n]);
                }),
          E =
            (S && S.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          r =
            (S && S.__exportStar) ||
            function (e, t) {
              for (var E in e)
                "default" === E ||
                  Object.prototype.hasOwnProperty.call(t, E) ||
                  n(t, e, E);
            },
          L =
            (S && S.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r);
              return E(t, e), t;
            },
          u =
            (S && S.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.helpers =
            t.EMPTY_DOCUMENT =
            t.MARKS =
            t.INLINES =
            t.BLOCKS =
              void 0),
          Object.defineProperty(t, "BLOCKS", {
            enumerable: !0,
            get: function () {
              return l.BLOCKS;
            },
          }),
          Object.defineProperty(t, "INLINES", {
            enumerable: !0,
            get: function () {
              return o.INLINES;
            },
          }),
          Object.defineProperty(t, "MARKS", {
            enumerable: !0,
            get: function () {
              return u(i).default;
            },
          }),
          r(B, t),
          r(a, t),
          r(C, t),
          Object.defineProperty(t, "EMPTY_DOCUMENT", {
            enumerable: !0,
            get: function () {
              return u(c).default;
            },
          });
        var O = L(D);
        t.helpers = O;
      });
      O(I);
      var T,
        d,
        A = I.helpers,
        K = (I.EMPTY_DOCUMENT, I.MARKS),
        N = I.INLINES,
        f = I.BLOCKS;
      function R(e, t) {
        return e.map(function (e, n) {
          return (
            (E = s(e, t)),
            (L = n),
            r.isValidElement(E) && null === E.key
              ? r.cloneElement(E, { key: L })
              : E
          );
          var E, L;
        });
      }
      function s(e, t) {
        var n = t.renderNode,
          E = t.renderMark,
          r = t.renderText,
          u = t.preserveWhitespace;
        if (A.isText(e)) {
          var S = r ? r(e.value) : e.value;
          if (u) {
            var O = (S = S.replace(/ {2,}/g, function (e) {
                return "&nbsp;".repeat(e.length);
              })).split("\n"),
              _ = [];
            O.forEach(function (e, t) {
              _.push(e),
                t !== O.length - 1 && _.push(L.createElement("br", null));
            }),
              (S = _);
          }
          return e.marks.reduce(function (e, t) {
            return E[t.type] ? E[t.type](e) : e;
          }, S);
        }
        var l = R(e.content, t);
        return e.nodeType && n[e.nodeType]
          ? n[e.nodeType](e, l)
          : L.createElement(L.Fragment, null, l);
      }
      var p =
          (((T = {})[f.DOCUMENT] = function (e, t) {
            return t;
          }),
          (T[f.PARAGRAPH] = function (e, t) {
            return L.createElement("p", null, t);
          }),
          (T[f.HEADING_1] = function (e, t) {
            return L.createElement("h1", null, t);
          }),
          (T[f.HEADING_2] = function (e, t) {
            return L.createElement("h2", null, t);
          }),
          (T[f.HEADING_3] = function (e, t) {
            return L.createElement("h3", null, t);
          }),
          (T[f.HEADING_4] = function (e, t) {
            return L.createElement("h4", null, t);
          }),
          (T[f.HEADING_5] = function (e, t) {
            return L.createElement("h5", null, t);
          }),
          (T[f.HEADING_6] = function (e, t) {
            return L.createElement("h6", null, t);
          }),
          (T[f.EMBEDDED_ENTRY] = function (e, t) {
            return L.createElement("div", null, t);
          }),
          (T[f.EMBEDDED_RESOURCE] = function (e, t) {
            return L.createElement("div", null, t);
          }),
          (T[f.UL_LIST] = function (e, t) {
            return L.createElement("ul", null, t);
          }),
          (T[f.OL_LIST] = function (e, t) {
            return L.createElement("ol", null, t);
          }),
          (T[f.LIST_ITEM] = function (e, t) {
            return L.createElement("li", null, t);
          }),
          (T[f.QUOTE] = function (e, t) {
            return L.createElement("blockquote", null, t);
          }),
          (T[f.HR] = function () {
            return L.createElement("hr", null);
          }),
          (T[f.TABLE] = function (e, t) {
            return L.createElement(
              "table",
              null,
              L.createElement("tbody", null, t)
            );
          }),
          (T[f.TABLE_ROW] = function (e, t) {
            return L.createElement("tr", null, t);
          }),
          (T[f.TABLE_HEADER_CELL] = function (e, t) {
            return L.createElement("th", null, t);
          }),
          (T[f.TABLE_CELL] = function (e, t) {
            return L.createElement("td", null, t);
          }),
          (T[N.ASSET_HYPERLINK] = function (e) {
            return P(N.ASSET_HYPERLINK, e);
          }),
          (T[N.ENTRY_HYPERLINK] = function (e) {
            return P(N.ENTRY_HYPERLINK, e);
          }),
          (T[N.RESOURCE_HYPERLINK] = function (e) {
            return M(N.RESOURCE_HYPERLINK, e);
          }),
          (T[N.EMBEDDED_ENTRY] = function (e) {
            return P(N.EMBEDDED_ENTRY, e);
          }),
          (T[N.EMBEDDED_RESOURCE] = function (e, t) {
            return M(N.EMBEDDED_RESOURCE, e);
          }),
          (T[N.HYPERLINK] = function (e, t) {
            return L.createElement("a", { href: e.data.uri }, t);
          }),
          T),
        H =
          (((d = {})[K.BOLD] = function (e) {
            return L.createElement("b", null, e);
          }),
          (d[K.ITALIC] = function (e) {
            return L.createElement("i", null, e);
          }),
          (d[K.UNDERLINE] = function (e) {
            return L.createElement("u", null, e);
          }),
          (d[K.CODE] = function (e) {
            return L.createElement("code", null, e);
          }),
          (d[K.SUPERSCRIPT] = function (e) {
            return L.createElement("sup", null, e);
          }),
          (d[K.SUBSCRIPT] = function (e) {
            return L.createElement("sub", null, e);
          }),
          d);
      function P(e, t) {
        return L.createElement(
          "span",
          { key: t.data.target.sys.id },
          "type: ",
          t.nodeType,
          " id: ",
          t.data.target.sys.id
        );
      }
      function M(e, t) {
        return L.createElement(
          "span",
          { key: t.data.target.sys.urn },
          "type: ",
          t.nodeType,
          " urn: ",
          t.data.target.sys.urn
        );
      }
      t.h = function (e, t) {
        return (
          void 0 === t && (t = {}),
          e
            ? s(e, {
                renderNode: u(u({}, p), t.renderNode),
                renderMark: u(u({}, H), t.renderMark),
                renderText: t.renderText,
                preserveWhitespace: t.preserveWhitespace,
              })
            : null
        );
      };
    },
    3821: function (e, t) {
      var n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BLOCKS = void 0),
        (function (e) {
          (e.DOCUMENT = "document"),
            (e.PARAGRAPH = "paragraph"),
            (e.HEADING_1 = "heading-1"),
            (e.HEADING_2 = "heading-2"),
            (e.HEADING_3 = "heading-3"),
            (e.HEADING_4 = "heading-4"),
            (e.HEADING_5 = "heading-5"),
            (e.HEADING_6 = "heading-6"),
            (e.OL_LIST = "ordered-list"),
            (e.UL_LIST = "unordered-list"),
            (e.LIST_ITEM = "list-item"),
            (e.HR = "hr"),
            (e.QUOTE = "blockquote"),
            (e.EMBEDDED_ENTRY = "embedded-entry-block"),
            (e.EMBEDDED_ASSET = "embedded-asset-block"),
            (e.EMBEDDED_RESOURCE = "embedded-resource-block"),
            (e.TABLE = "table"),
            (e.TABLE_ROW = "table-row"),
            (e.TABLE_CELL = "table-cell"),
            (e.TABLE_HEADER_CELL = "table-header-cell");
        })(n || (t.BLOCKS = n = {}));
    },
    224: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var E = n(3821),
        r = {
          nodeType: E.BLOCKS.DOCUMENT,
          data: {},
          content: [
            {
              nodeType: E.BLOCKS.PARAGRAPH,
              data: {},
              content: [{ nodeType: "text", value: "", marks: [], data: {} }],
            },
          ],
        };
      t.default = r;
    },
    2860: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isText = t.isBlock = t.isInline = void 0);
      var E = n(3821),
        r = n(2918);
      function L(e, t) {
        for (var n = 0, E = Object.keys(e); n < E.length; n++) {
          if (t === e[E[n]]) return !0;
        }
        return !1;
      }
      (t.isInline = function (e) {
        return L(r.INLINES, e.nodeType);
      }),
        (t.isBlock = function (e) {
          return L(E.BLOCKS, e.nodeType);
        }),
        (t.isText = function (e) {
          return "text" === e.nodeType;
        });
    },
    1582: function (e, t, n) {
      var E =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, E) {
                void 0 === E && (E = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                (r &&
                  !("get" in r
                    ? !t.__esModule
                    : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }),
                  Object.defineProperty(e, E, r);
              }
            : function (e, t, n, E) {
                void 0 === E && (E = n), (e[E] = t[n]);
              }),
        r =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        L =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var n in e)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(t, n) ||
                E(t, e, n);
          },
        u =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  E(t, e, n);
            return r(t, e), t;
          },
        S =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.helpers =
          t.EMPTY_DOCUMENT =
          t.MARKS =
          t.INLINES =
          t.BLOCKS =
            void 0);
      var O = n(3821);
      Object.defineProperty(t, "BLOCKS", {
        enumerable: !0,
        get: function () {
          return O.BLOCKS;
        },
      });
      var _ = n(2918);
      Object.defineProperty(t, "INLINES", {
        enumerable: !0,
        get: function () {
          return _.INLINES;
        },
      });
      var l = n(9369);
      Object.defineProperty(t, "MARKS", {
        enumerable: !0,
        get: function () {
          return S(l).default;
        },
      }),
        L(n(6826), t),
        L(n(2140), t),
        L(n(5725), t);
      var o = n(224);
      Object.defineProperty(t, "EMPTY_DOCUMENT", {
        enumerable: !0,
        get: function () {
          return S(o).default;
        },
      });
      var i = u(n(2860));
      t.helpers = i;
    },
    2918: function (e, t) {
      var n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.INLINES = void 0),
        (function (e) {
          (e.HYPERLINK = "hyperlink"),
            (e.ENTRY_HYPERLINK = "entry-hyperlink"),
            (e.ASSET_HYPERLINK = "asset-hyperlink"),
            (e.RESOURCE_HYPERLINK = "resource-hyperlink"),
            (e.EMBEDDED_ENTRY = "embedded-entry-inline"),
            (e.EMBEDDED_RESOURCE = "embedded-resource-inline");
        })(n || (t.INLINES = n = {}));
    },
    9369: function (e, t) {
      var n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e) {
          (e.BOLD = "bold"),
            (e.ITALIC = "italic"),
            (e.UNDERLINE = "underline"),
            (e.CODE = "code"),
            (e.SUPERSCRIPT = "superscript"),
            (e.SUBSCRIPT = "subscript");
        })(n || (n = {})),
        (t.default = n);
    },
    5725: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    6826: function (e, t, n) {
      var E,
        r =
          (this && this.__spreadArray) ||
          function (e, t, n) {
            if (n || 2 === arguments.length)
              for (var E, r = 0, L = t.length; r < L; r++)
                (!E && r in t) ||
                  (E || (E = Array.prototype.slice.call(t, 0, r)),
                  (E[r] = t[r]));
            return e.concat(E || Array.prototype.slice.call(t));
          },
        L =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.V1_MARKS =
          t.V1_NODE_TYPES =
          t.TEXT_CONTAINERS =
          t.HEADINGS =
          t.CONTAINERS =
          t.VOID_BLOCKS =
          t.TABLE_BLOCKS =
          t.LIST_ITEM_BLOCKS =
          t.TOP_LEVEL_BLOCKS =
            void 0);
      var u = n(3821),
        S = n(2918),
        O = L(n(9369));
      (t.TOP_LEVEL_BLOCKS = [
        u.BLOCKS.PARAGRAPH,
        u.BLOCKS.HEADING_1,
        u.BLOCKS.HEADING_2,
        u.BLOCKS.HEADING_3,
        u.BLOCKS.HEADING_4,
        u.BLOCKS.HEADING_5,
        u.BLOCKS.HEADING_6,
        u.BLOCKS.OL_LIST,
        u.BLOCKS.UL_LIST,
        u.BLOCKS.HR,
        u.BLOCKS.QUOTE,
        u.BLOCKS.EMBEDDED_ENTRY,
        u.BLOCKS.EMBEDDED_ASSET,
        u.BLOCKS.EMBEDDED_RESOURCE,
        u.BLOCKS.TABLE,
      ]),
        (t.LIST_ITEM_BLOCKS = [
          u.BLOCKS.PARAGRAPH,
          u.BLOCKS.HEADING_1,
          u.BLOCKS.HEADING_2,
          u.BLOCKS.HEADING_3,
          u.BLOCKS.HEADING_4,
          u.BLOCKS.HEADING_5,
          u.BLOCKS.HEADING_6,
          u.BLOCKS.OL_LIST,
          u.BLOCKS.UL_LIST,
          u.BLOCKS.HR,
          u.BLOCKS.QUOTE,
          u.BLOCKS.EMBEDDED_ENTRY,
          u.BLOCKS.EMBEDDED_ASSET,
          u.BLOCKS.EMBEDDED_RESOURCE,
        ]),
        (t.TABLE_BLOCKS = [
          u.BLOCKS.TABLE,
          u.BLOCKS.TABLE_ROW,
          u.BLOCKS.TABLE_CELL,
          u.BLOCKS.TABLE_HEADER_CELL,
        ]),
        (t.VOID_BLOCKS = [
          u.BLOCKS.HR,
          u.BLOCKS.EMBEDDED_ENTRY,
          u.BLOCKS.EMBEDDED_ASSET,
          u.BLOCKS.EMBEDDED_RESOURCE,
        ]),
        (t.CONTAINERS =
          (((E = {})[u.BLOCKS.OL_LIST] = [u.BLOCKS.LIST_ITEM]),
          (E[u.BLOCKS.UL_LIST] = [u.BLOCKS.LIST_ITEM]),
          (E[u.BLOCKS.LIST_ITEM] = t.LIST_ITEM_BLOCKS),
          (E[u.BLOCKS.QUOTE] = [u.BLOCKS.PARAGRAPH]),
          (E[u.BLOCKS.TABLE] = [u.BLOCKS.TABLE_ROW]),
          (E[u.BLOCKS.TABLE_ROW] = [
            u.BLOCKS.TABLE_CELL,
            u.BLOCKS.TABLE_HEADER_CELL,
          ]),
          (E[u.BLOCKS.TABLE_CELL] = [u.BLOCKS.PARAGRAPH]),
          (E[u.BLOCKS.TABLE_HEADER_CELL] = [u.BLOCKS.PARAGRAPH]),
          E)),
        (t.HEADINGS = [
          u.BLOCKS.HEADING_1,
          u.BLOCKS.HEADING_2,
          u.BLOCKS.HEADING_3,
          u.BLOCKS.HEADING_4,
          u.BLOCKS.HEADING_5,
          u.BLOCKS.HEADING_6,
        ]),
        (t.TEXT_CONTAINERS = r([u.BLOCKS.PARAGRAPH], t.HEADINGS, !0)),
        (t.V1_NODE_TYPES = [
          u.BLOCKS.DOCUMENT,
          u.BLOCKS.PARAGRAPH,
          u.BLOCKS.HEADING_1,
          u.BLOCKS.HEADING_2,
          u.BLOCKS.HEADING_3,
          u.BLOCKS.HEADING_4,
          u.BLOCKS.HEADING_5,
          u.BLOCKS.HEADING_6,
          u.BLOCKS.OL_LIST,
          u.BLOCKS.UL_LIST,
          u.BLOCKS.LIST_ITEM,
          u.BLOCKS.HR,
          u.BLOCKS.QUOTE,
          u.BLOCKS.EMBEDDED_ENTRY,
          u.BLOCKS.EMBEDDED_ASSET,
          S.INLINES.HYPERLINK,
          S.INLINES.ENTRY_HYPERLINK,
          S.INLINES.ASSET_HYPERLINK,
          S.INLINES.EMBEDDED_ENTRY,
          "text",
        ]),
        (t.V1_MARKS = [
          O.default.BOLD,
          O.default.CODE,
          O.default.ITALIC,
          O.default.UNDERLINE,
        ]);
    },
    2140: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
  },
]);

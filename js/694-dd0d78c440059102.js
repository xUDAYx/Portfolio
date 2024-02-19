(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [694],
  {
    7174: function (e, t, r) {
      "use strict";
      r.d(t, {
        l: function () {
          return th;
        },
      });
      var n,
        o,
        a,
        i,
        l,
        s,
        c = r(959),
        u = r.t(c, 2),
        p = (function () {
          function StyleSheet(e) {
            var t = this;
            (this._insertTag = function (e) {
              var r;
              (r =
                0 === t.tags.length
                  ? t.insertionPoint
                    ? t.insertionPoint.nextSibling
                    : t.prepend
                    ? t.container.firstChild
                    : t.before
                  : t.tags[t.tags.length - 1].nextSibling),
                t.container.insertBefore(e, r),
                t.tags.push(e);
            }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.insertionPoint = e.insertionPoint),
              (this.before = null);
          }
          var e = StyleSheet.prototype;
          return (
            (e.hydrate = function (e) {
              e.forEach(this._insertTag);
            }),
            (e.insert = function (e) {
              if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
                var t;
                this._insertTag(
                  ((t = document.createElement("style")).setAttribute(
                    "data-emotion",
                    this.key
                  ),
                  void 0 !== this.nonce && t.setAttribute("nonce", this.nonce),
                  t.appendChild(document.createTextNode("")),
                  t.setAttribute("data-s", ""),
                  t)
                );
              }
              var r = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var n = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (var t = 0; t < document.styleSheets.length; t++)
                    if (document.styleSheets[t].ownerNode === e)
                      return document.styleSheets[t];
                })(r);
                try {
                  n.insertRule(e, n.cssRules.length);
                } catch (e) {}
              } else r.appendChild(document.createTextNode(e));
              this.ctr++;
            }),
            (e.flush = function () {
              this.tags.forEach(function (e) {
                return e.parentNode && e.parentNode.removeChild(e);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            StyleSheet
          );
        })(),
        d = Math.abs,
        f = String.fromCharCode,
        m = Object.assign;
      function Utility_replace(e, t, r) {
        return e.replace(t, r);
      }
      function indexof(e, t) {
        return e.indexOf(t);
      }
      function Utility_charat(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function Utility_substr(e, t, r) {
        return e.slice(t, r);
      }
      function Utility_strlen(e) {
        return e.length;
      }
      function Utility_append(e, t) {
        return t.push(e), e;
      }
      var y = 1,
        h = 1,
        g = 0,
        b = 0,
        v = 0,
        S = "";
      function node(e, t, r, n, o, a, i) {
        return {
          value: e,
          root: t,
          parent: r,
          type: n,
          props: o,
          children: a,
          line: y,
          column: h,
          length: i,
          return: "",
        };
      }
      function Tokenizer_copy(e, t) {
        return m(
          node("", null, null, "", null, null, 0),
          e,
          { length: -e.length },
          t
        );
      }
      function next() {
        return (
          (v = b < g ? Utility_charat(S, b++) : 0),
          h++,
          10 === v && ((h = 1), y++),
          v
        );
      }
      function peek() {
        return Utility_charat(S, b);
      }
      function token(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function alloc(e) {
        return (y = h = 1), (g = Utility_strlen((S = e))), (b = 0), [];
      }
      function delimit(e) {
        var t, r;
        return ((t = b - 1),
        (r = (function delimiter(e) {
          for (; next(); )
            switch (v) {
              case e:
                return b;
              case 34:
              case 39:
                34 !== e && 39 !== e && delimiter(v);
                break;
              case 40:
                41 === e && delimiter(e);
                break;
              case 92:
                next();
            }
          return b;
        })(91 === e ? e + 2 : 40 === e ? e + 1 : e)),
        Utility_substr(S, t, r)).trim();
      }
      var _ = "-ms-",
        k = "-moz-",
        x = "-webkit-",
        w = "comm",
        O = "rule",
        C = "decl",
        E = "@keyframes";
      function Serializer_serialize(e, t) {
        for (var r = "", n = e.length, o = 0; o < n; o++)
          r += t(e[o], o, e, t) || "";
        return r;
      }
      function stringify(e, t, r, n) {
        switch (e.type) {
          case "@layer":
            if (e.children.length) break;
          case "@import":
          case C:
            return (e.return = e.return || e.value);
          case w:
            return "";
          case E:
            return (e.return =
              e.value + "{" + Serializer_serialize(e.children, n) + "}");
          case O:
            e.value = e.props.join(",");
        }
        return Utility_strlen((r = Serializer_serialize(e.children, n)))
          ? (e.return = e.value + "{" + r + "}")
          : "";
      }
      function ruleset(e, t, r, n, o, a, i, l, s, c, u) {
        for (
          var p = o - 1,
            f = 0 === o ? a : [""],
            m = f.length,
            y = 0,
            h = 0,
            g = 0;
          y < n;
          ++y
        )
          for (
            var b = 0, v = Utility_substr(e, p + 1, (p = d((h = i[y])))), S = e;
            b < m;
            ++b
          )
            (S = (
              h > 0 ? f[b] + " " + v : Utility_replace(v, /&\f/g, f[b])
            ).trim()) && (s[g++] = S);
        return node(e, t, r, 0 === o ? O : l, s, c, u);
      }
      function declaration(e, t, r, n) {
        return node(
          e,
          t,
          r,
          C,
          Utility_substr(e, 0, n),
          Utility_substr(e, n + 1, -1),
          n
        );
      }
      var identifierWithPointTracking = function (e, t, r) {
          for (
            var n = 0, o = 0;
            (n = o),
              (o = peek()),
              38 === n && 12 === o && (t[r] = 1),
              !token(o);

          )
            next();
          return Utility_substr(S, e, b);
        },
        toRules = function (e, t) {
          var r = -1,
            n = 44;
          do
            switch (token(n)) {
              case 0:
                38 === n && 12 === peek() && (t[r] = 1),
                  (e[r] += identifierWithPointTracking(b - 1, t, r));
                break;
              case 2:
                e[r] += delimit(n);
                break;
              case 4:
                if (44 === n) {
                  (e[++r] = 58 === peek() ? "&\f" : ""), (t[r] = e[r].length);
                  break;
                }
              default:
                e[r] += f(n);
            }
          while ((n = next()));
          return e;
        },
        getRules = function (e, t) {
          var r;
          return (r = toRules(alloc(e), t)), (S = ""), r;
        },
        P = new WeakMap(),
        compat = function (e) {
          if ("rule" === e.type && e.parent && !(e.length < 1)) {
            for (
              var t = e.value,
                r = e.parent,
                n = e.column === r.column && e.line === r.line;
              "rule" !== r.type;

            )
              if (!(r = r.parent)) return;
            if (
              (1 !== e.props.length || 58 === t.charCodeAt(0) || P.get(r)) &&
              !n
            ) {
              P.set(e, !0);
              for (
                var o = [], a = getRules(t, o), i = r.props, l = 0, s = 0;
                l < a.length;
                l++
              )
                for (var c = 0; c < i.length; c++, s++)
                  e.props[s] = o[l]
                    ? a[l].replace(/&\f/g, i[c])
                    : i[c] + " " + a[l];
            }
          }
        },
        removeLabel = function (e) {
          if ("decl" === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) &&
              98 === t.charCodeAt(2) &&
              ((e.return = ""), (e.value = ""));
          }
        },
        j = [
          function (e, t, r, n) {
            if (e.length > -1 && !e.return)
              switch (e.type) {
                case C:
                  e.return = (function emotion_cache_browser_esm_prefix(e, t) {
                    switch (
                      45 ^ Utility_charat(e, 0)
                        ? (((((((t << 2) ^ Utility_charat(e, 0)) << 2) ^
                            Utility_charat(e, 1)) <<
                            2) ^
                            Utility_charat(e, 2)) <<
                            2) ^
                          Utility_charat(e, 3)
                        : 0
                    ) {
                      case 5103:
                        return x + "print-" + e + e;
                      case 5737:
                      case 4201:
                      case 3177:
                      case 3433:
                      case 1641:
                      case 4457:
                      case 2921:
                      case 5572:
                      case 6356:
                      case 5844:
                      case 3191:
                      case 6645:
                      case 3005:
                      case 6391:
                      case 5879:
                      case 5623:
                      case 6135:
                      case 4599:
                      case 4855:
                      case 4215:
                      case 6389:
                      case 5109:
                      case 5365:
                      case 5621:
                      case 3829:
                        return x + e + e;
                      case 5349:
                      case 4246:
                      case 4810:
                      case 6968:
                      case 2756:
                        return x + e + k + e + _ + e + e;
                      case 6828:
                      case 4268:
                        return x + e + _ + e + e;
                      case 6165:
                        return x + e + _ + "flex-" + e + e;
                      case 5187:
                        return (
                          x +
                          e +
                          Utility_replace(
                            e,
                            /(\w+).+(:[^]+)/,
                            x + "box-$1$2" + _ + "flex-$1$2"
                          ) +
                          e
                        );
                      case 5443:
                        return (
                          x +
                          e +
                          _ +
                          "flex-item-" +
                          Utility_replace(e, /flex-|-self/, "") +
                          e
                        );
                      case 4675:
                        return (
                          x +
                          e +
                          _ +
                          "flex-line-pack" +
                          Utility_replace(e, /align-content|flex-|-self/, "") +
                          e
                        );
                      case 5548:
                        return (
                          x +
                          e +
                          _ +
                          Utility_replace(e, "shrink", "negative") +
                          e
                        );
                      case 5292:
                        return (
                          x +
                          e +
                          _ +
                          Utility_replace(e, "basis", "preferred-size") +
                          e
                        );
                      case 6060:
                        return (
                          x +
                          "box-" +
                          Utility_replace(e, "-grow", "") +
                          x +
                          e +
                          _ +
                          Utility_replace(e, "grow", "positive") +
                          e
                        );
                      case 4554:
                        return (
                          x +
                          Utility_replace(
                            e,
                            /([^-])(transform)/g,
                            "$1" + x + "$2"
                          ) +
                          e
                        );
                      case 6187:
                        return (
                          Utility_replace(
                            Utility_replace(
                              Utility_replace(e, /(zoom-|grab)/, x + "$1"),
                              /(image-set)/,
                              x + "$1"
                            ),
                            e,
                            ""
                          ) + e
                        );
                      case 5495:
                      case 3959:
                        return Utility_replace(
                          e,
                          /(image-set\([^]*)/,
                          x + "$1$`$1"
                        );
                      case 4968:
                        return (
                          Utility_replace(
                            Utility_replace(
                              e,
                              /(.+:)(flex-)?(.*)/,
                              x + "box-pack:$3" + _ + "flex-pack:$3"
                            ),
                            /s.+-b[^;]+/,
                            "justify"
                          ) +
                          x +
                          e +
                          e
                        );
                      case 4095:
                      case 3583:
                      case 4068:
                      case 2532:
                        return (
                          Utility_replace(e, /(.+)-inline(.+)/, x + "$1$2") + e
                        );
                      case 8116:
                      case 7059:
                      case 5753:
                      case 5535:
                      case 5445:
                      case 5701:
                      case 4933:
                      case 4677:
                      case 5533:
                      case 5789:
                      case 5021:
                      case 4765:
                        if (Utility_strlen(e) - 1 - t > 6)
                          switch (Utility_charat(e, t + 1)) {
                            case 109:
                              if (45 !== Utility_charat(e, t + 4)) break;
                            case 102:
                              return (
                                Utility_replace(
                                  e,
                                  /(.+:)(.+)-([^]+)/,
                                  "$1" +
                                    x +
                                    "$2-$3$1" +
                                    k +
                                    (108 == Utility_charat(e, t + 3)
                                      ? "$3"
                                      : "$2-$3")
                                ) + e
                              );
                            case 115:
                              return ~indexof(e, "stretch")
                                ? emotion_cache_browser_esm_prefix(
                                    Utility_replace(
                                      e,
                                      "stretch",
                                      "fill-available"
                                    ),
                                    t
                                  ) + e
                                : e;
                          }
                        break;
                      case 4949:
                        if (115 !== Utility_charat(e, t + 1)) break;
                      case 6444:
                        switch (
                          Utility_charat(
                            e,
                            Utility_strlen(e) -
                              3 -
                              (~indexof(e, "!important") && 10)
                          )
                        ) {
                          case 107:
                            return Utility_replace(e, ":", ":" + x) + e;
                          case 101:
                            return (
                              Utility_replace(
                                e,
                                /(.+:)([^;!]+)(;|!.+)?/,
                                "$1" +
                                  x +
                                  (45 === Utility_charat(e, 14)
                                    ? "inline-"
                                    : "") +
                                  "box$3$1" +
                                  x +
                                  "$2$3$1" +
                                  _ +
                                  "$2box$3"
                              ) + e
                            );
                        }
                        break;
                      case 5936:
                        switch (Utility_charat(e, t + 11)) {
                          case 114:
                            return (
                              x +
                              e +
                              _ +
                              Utility_replace(e, /[svh]\w+-[tblr]{2}/, "tb") +
                              e
                            );
                          case 108:
                            return (
                              x +
                              e +
                              _ +
                              Utility_replace(
                                e,
                                /[svh]\w+-[tblr]{2}/,
                                "tb-rl"
                              ) +
                              e
                            );
                          case 45:
                            return (
                              x +
                              e +
                              _ +
                              Utility_replace(e, /[svh]\w+-[tblr]{2}/, "lr") +
                              e
                            );
                        }
                        return x + e + _ + e + e;
                    }
                    return e;
                  })(e.value, e.length);
                  break;
                case E:
                  return Serializer_serialize(
                    [
                      Tokenizer_copy(e, {
                        value: Utility_replace(e.value, "@", "@" + x),
                      }),
                    ],
                    n
                  );
                case O:
                  if (e.length)
                    return e.props
                      .map(function (t) {
                        var r;
                        switch (
                          ((r = t),
                          (r = /(::plac\w+|:read-\w+)/.exec(r)) ? r[0] : r)
                        ) {
                          case ":read-only":
                          case ":read-write":
                            return Serializer_serialize(
                              [
                                Tokenizer_copy(e, {
                                  props: [
                                    Utility_replace(
                                      t,
                                      /:(read-\w+)/,
                                      ":" + k + "$1"
                                    ),
                                  ],
                                }),
                              ],
                              n
                            );
                          case "::placeholder":
                            return Serializer_serialize(
                              [
                                Tokenizer_copy(e, {
                                  props: [
                                    Utility_replace(
                                      t,
                                      /:(plac\w+)/,
                                      ":" + x + "input-$1"
                                    ),
                                  ],
                                }),
                                Tokenizer_copy(e, {
                                  props: [
                                    Utility_replace(
                                      t,
                                      /:(plac\w+)/,
                                      ":" + k + "$1"
                                    ),
                                  ],
                                }),
                                Tokenizer_copy(e, {
                                  props: [
                                    Utility_replace(
                                      t,
                                      /:(plac\w+)/,
                                      _ + "input-$1"
                                    ),
                                  ],
                                }),
                              ],
                              n
                            );
                        }
                        return "";
                      })
                      .join("");
              }
          },
        ],
        createCache = function (e) {
          var t,
            r,
            n,
            o,
            a,
            i = e.key;
          if ("css" === i) {
            var l = document.querySelectorAll(
              "style[data-emotion]:not([data-s])"
            );
            Array.prototype.forEach.call(l, function (e) {
              -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
                (document.head.appendChild(e), e.setAttribute("data-s", ""));
            });
          }
          var s = e.stylisPlugins || j,
            c = {},
            u = [];
          (o = e.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + i + ' "]'),
              function (e) {
                for (
                  var t = e.getAttribute("data-emotion").split(" "), r = 1;
                  r < t.length;
                  r++
                )
                  c[t[r]] = !0;
                u.push(e);
              }
            );
          var d =
              ((r = (t = [compat, removeLabel].concat(s, [
                stringify,
                ((n = function (e) {
                  a.insert(e);
                }),
                function (e) {
                  !e.root && (e = e.return) && n(e);
                }),
              ])).length),
              function (e, n, o, a) {
                for (var i = "", l = 0; l < r; l++) i += t[l](e, n, o, a) || "";
                return i;
              }),
            stylis = function (e) {
              var t, r;
              return Serializer_serialize(
                ((r = (function parse(e, t, r, n, o, a, i, l, s) {
                  for (
                    var c,
                      u = 0,
                      p = 0,
                      d = i,
                      m = 0,
                      g = 0,
                      _ = 0,
                      k = 1,
                      x = 1,
                      O = 1,
                      C = 0,
                      E = "",
                      P = o,
                      j = a,
                      G = n,
                      N = E;
                    x;

                  )
                    switch (((_ = C), (C = next()))) {
                      case 40:
                        if (108 != _ && 58 == Utility_charat(N, d - 1)) {
                          -1 !=
                            indexof(
                              (N += Utility_replace(delimit(C), "&", "&\f")),
                              "&\f"
                            ) && (O = -1);
                          break;
                        }
                      case 34:
                      case 39:
                      case 91:
                        N += delimit(C);
                        break;
                      case 9:
                      case 10:
                      case 13:
                      case 32:
                        N += (function (e) {
                          for (; (v = peek()); )
                            if (v < 33) next();
                            else break;
                          return token(e) > 2 || token(v) > 3 ? "" : " ";
                        })(_);
                        break;
                      case 92:
                        N += (function (e, t) {
                          for (
                            var r;
                            --t &&
                            next() &&
                            !(v < 48) &&
                            !(v > 102) &&
                            (!(v > 57) || !(v < 65)) &&
                            (!(v > 70) || !(v < 97));

                          );
                          return (
                            (r = b + (t < 6 && 32 == peek() && 32 == next())),
                            Utility_substr(S, e, r)
                          );
                        })(b - 1, 7);
                        continue;
                      case 47:
                        switch (peek()) {
                          case 42:
                          case 47:
                            Utility_append(
                              node(
                                (c = (function (e, t) {
                                  for (; next(); )
                                    if (e + v === 57) break;
                                    else if (e + v === 84 && 47 === peek())
                                      break;
                                  return (
                                    "/*" +
                                    Utility_substr(S, t, b - 1) +
                                    "*" +
                                    f(47 === e ? e : next())
                                  );
                                })(next(), b)),
                                t,
                                r,
                                w,
                                f(v),
                                Utility_substr(c, 2, -2),
                                0
                              ),
                              s
                            );
                            break;
                          default:
                            N += "/";
                        }
                        break;
                      case 123 * k:
                        l[u++] = Utility_strlen(N) * O;
                      case 125 * k:
                      case 59:
                      case 0:
                        switch (C) {
                          case 0:
                          case 125:
                            x = 0;
                          case 59 + p:
                            -1 == O && (N = Utility_replace(N, /\f/g, "")),
                              g > 0 &&
                                Utility_strlen(N) - d &&
                                Utility_append(
                                  g > 32
                                    ? declaration(N + ";", n, r, d - 1)
                                    : declaration(
                                        Utility_replace(N, " ", "") + ";",
                                        n,
                                        r,
                                        d - 2
                                      ),
                                  s
                                );
                            break;
                          case 59:
                            N += ";";
                          default:
                            if (
                              (Utility_append(
                                (G = ruleset(
                                  N,
                                  t,
                                  r,
                                  u,
                                  p,
                                  o,
                                  l,
                                  E,
                                  (P = []),
                                  (j = []),
                                  d
                                )),
                                a
                              ),
                              123 === C)
                            ) {
                              if (0 === p) parse(N, t, G, G, P, a, d, l, j);
                              else
                                switch (
                                  99 === m && 110 === Utility_charat(N, 3)
                                    ? 100
                                    : m
                                ) {
                                  case 100:
                                  case 108:
                                  case 109:
                                  case 115:
                                    parse(
                                      e,
                                      G,
                                      G,
                                      n &&
                                        Utility_append(
                                          ruleset(
                                            e,
                                            G,
                                            G,
                                            0,
                                            0,
                                            o,
                                            l,
                                            E,
                                            o,
                                            (P = []),
                                            d
                                          ),
                                          j
                                        ),
                                      o,
                                      j,
                                      d,
                                      l,
                                      n ? P : j
                                    );
                                    break;
                                  default:
                                    parse(N, G, G, G, [""], j, 0, l, j);
                                }
                            }
                        }
                        (u = p = g = 0), (k = O = 1), (E = N = ""), (d = i);
                        break;
                      case 58:
                        (d = 1 + Utility_strlen(N)), (g = _);
                      default:
                        if (k < 1) {
                          if (123 == C) --k;
                          else if (
                            125 == C &&
                            0 == k++ &&
                            125 ==
                              ((v = b > 0 ? Utility_charat(S, --b) : 0),
                              h--,
                              10 === v && ((h = 1), y--),
                              v)
                          )
                            continue;
                        }
                        switch (((N += f(C)), C * k)) {
                          case 38:
                            O = p > 0 ? 1 : ((N += "\f"), -1);
                            break;
                          case 44:
                            (l[u++] = (Utility_strlen(N) - 1) * O), (O = 1);
                            break;
                          case 64:
                            45 === peek() && (N += delimit(next())),
                              (m = peek()),
                              (p = d =
                                Utility_strlen(
                                  (E = N +=
                                    (function (e) {
                                      for (; !token(peek()); ) next();
                                      return Utility_substr(S, e, b);
                                    })(b))
                                )),
                              C++;
                            break;
                          case 45:
                            45 === _ && 2 == Utility_strlen(N) && (k = 0);
                        }
                    }
                  return a;
                })(
                  "",
                  null,
                  null,
                  null,
                  [""],
                  (t = alloc((t = e))),
                  0,
                  [0],
                  t
                )),
                (S = ""),
                r),
                d
              );
            },
            m = {
              key: i,
              sheet: new p({
                key: i,
                container: o,
                nonce: e.nonce,
                speedy: e.speedy,
                prepend: e.prepend,
                insertionPoint: e.insertionPoint,
              }),
              nonce: e.nonce,
              inserted: c,
              registered: {},
              insert: function (e, t, r, n) {
                (a = r),
                  stylis(e ? e + "{" + t.styles + "}" : t.styles),
                  n && (m.inserted[t.name] = !0);
              },
            };
          return m.sheet.hydrate(u), m;
        };
      function extends_extends() {
        return (extends_extends = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var weakMemoize = function (e) {
          var t = new WeakMap();
          return function (r) {
            if (t.has(r)) return t.get(r);
            var n = e(r);
            return t.set(r, n), n;
          };
        },
        G = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        N = /[A-Z]|^ms/g,
        T = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        isCustomProperty = function (e) {
          return 45 === e.charCodeAt(1);
        },
        isProcessableValue = function (e) {
          return null != e && "boolean" != typeof e;
        },
        $ =
          ((l = Object.create(null)),
          function (e) {
            return (
              void 0 === l[e] &&
                (l[e] = isCustomProperty(e)
                  ? e
                  : e.replace(N, "-$&").toLowerCase()),
              l[e]
            );
          }),
        processStyleValue = function (e, t) {
          switch (e) {
            case "animation":
            case "animationName":
              if ("string" == typeof t)
                return t.replace(T, function (e, t, r) {
                  return (s = { name: t, styles: r, next: s }), t;
                });
          }
          return 1 === G[e] ||
            isCustomProperty(e) ||
            "number" != typeof t ||
            0 === t
            ? t
            : t + "px";
        };
      function handleInterpolation(e, t, r) {
        if (null == r) return "";
        if (void 0 !== r.__emotion_styles) return r;
        switch (typeof r) {
          case "boolean":
            return "";
          case "object":
            if (1 === r.anim)
              return (s = { name: r.name, styles: r.styles, next: s }), r.name;
            if (void 0 !== r.styles) {
              var n = r.next;
              if (void 0 !== n)
                for (; void 0 !== n; )
                  (s = { name: n.name, styles: n.styles, next: s }),
                    (n = n.next);
              return r.styles + ";";
            }
            return (function (e, t, r) {
              var n = "";
              if (Array.isArray(r))
                for (var o = 0; o < r.length; o++)
                  n += handleInterpolation(e, t, r[o]) + ";";
              else
                for (var a in r) {
                  var i = r[a];
                  if ("object" != typeof i)
                    null != t && void 0 !== t[i]
                      ? (n += a + "{" + t[i] + "}")
                      : isProcessableValue(i) &&
                        (n += $(a) + ":" + processStyleValue(a, i) + ";");
                  else if (
                    Array.isArray(i) &&
                    "string" == typeof i[0] &&
                    (null == t || void 0 === t[i[0]])
                  )
                    for (var l = 0; l < i.length; l++)
                      isProcessableValue(i[l]) &&
                        (n += $(a) + ":" + processStyleValue(a, i[l]) + ";");
                  else {
                    var s = handleInterpolation(e, t, i);
                    switch (a) {
                      case "animation":
                      case "animationName":
                        n += $(a) + ":" + s + ";";
                        break;
                      default:
                        n += a + "{" + s + "}";
                    }
                  }
                }
              return n;
            })(e, t, r);
          case "function":
            if (void 0 !== e) {
              var o = s,
                a = r(e);
              return (s = o), handleInterpolation(e, t, a);
            }
        }
        if (null == t) return r;
        var i = t[r];
        return void 0 !== i ? i : r;
      }
      var I = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
        emotion_serialize_browser_esm_serializeStyles = function (e, t, r) {
          if (
            1 === e.length &&
            "object" == typeof e[0] &&
            null !== e[0] &&
            void 0 !== e[0].styles
          )
            return e[0];
          var n,
            o = !0,
            a = "";
          s = void 0;
          var i = e[0];
          null == i || void 0 === i.raw
            ? ((o = !1), (a += handleInterpolation(r, t, i)))
            : (a += i[0]);
          for (var l = 1; l < e.length; l++)
            (a += handleInterpolation(r, t, e[l])), o && (a += i[l]);
          I.lastIndex = 0;
          for (var c = ""; null !== (n = I.exec(a)); ) c += "-" + n[1];
          return {
            name:
              (function (e) {
                for (var t, r = 0, n = 0, o = e.length; o >= 4; ++n, o -= 4)
                  (t =
                    (65535 &
                      (t =
                        (255 & e.charCodeAt(n)) |
                        ((255 & e.charCodeAt(++n)) << 8) |
                        ((255 & e.charCodeAt(++n)) << 16) |
                        ((255 & e.charCodeAt(++n)) << 24))) *
                      1540483477 +
                    (((t >>> 16) * 59797) << 16)),
                    (t ^= t >>> 24),
                    (r =
                      ((65535 & t) * 1540483477 +
                        (((t >>> 16) * 59797) << 16)) ^
                      ((65535 & r) * 1540483477 +
                        (((r >>> 16) * 59797) << 16)));
                switch (o) {
                  case 3:
                    r ^= (255 & e.charCodeAt(n + 2)) << 16;
                  case 2:
                    r ^= (255 & e.charCodeAt(n + 1)) << 8;
                  case 1:
                    (r ^= 255 & e.charCodeAt(n)),
                      (r =
                        (65535 & r) * 1540483477 +
                        (((r >>> 16) * 59797) << 16));
                }
                return (
                  (r ^= r >>> 13),
                  (
                    ((r =
                      (65535 & r) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
                      (r >>> 15)) >>>
                    0
                  ).toString(36)
                );
              })(a) + c,
            styles: a,
            next: s,
          };
        },
        U =
          (!!u.useInsertionEffect && u.useInsertionEffect) || c.useLayoutEffect,
        V = c.createContext(
          "undefined" != typeof HTMLElement ? createCache({ key: "css" }) : null
        );
      V.Provider;
      var R = c.createContext({}),
        emotion_utils_browser_esm_registerStyles = function (e, t, r) {
          var n = e.key + "-" + t.name;
          !1 === r &&
            void 0 === e.registered[n] &&
            (e.registered[n] = t.styles);
        },
        emotion_utils_browser_esm_insertStyles = function (e, t, r) {
          emotion_utils_browser_esm_registerStyles(e, t, r);
          var n = e.key + "-" + t.name;
          if (void 0 === e.inserted[t.name]) {
            var o = t;
            do e.insert(t === o ? "." + n : "", o, e.sheet, !0), (o = o.next);
            while (void 0 !== o);
          }
        };
      r(2535),
        (a = function (e, t) {
          var r = emotion_serialize_browser_esm_serializeStyles(
              [e.styles],
              void 0,
              c.useContext(R)
            ),
            n = c.useRef();
          return (
            U(
              function () {
                var e = t.key + "-global",
                  o = new t.sheet.constructor({
                    key: e,
                    nonce: t.sheet.nonce,
                    container: t.sheet.container,
                    speedy: t.sheet.isSpeedy,
                  }),
                  a = !1,
                  i = document.querySelector(
                    'style[data-emotion="' + e + " " + r.name + '"]'
                  );
                return (
                  t.sheet.tags.length && (o.before = t.sheet.tags[0]),
                  null !== i &&
                    ((a = !0),
                    i.setAttribute("data-emotion", e),
                    o.hydrate([i])),
                  (n.current = [o, a]),
                  function () {
                    o.flush();
                  }
                );
              },
              [t]
            ),
            U(
              function () {
                var e = n.current,
                  o = e[0];
                if (e[1]) {
                  e[1] = !1;
                  return;
                }
                if (
                  (void 0 !== r.next &&
                    emotion_utils_browser_esm_insertStyles(t, r.next, !0),
                  o.tags.length)
                ) {
                  var a = o.tags[o.tags.length - 1].nextElementSibling;
                  (o.before = a), o.flush();
                }
                t.insert("", r, o, !1);
              },
              [t, r.name]
            ),
            null
          );
        });
      let M = {
        dark: [
          "#C1C2C5",
          "#A6A7AB",
          "#909296",
          "#5c5f66",
          "#373A40",
          "#2C2E33",
          "#25262b",
          "#1A1B1E",
          "#141517",
          "#101113",
        ],
        gray: [
          "#f8f9fa",
          "#f1f3f5",
          "#e9ecef",
          "#dee2e6",
          "#ced4da",
          "#adb5bd",
          "#868e96",
          "#495057",
          "#343a40",
          "#212529",
        ],
        red: [
          "#fff5f5",
          "#ffe3e3",
          "#ffc9c9",
          "#ffa8a8",
          "#ff8787",
          "#ff6b6b",
          "#fa5252",
          "#f03e3e",
          "#e03131",
          "#c92a2a",
        ],
        pink: [
          "#fff0f6",
          "#ffdeeb",
          "#fcc2d7",
          "#faa2c1",
          "#f783ac",
          "#f06595",
          "#e64980",
          "#d6336c",
          "#c2255c",
          "#a61e4d",
        ],
        grape: [
          "#f8f0fc",
          "#f3d9fa",
          "#eebefa",
          "#e599f7",
          "#da77f2",
          "#cc5de8",
          "#be4bdb",
          "#ae3ec9",
          "#9c36b5",
          "#862e9c",
        ],
        violet: [
          "#f3f0ff",
          "#e5dbff",
          "#d0bfff",
          "#b197fc",
          "#9775fa",
          "#845ef7",
          "#7950f2",
          "#7048e8",
          "#6741d9",
          "#5f3dc4",
        ],
        indigo: [
          "#edf2ff",
          "#dbe4ff",
          "#bac8ff",
          "#91a7ff",
          "#748ffc",
          "#5c7cfa",
          "#4c6ef5",
          "#4263eb",
          "#3b5bdb",
          "#364fc7",
        ],
        blue: [
          "#e7f5ff",
          "#d0ebff",
          "#a5d8ff",
          "#74c0fc",
          "#4dabf7",
          "#339af0",
          "#228be6",
          "#1c7ed6",
          "#1971c2",
          "#1864ab",
        ],
        cyan: [
          "#e3fafc",
          "#c5f6fa",
          "#99e9f2",
          "#66d9e8",
          "#3bc9db",
          "#22b8cf",
          "#15aabf",
          "#1098ad",
          "#0c8599",
          "#0b7285",
        ],
        teal: [
          "#e6fcf5",
          "#c3fae8",
          "#96f2d7",
          "#63e6be",
          "#38d9a9",
          "#20c997",
          "#12b886",
          "#0ca678",
          "#099268",
          "#087f5b",
        ],
        green: [
          "#ebfbee",
          "#d3f9d8",
          "#b2f2bb",
          "#8ce99a",
          "#69db7c",
          "#51cf66",
          "#40c057",
          "#37b24d",
          "#2f9e44",
          "#2b8a3e",
        ],
        lime: [
          "#f4fce3",
          "#e9fac8",
          "#d8f5a2",
          "#c0eb75",
          "#a9e34b",
          "#94d82d",
          "#82c91e",
          "#74b816",
          "#66a80f",
          "#5c940d",
        ],
        yellow: [
          "#fff9db",
          "#fff3bf",
          "#ffec99",
          "#ffe066",
          "#ffd43b",
          "#fcc419",
          "#fab005",
          "#f59f00",
          "#f08c00",
          "#e67700",
        ],
        orange: [
          "#fff4e6",
          "#ffe8cc",
          "#ffd8a8",
          "#ffc078",
          "#ffa94d",
          "#ff922b",
          "#fd7e14",
          "#f76707",
          "#e8590c",
          "#d9480f",
        ],
      };
      var L = Object.defineProperty,
        B = Object.getOwnPropertySymbols,
        D = Object.prototype.hasOwnProperty,
        W = Object.prototype.propertyIsEnumerable,
        __defNormalProp = (e, t, r) =>
          t in e
            ? L(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        __spreadValues = (e, t) => {
          for (var r in t || (t = {}))
            D.call(t, r) && __defNormalProp(e, r, t[r]);
          if (B)
            for (var r of B(t)) W.call(t, r) && __defNormalProp(e, r, t[r]);
          return e;
        };
      function primaryShade(e) {
        return (t) =>
          "number" == typeof e.primaryShade
            ? e.primaryShade
            : e.primaryShade[t || e.colorScheme];
      }
      function themeColor(e) {
        let t = primaryShade(e);
        return (r, n, o = !0, a = !0) => {
          if ("string" == typeof r && r.includes(".")) {
            let [t, o] = r.split("."),
              i = parseInt(o, 10);
            if (t in e.colors && i >= 0 && i < 10)
              return e.colors[t]["number" != typeof n || a ? i : n];
          }
          let i = "number" == typeof n ? n : t();
          return r in e.colors
            ? e.colors[r][i]
            : o
            ? e.colors[e.primaryColor][i]
            : r;
        };
      }
      function getGradientColorStops(e) {
        let t = "";
        for (let r = 1; r < e.length - 1; r += 1)
          t += `${e[r]} ${(r / (e.length - 1)) * 100}%, `;
        return `${e[0]} 0%, ${t}${e[e.length - 1]} 100%`;
      }
      function gradient(e) {
        let t = themeColor(e),
          r = primaryShade(e);
        return (n) => {
          let o = {
            from: (null == n ? void 0 : n.from) || e.defaultGradient.from,
            to: (null == n ? void 0 : n.to) || e.defaultGradient.to,
            deg: (null == n ? void 0 : n.deg) || e.defaultGradient.deg,
          };
          return `linear-gradient(${o.deg}deg, ${t(o.from, r(), !1)} 0%, ${t(
            o.to,
            r(),
            !1
          )} 100%)`;
        };
      }
      function createConverter(e) {
        return (t) => {
          if ("number" == typeof t) return `${t / 16}${e}`;
          if ("string" == typeof t) {
            let r = t.replace("px", "");
            if (!Number.isNaN(Number(r))) return `${Number(r) / 16}${e}`;
          }
          return t;
        };
      }
      let H = createConverter("rem"),
        F = createConverter("em");
      function getSize({ size: e, sizes: t, units: r }) {
        return e in t
          ? t[e]
          : "number" == typeof e
          ? "em" === r
            ? F(e)
            : H(e)
          : e || t.md;
      }
      function getBreakpointValue(e) {
        return "number" == typeof e
          ? e
          : "string" == typeof e && e.includes("rem")
          ? 16 * Number(e.replace("rem", ""))
          : "string" == typeof e && e.includes("em")
          ? 16 * Number(e.replace("em", ""))
          : Number(e);
      }
      function toRgba(e) {
        return /^#?([0-9A-F]{3}){1,2}$/i.test(e)
          ? (function (e) {
              let t = e.replace("#", "");
              if (3 === t.length) {
                let e = t.split("");
                t = [e[0], e[0], e[1], e[1], e[2], e[2]].join("");
              }
              let r = parseInt(t, 16);
              return {
                r: (r >> 16) & 255,
                g: (r >> 8) & 255,
                b: 255 & r,
                a: 1,
              };
            })(e)
          : e.startsWith("rgb")
          ? (function (e) {
              let [t, r, n, o] = e
                .replace(/[^0-9,.]/g, "")
                .split(",")
                .map(Number);
              return { r: t, g: r, b: n, a: o || 1 };
            })(e)
          : { r: 0, g: 0, b: 0, a: 1 };
      }
      function rgba(e, t) {
        if ("string" != typeof e || t > 1 || t < 0) return "rgba(0, 0, 0, 1)";
        if (e.startsWith("var(--")) return e;
        let { r, g: n, b: o } = toRgba(e);
        return `rgba(${r}, ${n}, ${o}, ${t})`;
      }
      let q = {
        fontStyles: function (e) {
          return () => ({ fontFamily: e.fontFamily || "sans-serif" });
        },
        themeColor: themeColor,
        focusStyles: function (e) {
          return (t) => ({
            WebkitTapHighlightColor: "transparent",
            [t || "&:focus"]: __spreadValues(
              {},
              "always" === e.focusRing || "auto" === e.focusRing
                ? e.focusRingStyles.styles(e)
                : e.focusRingStyles.resetStyles(e)
            ),
            [t
              ? t.replace(":focus", ":focus:not(:focus-visible)")
              : "&:focus:not(:focus-visible)"]: __spreadValues(
              {},
              "auto" === e.focusRing || "never" === e.focusRing
                ? e.focusRingStyles.resetStyles(e)
                : null
            ),
          });
        },
        linearGradient: function (e, ...t) {
          return `linear-gradient(${e}deg, ${getGradientColorStops(t)})`;
        },
        radialGradient: function (...e) {
          return `radial-gradient(circle, ${getGradientColorStops(e)})`;
        },
        smallerThan: function (e) {
          return (t) =>
            `@media (max-width: ${F(
              getBreakpointValue(getSize({ size: t, sizes: e.breakpoints })) - 1
            )})`;
        },
        largerThan: function (e) {
          return (t) =>
            `@media (min-width: ${F(
              getBreakpointValue(getSize({ size: t, sizes: e.breakpoints }))
            )})`;
        },
        rgba: rgba,
        cover: function (e = 0) {
          return {
            position: "absolute",
            top: H(e),
            right: H(e),
            left: H(e),
            bottom: H(e),
          };
        },
        darken: function (e, t) {
          if ("string" == typeof e && e.startsWith("var(--")) return e;
          let { r, g: n, b: o, a } = toRgba(e),
            i = 1 - t,
            dark = (e) => Math.round(e * i);
          return `rgba(${dark(r)}, ${dark(n)}, ${dark(o)}, ${a})`;
        },
        lighten: function (e, t) {
          if ("string" == typeof e && e.startsWith("var(--")) return e;
          let { r, g: n, b: o, a } = toRgba(e),
            light = (e) => Math.round(e + (255 - e) * t);
          return `rgba(${light(r)}, ${light(n)}, ${light(o)}, ${a})`;
        },
        radius: function (e) {
          return (t) => {
            if ("number" == typeof t) return H(t);
            let r =
              "number" == typeof e.defaultRadius
                ? e.defaultRadius
                : e.radius[e.defaultRadius] || e.defaultRadius;
            return e.radius[t] || t || r;
          };
        },
        variant: function (e) {
          let t = themeColor(e),
            r = primaryShade(e),
            n = gradient(e);
          return ({
            variant: o,
            color: a,
            gradient: i,
            primaryFallback: l,
          }) => {
            let s = (function (e, t) {
              if ("string" == typeof e && e.includes(".")) {
                let [r, n] = e.split("."),
                  o = parseInt(n, 10);
                if (r in t.colors && o >= 0 && o < 10)
                  return { isSplittedColor: !0, key: r, shade: o };
              }
              return { isSplittedColor: !1 };
            })(a, e);
            switch (o) {
              case "light":
                return {
                  border: "transparent",
                  background: rgba(
                    t(a, "dark" === e.colorScheme ? 8 : 0, l, !1),
                    "dark" === e.colorScheme ? 0.2 : 1
                  ),
                  color:
                    "dark" === a
                      ? "dark" === e.colorScheme
                        ? e.colors.dark[0]
                        : e.colors.dark[9]
                      : t(a, "dark" === e.colorScheme ? 2 : r("light")),
                  hover: rgba(
                    t(a, "dark" === e.colorScheme ? 7 : 1, l, !1),
                    "dark" === e.colorScheme ? 0.25 : 0.65
                  ),
                };
              case "subtle":
                return {
                  border: "transparent",
                  background: "transparent",
                  color:
                    "dark" === a
                      ? "dark" === e.colorScheme
                        ? e.colors.dark[0]
                        : e.colors.dark[9]
                      : t(a, "dark" === e.colorScheme ? 2 : r("light")),
                  hover: rgba(
                    t(a, "dark" === e.colorScheme ? 8 : 0, l, !1),
                    "dark" === e.colorScheme ? 0.2 : 1
                  ),
                };
              case "outline":
                return {
                  border: t(a, "dark" === e.colorScheme ? 5 : r("light")),
                  background: "transparent",
                  color: t(a, "dark" === e.colorScheme ? 5 : r("light")),
                  hover:
                    "dark" === e.colorScheme
                      ? rgba(t(a, 5, l, !1), 0.05)
                      : rgba(t(a, 0, l, !1), 0.35),
                };
              case "default":
                return {
                  border:
                    "dark" === e.colorScheme
                      ? e.colors.dark[4]
                      : e.colors.gray[4],
                  background:
                    "dark" === e.colorScheme ? e.colors.dark[6] : e.white,
                  color: "dark" === e.colorScheme ? e.white : e.black,
                  hover:
                    "dark" === e.colorScheme
                      ? e.colors.dark[5]
                      : e.colors.gray[0],
                };
              case "white":
                return {
                  border: "transparent",
                  background: e.white,
                  color: t(a, r()),
                  hover: null,
                };
              case "transparent":
                return {
                  border: "transparent",
                  color:
                    "dark" === a
                      ? "dark" === e.colorScheme
                        ? e.colors.dark[0]
                        : e.colors.dark[9]
                      : t(a, "dark" === e.colorScheme ? 2 : r("light")),
                  background: "transparent",
                  hover: null,
                };
              case "gradient":
                return {
                  background: n(i),
                  color: e.white,
                  border: "transparent",
                  hover: null,
                };
              default: {
                let n = r(),
                  o = s.isSplittedColor ? s.shade : n,
                  i = s.isSplittedColor ? s.key : a;
                return {
                  border: "transparent",
                  background: t(i, o, l),
                  color: e.white,
                  hover: t(i, 9 === o ? 8 : o + 1),
                };
              }
            }
          };
        },
        primaryShade: primaryShade,
        hover: function (e) {
          return {
            "@media (hover: hover)": { "&:hover": e },
            "@media (hover: none)": { "&:active": e },
          };
        },
        gradient: gradient,
        primaryColor: function (e) {
          return (t) => {
            let r = primaryShade(e)(t);
            return e.colors[e.primaryColor][r];
          };
        },
        placeholderStyles: function (e) {
          return () => ({
            userSelect: "none",
            color:
              "dark" === e.colorScheme ? e.colors.dark[3] : e.colors.gray[5],
          });
        },
        dimmed: function (e) {
          return () =>
            "dark" === e.colorScheme ? e.colors.dark[2] : e.colors.gray[6];
        },
      };
      var K = Object.defineProperty,
        Y = Object.defineProperties,
        J = Object.getOwnPropertyDescriptors,
        X = Object.getOwnPropertySymbols,
        Z = Object.prototype.hasOwnProperty,
        Q = Object.prototype.propertyIsEnumerable,
        attach_functions_defNormalProp = (e, t, r) =>
          t in e
            ? K(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      Object.keys(M);
      let ee =
        ((n = ((e, t) => {
          for (var r in t || (t = {}))
            Z.call(t, r) && attach_functions_defNormalProp(e, r, t[r]);
          if (X)
            for (var r of X(t))
              Q.call(t, r) && attach_functions_defNormalProp(e, r, t[r]);
          return e;
        })(
          {},
          (i = {
            dir: "ltr",
            primaryShade: { light: 6, dark: 8 },
            focusRing: "auto",
            loader: "oval",
            colorScheme: "light",
            white: "#fff",
            black: "#000",
            defaultRadius: "sm",
            transitionTimingFunction: "ease",
            colors: M,
            lineHeight: 1.55,
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
            fontFamilyMonospace:
              "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
            primaryColor: "blue",
            respectReducedMotion: !0,
            cursorType: "default",
            defaultGradient: { from: "indigo", to: "cyan", deg: 45 },
            shadows: {
              xs: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1)",
              sm: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 0.625rem 0.9375rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.4375rem 0.4375rem -0.3125rem",
              md: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.25rem 1.5625rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.625rem 0.625rem -0.3125rem",
              lg: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.75rem 1.4375rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 0.75rem 0.75rem -0.4375rem",
              xl: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 2.25rem 1.75rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 1.0625rem 1.0625rem -0.4375rem",
            },
            fontSizes: {
              xs: "0.75rem",
              sm: "0.875rem",
              md: "1rem",
              lg: "1.125rem",
              xl: "1.25rem",
            },
            radius: {
              xs: "0.125rem",
              sm: "0.25rem",
              md: "0.5rem",
              lg: "1rem",
              xl: "2rem",
            },
            spacing: {
              xs: "0.625rem",
              sm: "0.75rem",
              md: "1rem",
              lg: "1.25rem",
              xl: "1.5rem",
            },
            breakpoints: {
              xs: "36em",
              sm: "48em",
              md: "62em",
              lg: "75em",
              xl: "88em",
            },
            headings: {
              fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
              fontWeight: 700,
              sizes: {
                h1: {
                  fontSize: "2.125rem",
                  lineHeight: 1.3,
                  fontWeight: void 0,
                },
                h2: {
                  fontSize: "1.625rem",
                  lineHeight: 1.35,
                  fontWeight: void 0,
                },
                h3: {
                  fontSize: "1.375rem",
                  lineHeight: 1.4,
                  fontWeight: void 0,
                },
                h4: {
                  fontSize: "1.125rem",
                  lineHeight: 1.45,
                  fontWeight: void 0,
                },
                h5: { fontSize: "1rem", lineHeight: 1.5, fontWeight: void 0 },
                h6: {
                  fontSize: "0.875rem",
                  lineHeight: 1.5,
                  fontWeight: void 0,
                },
              },
            },
            other: {},
            components: {},
            activeStyles: { transform: "translateY(0.0625rem)" },
            datesLocale: "en",
            globalStyles: void 0,
            focusRingStyles: {
              styles: (e) => ({
                outlineOffset: "0.125rem",
                outline: `0.125rem solid ${
                  e.colors[e.primaryColor]["dark" === e.colorScheme ? 7 : 5]
                }`,
              }),
              resetStyles: () => ({ outline: "none" }),
              inputStyles: (e) => ({
                outline: "none",
                borderColor:
                  e.colors[e.primaryColor][
                    "object" == typeof e.primaryShade
                      ? e.primaryShade[e.colorScheme]
                      : e.primaryShade
                  ],
              }),
            },
          })
        )),
        (o = {
          fn: {
            fontStyles: q.fontStyles(i),
            themeColor: q.themeColor(i),
            focusStyles: q.focusStyles(i),
            largerThan: q.largerThan(i),
            smallerThan: q.smallerThan(i),
            radialGradient: q.radialGradient,
            linearGradient: q.linearGradient,
            gradient: q.gradient(i),
            rgba: q.rgba,
            cover: q.cover,
            lighten: q.lighten,
            darken: q.darken,
            primaryShade: q.primaryShade(i),
            radius: q.radius(i),
            variant: q.variant(i),
            hover: q.hover,
            primaryColor: q.primaryColor(i),
            placeholderStyles: q.placeholderStyles(i),
            dimmed: q.dimmed(i),
          },
        }),
        Y(n, J(o)));
      var et = Object.defineProperty,
        er = Object.defineProperties,
        en = Object.getOwnPropertyDescriptors,
        eo = Object.getOwnPropertySymbols,
        ea = Object.prototype.hasOwnProperty,
        ei = Object.prototype.propertyIsEnumerable,
        GlobalStyles_defNormalProp = (e, t, r) =>
          t in e
            ? et(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        el = Object.defineProperty;
      function filterProps(e) {
        return Object.keys(e).reduce(
          (t, r) => (void 0 !== e[r] && (t[r] = e[r]), t),
          {}
        );
      }
      Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable,
        H(1);
      var es = Object.defineProperty,
        ec = Object.getOwnPropertySymbols,
        eu = Object.prototype.hasOwnProperty,
        ep = Object.prototype.propertyIsEnumerable,
        MantineProvider_defNormalProp = (e, t, r) =>
          t in e
            ? es(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        MantineProvider_spreadValues = (e, t) => {
          for (var r in t || (t = {}))
            eu.call(t, r) && MantineProvider_defNormalProp(e, r, t[r]);
          if (ec)
            for (var r of ec(t))
              ep.call(t, r) && MantineProvider_defNormalProp(e, r, t[r]);
          return e;
        };
      let ed = (0, c.createContext)({ theme: ee });
      function useMantineTheme() {
        var e;
        return (null == (e = (0, c.useContext)(ed)) ? void 0 : e.theme) || ee;
      }
      function useMantineEmotionCache() {
        var e;
        return null == (e = (0, c.useContext)(ed)) ? void 0 : e.emotionCache;
      }
      function useComponentDefaultProps(e, t, r) {
        var n;
        let o = useMantineTheme(),
          a = null == (n = o.components[e]) ? void 0 : n.defaultProps,
          i = "function" == typeof a ? a(o) : a;
        return MantineProvider_spreadValues(
          MantineProvider_spreadValues(MantineProvider_spreadValues({}, t), i),
          filterProps(r)
        );
      }
      let ef = createCache({ key: "mantine", prepend: !0 });
      var em = Object.defineProperty,
        ey = Object.getOwnPropertySymbols,
        eh = Object.prototype.hasOwnProperty,
        eg = Object.prototype.propertyIsEnumerable,
        use_css_defNormalProp = (e, t, r) =>
          t in e
            ? em(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        use_css_spreadValues = (e, t) => {
          for (var r in t || (t = {}))
            eh.call(t, r) && use_css_defNormalProp(e, r, t[r]);
          if (ey)
            for (var r of ey(t))
              eg.call(t, r) && use_css_defNormalProp(e, r, t[r]);
          return e;
        };
      let { cssFactory: eb } = {
        cssFactory: function (e) {
          let { cache: t } = e,
            css = (...e) => {
              let { ref: r, args: n } = (function (e) {
                  let t;
                  if (1 !== e.length) return { args: e, ref: t };
                  let [r] = e;
                  if (!(r instanceof Object) || !("ref" in r))
                    return { args: e, ref: t };
                  t = r.ref;
                  let n = use_css_spreadValues({}, r);
                  return delete n.ref, { args: [n], ref: t };
                })(e),
                o = emotion_serialize_browser_esm_serializeStyles(
                  n,
                  t.registered
                );
              return (
                emotion_utils_browser_esm_insertStyles(t, o, !1),
                `${t.key}-${o.name}${void 0 === r ? "" : ` ${r}`}`
              );
            };
          return {
            css,
            cx: (...e) =>
              (function (e, t, r) {
                var n;
                let o = [],
                  a =
                    ((n = ""),
                    r.split(" ").forEach(function (t) {
                      void 0 !== e[t] ? o.push(e[t] + ";") : (n += t + " ");
                    }),
                    n);
                return o.length < 2 ? r : a + t(o);
              })(
                t.registered,
                css,
                (function () {
                  for (var e, t, r = 0, n = ""; r < arguments.length; )
                    (e = arguments[r++]) &&
                      (t = (function toVal(e) {
                        var t,
                          r,
                          n = "";
                        if ("string" == typeof e || "number" == typeof e)
                          n += e;
                        else if ("object" == typeof e) {
                          if (Array.isArray(e))
                            for (t = 0; t < e.length; t++)
                              e[t] &&
                                (r = toVal(e[t])) &&
                                (n && (n += " "), (n += r));
                          else for (t in e) e[t] && (n && (n += " "), (n += t));
                        }
                        return n;
                      })(e)) &&
                      (n && (n += " "), (n += t));
                  return n;
                })(e)
              ),
          };
        },
      };
      function useCss() {
        let e = (function () {
          let e = useMantineEmotionCache();
          return e || ef;
        })();
        return (function (e, t) {
          let r = (0, c.useRef)();
          return (
            (!r.current ||
              t.length !== r.current.prevDeps.length ||
              r.current.prevDeps.map((e, r) => e === t[r]).indexOf(!1) >= 0) &&
              (r.current = { v: e(), prevDeps: [...t] }),
            r.current.v
          );
        })(() => eb({ cache: e }), [e]);
      }
      var ev = Object.defineProperty,
        eS = Object.getOwnPropertySymbols,
        e_ = Object.prototype.hasOwnProperty,
        ek = Object.prototype.propertyIsEnumerable,
        create_styles_defNormalProp = (e, t, r) =>
          t in e
            ? ev(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        create_styles_spreadValues = (e, t) => {
          for (var r in t || (t = {}))
            e_.call(t, r) && create_styles_defNormalProp(e, r, t[r]);
          if (eS)
            for (var r of eS(t))
              ek.call(t, r) && create_styles_defNormalProp(e, r, t[r]);
          return e;
        };
      function assignAccStyles(e, t) {
        return (
          t &&
            Object.keys(t).forEach((r) => {
              e[r]
                ? (e[r] = create_styles_spreadValues(
                    create_styles_spreadValues({}, e[r]),
                    t[r]
                  ))
                : (e[r] = create_styles_spreadValues({}, t[r]));
            }),
          e
        );
      }
      function getStyles(e, t, r, n) {
        let extractStyles = (e) =>
          "function" == typeof e ? e(t, r || {}, n) : e || {};
        return Array.isArray(e)
          ? e
              .map((e) => extractStyles(e.styles))
              .reduce((e, t) => assignAccStyles(e, t), {})
          : extractStyles(e);
      }
      function createStyles(e) {
        let t = "function" == typeof e ? e : () => e;
        return function (e, r) {
          let n = useMantineTheme(),
            o = (function (e) {
              let t = useMantineTheme(),
                getStyles = (e) => {
                  var r, n, o, a;
                  return {
                    styles:
                      (null == (r = t.components[e]) ? void 0 : r.styles) || {},
                    classNames:
                      (null == (n = t.components[e]) ? void 0 : n.classNames) ||
                      {},
                    variants:
                      null == (o = t.components[e]) ? void 0 : o.variants,
                    sizes: null == (a = t.components[e]) ? void 0 : a.sizes,
                  };
                };
              return Array.isArray(e) ? e.map(getStyles) : [getStyles(e)];
            })(null == r ? void 0 : r.name),
            a = useMantineEmotionCache(),
            i = {
              variant: null == r ? void 0 : r.variant,
              size: null == r ? void 0 : r.size,
            },
            { css: l, cx: s } = useCss(),
            c = t(n, e, i),
            u = getStyles(null == r ? void 0 : r.styles, n, e, i),
            p = getStyles(o, n, e, i),
            d = (function ({
              ctx: e,
              theme: t,
              params: r,
              variant: n,
              size: o,
            }) {
              return e.reduce(
                (e, a) => (
                  a.variants &&
                    n in a.variants &&
                    assignAccStyles(
                      e,
                      a.variants[n](t, r, { variant: n, size: o })
                    ),
                  a.sizes &&
                    o in a.sizes &&
                    assignAccStyles(
                      e,
                      a.sizes[o](t, r, { variant: n, size: o })
                    ),
                  e
                ),
                {}
              );
            })({
              ctx: o,
              theme: n,
              params: e,
              variant: null == r ? void 0 : r.variant,
              size: null == r ? void 0 : r.size,
            }),
            f = Object.fromEntries(
              Object.keys(c).map((e) => {
                let t = s(
                  { [l(c[e])]: !(null == r ? void 0 : r.unstyled) },
                  l(d[e]),
                  l(p[e]),
                  l(u[e])
                );
                return [e, t];
              })
            );
          return {
            classes: (function ({
              cx: e,
              classes: t,
              context: r,
              classNames: n,
              name: o,
              cache: a,
            }) {
              let i = r.reduce(
                (e, t) => (
                  Object.keys(t.classNames).forEach((r) => {
                    "string" != typeof e[r]
                      ? (e[r] = `${t.classNames[r]}`)
                      : (e[r] = `${e[r]} ${t.classNames[r]}`);
                  }),
                  e
                ),
                {}
              );
              return Object.keys(t).reduce(
                (r, l) => (
                  (r[l] = e(
                    t[l],
                    i[l],
                    null != n && n[l],
                    Array.isArray(o)
                      ? o
                          .filter(Boolean)
                          .map(
                            (e) =>
                              `${
                                (null == a ? void 0 : a.key) || "mantine"
                              }-${e}-${l}`
                          )
                          .join(" ")
                      : o
                      ? `${(null == a ? void 0 : a.key) || "mantine"}-${o}-${l}`
                      : null
                  )),
                  r
                ),
                {}
              );
            })({
              cx: s,
              classes: f,
              context: o,
              classNames: null == r ? void 0 : r.classNames,
              name: null == r ? void 0 : r.name,
              cache: a,
            }),
            cx: s,
            theme: n,
          };
        };
      }
      var ex = Object.defineProperty,
        ew = Object.defineProperties,
        eO = Object.getOwnPropertyDescriptors,
        eC = Object.getOwnPropertySymbols,
        eE = Object.prototype.hasOwnProperty,
        eP = Object.prototype.propertyIsEnumerable,
        UnstyledButton_styles_defNormalProp = (e, t, r) =>
          t in e
            ? ex(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        UnstyledButton_styles_spreadValues = (e, t) => {
          for (var r in t || (t = {}))
            eE.call(t, r) && UnstyledButton_styles_defNormalProp(e, r, t[r]);
          if (eC)
            for (var r of eC(t))
              eP.call(t, r) && UnstyledButton_styles_defNormalProp(e, r, t[r]);
          return e;
        },
        UnstyledButton_styles_spreadProps = (e, t) => ew(e, eO(t)),
        ez = createStyles((e) => ({
          root: UnstyledButton_styles_spreadProps(
            UnstyledButton_styles_spreadValues(
              UnstyledButton_styles_spreadValues({}, e.fn.focusStyles()),
              e.fn.fontStyles()
            ),
            {
              cursor: "pointer",
              border: 0,
              padding: 0,
              appearance: "none",
              fontSize: e.fontSizes.md,
              backgroundColor: "transparent",
              textAlign: "left",
              color: "dark" === e.colorScheme ? e.colors.dark[0] : e.black,
              textDecoration: "none",
              boxSizing: "border-box",
            }
          ),
        })),
        eA = Object.getOwnPropertySymbols,
        ej = Object.prototype.hasOwnProperty,
        eG = Object.prototype.propertyIsEnumerable,
        __objRest = (e, t) => {
          var r = {};
          for (var n in e) ej.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && eA)
            for (var n of eA(e))
              0 > t.indexOf(n) && eG.call(e, n) && (r[n] = e[n]);
          return r;
        };
      let eN = ["-xs", "-sm", "-md", "-lg", "-xl"],
        eT = {
          identity: function (e) {
            return e;
          },
          color: function (e, t) {
            return "dimmed" === e
              ? "dark" === t.colorScheme
                ? t.colors.dark[2]
                : t.colors.gray[6]
              : t.fn.variant({
                  variant: "filled",
                  color: e,
                  primaryFallback: !1,
                }).background;
          },
          size: function (e) {
            return H(e);
          },
          fontSize: function (e, t) {
            return getSize({ size: e, sizes: t.fontSizes });
          },
          spacing: function (e, t) {
            return eN.includes(e)
              ? `calc(${getSize({
                  size: e.replace("-", ""),
                  sizes: t.spacing,
                })} * -1)`
              : getSize({ size: e, sizes: t.spacing });
          },
        },
        e$ = {
          m: { type: "spacing", property: "margin" },
          mt: { type: "spacing", property: "marginTop" },
          mb: { type: "spacing", property: "marginBottom" },
          ml: { type: "spacing", property: "marginLeft" },
          mr: { type: "spacing", property: "marginRight" },
          mx: { type: "spacing", property: ["marginRight", "marginLeft"] },
          my: { type: "spacing", property: ["marginTop", "marginBottom"] },
          p: { type: "spacing", property: "padding" },
          pt: { type: "spacing", property: "paddingTop" },
          pb: { type: "spacing", property: "paddingBottom" },
          pl: { type: "spacing", property: "paddingLeft" },
          pr: { type: "spacing", property: "paddingRight" },
          px: {
            type: "spacing",
            property: ["paddingRight", "paddingLeft"],
          },
          py: {
            type: "spacing",
            property: ["paddingTop", "paddingBottom"],
          },
          bg: { type: "color", property: "background" },
          c: { type: "color", property: "color" },
          opacity: { type: "identity", property: "opacity" },
          ff: { type: "identity", property: "fontFamily" },
          fz: { type: "fontSize", property: "fontSize" },
          fw: { type: "identity", property: "fontWeight" },
          lts: { type: "size", property: "letterSpacing" },
          ta: { type: "identity", property: "textAlign" },
          lh: { type: "identity", property: "lineHeight" },
          fs: { type: "identity", property: "fontStyle" },
          tt: { type: "identity", property: "textTransform" },
          td: { type: "identity", property: "textDecoration" },
          w: { type: "spacing", property: "width" },
          miw: { type: "spacing", property: "minWidth" },
          maw: { type: "spacing", property: "maxWidth" },
          h: { type: "spacing", property: "height" },
          mih: { type: "spacing", property: "minHeight" },
          mah: { type: "spacing", property: "maxHeight" },
          bgsz: { type: "size", property: "backgroundSize" },
          bgp: { type: "identity", property: "backgroundPosition" },
          bgr: { type: "identity", property: "backgroundRepeat" },
          bga: { type: "identity", property: "backgroundAttachment" },
          pos: { type: "identity", property: "position" },
          top: { type: "identity", property: "top" },
          left: { type: "size", property: "left" },
          bottom: { type: "size", property: "bottom" },
          right: { type: "size", property: "right" },
          inset: { type: "size", property: "inset" },
          display: { type: "identity", property: "display" },
        };
      var eI = Object.defineProperty,
        eU = Object.getOwnPropertySymbols,
        eV = Object.prototype.hasOwnProperty,
        eR = Object.prototype.propertyIsEnumerable,
        get_system_styles_defNormalProp = (e, t, r) =>
          t in e
            ? eI(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        get_system_styles_spreadValues = (e, t) => {
          for (var r in t || (t = {}))
            eV.call(t, r) && get_system_styles_defNormalProp(e, r, t[r]);
          if (eU)
            for (var r of eU(t))
              eR.call(t, r) && get_system_styles_defNormalProp(e, r, t[r]);
          return e;
        };
      function getSystemStyles(e, t, r = e$) {
        let n = Object.keys(r).reduce(
          (n, o) => (
            o in e &&
              void 0 !== e[o] &&
              n.push(
                (function ({ value: e, theme: t, getValue: r, property: n }) {
                  if (null == e) return;
                  if ("object" == typeof e) {
                    let o = (function (e, t) {
                      let r = Object.keys(e)
                        .filter((e) => "base" !== e)
                        .sort(
                          (e, r) =>
                            getBreakpointValue(
                              getSize({ size: e, sizes: t.breakpoints })
                            ) -
                            getBreakpointValue(
                              getSize({ size: r, sizes: t.breakpoints })
                            )
                        );
                      return "base" in e ? ["base", ...r] : r;
                    })(e, t).reduce((o, a) => {
                      if ("base" === a && void 0 !== e.base) {
                        let a = r(e.base, t);
                        return (
                          Array.isArray(n)
                            ? n.forEach((e) => {
                                o[e] = a;
                              })
                            : (o[n] = a),
                          o
                        );
                      }
                      let i = r(e[a], t);
                      return (
                        Array.isArray(n)
                          ? ((o[t.fn.largerThan(a)] = {}),
                            n.forEach((e) => {
                              o[t.fn.largerThan(a)][e] = i;
                            }))
                          : (o[t.fn.largerThan(a)] = { [n]: i }),
                        o
                      );
                    }, {});
                    return o;
                  }
                  let o = r(e, t);
                  return Array.isArray(n)
                    ? n.reduce((e, t) => ((e[t] = o), e), {})
                    : { [n]: o };
                })({
                  value: e[o],
                  getValue: eT[r[o].type],
                  property: r[o].property,
                  theme: t,
                })
              ),
            n
          ),
          []
        );
        return n.reduce(
          (e, t) => (
            Object.keys(t).forEach((r) => {
              "object" == typeof t[r] && null !== t[r] && r in e
                ? (e[r] = get_system_styles_spreadValues(
                    get_system_styles_spreadValues({}, e[r]),
                    t[r]
                  ))
                : (e[r] = t[r]);
            }),
            e
          ),
          {}
        );
      }
      function extractSx(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      var eM = Object.defineProperty,
        eL = Object.getOwnPropertySymbols,
        eB = Object.prototype.hasOwnProperty,
        eD = Object.prototype.propertyIsEnumerable,
        Box_defNormalProp = (e, t, r) =>
          t in e
            ? eM(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Box_spreadValues = (e, t) => {
          for (var r in t || (t = {}))
            eB.call(t, r) && Box_defNormalProp(e, r, t[r]);
          if (eL)
            for (var r of eL(t)) eD.call(t, r) && Box_defNormalProp(e, r, t[r]);
          return e;
        },
        Box_objRest = (e, t) => {
          var r = {};
          for (var n in e) eB.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && eL)
            for (var n of eL(e))
              0 > t.indexOf(n) && eD.call(e, n) && (r[n] = e[n]);
          return r;
        };
      let eW = (0, c.forwardRef)((e, t) => {
        var { className: r, component: n, style: o, sx: a } = e,
          i = Box_objRest(e, ["className", "component", "style", "sx"]);
        let { systemStyles: l, rest: s } = (function (e) {
            let {
                m: t,
                mx: r,
                my: n,
                mt: o,
                mb: a,
                ml: i,
                mr: l,
                p: s,
                px: c,
                py: u,
                pt: p,
                pb: d,
                pl: f,
                pr: m,
                bg: y,
                c: h,
                opacity: g,
                ff: b,
                fz: v,
                fw: S,
                lts: _,
                ta: k,
                lh: x,
                fs: w,
                tt: O,
                td: C,
                w: E,
                miw: P,
                maw: j,
                h: G,
                mih: N,
                mah: T,
                bgsz: $,
                bgp: I,
                bgr: U,
                bga: V,
                pos: R,
                top: M,
                left: L,
                bottom: B,
                right: D,
                inset: W,
                display: H,
              } = e,
              F = __objRest(e, [
                "m",
                "mx",
                "my",
                "mt",
                "mb",
                "ml",
                "mr",
                "p",
                "px",
                "py",
                "pt",
                "pb",
                "pl",
                "pr",
                "bg",
                "c",
                "opacity",
                "ff",
                "fz",
                "fw",
                "lts",
                "ta",
                "lh",
                "fs",
                "tt",
                "td",
                "w",
                "miw",
                "maw",
                "h",
                "mih",
                "mah",
                "bgsz",
                "bgp",
                "bgr",
                "bga",
                "pos",
                "top",
                "left",
                "bottom",
                "right",
                "inset",
                "display",
              ]),
              q = filterProps({
                m: t,
                mx: r,
                my: n,
                mt: o,
                mb: a,
                ml: i,
                mr: l,
                p: s,
                px: c,
                py: u,
                pt: p,
                pb: d,
                pl: f,
                pr: m,
                bg: y,
                c: h,
                opacity: g,
                ff: b,
                fz: v,
                fw: S,
                lts: _,
                ta: k,
                lh: x,
                fs: w,
                tt: O,
                td: C,
                w: E,
                miw: P,
                maw: j,
                h: G,
                mih: N,
                mah: T,
                bgsz: $,
                bgp: I,
                bgr: U,
                bga: V,
                pos: R,
                top: M,
                left: L,
                bottom: B,
                right: D,
                inset: W,
                display: H,
              });
            return { systemStyles: q, rest: F };
          })(i),
          u = n || "div";
        return c.createElement(
          u,
          Box_spreadValues(
            {
              ref: t,
              className: (function (e, t, r) {
                let n = useMantineTheme(),
                  { css: o, cx: a } = useCss();
                return Array.isArray(e)
                  ? a(
                      r,
                      o(getSystemStyles(t, n)),
                      e.map((e) => o(extractSx(e, n)))
                    )
                  : a(r, o(extractSx(e, n)), o(getSystemStyles(t, n)));
              })(a, l, r),
              style: o,
            },
            s
          )
        );
      });
      eW.displayName = "@mantine/core/Box";
      var eH = Object.defineProperty,
        eF = Object.getOwnPropertySymbols,
        eq = Object.prototype.hasOwnProperty,
        eK = Object.prototype.propertyIsEnumerable,
        UnstyledButton_defNormalProp = (e, t, r) =>
          t in e
            ? eH(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        UnstyledButton_spreadValues = (e, t) => {
          for (var r in t || (t = {}))
            eq.call(t, r) && UnstyledButton_defNormalProp(e, r, t[r]);
          if (eF)
            for (var r of eF(t))
              eK.call(t, r) && UnstyledButton_defNormalProp(e, r, t[r]);
          return e;
        },
        UnstyledButton_objRest = (e, t) => {
          var r = {};
          for (var n in e) eq.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && eF)
            for (var n of eF(e))
              0 > t.indexOf(n) && eK.call(e, n) && (r[n] = e[n]);
          return r;
        };
      let eY = (0, c.forwardRef)((e, t) => {
        let r = useComponentDefaultProps("UnstyledButton", {}, e),
          {
            className: n,
            component: o = "button",
            unstyled: a,
            variant: i,
          } = r,
          l = UnstyledButton_objRest(r, [
            "className",
            "component",
            "unstyled",
            "variant",
          ]),
          { classes: s, cx: u } = ez(null, {
            name: "UnstyledButton",
            unstyled: a,
            variant: i,
          });
        return c.createElement(
          eW,
          UnstyledButton_spreadValues(
            {
              component: o,
              ref: t,
              className: u(s.root, n),
              type: "button" === o ? "button" : void 0,
            },
            l
          )
        );
      });
      eY.displayName = "@mantine/core/UnstyledButton";
      var eJ = Object.defineProperty,
        eX = Object.getOwnPropertySymbols,
        eZ = Object.prototype.hasOwnProperty,
        eQ = Object.prototype.propertyIsEnumerable,
        ChevronIcon_defNormalProp = (e, t, r) =>
          t in e
            ? eJ(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        ChevronIcon_spreadValues = (e, t) => {
          for (var r in t || (t = {}))
            eZ.call(t, r) && ChevronIcon_defNormalProp(e, r, t[r]);
          if (eX)
            for (var r of eX(t))
              eQ.call(t, r) && ChevronIcon_defNormalProp(e, r, t[r]);
          return e;
        },
        ChevronIcon_objRest = (e, t) => {
          var r = {};
          for (var n in e) eZ.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && eX)
            for (var n of eX(e))
              0 > t.indexOf(n) && eQ.call(e, n) && (r[n] = e[n]);
          return r;
        };
      function ChevronIcon(e) {
        let { style: t } = e,
          r = ChevronIcon_objRest(e, ["style"]);
        return c.createElement(
          "svg",
          ChevronIcon_spreadValues(
            {
              viewBox: "0 0 15 15",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: ChevronIcon_spreadValues(
                { width: H(16), height: H(16) },
                t
              ),
            },
            r
          ),
          c.createElement("path", {
            d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
          })
        );
      }
      function isNumber(e) {
        return "number" == typeof e;
      }
      function isString(e) {
        return "string" == typeof e;
      }
      function isObject(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function isRecord(e) {
        return isObject(e) || Array.isArray(e);
      }
      function mathAbs(e) {
        return Math.abs(e);
      }
      function mathSign(e) {
        return e ? e / mathAbs(e) : 0;
      }
      function arrayKeys(e) {
        return objectKeys(e).map(Number);
      }
      function arrayLast(e) {
        return e[arrayLastIndex(e)];
      }
      function arrayLastIndex(e) {
        return Math.max(0, e.length - 1);
      }
      function objectKeys(e) {
        return Object.keys(e);
      }
      function Limit(e, t) {
        var r = mathAbs(e - t);
        function reachedAny(r) {
          return r < e || r > t;
        }
        return {
          length: r,
          max: t,
          min: e,
          constrain: function (r) {
            return reachedAny(r) ? (r < e ? e : t) : r;
          },
          reachedAny: reachedAny,
          reachedMax: function (e) {
            return e > t;
          },
          reachedMin: function (t) {
            return t < e;
          },
          removeOffset: function (e) {
            return r ? e - r * Math.ceil((e - t) / r) : e;
          },
        };
      }
      function EventStore() {
        var e = [],
          t = {
            add: function (r, n, o, a) {
              return (
                void 0 === a && (a = { passive: !0 }),
                r.addEventListener(n, o, a),
                e.push(function () {
                  return r.removeEventListener(n, o, a);
                }),
                t
              );
            },
            removeAll: function () {
              return (
                (e = e.filter(function (e) {
                  return e();
                })),
                t
              );
            },
          };
        return t;
      }
      function Vector1D(e) {
        var t = e;
        function divide(e) {
          return (t /= e), r;
        }
        function readNumber(e) {
          return isNumber(e) ? e : e.get();
        }
        var r = {
          add: function (e) {
            return (t += readNumber(e)), r;
          },
          divide: divide,
          get: function () {
            return t;
          },
          multiply: function (e) {
            return (t *= e), r;
          },
          normalize: function () {
            return 0 !== t && divide(t), r;
          },
          set: function (e) {
            return (t = readNumber(e)), r;
          },
          subtract: function (e) {
            return (t -= readNumber(e)), r;
          },
        };
        return r;
      }
      function Translate(e, t, r) {
        var n =
            "x" === e.scroll
              ? function (e) {
                  return "translate3d(".concat(e, "px,0px,0px)");
                }
              : function (e) {
                  return "translate3d(0px,".concat(e, "px,0px)");
                },
          o = r.style,
          a = !1;
        return {
          clear: function () {
            a ||
              ((o.transform = ""),
              r.getAttribute("style") || r.removeAttribute("style"));
          },
          to: function (e) {
            a || (o.transform = n(t.apply(e.get())));
          },
          toggleActive: function (e) {
            a = !e;
          },
        };
      }
      var e0 = {
        align: "center",
        axis: "x",
        container: null,
        slides: null,
        containScroll: "",
        direction: "ltr",
        slidesToScroll: 1,
        breakpoints: {},
        dragFree: !1,
        draggable: !0,
        inViewThreshold: 0,
        loop: !1,
        skipSnaps: !1,
        speed: 10,
        startIndex: 0,
        active: !0,
      };
      function OptionsHandler() {
        function merge(e, t) {
          return (function objectsMergeDeep(e, t) {
            return [e, t].reduce(function (e, t) {
              return (
                objectKeys(t).forEach(function (r) {
                  var n = e[r],
                    o = t[r],
                    a = isObject(n) && isObject(o);
                  e[r] = a ? objectsMergeDeep(n, o) : o;
                }),
                e
              );
            }, {});
          })(e, t || {});
        }
        return {
          merge: merge,
          areEqual: function (e, t) {
            return (
              JSON.stringify(objectKeys(e.breakpoints || {})) ===
                JSON.stringify(objectKeys(t.breakpoints || {})) &&
              (function objectsAreEqual(e, t) {
                var r = objectKeys(e),
                  n = objectKeys(t);
                return (
                  r.length === n.length &&
                  r.every(function (r) {
                    var n = e[r],
                      o = t[r];
                    return "function" == typeof n
                      ? "".concat(n) === "".concat(o)
                      : isRecord(n) && isRecord(o)
                      ? objectsAreEqual(n, o)
                      : n === o;
                  })
                );
              })(e, t)
            );
          },
          atMedia: function (e) {
            var t = e.breakpoints || {},
              r = objectKeys(t)
                .filter(function (e) {
                  return window.matchMedia(e).matches;
                })
                .map(function (e) {
                  return t[e];
                })
                .reduce(function (e, t) {
                  return merge(e, t);
                }, {});
            return merge(e, r);
          },
        };
      }
      function EmblaCarousel(e, t, r) {
        var n,
          o,
          a,
          i,
          l,
          s,
          c = EventStore(),
          u = OptionsHandler(),
          p = (function () {
            var e = OptionsHandler(),
              t = e.atMedia,
              r = e.areEqual,
              n = [],
              o = [];
            function hasChanged(e) {
              var n = t(e.options);
              return function () {
                return !r(n, t(e.options));
              };
            }
            return {
              init: function (e, r) {
                return (
                  (o = e.map(hasChanged)),
                  (n = e.filter(function (e) {
                    return t(e.options).active;
                  })).forEach(function (e) {
                    return e.init(r);
                  }),
                  e.reduce(function (e, t) {
                    var r;
                    return Object.assign(e, (((r = {})[t.name] = t), r));
                  }, {})
                );
              },
              destroy: function () {
                n = n.filter(function (e) {
                  return e.destroy();
                });
              },
              haveChanged: function () {
                return o.some(function (e) {
                  return e();
                });
              },
            };
          })(),
          d =
            ((n = {}),
            (o = {
              emit: function (e) {
                return (
                  (n[e] || []).forEach(function (t) {
                    return t(e);
                  }),
                  o
                );
              },
              off: function (e, t) {
                return (
                  (n[e] = (n[e] || []).filter(function (e) {
                    return e !== t;
                  })),
                  o
                );
              },
              on: function (e, t) {
                return (n[e] = (n[e] || []).concat([t])), o;
              },
            })),
          f = d.on,
          m = d.off,
          y = !1,
          h = u.merge(e0, EmblaCarousel.globalOptions),
          g = u.merge(h),
          b = [],
          v = 0;
        function activate(t, r) {
          if (!y) {
            var n, o, c;
            if (
              ((h = u.merge(h, t)),
              (n = (g = u.atMedia(h)).container),
              (o = g.slides),
              (l = (isString(n) ? e.querySelector(n) : n) || e.children[0]),
              (c = isString(o) ? l.querySelectorAll(o) : o),
              (s = [].slice.call(c || l.children)),
              (v = (a = (function (e, t, r, n, o) {
                var a,
                  i,
                  l,
                  s,
                  c,
                  u,
                  p,
                  d,
                  f,
                  m,
                  y,
                  h,
                  g,
                  b,
                  v,
                  S,
                  _,
                  k,
                  x,
                  w,
                  O,
                  C,
                  E,
                  P,
                  j,
                  G,
                  N,
                  T,
                  $,
                  I,
                  U,
                  V,
                  R,
                  M,
                  L = n.align,
                  B = n.axis,
                  D = n.direction,
                  W = n.startIndex,
                  H = n.inViewThreshold,
                  F = n.loop,
                  q = n.speed,
                  K = n.dragFree,
                  Y = n.slidesToScroll,
                  J = n.skipSnaps,
                  X = n.containScroll,
                  Z = t.getBoundingClientRect(),
                  Q = r.map(function (e) {
                    return e.getBoundingClientRect();
                  }),
                  ee =
                    ((c = "rtl" === D ? -1 : 1),
                    {
                      apply: function (e) {
                        return e * c;
                      },
                    }),
                  et =
                    ((p =
                      "y" == (u = "y" === B ? "y" : "x")
                        ? "top"
                        : "rtl" === D
                        ? "right"
                        : "left"),
                    (d = "y" === u ? "bottom" : "rtl" === D ? "left" : "right"),
                    {
                      scroll: u,
                      cross: "y" === B ? "x" : "y",
                      startEdge: p,
                      endEdge: d,
                      measureSize: function (e) {
                        var t = e.width,
                          r = e.height;
                        return "x" === u ? t : r;
                      },
                    }),
                  er = et.measureSize(Z),
                  en = {
                    measure: function (e) {
                      return er * (e / 100);
                    },
                  },
                  eo =
                    ((a = {
                      start: function () {
                        return 0;
                      },
                      center: function (e) {
                        return (er - e) / 2;
                      },
                      end: function (e) {
                        return er - e;
                      },
                    }),
                    {
                      measure: function (e) {
                        return isNumber(L) ? er * Number(L) : a[L](e);
                      },
                    }),
                  ea = !F && "" !== X,
                  ei = F || "" !== X,
                  el =
                    ((f = et.measureSize),
                    (m = et.startEdge),
                    (y = et.endEdge),
                    (h = Q[0] && ei),
                    (g = (function () {
                      if (!h) return 0;
                      var e = Q[0];
                      return mathAbs(Z[m] - e[m]);
                    })()),
                    (b = h
                      ? parseFloat(
                          window
                            .getComputedStyle(arrayLast(r))
                            .getPropertyValue("margin-".concat(y))
                        )
                      : 0),
                    (v = Q.map(f)),
                    (S = Q.map(function (e, t, r) {
                      var n = t === arrayLastIndex(r);
                      return t ? (n ? v[t] + b : r[t + 1][m] - e[m]) : v[t] + g;
                    }).map(mathAbs)),
                    { slideSizes: v, slideSizesWithGaps: S }),
                  es = el.slideSizes,
                  ec = el.slideSizesWithGaps,
                  eu =
                    ((_ = isNumber(Y)),
                    {
                      groupSlides: function (e) {
                        return _
                          ? arrayKeys(e)
                              .filter(function (e) {
                                return e % Y == 0;
                              })
                              .map(function (t) {
                                return e.slice(t, t + Y);
                              })
                          : arrayKeys(e)
                              .reduce(function (e, t) {
                                var r = ec
                                  .slice(arrayLast(e), t + 1)
                                  .reduce(function (e, t) {
                                    return e + t;
                                  }, 0);
                                return !t || r > er ? e.concat(t) : e;
                              }, [])
                              .map(function (t, r, n) {
                                return e.slice(t, n[r + 1]);
                              });
                      },
                    }),
                  ep =
                    ((k = et.startEdge),
                    (x = et.endEdge),
                    (O = (w = eu.groupSlides)(Q)
                      .map(function (e) {
                        return arrayLast(e)[x] - e[0][k];
                      })
                      .map(mathAbs)
                      .map(eo.measure)),
                    (i =
                      arrayLast(
                        (C = Q.map(function (e) {
                          return Z[k] - e[k];
                        }).map(function (e) {
                          return -mathAbs(e);
                        }))
                      ) - arrayLast(ec)),
                    (E = w(C)
                      .map(function (e) {
                        return e[0];
                      })
                      .map(function (e, t, r) {
                        var n = t === arrayLastIndex(r);
                        return ea && !t ? 0 : ea && n ? i : e + O[t];
                      })),
                    { snaps: C, snapsAligned: E }),
                  ed = ep.snaps,
                  ef = ep.snapsAligned,
                  em = -arrayLast(ed) + arrayLast(ec),
                  ey = ((P = Limit(-em + er, ef[0])),
                  (j = ef.map(P.constrain)),
                  {
                    snapsContained: (function () {
                      if (em <= er) return [P.max];
                      if ("keepSnaps" === X) return j;
                      var e,
                        t,
                        r =
                          ((e = j[0]),
                          (t = arrayLast(j)),
                          Limit(j.lastIndexOf(e), j.indexOf(t) + 1)),
                        n = r.min,
                        o = r.max;
                      return j.slice(n, o);
                    })(),
                  }).snapsContained,
                  eh = ea ? ey : ef,
                  eg = {
                    limit:
                      ((l = eh[0]),
                      (s = arrayLast(eh)),
                      Limit(F ? l - em : s, l)),
                  }.limit,
                  eb = (function Counter(e, t, r) {
                    var n = Limit(0, e),
                      o = n.min,
                      a = n.constrain,
                      i = e + 1,
                      l = withinLimit(t);
                    function withinLimit(e) {
                      return r ? mathAbs((i + e) % i) : a(e);
                    }
                    function set(e) {
                      return (l = withinLimit(e)), s;
                    }
                    var s = {
                      add: function (e) {
                        return set(l + e);
                      },
                      clone: function () {
                        return Counter(e, l, r);
                      },
                      get: function () {
                        return l;
                      },
                      set: set,
                      min: o,
                      max: e,
                    };
                    return s;
                  })(arrayLastIndex(eh), W, F),
                  ev = eb.clone(),
                  eS = arrayKeys(r),
                  e_ = (function (e) {
                    var t = 0;
                    function ifAnimating(e, r) {
                      return function () {
                        !!t === e && r();
                      };
                    }
                    function start() {
                      t = window.requestAnimationFrame(e);
                    }
                    return {
                      proceed: ifAnimating(!0, start),
                      start: ifAnimating(!1, start),
                      stop: ifAnimating(!0, function () {
                        window.cancelAnimationFrame(t), (t = 0);
                      }),
                    };
                  })(function () {
                    F ||
                      eA.scrollBounds.constrain(eA.dragHandler.pointerDown()),
                      eA.scrollBody.seek(ew).update();
                    var e = eA.scrollBody.settle(ew);
                    e &&
                      !eA.dragHandler.pointerDown() &&
                      (eA.animation.stop(), o.emit("settle")),
                      e || o.emit("scroll"),
                      F &&
                        (eA.scrollLooper.loop(eA.scrollBody.direction()),
                        eA.slideLooper.loop()),
                      eA.translate.to(ex),
                      eA.animation.proceed();
                  }),
                  ek = eh[eb.get()],
                  ex = Vector1D(ek),
                  ew = Vector1D(ek),
                  eO = (function (e, t, r) {
                    var n = Vector1D(0),
                      o = Vector1D(0),
                      a = Vector1D(0),
                      i = 0,
                      l = t,
                      s = r;
                    function useSpeed(e) {
                      return (l = e), c;
                    }
                    function useMass(e) {
                      return (s = e), c;
                    }
                    var c = {
                      direction: function () {
                        return i;
                      },
                      seek: function (t) {
                        a.set(t).subtract(e);
                        var r,
                          u = ((r = a.get()), 0 + (l - 0) * ((r - 0) / 100));
                        return (
                          (i = mathSign(a.get())),
                          a.normalize().multiply(u).subtract(n),
                          a.divide(s),
                          o.add(a),
                          c
                        );
                      },
                      settle: function (t) {
                        var r = !(Math.round((t.get() - e.get()) * 100) / 100);
                        return r && e.set(t), r;
                      },
                      update: function () {
                        n.add(o), e.add(n), o.multiply(0);
                      },
                      useBaseMass: function () {
                        return useMass(r);
                      },
                      useBaseSpeed: function () {
                        return useSpeed(t);
                      },
                      useMass: useMass,
                      useSpeed: useSpeed,
                    };
                    return c;
                  })(ex, q, 1),
                  eC = (function (e, t, r, n, o) {
                    var a = n.reachedAny,
                      i = n.removeOffset,
                      l = n.constrain;
                    function minDistance(e) {
                      return e.concat().sort(function (e, t) {
                        return mathAbs(e) - mathAbs(t);
                      })[0];
                    }
                    function shortcut(t, n) {
                      var o = [t, t + r, t - r];
                      return e
                        ? n
                          ? minDistance(
                              o.filter(function (e) {
                                return mathSign(e) === n;
                              })
                            )
                          : minDistance(o)
                        : o[0];
                    }
                    return {
                      byDistance: function (r, n) {
                        var s,
                          c = o.get() + r,
                          u =
                            ((s = e ? i(c) : l(c)),
                            {
                              index: t
                                .map(function (e) {
                                  return e - s;
                                })
                                .map(function (e) {
                                  return shortcut(e, 0);
                                })
                                .map(function (e, t) {
                                  return { diff: e, index: t };
                                })
                                .sort(function (e, t) {
                                  return mathAbs(e.diff) - mathAbs(t.diff);
                                })[0].index,
                              distance: s,
                            }),
                          p = u.index,
                          d = u.distance,
                          f = !e && a(c);
                        if (!n || f) return { index: p, distance: r };
                        var m = r + shortcut(t[p] - d, 0);
                        return { index: p, distance: m };
                      },
                      byIndex: function (e, r) {
                        var n = shortcut(t[e] - o.get(), r);
                        return { index: e, distance: n };
                      },
                      shortcut: shortcut,
                    };
                  })(F, eh, em, eg, ew),
                  eE = (function (e, t, r, n, o, a) {
                    function scrollTo(n) {
                      var i = n.distance,
                        l = n.index !== t.get();
                      i && (e.start(), o.add(i)),
                        l && (r.set(t.get()), t.set(n.index), a.emit("select"));
                    }
                    return {
                      distance: function (e, t) {
                        scrollTo(n.byDistance(e, t));
                      },
                      index: function (e, r) {
                        var o = t.clone().set(e);
                        scrollTo(n.byIndex(o.get(), r));
                      },
                    };
                  })(e_, eb, ev, eC, ew, o),
                  eP = (function (e, t, r, n, o, a, i) {
                    var l = o.removeOffset,
                      s = o.constrain,
                      c = a ? [0, t, -t] : [0],
                      u = findSlideBounds(c, i);
                    function findSlideBounds(t, o) {
                      var a,
                        i = t || c,
                        l =
                          ((a = o || 0),
                          r.map(function (e) {
                            return Limit(0.5, e - 0.5).constrain(e * a);
                          }));
                      return i.reduce(function (t, o) {
                        var a = n.map(function (t, n) {
                          return {
                            start: t - r[n] + l[n] + o,
                            end: t + e - l[n] + o,
                            index: n,
                          };
                        });
                        return t.concat(a);
                      }, []);
                    }
                    return {
                      check: function (e, t) {
                        var r = a ? l(e) : s(e);
                        return (t || u).reduce(function (e, t) {
                          var n = t.index,
                            o = t.start,
                            a = t.end;
                          return !(-1 !== e.indexOf(n)) && o < r && a > r
                            ? e.concat([n])
                            : e;
                        }, []);
                      },
                      findSlideBounds: findSlideBounds,
                    };
                  })(er, em, es, ed, eg, F, H),
                  ez = (function (
                    e,
                    t,
                    r,
                    n,
                    o,
                    a,
                    i,
                    l,
                    s,
                    c,
                    u,
                    p,
                    d,
                    f,
                    m,
                    y
                  ) {
                    var h = e.cross,
                      g = ["INPUT", "SELECT", "TEXTAREA"],
                      b = { passive: !1 },
                      v = Vector1D(0),
                      S = EventStore(),
                      _ = EventStore(),
                      k = d.measure(20),
                      x = { mouse: 300, touch: 400 },
                      w = { mouse: 500, touch: 600 },
                      O = m ? 5 : 16,
                      C = 0,
                      E = 0,
                      P = !1,
                      j = !1,
                      G = !1,
                      N = !1;
                    function down(e) {
                      if (
                        (!(N = !o.isTouchEvent(e)) || 0 === e.button) &&
                        ((t = e.target.nodeName || ""), !(g.indexOf(t) > -1))
                      ) {
                        var t,
                          i,
                          l = mathAbs(n.get() - a.get()) >= 2,
                          c = N || !l;
                        (P = !0),
                          o.pointerDown(e),
                          v.set(n),
                          n.set(a),
                          s.useBaseMass().useSpeed(80),
                          (i = N ? document : r),
                          _.add(i, "touchmove", move, b)
                            .add(i, "touchend", up)
                            .add(i, "mousemove", move, b)
                            .add(i, "mouseup", up),
                          (C = o.readPoint(e)),
                          (E = o.readPoint(e, h)),
                          p.emit("pointerDown"),
                          c && (G = !1);
                      }
                    }
                    function move(e) {
                      if (!j && !N) {
                        if (!e.cancelable) return up(e);
                        var r = o.readPoint(e),
                          a = o.readPoint(e, h);
                        if (!(j = mathAbs(r - C) > mathAbs(a - E)) && !G)
                          return up(e);
                      }
                      var l = o.pointerMove(e);
                      !G && l && (G = !0),
                        i.start(),
                        n.add(t.apply(l)),
                        e.preventDefault();
                    }
                    function up(e) {
                      var r,
                        a,
                        i,
                        d,
                        h = c.byDistance(0, !1).index !== u.get(),
                        g = o.pointerUp(e) * (m ? w : x)[N ? "mouse" : "touch"],
                        b =
                          ((r = t.apply(g)),
                          (i =
                            (a = u.clone().add(-1 * mathSign(r))).get() ===
                              u.min || a.get() === u.max),
                          (d = c.byDistance(r, !m).distance),
                          m || mathAbs(r) < k
                            ? d
                            : !f && i
                            ? 0.4 * d
                            : y && h
                            ? 0.5 * d
                            : c.byIndex(a.get(), 0).distance),
                        S = (function (e, t) {
                          if (0 === e || 0 === t || mathAbs(e) <= mathAbs(t))
                            return 0;
                          var r,
                            n,
                            o =
                              ((r = mathAbs(e)),
                              (n = mathAbs(t)),
                              mathAbs(r - n));
                          return mathAbs(o / e);
                        })(g, b),
                        C = mathAbs(n.get() - v.get()) >= 0.5,
                        E = h && S > 0.75,
                        T = mathAbs(g) < k,
                        $ = E ? 10 : O;
                      C && !N && (G = !0),
                        (j = !1),
                        (P = !1),
                        _.removeAll(),
                        s.useSpeed(T ? 9 : $).useMass(E ? 1 + 2.5 * S : 1),
                        l.distance(b, !m),
                        (N = !1),
                        p.emit("pointerUp");
                    }
                    function click(e) {
                      G && (e.stopPropagation(), e.preventDefault());
                    }
                    return {
                      addActivationEvents: function () {
                        S.add(
                          r,
                          "dragstart",
                          function (e) {
                            return e.preventDefault();
                          },
                          b
                        )
                          .add(r, "touchmove", function () {}, b)
                          .add(r, "touchend", function () {})
                          .add(r, "touchstart", down)
                          .add(r, "mousedown", down)
                          .add(r, "touchcancel", up)
                          .add(r, "contextmenu", up)
                          .add(r, "click", click, !0);
                      },
                      clickAllowed: function () {
                        return !G;
                      },
                      pointerDown: function () {
                        return P;
                      },
                      removeAllEvents: function () {
                        S.removeAll(), _.removeAll();
                      },
                    };
                  })(
                    et,
                    ee,
                    e,
                    ew,
                    (function (e) {
                      var t, r;
                      function isTouchEvent(e) {
                        return (
                          "undefined" != typeof TouchEvent &&
                          e instanceof TouchEvent
                        );
                      }
                      function readTime(e) {
                        return e.timeStamp;
                      }
                      function readPoint(t, r) {
                        var n = r || e.scroll;
                        return (isTouchEvent(t) ? t.touches[0] : t)[
                          "client".concat("x" === n ? "X" : "Y")
                        ];
                      }
                      return {
                        isTouchEvent: isTouchEvent,
                        pointerDown: function (e) {
                          return (t = e), (r = e), readPoint(e);
                        },
                        pointerMove: function (e) {
                          var n = readPoint(e) - readPoint(r),
                            o = readTime(e) - readTime(t) > 170;
                          return (r = e), o && (t = e), n;
                        },
                        pointerUp: function (e) {
                          if (!t || !r) return 0;
                          var n = readPoint(r) - readPoint(t),
                            o = readTime(e) - readTime(t),
                            a = readTime(e) - readTime(r) > 170,
                            i = n / o;
                          return o && !a && mathAbs(i) > 0.1 ? i : 0;
                        },
                        readPoint: readPoint,
                      };
                    })(et),
                    ex,
                    e_,
                    eE,
                    eO,
                    eC,
                    eb,
                    o,
                    en,
                    F,
                    K,
                    J
                  ),
                  eA = {
                    containerRect: Z,
                    slideRects: Q,
                    animation: e_,
                    axis: et,
                    direction: ee,
                    dragHandler: ez,
                    eventStore: EventStore(),
                    percentOfView: en,
                    index: eb,
                    indexPrevious: ev,
                    limit: eg,
                    location: ex,
                    options: n,
                    scrollBody: eO,
                    scrollBounds:
                      ((G = en.measure(10)),
                      (N = en.measure(50)),
                      (T = !1),
                      {
                        constrain: function (e) {
                          if (
                            !T &&
                            eg.reachedAny(ew.get()) &&
                            eg.reachedAny(ex.get())
                          ) {
                            var t = eg.reachedMin(ex.get()) ? "min" : "max",
                              r = mathAbs(eg[t] - ex.get()),
                              n = ew.get() - ex.get();
                            ew.subtract(n * Math.min(r / N, 0.85)),
                              !e &&
                                mathAbs(n) < G &&
                                (ew.set(eg.constrain(ew.get())),
                                eO.useSpeed(10).useMass(3));
                          }
                        },
                        toggleActive: function (e) {
                          T = !e;
                        },
                      }),
                    scrollLooper:
                      (($ = [ex, ew]),
                      (U = (I = Limit(eg.min + 0.1, eg.max + 0.1)).reachedMin),
                      (V = I.reachedMax),
                      {
                        loop: function (e) {
                          if (1 === e ? V(ex.get()) : -1 === e && U(ex.get())) {
                            var t = em * (-1 * e);
                            $.forEach(function (e) {
                              return e.add(t);
                            });
                          }
                        },
                      }),
                    scrollProgress:
                      ((R = eg.max),
                      (M = eg.length),
                      {
                        get: function (e) {
                          return -((e - R) / M);
                        },
                      }),
                    scrollSnaps: eh,
                    scrollTarget: eC,
                    scrollTo: eE,
                    slideLooper: (function (e, t, r, n, o, a, i, l, s) {
                      var c = arrayKeys(o),
                        u = findLoopPoints(
                          slidesInGap(arrayKeys(o).reverse(), a[0] - 1),
                          "end"
                        ).concat(
                          findLoopPoints(slidesInGap(c, r - a[0] - 1), "start")
                        );
                      function removeSlideSizes(e, t) {
                        return e.reduce(function (e, t) {
                          return e - o[t];
                        }, t);
                      }
                      function slidesInGap(e, t) {
                        return e.reduce(function (e, r) {
                          return removeSlideSizes(e, t) > 0 ? e.concat([r]) : e;
                        }, []);
                      }
                      function findLoopPoints(r, o) {
                        var a = "start" === o,
                          c = i.findSlideBounds([a ? -n : n]);
                        return r.map(function (r) {
                          var o = a ? 0 : -n,
                            i = a ? n : 0,
                            u = c.filter(function (e) {
                              return e.index === r;
                            })[0][a ? "end" : "start"],
                            p = Vector1D(-1),
                            d = Vector1D(-1),
                            f = Translate(e, t, s[r]);
                          return {
                            index: r,
                            location: d,
                            translate: f,
                            target: function () {
                              return p.set(l.get() > u ? o : i);
                            },
                          };
                        });
                      }
                      return {
                        canLoop: function () {
                          return u.every(function (e) {
                            var t = e.index;
                            return (
                              0.1 >=
                              removeSlideSizes(
                                c.filter(function (e) {
                                  return e !== t;
                                }),
                                r
                              )
                            );
                          });
                        },
                        clear: function () {
                          u.forEach(function (e) {
                            return e.translate.clear();
                          });
                        },
                        loop: function () {
                          u.forEach(function (e) {
                            var t = e.target,
                              r = e.translate,
                              n = e.location,
                              o = t();
                            o.get() !== n.get() &&
                              (0 === o.get() ? r.clear() : r.to(o), n.set(o));
                          });
                        },
                        loopPoints: u,
                      };
                    })(et, ee, er, em, ec, eh, eP, ex, r),
                    slidesToScroll: eu,
                    slidesInView: eP,
                    slideIndexes: eS,
                    target: ew,
                    translate: Translate(et, ee, t),
                  };
                return eA;
              })(e, l, s, g, d)).axis.measureSize(e.getBoundingClientRect())),
              !g.active)
            )
              return deActivate();
            if (
              (a.translate.to(a.location),
              (b = r || b),
              (i = p.init(b, S)),
              g.loop)
            ) {
              if (!a.slideLooper.canLoop()) {
                deActivate(),
                  activate({ loop: !1 }, r),
                  (h = u.merge(h, { loop: !0 }));
                return;
              }
              a.slideLooper.loop();
            }
            g.draggable &&
              l.offsetParent &&
              s.length &&
              a.dragHandler.addActivationEvents();
          }
        }
        function reActivate(e, t) {
          var r = selectedScrollSnap();
          deActivate(),
            activate(u.merge({ startIndex: r }, e), t),
            d.emit("reInit");
        }
        function deActivate() {
          a.dragHandler.removeAllEvents(),
            a.animation.stop(),
            a.eventStore.removeAll(),
            a.translate.clear(),
            a.slideLooper.clear(),
            p.destroy();
        }
        function slidesInView(e) {
          var t = a[e ? "target" : "location"].get(),
            r = g.loop ? "removeOffset" : "constrain";
          return a.slidesInView.check(a.limit[r](t));
        }
        function scrollTo(e, t, r) {
          g.active &&
            !y &&
            (a.scrollBody.useBaseMass().useSpeed(t ? 100 : g.speed),
            a.scrollTo.index(e, r || 0));
        }
        function selectedScrollSnap() {
          return a.index.get();
        }
        var S = {
          canScrollNext: function () {
            return a.index.clone().add(1).get() !== selectedScrollSnap();
          },
          canScrollPrev: function () {
            return a.index.clone().add(-1).get() !== selectedScrollSnap();
          },
          clickAllowed: function () {
            return a.dragHandler.clickAllowed();
          },
          containerNode: function () {
            return l;
          },
          internalEngine: function () {
            return a;
          },
          destroy: function () {
            y || ((y = !0), c.removeAll(), deActivate(), d.emit("destroy"));
          },
          off: m,
          on: f,
          plugins: function () {
            return i;
          },
          previousScrollSnap: function () {
            return a.indexPrevious.get();
          },
          reInit: reActivate,
          rootNode: function () {
            return e;
          },
          scrollNext: function (e) {
            scrollTo(a.index.clone().add(1).get(), !0 === e, -1);
          },
          scrollPrev: function (e) {
            scrollTo(a.index.clone().add(-1).get(), !0 === e, 1);
          },
          scrollProgress: function () {
            return a.scrollProgress.get(a.location.get());
          },
          scrollSnapList: function () {
            return a.scrollSnaps.map(a.scrollProgress.get);
          },
          scrollTo: scrollTo,
          selectedScrollSnap: selectedScrollSnap,
          slideNodes: function () {
            return s;
          },
          slidesInView: slidesInView,
          slidesNotInView: function (e) {
            var t = slidesInView(e);
            return a.slideIndexes.filter(function (e) {
              return -1 === t.indexOf(e);
            });
          },
        };
        return (
          activate(t, r),
          c.add(window, "resize", function () {
            var t = u.atMedia(h),
              r = !u.areEqual(t, g),
              n = a.axis.measureSize(e.getBoundingClientRect()),
              o = v !== n,
              i = p.haveChanged();
            (o || r || i) && reActivate(), d.emit("resize");
          }),
          setTimeout(function () {
            return d.emit("init");
          }, 0),
          S
        );
      }
      function sortAndMapPluginToOptions(e) {
        return e
          .concat()
          .sort(function (e, t) {
            return e.name > t.name ? 1 : -1;
          })
          .map(function (e) {
            return e.options;
          });
      }
      function useEmblaCarousel(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = []);
        var r = (0, c.useRef)(EmblaCarousel.optionsHandler()),
          n = (0, c.useRef)(e),
          o = (0, c.useRef)(t),
          a = (0, c.useState)(),
          i = a[0],
          l = a[1],
          s = (0, c.useState)(),
          u = s[0],
          p = s[1],
          d = (0, c.useCallback)(
            function () {
              i && i.reInit(n.current, o.current);
            },
            [i]
          );
        return (
          (0, c.useEffect)(
            function () {
              if (
                "undefined" != typeof window &&
                window.document &&
                window.document.createElement &&
                u
              ) {
                EmblaCarousel.globalOptions = useEmblaCarousel.globalOptions;
                var e = EmblaCarousel(u, n.current, o.current);
                return (
                  l(e),
                  function () {
                    return e.destroy();
                  }
                );
              }
              l(void 0);
            },
            [u, l]
          ),
          (0, c.useEffect)(
            function () {
              r.current.areEqual(n.current, e) || ((n.current = e), d());
            },
            [e, d]
          ),
          (0, c.useEffect)(
            function () {
              !(function (e, t) {
                if (e.length !== t.length) return !1;
                var r = EmblaCarousel.optionsHandler().areEqual,
                  n = sortAndMapPluginToOptions(e),
                  o = sortAndMapPluginToOptions(t);
                return n.every(function (e, t) {
                  return r(e, o[t]);
                });
              })(o.current, t) && ((o.current = t), d());
            },
            [t, d]
          ),
          [p, i]
        );
      }
      (EmblaCarousel.globalOptions = void 0),
        (EmblaCarousel.optionsHandler = OptionsHandler),
        (useEmblaCarousel.globalOptions = void 0);
      let [e1, e5] = (function (e) {
        let t = (0, c.createContext)(null);
        return [
          ({ children: e, value: r }) =>
            c.createElement(t.Provider, { value: r }, e),
          () => {
            let r = (0, c.useContext)(t);
            if (null === r) throw Error(e);
            return r;
          },
        ];
      })(
        "[@mantine/carousel] Carousel.Slide was rendered outside of Carousel context"
      );
      function getSortedBreakpoints(e, t) {
        if (0 === t.length) return t;
        let r = "maxWidth" in t[0] ? "maxWidth" : "minWidth",
          n = [...t].sort(
            (t, n) =>
              getBreakpointValue(
                getSize({ size: n[r], sizes: e.breakpoints })
              ) -
              getBreakpointValue(getSize({ size: t[r], sizes: e.breakpoints }))
          );
        return "minWidth" === r ? n.reverse() : n;
      }
      var e2 = Object.defineProperty,
        e6 = Object.defineProperties,
        e3 = Object.getOwnPropertyDescriptors,
        e4 = Object.getOwnPropertySymbols,
        e9 = Object.prototype.hasOwnProperty,
        e7 = Object.prototype.propertyIsEnumerable,
        Carousel_styles_defNormalProp = (e, t, r) =>
          t in e
            ? e2(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Carousel_styles_spreadValues = (e, t) => {
          for (var r in t || (t = {}))
            e9.call(t, r) && Carousel_styles_defNormalProp(e, r, t[r]);
          if (e4)
            for (var r of e4(t))
              e7.call(t, r) && Carousel_styles_defNormalProp(e, r, t[r]);
          return e;
        },
        Carousel_styles_spreadProps = (e, t) => e6(e, e3(t)),
        e8 = createStyles(
          (
            e,
            {
              controlSize: t,
              controlsOffset: r,
              orientation: n,
              height: o,
              includeGapInSize: a,
              breakpoints: i = [],
              slideGap: l,
            }
          ) => {
            let s = "horizontal" === n,
              getContainerStyles = (t) => {
                if (!a) return {};
                let r = getSize({ size: t, sizes: e.spacing });
                return {
                  ["horizontal" === n
                    ? "marginRight"
                    : "marginBottom"]: `calc(${r} * -1)`,
                };
              },
              c = i.some(
                (e) => void 0 !== e.slideGap || void 0 !== e.slideSize
              ),
              u = c
                ? getSortedBreakpoints(e, i).reduce((t, r) => {
                    let n = "maxWidth" in r ? "max-width" : "min-width",
                      o = getSize({
                        size: "max-width" === n ? r.maxWidth : r.minWidth,
                        sizes: e.breakpoints,
                      }),
                      a = void 0 === r.slideGap ? void 0 : H(r.slideGap),
                      i = getBreakpointValue(o) - ("max-width" === n ? 1 : 0);
                    return (
                      (t[`@media (${n}: ${H(i)})`] = getContainerStyles(a)), t
                    );
                  }, {})
                : null;
            return {
              root: { position: "relative" },
              viewport: { height: H(o), overflow: "hidden" },
              container: Carousel_styles_spreadValues(
                Carousel_styles_spreadValues(
                  {
                    display: "flex",
                    flexDirection: s ? "row" : "column",
                    height: H(o),
                  },
                  getContainerStyles(l)
                ),
                u
              ),
              controls: {
                position: "absolute",
                zIndex: 1,
                left: s ? 0 : `calc(50% - ${H(t)} / 2)`,
                right: s ? 0 : void 0,
                top: s ? `calc(50% - ${H(t)} / 2)` : 0,
                bottom: s ? void 0 : 0,
                display: "flex",
                flexDirection: s ? "row" : "column",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: s
                  ? getSize({ size: r, sizes: e.spacing })
                  : void 0,
                paddingRight: s
                  ? getSize({ size: r, sizes: e.spacing })
                  : void 0,
                paddingTop: s ? void 0 : getSize({ size: r, sizes: e.spacing }),
                paddingBottom: s
                  ? void 0
                  : getSize({ size: r, sizes: e.spacing }),
                pointerEvents: "none",
              },
              control: Carousel_styles_spreadProps(
                Carousel_styles_spreadValues(
                  {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minWidth: H(t),
                    minHeight: H(t),
                    borderRadius: H(t),
                    pointerEvents: "all",
                    backgroundColor: e.white,
                    color: e.black,
                    boxShadow: e.shadows.md,
                    opacity: "dark" === e.colorScheme ? 0.65 : 0.85,
                    border: `${H(1)} solid ${e.colors.gray[3]}`,
                    transition: `opacity 150ms ${e.transitionTimingFunction}`,
                  },
                  e.fn.hover({ opacity: 1 })
                ),
                { "&:active": e.activeStyles }
              ),
              indicators: {
                position: "absolute",
                bottom: s ? e.spacing.md : 0,
                top: s ? void 0 : 0,
                left: s ? 0 : void 0,
                right: s ? 0 : e.spacing.md,
                display: "flex",
                flexDirection: s ? "row" : "column",
                justifyContent: "center",
                gap: H(8),
                pointerEvents: "none",
              },
              indicator: {
                pointerEvents: "all",
                width: s ? H(25) : H(5),
                height: s ? H(5) : H(25),
                borderRadius: e.radius.xl,
                backgroundColor: e.white,
                boxShadow: e.shadows.sm,
                opacity: 0.6,
                transition: `opacity 150ms ${e.transitionTimingFunction}`,
                "&[data-active]": { opacity: 1 },
              },
            };
          }
        ),
        te = Object.defineProperty,
        tt = Object.getOwnPropertySymbols,
        tr = Object.prototype.hasOwnProperty,
        tn = Object.prototype.propertyIsEnumerable,
        CarouselSlide_styles_defNormalProp = (e, t, r) =>
          t in e
            ? te(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        CarouselSlide_styles_spreadValues = (e, t) => {
          for (var r in t || (t = {}))
            tr.call(t, r) && CarouselSlide_styles_defNormalProp(e, r, t[r]);
          if (tt)
            for (var r of tt(t))
              tn.call(t, r) && CarouselSlide_styles_defNormalProp(e, r, t[r]);
          return e;
        },
        to = createStyles(
          (
            e,
            {
              size: t,
              gap: r,
              orientation: n,
              includeGapInSize: o,
              breakpoints: a = [],
            }
          ) => {
            let getSlideStyles = (t, r) => {
                let a = getSize({ size: t, sizes: e.spacing }),
                  i = H(r),
                  l = o
                    ? {
                        ["horizontal" === n ? "paddingRight" : "paddingBottom"]:
                          a,
                      }
                    : {
                        ["horizontal" === n ? "marginRight" : "marginBottom"]:
                          a,
                      };
                return CarouselSlide_styles_spreadValues(
                  { flex: `0 0 ${i}` },
                  l
                );
              },
              i = a.some(
                (e) => void 0 !== e.slideGap || void 0 !== e.slideSize
              ),
              l = i
                ? getSortedBreakpoints(e, a).reduce((t, n) => {
                    let o = "maxWidth" in n ? "max-width" : "min-width",
                      a = getSize({
                        size: "max-width" === o ? n.maxWidth : n.minWidth,
                        sizes: e.breakpoints,
                      }),
                      i = void 0 === n.slideGap ? r : n.slideGap,
                      l = getBreakpointValue(a) - ("max-width" === o ? 1 : 0);
                    return (
                      (t[`@media (${o}: ${H(l)})`] = getSlideStyles(
                        i,
                        n.slideSize
                      )),
                      t
                    );
                  }, {})
                : null;
            return {
              slide: CarouselSlide_styles_spreadValues(
                CarouselSlide_styles_spreadValues(
                  { position: "relative" },
                  getSlideStyles(r, t)
                ),
                l
              ),
            };
          }
        ),
        ta = Object.defineProperty,
        ti = Object.getOwnPropertySymbols,
        tl = Object.prototype.hasOwnProperty,
        ts = Object.prototype.propertyIsEnumerable,
        CarouselSlide_defNormalProp = (e, t, r) =>
          t in e
            ? ta(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        CarouselSlide_spreadValues = (e, t) => {
          for (var r in t || (t = {}))
            tl.call(t, r) && CarouselSlide_defNormalProp(e, r, t[r]);
          if (ti)
            for (var r of ti(t))
              ts.call(t, r) && CarouselSlide_defNormalProp(e, r, t[r]);
          return e;
        },
        CarouselSlide_objRest = (e, t) => {
          var r = {};
          for (var n in e) tl.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && ti)
            for (var n of ti(e))
              0 > t.indexOf(n) && ts.call(e, n) && (r[n] = e[n]);
          return r;
        };
      let tc = (0, c.forwardRef)((e, t) => {
        var { children: r, className: n, size: o, gap: a } = e,
          i = CarouselSlide_objRest(e, [
            "children",
            "className",
            "size",
            "gap",
          ]);
        let l = e5(),
          { classes: s, cx: u } = to(
            {
              gap: void 0 === a ? l.slideGap : a,
              size: void 0 === o ? l.slideSize : o,
              orientation: l.orientation,
              includeGapInSize: l.includeGapInSize,
              breakpoints: l.breakpoints,
            },
            {
              name: "Carousel",
              classNames: l.classNames,
              styles: l.styles,
              unstyled: l.unstyled,
              variant: l.variant,
            }
          );
        return c.createElement(
          eW,
          CarouselSlide_spreadValues({ className: u(s.slide, n), ref: t }, i),
          r
        );
      });
      function getChevronRotation({ dir: e, orientation: t, direction: r }) {
        return "previous" === r
          ? "horizontal" === t
            ? 90 * ("ltr" === e ? 1 : -1)
            : -180
          : "horizontal" === t
          ? 90 * ("ltr" === e ? -1 : 1)
          : 0;
      }
      tc.displayName = "@mantine/carousel/CarouselSlide";
      var tu = Object.defineProperty,
        tp = Object.getOwnPropertySymbols,
        td = Object.prototype.hasOwnProperty,
        tf = Object.prototype.propertyIsEnumerable,
        Carousel_defNormalProp = (e, t, r) =>
          t in e
            ? tu(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Carousel_spreadValues = (e, t) => {
          for (var r in t || (t = {}))
            td.call(t, r) && Carousel_defNormalProp(e, r, t[r]);
          if (tp)
            for (var r of tp(t))
              tf.call(t, r) && Carousel_defNormalProp(e, r, t[r]);
          return e;
        },
        Carousel_objRest = (e, t) => {
          var r = {};
          for (var n in e) td.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && tp)
            for (var n of tp(e))
              0 > t.indexOf(n) && tf.call(e, n) && (r[n] = e[n]);
          return r;
        };
      let tm = {
          controlSize: 26,
          controlsOffset: "sm",
          slideSize: "100%",
          slideGap: 0,
          orientation: "horizontal",
          align: "center",
          slidesToScroll: 1,
          includeGapInSize: !0,
          draggable: !0,
          dragFree: !1,
          loop: !1,
          speed: 10,
          initialSlide: 0,
          inViewThreshold: 0,
          withControls: !0,
          withIndicators: !1,
          skipSnaps: !1,
          containScroll: "",
          withKeyboardEvents: !0,
        },
        ty = (0, c.forwardRef)((e, t) => {
          let r = useComponentDefaultProps("Carousel", tm, e),
            {
              children: n,
              className: o,
              getEmblaApi: a,
              onNextSlide: i,
              onPreviousSlide: l,
              onSlideChange: s,
              nextControlLabel: u,
              previousControlLabel: p,
              controlSize: d,
              controlsOffset: f,
              classNames: m,
              styles: y,
              unstyled: h,
              slideSize: g,
              slideGap: b,
              orientation: v,
              height: S,
              align: _,
              slidesToScroll: k,
              includeGapInSize: x,
              draggable: w,
              dragFree: O,
              loop: C,
              speed: E,
              initialSlide: P,
              inViewThreshold: j,
              withControls: G,
              withIndicators: N,
              plugins: T,
              nextControlIcon: $,
              previousControlIcon: I,
              breakpoints: U,
              skipSnaps: V,
              containScroll: R,
              withKeyboardEvents: M,
              variant: L,
            } = r,
            B = Carousel_objRest(r, [
              "children",
              "className",
              "getEmblaApi",
              "onNextSlide",
              "onPreviousSlide",
              "onSlideChange",
              "nextControlLabel",
              "previousControlLabel",
              "controlSize",
              "controlsOffset",
              "classNames",
              "styles",
              "unstyled",
              "slideSize",
              "slideGap",
              "orientation",
              "height",
              "align",
              "slidesToScroll",
              "includeGapInSize",
              "draggable",
              "dragFree",
              "loop",
              "speed",
              "initialSlide",
              "inViewThreshold",
              "withControls",
              "withIndicators",
              "plugins",
              "nextControlIcon",
              "previousControlIcon",
              "breakpoints",
              "skipSnaps",
              "containScroll",
              "withKeyboardEvents",
              "variant",
            ]),
            {
              classes: D,
              cx: W,
              theme: H,
            } = e8(
              {
                controlSize: d,
                controlsOffset: f,
                orientation: v,
                height: S,
                includeGapInSize: x,
                breakpoints: U,
                slideGap: b,
              },
              {
                name: "Carousel",
                classNames: m,
                styles: y,
                unstyled: h,
                variant: L,
              }
            ),
            [F, q] = useEmblaCarousel(
              {
                axis: "horizontal" === v ? "x" : "y",
                direction: "horizontal" === v ? H.dir : void 0,
                startIndex: P,
                loop: C,
                align: _,
                slidesToScroll: k,
                draggable: w,
                dragFree: O,
                speed: E,
                inViewThreshold: j,
                skipSnaps: V,
                containScroll: R,
              },
              T
            ),
            [K, Y] = (0, c.useState)(0),
            [J, X] = (0, c.useState)(0),
            Z = (0, c.useCallback)((e) => q && q.scrollTo(e), [q]),
            Q = (0, c.useCallback)(() => {
              if (!q) return;
              let e = q.selectedScrollSnap();
              Y(e), null == s || s(e);
            }, [q, Y]),
            ee = (0, c.useCallback)(() => {
              null == q || q.scrollPrev(), null == l || l();
            }, [q]),
            et = (0, c.useCallback)(() => {
              null == q || q.scrollNext(), null == i || i();
            }, [q]),
            er = (0, c.useCallback)(
              (e) => {
                M &&
                  ("ArrowRight" === e.key && (e.preventDefault(), et()),
                  "ArrowLeft" === e.key && (e.preventDefault(), ee()));
              },
              [q]
            );
          (0, c.useEffect)(() => {
            if (q)
              return (
                null == a || a(q),
                Q(),
                X(q.scrollSnapList().length),
                q.on("select", Q),
                () => {
                  q.off("select", Q);
                }
              );
          }, [q, k]),
            (0, c.useEffect)(() => {
              q &&
                (q.reInit(),
                X(q.scrollSnapList().length),
                Y((e) =>
                  Math.min(Math.max(e, 0), c.Children.toArray(n).length - 1)
                ));
            }, [c.Children.toArray(n).length, k]);
          let en = (null == q ? void 0 : q.canScrollPrev()) || !1,
            eo = (null == q ? void 0 : q.canScrollNext()) || !1,
            ea = Array(J)
              .fill(0)
              .map((e, t) =>
                c.createElement(eY, {
                  key: t,
                  "data-active": t === K || void 0,
                  className: D.indicator,
                  "aria-hidden": !0,
                  tabIndex: -1,
                  onClick: () => Z(t),
                })
              );
          return c.createElement(
            e1,
            {
              value: {
                slideGap: b,
                slideSize: g,
                embla: q,
                orientation: v,
                includeGapInSize: x,
                breakpoints: U,
                classNames: m,
                styles: y,
                unstyled: h,
                variant: L,
              },
            },
            c.createElement(
              eW,
              Carousel_spreadValues(
                { className: W(D.root, o), ref: t, onKeyDownCapture: er },
                B
              ),
              c.createElement(
                "div",
                { className: D.viewport, ref: F },
                c.createElement("div", { className: D.container }, n)
              ),
              N && c.createElement("div", { className: D.indicators }, ea),
              G &&
                c.createElement(
                  "div",
                  { className: D.controls },
                  c.createElement(
                    eY,
                    {
                      onClick: ee,
                      className: D.control,
                      "aria-label": p,
                      "data-inactive": !en || void 0,
                      tabIndex: en ? 0 : -1,
                    },
                    void 0 !== I
                      ? I
                      : c.createElement(ChevronIcon, {
                          style: {
                            transform: `rotate(${getChevronRotation({
                              dir: H.dir,
                              orientation: v,
                              direction: "previous",
                            })}deg)`,
                          },
                        })
                  ),
                  c.createElement(
                    eY,
                    {
                      onClick: et,
                      className: D.control,
                      "aria-label": u,
                      "data-inactive": !eo || void 0,
                      tabIndex: eo ? 0 : -1,
                    },
                    void 0 !== $
                      ? $
                      : c.createElement(ChevronIcon, {
                          style: {
                            transform: `rotate(${getChevronRotation({
                              dir: H.dir,
                              orientation: v,
                              direction: "next",
                            })}deg)`,
                          },
                        })
                  )
                )
            )
          );
        });
      (ty.Slide = tc), (ty.displayName = "@mantine/carousel/Carousel");
      let th = ty;
    },
    2535: function (e, t, r) {
      "use strict";
      var n = r(6237),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        a = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        l = {};
      function getStatics(e) {
        return n.isMemo(e) ? i : l[e.$$typeof] || o;
      }
      (l[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (l[n.Memo] = i);
      var s = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        u = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        f = Object.prototype;
      e.exports = function hoistNonReactStatics(e, t, r) {
        if ("string" != typeof t) {
          if (f) {
            var n = d(t);
            n && n !== f && hoistNonReactStatics(e, n, r);
          }
          var o = c(t);
          u && (o = o.concat(u(t)));
          for (
            var i = getStatics(e), l = getStatics(t), m = 0;
            m < o.length;
            ++m
          ) {
            var y = o[m];
            if (!a[y] && !(r && r[y]) && !(l && l[y]) && !(i && i[y])) {
              var h = p(t, y);
              try {
                s(e, y, h);
              } catch (e) {}
            }
          }
        }
        return e;
      };
    },
    6412: function (e, t, r) {
      "use strict";
      r.d(t, {
        PB: function () {
          return NextSeo;
        },
      });
      var n = r(959),
        o = r(880),
        a = r.n(o);
      function _extends() {
        return (_extends = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function _objectWithoutPropertiesLoose(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++)
          (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      }
      var i = ["keyOverride"],
        l = ["crossOrigin"],
        s = {
          templateTitle: "",
          noindex: !1,
          nofollow: !1,
          norobots: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        buildOpenGraphMediaTags = function (e, t, r) {
          void 0 === t && (t = []);
          var o = void 0 === r ? {} : r,
            a = o.defaultWidth,
            i = o.defaultHeight;
          return t.reduce(function (t, r, o) {
            return (
              t.push(
                n.createElement("meta", {
                  key: "og:" + e + ":0" + o,
                  property: "og:" + e,
                  content: r.url,
                })
              ),
              r.alt &&
                t.push(
                  n.createElement("meta", {
                    key: "og:" + e + ":alt0" + o,
                    property: "og:" + e + ":alt",
                    content: r.alt,
                  })
                ),
              r.secureUrl &&
                t.push(
                  n.createElement("meta", {
                    key: "og:" + e + ":secure_url0" + o,
                    property: "og:" + e + ":secure_url",
                    content: r.secureUrl.toString(),
                  })
                ),
              r.type &&
                t.push(
                  n.createElement("meta", {
                    key: "og:" + e + ":type0" + o,
                    property: "og:" + e + ":type",
                    content: r.type.toString(),
                  })
                ),
              r.width
                ? t.push(
                    n.createElement("meta", {
                      key: "og:" + e + ":width0" + o,
                      property: "og:" + e + ":width",
                      content: r.width.toString(),
                    })
                  )
                : a &&
                  t.push(
                    n.createElement("meta", {
                      key: "og:" + e + ":width0" + o,
                      property: "og:" + e + ":width",
                      content: a.toString(),
                    })
                  ),
              r.height
                ? t.push(
                    n.createElement("meta", {
                      key: "og:" + e + ":height" + o,
                      property: "og:" + e + ":height",
                      content: r.height.toString(),
                    })
                  )
                : i &&
                  t.push(
                    n.createElement("meta", {
                      key: "og:" + e + ":height" + o,
                      property: "og:" + e + ":height",
                      content: i.toString(),
                    })
                  ),
              t
            );
          }, []);
        },
        buildTags = function (e) {
          var t,
            r,
            o,
            a,
            c,
            u = [];
          e.titleTemplate && (s.templateTitle = e.titleTemplate);
          var p = "";
          e.title
            ? ((p = e.title),
              s.templateTitle &&
                (p = s.templateTitle.replace(/%s/g, function () {
                  return p;
                })))
            : e.defaultTitle && (p = e.defaultTitle),
            p && u.push(n.createElement("title", { key: "title" }, p));
          var d =
              void 0 === e.noindex
                ? s.noindex || e.dangerouslySetAllPagesToNoIndex
                : e.noindex,
            f =
              void 0 === e.nofollow
                ? s.nofollow || e.dangerouslySetAllPagesToNoFollow
                : e.nofollow,
            m = e.norobots || s.norobots,
            y = "";
          if (e.robotsProps) {
            var h = e.robotsProps,
              g = h.nosnippet,
              b = h.maxSnippet,
              v = h.maxImagePreview,
              S = h.maxVideoPreview,
              _ = h.noarchive,
              k = h.noimageindex,
              x = h.notranslate,
              w = h.availableAfter;
            y =
              (g ? ",nosnippet" : "") +
              (b ? ",max-snippet:" + b : "") +
              (v ? ",max-image-preview:" + v : "") +
              (_ ? ",noarchive" : "") +
              (w ? ",available_after:" + w : "") +
              (k ? ",noimageindex" : "") +
              (S ? ",max-video-preview:" + S : "") +
              (x ? ",notranslate" : "");
          }
          if (
            (e.norobots && (s.norobots = !0),
            d || f
              ? (e.dangerouslySetAllPagesToNoIndex && (s.noindex = !0),
                e.dangerouslySetAllPagesToNoFollow && (s.nofollow = !0),
                u.push(
                  n.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content:
                      (d ? "noindex" : "index") +
                      "," +
                      (f ? "nofollow" : "follow") +
                      y,
                  })
                ))
              : (!m || y) &&
                u.push(
                  n.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content: "index,follow" + y,
                  })
                ),
            e.description &&
              u.push(
                n.createElement("meta", {
                  key: "description",
                  name: "description",
                  content: e.description,
                })
              ),
            e.themeColor &&
              u.push(
                n.createElement("meta", {
                  key: "theme-color",
                  name: "theme-color",
                  content: e.themeColor,
                })
              ),
            e.mobileAlternate &&
              u.push(
                n.createElement("link", {
                  rel: "alternate",
                  key: "mobileAlternate",
                  media: e.mobileAlternate.media,
                  href: e.mobileAlternate.href,
                })
              ),
            e.languageAlternates &&
              e.languageAlternates.length > 0 &&
              e.languageAlternates.forEach(function (e) {
                u.push(
                  n.createElement("link", {
                    rel: "alternate",
                    key: "languageAlternate-" + e.hrefLang,
                    hrefLang: e.hrefLang,
                    href: e.href,
                  })
                );
              }),
            e.twitter &&
              (e.twitter.cardType &&
                u.push(
                  n.createElement("meta", {
                    key: "twitter:card",
                    name: "twitter:card",
                    content: e.twitter.cardType,
                  })
                ),
              e.twitter.site &&
                u.push(
                  n.createElement("meta", {
                    key: "twitter:site",
                    name: "twitter:site",
                    content: e.twitter.site,
                  })
                ),
              e.twitter.handle &&
                u.push(
                  n.createElement("meta", {
                    key: "twitter:creator",
                    name: "twitter:creator",
                    content: e.twitter.handle,
                  })
                )),
            e.facebook &&
              e.facebook.appId &&
              u.push(
                n.createElement("meta", {
                  key: "fb:app_id",
                  property: "fb:app_id",
                  content: e.facebook.appId,
                })
              ),
            ((null != (t = e.openGraph) && t.title) || p) &&
              u.push(
                n.createElement("meta", {
                  key: "og:title",
                  property: "og:title",
                  content: (null == (a = e.openGraph) ? void 0 : a.title) || p,
                })
              ),
            ((null != (r = e.openGraph) && r.description) || e.description) &&
              u.push(
                n.createElement("meta", {
                  key: "og:description",
                  property: "og:description",
                  content:
                    (null == (c = e.openGraph) ? void 0 : c.description) ||
                    e.description,
                })
              ),
            e.openGraph)
          ) {
            if (
              ((e.openGraph.url || e.canonical) &&
                u.push(
                  n.createElement("meta", {
                    key: "og:url",
                    property: "og:url",
                    content: e.openGraph.url || e.canonical,
                  })
                ),
              e.openGraph.type)
            ) {
              var O = e.openGraph.type.toLowerCase();
              u.push(
                n.createElement("meta", {
                  key: "og:type",
                  property: "og:type",
                  content: O,
                })
              ),
                "profile" === O && e.openGraph.profile
                  ? (e.openGraph.profile.firstName &&
                      u.push(
                        n.createElement("meta", {
                          key: "profile:first_name",
                          property: "profile:first_name",
                          content: e.openGraph.profile.firstName,
                        })
                      ),
                    e.openGraph.profile.lastName &&
                      u.push(
                        n.createElement("meta", {
                          key: "profile:last_name",
                          property: "profile:last_name",
                          content: e.openGraph.profile.lastName,
                        })
                      ),
                    e.openGraph.profile.username &&
                      u.push(
                        n.createElement("meta", {
                          key: "profile:username",
                          property: "profile:username",
                          content: e.openGraph.profile.username,
                        })
                      ),
                    e.openGraph.profile.gender &&
                      u.push(
                        n.createElement("meta", {
                          key: "profile:gender",
                          property: "profile:gender",
                          content: e.openGraph.profile.gender,
                        })
                      ))
                  : "book" === O && e.openGraph.book
                  ? (e.openGraph.book.authors &&
                      e.openGraph.book.authors.length &&
                      e.openGraph.book.authors.forEach(function (e, t) {
                        u.push(
                          n.createElement("meta", {
                            key: "book:author:0" + t,
                            property: "book:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.book.isbn &&
                      u.push(
                        n.createElement("meta", {
                          key: "book:isbn",
                          property: "book:isbn",
                          content: e.openGraph.book.isbn,
                        })
                      ),
                    e.openGraph.book.releaseDate &&
                      u.push(
                        n.createElement("meta", {
                          key: "book:release_date",
                          property: "book:release_date",
                          content: e.openGraph.book.releaseDate,
                        })
                      ),
                    e.openGraph.book.tags &&
                      e.openGraph.book.tags.length &&
                      e.openGraph.book.tags.forEach(function (e, t) {
                        u.push(
                          n.createElement("meta", {
                            key: "book:tag:0" + t,
                            property: "book:tag",
                            content: e,
                          })
                        );
                      }))
                  : "article" === O && e.openGraph.article
                  ? (e.openGraph.article.publishedTime &&
                      u.push(
                        n.createElement("meta", {
                          key: "article:published_time",
                          property: "article:published_time",
                          content: e.openGraph.article.publishedTime,
                        })
                      ),
                    e.openGraph.article.modifiedTime &&
                      u.push(
                        n.createElement("meta", {
                          key: "article:modified_time",
                          property: "article:modified_time",
                          content: e.openGraph.article.modifiedTime,
                        })
                      ),
                    e.openGraph.article.expirationTime &&
                      u.push(
                        n.createElement("meta", {
                          key: "article:expiration_time",
                          property: "article:expiration_time",
                          content: e.openGraph.article.expirationTime,
                        })
                      ),
                    e.openGraph.article.authors &&
                      e.openGraph.article.authors.length &&
                      e.openGraph.article.authors.forEach(function (e, t) {
                        u.push(
                          n.createElement("meta", {
                            key: "article:author:0" + t,
                            property: "article:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.article.section &&
                      u.push(
                        n.createElement("meta", {
                          key: "article:section",
                          property: "article:section",
                          content: e.openGraph.article.section,
                        })
                      ),
                    e.openGraph.article.tags &&
                      e.openGraph.article.tags.length &&
                      e.openGraph.article.tags.forEach(function (e, t) {
                        u.push(
                          n.createElement("meta", {
                            key: "article:tag:0" + t,
                            property: "article:tag",
                            content: e,
                          })
                        );
                      }))
                  : ("video.movie" === O ||
                      "video.episode" === O ||
                      "video.tv_show" === O ||
                      "video.other" === O) &&
                    e.openGraph.video &&
                    (e.openGraph.video.actors &&
                      e.openGraph.video.actors.length &&
                      e.openGraph.video.actors.forEach(function (e, t) {
                        e.profile &&
                          u.push(
                            n.createElement("meta", {
                              key: "video:actor:0" + t,
                              property: "video:actor",
                              content: e.profile,
                            })
                          ),
                          e.role &&
                            u.push(
                              n.createElement("meta", {
                                key: "video:actor:role:0" + t,
                                property: "video:actor:role",
                                content: e.role,
                              })
                            );
                      }),
                    e.openGraph.video.directors &&
                      e.openGraph.video.directors.length &&
                      e.openGraph.video.directors.forEach(function (e, t) {
                        u.push(
                          n.createElement("meta", {
                            key: "video:director:0" + t,
                            property: "video:director",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.writers &&
                      e.openGraph.video.writers.length &&
                      e.openGraph.video.writers.forEach(function (e, t) {
                        u.push(
                          n.createElement("meta", {
                            key: "video:writer:0" + t,
                            property: "video:writer",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.duration &&
                      u.push(
                        n.createElement("meta", {
                          key: "video:duration",
                          property: "video:duration",
                          content: e.openGraph.video.duration.toString(),
                        })
                      ),
                    e.openGraph.video.releaseDate &&
                      u.push(
                        n.createElement("meta", {
                          key: "video:release_date",
                          property: "video:release_date",
                          content: e.openGraph.video.releaseDate,
                        })
                      ),
                    e.openGraph.video.tags &&
                      e.openGraph.video.tags.length &&
                      e.openGraph.video.tags.forEach(function (e, t) {
                        u.push(
                          n.createElement("meta", {
                            key: "video:tag:0" + t,
                            property: "video:tag",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.series &&
                      u.push(
                        n.createElement("meta", {
                          key: "video:series",
                          property: "video:series",
                          content: e.openGraph.video.series,
                        })
                      ));
            }
            e.defaultOpenGraphImageWidth &&
              (s.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
              e.defaultOpenGraphImageHeight &&
                (s.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
              e.openGraph.images &&
                e.openGraph.images.length &&
                u.push.apply(
                  u,
                  buildOpenGraphMediaTags("image", e.openGraph.images, {
                    defaultWidth: s.defaultOpenGraphImageWidth,
                    defaultHeight: s.defaultOpenGraphImageHeight,
                  })
                ),
              e.defaultOpenGraphVideoWidth &&
                (s.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
              e.defaultOpenGraphVideoHeight &&
                (s.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
              e.openGraph.videos &&
                e.openGraph.videos.length &&
                u.push.apply(
                  u,
                  buildOpenGraphMediaTags("video", e.openGraph.videos, {
                    defaultWidth: s.defaultOpenGraphVideoWidth,
                    defaultHeight: s.defaultOpenGraphVideoHeight,
                  })
                ),
              e.openGraph.audio &&
                u.push.apply(
                  u,
                  buildOpenGraphMediaTags("audio", e.openGraph.audio)
                ),
              e.openGraph.locale &&
                u.push(
                  n.createElement("meta", {
                    key: "og:locale",
                    property: "og:locale",
                    content: e.openGraph.locale,
                  })
                ),
              (e.openGraph.siteName || e.openGraph.site_name) &&
                u.push(
                  n.createElement("meta", {
                    key: "og:site_name",
                    property: "og:site_name",
                    content: e.openGraph.siteName || e.openGraph.site_name,
                  })
                );
          }
          return (
            e.canonical &&
              u.push(
                n.createElement("link", {
                  rel: "canonical",
                  href: e.canonical,
                  key: "canonical",
                })
              ),
            e.additionalMetaTags &&
              e.additionalMetaTags.length > 0 &&
              e.additionalMetaTags.forEach(function (e) {
                var t,
                  r,
                  o = e.keyOverride,
                  a = _objectWithoutPropertiesLoose(e, i);
                u.push(
                  n.createElement(
                    "meta",
                    _extends(
                      {
                        key:
                          "meta:" +
                          (null !=
                          (t =
                            null != (r = null != o ? o : a.name)
                              ? r
                              : a.property)
                            ? t
                            : a.httpEquiv),
                      },
                      a
                    )
                  )
                );
              }),
            null != (o = e.additionalLinkTags) &&
              o.length &&
              e.additionalLinkTags.forEach(function (e) {
                var t,
                  r = e.crossOrigin,
                  o = _objectWithoutPropertiesLoose(e, l);
                u.push(
                  n.createElement(
                    "link",
                    _extends(
                      {
                        key:
                          "link" +
                          (null != (t = o.keyOverride) ? t : o.href) +
                          o.rel,
                      },
                      o,
                      {
                        crossOrigin:
                          "anonymous" === r ||
                          "use-credentials" === r ||
                          "" === r
                            ? r
                            : void 0,
                      }
                    )
                  )
                );
              }),
            u
          );
        },
        WithHead = function (e) {
          return n.createElement(a(), null, buildTags(e));
        },
        NextSeo = function (e) {
          var t = e.title,
            r = e.themeColor,
            o = e.noindex,
            a = e.nofollow,
            i = e.robotsProps,
            l = e.description,
            s = e.canonical,
            c = e.openGraph,
            u = e.facebook,
            p = e.twitter,
            d = e.additionalMetaTags,
            f = e.titleTemplate,
            m = e.defaultTitle,
            y = e.mobileAlternate,
            h = e.languageAlternates,
            g = e.additionalLinkTags;
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(WithHead, {
              title: t,
              themeColor: r,
              noindex: o,
              nofollow: a,
              robotsProps: i,
              description: l,
              canonical: s,
              facebook: u,
              openGraph: c,
              additionalMetaTags: d,
              twitter: p,
              titleTemplate: f,
              defaultTitle: m,
              mobileAlternate: y,
              languageAlternates: h,
              additionalLinkTags: g,
            })
          );
        };
      RegExp(
        "[" +
          Object.keys(
            Object.freeze({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&apos;",
            })
          ).join("") +
          "]",
        "g"
      );
    },
    4395: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Raleway_bdd8fd', '__Raleway_Fallback_bdd8fd'",
          fontStyle: "normal",
        },
        className: "__className_bdd8fd",
      };
    },
    2194: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__Anonymous_Pro_8a540f', '__Anonymous_Pro_Fallback_8a540f'",
          fontStyle: "normal",
        },
        className: "__className_8a540f",
      };
    },
    880: function (e, t, r) {
      e.exports = r(6052);
    },
    198: function (e, t) {
      "use strict";
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        i = r ? Symbol.for("react.strict_mode") : 60108,
        l = r ? Symbol.for("react.profiler") : 60114,
        s = r ? Symbol.for("react.provider") : 60109,
        c = r ? Symbol.for("react.context") : 60110,
        u = r ? Symbol.for("react.async_mode") : 60111,
        p = r ? Symbol.for("react.concurrent_mode") : 60111,
        d = r ? Symbol.for("react.forward_ref") : 60112,
        f = r ? Symbol.for("react.suspense") : 60113,
        m = r ? Symbol.for("react.suspense_list") : 60120,
        y = r ? Symbol.for("react.memo") : 60115,
        h = r ? Symbol.for("react.lazy") : 60116,
        g = r ? Symbol.for("react.block") : 60121,
        b = r ? Symbol.for("react.fundamental") : 60117,
        v = r ? Symbol.for("react.responder") : 60118,
        S = r ? Symbol.for("react.scope") : 60119;
      function z(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case u:
                case p:
                case a:
                case l:
                case i:
                case f:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case d:
                    case h:
                    case y:
                    case s:
                      return e;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      function A(e) {
        return z(e) === p;
      }
      (t.AsyncMode = u),
        (t.ConcurrentMode = p),
        (t.ContextConsumer = c),
        (t.ContextProvider = s),
        (t.Element = n),
        (t.ForwardRef = d),
        (t.Fragment = a),
        (t.Lazy = h),
        (t.Memo = y),
        (t.Portal = o),
        (t.Profiler = l),
        (t.StrictMode = i),
        (t.Suspense = f),
        (t.isAsyncMode = function (e) {
          return A(e) || z(e) === u;
        }),
        (t.isConcurrentMode = A),
        (t.isContextConsumer = function (e) {
          return z(e) === c;
        }),
        (t.isContextProvider = function (e) {
          return z(e) === s;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }),
        (t.isForwardRef = function (e) {
          return z(e) === d;
        }),
        (t.isFragment = function (e) {
          return z(e) === a;
        }),
        (t.isLazy = function (e) {
          return z(e) === h;
        }),
        (t.isMemo = function (e) {
          return z(e) === y;
        }),
        (t.isPortal = function (e) {
          return z(e) === o;
        }),
        (t.isProfiler = function (e) {
          return z(e) === l;
        }),
        (t.isStrictMode = function (e) {
          return z(e) === i;
        }),
        (t.isSuspense = function (e) {
          return z(e) === f;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === a ||
            e === p ||
            e === l ||
            e === i ||
            e === f ||
            e === m ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === h ||
                e.$$typeof === y ||
                e.$$typeof === s ||
                e.$$typeof === c ||
                e.$$typeof === d ||
                e.$$typeof === b ||
                e.$$typeof === v ||
                e.$$typeof === S ||
                e.$$typeof === g))
          );
        }),
        (t.typeOf = z);
    },
    6237: function (e, t, r) {
      "use strict";
      e.exports = r(198);
    },
    4182: function (e, t, r) {
      "use strict";
      r.d(t, {
        Y: function () {
          return useInView;
        },
      });
      var n = r(959);
      let invariant = (e) => e,
        o = { some: 0, all: 1 };
      function useInView(
        e,
        { root: t, margin: r, amount: a, once: i = !1 } = {}
      ) {
        let [l, s] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            if (!e.current || (i && l)) return;
            let n = { root: (t && t.current) || void 0, margin: r, amount: a };
            return (function (
              e,
              t,
              { root: r, margin: n, amount: a = "some" } = {}
            ) {
              let i = (function (e, t, r) {
                  var n;
                  if ("string" == typeof e) {
                    let o = document;
                    t &&
                      (invariant(
                        !!t.current,
                        "Scope provided, but no element detected."
                      ),
                      (o = t.current)),
                      r
                        ? ((null !== (n = r[e]) && void 0 !== n) ||
                            (r[e] = o.querySelectorAll(e)),
                          (e = r[e]))
                        : (e = o.querySelectorAll(e));
                  } else e instanceof Element && (e = [e]);
                  return Array.from(e || []);
                })(e),
                l = new WeakMap(),
                s = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      let r = l.get(e.target);
                      if (!!r !== e.isIntersecting) {
                        if (e.isIntersecting) {
                          let r = t(e);
                          "function" == typeof r
                            ? l.set(e.target, r)
                            : s.unobserve(e.target);
                        } else r && (r(e), l.delete(e.target));
                      }
                    });
                  },
                  {
                    root: r,
                    rootMargin: n,
                    threshold: "number" == typeof a ? a : o[a],
                  }
                );
              return i.forEach((e) => s.observe(e)), () => s.disconnect();
            })(e.current, () => (s(!0), i ? void 0 : () => s(!1)), n);
          }, [t, e, r, i]),
          l
        );
      }
    },
  },
]);
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    3343: function (e, n, _) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return _(6585);
        },
      ]);
    },
    6585: function (e, n, _) {
      "use strict";
      _.r(n),
        _.d(n, {
          default: function () {
            return App;
          },
        });
      var t = _(1527);
      _(6184);
      var u = _(1718);
      function App(e) {
        let { Component: n, pageProps: _ } = e,
          r = (0, u.useRouter)();
        return (0, t.jsxs)(t.Fragment, {
          children: [
            !r.pathname.includes("/portfolio") &&
              (0, t.jsx)("div", {
                id: "noise",
                style: {
                  backgroundImage: "url(/img/bg_noise.webp)",
                  backgroundRepeat: "repeat",
                  mixBlendMode: "overlay",
                  opacity: "0.25",
                },
              }),
            (0, t.jsx)(n, { ..._ }),
          ],
        });
      }
    },
    6184: function () {},
    1718: function (e, n, _) {
      e.exports = _(1032);
    },
  },
  function (e) {
    var __webpack_exec__ = function (n) {
      return e((e.s = n));
    };
    e.O(0, [774, 179], function () {
      return __webpack_exec__(3343), __webpack_exec__(1032);
    }),
      (_N_E = e.O());
  },
]);

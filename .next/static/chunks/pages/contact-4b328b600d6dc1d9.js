(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{1382:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(5744)}])},9745:function(e,t,n){"use strict";var r=n(7294),i=n(3495);t.Z=(0,r.forwardRef)(function(e,t){let{children:n,direction:c,path:o,...u}=e,f={x:"100%",opacity:0},s={x:"-100%",opacity:0};return(0,r.createElement)(i.E.div,{ref:t,initial:"/"===o||"/contact"===o?"/"===o?s:f:"left"===c?s:f,animate:{x:0,opacity:1},exit:"/"===o||"/contact"===o?"/"===o?s:f:"left"===c?f:s,transition:{duration:.6,ease:"easeInOut"},...u,style:{width:"calc(100% - 4rem)",height:"calc(100% - 4rem)",position:"absolute",top:"2rem",left:"2rem"},key:o},n)})},2501:function(e,t,n){"use strict";n.d(t,{D:function(){return c}});var r=n(9215),i=n(7294);function c(e,t,n,c,o){let u=(0,r.Y)(e,{amount:t,once:!0}),[f,s]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{if(!0===c){setTimeout(()=>{s(!1)},n&&!0!==o?n:0);return}if(!0===u){setTimeout(()=>{s(!0)},n||0);return}},[u,c]),f}},5744:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),i=n(9745),c=n(2501),o=n(7294);function u(e,t){let n=(0,o.useRef)(null);return(0,c.D)(n,.75,0),(0,c.D)(n,.75,200),(0,c.D)(n,.75,400),(0,c.D)(n,.75,600),(0,r.jsx)(i.Z,{direction:e.direction,path:"/contact",ref:t,children:(0,r.jsx)("section",{children:"Contact"})})}},9215:function(e,t,n){"use strict";n.d(t,{Y:function(){return o}});var r=n(7294),i=n(5487);let c={some:0,all:1};function o(e,{root:t,margin:n,amount:o,once:u=!1}={}){let[f,s]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!e.current||u&&f)return;let r={root:t&&t.current||void 0,margin:n,amount:o};return function(e,t,{root:n,margin:r,amount:o="some"}={}){let u=function(e,t,n){var r;if("string"==typeof e){let c=document;t&&((0,i.k)(!!t.current,"Scope provided, but no element detected."),c=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=c.querySelectorAll(e)),e=n[e]):e=c.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e),f=new WeakMap,s=new IntersectionObserver(e=>{e.forEach(e=>{let n=f.get(e.target);if(!!n!==e.isIntersecting){if(e.isIntersecting){let n=t(e);"function"==typeof n?f.set(e.target,n):s.unobserve(e.target)}else n&&(n(e),f.delete(e.target))}})},{root:n,rootMargin:r,threshold:"number"==typeof o?o:c[o]});return u.forEach(e=>s.observe(e)),()=>s.disconnect()}(e.current,()=>(s(!0),u?void 0:()=>s(!1)),r)},[t,e,n,u,o]),f}}},function(e){e.O(0,[495,888,774,179],function(){return e(e.s=1382)}),_N_E=e.O()}]);
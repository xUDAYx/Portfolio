(()=>{var e={};e.id=888,e.ids=[888],e.modules={3982:e=>{e.exports={nav__drawer:"NavDrawer_nav__drawer___q6CC",nav__drawer__border:"NavDrawer_nav__drawer__border__41e23",nav__drawer__indicator:"NavDrawer_nav__drawer__indicator__jYxu1",home:"NavDrawer_home__qCwSR",about:"NavDrawer_about__Q5kc3",projects:"NavDrawer_projects__h0ujB",contact:"NavDrawer_contact__I0v_H",nav__drawer__item:"NavDrawer_nav__drawer__item__bM1nI",active:"NavDrawer_active__9kKq_"}},8458:e=>{e.exports={indicator__container:"PageIndicator_indicator__container__G0qpy"}},8363:e=>{e.exports={top__left__deco:"_app_top__left__deco__qVFUV",bottom__right__deco:"_app_bottom__right__deco__C3GB4",main:"_app_main__L26_1"}},8824:(e,r,a)=>{"use strict";a.d(r,{Z:()=>l});var t=a(997),_=a(6689),s=a(3982),i=a.n(s),c=a(8390),n=a(1664),o=a.n(n),d=a(5463),m=a.n(d),u=a(1163);function l({setDirection:e}){(0,u.useRouter)();let[r,a]=(0,_.useState)(0),[s,n]=(0,_.useState)(i().home);return(0,_.useEffect)(()=>{switch(r){case 0:n(i().home);break;case 1:n(i().about);break;case 2:n(i().projects);break;case 3:n(i().contact)}},[r]),(0,t.jsxs)("nav",{className:(0,c.Z)(i().nav__drawer,m().className),children:[t.jsx("div",{className:i().nav__drawer__border}),t.jsx("div",{className:(0,c.Z)(i().nav__drawer__indicator,s)}),[{name:"Home",href:"/"},{name:"About",href:"/about"},{name:"Projects",href:"/projects"},{name:"Contact",href:"/contact"}].map((_,s)=>(0,t.jsxs)(o(),{className:(0,c.Z)(i().nav__drawer__item,r===s&&i().active),onClick:()=>a(s),onMouseOver:()=>{s!==r&&e(s>r?"right":"left")},href:_.href,children:[t.jsx("span",{className:i().nav__drawer__item__text,children:_.name}),t.jsx("div",{className:i().nav__drawer__item__indicator,style:{opacity:r===s?1:0}})]},s))]})}},2005:(e,r,a)=>{"use strict";a.d(r,{Z:()=>o});var t=a(997),_=a(8390),s=a(8458),i=a.n(s),c=a(5463),n=a.n(c);function o({path:e}){return t.jsx("div",{className:(0,_.Z)(i().indicator__container,n().className),children:t.jsx("div",{className:"absolute z-0 select-none bottom-0 right-0",children:"Home"})})}},8390:(e,r,a)=>{"use strict";function t(...e){return e.filter(Boolean).join(" ")}a.d(r,{Z:()=>t})},5143:(e,r,a)=>{"use strict";a.a(e,async(e,t)=>{try{a.r(r),a.d(r,{default:()=>j});var _=a(997);a(2210);var s=a(1163),i=a(6197),c=a(8824),n=a(2005),o=a(8363),d=a.n(o),m=a(8390),u=a(1869),l=a.n(u),v=a(5463),p=a.n(v),h=a(6689),x=e([i]);function j({Component:e,pageProps:r}){let a=(0,s.useRouter)(),t=a.asPath,[o,u]=(0,h.useState)("right");return r.direction=o,r.setDirection=u,(0,_.jsxs)(_.Fragment,{children:[_.jsx(c.Z,{setDirection:u}),_.jsx(n.Z,{path:a.pathname}),_.jsx("div",{className:(0,m.Z)(d().top__left__deco,l().className),children:"///"}),_.jsx("div",{className:(0,m.Z)(d().bottom__right__deco,l().className),children:"%%%"}),_.jsx("main",{className:(0,m.Z)(d().main,p().className),children:_.jsx(i.AnimatePresence,{initial:!1,mode:"popLayout",children:_.jsx(e,{...r},t)})})]})}i=(x.then?(await x)():x)[0],t()}catch(e){t(e)}})},2210:()=>{},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},6197:e=>{"use strict";e.exports=import("framer-motion")},7147:e=>{"use strict";e.exports=require("fs")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var r=require("../webpack-runtime.js");r.C(e);var a=e=>r(r.s=e),t=r.X(0,[255,57],()=>a(5143));module.exports=t})();
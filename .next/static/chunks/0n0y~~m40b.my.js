(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},18566,(e,t,o)=>{t.exports=e.r(76562)},9719,e=>{"use strict";var t=e.i(43476),o=e.i(71645),r=e.i(18566),i=e.i(97053);e.s(["default",0,function({children:e}){let[l]=(0,o.useState)(()=>new i.ServerStyleSheet);return(0,r.useServerInsertedHTML)(()=>{let e=l.getStyleElement();return l.instance.clearTag(),(0,t.jsx)(t.Fragment,{children:e})}),(0,t.jsx)(t.Fragment,{children:e})}])},90713,e=>{"use strict";var t=e.i(43476),o=e.i(71645),r=e.i(97053),i=e.i(57688),l=e.i(1222),s=e.i(76525);let n=r.default.nav`
  background-color: ${l.default.colors.secondary};
  padding: 0.875rem 1.5rem;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 19.876rem);
  margin: 0 9.938rem;
  position: fixed;
  top: ${e=>e.$isVisible?"3.875rem":"-100px"};
  z-index: 1000;
  transition: top 0.3s ease-in-out;
`,a=r.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,c=r.default.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`,d=r.default.a`
  color: ${l.default.colors.white};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  font-family: 'Pangram-Regular', sans-serif;

  &:hover {
    color: ${l.default.colors.primary};
  }
`;e.s(["default",0,()=>{let[e,r]=(0,o.useState)(!0),[u,f]=(0,o.useState)(0),m=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})};return(0,o.useEffect)(()=>{let e=()=>{let e=window.scrollY;e<100?r(!0):e>u?r(!1):r(!0),f(e)};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[u]),(0,t.jsxs)(n,{$isVisible:e,children:[(0,t.jsx)(a,{children:(0,t.jsx)(i.default,{src:"/Logo/Aarasoft_Logo_White.svg",alt:"Aarasoft Logo",width:124,height:24})}),(0,t.jsxs)(c,{children:[(0,t.jsx)(d,{onClick:()=>m("hero"),children:"Home"}),(0,t.jsx)(d,{onClick:()=>m("course"),children:"About Course"}),(0,t.jsx)(d,{onClick:()=>m("programs"),children:"Modules"}),(0,t.jsx)(d,{onClick:()=>m("contact"),children:"Contact Us"})]}),(0,t.jsx)(s.default,{text:"Contact Us",bgColor:l.default.colors.primary,textColor:l.default.colors.secondary,iconSrc:"/Logo/whatsappLogo.svg",iconAlt:"WhatsApp",onClick:()=>m("contact"),width:"10rem"})]})}])},43665,e=>{"use strict";var t=e.i(43476),o=e.i(97053),r=e.i(1222),i=e.i(76525);let l=o.default.footer`
  background-color: ${r.default.colors.textColor};
  padding: 4rem 2.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`,s=o.default.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;
`,n=o.default.div`
  img {
    height: 2.5rem;
    width: auto;
  }
`,a=o.default.div`
  display: flex;
`,c=o.default.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,d=o.default.a`
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: ${r.default.colors.white};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${r.default.colors.primary};
  }
`,u=o.default.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
`,f=o.default.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
`,m=o.default.p`
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: ${r.default.colors.white};
  margin: 0;
`,g=o.default.img`
  width: auto;
  height: auto;
  max-width: 100%;
  align-self: center;
`;e.s(["Footer",0,()=>{let e=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})};return(0,t.jsxs)(l,{children:[(0,t.jsxs)(s,{children:[(0,t.jsx)(n,{children:(0,t.jsx)("img",{src:"/Logo/Aarasoft_Logo_White.svg",alt:"Aarasoft Logo"})}),(0,t.jsx)(a,{children:(0,t.jsxs)(c,{children:[(0,t.jsx)(d,{onClick:()=>e("hero"),children:"Home"}),(0,t.jsx)(d,{onClick:()=>e("course"),children:"About Course"}),(0,t.jsx)(d,{onClick:()=>e("programs"),children:"Modules"}),(0,t.jsx)(d,{onClick:()=>e("contact"),children:"Contact Us"})]})}),(0,t.jsx)(a,{children:(0,t.jsxs)(c,{children:[(0,t.jsx)(d,{href:"https://linkedin.com",target:"_blank",children:"LinkedIn"}),(0,t.jsx)(d,{href:"https://instagram.com",target:"_blank",children:"Instagram"})]})}),(0,t.jsxs)(u,{children:[(0,t.jsxs)(f,{children:[(0,t.jsx)(m,{children:"designedbymanoj@gmail.com"}),(0,t.jsx)(m,{children:"9342242792"})]}),(0,t.jsx)(i.default,{text:"Join Course",bgColor:r.default.colors.primary,textColor:r.default.colors.secondary,width:"269px",iconSrc:"/Logo/whatsappLogo.svg",iconAlt:"WhatsApp",onClick:()=>e("contact")})]})]}),(0,t.jsx)(g,{src:"/Images/footerText.png",alt:"Footer Text"})]})}])}]);
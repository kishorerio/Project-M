module.exports=[46673,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/ui/Button.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/ui/Button.tsx <module evaluation>","default")},42841,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/ui/Button.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/ui/Button.tsx","default")},1719,a=>{"use strict";a.i(46673);var b=a.i(42841);a.n(b)},16426,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"warnOnce",{enumerable:!0,get:function(){return d}});let d=a=>{}},29945,(a,b,c)=>{"use strict";let d;Object.defineProperty(c,"__esModule",{value:!0});var e={getAssetToken:function(){return i},getAssetTokenQuery:function(){return j},getDeploymentId:function(){return g},getDeploymentIdQuery:function(){return h}};for(var f in e)Object.defineProperty(c,f,{enumerable:!0,get:e[f]});function g(){return d}function h(a=!1){return d?`${a?"&":"?"}dpl=${d}`:""}function i(){return!1}function j(a=!1){return""}d=void 0},1359,(a,b,c)=>{"use strict";function d({widthInt:a,heightInt:b,blurWidth:c,blurHeight:e,blurDataURL:f,objectFit:g}){let h=c?40*c:a,i=e?40*e:b,j=h&&i?`viewBox='0 0 ${h} ${i}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${j}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${j?"none":"contain"===g?"xMidYMid":"cover"===g?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${f}'/%3E%3C/svg%3E`}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImageBlurSvg",{enumerable:!0,get:function(){return d}})},53549,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={VALID_LOADERS:function(){return f},imageConfigDefault:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=["default","imgix","cloudinary","akamai","custom"],g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},87713,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImgProps",{enumerable:!0,get:function(){return j}}),a.r(16426);let d=a.r(29945),e=a.r(1359),f=a.r(53549),g=["-moz-initial","fill","none","scale-down",void 0];function h(a){return void 0!==a.default}function i(a){return void 0===a?a:"number"==typeof a?Number.isFinite(a)?a:NaN:"string"==typeof a&&/^[0-9]+$/.test(a)?parseInt(a,10):NaN}function j({src:a,sizes:b,unoptimized:c=!1,priority:k=!1,preload:l=!1,loading:m,className:n,quality:o,width:p,height:q,fill:r=!1,style:s,overrideSrc:t,onLoad:u,onLoadingComplete:v,placeholder:w="empty",blurDataURL:x,fetchPriority:y,decoding:z="async",layout:A,objectFit:B,objectPosition:C,lazyBoundary:D,lazyRoot:E,...F},G){var H;let I,J,K,{imgConf:L,showAltText:M,blurComplete:N,defaultLoader:O}=G,P=L||f.imageConfigDefault;if("allSizes"in P)I=P;else{let a=[...P.deviceSizes,...P.imageSizes].sort((a,b)=>a-b),b=P.deviceSizes.sort((a,b)=>a-b),c=P.qualities?.sort((a,b)=>a-b);I={...P,allSizes:a,deviceSizes:b,qualities:c}}if(void 0===O)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let Q=F.loader||O;delete F.loader,delete F.srcSet;let R="__next_img_default"in Q;if(R){if("custom"===I.loader)throw Object.defineProperty(Error(`Image with src "${a}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let a=Q;Q=b=>{let{config:c,...d}=b;return a(d)}}if(A){"fill"===A&&(r=!0);let a={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];a&&(s={...s,...a});let c={responsive:"100vw",fill:"100vw"}[A];c&&!b&&(b=c)}let S="",T=i(p),U=i(q);if((H=a)&&"object"==typeof H&&(h(H)||void 0!==H.src)){let b=h(a)?a.default:a;if(!b.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(b)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!b.height||!b.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(b)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(J=b.blurWidth,K=b.blurHeight,x=x||b.blurDataURL,S=b.src,!r)if(T||U){if(T&&!U){let a=T/b.width;U=Math.round(b.height*a)}else if(!T&&U){let a=U/b.height;T=Math.round(b.width*a)}}else T=b.width,U=b.height}let V=!k&&!l&&("lazy"===m||void 0===m);(!(a="string"==typeof a?a:S)||a.startsWith("data:")||a.startsWith("blob:"))&&(c=!0,V=!1),I.unoptimized&&(c=!0),R&&!I.dangerouslyAllowSVG&&a.split("?",1)[0].endsWith(".svg")&&(c=!0);let W=i(o),X=Object.assign(r?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:B,objectPosition:C}:{},M?{}:{color:"transparent"},s),Y=N||"empty"===w?null:"blur"===w?`url("data:image/svg+xml;charset=utf-8,${(0,e.getImageBlurSvg)({widthInt:T,heightInt:U,blurWidth:J,blurHeight:K,blurDataURL:x||"",objectFit:X.objectFit})}")`:`url("${w}")`,Z=g.includes(X.objectFit)?"fill"===X.objectFit?"100% 100%":"cover":X.objectFit,$=Y?{backgroundSize:Z,backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},_=function({config:a,src:b,unoptimized:c,width:e,quality:f,sizes:g,loader:h}){if(c){if(b.startsWith("/")&&!b.startsWith("//")){let a=(0,d.getDeploymentId)();if(a){let c=b.indexOf("?");if(-1!==c){let d=new URLSearchParams(b.slice(c+1));d.get("dpl")||(d.append("dpl",a),b=b.slice(0,c)+"?"+d.toString())}else b+=`?dpl=${a}`}}return{src:b,srcSet:void 0,sizes:void 0}}let{widths:i,kind:j}=function({deviceSizes:a,allSizes:b},c,d){if(d){let c=/(^|\s)(1?\d?\d)vw/g,e=[];for(let a;a=c.exec(d);)e.push(parseInt(a[2]));if(e.length){let c=.01*Math.min(...e);return{widths:b.filter(b=>b>=a[0]*c),kind:"w"}}return{widths:b,kind:"w"}}return"number"!=typeof c?{widths:a,kind:"w"}:{widths:[...new Set([c,2*c].map(a=>b.find(b=>b>=a)||b[b.length-1]))],kind:"x"}}(a,e,g),k=i.length-1;return{sizes:g||"w"!==j?g:"100vw",srcSet:i.map((c,d)=>`${h({config:a,src:b,quality:f,width:c})} ${"w"===j?c:d+1}${j}`).join(", "),src:h({config:a,src:b,quality:f,width:i[k]})}}({config:I,src:a,unoptimized:c,width:T,quality:W,sizes:b,loader:Q}),aa=V?"lazy":m;return{props:{...F,loading:aa,fetchPriority:y,width:T,height:U,decoding:z,className:n,style:{...X,...$},sizes:_.sizes,srcSet:_.srcSet,src:t||_.src},meta:{unoptimized:c,preload:l||k,placeholder:w,fill:r}}}},42377,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(11857);a.n(d("[project]/node_modules/next/dist/client/image-component.js <module evaluation>"))},43489,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(11857);a.n(d("[project]/node_modules/next/dist/client/image-component.js"))},18409,a=>{"use strict";a.i(42377);var b=a.i(43489);a.n(b)},53200,(a,b,c)=>{"use strict";function d(a,b){let c=a||75;return b?.qualities?.length?b.qualities.reduce((a,b)=>Math.abs(b-c)<Math.abs(a-c)?b:a,b.qualities[0]):c}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"findClosestQuality",{enumerable:!0,get:function(){return d}})},37763,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return g}});let d=a.r(53200),e=a.r(29945);function f({config:a,src:b,width:c,quality:g}){let h=(0,e.getDeploymentId)();if(b.startsWith("/")&&!b.startsWith("//")){let a=b.indexOf("?");if(-1!==a){let c=new URLSearchParams(b.slice(a+1)),d=c.get("dpl");if(d){h=d,c.delete("dpl");let e=c.toString();b=b.slice(0,a)+(e?"?"+e:"")}}}if(b.startsWith("/")&&b.includes("?")&&a.localPatterns?.length===1&&"**"===a.localPatterns[0].pathname&&""===a.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${b}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let i=(0,d.findClosestQuality)(g,a);return`${a.path}?url=${encodeURIComponent(b)}&w=${c}&q=${i}${b.startsWith("/")&&h?`&dpl=${h}`:""}`}f.__next_img_default=!0;let g=f},50858,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return k},getImageProps:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(71029),g=a.r(87713),h=a.r(18409),i=f._(a.r(37763));function j(a){let{props:b}=(0,g.getImgProps)(a,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[a,c]of Object.entries(b))void 0===c&&delete b[a];return{props:b}}let k=h.Image},3236,(a,b,c)=>{b.exports=a.r(50858)},19731,(a,b,c)=>{b.exports=[{id:1,name:"Sarah Johnson",role:"UI/UX Designer",subject:"Portfolio Development",review:"This course completely transformed my design skills. The mentorship was incredible and I landed my first design job within 2 months of completing the program.",rating:5,profileImage:"/Images/sample.jpg"},{id:2,name:"Michael Chen",role:"Product Designer",subject:"Design Fundamentals",review:"Amazing course structure! The practical projects helped me build a portfolio that impressed employers. Highly recommend for beginners.",rating:5,profileImage:"/Images/sample.jpg"},{id:3,name:"Emily Rodriguez",role:"Freelance Designer",subject:"Freelance Mentorship",review:"The freelance mentorship was a game-changer. I learned how to price my work and find clients. Now I'm running my own design business successfully.",rating:4,profileImage:"/Images/sample.jpg"},{id:4,name:"David Kim",role:"Junior Designer",subject:"Design Tools",review:"Great introduction to design tools and principles. The no-coding approach made it accessible for someone with zero technical background like me.",rating:5,profileImage:"/Images/sample.jpg"},{id:5,name:"Lisa Thompson",role:"Career Changer",subject:"Career Transition",review:"Switched from marketing to UX design thanks to this course. The mentors provided excellent guidance throughout my career transition journey.",rating:4,profileImage:"/Images/sample.jpg"},{id:6,name:"Alex Martinez",role:"Design Student",subject:"Portfolio Building",review:"The portfolio building section was outstanding. I created 3 professional projects that helped me stand out in job interviews.",rating:5,profileImage:"/Images/sample.jpg"}]},27951,a=>{"use strict";a.s(["Faq",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call Faq() from the server but Faq is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/faq/Faq.tsx <module evaluation>","Faq")},84953,a=>{"use strict";a.s(["Faq",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call Faq() from the server but Faq is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/faq/Faq.tsx","Faq")},51829,a=>{"use strict";a.i(27951);var b=a.i(84953);a.n(b)},78574,a=>{"use strict";a.s(["CareerContact",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call CareerContact() from the server but CareerContact is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/careerContact/CareerContact.tsx <module evaluation>","CareerContact")},27348,a=>{"use strict";a.s(["CareerContact",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call CareerContact() from the server but CareerContact is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/careerContact/CareerContact.tsx","CareerContact")},59897,a=>{"use strict";a.i(78574);var b=a.i(27348);a.n(b)},88177,a=>{"use strict";a.s(["Course",()=>c,"default",()=>d]);var b=a.i(11857);let c=(0,b.registerClientReference)(function(){throw Error("Attempted to call Course() from the server but Course is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/course/Course.tsx <module evaluation>","Course"),d=(0,b.registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/course/Course.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/course/Course.tsx <module evaluation>","default")},71067,a=>{"use strict";a.s(["Course",()=>c,"default",()=>d]);var b=a.i(11857);let c=(0,b.registerClientReference)(function(){throw Error("Attempted to call Course() from the server but Course is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/course/Course.tsx","Course"),d=(0,b.registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/course/Course.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/course/Course.tsx","default")},18621,a=>{"use strict";a.i(88177);var b=a.i(71067);a.n(b)},12097,a=>{"use strict";a.s(["Programs",()=>c,"default",()=>d]);var b=a.i(11857);let c=(0,b.registerClientReference)(function(){throw Error("Attempted to call Programs() from the server but Programs is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/programs/Programs.tsx <module evaluation>","Programs"),d=(0,b.registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/programs/Programs.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/programs/Programs.tsx <module evaluation>","default")},69227,a=>{"use strict";a.s(["Programs",()=>c,"default",()=>d]);var b=a.i(11857);let c=(0,b.registerClientReference)(function(){throw Error("Attempted to call Programs() from the server but Programs is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/programs/Programs.tsx","Programs"),d=(0,b.registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/programs/Programs.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/programs/Programs.tsx","default")},96432,a=>{"use strict";a.i(12097);var b=a.i(69227);a.n(b)},92695,a=>{"use strict";a.s(["WhyAarasoft",()=>c,"default",()=>d]);var b=a.i(11857);let c=(0,b.registerClientReference)(function(){throw Error("Attempted to call WhyAarasoft() from the server but WhyAarasoft is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/whyAarasoft/WhyAarasoft.tsx <module evaluation>","WhyAarasoft"),d=(0,b.registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/whyAarasoft/WhyAarasoft.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/whyAarasoft/WhyAarasoft.tsx <module evaluation>","default")},53959,a=>{"use strict";a.s(["WhyAarasoft",()=>c,"default",()=>d]);var b=a.i(11857);let c=(0,b.registerClientReference)(function(){throw Error("Attempted to call WhyAarasoft() from the server but WhyAarasoft is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/whyAarasoft/WhyAarasoft.tsx","WhyAarasoft"),d=(0,b.registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/whyAarasoft/WhyAarasoft.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/whyAarasoft/WhyAarasoft.tsx","default")},80520,a=>{"use strict";a.i(92695);var b=a.i(53959);a.n(b)},15874,a=>{"use strict";a.s(["WhyCourse",()=>c,"default",()=>d]);var b=a.i(11857);let c=(0,b.registerClientReference)(function(){throw Error("Attempted to call WhyCourse() from the server but WhyCourse is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/whyCourse/WhyCourse.tsx <module evaluation>","WhyCourse"),d=(0,b.registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/whyCourse/WhyCourse.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/whyCourse/WhyCourse.tsx <module evaluation>","default")},86890,a=>{"use strict";a.s(["WhyCourse",()=>c,"default",()=>d]);var b=a.i(11857);let c=(0,b.registerClientReference)(function(){throw Error("Attempted to call WhyCourse() from the server but WhyCourse is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/whyCourse/WhyCourse.tsx","WhyCourse"),d=(0,b.registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/whyCourse/WhyCourse.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/whyCourse/WhyCourse.tsx","default")},20499,a=>{"use strict";a.i(15874);var b=a.i(86890);a.n(b)},50708,a=>{"use strict";var b=a.i(7997);let c="#93E46E",d="#1D1D1D",e="#525252",f="#FFFFFF",g="#AEAEAE",h="#FAFAFA";var i=a.i(77104),j=a.i(1719);let k=i.default.div`
  height: 140vh;
  background-image: url('/Images/Bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -80px 2.5rem 0 2.5rem;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
`,l=i.default.img`
  position: absolute;
  ${a=>a.$position};
  animation: float 3s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`,m=(0,i.default)(l)`
  left: 4%;
  top: 43%;
  width: 11.078rem;
  height: 4rem;
  animation-delay: 0s;
`,n=(0,i.default)(l)`
  left: 10%;
  bottom: 10%;
  width: 11.078rem;
  height: 4rem;
  animation-delay: 1s;
`,o=(0,i.default)(l)`
  right: 6%;
  top: 45%;
  width: 11.078rem;
  height: 4rem;
  animation-delay: 0.5s;
`,p=i.default.h1`
  display: flex;
  align-items: center;
  flex-direction: column;
`,q=i.default.h1`
  font-size: 4.125rem;
  font-family: 'Rightgrotesk-widemedium', sans-serif;
  font-weight: 500;
  line-height: 120%;
  color: ${d};
margin-bottom: 3rem;
text-align: center;

  span {
    color: ${c};
  }
`,r=i.default.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: center;
  color: ${e};
margin-bottom: 3rem;

`,s=()=>(0,b.jsxs)(k,{children:[(0,b.jsx)(m,{src:"/Images/blue.svg",alt:"Blue",$position:""}),(0,b.jsx)(n,{src:"/Images/kaavi.svg",alt:"Kaavi",$position:""}),(0,b.jsx)(o,{src:"/Images/green.svg",alt:"Green",$position:""}),(0,b.jsxs)(p,{children:[(0,b.jsxs)(q,{children:["From Beginner to Confident",(0,b.jsx)("br",{})," ",(0,b.jsx)("span",{children:"UI/UX Designer"})," ","in 8 Weeks"]}),(0,b.jsx)(r,{children:"No fluff. Just practical skills, real projects, and AI-powered tools to help you break into the design industry."}),(0,b.jsx)(j.default,{text:"Book My Free Career Call",bgColor:c,textColor:d,iconSrc:"/Logo/whatsappLogo.svg",iconAlt:"WhatsApp",width:"19.063rem"})]})]});var t=a.i(3236);let u=i.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 5rem);
  margin: 0 2.5rem 6.25rem 2.5rem;
  padding: 1rem 2.063rem;
  border-radius: 1.255rem;
  background-color: ${h};
`,v=i.default.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,w=i.default.h3`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: 0%;
  color: ${g};
  margin: 0;
`,x=i.default.p`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 0%;
  color: ${d};
  margin: 0;
`,y=i.default.div`
  width: 1px;
  height: 60px;
  background-color: #EDEDED;
`,z=()=>(0,b.jsxs)(u,{children:[(0,b.jsx)(t.default,{src:"Images/fileSvg.svg",alt:"file icon",width:99,height:99}),(0,b.jsxs)(v,{children:[(0,b.jsx)(w,{children:"Current Batch"}),(0,b.jsx)(x,{children:"Batch 1"})]}),(0,b.jsx)(y,{}),(0,b.jsxs)(v,{children:[(0,b.jsx)(w,{children:"Total Weeks"}),(0,b.jsx)(x,{children:"8 Weeks"})]}),(0,b.jsx)(y,{}),(0,b.jsxs)(v,{children:[(0,b.jsx)(w,{children:"Next Batch"}),(0,b.jsx)(x,{children:"Batch 2"})]}),(0,b.jsx)(y,{}),(0,b.jsxs)(v,{children:[(0,b.jsx)(w,{children:"Enrollment begins"}),(0,b.jsx)(x,{children:"April 15,2026"})]})]});var A=a.i(717);let B=i.keyframes`
  0% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(-100%);
  }
`,C=i.default.div`
  padding: 1.75rem 0;
  background-color: ${c};
  width: 100%;
  overflow: hidden;
  margin-bottom: 6.25rem;
`,D=i.default.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  animation: ${B} 20s linear infinite;
`,E=i.default.span`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 1.875rem;
  color: ${d};
  margin: 0 2rem;
`,F=i.default.span`
  font-size: 2.5rem;
  color: ${f};
  margin: 0;
  line-height: 1;
`,G=()=>{let a=["Build Job-Ready Portfolio","1:1 Personal Mentorship","Freelance Mentorship","No Coding Required"];return(0,b.jsx)(C,{children:(0,b.jsx)(D,{children:[,,,].fill(null).map((c,d)=>(0,b.jsx)(A.default.Fragment,{children:a.map((a,c)=>(0,b.jsxs)(A.default.Fragment,{children:[(0,b.jsx)(E,{children:a}),(0,b.jsx)(F,{children:"•"})]},`${d}-${c}`))},d))})})},H=i.default.div`
  background-color: #F5F5F5;
  border-radius: 1.25rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  min-width: 350px;
  margin-right: 2rem;
`,I=i.default.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  margin-bottom: 2.188rem;
`,J=i.default.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,K=i.default.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  flex: 1;
  margin-bottom: 3.188rem;
`,L=(0,i.default)(t.default)`
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  width: 62px;
  height: 62px;
`,M=i.default.h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  color: ${d};
  margin: 0;
`,N=i.default.p`
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: ${e};
  margin: 0;
`,O=i.default.p`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: ${d};
  margin: 0;
`,P=i.default.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: ${e};
  line-height: 150%;
  margin: 0.5rem 0;
`,Q=i.default.div`
  display: flex;
  gap: 0.25rem;
`,R=i.default.span`
  color: ${a=>a.filled?c:"#E0E0E0"};
  font-size: 1.25rem;
`,S=({name:a,role:c,subject:d,review:e,rating:f,profileImage:g})=>(0,b.jsxs)(H,{children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)(I,{children:[(0,b.jsx)(L,{src:g,alt:`${a} profile`,width:62,height:62}),(0,b.jsxs)(J,{children:[(0,b.jsx)(M,{children:a}),(0,b.jsx)(N,{children:c})]})]}),(0,b.jsxs)(K,{children:[(0,b.jsx)(O,{children:d}),(0,b.jsx)(P,{children:e})]})]}),(0,b.jsx)(Q,{children:Array.from({length:5},(a,c)=>(0,b.jsx)(R,{filled:c<f,children:"★"},c))})]});var T=a.i(19731);let U=i.keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`,V=i.default.div`
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
  margin-bottom: 6.25rem;
`,W=i.default.h2`
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 400;
  font-size: 3.375rem;
  line-height: 120%;
  color: ${d};
  text-align: left;
  margin: 0 2.5rem 2.875rem 2.5rem;

  span {
    color: ${c};
  }
`,X=i.default.div`
  display: flex;
  animation: ${U} 60s linear infinite;
  width: fit-content;

  &:hover {
    animation-play-state: paused;
  }
`,Y=i.default.div`
  display: flex;
  gap: 0;
`,Z=()=>{let a=[...T.default,...T.default,...T.default];return(0,b.jsxs)(V,{children:[(0,b.jsxs)(W,{children:["What Our ",(0,b.jsxs)("span",{children:["Students",(0,b.jsx)("br",{})," Says"]})]}),(0,b.jsx)(X,{children:(0,b.jsx)(Y,{children:a.map((a,c)=>(0,b.jsx)(S,{name:a.name,role:a.role,subject:a.subject,review:a.review,rating:a.rating,profileImage:a.profileImage},`${a.id}-${c}`))})})]})};var $=a.i(51829);let _=i.default.div`
  display: flex;
  align-items: center;
  gap: 2.6rem;
  margin: 0 2.5rem;
  position: relative;
  margin-bottom: 9.728rem;
`,aa=i.default.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 25.148rem;
  transform: rotate(0deg);
  opacity: 1;
  border-radius: 1.476rem;
`,ab=i.default.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/Images/mentorBg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.5;
    z-index: 1;
    border-radius: 1.476rem;
  }
`,ac=(0,i.default)(t.default)`
  position: relative;
  z-index: 2;
  object-fit: cover;
`,ad=i.default.div`
  background-color: ${f};
  padding: 1rem;
  border-radius: 7.78px;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 14.938rem;
  z-index: 3;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,ae=i.default.h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 400;
  font-size: 1.625rem;
  color: ${c};
  margin: 0 0 0.25rem 0;    
`,af=i.default.p`
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: ${d};
  margin: 0;
`,ag=i.default.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ah=i.default.h2`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 600;
  font-size: 3.375rem;
  line-height: 120%;
  color: ${d};
  margin: 0 0 1rem 0;

  span {
    color: ${c};
  }
`,ai=i.default.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;
  color: ${e};
  margin: 0 0 1.5rem 0;
`,aj=i.default.div`
  display: flex;
  gap: 4.063rem;
  margin-top: 1rem;
`,ak=i.default.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }
`,al=i.default.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }
`,am=()=>(0,b.jsxs)(_,{children:[(0,b.jsx)(aa,{children:(0,b.jsxs)(ab,{children:[(0,b.jsx)(ac,{src:"/Images/mentorPic.png",alt:"Manoj Kumar - UI/UX Designer",width:330,height:480}),(0,b.jsxs)(ad,{children:[(0,b.jsx)(ae,{children:"Manoj Kumar"}),(0,b.jsx)(af,{children:"(UI/UX Designer)"})]})]})}),(0,b.jsxs)(ag,{children:[(0,b.jsxs)(ah,{children:["Meet Your ",(0,b.jsx)("span",{children:"Mentor"})]}),(0,b.jsx)(ai,{children:"Hi, I'm Manoj Kumar, a UI/UX Designer with 4+ years of experience working on real-world products like ERP systems, mobile apps, and business platforms. I started my journey just like many beginners—confused, exploring, and trying to understand how design actually works in the real world."}),(0,b.jsx)(ai,{children:"That's exactly why I created Aarasoft Academy to guide you step-by-step with practical learning, real projects, and honest feedback so you can become a confident UX/UI designer with a strong portfolio."}),(0,b.jsxs)(aj,{children:[(0,b.jsx)(ak,{href:"#",target:"_blank",children:(0,b.jsx)(t.default,{src:"/Logo/insta.svg",alt:"Instagram",width:40,height:40})}),(0,b.jsx)(al,{href:"#",target:"_blank",children:(0,b.jsx)(t.default,{src:"/Logo/linkedin.svg",alt:"LinkedIn",width:40,height:40})})]})]})]});var an=a.i(59897),ao=a.i(18621),ap=a.i(96432),aq=a.i(80520),ar=a.i(20499);let as=()=>(0,b.jsxs)("div",{children:[(0,b.jsx)("section",{id:"hero",children:(0,b.jsx)(s,{})}),(0,b.jsx)(z,{}),(0,b.jsx)(aq.default,{}),(0,b.jsx)(G,{}),(0,b.jsx)(ar.default,{}),(0,b.jsx)("section",{id:"course",children:(0,b.jsx)(ao.default,{})}),(0,b.jsx)(G,{}),(0,b.jsx)("section",{id:"programs",children:(0,b.jsx)(ap.default,{})}),(0,b.jsx)(am,{}),(0,b.jsx)(Z,{}),(0,b.jsx)($.Faq,{}),(0,b.jsx)("section",{id:"contact",children:(0,b.jsx)(an.CareerContact,{})})]});a.s(["default",0,function(){return(0,b.jsx)(as,{})}],50708)},26030,a=>{a.n(a.i(50708))}];

//# sourceMappingURL=_0xaqkzg._.js.map
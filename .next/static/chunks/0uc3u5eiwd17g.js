(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,98308,(e,t,i)=>{t.exports=[{id:1,question:"Is this course beginner-friendly?",answer:"Hi, I'm Manoj Kumar, a UI/UX Designer with 4+ years of experience working on real-world products like ERP systems, mobile apps, and business platforms. I started my journey just like many beginners—confused, exploring, and trying to understand how design actually works in the real world."},{id:2,question:"Do I need prior UX/UI knowledge to join?",answer:"No prior UX/UI knowledge is required. This course is designed for complete beginners. We start from the basics and gradually build up your skills with practical projects and real-world examples."},{id:3,question:"Will there be live sessions or recorded videos?",answer:"The course includes both live sessions and recorded videos. Live sessions allow for real-time interaction and Q&A, while recorded videos let you learn at your own pace and revisit concepts whenever needed."},{id:4,question:"Do I get personalized feedback?",answer:"Yes, you'll receive personalized feedback on all your projects and assignments. Our mentors review your work individually and provide detailed feedback to help you improve your design skills."},{id:5,question:"How many students are in each batch?",answer:"We keep our batch sizes small, typically 15-20 students per batch. This ensures personalized attention and better interaction between students and mentors."},{id:6,question:"What if I have doubts during the course?",answer:"You can ask questions anytime through our dedicated support channels. We have regular doubt-clearing sessions, one-on-one mentorship calls, and a community where you can get help from peers and mentors."},{id:7,question:"Will I receive a certificate?",answer:"Yes, upon successful completion of the course and all projects, you'll receive a certificate of completion. This certificate validates your skills and can be added to your portfolio and LinkedIn profile."}]},27763,e=>{"use strict";var t=e.i(43476),i=e.i(71645),r=e.i(97053),o=e.i(1222),l=e.i(76525),s=e.i(98308);let n=r.default.div`
  display: flex;
  gap: 5rem;
  margin: 0 2.5rem;
  margin-bottom: 6.25rem;
`,a=r.default.div`
`,d=r.default.h2`
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 500;
  font-size: 3.375rem;
  line-height: 120%;
  color: ${o.default.colors.secondary};
  margin: 0 0 2rem 0;

  span {
    color: ${o.default.colors.primary};
  }
`,c=r.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,g=r.default.div`
  border: 1.5px solid ${e=>e.isOpen?o.default.colors.primary:"#CCC3E2"};
  border-radius: 1.25rem;
  background: ${e=>e.isOpen?"radial-gradient(circle at center, #93E46E -100%, #FFFFFF 100%)":"#ffffff"};
  transition: all 0.3s ease;
  overflow: hidden;
`,u=r.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.563rem;
  cursor: pointer;
`,f=r.default.h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${o.default.colors.secondary};
  margin: 0;
  flex: 1;
`,h=r.default.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
`,m=r.default.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: ${o.default.colors.secondary};
    transition: transform 0.3s ease;
  }
  
  &::before {
    width: 24px;
    height: 2px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  
  &::after {
    width: 2px;
    height: 24px;
    top: 0;
    left: 50%;
    transform: translateX(-50%) ${e=>e.$isOpen?"rotate(90deg)":"rotate(0deg)"};
  }
`,p=r.default.div`
  width: 24px;
  height: 2px;
  background-color: ${o.default.colors.secondary};
`,x=r.default.div`
  max-height: ${e=>e.isOpen?"200px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease;
`,b=r.default.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  color: ${o.default.colors.secondaryTextColor};
  margin: 0;
  padding: 0 1.563rem 1.563rem 1.563rem;
`;e.s(["Faq",0,()=>{let[e,r]=(0,i.useState)(1);return(0,t.jsxs)(n,{children:[(0,t.jsxs)(a,{children:[(0,t.jsxs)(d,{children:["Frequently Asked",(0,t.jsx)("br",{}),"Questions ",(0,t.jsx)("span",{children:"(FAQs)"})]}),(0,t.jsx)(l.default,{text:"Chat in WhatsApp",bgColor:o.default.colors.primary,textColor:o.default.colors.secondary,iconSrc:"/Logo/whatsappLogo.svg",iconAlt:"WhatsApp",onClick:()=>console.log("WhatsApp clicked"),width:"252px"})]}),(0,t.jsx)(c,{children:s.default.map(i=>(0,t.jsxs)(g,{isOpen:e===i.id,children:[(0,t.jsxs)(u,{onClick:()=>{var e;return e=i.id,void r(t=>t===e?null:e)},children:[(0,t.jsx)(f,{children:i.question}),(0,t.jsx)(h,{children:e===i.id?(0,t.jsx)(p,{}):(0,t.jsx)(m,{$isOpen:!1})})]}),(0,t.jsx)(x,{isOpen:e===i.id,children:(0,t.jsx)(b,{children:i.answer})})]},i.id))})]})}])},64239,e=>{"use strict";var t=e.i(43476),i=e.i(71645),r=e.i(97053),o=e.i(1222),l=e.i(76525);let s=r.default.div`
  background-color: ${o.default.colors.primary};
  border-radius: 1.25rem;
  padding: 3rem;
  margin: 0 2.5rem;
  display: flex;
  align-items: stretch;
  gap: 4rem;
  position: relative;
  overflow: hidden;
  min-height: 500px;
  margin-bottom: 5rem;
`,n=r.default.div`
  flex: 1;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: url('/Images/bglogolight.svg');
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;
  padding: 2rem;
`,a=r.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,d=r.default.div`
  margin-top: auto;
  padding-top: 2rem;
`,c=r.default.h2`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 120%;
  color: ${o.default.colors.secondary};
  margin: 0 0 2.5rem 0;
`,g=r.default.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 150%;
  color: ${o.default.colors.secondaryTextColor};
  margin: 0 0 2rem 0;
  opacity: 0.8;
`,u=r.default.div`
  flex: 1;
  z-index: 1;
  position: relative;
`,f=r.default.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,h=r.default.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:focus-within label {
    color: ${o.default.colors.secondary};
  }
`,m=r.default.label`
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  color: ${o.default.colors.white};
  transition: color 0.2s ease;
`,p=r.default.input`
  padding: 1rem 1.25rem;
  border: none;
  border-radius: 0.75rem;
  background-color: ${o.default.colors.white};
  font-family: 'Pangram', sans-serif;
  font-size: 1rem;
  color: ${o.default.colors.textColor};
  outline: none;
  transition: border 0.2s ease;

  &::placeholder {
    color: #A0A0A0;
  }

  &:focus {
    border: 2px solid ${o.default.colors.secondary};
  }
`;e.s(["CareerContact",0,()=>{let[e,r]=(0,i.useState)({fullName:"",phoneNumber:"",emailAddress:"",currentStatus:""}),x=e=>{let{name:t,value:i}=e.target;r(e=>({...e,[t]:i}))};return(0,t.jsxs)(s,{children:[(0,t.jsxs)(n,{children:[(0,t.jsxs)(a,{children:[(0,t.jsxs)(c,{children:["Book Your Free Career",(0,t.jsx)("br",{}),"Guidance Call"]}),(0,t.jsxs)(g,{children:["Let's plan your journey to become a professional",(0,t.jsx)("br",{}),"UI/UX designer in 2026."]})]}),(0,t.jsx)(d,{children:(0,t.jsx)(l.default,{text:"Contact Us",bgColor:o.default.colors.white,textColor:o.default.colors.secondary,iconSrc:"/Logo/whatsapp-color.svg",iconAlt:"WhatsApp",width:"27rem",onClick:()=>console.log("Contact Us clicked")})})]}),(0,t.jsx)(u,{children:(0,t.jsxs)(f,{onSubmit:t=>{t.preventDefault(),console.log("Form submitted:",e)},children:[(0,t.jsxs)(h,{children:[(0,t.jsx)(m,{children:"Full Name"}),(0,t.jsx)(p,{type:"text",name:"fullName",placeholder:"Enter your name",value:e.fullName,onChange:x,required:!0})]}),(0,t.jsxs)(h,{children:[(0,t.jsx)(m,{children:"Phone Number"}),(0,t.jsx)(p,{type:"tel",name:"phoneNumber",placeholder:"Enter Mobile Number",value:e.phoneNumber,onChange:x,required:!0})]}),(0,t.jsxs)(h,{children:[(0,t.jsx)(m,{children:"Email Address"}),(0,t.jsx)(p,{type:"email",name:"emailAddress",placeholder:"Enter email",value:e.emailAddress,onChange:x,required:!0})]}),(0,t.jsxs)(h,{children:[(0,t.jsx)(m,{children:"Current Status"}),(0,t.jsx)(p,{type:"text",name:"currentStatus",placeholder:"Enter email",value:e.currentStatus,onChange:x,required:!0})]}),(0,t.jsx)(l.default,{text:"Download Syllabus",bgColor:o.default.colors.secondary,textColor:o.default.colors.primary,width:"100%",onClick:()=>console.log("Download Syllabus clicked")})]})})]})}])},62186,e=>{"use strict";var t=e.i(43476),i=e.i(97053),r=e.i(1222),o=e.i(76525);let l=i.default.section`
  padding: 0 2.5rem;
  background-color: ${r.default.colors.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 12.5rem;
`,s=i.default.div`
  display: flex;
  flex-direction: column;
  // gap: 1rem;
`,n=i.default.h2`
  font-family: 'RightGrotesk-Medium', sans-serif;
  font-size: 3.375rem;
  font-weight: 500;
  color: ${r.default.colors.textColor};
  margin: 0;
  line-height: 1.2;
  
  .highlight {
    color: ${r.default.colors.primary};
  }
`,a=i.default.img`
  width: 22.9375rem;
  height: 20.9375rem;
  object-fit: contain;
`,d=i.default.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`,c=i.default.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #9E9E9E;
  margin: 0;
`,g=i.default.h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.75rem;
  color: ${r.default.colors.textColor};
  margin: 0;
  line-height: 1.2;
`,u=i.default.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  height: 100%;
`,f=i.default.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,h=i.default.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  background-color: ${r.default.colors.white};
  border: 1.5px solid #CCC3E2;
  border-radius: 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`,m=i.default.div`
  min-width: 48px;
  height: 48px;
  border-radius: 50%;
  background: radial-gradient(70.69% 70.69% at 50% 50%, #7447CF 30%, #4A1CBB 100%);
  color: ${r.default.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.125rem;
  flex-shrink: 0;
`,p=i.default.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`,x=i.default.div`
  display: flex;
  flex-direction: column;
`,b=i.default.h4`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 140%;
  color: ${r.default.colors.textColor};
  margin: 0;
  line-height: 1.4;
  `,y=i.default.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${r.default.colors.secondaryTextColor};
  margin: 0;
  line-height: 1.5;
  line-height: 150%;
  text-align: left;
  white-space: nowrap;
`,j=i.default.div`
  width: 100%;
`,C=()=>(0,t.jsxs)(l,{children:[(0,t.jsxs)(s,{children:[(0,t.jsxs)(n,{children:["The Course is ideal",(0,t.jsx)("br",{}),"for you ",(0,t.jsx)("span",{className:"highlight",children:"if you are"})]}),(0,t.jsx)(a,{src:"/Images/theCourse.png",alt:"The Course"}),(0,t.jsxs)(d,{children:[(0,t.jsx)(c,{children:"Wondering if the course is right for you?"}),(0,t.jsx)(g,{children:"We offer a trail lesson for free!"})]})]}),(0,t.jsxs)(u,{children:[(0,t.jsx)(f,{children:[{id:1,title:["Non - IT Professionals","& Fresh graduates"],access:"Get Life time Access to Recordings +\n2 Weekly Live Session"},{id:2,title:["Students &","Career Gap Students"],access:"Get Life time Access to Recordings +\n2 Weekly Live Session"},{id:3,title:["Graphic Designers &","Software Developers"],access:"Get Life time Access to Recordings +\n2 Weekly Live Session"}].map(e=>(0,t.jsxs)(h,{children:[(0,t.jsx)(m,{children:e.id.toString().padStart(2,"0")}),(0,t.jsxs)(p,{children:[(0,t.jsx)(x,{children:e.title.map((e,i)=>(0,t.jsx)(b,{children:e},i))}),(0,t.jsx)(y,{children:e.access.split("\n").map((e,i)=>(0,t.jsxs)("span",{children:[e,0===i&&(0,t.jsx)("br",{})]},i))})]})]},e.id))}),(0,t.jsx)(j,{children:(0,t.jsx)(o.default,{text:"I want a Free Lesson",bgColor:r.default.colors.primary,textColor:r.default.colors.secondary,width:"100%",onClick:()=>console.log("Free lesson clicked")})})]})]});e.s(["Course",0,C,"default",0,C])},10415,e=>{"use strict";var t=e.i(43476),i=e.i(97053),r=e.i(1222),o=e.i(76525);let l=i.default.section`
  background-color: ${r.default.colors.white};
  margin: 0 2.5rem;
  margin-bottom: 10rem;
`,s=i.default.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 3rem;
`,n=i.default.h2`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 3rem;
  font-weight: 400;
  color: ${r.default.colors.textColor};
  margin: 0;
  line-height: 1.2;
  
  .highlight {
    color: ${r.default.colors.primary};
  }
`,a=i.default.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,d=i.default.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.6rem 1.7rem;
  background: ${e=>e.$isHighlighted?r.default.colors.primary:r.default.colors.white};
  border: 1.5px solid ${e=>e.$isHighlighted?r.default.colors.primary:"#CCC3E2"};
  border-radius: 1.25rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: linear-gradient(80.86deg, #93E46E -10%, #FFFFFF 100%);
    border-color: ${r.default.colors.primary};
  }
`,c=i.default.div`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.125rem;
  color: ${e=>e.$isHighlighted?r.default.colors.white:r.default.colors.textColor};
  align-self: center;
`,g=i.default.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,u=i.default.h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.25rem;
  color: ${e=>e.$isHighlighted?r.default.colors.white:r.default.colors.textColor};
  margin: 0 0 1rem 0;
  line-height: 140%;
  width: 90%;
`,f=i.default.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`,h=i.default.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Pangram-Medium', sans-serif;
  font-size: 0.875rem;
  color: ${e=>e.$isHighlighted?r.default.colors.white:"#666"};
`,m=i.default.img`
  width: 16px;
  height: 16px;
`,p=i.default.img`
  width: 0.875rem;
  height: 0.875rem;
  filter: ${e=>e.$isHighlighted?"brightness(0) invert(1)":"none"};
`,x=i.default.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`,b=()=>(0,t.jsxs)(l,{children:[(0,t.jsxs)(s,{children:[(0,t.jsxs)(n,{children:[(0,t.jsx)("span",{className:"highlight",children:"Program"})," of the course",(0,t.jsx)("br",{}),"is 8 Module"]}),(0,t.jsx)(o.default,{text:"Download Syllabus",bgColor:r.default.colors.primary,textColor:r.default.colors.secondary,width:"267px",onClick:()=>console.log("Download syllabus clicked")})]}),(0,t.jsx)(a,{children:[{id:1,number:"Module 1",title:"UX Foundations & the AI-Augmented Designer's Mindset",liveClasses:5,activities:0,isHighlighted:!1},{id:2,number:"Module 2",title:"User Research in the Age of AI: Methods & Synthesis",liveClasses:5,activities:0,isHighlighted:!1},{id:3,number:"Module 3",title:"Information Architecture & AI-Assisted Content Strategy",liveClasses:5,activities:0,isHighlighted:!1},{id:4,number:"Module 4",title:"Interaction Design, Micro-Interactions & Motion Principles",liveClasses:5,activities:0,isHighlighted:!1},{id:5,number:"Module 5",title:"Rapid Prototyping with Generative & AI-Powered Tools",liveClasses:5,activities:0,isHighlighted:!1}].map(e=>(0,t.jsxs)(d,{$isHighlighted:e.isHighlighted,children:[(0,t.jsx)(c,{$isHighlighted:e.isHighlighted,children:e.number}),(0,t.jsxs)(g,{children:[(0,t.jsx)(u,{$isHighlighted:e.isHighlighted,children:e.title}),(0,t.jsxs)(f,{children:[(0,t.jsxs)(h,{$isHighlighted:e.isHighlighted,children:[(0,t.jsx)(m,{src:"/Logo/videoIcon.svg",alt:"Video"}),e.liveClasses," Live Classes"]}),(0,t.jsxs)(h,{$isHighlighted:e.isHighlighted,children:[(0,t.jsx)(m,{src:"/Logo/bookIcon.svg",alt:"Activities"}),"Activities"]})]})]}),(0,t.jsx)(p,{src:"/Logo/arrow.svg",alt:"Arrow",$isHighlighted:e.isHighlighted})]},e.id))}),(0,t.jsx)(x,{children:(0,t.jsx)(o.default,{text:"Download Syllabus",bgColor:r.default.colors.primary,textColor:r.default.colors.secondary,width:"562px",onClick:()=>console.log("Download syllabus clicked")})})]});e.s(["Programs",0,b,"default",0,b])},7149,e=>{"use strict";var t=e.i(43476),i=e.i(97053),r=e.i(1222);let o=i.default.section`
  background-color: ${r.default.colors.white};
  margin: 0 2.5rem;
  margin-bottom: 6.25rem;
`,l=i.default.h2`
  font-family: 'RightGrotesk-widemedium', sans-serif;
  font-size: 3.375rem;
  color: ${r.default.colors.textColor};
  margin: 0 0 46px 0;
  line-height: 1.2;
  text-align: center;
  
  .highlight {
    color: ${r.default.colors.primary};
  }
`,s=i.default.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-size: 1rem;
  color: #525252;
  margin: 0 auto;
  text-align: center;
  line-height: 1.6;
`,n=i.default.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1.5rem;
  align-items: end;
`,a=i.default.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,d=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 1rem;
`,c=i.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`,g=i.default.div`
  padding: 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: ${e=>e.$height||"300px"};
  position: relative;
  overflow: hidden;
  gap: 2rem;
  
  ${e=>e.$bgImage?`
    background-image: url(${e.$bgImage});
    background-size: cover;
    background-position: center;
  `:`
    background-color: ${e.$bgColor||"#f5f5f5"};
  `}
`,u=i.default.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-color: ${e=>e.$bgColor||r.default.colors.primary};
  color: ${e=>e.$textColor||r.default.colors.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.5rem;
`,f=i.default.h3`
  font-family: 'RightGrotesk-widemedium', sans-serif;
  font-size: 1.5rem;
  color: ${e=>e.$textColor||r.default.colors.textColor};
  margin: 0;
  line-height: 1.3;
`,h=i.default.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-color: ${r.default.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 13px;
    height: 13px;
    transform: rotate(180deg);
  }
`,m=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`,p=()=>{let e=[{id:1,number:"01",title:"Real-World Projects, Not Just Theory",bgImage:"/Images/Rectangleone.png",height:"472px",textColor:r.default.colors.white,numberBgColor:r.default.colors.primary,numberTextColor:r.default.colors.textColor},{id:2,number:"02",title:"AI-Powered Learning Approach",bgColor:"#f0f0f0",height:"290px",textColor:r.default.colors.textColor,numberBgColor:r.default.colors.primary,numberTextColor:r.default.colors.textColor},{id:3,title:"Contact Us",bgColor:"#f0f0f0",height:"290px",textColor:r.default.colors.textColor,isContactCard:!0},{id:4,number:"03",title:"Career-Oriented Mentorship",bgImage:"/Images/RectangleTwo.png",height:"472px",textColor:r.default.colors.secondary,numberBgColor:r.default.colors.white,numberTextColor:r.default.colors.textColor}];return(0,t.jsx)(o,{children:(0,t.jsxs)(n,{children:[(0,t.jsxs)(g,{$bgImage:e[0].bgImage,$bgColor:e[0].bgColor,$height:e[0].height,children:[(0,t.jsx)(u,{$bgColor:e[0].numberBgColor,$textColor:e[0].numberTextColor,children:e[0].number}),(0,t.jsx)(f,{$textColor:e[0].textColor,children:e[0].title})]},e[0].id),(0,t.jsxs)(a,{children:[(0,t.jsxs)(d,{children:[(0,t.jsxs)(l,{children:["Why",(0,t.jsx)("span",{className:"highlight",children:" Aarasoft"}),(0,t.jsx)("br",{}),"Academy?"]}),(0,t.jsx)(s,{children:"No fluff. Just practical skills, real projects, and AI-powered tools to help you break into the design industry."})]}),(0,t.jsxs)(c,{children:[(0,t.jsxs)(g,{$bgImage:e[1].bgImage,$bgColor:e[1].bgColor,$height:e[1].height,children:[(0,t.jsx)(u,{$bgColor:e[1].numberBgColor,$textColor:e[1].numberTextColor,children:e[1].number}),(0,t.jsx)(f,{$textColor:e[1].textColor,children:e[1].title})]},e[1].id),(0,t.jsx)(g,{$bgImage:e[2].bgImage,$bgColor:e[2].bgColor,$height:e[2].height,children:(0,t.jsxs)(m,{children:[(0,t.jsx)(h,{children:(0,t.jsx)("img",{src:"/Logo/arrow.svg",alt:"Arrow"})}),(0,t.jsx)(f,{$textColor:e[2].textColor,children:e[2].title})]})},e[2].id)]})]}),(0,t.jsxs)(g,{$bgImage:e[3].bgImage,$bgColor:e[3].bgColor,$height:e[3].height,children:[(0,t.jsx)(u,{$bgColor:e[3].numberBgColor,$textColor:e[3].numberTextColor,children:e[3].number}),(0,t.jsx)(f,{$textColor:e[3].textColor,children:e[3].title})]},e[3].id)]})})};e.s(["WhyAarasoft",0,p,"default",0,p])},91451,e=>{"use strict";var t=e.i(43476),i=e.i(71645),r=e.i(97053),o=e.i(1222),l=e.i(76525);let s=r.default.section`
  padding: 0 2.5rem;
  background-color: ${o.default.colors.white};
  margin: 0 auto;
  height: 400vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`,n=r.default.div`
  position: sticky;
  top: 0;
  height: 130vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${o.default.colors.white};
  z-index: 10;
`,a=r.default.h2`
  font-family: 'RightGrotesk-widemedium', sans-serif;
  font-size: 3.375rem;
  color: ${o.default.colors.textColor};
  margin: 0 0 1rem 0;
  line-height: 1.2;
  text-align: center;
  
  .highlight {
    color: ${o.default.colors.primary};
  }
`,d=r.default.div`
  position: relative;
  width: 100%;
  height: 40.0625rem;
  padding-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,c=r.default.div`
  position: absolute;
  width: 72.125rem;
  height: 72.125rem;
  border: 2px solid #e5e5e5;
  border-bottom: none;
  border-radius: 50%;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  clip-path: inset(0 0 50% 0);
`,g=r.default.div`
  position: absolute;
  width: 80%;
  max-width: 72.125rem;
  height: 2px;
  top: 40.0625rem;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, 
    transparent 0%, 
    #e5e5e5 15%, 
    #e5e5e5 85%, 
    transparent 100%
  );
  z-index: 5;
`,u=r.default.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${e=>e.$isActive?o.default.colors.primary:"#e5e5e5"};
  color: ${e=>e.$isActive?o.default.colors.textColor:"#525252"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.25rem;
  left: 50%;
  top: 40.0625rem;
  transform: 
    translateX(-50%) 
    translateY(-50%)
    rotate(${e=>e.$angle}deg) 
    translateY(-36.0625rem) 
    rotate(${e=>-e.$angle}deg);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: ${e=>e.$isActive?10:2};
  
  ${e=>180===e.$angle?`
    border: 2px solid red !important;
  `:""}
`,f=r.default.div`
  position: relative;
  z-index: 5;
  // max-width: 500px;
  text-align: center;
  background-image: url('/Images/bglogo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 2rem;
  margin-top: 3.5rem;
`,h=r.default.h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${o.default.colors.textColor};
  margin: 0 0 2.688rem 0;
`,m=r.default.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-size: 1rem;
  color: #525252;
  margin: 0 0 3.5rem 0;
  line-height: 1.6;
`,p=r.default.p`
  font-family: 'Pangram-Medium', sans-serif;
  font-size: 1rem;
  color: #525252;
  margin: 5.875rem 0 0 0;
`,x=()=>{let[e,r]=(0,i.useState)(0),[x,b]=(0,i.useState)(0),[y,j]=(0,i.useState)(0),C=(0,i.useRef)(null),v=[{id:1,title:"Live Sessions",description:"Get Life time Access to Recordings + 2 Weekly Live Session"},{id:2,title:"Real Projects",description:"Work on industry-standard projects to build your portfolio"},{id:3,title:"AI-Powered Tools",description:"Learn to use cutting-edge AI tools for modern design workflows"},{id:4,title:"Career Support",description:"Get personalized mentorship and career guidance throughout"},{id:5,title:"Community Access",description:"Join a vibrant community of designers and industry experts"}];return(0,i.useEffect)(()=>{let e=!1,t=()=>{e||(requestAnimationFrame(()=>{(()=>{if(!C.current)return;let e=C.current.getBoundingClientRect(),t=window.innerHeight,i=C.current.offsetHeight,r=Math.min(Math.max(0,-e.top)/(i-t),1),o=Math.min(Math.floor(r/(1/v.length)),v.length-1);o!==y&&j(o),b(r*(v.length-1))})(),e=!1}),e=!0)};return t(),window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[v.length,y]),(0,i.useEffect)(()=>{if(y!==e){let t=setTimeout(()=>{y>e?r(e=>e+1):y<e&&r(e=>e-1)},500);return()=>clearTimeout(t)}},[y,e]),(0,t.jsx)(s,{ref:C,children:(0,t.jsxs)(n,{children:[(0,t.jsxs)(a,{children:["Why This ",(0,t.jsx)("span",{className:"highlight",children:"Course?"})]}),(0,t.jsxs)(d,{children:[(0,t.jsx)(c,{}),(0,t.jsx)(g,{}),v.map((i,r)=>{let o,l,s=(l=180*e/((o=v.length)-1),180*r/(o-1)-(l-1));return(0,t.jsx)(u,{$isActive:r===e,$angle:s,children:i.id.toString().padStart(2,"0")},i.id)}),(0,t.jsxs)(f,{children:[(0,t.jsx)(h,{children:v[e].title}),(0,t.jsx)(m,{children:v[e].description}),(0,t.jsx)(l.default,{text:"Book My Free Career Call",bgColor:o.default.colors.primary,textColor:o.default.colors.textColor,width:"100%",iconSrc:"/Logo/whatsappLogo.svg",iconAlt:"WhatsApp",onClick:()=>console.log("Book call clicked")}),(0,t.jsxs)(p,{children:[(e+1).toString().padStart(2,"0"),"/",v.length.toString().padStart(2,"0")]})]})]})]})})};e.s(["WhyCourse",0,x,"default",0,x])}]);
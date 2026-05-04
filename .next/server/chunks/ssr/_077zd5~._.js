module.exports=[84708,(a,b,c)=>{b.exports=[{id:1,question:"Is this course beginner-friendly?",answer:"Hi, I'm Manoj Kumar, a UI/UX Designer with 4+ years of experience working on real-world products like ERP systems, mobile apps, and business platforms. I started my journey just like many beginners—confused, exploring, and trying to understand how design actually works in the real world."},{id:2,question:"Do I need prior UX/UI knowledge to join?",answer:"No prior UX/UI knowledge is required. This course is designed for complete beginners. We start from the basics and gradually build up your skills with practical projects and real-world examples."},{id:3,question:"Will there be live sessions or recorded videos?",answer:"The course includes both live sessions and recorded videos. Live sessions allow for real-time interaction and Q&A, while recorded videos let you learn at your own pace and revisit concepts whenever needed."},{id:4,question:"Do I get personalized feedback?",answer:"Yes, you'll receive personalized feedback on all your projects and assignments. Our mentors review your work individually and provide detailed feedback to help you improve your design skills."},{id:5,question:"How many students are in each batch?",answer:"We keep our batch sizes small, typically 15-20 students per batch. This ensures personalized attention and better interaction between students and mentors."},{id:6,question:"What if I have doubts during the course?",answer:"You can ask questions anytime through our dedicated support channels. We have regular doubt-clearing sessions, one-on-one mentorship calls, and a community where you can get help from peers and mentors."},{id:7,question:"Will I receive a certificate?",answer:"Yes, upon successful completion of the course and all projects, you'll receive a certificate of completion. This certificate validates your skills and can be added to your portfolio and LinkedIn profile."}]},90814,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(75716),e=a.i(31650),f=a.i(12466),g=a.i(84708);let h=d.default.div`
  display: flex;
  gap: 5rem;
  margin: 0 2.5rem;
  margin-bottom: 6.25rem;
`,i=d.default.div`
`,j=d.default.h2`
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 500;
  font-size: 3.375rem;
  line-height: 120%;
  color: ${e.default.colors.secondary};
  margin: 0 0 2rem 0;

  span {
    color: ${e.default.colors.primary};
  }
`,k=d.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,l=d.default.div`
  border: 1.5px solid ${a=>a.isOpen?e.default.colors.primary:"#CCC3E2"};
  border-radius: 1.25rem;
  background: ${a=>a.isOpen?"radial-gradient(circle at center, #93E46E -100%, #FFFFFF 100%)":"#ffffff"};
  transition: all 0.3s ease;
  overflow: hidden;
`,m=d.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.563rem;
  cursor: pointer;
`,n=d.default.h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${e.default.colors.secondary};
  margin: 0;
  flex: 1;
`,o=d.default.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
`,p=d.default.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: ${e.default.colors.secondary};
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
    transform: translateX(-50%) ${a=>a.$isOpen?"rotate(90deg)":"rotate(0deg)"};
  }
`,q=d.default.div`
  width: 24px;
  height: 2px;
  background-color: ${e.default.colors.secondary};
`,r=d.default.div`
  max-height: ${a=>a.isOpen?"200px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease;
`,s=d.default.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  color: ${e.default.colors.secondaryTextColor};
  margin: 0;
  padding: 0 1.563rem 1.563rem 1.563rem;
`;a.s(["Faq",0,()=>{let[a,d]=(0,c.useState)(1);return(0,b.jsxs)(h,{children:[(0,b.jsxs)(i,{children:[(0,b.jsxs)(j,{children:["Frequently Asked",(0,b.jsx)("br",{}),"Questions ",(0,b.jsx)("span",{children:"(FAQs)"})]}),(0,b.jsx)(f.default,{text:"Chat in WhatsApp",bgColor:e.default.colors.primary,textColor:e.default.colors.secondary,iconSrc:"/Logo/whatsappLogo.svg",iconAlt:"WhatsApp",onClick:()=>console.log("WhatsApp clicked"),width:"252px"})]}),(0,b.jsx)(k,{children:g.default.map(c=>(0,b.jsxs)(l,{isOpen:a===c.id,children:[(0,b.jsxs)(m,{onClick:()=>{var a;return a=c.id,void d(b=>b===a?null:a)},children:[(0,b.jsx)(n,{children:c.question}),(0,b.jsx)(o,{children:a===c.id?(0,b.jsx)(q,{}):(0,b.jsx)(p,{$isOpen:!1})})]}),(0,b.jsx)(r,{isOpen:a===c.id,children:(0,b.jsx)(s,{children:c.answer})})]},c.id))})]})}])},19609,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(75716),e=a.i(31650),f=a.i(12466);let g=d.default.div`
  background-color: ${e.default.colors.primary};
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
`,h=d.default.div`
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
`,i=d.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,j=d.default.div`
  margin-top: auto;
  padding-top: 2rem;
`,k=d.default.h2`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 120%;
  color: ${e.default.colors.secondary};
  margin: 0 0 2.5rem 0;
`,l=d.default.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 150%;
  color: ${e.default.colors.secondaryTextColor};
  margin: 0 0 2rem 0;
  opacity: 0.8;
`,m=d.default.div`
  flex: 1;
  z-index: 1;
  position: relative;
`,n=d.default.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,o=d.default.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:focus-within label {
    color: ${e.default.colors.secondary};
  }
`,p=d.default.label`
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  color: ${e.default.colors.white};
  transition: color 0.2s ease;
`,q=d.default.input`
  padding: 1rem 1.25rem;
  border: none;
  border-radius: 0.75rem;
  background-color: ${e.default.colors.white};
  font-family: 'Pangram', sans-serif;
  font-size: 1rem;
  color: ${e.default.colors.textColor};
  outline: none;
  transition: border 0.2s ease;

  &::placeholder {
    color: #A0A0A0;
  }

  &:focus {
    border: 2px solid ${e.default.colors.secondary};
  }
`;a.s(["CareerContact",0,()=>{let[a,d]=(0,c.useState)({fullName:"",phoneNumber:"",emailAddress:"",currentStatus:""}),r=a=>{let{name:b,value:c}=a.target;d(a=>({...a,[b]:c}))};return(0,b.jsxs)(g,{children:[(0,b.jsxs)(h,{children:[(0,b.jsxs)(i,{children:[(0,b.jsxs)(k,{children:["Book Your Free Career",(0,b.jsx)("br",{}),"Guidance Call"]}),(0,b.jsxs)(l,{children:["Let's plan your journey to become a professional",(0,b.jsx)("br",{}),"UI/UX designer in 2026."]})]}),(0,b.jsx)(j,{children:(0,b.jsx)(f.default,{text:"Contact Us",bgColor:e.default.colors.white,textColor:e.default.colors.secondary,iconSrc:"/Logo/whatsapp-color.svg",iconAlt:"WhatsApp",width:"27rem",onClick:()=>console.log("Contact Us clicked")})})]}),(0,b.jsx)(m,{children:(0,b.jsxs)(n,{onSubmit:b=>{b.preventDefault(),console.log("Form submitted:",a)},children:[(0,b.jsxs)(o,{children:[(0,b.jsx)(p,{children:"Full Name"}),(0,b.jsx)(q,{type:"text",name:"fullName",placeholder:"Enter your name",value:a.fullName,onChange:r,required:!0})]}),(0,b.jsxs)(o,{children:[(0,b.jsx)(p,{children:"Phone Number"}),(0,b.jsx)(q,{type:"tel",name:"phoneNumber",placeholder:"Enter Mobile Number",value:a.phoneNumber,onChange:r,required:!0})]}),(0,b.jsxs)(o,{children:[(0,b.jsx)(p,{children:"Email Address"}),(0,b.jsx)(q,{type:"email",name:"emailAddress",placeholder:"Enter email",value:a.emailAddress,onChange:r,required:!0})]}),(0,b.jsxs)(o,{children:[(0,b.jsx)(p,{children:"Current Status"}),(0,b.jsx)(q,{type:"text",name:"currentStatus",placeholder:"Enter email",value:a.currentStatus,onChange:r,required:!0})]}),(0,b.jsx)(f.default,{text:"Download Syllabus",bgColor:e.default.colors.secondary,textColor:e.default.colors.primary,width:"100%",onClick:()=>console.log("Download Syllabus clicked")})]})})]})}])},54886,a=>{"use strict";var b=a.i(87924),c=a.i(75716),d=a.i(31650),e=a.i(12466);let f=c.default.section`
  padding: 0 2.5rem;
  background-color: ${d.default.colors.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 12.5rem;
`,g=c.default.div`
  display: flex;
  flex-direction: column;
  // gap: 1rem;
`,h=c.default.h2`
  font-family: 'RightGrotesk-Medium', sans-serif;
  font-size: 3.375rem;
  font-weight: 500;
  color: ${d.default.colors.textColor};
  margin: 0;
  line-height: 1.2;
  
  .highlight {
    color: ${d.default.colors.primary};
  }
`,i=c.default.img`
  width: 22.9375rem;
  height: 20.9375rem;
  object-fit: contain;
`,j=c.default.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`,k=c.default.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #9E9E9E;
  margin: 0;
`,l=c.default.h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.75rem;
  color: ${d.default.colors.textColor};
  margin: 0;
  line-height: 1.2;
`,m=c.default.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  height: 100%;
`,n=c.default.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,o=c.default.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  background-color: ${d.default.colors.white};
  border: 1.5px solid #CCC3E2;
  border-radius: 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`,p=c.default.div`
  min-width: 48px;
  height: 48px;
  border-radius: 50%;
  background: radial-gradient(70.69% 70.69% at 50% 50%, #7447CF 30%, #4A1CBB 100%);
  color: ${d.default.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.125rem;
  flex-shrink: 0;
`,q=c.default.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`,r=c.default.div`
  display: flex;
  flex-direction: column;
`,s=c.default.h4`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 140%;
  color: ${d.default.colors.textColor};
  margin: 0;
  line-height: 1.4;
  `,t=c.default.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${d.default.colors.secondaryTextColor};
  margin: 0;
  line-height: 1.5;
  line-height: 150%;
  text-align: left;
  white-space: nowrap;
`,u=c.default.div`
  width: 100%;
`,v=()=>(0,b.jsxs)(f,{children:[(0,b.jsxs)(g,{children:[(0,b.jsxs)(h,{children:["The Course is ideal",(0,b.jsx)("br",{}),"for you ",(0,b.jsx)("span",{className:"highlight",children:"if you are"})]}),(0,b.jsx)(i,{src:"/Images/theCourse.png",alt:"The Course"}),(0,b.jsxs)(j,{children:[(0,b.jsx)(k,{children:"Wondering if the course is right for you?"}),(0,b.jsx)(l,{children:"We offer a trail lesson for free!"})]})]}),(0,b.jsxs)(m,{children:[(0,b.jsx)(n,{children:[{id:1,title:["Non - IT Professionals","& Fresh graduates"],access:"Get Life time Access to Recordings +\n2 Weekly Live Session"},{id:2,title:["Students &","Career Gap Students"],access:"Get Life time Access to Recordings +\n2 Weekly Live Session"},{id:3,title:["Graphic Designers &","Software Developers"],access:"Get Life time Access to Recordings +\n2 Weekly Live Session"}].map(a=>(0,b.jsxs)(o,{children:[(0,b.jsx)(p,{children:a.id.toString().padStart(2,"0")}),(0,b.jsxs)(q,{children:[(0,b.jsx)(r,{children:a.title.map((a,c)=>(0,b.jsx)(s,{children:a},c))}),(0,b.jsx)(t,{children:a.access.split("\n").map((a,c)=>(0,b.jsxs)("span",{children:[a,0===c&&(0,b.jsx)("br",{})]},c))})]})]},a.id))}),(0,b.jsx)(u,{children:(0,b.jsx)(e.default,{text:"I want a Free Lesson",bgColor:d.default.colors.primary,textColor:d.default.colors.secondary,width:"100%",onClick:()=>console.log("Free lesson clicked")})})]})]});a.s(["Course",0,v,"default",0,v])},35816,a=>{"use strict";var b=a.i(87924),c=a.i(75716),d=a.i(31650),e=a.i(12466);let f=c.default.section`
  background-color: ${d.default.colors.white};
  margin: 0 2.5rem;
  margin-bottom: 10rem;
`,g=c.default.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 3rem;
`,h=c.default.h2`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 3rem;
  font-weight: 400;
  color: ${d.default.colors.textColor};
  margin: 0;
  line-height: 1.2;
  
  .highlight {
    color: ${d.default.colors.primary};
  }
`,i=c.default.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,j=c.default.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.6rem 1.7rem;
  background: ${a=>a.$isHighlighted?d.default.colors.primary:d.default.colors.white};
  border: 1.5px solid ${a=>a.$isHighlighted?d.default.colors.primary:"#CCC3E2"};
  border-radius: 1.25rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: linear-gradient(80.86deg, #93E46E -10%, #FFFFFF 100%);
    border-color: ${d.default.colors.primary};
  }
`,k=c.default.div`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.125rem;
  color: ${a=>a.$isHighlighted?d.default.colors.white:d.default.colors.textColor};
  align-self: center;
`,l=c.default.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,m=c.default.h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.25rem;
  color: ${a=>a.$isHighlighted?d.default.colors.white:d.default.colors.textColor};
  margin: 0 0 1rem 0;
  line-height: 140%;
  width: 90%;
`,n=c.default.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`,o=c.default.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Pangram-Medium', sans-serif;
  font-size: 0.875rem;
  color: ${a=>a.$isHighlighted?d.default.colors.white:"#666"};
`,p=c.default.img`
  width: 16px;
  height: 16px;
`,q=c.default.img`
  width: 0.875rem;
  height: 0.875rem;
  filter: ${a=>a.$isHighlighted?"brightness(0) invert(1)":"none"};
`,r=c.default.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`,s=()=>(0,b.jsxs)(f,{children:[(0,b.jsxs)(g,{children:[(0,b.jsxs)(h,{children:[(0,b.jsx)("span",{className:"highlight",children:"Program"})," of the course",(0,b.jsx)("br",{}),"is 8 Module"]}),(0,b.jsx)(e.default,{text:"Download Syllabus",bgColor:d.default.colors.primary,textColor:d.default.colors.secondary,width:"267px",onClick:()=>console.log("Download syllabus clicked")})]}),(0,b.jsx)(i,{children:[{id:1,number:"Module 1",title:"UX Foundations & the AI-Augmented Designer's Mindset",liveClasses:5,activities:0,isHighlighted:!1},{id:2,number:"Module 2",title:"User Research in the Age of AI: Methods & Synthesis",liveClasses:5,activities:0,isHighlighted:!1},{id:3,number:"Module 3",title:"Information Architecture & AI-Assisted Content Strategy",liveClasses:5,activities:0,isHighlighted:!1},{id:4,number:"Module 4",title:"Interaction Design, Micro-Interactions & Motion Principles",liveClasses:5,activities:0,isHighlighted:!1},{id:5,number:"Module 5",title:"Rapid Prototyping with Generative & AI-Powered Tools",liveClasses:5,activities:0,isHighlighted:!1}].map(a=>(0,b.jsxs)(j,{$isHighlighted:a.isHighlighted,children:[(0,b.jsx)(k,{$isHighlighted:a.isHighlighted,children:a.number}),(0,b.jsxs)(l,{children:[(0,b.jsx)(m,{$isHighlighted:a.isHighlighted,children:a.title}),(0,b.jsxs)(n,{children:[(0,b.jsxs)(o,{$isHighlighted:a.isHighlighted,children:[(0,b.jsx)(p,{src:"/Logo/videoIcon.svg",alt:"Video"}),a.liveClasses," Live Classes"]}),(0,b.jsxs)(o,{$isHighlighted:a.isHighlighted,children:[(0,b.jsx)(p,{src:"/Logo/bookIcon.svg",alt:"Activities"}),"Activities"]})]})]}),(0,b.jsx)(q,{src:"/Logo/arrow.svg",alt:"Arrow",$isHighlighted:a.isHighlighted})]},a.id))}),(0,b.jsx)(r,{children:(0,b.jsx)(e.default,{text:"Download Syllabus",bgColor:d.default.colors.primary,textColor:d.default.colors.secondary,width:"562px",onClick:()=>console.log("Download syllabus clicked")})})]});a.s(["Programs",0,s,"default",0,s])},26143,a=>{"use strict";var b=a.i(87924),c=a.i(75716),d=a.i(31650);let e=c.default.section`
  background-color: ${d.default.colors.white};
  margin: 0 2.5rem;
  margin-bottom: 6.25rem;
`,f=c.default.h2`
  font-family: 'RightGrotesk-widemedium', sans-serif;
  font-size: 3.375rem;
  color: ${d.default.colors.textColor};
  margin: 0 0 46px 0;
  line-height: 1.2;
  text-align: center;
  
  .highlight {
    color: ${d.default.colors.primary};
  }
`,g=c.default.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-size: 1rem;
  color: #525252;
  margin: 0 auto;
  text-align: center;
  line-height: 1.6;
`,h=c.default.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1.5rem;
  align-items: end;
`,i=c.default.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,j=c.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 1rem;
`,k=c.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`,l=c.default.div`
  padding: 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: ${a=>a.$height||"300px"};
  position: relative;
  overflow: hidden;
  gap: 2rem;
  
  ${a=>a.$bgImage?`
    background-image: url(${a.$bgImage});
    background-size: cover;
    background-position: center;
  `:`
    background-color: ${a.$bgColor||"#f5f5f5"};
  `}
`,m=c.default.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-color: ${a=>a.$bgColor||d.default.colors.primary};
  color: ${a=>a.$textColor||d.default.colors.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.5rem;
`,n=c.default.h3`
  font-family: 'RightGrotesk-widemedium', sans-serif;
  font-size: 1.5rem;
  color: ${a=>a.$textColor||d.default.colors.textColor};
  margin: 0;
  line-height: 1.3;
`,o=c.default.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-color: ${d.default.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 13px;
    height: 13px;
    transform: rotate(180deg);
  }
`,p=c.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`,q=()=>{let a=[{id:1,number:"01",title:"Real-World Projects, Not Just Theory",bgImage:"/Images/Rectangleone.png",height:"472px",textColor:d.default.colors.white,numberBgColor:d.default.colors.primary,numberTextColor:d.default.colors.textColor},{id:2,number:"02",title:"AI-Powered Learning Approach",bgColor:"#f0f0f0",height:"290px",textColor:d.default.colors.textColor,numberBgColor:d.default.colors.primary,numberTextColor:d.default.colors.textColor},{id:3,title:"Contact Us",bgColor:"#f0f0f0",height:"290px",textColor:d.default.colors.textColor,isContactCard:!0},{id:4,number:"03",title:"Career-Oriented Mentorship",bgImage:"/Images/RectangleTwo.png",height:"472px",textColor:d.default.colors.secondary,numberBgColor:d.default.colors.white,numberTextColor:d.default.colors.textColor}];return(0,b.jsx)(e,{children:(0,b.jsxs)(h,{children:[(0,b.jsxs)(l,{$bgImage:a[0].bgImage,$bgColor:a[0].bgColor,$height:a[0].height,children:[(0,b.jsx)(m,{$bgColor:a[0].numberBgColor,$textColor:a[0].numberTextColor,children:a[0].number}),(0,b.jsx)(n,{$textColor:a[0].textColor,children:a[0].title})]},a[0].id),(0,b.jsxs)(i,{children:[(0,b.jsxs)(j,{children:[(0,b.jsxs)(f,{children:["Why",(0,b.jsx)("span",{className:"highlight",children:" Aarasoft"}),(0,b.jsx)("br",{}),"Academy?"]}),(0,b.jsx)(g,{children:"No fluff. Just practical skills, real projects, and AI-powered tools to help you break into the design industry."})]}),(0,b.jsxs)(k,{children:[(0,b.jsxs)(l,{$bgImage:a[1].bgImage,$bgColor:a[1].bgColor,$height:a[1].height,children:[(0,b.jsx)(m,{$bgColor:a[1].numberBgColor,$textColor:a[1].numberTextColor,children:a[1].number}),(0,b.jsx)(n,{$textColor:a[1].textColor,children:a[1].title})]},a[1].id),(0,b.jsx)(l,{$bgImage:a[2].bgImage,$bgColor:a[2].bgColor,$height:a[2].height,children:(0,b.jsxs)(p,{children:[(0,b.jsx)(o,{children:(0,b.jsx)("img",{src:"/Logo/arrow.svg",alt:"Arrow"})}),(0,b.jsx)(n,{$textColor:a[2].textColor,children:a[2].title})]})},a[2].id)]})]}),(0,b.jsxs)(l,{$bgImage:a[3].bgImage,$bgColor:a[3].bgColor,$height:a[3].height,children:[(0,b.jsx)(m,{$bgColor:a[3].numberBgColor,$textColor:a[3].numberTextColor,children:a[3].number}),(0,b.jsx)(n,{$textColor:a[3].textColor,children:a[3].title})]},a[3].id)]})})};a.s(["WhyAarasoft",0,q,"default",0,q])},32512,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(75716),e=a.i(31650),f=a.i(12466);let g=d.default.section`
  padding: 0 2.5rem;
  background-color: ${e.default.colors.white};
  margin: 0 auto;
  height: 400vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`,h=d.default.div`
  position: sticky;
  top: 0;
  height: 130vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${e.default.colors.white};
  z-index: 10;
`,i=d.default.h2`
  font-family: 'RightGrotesk-widemedium', sans-serif;
  font-size: 3.375rem;
  color: ${e.default.colors.textColor};
  margin: 0 0 1rem 0;
  line-height: 1.2;
  text-align: center;
  
  .highlight {
    color: ${e.default.colors.primary};
  }
`,j=d.default.div`
  position: relative;
  width: 100%;
  height: 40.0625rem;
  padding-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,k=d.default.div`
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
`,l=d.default.div`
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
`,m=d.default.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${a=>a.$isActive?e.default.colors.primary:"#e5e5e5"};
  color: ${a=>a.$isActive?e.default.colors.textColor:"#525252"};
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
    rotate(${a=>a.$angle}deg) 
    translateY(-36.0625rem) 
    rotate(${a=>-a.$angle}deg);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: ${a=>a.$isActive?10:2};
  
  ${a=>180===a.$angle?`
    border: 2px solid red !important;
  `:""}
`,n=d.default.div`
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
`,o=d.default.h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${e.default.colors.textColor};
  margin: 0 0 2.688rem 0;
`,p=d.default.p`
  font-family: 'Pangram-Regular', sans-serif;
  font-size: 1rem;
  color: #525252;
  margin: 0 0 3.5rem 0;
  line-height: 1.6;
`,q=d.default.p`
  font-family: 'Pangram-Medium', sans-serif;
  font-size: 1rem;
  color: #525252;
  margin: 5.875rem 0 0 0;
`,r=()=>{let[a,d]=(0,c.useState)(0),[r,s]=(0,c.useState)(0),[t,u]=(0,c.useState)(0),v=(0,c.useRef)(null),w=[{id:1,title:"Live Sessions",description:"Get Life time Access to Recordings + 2 Weekly Live Session"},{id:2,title:"Real Projects",description:"Work on industry-standard projects to build your portfolio"},{id:3,title:"AI-Powered Tools",description:"Learn to use cutting-edge AI tools for modern design workflows"},{id:4,title:"Career Support",description:"Get personalized mentorship and career guidance throughout"},{id:5,title:"Community Access",description:"Join a vibrant community of designers and industry experts"}];return(0,c.useEffect)(()=>{let a=!1,b=()=>{a||(requestAnimationFrame(()=>{(()=>{if(!v.current)return;let a=v.current.getBoundingClientRect(),b=window.innerHeight,c=v.current.offsetHeight,d=Math.min(Math.max(0,-a.top)/(c-b),1),e=Math.min(Math.floor(d/(1/w.length)),w.length-1);e!==t&&u(e),s(d*(w.length-1))})(),a=!1}),a=!0)};return b(),window.addEventListener("scroll",b),()=>window.removeEventListener("scroll",b)},[w.length,t]),(0,c.useEffect)(()=>{if(t!==a){let b=setTimeout(()=>{t>a?d(a=>a+1):t<a&&d(a=>a-1)},500);return()=>clearTimeout(b)}},[t,a]),(0,b.jsx)(g,{ref:v,children:(0,b.jsxs)(h,{children:[(0,b.jsxs)(i,{children:["Why This ",(0,b.jsx)("span",{className:"highlight",children:"Course?"})]}),(0,b.jsxs)(j,{children:[(0,b.jsx)(k,{}),(0,b.jsx)(l,{}),w.map((c,d)=>{let e,f,g=(f=180*a/((e=w.length)-1),180*d/(e-1)-(f-1));return(0,b.jsx)(m,{$isActive:d===a,$angle:g,children:c.id.toString().padStart(2,"0")},c.id)}),(0,b.jsxs)(n,{children:[(0,b.jsx)(o,{children:w[a].title}),(0,b.jsx)(p,{children:w[a].description}),(0,b.jsx)(f.default,{text:"Book My Free Career Call",bgColor:e.default.colors.primary,textColor:e.default.colors.textColor,width:"100%",iconSrc:"/Logo/whatsappLogo.svg",iconAlt:"WhatsApp",onClick:()=>console.log("Book call clicked")}),(0,b.jsxs)(q,{children:[(a+1).toString().padStart(2,"0"),"/",w.length.toString().padStart(2,"0")]})]})]})]})})};a.s(["WhyCourse",0,r,"default",0,r])}];

//# sourceMappingURL=_077zd5~._.js.map
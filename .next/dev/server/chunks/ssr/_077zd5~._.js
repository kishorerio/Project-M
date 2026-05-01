module.exports = [
"[project]/data/faq.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": 1,
        "question": "Is this course beginner-friendly?",
        "answer": "Hi, I'm Manoj Kumar, a UI/UX Designer with 4+ years of experience working on real-world products like ERP systems, mobile apps, and business platforms. I started my journey just like many beginners—confused, exploring, and trying to understand how design actually works in the real world."
    },
    {
        "id": 2,
        "question": "Do I need prior UX/UI knowledge to join?",
        "answer": "No prior UX/UI knowledge is required. This course is designed for complete beginners. We start from the basics and gradually build up your skills with practical projects and real-world examples."
    },
    {
        "id": 3,
        "question": "Will there be live sessions or recorded videos?",
        "answer": "The course includes both live sessions and recorded videos. Live sessions allow for real-time interaction and Q&A, while recorded videos let you learn at your own pace and revisit concepts whenever needed."
    },
    {
        "id": 4,
        "question": "Do I get personalized feedback?",
        "answer": "Yes, you'll receive personalized feedback on all your projects and assignments. Our mentors review your work individually and provide detailed feedback to help you improve your design skills."
    },
    {
        "id": 5,
        "question": "How many students are in each batch?",
        "answer": "We keep our batch sizes small, typically 15-20 students per batch. This ensures personalized attention and better interaction between students and mentors."
    },
    {
        "id": 6,
        "question": "What if I have doubts during the course?",
        "answer": "You can ask questions anytime through our dedicated support channels. We have regular doubt-clearing sessions, one-on-one mentorship calls, and a community where you can get help from peers and mentors."
    },
    {
        "id": 7,
        "question": "Will I receive a certificate?",
        "answer": "Yes, upon successful completion of the course and all projects, you'll receive a certificate of completion. This certificate validates your skills and can be added to your portfolio and LinkedIn profile."
    }
];
}),
"[project]/components/faq/Faq.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Faq",
    ()=>Faq
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme/theme.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faq$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/faq.json.[json].cjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const FaqContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  gap: 5rem;
  margin: 0 2.5rem;
  margin-bottom: 6.25rem;
`;
const LeftSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h2`
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 500;
  font-size: 3.375rem;
  line-height: 120%;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.secondary};
  margin: 0 0 2rem 0;

  span {
    color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.primary};
  }
`;
const RightSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const FaqItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  border: 1.5px solid ${(props)=>props.isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.primary : '#CCC3E2'};
  border-radius: 1.25rem;
  background: ${(props)=>props.isOpen ? 'radial-gradient(circle at center, #93E46E -100%, #FFFFFF 100%)' : '#ffffff'};
  transition: all 0.3s ease;
  overflow: hidden;
`;
const QuestionHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.563rem;
  cursor: pointer;
`;
const Question = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.secondary};
  margin: 0;
  flex: 1;
`;
const IconButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
`;
const PlusIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.secondary};
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
    transform: translateX(-50%) ${(props)=>props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
  }
`;
const MinusIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  width: 24px;
  height: 2px;
  background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.secondary};
`;
const AnswerContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  max-height: ${(props)=>props.isOpen ? '200px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;
const Answer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.secondaryTextColor};
  margin: 0;
  padding: 0 1.563rem 1.563rem 1.563rem;
`;
const Faq = ()=>{
    const [openItem, setOpenItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1); // First item open by default
    const toggleItem = (id)=>{
        setOpenItem((prev)=>prev === id ? null : id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaqContainer, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LeftSection, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                        children: [
                            "Frequently Asked",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/faq/Faq.tsx",
                                lineNumber: 141,
                                columnNumber: 27
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Questions ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "(FAQs)"
                            }, void 0, false, {
                                fileName: "[project]/components/faq/Faq.tsx",
                                lineNumber: 142,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/faq/Faq.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        text: "Chat in WhatsApp",
                        bgColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.primary,
                        textColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.secondary,
                        iconSrc: "/Logo/whatsappLogo.svg",
                        iconAlt: "WhatsApp",
                        onClick: ()=>console.log('WhatsApp clicked'),
                        width: "252px"
                    }, void 0, false, {
                        fileName: "[project]/components/faq/Faq.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/faq/Faq.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RightSection, {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faq$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].map((faq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaqItem, {
                        isOpen: openItem === faq.id,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(QuestionHeader, {
                                onClick: ()=>toggleItem(faq.id),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Question, {
                                        children: faq.question
                                    }, void 0, false, {
                                        fileName: "[project]/components/faq/Faq.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconButton, {
                                        children: openItem === faq.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MinusIcon, {}, void 0, false, {
                                            fileName: "[project]/components/faq/Faq.tsx",
                                            lineNumber: 162,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PlusIcon, {
                                            isOpen: false
                                        }, void 0, false, {
                                            fileName: "[project]/components/faq/Faq.tsx",
                                            lineNumber: 164,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/faq/Faq.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/faq/Faq.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnswerContainer, {
                                isOpen: openItem === faq.id,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Answer, {
                                    children: faq.answer
                                }, void 0, false, {
                                    fileName: "[project]/components/faq/Faq.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/faq/Faq.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, faq.id, true, {
                        fileName: "[project]/components/faq/Faq.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/faq/Faq.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/faq/Faq.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/careerContact/CareerContact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CareerContact",
    ()=>CareerContact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme/theme.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const CareerContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.primary};
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
`;
const LeftSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
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
`;
const ContentWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const ButtonWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  margin-top: auto;
  padding-top: 2rem;
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h2`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 120%;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.secondary};
  margin: 0 0 2.5rem 0;
`;
const Description = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 150%;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.secondaryTextColor};
  margin: 0 0 2rem 0;
  opacity: 0.8;
`;
const RightSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  flex: 1;
  z-index: 1;
  position: relative;
`;
const Form = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const FormGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:focus-within label {
    color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.secondary};
  }
`;
const Label = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].label`
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.white};
  transition: color 0.2s ease;
`;
const Input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].input`
  padding: 1rem 1.25rem;
  border: none;
  border-radius: 0.75rem;
  background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.white};
  font-family: 'Pangram', sans-serif;
  font-size: 1rem;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.textColor};
  outline: none;
  transition: border 0.2s ease;

  &::placeholder {
    color: #A0A0A0;
  }

  &:focus {
    border: 2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.secondary};
  }
`;
const CareerContact = ()=>{
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        currentStatus: ''
    });
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Form submitted:', formData);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CareerContainer, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LeftSection, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentWrapper, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                children: [
                                    "Book Your Free Career",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/careerContact/CareerContact.tsx",
                                        lineNumber: 142,
                                        columnNumber: 34
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Guidance Call"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/careerContact/CareerContact.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Description, {
                                children: [
                                    "Let's plan your journey to become a professional",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/careerContact/CareerContact.tsx",
                                        lineNumber: 146,
                                        columnNumber: 61
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "UI/UX designer in 2026."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/careerContact/CareerContact.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/careerContact/CareerContact.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ButtonWrapper, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            text: "Contact Us",
                            bgColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.white,
                            textColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.secondary,
                            iconSrc: "/Logo/whatsapp-color.svg",
                            iconAlt: "WhatsApp",
                            width: "27rem",
                            onClick: ()=>console.log('Contact Us clicked')
                        }, void 0, false, {
                            fileName: "[project]/components/careerContact/CareerContact.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/careerContact/CareerContact.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/careerContact/CareerContact.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RightSection, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Form, {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormGroup, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                    children: "Full Name"
                                }, void 0, false, {
                                    fileName: "[project]/components/careerContact/CareerContact.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                    type: "text",
                                    name: "fullName",
                                    placeholder: "Enter your name",
                                    value: formData.fullName,
                                    onChange: handleInputChange,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/components/careerContact/CareerContact.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/careerContact/CareerContact.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormGroup, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                    children: "Phone Number"
                                }, void 0, false, {
                                    fileName: "[project]/components/careerContact/CareerContact.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                    type: "tel",
                                    name: "phoneNumber",
                                    placeholder: "Enter Mobile Number",
                                    value: formData.phoneNumber,
                                    onChange: handleInputChange,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/components/careerContact/CareerContact.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/careerContact/CareerContact.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormGroup, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                    children: "Email Address"
                                }, void 0, false, {
                                    fileName: "[project]/components/careerContact/CareerContact.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                    type: "email",
                                    name: "emailAddress",
                                    placeholder: "Enter email",
                                    value: formData.emailAddress,
                                    onChange: handleInputChange,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/components/careerContact/CareerContact.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/careerContact/CareerContact.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormGroup, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                    children: "Current Status"
                                }, void 0, false, {
                                    fileName: "[project]/components/careerContact/CareerContact.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                    type: "text",
                                    name: "currentStatus",
                                    placeholder: "Enter email",
                                    value: formData.currentStatus,
                                    onChange: handleInputChange,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/components/careerContact/CareerContact.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/careerContact/CareerContact.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            text: "Download Syllabus",
                            bgColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.secondary,
                            textColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.primary,
                            width: "100%",
                            onClick: ()=>console.log('Download Syllabus clicked')
                        }, void 0, false, {
                            fileName: "[project]/components/careerContact/CareerContact.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/careerContact/CareerContact.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/careerContact/CareerContact.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/careerContact/CareerContact.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/course/Course.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Course",
    ()=>Course,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme/theme.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const CourseContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].section`
  padding: 0 2.5rem;
  background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 12.5rem;
`;
const LeftSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  // gap: 1rem;
`;
const CourseTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h2`
  font-family: 'RightGrotesk-Medium', sans-serif;
  font-size: 3.375rem;
  font-weight: 500;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.textColor};
  margin: 0;
  line-height: 1.2;
  
  .highlight {
    color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.primary};
  }
`;
const CourseImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].img`
  width: 22.9375rem;
  height: 20.9375rem;
  object-fit: contain;
`;
const BottomSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;
const TrialText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p`
  font-family: 'Pangram-Regular', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #9E9E9E;
  margin: 0;
`;
const TrialOffer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.75rem;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.textColor};
  margin: 0;
  line-height: 1.2;
`;
const RightSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  height: 100%;
`;
const CourseList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const CourseCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.white};
  border: 1.5px solid #CCC3E2;
  border-radius: 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;
const CourseNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  min-width: 48px;
  height: 48px;
  border-radius: 50%;
  background: radial-gradient(70.69% 70.69% at 50% 50%, #7447CF 30%, #4A1CBB 100%);
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.125rem;
  flex-shrink: 0;
`;
const CourseInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;
const CourseCategory = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
`;
const CategoryTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h4`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 140%;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.textColor};
  margin: 0;
  line-height: 1.4;
  `;
const CourseAccess = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p`
  font-family: 'Pangram-Regular', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.secondaryTextColor};
  margin: 0;
  line-height: 1.5;
  line-height: 150%;
  text-align: left;
  white-space: nowrap;
`;
const ButtonWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  width: 100%;
`;
const Course = ()=>{
    const courseData = [
        {
            id: 1,
            title: [
                'Non - IT Professionals',
                '& Fresh graduates'
            ],
            access: 'Get Life time Access to Recordings +\n2 Weekly Live Session'
        },
        {
            id: 2,
            title: [
                'Students &',
                'Career Gap Students'
            ],
            access: 'Get Life time Access to Recordings +\n2 Weekly Live Session'
        },
        {
            id: 3,
            title: [
                'Graphic Designers &',
                'Software Developers'
            ],
            access: 'Get Life time Access to Recordings +\n2 Weekly Live Session'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseContainer, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LeftSection, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseTitle, {
                        children: [
                            "The Course is ideal",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/course/Course.tsx",
                                lineNumber: 166,
                                columnNumber: 30
                            }, ("TURBOPACK compile-time value", void 0)),
                            "for you ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "highlight",
                                children: "if you are"
                            }, void 0, false, {
                                fileName: "[project]/components/course/Course.tsx",
                                lineNumber: 167,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/course/Course.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseImage, {
                        src: "/Images/theCourse.png",
                        alt: "The Course"
                    }, void 0, false, {
                        fileName: "[project]/components/course/Course.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BottomSection, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TrialText, {
                                children: "Wondering if the course is right for you?"
                            }, void 0, false, {
                                fileName: "[project]/components/course/Course.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TrialOffer, {
                                children: "We offer a trail lesson for free!"
                            }, void 0, false, {
                                fileName: "[project]/components/course/Course.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/course/Course.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/course/Course.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RightSection, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseList, {
                        children: courseData.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseCard, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseNumber, {
                                        children: course.id.toString().padStart(2, '0')
                                    }, void 0, false, {
                                        fileName: "[project]/components/course/Course.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseInfo, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseCategory, {
                                                children: course.title.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryTitle, {
                                                        children: line
                                                    }, index, false, {
                                                        fileName: "[project]/components/course/Course.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/components/course/Course.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseAccess, {
                                                children: course.access.split('\n').map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            line,
                                                            index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/components/course/Course.tsx",
                                                                lineNumber: 193,
                                                                columnNumber: 39
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/components/course/Course.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/components/course/Course.tsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/course/Course.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, course.id, true, {
                                fileName: "[project]/components/course/Course.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/course/Course.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ButtonWrapper, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            text: "I want a Free Lesson",
                            bgColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.primary,
                            textColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.secondary,
                            width: "100%",
                            onClick: ()=>console.log('Free lesson clicked')
                        }, void 0, false, {
                            fileName: "[project]/components/course/Course.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/course/Course.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/course/Course.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/course/Course.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Course;
}),
"[project]/components/programs/Programs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Programs",
    ()=>Programs,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme/theme.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const ProgramsContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].section`
  background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.white};
  margin: 0 2.5rem;
  margin-bottom: 10rem;
`;
const Header = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 3rem;
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h2`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 3rem;
  font-weight: 400;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.textColor};
  margin: 0;
  line-height: 1.2;
  
  .highlight {
    color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.primary};
  }
`;
const ModuleList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const ModuleCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.6rem 1.7rem;
  background: ${(props)=>props.$isHighlighted ? __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.primary : __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.white};
  border: 1.5px solid ${(props)=>props.$isHighlighted ? __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.primary : '#CCC3E2'};
  border-radius: 1.25rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: linear-gradient(80.86deg, #93E46E -10%, #FFFFFF 100%);
    border-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.primary};
  }
`;
const ModuleNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.125rem;
  color: ${(props)=>props.$isHighlighted ? __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.white : __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.textColor};
  align-self: center;
`;
const ModuleContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ModuleTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.25rem;
  color: ${(props)=>props.$isHighlighted ? __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.white : __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.textColor};
  margin: 0 0 1rem 0;
  line-height: 140%;
  width: 90%;
`;
const ModuleDetails = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
const DetailItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Pangram-Medium', sans-serif;
  font-size: 0.875rem;
  color: ${(props)=>props.$isHighlighted ? __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.white : '#666'};
`;
const Icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].img`
  width: 16px;
  height: 16px;
`;
const ArrowIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].img`
  width: 0.875rem;
  height: 0.875rem;
  filter: ${(props)=>props.$isHighlighted ? 'brightness(0) invert(1)' : 'none'};
`;
const BottomButtonWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;
const Programs = ()=>{
    const modulesData = [
        {
            id: 1,
            number: 'Module 1',
            title: 'UX Foundations & the AI-Augmented Designer\'s Mindset',
            liveClasses: 5,
            activities: 0,
            isHighlighted: false
        },
        {
            id: 2,
            number: 'Module 2',
            title: 'User Research in the Age of AI: Methods & Synthesis',
            liveClasses: 5,
            activities: 0,
            isHighlighted: false
        },
        {
            id: 3,
            number: 'Module 3',
            title: 'Information Architecture & AI-Assisted Content Strategy',
            liveClasses: 5,
            activities: 0,
            isHighlighted: false
        },
        {
            id: 4,
            number: 'Module 4',
            title: 'Interaction Design, Micro-Interactions & Motion Principles',
            liveClasses: 5,
            activities: 0,
            isHighlighted: false
        },
        {
            id: 5,
            number: 'Module 5',
            title: 'Rapid Prototyping with Generative & AI-Powered Tools',
            liveClasses: 5,
            activities: 0,
            isHighlighted: false
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgramsContainer, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "highlight",
                                children: "Program"
                            }, void 0, false, {
                                fileName: "[project]/components/programs/Programs.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            " of the course",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/programs/Programs.tsx",
                                lineNumber: 168,
                                columnNumber: 67
                            }, ("TURBOPACK compile-time value", void 0)),
                            "is 8 Module"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/programs/Programs.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        text: "Download Syllabus",
                        bgColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.primary,
                        textColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.secondary,
                        width: "267px",
                        onClick: ()=>console.log('Download syllabus clicked')
                    }, void 0, false, {
                        fileName: "[project]/components/programs/Programs.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/programs/Programs.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ModuleList, {
                children: modulesData.map((module)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ModuleCard, {
                        $isHighlighted: module.isHighlighted,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ModuleNumber, {
                                $isHighlighted: module.isHighlighted,
                                children: module.number
                            }, void 0, false, {
                                fileName: "[project]/components/programs/Programs.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ModuleContent, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ModuleTitle, {
                                        $isHighlighted: module.isHighlighted,
                                        children: module.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/programs/Programs.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ModuleDetails, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                $isHighlighted: module.isHighlighted,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        src: "/Logo/videoIcon.svg",
                                                        alt: "Video"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/programs/Programs.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    module.liveClasses,
                                                    " Live Classes"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/programs/Programs.tsx",
                                                lineNumber: 193,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                $isHighlighted: module.isHighlighted,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        src: "/Logo/bookIcon.svg",
                                                        alt: "Activities"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/programs/Programs.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Activities"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/programs/Programs.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/programs/Programs.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/programs/Programs.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {
                                src: "/Logo/arrow.svg",
                                alt: "Arrow",
                                $isHighlighted: module.isHighlighted
                            }, void 0, false, {
                                fileName: "[project]/components/programs/Programs.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, module.id, true, {
                        fileName: "[project]/components/programs/Programs.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/programs/Programs.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BottomButtonWrapper, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    text: "Download Syllabus",
                    bgColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.primary,
                    textColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.secondary,
                    width: "562px",
                    onClick: ()=>console.log('Download syllabus clicked')
                }, void 0, false, {
                    fileName: "[project]/components/programs/Programs.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/programs/Programs.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/programs/Programs.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Programs;
}),
"[project]/components/whyAarasoft/WhyAarasoft.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhyAarasoft",
    ()=>WhyAarasoft,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme/theme.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const WhyAarasoftContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].section`
  background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.white};
  margin: 0 2.5rem;
  margin-bottom: 6.25rem;
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h2`
  font-family: 'RightGrotesk-widemedium', sans-serif;
  font-size: 3.375rem;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.textColor};
  margin: 0 0 46px 0;
  line-height: 1.2;
  text-align: center;
  
  .highlight {
    color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.primary};
  }
`;
const Subtitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p`
  font-family: 'Pangram-Regular', sans-serif;
  font-size: 1rem;
  color: #525252;
  margin: 0 auto;
  text-align: center;
  line-height: 1.6;
`;
const CardsGrid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1.5rem;
  align-items: end;
`;
const CenterColumn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const TitleSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 1rem;
`;
const CenterCardsRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`;
const Card = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  padding: 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: ${(props)=>props.$height || '300px'};
  position: relative;
  overflow: hidden;
  gap: 2rem;
  
  ${(props)=>props.$bgImage ? `
    background-image: url(${props.$bgImage});
    background-size: cover;
    background-position: center;
  ` : `
    background-color: ${props.$bgColor || '#f5f5f5'};
  `}
`;
const CardNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-color: ${(props)=>props.$bgColor || __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.primary};
  color: ${(props)=>props.$textColor || __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.5rem;
`;
const CardTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h3`
  font-family: 'RightGrotesk-widemedium', sans-serif;
  font-size: 1.5rem;
  color: ${(props)=>props.$textColor || __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.textColor};
  margin: 0;
  line-height: 1.3;
`;
const ArrowIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 13px;
    height: 13px;
    transform: rotate(180deg);
  }
`;
const ContactCardContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
const WhyAarasoft = ()=>{
    const cardsData = [
        {
            id: 1,
            number: '01',
            title: 'Real-World Projects, Not Just Theory',
            bgImage: '/Images/Rectangleone.png',
            height: '472px',
            textColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.white,
            numberBgColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.primary,
            numberTextColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.textColor
        },
        {
            id: 2,
            number: '02',
            title: 'AI-Powered Learning Approach',
            bgColor: '#f0f0f0',
            height: '290px',
            textColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.textColor,
            numberBgColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.primary,
            numberTextColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.textColor
        },
        {
            id: 3,
            title: 'Contact Us',
            bgColor: '#f0f0f0',
            height: '290px',
            textColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.textColor,
            isContactCard: true
        },
        {
            id: 4,
            number: '03',
            title: 'Career-Oriented Mentorship',
            bgImage: '/Images/RectangleTwo.png',
            height: '472px',
            textColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.secondary,
            numberBgColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.white,
            numberTextColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.textColor
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WhyAarasoftContainer, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardsGrid, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                    $bgImage: cardsData[0].bgImage,
                    $bgColor: cardsData[0].bgColor,
                    $height: cardsData[0].height,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardNumber, {
                            $bgColor: cardsData[0].numberBgColor,
                            $textColor: cardsData[0].numberTextColor,
                            children: cardsData[0].number
                        }, void 0, false, {
                            fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
                            lineNumber: 222,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardTitle, {
                            $textColor: cardsData[0].textColor,
                            children: cardsData[0].title
                        }, void 0, false, {
                            fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
                            lineNumber: 228,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, cardsData[0].id, true, {
                    fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
                    lineNumber: 216,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CenterColumn, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TitleSection, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                    children: [
                                        "Why",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "highlight",
                                            children: " Aarasoft"
                                        }, void 0, false, {
                                            fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
                                            lineNumber: 238,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
                                            lineNumber: 238,
                                            columnNumber: 73
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Academy?"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
                                    lineNumber: 236,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Subtitle, {
                                    children: "No fluff. Just practical skills, real projects, and AI-powered tools to help you break into the design industry."
                                }, void 0, false, {
                                    fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
                                    lineNumber: 242,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
                            lineNumber: 235,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CenterCardsRow, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    $bgImage: cardsData[1].bgImage,
                                    $bgColor: cardsData[1].bgColor,
                                    $height: cardsData[1].height,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardNumber, {
                                            $bgColor: cardsData[1].numberBgColor,
                                            $textColor: cardsData[1].numberTextColor,
                                            children: cardsData[1].number
                                        }, void 0, false, {
                                            fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
                                            lineNumber: 254,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardTitle, {
                                            $textColor: cardsData[1].textColor,
                                            children: cardsData[1].title
                                        }, void 0, false, {
                                            fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
                                            lineNumber: 260,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, cardsData[1].id, true, {
                                    fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
                                    lineNumber: 248,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    $bgImage: cardsData[2].bgImage,
                                    $bgColor: cardsData[2].bgColor,
                                    $height: cardsData[2].height,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactCardContent, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/Logo/arrow.svg",
                                                    alt: "Arrow"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
                                                lineNumber: 272,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardTitle, {
                                                $textColor: cardsData[2].textColor,
                                                children: cardsData[2].title
                                            }, void 0, false, {
                                                fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
                                                lineNumber: 275,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
                                        lineNumber: 271,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, cardsData[2].id, false, {
                                    fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
                                    lineNumber: 265,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
                            lineNumber: 247,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
                    lineNumber: 234,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                    $bgImage: cardsData[3].bgImage,
                    $bgColor: cardsData[3].bgColor,
                    $height: cardsData[3].height,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardNumber, {
                            $bgColor: cardsData[3].numberBgColor,
                            $textColor: cardsData[3].numberTextColor,
                            children: cardsData[3].number
                        }, void 0, false, {
                            fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
                            lineNumber: 290,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardTitle, {
                            $textColor: cardsData[3].textColor,
                            children: cardsData[3].title
                        }, void 0, false, {
                            fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
                            lineNumber: 296,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, cardsData[3].id, true, {
                    fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
                    lineNumber: 284,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
            lineNumber: 214,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/whyAarasoft/WhyAarasoft.tsx",
        lineNumber: 213,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = WhyAarasoft;
}),
"[project]/components/whyCourse/WhyCourse.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhyCourse",
    ()=>WhyCourse,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme/theme.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const WhyCourseContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].section`
  padding: 0 2.5rem;
  background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.white};
  margin: 0 auto;
  height: 400vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StickyWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  position: sticky;
  top: 0;
  height: 130vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.white};
  z-index: 10;
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h2`
  font-family: 'RightGrotesk-widemedium', sans-serif;
  font-size: 3.375rem;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.textColor};
  margin: 0 0 1rem 0;
  line-height: 1.2;
  text-align: center;
  
  .highlight {
    color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.primary};
  }
`;
const CarouselContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  position: relative;
  width: 100%;
  height: 40.0625rem;
  padding-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const EllipsePath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
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
`;
const FadingLine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
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
`;
const NumberCircle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${(props)=>props.$isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.primary : '#e5e5e5'};
  color: ${(props)=>props.$isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.textColor : '#525252'};
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
    rotate(${(props)=>props.$angle}deg) 
    translateY(-36.0625rem) 
    rotate(${(props)=>-props.$angle}deg);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: ${(props)=>props.$isActive ? 10 : 2};
  
  ${(props)=>props.$angle === 180 ? `
    border: 2px solid red !important;
  ` : ''}
`;
const ContentCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
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
`;
const ContentTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.textColor};
  margin: 0 0 2.688rem 0;
`;
const ContentDescription = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p`
  font-family: 'Pangram-Regular', sans-serif;
  font-size: 1rem;
  color: #525252;
  margin: 0 0 3.5rem 0;
  line-height: 1.6;
`;
const ProgressText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p`
  font-family: 'Pangram-Medium', sans-serif;
  font-size: 1rem;
  color: #525252;
  margin: 5.875rem 0 0 0;
`;
const WhyCourse = ()=>{
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [targetIndex, setTargetIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const courseItems = [
        {
            id: 1,
            title: 'Live Sessions',
            description: 'Get Life time Access to Recordings + 2 Weekly Live Session'
        },
        {
            id: 2,
            title: 'Real Projects',
            description: 'Work on industry-standard projects to build your portfolio'
        },
        {
            id: 3,
            title: 'AI-Powered Tools',
            description: 'Learn to use cutting-edge AI tools for modern design workflows'
        },
        {
            id: 4,
            title: 'Career Support',
            description: 'Get personalized mentorship and career guidance throughout'
        },
        {
            id: 5,
            title: 'Community Access',
            description: 'Join a vibrant community of designers and industry experts'
        }
    ];
    // Calculate angle for each circle based on scroll
    const getCircleAngle = (index)=>{
        const totalNumbers = courseItems.length;
        const baseAngle = index * 180 / (totalNumbers - 1); // Initial positions across 180 degrees
        const activeAngle = activeIndex * 180 / (totalNumbers - 1); // Current active position
        const targetAngle = 1; // Top center position
        const rotationOffset = activeAngle - targetAngle; // How much to rotate to bring active to center
        return baseAngle - rotationOffset; // Rotate all numbers so active is at top center
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const containerHeight = containerRef.current.offsetHeight;
            // Calculate scroll progress based on how much of the container has been scrolled
            const scrolled = Math.max(0, -rect.top);
            const maxScroll = containerHeight - windowHeight;
            const progress = Math.min(scrolled / maxScroll, 1);
            // Divide scroll into equal sections for each step
            const sectionSize = 1 / courseItems.length;
            const currentSection = Math.floor(progress / sectionSize);
            const newTargetIndex = Math.min(currentSection, courseItems.length - 1);
            // Only update targetIndex if it's different
            if (newTargetIndex !== targetIndex) {
                setTargetIndex(newTargetIndex);
            }
            // Update scroll progress for smooth transitions
            setScrollProgress(progress * (courseItems.length - 1));
        };
        let ticking = false;
        const throttledScroll = ()=>{
            if (!ticking) {
                requestAnimationFrame(()=>{
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };
        throttledScroll(); // Initial call
        window.addEventListener('scroll', throttledScroll);
        return ()=>window.removeEventListener('scroll', throttledScroll);
    }, [
        courseItems.length,
        targetIndex
    ]);
    // Animate activeIndex to targetIndex step by step
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (targetIndex !== activeIndex) {
            const timer = setTimeout(()=>{
                if (targetIndex > activeIndex) {
                    setActiveIndex((prev)=>prev + 1); // Always increment by 1
                } else if (targetIndex < activeIndex) {
                    setActiveIndex((prev)=>prev - 1); // Always decrement by 1
                }
            }, 500); // Increased delay for better visibility and control
            return ()=>clearTimeout(timer);
        }
    }, [
        targetIndex,
        activeIndex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WhyCourseContainer, {
        ref: containerRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StickyWrapper, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                    children: [
                        "Why This ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "highlight",
                            children: "Course?"
                        }, void 0, false, {
                            fileName: "[project]/components/whyCourse/WhyCourse.tsx",
                            lineNumber: 261,
                            columnNumber: 20
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/whyCourse/WhyCourse.tsx",
                    lineNumber: 260,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselContainer, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EllipsePath, {}, void 0, false, {
                            fileName: "[project]/components/whyCourse/WhyCourse.tsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadingLine, {}, void 0, false, {
                            fileName: "[project]/components/whyCourse/WhyCourse.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        courseItems.map((item, index)=>{
                            const angle = getCircleAngle(index);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberCircle, {
                                $isActive: index === activeIndex,
                                $angle: angle,
                                children: item.id.toString().padStart(2, '0')
                            }, item.id, false, {
                                fileName: "[project]/components/whyCourse/WhyCourse.tsx",
                                lineNumber: 271,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentCard, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentTitle, {
                                    children: courseItems[activeIndex].title
                                }, void 0, false, {
                                    fileName: "[project]/components/whyCourse/WhyCourse.tsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentDescription, {
                                    children: courseItems[activeIndex].description
                                }, void 0, false, {
                                    fileName: "[project]/components/whyCourse/WhyCourse.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    text: "Book My Free Career Call",
                                    bgColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.primary,
                                    textColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].colors.textColor,
                                    width: "100%",
                                    iconSrc: "/Logo/whatsappLogo.svg",
                                    iconAlt: "WhatsApp",
                                    onClick: ()=>console.log('Book call clicked')
                                }, void 0, false, {
                                    fileName: "[project]/components/whyCourse/WhyCourse.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressText, {
                                    children: [
                                        (activeIndex + 1).toString().padStart(2, '0'),
                                        "/",
                                        courseItems.length.toString().padStart(2, '0')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/whyCourse/WhyCourse.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/whyCourse/WhyCourse.tsx",
                            lineNumber: 281,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/whyCourse/WhyCourse.tsx",
                    lineNumber: 264,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/whyCourse/WhyCourse.tsx",
            lineNumber: 259,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/whyCourse/WhyCourse.tsx",
        lineNumber: 258,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = WhyCourse;
}),
];

//# sourceMappingURL=_077zd5~._.js.map
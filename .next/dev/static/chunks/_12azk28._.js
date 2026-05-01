(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data/faq.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/faq/Faq.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Faq",
    ()=>Faq
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme/theme.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faq$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/faq.json.[json].cjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const FaqContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  gap: 5rem;
  margin: 0 2.5rem;
  margin-bottom: 6.25rem;
`;
_c = FaqContainer;
const LeftSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
`;
_c1 = LeftSection;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2`
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 500;
  font-size: 3.375rem;
  line-height: 120%;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.secondary};
  margin: 0 0 2rem 0;

  span {
    color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.primary};
  }
`;
_c2 = Title;
const RightSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
_c3 = RightSection;
const FaqItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  border: 1.5px solid ${(props)=>props.isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.primary : '#CCC3E2'};
  border-radius: 1.25rem;
  background: ${(props)=>props.isOpen ? 'radial-gradient(circle at center, #93E46E -100%, #FFFFFF 100%)' : '#ffffff'};
  transition: all 0.3s ease;
  overflow: hidden;
`;
_c4 = FaqItem;
const QuestionHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.563rem;
  cursor: pointer;
`;
_c5 = QuestionHeader;
const Question = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.secondary};
  margin: 0;
  flex: 1;
`;
_c6 = Question;
const IconButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
`;
_c7 = IconButton;
const PlusIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.secondary};
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
_c8 = PlusIcon;
const MinusIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  width: 24px;
  height: 2px;
  background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.secondary};
`;
_c9 = MinusIcon;
const AnswerContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  max-height: ${(props)=>props.isOpen ? '200px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;
_c10 = AnswerContainer;
const Answer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.secondaryTextColor};
  margin: 0;
  padding: 0 1.563rem 1.563rem 1.563rem;
`;
_c11 = Answer;
const Faq = ()=>{
    _s();
    const [openItem, setOpenItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1); // First item open by default
    const toggleItem = (id)=>{
        setOpenItem((prev)=>prev === id ? null : id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaqContainer, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeftSection, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                        children: [
                            "Frequently Asked",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/faq/Faq.tsx",
                                lineNumber: 141,
                                columnNumber: 27
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Questions ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        text: "Chat in WhatsApp",
                        bgColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.primary,
                        textColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.secondary,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RightSection, {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faq$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map((faq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaqItem, {
                        isOpen: openItem === faq.id,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuestionHeader, {
                                onClick: ()=>toggleItem(faq.id),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Question, {
                                        children: faq.question
                                    }, void 0, false, {
                                        fileName: "[project]/components/faq/Faq.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconButton, {
                                        children: openItem === faq.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MinusIcon, {}, void 0, false, {
                                            fileName: "[project]/components/faq/Faq.tsx",
                                            lineNumber: 162,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlusIcon, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnswerContainer, {
                                isOpen: openItem === faq.id,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Answer, {
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
_s(Faq, "IDMCBpQ45lNNBrOJfnzicaXnRqQ=");
_c12 = Faq;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "FaqContainer");
__turbopack_context__.k.register(_c1, "LeftSection");
__turbopack_context__.k.register(_c2, "Title");
__turbopack_context__.k.register(_c3, "RightSection");
__turbopack_context__.k.register(_c4, "FaqItem");
__turbopack_context__.k.register(_c5, "QuestionHeader");
__turbopack_context__.k.register(_c6, "Question");
__turbopack_context__.k.register(_c7, "IconButton");
__turbopack_context__.k.register(_c8, "PlusIcon");
__turbopack_context__.k.register(_c9, "MinusIcon");
__turbopack_context__.k.register(_c10, "AnswerContainer");
__turbopack_context__.k.register(_c11, "Answer");
__turbopack_context__.k.register(_c12, "Faq");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/careerContact/CareerContact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CareerContact",
    ()=>CareerContact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme/theme.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const CareerContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.primary};
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
_c = CareerContainer;
const LeftSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  flex: 1;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
_c1 = LeftSection;
const ContentWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
_c2 = ContentWrapper;
const ButtonWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  margin-top: auto;
  padding-top: 2rem;
`;
_c3 = ButtonWrapper;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2`
  font-family: 'Pangram-Bold', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 120%;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.secondary};
  margin: 0 0 2.5rem 0;
`;
_c4 = Title;
const Description = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p`
  font-family: 'Pangram-Regular', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 150%;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.secondaryTextColor};
  margin: 0 0 2rem 0;
  opacity: 0.8;
`;
_c5 = Description;
const RightSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  flex: 1;
  z-index: 1;
  position: relative;
`;
_c6 = RightSection;
const Form = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
_c7 = Form;
const FormGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:focus-within label {
    color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.secondary};
  }
`;
_c8 = FormGroup;
const Label = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].label`
  font-family: 'Pangram-Medium', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.white};
  transition: color 0.2s ease;
`;
_c9 = Label;
const Input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input`
  padding: 1rem 1.25rem;
  border: none;
  border-radius: 0.75rem;
  background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.white};
  font-family: 'Pangram', sans-serif;
  font-size: 1rem;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.textColor};
  outline: none;
  transition: border 0.2s ease;

  &::placeholder {
    color: #A0A0A0;
  }

  &:focus {
    border: 2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.secondary};
  }
`;
_c10 = Input;
const CareerContact = ()=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CareerContainer, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeftSection, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentWrapper, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                children: [
                                    "Book Your Free Career",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/careerContact/CareerContact.tsx",
                                        lineNumber: 137,
                                        columnNumber: 34
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Guidance Call"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/careerContact/CareerContact.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Description, {
                                children: [
                                    "Let's plan your journey to become a professional",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/careerContact/CareerContact.tsx",
                                        lineNumber: 141,
                                        columnNumber: 61
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "UI/UX designer in 2026."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/careerContact/CareerContact.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/careerContact/CareerContact.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ButtonWrapper, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            text: "Contact Us",
                            bgColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.white,
                            textColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.secondary,
                            iconSrc: "/Logo/whatsapp-color.svg",
                            iconAlt: "WhatsApp",
                            width: "27rem",
                            onClick: ()=>console.log('Contact Us clicked')
                        }, void 0, false, {
                            fileName: "[project]/components/careerContact/CareerContact.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/careerContact/CareerContact.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/careerContact/CareerContact.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RightSection, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Form, {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormGroup, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                    children: "Full Name"
                                }, void 0, false, {
                                    fileName: "[project]/components/careerContact/CareerContact.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                    type: "text",
                                    name: "fullName",
                                    placeholder: "Enter your name",
                                    value: formData.fullName,
                                    onChange: handleInputChange,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/components/careerContact/CareerContact.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/careerContact/CareerContact.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormGroup, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                    children: "Phone Number"
                                }, void 0, false, {
                                    fileName: "[project]/components/careerContact/CareerContact.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                    type: "tel",
                                    name: "phoneNumber",
                                    placeholder: "Enter Mobile Number",
                                    value: formData.phoneNumber,
                                    onChange: handleInputChange,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/components/careerContact/CareerContact.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/careerContact/CareerContact.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormGroup, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                    children: "Email Address"
                                }, void 0, false, {
                                    fileName: "[project]/components/careerContact/CareerContact.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                    type: "email",
                                    name: "emailAddress",
                                    placeholder: "Enter email",
                                    value: formData.emailAddress,
                                    onChange: handleInputChange,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/components/careerContact/CareerContact.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/careerContact/CareerContact.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormGroup, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                    children: "Current Status"
                                }, void 0, false, {
                                    fileName: "[project]/components/careerContact/CareerContact.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                    type: "text",
                                    name: "currentStatus",
                                    placeholder: "Enter email",
                                    value: formData.currentStatus,
                                    onChange: handleInputChange,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/components/careerContact/CareerContact.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/careerContact/CareerContact.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            text: "Download Syllabus",
                            bgColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.secondary,
                            textColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.primary,
                            width: "100%",
                            onClick: ()=>console.log('Download Syllabus clicked')
                        }, void 0, false, {
                            fileName: "[project]/components/careerContact/CareerContact.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/careerContact/CareerContact.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/careerContact/CareerContact.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/careerContact/CareerContact.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CareerContact, "NUDep0c59boGly//ETdNb2s9Sr4=");
_c11 = CareerContact;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "CareerContainer");
__turbopack_context__.k.register(_c1, "LeftSection");
__turbopack_context__.k.register(_c2, "ContentWrapper");
__turbopack_context__.k.register(_c3, "ButtonWrapper");
__turbopack_context__.k.register(_c4, "Title");
__turbopack_context__.k.register(_c5, "Description");
__turbopack_context__.k.register(_c6, "RightSection");
__turbopack_context__.k.register(_c7, "Form");
__turbopack_context__.k.register(_c8, "FormGroup");
__turbopack_context__.k.register(_c9, "Label");
__turbopack_context__.k.register(_c10, "Input");
__turbopack_context__.k.register(_c11, "CareerContact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/course/Course.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Course",
    ()=>Course,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme/theme.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const CourseContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section`
  padding: 0 2.5rem;
  background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 12.5rem;
`;
_c = CourseContainer;
const LeftSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  // gap: 1rem;
`;
_c1 = LeftSection;
const CourseTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2`
  font-family: 'RightGrotesk-Medium', sans-serif;
  font-size: 3.375rem;
  font-weight: 500;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.textColor};
  margin: 0;
  line-height: 1.2;
  
  .highlight {
    color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.primary};
  }
`;
_c2 = CourseTitle;
const CourseImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].img`
  width: 22.9375rem;
  height: 20.9375rem;
  object-fit: contain;
`;
_c3 = CourseImage;
const BottomSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;
_c4 = BottomSection;
const TrialText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p`
  font-family: 'Pangram-Regular', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #9E9E9E;
  margin: 0;
`;
_c5 = TrialText;
const TrialOffer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.75rem;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.textColor};
  margin: 0;
  line-height: 1.2;
`;
_c6 = TrialOffer;
const RightSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  height: 100%;
`;
_c7 = RightSection;
const CourseList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
_c8 = CourseList;
const CourseCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.white};
  border: 1.5px solid #CCC3E2;
  border-radius: 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;
_c9 = CourseCard;
const CourseNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  min-width: 48px;
  height: 48px;
  border-radius: 50%;
  background: radial-gradient(70.69% 70.69% at 50% 50%, #7447CF 30%, #4A1CBB 100%);
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.125rem;
  flex-shrink: 0;
`;
_c10 = CourseNumber;
const CourseInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;
_c11 = CourseInfo;
const CourseCategory = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
`;
_c12 = CourseCategory;
const CategoryTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h4`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 140%;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.textColor};
  margin: 0;
  line-height: 1.4;
  `;
_c13 = CategoryTitle;
const CourseAccess = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p`
  font-family: 'Pangram-Regular', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.secondaryTextColor};
  margin: 0;
  line-height: 1.5;
  line-height: 150%;
  text-align: left;
  white-space: nowrap;
`;
_c14 = CourseAccess;
const ButtonWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  width: 100%;
`;
_c15 = ButtonWrapper;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseContainer, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeftSection, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseTitle, {
                        children: [
                            "The Course is ideal",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/course/Course.tsx",
                                lineNumber: 166,
                                columnNumber: 30
                            }, ("TURBOPACK compile-time value", void 0)),
                            "for you ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseImage, {
                        src: "/Images/theCourse.png",
                        alt: "The Course"
                    }, void 0, false, {
                        fileName: "[project]/components/course/Course.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BottomSection, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrialText, {
                                children: "Wondering if the course is right for you?"
                            }, void 0, false, {
                                fileName: "[project]/components/course/Course.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrialOffer, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RightSection, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseList, {
                        children: courseData.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseCard, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseNumber, {
                                        children: course.id.toString().padStart(2, '0')
                                    }, void 0, false, {
                                        fileName: "[project]/components/course/Course.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseInfo, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseCategory, {
                                                children: course.title.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryTitle, {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseAccess, {
                                                children: course.access.split('\n').map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            line,
                                                            index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ButtonWrapper, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            text: "I want a Free Lesson",
                            bgColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.primary,
                            textColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.secondary,
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
_c16 = Course;
const __TURBOPACK__default__export__ = Course;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
__turbopack_context__.k.register(_c, "CourseContainer");
__turbopack_context__.k.register(_c1, "LeftSection");
__turbopack_context__.k.register(_c2, "CourseTitle");
__turbopack_context__.k.register(_c3, "CourseImage");
__turbopack_context__.k.register(_c4, "BottomSection");
__turbopack_context__.k.register(_c5, "TrialText");
__turbopack_context__.k.register(_c6, "TrialOffer");
__turbopack_context__.k.register(_c7, "RightSection");
__turbopack_context__.k.register(_c8, "CourseList");
__turbopack_context__.k.register(_c9, "CourseCard");
__turbopack_context__.k.register(_c10, "CourseNumber");
__turbopack_context__.k.register(_c11, "CourseInfo");
__turbopack_context__.k.register(_c12, "CourseCategory");
__turbopack_context__.k.register(_c13, "CategoryTitle");
__turbopack_context__.k.register(_c14, "CourseAccess");
__turbopack_context__.k.register(_c15, "ButtonWrapper");
__turbopack_context__.k.register(_c16, "Course");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/programs/Programs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Programs",
    ()=>Programs,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme/theme.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const ProgramsContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section`
  background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.white};
  margin: 0 2.5rem;
  margin-bottom: 10rem;
`;
_c = ProgramsContainer;
const Header = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 3rem;
`;
_c1 = Header;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 3rem;
  font-weight: 400;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.textColor};
  margin: 0;
  line-height: 1.2;
  
  .highlight {
    color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.primary};
  }
`;
_c2 = Title;
const ModuleList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
_c3 = ModuleList;
const ModuleCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.6rem 1.7rem;
  background: ${(props)=>props.$isHighlighted ? __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.primary : __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.white};
  border: 1.5px solid ${(props)=>props.$isHighlighted ? __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.primary : '#CCC3E2'};
  border-radius: 1.25rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: linear-gradient(80.86deg, #93E46E -10%, #FFFFFF 100%);
    border-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.primary};
  }
`;
_c4 = ModuleCard;
const ModuleNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.125rem;
  color: ${(props)=>props.$isHighlighted ? __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.white : __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.textColor};
  align-self: center;
`;
_c5 = ModuleNumber;
const ModuleContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
_c6 = ModuleContent;
const ModuleTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3`
  font-family: 'Pangram-Bold', sans-serif;
  font-size: 1.25rem;
  color: ${(props)=>props.$isHighlighted ? __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.white : __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.textColor};
  margin: 0 0 1rem 0;
  line-height: 140%;
  width: 90%;
`;
_c7 = ModuleTitle;
const ModuleDetails = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
_c8 = ModuleDetails;
const DetailItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Pangram-Medium', sans-serif;
  font-size: 0.875rem;
  color: ${(props)=>props.$isHighlighted ? __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.white : '#666'};
`;
_c9 = DetailItem;
const Icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].img`
  width: 16px;
  height: 16px;
`;
_c10 = Icon;
const ArrowIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].img`
  width: 0.875rem;
  height: 0.875rem;
  filter: ${(props)=>props.$isHighlighted ? 'brightness(0) invert(1)' : 'none'};
`;
_c11 = ArrowIcon;
const BottomButtonWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;
_c12 = BottomButtonWrapper;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgramsContainer, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "highlight",
                                children: "Program"
                            }, void 0, false, {
                                fileName: "[project]/components/programs/Programs.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            " of the course",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        text: "Download Syllabus",
                        bgColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.primary,
                        textColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.secondary,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModuleList, {
                children: modulesData.map((module)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModuleCard, {
                        $isHighlighted: module.isHighlighted,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModuleNumber, {
                                $isHighlighted: module.isHighlighted,
                                children: module.number
                            }, void 0, false, {
                                fileName: "[project]/components/programs/Programs.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModuleContent, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModuleTitle, {
                                        $isHighlighted: module.isHighlighted,
                                        children: module.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/programs/Programs.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModuleDetails, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                $isHighlighted: module.isHighlighted,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                $isHighlighted: module.isHighlighted,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BottomButtonWrapper, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: "Download Syllabus",
                    bgColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.primary,
                    textColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].colors.secondary,
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
_c13 = Programs;
const __TURBOPACK__default__export__ = Programs;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
__turbopack_context__.k.register(_c, "ProgramsContainer");
__turbopack_context__.k.register(_c1, "Header");
__turbopack_context__.k.register(_c2, "Title");
__turbopack_context__.k.register(_c3, "ModuleList");
__turbopack_context__.k.register(_c4, "ModuleCard");
__turbopack_context__.k.register(_c5, "ModuleNumber");
__turbopack_context__.k.register(_c6, "ModuleContent");
__turbopack_context__.k.register(_c7, "ModuleTitle");
__turbopack_context__.k.register(_c8, "ModuleDetails");
__turbopack_context__.k.register(_c9, "DetailItem");
__turbopack_context__.k.register(_c10, "Icon");
__turbopack_context__.k.register(_c11, "ArrowIcon");
__turbopack_context__.k.register(_c12, "BottomButtonWrapper");
__turbopack_context__.k.register(_c13, "Programs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_12azk28._.js.map
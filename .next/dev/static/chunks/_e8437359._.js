(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Navbar() {
    _s();
    const [isSticky, setIsSticky] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setIsSticky(window.scrollY > 0);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const scrollToSection = (id)=>{
        const element = document.getElementById(id);
        element?.scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed w-full top-0 z-50 transition-all ${isSticky || isOpen ? "bg-black shadow-lg" : "bg-transparent"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "text-white text-xl font-bold flex items-center gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "G"
                                    }, void 0, false, {
                                        fileName: "[project]/components/navbar.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "o"
                                    }, void 0, false, {
                                        fileName: "[project]/components/navbar.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "al For A Cause"
                                    }, void 0, false, {
                                        fileName: "[project]/components/navbar.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/navbar.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/navbar.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>window.scrollTo({
                                            top: 0,
                                            behavior: "smooth"
                                        }),
                                    className: "text-white hover:text-[#88C642] transition-colors text-sm font-medium",
                                    children: "About"
                                }, void 0, false, {
                                    fileName: "[project]/components/navbar.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollToSection("past-events"),
                                    className: "text-white hover:text-[#88C642] transition-colors text-sm font-medium",
                                    children: "Past Event"
                                }, void 0, false, {
                                    fileName: "[project]/components/navbar.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollToSection("registration"),
                                    className: "text-white hover:text-[#88C642] transition-colors text-sm font-medium",
                                    children: "Registration"
                                }, void 0, false, {
                                    fileName: "[project]/components/navbar.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollToSection("teams"),
                                    className: "text-white hover:text-[#88C642] transition-colors text-sm font-medium",
                                    children: "Teams"
                                }, void 0, false, {
                                    fileName: "[project]/components/navbar.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollToSection("footer"),
                                    className: "text-white hover:text-[#88C642] transition-colors text-sm font-medium",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/components/navbar.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/navbar.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(!isOpen),
                                className: "text-white p-2",
                                "aria-label": "Toggle menu",
                                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "18",
                                            x2: "6",
                                            y1: "6",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/components/navbar.tsx",
                                            lineNumber: 96,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "6",
                                            x2: "18",
                                            y1: "6",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/components/navbar.tsx",
                                            lineNumber: 97,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/navbar.tsx",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "4",
                                            x2: "20",
                                            y1: "12",
                                            y2: "12"
                                        }, void 0, false, {
                                            fileName: "[project]/components/navbar.tsx",
                                            lineNumber: 111,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "4",
                                            x2: "20",
                                            y1: "6",
                                            y2: "6"
                                        }, void 0, false, {
                                            fileName: "[project]/components/navbar.tsx",
                                            lineNumber: 112,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "4",
                                            x2: "20",
                                            y1: "18",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/components/navbar.tsx",
                                            lineNumber: 113,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/navbar.tsx",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/navbar.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/navbar.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/navbar.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navbar.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10 flex flex-col items-center py-8 gap-6 shadow-xl h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                            setIsOpen(false);
                        },
                        className: "text-white hover:text-[#88C642] transition-colors text-lg font-medium",
                        children: "About"
                    }, void 0, false, {
                        fileName: "[project]/components/navbar.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            scrollToSection("past-events");
                            setIsOpen(false);
                        },
                        className: "text-white hover:text-[#88C642] transition-colors text-lg font-medium",
                        children: "Past Event"
                    }, void 0, false, {
                        fileName: "[project]/components/navbar.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            scrollToSection("registration");
                            setIsOpen(false);
                        },
                        className: "text-white hover:text-[#88C642] transition-colors text-lg font-medium",
                        children: "Registration"
                    }, void 0, false, {
                        fileName: "[project]/components/navbar.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            scrollToSection("teams");
                            setIsOpen(false);
                        },
                        className: "text-white hover:text-[#88C642] transition-colors text-lg font-medium",
                        children: "Teams"
                    }, void 0, false, {
                        fileName: "[project]/components/navbar.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            scrollToSection("footer");
                            setIsOpen(false);
                        },
                        className: "text-white hover:text-[#88C642] transition-colors text-lg font-medium",
                        children: "Contact"
                    }, void 0, false, {
                        fileName: "[project]/components/navbar.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/navbar.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/navbar.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(Navbar, "9b7iXEQrxoJThZrIzOuev5T6Ums=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/text-type.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const TextType = ({ text, as: Component = "span", typingSpeed = 50, initialDelay = 0, pauseDuration = 2000, deletingSpeed = 30, loop = true, className = "", showCursor = true, hideCursorWhileTyping = false, cursorCharacter = "|", cursorClassName = "", cursorBlinkDuration = 0.5, textColors = [], variableSpeed, onSentenceComplete, startOnVisible = false, reverseMode = false, ...props })=>{
    _s();
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentCharIndex, setCurrentCharIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTextIndex, setCurrentTextIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!startOnVisible);
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TextType.useMemo[textArray]": ()=>Array.isArray(text) ? text : [
                text
            ]
    }["TextType.useMemo[textArray]"], [
        text
    ]);
    const getRandomSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TextType.useCallback[getRandomSpeed]": ()=>{
            if (!variableSpeed) return typingSpeed;
            const { min, max } = variableSpeed;
            return Math.random() * (max - min) + min;
        }
    }["TextType.useCallback[getRandomSpeed]"], [
        variableSpeed,
        typingSpeed
    ]);
    const getCurrentTextColor = ()=>{
        if (textColors.length === 0) return undefined;
        return textColors[currentTextIndex % textColors.length];
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextType.useEffect": ()=>{
            if (!startOnVisible || !containerRef.current) return;
            const observer = new IntersectionObserver({
                "TextType.useEffect": (entries)=>{
                    entries.forEach({
                        "TextType.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                setIsVisible(true);
                            }
                        }
                    }["TextType.useEffect"]);
                }
            }["TextType.useEffect"], {
                threshold: 0.1
            });
            observer.observe(containerRef.current);
            return ({
                "TextType.useEffect": ()=>observer.disconnect()
            })["TextType.useEffect"];
        }
    }["TextType.useEffect"], [
        startOnVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextType.useEffect": ()=>{
            if (showCursor && cursorRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(cursorRef.current, {
                    opacity: 1
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(cursorRef.current, {
                    opacity: 0,
                    duration: cursorBlinkDuration,
                    repeat: -1,
                    yoyo: true,
                    ease: "power2.inOut"
                });
            }
        }
    }["TextType.useEffect"], [
        showCursor,
        cursorBlinkDuration
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextType.useEffect": ()=>{
            if (!isVisible) return;
            let timeout;
            const currentText = textArray[currentTextIndex];
            const processedText = reverseMode ? currentText.split("").reverse().join("") : currentText;
            const executeTypingAnimation = {
                "TextType.useEffect.executeTypingAnimation": ()=>{
                    if (isDeleting) {
                        if (displayedText === "") {
                            setIsDeleting(false);
                            if (currentTextIndex === textArray.length - 1 && !loop) {
                                return;
                            }
                            if (onSentenceComplete) {
                                onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
                            }
                            setCurrentTextIndex({
                                "TextType.useEffect.executeTypingAnimation": (prev)=>(prev + 1) % textArray.length
                            }["TextType.useEffect.executeTypingAnimation"]);
                            setCurrentCharIndex(0);
                            timeout = setTimeout({
                                "TextType.useEffect.executeTypingAnimation": ()=>{}
                            }["TextType.useEffect.executeTypingAnimation"], pauseDuration);
                        } else {
                            timeout = setTimeout({
                                "TextType.useEffect.executeTypingAnimation": ()=>{
                                    setDisplayedText({
                                        "TextType.useEffect.executeTypingAnimation": (prev)=>prev.slice(0, -1)
                                    }["TextType.useEffect.executeTypingAnimation"]);
                                }
                            }["TextType.useEffect.executeTypingAnimation"], deletingSpeed);
                        }
                    } else {
                        if (currentCharIndex < processedText.length) {
                            timeout = setTimeout({
                                "TextType.useEffect.executeTypingAnimation": ()=>{
                                    setDisplayedText({
                                        "TextType.useEffect.executeTypingAnimation": (prev)=>prev + processedText[currentCharIndex]
                                    }["TextType.useEffect.executeTypingAnimation"]);
                                    setCurrentCharIndex({
                                        "TextType.useEffect.executeTypingAnimation": (prev)=>prev + 1
                                    }["TextType.useEffect.executeTypingAnimation"]);
                                }
                            }["TextType.useEffect.executeTypingAnimation"], variableSpeed ? getRandomSpeed() : typingSpeed);
                        } else if (textArray.length >= 1) {
                            if (!loop && currentTextIndex === textArray.length - 1) return;
                            timeout = setTimeout({
                                "TextType.useEffect.executeTypingAnimation": ()=>{
                                    setIsDeleting(true);
                                }
                            }["TextType.useEffect.executeTypingAnimation"], pauseDuration);
                        }
                    }
                }
            }["TextType.useEffect.executeTypingAnimation"];
            if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
                timeout = setTimeout(executeTypingAnimation, initialDelay);
            } else {
                executeTypingAnimation();
            }
            return ({
                "TextType.useEffect": ()=>clearTimeout(timeout)
            })["TextType.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["TextType.useEffect"], [
        currentCharIndex,
        displayedText,
        isDeleting,
        typingSpeed,
        deletingSpeed,
        pauseDuration,
        textArray,
        currentTextIndex,
        loop,
        initialDelay,
        isVisible,
        reverseMode,
        variableSpeed,
        onSentenceComplete
    ]);
    const shouldHideCursor = hideCursorWhileTyping && (currentCharIndex < textArray[currentTextIndex].length || isDeleting);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Component, {
        ref: containerRef,
        className: `text-type ${className}`,
        ...props
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-type__content",
        style: {
            color: getCurrentTextColor() || "inherit"
        },
        children: displayedText
    }, void 0, false, {
        fileName: "[project]/components/text-type.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)), showCursor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: cursorRef,
        className: `text-type__cursor ${cursorClassName} ${shouldHideCursor ? "text-type__cursor--hidden" : ""}`,
        children: cursorCharacter
    }, void 0, false, {
        fileName: "[project]/components/text-type.tsx",
        lineNumber: 191,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0)));
};
_s(TextType, "rYuct5oxtZf9EwJat6pbcmgGcHQ=");
_c = TextType;
const __TURBOPACK__default__export__ = TextType;
var _c;
__turbopack_context__.k.register(_c, "TextType");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/hero-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$text$2d$type$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/text-type.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function HeroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "relative w-full h-screen flex items-center justify-center overflow-hidden pt-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                autoPlay: true,
                muted: true,
                loop: true,
                playsInline: true,
                className: "absolute inset-0 w-full h-full object-cover",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: "/animation gfc.mp4",
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/components/hero-section.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero-section.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-r from-[#88C642]/40 to-transparent"
            }, void 0, false, {
                fileName: "[project]/components/hero-section.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 text-center text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl md:text-7xl font-bold mb-4 text-balance text-center flex flex-col items-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "G"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden inline-block border-2 border-white/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/football gfc.jpg",
                                            alt: "Letter O displayed as football",
                                            fill: true,
                                            className: "object-cover",
                                            unoptimized: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "al"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero-section.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$text$2d$type$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    text: [
                                        "For A Cause"
                                    ],
                                    typingSpeed: 150,
                                    startOnVisible: true,
                                    showCursor: true,
                                    cursorCharacter: "|",
                                    className: "inline",
                                    loop: false
                                }, void 0, false, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/hero-section.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/hero-section.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg md:text-2xl font-light text-balance px-4",
                        children: "One Day. One Game. One Purpose."
                    }, void 0, false, {
                        fileName: "[project]/components/hero-section.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero-section.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/hero-section.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dome-gallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DomeGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$react$2f$dist$2f$use$2d$gesture$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/react/dist/use-gesture-react.esm.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const DEFAULT_IMAGES = [
    {
        src: "https://images.unsplash.com/photo-1755331039789-7e5680e26e8f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Abstract art"
    },
    {
        src: "https://images.unsplash.com/photo-1755569309049-98410b94f66d?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Modern sculpture"
    },
    {
        src: "https://images.unsplash.com/photo-1755497595318-7e5e3523854f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Digital artwork"
    },
    {
        src: "https://images.unsplash.com/photo-1755353985163-c2a0fe5ac3d8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Contemporary art"
    },
    {
        src: "https://images.unsplash.com/photo-1745965976680-d00be7dc0377?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Geometric pattern"
    },
    {
        src: "https://images.unsplash.com/photo-1752588975228-21f44630bb3c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Textured surface"
    },
    {
        src: "https://pbs.twimg.com/media/Gyla7NnXMAAXSo_?format=jpg&name=large",
        alt: "Social media image"
    }
];
const DEFAULTS = {
    maxVerticalRotationDeg: 5,
    dragSensitivity: 20,
    enlargeTransitionMs: 300,
    segments: 35
};
const clamp = (v, min, max)=>Math.min(Math.max(v, min), max);
const normalizeAngle = (d)=>(d % 360 + 360) % 360;
const wrapAngleSigned = (deg)=>{
    const a = ((deg + 180) % 360 + 360) % 360;
    return a - 180;
};
const getDataNumber = (el, name, fallback)=>{
    const attr = el.dataset[name] ?? el.getAttribute(`data-${name}`);
    const n = attr == null ? NaN : parseFloat(attr);
    return Number.isFinite(n) ? n : fallback;
};
// @ts-ignore
function buildItems(pool, seg) {
    // @ts-ignore
    const xCols = Array.from({
        length: seg
    }, (_, i)=>-37 + i * 2);
    const evenYs = [
        -4,
        -2,
        0,
        2,
        4
    ];
    const oddYs = [
        -3,
        -1,
        1,
        3,
        5
    ];
    // @ts-ignore
    const coords = xCols.flatMap((x, c)=>{
        const ys = c % 2 === 0 ? evenYs : oddYs;
        // @ts-ignore
        return ys.map((y)=>({
                x,
                y,
                sizeX: 2,
                sizeY: 2
            }));
    });
    const totalSlots = coords.length;
    if (pool.length === 0) {
        // @ts-ignore
        return coords.map((c)=>({
                ...c,
                src: "",
                alt: ""
            }));
    }
    if (pool.length > totalSlots) {
        console.warn(`[DomeGallery] Provided image count (${pool.length}) exceeds available tiles (${totalSlots}). Some images will not be shown.`);
    }
    // @ts-ignore
    const normalizedImages = pool.map((image)=>{
        if (typeof image === "string") {
            return {
                src: image,
                alt: ""
            };
        }
        return {
            src: image.src || "",
            alt: image.alt || ""
        };
    });
    const usedImages = Array.from({
        length: totalSlots
    }, // @ts-ignore
    (_, i)=>normalizedImages[i % normalizedImages.length]);
    for(let i = 1; i < usedImages.length; i++){
        // @ts-ignore
        if (usedImages[i].src === usedImages[i - 1].src) {
            for(let j = i + 1; j < usedImages.length; j++){
                // @ts-ignore
                if (usedImages[j].src !== usedImages[i].src) {
                    const tmp = usedImages[i];
                    usedImages[i] = usedImages[j];
                    usedImages[j] = tmp;
                    break;
                }
            }
        }
    }
    // @ts-ignore
    return coords.map((c, i)=>({
            ...c,
            // @ts-ignore
            src: usedImages[i].src,
            // @ts-ignore
            alt: usedImages[i].alt
        }));
}
function computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments) {
    const unit = 360 / segments / 2;
    const rotateY = unit * (offsetX + (sizeX - 1) / 2);
    const rotateX = unit * (offsetY - (sizeY - 1) / 2);
    return {
        rotateX,
        rotateY
    };
}
function DomeGallery({ images = DEFAULT_IMAGES, fit = 0.5, fitBasis = "auto", minRadius = 600, maxRadius = Infinity, padFactor = 0.25, overlayBlurColor = "#060010", maxVerticalRotationDeg = DEFAULTS.maxVerticalRotationDeg, dragSensitivity = DEFAULTS.dragSensitivity, enlargeTransitionMs = DEFAULTS.enlargeTransitionMs, segments = DEFAULTS.segments, dragDampening = 2, openedImageWidth = "250px", openedImageHeight = "350px", imageBorderRadius = "30px", openedImageBorderRadius = "30px", grayscale = true }) {
    _s();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sphereRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const viewerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrimRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const focusedElRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const originalTilePositionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rotationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const startRotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const startPosRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const draggingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const movedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const inertiaRAF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const openingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const openStartedAtRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastDragEndAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollLockedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lockScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DomeGallery.useCallback[lockScroll]": ()=>{
            if (scrollLockedRef.current) return;
            scrollLockedRef.current = true;
            document.body.classList.add("dg-scroll-lock");
        }
    }["DomeGallery.useCallback[lockScroll]"], []);
    const unlockScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DomeGallery.useCallback[unlockScroll]": ()=>{
            if (!scrollLockedRef.current) return;
            if (rootRef.current?.getAttribute("data-enlarging") === "true") return;
            scrollLockedRef.current = false;
            document.body.classList.remove("dg-scroll-lock");
        }
    }["DomeGallery.useCallback[unlockScroll]"], []);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DomeGallery.useMemo[items]": ()=>buildItems(images, segments)
    }["DomeGallery.useMemo[items]"], [
        images,
        segments
    ]);
    const applyTransform = (xDeg, yDeg)=>{
        const el = sphereRef.current;
        if (el) {
            el.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
        }
    };
    const lockedRadiusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DomeGallery.useEffect": ()=>{
            const root = rootRef.current;
            if (!root) return;
            const ro = new ResizeObserver({
                "DomeGallery.useEffect": (entries)=>{
                    const cr = entries[0].contentRect;
                    const w = Math.max(1, cr.width), h = Math.max(1, cr.height);
                    const minDim = Math.min(w, h), maxDim = Math.max(w, h), aspect = w / h;
                    let basis;
                    switch(fitBasis){
                        case "min":
                            basis = minDim;
                            break;
                        case "max":
                            basis = maxDim;
                            break;
                        case "width":
                            basis = w;
                            break;
                        case "height":
                            basis = h;
                            break;
                        default:
                            basis = aspect >= 1.3 ? w : minDim;
                    }
                    let radius = basis * fit;
                    const heightGuard = h * 1.35;
                    radius = Math.min(radius, heightGuard);
                    radius = clamp(radius, minRadius, maxRadius);
                    lockedRadiusRef.current = Math.round(radius);
                    const viewerPad = Math.max(8, Math.round(minDim * padFactor));
                    root.style.setProperty("--radius", `${lockedRadiusRef.current}px`);
                    root.style.setProperty("--viewer-pad", `${viewerPad}px`);
                    root.style.setProperty("--overlay-blur-color", overlayBlurColor);
                    root.style.setProperty("--tile-radius", imageBorderRadius);
                    root.style.setProperty("--enlarge-radius", openedImageBorderRadius);
                    root.style.setProperty("--image-filter", grayscale ? "grayscale(1)" : "none");
                    applyTransform(rotationRef.current.x, rotationRef.current.y);
                    const enlargedOverlay = viewerRef.current?.querySelector(".enlarge");
                    if (enlargedOverlay && frameRef.current && mainRef.current) {
                        const frameR = frameRef.current.getBoundingClientRect();
                        const mainR = mainRef.current.getBoundingClientRect();
                        const hasCustomSize = openedImageWidth && openedImageHeight;
                        if (hasCustomSize) {
                            const tempDiv = document.createElement("div");
                            tempDiv.style.cssText = `position: absolute; width: ${openedImageWidth}; height: ${openedImageHeight}; visibility: hidden;`;
                            document.body.appendChild(tempDiv);
                            const tempRect = tempDiv.getBoundingClientRect();
                            document.body.removeChild(tempDiv);
                            const centeredLeft = frameR.left - mainR.left + (frameR.width - tempRect.width) / 2;
                            const centeredTop = frameR.top - mainR.top + (frameR.height - tempRect.height) / 2;
                            enlargedOverlay.style.left = `${centeredLeft}px`;
                            enlargedOverlay.style.top = `${centeredTop}px`;
                        } else {
                            enlargedOverlay.style.left = `${frameR.left - mainR.left}px`;
                            enlargedOverlay.style.top = `${frameR.top - mainR.top}px`;
                            enlargedOverlay.style.width = `${frameR.width}px`;
                            enlargedOverlay.style.height = `${frameR.height}px`;
                        }
                    }
                }
            }["DomeGallery.useEffect"]);
            ro.observe(root);
            return ({
                "DomeGallery.useEffect": ()=>ro.disconnect()
            })["DomeGallery.useEffect"];
        }
    }["DomeGallery.useEffect"], [
        fit,
        fitBasis,
        minRadius,
        maxRadius,
        padFactor,
        overlayBlurColor,
        grayscale,
        imageBorderRadius,
        openedImageBorderRadius,
        openedImageWidth,
        openedImageHeight
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DomeGallery.useEffect": ()=>{
            applyTransform(rotationRef.current.x, rotationRef.current.y);
        }
    }["DomeGallery.useEffect"], []);
    const stopInertia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DomeGallery.useCallback[stopInertia]": ()=>{
            if (inertiaRAF.current) {
                cancelAnimationFrame(inertiaRAF.current);
                inertiaRAF.current = null;
            }
        }
    }["DomeGallery.useCallback[stopInertia]"], []);
    const startInertia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DomeGallery.useCallback[startInertia]": (vx, vy)=>{
            const MAX_V = 1.4;
            let vX = clamp(vx, -MAX_V, MAX_V) * 80;
            let vY = clamp(vy, -MAX_V, MAX_V) * 80;
            let frames = 0;
            const d = clamp(dragDampening ?? 0.6, 0, 1);
            const frictionMul = 0.94 + 0.055 * d;
            const stopThreshold = 0.015 - 0.01 * d;
            const maxFrames = Math.round(90 + 270 * d);
            const step = {
                "DomeGallery.useCallback[startInertia].step": ()=>{
                    vX *= frictionMul;
                    vY *= frictionMul;
                    if (Math.abs(vX) < stopThreshold && Math.abs(vY) < stopThreshold) {
                        inertiaRAF.current = null;
                        return;
                    }
                    if (++frames > maxFrames) {
                        inertiaRAF.current = null;
                        return;
                    }
                    const nextX = clamp(rotationRef.current.x - vY / 200, -maxVerticalRotationDeg, maxVerticalRotationDeg);
                    const nextY = wrapAngleSigned(rotationRef.current.y + vX / 200);
                    rotationRef.current = {
                        x: nextX,
                        y: nextY
                    };
                    applyTransform(nextX, nextY);
                    inertiaRAF.current = requestAnimationFrame(step);
                }
            }["DomeGallery.useCallback[startInertia].step"];
            stopInertia();
            inertiaRAF.current = requestAnimationFrame(step);
        }
    }["DomeGallery.useCallback[startInertia]"], [
        dragDampening,
        maxVerticalRotationDeg,
        stopInertia
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$react$2f$dist$2f$use$2d$gesture$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGesture"])({
        onDragStart: {
            "DomeGallery.useGesture": ({ event })=>{
                if (focusedElRef.current) return;
                stopInertia();
                // @ts-ignore
                const evt = event;
                draggingRef.current = true;
                movedRef.current = false;
                startRotRef.current = {
                    ...rotationRef.current
                };
                // @ts-ignore
                startPosRef.current = {
                    x: evt.clientX,
                    y: evt.clientY
                };
            }
        }["DomeGallery.useGesture"],
        onDrag: {
            "DomeGallery.useGesture": ({ event, last, velocity = [
                0,
                0
            ], direction = [
                0,
                0
            ], movement })=>{
                if (focusedElRef.current || !draggingRef.current || !startPosRef.current) return;
                // @ts-ignore
                const evt = event;
                // @ts-ignore
                const dxTotal = evt.clientX - startPosRef.current.x;
                // @ts-ignore
                const dyTotal = evt.clientY - startPosRef.current.y;
                if (!movedRef.current) {
                    const dist2 = dxTotal * dxTotal + dyTotal * dyTotal;
                    if (dist2 > 16) movedRef.current = true;
                }
                const nextX = clamp(startRotRef.current.x - dyTotal / dragSensitivity, -maxVerticalRotationDeg, maxVerticalRotationDeg);
                const nextY = wrapAngleSigned(startRotRef.current.y + dxTotal / dragSensitivity);
                if (rotationRef.current.x !== nextX || rotationRef.current.y !== nextY) {
                    rotationRef.current = {
                        x: nextX,
                        y: nextY
                    };
                    applyTransform(nextX, nextY);
                }
                if (last) {
                    draggingRef.current = false;
                    let [vMagX, vMagY] = velocity;
                    const [dirX, dirY] = direction;
                    let vx = vMagX * dirX;
                    let vy = vMagY * dirY;
                    if (Math.abs(vx) < 0.001 && Math.abs(vy) < 0.001 && Array.isArray(movement)) {
                        const [mx, my] = movement;
                        vx = clamp(mx / dragSensitivity * 0.02, -1.2, 1.2);
                        vy = clamp(my / dragSensitivity * 0.02, -1.2, 1.2);
                    }
                    if (Math.abs(vx) > 0.005 || Math.abs(vy) > 0.005) startInertia(vx, vy);
                    if (movedRef.current) lastDragEndAt.current = performance.now();
                    movedRef.current = false;
                }
            }
        }["DomeGallery.useGesture"]
    }, {
        target: mainRef,
        eventOptions: {
            passive: true
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DomeGallery.useEffect": ()=>{
            const scrim = scrimRef.current;
            if (!scrim) return;
            const close = {
                "DomeGallery.useEffect.close": ()=>{
                    if (performance.now() - openStartedAtRef.current < 250) return;
                    const el = focusedElRef.current;
                    if (!el) return;
                    const parent = el.parentElement;
                    const overlay = viewerRef.current?.querySelector(".enlarge");
                    if (!overlay) return;
                    const refDiv = parent?.querySelector(".item__image--reference");
                    const originalPos = originalTilePositionRef.current;
                    if (!originalPos) {
                        overlay.remove();
                        if (refDiv) refDiv.remove();
                        parent?.style.setProperty("--rot-y-delta", "0deg");
                        parent?.style.setProperty("--rot-x-delta", "0deg");
                        el.style.visibility = "";
                        el.style.zIndex = "0";
                        focusedElRef.current = null;
                        rootRef.current?.removeAttribute("data-enlarging");
                        openingRef.current = false;
                        unlockScroll();
                        return;
                    }
                    const currentRect = overlay.getBoundingClientRect();
                    const rootRect = rootRef.current.getBoundingClientRect();
                    const originalPosRelativeToRoot = {
                        left: originalPos.left - rootRect.left,
                        top: originalPos.top - rootRect.top,
                        width: originalPos.width,
                        height: originalPos.height
                    };
                    const overlayRelativeToRoot = {
                        left: currentRect.left - rootRect.left,
                        top: currentRect.top - rootRect.top,
                        width: currentRect.width,
                        height: currentRect.height
                    };
                    const animatingOverlay = document.createElement("div");
                    animatingOverlay.className = "enlarge-closing";
                    animatingOverlay.style.cssText = `position:absolute;left:${overlayRelativeToRoot.left}px;top:${overlayRelativeToRoot.top}px;width:${overlayRelativeToRoot.width}px;height:${overlayRelativeToRoot.height}px;z-index:9999;border-radius: var(--enlarge-radius, 32px);overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.35);transition:all ${enlargeTransitionMs}ms ease-out;pointer-events:none;margin:0;transform:none;`;
                    const originalImg = overlay.querySelector("img");
                    if (originalImg) {
                        const img = originalImg.cloneNode();
                        img.style.cssText = "width:100%;height:100%;object-fit:cover;";
                        animatingOverlay.appendChild(img);
                    }
                    overlay.remove();
                    rootRef.current.appendChild(animatingOverlay);
                    void animatingOverlay.getBoundingClientRect();
                    requestAnimationFrame({
                        "DomeGallery.useEffect.close": ()=>{
                            animatingOverlay.style.left = originalPosRelativeToRoot.left + "px";
                            animatingOverlay.style.top = originalPosRelativeToRoot.top + "px";
                            animatingOverlay.style.width = originalPosRelativeToRoot.width + "px";
                            animatingOverlay.style.height = originalPosRelativeToRoot.height + "px";
                            animatingOverlay.style.opacity = "0";
                        }
                    }["DomeGallery.useEffect.close"]);
                    const cleanup = {
                        "DomeGallery.useEffect.close.cleanup": ()=>{
                            animatingOverlay.remove();
                            originalTilePositionRef.current = null;
                            if (refDiv) refDiv.remove();
                            parent.style.transition = "none";
                            el.style.transition = "none";
                            parent.style.setProperty("--rot-y-delta", "0deg");
                            parent.style.setProperty("--rot-x-delta", "0deg");
                            requestAnimationFrame({
                                "DomeGallery.useEffect.close.cleanup": ()=>{
                                    el.style.visibility = "";
                                    el.style.opacity = "0";
                                    el.style.zIndex = "0";
                                    focusedElRef.current = null;
                                    rootRef.current?.removeAttribute("data-enlarging");
                                    requestAnimationFrame({
                                        "DomeGallery.useEffect.close.cleanup": ()=>{
                                            parent.style.transition = "";
                                            el.style.transition = "opacity 300ms ease-out";
                                            requestAnimationFrame({
                                                "DomeGallery.useEffect.close.cleanup": ()=>{
                                                    el.style.opacity = "1";
                                                    setTimeout({
                                                        "DomeGallery.useEffect.close.cleanup": ()=>{
                                                            el.style.transition = "";
                                                            el.style.opacity = "";
                                                            openingRef.current = false;
                                                            if (!draggingRef.current && rootRef.current?.getAttribute("data-enlarging") !== "true") document.body.classList.remove("dg-scroll-lock");
                                                        }
                                                    }["DomeGallery.useEffect.close.cleanup"], 300);
                                                }
                                            }["DomeGallery.useEffect.close.cleanup"]);
                                        }
                                    }["DomeGallery.useEffect.close.cleanup"]);
                                }
                            }["DomeGallery.useEffect.close.cleanup"]);
                        }
                    }["DomeGallery.useEffect.close.cleanup"];
                    animatingOverlay.addEventListener("transitionend", cleanup, {
                        once: true
                    });
                }
            }["DomeGallery.useEffect.close"];
            scrim.addEventListener("click", close);
            const onKey = {
                "DomeGallery.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") close();
                }
            }["DomeGallery.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            return ({
                "DomeGallery.useEffect": ()=>{
                    scrim.removeEventListener("click", close);
                    window.removeEventListener("keydown", onKey);
                }
            })["DomeGallery.useEffect"];
        }
    }["DomeGallery.useEffect"], [
        enlargeTransitionMs,
        unlockScroll
    ]);
    const openItemFromElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DomeGallery.useCallback[openItemFromElement]": (el)=>{
            if (openingRef.current) return;
            openingRef.current = true;
            openStartedAtRef.current = performance.now();
            lockScroll();
            const parent = el.parentElement;
            focusedElRef.current = el;
            el.setAttribute("data-focused", "true");
            const offsetX = getDataNumber(parent, "offsetX", 0);
            const offsetY = getDataNumber(parent, "offsetY", 0);
            const sizeX = getDataNumber(parent, "sizeX", 2);
            const sizeY = getDataNumber(parent, "sizeY", 2);
            const parentRot = computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments);
            const parentY = normalizeAngle(parentRot.rotateY);
            const globalY = normalizeAngle(rotationRef.current.y);
            let rotY = -(parentY + globalY) % 360;
            if (rotY < -180) rotY += 360;
            const rotX = -parentRot.rotateX - rotationRef.current.x;
            parent.style.setProperty("--rot-y-delta", `${rotY}deg`);
            parent.style.setProperty("--rot-x-delta", `${rotX}deg`);
            const refDiv = document.createElement("div");
            refDiv.className = "item__image item__image--reference";
            refDiv.style.opacity = "0";
            refDiv.style.transform = `rotateX(${-parentRot.rotateX}deg) rotateY(${-parentRot.rotateY}deg)`;
            parent.appendChild(refDiv);
            void refDiv.offsetHeight;
            const tileR = refDiv.getBoundingClientRect();
            const mainR = mainRef.current?.getBoundingClientRect();
            const frameR = frameRef.current?.getBoundingClientRect();
            if (!mainR || !frameR || tileR.width <= 0 || tileR.height <= 0) {
                openingRef.current = false;
                focusedElRef.current = null;
                parent.removeChild(refDiv);
                unlockScroll();
                return;
            }
            originalTilePositionRef.current = {
                left: tileR.left,
                top: tileR.top,
                width: tileR.width,
                height: tileR.height
            };
            el.style.visibility = "hidden";
            el.style.zIndex = "0";
            const overlay = document.createElement("div");
            overlay.className = "enlarge";
            overlay.style.position = "absolute";
            overlay.style.left = frameR.left - mainR.left + "px";
            overlay.style.top = frameR.top - mainR.top + "px";
            overlay.style.width = frameR.width + "px";
            overlay.style.height = frameR.height + "px";
            overlay.style.opacity = "0";
            overlay.style.zIndex = "30";
            overlay.style.willChange = "transform, opacity";
            overlay.style.transformOrigin = "top left";
            overlay.style.transition = `transform ${enlargeTransitionMs}ms ease, opacity ${enlargeTransitionMs}ms ease`;
            const rawSrc = parent.dataset.src || el.querySelector("img")?.src || "";
            const img = document.createElement("img");
            img.src = rawSrc;
            overlay.appendChild(img);
            viewerRef.current.appendChild(overlay);
            const tx0 = tileR.left - frameR.left;
            const ty0 = tileR.top - frameR.top;
            const sx0 = tileR.width / frameR.width;
            const sy0 = tileR.height / frameR.height;
            const validSx0 = isFinite(sx0) && sx0 > 0 ? sx0 : 1;
            const validSy0 = isFinite(sy0) && sy0 > 0 ? sy0 : 1;
            overlay.style.transform = `translate(${tx0}px, ${ty0}px) scale(${validSx0}, ${validSy0})`;
            setTimeout({
                "DomeGallery.useCallback[openItemFromElement]": ()=>{
                    if (!overlay.parentElement) return;
                    overlay.style.opacity = "1";
                    overlay.style.transform = "translate(0px, 0px) scale(1, 1)";
                    rootRef.current?.setAttribute("data-enlarging", "true");
                }
            }["DomeGallery.useCallback[openItemFromElement]"], 16);
            const wantsResize = openedImageWidth || openedImageHeight;
            if (wantsResize) {
                const onFirstEnd = {
                    "DomeGallery.useCallback[openItemFromElement].onFirstEnd": (ev)=>{
                        if (ev.propertyName !== "transform") return;
                        overlay.removeEventListener("transitionend", onFirstEnd);
                        const prevTransition = overlay.style.transition;
                        overlay.style.transition = "none";
                        const tempWidth = openedImageWidth || `${frameR.width}px`;
                        const tempHeight = openedImageHeight || `${frameR.height}px`;
                        overlay.style.width = tempWidth;
                        overlay.style.height = tempHeight;
                        const newRect = overlay.getBoundingClientRect();
                        overlay.style.width = frameR.width + "px";
                        overlay.style.height = frameR.height + "px";
                        void overlay.offsetWidth;
                        overlay.style.transition = `left ${enlargeTransitionMs}ms ease, top ${enlargeTransitionMs}ms ease, width ${enlargeTransitionMs}ms ease, height ${enlargeTransitionMs}ms ease`;
                        const centeredLeft = frameR.left - mainR.left + (frameR.width - newRect.width) / 2;
                        const centeredTop = frameR.top - mainR.top + (frameR.height - newRect.height) / 2;
                        requestAnimationFrame({
                            "DomeGallery.useCallback[openItemFromElement].onFirstEnd": ()=>{
                                overlay.style.left = `${centeredLeft}px`;
                                overlay.style.top = `${centeredTop}px`;
                                overlay.style.width = tempWidth;
                                overlay.style.height = tempHeight;
                            }
                        }["DomeGallery.useCallback[openItemFromElement].onFirstEnd"]);
                        const cleanupSecond = {
                            "DomeGallery.useCallback[openItemFromElement].onFirstEnd.cleanupSecond": ()=>{
                                overlay.removeEventListener("transitionend", cleanupSecond);
                                overlay.style.transition = prevTransition;
                            }
                        }["DomeGallery.useCallback[openItemFromElement].onFirstEnd.cleanupSecond"];
                        overlay.addEventListener("transitionend", cleanupSecond, {
                            once: true
                        });
                    }
                }["DomeGallery.useCallback[openItemFromElement].onFirstEnd"];
                overlay.addEventListener("transitionend", onFirstEnd);
            }
        }
    }["DomeGallery.useCallback[openItemFromElement]"], [
        enlargeTransitionMs,
        lockScroll,
        openedImageHeight,
        openedImageWidth,
        segments,
        unlockScroll
    ]);
    // @ts-ignore
    const onTileClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DomeGallery.useCallback[onTileClick]": // @ts-ignore
        (e)=>{
            if (draggingRef.current) return;
            if (movedRef.current) return;
            if (performance.now() - lastDragEndAt.current < 80) return;
            if (openingRef.current) return;
            // @ts-ignore
            openItemFromElement(e.currentTarget);
        }
    }["DomeGallery.useCallback[onTileClick]"], [
        openItemFromElement
    ]);
    // @ts-ignore
    const onTilePointerUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DomeGallery.useCallback[onTilePointerUp]": // @ts-ignore
        (e)=>{
            if (e.pointerType !== "touch") return;
            if (draggingRef.current) return;
            if (movedRef.current) return;
            if (performance.now() - lastDragEndAt.current < 80) return;
            if (openingRef.current) return;
            // @ts-ignore
            openItemFromElement(e.currentTarget);
        }
    }["DomeGallery.useCallback[onTilePointerUp]"], [
        openItemFromElement
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DomeGallery.useEffect": ()=>{
            return ({
                "DomeGallery.useEffect": ()=>{
                    document.body.classList.remove("dg-scroll-lock");
                }
            })["DomeGallery.useEffect"];
        }
    }["DomeGallery.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: "sphere-root",
        style: {
            // @ts-ignore
            "--segments-x": segments,
            "--segments-y": segments,
            "--overlay-blur-color": overlayBlurColor,
            "--tile-radius": imageBorderRadius,
            "--enlarge-radius": openedImageBorderRadius,
            "--image-filter": grayscale ? "grayscale(1)" : "none"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            ref: mainRef,
            className: "sphere-main",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "stage",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: sphereRef,
                        className: "sphere",
                        children: items.map((it, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "item",
                                // @ts-ignore
                                "data-src": it.src,
                                // @ts-ignore
                                "data-offset-x": it.x,
                                // @ts-ignore
                                "data-offset-y": it.y,
                                // @ts-ignore
                                "data-size-x": it.sizeX,
                                // @ts-ignore
                                "data-size-y": it.sizeY,
                                style: {
                                    // @ts-ignore
                                    "--offset-x": it.x,
                                    "--offset-y": it.y,
                                    "--item-size-x": it.sizeX,
                                    "--item-size-y": it.sizeY
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "item__image",
                                    role: "button",
                                    tabIndex: 0,
                                    // @ts-ignore
                                    "aria-label": it.alt || "Open image",
                                    onClick: onTileClick,
                                    onPointerUp: onTilePointerUp,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: it.src,
                                        draggable: false,
                                        alt: it.alt
                                    }, void 0, false, {
                                        fileName: "[project]/components/dome-gallery.tsx",
                                        lineNumber: 763,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/dome-gallery.tsx",
                                    lineNumber: 752,
                                    columnNumber: 33
                                }, this)
                            }, `${it.x},${it.y},${i}`, false, {
                                fileName: "[project]/components/dome-gallery.tsx",
                                lineNumber: 730,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/dome-gallery.tsx",
                        lineNumber: 728,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/dome-gallery.tsx",
                    lineNumber: 727,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overlay"
                }, void 0, false, {
                    fileName: "[project]/components/dome-gallery.tsx",
                    lineNumber: 770,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overlay overlay--blur"
                }, void 0, false, {
                    fileName: "[project]/components/dome-gallery.tsx",
                    lineNumber: 771,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "edge-fade edge-fade--top"
                }, void 0, false, {
                    fileName: "[project]/components/dome-gallery.tsx",
                    lineNumber: 772,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "edge-fade edge-fade--bottom"
                }, void 0, false, {
                    fileName: "[project]/components/dome-gallery.tsx",
                    lineNumber: 773,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "viewer",
                    ref: viewerRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: scrimRef,
                            className: "scrim"
                        }, void 0, false, {
                            fileName: "[project]/components/dome-gallery.tsx",
                            lineNumber: 776,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: frameRef,
                            className: "frame"
                        }, void 0, false, {
                            fileName: "[project]/components/dome-gallery.tsx",
                            lineNumber: 777,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dome-gallery.tsx",
                    lineNumber: 775,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dome-gallery.tsx",
            lineNumber: 726,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dome-gallery.tsx",
        lineNumber: 713,
        columnNumber: 9
    }, this);
}
_s(DomeGallery, "LhckunETZsw9WJeq1lv5B1p2AJ8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$react$2f$dist$2f$use$2d$gesture$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useGesture"]
    ];
});
_c = DomeGallery;
var _c;
__turbopack_context__.k.register(_c, "DomeGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/image-scroller.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImageScroller
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dome$2d$gallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dome-gallery.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
function ImageScroller() {
    const images = [
        {
            id: 1,
            alt: "Moment 1",
            src: "/mom1.jpeg"
        },
        {
            id: 2,
            alt: "Moment 2",
            src: "/mom2.jpeg"
        },
        {
            id: 3,
            alt: "Moment 3",
            src: "/mom3.jpeg"
        },
        {
            id: 4,
            alt: "Moment 4",
            src: "/mom4.jpeg"
        },
        {
            id: 5,
            alt: "Moment 5",
            src: "/mom5.jpeg"
        },
        {
            id: 6,
            alt: "Moment 6",
            src: "/mom6.jpeg"
        },
        {
            id: 7,
            alt: "Moment 7",
            src: "/mom7.jpeg"
        },
        {
            id: 8,
            alt: "Moment 8",
            src: "/mom8.jpeg"
        },
        // Duplicate to fill space if needed, though DomeGallery handles it
        {
            id: 9,
            alt: "Moment 9",
            src: "/mom1.jpeg"
        },
        {
            id: 10,
            alt: "Moment 10",
            src: "/mom2.jpeg"
        },
        {
            id: 11,
            alt: "Moment 11",
            src: "/mom3.jpeg"
        },
        {
            id: 12,
            alt: "Moment 12",
            src: "/mom4.jpeg"
        },
        {
            id: 13,
            alt: "Moment 13",
            src: "/mom5.jpeg"
        },
        {
            id: 14,
            alt: "Moment 14",
            src: "/mom6.jpeg"
        },
        {
            id: 15,
            alt: "Moment 15",
            src: "/mom7.jpeg"
        }
    ];
    const galleryImages = images.map((img)=>({
            src: img.src,
            alt: img.alt
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "past-events",
        className: "w-full h-screen relative bg-black overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/mom1.jpeg",
                    alt: "background blur",
                    fill: true,
                    unoptimized: true,
                    className: "object-cover blur-3xl"
                }, void 0, false, {
                    fileName: "[project]/components/image-scroller.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/image-scroller.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dome$2d$gallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    images: galleryImages,
                    overlayBlurColor: "#000000",
                    fit: 0.65,
                    grayscale: false
                }, void 0, false, {
                    fileName: "[project]/components/image-scroller.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/image-scroller.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-8 left-0 right-0 z-20 text-center pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bold text-white drop-shadow-md",
                    children: "Moments From Past Events"
                }, void 0, false, {
                    fileName: "[project]/components/image-scroller.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/image-scroller.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/image-scroller.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = ImageScroller;
var _c;
__turbopack_context__.k.register(_c, "ImageScroller");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/registration-rules.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegistrationRules
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
function RegistrationRules() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "registration",
        className: "w-full py-20 bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center items-center md:items-start text-center md:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold mb-6 text-[#000000]",
                                children: "Volunteer Registration"
                            }, void 0, false, {
                                fileName: "[project]/components/registration-rules.tsx",
                                lineNumber: 12,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-8",
                                children: "Join our team and help make this charity event a success. Register now to volunteer and support a great cause!"
                            }, void 0, false, {
                                fileName: "[project]/components/registration-rules.tsx",
                                lineNumber: 13,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "https://forms.gle/VQXqkTkcCgwJmEB19",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-block bg-[#88C642] hover:bg-[#7ab535] text-black font-bold py-3 px-8 rounded-lg w-fit transition-colors",
                                children: "Register as Volunteer"
                            }, void 0, false, {
                                fileName: "[project]/components/registration-rules.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/registration-rules.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center items-center md:items-start text-center md:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold mb-6 text-[#000000]",
                                children: "Tournament Rules"
                            }, void 0, false, {
                                fileName: "[project]/components/registration-rules.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-8",
                                children: "Understand the rules and regulations that govern our tournament. Make sure to review them before the event."
                            }, void 0, false, {
                                fileName: "[project]/components/registration-rules.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/rules gfc.pdf",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-block bg-[#88C642] hover:bg-[#7ab535] text-black font-bold py-3 px-8 rounded-lg w-fit transition-colors",
                                children: "View Rulebook"
                            }, void 0, false, {
                                fileName: "[project]/components/registration-rules.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/registration-rules.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/registration-rules.tsx",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/registration-rules.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/registration-rules.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = RegistrationRules;
var _c;
__turbopack_context__.k.register(_c, "RegistrationRules");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dot-grid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// gsap.registerPlugin(InertiaPlugin);
const throttle = (func, limit)=>{
    let lastCall = 0;
    return function(...args) {
        const now = performance.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            // @ts-ignore
            func.apply(this, args);
        }
    };
};
function hexToRgb(hex) {
    const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!m) return {
        r: 0,
        g: 0,
        b: 0
    };
    return {
        r: parseInt(m[1], 16),
        g: parseInt(m[2], 16),
        b: parseInt(m[3], 16)
    };
}
const DotGrid = ({ dotSize = 16, gap = 32, baseColor = '#5227FF', activeColor = '#5227FF', proximity = 150, speedTrigger = 100, shockRadius = 250, shockStrength = 5, maxSpeed = 5000, resistance = 750, returnDuration = 1.5, className = '', style })=>{
    _s();
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dotsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const pointerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        speed: 0,
        lastTime: 0,
        lastX: 0,
        lastY: 0
    });
    const baseRgb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DotGrid.useMemo[baseRgb]": ()=>hexToRgb(baseColor)
    }["DotGrid.useMemo[baseRgb]"], [
        baseColor
    ]);
    const activeRgb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DotGrid.useMemo[activeRgb]": ()=>hexToRgb(activeColor)
    }["DotGrid.useMemo[activeRgb]"], [
        activeColor
    ]);
    const circlePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DotGrid.useMemo[circlePath]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Polyfill for Path2D if needed or check existence (most modern browsers have it)
            if (!window.Path2D) return null;
            const p = new window.Path2D();
            p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
            return p;
        }
    }["DotGrid.useMemo[circlePath]"], [
        dotSize
    ]);
    const buildGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DotGrid.useCallback[buildGrid]": ()=>{
            const wrap = wrapperRef.current;
            const canvas = canvasRef.current;
            if (!wrap || !canvas) return;
            const { width, height } = wrap.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            const ctx = canvas.getContext('2d');
            if (ctx) ctx.scale(dpr, dpr);
            const cols = Math.floor((width + gap) / (dotSize + gap));
            const rows = Math.floor((height + gap) / (dotSize + gap));
            const cell = dotSize + gap;
            const gridW = cell * cols - gap;
            const gridH = cell * rows - gap;
            const extraX = width - gridW;
            const extraY = height - gridH;
            const startX = extraX / 2 + dotSize / 2;
            const startY = extraY / 2 + dotSize / 2;
            const dots = [];
            for(let y = 0; y < rows; y++){
                for(let x = 0; x < cols; x++){
                    const cx = startX + x * cell;
                    const cy = startY + y * cell;
                    dots.push({
                        cx,
                        cy,
                        xOffset: 0,
                        yOffset: 0,
                        _inertiaApplied: false
                    });
                }
            }
            dotsRef.current = dots;
        }
    }["DotGrid.useCallback[buildGrid]"], [
        dotSize,
        gap
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DotGrid.useEffect": ()=>{
            if (!circlePath) return;
            let rafId;
            const proxSq = proximity * proximity;
            const draw = {
                "DotGrid.useEffect.draw": ()=>{
                    const canvas = canvasRef.current;
                    if (!canvas) return;
                    const ctx = canvas.getContext('2d');
                    if (!ctx) return;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    const { x: px, y: py } = pointerRef.current;
                    for (const dot of dotsRef.current){
                        const ox = dot.cx + dot.xOffset;
                        const oy = dot.cy + dot.yOffset;
                        const dx = dot.cx - px;
                        const dy = dot.cy - py;
                        const dsq = dx * dx + dy * dy;
                        let style = baseColor;
                        if (dsq <= proxSq) {
                            const dist = Math.sqrt(dsq);
                            const t = 1 - dist / proximity;
                            const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
                            const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
                            const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
                            style = `rgb(${r},${g},${b})`;
                        }
                        ctx.save();
                        ctx.translate(ox, oy);
                        ctx.fillStyle = style;
                        ctx.fill(circlePath);
                        ctx.restore();
                    }
                    rafId = requestAnimationFrame(draw);
                }
            }["DotGrid.useEffect.draw"];
            draw();
            return ({
                "DotGrid.useEffect": ()=>cancelAnimationFrame(rafId)
            })["DotGrid.useEffect"];
        }
    }["DotGrid.useEffect"], [
        proximity,
        baseColor,
        activeRgb,
        baseRgb,
        circlePath
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DotGrid.useEffect": ()=>{
            buildGrid();
            let ro = null;
            if ('ResizeObserver' in window) {
                ro = new ResizeObserver(buildGrid);
                wrapperRef.current && ro.observe(wrapperRef.current);
            } else {
                // @ts-ignore
                window.addEventListener('resize', buildGrid);
            }
            return ({
                "DotGrid.useEffect": ()=>{
                    if (ro) ro.disconnect();
                    else window.removeEventListener('resize', buildGrid);
                }
            })["DotGrid.useEffect"];
        }
    }["DotGrid.useEffect"], [
        buildGrid
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DotGrid.useEffect": ()=>{
            const onMove = {
                "DotGrid.useEffect.onMove": (e)=>{
                    const now = performance.now();
                    const pr = pointerRef.current;
                    const dt = pr.lastTime ? now - pr.lastTime : 16;
                    const dx = e.clientX - pr.lastX;
                    const dy = e.clientY - pr.lastY;
                    let vx = dx / dt * 1000;
                    let vy = dy / dt * 1000;
                    let speed = Math.hypot(vx, vy);
                    if (speed > maxSpeed) {
                        const scale = maxSpeed / speed;
                        vx *= scale;
                        vy *= scale;
                        speed = maxSpeed;
                    }
                    pr.lastTime = now;
                    pr.lastX = e.clientX;
                    pr.lastY = e.clientY;
                    pr.vx = vx;
                    pr.vy = vy;
                    pr.speed = speed;
                    const rect = canvasRef.current?.getBoundingClientRect();
                    if (!rect) return;
                    pr.x = e.clientX - rect.left;
                    pr.y = e.clientY - rect.top;
                    for (const dot of dotsRef.current){
                        const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
                        /* 
                // Inertia logic disabled due to missing plugin
                if (speed > speedTrigger && dist < proximity && !dot._inertiaApplied) {
                  dot._inertiaApplied = true;
                  gsap.killTweensOf(dot);
                  const pushX = dot.cx - pr.x + vx * 0.005;
                  const pushY = dot.cy - pr.y + vy * 0.005;
                  gsap.to(dot, {
                    inertia: { xOffset: pushX, yOffset: pushY, resistance },
                    onComplete: () => {
                      gsap.to(dot, {
                        xOffset: 0,
                        yOffset: 0,
                        duration: returnDuration,
                        ease: 'elastic.out(1,0.75)'
                      });
                      dot._inertiaApplied = false;
                    }
                  });
                }
                */ // Simple fallback interaction: Displace slightly
                        if (dist < proximity) {
                            const pushX = (dot.cx - pr.x) * 0.1;
                            const pushY = (dot.cy - pr.y) * 0.1;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dot, {
                                xOffset: pushX,
                                yOffset: pushY,
                                duration: 0.2,
                                overwrite: true
                            });
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dot, {
                                xOffset: 0,
                                yOffset: 0,
                                duration: returnDuration,
                                ease: 'elastic.out(1,0.75)',
                                overwrite: "auto"
                            });
                        }
                    }
                }
            }["DotGrid.useEffect.onMove"];
            const onClick = {
                "DotGrid.useEffect.onClick": (e)=>{
                    const rect = canvasRef.current?.getBoundingClientRect();
                    if (!rect) return;
                    const cx = e.clientX - rect.left;
                    const cy = e.clientY - rect.top;
                    /*
            // Shockwave logic disabled due to inertia plugin
            for (const dot of dotsRef.current) {
              const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
              if (dist < shockRadius && !dot._inertiaApplied) {
                dot._inertiaApplied = true;
                gsap.killTweensOf(dot);
                const falloff = Math.max(0, 1 - dist / shockRadius);
                const pushX = (dot.cx - cx) * shockStrength * falloff;
                const pushY = (dot.cy - cy) * shockStrength * falloff;
                gsap.to(dot, {
                  inertia: { xOffset: pushX, yOffset: pushY, resistance },
                  onComplete: () => {
                    gsap.to(dot, {
                      xOffset: 0,
                      yOffset: 0,
                      duration: returnDuration,
                      ease: 'elastic.out(1,0.75)'
                    });
                    dot._inertiaApplied = false;
                  }
                });
              }
            }
            */ // Fallback click effect
                    for (const dot of dotsRef.current){
                        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
                        if (dist < shockRadius) {
                            const falloff = Math.max(0, 1 - dist / shockRadius);
                            const pushX = (dot.cx - cx) * 0.5 * falloff;
                            const pushY = (dot.cy - cy) * 0.5 * falloff;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dot, {
                                xOffset: pushX,
                                yOffset: pushY,
                                duration: 0.2,
                                yoyo: true,
                                repeat: 1
                            });
                        }
                    }
                }
            }["DotGrid.useEffect.onClick"];
            const throttledMove = throttle(onMove, 50);
            // @ts-ignore
            window.addEventListener('mousemove', throttledMove, {
                passive: true
            });
            window.addEventListener('click', onClick);
            return ({
                "DotGrid.useEffect": ()=>{
                    // @ts-ignore
                    window.removeEventListener('mousemove', throttledMove);
                    window.removeEventListener('click', onClick);
                }
            })["DotGrid.useEffect"];
        }
    }["DotGrid.useEffect"], [
        maxSpeed,
        speedTrigger,
        proximity,
        resistance,
        returnDuration,
        shockRadius,
        shockStrength
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `dot-grid ${className}`,
        style: style,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: wrapperRef,
            className: "dot-grid__wrap",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "dot-grid__canvas"
            }, void 0, false, {
                fileName: "[project]/components/dot-grid.tsx",
                lineNumber: 315,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/dot-grid.tsx",
            lineNumber: 314,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/dot-grid.tsx",
        lineNumber: 313,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DotGrid, "mFjE+zUQAMVe1ll5A3lc0VjRvtk=");
_c = DotGrid;
const __TURBOPACK__default__export__ = DotGrid;
var _c;
__turbopack_context__.k.register(_c, "DotGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/logo-loop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoLoop",
    ()=>LogoLoop,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
const ANIMATION_CONFIG = {
    SMOOTH_TAU: 0.25,
    MIN_COPIES: 2,
    COPY_HEADROOM: 2
};
const toCssLength = (value)=>typeof value === 'number' ? `${value}px` : value ?? undefined;
const useResizeObserver = (callback, elements, dependencies)=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useResizeObserver.useEffect": ()=>{
            if (!window.ResizeObserver) {
                const handleResize = {
                    "useResizeObserver.useEffect.handleResize": ()=>callback()
                }["useResizeObserver.useEffect.handleResize"];
                window.addEventListener('resize', handleResize);
                callback();
                return ({
                    "useResizeObserver.useEffect": ()=>window.removeEventListener('resize', handleResize)
                })["useResizeObserver.useEffect"];
            }
            const observers = elements.map({
                "useResizeObserver.useEffect.observers": (ref)=>{
                    if (!ref.current) return null;
                    const observer = new ResizeObserver(callback);
                    observer.observe(ref.current);
                    return observer;
                }
            }["useResizeObserver.useEffect.observers"]);
            callback();
            return ({
                "useResizeObserver.useEffect": ()=>{
                    observers.forEach({
                        "useResizeObserver.useEffect": (observer)=>observer?.disconnect()
                    }["useResizeObserver.useEffect"]);
                }
            })["useResizeObserver.useEffect"];
        }
    }["useResizeObserver.useEffect"], [
        callback,
        ...elements,
        ...dependencies
    ]);
};
_s(useResizeObserver, "OD7bBpZva5O2jO+Puf00hKivP7c=");
// @ts-ignore
const useImageLoader = (seqRef, onLoad, dependencies)=>{
    _s1();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useImageLoader.useEffect": ()=>{
            const images = seqRef.current?.querySelectorAll('img') ?? [];
            if (images.length === 0) {
                onLoad();
                return;
            }
            let remainingImages = images.length;
            const handleImageLoad = {
                "useImageLoader.useEffect.handleImageLoad": ()=>{
                    remainingImages -= 1;
                    if (remainingImages === 0) onLoad();
                }
            }["useImageLoader.useEffect.handleImageLoad"];
            images.forEach({
                "useImageLoader.useEffect": (img)=>{
                    const htmlImg = img;
                    if (htmlImg.complete) {
                        handleImageLoad();
                    } else {
                        htmlImg.addEventListener('load', handleImageLoad, {
                            once: true
                        });
                        htmlImg.addEventListener('error', handleImageLoad, {
                            once: true
                        });
                    }
                }
            }["useImageLoader.useEffect"]);
            return ({
                "useImageLoader.useEffect": ()=>{
                    images.forEach({
                        "useImageLoader.useEffect": (img)=>{
                            img.removeEventListener('load', handleImageLoad);
                            img.removeEventListener('error', handleImageLoad);
                        }
                    }["useImageLoader.useEffect"]);
                }
            })["useImageLoader.useEffect"];
        }
    }["useImageLoader.useEffect"], [
        onLoad,
        seqRef,
        ...dependencies
    ]);
};
_s1(useImageLoader, "OD7bBpZva5O2jO+Puf00hKivP7c=");
// @ts-ignore
const useAnimationLoop = (trackRef, targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical)=>{
    _s2();
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastTimestampRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const offsetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const velocityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAnimationLoop.useEffect": ()=>{
            const track = trackRef.current;
            if (!track) return;
            const seqSize = isVertical ? seqHeight : seqWidth;
            if (seqSize > 0) {
                offsetRef.current = (offsetRef.current % seqSize + seqSize) % seqSize;
                const transformValue = isVertical ? `translate3d(0, ${-offsetRef.current}px, 0)` : `translate3d(${-offsetRef.current}px, 0, 0)`;
                track.style.transform = transformValue;
            }
            const animate = {
                "useAnimationLoop.useEffect.animate": (timestamp)=>{
                    if (lastTimestampRef.current === null) {
                        lastTimestampRef.current = timestamp;
                    }
                    const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
                    lastTimestampRef.current = timestamp;
                    const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;
                    const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
                    velocityRef.current += (target - velocityRef.current) * easingFactor;
                    if (seqSize > 0) {
                        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
                        nextOffset = (nextOffset % seqSize + seqSize) % seqSize;
                        offsetRef.current = nextOffset;
                        const transformValue = isVertical ? `translate3d(0, ${-offsetRef.current}px, 0)` : `translate3d(${-offsetRef.current}px, 0, 0)`;
                        track.style.transform = transformValue;
                    }
                    rafRef.current = requestAnimationFrame(animate);
                }
            }["useAnimationLoop.useEffect.animate"];
            rafRef.current = requestAnimationFrame(animate);
            return ({
                "useAnimationLoop.useEffect": ()=>{
                    if (rafRef.current !== null) {
                        cancelAnimationFrame(rafRef.current);
                        rafRef.current = null;
                    }
                    lastTimestampRef.current = null;
                }
            })["useAnimationLoop.useEffect"];
        }
    }["useAnimationLoop.useEffect"], [
        targetVelocity,
        seqWidth,
        seqHeight,
        isHovered,
        hoverSpeed,
        isVertical,
        trackRef
    ]);
};
_s2(useAnimationLoop, "CHkB9QIrZTEfgjfB6nwY5WHuHxk=");
const LogoLoop = /*#__PURE__*/ _s3((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s3(({ logos, speed = 120, direction = 'left', width = '100%', logoHeight = 28, gap = 32, pauseOnHover, hoverSpeed, fadeOut = false, fadeOutColor, scaleOnHover = false, renderItem, ariaLabel = 'Partner logos', className, style })=>{
    _s3();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const seqRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [seqWidth, setSeqWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [seqHeight, setSeqHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [copyCount, setCopyCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const effectiveHoverSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LogoLoop.useMemo[effectiveHoverSpeed]": ()=>{
            if (hoverSpeed !== undefined) return hoverSpeed;
            if (pauseOnHover === true) return 0;
            if (pauseOnHover === false) return undefined;
            return 0;
        }
    }["LogoLoop.useMemo[effectiveHoverSpeed]"], [
        hoverSpeed,
        pauseOnHover
    ]);
    const isVertical = direction === 'up' || direction === 'down';
    const targetVelocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LogoLoop.useMemo[targetVelocity]": ()=>{
            const magnitude = Math.abs(speed);
            let directionMultiplier;
            if (isVertical) {
                directionMultiplier = direction === 'up' ? 1 : -1;
            } else {
                directionMultiplier = direction === 'left' ? 1 : -1;
            }
            const speedMultiplier = speed < 0 ? -1 : 1;
            return magnitude * directionMultiplier * speedMultiplier;
        }
    }["LogoLoop.useMemo[targetVelocity]"], [
        speed,
        direction,
        isVertical
    ]);
    const updateDimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LogoLoop.useCallback[updateDimensions]": ()=>{
            const containerWidth = containerRef.current?.clientWidth ?? 0;
            const sequenceRect = seqRef.current?.getBoundingClientRect?.();
            const sequenceWidth = sequenceRect?.width ?? 0;
            const sequenceHeight = sequenceRect?.height ?? 0;
            // @ts-ignore
            if (isVertical) {
                const parentHeight = containerRef.current?.parentElement?.clientHeight ?? 0;
                if (containerRef.current && parentHeight > 0) {
                    const targetHeight = Math.ceil(parentHeight);
                    if (containerRef.current.style.height !== `${targetHeight}px`) containerRef.current.style.height = `${targetHeight}px`;
                }
                if (sequenceHeight > 0) {
                    setSeqHeight(Math.ceil(sequenceHeight));
                    const viewport = containerRef.current?.clientHeight ?? parentHeight ?? sequenceHeight;
                    const copiesNeeded = Math.ceil(viewport / sequenceHeight) + ANIMATION_CONFIG.COPY_HEADROOM;
                    setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
                }
            } else if (sequenceWidth > 0) {
                setSeqWidth(Math.ceil(sequenceWidth));
                const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
                setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
            }
        }
    }["LogoLoop.useCallback[updateDimensions]"], [
        isVertical
    ]);
    // @ts-ignore
    useResizeObserver(updateDimensions, [
        containerRef,
        seqRef
    ], [
        logos,
        gap,
        logoHeight,
        isVertical
    ]);
    // @ts-ignore
    useImageLoader(seqRef, updateDimensions, [
        logos,
        gap,
        logoHeight,
        isVertical
    ]);
    useAnimationLoop(trackRef, targetVelocity, seqWidth, seqHeight, isHovered, effectiveHoverSpeed, isVertical);
    const cssVariables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LogoLoop.useMemo[cssVariables]": ()=>({
                '--logoloop-gap': `${gap}px`,
                '--logoloop-logoHeight': `${logoHeight}px`,
                ...fadeOutColor && {
                    '--logoloop-fadeColor': fadeOutColor
                }
            })
    }["LogoLoop.useMemo[cssVariables]"], [
        gap,
        logoHeight,
        fadeOutColor
    ]);
    const rootClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LogoLoop.useMemo[rootClassName]": ()=>[
                'logoloop',
                isVertical ? 'logoloop--vertical' : 'logoloop--horizontal',
                fadeOut && 'logoloop--fade',
                scaleOnHover && 'logoloop--scale-hover',
                className
            ].filter(Boolean).join(' ')
    }["LogoLoop.useMemo[rootClassName]"], [
        isVertical,
        fadeOut,
        scaleOnHover,
        className
    ]);
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LogoLoop.useCallback[handleMouseEnter]": ()=>{
            if (effectiveHoverSpeed !== undefined) setIsHovered(true);
        }
    }["LogoLoop.useCallback[handleMouseEnter]"], [
        effectiveHoverSpeed
    ]);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LogoLoop.useCallback[handleMouseLeave]": ()=>{
            if (effectiveHoverSpeed !== undefined) setIsHovered(false);
        }
    }["LogoLoop.useCallback[handleMouseLeave]"], [
        effectiveHoverSpeed
    ]);
    const renderLogoItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LogoLoop.useCallback[renderLogoItem]": (item, key)=>{
            if (renderItem) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "logoloop__item",
                    role: "listitem",
                    children: renderItem(item, key)
                }, key, false, {
                    fileName: "[project]/components/logo-loop.tsx",
                    lineNumber: 256,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0));
            }
            const isNodeItem = 'node' in item;
            const content = isNodeItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "logoloop__node",
                "aria-hidden": !!item.href && !item.ariaLabel,
                children: item.node
            }, void 0, false, {
                fileName: "[project]/components/logo-loop.tsx",
                lineNumber: 263,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: item.src,
                // @ts-ignore
                srcSet: item.srcSet,
                // @ts-ignore
                sizes: item.sizes,
                width: item.width,
                height: item.height,
                alt: item.alt ?? '',
                title: item.title,
                loading: "lazy",
                decoding: "async",
                draggable: false
            }, void 0, false, {
                fileName: "[project]/components/logo-loop.tsx",
                lineNumber: 267,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0));
            const itemAriaLabel = isNodeItem ? item.ariaLabel ?? item.title : item.alt ?? item.title;
            const itemContent = item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "logoloop__link",
                href: item.href,
                "aria-label": itemAriaLabel || 'logo link',
                target: "_blank",
                rel: "noreferrer noopener",
                children: content
            }, void 0, false, {
                fileName: "[project]/components/logo-loop.tsx",
                lineNumber: 284,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)) : content;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "logoloop__item",
                role: "listitem",
                children: itemContent
            }, key, false, {
                fileName: "[project]/components/logo-loop.tsx",
                lineNumber: 297,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0));
        }
    }["LogoLoop.useCallback[renderLogoItem]"], [
        renderItem
    ]);
    const logoLists = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LogoLoop.useMemo[logoLists]": ()=>Array.from({
                length: copyCount
            }, {
                "LogoLoop.useMemo[logoLists]": (_, copyIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "logoloop__list",
                        role: "list",
                        "aria-hidden": copyIndex > 0,
                        ref: copyIndex === 0 ? seqRef : undefined,
                        children: logos.map({
                            "LogoLoop.useMemo[logoLists]": (item, itemIndex)=>renderLogoItem(item, `${copyIndex}-${itemIndex}`)
                        }["LogoLoop.useMemo[logoLists]"])
                    }, `copy-${copyIndex}`, false, {
                        fileName: "[project]/components/logo-loop.tsx",
                        lineNumber: 308,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
            }["LogoLoop.useMemo[logoLists]"])
    }["LogoLoop.useMemo[logoLists]"], [
        copyCount,
        logos,
        renderLogoItem
    ]);
    const containerStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LogoLoop.useMemo[containerStyle]": ()=>({
                width: isVertical ? toCssLength(width) === '100%' ? undefined : toCssLength(width) : toCssLength(width) ?? '100%',
                ...cssVariables,
                ...style
            })
    }["LogoLoop.useMemo[containerStyle]"], [
        width,
        cssVariables,
        style,
        isVertical
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: rootClassName,
        style: containerStyle,
        role: "region",
        "aria-label": ariaLabel,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "logoloop__track",
            ref: trackRef,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            children: logoLists
        }, void 0, false, {
            fileName: "[project]/components/logo-loop.tsx",
            lineNumber: 336,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/logo-loop.tsx",
        lineNumber: 335,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
}, "1cSCLDI9jga6+sjc7wQeKQCn0r0=", false, function() {
    return [
        useResizeObserver,
        useImageLoader,
        useAnimationLoop
    ];
})), "1cSCLDI9jga6+sjc7wQeKQCn0r0=", false, function() {
    return [
        useResizeObserver,
        useImageLoader,
        useAnimationLoop
    ];
});
_c1 = LogoLoop;
LogoLoop.displayName = 'LogoLoop';
const __TURBOPACK__default__export__ = LogoLoop;
var _c, _c1;
__turbopack_context__.k.register(_c, "LogoLoop$memo");
__turbopack_context__.k.register(_c1, "LogoLoop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sponsors-section.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/components/sponsors-section.tsx'\n\nUnterminated template");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/components/teams-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
function TeamsSection() {
    const teams = [
        {
            sNo: 1,
            name: "Ecell",
            captain: "Archit",
            logo: "/1.ECELL LOGO normal.png"
        },
        {
            sNo: 2,
            name: "IEEE RITB",
            captain: "Nishanth P Kashyap",
            logo: "/ieee gfc.jpg"
        },
        {
            sNo: 3,
            name: "ClutchRit",
            captain: "Pranav K S",
            logo: "/clutch rit gfc.jpg"
        },
        {
            sNo: 4,
            name: "Nakama",
            captain: "Yash Budhia",
            logo: "/nakama gfc.png"
        },
        {
            sNo: 5,
            name: "UXRIT",
            captain: "Shreekrishna T",
            logo: "/uxrit gfc.png"
        },
        {
            sNo: 6,
            name: "CodeRIT",
            captain: "Shamanth",
            logo: "/code rit gfc.png"
        },
        {
            sNo: 7,
            name: "Debsoc",
            captain: "Aarib Anwar",
            logo: "/debsoc gfc.jpg"
        },
        {
            sNo: 8,
            name: "Edhitha",
            captain: "Venugopal",
            logo: "/editha gfc.png"
        },
        {
            sNo: 9,
            name: "Stier Racing",
            captain: "Shamikh Mohammed",
            logo: "/stier gfc.jpeg"
        },
        {
            sNo: 10,
            name: "VOLANTE",
            captain: "Ninnad",
            logo: "/volante gfc.jpg"
        },
        {
            sNo: 11,
            name: "Comedy Club x Theatrix",
            captain: "Aditya Raghav",
            logo: "/theatrix gfc.png"
        },
        {
            sNo: 12,
            name: "SOA RIT",
            captain: "Nehal Singh",
            logo: "/soa gfc.jpeg"
        },
        {
            sNo: 13,
            name: "Quatlas",
            captain: "Vignesh Iyer",
            logo: "/quatlas gfc.jpg"
        },
        {
            sNo: 14,
            name: "WMT",
            captain: "Johan Mathew",
            logo: "/wmt gfc.jpg"
        },
        {
            sNo: 15,
            name: "Freshers United",
            captain: "Garv Bhat",
            logo: "/freshers gfc.jpg"
        },
        {
            sNo: 16,
            name: "Velocita",
            captain: "Likith",
            logo: "/velocita gfc.png"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "teams",
        className: "w-full py-20 relative bg-cover bg-center bg-fixed",
        style: {
            backgroundImage: "url(/football-field-background.jpg)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40"
            }, void 0, false, {
                fileName: "[project]/components/teams-section.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-bold mb-12 text-white",
                        children: "Participating Teams"
                    }, void 0, false, {
                        fileName: "[project]/components/teams-section.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full border-collapse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-[#22C55E]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-gray-300 px-6 py-4 text-white text-left",
                                                children: "S.No"
                                            }, void 0, false, {
                                                fileName: "[project]/components/teams-section.tsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-gray-300 px-6 py-4 text-white text-left",
                                                children: "Team Name"
                                            }, void 0, false, {
                                                fileName: "[project]/components/teams-section.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-gray-300 px-6 py-4 text-white text-left",
                                                children: "Captain"
                                            }, void 0, false, {
                                                fileName: "[project]/components/teams-section.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/teams-section.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/teams-section.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: teams.map((team, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: index % 2 === 0 ? "bg-gray-800/80 backdrop-blur-sm" : "bg-gray-900/80 backdrop-blur-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 px-6 py-4 text-white",
                                                    children: team.sNo
                                                }, void 0, false, {
                                                    fileName: "[project]/components/teams-section.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 px-6 py-4 text-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            team.logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative w-10 h-10 flex-shrink-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: team.logo,
                                                                    alt: `${team.name} logo`,
                                                                    fill: true,
                                                                    className: "rounded-full object-contain p-1 border border-white/20 bg-white/10"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/teams-section.tsx",
                                                                    lineNumber: 54,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/teams-section.tsx",
                                                                lineNumber: 53,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: team.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/teams-section.tsx",
                                                                lineNumber: 62,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/teams-section.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/teams-section.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-gray-300 px-6 py-4 text-white",
                                                    children: team.captain
                                                }, void 0, false, {
                                                    fileName: "[project]/components/teams-section.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, team.sNo, true, {
                                            fileName: "[project]/components/teams-section.tsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/teams-section.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/teams-section.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/teams-section.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-white text-3xl md:text-4xl font-bold font-serif",
                        children: "Join us on the field and cheer for your favorite teams — every goal supports a cause!"
                    }, void 0, false, {
                        fileName: "[project]/components/teams-section.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/teams-section.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/teams-section.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = TeamsSection;
var _c;
__turbopack_context__.k.register(_c, "TeamsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        id: "footer",
        className: "w-full py-12 bg-[#000000] text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold",
                                    children: "Contact Us"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 8,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Priya: +91 96067-48673"
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 10,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Devesh: +91 95893-26155"
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 11,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 9,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 7,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:text-[#88C642] transition-colors",
                                    "aria-label": "Instagram",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "2",
                                                y: "2",
                                                width: "20",
                                                height: "20",
                                                rx: "5",
                                                ry: "5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 19,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 20,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "17.5",
                                                cy: "6.5",
                                                r: "1.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 21,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 18,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:text-[#88C642] transition-colors",
                                    "aria-label": "LinkedIn",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "2",
                                                y: "9",
                                                width: "4",
                                                height: "12"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 27,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "4",
                                                cy: "4",
                                                r: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 28,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:text-[#88C642] transition-colors",
                                    "aria-label": "X",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.654l-5.208-6.807-5.974 6.807H2.306l7.644-8.74-8.179-10.76h6.82l4.75 6.28 5.467-6.28m-.57 17.938h1.846L6.163 3.75H4.15l13.524 16.438z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "© 2025 Goal For A Cause. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/footer.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/footer.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hero-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$image$2d$scroller$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/image-scroller.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$registration$2d$rules$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/registration-rules.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sponsors$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sponsors-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$teams$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/teams-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full bg-white text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$image$2d$scroller$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$registration$2d$rules$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sponsors$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$teams$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_e8437359._.js.map
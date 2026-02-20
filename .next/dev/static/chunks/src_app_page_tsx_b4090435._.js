(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* ─── Cursor ────────────────────────────────────────────── */ function CustomCursor() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6";
    }
    const dot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "CustomCursor[useEffect()]": ()=>{
                let rx = 0;
                let ry = 0;
                let dx = 0;
                let dy = 0;
                const move = {
                    "CustomCursor[useEffect() > move]": (e)=>{
                        dx = e.clientX;
                        dy = e.clientY;
                        if (dot.current) {
                            dot.current.style.left = `${dx}px`;
                            dot.current.style.top = `${dy}px`;
                        }
                    }
                }["CustomCursor[useEffect() > move]"];
                const raf = {
                    "CustomCursor[useEffect() > raf]": ()=>{
                        rx = rx + (dx - rx) * 0.12;
                        rx;
                        ry = ry + (dy - ry) * 0.12;
                        ry;
                        if (ring.current) {
                            ring.current.style.left = `${rx}px`;
                            ring.current.style.top = `${ry}px`;
                        }
                        requestAnimationFrame(raf);
                    }
                }["CustomCursor[useEffect() > raf]"];
                window.addEventListener("mousemove", move);
                requestAnimationFrame(raf);
                return ()=>window.removeEventListener("mousemove", move);
            }
        })["CustomCursor[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: dot,
            className: "fixed z-[9999] w-2.5 h-2.5 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-multiply",
            style: {
                background: "var(--gold)"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ring,
                    className: "fixed z-[9998] w-10 h-10 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2",
                    style: {
                        border: "1px solid var(--gold)",
                        opacity: 0.45
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 75,
                    columnNumber: 16
                }, this)
            ]
        }, void 0, true);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_s(CustomCursor, "YqOnojFAY8h0UO6gN7wKiBzdUjQ=");
_c = CustomCursor;
/* ─── Animated section wrapper ─────────────────────────── */ function FadeSection(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6";
    }
    const { children, className: t1, delay: t2 } = t0;
    const className = t1 === undefined ? "" : t1;
    const delay = t2 === undefined ? 0 : t2;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "FadeSection[useEffect()]": ()=>{
                const el = ref.current;
                if (!el) {
                    return;
                }
                const obs = new IntersectionObserver((t5)=>{
                    const [e] = t5;
                    if (e.isIntersecting) {
                        setVisible(true);
                        obs.disconnect();
                    }
                }, {
                    threshold: 0.15
                });
                obs.observe(el);
                return ()=>obs.disconnect();
            }
        })["FadeSection[useEffect()]"];
        t4 = [];
        $[1] = t3;
        $[2] = t4;
    } else {
        t3 = $[1];
        t4 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    const t5 = visible ? 1 : 0;
    const t6 = visible ? "translateY(0)" : "translateY(28px)";
    const t7 = `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`;
    let t8;
    if ($[3] !== t5 || $[4] !== t6 || $[5] !== t7) {
        t8 = {
            opacity: t5,
            transform: t6,
            transition: t7
        };
        $[3] = t5;
        $[4] = t6;
        $[5] = t7;
        $[6] = t8;
    } else {
        t8 = $[6];
    }
    let t9;
    if ($[7] !== children || $[8] !== className || $[9] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: className,
            style: t8,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 153,
            columnNumber: 10
        }, this);
        $[7] = children;
        $[8] = className;
        $[9] = t8;
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    return t9;
}
_s1(FadeSection, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
_c1 = FadeSection;
/* ─── Nav ───────────────────────────────────────────────── */ function Nav() {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6";
    }
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Nav[useEffect()]": ()=>{
                const fn = {
                    "Nav[useEffect() > fn]": ()=>setScrolled(window.scrollY > 50)
                }["Nav[useEffect() > fn]"];
                window.addEventListener("scroll", fn);
                return ()=>window.removeEventListener("scroll", fn);
            }
        })["Nav[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const t2 = scrolled ? 16 : 28;
    const t3 = scrolled ? 16 : 28;
    const t4 = scrolled ? "rgba(250,248,244,0.94)" : "transparent";
    const t5 = scrolled ? "blur(14px)" : "none";
    const t6 = scrolled ? "1px solid rgba(201,169,110,0.2)" : "none";
    let t7;
    if ($[3] !== t2 || $[4] !== t3 || $[5] !== t4 || $[6] !== t5 || $[7] !== t6) {
        t7 = {
            paddingTop: t2,
            paddingBottom: t3,
            background: t4,
            backdropFilter: t5,
            borderBottom: t6
        };
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            color: "var(--ink)"
        };
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "font-display text-2xl font-light tracking-widest",
            style: t8,
            children: [
                "Design",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: "var(--gold)"
                    },
                    children: "Space"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 228,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 228,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "flex gap-10 list-none",
            children: [
                "Work",
                "Services",
                "Process",
                "Journal"
            ].map(_NavAnonymous)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 237,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#contact",
            className: "font-body text-xs tracking-[0.2em] uppercase px-6 py-3 transition-all duration-300",
            style: {
                border: "1px solid var(--gold)",
                color: "var(--ink)"
            },
            onMouseEnter: _NavAOnMouseEnter,
            onMouseLeave: _NavAOnMouseLeave,
            children: "Book Consult"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 transition-all duration-500",
            style: t7,
            children: [
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[13] = t7;
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    return t12;
}
_s2(Nav, "tQtW9FyKD+Ut/6k+f0BCbABprL4=");
_c2 = Nav;
/* ─── Hero ──────────────────────────────────────────────── */ function _NavAOnMouseLeave(e_2) {
    e_2.target.style.background = "transparent";
    e_2.target.style.color = "var(--ink)";
}
function _NavAOnMouseEnter(e_1) {
    e_1.target.style.background = "var(--gold)";
    e_1.target.style.color = "var(--warm-white)";
}
function _NavAnonymous(l) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: `#${l.toLowerCase()}`,
            className: "font-body text-xs tracking-[0.22em] uppercase transition-all duration-300",
            style: {
                color: "var(--stone)",
                opacity: 0.8
            },
            onMouseEnter: _NavAnonymousAOnMouseEnter,
            onMouseLeave: _NavAnonymousAOnMouseLeave,
            children: l
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 273,
            columnNumber: 22
        }, this)
    }, l, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 273,
        columnNumber: 10
    }, this);
}
function _NavAnonymousAOnMouseLeave(e_0) {
    e_0.target.style.opacity = "0.8";
    e_0.target.style.color = "var(--stone)";
}
function _NavAnonymousAOnMouseEnter(e) {
    e.target.style.opacity = "1";
    e.target.style.color = "var(--gold)";
}
function Hero() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            background: "var(--warm-white)"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-20 w-px h-32",
            style: {
                background: "linear-gradient(to bottom, transparent, var(--gold))",
                opacity: 0.4
            }
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 305,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-body text-xs tracking-[0.35em] uppercase mb-8 opacity-0-start animate-fade-up",
            style: {
                color: "var(--gold)",
                animationDelay: "0.3s",
                animationFillMode: "forwards"
            },
            children: "Award-winning interior studio"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 315,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            fontSize: "clamp(3.4rem, 5vw, 5.8rem)",
            color: "var(--ink)",
            animationDelay: "0.5s",
            animationFillMode: "forwards"
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 338,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "font-display font-light leading-[1.06] mb-8 opacity-0-start animate-fade-up",
            style: t3,
            children: [
                "Designing Spaces ",
                t4,
                "That",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                    className: "italic",
                    style: {
                        color: "var(--gold)"
                    },
                    children: "Feel Like"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 345,
                    columnNumber: 143
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 347,
                    columnNumber: 24
                }, this),
                " Home"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 345,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-body font-light leading-relaxed mb-14 max-w-sm opacity-0-start animate-fade-up",
            style: {
                color: "var(--stone)",
                fontSize: "0.9rem",
                animationDelay: "0.7s",
                animationFillMode: "forwards"
            },
            children: "Personalized interiors crafted with style and comfort. Experience luxury living tailored to your lifestyle."
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 354,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            animationDelay: "0.9s",
            animationFillMode: "forwards"
        };
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#contact",
            className: "font-body text-xs tracking-[0.2em] uppercase px-9 py-4 transition-all duration-300 inline-block",
            style: {
                background: "var(--ink)",
                color: "var(--warm-white)"
            },
            onMouseEnter: _HeroAOnMouseEnter,
            onMouseLeave: _HeroAOnMouseLeave,
            children: "Book Free Consultation"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 376,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            color: "var(--stone)"
        };
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-6 opacity-0-start animate-fade-up",
            style: t7,
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#work",
                    className: "font-body text-xs tracking-[0.2em] uppercase flex items-center gap-3 transition-all duration-300 group",
                    style: t9,
                    children: [
                        "Explore Designs",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block h-px transition-all duration-300 group-hover:w-14",
                            style: {
                                width: 28,
                                background: "var(--stone)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 395,
                            columnNumber: 256
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 395,
                    columnNumber: 99
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 395,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-end px-20 pb-24 pt-36 relative z-10",
            style: t0,
            children: [
                t1,
                t2,
                t5,
                t6,
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-10 mt-16 pt-10 opacity-0-start animate-fade-up",
                    style: {
                        borderTop: "1px solid rgba(138,127,114,0.2)",
                        animationDelay: "1.1s",
                        animationFillMode: "forwards"
                    },
                    children: [
                        [
                            "320+",
                            "Projects Done"
                        ],
                        [
                            "14",
                            "Years of Excellence"
                        ],
                        [
                            "98%",
                            "Client Satisfaction"
                        ]
                    ].map(_HeroAnonymous)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 405,
                    columnNumber: 118
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 405,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    let t13;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            animationDelay: "0.4s",
            animationFillMode: "forwards"
        };
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=85",
            alt: "Luxury interior living room",
            fill: true,
            className: "object-cover",
            priority: true
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 421,
            columnNumber: 11
        }, this);
        $[13] = t12;
        $[14] = t13;
    } else {
        t12 = $[13];
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0",
            style: {
                background: "linear-gradient(to right, rgba(250,248,244,0.15) 0%, transparent 40%)"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 430,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = {
            background: "var(--warm-white)",
            minWidth: 200
        };
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-display font-light",
            style: {
                fontSize: "3rem",
                color: "var(--gold)",
                lineHeight: 1
            },
            children: "12"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 449,
            columnNumber: 11
        }, this);
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-16 -left-10 p-7 shadow-2xl animate-float",
            style: t15,
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-body text-xs tracking-[0.22em] uppercase mt-1",
                    style: {
                        color: "var(--stone)"
                    },
                    children: "Design Awards"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 460,
                    columnNumber: 102
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 460,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-10 right-10 font-body text-xs tracking-[0.25em] uppercase px-4 py-2",
            style: {
                background: "rgba(201,169,110,0.18)",
                backdropFilter: "blur(10px)",
                color: "var(--gold)",
                border: "1px solid rgba(201,169,110,0.3)"
            },
            children: "Est. 2010"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 469,
            columnNumber: 11
        }, this);
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-px h-14 animate-scroll-line",
            style: {
                background: "linear-gradient(to bottom, var(--gold), transparent)"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 481,
            columnNumber: 11
        }, this);
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "min-h-screen grid grid-cols-2 overflow-hidden",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden opacity-0-start animate-fade-in",
                    style: t12,
                    children: [
                        t13,
                        t14,
                        t17,
                        t18,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-10 right-10 flex flex-col items-center gap-3",
                            children: [
                                t19,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body text-xs tracking-[0.28em] uppercase",
                                    style: {
                                        color: "rgba(250,248,244,0.7)"
                                    },
                                    children: "Scroll"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 490,
                                    columnNumber: 272
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 490,
                            columnNumber: 189
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 490,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 490,
            columnNumber: 11
        }, this);
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    return t20;
}
_c3 = Hero;
/* ─── Why Choose Us ─────────────────────────────────────── */ function _HeroAnonymous(t0) {
    const [n, l] = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-display font-light",
                style: {
                    fontSize: "2.2rem",
                    color: "var(--gold)"
                },
                children: n
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 503,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-body text-xs tracking-widest uppercase mt-1",
                style: {
                    color: "var(--stone)"
                },
                children: l
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 506,
                columnNumber: 15
            }, this)
        ]
    }, l, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 503,
        columnNumber: 10
    }, this);
}
function _HeroAOnMouseLeave(e_0) {
    return e_0.currentTarget.style.background = "var(--ink)";
}
function _HeroAOnMouseEnter(e) {
    return e.currentTarget.style.background = "var(--deep)";
}
const whyItems = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdArchitecture"],
        title: "Custom Designs",
        desc: "Tailored architectural solutions that reflect your personal aesthetic and lifestyle."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdWorkspacePremium"],
        title: "Premium Materials",
        desc: "Sourcing only the finest sustainable materials from global artisan suppliers."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdWork"],
        title: "Expert Designers",
        desc: "Award-winning professionals with decades of industry experience and vision."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdSchedule"],
        title: "On-Time Delivery",
        desc: "Rigorous project management ensuring your dream space is ready when promised."
    }
];
function WhyChooseUs() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            background: "var(--warm-white)"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeSection, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-body text-xs tracking-[0.32em] uppercase mb-5",
                style: {
                    color: "var(--gold)"
                },
                children: "Why Choose Us"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 552,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 552,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            fontSize: "clamp(2.4rem,3.5vw,4rem)",
            color: "var(--ink)"
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 571,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeSection, {
            delay: 100,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-display font-light leading-tight mb-8",
                style: t2,
                children: [
                    "Craftsmanship ",
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        className: "italic",
                        style: {
                            color: "var(--gold)"
                        },
                        children: "beyond"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 578,
                        columnNumber: 123
                    }, this),
                    " ",
                    "the ordinary"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 578,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 578,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeSection, {
            delay: 200,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-body font-light leading-loose",
                style: {
                    color: "var(--stone)",
                    fontSize: "0.9rem",
                    maxWidth: 380
                },
                children: "We don't just design rooms — we sculpt experiences. Each project is a dialogue between your vision and our expertise, resulting in spaces that resonate deeply and endure beautifully."
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 587,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 587,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-72 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=85",
                alt: "Interior detail",
                fill: true,
                className: "object-cover"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 598,
                columnNumber: 57
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 598,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            background: "var(--gold)",
            color: "var(--warm-white)"
        };
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                fontSize: "2.2rem",
                lineHeight: 1
            },
            children: "10+"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 610,
            columnNumber: 10
        }, this);
        $[8] = t7;
        $[9] = t8;
    } else {
        t7 = $[8];
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                t4,
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeSection, {
                    delay: 300,
                    className: "mt-14 relative",
                    children: [
                        t6,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-6 -right-6 w-32 h-32 font-display font-light flex flex-col items-center justify-center text-center",
                            style: t7,
                            children: [
                                t8,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-body text-xs tracking-widest uppercase mt-1",
                                    style: {
                                        fontSize: "0.6rem"
                                    },
                                    children: "Countries Served"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 622,
                                    columnNumber: 231
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 622,
                            columnNumber: 83
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 622,
                    columnNumber: 27
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 622,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "work",
            className: "px-20 py-36",
            style: t0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-24 items-start",
                children: [
                    t9,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-0 mt-8",
                        children: whyItems.map(_WhyChooseUsWhyItemsMap)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 631,
                        columnNumber: 122
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 631,
                columnNumber: 65
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 631,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    return t10;
}
_c4 = WhyChooseUs;
/* ─── Services ──────────────────────────────────────────── */ function _WhyChooseUsWhyItemsMap(t0, i) {
    const { icon: Icon, title, desc } = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeSection, {
        delay: i * 80,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group flex items-start gap-6 py-8 transition-all duration-300",
            style: {
                borderBottom: "1px solid rgba(138,127,114,0.18)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[var(--gold)]",
                    style: {
                        border: "1px solid rgba(201,169,110,0.4)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        size: 22,
                        style: {
                            color: "var(--gold)"
                        },
                        className: "group-hover:text-white transition-colors duration-300"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 650,
                        columnNumber: 10
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 648,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-body font-normal tracking-wide mb-2",
                            style: {
                                color: "var(--ink)",
                                fontSize: "0.95rem"
                            },
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 652,
                            columnNumber: 91
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body font-light leading-relaxed",
                            style: {
                                color: "var(--stone)",
                                fontSize: "0.85rem"
                            },
                            children: desc
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 655,
                            columnNumber: 24
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 652,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 646,
            columnNumber: 50
        }, this)
    }, title, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 646,
        columnNumber: 10
    }, this);
}
const services = [
    {
        title: "Living Room",
        desc: "Harmonious spaces for gathering and relaxation.",
        img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80",
        num: "01"
    },
    {
        title: "Bedroom",
        desc: "Private sanctuaries designed for restful sleep.",
        img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80",
        num: "02"
    },
    {
        title: "Kitchen",
        desc: "Functional elegance where culinary dreams come alive.",
        img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
        num: "03"
    },
    {
        title: "Office",
        desc: "Inspiring workspaces that foster creativity.",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
        num: "04"
    }
];
function Services() {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6";
    }
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            background: "var(--cream)"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeSection, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-body text-xs tracking-[0.32em] uppercase mb-5",
                style: {
                    color: "var(--gold)"
                },
                children: "Our Services"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 701,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 701,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            fontSize: "clamp(2.4rem,3.5vw,4rem)",
            color: "var(--ink)"
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeSection, {
                    delay: 100,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display font-light leading-tight",
                        style: t2,
                        children: [
                            "Transforming",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                className: "italic",
                                style: {
                                    color: "var(--gold)"
                                },
                                children: "every"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 720,
                                columnNumber: 126
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 722,
                                columnNumber: 24
                            }, this),
                            " corner of your life"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 720,
                        columnNumber: 44
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 720,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 720,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            color: "var(--stone)"
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-end justify-between mb-20",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeSection, {
                    delay: 150,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "font-body text-xs tracking-[0.2em] uppercase flex items-center gap-3 transition-colors duration-300 group",
                        style: t4,
                        onMouseEnter: _ServicesAOnMouseEnter,
                        onMouseLeave: _ServicesAOnMouseLeave,
                        children: [
                            "View All Services",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdArrowForward"], {
                                size: 16,
                                className: "group-hover:translate-x-1 transition-transform duration-300"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 738,
                                columnNumber: 327
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 738,
                        columnNumber: 93
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 738,
                    columnNumber: 68
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 738,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== hovered) {
        t6 = services.map({
            "Services[services.map()]": (t7, i)=>{
                const { title, desc, img, num } = t7;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeSection, {
                    delay: i * 60,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group grid grid-cols-[80px_1fr_1fr_auto] items-center py-8 transition-all duration-400",
                        style: {
                            borderTop: "1px solid rgba(138,127,114,0.18)",
                            borderBottom: i === services.length - 1 ? "1px solid rgba(138,127,114,0.18)" : "none",
                            background: hovered === i ? "rgba(201,169,110,0.05)" : "transparent"
                        },
                        onMouseEnter: {
                            "Services[services.map() > <div>.onMouseEnter]": ()=>setHovered(i)
                        }["Services[services.map() > <div>.onMouseEnter]"],
                        onMouseLeave: {
                            "Services[services.map() > <div>.onMouseLeave]": ()=>setHovered(null)
                        }["Services[services.map() > <div>.onMouseLeave]"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display font-light transition-colors duration-300",
                                style: {
                                    fontSize: "1.1rem",
                                    color: hovered === i ? "var(--gold)" : "var(--stone)"
                                },
                                children: num
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 761,
                                columnNumber: 63
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display font-light transition-all duration-300",
                                style: {
                                    fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                                    color: hovered === i ? "var(--ink)" : "var(--ink)",
                                    transform: hovered === i ? "translateX(8px)" : "translateX(0)"
                                },
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 764,
                                columnNumber: 28
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-body font-light leading-relaxed",
                                style: {
                                    color: "var(--stone)",
                                    fontSize: "0.85rem",
                                    maxWidth: 320
                                },
                                children: desc
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 768,
                                columnNumber: 28
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden shrink-0 transition-all duration-500",
                                style: {
                                    width: hovered === i ? 160 : 0,
                                    height: hovered === i ? 100 : 0,
                                    opacity: hovered === i ? 1 : 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: img,
                                    alt: title,
                                    fill: true,
                                    className: "object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 776,
                                    columnNumber: 16
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 772,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 753,
                        columnNumber: 56
                    }, this)
                }, title, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 753,
                    columnNumber: 16
                }, this);
            }
        }["Services[services.map()]"]);
        $[7] = hovered;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "services",
            className: "py-36 px-20",
            style: t0,
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: t6
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 786,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 786,
            columnNumber: 10
        }, this);
        $[9] = t6;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    return t7;
}
_s3(Services, "mEhKvegbaT+HE5gyL2KiZdVDWeQ=");
_c5 = Services;
/* ─── Process ───────────────────────────────────────────── */ function _ServicesAOnMouseLeave(e_0) {
    return e_0.currentTarget.style.color = "var(--stone)";
}
function _ServicesAOnMouseEnter(e) {
    return e.currentTarget.style.color = "var(--gold)";
}
const steps = [
    {
        n: "01",
        title: "Consultation",
        desc: "Understanding your vision, spatial needs and lifestyle goals through an in-depth discovery session."
    },
    {
        n: "02",
        title: "Design",
        desc: "Crafting moodboards, material palettes and photorealistic 3D architectural renders of your space."
    },
    {
        n: "03",
        title: "Execution",
        desc: "Premium craftsmanship meets meticulous project management — on site every step of the way."
    },
    {
        n: "04",
        title: "Delivery",
        desc: "The final reveal of your dream interior space, styled and ready for you to move in."
    }
];
function Process() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            background: "var(--ink)"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeSection, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-body text-xs tracking-[0.32em] uppercase mb-5",
                style: {
                    color: "var(--gold)"
                },
                children: "The Design Journey"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 838,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 838,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            fontSize: "clamp(2.4rem,3.5vw,4rem)",
            color: "var(--warm-white)"
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 857,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeSection, {
            delay: 100,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-display font-light leading-tight mb-20",
                style: t2,
                children: [
                    "A seamless process ",
                    t3,
                    "from",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        className: "italic",
                        style: {
                            color: "var(--gold)"
                        },
                        children: "concept to completion"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 864,
                        columnNumber: 138
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 864,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 864,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "process",
            className: "py-36",
            style: t0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-20",
                children: [
                    t1,
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-4 gap-0",
                        children: steps.map(_ProcessStepsMap)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 873,
                        columnNumber: 92
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 873,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 873,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_c6 = Process;
/* ─── Testimonials ──────────────────────────────────────── */ function _ProcessStepsMap(t0, i) {
    const { n, title, desc } = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeSection, {
        delay: i * 80,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative pt-12 pr-10",
            style: {
                borderTop: "1px solid rgba(201,169,110,0.35)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -top-[7px] left-0 w-3.5 h-3.5 rounded-full",
                    style: {
                        background: "var(--gold)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 890,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-display font-light block mb-6",
                    style: {
                        fontSize: "3.5rem",
                        color: "rgba(201,169,110,0.25)",
                        lineHeight: 1
                    },
                    children: n
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 892,
                    columnNumber: 12
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-body tracking-wide mb-4",
                    style: {
                        color: "var(--warm-white)",
                        fontSize: "1rem"
                    },
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 896,
                    columnNumber: 20
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-body font-light leading-loose",
                    style: {
                        color: "rgba(250,248,244,0.45)",
                        fontSize: "0.83rem"
                    },
                    children: desc
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 899,
                    columnNumber: 22
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 888,
            columnNumber: 50
        }, this)
    }, title, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 888,
        columnNumber: 10
    }, this);
}
const testimonials = [
    {
        quote: "DesignSpace transformed our penthouse into a modern masterpiece. Their attention to detail and choice of materials were impeccable.",
        name: "Alexandra Sterling",
        role: "CEO, TechFlow",
        img: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=200&q=80"
    },
    {
        quote: "The transition from old to new was so smooth. Their project management is top-tier. I couldn't be happier with my new minimalist kitchen.",
        name: "James Harrington",
        role: "Architect",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
    },
    {
        quote: "Every corner of our home now tells a story. The expert designers really listened to what we wanted and exceeded expectations.",
        name: "Elena Rodriguez",
        role: "Art Curator",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
    }
];
function Testimonials() {
    _s4();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6";
    }
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const t = testimonials[active];
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            background: "var(--warm-white)"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeSection, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-body text-xs tracking-[0.32em] uppercase mb-5",
                style: {
                    color: "var(--gold)"
                },
                children: "Client Stories"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 941,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 941,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            fontSize: "clamp(2.4rem,3.5vw,4rem)",
            color: "var(--ink)"
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 960,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeSection, {
            delay: 100,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-display font-light leading-tight mb-16",
                style: t2,
                children: [
                    "What Our ",
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        className: "italic",
                        style: {
                            color: "var(--gold)"
                        },
                        children: "Clients Say"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 967,
                        columnNumber: 119
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 967,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 967,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-1 mb-8",
            children: [
                ...Array(5)
            ].map(_TestimonialsAnonymous)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 976,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)",
            color: "var(--ink)",
            fontStyle: "italic",
            opacity: 0,
            animation: "fadeUp 0.6s ease forwards"
        };
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== active || $[9] !== t.quote) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
            className: "font-display font-light leading-relaxed mb-10",
            style: t6,
            children: [
                "“",
                t.quote,
                "”"
            ]
        }, active, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 996,
            columnNumber: 10
        }, this);
        $[8] = active;
        $[9] = t.quote;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    const t8 = `author-${active}`;
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            opacity: 0,
            animation: "fadeUp 0.6s ease 0.15s forwards"
        };
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            color: "var(--ink)",
            fontSize: "0.9rem"
        };
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] !== t.name) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-body font-medium",
            style: t10,
            children: t.name
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1026,
            columnNumber: 11
        }, this);
        $[13] = t.name;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            color: "var(--stone)"
        };
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] !== t.role) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-body font-light text-sm mt-0.5",
            style: t12,
            children: t.role
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1043,
            columnNumber: 11
        }, this);
        $[16] = t.role;
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    let t14;
    if ($[18] !== t11 || $[19] !== t13 || $[20] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t9,
            children: [
                t11,
                t13
            ]
        }, t8, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1051,
            columnNumber: 11
        }, this);
        $[18] = t11;
        $[19] = t13;
        $[20] = t8;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    if ($[22] !== active) {
        t15 = testimonials.map({
            "Testimonials[testimonials.map()]": (__0, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "Testimonials[testimonials.map() > <button>.onClick]": ()=>setActive(i_0)
                    }["Testimonials[testimonials.map() > <button>.onClick]"],
                    className: "transition-all duration-300",
                    style: {
                        width: active === i_0 ? 36 : 10,
                        height: 3,
                        background: active === i_0 ? "var(--gold)" : "rgba(138,127,114,0.3)",
                        border: "none"
                    }
                }, i_0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1062,
                    columnNumber: 57
                }, this)
        }["Testimonials[testimonials.map()]"]);
        $[22] = active;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-3 mt-10",
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1078,
            columnNumber: 11
        }, this);
        $[24] = t15;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] !== t14 || $[27] !== t16 || $[28] !== t7) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                t4,
                t5,
                t7,
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1086,
            columnNumber: 11
        }, this);
        $[26] = t14;
        $[27] = t16;
        $[28] = t7;
        $[29] = t17;
    } else {
        t17 = $[29];
    }
    let t18;
    if ($[30] !== active) {
        t18 = testimonials.map({
            "Testimonials[testimonials.map()]": (t19, i_1)=>{
                const { img, name } = t19;
                const positions = [
                    {
                        top: "0%",
                        left: "10%",
                        w: 260,
                        h: 340
                    },
                    {
                        top: "20%",
                        left: "50%",
                        w: 220,
                        h: 280
                    },
                    {
                        top: "55%",
                        left: "20%",
                        w: 200,
                        h: 240
                    }
                ];
                const p = positions[i_1];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute overflow-hidden transition-all duration-500",
                    style: {
                        top: p.top,
                        left: p.left,
                        width: p.w,
                        height: p.h,
                        opacity: active === i_1 ? 1 : 0.35,
                        transform: active === i_1 ? "scale(1.04)" : "scale(1)",
                        zIndex: active === i_1 ? 3 : 1,
                        outline: active === i_1 ? "2px solid var(--gold)" : "none",
                        outlineOffset: 6
                    },
                    onClick: {
                        "Testimonials[testimonials.map() > <div>.onClick]": ()=>setActive(i_1)
                    }["Testimonials[testimonials.map() > <div>.onClick]"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: img,
                        alt: name,
                        fill: true,
                        className: "object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1131,
                        columnNumber: 64
                    }, this)
                }, name, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1119,
                    columnNumber: 16
                }, this);
            }
        }["Testimonials[testimonials.map()]"]);
        $[30] = active;
        $[31] = t18;
    } else {
        t18 = $[31];
    }
    let t19;
    if ($[32] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeSection, {
            delay: 200,
            className: "relative h-[540px]",
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1141,
            columnNumber: 11
        }, this);
        $[32] = t18;
        $[33] = t19;
    } else {
        t19 = $[33];
    }
    let t20;
    if ($[34] !== t17 || $[35] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-36 px-20",
            style: t0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-24 items-center",
                children: [
                    t17,
                    t19
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1149,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1149,
            columnNumber: 11
        }, this);
        $[34] = t17;
        $[35] = t19;
        $[36] = t20;
    } else {
        t20 = $[36];
    }
    return t20;
}
_s4(Testimonials, "LYMHw6xE17pbh6ai9qaw76OM0Ms=");
_c7 = Testimonials;
/* ─── CTA ───────────────────────────────────────────────── */ function _TestimonialsAnonymous(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdStar"], {
        size: 18,
        style: {
            color: "var(--gold)"
        }
    }, i, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 1161,
        columnNumber: 10
    }, this);
}
function CTA() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            background: "var(--cream)"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "absolute -bottom-6 left-0 right-0 text-center font-display font-light select-none pointer-events-none leading-none",
            style: {
                fontSize: "clamp(6rem, 14vw, 16rem)",
                color: "rgba(201,169,110,0.07)",
                whiteSpace: "nowrap"
            },
            children: "DesignSpace"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1184,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeSection, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-body text-xs tracking-[0.32em] uppercase mb-6",
                style: {
                    color: "var(--gold)"
                },
                children: "Let's Build Together"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1195,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1195,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            fontSize: "clamp(2.8rem, 4.5vw, 5rem)",
            color: "var(--ink)"
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1214,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeSection, {
            delay: 100,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-display font-light leading-tight mb-8",
                style: t3,
                children: [
                    "Let's Build Your ",
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        className: "italic",
                        style: {
                            color: "var(--gold)"
                        },
                        children: "Dream Space"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1221,
                        columnNumber: 126
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1221,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1221,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeSection, {
            delay: 200,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-body font-light leading-loose mb-12",
                style: {
                    color: "var(--stone)",
                    fontSize: "0.9rem"
                },
                children: "Join hundreds of satisfied homeowners who have elevated their living experience with DesignSpace's bespoke design services."
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1230,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1230,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "contact",
            className: "py-36 px-20 relative overflow-hidden",
            style: t0,
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 text-center max-w-2xl mx-auto",
                    children: [
                        t2,
                        t5,
                        t6,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeSection, {
                            delay: 300,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "inline-block font-body text-xs tracking-[0.22em] uppercase px-12 py-5 transition-all duration-300",
                                style: {
                                    background: "var(--ink)",
                                    color: "var(--warm-white)"
                                },
                                onMouseEnter: _CTAAOnMouseEnter,
                                onMouseLeave: _CTAAOnMouseLeave,
                                children: "Get Started Today"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1240,
                                columnNumber: 194
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1240,
                            columnNumber: 169
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1240,
                    columnNumber: 96
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1240,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    return t7;
}
_c8 = CTA;
/* ─── Footer ────────────────────────────────────────────── */ function _CTAAOnMouseLeave(e_0) {
    e_0.currentTarget.style.background = "var(--ink)";
    e_0.currentTarget.style.transform = "translateY(0)";
}
function _CTAAOnMouseEnter(e) {
    e.currentTarget.style.background = "var(--gold)";
    e.currentTarget.style.transform = "translateY(-3px)";
}
function Footer() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            background: "var(--deep)"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            borderBottom: "1px solid rgba(255,255,255,0.08)"
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            color: "var(--warm-white)"
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-display text-3xl font-light tracking-widest mb-4",
            style: t2,
            children: [
                "Design",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: "var(--gold)"
                    },
                    children: "Space"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1297,
                    columnNumber: 96
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1297,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-span-1",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-body font-light leading-loose text-xs",
                    style: {
                        color: "rgba(250,248,244,0.4)",
                        maxWidth: 220
                    },
                    children: "Crafting premium interiors that redefine modern luxury and comfort."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1306,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1306,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-body text-xs tracking-[0.25em] uppercase mb-6",
            style: {
                color: "var(--gold)"
            },
            children: "Explore"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1316,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3",
                    children: [
                        "Gallery",
                        "Designers",
                        "Journal",
                        "Reviews"
                    ].map(_FooterAnonymous)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1325,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1325,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-body text-xs tracking-[0.25em] uppercase mb-6",
            style: {
                color: "var(--gold)"
            },
            children: "Contact"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1332,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdMail"], {
            size: 14,
            style: {
                color: "var(--gold)"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1341,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-center gap-3",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-body font-light text-xs",
                    style: {
                        color: "rgba(250,248,244,0.45)"
                    },
                    children: "hello@designspace.com"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1350,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1350,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdPhone"], {
            size: 14,
            style: {
                color: "var(--gold)"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1359,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-center gap-3",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-body font-light text-xs",
                    style: {
                        color: "rgba(250,248,244,0.45)"
                    },
                    children: "+1 (555) 000-1234"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1368,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1368,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdLocationOn"], {
            size: 14,
            style: {
                color: "var(--gold)"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1377,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-4",
                    children: [
                        t9,
                        t11,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-center gap-3",
                            children: [
                                t12,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-body font-light text-xs",
                                    style: {
                                        color: "rgba(250,248,244,0.45)"
                                    },
                                    children: "123 Interior Ave, NY"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1386,
                                    columnNumber: 100
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1386,
                            columnNumber: 55
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1386,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1386,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-body text-xs tracking-[0.25em] uppercase mb-6",
            style: {
                color: "var(--gold)"
            },
            children: "Social"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1395,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-4 gap-16 mb-16 pb-16",
            style: t1,
            children: [
                t4,
                t6,
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t14,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-3",
                            children: [
                                "Instagram",
                                "Pinterest",
                                "Behance",
                                "LinkedIn"
                            ].map(_FooterAnonymous2)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1404,
                            columnNumber: 98
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1404,
                    columnNumber: 88
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1404,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-body font-light text-xs tracking-wide",
            style: {
                color: "rgba(250,248,244,0.25)"
            },
            children: "© 2024 DesignSpace Interior Collective. All rights reserved."
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1411,
            columnNumber: 11
        }, this);
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "px-20 py-20",
            style: t0,
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        t16,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-8",
                            children: [
                                "Privacy Policy",
                                "Terms of Service"
                            ].map(_FooterAnonymous3)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1420,
                            columnNumber: 115
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1420,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1420,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    return t17;
}
_c9 = Footer;
/* ─── Page ──────────────────────────────────────────────── */ function _FooterAnonymous3(l_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "#",
        className: "font-body font-light text-xs tracking-wide transition-colors duration-300",
        style: {
            color: "rgba(250,248,244,0.25)"
        },
        onMouseEnter: _FooterAnonymousAOnMouseEnter3,
        onMouseLeave: _FooterAnonymousAOnMouseLeave3,
        children: l_0
    }, l_0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 1430,
        columnNumber: 10
    }, this);
}
function _FooterAnonymousAOnMouseLeave3(e_4) {
    return e_4.target.style.color = "rgba(250,248,244,0.25)";
}
function _FooterAnonymousAOnMouseEnter3(e_3) {
    return e_3.target.style.color = "var(--gold)";
}
function _FooterAnonymous2(s) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "font-body font-light text-xs tracking-wide transition-colors duration-300 flex items-center gap-2",
            style: {
                color: "rgba(250,248,244,0.45)"
            },
            onMouseEnter: _FooterAnonymousAOnMouseEnter2,
            onMouseLeave: _FooterAnonymousAOnMouseLeave2,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdPublic"], {
                    size: 13
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1443,
                    columnNumber: 100
                }, this),
                s
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1441,
            columnNumber: 22
        }, this)
    }, s, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 1441,
        columnNumber: 10
    }, this);
}
function _FooterAnonymousAOnMouseLeave2(e_2) {
    return e_2.currentTarget.style.color = "rgba(250,248,244,0.45)";
}
function _FooterAnonymousAOnMouseEnter2(e_1) {
    return e_1.currentTarget.style.color = "var(--gold)";
}
function _FooterAnonymous(l) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "font-body font-light text-xs tracking-wide transition-colors duration-300",
            style: {
                color: "rgba(250,248,244,0.45)"
            },
            onMouseEnter: _FooterAnonymousAOnMouseEnter,
            onMouseLeave: _FooterAnonymousAOnMouseLeave,
            children: l
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1452,
            columnNumber: 22
        }, this)
    }, l, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 1452,
        columnNumber: 10
    }, this);
}
function _FooterAnonymousAOnMouseLeave(e_0) {
    return e_0.target.style.color = "rgba(250,248,244,0.45)";
}
function _FooterAnonymousAOnMouseEnter(e) {
    return e.target.style.color = "var(--gold)";
}
function Home() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb688229c1032a68776d59c69af4287e45a725fec823c8327268db95197a0ca6";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomCursor, {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1472,
                    columnNumber: 12
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Nav, {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1472,
                    columnNumber: 28
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hero, {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1472,
                            columnNumber: 41
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhyChooseUs, {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1472,
                            columnNumber: 49
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Services, {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1472,
                            columnNumber: 64
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Process, {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1472,
                            columnNumber: 76
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Testimonials, {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1472,
                            columnNumber: 87
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CTA, {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1472,
                            columnNumber: 103
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1472,
                    columnNumber: 35
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1472,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c10 = Home;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "CustomCursor");
__turbopack_context__.k.register(_c1, "FadeSection");
__turbopack_context__.k.register(_c2, "Nav");
__turbopack_context__.k.register(_c3, "Hero");
__turbopack_context__.k.register(_c4, "WhyChooseUs");
__turbopack_context__.k.register(_c5, "Services");
__turbopack_context__.k.register(_c6, "Process");
__turbopack_context__.k.register(_c7, "Testimonials");
__turbopack_context__.k.register(_c8, "CTA");
__turbopack_context__.k.register(_c9, "Footer");
__turbopack_context__.k.register(_c10, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_page_tsx_b4090435._.js.map
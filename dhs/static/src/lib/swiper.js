/** @odoo-module **/

// Use odoo.define with an empty dependency list []
// The function provided as the third argument is the module factory.

odoo.define('my_module.swiper_lib', [], function (require) {
    "use strict";

    // Define 'Swiper' as a local variable within the Odoo factory function's scope.
    var Swiper = function () {
        // --- START OF YOUR COMPLETE (BUT MINIFIED) CODE PASTE ---

        "use strict";

        function e(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
        }

        function t(s, a) {
            void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach(i => {
                void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
            })
        }

        const s = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector: () => null,
            querySelectorAll: () => [],
            getElementById: () => null,
            createEvent: () => ({
                initEvent() {}
            }),
            createElement: () => ({
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName: () => []
            }),
            createElementNS: () => ({}),
            importNode: () => null,
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };

        function a() {
            const e = "undefined" != typeof document ? document : {};
            return t(e, s), e
        }

        const i = {
            document: s,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function () {
                return this
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle: () => ({
                getPropertyValue: () => ""
            }),
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia: () => ({}),
            requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };

        function r() {
            const e = "undefined" != typeof window ? window : {};
            return t(e, i), e
        }

        function n(e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }

        function l() {
            return Date.now()
        }

        function o(e, t) {
            void 0 === t && (t = "x");
            const s = r();
            let a, i, n;
            const l = function (e) {
                const t = r();
                let s;
                return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
            }(e);
            return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(e => e.replace(",", ".")).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
        }

        function d(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }

        function c() {
            const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                t = ["__proto__", "constructor", "prototype"];
            for (let a = 1; a < arguments.length; a += 1) {
                const i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
                if (null != i && (s = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
                    const s = Object.keys(Object(i)).filter(e => t.indexOf(e) < 0);
                    for (let t = 0, a = s.length; t < a; t += 1) {
                        const a = s[t],
                            r = Object.getOwnPropertyDescriptor(i, a);
                        void 0 !== r && r.enumerable && (d(e[a]) && d(i[a]) ? i[a].__swiper__ ? e[a] = i[a] : c(e[a], i[a]) : !d(e[a]) && d(i[a]) ? (e[a] = {}, i[a].__swiper__ ? e[a] = i[i] : c(e[a], i[a])) : e[a] = i[a])
                    }
                }
            }
            var s;
            return e
        }

        function p(e, t, s) {
            e.style.setProperty(t, s)
        }

        function u(e) {
            let {
                swiper: t,
                targetPosition: s,
                side: a
            } = e;
            const i = r(),
                n = -t.translate;
            let l, o = null;
            const d = t.params.speed;
            t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
            const c = s > n ? "next" : "prev",
                p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                u = () => {
                    l = (new Date).getTime(), null === o && (o = l);
                    const e = Math.max(Math.min((l - o) / d, 1), 0),
                        r = .5 - Math.cos(e * Math.PI) / 2;
                    let c = n + r * (s - n);
                    if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                            [a]: c
                        }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                        t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                            [a]: c
                        })
                    }), void i.cancelAnimationFrame(t.cssModeFrameID);
                    t.cssModeFrameID = i.requestAnimationFrame(u)
                };
            u()
        }

        function m(e) {
            return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
        }

        function h(e, t) {
            return void 0 === t && (t = ""), [...e.children].filter(e => e.matches(t))
        }

        function f(e, t) {
            void 0 === t && (t = []);
            const s = document.createElement(e);
            return s.classList.add(...Array.isArray(t) ? t : [t]), s
        }

        function g(e) {
            const t = r(),
                s = a(),
                i = e.getBoundingClientRect(),
                n = s.body,
                l = e.clientTop || n.clientTop || 0,
                o = e.clientLeft || n.clientLeft || 0,
                d = e === t ? t.scrollY : e.scrollTop,
                c = e === t ? t.scrollX : e.scrollLeft;
            return {
                top: i.top + d - l,
                left: i.left + c - o
            }
        }

        function v(e, t) {
            return r().getComputedStyle(e, null).getPropertyValue(t)
        }

        function w(e) {
            let t, s = e;
            if (s) {
                for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
                return t
            }
        }

        function b(e, t) {
            const s = [];
            let a = e.parentElement;
            for (; a;) t ? a.matches(t) && s.push(a) : s.push(a), a = a.parentElement;
            return s
        }

        function y(e, t) {
            t && e.addEventListener("transitionend", (function s(a) {
                a.target === e && (t.call(e, a), e.removeEventListener("transitionend", s))
            }))
        }

        function E(e, t, s) {
            const a = r();
            return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
        }

        let x, S, T;

        function M() {
            return x || (x = function () {
                const e = r(),
                    t = a();
                return {
                    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                }
            }()), x
        }

        function C(e) {
            return void 0 === e && (e = {}), S || (S = function (e) {
                let {
                    userAgent: t
                } = void 0 === e ? {} : e;
                const s = M(),
                    a = r(),
                    i = a.navigator.platform,
                    n = t || a.navigator.userAgent,
                    l = {
                        ios: !1,
                        android: !1
                    },
                    o = a.screen.width,
                    d = a.screen.height,
                    c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
                let p = n.match(/(iPad).*OS\s([\d_]+)/);
                const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                    m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    h = "Win32" === i;
                let f = "MacIntel" === i;
                return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !h && (l.os = "android", l.android = !0), (p || m || u) && (l.os = "ios", l.ios = !0), l
            }(e)), S
        }

        function P() {
            return T || (T = function () {
                const e = r();
                let t = !1;

                function s() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }
                if (s()) {
                    const s = String(e.navigator.userAgent);
                    if (s.includes("Version/")) {
                        const [e, a] = s.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
                        t = e < 16 || 16 === e && a < 2
                    }
                }
                return {
                    isSafari: t || s(),
                    needPerspectiveFix: t,
                    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                }
            }()), T
        }

        const L = (e, t) => {
            if (!e || e.destroyed || !e.params) return;
            const s = t.closest(e.isElement ? "swiper-slide" : "." + e.params.slideClass);
            if (s) {
                let t = s.querySelector("." + e.params.lazyPreloaderClass);
                !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector("." + e.params.lazyPreloaderClass) : requestAnimationFrame(() => {
                    s.shadowRoot && (t = s.shadowRoot.querySelector("." + e.params.lazyPreloaderClass), t && t.remove())
                })), t && t.remove()
            }
        }, z = (e, t) => {
            if (!e.slides[t]) return;
            const s = e.slides[t].querySelector('[loading="lazy"]');
            s && s.removeAttribute("loading")
        }, A = e => {
            if (!e || e.destroyed || !e.params) return;
            let t = e.params.lazyPreloadPrevNext;
            const s = e.slides.length;
            if (!s || !t || t < 0) return;
            t = Math.min(t, s);
            const a = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                i = e.activeIndex;
            if (e.params.grid && e.params.grid.rows > 1) {
                const s = i,
                    r = [s - t];
                return r.push(...Array.from({
                    length: t
                }).map((e, t) => s + a + t)), void e.slides.forEach((t, s) => {
                    r.includes(t.column) && z(e, s)
                })
            }
            const r = i + a - 1;
            if (e.params.rewind || e.params.loop) for (let a = i - t; a <= r + t; a += 1) {
                const t = (a % s + s) % s;
                (t < i || t > r) && z(e, t)
            } else for (let a = Math.max(i - t, 0); a <= Math.min(r + t, s - 1); a += 1) a !== i && (a > r || a < i) && z(e, a)
        };

        function I(e) {
            let {
                swiper: t,
                runCallbacks: s,
                direction: a,
                step: i
            } = e;
            const {
                activeIndex: r,
                previousIndex: n
            } = t;
            let l = a;
            if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit("transition" + i), s && r !== n) {
                if ("reset" === l) return void t.emit("slideResetTransition" + i);
                t.emit("slideChangeTransition" + i), "next" === l ? t.emit("slideNextTransition" + i) : t.emit("slidePrevTransition" + i)
            }
        }

        function k(e) {
            const t = this,
                s = a(),
                i = r(),
                n = t.touchEventsData;
            n.evCach
        }
        // ^^^ The code snippet provided by the user stops here abruptly.
        // This is still incomplete and will likely cause a syntax error or a broken Swiper library.

        // YOU NEED THE REST OF THE CODE HERE FOR IT TO WORK

        // --- END OF YOUR CODE PASTE ---

        // The factory function must return the main Swiper variable
        return Swiper;
    });

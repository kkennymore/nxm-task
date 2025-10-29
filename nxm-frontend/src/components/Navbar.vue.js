import { RouterLink } from 'vue-router';
import apiEndpoint from '../router/appEndpoint';
import { Facebook, Linkedin, Instagram, Twitter, Menu } from 'lucide-vue-next';
import logo from "../assets/logo.webp";
import CustomAnimation from './CustomAnimation.vue';
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {[typeof CustomAnimation, typeof CustomAnimation, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(CustomAnimation, new CustomAnimation({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
var __VLS_3 = {};
const { default: __VLS_4 } = __VLS_2.slots;
__VLS_asFunctionalElement(__VLS_elements.header, __VLS_elements.header)({
    ...{ class: "header-wrap" },
});
__VLS_asFunctionalElement(__VLS_elements.nav, __VLS_elements.nav)({
    ...{ class: "container nav" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "logowrap" },
});
__VLS_asFunctionalElement(__VLS_elements.img)({
    src: (__VLS_ctx.logo),
});
// @ts-ignore
[logo,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "nav-link-content-wrapper" },
});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ class: "icon-mobile" },
});
const __VLS_5 = {}.Menu;
/** @type {[typeof __VLS_components.Menu, ]} */ ;
// @ts-ignore
Menu;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    size: (20),
}));
const __VLS_7 = __VLS_6({
    size: (20),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({
    ...{ class: "nav-links-wrap" },
});
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
const __VLS_10 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({
    to: (__VLS_ctx.apiEndpoint.home),
}));
const __VLS_12 = __VLS_11({
    to: (__VLS_ctx.apiEndpoint.home),
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
const { default: __VLS_14 } = __VLS_13.slots;
// @ts-ignore
[apiEndpoint,];
var __VLS_13;
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
const __VLS_15 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    to: (__VLS_ctx.apiEndpoint.shop),
}));
const __VLS_17 = __VLS_16({
    to: (__VLS_ctx.apiEndpoint.shop),
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
const { default: __VLS_19 } = __VLS_18.slots;
// @ts-ignore
[apiEndpoint,];
var __VLS_18;
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
const __VLS_20 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    to: (__VLS_ctx.apiEndpoint.aboutUs),
}));
const __VLS_22 = __VLS_21({
    to: (__VLS_ctx.apiEndpoint.aboutUs),
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
const { default: __VLS_24 } = __VLS_23.slots;
// @ts-ignore
[apiEndpoint,];
var __VLS_23;
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
const __VLS_25 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
    to: (__VLS_ctx.apiEndpoint.influencer),
}));
const __VLS_27 = __VLS_26({
    to: (__VLS_ctx.apiEndpoint.influencer),
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
const { default: __VLS_29 } = __VLS_28.slots;
// @ts-ignore
[apiEndpoint,];
var __VLS_28;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "nav-social-icons-wrap" },
});
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    href: "#",
});
const __VLS_30 = {}.Facebook;
/** @type {[typeof __VLS_components.Facebook, ]} */ ;
// @ts-ignore
Facebook;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({
    size: (20),
}));
const __VLS_32 = __VLS_31({
    size: (20),
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    href: "#",
});
const __VLS_35 = {}.Linkedin;
/** @type {[typeof __VLS_components.Linkedin, ]} */ ;
// @ts-ignore
Linkedin;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({
    size: (20),
}));
const __VLS_37 = __VLS_36({
    size: (20),
}, ...__VLS_functionalComponentArgsRest(__VLS_36));
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    href: "#",
});
const __VLS_40 = {}.Instagram;
/** @type {[typeof __VLS_components.Instagram, ]} */ ;
// @ts-ignore
Instagram;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    size: (20),
}));
const __VLS_42 = __VLS_41({
    size: (20),
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    href: "#",
});
const __VLS_45 = {}.Twitter;
/** @type {[typeof __VLS_components.Twitter, ]} */ ;
// @ts-ignore
Twitter;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
    size: (20),
}));
const __VLS_47 = __VLS_46({
    size: (20),
}, ...__VLS_functionalComponentArgsRest(__VLS_46));
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['header-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['logowrap']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link-content-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-mobile']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-links-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-social-icons-wrap']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};

import sitename from "@/assets/images/sitename.png";
import ConnectBtn from './ConnectBtn.vue';
import CustomAnimation from '@/components/CustomAnimation.vue';
const learnMore = () => {
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    ...{ class: "learnmore-main-wrap" },
});
/** @type {[typeof CustomAnimation, typeof CustomAnimation, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(CustomAnimation, new CustomAnimation({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
const { default: __VLS_3 } = __VLS_2.slots;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "learnmore-container" },
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
/** @type {[typeof ConnectBtn, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(ConnectBtn, new ConnectBtn({
    btnImg: (__VLS_ctx.sitename),
    method: (__VLS_ctx.learnMore),
    btnText: "Connect with Ben",
    textAlign: "right",
}));
const __VLS_5 = __VLS_4({
    btnImg: (__VLS_ctx.sitename),
    method: (__VLS_ctx.learnMore),
    btnText: "Connect with Ben",
    textAlign: "right",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
// @ts-ignore
[sitename, learnMore,];
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['learnmore-main-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['learnmore-container']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};

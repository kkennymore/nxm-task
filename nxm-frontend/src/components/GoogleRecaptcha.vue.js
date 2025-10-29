import { ref, onMounted, onBeforeUnmount, defineEmits, defineProps } from "vue";
const props = defineProps({
    siteKey: { type: String, required: true },
});
const emit = defineEmits(["verified", "expired"]);
const recaptchaContainer = ref(null);
let widgetId = null;
// load Google reCAPTCHA script safely
function loadRecaptchaScript() {
    return new Promise((resolve, reject) => {
        if (window.grecaptcha) {
            resolve(window.grecaptcha);
            return;
        }
        const existingScript = document.querySelector('script[src*="recaptcha/api.js"]');
        if (existingScript) {
            existingScript.addEventListener("load", () => resolve(window.grecaptcha));
            return;
        }
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
        script.async = true;
        script.defer = true;
        script.onload = () => resolve(window.grecaptcha);
        script.onerror = reject;
        document.head.appendChild(script);
    });
}
// Initialize reCAPTCHA safely after script load
async function initRecaptcha() {
    try {
        const grecaptcha = await loadRecaptchaScript();
        if (!recaptchaContainer.value)
            return;
        widgetId = grecaptcha.render(recaptchaContainer.value, {
            sitekey: props.siteKey,
            callback: (response) => emit("verified", response),
            "expired-callback": () => emit("expired"),
        });
    }
    catch (err) {
        console.error("Failed to load reCAPTCHA:", err);
    }
}
onMounted(initRecaptcha);
onBeforeUnmount(() => {
    // Cleanup if necessary
    if (widgetId !== null && window.grecaptcha?.reset) {
        window.grecaptcha.reset(widgetId);
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    ...{ class: "recaptcha-container" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ref: "recaptchaContainer",
    ...{ class: "g-recaptcha" },
});
/** @type {typeof __VLS_ctx.recaptchaContainer} */ ;
// @ts-ignore
[recaptchaContainer,];
/** @type {__VLS_StyleScopedClasses['recaptcha-container']} */ ;
/** @type {__VLS_StyleScopedClasses['g-recaptcha']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    setup: () => ({
        ...props,
        ...{},
        ...{},
    }),
});
export default {};

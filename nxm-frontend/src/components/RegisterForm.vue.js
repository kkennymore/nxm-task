import { reactive, onMounted, ref } from 'vue';
import FormInput from './FormInput.vue';
import ConnectBtn from './ConnectBtn.vue';
import Spacer from './Spacer.vue';
import { getIndexDb, setIndexDb } from '../services/LocalStorageService';
import { validateForm } from '@/services/ValidationService';
import GoogleRecaptcha from './GoogleRecaptcha.vue';
const recaptchaRef = ref(null);
const captchaVerified = ref(false);
const captchaToken = ref('');
const name = ref('');
function onCaptchaVerified(token) {
    captchaToken.value = token;
    captchaVerified.value = true;
}
function onCaptchaExpired() {
    captchaVerified.value = false;
    captchaToken.value = '';
}
// 🔹 Reactive state
const formData = reactive({
    firstname: '',
    lastname: '',
    bestphonenumber: '',
    email: '',
});
const newErrors = reactive({
    firstname: false,
    lastname: false,
    bestphonenumber: false,
    email: false,
});
// 🔹 Fetch saved data on mount
const fetchFormData = async () => {
    const savedData = await getIndexDb('register');
    if (savedData)
        Object.assign(formData, savedData);
};
onMounted(fetchFormData);
// 🔹 Input change handler (real-time validation)
const stateChange = async (e) => {
    const { name, value, checked, type } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    formData[name] = fieldValue;
    // Validate field immediately when typing
    newErrors[name] = !fieldValue.trim();
    // Save to IndexedDB
    let userUpdateData = (await getIndexDb('register')) || {};
    userUpdateData[name] = fieldValue;
    await setIndexDb('register', userUpdateData);
};
// 🔹 Submit handler
async function handleSubmit(e) {
    e.preventDefault();
    // Force validation for all fields on submit
    const errors = await validateForm(formData, newErrors);
    if (Object.values(errors).includes(true)) {
        newErrors = errors;
        alert('Please fill all required fields');
        return;
    }
    if (!captchaVerified.value) {
        alert('Please verify that you are not a robot.');
        return;
    }
    const response = await axios.post('/api/verify-recaptcha', {
        name: name.value,
        token: captchaToken.value,
    });
    if (response.data.success) {
        alert('Verification passed and data submitted!');
    }
    else {
        alert('reCAPTCHA failed.');
    }
    // Save to IndexedDB (final)
    await setIndexDb('register', { ...formData });
    alert('Registration successful:\n' + JSON.stringify(formData, null, 2));
}
;
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.form, __VLS_elements.form)({
    ...{ onSubmit: (__VLS_ctx.handleSubmit) },
});
// @ts-ignore
[handleSubmit,];
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({});
/** @type {[typeof FormInput, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(FormInput, new FormInput({
    text: "First Name",
    name: "firstname",
    errorsData: (__VLS_ctx.newErrors.firstname),
    formValueData: (__VLS_ctx.formData.firstname),
    isForm: (true),
    callBack: (__VLS_ctx.stateChange),
    required: (true),
}));
const __VLS_1 = __VLS_0({
    text: "First Name",
    name: "firstname",
    errorsData: (__VLS_ctx.newErrors.firstname),
    formValueData: (__VLS_ctx.formData.firstname),
    isForm: (true),
    callBack: (__VLS_ctx.stateChange),
    required: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
// @ts-ignore
[newErrors, formData, stateChange,];
/** @type {[typeof Spacer, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(Spacer, new Spacer({
    height: "5px",
}));
const __VLS_5 = __VLS_4({
    height: "5px",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
/** @type {[typeof FormInput, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(FormInput, new FormInput({
    text: "Last Name",
    errorsData: (__VLS_ctx.newErrors.lastname),
    formValueData: (__VLS_ctx.formData.lastname),
    isForm: (true),
    callBack: (__VLS_ctx.stateChange),
    required: (true),
}));
const __VLS_9 = __VLS_8({
    text: "Last Name",
    errorsData: (__VLS_ctx.newErrors.lastname),
    formValueData: (__VLS_ctx.formData.lastname),
    isForm: (true),
    callBack: (__VLS_ctx.stateChange),
    required: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
// @ts-ignore
[newErrors, formData, stateChange,];
/** @type {[typeof Spacer, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(Spacer, new Spacer({
    height: "5px",
}));
const __VLS_13 = __VLS_12({
    height: "5px",
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
/** @type {[typeof FormInput, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(FormInput, new FormInput({
    text: "Best Phone Number",
    inputType: "number",
    errorsData: (__VLS_ctx.newErrors.bestphonenumber),
    formValueData: (__VLS_ctx.formData.bestphonenumber),
    isForm: (true),
    callBack: (__VLS_ctx.stateChange),
    required: (true),
}));
const __VLS_17 = __VLS_16({
    text: "Best Phone Number",
    inputType: "number",
    errorsData: (__VLS_ctx.newErrors.bestphonenumber),
    formValueData: (__VLS_ctx.formData.bestphonenumber),
    isForm: (true),
    callBack: (__VLS_ctx.stateChange),
    required: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
// @ts-ignore
[newErrors, formData, stateChange,];
/** @type {[typeof Spacer, ]} */ ;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent(Spacer, new Spacer({
    height: "5px",
}));
const __VLS_21 = __VLS_20({
    height: "5px",
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
/** @type {[typeof FormInput, ]} */ ;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(FormInput, new FormInput({
    text: "Email",
    inputType: "email",
    errorsData: (__VLS_ctx.newErrors.email),
    formValueData: (__VLS_ctx.formData.email),
    isForm: (true),
    callBack: (__VLS_ctx.stateChange),
    required: (true),
}));
const __VLS_25 = __VLS_24({
    text: "Email",
    inputType: "email",
    errorsData: (__VLS_ctx.newErrors.email),
    formValueData: (__VLS_ctx.formData.email),
    isForm: (true),
    callBack: (__VLS_ctx.stateChange),
    required: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
// @ts-ignore
[newErrors, formData, stateChange,];
/** @type {[typeof GoogleRecaptcha, ]} */ ;
// @ts-ignore
const __VLS_28 = __VLS_asFunctionalComponent(GoogleRecaptcha, new GoogleRecaptcha({
    siteKey: "6LdUH_orAAAAAPLJ9A_CFkUOHUeY7Bp2LOsGlZuC",
    verified: (__VLS_ctx.onCaptchaVerified),
    expired: (__VLS_ctx.onCaptchaExpired),
}));
const __VLS_29 = __VLS_28({
    siteKey: "6LdUH_orAAAAAPLJ9A_CFkUOHUeY7Bp2LOsGlZuC",
    verified: (__VLS_ctx.onCaptchaVerified),
    expired: (__VLS_ctx.onCaptchaExpired),
}, ...__VLS_functionalComponentArgsRest(__VLS_28));
// @ts-ignore
[onCaptchaVerified, onCaptchaExpired,];
/** @type {[typeof Spacer, ]} */ ;
// @ts-ignore
const __VLS_32 = __VLS_asFunctionalComponent(Spacer, new Spacer({
    height: "5px",
}));
const __VLS_33 = __VLS_32({
    height: "5px",
}, ...__VLS_functionalComponentArgsRest(__VLS_32));
/** @type {[typeof ConnectBtn, ]} */ ;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent(ConnectBtn, new ConnectBtn({
    btnText: "Register",
}));
const __VLS_37 = __VLS_36({
    btnText: "Register",
}, ...__VLS_functionalComponentArgsRest(__VLS_36));
const __VLS_export = (await import('vue')).defineComponent({});
export default {};

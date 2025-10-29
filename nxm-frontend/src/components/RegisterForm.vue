<script setup >
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
  if (savedData) Object.assign(formData, savedData);
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
  } else {
    alert('reCAPTCHA failed.');
  }

  // Save to IndexedDB (final)
  await setIndexDb('register', { ...formData });

  alert('Registration successful:\n' + JSON.stringify(formData, null, 2));
};
</script>

<template>
  <form @submit="handleSubmit">
    <h1>REGISTER TO LEARN MORE</h1>
    <FormInput
      text="First Name"
      name="firstname"
      :errorsData="newErrors.firstname"
      :formValueData="formData.firstname"
      :isForm="true"
      :callBack="stateChange"
      :required="true"
    />
    <Spacer height="5px" />

    <FormInput
      text="Last Name"
      :errorsData="newErrors.lastname"
      :formValueData="formData.lastname"
      :isForm="true"
      :callBack="stateChange"
      :required="true"
    />
    <Spacer height="5px" />

    <FormInput
      text="Best Phone Number"
      inputType="number"
      :errorsData="newErrors.bestphonenumber"
      :formValueData="formData.bestphonenumber"
      :isForm="true"
      :callBack="stateChange"
      :required="true"
    />
    <Spacer height="5px" />

    <FormInput
      text="Email"
      inputType="email"
      :errorsData="newErrors.email"
      :formValueData="formData.email"
      :isForm="true"
      :callBack="stateChange"
      :required="true"
    />
    <GoogleRecaptcha
      siteKey="6LdUH_orAAAAAPLJ9A_CFkUOHUeY7Bp2LOsGlZuC"
      :verified="onCaptchaVerified"
      :expired="onCaptchaExpired"
    />
    <Spacer height="5px" />

    <ConnectBtn btnText="Register" />
  </form>
</template>

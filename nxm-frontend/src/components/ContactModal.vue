<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import FormInput from "@/components/FormInput.vue"
import { getIndexDb, setIndexDb, deleteIndexDbKey } from '@/services/LocalStorageService'
import { validateForm } from '@/services/ValidationService'
import RequestService from '@/services/RequestService.js';
import apiEndpoint from '@/config/apiEndpoint';
import ToastService from '@/services/ToastService';

// Props
const props = defineProps({
  modelValue: { type: Boolean, required: true },
})

const loading = ref(false);

function setLoading(value) {
  loading.value = value;
}
// Emits
const emit = defineEmits(['update:modelValue', 'submit'])

// Reactive state
const formData = reactive({
  fullname: '',
  email: '',
  message: '',
})

const newErrors = reactive({
  fullname: false,
  email: false,
  message: false,
})

// Fetch any saved data
const fetchFormData = async () => {
  const savedData = await getIndexDb('contact')
  if (savedData) Object.assign(formData, savedData)
}
onMounted(fetchFormData)

// Handle input change
const stateChange = async (e) => {
  const { name, value } = e.target
  formData[name] = value
  newErrors[name] = !value.trim();

  const userUpdateData = (await getIndexDb('contact')) || {}
  userUpdateData[name] = value
  await setIndexDb('contact', userUpdateData)
}

// Computed for v-model binding
const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

// Close modal
const closeModal = () => (showModal.value = false)

// Submit handler
const handleSubmit = async () => {
  setLoading(true);
  const errors = await validateForm(formData, newErrors)
  Object.assign(newErrors, errors)

  if (Object.values(newErrors).includes(true)) {
    setLoading(false);
    return
  }

  const payload = {
      fullname: formData.fullname,
      email: formData.email,
      message: formData.message
    };

    const options = {
      isLoading: setLoading,
      data: payload,
      token: "",
    };
  // insert to server
  const response = await RequestService.post(apiEndpoint.contact , options);
  ToastService.show({
        title: String(response.status).toUpperCase(),
        message: response.status ? response.message : "Email Exist, Error inserting data",
        isSuccess: response.status ?? true,
        position: 'top',
        isDismisable: true
  });
  // 
  if(response.status){
    await deleteIndexDbKey('contact')
    Object.keys(formData).forEach((key) => (formData[key] = ''))
  }
  emit('submit')
  showModal.value = false
}
</script>

<template>
  <transition name="bottom-sheet">
    <div v-if="showModal" class="overlay">
      <div class="modal-container">
        <button class="close-btn" @click="closeModal">&times;</button>
        <h2 class="modal-title">Contact Ben</h2>

        <form @submit.prevent="handleSubmit" class="modal-form">

          <div class="form-group">
            <FormInput
                text="Full Name"
                inputType="text"
                :errorsData="newErrors.fullname"
                :formValueData="formData.fullname"
                :isForm="true"
                :callBack="stateChange"
                :required="true"
                />
          </div>

          <div class="form-group">
            <FormInput
                text="Email"
                inputType="email"
                :errorsData="newErrors.email"
                :formValueData="formData.email"
                :isForm="true"
                :callBack="stateChange"
                :required="true"
                />
          </div>

          <div class="form-group">
            <FormInput
                text="Message"
                inputType="text"
                :errorsData="newErrors.message"
                :formValueData="formData.message"
                :isTextArea="true"
                :callBack="stateChange"
                :required="true"
                />
          </div>
          <div class="button-wrap">
            <button v-if="!loading" type="submit" class="submit-btn">Send Message</button>
            <button v-else disabled>Loading..</button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>
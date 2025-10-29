<template>
  <section class="recaptcha-container">
    <div ref="recaptchaContainer" class="g-recaptcha"></div>
  </section>
</template>

<script setup>
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
    if (!recaptchaContainer.value) return;

    widgetId = grecaptcha.render(recaptchaContainer.value, {
      sitekey: props.siteKey,
      callback: (response) => emit("verified", response),
      "expired-callback": () => emit("expired"),
    });
  } catch (err) {
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
</script>

<style scoped>
.recaptcha-container {
  display: block;
  width: 100%;
  min-height: 100px;
  background-color: #f8f9fbcb;
  margin: 1rem auto;
  box-shadow: 0px 0px 20px 3px #f8f9fbcb;
  border-radius: 5px;
}
</style>

<script setup>
import sitename from "@/assets/images/sitename.png";
import ConnectBtn from '@/components/ConnectBtn.vue';
import CustomAnimation from '@/components/CustomAnimation.vue';
import { ref } from 'vue';
import ContactModal from './ContactModal.vue';

// Modal state
const showContactModal = ref(false)

// Open modal
const openContactModal = () => {
  showContactModal.value = true
}

// Handle submit (from modal)
const handleContactSubmit = () => {
  // alert('Form submitted successfully ✅')
}
</script>

<template>
    <section class="learnmore-main-wrap">
        <CustomAnimation>
        <div class="learnmore-container">
            <h1>WOULD YOU LIKE TO LEARN MORE?</h1>
            <p>
                <ConnectBtn :btnImg="sitename" :method="openContactModal" btn-text="Connect with Ben" textAlign="right"/>
            </p>
        </div>
        </CustomAnimation>
        <ContactModal
      v-model="showContactModal"
      @submit="handleContactSubmit"
    />
    </section>
</template>
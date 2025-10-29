
<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <!-- Header / Navbar -->
    <Navbar />
    <!-- Main content area -->
    <RouterView />
    <!-- Footer -->
    <Footer />
  </div>
</template>
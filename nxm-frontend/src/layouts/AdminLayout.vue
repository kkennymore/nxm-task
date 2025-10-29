
<script setup>
import AdminNavbar from '../components/AdminNavbar.vue';
import Footer from '../components/Footer.vue';
import { RouterView } from 'vue-router';

// You can import composables, stores, etc. here if needed
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <!-- Header / Navbar -->
    <AdminNavbar />
    <!-- Main content area -->
    <main class="p-6">
      <RouterView />
    </main>
    <!-- Footer -->
    <Footer />
  </div>
</template>
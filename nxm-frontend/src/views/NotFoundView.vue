<script setup lang="ts">
import apiEndpoint from '@/router/appEndpoint';
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => router.push(apiEndpoint.home);
</script>

<template>
  <section
    class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
  >
    <!-- Floating glowing circles -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </div>

    <!-- Logo -->
    <!-- <img
      :src="logo"
      alt="Logo"
      class="w-24 h-24 mb-8 animate-bounce drop-shadow-lg"
    /> -->

    <!-- 404 Text -->
    <h1
      class="text-8xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4"
    >
      404
    </h1>

    <p class="text-2xl md:text-3xl font-semibold mb-6">
      Oops! The page you’re looking for doesn’t exist.
    </p>

    <button
      @click="goHome"
      class="mt-4 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      Go Home
    </button>

    <!-- Decorative bottom glow -->
    <div class="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
  </section>
</template>

<style scoped>
/* Subtle animation for logo */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
img {
  animation: float 3s ease-in-out infinite;
}
</style>

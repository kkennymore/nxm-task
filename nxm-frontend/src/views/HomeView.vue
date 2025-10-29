<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import Banner from '@/components/Banner.vue';
import Area4 from '@/components/Area4.vue';
import Area2 from '@/components/Area2.vue';
import Influencer from '@/components/Influencer.vue';
import LearnMore from '@/components/LearnMore.vue';
import Footer from '@/components/Footer.vue';
import FormSection from '@/components/FormSection.vue';

const userState = reactive({
  isLoading: false,
  data: {
    userId: "728637283",
    username: "Usiobaifo Kenneth",
    email: "kenneth@yahoo.com"
  }
});

// When the page is mounted
onMounted(() => {
  console.log(JSON.stringify(userState, null, 2));
});
</script>

<template>
  <section class="home-main-wrap">
    <!-- banner section -->
    <Banner/>
    <!-- area 2 section-->
    <Area2/>
    <!-- Area4 section -->
    <Area4 />
    <!-- influencer section-->
    <Influencer/>
    <!-- learn more section -->
    <LearnMore />
    <!-- register section -->
    <FormSection/>
    <!-- footer section -->
    <Footer/>
  </section>
</template>

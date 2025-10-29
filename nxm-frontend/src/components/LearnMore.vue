<script setup lang="ts">
import sitename from "@/assets/images/sitename.png";
import ConnectBtn from './ConnectBtn.vue';
import CustomAnimation from '@/components/CustomAnimation.vue';

const learnMore = () => {

}
</script>

<template>
    <section class="learnmore-main-wrap">
        <CustomAnimation>
        <div class="learnmore-container">
            <h1>WOULD YOU LIKE TO LEARN MORE?</h1>
            <p>
                <ConnectBtn :btnImg="sitename" :method="learnMore" btn-text="Connect with Ben" textAlign="right"/>
            </p>
        </div>
        </CustomAnimation>
    </section>
</template>
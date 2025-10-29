<script setup>
import { RouterLink } from 'vue-router';
import appEndpoint from '@/config/appEndpoint';
import sitename from "@/assets/images/sitename.png";
import ConnectBtn from '@/components/ConnectBtn.vue';
import CustomAnimation from '@/components/CustomAnimation.vue';

const benPopUp = async () => {
    alert("Kenneth");
}
</script>

<template>
    <section>
        <div class="banner-container">
            <CustomAnimation>
                <div class="banner-title-wrap">
                    <h1 class="banner-title">Collagen is the Fountain of Youth</h1>
                    <h4 class="banner-subtitle">What's Your Influence?</h4>
                    <p>
                        <ConnectBtn :btnImg="sitename" :method="benPopUp" btn-text="Connect with Ben" textAlign="right" />
                    </p>
                </div>
            </CustomAnimation>
        </div>
        <div class="banner-overlay">
        </div>
    </section>
</template>
<script setup>
import user1 from "@/assets/images/user1.webp";
import user2 from "@/assets/images/user2.webp";
import user3 from "@/assets/images/user3.webp";
import CustomAnimation from '@/components/CustomAnimation.vue';
</script>

<template>
    <section class="influencer-main-wrap">
        <div class="container influencer-container">
            <h1 class="influencer-fraction">
                What’s Your Influence?
            </h1>
            <p>Is this you? Could this be you? Are you ready to be an influencer?</p>
            <div class="influencer-image-wrap">
                <CustomAnimation>
                <div class="influencer-card">
                    <img :src="user1" alt="user 1">
                    <div class="influencer-card-footer">
                        <img :src="user1" alt="user 1">
                        <div class="user-card-footer">
                            <h3>Grace Perez</h3>
                            <p>@graceperez</p>
                        </div>
                    </div>
                </div>
                </CustomAnimation>
                <CustomAnimation>
                <div class="influencer-card">
                    <img :src="user2" alt="user 1">
                    <div class="influencer-card-footer">
                        <img :src="user2" alt="user 1">
                        <div class="user-card-footer">
                            <h3>Grace Perez</h3>
                            <p>@graceperez</p>
                        </div>
                    </div>
                </div>
                </CustomAnimation>
                <CustomAnimation>
                <div class="influencer-card">
                    <img :src="user3" alt="user 1">
                    <div class="influencer-card-footer">
                        <img :src="user3" alt="user 1">
                        <div class="user-card-footer">
                            <h3>Grace Perez</h3>
                            <p>@graceperez</p>
                        </div>
                    </div>
                </div>
               </CustomAnimation>
            </div>
        </div>
    </section>
</template>
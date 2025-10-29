<script setup>
import { RouterLink } from 'vue-router';
import appEndpoint from '@/config/appEndpoint';
import a1 from "@/assets/images/a.webp";
import g17 from "@/assets/images/G17.webp";
import g19 from "@/assets/images/G19.webp";
import CustomAnimation from '@/components/CustomAnimation.vue';

</script>
<template>
    <section class="area4-container-wrap">
        <div class="container area4-container">
            <CustomAnimation>
                <div class="area-card">
                    <h2>COLLAGEN PEPTIDE EXFOLIATING GEL</h2>
                    <p>
                        Instant results with visible remove of dead cells.
                        Clinically proven to activate the skin repair process.
                        Smooths wrinkles, improves tone & elasticity.
                    </p>
                </div>
            </CustomAnimation>
            <CustomAnimation>
                <div class="area-card">
                    <img :src="a1" alt="a 1 image">
                </div>
            </CustomAnimation>
            <CustomAnimation>
                <div class="area-card">
                    <img :src="g17" alt="Group 17 image">
                </div>
            </CustomAnimation>
            <CustomAnimation>
                <div class="area-card">
                    <h2>BELLA COLLAGEN ELIXIR</h2>
                    <p>
                        Helps the body product more collagen. Backed by double blind clinical studies. Healthier skin,
                        hair, nails, joints & more.
                    </p>
                </div>
            </CustomAnimation>
            <CustomAnimation>
                <div class="area-card">
                    <h2>HYDRATING LIP PLUMPING OIL</h2>
                    <p>
                        Ultimate softness, hydration, & comfort.
                        A smooth and naturally-plump look.
                        Shine of a gloss with the benefits of a balm.
                    </p>
                </div>
            </CustomAnimation>
            <CustomAnimation>
                <div class="area-card">
                    <img :src="g19" alt="group 19 image">
                </div>
            </CustomAnimation>
        </div>
    </section>
</template>
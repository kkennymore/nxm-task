<script setup lang="ts">
import FormInput from './FormInput.vue';
import CustomAnimation from '@/components/CustomAnimation.vue';
import user from "@/assets/images/group.webp";
</script>

<template>
    <section class="register-main-wrap">
        <div class="formwrap">
            <div class="form-content">
                <CustomAnimation>
                    <img :src="user" alt="image">
                </CustomAnimation>
                <CustomAnimation>
                    <form action="">
                        <FormInput text="First Name" />
                    </form>
                </CustomAnimation>

            </div>
        </div>
    </section>
</template>
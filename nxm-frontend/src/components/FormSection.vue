<script setup>
import CustomAnimation from '@/components/CustomAnimation.vue';
import user from "@/assets/images/group.webp";
import RegisterForm from '@/components/RegisterForm.vue';
</script>

<template>
    <section class="register-main-wrap">
        <div class="formwrap">
            <div class="form-content">
                <CustomAnimation>
                    <img :src="user" alt="image">
                </CustomAnimation>
                <CustomAnimation>
                    <RegisterForm/>
                </CustomAnimation>

            </div>
        </div>
    </section>
</template>
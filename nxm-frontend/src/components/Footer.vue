<script setup>
import CustomAnimation from '@/components/CustomAnimation.vue';
</script>
<template>
    <CustomAnimation>
        <footer class="footer-main-wrap">
            <div class="container footer-content">
                <div class="copyright-section">
                    <p>Copyright © 2022 | LOGO</p>
                </div>
                <div class="footer-links">
                    <RouterLink to="">
                        Privacy Policy
                    </RouterLink>
                    <RouterLink to="">
                        Terms & Condition
                    </RouterLink>
                    <RouterLink to="">
                        Contact Us
                    </RouterLink>
                    <RouterLink to="">
                        FAQs
                    </RouterLink>
                </div>
            </div>
        </footer>
    </CustomAnimation>
</template>
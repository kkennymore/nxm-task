<script setup lang="ts">
import { RouterLink } from 'vue-router';
import apiEndpoint from '../router/appEndpoint';
import { Facebook, Linkedin, Instagram, Twitter, Menu, X } from 'lucide-vue-next';
import logo from "../assets/logo.webp";
import CustomAnimation from './CustomAnimation.vue';
</script>

<template>
  <CustomAnimation>
    <header class="header-wrap">
      <nav class="container nav">
        <!-- Logo -->
        <div class="logowrap">
          <img :src="logo" />
        </div>

        <div class="nav-link-content-wrapper">
          <span class="icon-mobile">
           <Menu :size="20" />
          </span>
          <!-- Center Navigation Links -->
          <ul class="nav-links-wrap">
            <li>
              <RouterLink :to="apiEndpoint.home">
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="apiEndpoint.shop">
                Shop
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="apiEndpoint.aboutUs">
                About Us
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="apiEndpoint.influencer">
                Be an Influencer
              </RouterLink>
            </li>
          </ul>

          <!-- Social Icons -->
          <div class="nav-social-icons-wrap">
            <a href="#">
              <Facebook :size="20" />
            </a>
            <a href="#">
              <Linkedin :size="20" />
            </a>
            <a href="#">
              <Instagram :size="20" />
            </a>
            <a href="#">
              <Twitter :size="20" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  </CustomAnimation>
</template>

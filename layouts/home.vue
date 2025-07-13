<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Logo from "../assets/images/logo.jpg";

// const showLoading = ref(true);

// onMounted(() => {
//   setTimeout(() => {
//     showLoading.value = false;
//   }, 2000); // 1.5 seconds
// });

// seo
useHead({
  title: "Sanggar Seni Mupu Art Dance",
  meta: [
    {
      name: "description",
      content:
        "Welcome to Mupu Art Dance, where the heart of Balinese tradition comes alive through the beauty of dance.",
    },
    {
      name: "keywords",
      content:
        "Mupu Art Dance, Sanggar Seni Bali, Tari Bali, Balinese Dance, Budaya Bali, Sanggar Tari Denpasar",
    },
    {
      property: "og:title",
      content: "Sanggar Seni Mupu Art Dance",
    },
    {
      property: "og:description",
      content:
        "Welcome to Mupu Art Dance, where the heart of Balinese tradition comes alive through the beauty of dance.",
    },
    {
      property: "og:image",
      content: "/og-image.jpg", // Ganti dengan URL gambar promosi atau logo
    },
    {
      property: "og:url",
      content: "https://mupuartdance.com", // Ganti dengan domain asli
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
  ],
});
</script>

<template>
  <!-- <transition name="slide-up">
    <div v-if="showLoading" class="loading">
      <img :src="Logo" alt="image" class="loading__logo" data-aos="zoom-in" />
    </div>
  </transition> -->

  <main>
    <layout-navbar />
    <ui-toup />
    <slot />
    <layout-footer />
  </main>
</template>

<style lang="scss" scoped>
main {
  position: relative;
  overflow-x: hidden;
}

*,
html {
  scroll-behavior: smooth;
}
.loading {
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 99;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  &__logo {
    width: 400px;
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.8s ease, opacity 0.8s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(0);
  opacity: 1;
}
.slide-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.slide-up-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>

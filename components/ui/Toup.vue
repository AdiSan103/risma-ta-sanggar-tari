<template>
  <button class="scroll-to-top" @click="scrollToTop">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 15l7-7 7 7"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.scroll-to-top {
  position: fixed;
  bottom: 10px; // 24px
  right: 10px; // 24px
  background-color: $color2; // green-500
  color: white;
  padding: 1rem;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  display: flex;
  transition: background-color 0.3s ease;
  z-index: 99;

  &:hover {
    background-color: $color3; // green-600
  }

  .icon {
    width: 20px; // 24px
    height: 20px; // 24px
  }
}
</style>

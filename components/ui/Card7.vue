<script lang="ts" setup>
defineProps<{
  image: string;
}>();

// import imgSample from "~/assets/images/9.jpg";
</script>
<template>
  <div class="component col">
    <div class="component__container">
      <img :src="image" alt="image" class="component__image" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.component {
  text-align: justify;
  padding: 20px 0;

  &__container {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 20px;
  }

  &__image {
    border-radius: 20px;
    object-fit: cover;
    width: 100%;
    height: 300px;
  }
}
</style>

<script lang="ts" setup>
defineProps<{
  name: string;
  role: string;
  image: string;
  desc: string;
}>();
</script>

<template>
  <div class="col component">
    <img :src="image" :alt="name" class="component__image" />
    <h4 class="component__text1">{{ name }}</h4>
    <p class="component__text2">{{ role }}</p>
    <p>{{ desc }}</p>
  </div>
</template>

<style lang="scss" scoped>
.component {
  padding: 20px;

  &__image {
    border-radius: 20px;
    object-fit: cover;
    min-height: 200px;
    width: 100%;
    margin-bottom: 20px;
  }

  &__text1 {
    font-weight: 800;
  }

  &__text2 {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
  }
}
</style>

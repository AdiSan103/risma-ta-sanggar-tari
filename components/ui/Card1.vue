<script lang="ts" setup>
defineProps<{
  imageSrc: string;
  heading: string;
  description: string;
}>();
</script>

<template>
  <div class="col component">
    <img :src="imageSrc" alt="image" class="component__image" />
    <h4 class="component__heading1">{{ heading }}</h4>
    <p class="component__desc">
      {{ description }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.component {
  padding: 20px;

  &__image {
    background-position: center;
    object-fit: cover;
    background-size: cover;
    height: 100px;
    width: 100px;
  }

  &__heading1 {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  &__desc {
    font-size: 14px;
    line-height: 1.4;
  }
}
</style>

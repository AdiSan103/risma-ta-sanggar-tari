<script lang="ts" setup>
defineProps<{
  title: string;
  description: string;
  image: string;
}>();
</script>

<template>
  <div class="col component">
    <div
      class="component__background"
      :style="{ backgroundImage: `url(${image})` }"
    >
      <div class="component__contain">
        <div></div>
        <div class="component__point"></div>
        <h5 class="component__text1">{{ title }}</h5>
      </div>
    </div>
    <p class="component__text">{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
.component {
  padding: 20px;

  &__point {
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 100px;
  }

  &__background {
    background-position: center;
    background-size: cover;
    border-radius: 20px;
  }

  &__contain {
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  &__text1 {
    color: #fff;
    font-weight: 700;
  }

  &__text {
    padding-top: 10px;
    text-align: justify;
  }
}
</style>

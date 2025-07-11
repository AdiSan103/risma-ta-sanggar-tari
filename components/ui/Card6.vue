<script lang="ts" setup>
defineProps<{
  image: string;
  title: string;
  desc: string;
}>();

// import imgSample from "~/assets/images/9.jpg";
</script>
<template>
  <div class="component col">
    <div class="component__container">
      <img :src="image" alt="image" class="component__image" />
      <div class="component__content">
        <p>Sanggar Seni Mupu Art Dance</p>
        <h5>{{ title }}</h5>
        <p>
          {{ desc }}
        </p>
        <!-- <div class="component__user">
          <img :src="imgSample" alt="image" class="component__userimage" />
          <div class="component__userdata">
            <p class="component__text">BUDI YASIM</p>
            <p class="component__text">Nov, 11 2022</p>
          </div>
        </div> -->
      </div>
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

  &__content {
    padding: 20px 10px;
  }

  &__image {
    border-radius: 20px 20px 0 0;
    object-fit: cover;
    width: 100%;
    height: 300px;
  }

  &__user {
    display: flex;
    gap: 10px;
  }

  &__userimage {
    object-fit: cover;
    width: 50px;
    border-radius: 100px;
    height: 50px;
  }

  &__text {
    margin: 0;
    padding: 0;
  }

  &__text:nth-child(2) {
    font-size: 0.7rem;
  }
}
</style>

<script lang="ts" setup>
defineProps<{
  image: string;
  text: string;
  name: string;
  stars?: number;
}>();
</script>

<template>
  <div class="component">
    <img :src="image" alt="image" class="component__image" />
    <div class="component__desc">
      <p class="component__text1">{{ text }}</p>
      <div class="component__stars">
        <Icon
          v-for="n in stars || 5"
          :key="n"
          name="mynaui:star-solid"
          style="color: #fee160; font-size: 30px"
        />
      </div>
      <p class="component__text2">{{ name }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.component {
  display: flex;
  gap: 20px;
  background-color: white;
  padding: 20px 40px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  max-width: 700px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  text-align: start;

  &__desc {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__text1 {
    max-width: 100%;
  }

  &__text2 {
    font-weight: 700;
  }

  &__image {
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 150px;
    width: 100%;
    height: 150px;
    border-radius: 100px;
  }
}

@media screen and (max-width: 600px) {
  .component {
    flex-direction: column;
  }
}
</style>

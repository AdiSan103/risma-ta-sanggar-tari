<script lang="ts" setup>
import imgSample from "~/assets/images/trophy.png";

</script>

<template>
 <div class="col component">
  <img :src="imgSample" alt="image" class="component__image">
  <h4 class="component__heading1">Expert teachers</h4>
  <p class="component">Experience the depth of knowledge from experts across all areas of yoga.</p>
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
}
</style>
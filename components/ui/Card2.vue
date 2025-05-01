<script lang="ts" setup>
import imgSample from "~/assets/images/7.jpg";

</script>

<template>
 <div class="col component">
  <div class="component__background" :style="{ backgroundImage: `url(${imgSample})` }">
   <div class="component__contain">
    <div></div> <!--for make space between -->
    <div class="component__point"></div>
    <h5 class="component__text1">Tari Legong</h5>
   </div>
  </div>
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
  color: white;
  font-weight: 700;
 }
}
</style>
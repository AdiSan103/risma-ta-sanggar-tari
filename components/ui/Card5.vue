<template>
 <div class="component">
  <img src="https://placehold.co/600x600" alt="image" class="component__image">
  <div class="component__desc">
   <p class="component__text1">Joining Mupu Art Dance was one of the best decisions I've ever made during my trip to
    Bali. The instructors are
    incredibly talented and patient, and the atmosphere is so warm and welcoming. </p>
   <div class="component__stars">
    <Icon v-for="n in 5" :key="n" name="mynaui:star-solid" style="color:orange; font-size: 30px;" />
   </div>
   <p class="component__text2">John Smith - Student</p>
  </div>
 </div>
</template>

<script setup></script>

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
  width: 150px;
  height: 150px;
  border-radius: 100px;
 }

}
</style>
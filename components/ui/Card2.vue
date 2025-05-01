<template>
 <div class="col component">
  <div class="component__background">
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
  background-image: url('https://placehold.co/600x600');
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
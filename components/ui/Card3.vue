<template>
 <div class="col component">
  <img src="https://placehold.co/600x600" alt="image" class="component__image">
  <h4 class="component__text1">Ketut Suletri</h4>
  <p>Instructor</p>
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
}
</style>
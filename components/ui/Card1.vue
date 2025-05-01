<template>
 <div class="col component">
  <img src="https://placehold.co/600x600" alt="image" class="component__image">
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
  border-radius: 100%;
 }

 &__heading1 {
  margin-top: 20px;
  margin-bottom: 20px;
 }
}
</style>
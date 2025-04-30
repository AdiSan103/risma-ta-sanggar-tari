<script setup lang="ts">
import imgBanner from "~/assets/images/13.jpg"
</script>

<template>
 <!-- navbar -->
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">Navbar</a>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
     <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Home</a>
     </li>
     <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
     </li>
     <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       Dropdown
      </a>
      <ul class="dropdown-menu">
       <li><a class="dropdown-item" href="#">Action</a></li>
       <li><a class="dropdown-item" href="#">Another action</a></li>
       <li>
        <hr class="dropdown-divider">
       </li>
       <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
     </li>
     <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Disabled</a>
     </li>
    </ul>
    <form class="d-flex" role="search">
     <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
     <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
   </div>
  </div>
 </nav>
 <!-- banner -->
 <section class="banner" :style="{ backgroundImage: `url(${imgBanner})` }">
  <div class="banner__container">
   <h1 class="banner__heading1">Sanggar Seni Mupu Art Dance</h1>
   <p class="banner__heading2">Welcome to Mupu Art Dance, where the heart of Balinese tradition comes alive through the
    beauty of dance.</p>
   <a href="#" class="btn btn-warning banner__button">Let's Learn Right Now!</a>
  </div>
 </section>
 <!-- membership -->
 <section class="membership"></section>
 <!-- offers -->
 <section class="offers"></section>
 <!-- about us -->
 <section class="aboutus"></section>
 <!-- teachers -->
 <section class="teachers"></section>
 <!-- pricing -->
 <section class="pricingd"></section>
 <!-- testimonials -->
 <section class="testimonials"></section>
 <!-- post -->
 <section class="post"></section>
 <!-- contact us -->
 <section class="contactus"></section>
 <!-- footer -->
 <footer>
 </footer>
</template>

<style lang="scss" scoped>
@import '~/assets/main.scss';

// default
// banner
.banner {
 background-position: center;
 background-size: cover;

 &__container {
  min-height: 80vh;
  width: 100%;
  background-image: linear-gradient(to left, black, rgba(0, 0, 0, 0));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 }

 &__heading1 {
  color: white;
  font-weight: 800;
 }

 &__heading2 {
  color: white;
  max-width: 600px;
  text-align: center;
 }
}
</style>
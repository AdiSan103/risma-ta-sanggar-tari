<script setup lang="ts">
import Logo from "../../assets/images/logo.jpg";
</script>
<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img :src="Logo" alt="image" class="navbar__logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="/#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#aboutus">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#program">Program</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#contactus">Contact Us</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <a
            href="https://wa.me/6285791585816"
            class="btn btn-warning banner__button"
            target="_blank"
            >Contact Us
            <Icon name="tabler:brand-whatsapp" />
          </a>
        </form>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar__logo {
  width: 50px;
}
</style>

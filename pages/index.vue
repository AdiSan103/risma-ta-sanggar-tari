<script setup lang="ts">
import imgBanner from "~/assets/images/13.jpg";

// Create 10 slides
const containerRef = ref(null);
const swiper = useSwiper(containerRef);

onMounted(() => {
   // Access Swiper instance
   // Read more about Swiper instance: https://swiperjs.com/swiper-api#methods--properties
   console.log(swiper.instance);
});
</script>

<template>
   <!-- navbar -->
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
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
               <li class="nav-itwn">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                     aria-expanded="false">
                     Dropdown
                  </a>
                  <ul class="dropdown-menu">
                     <li><a class="dropdown-item" href="#">Action</a></li>
                     <li><a class="dropdown-item" href="#">Another action</a></li>
                     <li>
                        <hr class="dropdown-divider" />
                     </li>
                     <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
               </li>
               <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
               </li>
            </ul>
            <form class="d-flex" role="search">
               <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
               <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
         </div>
      </div>
   </nav>
   <!-- banner -->
   <section class="banner" :style="{ backgroundImage: `url(${imgBanner})` }">
      <div class="banner__container">
         <h1 class="banner__text1">Sanggar Seni Mupu Art Dance</h1>
         <p class="banner__text2">
            Welcome to Mupu Art Dance, where the heart of Balinese tradition comes alive
            through the beauty of dance.
         </p>
         <a href="#" class="btn btn-warning banner__button">Let's Learn Right Now!</a>
      </div>
   </section>
   <!-- membership -->
   <section class="membership">
      <div class="container">
         <h2 class="membership__text1">membership <span>Benefits</span></h2>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
         <div class="row row-cols-lg-3 row-cols-1 membership__cards">
            <ui-card1 />
            <ui-card1 />
            <ui-card1 />
         </div>
      </div>
   </section>
   <!-- offers -->
   <section class="offers">
      <div class="container">
         <h2 class="offers__text1"><span>Classes</span> We Offer</h2>
         <div class="row row-cols-lg-3 row-cols-1 offers__cards">
            <ui-card2 />
            <ui-card2 />
            <ui-card2 />
         </div>
      </div>
   </section>
   <!-- about us -->
   <section class="aboutus">
      <h2 class="aboutus__text1">About Us</h2>
      <div class="container">
         <div class="row row-cols-lg-2 row-cols-1 aboutus__container">
            <div class="col">
               <img :src="imgBanner" alt="image" class="aboutus__image" />
            </div>
            <div class="col">
               <h2>Welcome To Mpu Art Dance</h2>
               <p>
                  At our studio, we invite you to experience the vibrant spirit of Bali,
                  learning the graceful movements and deep cultural meaning behind each dance.
                  Whether you are a beginner or a seasoned dancer, our programs are designed to
                  inspire and connect you with the true soul of Balinese heritage.
               </p>
               <a href="#" class="btn btn-warning banner__button">Let's Learn Right Now!</a>
            </div>
         </div>
      </div>
   </section>
   <!-- teachers -->
   <section class="teachers">
      <div class="container">
         <h2 class="teachers__text1">Meet Our<span>Teachers</span></h2>
         <div class="row row-cols-lg-3 row-cols-1 teachers__cards">
            <ui-card3 />
            <ui-card3 />
            <ui-card3 />
         </div>
         <a href="#" class="btn btn-warning banner__button">See More!
            <Icon name="tabler:brand-whatsapp" />
         </a>
      </div>
   </section>
   <!-- pricing -->
   <section class="pricing">
      <div class="container">
         <h2 class="pricing__text1">Pricing Plan</h2>
         <div class="row row-cols-lg-3 row-cols-1 pricing__cards">
            <ui-card4 />
            <ui-card4 />
            <ui-card4 />
         </div>
      </div>
   </section>
   <!-- testimonials -->
   <section class="testimonials">
      <div class="container">
         <h2 class="testimonials__text1">Testimonials</h2>
         <p class="testimonials__text2">what members are saying</p>
         <!-- slider -->
         <div class="testimonials__container">
            <ClientOnly>
               <swiper-container ref="containerRef" :navigation="true" :pagination="true">
                  <swiper-slide>
                     <ui-card5 />
                  </swiper-slide>
                  <swiper-slide>
                     <ui-card5 />
                  </swiper-slide>
                  <swiper-slide>
                     <ui-card5 />
                  </swiper-slide>
               </swiper-container>
            </ClientOnly>
         </div>
      </div>
   </section>
   <!-- post -->
   <section class="post">
      <div class="post__container">
         <div class="container">
            <h2 class="post__text1">latest post & Documentation</h2>
            <div class="row row-cols-lg-3 row-cols-1 post__cards">
               <ui-card6 />
               <ui-card6 />
               <ui-card6 />
            </div>
            <div class="post__button">
               <a href="#" class="btn btn-warning">See More!
                  <Icon name="tabler:brand-whatsapp" />
               </a>
            </div>
         </div>
      </div>
   </section>
   <!-- contact us -->
   <section class="contactus">
      <div class="container">
         <div class="contactus__container">
            <h2>Any Question?<span>Let's Contact Us</span></h2>
            <p>
               Join us and embark on a captivating journey through the arts, culture, and
               spirit of Bali!
            </p>
            <div>
               <input type="text" />
               <a href="#" class="btn btn-warning">Send Whatsapp
                  <Icon name="tabler:brand-whatsapp" />
               </a>
            </div>
         </div>
      </div>
   </section>
   <!-- Footer -->
   <footer class="text-center text-lg-start text-white" style="background-color: #1c2331">
      <!-- Section: Social media -->
      <section class="d-flex justify-content-between p-4" style="background-color: #6351ce">
         <!-- Left -->
         <div class="me-5">
            <span>Get connected with us on social networks:</span>
         </div>
         <!-- Left -->

         <!-- Right -->
         <div>
            <a href="#" class="text-white me-4">
               <Icon name="fa6-brands:facebook-f" />
            </a>
            <a href="#" class="text-white me-4">
               <Icon name="fa6-brands:twitter" />
            </a>
            <a href="#" class="text-white me-4">
               <Icon name="fa6-brands:google" />
            </a>
            <a href="#" class="text-white me-4">
               <Icon name="fa6-brands:instagram" />
            </a>
            <a href="#" class="text-white me-4">
               <Icon name="fa6-brands:linkedin" />
            </a>
            <a href="#" class="text-white me-4">
               <Icon name="fa6-brands:github" />
            </a>
         </div>
         <!-- Right -->
      </section>
      <!-- Section: Social media -->

      <!-- Section: Links  -->
      <section class="">
         <div class="container text-center text-md-start mt-5">
            <!-- Grid row -->
            <div class="row mt-3">
               <!-- Grid column -->
               <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <!-- Content -->
                  <h6 class="text-uppercase fw-bold">Company name</h6>
                  <hr class="mb-4 mt-0 d-inline-block mx-auto"
                     style="width: 60px; background-color: #7c4dff; height: 2px" />
                  <p>
                     Here you can use rows and columns to organize your footer content. Lorem
                     ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
               </div>
               <!-- Grid column -->

               <!-- Grid column -->
               <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <!-- Links -->
                  <h6 class="text-uppercase fw-bold">Products</h6>
                  <hr class="mb-4 mt-0 d-inline-block mx-auto"
                     style="width: 60px; background-color: #7c4dff; height: 2px" />
                  <p>
                     <a href="#!" class="text-white">MDBootstrap</a>
                  </p>
                  <p>
                     <a href="#!" class="text-white">MDWordPress</a>
                  </p>
                  <p>
                     <a href="#!" class="text-white">BrandFlow</a>
                  </p>
                  <p>
                     <a href="#!" class="text-white">Bootstrap Angular</a>
                  </p>
               </div>
               <!-- Grid column -->

               <!-- Grid column -->
               <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <!-- Links -->
                  <h6 class="text-uppercase fw-bold">Useful links</h6>
                  <hr class="mb-4 mt-0 d-inline-block mx-auto"
                     style="width: 60px; background-color: #7c4dff; height: 2px" />
                  <p>
                     <a href="#!" class="text-white">Your Account</a>
                  </p>
                  <p>
                     <a href="#!" class="text-white">Become an Affiliate</a>
                  </p>
                  <p>
                     <a href="#!" class="text-white">Shipping Rates</a>
                  </p>
                  <p>
                     <a href="#!" class="text-white">Help</a>
                  </p>
               </div>
               <!-- Grid column -->

               <!-- Grid column -->
               <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <!-- Links -->
                  <h6 class="text-uppercase fw-bold">Contact</h6>
                  <hr class="mb-4 mt-0 d-inline-block mx-auto"
                     style="width: 60px; background-color: #7c4dff; height: 2px" />
                  <p class="flex items-center text-white mb-2">
                     <Icon name="fa6-solid:house" class="mr-3" /> New York, NY 10012, US
                  </p>
                  <p class="flex items-center text-white mb-2">
                     <Icon name="fa6-solid:envelope" class="mr-3" /> info@example.com
                  </p>
                  <p class="flex items-center text-white mb-2">
                     <Icon name="fa6-solid:phone" class="mr-3" /> + 01 234 567 88
                  </p>
                  <p class="flex items-center text-white mb-2">
                     <Icon name="fa6-solid:print" class="mr-3" /> + 01 234 567 89
                  </p>
               </div>
               <!-- Grid column -->
            </div>
            <!-- Grid row -->
         </div>
      </section>
      <!-- Section: Links  -->

      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
         © 2020 Copyright:
         <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
      <!-- Copyright -->
   </footer>
</template>
ASDA

<style lang="scss" scoped>
@import "~/assets/main.scss";

// default
// banner
.banner {
   background-position: center;
   background-size: cover;

   &__container {
      padding: 40px 10px;
      min-height: 80vh;
      width: 100%;
      background-image: linear-gradient(to left, black, rgba(0, 0, 0, 0));
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }

   &__text1 {
      color: white;
      font-weight: 800;
   }

   &__text2 {
      color: white;
      max-width: 600px;
      text-align: center;
   }
}

// membership
.membership {
   text-align: center;
   padding: 40px 10px;
   background-color: $color1;

   &__text1 {
      font-weight: 800;

      span {
         color: $color2;
         font-weight: 800;
      }
   }

   &__cards {
      padding: 40px 0;
   }
}

// offers
.offers {
   padding: 40px 10px;

   &__text2 {
      text-align: center;
   }

   &__text1 {
      font-weight: 800;
      text-align: center;
      margin-bottom: 40px;

      span {
         font-weight: 800;
         color: $color2;
      }
   }
}

// aboutus
.aboutus {
   padding: 40px 10px;
   background-color: $color1;

   &__text1 {
      text-align: center;
      font-weight: 800;
      margin-bottom: 40px;
   }

   &__image {
      width: 100%;
      border-radius: 20px;
   }

   &__container {
      justify-content: center;
      align-items: center;
   }
}

// teachers
.teachers {
   text-align: center;
   padding: 40px 10px;

   &__text1 {
      font-weight: 800;
      margin-bottom: 20px;

      span {
         color: $color2;
         font-weight: 800;
      }
   }
}

// pricing
.pricing {
   padding: 40px 10px;
   background-color: $color1;

   &__text1 {
      text-align: center;
      font-weight: 800;
      margin-bottom: 20px;
   }
}

// testimonials
.testimonials {
   background-color: white;
   text-align: center;
   padding: 40px 10px;

   &__container {
      padding: 10px 0;
   }

   &__text1 {
      font-weight: 700;
   }

   swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
   }
}

// post
.post {
   padding: 40px 10px;
   background-color: $color1;

   &__text1 {
      text-align: center;
      font-weight: 800;
   }

   &__cards {
      margin-top: 40px;
   }

   &__button {
      display: flex;
      justify-content: center;
      margin: 30px auto;
   }
}

// contact us
.contactus {
   padding: 40px 10px;
   background-color: $color1;

   &__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
}

// footer
footer {
   background-color: black;
   color: white;
}

footer a {
   color: white !important;
   text-decoration: none;
}
</style>

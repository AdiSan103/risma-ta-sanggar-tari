<script setup lang="ts">
import imgBanner from "~/assets/images/13.jpg";

// meta
definePageMeta({
   layout: "home",
});

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
   <!-- banner -->
   <section id="home" class="banner" :style="{ backgroundImage: `url(${imgBanner})` }">
      <div class="banner__container">
         <h1 class="banner__text1" data-aos="fade-up">Sanggar Seni Mupu Art Dance</h1>
         <p class="banner__text2" data-aos="fade-up">
            Welcome to Mupu Art Dance, where the heart of Balinese tradition comes alive
            through the beauty of dance.
         </p>
         <a href="#" class="btn btn-warning banner__button" data-aos="zoom-in">Let's Learn Right Now!</a>
      </div>
   </section>
   <!-- membership -->
   <section class="membership">
      <div class="container">
         <h2 class="membership__text1">membership <span>Benefits</span></h2>
         <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
         <div class="row row-cols-lg-3 row-cols-1 membership__cards">
            <ui-card1 data-aos="zoom-in" />
            <ui-card1 data-aos="zoom-in" />
            <ui-card1 data-aos="zoom-in" />
         </div>
      </div>
   </section>
   <!-- offers -->
   <section id="program" class="offers">
      <div class="container">
         <h2 class="offers__text1"><span>Classes</span> We Offer</h2>
         <div class="row row-cols-lg-3 row-cols-1 offers__cards">
            <ui-card2 data-aos="zoom-in" />
            <ui-card2 data-aos="zoom-in" />
            <ui-card2 data-aos="zoom-in" />
         </div>
      </div>
   </section>
   <!-- about us -->
   <section id="aboutus" class="aboutus">
      <h2 class="aboutus__text1">About Us</h2>
      <div class="container">
         <div class="row row-cols-lg-2 row-cols-1 aboutus__container">
            <div class="col aboutus__left">
               <img :src="imgBanner" alt="image" class="aboutus__image" data-aos="zoom-in" />
            </div>
            <div class="col aboutus__right">
               <h2>Welcome To Mupu Art Dance</h2>
               <p>
                  At our studio, we invite you to experience the vibrant spirit of Bali,
                  learning the graceful movements and deep cultural meaning behind each dance.
                  Whether you are a beginner or a seasoned dancer, our programs are designed to
                  inspire and connect you with the true soul of Balinese heritage.
               </p>
               <button href="#" class="btn btn-warning banner__button">Let's Learn Right
                  Now!</button>
            </div>
         </div>
      </div>
   </section>
   <!-- teachers -->
   <section class="teachers">
      <div class="container">
         <h2 class="teachers__text1">Meet Our<span>Teachers</span></h2>
         <div class="row row-cols-lg-3 row-cols-1 teachers__cards">
            <ui-card3 data-aos="zoom-in" />
            <ui-card3 data-aos="zoom-in" />
            <ui-card3 data-aos="zoom-in" />
         </div>
         <a href="#" class="btn btn-warning banner__button">See More!
            <Icon name="tabler:brand-whatsapp" />
         </a>
      </div>
   </section>
   <!-- pricing -->
   <section id="program" class="pricing">
      <div class="container">
         <h2 class="pricing__text1">Pricing Plan</h2>
         <div class="row row-cols-lg-3 row-cols-1 pricing__cards">
            <ui-card4 data-aos="zoom-in" />
            <ui-card4 data-aos="zoom-in" />
            <ui-card4 data-aos="zoom-in" />
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
               <ui-card6 data-aos="fade-up" />
               <ui-card6 data-aos="fade-up" />
               <ui-card6 data-aos="fade-up" />
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
   <section id="contactus" class="contactus">
      <div class="container">
         <div class="contactus__container">
            <h2>Any Question?<span>Let's Contact Us</span></h2>
            <p>
               Join us and embark on a captivating journey through the arts, culture, and
               spirit of Bali!
            </p>
            <div class="contactus__form">
               <input type="text" class="contactus__input" placeholder="send us a message..." />
               <button class="btn btn-warning contactus__button">Send Whatsapp
                  <Icon name="tabler:brand-whatsapp" />
               </button>
            </div>
         </div>
      </div>
   </section>
</template>

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

@media screen and (max-width: 600px) {
   .banner {
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

   &__container {
      gap: 20px;
   }

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

@media screen and (max-width: 600px) {
   .aboutus {
      text-align: center;
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
   padding: 40px 10px 80px;
   background-color: $color1;

   &__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }

   &__input {
      border: none;
      outline: none;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
      padding: 10px 80px 10px 20px;
      border-radius: 100px 0 0 100px;
      margin-right: -50px;
   }

   &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      height: 45px;
      border-radius: 100px;
   }

   &__form {
      display: flex;
   }
}

@media screen and (max-width: 600px) {
   .contactus {
      text-align: center;
   }

   .contactus__input {
      border-radius: 100px;
      margin-right: 0;
   }

   .contactus__form {
      gap: 20px;
      flex-direction: column;
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

<script setup lang="ts">
import imgBanner from "~/assets/images/13.jpg";
import imgSample2 from "~/assets/images/trophy.png";
// import imgSample from "~/assets/images/7.jpg"; // Bisa ganti tiap gambar
import imgBaris from "~/assets/images/dances/tari-baris.jpg";
import imgCondong from "~/assets/images/dances/tari-condong.jpg";
import imgPendet from "~/assets/images/dances/tari-pendet.jpg";
import imgPuspanjali from "~/assets/images/dances/tari-puspanjali.jpg";
import imgWirayudi from "~/assets/images/dances/tari-wirayud.jpg";
import imgMbYayang from "~/assets/images/tutor/mbok-yayang.jpg";
import imgDokum1 from "~/assets/images/dokumentasi/1.jpg";
import imgDokum2 from "~/assets/images/dokumentasi/2.jpg";
import imgDokum3 from "~/assets/images/dokumentasi/3.jpg";
import imgDokum4 from "~/assets/images/dokumentasi/4.jpg";
import imgDokum5 from "~/assets/images/dokumentasi/5.jpg";
import imgDokum6 from "~/assets/images/dokumentasi/6.jpg";
import imgDokum7 from "~/assets/images/dokumentasi/7.jpg";
import imgDokum8 from "~/assets/images/dokumentasi/8.jpg";
import imgDokum9 from "~/assets/images/dokumentasi/9.jpg";
import imgDokum10 from "~/assets/images/dokumentasi/10.jpg";
import imgDokum11 from "~/assets/images/dokumentasi/11.jpg";
import imgDokum12 from "~/assets/images/dokumentasi/12.jpg";
import imgDokum13 from "~/assets/images/dokumentasi/13.jpg";
import imgDokum14 from "~/assets/images/dokumentasi/14.jpg";
import imgDokum15 from "~/assets/images/dokumentasi/15.jpg";
import imgDokum16 from "~/assets/images/dokumentasi/16.jpg";
import imgDokum17 from "~/assets/images/dokumentasi/17.jpg";
import imgDokum18 from "~/assets/images/dokumentasi/18.jpg";
import img14 from "~/assets/images/14.jpg";
import img15 from "~/assets/images/15.jpg";
import img16 from "~/assets/images/16.jpg";
// meta
definePageMeta({
  layout: "home",
});

// Create 10 slides
const containerRef = ref(null);
const swiper = useSwiper(containerRef);

//
const imagedokum = [
  { image: imgDokum1 },
  { image: imgDokum2 },
  { image: imgDokum3 },
  { image: imgDokum4 },
  { image: imgDokum5 },
  { image: imgDokum6 },
  { image: imgDokum7 },
  { image: imgDokum8 },
  { image: imgDokum9 },
  { image: imgDokum10 },
  { image: imgDokum11 },
  { image: imgDokum12 },
  { image: imgDokum13 },
  { image: imgDokum14 },
  { image: imgDokum15 },
  { image: imgDokum16 },
  { image: imgDokum17 },
  { image: imgDokum18 },
];

onMounted(() => {
  // Access Swiper instance
  // Read more about Swiper instance: https://swiperjs.com/swiper-api#methods--properties
  console.log(swiper.instance);
});
</script>

<template>
  <!-- banner -->
  <section id="home" class="banner">
    <iframe
      src="https://www.youtube.com/embed/55zXtvolmtE?autoplay=1&mute=1&loop=1&playlist=55zXtvolmtE&controls=0&showinfo=0&modestbranding=1&rel=0"
      allow="autoplay; encrypted-media"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      class="banner__video"
    ></iframe>
    <div class="banner__container">
      <h1 class="banner__text1" data-aos="fade-up">
        Sanggar Seni Mupu Art Dance
      </h1>
      <p class="banner__text2" data-aos="fade-up">
        {{ $t("home.description") }}
      </p>
      <a href="#" class="btn btn-warning banner__button" data-aos="zoom-in">
        {{ $t("home.button") }}
      </a>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="banner__wave"
    >
      <path
        fill="#F7F7F7"
        fill-opacity="1"
        d="M0,128L21.8,128C43.6,128,87,128,131,112C174.5,96,218,64,262,85.3C305.5,107,349,181,393,197.3C436.4,213,480,171,524,154.7C567.3,139,611,149,655,181.3C698.2,213,742,267,785,266.7C829.1,267,873,213,916,202.7C960,192,1004,224,1047,240C1090.9,256,1135,256,1178,261.3C1221.8,267,1265,277,1309,256C1352.7,235,1396,181,1418,154.7L1440,128L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
      ></path>
    </svg>
  </section>
  <!-- membership -->
  <section class="membership">
    <div class="container">
      <h2 class="membership__text1">
        {{ $t("benefit.title") }}
      </h2>
      <p>{{ $t("benefit.description") }}</p>
      <div class="row row-cols-lg-3 row-cols-1 membership__cards">
        <ui-card1
          data-aos="zoom-in"
          :imageSrc="imgSample2"
          :heading="$t('benefit.items[0].title')"
          :description="$t('benefit.items[0].description')"
        />
        <ui-card1
          data-aos="zoom-in"
          :imageSrc="imgSample2"
          :heading="$t('benefit.items[1].title')"
          :description="$t('benefit.items[1].description')"
        />
        <ui-card1
          data-aos="zoom-in"
          :imageSrc="imgSample2"
          :heading="$t('benefit.items[2].title')"
          :description="$t('benefit.items[2].description')"
        />
      </div>
    </div>
  </section>
  <!-- offers -->
  <section id="program" class="offers">
    <div class="container">
      <h2 class="offers__text1">{{ $t("offer.title") }}</h2>
      <div class="row row-cols-lg-3 row-cols-1 offers__cards">
        <ui-card2
          data-aos="zoom-in"
          :title="$t('offer.items[0].title')"
          :description="$t('offer.items[0].description')"
          :image="imgPendet"
        />
        <ui-card2
          data-aos="zoom-in"
          :title="$t('offer.items[1].title')"
          :description="$t('offer.items[1].description')"
          :image="imgCondong"
        />
        <ui-card2
          data-aos="zoom-in"
          :title="$t('offer.items[2].title')"
          :description="$t('offer.items[2].description')"
          :image="imgBaris"
        />
        <ui-card2
          data-aos="zoom-in"
          :title="$t('offer.items[3].title')"
          :description="$t('offer.items[3].description')"
          :image="imgPuspanjali"
        />
        <ui-card2
          data-aos="zoom-in"
          :title="$t('offer.items[4].title')"
          :description="$t('offer.items[4].description')"
          :image="imgWirayudi"
        />
      </div>
    </div>
  </section>
  <!-- about us -->
  <section id="aboutus" class="aboutus">
    <h2 class="aboutus__text1">{{ $t("aboutus.title") }}</h2>
    <div class="container">
      <div class="row row-cols-lg-2 row-cols-1 aboutus__container">
        <div class="col aboutus__left">
          <iframe
            src="https://www.youtube.com/embed/55zXtvolmtE?playlist=55zXtvolmtE&showinfo=0&modestbranding=1&rel=0"
            allow="autoplay; encrypted-media"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            class="aboutus__video"
          ></iframe>
        </div>
        <div class="col aboutus__right">
          {{ $t("aboutus.description") }}
        </div>
      </div>
    </div>
  </section>
  <!-- teachers -->
  <section class="teachers">
    <div class="container">
      <h2 class="teachers__text1">{{ $t("tutor.title") }}</h2>
      <div
        class="row row-cols-lg-2 row-cols-1 teachers__cards justify-content-center"
      >
        <ui-card3
          data-aos="zoom-in"
          :name="$t('tutor.items[0].title')"
          :role="$t('tutor.items[0].job')"
          :image="imgMbYayang"
          :desc="$t('tutor.items[0].description')"
        />
      </div>
      <a href="#" class="btn btn-warning banner__button">
        <Icon name="tabler:brand-whatsapp" />
      </a>
    </div>
  </section>
  <!-- pricing -->
  <section id="program" class="pricing">
    <div class="container">
      <h2 class="pricing__text1">{{ $t("pricings.title") }}</h2>
      <div class="row row-cols-lg-2 row-cols-1 pricing__cards">
        <ui-card4
          data-aos="zoom-in"
          :title="$t('pricings.items[0].label')"
          :price="$t('pricings.items[0].price')"
          :schedule="$t('pricings.items[0].date')"
          :mentor="$t('pricings.items[0].teacher')"
          :phone="$t('pricings.items[0].call')"
          :desc="$t('pricings.items[0].desc')"
          :dances="$t('pricings.items[0].desc2')"
          :desc3="$t('pricings.items[0].desc3')"
        />
        <ui-card4
          data-aos="zoom-in"
          :title="$t('pricings.items[1].label')"
          :price="$t('pricings.items[1].price')"
          :schedule="$t('pricings.items[1].date')"
          :mentor="$t('pricings.items[1].teacher')"
          :phone="$t('pricings.items[1].call')"
          :desc="$t('pricings.items[1].desc')"
          :dances="$t('pricings.items[1].desc2')"
          :desc3="$t('pricings.items[1].desc3')"
        />
      </div>
    </div>
  </section>
  <!-- testimonials -->
  <section class="testimonials">
    <div class="container">
      <h2 class="testimonials__text1">{{ $t("testimoni.title") }}</h2>
      <p class="testimonials__text2">
        {{ $t("testimoni.desc") }}
      </p>
      <!-- slider -->
      <div class="testimonials__container">
        <ClientOnly>
          <swiper-container
            ref="containerRef"
            :navigation="true"
            :pagination="true"
          >
            <swiper-slide>
              <ui-card5
                :image="imgSample2"
                :text="$t('testimoni.items[0].feedback')"
                :name="$t('testimoni.items[0].name')"
                :stars="5"
              />
            </swiper-slide>
            <swiper-slide>
              <ui-card5
                :image="imgSample2"
                :text="$t('testimoni.items[1].feedback')"
                :name="$t('testimoni.items[1].name')"
                :stars="4"
              />
            </swiper-slide>
            <swiper-slide>
              <ui-card5
                :image="imgSample2"
                :text="$t('testimoni.items[2].feedback')"
                :name="$t('testimoni.items[2].name')"
                :stars="5"
              />
            </swiper-slide>
            <swiper-slide>
              <ui-card5
                :image="imgSample2"
                :text="$t('testimoni.items[3].feedback')"
                :name="$t('testimoni.items[3].name')"
                :stars="5"
              />
            </swiper-slide>
            <swiper-slide>
              <ui-card5
                :image="imgSample2"
                :text="$t('testimoni.items[4].feedback')"
                :name="$t('testimoni.items[4].name')"
                :stars="4"
              />
            </swiper-slide>
            <swiper-slide>
              <ui-card5
                :image="imgSample2"
                :text="$t('testimoni.items[5].feedback')"
                :name="$t('testimoni.items[5].name')"
                :stars="5"
              />
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
        <h2 class="post__text1">{{ $t("activities.title") }}</h2>
        <div class="row row-cols-lg-3 row-cols-1 post__cards">
          <ui-card6
            :image="img14"
            :title="$t('activities.items[0].title')"
            :desc="$t('activities.items[0].desc')"
            data-aos="fade-up"
          />
          <ui-card6
            :image="img15"
            :title="$t('activities.items[1].title')"
            :desc="$t('activities.items[1].desc')"
            data-aos="fade-up"
          />
          <ui-card6
            :image="img16"
            :title="$t('activities.items[2].title')"
            :desc="$t('activities.items[2].desc')"
            data-aos="fade-up"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- documentation -->
  <section class="photo">
    <div class="container">
      <h2 class="photo__text1">{{ $t("documentation.title") }}</h2>
      <div class="row row-cols-lg-3 row-cols-1 post__cards">
        <ui-card7
          v-for="(inst, index) in imagedokum"
          :key="index"
          :image="inst.image"
          data-aos="fade-up"
        />
      </div>
    </div>
  </section>
  <!-- maps -->
  <section>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3946.300428563896!2d115.18025837501237!3d-8.470138891570556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjgnMTIuNSJTIDExNcKwMTAnNTguMiJF!5e0!3m2!1sid!2sid!4v1751948926184!5m2!1sid!2sid"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </section>
  <!-- contact us -->
  <section id="contactus" class="contactus">
    <div class="container">
      <div class="contactus__container">
        <h2>{{ $t("contactus.title") }}</h2>
        <p>
          {{ $t("contactus.desc") }}
        </p>
        <ul>
          <li>
            📍 Location:
            <a
              href="https://maps.app.goo.gl/BKXC7AkKNhjrWyL46?g_st=com.google.maps.preview.copy"
              target="_blank"
              rel="noopener noreferrer"
              >Jl. Arjuna, Br. Dajan Peken, Sembung, Kec. Mengwi, Kab. Badung</a
            >
          </li>
          <li>📞 Number Phone: <a href="tel:085791585816">085791585816</a></li>
          <li>
            📱 Social Media:
            <a
              href="https://instagram.com/mupuartcolletion"
              target="_blank"
              rel="noopener noreferrer"
              >@mupuartcolletion</a
            >
          </li>
        </ul>
        <div class="contactus__form">
          <input
            type="text"
            class="contactus__input"
            placeholder="Send us a message..."
          />
          <a
            class="btn btn-warning contactus__button"
            :href="`https://wa.me/6285791585816?text=Halo%20Mupu%20Art%20Collection%2C%20saya%20tertarik%20dan%20ingin%20bertanya...`"
            target="_blank"
          >
            Send Whatsapp
            <Icon name="tabler:brand-whatsapp" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/main.scss";

// #FEE160
// #C61D48
// #F7D7CE

// component
.btn-warning {
  background-color: #c61d48;
  color: white;
  border: #c61d48;
  outline: #c61d48;
}

// default
// banner
.banner {
  background-position: center;
  background-size: cover;
  position: relative;

  &__wave {
    position: absolute;
    bottom: 0;
    z-index: 9;
  }

  &__video {
    width: 100vw;
    min-height: 90vh;
    border: none;
  }

  &__container {
    position: absolute;
    top: 0;
    padding: 40px 10px;
    min-height: 90vh;
    width: 100%;
    background-image: linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9;
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

  &__video {
    width: 100%;
    height: 400px;
    border-radius: 30px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

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

    &__video {
      width: 100%;
      height: 300px;
      border-radius: 30px;
    }
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
    color: $color3;
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

// photo
.photo {
  &__text1 {
    text-align: center;
    padding-top: 50px;
    font-weight: 800;
    color: $color3;
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
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.05) 0px 8px 32px;
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

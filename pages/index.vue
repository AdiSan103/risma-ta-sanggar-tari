<script setup lang="ts">
import imgBanner from "~/assets/images/13.jpg";
// import imgSample from "~/assets/images/7.jpg"; // Bisa ganti tiap gambar
import imgBaris from "~/assets/images/dances/tari-baris.jpg";
import imgCondong from "~/assets/images/dances/tari-condong.jpg";
import imgPendet from "~/assets/images/dances/tari-pendet.jpg";
import imgPuspanjali from "~/assets/images/dances/tari-puspanjali.jpg";
import imgWirayudi from "~/assets/images/dances/tari-wirayud.jpg";
import imgMbYayang from "~/assets/images/tutor/mbok-yayang.jpg";

// meta
definePageMeta({
  layout: "home",
});

// Create 10 slides
const containerRef = ref(null);
const swiper = useSwiper(containerRef);

const instructors = [
  {
    name: "Mb Yayang",
    role: "Guru Tari",
    image: imgMbYayang,
  },
];

//
const dances = [
  {
    title: "Tari Pendet",
    description:
      "Tari Pendet adalah tari penyambutan khas Bali yang biasanya dibawakan oleh penari wanita dengan membawa bokor berisi bunga. Tarian ini melambangkan ungkapan selamat datang dan rasa hormat kepada para tamu atau dewa yang turun ke bumi.",
    image: imgPendet,
  },
  {
    title: "Tari Condong",
    description:
      "Tari Condong merupakan tarian pengantar dalam pertunjukan tari Legong. Gerakannya anggun dan penuh ekspresi, menggambarkan seorang dayang yang mendampingi putri raja. Tarian ini sering menjadi dasar teknik untuk penari pemula di Bali.",
    image: imgCondong,
  },
  {
    title: "Tari Baris",
    description:
      "Tari Baris adalah tarian perang tradisional Bali yang dibawakan oleh penari pria. Gerakannya tegas, gagah, dan penuh semangat, menggambarkan keberanian serta kesiapsiagaan seorang prajurit di medan perang.",
    image: imgBaris,
  },
  {
    title: "Tari Puspanjali",
    description:
      "Tari Puspanjali adalah tarian penyambutan modern yang diciptakan sebagai bentuk penghormatan kepada tamu. Dibawakan oleh sekelompok penari wanita, tarian ini menggabungkan gerak klasik dengan nuansa ramah dan penuh keindahan.",
    image: imgPuspanjali,
  },
  {
    title: "Tari Wirayuda",
    description:
      "Tari Wirayuda menggambarkan barisan prajurit kerajaan yang bersiap membela tanah air. Tarian ini dibawakan oleh kelompok penari pria dengan gerakan dinamis, menunjukkan kekompakan, kekuatan, dan jiwa kepahlawanan.",
    image: imgWirayudi,
  },
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
        Welcome to Mupu Art Dance, where the heart of Balinese tradition comes
        alive through the beauty of dance.
      </p>
      <a href="#" class="btn btn-warning banner__button" data-aos="zoom-in"
        >Let's Learn Right Now!</a
      >
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
      <h2 class="membership__text1">membership <span>Benefits</span></h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
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
        <ui-card2
          data-aos="zoom-in"
          v-for="(dance, index) in dances"
          :key="index"
          :title="dance.title"
          :description="dance.description"
          :image="dance.image"
        />
      </div>
    </div>
  </section>
  <!-- about us -->
  <section id="aboutus" class="aboutus">
    <h2 class="aboutus__text1">About Us</h2>
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
          <h2>Welcome To Mupu Art Dance</h2>
          <p>
            At our studio, we invite you to experience the vibrant spirit of
            Bali, learning the graceful movements and deep cultural meaning
            behind each dance. Whether you are a beginner or a seasoned dancer,
            our programs are designed to inspire and connect you with the true
            soul of Balinese heritage.
          </p>
          <button href="#" class="btn btn-warning banner__button">
            Let's Learn Right Now!
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- teachers -->
  <section class="teachers">
    <div class="container">
      <h2 class="teachers__text1">Meet Our<span>Teachers</span></h2>
      <div class="row row-cols-lg-3 row-cols-1 teachers__cards">
        <ui-card3
          data-aos="zoom-in"
          v-for="(inst, index) in instructors"
          :key="index"
          :name="inst.name"
          :role="inst.role"
          :image="inst.image"
        />
      </div>
      <a href="#" class="btn btn-warning banner__button"
        >See More!
        <Icon name="tabler:brand-whatsapp" />
      </a>
    </div>
  </section>
  <!-- pricing -->
  <section id="program" class="pricing">
    <div class="container">
      <h2 class="pricing__text1">Pricing Plan</h2>
      <div class="row row-cols-lg-2 row-cols-1 pricing__cards">
        <ui-card4
          data-aos="zoom-in"
          title="Les Private"
          price="Rp 75.000 / pertemuan"
          schedule="Sesuai jadwal pelatih"
          mentor="Ni Putu Yayang Lorensia Novita, S.Pd."
          phone="6282144988984"
          :dances="[
            'Tari Pendet',
            'Tari Condong',
            'Tari Baris',
            'Tari Puspanjali',
            'Tari Wirayuda',
          ]"
        />
        <ui-card4
          data-aos="zoom-in"
          title="Les Umum"
          price="Rp 20.000 / bulan"
          schedule="Setiap hari Minggu"
          mentor="Ni Putu Yayang Lorensia Novita, S.Pd."
          phone="6282144988984"
          :dances="[
            'Tari Pendet',
            'Tari Condong',
            'Tari Baris',
            'Tari Puspanjali',
            'Tari Wirayuda',
          ]"
        />
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
          <swiper-container
            ref="containerRef"
            :navigation="true"
            :pagination="true"
          >
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
          <a href="#" class="btn btn-warning"
            >See More!
            <Icon name="tabler:brand-whatsapp" />
          </a>
        </div>
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
        <h2>Any Question?<span>Let's Contact Us</span></h2>
        <p>
          Join us and embark on a captivating journey through the arts, culture,
          and spirit of Bali!
        </p>
        <ul>
          <li>📍 Location:</li>
          <li>📞 Number Phone:</li>
          <li>Social Media :</li>
        </ul>
        <div class="contactus__form">
          <input
            type="text"
            class="contactus__input"
            placeholder="send us a message..."
          />
          <button class="btn btn-warning contactus__button">
            Send Whatsapp
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

<template>
  <div class="col component">
    <div class="component__content">
      <h4 class="component__text1">{{ title }}</h4>
      <p class="component__text2">
        <span>{{ price }}</span>
      </p>
      <p class="component__text3">{{ schedule }}</p>

      <ul class="component__list">
        <li class="component__item">
          <Icon name="mdi:account" style="color: black; font-size: 24px" />
          <span>Guru: {{ mentor }}</span>
        </li>
        <li class="component__item">
          <Icon name="mdi:phone" style="color: black; font-size: 24px" />
          <span>No. Telp: {{ phone }}</span>
        </li>
      </ul>
      <p>{{ desc }}</p>
      <div class="component__text3">
        <strong>Jenis Tarian:</strong>
        <div>{{ dances }}</div>
      </div>
      <a
        target="_blank"
        :href="`https://wa.me/${phone}`"
        class="btn btn-warning component__button"
      >
        {{ desc3 }}<Icon name="tabler:brand-whatsapp" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  price: string;
  schedule: string;
  mentor: string;
  phone: string;
  desc: string;
  dances: string;
  desc3: string;
}>();
</script>

<style lang="scss" scoped>
@import "~/assets/main.scss";
.btn-warning {
  background-color: #fee160;
}
.component {
  padding: 40px 20px;
  cursor: pointer;

  &__text1 {
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
  }

  &__text2 {
    text-align: center;
    margin-bottom: 15px;

    span {
      color: $color3;
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  &__text3 {
    text-align: justify;
    margin-bottom: 15px;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin-bottom: 15px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  &__content {
    background-color: white;
    transition: 0.5s;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
}

.component__content:hover {
  transform: scale(1.02);
}
</style>

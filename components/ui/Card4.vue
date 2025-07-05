<template>
  <div class="col component">
    <div class="component__content">
      <h4 class="component__text1">Standard</h4>
      <p class="component__text2"><span>$30</span>/per month</p>
      <p class="component__text3">
        This pack contains all the basic things which makes your workfolow
        easier!
      </p>
      <ul class="component__list">
        <li class="component__item">
          <Icon
            name="mynaui:check-solid"
            style="color: black; font-size: 30px"
          />
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
        </li>
        <li class="component__item">
          <Icon
            name="mynaui:check-solid"
            style="color: black; font-size: 30px"
          />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </li>
      </ul>
      <a href="#" class="btn btn-warning component__button"
        >See More!
        <Icon name="tabler:brand-whatsapp" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/main.scss";

.component {
  padding: 40px 20px;
  cursor: pointer;

  &__text1 {
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;
  }

  &__text2 {
    text-align: center;

    span {
      color: $color2;
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  &__text3 {
    text-align: justify;
  }

  &__list {
    list-style: none;
    padding: 0;
  }

  &__item {
    display: flex;
    margin: 10px 0;
    gap: 5px;
  }

  &__content {
    background-color: white;
    transition: 0.5s;
    padding: 20px;
    border-radius: 10px;
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

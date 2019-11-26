<template>
  <div id="inicio">
    <div class="wrapper-banner">
      <div class="image-banner">
        <picture>
          <source :srcset="require('@/assets/images/banner.jpg')" media="(max-width: 768px)">
          <img :src="require('@/assets/images/banner.jpg')" alt="Resolva seus conflitos">
        </picture>
      </div>
      <div class="container">
        <div class="col">
          <div class="wrap-content-banner">
            <span class="block-banner-top" />
            <h1 v-html="$t('banners.banner.title')" />
            <h2 v-text="$t('banners.banner.description')" />
            <span class="block-banner-bottom" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
>

<style lang="scss">
@import "@/assets/sass/colors.scss";

.wrapper-banner {
  height: 748px;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 748px;
    width: 100%;
    z-index: 9;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.56) 1%, rgba(0, 0, 0, 0));
  }

  @media (max-width: 767px) {
    min-height: 840px;
    height: auto;
  }

  .image-banner {
    img {
      height: 748px;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
    }
  }
}

.wrap-content-banner {
  position: absolute;
  left: -30px;
  top: 218px;
  text-align: left;
  background: $primary;
  padding-left: 30px;
  padding-top: 25px;
  padding-bottom: 0;
  min-height: 670px;
  width: 490px;
  z-index: 10;

  @media (max-width: 767px) {
    left: 0;
    top: 300px;
    width: 100%;
    padding-left: 0;
    padding-top: 35px;
  }

  h1 {
    font-size: 60px;
    font-weight: 700;
    letter-spacing: -2px;
    color: $white;
    margin: 160px 0 40px;
    animation: fadeIn 3000ms ease ;

    @media (max-width: 767px) {
      font-size: 32px;
      width: 100%;
      margin-top: 10px;
      padding-left: 15px;
      animation: slideInUp 700ms linear ;
    }
  }

  h2 {
    font-size: 20px;
    font-weight: 400;
    color: $white;
  }

  .block-banner-top {
    width: 78px;
    height: 156px;
    background: $yellow;
    position: absolute;
    top: 0;
    left: 78px;

    &::before {
      content: '';
      position: absolute;
      top: 78px;
      left: -78px;
      width: 156px;
      height: 78px;
      background: $yellow;
    }
  }

  .block-banner-bottom {
    width: 140px;
    height: 140px;
    background: $teal;
    position: absolute;
    bottom: 0;
    right: 0;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      right: -70px;
      width: 70px;
      height: 70px;
      background: $yellow;
    }
  }
}

@keyframes fadeOut {
  0% {
    opacity : 0;
  }
  100% {
    opacity : 1;
  }
}

@keyframes slide {
  0% {
    transform: translate(0, 100%);
  }
  20% {
    transform: translate(0, 60%);
  }
  98% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(0, 100%);
  }
}

</style>

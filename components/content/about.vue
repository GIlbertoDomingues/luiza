<template>
  <section id="sobre" class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="offset-md-1 col-sm-10">
          <div class="wrap-about animated">
            <h2 v-html="$t('about.title')" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="wrap-text" :class="{show : showMore}">
          <div class="offset-md-1 col-sm-4 animated">
            <div class="wrap-features-content">
              <p class="text" v-html="$t('about.about01')" />
            </div>
          </div>
          <div class="offset-md-1 col-sm-4 animated">
            <div class="wrap-features-content">
              <p class="text" v-html="$t('about.about02')" />
            </div>
          </div>
        </div>

        <button v-if="isMobile" class="btn btn-link" @click.prevent="showMore = !showMore">
          {{ showMore ? 'Fechar' : 'Ler mais' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {

  data: () => {
    return {
      showMore: false,
      isMobile: false,
      window: {
        width: 0
      }
    }
  },

  created () {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('scroll', this.handleSCroll)
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleSCroll)
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {

    handleSCroll (event) {
      const header = document.querySelector('.wrap-about, .col-sm-4')
      const { top, bottom } = header.getBoundingClientRect()
      const height = document.documentElement.clientHeight

      if (top < height && bottom > 0 && !header.className.includes('fadeInUp')) {
        header.classList.remove('hidden')
        header.classList.add('fadeInUp')
      }
    },

    handleResize () {
      this.window.width = window.innerWidth

      if (this.window.width <= 768) {
        this.isMobile = true
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/sass/colors.scss";

.wrap-about {
  margin: 14rem 0 35px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 768px) {
    margin: 3rem 0 0;
  }

  h2 {
    font-size: 48px;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -2px;
    color: $black;
    width: 60%;

    @media (max-width: 768px) {
      font-size: 38px;
      line-height: 70px;
      width: 100%;
    }
  }
}

.wrap-text {
  height: 110px;
  position: relative;
  overflow: hidden;
  animation: fadeIn 3000ms ease-in ;

  &.show {
    animation: fadeIn 3000ms ease-out;
    height: auto;
  }
}

.wrap-features-content {

  .text {
    font-size: 16px;
    line-height: 28px;
    color: $black;
  }
}

</style>

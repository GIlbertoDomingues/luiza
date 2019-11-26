<template>
  <header>
    <div class="wrapper-header">
      <div class="container">
        <div class="wrap-top-header">
          <a href="#" class="logo">
            <img :src="require('@/assets/images/logotipo.svg')" alt="Logo Airb-ON">
          </a>

          <div class="wrap-top-header-right">
            <div v-if="false" class="wrap-language">
              <span :class="{active : language === 'pt-br'}">Português</span>
              <toggle-button
                :value="language === 'en'"
                css-colors="true"
                width="37"
                height="21"
                @change="changeLanguage"
              />
              <span :class="{active : language === 'en'}">English</span>
            </div>

            <a target="_black" href="https://www.instagram.com/arbi.on/" class="social">
              <img :src="require('@/assets/images/instagram-header.svg')" alt="Instagram Airb-ON">
            </a>
            <a target="_black" href="https://www.linkedin.com/company/arbi-on/" class="social">
              <img :src="require('@/assets/images/linkedin-header.svg')" alt="Linkedin Airb-ON">
            </a>
          </div>
        </div>

        <scrollactive v-if="!isMobile" class="nav-bottom-header nav" :offset="60">
          <a href="#inicio" class="scrollactive-item">
            {{ $t('links.home') }}
          </a>
          <a href="#sobre" class="scrollactive-item">
            {{ $t('links.about') }}
          </a>
          <a href="#formulario" class="scrollactive-item">
            {{ $t('links.form') }}
          </a>
          <a href="#motivos" class="scrollactive-item">
            {{ $t('links.reason') }}
          </a>
          <a href="#ebook" class="scrollactive-item">
            {{ $t('links.ebook') }}
          </a>
          <a href="#faq" class="scrollactive-item">
            {{ $t('links.faq') }}
          </a>
          <!-- <a href="#blog" class="scrollactive-item">
            {{ $t('links.blog') }}
          </a> -->
        </scrollactive>
      </div>
    </div>

    <!-- Moble -->
    <div class="header-mobile">
      <div class="wrap-header-mobile">
        <a href="#" class="logo">
          <img :src="require('@/assets/images/logo.png')" alt="Logo Airb-ON">
        </a>
        <button class="btn-mobile" @click.prevent="toggleNavMobile">
          <img class="nav-icon" :class="{ out : !active_mobile }" :src="require('@/assets/images/icons/nav.svg')">
          <img class="nav-close" :class="{ out : !active_mobile }" :src="require('@/assets/images/icons/close.svg')">
        </button>
      </div>

      <transition v-if="isMobile" name="slide-fade">
        <scrollactive v-show="active_mobile" class="nav-mobile nav" :offset="65">
          <a href="#inicio" class="scrollactive-item">
            {{ $t('links.home') }}
          </a>
          <a href="#sobre" class="scrollactive-item">
            {{ $t('links.about') }}
          </a>
          <a href="#formulario" class="scrollactive-item">
            {{ $t('links.form') }}
          </a>
          <a href="#motivos" class="scrollactive-item">
            {{ $t('links.reason') }}
          </a>
          <a href="#ebook" class="scrollactive-item">
            {{ $t('links.ebook') }}
          </a>
          <a href="#faq" class="scrollactive-item">
            {{ $t('links.faq') }}
          </a>
          <!-- <a href="#blog" class="scrollactive-item">
            {{ $t('links.blog') }}
          </a> -->
        </scrollactive>
      </transition>
    </div>
  </header>
</template>

<script>

export default {
  data () {
    return {
      active_mobile: false,
      isMobile: false,
      window: {
        width: 0
      }
    }
  },

  computed: {
    language () {
      return this.$store.state.locale
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
    changeLanguage () {
      if (this.$i18n.locale === 'pt-br') {
        this.$store.commit('TOGGLE_LOADING', true)
        setTimeout(() => {
          this.$router.push('en')
          this.$store.commit('TOGGLE_LANGUAGE', true)
          this.$store.commit('TOGGLE_LOADING', false)
        }, 2000)
      } else {
        this.$store.commit('TOGGLE_LOADING', true)
        setTimeout(() => {
          this.$router.push('/')
          this.$store.commit('TOGGLE_LANGUAGE', false)
          this.$store.commit('TOGGLE_LOADING', false)
        }, 2000)
      }
    },

    handleSCroll (event) {
      const header = document.querySelector('.wrapper-header')
      if (window.scrollY > 100 && !header.className.includes('fixed-nav')) {
        header.classList.add('fixed-nav')
      } else if (window.scrollY < 100) {
        header.classList.remove('fixed-nav')
      }
    },

    toggleNavMobile () {
      this.active_mobile = !this.active_mobile
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

<style lang="scss" src="./header.scss"></style>

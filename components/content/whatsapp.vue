<template>
  <div>
    <a v-if="!isMobile" target="_blank" :href="`https://api.whatsapp.com/send?phone=${phone}&text=${$t('bar-action.text-whats')}`" class="button-whats">
      <img :src="require('@/assets/images/icons/icon-whatsapp.svg')" alt="WhatsApp Dr. Normando Scarabotto">
    </a>

    <a v-if="isMobile" target="_blank" :href="`https://api.whatsapp.com/send?phone=${phone}&text=${$t('bar-action.text-whats')}`" class="button-whats">
      <img :src="require('@/assets/images/icons/icon-whatsapp-white.svg')" alt="WhatsApp Dr. Normando Scarabotto">
      {{ $t('bar-action.button') }}
    </a>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isMobile: false,
      window: {
        width: 0
      }
    }
  },

  computed: {
    phone () {
      return this.$store.state.phone
    }
  },

  created () {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },

  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    handleResize () {
      this.window.width = window.innerWidth

      if (this.window.width <= 768) {
        this.isMobile = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/colors.scss";

.button-whats {
  position: fixed;
  top: 25%;
  right: 2rem;
  z-index: 1050;

  @media (max-width: 768px) {
    right: auto;
    bottom: 0;
    top: auto;
    width: 100%;
    height: 60px;
    color: $white;
    background: $primary;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 5px -2px rgba(0,0,0,0.5);
  }

  img {
    height: 48px;

    @media (max-width: 768px) { height: 38px; }
  }

}
</style>

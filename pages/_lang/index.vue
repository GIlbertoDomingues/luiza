<template>
  <div>
    <transition name="fade">
      <n-loading v-show="loading" />
    </transition>
    <n-header />
    <n-carousel />
    <n-whats />
    <n-content />
    <n-footer />
  </div>
</template>

<script>
export default {
  components: {
    NLoading: () => import('@/components/loading'),
    NHeader: () => import('@/components/shared/header'),
    NCarousel: () => import('@/components/carousel'),
    NContent: () => import('@/components/content'),
    NWhats: () => import('@/components/content/whatsapp.vue'),
    NFooter: () => import('@/components/shared/footer')
  },
  computed: {
    loading () {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>

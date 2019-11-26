<template>
  <div>
    <l-about />
    <l-form />
    <l-reason />
    <l-ebook />
    <l-faq />
  </div>
</template>

<script>
export default {
  components: {
    LAbout: () => import('@/components/content/about.vue'),
    LForm: () => import('@/components/content/form.vue'),
    LReason: () => import('@/components/content/reason.vue'),
    LEbook: () => import('@/components/content/ebook.vue'),
    LFaq: () => import('@/components/content/faq.vue')
  },

  data () {
    return {
      isMobile: false,
      window: {
        width: 0
      }
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

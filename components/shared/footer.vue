<template>
  <footer class="wrapper-infos-footer">
    <div class="wrap-infos-footer container">
      <!-- mobile -->
      <div class="wrap-footer-mobile">
        <div class="wrap-languag-footer">
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
        <div class="wrap-social-footer mt-5 mb-4">
          <a target="_black" href="https://www.instagram.com/dr.normando/" class="social-mobile mr-3">
            <img :src="require('@/assets/images/instagram-footer.svg')" alt="Instagram do Dr. Normando Scarabotto">
          </a>

          <a target="_black" href="https://www.youtube.com/channel/UCsZOtuPVxw49CKeU3TzR5Fg" class="social-mobile">
            <img :src="require('@/assets/images/youtube-footer.svg')" alt="Canal no Youtube do  Dr. Normando Scarabotto">
          </a>
        </div>
      </div>

      <address>
        <span>© 2019 • Arbi-ON • Todos os direitos reservados</span>
      </address>

      <div class="wrap-social-footer">
        <a target="_black" href="https://www.instagram.com/dr.normando/" class="social">
          <img :src="require('@/assets/images/instagram-footer.svg')" alt="Instagram do Dr. Normando Scarabotto">
        </a>

        <a target="_black" href="https://www.youtube.com/channel/UCsZOtuPVxw49CKeU3TzR5Fg" class="social">
          <img :src="require('@/assets/images/youtube-footer.svg')" alt="Canal no Youtube do  Dr. Normando Scarabotto">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    language () {
      return this.$store.state.locale
    }
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
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/sass/colors.scss";

.wrapper-infos-footer {
  background-color: $white;
  padding-top: 5rem;
  position: relative;

  @media (max-width: 768px ) {
    padding-left: 15px;
    padding-right: 15px;
  }

}

.wrap-infos-footer{
  border-top: 1px solid $pinkish-grey;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: $white;

  @media (max-width: 768px ) {
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;

  }

  span,
  a,
  p {
    font-size: 14px;
    line-height: 1.71;
    color: $gray;
    margin: 0;

    @media (max-width: 768px ) {
      font-size: 14px;
      line-height: 20px;
    }
  }

  .social {
    margin-left: 15px;
    transition: ease 200ms;

    &:hover {
      opacity: .7;
      transition: ease 200ms;
    }

    @media (max-width: 768px ) {
      display: none;
    }
  }
}

.wrap-footer-mobile {
  flex-flow: column;
  display: flex;

  @media (min-width: 768px ) {
    display: none;
  }

  .social-mobile {
    transition: ease 200ms;
    margin: 2rem 0;

    &:hover {
      opacity: .7;
      transition: ease 200ms;
    }

  }

  .wrap-languag-footer {
    @media (min-width: 768px) {
      display: none;
    }

    display: flex;
    align-items: center;
    justify-content: space-around;

    span {
      font-size: 14px;
      color: $gray;
      opacity: .5;
      transition: ease 200ms;

      &.active {
        opacity: 1;
        transition: ease 200ms;
      }
    }

    label.vue-js-switch {
      margin: 0 10px;
    }

    .vue-js-switch .v-switch-core .v-switch-button {
      background-color: $yellow;
      width: 11px !important;
      height: 11px !important;
    }

    .vue-js-switch .v-switch-core {
      border: 2px solid $gray;
    }
  }
}

</style>

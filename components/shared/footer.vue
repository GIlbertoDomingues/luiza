<template>
  <footer class="wrapper-infos-footer">
    <div class="wrap-infos-footer container">
      <div class="row">
        <div class="col-md-4">
          <img class="logo-footer" :src="require('@/assets/images/logotipo-footer.svg')" alt=""> <br>
          <span class="text-logo">Arbitragem online: rápido, seguro e acessível</span>

          <div class="wrap-social-footer">
            <h4>Siga-nos</h4>
            <div class="wrap-social-footer">
              <a target="_black" href="https://www.instagram.com/arbi.on/" class="social">
                <img class="icon-social-footer" :src="require('@/assets/images/icon-instagram-footer.svg')" alt="Instagram Arbi-ON">
                <img class="icon-social-footer-hover" :src="require('@/assets/images/icon-instagram-active.svg')">
              </a>

              <a target="_black" href="https://www.linkedin.com/company/arbi-on/" class="social">
                <img class="icon-social-footer" :src="require('@/assets/images/icon-linkedin.svg')" alt="Linkedin Arbi-ON">
                <img class="icon-social-footer-hover" :src="require('@/assets/images/icon-linkedin-active.svg')" alt="Linkedin Arbi-ON">
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4 bg-footer-primary">
          <h4 class="subtitle">
            Escritório
          </h4>
          <address>
            <a href="https://goo.gl/maps/R3hUAsz7rTdcszCf7">Rua Padre Anchieta<br>2286 . Bigorrilho<br>Curitiba</a>
          </address>
        </div>
        <div class="col-md-4 bg-footer-primary">
          <h4 class="subtitle">
            Contato
          </h4>
          <a href="mailto:arbitragemonline@gmail.com">arbitragemonline@gmail.com</a><br>
          <a href="tel:+5541991617090">+55 41 99161.7090</a>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <span class="copy">© 2019 • Arbi-ON • Todos os direitos reservados</span>
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
  margin-top: 220px;
  position: relative;

  &::before {
    content: '';
    background-color: $primary;
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;

    @media (max-width: 768px ) { display: none; }
  }

  @media (max-width: 768px ) {
    margin-top: 30px;
  }

  .logo-footer {
    margin-top: 70px;
  }

  .text-logo {
    font-size: 16px;
    color: $black;
    width: 190px;
    display: block;

    @media (max-width: 768px ) {
      margin: 10px auto;
      text-align: left;
      width: 100%;
    }

  }
}

.wrap-social-footer h4 {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.8;
  letter-spacing: -0.67px;
  color: var(--black);
  margin-top: 50px;
}

.wrap-infos-footer{
  background-color: $white;

  @media (max-width: 768px ) {
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: left;

  }

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
    margin-right: 15px;
    transition: ease 200ms;
    position: relative;
    width: 35px;
    height: 35px;

    .icon-social-footer-hover {
      position: absolute;
      left: 0;
      opacity: 0;
      transition: ease 200ms;
    }

    &:hover {
      text-decoration: none;

      .icon-social-footer-hover {
        opacity: 1;
        transition: ease 200ms;
      }
    }

    @media (max-width: 768px ) {
      margin-bottom: 50px;
      display: inline-block;
      transition: ease 200ms;
    }
  }
}

.bg-footer-primary {
  background-color: $primary;
  padding-left: 95px;
  padding-top: 120px;
  height: auto;
  padding-bottom: 120px;

  address {
    margin: 0;
  }

  @media (max-width: 768px ) {
    padding: 15px;
    text-align: left;
  }

  a {
    color: $white;
  }
}

.subtitle {
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  color: $white;
}

.copy {
  font-size: 14px;
  line-height: 1.71;
  text-align: center;
  color: #8f8f8f;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  width: 100%;
  background: white;
  position: relative;

  @media (max-width: 768px ) {
    padding: 30px 0 90px;
  }
}

</style>

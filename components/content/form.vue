<template>
  <div id="formulario" class="container wrapper-form">
    <div class="row">
      <div class="col-sm-6">
        <h2 class="title" v-html="title" />
        <h5 class="subtitle" v-text="subtitle" />
        <div class="wrap-image-form">
          <span class="block-form-top" />
          <picture>
            <source :srcset="require('@/assets/images/banner-form-mobile.jpg')" media="(max-width: 768px)">
            <img :src="require('@/assets/images/banner-form.jpg')" alt="Cadastre-se no formulário">
          </picture>
        </div>
      </div>
      <div class="col-sm-6 wrap-form">
        <div class="wrap-title-mobile">
          <h2 class="title" v-html="titleMobile" />
          <h5 class="subtitle" v-text="subtitle" />
        </div>
        <b-form method="POST" action="https://formspree.io/mjvkvegq">
          <input type="hidden" name="_subject" value="Novo contato pelo site!">
          <input type="hidden" name="_language" value="pt">
          <b-form-group v-if="!isMobile" label="Escolha a opção abaixo">
            <b-form-radio-group
              id="btn-radios"
              v-model="selected"
              :options="options"
              buttons
              name="Escolha a opção abaixo"
            />
          </b-form-group>

          <label for="radioFake">Escolha a opção abaixo</label>
          <b-button-group v-if="isMobile" class="wrap-button-mobile">
            <b-button class="btn-secundary" @click.prevent="showForm">
              <label>
                Cadastrar conflito
                <b-form-radio v-model="selectedMobile" buttons name="Cadastrar conflito" value="Cadastrar conflito" />
              </label>
            </b-button>
            <b-button class="btn-secundary" @click.prevent="showForm">
              <label>
                Ser árbrito
                <b-form-radio v-model="selectedMobile" buttons name="Ser árbrito" value="Ser árbrito" />
              </label>
            </b-button>
          </b-button-group>

          <div class="wrap-mobile-form" :class="{'show-form' : show}">
            <b-form-group id="input-group-name" label="Nome" label-for="name">
              <b-form-input
                id="name"
                v-model="form.name"
                required
                name="Nome"
                placeholder="Digite seu nome"
              />
            </b-form-group>

            <b-form-group id="input-group-email" label="Email" label-for="email">
              <b-form-input
                id="email"
                v-model="form.email"
                name="Email"
                type="email"
                required
                placeholder="Digite seu email"
              />
            </b-form-group>

            <b-form-group id="input-group-phone" label="Telefone celular" label-for="phone">
              <b-form-input
                id="phone"
                v-model="form.phone"
                name="Telefone"
                type="text"
                required
                placeholder=" 00.00000.0000"
              />
            </b-form-group>

            <b-form-group id="input-group-sms">
              <b-form-checkbox-group id="checkboxes-sms" v-model="form.checked" name="Receber sms/e-mail">
                <b-form-checkbox value="sim">
                  Eu concordo em receber sms/e-mail
                </b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>

            <b-form-textarea
              id="textarea"
              v-model="form.message"
              name="Mensagem"
              placeholder="Escreva-nos uma mensagem"
              rows="2"
            />

            <b-button type="submit" variant="primary">
              Enviar cadastro
            </b-button>

            <span class="text-help">Prometemos não utilizar suas informações de contato para enviar qualquer tipo de SPAM.</span>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      title: 'O que você<br>busca?',
      titleMobile: 'O que você busca?',
      subtitle: 'Cadastre-se no formulário.',
      form: {
        email: '',
        name: '',
        phone: '',
        message: ''
      },
      show: false,
      selected: 'Cadastrar conflito',
      selectedMobile: '',
      options: [
        { text: 'Cadastrar conflito', value: 'Cadastrar conflito' },
        { text: 'Ser árbrito', value: 'Ser árbrito' }
      ],
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

    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },

    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.name = ''
      this.form.email = ''
      this.form.phone = ''
      this.form.message = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },

    handleResize () {
      this.window.width = window.innerWidth

      if (this.window.width <= 768) {
        this.isMobile = true
      }
    },

    showForm () {
      console.log('aaa')
      this.show = true
    }
  }

}
</script>

<style lang="scss">
@import "@/assets/sass/colors.scss";

.wrapper-form {
  margin-top: 140px;

  @media (max-width: 768px) {
    margin-top: 50px;
  }

  .title {
    font-size: 48px;
    line-height: 50px;
    font-weight: 700;
    color: #24241e;
    text-align: right;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .subtitle {
    font-size: 20px;
    color: $black;
    text-align: right;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .wrap-image-form {
    position: relative;
    min-height: 700px;
    height: auto;

    @media (max-width: 768px) {
      min-height: 360px;
    }

    .block-form-top {
      width: 210px;
      height: 210px;
      background-color: $primary;
      position: absolute;
      top: 70px;
      right: -15px;
      z-index: 10;

      @media (max-width: 768px) {
        width: 170px;
        height: 170px;
        top: 0;
      }

      &::after {
        content: '';
        width: 105px;
        height: 105px;
        background-color: $yellow;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 11;

        @media (max-width: 768px) {
          width: 80px;
          height: 80px;
        }
      }

      &::before {
        content: '';
        width: 70px;
        height: 70px;
        background-color: $teal;
        position: absolute;
        top: 0;
        left: -70px;
        z-index: 11;

        @media (max-width: 768px) {
          width: 50px;
          height: 50px;
          left: -50px;
        }
      }
    }

    img {
      position: absolute;
      left: -30px;
      top: 140px;

      @media (max-width: 768px) {
        left: -15px;
        top: 50px;
        width: 100vw;
      }
    }
  }

  .wrap-form {
    height: 760px;
    background-color: $light-grey;

    @media (max-width: 768px) {
      min-height: 260px;
      height: auto;
      padding-bottom: 1rem;
    }

    .wrap-title-mobile {
      display: none;

      @media (max-width: 768px) {
        display: block;

        .title {
          font-size: 38px;
          line-height: 50px;
          font-weight: 700;
          letter-spacing: -1.58px;
          color: $black;
          margin-top: 20px;
          text-align: left;
          display: block;
        }

        .subtitle {
          font-size: 16px;
          color: $black;
          text-align: left;
          display: block;
        }
      }
    }

    form {
      padding: 70px;

      @media (max-width: 768px) {
        padding: 30px 0 50px;
      }

      .col-form-label,
      label {
        font-size: 14px;
        color: $black;
      }

      input {
        height: 50px;
        border: solid 1px $border;
        background-color: $white;
        border-radius: 0;
        font-size: 16px;
        color: $black;

        &:focus {
          box-shadow: 0 0 0 1px $blue;
          border-color: $blue;
        }

        &:-webkit-autofill {
          box-shadow: 0px 0px 0px 100px $white inset !important;
          border-color: $border !important;
        }
      }

      textarea {
        border: solid 1px $border;
        background-color: $white;
        border-radius: 0;
        font-size: 16px;
        color: $black;

         &:focus {
          box-shadow: 0 0 0 1px $blue;
          border-color: $blue;
        }

        &:-webkit-autofill {
          box-shadow: 0px 0px 0px 100px $white inset !important;
          border-color: $border !important;
        }
      }

      .btn-group-toggle.btn-group {
        width: 100%;
        justify-content: center;
      }

      .btn-secondary {
        height: 50px;
        width: 50%;
        border: solid 1px $border;
        background-color: $white;
        border-radius: 0;
        font-size: 16px;
        font-weight: 700;
        color: $black;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &.active {
          border: solid 1px $primary;
          background-color: $primary;
          color: $white;
          box-shadow: none;
        }

      }

      .btn-primary {
        margin-top: 30px;
        height: 50px;
        width: 100%;
        border: solid 1px $black;
        background-color: $black;
        border-radius: 0;
        font-size: 16px;
        font-weight: 700;
        color: $white;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          border: solid 1px $black;
          background-color: $white;
          color: $black;
          box-shadow: none;
        }

      }

      .text-help {
        font-size: 12px;
        text-align: center;
        color: $gray;
        margin: 15px 30px;
        display: flex;
      }
    }
  }

  .wrap-mobile-form {
    @media (max-width: 768px) {
      display: none;
    }

    &.show-form {
      display: block;
    }
  }

  .wrap-button-mobile {
    width: 100%;

    label {
      margin: 0;
    }

    .btn-secondary {
      height: 50px;
      width: 50%;
      border: solid 1px $border;
      background-color: $white;
      border-radius: 0;
      font-size: 16px;
      font-weight: 700;
      color: $black;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;

      &.active {
        border: solid 1px $primary;
        background-color: $primary;
        color: $white;
        box-shadow: none;
      }

      .custom-control.custom-radio {
        position: absolute;
        opacity: 0;
      }

    }
  }
}
</style>

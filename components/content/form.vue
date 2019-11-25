<template>
  <div class="container wrapper-form">
    <div class="row">
      <div class="col-sm-6">
        <h2 class="title" v-html="title" />
        <h5 class="subtitle" v-text="subtitle" />
        <div class="wrap-image-form">
          <span class="block-form-top" />
          <picture>
            <source :srcset="require('@/assets/images/banner-form.jpg')" media="(max-width: 768px)">
            <img :src="require('@/assets/images/banner-form.jpg')" alt="Cadastre-se no formulário">
          </picture>
        </div>
      </div>
      <div class="col-sm-6 wrap-form">
        <b-form v-if="show" @submit="onSubmit" @reset="onReset">
          <b-form-group label="Escolha a opção abaixo">
            <b-form-radio-group
              id="btn-radios"
              v-model="selected"
              :options="options"
              buttons
              name="radios-btn-default"
            />
          </b-form-group>

          <b-form-group id="input-group-name" label="Nome" label-for="name">
            <b-form-input
              id="name"
              v-model="form.name"
              required
              placeholder="Digite seu nome"
            />
          </b-form-group>

          <b-form-group id="input-group-email" label="Email" label-for="email">
            <b-form-input
              id="email"
              v-model="form.email"
              type="email"
              required
              placeholder="Digite seu email"
            />
          </b-form-group>

          <b-form-group id="input-group-phone" label="Telefone celular" label-for="phone">
            <b-form-input
              id="phone"
              v-model="form.phone"
              type="text"
              required
              placeholder=" 00.00000.0000"
            />
          </b-form-group>

          <b-form-group id="input-group-sms">
            <b-form-checkbox-group id="checkboxes-sms" v-model="form.checked">
              <b-form-checkbox value="sms">
                Eu concordo em receber sms/e-mail
              </b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-form-textarea
            id="textarea"
            v-model="form.menssage"
            placeholder="Escreva-nos uma mensagem"
            rows="2"
          />

          <b-button type="submit" variant="primary">
            Enviar cadastro
          </b-button>

          <span class="text-help">Prometemos não utilizar suas informações de contato para enviar qualquer tipo de SPAM.</span>
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
      subtitle: 'Cadastre-se no formulário.',
      form: {
        email: '',
        name: '',
        phone: '',
        menssage: ''
      },
      show: true,
      selected: 'conflito',
      options: [
        { text: 'Cadastrar conflito', value: 'conflito' },
        { text: 'Ser árbrito', value: 'arbrito' }
      ]
    }
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
      this.form.menssage = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/sass/colors.scss";

.wrapper-form {
  margin-top: 140px;

  .title {
    font-size: 48px;
    line-height: 50px;
    font-weight: 700;
    color: #24241e;
    text-align: right;
  }

  .subtitle {
    font-size: 20px;
    color: $black;
    text-align: right;
  }

  .wrap-image-form {
    position: relative;
    min-height: 700px;
    height: auto;

    .block-form-top {
      width: 210px;
      height: 210px;
      background-color: $primary;
      position: absolute;
      top: 70px;
      right: -15px;
      z-index: 10;

      &::after {
        content: '';
        width: 105px;
        height: 105px;
        background-color: $wheat;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 11;
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
      }
    }

    img {
      position: absolute;
      left: -30px;
      top: 140px;
    }
  }

  .wrap-form {
    height: 760px;
    background-color: $light-grey;

    form {
      padding: 70px;

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
}
</style>

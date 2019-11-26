<template>
  <div id="motivos" class="container wrapper-reason">
    <div class="row">
      <h2 class="title col-sm-12">
        Motivos para nos escolher
      </h2>
    </div>
    <carousel :per-page="1" class="row">
      <slide class="col">
        <img :src="require('@/assets/images/motivos/resultado_rapido.svg')" alt="Resultado rápido">
        <h3>Resultado rápido</h3>
        <p>O procedimento online e sem burocracia acelera a resolução pelo árbitro.</p>
      </slide>

      <slide class="col">
        <img :src="require('@/assets/images/motivos/profissionais_experientes.svg')" alt="Profissionais experientes">
        <h3>Profissionais experientes</h3>
        <p>Conhecedores do assunto em debate produzem a melhor sentença.</p>
      </slide>

      <slide class="col">
        <img :src="require('@/assets/images/motivos/confidencialidade.svg')" alt="Confidencialidade">
        <h3>Confidencialidade</h3>
        <p>Os processos e as decisões são confidenciais.</p>
      </slide>

      <slide class="col">
        <img :src="require('@/assets/images/motivos/resultado_rapido.svg')" alt="Preço acessível">
        <h3>Preço acessível</h3>
        <p>Custos da câmara reduzidos por ser online.</p>
      </slide>

      <slide class="col">
        <img :src="require('@/assets/images/motivos/acessivel.svg')" alt="Acessível">
        <h3>Prático</h3>
        <p>Onde você estiver e sem obrigações desnecessárias.</p>
      </slide>

      <slide class="col">
        <img :src="require('@/assets/images/motivos/automatizado.svg')" alt="Automatizado">
        <h3>Automatizado</h3>
        <p>Aumenta a celeridade e diminui os custos administrativos.</p>
      </slide>
    </carousel>

    <div class="row wrapper-tranform">
      <div class="col-sm-6">
        <img class="img-transform" :src="require('@/assets/images/vamos-transformar-mobile.jpg')" alt="Vamos transformar">
      </div>
      <div class="col-sm-6">
        <div class="wrap-transform">
          <h2 class="title-transform">
            Vamos te dar acesso<br>a uma justiça<br>eficiente
          </h2>
          <span class="box-transform-bottom" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/colors.scss";

.wrapper-reason {
  margin-top: 40px;

  .title {
    font-size: 38px;
    font-weight: 700;
    color: $black;
    margin-bottom: 40px;
  }

  h3 {
    font-size: 22px;
    line-height: 1.09;
    font-weight: 700;
    color: $primary;
    padding-top: 20px;
    border-top: 1px solid $primary;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    line-height: 1.75;
    color: $black;
    height: 90px;
    margin-bottom: 0;
  }

  .wrapper-tranform {
    margin-top: 90px;
    height: auto;
    position: relative;

    .img-transform {
      position: relative;
      bottom: 0;
      width: 100vw;
      left: -15px;
    }

    .wrap-transform {
      width: 100vw;
      height: 380px;
      background-color: #00948e;
      position: relative;
      margin-left: -15px;

      .title-transform {
        font-size: 38px;
        font-weight: 700;
        line-height: 1.04;
        letter-spacing: -2px;
        text-align: right;
        color: $white;
        padding-right: 15px;
        padding-top: 40px;
      }

      .box-transform-bottom {
        background-color: $yellow;
        width: 140px;
        height: 140px;
        position: absolute;
        bottom: 0;
        right: 70px;

        &:before {
          content: '';
          background-color: $primary;
          width: 70px;
          height: 70px;
          position: absolute;
          bottom: 0;
          right: -70px;
        }
      }
    }
  }
}

button.VueCarousel-dot {
  width: 6px !important;
  height: 6px !important;
  background-color: #d8d8d8 !important;
  outline: none;

  &.VueCarousel-dot--active {
    background-color: $gray !important;
  }

  &:focus {
    outline: none !important;
  }
}
</style>

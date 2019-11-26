<template>
  <div id="motivos" class="container wrapper-reason">
    <div class="row">
      <h2 class="title">
        Motivos para nos escolher
      </h2>
    </div>
    <div class="row">
      <div class="col-md-4">
        <img :src="require('@/assets/images/motivos/resultado_rapido.svg')" alt="Resultado rápido">
        <h3>Resultado rápido</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloribus distinctio, voluptatum facilis.</p>
      </div>
      <div class="col-md-4">
        <img :src="require('@/assets/images/motivos/profissionais_experientes.svg')" alt="Profissionais experientes">
        <h3>Profissionais experientes</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloribus distinctio, voluptatum facilis.</p>
      </div>
      <div class="col-md-4">
        <img :src="require('@/assets/images/motivos/confidencialidade.svg')" alt="Confidencialidade">
        <h3>Confidencialidade</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloribus distinctio, voluptatum facilis.</p>
      </div>
      <div class="col-md-4">
        <img :src="require('@/assets/images/motivos/resultado_rapido.svg')" alt="Resultado rápido">
        <h3>Preço junto</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloribus distinctio, voluptatum facilis.</p>
      </div>
      <div class="col-md-4">
        <img :src="require('@/assets/images/motivos/preco_justo.svg')" alt="Preço justo">
        <h3>Preço junto</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloribus distinctio, voluptatum facilis.</p>
      </div>
      <div class="col-md-4">
        <img :src="require('@/assets/images/motivos/acessivel.svg')" alt="Acessível">
        <h3>Acessível</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloribus distinctio, voluptatum facilis.</p>
      </div>
    </div>

    <div class="row wrapper-tranform">
      <div class="col-sm-6">
        <img class="img-transform" :src="require('@/assets/images/vamos-transformar.jpg')" alt="Vamos transformar">
      </div>
      <div class="col-sm-6">
        <div class="wrap-transform">
          <h2 class="title-transform">
            Vamos<br>transformar a<br>busca pela<br>Justiça em uma<br>jornada<br>agradável
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
  margin-top: 120px;

  .title {
    font-size: 48px;
    font-weight: 700;
    color: $black;
    margin-bottom: 64px;
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
    height: 120px;
    margin-bottom: 15px;
  }

  .wrapper-tranform {
    margin-top: 90px;
    height: 750px;
    position: relative;

    .img-transform {
      position: absolute;
      bottom: 0;
    }

    .wrap-transform {
      width: 490px;
      height: 670px;
      background-color: $teal;
      position: relative;
      margin-left: -18px;

      .title-transform {
        font-size: 48px;
        font-weight: 700;
        line-height: 1.04;
        letter-spacing: -2px;
        text-align: right;
        color: $white;
        padding-right: 100px;
        padding-top: 120px;
      }

      .box-transform-bottom {
        background-color: $yellow;
        width: 140px;
        height: 140px;
        position: absolute;
        bottom: 0;
        right: 0;

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
</style>

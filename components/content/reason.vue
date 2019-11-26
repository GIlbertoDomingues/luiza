<template>
  <div class="container wrapper-reason">
    <div class="row">
      <h2>Motivos para nos escolher</h2>
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

  h2 {
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
}
</style>

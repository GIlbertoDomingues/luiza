<template>
  <div class="container-fluid">
    <div class="row">
      <div class="wrapper-ebook">
        <span class="block-ebook-left" />
        <span class="block-ebook-bottom" />
        <span class="block-ebook-top-left" />
        <h2 class="title">
          Tem dúvidas o que é arbitragem<br>
          e quais são os outros métodos<br>
          de resolução de conflito?
        </h2>
        <p>Aqui explicamos tudinho de maneira didática e sem juridiquês.</p>

        <a target="_blank" href="//www.arbion.com.br/ebook/um-guia-sobre-arbit.pdf" class="btn btn-primary">
          Quero o E-book
        </a>
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

.wrapper-ebook {
  margin-top: 145px;
  height: 600px;
  background-color: $yellow;
  width: 100%;
  margin-left: 18%;
  padding-left: 100px;
  padding-top: 150px;
  position: relative;

  .title {
    font-size: 48px;
    font-weight: 700;
    line-height: 1.04;
    letter-spacing: -2px;
    color: $black;
    margin-bottom: 30px;
  }

  p {
    font-size: 20px;
    color: $black;
    margin-bottom: 40px;
  }

  .btn-primary {
    height: 50px;
    width: 200px;
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

  .block-ebook-left {
    width: 78px;
    height: 156px;
    background: $teal;
    position: absolute;
    bottom: 0;
    left: -78px;

    &::before {
      content: '';
      position: absolute;
      top: 78px;
      left: -78px;
      width: 156px;
      height: 78px;
      background: $teal;
    }
  }

  .block-ebook-top-left {
    width: 78px;
    height: 156px;
    background: $primary;
    position: absolute;
    top: 0;
    right: 230px;

    &::before {
      content: '';
      position: absolute;
      top: 78px;
      left: 0;
      width: 156px;
      height: 78px;
      background: $primary;
    }
  }

  .block-ebook-bottom {
    width: 70px;
    height: 70px;
    background: $primary;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>

<template>
  <div class="wrapper-loading">
    <svg
      id="L4"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 0 0"
      xml:space="preserve"
    >
      <circle fill="#334a87" stroke="none" cx="6" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1.2s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"
        />
      </circle>
      <circle fill="#334a87" stroke="none" cx="26" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1.2s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.2"
        />
      </circle>
      <circle fill="#334a87" stroke="none" cx="46" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1.2s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.3"
        />
      </circle>
    </svg>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/colors.scss";

.wrapper-loading {
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  top: 0;
  left: 0;
  background: $light-grey;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 160px;

    @media (max-width: 768px) {
      width: 130px;
      margin-left: 20%;
    }
  }
}

</style>

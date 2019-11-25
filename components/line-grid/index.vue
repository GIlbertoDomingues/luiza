<template>
  <div class="line-grid container">
    <span class="line" />
    <span class="line" />
  </div>
</template>

<style lang="scss" scoped>
.line-grid {
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }

  .line {
    height: 100%;
    border-right: 1px solid rgba(#979797,0.2);
    display: flex;
    position: fixed;
    top: 0;
    left: 7%;

    &:nth-child(2) {
      width: 20%;
    }
  }
}

</style>

<template>
  <div class="dialog-container">
    <div class="dialog-wrapper" :style="classWidth">
      <slot></slot>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      classWidth:{
        type: Object,
        default: {
          // width: "430px"
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .dialog-container{
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    // overflow: auto;
    // margin: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .2);

    .dialog-wrapper{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      // width: 430px;
      min-height: 300px;
      padding: 30px;
      border-radius: 8px;
      background: #fff;
    }
  }
</style>

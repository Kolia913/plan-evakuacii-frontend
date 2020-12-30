<template>
<div>
  <div class="background">
  </div>
    <Header />
   <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
  .background {
    position: fixed;
    // width: 100%;
    // height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // opacity: 0.6;
    // object-fit: contain;
    // background-size: cover;
    // background-image: url("../static/backdrop.jpg");
    // background-repeat: no-repeat;
    background-color:#cdd9d1;;
  }
</style>

<template>
  <section id="main">
    <div class="row info">
      <Info />
      <Order />
    </div>
  </section>
</template>

<script>
import Info from '@/components/Info'
import Order from '@/components/Order'

export default {
  components: {
    Info,
    Order
  }
}
</script>

<style lang="scss" scoped>
.info {
  margin-top: 135px;
  padding-left: 70px;
  width: 100%;
}

@media (max-width: 1259px) {
  .info {
    padding-left: 20px;
  }
}
</style>
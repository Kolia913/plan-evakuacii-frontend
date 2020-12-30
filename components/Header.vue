<template>
    <section id="header">
    <div class="header__left">
      <nuxt-link tag="div" to="/" class="logo">
        <img src="@/static/placeholder.jpg" alt="None"  class="logo__image"/>
      </nuxt-link>
      <div class="title">
        <p class="title__top">
            ПЛАН-ЭВАКУАЦИИ.РФ<br />
             Создание план-схем
        </p>
      </div>
      </div>
      <nuxt-link tag="div" to="/login" class="header__right">
        <img class="inner-image" src="@/static/placeholder.jpg" alt="None"/>
      </nuxt-link>
  </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
  #header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 20px;
  }
  .header__left {
    display: flex;
    justify-content: flex-start;
    .title {
      .title__top{
        height: 62px;
        display: flex;
        align-items: center;
      }
    }
    .logo {
      margin-right: 20px;
      cursor: pointer;
      &__image {
        width: 62px;
        height: 62px;
        object-fit: contain;
      }
    }
  }
  .header__right {
    width: 52px;
    height: 52px;
    border: 3px solid #406373;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-content: center;
    padding-top: 19px;
    .inner-image {
      width: 9px;
      height: 12px;
    }
  }
@media (max-width: 1259px) {
  #header {
    margin-right: 20px;
    margin-left: 10px;
  }
}
@media (max-width: 361px) {
  .title__top {
    font-size: 14px;
  }
}
</style>
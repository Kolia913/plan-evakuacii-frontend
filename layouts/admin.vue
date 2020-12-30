<template>
    <div class="wrapper">
    <aside class="sidebar">
        <div class="container">
          <div class="sidebar__header">
            <a href="" class="logo__link">
              <img class="logo__link-img" src="http://placehold.it/60x60/" alt="" />
            </a>
            <p class="sidebar__header-title">Добро пожпловать, username</p>
            <nuxt-link class="sidebar__header-link" to="/">план-эвакуации.рф</nuxt-link>
          </div>
          <div class="sidebar__content">
            <nav class="menu__sidebar">
              <ul class="menu__sidebar-list">
                <li class="menu__sidebar-item">
                  <nuxt-link to="/admin" class="menu__sidebar-link">Заказы</nuxt-link>
                </li>
                <li class="menu__sidebar-item">
                  <a  @click.prevent="logout()" href="" class="menu__sidebar-link">Выход</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </aside>
      <Nuxt />
  </div>
</template>

<script>
export default {
    methods: {
      logout() {
        this.$auth.logout()
      }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/admin';
</style>
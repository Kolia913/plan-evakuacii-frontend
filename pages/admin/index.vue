<template>
        <main class="admin-content">
          <header class="admin-header">
            <div class="admin-header__btns">
              <h2 class="admin-header__title">Заказы</h2>
              <nuxt-link to="/admin/create-order" class="add-order__btn">
                <img class="" src="@/static/icons/add.svg" alt="" />
              </nuxt-link>
            </div>
            <form class="form-search">
              <input class="form-search__input" type="text" placeholder="Поиск...">
              <button class="form-search__btn" type="submit"></button>
            </form>
          </header>
        <div class="content-table">
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>№</th>
                  <th>Дата</th>
                  <th>Организация</th>
                  <th> Адрес</th>
                  <th> Имя</th>
                  <th>Email</th>
                  <th>Телефон</th>
                  <th>Сумма</th>
                  <th>Статус</th>
                  <th>Действие</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(order, index) in orders" :key="order._id">
                  <td data-label="№">{{index + 1}}</td>
                  <td data-label="Дата">{{order.createdAt.split('T')[0]}}</td>
                  <td data-label="Организация">{{order.orgname}}</td>
                  <td data-label="Адрес">{{order.orgadres}}</td>
                  <td data-label="Имя">{{order.firstname}}</td>
                  <td data-label="Email">{{order.email}}</td>
                  <td data-label="Телефон">{{order.phone}}</td>
                  <td data-label="Сумма">{{order.count}}</td>
                  <td data-label="Статус">{{ order.isDone ? 'Выполнен' : 'Невыполнен'}}</td>
                  <td data-label="Статус">
                    <button class="del__btn" type="submit">
                      <img @click="deleteOrder(order._id)" class="" src="@/static/icons/delete.svg" alt="" />
                    </button>
                    <button class="edit__btn" type="submit">
                      <img @click="goToEdit(order._id)" class="" src="@/static/icons/edit.svg" alt="" />
                    </button>
                  </td>
                </tr>
                <!-- <tr>
                  <td data-label="№">2</td>
                  <td data-label="Дата">21.12.2020</td>
                  <td data-label="Организация">ДОУ "Аленушка"</td>
                  <td data-label="Адрес">г. Волгоград, ул. Речная 98</td>
                  <td data-label="Имя">Алексей</td>
                  <td data-label="Email">school123@yandex.ru</td>
                  <td data-label="Телефон">+79151232323</td>
                  <td data-label="Сумма">5000</td>
                  <td data-label="Статус">Выполнен</td>
                  <td data-label="Статус">
                    <button class="del__btn" type="submit">
                      <img class="" src="@/static/icons/delete.svg" alt="" />
                    </button>
                    <button class="edit__btn" type="submit">
                      <img class="" src="@/static/icons/edit.svg" alt="" />
                    </button>
                  </td>
                </tr> -->
              </tbody>
            </table>
          </div>
      
        </div>
       
      
    </main>

</template>

<script>
export default {
    layout: 'admin',
    middleware: ['auth', 'admin'],
    async asyncData({$axios}) {
      const orders = await $axios.get('api/v1/orders')
      // console.log(orders.data);
      return {
        orders: orders.data
      }
    },
    methods: {
     async deleteOrder(id) {
       try {
         const deletedOrder = await this.$axios.delete(`/api/v1/orders/${id}`)
         this.$toast.info("Заказ удалён")
       } catch ( e ) {
         this.$toast.error('Ошибка удаления заказа!')
       }
      },
      goToEdit(id) {
        this.$router.push(`/admin/${id}`)
        // console.log(this.$router);
      },
      async updateOrder(order) {
        const newOrder = {
          firstname: order.firstname,
          phone: order.phone,
          email: order.email,
          orgname: order.orgname,
          orgadres: order.orgadres,
          count: +order.count,
          isDone: true
        }
        console.log(newOrder);
        try{
          const updateOrder = await this.$axios.put(`/api/v1/orders/update/${order._id}`, newOrder)
          this.$toast.info("Заказ обновлён")
        } catch (e) {
          this.$toast.error('Ошибка обновления заказа!')
        }
      }
    }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/css/admin';
</style>
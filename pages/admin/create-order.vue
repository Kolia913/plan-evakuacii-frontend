<template>
        <main class="admin-content">
      
      
       
          <header class="admin-header">
      
              <div class="admin-header__btns">
                  <nuxt-link tag="a" to="/admin" class="add-order__btn add-order__btn--home">
                      <img class="" src="@/static/icons/home.svg" alt="" />
                    </nuxt-link>
                  <h2 class="admin-header__title">Создать заказ</h2>
             
                  
           
                </div>
      
          </header>
         
        <div class="content-table">
          <div class="form__container">
                      <form class="form" @submit.prevent="submitOrder()">
            <div class="form__box">
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    v-model="$v.firstname.$model"
                    required=""
                  />
                  <label for="fname">Имя</label>
                </div>
                <div class="form__box">
                  <input
                    type="tel"
                    id="phone"
                    name="telephone"
                    maxlength="11"
                    v-model="$v.phone.$model"
                    required=""
                  />
                  <label for="phone">Телефон</label>
                </div>
                <div class="form__box">
                  <input
                    type="email"
                    id="email"
                    name="e-mail"
                    v-model="$v.email.$model"
                    required=""
                  />
                  <label for="email">E-mail</label>
                </div>
                <div class="form__box">
                  <input
                    type="text"
                    id="orgname"
                    name="organization-name"
                    v-model="$v.orgname.$model"
                    required=""
                  />
                  <label for="orgname">Название организации</label>
                </div>
                <div class="form__box">
                  <input
                    type="text"
                    id="orgadres"
                    name="organization-adres"
                    v-model="$v.orgadres.$model"
                    required=""
                  />
                  <label for="orgadres">Адрес организации</label>
                </div>
                <div class="form__box">
                  <input
                    type="number"
                    id="count"
                    name="countscheme"
                    v-model="$v.count.$model"
                    required=""
                  />
                  <label for="count">Количество схем</label>
                </div>
                <input type="submit" value="Отправить" />
        </form>
            </div>
      
        </div>
       
      
    </main>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required, email, minLength, maxLength} from 'vuelidate/lib/validators'

export default {
  layout: 'admin',
  mixins: [validationMixin],
  data(){
        return  {
          firstname: '',
          phone: '',
          email: '',
          orgname: '',
          orgadres: '',
          count: ''
      }
    },
    validations: {
          firstname: {
            required,
            maxLength: maxLength(255),
          },
          phone: {
            required,
            minLength: minLength(7),
            maxLength: maxLength(11)
          },
          email: {
            required,
            email
          },
          orgname: {
            required,
            maxLength: maxLength(255)
          },
          orgadres: {
             required,
            maxLength: maxLength(255)
          },
          count: {
            required
          }
    },
    watch: {
      count: function (newCount, oldCount) {
       if(newCount < 1) {
         this.count = ''
       }
    }
    },
    methods: {
     submitOrder() {
        this.$v.$touch()
        if(this.$v.firstname.$dirty && this.$v.firstname.$invalid) {
          this.$toast.error('Вы ввели некорректное имя!')
          return
        }  
        if(this.$v.phone.$dirty && this.$v.phone.$invalid) {
          this.$toast.error('Вы ввели некорректный телефон!')
          return
        }
        if(this.$v.email.$dirty && this.$v.email.$invalid) {
          this.$toast.error('Вы ввели некорректный E-mail!')
          return
        }
        if(this.$v.orgname.$dirty && this.$v.orgname.$invalid) {
          this.$toast.error('Вы ввели некорректное имя организации!')
          return
        }
        if(this.$v.orgadres.$dirty && this.$v.orgadres.$invalid) {
          this.$toast.error('Вы ввели некорректный адресс организации!')
          return
        }
         if(this.$v.count.$dirty && this.$v.count.$invalid) {
          this.$toast.error('Введите количество схем!')
          return
        }
        const order = {
         firstname: this.firstname,
         phone: this.phone,
         email: this.email,
         orgname: this.orgname,
         orgadres: this.orgadres,
         count: +this.count,
        }
          const newOrder = this.$axios.post('api/v1/orders/create-order', order)
          .then( res => {
            this.$toast.success("Заказ создан!")
                      this.firstname = '',
                      this.phone = '',
                      this.email = '',
                      this.orgname = '',
                      this.orgadres = '',
                      this.count = ''
            })
            .catch( err => this.$toast.error("Ошибка создания заказа, убедитесь в корректности данных!"))
          
      }
    }
}
</script>


<style lang="scss" scoped>
    @import '@/assets/css/admin';
</style>
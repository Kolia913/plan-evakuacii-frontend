<template>
    <div class="order-form col-xl-6 col-md-12 col-sm-12">
        <form class="form" @submit.prevent="submitOrder()">
                <div class="form__caption">
                        <p>
                          Оставить заявку
                        </p>
                </div>
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
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required, email, minLength, maxLength} from 'vuelidate/lib/validators'

export default {
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
            this.$toast.success("Ваш заказ принят!")
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
$height: 38px;
form {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    position: relative;
    padding: 20px 30px;
    width: auto;
}
.form {
    width: 65%;
    margin-left: 22%;
    background-color: #fff;
    position: relative;
    padding-top: $height + 34px;
    -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.25);
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.25);
    &__caption {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        align-self: center;
        color: #406373;
        display: flex;
        align-self: center;
        background-color: #b38887;
        p {
          font-size: 22px;
          line-height: $height;
          font-weight: 700;
          margin-left: 20px;
          margin-top: 10px;
        };        
    }
}
.form__box {
    position: relative;
}

.form__box label {
    position: absolute;
    top: 20px;
    left: 0;
    color: #496F74;
    font-size: 14px;
    font-family: "Montserrat-Regular", sans-serif;
    -webkit-transition: .5s;
    -o-transition: .5s;
    transition: .5s;
}
@media (min-width: 576px) {
    .form__box label {
        font-size: 16px;
    }
}
@media (max-width: 1259px) {
  .form {
    width: 100%;
    margin-left: 0;
    margin-bottom: 20px;
    margin-top: 20px;
  }
}
.form__box input:focus ~ label,
.form__box input:valid ~ label {
    top: 0px;
    font-size: 12px;
    opacity: 0.6;
}

input[type=text],
[type=tel],
[type=email],
[type=number] {
    width: 100%;
    padding: 12px 10px;
    margin: 8px 0;
    display: inline-block;
    border: none;
    border-bottom: rgba(73, 111, 116, 0.24) 1px solid;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: none;
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border-radius: none;
}

input[type=submit] {
    cursor: pointer;
    border: 1px solid #496F74;
    padding: 12px 16px;
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 14px;
    font-weight: 400;
    margin-right: 10px;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 20px;
    background: none;
}

input[type=submit]:hover {
    background-color: #406373;
    color: #fff;
}
</style>
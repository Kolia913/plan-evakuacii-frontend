<template>
    <div class="order-form col-xl-6 col-md-12 col-sm-12 col-xs-12">
        <form class="form" @submit.prevent="submitLogin()">
                <div class="form__caption">
                        <p>
                          Вход
                        </p>
                </div>
            <div class="form__box">
                  <input
                    type="text"
                    id="login"
                    name="login"
                    v-model="$v.login.$model"
                    required=""
                  />
                  <label for="fname">Логин</label>
                </div>
                <div class="form__box">
                  <input
                    type="password"
                    id="pass"
                    name="password"
                    minlength="4"
                    v-model="$v.password.$model"
                    required=""
                  />
                  <label for="pass">Пароль</label>
                </div>
                <input type="submit" value="Войти" />
        </form>
    </div>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required, minLength} from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],
    data() {
        return {
            login: '',
            password: ''
        }
    },
    validations: {
        login: {
            required,
        },
        password: {
            required,
            minLength: minLength(6)
        }
    },
    methods: {
        async submitLogin() {
            this.$v.$touch()
            if (this.$v.login.$dirty && this.$v.login.$invalid) {
                this.$toast.error("Вы ввели некорректный логин!")
                return
            }
            if (this.$v.password.$dirty && this.$v.password.$invalid && !this.$v.password.minLengths) {
                this.$toast.error("Пароль должен содержать минимум 6 символов!")
                return
            } else if (this.$v.password.$dirty && this.$v.password.$invalid) {
                this.$toast.error("Вы ввели некорректный пароль!")
                return
            }
            console.log(this.login, this.password);
            try {
                const res = await this.$auth.loginWith('local', {data: {
                    username: this.login,
                    password: this.password
                }})
                this.$toast.success("Вы успешно авторизовались!")
            } catch (e) {
                this.$toast.error("Вы ввели неправильное имя пользователя или пароль")
            }
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
    width:65%;
    margin-left: 10%;
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
    margin-left: 10px;
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
[type=number],
[type=password] {
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
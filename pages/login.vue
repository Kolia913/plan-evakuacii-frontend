<template>
        <section id="login">
        <div class="login row">
            <h1 class="title col-xl-6 col-md-12 col-sm-12">
               <span class="title__blue">
                   ЛИЧНЫЙ
               </span>
               <span class="title__red">
                   КАБИНЕТ
               </span>
            </h1>
            <Login />
        </div>
    </section>
</template>

<script>
import Login from '@/components/Login'

export default {   
    components: {
        Login
    }
}
</script>

<style lang="scss" scoped>
    .login {
            margin-top: 135px;
            padding-left: 70px;
            width: 100%;     
    }
    .title {
        display: flex;
        flex-direction: row;
         -ms-flex-direction: row;
        justify-content: flex-start;
        font-weight: 800;
        letter-spacing: 1.3px;
        font-size: 52px;
        &__blue {
            color: #406373;
        }
        &__red {
            color: #b38887;
        }
    }
    @media (max-width: 1259px) {
    .login {
        margin-right: 20px;
        padding-left: 10px;       
    }
    .title {
        margin-left: 10px;
    }
    }
    @media (max-width: 626px) {
        .title {
            font-size: 46px;
        }
    }
    @media (max-width: 576px) {
        .title {
            display: flex;
            flex-direction: column;
            -ms-flex-direction: column;
            justify-content: center;
        }
}
</style>
<template>
    <div class="col-xl-6 col-md-12 col-sm-12">
       <h1 class="title">
           <span class="title__blue">
            ПЛАН - 
           </span>
           <span class="title__red">
               СХЕМА
           </span>
           <span class="title__blue"><br />
               ЭВАКУАЦИИ
           </span>
       </h1>
       <p class="subtitle">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta exercitationem doloremque quam aut, doloribus voluptate hic ea ab. Laudantium, saepe minima fugit atque consequatur reiciendis blanditiis ipsam adipisci ipsa nisi.
       </p>
       <p class="order__info">
           Оформить заказ на создание план-схем можно двумя способами:
       </p>
       <div class="ways-to-order">
           <div class="ways-to-order__item">
               <img class="check" src="@/static/icon-check.png" alt="">
               <p>
                   Позвонить по телефону <span class="phone">
                       +79193743092
                   </span>
               </p>
           </div>
           <div class="ways-to-order__item">
                   <img class="check" src="@/static/icon-check.png" alt="">
               <p>
                   Заполнить форму
               </p>
           </div>
       </div>
       <div class="price">
           <span class="price__text">Цена 1 схемы =&nbsp;</span>
           <span class="price__value">900&nbsp;</span>
           <span class="price__text"> рублей</span>
       </div>
       <p class="bottom__text">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti distinctio ex labore consequuntur molestiae quidem fuga architecto facilis. Modi aperiam nam ipsa earum tempore ab reiciendis iste aliquam eius pariatur?
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis deleniti, pariatur iure illo mollitia cumque consequuntur neque adipisci, repellat error doloremque assumenda enim atque, incidunt distinctio quam? Dolorum, adipisci eaque!
       </p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .title {
        font-weight: 800;
        letter-spacing: 1.5px;
        &__blue {
            color: #406373;
        }
        &__red {
            color: #b38887;
        }
    }
    .order__info {
        font-size: 18px;
    }
    .ways-to-order {
        padding-left: 40px;
        &__item {
            display: flex;
            justify-content: flex-start;
        }
    }
    .subtitle {
        margin-top: 25px;
    }
    .check {
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }
    .price {
        display: flex;
        justify-content: flex-start;
        font-weight: 500;
        font-size: 24px;
        margin-top: 25px;
        &__text {
            color: #406373;
        }
        &__value {
            font-weight: 700;
            letter-spacing: 1px;
            color: #b38887;
        }
    }
    .bottom__text {
        margin-top: 25px;
    }
    .phone {
        font-weight: 600;
        font-size: 18px;
        color: #406373;
    }
@media (max-width: 376px) {
    .title {
        letter-spacing: 1.3px;
    }
}
@media (max-width: 361px) {
 .price {
     font-weight: 700;
     font-size: 22px;
 }
    .title {
        letter-spacing: 1.3px;
        font-size: 32px;
    }
}
@media (max-width: 321px) {
 .price {
     font-weight: 700;
     font-size: 18px;
     &__value {
         font-weight: 800;
     }
 }
 .order__info {
     font-size: 16px;
 }
 .subtitle {
     font-size: 14px;
 }
 .bottom__text {
     font-size: 14px;
 }
 .ways-to-order {
     &__item p {
         font-size: 16px;
     }
 }
}

</style>
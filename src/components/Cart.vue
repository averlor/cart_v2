<template>
    <div class="container">
        <div class="container__cart">
            <div class="container__cart__head">
                <button class="container__cart__head__close" @click.prevent="openCloseCart">
                   <img src="../assets/close.svg" alt="shop close" class="cart__head__close__image">
                   <p class="cart__head__close__text">back to shop</p>
                </button>
            </div>
            <div class="container__cart__content">
                <div class="product" v-for="item in cart" :key="item.id">
                    <div class="product__image">
                        <img :src="item.imageUrl" alt="">
                    </div>
                    <div class="product__title">
                        {{ item.title }}
                    </div>
                    <div class="product__quantity">
                        Quantity: {{ item.quantity }}
                    </div>
                    <div class="product__totalPrice">
                        total price:{{ item.totalPrice }} &#8381;
                    </div>
                    <div class="product__remove">
                        <span @click.prevent="removeFromCart(item)"><img src="../assets/close.svg" alt="удалить"></span>
                    </div>
                </div>
            </div>
            <div class="container__cart__foot">
                <p class="container__cart__foot__subtotal">subtotal:</p>
                <p class="container__cart__foot__totalPrice">{{ totalPrice }}&#8381;</p>
                <button @click.prevent="checkOut" class="container__cart__foot__button">check out</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'cart',
    computed: {
        cart() {
            return this.$store.getters.GET_CART
        },
        totalPrice() {
            let total = 0;
            let cart = this.cart
            cart.forEach(function(item){
                total += item.totalPrice
            });
            return total.toFixed(2)
        }
    },
    methods: {
        openCloseCart() {
            this.$emit('openCloseCart')
        },
        removeFromCart(item) {
            this.$store.commit('REMOVE_FROM_CART', item)
        },
        checkOut() {
            let isCheck = confirm('Вы  точно хотите приобрести эти товары?')
            if (isCheck) {
                this.$store.commit('CHECK_OUT')
                this.openCloseCart()
            }
        }        
    }
}
</script>

<style scoped>
.container{
    position: fixed;
    left: 0;
    top: 0;
    overflow: auto;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.85)
}
.container__cart{
    background-color: #bbb;
    padding: 10px;
    position: fixed;
    right: 0;
    top: 0;
    width: 45vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 5% 1fr 15%;
}
.container__cart__head{
    border-bottom: 1px solid #fff;
}
.container__cart__head__close{
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
}
.container__cart__head__close p{
    display: inline-block;
    margin: 0 auto;
    line-height: 40px;
    height: 40px;
    text-transform: uppercase;
}
.container__cart__content{
    overflow: auto;
}
.product{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    padding-top: 2vh;
}
.product__image{
    grid-row: 1 / 3;
}
.product__image img{
    width: 80%;
    height: 80%;
}
.product__title{
    grid-column: 2 / span 2;
    font: 400 1.1em Arial, sans-serif;
}
.product__quantity{
    grid-column-start: 2;
    grid-row-start: 2;
}
.product__totalPrice{
    grid-row-start: 2;
    grid-column-start: 3;
}
.product__remove{
    grid-row: 1 / span 2;
    justify-self: center;
}
.container__cart__foot{
    border-top: 1px solid #fff;
    width: 100%;
    margin: 1vh auto;
    display: grid;
    grid-template-columns: repeat(1fr);
    grid-template-rows: 40% 1fr;
}
.container__cart__foot__subtotal{
    grid-column-start: 1;
    grid-row-start: 1;
    text-transform: uppercase;
    padding-left: 1vw;
    color: darkgreen;
}
.container__cart__foot__totalPrice{
    grid-column-start: 2;
    grid-row-start: 1;
    justify-self: end;
    padding-right: 1vw;
    color: darkgreen;
}
.container__cart__foot__button{
    grid-column: 1 / 3;
    justify-content: center;
    width: 40%;
    height: 70%;
    margin: 0 auto;
    text-transform: uppercase;
    background-color: #000;
    color: #fff;
    font-weight: 600;
    border: 1px solid #000;
    border-radius: 5px;
    transition: background-color .3s ease, color .3s ease;
}
.container__cart__foot__button:hover{
    background-color: gold;
    color: #000;
}
/* for medium screen */
@media all and (max-width: 800px) and (min-width: 501px) {
    .container__cart{
        width: 100vw;
    }
}
/* for small screen */
@media all and (max-width: 450px) {
    .container__cart{
        width: 100vw;
    }
    /* .container__cart__head__close{
        position: absolute;
        top: 0;
        left: 5vw;
    } */
}
</style>
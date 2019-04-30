<template>
    <div class="container">
        <div class="container__cart">
            <div class="container__cart__head">
                <button class="container__cart__head__close" @click.prevent="openCloseCart">
                   <img src="../assets/close.svg" alt="shop close">
                   <p>back to shop</p>
                </button>
            </div>
            <div class="container__cart__content">
                <div class="product" v-for="item in cart" :key="item.id">
                    {{ item.title }} X {{ item.quantity }} - {{ item.totalPrice }} &#8381;<span @click.prevent="removeFromCart(item)"><img src="../assets/close.svg" alt="удалить"></span>
                </div>
            </div>
            <div class="container__cart__foot">
                <p>subtotal</p>
                <p>{{ totalPrice }}&#8381;</p>
                <button @click.prevent="checkOut">check out</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'cart',
    computed: {
        cart() {
            console.log(this.$store.getters.GET_CART)
            return this.$store.getters.GET_CART
        },
        totalPrice() {
            let total = 0;
            for (let item in this.cart) {
                console.log(item);
                console.log(item.totalPrice);
                total += item.totalPrice
            }

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
    grid-template-rows: 5% 1fr 20%;
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
.container__cart__foot{
    border-top: 1px solid #fff;
    margin: 0 auto;
}
/* for small screen */
@media all and (max-width: 450px) {
    .container__cart{
        width: 100vh;
    }
    /* .container__cart__head__close{
        position: absolute;
        top: 0;
        left: 5vw;
    } */
}
</style>
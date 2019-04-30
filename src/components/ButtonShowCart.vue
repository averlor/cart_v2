<template>
    <div class="button">
        <button class="button__cart" @click.prevent="openCloseCart">
            <img src="../assets/cart.svg" alt="shop cart">
        </button>
    </div>
</template>

<script>

export default {
    methods: {
        openCloseCart() {
            this.$emit('openCloseCart')
        }
    }
}
</script>

<style scoped>
.button{
    width: 100px;
    text-align: center;
    position: fixed;
    right: 0;
    /* z-index: 1; */

}
.button__cart{
    display: inline-block;
    width: 70px;
    height: 55px;
    line-height: 55px;
    text-transform: uppercase;
    font: 1.25em sans-serif;
    background-color: transparent;
    color: #000;
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    transition: .5s color;
}
/* .button__cart::before{
    display: block;
    content: '';
    width: 15px;
    height: 15px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ff9d6b;
    z-index: -2;
    transition: .3s;
    animation: toBottom 3s ease infinite;
}
.button__cart::after{
    display: block;
    content: '';
    width: 15px;
    height: 15px;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #fc5e32;
    z-index: -1;
    transition: .3s;
    animation: toTop 3s ease infinite;
}

@keyframes toBottom{
    0%{top: 0}
    50%{top: 40px}
    100%{top:0}
}
@keyframes toTop{
    0%{bottom: 0}
    50%{bottom: 40px}
    100%{bottom:0}
} */
</style>
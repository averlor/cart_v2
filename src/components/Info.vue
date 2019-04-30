<template>
    <div class="container">
        <p class="container__copyright">Copyright &copy; 2019</p>
        <p class="container__count-product">We have {{ countBooks }} products</p>
        <p>You bought {{ countInCart }} product</p> 
    </div>
</template>

<script>

export default {
    name: 'footer',
    computed: {
        countBooks() {
            return this.$store.getters.GET_BOOKS.length
        },
        countInCart() {
            return this.$store.getters.GET_CART.length
        }
    }
}
</script>

<style scoped>
.container{
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-content: center;
}
</style>
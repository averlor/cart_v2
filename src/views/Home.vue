<template>
  <div class="wrapper">
    <header>
      <ShowCart @openCloseCart="openCloseCart"></ShowCart>
      <cart v-show="drawer" @openCloseCart="openCloseCart"></cart>
    </header>
    <section class="wrapper__content">
      <section class="filter"><Filters/></section>
      <section class="product"><ProductList @openCloseCart="openCloseCart"/></section>
    </section>
    <footer class="footer">
      <Info/>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue'
import cart from '@/components/Cart.vue'
import ShowCart from '@/components/ButtonShowCart.vue'
import Filters from '@/components/Filters.vue'
import Info from '@/components/Info.vue'

export default {
  name: 'home',
  components: {
    ProductList,
    cart,
    ShowCart,
    Filters,
    Info
  },
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    openCloseCart() {
      this.drawer = !this.drawer
    }
  }

}
</script>

<style scoped>
.wrapper{
  width: 95vw;
  display: grid;
  grid-template-rows: 5vh 1fr 5vh;
}
header{
  margin: 0 auto 1vh auto;
}
.wrapper__content{
  margin: 3vh auto auto 0;
}
.product{
  margin: 2vh auto;
}
.footer{
  width: 100%;
  margin: 2vh auto;
  border-top: 1px solid gray;
}
</style>


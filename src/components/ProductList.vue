<template>
  <div class="container">
      <div class="books" v-for="book in books" :key="book.id">
        <product :book="book" @addToCart="addToCart(book)"/>
      </div>
  </div>
</template>

<script>

import Product from './Product.vue'

export default {
  name: 'product-list',
  components: {
    Product
  },
  computed: {
    books() {
      return this.$store.getters.GET_BOOKS
    },
    sort() {
      return this.$store.getters.GET_SORT
    },
    searchTerm() {
      return this.$store.getters.GET_SEARCHTERM
    },
    genre() {
      return this.$store.getters.GET_GENRE
    }
  },
  methods: {
    addToCart(book) {
      this.$store.commit('ADD_TO_CART', book)
      this.$emit('openCloseCart')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  width: 90vw;
  margin: 5vh auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(160px, 1fr));
  gap: .5vw;
}
/* for medium screen */
@media all and (max-width: 800px) and (min-width: 501px){
    .container{
      grid-template-columns: repeat(2, 1fr)
    }
}
/* for small screen */
@media all and (max-width: 500px){
  .container{
    grid-template-columns: 1fr;
  }
  .books{
    width: 100%;
  }
  .book{
    align-content: flex-start;
  }
}
</style>

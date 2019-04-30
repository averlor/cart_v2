<template>
  <div class="container">
      <div class="container__books" v-for="book in books" :key="book.id">
        <div class="container__books__current-book">
          <div class="container__books__image">
            <img :src="book.imageUr" alt="Тут картинка">
          </div>
          <div class="container__books__title">{{ book.title }}</div>
          <div class="container__books__cost">Цена: {{ book.cost }} &#8381;</div>
          <div class="container__books__buy">
            <button @click.prevent="addToCart(book)">BUY</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'product-list',
  computed: {
    books() {
      return this.$store.getters.GET_BOOKS
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
.container__books{
  width: 30vw;
  margin: 0 auto;
}
/* .container__books__image{
  width: 90%;
} */
.container__books__image image{
  width: 60%;
  height: 60%;
}
.container__books__title{
  width: 90%;
  margin: 0 auto;
  text-align: center;
  font: 400 1.2em Arial;
}
.container__books__cost{
  width: 90%;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  font: 400 1.1em Arial;
}
.container__books__buy{
  width: 90%;
  margin: 1vh auto;
  text-align: center;
}
.container__books__buy button{
  border-radius: 5px;
  width: 30%;
  height: 3vh;
  outline: none;
  border: 1px solid lightgray;
  background-color: transparent;
}
</style>

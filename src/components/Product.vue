<template>
    <div class="book">
        <img :src="book.imageUrl" alt="Тут картинка" class="book__image">
        <p class="book__genre">{{ book.genre[0] }}</p>
        <p class="book__title">{{ book.title }}</p>
        <p class="book__cost">Цена: {{ book.cost }} &#8381;</p>
        <button @click.prevent="addToCart(book)" class="book__button button__buy">BUY</button>
    </div>
</template>

<script>
export default {
    props: {
        book: {
            type: Object,
            required: true
        }
    },
    methods: {
        addToCart(book){
            this.$emit('addToCart', book)
        }
    }
}
</script>

<style scoped>
.book{
  width: 30vw;
  margin: 1vh auto;
  display: grid;
  align-content: center;
  transition: all .4s ease;
}
.book__image{
  margin: 0 auto 1vh auto;
  padding-top: 1vh;
}
.book__genre{
  width: 90%;
  margin: 0 auto 1vh auto;
  text-align: center;
  font: 200 1em Arial;
}
.book__title{
  width: 90%;
  margin: 0 auto 1vh auto;
  text-align: center;
  font: 400 1.2em Arial;
}
.book__cost{
  width: 90%;
  margin: 0 auto 1vh auto;
  text-align: center;
  text-transform: uppercase;
  font: 400 1.1em Arial;
}
.book__button{
  width: 90%;
  margin: 1vh auto;
  text-align: center;
}
.button__buy{
  border-radius: 5px;
  width: 30%;
  height: 4vh;
  outline: none;
  border: 1px solid lightgray;
  background-color: transparent;
  transition: background-color .3s ease;
}
.book:hover{
  border: 1px solid #ccc;
  z-index: 1;
  border-radius: 5px;
  box-shadow: 2px 3px 5px rgba(0,0,0,.5);
  font-weight: 600;
}
.button__buy:hover{
  background-color: rgb(24, 230, 58);
  color: rgb(3, 3, 3);
  border-color: rgb(3, 77, 15);
}
</style>
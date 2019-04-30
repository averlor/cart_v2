import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import cart from './store/cart.js'
import books from './store/books.js'

export default new Vuex.Store({
  modules: {
    cart,
    books
  }
})

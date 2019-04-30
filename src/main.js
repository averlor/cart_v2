import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebaseConfig from './config/firebase'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.config.productionTip = false
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

Vue.$db = db

new Vue({
  router,
  store,
  render: h => h(App),

  created() {
    //load book
    this.$store.dispatch('LOAD_BOOKS')
  }
}).$mount('#app')
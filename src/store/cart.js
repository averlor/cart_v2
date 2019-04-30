import Vue from 'vue'

export default{
    state: {
        cart: []
    },

    getters: {
        GET_CART: state => state.cart
    },

    mutations: {
        ADD_TO_CART(state, payload) {
            let found = state.cart.find(book => book.id === payload.id)

            if (found) {
                found.quantity++;
                found.totalPrice = found.quantity * found.cost
            } else {
                state.cart.push(payload)

                Vue.set(payload, 'quantity', 1);
                Vue.set(payload, 'totalPrice', payload.cost)
            }
        },
        REMOVE_FROM_CART(state, payload) {
            let index = state.cart.indexOf(payload)

            if (index > -1) {
                // TODO: think about quantity => if quantity > 1, then product.quantity--
                let product = state.cart[index]
                if (product.quantity > 1) {
                    product.quantity--;
                    product.totalPrice -= product.cost
                } else {
                    state.cart.splice(index, 1)
                }
            }
        },
        CHECK_OUT(state) {
            state.cart = []
        }
    },

    actions: {

    }
}
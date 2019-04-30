import Vue from 'vue'

export default{
    state: {
        // FIX: replace store on connect to firebase
        books: []
    },

    getters: {
        GET_BOOKS: state => state.books
    },

    mutations: {
        SET_BOOKS(state, payload) {
            state.books = payload
        },
        SORT_BOOK_LOWEST(state) {
            state.books.sort(function(a,b) {
                return a.cost - b.cost
            })
        },
        SORT_BOOK_HIGHEST(state) {
            state.books.sort(function(a,b) {
                return b.cost - a.cost
            })
        }
    },

    actions: {
        LOAD_BOOKS({commit}) {
            Vue.$db.collection('books')
            .get()
            .then(querySnapshot => {
                let books = []
                querySnapshot.forEach(element => {
                    const data = element.data()
                    let book = {
                        id: element.id,
                        author: data.author,
                        cost: data.cost,
                        description: data.description,
                        genre: data.genre,
                        imageUrl: data.imageUrl,
                        rating: data.rating,
                        title: data.title
                    }
                    books.push(book)
                });
                commit('SET_BOOKS', books)

            })
            .catch(error => console.log(error))
        }
    }
}
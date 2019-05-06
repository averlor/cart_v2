import Vue from 'vue'

export default{
    state: {
        genre: [],
        expanded: false,
        searchTerm: null,
        filter: '',
        books: []
    },

    getters: {
        // get variables
        GET_BOOKS: state => state.books,
        GET_GENRE: state => state.genre,
        GET_EXPANDED: state => state.expanded,
        GET_SEARCHTERM: state => state.searchTerm,
        GET_FILTER: state => state.filter,

        // filter
        FILTER_BY_SEARCH: state => {
            state.books.filter(book => book.title.toLowerCase().indexOf(state.searchTerm.toLowerCase()) >= 0)
        },
        SORT_BOOK_LOWEST: state => {
            state.books.sort(function(a,b) {
                return a.cost - b.cost
            })
        },
        SORT_BOOK_HIGHEST: state => {
            state.books.sort(function(a,b) {
                return b.cost - a.cost
            })
        }
    },
    mutations: {
        SET_BOOKS(state, payload) {
            state.books = payload
        },
        SET_GENRE(state, payload) {
            state.genre = payload
        },
        SET_EXPANDED(state, payload) {
            state.expanded = payload
        },
        SET_SEARCHTERM(state, payload) {
            state.searchTerm = payload
        },
        SET_FILTER(state, payload) {
            state.filter = payload
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
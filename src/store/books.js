import Vue from 'vue'

export default{
    state: {
        genre: [],
        expanded: false,
        searchTerm: null,
        sort: '',
        books: []
    },

    getters: {
        GET_BOOKS: state => state.books.filter(book => {
            return state.searchTerm !== null ? book.title.toLowerCase().indexOf(state.searchTerm.toLowerCase()) >= 0 : state.genre.length === 0 ? true : state.genre.includes(book.genre[0])
        })
        .sort((a,b) => {
            switch (state.sort) {
                case '':  break;
                case 'lowest': return a.cost-b.cost;
                case 'highest': return b.cost-a.cost
            }
        }),
        GET_GENRE: state => state.genre,
        GET_EXPANDED: state => state.expanded,
        GET_SEARCHTERM: state => state.searchTerm,
        GET_SORT: state => state.sort
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
        SET_SORT(state, payload) {
            state.sort = payload
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
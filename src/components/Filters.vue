<template>
    <div class="container">
        <!-- Filter genre -->
        <div class="container__multiselect">
            <div class="selectBox" @click.prevent="showCheckboxes()">
                <select>
                    <option>Select genres</option>
                </select>
                <div class="overSelect"></div>
            </div>
            <div id="checkboxes">
                <label for="one">
                    <input type="checkbox" id="one" value="Роман" v-model="genre"/>Роман</label>
                <label for="two">
                    <input type="checkbox" id="two" value="Детективы" v-model="genre"/>Детективы</label>
                <label for="three">
                    <input type="checkbox" id="three" value="Приключения" v-model="genre"/>Приключения</label>
                <label for="four">
                    <input type="checkbox" id="four" value="Фантастика" v-model="genre"/>Фантастика</label>
                <label for="five">
                    <input type="checkbox" id="five" value="Ужасы" v-model="genre"/>Ужасы</label>
            </div>
        </div>

        <!-- Filter cost -->
        <div class="container__cost">
            <select name="" id="" v-model="sort">
                <option selected disabled value="">Sort by</option>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
            </select>
        </div>
        <!-- Filter title -->
        <div class="container__search">
            <input type="text" v-model="searchTerm" placeholder="Search...">
        </div>
    </div>
</template>

<script>

export default {
    computed: {
        genre: {
            get() {
                return this.$store.getters.GET_GENRE
            },
            set(newValue) {
                this.$store.commit('SET_GENRE', newValue)
            }
        },
        expanded:{
            get() {
                return this.$store.getters.GET_EXPANDED
            },
            set(newValue) {
                this.$store.commit('SET_EXPANDED', newValue)
            }
        },
        searchTerm:{
            get() {
                return this.$store.getters.GET_SEARCHTERM
            },
            set(newValue) {
                this.$store.commit('SET_SEARCHTERM', newValue)
            }
        },
        sort: {
            get() {
                return this.$store.getters.GET_SORT
            },
            set(newValue) {
                this.$store.commit('SET_SORT', newValue)
            }
        }
    },
    methods: {
        showCheckboxes() {
            var checkboxes = document.getElementById("checkboxes");
            if (!this.expanded) {
                checkboxes.style.display = "block";
                this.expanded = true;
            } else {
                checkboxes.style.display = "none";
                this.expanded = false;
            }
        }
    }
}
</script>

<style scoped>
/* general */
.container{
    width: 90vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    gap: .5vw;
}
/* genre */
.selectBox {
    position: relative;
    /* z-index: -1; */
}
.selectBox select {
    width: 90%;
    height: 4vh;
    font: 400 1.2em Arial;
    background-color: transparent;
    border-radius: 5px;
}
.overSelect {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
#checkboxes {
    display: none;
    border: 1px #dadada solid;
}
#checkboxes label {
    display: block;
    font: 400 1.1em Arial;
    text-align: left;
    padding-left: 10px;
}
#checkboxes label:hover {
    background-color: #1e90ff;
}
/* cost */
.container__cost select{
    width: 90%;
    height: 4vh;
    font: 400 1em Arial;
    background-color: transparent;
    border-radius: 5px;
}
/* search */
.container__search input{
    width: 90%;
    height: 3vh;
    padding-left: 5px;
    font: 400 1em Arial;
    background-color: transparent;
    border-radius: 5px;
}
/* for small screen */
@media all and (max-width: 450px) {
    .container{
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }
    .selectBox select{
        width: 100%;
        height: 5vh;
        margin-bottom: 1vh;
    }
    .container__cost select{
        width: 100%;
        height: 5vh;
        margin-bottom: 1vh;
    }
    .container__search input{
        width: 90%;
        height: 5vh;
    }
}
</style>
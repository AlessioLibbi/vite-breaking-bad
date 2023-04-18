<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";
import { store } from "./store"


export default {
    components: {
        AppHeader,
        AppMain
    },
    data() {
        return {
            store
        }
    },
    mounted() {
        this.filterArche()
    },

    methods: {
        filterArche() {
            const params = {};
            if (this.store.filter) {
                params.tipus = this.store.filter;
            }
            axios.get(this.store.apiURL, {
                params: {
                    archetype: params.tipus
                }
            }).then(resp => {
                this.store.cardArray = resp.data.data;
            }).catch(error => {
                console.log(error);
            }).finally(() => {

            })
        },
        handleFilter() {
            this.filterArche();
        }
    }

}

</script>

<template>
    <AppHeader />
    <AppMain @filterArche="handleFilter" />
</template>

<style  lang="scss">
@use "./styles/general.scss" as *;
</style>
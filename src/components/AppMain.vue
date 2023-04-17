<script>
import AppCard from "./AppCard.vue";
import { store } from "../store"

export default {
    name: "AppMain",
    components: {
        AppCard
    },
    data() {
        console.log(store.cardArray);
        return {
            store,
        }

    },

}
</script>

<template>
    <div class="container-fluid  p-5">
        <select name="" id="">
            <option value="">Dungeon</option>
            <option value="">and</option>
            <option value="">Dragons</option>
        </select>
        <div class="container p-5 my-5">
            <div class="header d-flex align-items-center">
                <h3 class="mx-3">Found 20 card</h3>
            </div>
            <div class="row row-cols-5 d-flex flex-row">
                <AppCard :cards="store.cardArray" />
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.container-fluid {
    background-color: #D48F38;

    .container {
        background-color: white;

        .header {
            background-color: #212529;
            color: white;
            height: 80px;

        }

        .col {
            background-color: red;
        }
    }
}
</style>
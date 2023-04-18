<script>
import AppCard from "./AppCard.vue";
import { store } from "../store"

export default {
    name: "AppMain",
    emits: ["filterArche"],
    components: {
        AppCard
    },
    data() {
        return {
            store,
            cardType: ["Nordic", "Spellbook", "Ancient Gear"]
        }

    },

}
</script>

<template>
    <div class="container-fluid  p-5">
        <select @change="$emit('filterArche')" name="tipus" id="tipus" v-model="store.filter">
            <option value="">All</option>
            <option v-for="tipus in cardType" :value="tipus">{{ tipus }}</option>

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
import { reactive } from "vue";

export const store = reactive({
    cardArray: [],
    loading: false,
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    filter: ""
});

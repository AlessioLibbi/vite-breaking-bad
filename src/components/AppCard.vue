<script>
export default {
    name: "AppCard",
    props: {
        cards: Object
    }
}
</script>

<template>
    <div class="col" v-for="(card, index) in cards">
        <div class="card mb-3">
            <img :src="card.card_images[0].image_url_small" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">{{ card.name }}</h5>
                <p class="card-text">{{ card.type }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    height: 400px;
    background-color: #D48F38;

    h5 {
        text-transform: uppercase;
        color: white;
        font-size: 1rem;
    }
}
</style>
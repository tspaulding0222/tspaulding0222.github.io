<template>
    <div class="unsplash-grid">
        <grid-item 
            v-for="image in images"
            :key="image.id"
            v-bind:data="image">
        </grid-item>
    </div>
</template>

<script>
import {toJson} from 'unsplash-js';
import GridItem from "./UnsplashGridItem.vue";

export default {
    data: function() {
        return {
            unsplash: this.$store.state.unsplash,
            images: []
        }
    },
    components: {
        GridItem
    },
    created: function() {
        this.getUnsplashImages();
    },
    methods: {
        getUnsplashImages() {
            this.unsplash.photos.listCuratedPhotos(2, 15, "latest")
            .then(toJson)
            .then(json => {
                this.images = json;
            });
        },
    }
}
</script>

<style lang="scss" scoped>
    .unsplash-grid {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 90%;
        margin: 0 auto;
    }
</style>

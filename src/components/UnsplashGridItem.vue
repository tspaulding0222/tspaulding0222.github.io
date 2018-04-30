<template>
    <div class="unsplash-grid-item" v-on:click="onImgClicked">
        <div class="unsplash-grid-item-img-container">
            <img :src="data.urls.regular">
        </div>
        <h5 class="unsplash-grid-item-title">
            {{data.user.first_name}} {{data.user.last_name}}
        </h5>
    </div>
</template>

<script>
export default {
    props: ['data'],
    mounted: function() {
        this.onImgLoaded();
    },
    methods: {
        onImgLoaded() {
            var that = this;    
            var img = this.$el.querySelector("img");
            img.onload = function() {
                if(this.height&& this.width) {
                    that.$el.classList.add("unsplash-grid-item--fadeIn");
                }
                else {
                    console.warn("Unsplash Grid Item Image Load Error");
                }
            }
        },
        onImgClicked() {
            this.$store.commit("updateCurrentImage", this.data);
            this.$router.push({name: "image", params: {data: this.data}});
        }
    }
}
</script>

<style lang="scss" scoped>
    .unsplash-grid-item {
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 800px;
        margin-bottom: 10px;
        margin-left: 5px;
        margin-right: 5px;
        background:#4a4a4a;
        cursor: pointer;
        opacity: 0;
        transition: all .5s ease-in-out;

        img {
            filter: grayscale(100%);
        }
    }

    .unsplash-grid-item--fadeIn {
        opacity: 1;
    }

    .unsplash-grid-item-img-container {
        flex-grow: 1;
        width: auto;
        height: 780px;
        overflow: hidden;

        img {
            height: 100%;
            width: auto;
        }
    }

    .unsplash-grid-item-title {
        position: relative;
        right: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
        height: 18px;
        width: 100%;
        text-align: right;
        font-size: .8em;
        font-weight: 900;
        letter-spacing: 2px;
        color: black;
    }
</style>

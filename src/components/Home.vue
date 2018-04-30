<template>
    <div class="home">
        <div class="home-header">
            <h1>Latest Unsplash Images</h1>
        </div>
        <unsplash-grid></unsplash-grid>
    </div>
</template>

<script>
import UnsplashGrid from './UnsplashGridContainer.vue'

export default {
    name: 'app',
    components: {
        UnsplashGrid
    }
}
</script>

<style lang="scss" scoped>
    .home {
    }

    .home-header {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 250px;
        margin: 0 auto 10px auto;
        padding: 0;
        color: white;
        background: url('../../static/img/header_bg.jpg');
        background-size: cover;
        background-repeat: no-repeat;

        h1 {
            width: 90%;
            margin: 0 auto;
            font-size: 2.5em;
            line-height: 2em;
            text-align: center;
            text-transform: capitalize;
            letter-spacing: 1px;
        }
    }
</style>
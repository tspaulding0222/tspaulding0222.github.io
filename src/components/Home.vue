<template>
    <div class="home">
        <div class="home-header">
            <h1>unSplash</h1>
            <div class="home-header-menu">
                <a>Home</a>
                <a>Archive</a>
                <a>Options</a>
                <a>About</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    components: {
        
    }
}
</script>

<style lang="scss" scoped>
    .home-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 250px;
        margin: 0 auto 10px auto;
        padding: 0;
        color: white;

        h1 {
            width: 90%;
            margin: 50px auto 0 auto;
            font-size: 2.5em;
            line-height: 2em;
            text-align: center;
            letter-spacing: 1px;
        }
    }

    .home-header-menu {
        display: flex;
        flex-direction: row;
        margin-bottom: 40px;

        a {
            display: block;
            margin-left: 7px;
            margin-right: 7px;

            &:hover {
                cursor: pointer;
                color: darkgray;
            }
        }
    }
</style>
<template>
    <div class="header">
        <h1 class="header-content">
            Thomas Spaulding, UX Designer and Front End Developer extraordinaire based in Ohio.
        </h1>
    </div>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style lang="scss" scoped>
    @import '../styles/shared.scss';

    .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        margin-top: 50px;
    }

    .header-content {
        margin: 0;
        padding: 0;
        font-size: 45px;
        font-weight: 300;
        font-family: $do-hyeon-font;    
    }
</style>
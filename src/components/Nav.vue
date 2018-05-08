<template>
    <div class="nav-bar">
        <div class="nav-bar-icon">
            <img src="../../static/img/helix.png">
        </div>
        <div class="nav-bar-links">
            <router-link to="/">Home</router-link>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/examples">Examples</router-link>
            <router-link to="/front-end-tools">Front End Tools</router-link>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    @import '../styles/shared.scss';

    .nav-bar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        @include center-margin();
        margin-top: 15px;
    }

    .nav-bar-icon {
        flex-grow: 1;
    }

    .nav-bar-links {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-family: $do-hyeon-font;

        a {
            margin-left: 5px;
            margin-right: 5px;
            color: black;
            text-decoration: none;

            &:active, 
            &:visited {
                color: black;
                text-decoration: none;
            }

            &:hover {
                color: $gray;
            }
        }
    }
</style>
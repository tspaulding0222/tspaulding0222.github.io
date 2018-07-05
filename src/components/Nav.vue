<template>
    <div class="width-container">
        <div class="nav-bar">
            <div class="nav-bar-icon">
                <img src="../../static/img/logo/logoo.png">
            </div>
            <div class="nav-bar-links">
                <router-link class="active" to="/">Home</router-link>
                <router-link to="/projects">Projects</router-link>
                <router-link to="/examples">Examples</router-link>
                <router-link to="/front-end-tools">Front End Tools</router-link>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
    @import "../styles/shared.scss";

    .nav-bar {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .nav-bar-icon img {
        width: 225px;
    }

    .nav-bar-links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        flex-grow: 1;
    }

    .nav-bar-links a {     
        margin-right: 15px;
        font-size: .8em;
        font-weight: 900;
        color: $blue;
        text-decoration: none;

        &:hover {
            color: $light-blue;
        }
    }
    
    .nav-bar-links a:last-of-type {
        margin-right: 0;
    }
</style>
<template>
    <div id="app">
        <nav-bar></nav-bar>
        <div class="page-container">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import NavBar from './components/Nav.vue';

export default {
    name: 'app',
    components: {
        NavBar
    }
}
</script>

<style lang="scss" scoped>
    @import './styles/shared.scss';

    .page-container {
        @include center-margin();
        margin-top: 10px;
    }

    .fade-enter-active, .fade-leave-active {
        position: absolute;
        transition: opacity .4s;
    }
    
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>

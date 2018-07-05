<template>
    <div id="app">
        <nav-bar></nav-bar>
        <div>
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
        <dat-footer></dat-footer>
    </div>
</template>

<script>
import NavBar from './components/Nav.vue';
import DatFooter from './components/DatFooter.vue';

export default {
    name: 'app',
    components: {
        NavBar,
        DatFooter
    }
}
</script>

<style lang="scss" scoped>
    @import './styles/shared.scss';

    .fade-enter-active, .fade-leave-active {
        position: absolute;
        transition: opacity .4s;
    }
    
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    footer {
        height: 40px;
        color: white;
    }
</style>

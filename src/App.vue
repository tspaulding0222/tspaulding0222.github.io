<template>
    <div id="app">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active {
        position: absolute;
        transition: opacity .4s;
    }
    
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>

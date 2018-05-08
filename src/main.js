import Vue from 'vue';
import Vuex from 'vuex'
import router from './router'
import App from './App.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // unsplash: unsplashAuth,
        // currentImage: {}
    },
    mutations: {
        // updateCurrentImage(state, image) {
        //     state.currentImage = image;
        // }
    }
})

new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: {App}
});
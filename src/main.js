import Vue from 'vue';
import Vuex from 'vuex'
import router from './router'
import App from './App.vue';
import Unsplash from 'unsplash-js';

Vue.use(Vuex);

const unsplashAuth = new Unsplash({
    applicationId: "e0ab8e6db30140922270dbbbae440d167e44572cfc92bc43e3cb2727ec0bf014",
    secret: "904e40c14db17202d6048d5dcf1c97f3821904bf5d840c8aee613f379c8055b8",
    callbackUrl: "/",
    headers: {
        "Authorization": "Client-ID e0ab8e6db30140922270dbbbae440d167e44572cfc92bc43e3cb2727ec0bf014"
    }
})

const store = new Vuex.Store({
    state: {
        unsplash: unsplashAuth
    },
    mutations: {

    }
})

new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: {App}
});
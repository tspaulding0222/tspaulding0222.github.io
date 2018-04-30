import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home.vue';
import UnsplashImage from '../components/UnsplashImage.vue';

Vue.use(Router);

export default new Router(
    {
    routes: [ 
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/image',
            name: 'Unsplash Image',
            component: UnsplashImage
        }    
    ]
})
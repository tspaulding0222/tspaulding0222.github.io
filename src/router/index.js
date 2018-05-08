import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home.vue';
import Projects from '../components/Projects.vue';
import Examples from '../components/Examples.vue';
import FrontEndTools from '../components/FrontEndTools.vue';

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
            path: '/projects',
            name: 'Projects',
            component: Projects,
            props: true
        },
        {
            path:'/examples',
            name: 'Examples',
            component: Examples,
            props: true
        },
        {
            path:'/front-end-tools',
            name: 'Front end tools',
            component: FrontEndTools,
            props: true
        }     
    ]
})

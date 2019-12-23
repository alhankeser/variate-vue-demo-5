import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './Home.vue';

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            props: {
                variateId: 'Home'
            }
        },
    ]
})

router.beforeEach((to, from, next) => {
    router.app.$variate.initialize({
        view: to,
    }, next);
});

export default router
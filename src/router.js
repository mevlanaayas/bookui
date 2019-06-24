import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home';
import Books from './Books';
import Words from './Words';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [

        // user specific routes
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/books',
            name: 'books',
            component: Books
        },
        {
            path: '/words',
            name: 'words',
            component: Words
        },

        {path: '*', redirect: '/'}
    ]
});

export default router

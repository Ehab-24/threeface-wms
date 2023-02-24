import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Dashbaord from '../views/Dashboard.vue';
import Projects from '../views/Projects.vue';
import Account from '../views/Account.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashbaord
    },
    {
        path: '/account',
        name: 'account',
        component: Account
    },
];

const router = createRouter({
    history: createWebHistory('http://localhost:5173/'),
    routes
});

export default router;
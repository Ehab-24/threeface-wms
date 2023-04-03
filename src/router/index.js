import { createRouter, createWebHistory } from 'vue-router';
import { getUserState } from '../repository/authentication.js';

import Home from '../views/HomePage.vue';


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginPage.vue'),
        meta: { requiresUnAuth: true }
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('../views/SignupPage.vue'),
        meta: { requiresUnAuth: true }
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('../views/ForgotPasswordPage.vue'),
        meta: { requiresUnAuth: true }
    }
];

const router = createRouter({
    history: createWebHistory('http://localhost:5173/'),
    routes
});

router.beforeEach(async (to, _, next) => {

    const isAuthenticated = await getUserState();
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const requiresUnAuth = to.matched.some((record) => record.meta.requiresUnAuth);
    
    if (requiresAuth && !isAuthenticated) {
        next('/login');
    } else if (requiresUnAuth && isAuthenticated) {
        next('/');
    } else {
        next();
    }
});

export default router;
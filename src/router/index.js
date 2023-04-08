import { createRouter, createWebHistory } from 'vue-router';
import { getUserState } from '../repository/authentication.js';

import BaseTemplate from '../views/BaseTemplate.vue';

const routes = [
    {
        path: '/',
        name: 'base',
        component: BaseTemplate,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('../views/HomePage.vue'),
            },
            {
                path: '/profile',
                name: 'profile',
                component: () => import('../views/ProfilePage.vue'),
            },
            {
                path: '/inventory',
                name: 'inventory',
                component: () => import('../views/InventoryPage.vue'),
            },
            {
                path: '/invoice',
                name: 'invoice',
                component: () => import('../views/InvoicePage.vue'),
            },
            {
                path: '/add-product',
                name: 'add-product',
                component: () => import('../views/AddProduct.vue'),
            }
        ]
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
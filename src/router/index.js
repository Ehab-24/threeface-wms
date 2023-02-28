import { createRouter, createWebHistory } from 'vue-router';
import { getUserState } from '../firebase/authentication.js';

import Login from '../views/auth/LoginPage.vue';
import Signup from '../views/auth/SignupPage.vue';
import ForgotPassword from '../views/auth/ForgotPasswordPage.vue';
import Account from '../views/AccountPage.vue';
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
        component: Login,
        meta: { requiresUnAuth: true }
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup,
        meta: { requiresUnAuth: true }
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: ForgotPassword,
        meta: { requiresUnAuth: true }
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import('../views/ProjectsPage.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/project/:id',
        name: 'project',
        props: true,
        component: () => import('../views/ProjectPage.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/DashboardPage.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/account',
        name: 'account',
        component: Account,
        meta: { requiresAuth: true }
    },
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
import { createRouter, createWebHistory } from 'vue-router';
import { getAuth } from 'firebase/auth';
import { getUserState } from '../firebase/authentication.js';

import Login from '../views/LoginPage.vue';
import Signup from '../views/SignupPage.vue';
import Account from '../views/AccountPage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomePage.vue'),
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
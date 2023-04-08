import {
  createRouter,
  createWebHistory,
  NavigationGuard,
  Router,
} from "vue-router";
import { getUserState } from "../repository/authentication.js";

import BaseTemplate from "../views/BaseTemplate.vue";

const routes = [
  {
    path: "/",
    name: "base",
    component: BaseTemplate,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../views/HomePage.vue"),
      },
      {
        path: "/profile",
        name: "profile",
        component: () => import("../views/ProfilePage.vue"),
      },
      {
        path: "/inventory",
        name: "inventory",
        component: () => import("../views/InventoryPage.vue"),
      },
      {
        path: "/invoice",
        name: "invoice",
        component: () => import("../views/InvoicePage.vue"),
      },
      {
        path: "/customerlog",
        name: "customerlog",
        component: () => import("../views/customerlogs.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginPage.vue"),
    meta: { requiresUnAuth: true },
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignupPage.vue"),
    meta: { requiresUnAuth: true },
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("../views/ForgotPasswordPage.vue"),
    meta: { requiresUnAuth: true },
  },
];

const router: Router = createRouter({
  history: createWebHistory("http://localhost:5173/"),
  routes,
});

const onBeforeEach: NavigationGuard = async (to, _, next) => {
  // * Returns a promise that resolves to the user object or null if no user is signed in.
  const user: User = await getUserState();

  const requiresAuth: boolean = to.matched.some(
    (record) => record.meta.requiresAuth
  );
  const requiresUnAuth: boolean = to.matched.some(
    (record) => record.meta.requiresUnAuth
  );

  if (requiresAuth && !user) {
    next("/login");
  } else if (requiresUnAuth && user) {
    next("/");
  } else {
    next();
  }
};

router.beforeEach(onBeforeEach);

export default router;

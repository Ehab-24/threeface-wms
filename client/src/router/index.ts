import {
  createRouter,
  createWebHistory,
  NavigationGuard,
  Router
} from 'vue-router';
import { getUser } from '../repository/app/user';
import routes from './routes';
import { User } from '../types';

const router: Router = createRouter({
  history: createWebHistory('http://localhost:5173/'),
  routes
});

const onBeforeEach: NavigationGuard = async (to, from, next) => {
  const requiresAuth: boolean = to.matched.some(
    (record) => record.meta.requiresAuth
  );
  const requiresUnAuth: boolean = to.matched.some(
    (record) => record.meta.requiresUnAuth
  );
  const fromUnAuth: boolean = to.matched.some(
    (record) => record.meta.requiresUnAuth
  );

  let user: User | null;
  if (fromUnAuth) {
    user = null;
  } else {
    user = await getUser();
  }

  if (!user && requiresAuth) {
    next('/auth');
  } else if (user && requiresUnAuth) {
    next('/');
  } else {
    next();
  }
};

router.beforeEach(onBeforeEach);

export default router;

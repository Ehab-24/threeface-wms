export default [
  {
    path: '/',
    name: 'base',
    component: () => import('../views/BaseTemplate.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/HomePage.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/ProfilePage.vue')
      },
      {
        path: '/inventory',
        name: 'inventory',
        component: () => import('../views/ProductsPage.vue')
      },
      {
        path: '/invoice',
        name: 'invoice',
        component: () => import('../views/InvoicePage.vue')
      },
      {
        path: '/add-product',
        name: 'add-product',
        component: () => import('../components/AddProduct.vue')
      },
      {
        path: '/add-customer',
        name: 'add-customer',
        component: () => import('../components/AddCustomer.vue')
      },
      {
        path: '/customers',
        name: 'customers',
        component: () => import('../views/CustomersPage.vue')
      },
      {
        path: '/suppliers',
        name: 'suppliers',
        component: () => import('../views/SuppliersPage.vue')
      }
    ]
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/AuthPage.vue'),
    meta: { requiresUnAuth: true }
  }
];

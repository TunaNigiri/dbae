
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name: 'LoginForm', component: () => import('pages/LoginForm.vue') },
    ]
  },
  
  { 
    path: '/homePage',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/homePage', name: 'homePage', component: () => import('pages/HomePage.vue') },
    ] 
  },
  { 
    path: '/Users',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/Users', name: 'Users', component: () => import('pages/modules/Users.vue') },
    ] 
  },
  { 
    path: '/Products',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/Products', name: 'Products', component: () => import('pages/modules/Products.vue') },
    ] 
  },
  { 
    path: '/Services',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/Services', name: 'Services', component: () => import('pages/modules/Services.vue') },
    ] 
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

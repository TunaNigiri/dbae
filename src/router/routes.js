
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'LoginForm', component: () => import('pages/LoginForm.vue') },
    ]
  },
  
  { path: '/homePage', name:'homePage', component: () => import('pages/HomePage.vue') },
  
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

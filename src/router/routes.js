
const routes = [
  {
    path: '/',
    component: () => import('layouts/default.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'Events', component: () => import('pages/Events.vue')},
      { path: 'Rules', component: () => import('pages/Rules.vue')},
      { path: 'PrivacyPolicy', component: () => import('pages/PrivacyPolicy.vue')},
      { path: 'Supercars-chal', component: () => import('pages/Supercars-chal.vue')},
      { path: 'TCM', component: () => import('pages/TCM.vue')}
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

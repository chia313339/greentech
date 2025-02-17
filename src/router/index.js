// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import GroupPage from '../views/GroupPage.vue'
import GroupNavContent from '../views/GroupNavContent.vue'

const validGroups = ['greentech', 'city', 'healthcare']

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/:group',
    component: GroupPage,
    beforeEnter: (to, from, next) => {
      if (validGroups.includes(to.params.group.toLowerCase())) {
        next()
      } else {
        next('/')
      }
    },
    children: [
      {
        path: '',
        redirect: to => {
          return { name: 'GroupNav', params: { group: to.params.group, navItem: 'about' } }
        }
      },
      {
        path: ':navItem',
        name: 'GroupNav',
        component: GroupNavContent,
        props: route => {
          const navMap = {
            about: '關於競賽',
            schedule: '競賽時程',
            enterprise: '企業出題',
            instructions: '報名須知',
            scoring: '評分標準',
            awards: '獎項及義務',
            passed: '通過名單',
            retrospective: '歷屆回顧',
            faq: 'FAQ',
            contact: '聯繫我們'
          }
          return {
            navKey: route.params.navItem,
            label: navMap[route.params.navItem] || ''
          }
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

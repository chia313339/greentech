import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import GroupPage from '../views/GroupPage.vue'
import page2024 from '../views/2024.vue'
import page2023 from '../views/2023.vue'

// Greentech 頁面
import GreentechAbout from '../views/greentech/About.vue'
import GreentechSchedule from '../views/greentech/Schedule.vue'
import GreentechEnterprise from '../views/greentech/Enterprise.vue'
import GreentechInstructions from '../views/greentech/Instructions.vue'
import GreentechScoring from '../views/greentech/Scoring.vue'
import GreentechAwards from '../views/greentech/Awards.vue'
import GreentechPassed from '../views/greentech/Passed.vue'
import GreentechRetrospective from '../views/greentech/Retrospective.vue'
import GreentechFAQ from '../views/greentech/FAQ.vue'
import GreentechContact from '../views/greentech/Contact.vue'

// AI transformation 頁面
import HealthtechSchedule from '../views/healthtech/Schedule.vue'
import HealthtechEnterprise from '../views/healthtech/Enterprise.vue'
import HealthtechInstructions from '../views/healthtech/Instructions.vue'
import HealthtechScoring from '../views/healthtech/Scoring.vue'
import HealthtechAwards from '../views/healthtech/Awards.vue'
import HealthtechPassed from '../views/healthtech/Passed.vue'
import HealthtechFAQ from '../views/healthtech/FAQ.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', redirect: '/' },
  {
    path: '/greentech',
    component: GroupPage,
    children: [
      { path: '', redirect: 'about' },
      { path: 'about', name: 'GreentechAbout', component: GreentechAbout },
      { path: 'schedule', name: 'GreentechSchedule', component: GreentechSchedule },
      { path: 'enterprise', name: 'GreentechEnterprise', component: GreentechEnterprise },
      { path: 'instructions', name: 'GreentechInstructions', component: GreentechInstructions },
      { path: 'scoring', name: 'GreentechScoring', component: GreentechScoring },
      { path: 'awards', name: 'GreentechAwards', component: GreentechAwards },
      { path: 'passed', name: 'GreentechPassed', component: GreentechPassed },
      { path: 'retrospective', name: 'GreentechRetrospective', component: GreentechRetrospective },
      { path: 'faq', name: 'GreentechFAQ', component: GreentechFAQ },
      { path: 'contact', name: 'GreentechContact', component: GreentechContact }
    ]
  },
  {
    path: '/aitransformation',
    component: GroupPage,
    children: [
      { path: '', redirect: 'about' },
      {
        path: 'about',
        redirect: (to) => ({
          path: '/greentech/about',
          query: to.query,
          hash: to.hash
        })
      },
      { path: 'schedule', name: 'HealthtechSchedule', component: HealthtechSchedule },
      { path: 'enterprise', name: 'HealthtechEnterprise', component: HealthtechEnterprise },
      { path: 'instructions', name: 'HealthtechInstructions', component: HealthtechInstructions },
      { path: 'scoring', name: 'HealthtechScoring', component: HealthtechScoring },
      { path: 'awards', name: 'HealthtechAwards', component: HealthtechAwards },
      { path: 'passed', name: 'HealthtechPassed', component: HealthtechPassed },
      {
        path: 'retrospective',
        redirect: (to) => ({
          path: '/greentech/retrospective',
          query: to.query,
          hash: to.hash
        })
      },
      { path: 'faq', name: 'HealthtechFAQ', component: HealthtechFAQ },
      {
        path: 'contact',
        redirect: (to) => ({
          path: '/greentech/contact',
          query: to.query,
          hash: to.hash
        })
      }
    ]
  },
  {
    path: '/healthtech',
    redirect: (to) => ({
      path: '/aitransformation/about',
      query: to.query,
      hash: to.hash
    })
  },
  {
    path: '/healthtech/:navItem',
    redirect: (to) => ({
      path: `/aitransformation/${to.params.navItem || 'about'}`,
      query: to.query,
      hash: to.hash
    })
  },
  {
    path: '/city',
    redirect: '/greentech/about'
  },
  {
    path: '/city/:navItem',
    redirect: (to) => ({
      path: `/greentech/${to.params.navItem || 'about'}`,
      query: to.query,
      hash: to.hash
    })
  },
  {
    path: '/2024',
    name: '2024',
    component: page2024
  },
  {
    path: '/2023',
    name: '2023',
    component: page2023
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 }
  }
})

export default router

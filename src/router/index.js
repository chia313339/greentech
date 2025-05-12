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

// City 頁面
import CityAbout from '../views/city/About.vue'
import CitySchedule from '../views/city/Schedule.vue'
import CityEnterprise from '../views/city/Enterprise.vue'
import CityInstructions from '../views/city/Instructions.vue'
import CityScoring from '../views/city/Scoring.vue'
import CityAwards from '../views/city/Awards.vue'
import CityPassed from '../views/city/Passed.vue'
import CityRetrospective from '../views/city/Retrospective.vue'
import CityFAQ from '../views/city/FAQ.vue'
import CityContact from '../views/city/Contact.vue'

// Healthtech 頁面
import HealthtechAbout from '../views/healthtech/About.vue'
import HealthtechSchedule from '../views/healthtech/Schedule.vue'
import HealthtechEnterprise from '../views/healthtech/Enterprise.vue'
import HealthtechInstructions from '../views/healthtech/Instructions.vue'
import HealthtechScoring from '../views/healthtech/Scoring.vue'
import HealthtechAwards from '../views/healthtech/Awards.vue'
import HealthtechPassed from '../views/healthtech/Passed.vue'
import HealthtechRetrospective from '../views/healthtech/Retrospective.vue'
import HealthtechFAQ from '../views/healthtech/FAQ.vue'
import HealthtechContact from '../views/healthtech/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
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
    path: '/city',
    component: GroupPage,
    children: [
      { path: '', redirect: 'about' },
      { path: 'about', name: 'CityAbout', component: CityAbout },
      { path: 'schedule', name: 'CitySchedule', component: CitySchedule },
      { path: 'enterprise', name: 'CityEnterprise', component: CityEnterprise },
      { path: 'instructions', name: 'CityInstructions', component: CityInstructions },
      { path: 'scoring', name: 'CityScoring', component: CityScoring },
      { path: 'awards', name: 'CityAwards', component: CityAwards },
      { path: 'passed', name: 'CityPassed', component: CityPassed },
      { path: 'retrospective', name: 'CityRetrospective', component: CityRetrospective },
      { path: 'faq', name: 'CityFAQ', component: CityFAQ },
      { path: 'contact', name: 'CityContact', component: CityContact }
    ]
  },
  {
    path: '/healthtech',
    component: GroupPage,
    children: [
      { path: '', redirect: 'about' },
      { path: 'about', name: 'HealthtechAbout', component: HealthtechAbout },
      { path: 'schedule', name: 'HealthtechSchedule', component: HealthtechSchedule },
      { path: 'enterprise', name: 'HealthtechEnterprise', component: HealthtechEnterprise },
      { path: 'instructions', name: 'HealthtechInstructions', component: HealthtechInstructions },
      { path: 'scoring', name: 'HealthtechScoring', component: HealthtechScoring },
      { path: 'awards', name: 'HealthtechAwards', component: HealthtechAwards },
      { path: 'passed', name: 'HealthtechPassed', component: HealthtechPassed },
      { path: 'retrospective', name: 'HealthtechRetrospective', component: HealthtechRetrospective },
      { path: 'faq', name: 'HealthtechFAQ', component: HealthtechFAQ },
      { path: 'contact', name: 'HealthtechContact', component: HealthtechContact }
    ]
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 }
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import GroupPage from '../views/GroupPage.vue'

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

// Healthcare 頁面
import HealthcareAbout from '../views/healthcare/About.vue'
import HealthcareSchedule from '../views/healthcare/Schedule.vue'
import HealthcareEnterprise from '../views/healthcare/Enterprise.vue'
import HealthcareInstructions from '../views/healthcare/Instructions.vue'
import HealthcareScoring from '../views/healthcare/Scoring.vue'
import HealthcareAwards from '../views/healthcare/Awards.vue'
import HealthcarePassed from '../views/healthcare/Passed.vue'
import HealthcareRetrospective from '../views/healthcare/Retrospective.vue'
import HealthcareFAQ from '../views/healthcare/FAQ.vue'
import HealthcareContact from '../views/healthcare/Contact.vue'

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
    path: '/healthcare',
    component: GroupPage,
    children: [
      { path: '', redirect: 'about' },
      { path: 'about', name: 'HealthcareAbout', component: HealthcareAbout },
      { path: 'schedule', name: 'HealthcareSchedule', component: HealthcareSchedule },
      { path: 'enterprise', name: 'HealthcareEnterprise', component: HealthcareEnterprise },
      { path: 'instructions', name: 'HealthcareInstructions', component: HealthcareInstructions },
      { path: 'scoring', name: 'HealthcareScoring', component: HealthcareScoring },
      { path: 'awards', name: 'HealthcareAwards', component: HealthcareAwards },
      { path: 'passed', name: 'HealthcarePassed', component: HealthcarePassed },
      { path: 'retrospective', name: 'HealthcareRetrospective', component: HealthcareRetrospective },
      { path: 'faq', name: 'HealthcareFAQ', component: HealthcareFAQ },
      { path: 'contact', name: 'HealthcareContact', component: HealthcareContact }
    ]
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

// src/i18n.js
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      about: "About",
      schedule: "Schedule",
      enterprise: "Competition",
      instructions: "Instructions",
      scoring: "Scoring",
      awards: "Awards",
      passed: "Shortlist",
      retrospective: "Retrospective",
      faq: "FAQ",
      contact: "Contact"
    },
    pages: {
      greentechAbout: "Greentech - About",
      greentechSchedule: "Greentech - Schedule"
    },
    buttons: {
      signup: "Sign\nUp",
      en: "EN"
    },
    signupmodal:{
      signup: "Sign Up",
    }
  },
  zh: {
    nav: {
      about: "關於競賽",
      schedule: "競賽時程",
      enterprise: "企業出題",
      instructions: "報名須知",
      scoring: "評分標準",
      awards: "獎項及義務",
      passed: "通過名單",
      retrospective: "歷屆回顧",
      faq: "FAQ",
      contact: "聯繫我們"
    },
    pages: {
      greentechAbout: "Greentech - 關於競賽",
      greentechSchedule: "Greentech - 競賽時程"
    },
    buttons: {
      signup: "報名\n連結",
      en: "EN"
    },
    signupmodal:{
      signup: "報名連結",
    }
  }
}

const i18n = createI18n({
  legacy: false, // 關閉 legacy mode
  locale: 'zh',
  fallbackLocale: 'en',
  messages,
})




export default i18n

// src/i18n.js
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      about: "About",
      schedule: "Timeline",
      enterprise: "Challenges",
      enterprise2: "Challenges",
      instructions: "Submission",
      scoring: "Criteria",
      awards: "Awards Obligations",
      passed: "Shortlist",
      retrospective: "Media",
      faq: "FAQ",
      contact: "Contact Us"
    },
    pages: {
      game1: "Preliminary",
      game2: "Semi-Final",
      game3: "Final"
    },
    buttons: {
      signup: "Sign\nUp",
      en: "EN"
    },
    signupmodal:{
      signup: "Sign Up",
    },
    class: {
      gt: "Green tech",
      city: "City",
      hc: "Health care"
    },
  },
  zh: {
    nav: {
      about: "關於競賽",
      schedule: "競賽時程",
      enterprise: "企業出題",
      enterprise2: "城市出題",
      instructions: "報名須知",
      scoring: "評分標準",
      awards: "獎項及義務",
      passed: "通過名單",
      retrospective: "歷屆回顧",
      faq: "FAQ",
      contact: "聯繫我們"
    },
    pages: {
      game1: "初賽",
      game2: "複賽",
      game3: "決賽"
    },
    buttons: {
      signup: "報名連結",
      en: "EN"
    },
    signupmodal:{
      signup: "報名連結",
    },
    class: {
      gt: "綠色科技組",
      city: "城市組",
      hc: "健康照護組"
    },
  }
}

const i18n = createI18n({
  legacy: false, // 關閉 legacy mode
  locale: 'zh',
  fallbackLocale: 'en',
  messages,
})




export default i18n

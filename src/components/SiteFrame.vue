<template>
  <div class="frame-page" :class="{ 'light-nav': lightNav }">
    <div class="left-sidebar">
      <button
        v-for="group in groups"
        :key="group.key"
        class="group-btn"
        :class="[group.styleClass, { 'active-btn': currentGroup === group.key }]"
        @click="goToGroup(group.key)"
      >
        {{ group.label }}
      </button>
    </div>

    <div class="frame-content">
      <slot />
    </div>

    <div class="bottom-bar">
      <div class="bottom-logo" @click="goHome">
        <img src="../assets/logo.png" alt="Logo" />
      </div>
      <div class="bottom-nav">
        <template v-for="(item, index) in navItems" :key="item">
          <router-link
            :to="`/${currentGroup}/${item}`"
            class="nav-link"
            :class="{ active: currentNav === item }"
            @click="updateNav(item)"
          >
            {{ $t(`nav.${item}`) }}
          </router-link>
          <span v-if="index < navItems.length - 1" class="separator">|</span>
        </template>
      </div>
    </div>

    <div class="floating-buttons">
      <button class="reg-btn" v-html="regBtnText" data-bs-toggle="modal" data-bs-target="#signModal"></button>
      <button class="lang-btn" @click="toggleLanguage">{{ languageBtnText }}</button>
    </div>

    <div class="modal fade" id="signModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-custom-size">
        <div class="modal-content custom-modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="signup-images-container">
              <img
                v-for="card in signupCards"
                :key="card.key"
                :src="card.src"
                :alt="card.alt"
                @click="openWebsite(card.key)"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store'
import { GROUP_META, GROUP_SIGNUP_URLS, normalizeGroup } from '@/constants/groups'
import greentechZh from '@/assets/signup/greentech.png'
import greentechEn from '@/assets/signup/greentech_en.png'
import healthtechZh from '@/assets/signup/healthtech.png'
import healthtechEn from '@/assets/signup/healthtech_en.png'

const NAV_ITEMS = [
  'about',
  'schedule',
  'enterprise',
  'instructions',
  'scoring',
  'awards',
  'passed',
  'retrospective',
  'faq',
  'contact'
]

export default {
  name: 'SiteFrame',
  props: {
    groupSwitchBehavior: {
      type: String,
      default: 'preserve',
      validator: (value) => ['preserve', 'reset'].includes(value)
    },
    lightNav: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      navItems: NAV_ITEMS,
      groups: GROUP_META
    }
  },
  computed: {
    currentGroup() {
      return store.currentGroup
    },
    currentNav() {
      return store.currentNav
    },
    languageBtnText() {
      return this.$i18n.locale === 'zh' ? 'EN' : 'CN'
    },
    regBtnText() {
      return this.$i18n.locale === 'zh' ? '報名<br>連結' : 'Sign<br>Up'
    },
    signupCards() {
      const isZh = this.$i18n.locale === 'zh'
      return [
        {
          key: 'greentech',
          alt: 'Greentech',
          src: isZh ? greentechZh : greentechEn
        },
        {
          key: 'healthtech',
          alt: 'Healthtech',
          src: isZh ? healthtechZh : healthtechEn
        }
      ]
    }
  },
  methods: {
    syncRouteState() {
      const segments = this.$route.path.split('/')
      const routeGroup = segments[1]
      const routeNav = segments[2]
      store.currentGroup = normalizeGroup(routeGroup || store.currentGroup)
      store.currentNav = routeNav || store.currentNav || 'about'
    },
    goToGroup(route) {
      const targetGroup = normalizeGroup(route)
      const targetNav = this.groupSwitchBehavior === 'reset'
        ? 'about'
        : (store.currentNav || 'about')
      const targetPath = `/${targetGroup}/${targetNav}`

      store.currentGroup = targetGroup
      store.currentNav = targetNav

      if (this.$route.path !== targetPath) {
        this.$router.push(targetPath)
      }
    },
    updateNav(key) {
      store.currentNav = key
    },
    goHome() {
      this.$router.push('/')
    },
    openWebsite(tab) {
      const url = GROUP_SIGNUP_URLS[tab]
      if (url) {
        window.open(url, '_blank')
      } else {
        alert('網站連結待補')
      }
    },
    toggleLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh'
    }
  },
  watch: {
    '$route.path'() {
      this.syncRouteState()
    }
  },
  mounted() {
    this.syncRouteState()
  }
}
</script>

<style scoped>
.frame-page {
  position: relative;
  min-height: 100vh;
  padding-bottom: 100px;
}

.left-sidebar {
  position: fixed;
  top: 0;
  bottom: 60px;
  left: 0;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  padding-bottom: 0;
  z-index: 999;
}

.group-btn {
  background-color: rgb(143, 143, 143);
  position: relative;
  z-index: 1;
  width: 50px;
  flex: 1;
  border: none;
  color: white;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  box-shadow: 0 -4px 4px rgba(0, 0, 0, 0.187);
  font-size: 1.3vw;
  font-weight: bold;
  transform-origin: center;
}

.group-btn:not(.active-btn):hover {
  transform: scale(1.08);
}

.active-btn {
  transform: scale(1.1);
  box-shadow: 0 -4px 4px rgba(0, 0, 0, 0.187);
  z-index: 2;
}

.greentech.active-btn {
  background-color: #00DB00;
}

.healthtech.active-btn {
  background-color: #FFB600;
}

.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  background: linear-gradient(to right, #009CFF, #FFB600, #00DB00);
  z-index: 1000;
}

.bottom-logo {
  width: 14.67%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.bottom-logo:hover {
  transform: scale(1.05);
}

.bottom-logo img {
  width: 100%;
  height: auto;
}

.bottom-nav {
  width: 83.33%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 5px;
}

.nav-link {
  color: rgb(105, 105, 105);
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 1.3vw;
}

.light-nav .nav-link {
  color: rgb(255, 255, 255);
}

.nav-link:hover {
  color: white;
  font-size: 1.4vw;
}

.nav-link.active {
  color: white;
  font-weight: bold;
  text-decoration: underline;
  font-size: 1.4vw;
}

.separator {
  margin: 0 10px;
  color: rgb(255, 255, 255);
}

.floating-buttons {
  position: fixed;
  right: 20px;
  bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1500;
}

.reg-btn,
.lang-btn {
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease;
  font-size: 1rem;
  border: 2px solid white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

.reg-btn {
  background: linear-gradient(to right, #e63188, #f28d0f);
}

.reg-btn:hover {
  transform: scale(1.1);
}

.lang-btn {
  background: linear-gradient(to right, #00a1df, #02d11a);
}

.lang-btn:hover {
  transform: scale(1.1);
}

@media (max-width: 1700px) {
  .reg-btn,
  .lang-btn {
    font-size: 1vw;
  }
}

@media (max-width: 1366px) {
  .reg-btn,
  .lang-btn {
    font-size: 1.05vw;
  }
}

@media (max-width: 1180px) {
  .reg-btn,
  .lang-btn {
    font-size: 1.1vw;
  }
}

.modal-custom-size {
  width: 90vw;
  height: 60vh;
  max-width: 90vw;
  max-height: 60vh;
}

.custom-modal-content {
  height: 100%;
  background-size: cover;
  border: none;
}

.modal-header {
  border-bottom: none;
  padding-bottom: 0;
}

.modal-body {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.custom-modal-content {
  background: url('@/assets/signup/bk.png') no-repeat center center;
  background-size: cover;
  border: none;
}

.signup-images-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 3vw;
  max-width: 70vw;
  margin: 0 auto;
}

.signup-images-container img {
  width: calc((100% - 1 * 3vw) / 2);
  height: auto;
  max-height: 100%;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.signup-images-container img:hover {
  transform: scale(1.05);
}

:deep(.modal-backdrop) {
  z-index: 3000 !important;
}

:deep(.modal) {
  z-index: 3001 !important;
}
</style>

<!-- src/views/GroupPage.vue -->
<template>
  <div class="group-page">
    <!-- 左側分組切換區 (固定於左側) -->
    <div class="left-sidebar">
      <!-- Greentech 按鈕 -->
      <button
        class="group-btn greentech"
        :class="{ 'active-btn': currentGroup === 'greentech' }"
        @click="goToGroup('greentech')"
      >
        GREENTECH
      </button>
      <!-- City 按鈕 -->
      <button
        class="group-btn city"
        :class="{ 'active-btn': currentGroup === 'city' }"
        @click="goToGroup('city')"
      >
        CITY
      </button>
      <!-- Healthcare 按鈕 -->
      <button
        class="group-btn healthcare"
        :class="{ 'active-btn': currentGroup === 'healthcare' }"
        @click="goToGroup('healthcare')"
      >
        HEALTHCARE
      </button>
    </div>

    <!-- 主要內容區：載入對應路由頁面 -->
    <div class="main-content">
      <router-view />
    </div>

    <!-- 下方整列：左側 Logo (1/6) + 導覽列 (5/6) -->
    <div class="bottom-bar">
      <div class="bottom-logo" @click="goHome">
        <img src="../assets/logo.png" alt="Logo" />
      </div>
      <div class="bottom-nav">
        <!-- 使用 $t() 翻譯 nav 文字 -->
        <router-link
          :to="`/${currentGroup}/about`"
          class="nav-link"
          :class="{ active: currentNav === 'about' }"
          @click="updateNav('about')"
        >
          {{ $t('nav.about') }}
        </router-link>
        <span class="separator">|</span>
        <router-link
          :to="`/${currentGroup}/schedule`"
          class="nav-link"
          :class="{ active: currentNav === 'schedule' }"
          @click="updateNav('schedule')"
        >
          {{ $t('nav.schedule') }}
        </router-link>
        <span class="separator">|</span>
        <router-link
          :to="`/${currentGroup}/enterprise`"
          class="nav-link"
          :class="{ active: currentNav === 'enterprise' }"
          @click="updateNav('enterprise')"
        >
          {{ $t('nav.enterprise') }}
        </router-link>
        <span class="separator">|</span>
        <router-link
          :to="`/${currentGroup}/instructions`"
          class="nav-link"
          :class="{ active: currentNav === 'instructions' }"
          @click="updateNav('instructions')"
        >
          {{ $t('nav.instructions') }}
        </router-link>
        <span class="separator">|</span>
        <router-link
          :to="`/${currentGroup}/scoring`"
          class="nav-link"
          :class="{ active: currentNav === 'scoring' }"
          @click="updateNav('scoring')"
        >
          {{ $t('nav.scoring') }}
        </router-link>
        <span class="separator">|</span>
        <router-link
          :to="`/${currentGroup}/awards`"
          class="nav-link"
          :class="{ active: currentNav === 'awards' }"
          @click="updateNav('awards')"
        >
          {{ $t('nav.awards') }}
        </router-link>
        <span class="separator">|</span>
        <router-link
          :to="`/${currentGroup}/passed`"
          class="nav-link"
          :class="{ active: currentNav === 'passed' }"
          @click="updateNav('passed')"
        >
          {{ $t('nav.passed') }}
        </router-link>
        <span class="separator">|</span>
        <router-link
          :to="`/${currentGroup}/retrospective`"
          class="nav-link"
          :class="{ active: currentNav === 'retrospective' }"
          @click="updateNav('retrospective')"
        >
          {{ $t('nav.retrospective') }}
        </router-link>
        <span class="separator">|</span>
        <router-link
          :to="`/${currentGroup}/faq`"
          class="nav-link"
          :class="{ active: currentNav === 'faq' }"
          @click="updateNav('faq')"
        >
          {{ $t('nav.faq') }}
        </router-link>
        <span class="separator">|</span>
        <router-link
          :to="`/${currentGroup}/contact`"
          class="nav-link"
          :class="{ active: currentNav === 'contact' }"
          @click="updateNav('contact')"
        >
          {{ $t('nav.contact') }}
        </router-link>
      </div>
    </div>

    <!-- 右下角懸浮按鈕區 -->
    <div class="floating-buttons">
      <button class="reg-btn" @click="goToSignup" v-html="$t('buttons.signup')"></button>

      <button class="lang-btn" @click="toggleLanguage">
        {{ languageBtnText }}
      </button>
    </div>
  </div>
</template>

<script>
import { store } from '../store'
export default {
  name: 'GroupPage',
  computed: {
    currentGroup() {
      return store.currentGroup
    },
    currentNav() {
      return store.currentNav
    },
    languageBtnText() {
      return this.$i18n.locale === 'zh' ? 'EN' : 'CN'
    }
  },
  methods: {
    goToGroup(route) {
      // 當點選分組按鈕時，更新 store 並導向 /[group]/about
      store.currentGroup = route
      store.currentNav = 'about'
      this.$router.push(`/${route}/about`)
    },
    updateNav(key) {
      store.currentNav = key
    },
    goHome() {
      this.$router.push('/')
    },
    goToSignup() {
      alert('前往報名頁面')
    },
    toggleLanguage() {
      this.$i18n.locale = (this.$i18n.locale === 'zh') ? 'en' : 'zh'
    }
  },
  watch: {
    '$route.params.group'(newVal) {
      // 如果 URL 帶有 group，則更新 store
      let segments = this.$route.path.split('/');
      // segments[1] 為 group
      store.currentGroup = segments[1] || 'greentech'
    },
    '$route.params.navItem'(newVal) {
      // 由於沒有 navItem 參數，從 URL 中解析
      let segments = this.$route.path.split('/');
      // segments[2] 為 nav，若無則預設 'about'
      store.currentNav = segments[2] || 'about'
    }
  },
  mounted() {
    let segments = this.$route.path.split('/');
    store.currentGroup = segments[1] || 'greentech';
    store.currentNav = segments[2] || 'about';
  }
}
</script>

<style scoped>
/* 整體頁面：預留底部 60px (bottom-bar) 與右下懸浮按鈕區 */
.group-page {
  position: relative;
  min-height: 100vh;
  padding-bottom: 100px;
}

/* 左側分組按鈕 (固定於左側) */
.left-sidebar {
  position: fixed;
  top: 0;
  bottom: 60px;
  left: 0;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 30px;
}
/* 設定每個按鈕的 z-index (最上面的最低，最下面的最高) */
.left-sidebar button:nth-child(1) {
  z-index: 1;
}
.left-sidebar button:nth-child(2) {
  z-index: 2;
}
.left-sidebar button:nth-child(3) {
  z-index: 3;
}
.group-btn {
  background-color: rgb(143, 143, 143);
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
  transform-origin: top;
}
.group-btn:hover {
  transform: scale(1.1);
}
.active-btn {
  transform: scale(1.1);
  box-shadow: 0 -4px 4px rgba(0, 0, 0, 0.187);
}
.greentech.active-btn {
  background-color: #00DB00;
}
.city.active-btn {
  background-color: #009CFF;
}
.healthcare.active-btn {
  background-color: #FFB600;
}

/* 主要內容區 */
.main-content {
  margin-left: 60px;
  padding: 20px;
}

/* 下方區塊：包含 Logo 與 Nav (同一列) */
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
  width: 16.67%;
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
  padding: 0 20px;
}
.nav-link {
  color: rgb(105, 105, 105);
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 1.3vw;
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

/* 右下角懸浮按鈕區 */
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
  font-size: 1.1rem;
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
</style>

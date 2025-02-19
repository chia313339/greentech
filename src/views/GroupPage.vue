<!-- src/views/GroupPage.vue -->
<template>
  <div class="group-page">
    <!-- 左側分組切換區 (固定於左側) -->
    <div class="left-sidebar">
      <!-- 手動寫出三個按鈕，根據 store.currentGroup 判斷 active -->
      <button
        class="group-btn"
        :class="{ 'active-btn': currentGroup === 'greentech' }"
        style="background-color: #00DB00"
        @click="goToGroup('greentech')"
      >
        GREENTECH
      </button>
      <button
        class="group-btn"
        :class="{ 'active-btn': currentGroup === 'city' }"
        style="background-color: #009CFF"
        @click="goToGroup('city')"
      >
        CITY
      </button>
      <button
        class="group-btn"
        :class="{ 'active-btn': currentGroup === 'healthcare' }"
        style="background-color: #FFB600"
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
        <!-- 手動寫出各個 Nav 項目，並加上 @click 更新 store.currentNav -->
        <router-link
          :to="`/${currentGroup}/about`"
          class="nav-link"
          :class="{ active: currentNav === 'about' }"
          @click="updateNav('about')"
        >
          關於競賽
        </router-link>
        <span class="separator">|</span>
        <router-link
          :to="`/${currentGroup}/schedule`"
          class="nav-link"
          :class="{ active: currentNav === 'schedule' }"
          @click="updateNav('schedule')"
        >
          競賽時程
        </router-link>
        <span class="separator">|</span>
        <router-link
          :to="`/${currentGroup}/enterprise`"
          class="nav-link"
          :class="{ active: currentNav === 'enterprise' }"
          @click="updateNav('enterprise')"
        >
          企業出題
        </router-link>
        <span class="separator">|</span>
        <router-link
          :to="`/${currentGroup}/instructions`"
          class="nav-link"
          :class="{ active: currentNav === 'instructions' }"
          @click="updateNav('instructions')"
        >
          報名須知
        </router-link>
        <span class="separator">|</span>
        <router-link
          :to="`/${currentGroup}/scoring`"
          class="nav-link"
          :class="{ active: currentNav === 'scoring' }"
          @click="updateNav('scoring')"
        >
          評分標準
        </router-link>
        <span class="separator">|</span>
        <router-link
          :to="`/${currentGroup}/awards`"
          class="nav-link"
          :class="{ active: currentNav === 'awards' }"
          @click="updateNav('awards')"
        >
          獎項及義務
        </router-link>
        <span class="separator">|</span>
        <router-link
          :to="`/${currentGroup}/passed`"
          class="nav-link"
          :class="{ active: currentNav === 'passed' }"
          @click="updateNav('passed')"
        >
          通過名單
        </router-link>
        <span class="separator">|</span>
        <router-link
          :to="`/${currentGroup}/retrospective`"
          class="nav-link"
          :class="{ active: currentNav === 'retrospective' }"
          @click="updateNav('retrospective')"
        >
          歷屆回顧
        </router-link>
        <span class="separator">|</span>
        <router-link
          :to="`/${currentGroup}/faq`"
          class="nav-link"
          :class="{ active: currentNav === 'faq' }"
          @click="updateNav('faq')"
        >
          FAQ
        </router-link>
        <span class="separator">|</span>
        <router-link
          :to="`/${currentGroup}/contact`"
          class="nav-link"
          :class="{ active: currentNav === 'contact' }"
          @click="updateNav('contact')"
        >
          聯繫我們
        </router-link>
      </div>
    </div>

    <!-- 右下角懸浮按鈕區 -->
    <div class="floating-buttons">
      <button class="reg-btn" @click="goToSignup">
        報名 <br> 連結
      </button>
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
      // 當點選分組按鈕時，更新 store.currentGroup 與 store.currentNav，並導向 /[group]/about
      store.currentGroup = route
      store.currentNav = 'about'
      this.$router.push(`/${route}/about`)
    },
    updateNav(key) {
      // 更新 store.currentNav
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
    '$route.params.navItem'(newVal) {
      store.currentNav = newVal || 'about'
    }
  },
  mounted() {
    store.currentNav = this.$route.params.navItem || 'about'
    // 如果路由沒有帶 currentGroup，則也同步更新
    if (this.$route.params.group) {
      store.currentGroup = this.$route.params.group
    }
  }
}
</script>

<style scoped>
/* 整體頁面：預留底部 60px (bottom-bar) 與右下懸浮按鈕區 */
.group-page {
  position: relative;
  min-height: 100vh;
  padding-bottom: 80px;
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
}
.group-btn {
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
  border-top-right-radius: 30px;
  border-bottom-right-radius: 10px;
}
.group-btn:hover {
  transform: scale(1.2);
}
.active-btn {
  transform: scale(1.2);
  box-shadow: 0 -5px 5px -5px grey;
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
  width: 16.67%; /* 1/6 */
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
  width: 83.33%; /* 5/6 */
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
}
.nav-link {
  color: rgb(255, 255, 255);
  text-decoration: none;
  transition: color 0.2s ease;
  font-size:1.3vw;
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

<!-- src/views/GroupPage.vue -->
<template>
  <div class="group-page">
    <!-- 開場全屏 overlay -->
    <div v-if="showOpening" class="opening-overlay">
      <img src="@/assets/opening.png" alt="Opening" class="opening-image" />
      <div class="opening-countdown">{{ countdown }}</div>
      <button class="opening-skip" @click="skipOpening">SKIP</button>
    </div>

    <!-- 左側分組切換區 (固定於左側) -->
    <div class="left-sidebar">
      <!-- Greentech 按鈕（預設皆加上 active-btn 類別） -->
      <button
        class="group-btn greentech active-btn"
        @click="goToGroup('greentech')"
      >
        GREENTECH
      </button>
      <!-- City 按鈕 -->
      <button
        class="group-btn city active-btn"
        @click="goToGroup('city')"
      >
        CITY
      </button>
      <!-- Healthcare 按鈕 -->
      <button
        class="group-btn healthcare active-btn"
        @click="goToGroup('healthcare')"
      >
        HEALTHCARE
      </button>
    </div>

    <!-- 主要內容區：載入對應路由頁面 (這裡以 carousel 為例) -->
    <div class="content">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/img/about/001.png" class="d-block w-100" alt="Image 1">
          </div>
          <div class="carousel-item">
            <img src="@/assets/img/about/002.png" class="d-block w-100" alt="Image 2">
          </div>
          <div class="carousel-item">
            <img src="@/assets/img/about/003.png" class="d-block w-100" alt="Image 3">
          </div>
        </div>
        <!-- Carousel Indicators -->
        <div class="carousel-indicators custom-indicators">
          <button type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"></button>
          <button type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
          <button type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
        </div>
      </div>
    </div>

    <!-- 下方整列：左側 Logo (1/6) + 導覽列 (5/6) -->
    <div class="bottom-bar">
      <div class="bottom-logo" @click="goHome">
        <img src="../assets/logo.png" alt="Logo" />
      </div>
      <div class="bottom-nav">
        <!-- 移除 about 的 active 判斷，與其他 nav 項目一致 -->
        <router-link
          :to="`/${currentGroup}/about`"
          class="nav-link"
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
  data() {
    return {
      showOpening: true,
      countdown: 5,
      openingTimer: null
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
    }
  },
  methods: {
    goToGroup(route) {
      // 點選分組按鈕時，更新 store 並導向 /[group]/about
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
    },
    skipOpening() {
      this.showOpening = false
      if (this.openingTimer) {
        clearInterval(this.openingTimer)
        this.openingTimer = null
      }
    }
  },
  watch: {
    '$route.params.group'(newVal) {
      // 如果 URL 帶有 group，則更新 store
      let segments = this.$route.path.split('/');
      store.currentGroup = segments[1] || 'greentech'
    },
    '$route.params.navItem'(newVal) {
      // 從 URL 中解析 nav 項目
      let segments = this.$route.path.split('/');
      store.currentNav = segments[2] || 'about'
    }
  },
  mounted() {
    // 解析 URL 分段
    let segments = this.$route.path.split('/');
    store.currentGroup = segments[1] || 'greentech';
    store.currentNav = segments[2] || 'about';

    // 啟動開場倒數計時
    this.openingTimer = setInterval(() => {
      if (this.countdown > 1) {
        this.countdown--
      } else {
        this.countdown = 0
        this.skipOpening()
      }
    }, 1000)
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

/* ------------------- 開場畫面相關樣式 ------------------- */
.opening-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
  background: #000;
}

.opening-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.opening-countdown {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  color: white;
  background: rgba(0,0,0,0.5);
  padding: 5px 10px;
  border-radius: 5px;
}

.opening-skip {
  position: absolute;
  bottom: 5%;
  right: 5%;
  font-size: 1.2rem;
  color: white;
  background: rgba(0,0,0,0.5);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

/* ------------------- 左側分組按鈕 ------------------- */
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

/* ------------------- 主要內容區 (Carousel) ------------------- */
.content {
  padding: 30px;
}
.carousel {
  position: relative;
}
.custom-indicators {
  position: absolute;
  width: 100%;
  bottom: 20px;
  left: -15%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
.custom-indicators button {
  width: 1.5vw;
  height: 1.5vw;
  border-radius: 50%;
  background-color: white;
  border: 2px solid #66CC66;
  opacity: 1;
  margin: 10px;
  transition: background-color 0.2s ease;
}
.custom-indicators button.active {
  background-color: #66CC66;
  border-color: #66CC66;
}
.carousel img {
  max-height: 80vh;
  width: 100%;
  object-fit: contain;
  padding: 100px;
}

/* ------------------- 底部導覽列 ------------------- */
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
  color: rgb(255, 255, 255);
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

/* ------------------- 右下角懸浮按鈕區 ------------------- */
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

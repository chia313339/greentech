<template>
  <div class="group-page">
    <!-- 左側分組切換區 (固定於左側) -->
    <div class="left-sidebar">
      <!-- Greentech 按鈕 -->
      <button
        class="group-btn greentech"
        :class="{ 'active-btn': isExemptNav || currentGroup === 'greentech' }"
        @click="goToGroup('greentech')"
      >
        GREEN TECH
      </button>
      <!-- City 按鈕 -->
      <button
        class="group-btn city"
        :class="{ 'active-btn': isExemptNav || currentGroup === 'city' }"
        @click="goToGroup('city')"
      >
        CITY
      </button>
      <!-- Healthtech 按鈕 -->
      <button
        class="group-btn healthtech"
        :class="{ 'active-btn': isExemptNav || currentGroup === 'healthtech' }"
        @click="goToGroup('healthtech')"
      >
        HEALTH TECH
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
      <!-- <button class="reg-btn" v-html="regBtnText" data-bs-toggle="modal" data-bs-target="#signModal"></button> -->
      <button class="lang-btn" @click="toggleLanguage">
        {{ languageBtnText }}
      </button>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="signModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-custom-size">
        <div class="modal-content custom-modal-content">
          <div class="modal-header">
            <!-- 僅保留右上角的關閉按鈕 -->
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="signup-images-container">
              <img :src="signupGreentechSrc" alt="Greentech" @click="openWebsite('greentech')">
              <img :src="signupCitySrc" alt="City" @click="openWebsite('city')">
              <img :src="signupHealthtechSrc" alt="Healthtech" @click="openWebsite('healthtech')">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store'
// 靜態導入圖片
import greentechZh from '@/assets/signup/greentech.png'
import greentechEn from '@/assets/signup/greentech_en.png'
import cityZh from '@/assets/signup/city.png'
import cityEn from '@/assets/signup/city_en.png'
import healthtechZh from '@/assets/signup/healthtech.png'
import healthtechEn from '@/assets/signup/healthtech_en.png'

export default {
  name: 'GroupPage',
  computed: {
    currentGroup() {
      return store.currentGroup
    },
    currentNav() {
      return store.currentNav
    },
    // 判斷目前 nav 是否屬於 exempt 項目 (about, retrospective, contact)
    isExemptNav() {
      return ['about', 'retrospective', 'contact'].includes(store.currentNav)
    },
    languageBtnText() {
      return this.$i18n.locale === 'zh' ? 'EN' : 'CN'
    },
    regBtnText() {
      return this.$i18n.locale === 'zh' ? '報名<br>連結' : 'Sign<br>Up'
    },
    signupGreentechSrc() {
      return this.$i18n.locale === 'zh' ? greentechZh : greentechEn
    },
    signupCitySrc() {
      return this.$i18n.locale === 'zh' ? cityZh : cityEn
    },
    signupHealthtechSrc() {
      return this.$i18n.locale === 'zh' ? healthtechZh : healthtechEn
    }
  },
  methods: {
    goToGroup(route) {
      // 如果當前底部 nav 不是 exempt 頁面，則更新 currentGroup 並切換到同一頁籤
      if (!this.isExemptNav) {
        store.currentGroup = route
        this.$router.push(`/${route}/${store.currentNav}`)
      } else {
        // 若為 exempt 頁面，不更新 currentGroup，直接維持原路由
        this.$router.push(`/${store.currentGroup}/${store.currentNav}`)
      }
    },
    updateNav(key) {
      store.currentNav = key
    },
    goHome() {
      this.$router.push('/')
    },
    goToSignup() {
      alert('前往報名頁面!!!!')
    },
    showSignupForm(group) {
      alert(`${group} 報名表單`)
    },
    openWebsite(tab) {
      const websiteMapping = {
        greentech: 'https://seminars.tca.org.tw/D10v00082.aspx',
        city: 'https://seminars.tca.org.tw/D10w00238.aspx ',
        healthtech: 'https://seminars.tca.org.tw/D10t00107.aspx'
      };
      const url = websiteMapping[tab];
      if (url) {
        window.open(url, '_blank');
      } else {
        alert('網站連結待補');
      }
    },
    toggleLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh'
    }
  },
  watch: {
    '$route.params.group'(newVal) {
      let segments = this.$route.path.split('/')
      store.currentGroup = segments[1] || 'greentech'
    },
    '$route.params.navItem'(newVal) {
      let segments = this.$route.path.split('/')
      store.currentNav = segments[2] || 'about'
    }
  },
  mounted() {
    let segments = this.$route.path.split('/')
    store.currentGroup = segments[1] || 'greentech'
    store.currentNav = segments[2] || 'about'
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
  z-index: 999;
}
/* 設定每個按鈕的 z-index (最上面的最低，最下面的最高) */
.left-sidebar button:nth-child(1) {
  z-index: 11;
}
.left-sidebar button:nth-child(2) {
  z-index: 12;
}
.left-sidebar button:nth-child(3) {
  z-index: 13;
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
.healthtech.active-btn {
  background-color: #FFB600;
}

/* 主要內容區 */
.main-content {
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

/* 自訂 modal 尺寸 */
.modal-custom-size {
  width: 90vw;
  height: 60vh;
  max-width: 90vw;
  max-height: 60vh;
}

/* 讓 modal-content 撐滿容器 */
.custom-modal-content {
  height: 100%;
  background-size: cover;
  border: none;
}

/* 移除 modal-header 與 modal-body 之間的分隔線 */
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
  width: calc((100% - 2 * 3vw) / 3);
  height: auto;
  max-height: 100%;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.signup-images-container img:hover {
  transform: scale(1.05);
}

/* 調整 modal backdrop 與 modal 的 z-index */
::v-deep .modal-backdrop {
  z-index: 1600 !important;
}
::v-deep .modal {
  z-index: 1601 !important;
}
</style>

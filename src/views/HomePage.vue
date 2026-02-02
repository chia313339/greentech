<template>
  <div class="group-page">
    <!-- 開場全屏 overlay -->
    <div v-if="showOpening" class="opening-overlay">
      <!-- 畫面內容依階段切換：影片或圖片 -->
      <div v-if="openingStage === 'video'" class="opening-video-container">
        <video
          src="@/assets/opening.mp4"
          class="opening-video"
          autoplay
          playsinline
          muted
          @ended="videoEnded"
        ></video>
      </div>
      <div v-else-if="openingStage === 'image'" class="opening-image-container">
        <img src="@/assets/opening.png" alt="Opening" class="opening-image" />
        <div class="opening-buttons">
          <a @click.prevent="selectGroup('greentech')" class="opening-link">
            <img src="@/assets/gotog.png" alt="Green tech" class="opening-img" />
          </a>
          <a @click.prevent="selectGroup('city')" class="opening-link">
            <img src="@/assets/gotoc.png" alt="City" class="opening-img" />
          </a>
          <a @click.prevent="selectGroup('healthtech')" class="opening-link">
            <img src="@/assets/gotoh.png" alt="Health tech" class="opening-img" />
          </a>
        </div>
      </div>
      <!-- Skip 按鈕只在影片階段顯示，位置置於右上角 -->
      <button v-if="openingStage === 'video'" class="opening-skip" @click="skipOpening">SKIP</button>
    </div>

    <!-- 左側分組切換區 (固定於左側) -->
    <div class="left-sidebar">
      <button class="group-btn greentech active-btn" @click="goToGroup('greentech')">GREEN TECH</button>
      <button class="group-btn city active-btn" @click="goToGroup('city')">CITY</button>
      <button class="group-btn healthtech active-btn" @click="goToGroup('healthtech')">HEALTH TECH</button>
    </div>

    <!-- 主要內容區：載入對應路由頁面 (這裡以 carousel 為例) -->
    <div class="content">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="90000">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/2026banner.png" class="d-block w-100" alt="2026 Banner">
          </div>
          <div class="carousel-item">
            <!-- 新增封面影片頁，放在輪播最前面 -->
            <div class="ratio ratio-16x9 w-75 mx-auto" style="margin-bottom: 105px;">
              <iframe
                src="https://www.youtube.com/embed/T80XuQEJ28k?si=AK1pVrfW2vvtwwHg"
                title="YouTube video player"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="carousel-item">
            <img src="@/assets/img/about/001.png" class="d-block w-100" alt="Image 1">
          </div>
          <div class="carousel-item">
            <!-- 讓影片自動維持 16:9，並在寬度上跟其他圖片保持一致 -->
            <div class="ratio ratio-16x9 w-75 mx-auto" style="margin-bottom: 105px;">
              <iframe
                src="https://www.youtube.com/embed/1Vm3phKIDus?si=t1E1J_YRcHl15GZ5"
                title="YouTube video player"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <!-- <div class="carousel-item">
            <img src="@/assets/img/about/002.png" class="d-block w-100" alt="Image 3">
          </div> -->
        </div>
        <!-- Carousel Indicators -->
        <div class="carousel-indicators custom-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
      </div>
    </div>

    <!-- 下方導覽列 -->
    <div class="bottom-bar">
      <div class="bottom-logo" @click="goHome">
        <img src="../assets/logo.png" alt="Logo" />
      </div>
      <div class="bottom-nav">
        <router-link :to="`/${currentGroup}/about`" class="nav-link" @click="updateNav('about')">{{ $t('nav.about') }}</router-link>
        <span class="separator">|</span>
        <router-link :to="`/${currentGroup}/schedule`" class="nav-link" :class="{ active: currentNav === 'schedule' }" @click="updateNav('schedule')">{{ $t('nav.schedule') }}</router-link>
        <span class="separator">|</span>
        <router-link :to="`/${currentGroup}/enterprise`" class="nav-link" :class="{ active: currentNav === 'enterprise' }" @click="updateNav('enterprise')">{{ $t('nav.enterprise') }}</router-link>
        <span class="separator">|</span>
        <router-link :to="`/${currentGroup}/instructions`" class="nav-link" :class="{ active: currentNav === 'instructions' }" @click="updateNav('instructions')">{{ $t('nav.instructions') }}</router-link>
        <span class="separator">|</span>
        <router-link :to="`/${currentGroup}/scoring`" class="nav-link" :class="{ active: currentNav === 'scoring' }" @click="updateNav('scoring')">{{ $t('nav.scoring') }}</router-link>
        <span class="separator">|</span>
        <router-link :to="`/${currentGroup}/awards`" class="nav-link" :class="{ active: currentNav === 'awards' }" @click="updateNav('awards')">{{ $t('nav.awards') }}</router-link>
        <span class="separator">|</span>
        <router-link :to="`/${currentGroup}/passed`" class="nav-link" :class="{ active: currentNav === 'passed' }" @click="updateNav('passed')">{{ $t('nav.passed') }}</router-link>
        <span class="separator">|</span>
        <router-link :to="`/${currentGroup}/retrospective`" class="nav-link" :class="{ active: currentNav === 'retrospective' }" @click="updateNav('retrospective')">{{ $t('nav.retrospective') }}</router-link>
        <span class="separator">|</span>
        <router-link :to="`/${currentGroup}/faq`" class="nav-link" :class="{ active: currentNav === 'faq' }" @click="updateNav('faq')">{{ $t('nav.faq') }}</router-link>
        <span class="separator">|</span>
        <router-link :to="`/${currentGroup}/contact`" class="nav-link" :class="{ active: currentNav === 'contact' }" @click="updateNav('contact')">{{ $t('nav.contact') }}</router-link>
      </div>
    </div>

    <!-- 右下角懸浮按鈕區 -->
    <div class="floating-buttons">
      <!-- <button class="reg-btn" v-html="regBtnText" data-bs-toggle="modal" data-bs-target="#signModal"></button> -->
      <button class="lang-btn" @click="toggleLanguage">{{ languageBtnText }}</button>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="signModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-custom-size">
        <div class="modal-content custom-modal-content">
          <div class="modal-header">
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

    <!-- showOpening 結束後，顯示指示圖片 -->
    <div v-if="!showOpening" class="finger-container">
      <img src="@/assets/finger.png" alt="finger" class="finger-img" />
    </div>
  </div>
</template>

<script>
import { store } from '../store'
import greentechZh from '@/assets/signup/greentech.png'
import greentechEn from '@/assets/signup/greentech_en.png'
import cityZh from '@/assets/signup/city.png'
import cityEn from '@/assets/signup/city_en.png'
import healthtechZh from '@/assets/signup/healthtech.png'
import healthtechEn from '@/assets/signup/healthtech_en.png'

export default {
  name: 'GroupPage',
  data() {
    return {
      showOpening: true,
      // 'video' 階段：全屏播放影片；'image' 階段：顯示圖片與三個按鈕
      openingStage: 'video'
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
    showSignupForm(group) {
      alert(`${group} 報名表單`)
    },
    openWebsite(tab) {
      const websiteMapping = {
        greentech: 'https://seminars.tca.org.tw/D10v00082.aspx',
        city: 'https://seminars.tca.org.tw/D10w00238.aspx',
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
    },
    // 當影片播放完畢，切換至圖片階段
    videoEnded() {
      this.openingStage = 'image'
    },
    // 點擊 Skip 按鈕：如果在影片階段則切換到圖片階段；若已在圖片階段則關閉 overlay
    skipOpening() {
      if (this.openingStage === 'video') {
        this.openingStage = 'image'
      } else {
        this.showOpening = false
      }
    },
    // 點選 opening-buttons 按鈕時更新 store.currentGroup 並關閉 overlay
    selectGroup(group) {
      store.currentGroup = group
      this.showOpening = false
    }
  },
  watch: {
    '$route.params.group'(newVal) {
      let segments = this.$route.path.split('/');
      store.currentGroup = segments[1] || 'greentech'
    },
    '$route.params.navItem'(newVal) {
      let segments = this.$route.path.split('/');
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
  /* background-color: #ededed; */
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

/* 影片與圖片皆全屏 */
.opening-video,
.opening-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.opening-video-container,
.opening-image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

/* 三個圖片按鈕的容器：置中並位於畫面 60% 處 */
.opening-buttons {
  margin-top: 17vh;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 5vw;
}

/* 圖片連結樣式 */
.opening-link {
  display: inline-block;
  cursor: pointer;
  transition: transform 0.2s ease;
}

/* 圖片按鈕樣式 */
.opening-img {
  width: 15vw;
  height: auto;
  /* border-radius: 50%; */
  object-fit: cover;
  transition: transform 0.2s ease;
}
.opening-link:hover .opening-img {
  transform: scale(1.1);
}

/* Skip 按鈕：僅在影片階段顯示，位置置於右上角 */
.opening-skip {
  position: absolute;
  top: 5%;
  right: 5%;
  font-size: 1.2rem;
  color: white;
  background: rgba(0,0,0,0.5);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.opening-skip:hover {
  transform: scale(1.1);
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
  z-index: 999;
}
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
  transform: scale(1.15);
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

/* ------------------- 主要內容區 (Carousel) ------------------- */
.content {
  /* margin-top: 10px; */
  padding-left: 100px;
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
  max-height: 90vh;
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
  font-size: 1rem;
  border: 2px solid white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
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

/* ------------------- 指示圖片 (finger) ------------------- */
.finger-container {
  position: fixed;
  top: 10%;
  left: 2%;
  z-index: 2100;
}
.finger-img {
  width: auto;
  max-width: 80px; /* 可依需求調整大小 */
  animation: pulse 2s infinite ease-in-out;
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* 在 scoped style 裡增加： */
::v-deep .modal-backdrop {
  z-index: 1600 !important;
}
::v-deep .modal {
  z-index: 1601 !important;
}

.carousel .carousel-item iframe {
  max-height: 90vh;
  width: 100%;
  /* object-fit: contain; // object-fit 不適用於 iframe，可以拿掉 */
  padding-top: 100px;
  display: block;
  margin: 0 auto;
  box-sizing: border-box;
  border: none;
}
</style>

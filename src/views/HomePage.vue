<template>
  <div class="home-page">
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
        <div class="opening-image-content">
          <img src="@/assets/center-logo.png" alt="Center Logo" class="opening-center-logo" />
          <div class="opening-buttons">
            <a
              v-for="group in groups"
              :key="group.key"
              @click.prevent="selectGroup(group.key)"
              class="opening-link"
            >
              <img :src="group.openingImg" :alt="group.label" class="opening-img" />
            </a>
          </div>
        </div>
      </div>
      <!-- Skip 按鈕只在影片階段顯示，位置置於右上角 -->
      <button v-if="openingStage === 'video'" class="opening-skip" @click="skipOpening">SKIP</button>
    </div>

    <SiteFrame group-switch-behavior="reset" :light-nav="true">
      <div class="home-content">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="90000">
          <div class="carousel-inner">
            <!-- <div class="carousel-item ">
              <img src="@/assets/2026banner.png" class="d-block w-100" alt="2026 Banner">
            </div> -->
            <div class="carousel-item active">
              <div class="ratio ratio-16x9 w-75 mx-auto" style="margin-bottom: 105px;">
                <iframe
                  src="https://www.youtube.com/embed/T80XuQEJ28k?si=AK1pVrfW2vvtwwHg"
                  title="YouTube video player"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <!-- <div class="carousel-indicators custom-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div> -->
        </div>
      </div>
    </SiteFrame>

    <!-- showOpening 結束後，顯示指示圖片 -->
    <div v-if="!showOpening" class="finger-container">
      <img src="@/assets/finger.png" alt="finger" class="finger-img" />
    </div>
  </div>
</template>

<script>
import { store } from '../store'
import { GROUP_META, normalizeGroup } from '@/constants/groups'
import SiteFrame from '@/components/SiteFrame.vue'
import gotog from '@/assets/gotog.png'
import gotoh from '@/assets/gotoh.png'

const OPENING_IMAGES = {
  greentech: gotog,
  healthtech: gotoh
}

export default {
  name: 'HomePage',
  components: {
    SiteFrame
  },
  data() {
    return {
      showOpening: true,
      openingStage: 'video',
      groups: GROUP_META.map((group) => ({
        ...group,
        openingImg: OPENING_IMAGES[group.key]
      }))
    }
  },
  methods: {
    videoEnded() {
      this.openingStage = 'image'
    },
    skipOpening() {
      if (this.openingStage === 'video') {
        this.openingStage = 'image'
      } else {
        this.showOpening = false
      }
    },
    selectGroup(group) {
      store.currentGroup = normalizeGroup(group)
      store.currentNav = 'about'
      this.showOpening = false
    }
  }
}
</script>

<style scoped>
.opening-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
  background: #000;
}

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

.opening-image-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(16px, 2.6vh, 36px);
  padding: 6vh 5vw;
}

.opening-center-logo {
  width: min(52vw, 620px);
  max-width: 50vw;
  max-height: 40vh;
  height: auto;
  object-fit: contain;
}

.opening-buttons {
  display: flex;
  gap: 8vw;
  justify-content: center;
  flex-wrap: wrap;
}

.opening-link {
  display: inline-block;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.opening-img {
  width: 17vw;
  max-width: 320px;
  height: auto;
  object-fit: cover;
  transition: transform 0.2s ease;
}

.opening-link:hover .opening-img {
  transform: scale(1.1);
}

.opening-skip {
  position: absolute;
  top: 5%;
  right: 5%;
  font-size: 1.2rem;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.opening-skip:hover {
  transform: scale(1.1);
}

.home-content {
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

.finger-container {
  position: fixed;
  top: 10%;
  left: 2%;
  z-index: 2100;
}

.finger-img {
  width: auto;
  max-width: 80px;
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

.carousel .carousel-item iframe {
  max-height: 90vh;
  width: 100%;
  padding-top: 100px;
  display: block;
  margin: 0 auto;
  box-sizing: border-box;
  border: none;
}

@media (max-width: 900px) {
  .opening-image-content {
    gap: clamp(14px, 2.2vh, 24px);
  }

  .opening-center-logo {
    width: min(68vw, 460px);
  }

  .opening-buttons {
    gap: 6vw;
  }

  .opening-img {
    width: min(32vw, 220px);
  }
}
</style>

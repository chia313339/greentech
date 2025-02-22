<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>

    <!-- 標題欄 -->
    <div class="title_head">
      <!-- 左側標題 -->
      <div class="title-bar">{{ $t('nav.retrospective') }}</div>

      <!-- 按鈕容器 -->
      <div class="buttons">
        <button
          class="btn btn-chu"
          :class="{ active: activeTab === '2024' }"
          @click="setActive('2024')"
        >
          2024
        </button>
        <button
          class="btn btn-fu"
          :class="{ active: activeTab === '2023' }"
          @click="setActive('2023')"
        >
          2023
        </button>
        <button
          class="btn btn-jue"
          :class="{ active: activeTab === '2022' }"
          @click="setActive('2022')"
        >
          2022
        </button>
        <!-- 靠右的按鈕 -->
        <button class="btn2">
          瀏覽2022網站
        </button>
      </div>
    </div>

    <!-- 內容層 -->
    <div class="content">
      <!-- 上排：兩個 YouTube 影片 -->
      <div class="videos-wrapper">
        <div class="video-item">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/OTS9WwW3lQs?si=A5bBsvndVJI8E5sm"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video-item">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/rZuiP7bnO4k?si=nn1nk5cth69GX8ul"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <!-- 下排：一次顯示4張圖片、可重複輪播 -->
      <div class="carousel-container">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          :class="carouselClass"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <!-- 第一組幻燈片：顯示 4 張圖 -->
            <div class="carousel-item active">
              <div class="multi-container">
                <div
                  class="multi-item"
                  v-for="(image, index) in images"
                  :key="index"
                  @click="showImage(image)"
                >
                  <img
                    :src="image"
                    class="d-block w-100"
                    alt="Slide image"
                  />
                </div>
              </div>
            </div>

            <!-- 第二組幻燈片：重複顯示同 4 張圖，用於「下一張」時的重複輪播 -->
            <div class="carousel-item">
              <div class="multi-container">
                <div
                  class="multi-item"
                  v-for="(image, index) in images"
                  :key="'repeat-'+index"
                  @click="showImage(image)"
                >
                  <img
                    :src="image"
                    class="d-block w-100"
                    alt="Slide image"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- 控制鈕（前一張） -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon"
              aria-hidden="true"
              :style="{ color: currentColor }"
            >
              &#10094;
            </span>
            <span class="visually-hidden">Previous</span>
          </button>

          <!-- 控制鈕（下一張）始終為 #00CC99 -->
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true">
              &#10095;
            </span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>

    <div style="margin-top: 60px;">
      <img src="@/assets/img/retrospective/bottom_bar.png" style="width: 100%;">
    </div>

    <!-- 圖片放大顯示的 Modal -->
    <div v-if="selectedImage" class="image-modal" @click.self="closeModal">
      <div class="image-modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <img :src="selectedImage" alt="Enlarged image" />
      </div>
    </div>
  </div>
</template>

<script>
import p2024_001 from '@/assets/img/retrospective/2024_001.png';
import p2024_002 from '@/assets/img/retrospective/2024_002.png';
import p2024_003 from '@/assets/img/retrospective/2024_003.png';
import p2024_004 from '@/assets/img/retrospective/2024_004.png';

import p2023_001 from '@/assets/img/retrospective/2023_001.png';
import p2023_002 from '@/assets/img/retrospective/2023_002.png';
import p2023_003 from '@/assets/img/retrospective/2023_003.png';
import p2023_004 from '@/assets/img/retrospective/2023_004.png';

import p2022_001 from '@/assets/img/retrospective/2022_001.png';
import p2022_002 from '@/assets/img/retrospective/2022_002.png';
import p2022_003 from '@/assets/img/retrospective/2022_003.png';
import p2022_004 from '@/assets/img/retrospective/2022_004.png';

export default {
  name: 'Retrospective',
  data() {
    return {
      activeTab: '2024',
      selectedImage: null, // 用於控制 Modal 裡放大的圖片
    };
  },
  computed: {
    // 動態回傳不同年份對應的圖片
    images() {
      switch (this.activeTab) {
        case '2024':
          return [p2024_001, p2024_002, p2024_003, p2024_004];
        case '2023':
          return [p2023_001, p2023_002, p2023_003, p2023_004];
        case '2022':
          return [p2022_001, p2022_002, p2022_003, p2022_004];
        default:
          return [p2024_001, p2024_002, p2024_003, p2024_004];
      }
    },
    // Carousel 的類別（控制上一張箭頭及指示點的顏色）
    carouselClass() {
      switch (this.activeTab) {
        case '2024':
          return 'chu';
        case '2023':
          return 'fu';
        case '2022':
          return 'jue';
        default:
          return 'chu';
      }
    },
    // 回傳「前一張」箭頭的顏色
    currentColor() {
      switch (this.activeTab) {
        case '2024':
          return '#00CC99';
        case '2023':
          return '#00CC99'; // 與設計相符，統一使用 #00CC99
        case '2022':
          return '#00CC99'; // 與設計相符，統一使用 #00CC99
        default:
          return '#00CC99';
      }
    },
  },
  methods: {
    setActive(tab) {
      this.activeTab = tab;
    },
    // 點擊圖片時，打開放大視窗
    showImage(image) {
      this.selectedImage = image;
    },
    // 關閉圖片放大視窗
    closeModal() {
      this.selectedImage = null;
    },
  },
};
</script>

<style scoped>
/* 外層設定 */
.page-container {
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}

/* 固定背景層 */
.fixed-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url('@/assets/img/bk.png') no-repeat center center;
  background-size: cover;
  z-index: -1;
}

/* 標題欄 */
.title_head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  /* 讓標題在左，按鈕群在右 */
  justify-content: flex-start;
  z-index: 10;
  padding: 10px;
}

.title-bar {
  margin: 10px 0 0 7%;
  width: 15vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4db233;
  color: white;
  font-weight: 900;
  border: 5px solid white;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  font-size: calc(1.2vw + 1vh);
  text-align: center;
}

/* 按鈕容器 */
.buttons {
  /* 讓前三個按鈕靠左，最後一個 btn2 靠右 */
  margin-left: 3vw;
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

/* 修改按鈕成圓形與預設樣式 */
.btn {
  border: none;
  color: white;
  font-weight: bold;
  white-space: nowrap;
  cursor: pointer;
  font-size: 1vw;
  width: calc(2vw + 20px);
  height: calc(2vw + 20px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  background-color: #9fa09f;
}

.btn:hover {
  transform: scale(1.1);
}

/* 讓 btn2 靠到最右 */
.btn2 {
  margin-left: 30vw;
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  width: 9vw;
  font-size: 1vw;
  font-weight: bold;
  background-color: #00cc99;
  transition: transform 0.2s ease;
}

.btn2:hover {
  transform: scale(1.05);
  color: white;
}

/* 所有 active/hover 狀態統一用 #00cc99 */
.btn.btn-chu.active,
.btn.btn-chu:hover,
.btn.btn-fu.active,
.btn.btn-fu:hover,
.btn.btn-jue.active,
.btn.btn-jue:hover {
  background-color: #00cc99;
  color: white;
}

/* 內容層：margin-top 拉高一點避免被標題蓋住 */
.content {
  width: 100%;
  min-height: 100%;
  margin-top: 8vh; /* 調整空間，避免標題列重疊 */
  padding-top: 5vh;
  box-sizing: border-box;
}

/* 上方兩個影片並排，寬度 80% 置中 */
.videos-wrapper {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

.video-item {
  flex: 0 0 40%;
  /* 兩個影片各佔約40%，中間留 2rem */
}

/* 下方輪播容器，同樣 80% 置中 */
.carousel-container {
  width: 80%;
  margin: 0 auto;
  position: relative;
}

/* 一次顯示4張的容器：利用 flex 讓 4 張圖片並排 */
.multi-container {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}

.multi-item {
  flex: 1; /* 4 張等分 */
  cursor: pointer; /* 滑鼠移入顯示可點擊 */
}

.multi-item img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* 移除預設控制鈕背景圖，使用文字箭頭 */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-image: none;
  font-size: 2rem;
  line-height: 1;
}

/* 左箭頭顏色根據年份動態變化，指示點顏色也相同 */
.carousel.chu .carousel-control-prev-icon,
.carousel.chu .carousel-indicators [data-bs-target],
.carousel.fu .carousel-control-prev-icon,
.carousel.fu .carousel-indicators [data-bs-target],
.carousel.jue .carousel-control-prev-icon,
.carousel.jue .carousel-indicators [data-bs-target] {
  color: #00cc99; /* 與設計一致，改為統一 #00cc99 */
}

/* 指示點樣式 */
.carousel-indicators [data-bs-target] {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  margin: 0 4px;
}

/* 右箭頭始終為 #00CC99 */
.carousel-control-next-icon {
  color: #00cc99 !important;
}

/* 讓控制鈕更往外，position 設定在 .carousel-container 下 */
.carousel-container .carousel-control-prev,
.carousel-container .carousel-control-next {
  width: auto;
  height: auto;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-container .carousel-control-prev {
  left: -2rem; /* 可依需求自行調整 */
}

.carousel-container .carousel-control-next {
  right: -2rem; /* 可依需求自行調整 */
}

/* 圖片放大顯示的 Modal */
.image-modal {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.image-modal-content img {
  width: 100%;
  height: auto;
  display: block;
}

/* 關閉按鈕 */
.close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
}
</style>

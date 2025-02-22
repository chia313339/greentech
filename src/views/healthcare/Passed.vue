<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>

    <!-- 標題欄 -->
    <div class="title_head">
      <div class="title-bar">{{ $t('nav.passed') }}</div>
      <div class="buttons">
        <button class="btn btn-chu" :class="{ active: activeTab === '初賽' }" @click="setActive('初賽')">
          初賽
        </button>
        <button class="btn btn-fu" :class="{ active: activeTab === '複賽' }" @click="setActive('複賽')">
          複賽
        </button>
        <button class="btn btn-jue" :class="{ active: activeTab === '決賽' }" @click="setActive('決賽')">
          決賽
        </button>
      </div>
    </div>

    <!-- 內容層 -->
    <div class="content">
      <div class="carousel-container">
        <div
        :key="activeTab"
          id="carouselExampleIndicators"
          class="carousel slide"
          :class="carouselClass"
          data-bs-ride="carousel"
        >
          <!-- 動態生成指示點 -->
          <div class="carousel-indicators">
            <button 
              v-for="(image, index) in images" 
              :key="index" 
              type="button" 
              data-bs-target="#carouselExampleIndicators" 
              :data-bs-slide-to="index" 
              :class="{ active: index === 0 }" 
              :aria-current="index === 0 ? 'true' : undefined" 
              :aria-label="'Slide ' + (index + 1)">
            </button>
          </div>
          <!-- Carousel 內容 -->
          <div class="carousel-inner">
            <div 
              v-for="(image, index) in images" 
              :key="index" 
              :class="['carousel-item', { active: index === 0 }]">
              <img :src="image" class="d-block w-100" alt="Slide image">
            </div>
          </div>
          <!-- 控制鈕 -->
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true" :style="{ color: currentColor }">&#10094;</span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true" :style="{ color: currentColor }">&#10095;</span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chu1 from '@/assets/img/passed/chu001.png';
import chu2 from '@/assets/img/passed/chu002.png';
import chu3 from '@/assets/img/passed/chu003.png';
import chu4 from '@/assets/img/passed/chu004.png';
import chu5 from '@/assets/img/passed/chu005.png';

import fu1 from '@/assets/img/passed/fu001.png';
import fu2 from '@/assets/img/passed/fu002.png';
import fu3 from '@/assets/img/passed/fu003.png';

import jue1 from '@/assets/img/passed/jue001.png';
import jue2 from '@/assets/img/passed/jue002.png';

export default {
  name: 'GT-Scoring',
  data() {
    return {
      activeTab: '初賽'
    }
  },
  computed: {
    // 根據目前階段返回對應圖片陣列
    images() {
      switch(this.activeTab) {
        case '初賽':
          return [chu1, chu2, chu3, chu4, chu5];
        case '複賽':
          return [fu1, fu2, fu3];
        case '決賽':
          return [jue1, jue2];
        default:
          return [chu1, chu2, chu3, chu4, chu5];
      }
    },
    // 用於設定 carousel 上的 class，以便針對不同階段設定控制鈕與指示點顏色
    carouselClass() {
      switch(this.activeTab) {
        case '初賽':
          return 'chu';
        case '複賽':
          return 'fu';
        case '決賽':
          return 'jue';
        default:
          return 'chu';
      }
    },
    // 根據階段返回顏色
    currentColor() {
      switch(this.activeTab) {
        case '初賽': return '#00CC99';
        case '複賽': return '#009933';
        case '決賽': return '#1A5B2F';
        default: return '#00CC99';
      }
    }
  },
  methods: {
    setActive(tab) {
      this.activeTab = tab;
    }
  }
}
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
  background-color: #4DB233;
  color: white;
  font-weight: 900;
  border: 5px solid white;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  font-size: calc(1.2vw + 1vh);
  text-align: center;
}

/* 按鈕容器 */
.buttons {
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
  background-color: #9FA09F;
}

.btn:hover {
  transform: scale(1.1);
}

/* 初賽的 active/hover 狀態 */
.btn.btn-chu.active,
.btn.btn-chu:hover {
  background-color: #00CC99;
  color: white;
}

/* 複賽的 active/hover 狀態 */
.btn.btn-fu.active,
.btn.btn-fu:hover {
  background-color: #009933;
  color: white;
}

/* 決賽的 active/hover 狀態 */
.btn.btn-jue.active,
.btn.btn-jue:hover {
  background-color: #1A5B2F;
  color: white;
}

/* 內容層：置中 carousel */
.content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: -120px;
}

/* Carousel container 調整 */
.carousel-container {
  width: 90vw;
  margin-top: 25vh;
}

/* Carousel 圖片 */
.carousel-inner img {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
}

/* 移除預設控制鈕背景圖，使用文字箭頭 */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-image: none;
  font-size: 2rem;
  line-height: 1;
}

/* 根據不同階段改變控制鈕及指示點顏色 */
.carousel.chu .carousel-control-prev-icon,
.carousel.chu .carousel-control-next-icon,
.carousel.chu .carousel-indicators [data-bs-target] {
  color: #00CC99;
}

.carousel.fu .carousel-control-prev-icon,
.carousel.fu .carousel-control-next-icon,
.carousel.fu .carousel-indicators [data-bs-target] {
  color: #009933;
}

.carousel.jue .carousel-control-prev-icon,
.carousel.jue .carousel-control-next-icon,
.carousel.jue .carousel-indicators [data-bs-target] {
  color: #1A5B2F;
}

/* 指示點樣式 */
.carousel-indicators [data-bs-target] {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  margin: 0 4px;
}
</style>

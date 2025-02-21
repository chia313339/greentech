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

    <!-- 內容層：使用 Bootstrap Carousel -->
    <div class="content">
      <div :id="'carouselPassed'" :class="['carousel slide', carouselClass]" data-bs-ride="carousel">
        <!-- 指示點 -->
        <div class="carousel-indicators">
          <button
            type="button"
            v-for="(img, index) in images"
            :key="'indicator-' + index"
            :data-bs-target="'#carouselPassed'"
            :data-bs-slide-to="index"
            :class="{ active: index === 0 }"
            :aria-current="index === 0 ? 'true' : null"
            :aria-label="'Slide ' + (index + 1)">
          </button>
        </div>
        <!-- Carousel 內容 -->
        <div class="carousel-inner">
          <div
            v-for="(img, index) in images"
            :key="'item-' + index"
            :class="['carousel-item', { active: index === 0 }]">
            <img :src="img" class="d-block w-100" alt="Passed Image">
          </div>
        </div>
        <!-- 前後控制按鈕 -->
        <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselPassed'" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" :data-bs-target="'#carouselPassed'" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import chu001 from '@/assets/img/passed/chu001.png';
import chu002 from '@/assets/img/passed/chu002.png';
import chu003 from '@/assets/img/passed/chu003.png';
import chu004 from '@/assets/img/passed/chu004.png';
import chu005 from '@/assets/img/passed/chu005.png';

import fu001 from '@/assets/img/passed/fu001.png';
import fu002 from '@/assets/img/passed/fu002.png';
import fu003 from '@/assets/img/passed/fu003.png';

import jue001 from '@/assets/img/passed/jue001.png';
import jue002 from '@/assets/img/passed/jue002.png';

export default {
  name: 'GT-Scoring',
  data() {
    return {
      activeTab: '初賽'
    }
  },
  computed: {
    images() {
      if (this.activeTab === '初賽') {
        return [chu001, chu002, chu003, chu004, chu005];
      } else if (this.activeTab === '複賽') {
        return [fu001, fu002, fu003];
      } else if (this.activeTab === '決賽') {
        return [jue001, jue002];
      }
      return [];
    },
    carouselClass() {
      // 回傳對應的 class 名稱
      if (this.activeTab === '初賽') return 'carousel-chu';
      if (this.activeTab === '複賽') return 'carousel-fu';
      if (this.activeTab === '決賽') return 'carousel-jue';
      return '';
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

/* 按鈕樣式 */
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
  transform: scale(1.1);      /* 滑鼠移入時放大 */
}

/* 初賽按鈕 */
.btn.btn-chu.active,
.btn.btn-chu:hover {
  background-color: #00CC99;
  color: white;
}

/* 複賽按鈕 */
.btn.btn-fu.active,
.btn.btn-fu:hover {
  background-color: #009933;
  color: white;
}

/* 決賽按鈕 */
.btn.btn-jue.active,
.btn.btn-jue:hover {
  background-color: #1A5B2F;
  color: white;
}

/* 內容層 */
.content {
  margin-top: 100px;
  padding-bottom: 50px;
  width: 100%;
}

/* Carousel 圖片樣式 */
.carousel-inner img {
  max-height: 70vh;
  object-fit: contain;
}

/* ===== 針對不同賽制的 Carousel 控制與指示點 ===== */

/* 初賽：#00CC99 */
.carousel-chu .carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%2300CC99' viewBox='0 0 8 8'%3E%3Cpath d='M4.854 0.146a.5.5 0 0 0-.708 0L.646 3.646a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L1.707 4 4.854.854a.5.5 0 0 0 0-.708z'/%3E%3C/svg%3E");
}
.carousel-chu .carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%2300CC99' viewBox='0 0 8 8'%3E%3Cpath d='M3.146 0.146a.5.5 0 0 1 .708 0L7.354 3.646a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 1 1-.708-.708L6.293 4 3.146.854a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
}
.carousel-chu .carousel-indicators button {
  background-color: #00CC99;
}
.carousel-chu .carousel-indicators .active {
  background-color: #00CC99;
}

/* 複賽：#009933 */
.carousel-fu .carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23009933' viewBox='0 0 8 8'%3E%3Cpath d='M4.854 0.146a.5.5 0 0 0-.708 0L.646 3.646a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L1.707 4 4.854.854a.5.5 0 0 0 0-.708z'/%3E%3C/svg%3E");
}
.carousel-fu .carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23009933' viewBox='0 0 8 8'%3E%3Cpath d='M3.146 0.146a.5.5 0 0 1 .708 0L7.354 3.646a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 1 1-.708-.708L6.293 4 3.146.854a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
}
.carousel-fu .carousel-indicators button {
  background-color: #009933;
}
.carousel-fu .carousel-indicators .active {
  background-color: #009933;
}

/* 決賽：#1A5B2F */
.carousel-jue .carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%231A5B2F' viewBox='0 0 8 8'%3E%3Cpath d='M4.854 0.146a.5.5 0 0 0-.708 0L.646 3.646a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L1.707 4 4.854.854a.5.5 0 0 0 0-.708z'/%3E%3C/svg%3E");
}
.carousel-jue .carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%231A5B2F' viewBox='0 0 8 8'%3E%3Cpath d='M3.146 0.146a.5.5 0 0 1 .708 0L7.354 3.646a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 1 1-.708-.708L6.293 4 3.146.854a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
}
.carousel-jue .carousel-indicators button {
  background-color: #1A5B2F;
}
.carousel-jue .carousel-indicators .active {
  background-color: #1A5B2F;
}
</style>

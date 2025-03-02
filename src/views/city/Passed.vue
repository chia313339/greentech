<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>

    <!-- 標題欄 -->
    <div class="title_head">
      <div class="title-bar">{{ $t('nav.passed') }}</div>
      <div class="buttons">
        <button class="btn btn-chu" 
          :class="{ active: activeTab === '初賽', 'btn-en': $i18n.locale !== 'zh' }" 
          @click="setActive('初賽')">
          {{ $t('pages.game1') }}
        </button>
        <button class="btn btn-fu" 
          :class="{ active: activeTab === '複賽', 'btn-en': $i18n.locale !== 'zh' }" 
          @click="setActive('複賽')">
          {{ $t('pages.game2') }}
        </button>
        <button class="btn btn-jue" 
          :class="{ active: activeTab === '決賽', 'btn-en': $i18n.locale !== 'zh' }" 
          @click="setActive('決賽')">
          {{ $t('pages.game3') }}
        </button>
      </div>
    </div>

    <!-- 內容層 -->
    <div class="content">
      <div class="img-container">
        <img :src="passedImg" alt="About">
      </div>
      <!-- <div class="carousel-container">
        <div
          :key="activeTab"
          id="carouselExampleIndicators"
          class="carousel slide"
          :class="carouselClass"
          data-bs-ride="carousel"
        >
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
          <div class="carousel-inner">
            <div 
              v-for="(image, index) in images" 
              :key="index" 
              :class="['carousel-item', { active: index === 0 }]">
              <img :src="image" class="d-block w-100" alt="Slide image">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true" :style="{ color: currentColor }">&#10094;</span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true" :style="{ color: currentColor }">&#10095;</span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import noneZh from '@/assets/img/city/passed/none.png';
import noneEn from '@/assets/img/city/passed/none_en.png';

export default {
  name: 'GT-Scoring',
  data() {
    return {
      activeTab: '初賽'
    }
  },
  computed: {
    passedImg() {
      return this.$i18n.locale === 'zh' ? noneZh : noneEn;
    },
    // 以下 computed 保留原 carousel 相關邏輯（若有需要使用時）
    images() {
      // 此處留空或自行補上 carousel 圖片資料
      return [];
    },
    carouselClass() {
      switch(this.activeTab) {
        case '初賽': return 'chu';
        case '複賽': return 'fu';
        case '決賽': return 'jue';
        default: return 'chu';
      }
    },
    currentColor() {
      switch(this.activeTab) {
        case '初賽': return '#80C3E8';
        case '複賽': return '#429CCE';
        case '決賽': return '#4268A0';
        default: return '#80C3E8';
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
  background-color: #0099FF;
  color: white;
  font-weight: 900;
  border: 3px solid white;
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

/* 基本按鈕樣式 */
.btn {
  border: none;
  color: white;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  font-size: 1vw;  /* 中文時預設 1vw */
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

.btn.active {
  color: white;
}

/* 當語系為英文時，調整按鈕字型大小為 0.5vw */
.btn-en {
  font-size: 0.5vw;
}

/* 初賽的 active/hover 狀態 */
.btn.btn-chu.active,
.btn.btn-chu:hover {
  background-color: #80C3E8;
  color: white;
}

/* 複賽的 active/hover 狀態 */
.btn.btn-fu.active,
.btn.btn-fu:hover {
  background-color: #429CCE;
  color: white;
}

/* 決賽的 active/hover 狀態 */
.btn.btn-jue.active,
.btn.btn-jue:hover {
  background-color: #4268A0;
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
/* .carousel-container {
  width: 90vw;
  margin-top: 25vh;
} */

/* Carousel 圖片 */
/* .carousel-inner img {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
} */

/* 移除預設控制鈕背景圖，使用文字箭頭 */
/* .carousel-control-prev-icon,
.carousel-control-next-icon {
  background-image: none;
  font-size: 2rem;
  line-height: 1;
} */

/* 根據不同階段改變控制鈕及指示點顏色 */
/* .carousel.chu .carousel-control-prev-icon,
.carousel.chu .carousel-control-next-icon,
.carousel.chu .carousel-indicators [data-bs-target] {
  color: #80C3E8;
}

.carousel.fu .carousel-control-prev-icon,
.carousel.fu .carousel-control-next-icon,
.carousel.fu .carousel-indicators [data-bs-target] {
  color: #429CCE;
}

.carousel.jue .carousel-control-prev-icon,
.carousel.jue .carousel-control-next-icon,
.carousel.jue .carousel-indicators [data-bs-target] {
  color: #4268A0;
} */

/* 指示點樣式 */
/* .carousel-indicators [data-bs-target] {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  margin: 0 4px;
} */

/* 圖片容器 */
.img-container {
  margin-top: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

/* 圖片 */
.img-container img {
  max-width: 90vw;
  max-height: 80vh;
  width: auto;
  height: auto;
  display: block;
}
</style>

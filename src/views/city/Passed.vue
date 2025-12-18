<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>

    <!-- 小標題 -->
    <div class="title-little">{{ $t('class.city') }}</div>

    <!-- 右上角文件按鈕 -->
    <a
      class="doc-button"
      :href="docLink"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img :src="docIcon" alt="document link" />
    </a>

    <!-- 標題欄 -->
    <div class="title-bar">{{ $t('nav.passed') }}</div>

    <!-- 下載按鈕 -->
    <div class="buttons">
      <button
        class="btn btn-chu"
        :class="{ active: activeTab === '初賽', 'btn-en': $i18n.locale !== 'zh' }"
        @click="setActive('初賽')"
      >
        {{ $t('pages.game1') }}
      </button>
      <button
        class="btn btn-fu"
        :class="{ active: activeTab === '複賽', 'btn-en': $i18n.locale !== 'zh' }"
        @click="setActive('複賽')"
      >
        {{ $t('pages.game2') }}
      </button>
      <button
        class="btn btn-jue"
        :class="{ active: activeTab === '決賽', 'btn-en': $i18n.locale !== 'zh' }"
        @click="setActive('決賽')"
      >
        {{ $t('pages.game3') }}
      </button>
    </div>

    <!-- 內容層 -->
    <div class="content">
      <div class="img-container" style="display: none;">
        <img :src="passedImg" alt="About" />
      </div>
      <div class="carousel-container" >
        <div
          :key="activeTab"
          id="carouselExampleIndicators"
          class="carousel slide"
          :class="carouselClass"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators custom-indicators">
            <!-- <button
              v-for="(image, index) in images"
              :key="index"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              :data-bs-slide-to="index"
              :class="{ active: index === 0 }"
              :aria-current="index === 0 ? 'true' : undefined"
              :aria-label="'Slide ' + (index + 1)"
            ></button> -->
          </div>
          <div class="carousel-inner">
            <div
              v-for="(image, index) in images"
              :key="index"
              :class="['carousel-item', { active: index === 0 }]"
            >
              <img :src="image" class="d-block w-100" alt="Slide image" />
            </div>
          </div>
          <!-- <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon"
              aria-hidden="true"
              :style="{ color: currentColor }"
              >&#10094;</span
            >
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon"
              aria-hidden="true"
              :style="{ color: currentColor }"
              >&#10095;</span
            >
            <span class="visually-hidden">Next</span>
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import noneZh from '@/assets/img/city/passed/none.png';
import noneEn from '@/assets/img/city/passed/none_en.png';
import docIcon from '@/assets/docbt.png';
export default {
  name: 'GT-Scoring',
  data() {
    return {
      activeTab: '決賽',
      docIcon,
      docLink: 'https://drive.google.com/file/d/1d_iRQcqdPrYoXWEX1eA8N32izwGUJXPn/view?usp=sharing'
    }
  },
  computed: {
    passedImg() {
      return this.$i18n.locale === 'zh' ? noneZh : noneEn;
    },
    // 根據 activeTab 回傳不同的圖片陣列
    images() {
      let arr = [];
      // 根據語言設定決定檔名後綴
      const suffix = this.$i18n.locale === 'zh' ? '' : '_en';
      
      if (this.activeTab === '初賽') {
        // 初賽： chu001 ~ chu005
        for (let i = 1; i <= 1; i++) {
          let num = i.toString().padStart(3, '0');
          let url = new URL(`../../assets/img/city/passed/chu${num}${suffix}.png`, import.meta.url).href;
          arr.push(url);
        }
      } else if (this.activeTab === '複賽') {
        // 複賽： fu001 ~ fu003
        for (let i = 1; i <= 1; i++) {
          let num = i.toString().padStart(3, '0');
          let url = new URL(`../../assets/img/city/passed/fu${num}${suffix}.png`, import.meta.url).href;
          arr.push(url);
        }
      } else if (this.activeTab === '決賽') {
        // 決賽： jue001 ~ jue002
        for (let i = 1; i <= 1; i++) {
          let num = i.toString().padStart(3, '0');
          let url = new URL(`../../assets/img/city/passed/jue${num}${suffix}.png`, import.meta.url).href;
          arr.push(url);
        }
      }
      return arr;
    },
    carouselClass() {
      switch (this.activeTab) {
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
    currentColor() {
      switch (this.activeTab) {
        case '初賽':
          return '#80C3E8';
        case '複賽':
          return '#429CCE';
        case '決賽':
          return '#4268A0';
        default:
          return '#80C3E8';
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
.page-container {
  margin-left: 60px;
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
.title-bar {
  position: fixed;
  top: 5%;
  left: 7%;
  width: 15vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  color: #474947;
  font-weight: 900;
  border: 3px solid #4DB233;
  border-image: linear-gradient(to right, #4DB233, #0099FF, #FFBA40) 1;
  border-image-slice: 1;
  z-index: 10;
  font-size: calc(1.2vw + 1vh);
  text-align: center;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
}

.title-little {
  position: fixed;
  top: 2%;
  left: 8%;
  border-radius: 5px 5px 0 0;
  padding: 0.5vh 1vw;
  padding-bottom: 1vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0099FF;
  color: #ffffff;
  font-weight: 900;
  z-index: 9;
  font-size: calc(0.5vw + 0.6vh);
  text-align: center;
}

.doc-button {
  position: fixed;
  top: 5%;
  right: 5%;
  width: auto;
  height: 50px;
  display: inline-block;
  z-index: 20;
  transition: transform 0.2s ease;
}

.doc-button:hover {
  transform: scale(1.05);
}

.doc-button img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* 按鈕容器 */
.buttons {
  position: fixed;
  top: 5.5%;
  left: calc(7% + 15vw + 50px);
  display: flex;
  gap: 20px;
  z-index: 9;
}

.btn {
  border: none;
  color: white;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

.btn.active {
  color: white;
}

.btn-en {
  font-size: 0.5vw;
}

.btn.btn-chu.active,
.btn.btn-chu:hover {
  background-color: #80C3E8;
  color: white;
}

.btn.btn-fu.active,
.btn.btn-fu:hover {
  background-color: #429CCE;
  color: white;
}

.btn.btn-jue.active,
.btn.btn-jue:hover {
  background-color: #4268A0;
  color: white;
}

/* 內容層 */
.content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: -120px;
}

/* 圖片容器 */
.img-container {
  margin-top: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.img-container img {
  max-width: 90vw;
  max-height: 80vh;
  width: auto;
  height: auto;
  display: block;
}

/* Carousel container */
.carousel-container {
  width: 90vw;
  margin-top: 20vh;
  max-width: 80vw;
}

/* 調整 carousel 控制鈕 */
.carousel-control-prev,
.carousel-control-next {
  width: auto;
  top: 50%;
  transform: translateY(-50%);
  /* 調整按鈕位置，讓左右間距較大，避免覆蓋圖片 */
}

.carousel-control-prev {
  left: -3%;  /* 向左移動 */
}

.carousel-control-next {
  right: -3%; /* 向右移動 */
}

/* 移除預設背景圖，僅保留文字 icon */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-image: none;
  font-size: 2.5rem; /* 可依需求調整大小 */
  line-height: 1;
}

.custom-indicators {
  position: absolute;
  width: 100%;
  bottom: -20px;
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
  border: 2px solid #80C3E8;
  opacity: 1;
  margin: 10px;
  transition: background-color 0.2s ease;
}
.custom-indicators button.active {
  background-color: #80C3E8;
  border-color: #80C3E8;
}
</style>

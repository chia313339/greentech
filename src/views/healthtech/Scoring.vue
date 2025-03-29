<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>
  
    <!-- 小標題 -->
    <div class="title-little">{{ $t('class.hc') }}</div>

    <!-- 標題欄 -->
    <div class="title-bar">{{ $t('nav.scoring') }}</div>

    <!-- 按鈕 -->
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
      <div class="img-container">
        <img :src="imgSrc" alt="Scoring">
      </div>
    </div>
  </div>
</template>
  
<script>
import image1 from '@/assets/img/hc/scoring/001.png';
import image2 from '@/assets/img/hc/scoring/002.png';
import image3 from '@/assets/img/hc/scoring/003.png';

import image1_en from '@/assets/img/hc/scoring/001_en.png';
import image2_en from '@/assets/img/hc/scoring/002_en.png';
import image3_en from '@/assets/img/hc/scoring/003_en.png';

export default {
  name: 'GT-Scoring',
  data() {
    return {
      activeTab: '初賽'
    }
  },
  computed: {
    imgSrc() {
      if (this.$i18n.locale === 'zh') {
        switch(this.activeTab) {
          case '初賽': return image1;
          case '複賽': return image2;
          case '決賽': return image3;
          default: return image1;
        }
      } else {
        switch(this.activeTab) {
          case '初賽': return image1_en;
          case '複賽': return image2_en;
          case '決賽': return image3_en;
          default: return image1_en;
        }
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
  background: #FFBA40;
  color: #ffffff;
  font-weight: 900;
  z-index: 9;
  font-size: calc(0.5vw + 0.6vh);
  text-align: center;
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
  
/* 基本按鈕樣式 */
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

/* 當語系為英文時，調整按鈕字型大小為 0.5vw */
.btn-en {
  font-size: 0.5vw;
}

/* 各按鈕的 active/hover 狀態 */
.btn.btn-chu.active,
.btn.btn-chu:hover {
  background-color: #FFB600;
  color: white;
}
  
.btn.btn-fu.active,
.btn.btn-fu:hover {
  background-color: #FF9900;
  color: white;
}
  
.btn.btn-jue.active,
.btn.btn-jue:hover {
  background-color: #FF6600;
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
  margin-top: -100px;
}
  
/* 圖片容器 */
.img-container {
  margin-top: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
  
/* 圖片 */
.img-container img {
  max-width: 90vw;
  max-height: 90vh;
  width: auto;
  height: auto;
  display: block;
}
</style>

<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>

    <!-- 標題欄，固定在畫面上 -->
    <div class="title-bar">{{ $t('nav.about') }}</div>

    <!-- 內容層 -->
    <div class="content">
      <!-- 圖片容器，圖片置中 -->
      <div class="img-container">
        <img :src="aboutImage" alt="About">
      </div>
    </div>
  </div>
</template>

<script>
import aboutZh from '@/assets/img/about/about.png'
import aboutEn from '@/assets/img/about/about_en.png'

export default {
  name: 'Greentech-About',
  computed: {
    aboutImage() {
      return this.$i18n.locale === 'zh' ? aboutZh : aboutEn
    }
  }
}
</script>

<style scoped>
.page-container {
  margin-left: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* 固定背景層，覆滿整個螢幕 */
.fixed-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url('@/assets/img/about/bk.png') no-repeat center center;
  background-size: cover;
  z-index: -1;
}

/* 標題欄 */
/* .title-bar {
  position: fixed;
  top: 5%;
  left: 7%;
  width: 15vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4DB233;
  color: white;
  font-weight: 900;
  border: 3px solid white;
  background: linear-gradient(to right, #4DB233, #0099FF, #FFBA40);
  z-index: 10;
  font-size: calc(1.2vw + 1vh);
  text-align: center;
} */

.title-bar {
  position: fixed;
  top: 5%;
  left: 7%;
  width: 15vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 白色背景 */
  background: #ffffff;
  /* 文字顏色改為 #474947 */
  color: #474947;
  /* 粗體 */
  font-weight: 900;
  /* 設定外框 + 漸層邊框 */
  border: 3px solid #4DB233; /* 作為舊版瀏覽器的 fallback */
  border-image: linear-gradient(to right, #4DB233, #0099FF, #FFBA40) 1;
  border-image-slice: 1;
  z-index: 10;
  font-size: calc(1.2vw + 1vh);
  text-align: center;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
}

/* 內容層：設定為 flex 以便置中內容 */
.content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 0px;
}

/* 圖片容器 */
.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

/* 圖片：設定最大寬度與最大高度 */
.img-container img {
  max-width: 90vw;
  /* max-height: 99vh; */
  width: auto;
  height: auto;
  display: block;
}
</style>

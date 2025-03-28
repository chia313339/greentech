<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>

    <!-- 小標題 -->
    <div class="title-little">{{ $t('class.gt') }}</div>

    <!-- 標題欄，固定在畫面上 -->
    <div class="title-bar">{{ $t('nav.schedule') }}</div>

    <!-- 內容層 -->
    <div class="content">
      <!-- 圖片容器，圖片置中 -->
      <div class="img-container">
        <img :src="scheduleImage" alt="schedule">
      </div>
    </div>
  </div>
</template>

<script>
import scheduleZh from '@/assets/img/schedule/schedule.png'
import scheduleEn from '@/assets/img/schedule/schedule_en.png'

export default {
  name: 'Greentech-Schedule',
  computed: {
    scheduleImage() {
      return this.$i18n.locale === 'zh' ? scheduleZh : scheduleEn
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

.title-little{
  position: fixed;
  top: 2%;
  left: 8%;
  border-radius: 5px 5px 0 0;
  padding: 0.5vh 1vw;
  padding-bottom: 1vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 白色背景 */
  background: #02D703;
  color: #ffffff;
  /* 粗體 */
  font-weight: 900;
  z-index: 9;
  font-size: calc(0.5vw + 0.6vh);
  text-align: center;
}

/* 內容層：設定為 flex 以便置中內容 */
.content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

}

/* 圖片容器 */
.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

/* 圖片：寬度設為 90vw，最大高度不超過 100vh，自動保持原比例 */
.img-container img {
  max-width: 90vw;
  max-height: 90vh;
  width: auto;
  height: auto;
  display: block;
}
</style>

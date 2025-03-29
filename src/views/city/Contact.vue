<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg" :style="bgStyle"></div>

    <!-- 內容層 -->
    <div class="content">
      <!-- 圖片容器 -->
      <div class="img-container">
        <img :src="unitImg" class="unit-img" alt="Unit Image">
        <img :src="callImg" class="call-img" alt="Call Image">
      </div>
    </div>
  </div>
</template>

<script>
import unitImgZh from '@/assets/img/contact/unit.png'
import unitImgEn from '@/assets/img/contact/unit_en.png'
import callImgZh from '@/assets/img/contact/call.png'
import callImgEn from '@/assets/img/contact/call_en.png'
import bkImgZh from '@/assets/img/contact/bk_b.png'
import bkImgEn from '@/assets/img/contact/bk_b.png'

export default {
  name: 'Healthtech-About',
  computed: {
    unitImg() {
      return this.$i18n.locale === 'en' ? unitImgEn : unitImgZh;
    },
    callImg() {
      return this.$i18n.locale === 'en' ? callImgEn : callImgZh;
    },
    bgStyle() {
      const bgImage = this.$i18n.locale === 'en' ? bkImgEn : bkImgZh;
      return {
        background: `url(${bgImage}) no-repeat center center`,
        backgroundSize: 'cover'
      };
    }
  }
}
</script>

<style scoped>
.page-container {
  height: 100vh; /* 確保不超出畫面 */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* 固定背景層 */
.fixed-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

/* 內容層：設定為 flex 以便置中內容 */
.content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* 若需要，這邊的 margin-top 也可以調整為相對單位 */
  margin-top: -10vh;
}

/* 圖片容器 */
.img-container {
  position: relative;
  width: 100%;
}

/* 將圖片樣式移到 CSS 中，使用相對單位 */
.unit-img {
  width: 70vw;
  /* 將原本 150px 調整成相對單位，例如 10vw，可依需求微調 */
  margin-left: 10vw;
  margin-top: 0;
}

.call-img {
  width: 40vw;
  /* 保持 45% 可依需求調整 */
  margin-left: 45%;
  /* 將 100px 轉換為相對單位，例如 10vh */
  margin-top: 10vh;
}
</style>

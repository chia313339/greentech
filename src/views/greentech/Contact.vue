<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>

    <!-- 內容層 -->
    <div class="content">
      <!-- 圖片容器 -->
      <div class="img-container">
        <img :src="unitImg" style="width: 70vw; margin-left: 150px; margin-top: 0px;">
        <img :src="callImg" style="width: 40vw; margin-left: 50%; margin-top: 100px;" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import unitImgZh from '@/assets/img/contact/unit.png'
import unitImgEn from '@/assets/img/contact/unit_en.png'
import callImgZh from '@/assets/img/contact/call.png'
import callImgEn from '@/assets/img/contact/call_en.png'

export default {
  name: 'Healthcare-About',
  computed: {
    unitImg() {
      return this.$i18n.locale === 'en' ? unitImgEn : unitImgZh;
    },
    callImg() {
      return this.$i18n.locale === 'en' ? callImgEn : callImgZh;
    }
  }
}
</script>

<style scoped>
.page-container {
  width: 100vw;
  height: 100vh; /* 確保不超出畫面 */
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
  background: url('@/assets/img/contact/bk.png') no-repeat center center;
  background-size: cover;
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
  margin-top: -100px;
}

/* 圖片容器 */
.img-container {
  position: relative;
  width: 100%;
}
</style>

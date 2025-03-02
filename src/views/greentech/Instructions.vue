<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>

    <!-- 標題欄 -->
    <div class="title_head">
      <div class="title-bar">{{ $t('nav.instructions') }}</div>
      <div class="buttons">
        <button class="btn download-btn" style="background-color: #BA2553;">
          <i class="fa-solid fa-download"></i>&nbsp;&nbsp;{{ entryDocsText }} <span style="color: yellow; font-weight: bolder;">{{ downloadText }}</span>
        </button>
        <button class="btn video-btn" style="background-color: #336600;">
          <i class="fa-solid fa-download"></i>&nbsp;&nbsp;{{ competitionInstructionsText }}
        </button>
      </div>
    </div>

    <!-- 內容層 -->
    <div class="content">
      <div class="img-container">
        <img :src="instructionsImage" alt="About">
      </div>
    </div>
  </div>
</template>

<script>
import instructionsZh from '@/assets/img/instructions/instructions.png'
import instructionsEn from '@/assets/img/instructions/instructions_en.png'

export default {
  name: 'GT-Instructions',
  computed: {
    entryDocsText() {
      return this.$i18n.locale === 'zh'
        ? '參賽應備文件'
        : 'Documents Needed for Entry'
    },
    downloadText() {
      return this.$i18n.locale === 'zh'
        ? '一鍵下載'
        : 'Download'
    },
    competitionInstructionsText() {
      return this.$i18n.locale === 'zh'
        ? '競賽須知'
        : 'Competition instructions'
    },
    instructionsImage() {
      return this.$i18n.locale === 'zh'
        ? instructionsZh
        : instructionsEn
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

.btn {
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1vw;
  transition: transform 0.2s ease;
}

.btn:hover {
  transform: scale(1.05);
  color: white;
}

/* 內容層 */
.content {
  margin-top: 50px;
  padding-bottom: 50px;
  width: 100%;
}

/* 圖片容器 */
.img-container {
  position: relative;
  display: flex;
  padding-right: 100px;
  padding-left: 100px;
  width: 100%;
  align-items: center;
  justify-content: center;
}

/* 圖片：保持原有樣式 */
.img-container img {
  max-width: 90vw;
  max-height: 90vh;
  width: auto;
  height: auto;
  display: block;
}
</style>

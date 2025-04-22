<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>

    <!-- 小標題 -->
    <div class="title-little">{{ $t('class.hc') }}</div>

    <!-- 標題欄 -->
    <div class="title-bar">{{ $t('nav.instructions') }}</div>

    <!-- 下載按鈕 -->
    <div class="buttons">
      <a href="https://drive.google.com/drive/folders/17wiSfVsFTwftXIks_hzJa0LrOKTTDTre?usp=sharing" target="_blank">
          <button class="btn download-btn" style="background-color: #BA2553;">
          <i class="fa-solid fa-download"></i>&nbsp;&nbsp;{{ entryDocsText }} <span style="color: yellow; font-weight: bolder;">{{ downloadText }}</span>
        </button>
      </a>
      <a href="https://drive.google.com/drive/folders/1exnLlZLhrjKfbCmM_gv18_X0TjhxeYIf?usp=sharing" target="_blank">
        <button class="btn video-btn" style="background-color: #FF9900;">
          <i class="fa-solid fa-download"></i>&nbsp;&nbsp;{{ competitionInstructionsText }}
        </button>
      </a>
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
import instructionsZh from '@/assets/img/hc/instructions/instructions.png'
import instructionsEn from '@/assets/img/hc/instructions/instructions_en.png'

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

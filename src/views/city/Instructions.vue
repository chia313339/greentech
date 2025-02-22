<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>

    <!-- 標題欄 -->
    <div class="title_head">
      <div class="title-bar">{{ $t('nav.instructions') }}</div>
      <div class="buttons">
        <button class="btn download-btn" style="background-color: #BA2553;">
          <i class="fa-solid fa-download"></i>&nbsp;&nbsp;參賽應備文件 <span style="color: yellow; font-weight: bolder;">一鍵下載</span>
        </button>
        <button class="btn video-btn" style="background-color: #336600;">
          <i class="fa-solid fa-download"></i>&nbsp;&nbsp;競賽須知
        </button>
      </div>
    </div>

    <!-- 內容層 -->
    <div class="content">
      <div class="img-container">
        <img src="@/assets/img/instructions/instructions.png" alt="About">
        <div class="text-overlay">
          <div><span class="textlink">提案簡報【附件二】</span>｜<span class="textlink">智慧財產權授權聲明書【附件三】</span></div>
          <div>保密同意書【附件四】｜個人資料提供同意書【附件五】</div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'GT-Enterprise'
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
  background-color: #0070b5;
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
  margin-top: 100px;
  padding-bottom: 50px;
  width: 100%;
}

/* Grid 排版 */
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
  max-width: 70vw;
  max-height: 70vh;
  width: auto;
  height: auto;
  display: block;
}

/* 文字覆蓋層：絕對定位在圖片內的左下角 */
.text-overlay {
  position: absolute;
  right: 51%;
  bottom: 12%;
  color: red;
  text-align: right;
  /* 可根據需求調整字體大小與行高 */
  font-size: 0.8vw;
  line-height: 2;
}

.textlink:hover {
  scale: 1.1;
}

</style>

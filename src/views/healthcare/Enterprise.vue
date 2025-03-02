<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>

    <!-- 標題欄 -->
    <div class="title_head">
      <div class="title-bar">{{ $t('nav.enterprise') }}</div>
      <div class="buttons">
        <button class="btn download-btn" style="background-color: #BA2553;">
          <i class="fa-solid fa-download"></i>&nbsp;&nbsp;完整題目下載
        </button>
        <button class="btn video-btn" style="background-color: #336600;">
          <i class="fa-regular fa-circle-play"></i>&nbsp;&nbsp;觀看題目說明影片
        </button>
      </div>
    </div>

    <!-- 內容層 -->
    <div class="content">
      <div class="grid-container">
        <!-- 使用 v-for 重複 36 個區塊 -->
        <div class="grid-item" v-for="i in 36" :key="i">
          <!-- 利用 data-bs-toggle 與 data-bs-target 觸發 Bootstrap Modal -->
          <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#companyModal">
            <img src="@/assets/img/enterprise/com.png" alt="公司">
          </a>
          <div class="company-label">公司{{ i }}</div>
        </div>
      </div>
    </div>

    <!-- Bootstrap Modal：只顯示圖片，內部無額外內距 -->
    <div class="modal fade" id="companyModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content p-0 border-0">
          <!-- 右上角的 X 按鈕，絕對定位 -->
          <button type="button" class="btn-close custom-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div class="modal-body p-0">
            <img src="@/assets/img/enterprise/com_content0.png" alt="公司詳細內容" class="img-fluid">
          </div>
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
  background-color: #FFBA40;
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
  width: 12vw;
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
.grid-container {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  padding-right: 100px;
  padding-left: 100px;
}

@media (min-width: 900px) {
  .grid-container {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (max-width: 600px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

.grid-item {
  text-align: center;
  padding: 5px;
  box-sizing: border-box;
}

.grid-item img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.grid-item img:hover {
  transform: scale(1.05);
}

.company-label {
  margin-top: 5px;
  font-size: 1vw;
  font-weight: bold;
}

/* 自訂 modal 樣式：移除內距，讓圖片與 modal 邊框貼齊 */
.modal-content {
  border: none;
}

.modal-body {
  padding: 0;
}

/* 右上角的 X 按鈕 */
.custom-close {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  /* 若需要，可微調按鈕與邊框距離，例如：
  margin: 5px;
  */
}
</style>

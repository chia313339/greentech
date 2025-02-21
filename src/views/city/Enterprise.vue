<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>

    <!-- 標題欄 -->
    <div class="title_head">
      <div class="title-bar">{{ $t('nav.enterprise')}}</div>
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
          <a href="javascript:void(0)" @click="openModal">
            <img src="@/assets/img/enterprise/com.png" alt="公司">
          </a>
          <div class="company-label">公司{{ i }}</div>
        </div>
      </div>
    </div>

    <!-- Modal 視窗 -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-img-container">
          <img src="@/assets/img/enterprise/com_content.png" alt="公司詳細內容">
          <button class="close-button" @click="closeModal">X</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'City-Enterprise',
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
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
  width: 12vw;
}

.btn:hover {
  transform: scale(1.01);
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

/* Modal 樣式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}

/* Modal 的內容限制尺寸，且自動調整圖片大小 */
.modal-content {
  position: relative;
  max-width: 70vw;
  max-height: 70vh;
  width: 100%;
  height: 100%;
}

/* 圖片容器 */
.modal-img-container {
  position: relative;
  width: 100%;
  height: 100%;
}

/* 圖片自動調整大小，保持比例 */
.modal-img-container img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: 0 auto;
}

/* 關閉按鈕，固定在圖片內右上角 */
.close-button {
  position: absolute;
  top: 0;
  right: 10px;
  border: none;
  color: #060606;
  font-size: 1.5em;
  cursor: pointer;
  padding: 0.2em 0.5em;
  z-index: 2;
  background-color: #ffffff00;
}
</style>

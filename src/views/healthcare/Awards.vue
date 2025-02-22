<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>

    <!-- 標題欄 -->
    <div class="title_head">
      <div class="title-bar">{{ $t('nav.awards') }}</div>
      <div class="buttons">
        <button class="btn btn-fu" :class="{ active: activeTab === '複賽' }" @click="setActive('複賽')">
          複賽
        </button>
        <button class="btn btn-jue" :class="{ active: activeTab === '決賽' }" @click="setActive('決賽')">
          決賽
        </button>
        <!-- 使用 Bootstrap 的 data-bs-toggle 與 data-bs-target 開啟 Modal -->
        <button class="btn2" style="background-color: #BA2553;" data-bs-toggle="modal" data-bs-target="#noteModal">
          注意事項
        </button>
      </div>
    </div>

    <!-- 內容層 -->
    <div class="content">
      <div class="img-container">
        <img :src="imgSrc" alt="About">
      </div>
    </div>

    <!-- Bootstrap Modal -->
    <div class="modal fade" id="noteModal" tabindex="-1" aria-labelledby="noteModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center">
            <!-- 圖片隨 modal 寬度放大，超出高度則可滾動 -->
            <img src="@/assets/img/awards/note.png" class="img-fluid" alt="注意事項">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import image1 from '@/assets/img/awards/001.png';
import image2 from '@/assets/img/awards/002.png';

export default {
  name: 'GT-awards',
  data() {
    return {
      activeTab: '複賽'
    }
  },
  computed: {
    imgSrc() {
      switch(this.activeTab) {
        case '複賽': return image1;
        case '決賽': return image2;
        default: return image1;
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
  background-color: #ff9500;
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

/* 基本按鈕樣式 */
.btn {
  border: none;
  color: white;
  font-weight: bold;
  white-space: nowrap;
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
  color: white;
}

.btn.active {
  color: white;
}

/* 複賽 active 與 hover 狀態 */
.btn.btn-fu.active,
.btn.btn-fu:hover {
  background-color: #009933;
}

/* 決賽 active 與 hover 狀態 */
.btn.btn-jue.active,
.btn.btn-jue:hover {
  background-color: #1A5B2F;
}

/* 注意事項按鈕 */
.btn2 {
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1vw;
  width: 10vw;
  height: 4vh;
  border-radius: 5px;
  margin-left: 30px;
  margin-top: 5px;
  transition: transform 0.3s ease;
  white-space: nowrap;
}

.btn2:hover {
  transform: scale(1.1);
  color: white;
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
  margin-top: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

/* 圖片：寬度設為 90vh，自動保持原比例 */
.img-container img {
  max-width: 70vw;
  max-height: 70vh;
  width: auto;
  height: auto;
  display: block;
}

/* 移除 modal-header 與 modal-body 之間的分隔線 */
.modal-header {
  border-bottom: none;
  padding-bottom: 0;
}
</style>

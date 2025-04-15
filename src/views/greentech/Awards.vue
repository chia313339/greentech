<template>
  <div class="page-container" :class="{ 'locale-en': $i18n.locale === 'en' }">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>

    <!-- 小標題 -->
    <div class="title-little">{{ $t('class.gt') }}</div>

    <!-- 標題欄 -->
    <div class="title-bar">{{ $t('nav.awards') }}</div>

    <!-- 按鈕 -->
    <div class="buttons">
      <button class="btn btn-fu" :class="{ active: activeTab === '複賽' }" @click="setActive('複賽')">
          {{ $t('pages.game2') }}
        </button>
        <button class="btn btn-jue" :class="{ active: activeTab === '決賽' }" @click="setActive('決賽')">
          {{ $t('pages.game3') }}
        </button>
        <!-- 使用 Bootstrap 的 data-bs-toggle 與 data-bs-target 開啟 Modal -->
        <button class="btn2" style="background-color: #BA2553;" data-bs-toggle="modal" data-bs-target="#noteModal">
          {{ noteButtonText }}
        </button>
    </div>

    <!-- 內容層 -->
    <div class="content">
      <div class="img-container">
        <img :src="imgSrc" alt="Awards">
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
            <!-- Modal 中的圖片隨 modal 寬度放大，超出高度則可滾動 -->
            <img :src="modalNoteImg" class="img-fluid" alt="注意事項">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from '@/assets/img/awards/001.png';
import image2 from '@/assets/img/awards/002.png';

import image1_en from '@/assets/img/awards/001_en.png';
import image2_en from '@/assets/img/awards/002_en.png';

import noteZh from '@/assets/img/awards/note.png';
import noteEn from '@/assets/img/awards/note_en.png';

export default {
  name: 'GT-awards',
  data() {
    return {
      activeTab: '複賽'
    }
  },
  computed: {
    // 根據 activeTab 與語系決定圖片來源
    imgSrc() {
      if (this.$i18n.locale === 'zh') {
        switch(this.activeTab) {
          case '複賽': return image1;
          case '決賽': return image2;
          default: return image1;
        }
      } else {
        switch(this.activeTab) {
          case '複賽': return image1_en;
          case '決賽': return image2_en;
          default: return image1_en;
        }
      }
    },
    // Modal 注意事項圖片
    modalNoteImg() {
      return this.$i18n.locale === 'zh' ? noteZh : noteEn;
    },
    // 按鈕文字：若中文維持 '注意事項'，若英文則顯示 'Points of Note'
    noteButtonText() {
      return this.$i18n.locale === 'zh' ? '注意事項' : 'Points of Note';
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}


/* 中文預設寬度可以維持 15vw，不動 */
.page-container:not(.locale-en) .title-bar {
  width: 15vw;
}

/* 英文情況下，讓寬度再拉大一些，避免換行 */
.locale-en .title-bar {
  width: 20vw; /* 可以視實際字數再調大一點 */
}

/* 按鈕的容器在中文時的定位 */
.page-container:not(.locale-en) .buttons {
  left: calc(7% + 15vw + 50px);
}

/* 英文情況下，因為 title-bar 變寬，要往右移動按鈕 */
.locale-en .buttons {
  left: calc(7% + 20vw + 50px);
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
  background: #02D703;
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

/* 基本按鈕樣式 */
.btn {
  border: none;
  color: white;
  font-weight: bold;
  white-space: nowrap;       /* 不換行 */
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  font-size: 1vw;            /* 預設中文為 1vw */
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

/* 當語系為英文時，調整 .btn 按鈕字型大小 */
.locale-en .btn {
  font-size: 0.5vw;
}

/* 內容層 */
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
  margin-top: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

/* 圖片 */
.img-container img {
  max-width: 90vw;
  max-height: 90vh;
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

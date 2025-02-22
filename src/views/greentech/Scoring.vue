<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>

    <!-- 標題欄 -->
    <div class="title_head">
      <div class="title-bar">{{ $t('nav.scoring') }}</div>
      <div class="buttons">
        <button class="btn btn-chu" :class="{ active: activeTab === '初賽' }" @click="setActive('初賽')">
          初賽
        </button>
        <button class="btn btn-fu" :class="{ active: activeTab === '複賽' }" @click="setActive('複賽')">
          複賽
        </button>
        <button class="btn btn-jue" :class="{ active: activeTab === '決賽' }" @click="setActive('決賽')">
          決賽
        </button>
      </div>
    </div>

    <!-- 內容層 -->
    <div class="content">
      <div class="img-container">
        <img :src="imgSrc" alt="About">
      </div>
    </div>

  </div>
</template>

<script>
import image1 from '@/assets/img/scoring/001.png';
import image2 from '@/assets/img/scoring/002.png';
import image3 from '@/assets/img/scoring/003.png';

export default {
  name: 'GT-Scoring',
  data() {
    return {
      activeTab: '初賽'
    }
  },
  computed: {
    imgSrc() {
      switch(this.activeTab) {
        case '初賽': return image1;
        case '複賽': return image2;
        case '決賽': return image3;
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

/* 修改按鈕成圓形與預設樣式 */
.btn {
  border: none;
  color: white;              /* 始終白色文字 */
  font-weight: bold;         /* 粗體字 */
  white-space: nowrap;       /* 文字不換行 */
  cursor: pointer;
  font-size: 1vw;            /* 自動調整文字大小 */
  width: calc(2vw + 20px);    /* 使用 viewport 單位，按比例調整按鈕尺寸 */
  height: calc(2vw + 20px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  background-color: #9FA09F;  /* 預設 inactive 狀態 */
}

.btn:hover {
  transform: scale(1.1);      /* 滑鼠移入時放大 */
}

/* 初賽的 active/hover 狀態 */
.btn.btn-chu.active,
.btn.btn-chu:hover {
  background-color: #00CC99;
  color: white;
}

/* 複賽的 active/hover 狀態 */
.btn.btn-fu.active,
.btn.btn-fu:hover {
  background-color: #009933;
  color: white;

}

/* 決賽的 active/hover 狀態 */
.btn.btn-jue.active,
.btn.btn-jue:hover {
  background-color: #1A5B2F;
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
</style>

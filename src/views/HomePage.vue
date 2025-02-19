<!-- src/views/HomePage.vue -->
<template>
  <div class="home-page">
    <!-- 中央 Logo 與標題區 -->
    <div class="center-section">
      <img src="../assets/center-logo.png" alt="Logo" class="center-logo" />
    </div>

    <!-- 三個大圓圈 -->
    <div 
      class="circle circle-greentech" 
      @click="goToGroup('greentech')"
    >
      Greentech
    </div>
    <div 
      class="circle circle-city" 
      @click="goToGroup('city')"
    >
      City
    </div>
    <div 
      class="circle circle-healthcare" 
      @click="goToGroup('healthcare')"
    >
      Healthcare
    </div>

    <div class="small_circle" style="background-color: #009CFF; top: 14%; left: 24%; height: 3vw; width: 3vw;"></div>
    <div class="small_circle" style="background-color: #FFB600; top: 36%; left: 21%; height: 5vw; width: 5vw;"></div>

    <div class="small_circle" style="background-color: #00DB00; top: 12%; left: 85%; height: 7vw; width: 7vw;"></div>
    <div class="small_circle" style="background-color: #FFB600; top: 43%; left: 73%; height: 4vw; width: 4vw;"></div>

    <div class="small_circle" style="background-color: #00DB00; top: 56%; left: 12%; height: 5vw; width: 5vw;"></div>
    <div class="small_circle" style="background-color: #009CFF; top: 81%; left: 16%; height: 3vw; width: 3vw;"></div>

    <!-- 右下角的 SKIP 文字連結 (如有需求) -->
    <a href="#" class="skip-link">SKIP</a>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goToGroup(group) {
      // 點擊後導向對應的組別「關於競賽」頁面
      this.$router.push(`/${group}/about`)
    }
  }
}
</script>

<style scoped>
/* 使整個畫面滿版 */
.home-page {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2; /* 依照需求可更改背景 */
  overflow: hidden; /* 隱藏超出範圍的元素 */
}

/* 中央 Logo 與文字 */
.center-section {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.center-logo {
  width: 300px; /* 可依需求調整 */
  height: auto;
}
.title {
  margin-top: 20px;
  font-size: 2rem;
  color: #333;
}
.subtitle {
  margin-top: 10px;
  font-size: 1.5rem;
  color: #666;
}

/* 三個大圓圈 */
.circle {
  position: absolute;
  width: 18vw;      /* 可依需求調整大小 */
  height: 18vw;
  border-radius: 50%;
  color: white;
  font-size: 2.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  font-weight: bold;
}
.circle:hover {
  transform: scale(1.05);
}

.small_circle{
  position: absolute;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 各圓圈顏色與位置 (參考你的圖片做大約定位) */
.circle-greentech {
  background-color: #00DB00;
  top: 12%;
  left: 9%;
}
.circle-city {
  background-color: #009CFF;
  top: 18%;
  right: 10%;
}
.circle-healthcare {
  background-color: #FFB600;
  bottom: 13%;
  left: 13%;
}

/* 右下角 SKIP 連結 */
.skip-link {
  position: absolute;
  bottom: 50px;
  right: 50px;
  color: #666;
  text-decoration: none;
  font-size: 1.5vw;
}
.skip-link:hover {
  text-decoration: underline;
}
</style>

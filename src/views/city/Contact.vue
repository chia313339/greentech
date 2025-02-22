<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>

    <!-- 標題欄，固定在畫面上 -->
    <!-- <div class="title-bar">{{ $t('nav.contact') }}</div> -->

    <!-- 內容層 -->
    <div class="content">
      <!-- 圖片容器，圖片置中 -->
      <div class="img-container">
        <img src="@/assets/img/contact/unit.png" style="width: 70vw; margin-left: 150px; margin-top: 0px;">
        <img src="@/assets/img/contact/call.png" style="width: 40vw; margin-left: 50%; margin-top: 100px;" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Healthcare-About'
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
  background-color: #4DB233;
  color: white;
  font-weight: 900;
  border: 5px solid white;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  z-index: 10;
  font-size: calc(1.2vw + 1vh);
  text-align: center;
  
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
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  width: 100%;
}


</style>

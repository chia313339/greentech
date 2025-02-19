<template>
  <div class="content">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/img/about/001.png" class="d-block w-100" alt="Image 1">
      </div>
      <div class="carousel-item">
        <img src="@/assets/img/about/002.png" class="d-block w-100" alt="Image 2">
      </div>
      <div class="carousel-item">
        <img src="@/assets/img/about/003.png" class="d-block w-100" alt="Image 3">
      </div>
    </div>
    <!-- Carousel Indicators -->
    <div class="carousel-indicators custom-indicators">
      <button type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"></button>
      <button type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"></button>
      <button type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"></button>
    </div>
  </div>
  </div>
  
</template>

<script>
export default {
  name: 'CarouselComponent'
}
</script>

<style scoped>
.content {
  padding: 30px;
}

/* 將 indicators 移到圖片下方外面 */
.carousel {
  position: relative;
}

/* 調整 Indicators 在圖片下方、水平正中 */
.custom-indicators {
  position: absolute;
  width: 100%;          /* 與輪播同寬 */
  bottom: 20px;         /* 與圖片底部的距離，可自行調整 */
  left: -15%;          /* 水平置中 */
  display: flex;        /* 使用 flex 置中 */
  justify-content: center;
  align-items: center;
  z-index: 10;          /* 確保在圖片上方顯示 */
}

/* 自訂每個 indicator 的外觀 */
.custom-indicators button {
  width: 1.5vw;
  height: 1.5vw;
  border-radius: 50%;
  background-color: white; /* 非 active 時內部為白色 */
  border: 2px solid #66CC66; /* 外框為 #66CC66 */
  opacity: 1;
  margin: 0 4px;
  transition: background-color 0.2s ease;
  margin: 10px;
}

/* Active indicator */
.custom-indicators button.active {
  background-color: #66CC66;
  border-color: #66CC66;
}
.carousel img {
  max-height: 80vh; /* 限制圖片高度不超過 80% 的 viewport 高度 */
  width: 100%;      /* 寬度佔滿容器 */
  object-fit: contain; /* 保持圖片比例，顯示完整圖片 */
  padding: 100px;
}

</style>

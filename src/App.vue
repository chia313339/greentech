<!-- src/App.vue -->
<template>
  <!-- 路由將依照設定自動切換內容 -->
  <router-view />
</template>

<script>
export default {
  name: 'App',
  mounted() {
    if (window.innerWidth < 1200) {
      alert("您的裝置尺寸可能無法達到最佳瀏覽效果，建議調整為全螢幕或橫式觀看");
    }
  }
}
</script>

<style>
/* 可在此加入全域樣式 */
</style>

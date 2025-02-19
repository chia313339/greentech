<!-- src/App.vue -->
<template>
  <!-- 路由將依照設定自動切換內容 -->
  <router-view />
</template>

<script>
export default {
  name: 'App',
  mounted() {
    if (window.innerWidth < 1000) {
      alert("您的裝置尺寸無法達到最佳瀏覽效果，建議換到更大的螢幕");
    }
  }
}
</script>

<style>
/* 可在此加入全域樣式 */
</style>

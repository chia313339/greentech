<!-- src/views/2024.vue -->
<template>
  <h1>正在跳轉中…</h1>
</template>

<script>
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'Page2024',
  setup() {
    onMounted(() => {
      // 使用 replace 不會讓使用者回上一頁時回到這個元件
      window.location.replace('https://gt.startupterrace.tw/')
    })
  }
})
</script>

<style scoped>
/* 可以放一些 loading 樣式 */
h1 {
  text-align: center;
  margin-top: 2rem;
}
</style>

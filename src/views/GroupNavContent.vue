<!-- src/views/GroupNavContent.vue -->
<template>
    <div class="group-nav-content">
      <h2>{{ title }}</h2>
      <!-- 這裡可填入各導覽頁面專屬內容 -->
      <p>這裡是 {{ title }} 頁面的內容。</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GroupNavContent',
    props: {
      navKey: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      }
    },
    computed: {
      title() {
        // 如果是聯繫我們則標題固定
        if (this.navKey === 'contact') {
          return '聯絡我們'
        } else {
          // 從路由參數取得組別名稱（第一個字母大寫）
          const group = this.$route.params.group || ''
          const capitalizedGroup = group.charAt(0).toUpperCase() + group.slice(1)
          return `${capitalizedGroup}-${this.label}`
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .group-nav-content h2 {
    margin-top: 20px;
  }
  </style>
  
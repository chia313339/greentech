<!-- src/views/GroupPage.vue -->
<template>
    <div class="group-page">
      <!-- 左側組別選擇區 -->
      <div class="left-sidebar">
        <button 
          v-for="(group, index) in groups" 
          :key="group.route" 
          class="group-btn"
          :class="{ 'active-btn': currentGroup === group.route }"
          :style="{ backgroundColor: group.color }"
          @click="goToGroup(group.route)"
        >
          {{ group.name.toUpperCase() }}
        </button>
      </div>
  
      <!-- 主要內容區：呈現各導覽頁內容 -->
      <div class="main-content">
        <router-view />
      </div>
  
      <!-- 下方導覽列 -->
      <nav class="navbar fixed-bottom custom-navbar">
        <div class="container nav-container">
          <span v-for="(item, index) in navItems" :key="item.key">
            <router-link 
              :to="`/${currentGroup}/${item.key}`"
              class="nav-link"
              :class="{ active: isActive(item.key) }"
            >
              {{ item.label }}
            </router-link>
            <span v-if="index < navItems.length - 1" class="separator">|</span>
          </span>
        </div>
      </nav>
  
      <!-- 左下角 Logo，覆蓋在導覽列上方 -->
      <div class="logo" @click="goHome">
        <img src="../assets/logo.png" alt="Logo" />
      </div>
  
      <!-- 右下角懸浮報名按鈕 -->
      <button class="floating-btn" @click="goToSignup">
        報名連結
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GroupPage',
    data() {
      return {
        groups: [
          { name: 'Greentech', color: '#00DB00', route: 'greentech' },
          { name: 'City', color: '#009CFF', route: 'city' },
          { name: 'Healthcare', color: '#FFB600', route: 'healthcare' },
        ],
        navItems: [
          { key: 'about', label: '關於競賽' },
          { key: 'schedule', label: '競賽時程' },
          { key: 'enterprise', label: '企業出題' },
          { key: 'instructions', label: '報名須知' },
          { key: 'scoring', label: '評分標準' },
          { key: 'awards', label: '獎項及義務' },
          { key: 'passed', label: '通過名單' },
          { key: 'retrospective', label: '歷屆回顧' },
          { key: 'faq', label: 'FAQ' },
          { key: 'contact', label: '聯繫我們' }
        ]
      }
    },
    computed: {
      currentGroup() {
        return this.$route.params.group || 'greentech'
      },
      currentNav() {
        return this.$route.params.navItem || 'about'
      }
    },
    methods: {
      goToGroup(route) {
        // 切換組別時保持目前的導覽項目（預設 about）
        const nav = this.currentNav || 'about'
        this.$router.push(`/${route}/${nav}`)
      },
      goHome() {
        this.$router.push('/')
      },
      goToSignup() {
        // 報名連結可導向到報名頁面
        alert('前往報名頁面')
      },
      isActive(navKey) {
        return this.currentNav === navKey
      }
    }
  }
  </script>
  
  <style scoped>
  /* 整體頁面 */
  .group-page {
    position: relative;
    min-height: 100vh;
    padding-bottom: 60px; /* 為導覽列留空間 */
  }
  
  /* 左側組別選擇區 */
  .left-sidebar {
    position: fixed;
    top: 0;
    bottom: 60px; /* 避免與下方導覽列重疊 */
    left: 0;
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 60px;
  }
  .group-btn {
    width: 50px;
    flex: 1;
    border: none;
    color: white;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  /* 滑鼠移入時背景變深，文字放大 */
  .group-btn:hover {
    filter: brightness(0.85);
    transform: scale(1.05);
  }
  
  /* 預設依據垂直順序設定 z-index：最上面最低，最下面最高 */
  .left-sidebar .group-btn:nth-child(1) { z-index: 1; }
  .left-sidebar .group-btn:nth-child(2) { z-index: 2; }
  .left-sidebar .group-btn:nth-child(3) { z-index: 3; }
  
  /* 當按鈕 active 時，保持放大、上方有灰色陰影，僅右上角圓滑 */
  .active-btn {
    transform: scale(1.1);
    box-shadow: 0 -5px 5px -5px grey;
    border-top-right-radius: 10px;
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  
  /* 主要內容區 */
  .main-content {
    margin-left: 60px; /* 避開左側選單 */
    padding: 20px;
  }
  
  /* 自訂導覽列 */
  .custom-navbar {
    height: 60px;
    display: flex;
    align-items: center;
    font-size: 14px;
    background: linear-gradient(to right, #009CFF, #FFB600, #00DB00);
  }
  .nav-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* 加左側內距，避免文字被 logo 擋住 */
    padding-left: 170px;
  }
  .nav-link {
    color: grey;
    font-weight: bold;
    text-decoration: none;
  }
  .nav-link.active {
    color: white;
  }
  .separator {
    margin: 0 10px;
    color: grey;
  }
  
  /* 左下角 Logo：150px 高度，覆蓋在導覽列上方 */
  .logo {
    position: fixed;
    bottom: 0;
    left: 0;
    cursor: pointer;
    transition: transform 0.3s ease;
    z-index: 9999;
  }
  .logo:hover {
    transform: scale(1.05);
  }
  .logo img {
    height: 150px;
  }
  
  /* 右下角懸浮報名按鈕 */
  .floating-btn {
    position: fixed;
    right: 20px;
    bottom: 80px;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 50px;
    cursor: pointer;
  }
  </style>
  
<template>
    <nav class="custom-navbar">
      <div class="nav-container">
        <template v-for="(item, index) in navItems" :key="item.key">
          <router-link 
            :to="`/${currentGroup}/${item.key}`"
            class="nav-link"
            :class="{ active: currentNav === item.key }"
          >
            {{ item.label }}
          </router-link>
          <span v-if="index < navItems.length - 1" class="separator">|</span>
        </template>
      </div>
    </nav>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { store } from '../store'
  
  export default {
    name: 'NavBar',
    props: {
      navItems: {
        type: Array,
        required: true
      }
    },
    setup() {
      const route = useRoute()
      // 目前分組
      const currentGroup = computed(() => route.params.group || 'greentech')
      // 目前 Nav 項目 (來自 store)
      const currentNav = computed(() => store.currentNav)
  
      return { currentGroup, currentNav }
    }
  }
  </script>
  
  <style scoped>
  .custom-navbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: linear-gradient(to right, #009CFF, #FFB600, #00DB00);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000; /* 底部導覽列層級 */
    padding-left: 20vw;
  }
  .nav-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav-link {
    display: inline-block;
    vertical-align: middle;
    color: grey;
    font-weight: bold;
    text-decoration: none;
    padding: 0 5px;
    transition: color 0.2s ease;
  }
  .nav-link.active {
    color: white;
    text-decoration: underline; /* 顯示底線 */
  }
  .separator {
    display: inline-block;
    vertical-align: middle;
    margin: 0 10px;
    color: grey;
  }
  </style>
  
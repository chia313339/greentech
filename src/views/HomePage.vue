<!-- src/views/HomePage.vue -->
<template>
    <div class="home-page d-flex justify-content-center align-items-center vh-100">
      <div class="d-flex justify-content-around w-100">
        <div 
          class="circle" 
          :style="{ backgroundColor: '#00DB00' }" 
          @click="goToGroup('greentech')"
        >
          Greentech
        </div>
        <div 
          class="circle" 
          :style="{ backgroundColor: '#009CFF' }" 
          @click="goToGroup('city')"
        >
          City
        </div>
        <div 
          class="circle" 
          :style="{ backgroundColor: '#FFB600' }" 
          @click="goToGroup('healthcare')"
        >
          Healthcare
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    methods: {
      goToGroup(group) {
        // 點擊後導向對應的組別頁面
        this.$router.push(`/${group}`)
      }
    }
  }
  </script>
  
  <style scoped>
  .circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    color: white;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  </style>
  
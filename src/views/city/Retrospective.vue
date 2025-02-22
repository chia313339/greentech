<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>

    <!-- 標題欄 -->
    <div class="title_head">
      <div class="title-bar">{{ $t('nav.retrospective') }}</div>
      <div class="buttons">
        <button
          class="btn btn-chu"
          :class="{ active: activeTab === '2024' }"
          @click="setActive('2024')"
        >
          2024
        </button>
        <button
          class="btn btn-fu"
          :class="{ active: activeTab === '2023' }"
          @click="setActive('2023')"
        >
          2023
        </button>
        <button
          class="btn btn-jue"
          :class="{ active: activeTab === '2022' }"
          @click="setActive('2022')"
        >
          2022
        </button>
        <button class="btn2">瀏覽2022網站</button>
      </div>
    </div>

    <!-- 內容層 -->
    <div class="content">
      <!-- 上排 YouTube 影片 -->
      <div class="videos-wrapper">
        <div
          class="video-item"
          v-for="(video, index) in videos"
          :key="index"
        >
          <iframe
            width="100%"
            height="315"
            :src="video"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <!-- 下排 輪播 -->
      <div class="carousel-container">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          :class="carouselClass"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div
              v-for="(chunk, index) in imagesChunks"
              :key="index"
              class="carousel-item"
              :class="{ active: index === 0 }"
            >
              <div class="multi-container">
                <div
                  class="multi-item"
                  v-for="(image, imgIndex) in chunk"
                  :key="imgIndex"
                  @click="showImage(image)"
                >
                  <img
                    :src="image"
                    class="d-block w-100"
                    alt="Slide image"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true">
              &#10094;
            </span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true">
              &#10095;
            </span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>

    <div style="margin-top: 60px;">
      <img src="@/assets/img/retrospective/bottom_bar.png" style="width: 100%;">
    </div>

    <!-- 圖片放大 Modal -->
    <div v-if="selectedImage" class="image-modal" @click.self="closeModal">
      <div class="image-modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <img :src="selectedImage" alt="Enlarged image" />
      </div>
    </div>
  </div>
</template>

<script>
// 2024 年圖片 (17 張)
import img2024_00001 from '@/assets/img/retrospective/greentech/2024_00001.jpg';
import img2024_00002 from '@/assets/img/retrospective/greentech/2024_00002.jpg';
import img2024_00003 from '@/assets/img/retrospective/greentech/2024_00003.jpg';
import img2024_00004 from '@/assets/img/retrospective/greentech/2024_00004.jpg';
import img2024_00005 from '@/assets/img/retrospective/greentech/2024_00005.jpg';
import img2024_00006 from '@/assets/img/retrospective/greentech/2024_00006.jpg';
import img2024_00007 from '@/assets/img/retrospective/greentech/2024_00007.jpg';
import img2024_00008 from '@/assets/img/retrospective/greentech/2024_00008.jpg';
import img2024_00009 from '@/assets/img/retrospective/greentech/2024_00009.jpg';
import img2024_00010 from '@/assets/img/retrospective/greentech/2024_00010.jpg';
import img2024_00011 from '@/assets/img/retrospective/greentech/2024_00011.jpg';
import img2024_00012 from '@/assets/img/retrospective/greentech/2024_00012.jpg';
import img2024_00013 from '@/assets/img/retrospective/greentech/2024_00013.jpg';
import img2024_00014 from '@/assets/img/retrospective/greentech/2024_00014.jpg';
import img2024_00015 from '@/assets/img/retrospective/greentech/2024_00015.jpg';
import img2024_00016 from '@/assets/img/retrospective/greentech/2024_00016.jpg';
import img2024_00017 from '@/assets/img/retrospective/greentech/2024_00017.jpg';

// 2023 年圖片 (12 張)
import img2023_00001 from '@/assets/img/retrospective/greentech/2023_00001.jpg';
import img2023_00002 from '@/assets/img/retrospective/greentech/2023_00002.jpg';
import img2023_00003 from '@/assets/img/retrospective/greentech/2023_00003.jpg';
import img2023_00004 from '@/assets/img/retrospective/greentech/2023_00004.jpg';
import img2023_00005 from '@/assets/img/retrospective/greentech/2023_00005.jpg';
import img2023_00006 from '@/assets/img/retrospective/greentech/2023_00006.jpg';
import img2023_00007 from '@/assets/img/retrospective/greentech/2023_00007.jpg';
import img2023_00008 from '@/assets/img/retrospective/greentech/2023_00008.jpg';
import img2023_00009 from '@/assets/img/retrospective/greentech/2023_00009.jpg';
import img2023_00010 from '@/assets/img/retrospective/greentech/2023_00010.jpg';
import img2023_00011 from '@/assets/img/retrospective/greentech/2023_00011.jpg';
import img2023_00012 from '@/assets/img/retrospective/greentech/2023_00012.jpg';

// 2022 年圖片 (7 張)
import img2022_00001 from '@/assets/img/retrospective/greentech/2022_00001.jpg';
import img2022_00002 from '@/assets/img/retrospective/greentech/2022_00002.jpg';
import img2022_00003 from '@/assets/img/retrospective/greentech/2022_00003.jpg';
import img2022_00004 from '@/assets/img/retrospective/greentech/2022_00004.jpg';
import img2022_00005 from '@/assets/img/retrospective/greentech/2022_00005.jpg';
import img2022_00006 from '@/assets/img/retrospective/greentech/2022_00006.jpg';
import img2022_00007 from '@/assets/img/retrospective/greentech/2022_00007.jpg';

export default {
  name: 'Retrospective',
  data() {
    return {
      activeTab: '2024',
      selectedImage: null,
      // 靜態導入的圖片陣列（初始為空，在 created() 中填入）
      p2024: [],
      p2023: [],
      p2022: []
    }
  },
  computed: {
    images() {
      switch (this.activeTab) {
        case '2024': return this.p2024;
        case '2023': return this.p2023;
        case '2022': return this.p2022;
        default: return [];
      }
    },
    imagesChunks() {
      const chunkSize = 4;
      const chunks = [];
      for (let i = 0; i < this.images.length; i += chunkSize) {
        chunks.push(this.images.slice(i, i + chunkSize));
      }
      return chunks;
    },
    videos() {
      const videos = {
        '2024': [
          'https://www.youtube.com/embed/1Vm3phKIDus',
          'https://www.youtube.com/embed/AbOo_Snwx7o'
        ],
        '2023': [
          'https://www.youtube.com/embed/OTS9WwW3lQs',
          'https://www.youtube.com/embed/rZuiP7bnO4k'
        ],
        '2022': [
          'https://www.youtube.com/embed/8dFalGEtcYk',
          'https://www.youtube.com/embed/X4aeEyuzJcE'
        ]
      };
      return videos[this.activeTab] || [];
    },
    carouselClass() {
      return {
        '2024': 'chu',
        '2023': 'fu',
        '2022': 'jue'
      }[this.activeTab];
    }
  },
  methods: {
    setActive(tab) {
      this.activeTab = tab;
    },
    showImage(image) {
      this.selectedImage = image;
    },
    closeModal() {
      this.selectedImage = null;
    }
  },
  created() {
    // 將靜態導入的圖片放入對應的陣列
    this.p2024 = [
      img2024_00001,
      img2024_00002,
      img2024_00003,
      img2024_00004,
      img2024_00005,
      img2024_00006,
      img2024_00007,
      img2024_00008,
      img2024_00009,
      img2024_00010,
      img2024_00011,
      img2024_00012,
      img2024_00013,
      img2024_00014,
      img2024_00015,
      img2024_00016,
      img2024_00017
    ];
    this.p2023 = [
      img2023_00001,
      img2023_00002,
      img2023_00003,
      img2023_00004,
      img2023_00005,
      img2023_00006,
      img2023_00007,
      img2023_00008,
      img2023_00009,
      img2023_00010,
      img2023_00011,
      img2023_00012
    ];
    this.p2022 = [
      img2022_00001,
      img2022_00002,
      img2022_00003,
      img2022_00004,
      img2022_00005,
      img2022_00006,
      img2022_00007
    ];
  }
}
</script>

<style scoped>
.page-container {
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}

.fixed-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url('@/assets/img/bk.png') no-repeat center center/cover;
  z-index: -1;
}

.title_head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  z-index: 10;
}

.title-bar {
  margin: 10px 0 0 7%;
  width: 15vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0070b5;
  color: white;
  font-weight: 900;
  border: 5px solid white;
  box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
  font-size: calc(1.2vw + 1vh);
}

.buttons {
  margin-left: 3vw;
  display: flex;
  gap: 20px;
  margin-top: 20px;
  color: white;
}

.btn {
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1vw;
  width: calc(2vw + 20px);
  height: calc(2vw + 20px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  background-color: #9fa09f;
}

.btn:hover {
  transform: scale(1.1);
  color: white;
}

.btn2 {
  margin-left: 30vw;
  padding: 5px 10px;
  color: white;
  background-color: #00cc99;
  border: none;
  border-radius: 5px;
  font-size: 1vw;
  font-weight: bold;
  box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
  transition: transform 0.2s ease;
}

.btn2:hover {
  transform: scale(1.05);
  
}

.btn.active,
.btn:hover {
  background-color: #00cc99;
}

.content {
  width: 100%;
  margin-top: 8vh;
  padding-top: 5vh;
}

.videos-wrapper {
  width: 90%;
  margin: 0 auto 3rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
}

.video-item {
  flex: 0 0 40%;
  height: 315px;
}

.carousel-container {
  width: 75%;
  margin: 0 auto;
}

.multi-container {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  padding: 0 15px;
}

.multi-item {
  flex: 0 0 calc(25% - 0.75rem);
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.multi-item:hover {
  transform: translateY(-5px);
}

.multi-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.multi-item:hover img {
  transform: scale(1.05);
}

.carousel-control-prev,
.carousel-control-next {
  width: auto;
  height: auto;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-control-prev {
  left: -50px;
}

.carousel-control-next {
  right: -50px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-image: none;
  font-size: 2.5rem;
  color: #00cc99;
}

.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.image-modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.image-modal-content img {
  max-width: 100%;
  max-height: 90vh;
  border-radius: 10px;
}

.close {
  position: absolute;
  top: 15px;
  right: 25px;
  color: white;
  font-size: 40px;
  cursor: pointer;
  z-index: 10000;
}
</style>

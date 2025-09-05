<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>

    <!-- 小標題 -->
    <div class="title-little">{{ $t('class.gt') }}</div>

    <!-- 標題欄 -->
    <div class="title-bar">{{ $t('nav.enterprise') }}</div>

    <!-- 下載按鈕 -->
    <div class="buttons">
      <a href="https://drive.google.com/drive/folders/1M1KVTKi09n1gRECPDTfAn1Y0UjFMVZAb?usp=drive_link" target="_blank">
        <button class="btn download-btn" style="background-color: #BA2553;">
          <i class="fa-solid fa-download"></i>&nbsp;&nbsp;{{ downloadText }}
        </button>
      </a>
      <a href="https://www.youtube.com/playlist?list=PLgmrgOoGmAXo7h0NJE95kDlLvSvNrA7Xv" target="_blank">
        <button class="btn video-btn" style="background-color: #336600;">
          <i class="fa-regular fa-circle-play"></i>&nbsp;&nbsp;{{ videoText }}
        </button>
      </a>
    </div>

    <!-- 內容層 -->
    <div class="content">
      <div class="grid-container">
        <!-- 依序產生 22 個公司區塊 -->
        <div class="grid-item" v-for="(company, index) in companies" :key="index">
          <!-- 點擊公司時更新 selectedCompanyIndex 並觸發 modal -->
          <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#companyModal" @click="openModal(index)">
            <img :src="getCompanyLogo(index)" alt="公司">
          </a>
          <div class="company-label">{{ company.name }}</div>
        </div>
      </div>
    </div>

    <!-- Bootstrap Modal：顯示公司詳細內容 -->
    <div class="modal fade" id="companyModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content p-0 border-0">
          <!-- 右上角的 X 按鈕 -->
          <button type="button" class="btn-close custom-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div class="modal-body p-0">
            <!-- 若選擇的公司為第8間（台灣萊雅），使用輪播呈現兩張圖片 -->
            <template v-if="selectedCompanyIndex === 7">
              <div id="companyCarousel" class="carousel slide" data-bs-interval="false">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img :src="modalImage1" alt="公司詳細內容 1" class="img-fluid">
                  </div>
                  <div class="carousel-item">
                    <img :src="modalImage2" alt="公司詳細內容 2" class="img-fluid">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#companyCarousel" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#companyCarousel" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </template>
            <!-- 其他公司顯示單張圖片 -->
            <template v-else>
              <img :src="modalImage" alt="公司詳細內容" class="img-fluid">
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Greentech-Enterprise',
  data() {
    return {
      // 記錄目前點擊的公司（索引：0～21）
      selectedCompanyIndex: null,
      // 公司列表，共 22 間，依照需求順序與名稱設定
      companies: [
        { name: '大同智能' },
        { name: '元太科技' },
        { name: '友達光電' },
        { name: '友達宇沛' },
        { name: '日月光' },
        { name: '台灣自來水公司' },
        { name: '台灣艾司摩爾' },
        { name: '台灣萊雅' },
        { name: '台電綜研所' },
        { name: '亞東預拌' },
        { name: '和碩' },
        { name: '奇美食品' },
        { name: '東豐纖維' },
        { name: '太古可口可樂' },
        { name: '凌羣電腦' },
        { name: '理想大地' },
        { name: '統一企業' },
        { name: '華碩電腦' },
        { name: '群光電子' },
        { name: '聚陽實業' },
        { name: '聯發科&日月光' },
        { name: '聯新國際醫院' }
      ]
    }
  },
  computed: {
    downloadText() {
      return this.$i18n.locale === 'zh' ? '完整題目下載' : 'Download All Topics';
    },
    videoText() {
      return this.$i18n.locale === 'zh' ? '觀看題目說明影片' : 'Watch Question Explanation Video';
    },
    // 對於一般公司，依據所選索引回傳單張圖片
    modalImage() {
      if (this.selectedCompanyIndex === null) return '';
      // 若為台灣萊雅（索引 7），則不使用單一圖片
      if (this.selectedCompanyIndex === 7) return '';
      const number = (this.selectedCompanyIndex + 1).toString().padStart(3, '0');
      if (this.$i18n.locale === 'zh') {
        return new URL(`../../assets/img/enterprise/content/zh/com_content_${number}.png`, import.meta.url).href;
      } else {
        return new URL(`../../assets/img/enterprise/content/en/com_content_en_${number}.png`, import.meta.url).href;
      }
    },
    // 台灣萊雅第一張詳細內容圖片
    modalImage1() {
      if (this.selectedCompanyIndex !== 7) return '';
      const number = '008';
      if (this.$i18n.locale === 'zh') {
        return new URL(`../../assets/img/enterprise/content/zh/com_content_${number}_1.png`, import.meta.url).href;
      } else {
        return new URL(`../../assets/img/enterprise/content/en/com_content_en_${number}_1.png`, import.meta.url).href;
      }
    },
    // 台灣萊雅第二張詳細內容圖片
    modalImage2() {
      if (this.selectedCompanyIndex !== 7) return '';
      const number = '008';
      if (this.$i18n.locale === 'zh') {
        return new URL(`../../assets/img/enterprise/content/zh/com_content_${number}_2.png`, import.meta.url).href;
      } else {
        return new URL(`../../assets/img/enterprise/content/en/com_content_en_${number}_2.png`, import.meta.url).href;
      }
    }
  },
  methods: {
    // 點擊公司時記錄目前索引
    openModal(index) {
      this.selectedCompanyIndex = index;
    },
    // 根據 index 動態回傳該公司 logo 的圖片路徑
    getCompanyLogo(index) {
      const number = (index + 1).toString().padStart(3, '0');
      return new URL(`../../assets/img/enterprise/logo/com_content_${number}.png`, import.meta.url).href;
    }
  },
}
</script>

<style scoped>
.page-container {
  margin-left: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* 固定背景層 */
.fixed-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url('@/assets/img/bk.png') no-repeat center center;
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
  background: #ffffff;
  color: #474947;
  font-weight: 900;
  border: 3px solid #4DB233;
  border-image: linear-gradient(to right, #4DB233, #0099FF, #FFBA40) 1;
  border-image-slice: 1;
  z-index: 10;
  font-size: calc(1.2vw + 1vh);
  text-align: center;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
}

.title-little {
  position: fixed;
  top: 2%;
  left: 8%;
  border-radius: 5px 5px 0 0;
  padding: 0.5vh 1vw;
  padding-bottom: 1vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #02D703;
  color: #ffffff;
  font-weight: 900;
  z-index: 9;
  font-size: calc(0.5vw + 0.6vh);
  text-align: center;
}

/* 按鈕容器 */
.buttons {
  position: fixed;
  top: 5.5%;
  left: calc(7% + 15vw + 50px);
  display: flex;
  gap: 20px;
  z-index: 9;
}

.btn {
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1vw;
  transition: transform 0.2s ease;
}

.btn:hover {
  transform: scale(1.05);
  color: white;
}

/* 內容層 */
.content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 10%;
}

/* Grid 排版 */
.grid-container {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  padding-right: 100px;
  padding-left: 100px;
}

@media (min-width: 900px) {
  .grid-container {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (max-width: 600px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

.grid-item {
  text-align: center;
  padding: 5px;
  box-sizing: border-box;
}

.grid-item img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  background-color: #ffffff;
}

.grid-item img:hover {
  transform: scale(1.05);
}

.company-label {
  margin-top: 5px;
  font-size: 1vw;
  font-weight: bold;
}

/* Modal 樣式 */
.modal-content {
  border: none;
}

.modal-body {
  padding: 0;
}

.custom-close {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 999;
}

/* 覆寫 modal-dialog 大小 */
.modal-dialog {
  max-width: 90vw !important;
  max-height: 90vh !important;
}

.carousel-control-prev {
  left: -5%; /* 向右移動 */
}

.carousel-control-next {
  right: -5%; /* 向右移動 */
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: brightness(0) invert(0);
}

</style>

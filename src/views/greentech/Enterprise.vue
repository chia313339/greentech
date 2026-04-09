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
      <a href="https://drive.google.com/drive/folders/188m8ApHFOTDGNYvaa662UxA67izw8mxc?usp=sharing" target="_blank">
        <button class="btn download-btn" style="background-color: #BA2553;">
          <i class="fa-solid fa-download"></i>&nbsp;&nbsp;{{ downloadText }}
        </button>
      </a>
      <a href="#" target="">
        <button class="btn video-btn" style="background-color: #336600;">
          <i class="fa-regular fa-circle-play"></i>&nbsp;&nbsp;{{ videoText }}
        </button>
      </a>
    </div>

    <!-- 內容層 -->
    <div class="content">
      <div class="grid-container">
        <div class="grid-item" v-for="company in companies" :key="company.id">
          <a
            href="javascript:void(0)"
            data-bs-toggle="modal"
            data-bs-target="#companyModal"
            @click="openModal(company.id)"
          >
            <img :src="getCompanyLogo(company.id)" :alt="getCompanyName(company)">
          </a>
          <div class="company-label">{{ getCompanyName(company) }}</div>
        </div>
      </div>
    </div>

    <!-- Bootstrap Modal：顯示公司詳細內容 -->
    <div class="modal fade" id="companyModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content p-0 border-0">
          <button type="button" class="btn-close custom-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div class="modal-body p-0">
            <img :src="modalImage" alt="公司詳細內容" class="img-fluid">
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
      selectedCompanyId: 1,
      companies: [
        { id: 1, zh: '大同智能', en: 'TFE CO.,LTD' },
        { id: 2, zh: '元太科技', en: 'E Ink' },
        { id: 3, zh: '友達光電', en: 'AUO' },
        { id: 4, zh: '日月光', en: 'ASE' },
        { id: 5, zh: '台水公司', en: 'Taiwan Water Corporation' },
        { id: 6, zh: '台電公司綜研所', en: 'TPC-TPRI' },
        { id: 7, zh: '宇沛永續(AET)', en: 'AET' },
        { id: 8, zh: '和碩', en: 'PEGATRON' },
        { id: 9, zh: '奇美食品', en: 'CHI MEI FROZEN FOOD' },
        { id: 10, zh: '岱德橡膠', en: 'DELTEC' },
        { id: 11, zh: '東豐纖維', en: 'TUNtex' },
        { id: 12, zh: '太古可口可樂', en: 'Swire Coca-Cola' },
        { id: 13, zh: '凌羣電腦', en: 'SYSCOM' },
        { id: 14, zh: '華碩電腦', en: 'ASUS' },
        { id: 15, zh: 'NVIDIA', en: 'NVIDIA' },
        { id: 16, zh: '新北捷運公司', en: 'New Taipei Metro Corp.' },
        { id: 17, zh: '群光電子', en: 'Chicony' },
        { id: 18, zh: '聯發科技X矽品精密', en: 'MediaTek SPIL' },
        { id: 19, zh: '聯新國際醫院', en: 'Landseed International Hospital' }
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
    modalImage() {
      const number = this.selectedCompanyId.toString().padStart(3, '0');
      if (this.$i18n.locale === 'zh') {
        return new URL(`../../assets/img/enterprise/content/zh/com_content_${number}.png`, import.meta.url).href;
      }
      return new URL(`../../assets/img/enterprise/content/en/com_content_en_${number}.png`, import.meta.url).href;
    }
  },
  methods: {
    openModal(companyId) {
      this.selectedCompanyId = companyId;
    },
    getCompanyName(company) {
      return this.$i18n.locale === 'zh' ? company.zh : company.en;
    },
    getCompanyLogo(companyId) {
      const number = companyId.toString().padStart(3, '0');
      return new URL(`../../assets/img/enterprise/logo/com_${number}.png`, import.meta.url).href;
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
  font-size: clamp(11px, 0.8vw, 16px);
  font-weight: bold;
  color: #1d2a1d;
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
</style>

<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>

    <!-- 標題欄 -->
    <div class="title-bar">{{ $t('nav.faq') }}</div>

    <!-- 內容層 -->
    <div class="content">
      <div class="collapse-container">
        <!-- FAQ 列表 -->
        <div 
          class="faq-item" 
          v-for="(item, index) in faqs" 
          :key="index"
        >
          <!-- 問題區：點擊切換 isOpen 狀態 -->
          <div class="faq-question" @click="toggleFAQ(index)">
            <span>{{ item.question }}</span>
            <!-- 用 Font Awesome 顯示箭頭，下箭頭/上箭頭 -->
            <i v-if="!item.isOpen" class="fa-solid fa-chevron-down"></i>
            <i v-else class="fa-solid fa-chevron-up"></i>
          </div>

          <!-- 答案區：用 v-show 控制顯示/隱藏，並加上過渡效果 -->
          <transition name="collapse">
            <div class="faq-answer" v-show="item.isOpen">
              {{ item.answer }}
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Greentech-About',
  data() {
    return {
      // FAQ資料（9 個問題範例）
      faqs: [
        {
          question: '1. 一家參賽新創最多可以獲得多少驗證費用？',
          answer: '一家參賽新創最多可申請 80 萬驗證費用，透過複賽可獲得 20 萬驗證費用，並在決賽階段再度獲得 60 萬驗證費用。',
          isOpen: false
        },
        {
          question: '2. 可以同時投件多組企業題嗎？',
          answer: '參賽新創至多得挑選兩題參賽，題目一經選定後，不得更換。',
          isOpen: false
        },
        {
          question: '3. 是否需繳交報名費用？',
          answer: '本競賽無需報名費。',
          isOpen: false
        },
        {
          question: '4. 如果報名或填寫申請文件遇到問題時，怎麼辦？',
          answer: '請至網頁下方[聯繫我們]填寫提問，或是來電洽詢執行團隊(02)2577-4249分機290/546;(07)338-3827分機309。',
          isOpen: false
        },
        {
          question: '5. 初賽及複賽結果是否會通知？',
          answer: '會由執行單位以E-mail方式通知聯絡人，並請關注本網站公告。',
          isOpen: false
        },
        {
          question: '6. 有需要達成的義務嗎？',
          answer: `
          透過複賽之優選新創須達成義務：
          1. 應配合主辦單位或執行單位安排，參與至少1場交流分享活動。
          2. 應提供 Demo 版成果之簡報介紹 1 支（內容包含競賽相關數據及產品等），並於作品後續廣宣與展示。

          透過決賽之優選新創須達成義務：
          1. 應配合主辦單位或執行單位安排，參與至少 50 人次(含)以上之路演或推廣活動。
          2. 應提供 Demo 版成果之簡報介紹 1 支（內容包含競賽相關數據及產品等）。
          3. 與 Taiwan Startup Terrace 競賽進一步簽約合作。
          `,
          isOpen: false
        },
        {
          question: '7. 最後申請日是何時？',
          answer: '申請截止期間為2025年5月29日17點00分點選報名連結填寫，完成後系統將寄送[申請確認信]，以此封電子郵件顯示之時間為準。',
          isOpen: false
        },
        {
          question: '8. 參賽人員是否有人數及身分限制？',
          answer: '人數無限制，參賽人員須為公司員工；而報名系統中提列之參賽人員名單，皆須簽署附件五[個人資料提供同意書]並統籌簽名。(成員可簽署於同一張同意書)',
          isOpen: false
        },
        {
          question: '9. 【附件六】填寫規則是什麼？',
          answer: '參賽新創若任一成員屬經濟部中小企業處之公職人員或關係人者，應填具[附件六]公職人員及關係人身分關係揭露表，請於繳交應備文件時一併提供。',
          isOpen: false
        },
        {
          question: '10. 若想提供6分鐘pitch影片，該影片內容的製作方向為何？',
          answer: '6分鐘pitch影片為呈現提案簡報的組佳加分機會，建議參賽新創著重於解決方案之預劃與技術說明；如有實體產品或服務，也可一併於影片內呈現。',
          isOpen: false
        },
        {
          question: '11. 是否可提供競賽出題城市聯繫窗口？',
          answer: '本競賽相關聯繫皆透過執行單位與出題企業進行溝通，恕無法提供企業窗口資訊。',
          isOpen: false
        },{
          question: '12. 出題城市也會簽署保密同意書嗎？',
          answer: '是的，根據本競賽須知說明，出題城市及參賽新創均須簽署[附件四]之保密同意書。',
          isOpen: false
        },
      ]
    }
  },
  methods: {
    // 切換單一 FAQ 的開合狀態
    toggleFAQ(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen;
    }
  }
}
</script>

<style scoped>
/* ★★ 修改重點：改用 min-height 而非 height，並讓內容可垂直滾動 */
.page-container {
  width: 100vw;
  min-height: 100vh;  /* 允許頁面隨內容增長 */
  position: relative;
  overflow-x: hidden; 
  overflow-y: auto;   /* 超出時可以往下捲動 */
}

/* 背景依舊固定覆蓋整頁 */
.fixed-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url('@/assets/img/faq/bk.png') no-repeat center center;
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
  background-color: #ff9500;
  color: white;
  font-weight: 900;
  border: 5px solid white;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  z-index: 10;
  font-size: calc(1.2vw + 1vh);
  text-align: center;
}

/* ★★ 修改重點：不再用 flex 置中，而是留白讓內容在下方展開 */
.content {
  /* 原本的 height: 100%; display: flex; align-items: center; justify-content: center; overflow: hidden; margin-top: -100px; 都移除 */
  margin-top: 15vh;  /* 避開固定的 title-bar，讓內容從下方開始 */
  padding: 2em;      /* 給點內距，便於閱讀 */
}

/* FAQ 區域 */
.collapse-container {
  width: 80%;
  margin: 0 auto;
}

/* FAQ item：綠色外框 + 底色配置 */
.faq-item {
  border: 2px solid #00CC99;
  border-radius: 4px;
  margin-bottom: 30px;  /* 區塊之間 30px 間隔 */
  overflow: hidden;     /* 讓展開收合更順暢 */
}

/* 問題區：綠底、白字、粗體 */
.faq-question {
  background-color: #00CC99;
  color: #fff;
  font-weight: bold;
  font-size: 1.1em;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

/* 答案區：白底、黑字 */
.faq-answer {
  background-color: #fff;
  color: #000;
  padding: 1em;
  line-height: 1.6;
  font-size: 0.95em;
  white-space: pre-line; /* 讓多行字串中的換行符號生效 */
}


/* 過渡動畫：滑動開合 */
.collapse-enter-active,
.collapse-leave-active {
  transition: max-height 0.3s ease;
}
.collapse-enter,
.collapse-leave-to {
  max-height: 0;
  overflow: hidden;
}
</style>

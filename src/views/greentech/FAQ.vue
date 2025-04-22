<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>

    <!-- 小標題 -->
    <div class="title-little">{{ $t('class.gt') }}</div>

    <!-- 標題欄，固定在畫面上 -->
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
      // 初始化空陣列，於 created 生命週期中依據當前語系更新
      faqs: []
    }
  },
  created() {
    // 根據當前 i18n 語系初始化 FAQ 資料
    this.updateFAQs(this.$i18n.locale);
  },
  watch: {
    // 監聽 i18n 語系變化
    '$i18n.locale'(newLocale) {
      this.updateFAQs(newLocale);
    }
  },
  methods: {
    updateFAQs(locale) {
      if (locale === 'en') {
        // 英文 FAQ 資料
        this.faqs = [
          {
            question: '1. How much prize money can a participating startup receive at most?',
            answer: 'A participating startup can receive up to NT$800,000 in prize. They can receive NT$200,000 in prize if they advance to the semi-finals, and an additional NT$600,000 if they advance to the finals.',
            isOpen: false
          },
          {
            question: '2. Can multiple sets of enterprise topics be submitted simultaneously?',
            answer: 'Each participating startup can select up to two topics to compete in. Once a topic is selected, it cannot be changed.',
            isOpen: false
          },
          {
            question: '3. Is there a registration fee required?',
            answer: 'No registration fee is required for this competition.',
            isOpen: false
          },
          {
            question: '4. What should I do if I encounter any issues during the registration or application document submission process?',
            answer: 'Please fill out the inquiry form located at the bottom of the webpage under "Contact Us," or contact the execution team at (02)2577-4249ext.539/290/535',
            isOpen: false
          },
          {
            question: '5. Will the results of the preliminary and semi-final rounds be notified?',
            answer: 'The executing unit will notify the contact person via email, and please pay attention to announcements on this website.',
            isOpen: false
          },
          {
            question: '6. Are there any obligations that need to be fulfilled?',
            answer: `• Finalists must fulfill the following obligations: 
(1)Participate in at least one exchange or sharing event organized by the organizer and  implementer. 
(2)A presentation explaining the competition solution must be provided to the or ganizer for administrative processing and record-keeping.

• Winners must fulfill the following obligations: 
(1)Participate in at least one exhibition, promotion, or experiential event, with at least 50 attendees, organized by the organizer and implementer. After the event, evidence of participation (such as event photos or lessons learned from the participation) must be submitted to the organizer and implementer. 
(2)A presentation explaining the competition solution must be provided to the or ganizer for administrative processing and record-keeping.
(3)Sign a residency agreement with Startup Terrace or Startup Terrace Kaohsiung.`,
            isOpen: false
          },
          {
            question: '7. When is the deadline for application?',
            answer: 'The application deadline is at 23:59 on  May 30, 2025 (Friday). After completing the application, the system will send an Application Confirmation Letter; the implementer will consider the time shown in this email to take precedence.',
            isOpen: false
          },
          {
            question: '8. Are there any restrictions on the number and identity of participants?',
            answer: 'There is no limit on the number of participants. Participants must be employees of the company. All members of the participating startup listed on the online application form must personally sign the consent form Personal Information Provision Consent Form (Attachment 5) (All members can sign on the same consent form.)',
            isOpen: false
          },
          {
            question: '9. What are the filling rules for Attachment 7?',
            answer: 'If any member of the participating startup is an SMESA public servant or related party, he or she must fill out the Disclosure Form for Public Servants and Related Persons (Attachment 7). Please provide the required documents together when submitting.',
            isOpen: false
          },
          {
            question: '10. If I want to provide a 6-minute pitch video, what should be the production direction of the video content?',
            answer: 'The 6-minute or less video presentation of the solution is an excellent opportunity to present the proposal. It is recommended that participating startups focus on planning the solution and providing technical explanations. If there are physical products or services, they can also be presented in the video.',
            isOpen: false
          },
          {
            question: '11. Can the contact person from the competition\'s topic-proposing company be provided?',
            answer: 'All the communication affairs for this competition are conducted through the executing units (Startup Terrace or Startup Terrace Kaohsiung) with the topic-providing company. We regret that we cannot provide contact information for individual companies.',
            isOpen: false
          },
          {
            question: '12. Will topic-proposing companies also sign Confidentiality Consent Form?',
            answer: 'Yes, both the topic-proposing companies and participating startups are required to sign the Confidentiality Consent Form (Attachment 4)',
            isOpen: false
          },
        ];
      } else {
        // 中文 FAQ 資料（預設）
        this.faqs = [
          {
            question: '1. 一家參賽新創企業最多可以獲得多少驗證費用?',
            answer: '一家參賽新創企業至多可獲得新臺幣 80 萬驗證費用，通過複賽可獲得新臺幣 20 萬驗證費用，通過決賽可再獲得新臺幣 60 萬驗證費用。',
            isOpen: false
          },
          {
            question: '2. 可以同時投件多組企業題嗎？',
            answer: '參賽新創企業至多得挑選２題參賽，題目一經選定後，不得更換。',
            isOpen: false
          },
          {
            question: '3. 是否需繳交報名費用？',
            answer: '本競賽無需報名費。',
            isOpen: false
          },
          {
            question: '4. 如果報名或填寫申請文件遇到問題時，怎麼辦？',
            answer: '請至網頁下方[聯繫我們]填寫提問，或是來電洽詢執行團隊(02)2577-4249分機 #539 #290 #535',
            isOpen: false
          },
          {
            question: '5. 初賽及複賽結果是否會通知？',
            answer: '會由執行單位以E-mail方式通知聯絡人，並請關注本網站公告。',
            isOpen: false
          },
          {
            question: '6. 有需要達成的義務嗎？',
            answer: `• 通過複賽者之優選新創企業須達成義務:
1.應配合主辦單位及執行單位安排，參與至少 1 場交流分享活動。
2.應提供競賽解決方案說明簡報一式，予主辦單位行政作業及留存。

• 通過決賽者之優勝新創企業須達成義務:
1.應配合主辦單位及執行單位安排，參與至少 1 場達 50 人次(含)以上的成果展示、推廣或體驗活動。活動後須提交參與活動之佐證資料予主辦單位及執行單位，如:活動照片、交流心得等。
2.應提供競賽解決方案說明簡報一式，予主辦單位行政作業及留存。
3.與林口新創園或亞灣新創園簽訂進駐同意書。
          `,
            isOpen: false
          },
          {
            question: '7. 最後申請日是何時？',
            answer: '申請截止時間為2025年5月30日(五)23時59分，填寫完成後，系統將寄送【申請確認信】，執行單位將以此封信電子郵件顯示之時間為準。',
            isOpen: false
          },
          {
            question: '8. 參賽人員是否有人數及身分限制？',
            answer: '人數無限制，參賽人員須為公司員工；而報名系統中提列之參賽人員名單，皆須簽署附件五[個人資料提供同意書]並統籌簽名。(成員可簽署於同一張同意書)',
            isOpen: false
          },
          {
            question: '9. 【附件七】填寫規則是什麼？',
            answer: '參賽新創企業若任一成員屬經濟部中小企業署之公職人員或關係人者，應填具【附件七】公職人員及關係人身分關係揭露表。請於繳交應備文件時一併提供。',
            isOpen: false
          },
          {
            question: '10. 若想提供6分鐘pitch影片，該影片內容的製作方向為何？',
            answer: '6 分鐘 pitch 影片為呈現提案簡報的絕佳加分機會，建議參賽新創企業著重於解決方案之規劃與技術說明;如有實體產品或服務，也可一併於影片內呈現。',
            isOpen: false
          },
          {
            question: '11. 是否可提供競賽出題企業聯繫窗口？',
            answer: '本競賽相關聯繫皆透過執行單位與出題企業進行溝通，恕無法提供企業窗口資訊。',
            isOpen: false
          },
          {
            question: '12. 出題企業也會簽署保密同意書嗎？',
            answer: '是的。根據本競賽須知載明，出題企業及參賽新創企業均須簽署【附件四】之保密同意書。',
            isOpen: false
          },
        ];
      }
    },
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
  margin-left: 60px;
  position: relative;
  overflow-x: hidden; 
  overflow-y: auto;
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
  /* 白色背景 */
  background: #ffffff;
  /* 文字顏色改為 #474947 */
  color: #474947;
  /* 粗體 */
  font-weight: 900;
  /* 設定外框 + 漸層邊框 */
  border: 3px solid #4DB233; /* 作為舊版瀏覽器的 fallback */
  border-image: linear-gradient(to right, #4DB233, #0099FF, #FFBA40) 1;
  border-image-slice: 1;
  z-index: 10;
  font-size: calc(1.2vw + 1vh);
  text-align: center;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
}

.title-little{
  position: fixed;
  top: 2%;
  left: 8%;
  border-radius: 5px 5px 0 0;
  padding: 0.5vh 1vw;
  padding-bottom: 1vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 白色背景 */
  background: #ffffff;
  color: #02D703;
  /* 粗體 */
  font-weight: 900;
  z-index: 9;
  font-size: calc(0.5vw + 0.6vh);
  text-align: center;
}

/* ★★ 修改重點：不再用 flex 置中，而是留白讓內容在下方展開 */
.content {
  margin-top: 12vh;
  padding: 2em;
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
  margin-bottom: 30px;
  overflow: hidden;
}

/* 問題區：綠底、白字、粗體 */
.faq-question {
  background-color: #00CC99;
  color: #fff;
  font-weight: bold;
  font-size: 1.3em;
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
  font-size: 1.1em;
  white-space: pre-line;
}

.collapse-enter,
.collapse-leave-to {
  max-height: 0;
  overflow: hidden;
}
</style>

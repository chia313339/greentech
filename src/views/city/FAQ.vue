<template>
  <div class="page-container">
    <!-- 固定背景層 -->
    <div class="fixed-bg"></div>

    <!-- 小標題 -->
    <div class="title-little">{{ $t('class.city') }}</div>

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
        // 英文 FAQ 資料（共 12 筆）
        this.faqs = [
          {
            question: '1. How much prize & subsidies can a participating startup receive at most?',
            answer: 'A participating startup can receive up to NT$800,000 if it is selected as the winner at the final round. The team can receive prize of NT$200,000 when it passes the semi-final and becomes one of the Finalists to the final round; and an additional NT$600,000 if the team is selected as the winner at the final round.',
            isOpen: false
          },
          {
            question: '2. Can multiple sets of city topics be submitted simultaneously?',
            answer: 'Each participating startup can select up to one topic to compete in. Once a topic is selected, it cannot be changed.',
            isOpen: false
          },
          {
            question: '3. Is there a registration fee required?',
            answer: 'No registration fee is required for this competition.',
            isOpen: false
          },
          {
            question: '4. What should I do if I encounter any issues during the registration or application document submission process?',
            answer: 'Please fill out the inquiry form located at the bottom of the webpage under "Contact Us," or contact the execution team at (02)2577-4249 ext. 223/386 by phone.',
            isOpen: false
          },
          {
            question: '5. Will the results of the preliminary and semi-final rounds be notified?',
            answer: 'The implementer will notify the contact person via email, and please pay attention to announcements on this website.',
            isOpen: false
          },
          // {
          //   question: '6. Can multiple sets of enterprise and city topics be submitted simultaneously?',
          //   answer: 'Each participating startup in the Enterprise Category may choose up to two topics, at the same time, in the City Category, it may choose just one topic for participation in the competition. Once the topics are selected, they cannot be changed.',
          //   isOpen: false
          // },
          {
            question: '6. Are there any obligations that need to be fulfilled?',
            answer: `• Semi-finalists must fulfill the following obligations: 
            1. Participate in at least one exchange or sharing event organized by the organizer and implementer. 
            2. Provide a demo or introduction video (content should include data or products related to this competition) to the organizer and implementer for subsequent promotion and display. 
            
            • Finalists must fulfill the following obligations: 
            1. Participate in at least one exhibition, promotion, or experiential event, with at least 50 attendees, organized by the organizer and implementer. 
            2. After the event, evidence of participation (such as event photos or lessons learned from the participation) must be submitted to the organizer and implementer. 
            3. Provide a demo or introduction video (content should include data or products related to this competition) to the organizer and implementer for subsequent promotion and display. 
            4. Sign a residency agreement with Startup Terrace Linkou or Startup Terrace Kaohsiung. (Residency period: January 1, 2026 – December 31, 2026)`,
            isOpen: false
          },
          {
            question: '7. When is the deadline for application?',
            answer: 'The application deadline is at 23:59 on May 30, 2025 (Friday). After completing the application, the system will send an Application Confirmation Letter; the implementer will consider the time shown in this email to take precedence.',
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
            question: '10. About the 6-minute pitch video, what should be the production direction of the video content?',
            answer: 'Preliminary round is conducted by documentation review. The 6-minute or less video presentation of the solution is an excellent opportunity to showcase the proposal. It is recommended that participating startups focus on planning of the solution and related technical explanations. If there are physical products or services, please include them in the video.',
            isOpen: false
          },
          {
            question: '11. Can the contact person from the competition\'s topic-proposing city be provided?',
            answer: 'All the communication affairs for this competition are conducted through the executing units (Taiwan Startup Terrace) with the topic-proposing city. We regret that we cannot provide contact information.',
            isOpen: false
          },
          {
            question: '12. Will topic-proposing cities also sign Confidentiality Consent Form?',
            answer: 'Yes, both the topic-proposing city and participating startups are required to sign the Confidentiality Consent Form (Attachment 4)',
            isOpen: false
          }
        ];

      } else {
        // 中文 FAQ 資料（預設，共 13 筆）
        this.faqs = [
          {
            question: '1. 一家參賽新創企業最多可以獲得多少輔導費用?',
            answer: '一家參賽新創至多可獲得新臺幣 80 萬驗證費用，通過複賽可獲得新臺幣 20 萬驗證費用，通過決賽可再獲得新臺幣 60 萬驗證費用。',
            isOpen: false
          },
          {
            question: '2. 可以同時投件多組城市題嗎?',
            answer: '參賽新創至多得挑選一題參賽，題目一經選定後，不得更換。',
            isOpen: false
          },
          {
            question: '3. 是否需繳交報名費用?',
            answer: '本競賽無需報名費。',
            isOpen: false
          },
          {
            question: '4. 如果報名或填寫申請文件遇到問題時，怎麼辦?',
            answer: '請至網頁下方【聯繫我們】填寫提問，或是來電洽詢執行團隊(02)2577-4249分機223/386。',
            isOpen: false
          },
          {
            question: '5. 初賽及複賽結果是否會通知?',
            answer: '會由執行單位以E-mail方式通知聯絡人，並請關注本網站公告。',
            isOpen: false
          },
          // {
          //   question: '6. 是否可以同時提交多組企業類別與城市類別的主題?',
          //   answer: '每個參與企業類別(Enterprise Category)的新創團隊最多可選擇兩個主題，同時，在城市類別(City Category)中，則僅能選擇一個主題參賽。一旦選定後，無法更改。',
          //   isOpen: false
          // },
          {
            question: '6. 有需要達成的義務嗎?',
            answer: `• 通過複賽者之優選新創須達成義務: 
            1.應配合主辦單位及執行單位安排，參與至少1場交流分享活動。 
            2.應提供競賽解決方案說明簡報一式，予主辦單位行政作業及留存。 
            
            • 通過決賽者之優勝新創須達成義務: 
            1.應配合主辦單位及執行單位安排，參與至少1場達50人次(含)以上的成果展示、推廣或體驗活動。活動後須提交參與活動之佐證資料予主辦單位及執行單位，如:活動照片、交流心得等。 
            2.應提供競賽解決方案說明簡報一式，予主辦單位行政作業及留存。 
            3.與林口新創園或亞灣新創園簽訂進駐同意書。(進駐日期:2026/1/1-12/31)`,
            isOpen: false
          },
          {
            question: '7. 最後申請日是何時?',
            answer: '申請截止期間為2025年5月30日23點59分(GMT+8)點選報名連結填寫，完成後系統將寄送【申請確認信】，以此封電子郵件顯示之時間為準。',
            isOpen: false
          },
          {
            question: '8. 參賽人員是否有人數及身分限制?',
            answer: '人數無限制，參賽人員須為公司員工；而報名系統中提列之參賽人員名單，皆須簽署附件五【個人資料提供同意書】，並親筆簽名。(成員可簽署於同一張同意書)',
            isOpen: false
          },
          {
            question: '9. 【附件七】填寫規則是什麼?',
            answer: '參賽新創若任一成員屬經濟部中小企業處之公職人員或關係人者，應填具【附件七】公職人員及關係人身分關係揭露表。請於繳交應備文件時一併提供。',
            isOpen: false
          },
          {
            question: '10. 若想提供6分鐘解題方案英文說明影片，該影片內容的製作方向為何?',
            answer: '6分鐘解題方案英文說明影片為呈現提案簡報的絕佳加分機會，建議參賽新創著重於解決方案之規劃與技術說明；如有實體產品或服務，也可一併於影片內呈現。',
            isOpen: false
          },
          {
            question: '11. 是否可提供競賽出題城市聯繫窗口?',
            answer: '本競賽相關聯繫皆透過執行單位(Taiwan Startup Terrace)與出題城市進行溝通，恕無法提供城市窗口資訊。',
            isOpen: false
          },
          {
            question: '12. 出題城市也會簽署保密同意書嗎?',
            answer: '是的，根據本競賽須知載明，出題城市及參賽新創均須簽署【附件四】之保密同意書。',
            isOpen: false
          }
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
  background: url('@/assets/img/city/faq/bk.png') no-repeat center center;
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
  color: #0099FF;
  /* 粗體 */
  font-weight: 900;
  z-index: 9;
  font-size: calc(0.5vw + 0.6vh);
  text-align: center;
}


/* ★★ 修改重點：不再用 flex 置中，而是留白讓內容在下方展開 */
.content {
  margin-top: 15vh;
  padding: 2em;
}

/* FAQ 區域 */
.collapse-container {
  width: 80%;
  margin: 0 auto;
}

/* FAQ item：綠色外框 + 底色配置 */
.faq-item {
  border: 2px solid #114E96;
  border-radius: 4px;
  margin-bottom: 30px;
  overflow: hidden;
}

/* 問題區：綠底、白字、粗體 */
.faq-question {
  background-color: #114E96;
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

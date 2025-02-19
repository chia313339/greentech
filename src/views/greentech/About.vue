<template>
  <div class="page-content">
    <h1>{{ $t('pages.greentechAbout') }}</h1>
    <p>
      {{ $t('pages.greentechAbout') }} - {{ store.lang === 'zh' ? '這是 Greentech 組的【關於競賽】頁面內容。' : 'This is the Greentech group About page content.' }}
    </p>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { reactive } from 'vue'

// 若你有用 store 管理語系，也可與 i18n 同步
const store = reactive({ lang: 'zh' })

export default {
  name: 'GreentechAbout',
  setup() {
    const { t } = useI18n()
    return { t, store }
  }
}
</script>

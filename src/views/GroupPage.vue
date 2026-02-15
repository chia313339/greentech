<template>
  <SiteFrame group-switch-behavior="preserve">
    <div class="main-content">
      <router-view />
    </div>
  </SiteFrame>
</template>

<script>
import SiteFrame from '@/components/SiteFrame.vue'

export default {
  name: 'GroupPage',
  components: {
    SiteFrame
  }
}
</script>

<style scoped>
.main-content {
  padding: 20px;
}
</style>

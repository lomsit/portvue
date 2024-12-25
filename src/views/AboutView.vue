<template>
  <div class="about">
    <about-page></about-page>
  </div>
</template>

<script>
import AboutPage from '@/components/AboutPage.vue';

export default {
components:{
  AboutPage
}
}
</script>

<style lang="scss" scoped>
.about{
  position: relative;
  z-index: 12;
  text-align: center;
}
</style>
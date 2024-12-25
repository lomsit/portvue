<template>
  <div>
    <home-page></home-page>
  </div>
</template>

<script>
import HomePage from '@/components/HomePage.vue';

// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
 HomePage
  }
}
</script>

<style lang="scss" scoped>
div{
  position: relative;
  z-index: 12;
  text-align: center;
}
</style>
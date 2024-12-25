<template>
  <div>
    <h1>This portfolio is written in Vue</h1>
  </div>

  <button-component></button-component>

</template>

<script>
import ButtonComponent from './ButtonComponent.vue';

export default {
name:'HomePage',
  components: { ButtonComponent },

}



</script>

<style lang="scss" scoped>

</style>
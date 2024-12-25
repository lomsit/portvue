<template>
  <div class="project">
<project-page></project-page>
  </div>
</template>

<script>
import ProjectPage from '@/components/ProjectPage.vue'
export default {
  components: { ProjectPage },

}
</script>

<style lang="scss" scoped>
.project{
    text-align: center;
    position: relative;
    z-index: 12;
}
</style>
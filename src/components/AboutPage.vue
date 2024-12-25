<template>
  <div class="btn__row">
      <p class="animate__animated animate__fadeInDown">Это портфолио сделано на фреймворке <span style="color: rgb(33, 255, 144);">Vue.js.</span> На странице <router-link class="rl" to="/projects">Projects</router-link> присутствует <span style="color: aqua;">Slider-Swiper.</span></p>
<p class="animate__animated animate__fadeInDown animate__delay-1s"><span>HTML.</span> Классическая кросс-браузерная, адаптивная верстка с вырвниванием по технологии Flexbox.</p>
<p class="animate__animated animate__fadeInDown animate__delay-2s"><span>CSS.</span> В каждом проекте, включая этот, преобладает препроцессор <span style="color: rgb(255, 25, 121);">SCSS. </span> А анимация элементов сделана при помощи библиотеки Animate.css</p>
<p class="animate__animated animate__fadeInDown animate__delay-3s"><span>JS.</span> На заднем плане вы можете заметить анимацию, которая сделана на <span style="color: #f5f5f5;">JavaScript.</span></p>

<button-component></button-component>
    </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';

export default {
  components: { ButtonComponent },
name:'AboutPage'
}
</script>

<style lang="scss" scoped>
.rl{
        position: relative;
        z-index: 12;
transition-duration: 0.5s;
        font-weight: bold;
        color: #f5f5f5;

        &.router-link-exact-active {
            color: rgb(255, 233, 33);
        }
}
.rl:hover{
  transition-duration: 0.5s;
  color: rgb(255, 233, 33);

}

.btn__row{
  overflow-x: hidden;
  overflow-y: hidden;
}

span{
  color: rgba(128, 128, 128, 0.521);
  font-weight: bold;
}
p{
  font-size: 30px;
  color: rgb(255, 233, 33);
  @media(max-width: 1170px){
    font-size: 20px;
  }
  @media(max-width: 767px){
    font-size: 16px;
  }
}
</style>
<template>
<div class="proj _container">
   <div class="proj__row">

    <h1 class="animate__animated animate__fadeInDown">
        Проекты на сборщике <span style="color: #CF4547;">Gulp</span> 
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19V5m0 14-4-4m4 4 4-4"/></svg>
    </h1>

    <swiper-container>
  <swiper-slide>
    <div class="proj__column animate__animated animate__fadeInDown">
        <img src="@/assets/img/proj1.jpg" alt="">
        <div class="proj__link animate__animated animate__fadeInDown animate__delay-1s">
            <a href="https://lomsit.github.io/oneflow/">Адаптивный одностраничник с анимацией и слайдером</a>
        </div>
    </div>
</swiper-slide>

<swiper-slide>
    <div class="proj__column">
        <img src="@/assets/img/proj2.jpg" alt="">
        <div class="proj__link">
            <a href="https://lomsit.github.io/notitanic/">Адаптивный одностраничник с анимацией и слайдером</a>
        </div>
    </div>
</swiper-slide>

  <swiper-slide>
    <div class="proj__column">
        <img src="@/assets/img/proj3.jpg" alt="">
        <div class="proj__link">
            <a href="https://lomsit.github.io/ritm/">Адаптивный одностраничник с анимацией и слайдером</a>
        </div>
    </div>
</swiper-slide>

<swiper-slide>
     <div class="proj__column">
        <img src="@/assets/img/proj4.jpg" alt="">
        <div class="proj__link">
            <a href="https://lomsit.github.io/DenPort/">Адаптивный одностраничник с анимацией</a>
        </div>
    </div>
</swiper-slide>

<swiper-slide>
<div class="proj__column">
        <img src="@/assets/img/proj5.jpg" alt="">
        <div class="proj__link">
            <a href="https://lomsit.github.io/pcCourse/">Адаптивный одностраничник с анимацией и слайдером на мобильном разрешении</a>
        </div>
    </div>
</swiper-slide>

<swiper-slide>
<div class="proj__column">
        <img src="@/assets/img/proj6.jpg" alt="">
        <div class="proj__link">
            <a href="https://lomsit.github.io/GoCorona/">Адаптивный одностраничник с анимацией</a>
        </div>
    </div>
</swiper-slide>
    </swiper-container>
   </div>
  
</div>
</template>

<script>

export default {
name:'ProjectPage'
}
</script>

<style lang="scss" scoped>

.proj{
    text-align: center;
    color: rgb(255, 233, 33);

    &__row{
flex-direction: column;
text-align: center;

h1{
    color: rgb(255, 233, 33);
    font-weight: bold;
}
    }

    &__column{
display: block;
padding-bottom: 100px;
        align-items: center;


img{
    width: 60%;
    height: 60%;
    @media(max-width: px){
width: 100%;
height: 100%;
    }
}
    }

    &__link{
        padding-top: 20px;
        a{
        font-weight: bold;
            color: rgb(255, 233, 33);
        }
    }
}

</style>
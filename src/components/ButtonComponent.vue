<template>
  <div class="btn__columns">
    <div class="btn__column animate__animated animate__fadeInLeft animate__delay-1s">
      <my-button href="https://t.me/lomsit" class="btn__tg">My Telegram</my-button>
    </div>  
    <div class="btn__column animate__animated animate__fadeInDown">
      <my-button href="https://krasnodar.hh.ru/applicant/resumes/view?resume=89f96043ff0e21e1230039ed1f6c4e394b7670">My Resume on HH.ru</my-button>
    </div>  
    <div class="btn__column animate__animated animate__fadeInRight animate__delay-1s">
      <my-button href="https://github.com/lomsit" class="btn__git">My GitHub</my-button>
    </div>
</div>
</template>

<script>
import MyButton from './UI/MyButton.vue'

export default {
name:'ButtonComponent',
components:{ MyButton}
}
</script>

<style lang="scss" scoped>
.btn{
&__columns{
  display: flex;
  margin-top: 29%;
justify-content: center;

@media(max-width:767px){
flex-direction: column;
}
}

&__column{
margin-right: 15px;
@media(max-width:767px){
margin-bottom: 35px;
}
}

&__tg:hover{
  color: #229ED9;
  border:1px solid #229ED9;
}

&__git:hover{
  color: #7952b3;
  border:1px solid #7952b3;
}
}
</style>
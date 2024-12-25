<template>
  <a class="btn">
<slot></slot>
  </a>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn{
padding: 10px 25px;
background: none;
	color: rgb(255, 233, 33);
	border: 1px solid rgb(255, 233, 33);
	cursor: pointer;
	text-decoration: none;
	font-weight: bold;
	transition-duration: 0.5s;
}

.btn:hover{
	color: rgba(211, 16, 16, 0.808);
	border:1px solid rgba(211, 16, 16, 0.808);
	transition-duration: 0.5s;
}

</style>
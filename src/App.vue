<template>
<nav>
    <router-link class="rl animate__animated animate__fadeInDown" to="/">Главаная</router-link> |
    <router-link class="rl animate__animated animate__fadeInDown animate__delay-1s" to="/projects">Проекты</router-link>
</nav>
<router-view />
</template>

<script>

</script>

<style lang="scss">

.rl{
text-decoration: none;
}
.rl:before {
	content: '';
	bottom: 0;
	left: 0;
	position: absolute;
	width: 100%;
	height: 2px;
	background-color: rgb(255, 233, 33);
	transition: 0.2s;
	transform: scaleX(0);
}
.rl:hover::before {
	transform: scaleX(1);
}

canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;

}

body {
    background: #000000;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #e6e6e6;
    position: relative;

}

nav {
    padding: 30px;
    text-align: center;
justify-content: space-between;
    a {
        position: relative;
        z-index: 12;

        font-weight: bold;
        color: #e6e6e6;

        &.router-link-exact-active {
            color: rgb(255, 233, 33);
        }
    }
}
</style>

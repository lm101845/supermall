<template>
  <div id="home">
    <!-- 这里是首页，可以用id了 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 以后这里要插入东西，所以要用双标签 -->
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "Home",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>

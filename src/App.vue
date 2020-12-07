<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
    <!-- MainTabBar还用于管理了路由相关的映射关系 -->
  </div>
</template>

<script>
//在这里引入MainTabBar组件
import MainTabBar from 'components/content/mainTabbar/MainTabBar'

export default {
  name: 'App',
  components: {
  //  在这里注册组件
  MainTabBar
  }
}
</script>

<style>
  /* @import "./assets/css/base.css"; */
  /* 在vue.config.js中起别名以后，就可以下面这样写了 */
  @import "assets/css/base.css";
</style>

<template>
  <div id="home">
    <!-- 这里是首页，可以用id了 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />
    <!-- 以后这里要插入东西，所以要用双标签 -->
    <!-- <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper> -->
    <!-- 我们只要从banners里面取出数据，插入到里面就可以了 -->
    <!-- 但是这样写的话Home.vue里面的东西太多了，我们需要进行抽离 -->
    <!-- Home.vue文件里面只放一些主要的逻辑 -->
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
// 导入的东西很多，希望按顺序导入比较好

import HomeSwiper from "./childComps/HomeSwiper";
// 这个就在当前文件里面，就不用别名了

import RecommendView from './childComps/RecommendView'

import { getHomeMultidata } from "network/home";
// 因为这里我不需要export导出，所以可以用大括号。

// import Swiper from 'components/common/swiper/Swiper'
// import SwiperItem from 'components/common/swiper/SwiperItem'
// 如果没有swiper里的index.js文件，你需要像上面这样导入

// import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    // 需要用data这个东西把数据保存起来
    return {
      // result:null
      // 这个变量属于组件，所以不会被回收
      // 但是这样保存数据太乱了，所以我们需要单独保存
      banners: [],
      recommends: []
      // 这里面的数据是不会被销毁的
    };
  },
  created() {
    // 等组件创建完成之后就发送网络请求，进行数据的展示
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      // getHomeMutidata()表示调用这个函数
      // 然后后面加上.then就可以拿到请求的数据了
      // console.log(res);
      // 但是数据在这里直接用不合适，无法保存
      // 所以我们弄一个变量保存这个东西
      // this.result = res;
      // this在箭头函数里面网上找作用域
      // created里面是有this的
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
    // console.log(this.result);
    // 不能这样验证数据是否存在，因为这是一个异步操作
    // 在上面的函数没有执行完的时候就直接打印了，肯定是打印不到的
  }
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>

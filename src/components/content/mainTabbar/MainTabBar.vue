<template>
   
      <!--如果你没有封装的思想的话可能会这样做-->
      <!-- <div id="tab-bar">
        <div class="tab-bar-item">首页</div>
        <div class="tab-bar-item">分类</div>
        <div class="tab-bar-item">购物车</div>
        <div class="tab-bar-item">我的</div> -->
        <!-- 左上角，并且没有挨在边上。 -->
        <!-- 因为它默认有一个margin:8px -->
        <!-- 但是这样写不好，没有复用性，别的项目要用这个还要把它拷贝进去 -->
        <!-- 而且不仅你这里要拷贝，下面的样式也要拷贝，不好 -->
        <!-- 所以我们最好把这个东西封装成一个独立的组件 -->
        <!--我们在components这里新建一个文件夹tabbar(components文件夹里面以后要封装很多组件的)-->
        <!-- 如果所有的组件全部放在components文件夹里面管理起来太乱了 -->
        <!-- 所以我针对某个功能，单独建立一个个文件夹，这样管理起来就比较好 -->
      <!-- </div> -->
      <tab-bar>
      <!-- 在App.vue里面刚开始用的是TabBar -->

        <!-- <div class="tab-bar-item">
            <img src="../../assets/img/tabbar/home.svg" alt=""> -->
            <!-- 但是这样写路径太恶心了 -->
            <!-- 我们可以给路径起别名，后面讲 -->
              <!-- 首页
          </div>
        <div class="tab-bar-item">
            <img src="../../assets/img/tabbar/home.svg" alt="">
            分类
        </div>
        <div class="tab-bar-item">
            <img src="../../assets/img/tabbar/home.svg" alt="">
            <div>购物车</div>
        </div>
        <div class="tab-bar-item">
            <img src="../../assets/img/tabbar/home.svg" alt="">
            我的
        </div> -->
        <!-- 这里面的代码到时候还会继续抽取的，放心 -->
          <tab-bar-item path='/home'>
              <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
              <!-- 在DOM里面起别名前面加上~符号 -->
              <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
              <div slot="item-text">首页 </div>
          </tab-bar-item>

          <tab-bar-item path='/category'>
              <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
              <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
              <div slot="item-text">分类</div>
          </tab-bar-item>

          <tab-bar-item path='/cart'>
              <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
              <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
              <div slot="item-text">购物车</div>
          </tab-bar-item>

          <tab-bar-item path='/profile'>
              <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
              <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
              <div slot="item-text">我的</div>
          </tab-bar-item>
          <!-- 这个代码又有点多了，到时候可以再抽到另一个文件里面 -->
      </tab-bar>
    <!-- 这个组件标签名tab-bar是哪里来的呢？？？？ -->
    <!-- 我试了一下：Tab-Bar也是可以的,tab-Bar也是可以的 -->
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped>
    
</style>
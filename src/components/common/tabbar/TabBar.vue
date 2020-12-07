<template>
    <div id="tab-bar">
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
        <!-- 这里面只有文字，文字下面的4张图片还没有 -->
        <!-- 我们把图片放到img文件夹里面单独的tabbar文件夹下面 -->
        <!-- 不要为了省事把所有的图片都放到img一个文件夹里面 -->
        <slot></slot>
        <!-- 上面的全部不要，只弄一个插槽即可 -->
    </div>

    <!-- 但是我这个TabBar组件里面的东西太杂了，这个是一个大组件，里面的明细我不应该关系的 -->
    <!-- TabBar组件应该只负责TabBar自己的东西：div id="tab-bar"和#tab-bar{}这2个-->
    <!-- 至于item相关的东西不应该交给我管理 -->
    <!-- 全部交给TabBar管理的话，最后封装的组件就会乱七八糟的 -->
    <!-- 所以TabBar封装完之后只给它弄一个插槽(slot)就可以了 -->
</template>

<script>
export default {
    name:'TabBar'
}
</script>

<style scoped>
#tab-bar{
    display:flex;
    background-color:#f6f6f6;

    /* 让它们4个跑到下面去 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /* 弄个阴影，有个过渡效果 */
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
  }

/* .tab-bar-item{
    flex: 1; */
    /* 这个表示均等分 */
    /* text-align: center; */
    /* 一般tab-bar的高度是49px——移动端，可以网上搜的 */
    /* height: 49px;
  } */

  /* .tab-bar-item img{ */
      /* 图片有了，但是太大了，要给它改一下大小 */
      /* width: 24px;
      height: 24px;
  } */
</style>


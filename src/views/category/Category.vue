<template>
    <!-- <div class="wrapper" ref="aaaa"> -->
    <div>
      <!--1.无论是否设置click:false, button都可以点击-->
      <!-- <button @click="btnClick">按钮</button> -->

      <!--2.必须设置click:true, 那么div才能监听点击-->
      <!-- <div @click="divClick">呵呵呵呵</div> -->
      <back-top @click.native="backTop" v-show="isShowBackTop"/>
    </div>
</template>
 
<script>
  import BScroll from 'better-scroll'
  // 以后会对这个第三方插件进行封装的，主要是担心你以后不更新了怎么办
  import {backTopMixin} from 'common/mixin'
  export default {
    name: "Category",
    mixins:[backTopMixin]
    // created只在组件创建完之后才调用
    // 但是组件创建完之后并没有挂载模版
    // created() {
    //   // console.log(this.$refs.aaaa);
    //   // console.log(document.querySelector('.wrapper'));
    //   // this.scroll = new BScroll(this.$ref.aaa,{
    //   // })
    //   // 不能在这里做
    // },
    // // 组件创建完调用
    // mounted() {
    //   // console.log(this.$refs.aaaa);
    //   // console.log(document.querySelector('.wrapper'));
    //   this.scroll = new BScroll(this.$refs.aaaa,{
    //     // probeType:3,
    //     // pullUpLoad:true
    //   })

    //   this.scroll.on('scroll',(position)=>{
    //     // console.log(position);
    //   })

    //   this.scroll.on('pullingUp',()=>{
    //     console.log("上拉加载更多");
    //   })
    // },

    // methods: {
    //   btnClick() {
    //     console.log('btnClick');
    //   },
    //   divClick() {
    //     console.log('divClick');
    //   }
    // },
  }
</script>

<style scoped>
  /* .wrapper{
    height: 150px;
    background-color: pink;
    overflow: hidden; */
    /* overflow-y: scroll; */
    /* 此时超出部分会自动隐藏，所以不用写overflow:hidden了 */
    /* 这样就可以局部滚动了 */
    /* 但是这种原生的局部滚动滚一下卡一下，很不好 */

</style>

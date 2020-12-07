<template>
<!-- 所有的item都展示同一个图片，同一个文字 -->
<!-- 所以不要写死，用插槽 -->
    <div class="tab-bar-item" @click="itemClick">
        <!-- <slot v-if="!isActive" name="item-icon"></slot>
        <slot v-else name="item-icon-active"></slot> -->

        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <!-- 插槽这种东西很有可能某些属性就被替换掉，所以上面这么写不保险，按下面的来写 -->
        <!-- v-if和v-else都写到div里面，不写到插槽里面比较好 -->
        
        <!-- 这2个插槽最终只会展示一个 -->
        <!-- <slot :class="{active:isActive}" name="item-text"></slot> -->
        <!-- <div :class="{active:isActive}"> -->
        <!--现在动态绑定class已经没用了  -->
        <div :style="activeStyle">
          <!-- v-bind动态绑定style并且把这个style抽到一个计算属性里面 -->
          <slot name="item-text"></slot>
        </div>
        <!-- 这样写就可以了 -->
        <!-- 插槽这里最终会被<div slot="item-text">首页 </div>替换掉 -->
        <!-- 所以在插槽里写:class没有用 -->
        <!-- <img src="../../assets/img/tabbar/home.svg" alt=""> -->
        <!-- 图片最下面会多3个像素，导致图片和文字之间有空隙 -->
        <!-- <div>首页 </div> -->
        <!-- 但是这2个东西(图片和文字)你是不能写死的 -->
        <!-- 不可以的话搞插槽就可以了 -->
    </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data(){
     return {
        // isActive:true,
        // 这个也不能写死
        // path:'/home'
        // 不能这样写死
     }
    },
    computed:{
      isActive(){
        // home -> item1(/home) = true
        // home -> item2(/category) = false
        // home -> item1(/cart) = false
        // home -> item1(/profile)  = false
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    },
    methods: {
     itemClick(){
      //  console.log('itemClick');
      this.$router.replace(this.path)
     }
    }
}
</script>

<style scoped>
    /* 再把App.vue里面关于tab-bar-item的样式放到这里来 */
     .tab-bar-item{
    flex: 1;
    /* 这个表示均等分 */
    text-align: center;
    /* 一般tab-bar的高度是49px——移动端，可以网上搜的 */
    height: 49px;
    font-size: 14px;
  }

   .tab-bar-item img{
      /* 图片有了，但是太大了，要给它改一下大小 */
      width: 24px;
      height: 24px;
      margin-top: 3px;
      vertical-align: middle;
    /* 图片最下面会多3个像素，导致图片和文字之间有空隙 */
    margin-bottom: 2px;
  }

  /* .active{
    color: red; */
    /* 这个颜色也不能写死 */
  /* } */
</style>
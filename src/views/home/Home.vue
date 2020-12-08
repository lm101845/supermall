<template>
  <div id="home">
    <!-- 这里是首页，可以用id了 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 以后这里要插入东西，所以要用双标签 -->
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMutidata} from 'network/home'
// 因为这里我不需要export导出，所以可以用大括号。

  export default {
    name: "Home",
    components:{
      NavBar
    },
    data(){
      // 需要用data这个东西把数据保存起来
      return {
        // result:null
        // 这个变量属于组件，所以不会被回收
        // 但是这样保存数据太乱了，所以我们需要单独保存
       banners:[],
       recommends:[],
      }
    },
    created(){
      // 等组件创建完成之后就发送网络请求，进行数据的展示
      // 1.请求多个数据
      getHomeMutidata().then(res=>{
        // getHomeMutidata()表示调用这个函数
        // 然后后面加上.then就可以拿到请求的数据了
        // console.log(res);
        // 但是数据在这里直接用不合适，无法保存
        // 所以我们弄一个变量保存这个东西
        // this.result = res;
        // this在箭头函数里面网上找作用域
        // created里面是有this的

        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
      // console.log(this.result);
      // 不能这样验证数据是否存在，因为这是一个异步操作
      // 在上面的函数没有执行完的时候就直接打印了，肯定是打印不到的 
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>

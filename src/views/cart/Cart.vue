<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartCount}})</div>
      <!-- <div slot="center">购物车({{$store.state.cartList.length}})</div> -->
      <!-- <div slot="center">购物车({{length}})</div> -->
      <!-- 你不想叫cartLength，想叫length也行的 -->
    <!-- navbar是我们自定义的组件，而且这个组件里面有很多插槽 -->
    </nav-bar>

    <!-- 商品的列表 -->
    <cart-list class="cart-list" :cart-list="cartList"></cart-list>

    <!-- 底部汇总 -->
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  import CartList from './childComps/CartList'
  import BottomBar from './childComps/BottomBar'


  // import { mapGetters } from 'vuex'

  export default {
    name: "Cart",
    components:{
      NavBar,
      CartList,
      BottomBar
    },
    computed:{
      // cartLength(){
      //   // return this.$store.state.cartList.length
      //   // return this.$store.getters.cartLength
      //   // 如果cartLength使用的比较多的话，可以封装一个getter

      //   // 如何把getters里面的东西放到这里来
      // }

      // 2种语法
      // 语法1：写数组，表示一一对应的关系
      // ...mapGetters(['cartLength','cartList'])

      //语法2：写对象，也是一一对应的关系，但是名字可以自定义
      // ...mapGetters({
      //   length:'cartLength',
      //   list:'cartList'
      // })

       cartList() {
		    return this.$store.getters.cartList
      },
      cartCount() {
		    return this.$store.getters.cartCount
      }
    }
  }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    /* font-weight: 700; */
    /* 不加粗还好看一点 */
  }

  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%;
  }
</style>

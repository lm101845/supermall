<template>
  <div class="cart-list">
      <scroll class="content"  ref="scroll">
          <!-- <li v-for="item in cartList">{{item}}</li> -->
          <cart-list-item 
                v-for="(item,index) in cartList"  
                :key="index" 
                :item-info="item"/>
      </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import CartListItem from './CartListItem'
  // import { mapGetters } from 'vuex'

	export default {
		name: "CartList",
    components: {
      Scroll,
      CartListItem
    },
    // computed:{
    //   ...mapGetters(['cartList'])
    // },
     props: {
		  cartList: {
		    type: Array,
        default() {
		      return []
        }
      }
    },
    activated() {
      // console.log('---------');
      this.$refs.scroll.refresh()
    },
	}
</script>

<style scoped>
  /* .cart-list{
    height: calc(100%-93px-40px);
  }
  .content{
    height: 100%;
    overflow: hidden;
  } */
</style>

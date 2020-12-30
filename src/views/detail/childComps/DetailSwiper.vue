<template>
    <!-- <div class="detail-swiper"> -->
        <!-- 在这里就可以使用轮播图来展示传进来的数据了 -->
        <!-- 给类起名字的时候不能随便起 -->
        <!-- 其实我们这里写代码的时候，是不需要div这个根的，swiper本身就可以当成一个根 -->
        <swiper class="detail-swiper">
            <swiper-item v-for="item in topImages">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
    <!-- </div> -->
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
// 既然要用轮播图，就要导入它

export default {
  name:'DetailSwiper',
  components:{
      Swiper,
      SwiperItem
  },
  props:{
    //详情轮播图里面要想展示数据必须要有数据
    // 所以我们得让详情把数据给我们传过来(父传子)
    topImages:{
        type:Array,
        default(){
            return []
        }
    }
  }
};
</script>

<style scoped>
    .detail-swiper{
        height: 300px;
        /* 原始图片太大了，我直接给它一个固定高度 */
        overflow: hidden;
        /* 然后超出部分隐藏起来 */
    }
</style>

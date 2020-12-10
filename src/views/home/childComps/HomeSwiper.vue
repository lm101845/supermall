<template>
<!-- 这里是没有div的，而且不知道为什么轮播图总是总是显示不出来 -->
  <swiper>
    <swiper-item v-for="item in banners" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </swiper-item>
    <!-- 我们只要从banners里面取出数据，插入到里面就可以了 -->
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>

</style>

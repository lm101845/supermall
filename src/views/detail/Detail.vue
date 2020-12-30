<template>
    <!-- <div>{{iid}}</div> -->
    <div id="detail">
        <!-- <nav-bar><div slot="center">详情页</div></nav-bar> -->
        <!-- 这个导航还是稍微有些复杂的，那就不要在这里做了 -->
        <detail-nav-bar/>
        <detail-swiper :top-images="topImages"/>
    </div>
</template>

<script>
// import NavBar from 'components/common/navbar/NavBar'
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'

import {getDetail} from 'network/detail'

export default {
    name: 'Detail',
    // 怎么能够拿到iid呢？
    components:{
    //NavBar
    DetailNavBar,
    DetailSwiper
    },
    data(){
        return {
          iid: null,
          topImages:[]
        }
    },
    created(){
        // console.log(this.$route.params);
        // 1.保存传入的iid
        this.iid = this.$route.params.iid

        // 2.根据iid来请求详情数据
        // 直接在这里请求不好
        // 最好对我们这些东西都做一层封装
        getDetail(this.iid).then(res=>{
            console.log(res)
            // this.res = res
            // 不要向上面这样做,要分离一下

            // 1.获取顶部的图片轮播数据
            this.topImages = res.result.itemInfo.topImages

            // 接下来我们用轮播图对得到的数据进行展示
        })
    }
}
</script>

<style scoped>

</style>

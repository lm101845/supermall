<template>
    <!-- <div>{{iid}}</div> -->
    <div id="detail">
        <!-- <nav-bar><div slot="center">详情页</div></nav-bar> -->
        <!-- 这个导航还是稍微有些复杂的，那就不要在这里做了 -->
        <detail-nav-bar class="detail-nav"/>
        <scroll class="content" ref="scroll">
            <!-- scroll必须要有固定的高度 -->
            <detail-swiper :top-images="topImages"/>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detail-info='detailInfo'></detail-goods-info>
            <detail-param-info :param-info="paramInfo"></detail-param-info>
            <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
            <goods-list :goods="recommends"></goods-list>
        </scroll>
        <!-- <h2>详情页：{{iid}}</h2> -->
    </div>
</template>

<script>
// import NavBar from 'components/common/navbar/NavBar'
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from  './childComps/DetailCommentInfo'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
import {debounce} from 'common/utils'
import {itemListenerMixin} from 'common/mixin'

export default {
    name: 'Detail',
    // 怎么能够拿到iid呢？
    components:{
    //NavBar
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    Scroll,
    GoodsList
    },
    mixins:[itemListenerMixin],
    data(){
        return {
          iid: null,
          topImages:[],
        //   goods:null
        //   写空的话会报错，因为默认default是object
          goods:{},
          shop:{},
          detailInfo:{},
          paramInfo:{},
          commentInfo:{},
          recommends:[],
        //itemImgListener:null
        //itemImgListener属性Home.vue里面也有，所以也把它进行混入
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
            // console.log(res)
            // this.res = res
            // 不要向上面这样做,要分离一下
            const data = res.result;
            // 1.获取顶部的图片轮播数据
            // this.topImages = res.result.itemInfo.topImages
            this.topImages = data.itemInfo.topImages

            // 接下来我们用轮播图对得到的数据进行展示
            // 2.获取商品信息
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

            // 3.创建店铺信息的对象
            this.shop = new Shop(data.shopInfo)

            // 4.获取商品详细信息
            this.detailInfo = data.detailInfo

            // 5.获取参数信息
            this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

            // 6.获取评论信息
            // 有些商品是没有评论信息的，所以最好做一个判断
            if(data.rate.cRate !== 0){
                this.commentInfo = data.rate.list[0]
            }
        })

        getRecommend().then(res=>{
            // console.log(res);
            this.recommends = res.data.list
        })
    },
    mounted() {
      console.log('mounted');
    },
    // deactivated() {
    // 不能在这里取消 
    //     console.log('deactivated');
    // },
    destroyed() {
        // console.log('destroyed');
        this.$bus.$off('itemImageLoad',this.itemImgListener)

    },
    methods:{
        imageLoad(){
            this.$refs.scroll.refresh()
        }
    }
}
</script>

<style scoped>
    #detail{
        position: relative;
        z-index: 9;
        background-color: #fff;
        /* 详情页很多地方是透明的，所以并没有完全盖上，给它加个背景色就好了 */
        height: 100vh;
    }

    .content{
        /* 如何给它固定高度有2种方式 */
        /* 一种是使用cacul给它进行计算 */
        /* 另一种方式是通过定位 */
        height: calc(100% - 44px);
    }

    .detail-nav{
        position: relative;
        /* 能用相对定位就用相对定位，不要用绝对定位 */
        /* 因为相对定位它依然保持在自己原来的位置，只是占着茅坑不拉屎 */
        z-index: 9;
        background-color: #fff;
    }
</style>

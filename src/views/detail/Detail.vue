<template>
    <!-- <div>{{iid}}</div> -->
    <div id="detail">
        <!-- <nav-bar><div slot="center">详情页</div></nav-bar> -->
        <!-- 这个导航还是稍微有些复杂的，那就不要在这里做了 -->
        <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
        <!-- 属性写titleClick,但是传值的话写title-click -->
        <!-- 但是事件的话可以写驼峰，写@titleClick也行 -->
        <scroll class="content" 
                ref="scroll" 
                @scroll="contentScroll" 
                :probe-type="3">
            <!-- scroll必须要有固定的高度 -->
            <!-- <div>{{$store.state.cartList.length}}</div> -->
            <!-- <ul>
                <li v-for="item in $store.state.cartList">
                    {{item}}
                </li>
            </ul> -->
            <detail-swiper :top-images="topImages"/>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detail-info='detailInfo' @imageLoad="imageLoad"></detail-goods-info>
            <detail-param-info :param-info="paramInfo" ref="param"></detail-param-info>
            <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
            <goods-list :goods="recommends" ref="recommend"></goods-list>
        </scroll>
        <!-- <h2>详情页：{{iid}}</h2> -->
        <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
        <back-top @click.native="backTop" v-show="isShowBackTop"/>
        <!-- <toast :message="message" :show="show"></toast> -->
        <!-- 如果直接传字符串的话是可以不用加这个冒号的 -->
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
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
// import BackTop from 'components/content/backTop/BackTop'
// 放到mixin里面


import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
import {debounce} from 'common/utils'
import {itemListenerMixin,backTopMixin} from 'common/mixin'
// import {BACK_POSITION} from 'common/const'

import {mapActions} from 'vuex'

// import Toast from 'components/common/toast/Toast'
// 到时候再删
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
    DetailBottomBar,
    Scroll,
    GoodsList,
    // Toast
    // BackTop
    },
    mixins:[itemListenerMixin,backTopMixin],
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
         //itemImgListener:null,
         //itemImgListener属性Home.vue里面也有，所以也把它进行混入
         // refresh:null
         themeTopYs:[],
         getThemeTopY:null,
         currentIndex:0,
        //  isShowBackTop: false,  放到mixin里面
         message:'',
         show:false
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

            //  this.$nextTick(()=>{
                //根据最新的数据，对应的DOM是已经被渲染出来
                //但是图片依然是没有加载完的(目前获取到的offsetTop不包含其中的图片的)
                // offsetTop值不对的时候，都是因为图片的问题
                // 我们也应该等到这些图片加载完之后，给这些图片重新赋值
                    //  this.themeTopYs = []
                    // // updated会更新比较频繁，只要有改变就会更新
                    //  this.themeTopYs.push(0)
                    //  // 组件没有offsetTop属性，前面必须要加一个$el
                    //  this.themeTopYs.push(this.$refs.params.$el.offsetTop)
                    //  // undefined
                    //  this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
                    //  // undefined
                    //  this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
                    //  // 所以这个代码不能放到mounted里面
                    //  console.log(this.themeTopYs);
            //  })
        
        })
        
        // 3.请求推荐数据
        getRecommend().then(res=>{
            // console.log(res);
            this.recommends = res.data.list
        })

        // 4.给getThemeTopY赋值(并且进行防抖操作)
        this.getThemeTopY = debounce(()=>{
            // console.log('---------');
              this.themeTopYs = []
              // updated会更新比较频繁，只要有改变就会更新
               this.themeTopYs.push(0)
               // 组件没有offsetTop属性，前面必须要加一个$el
               this.themeTopYs.push(this.$refs.param.$el.offsetTop)
               // undefined
               this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
               // undefined
               this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
               this.themeTopYs.push(Number.MAX_VALUE)
               // 所以这个代码不能放到mounted里面
               console.log(this.themeTopYs);
        },100)

    },
    mounted() {
        //console.log('mounted');
        // this.themeTopYs.push(0)
        // // 组件没有offsetTop属性，前面必须要加一个$el
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        // // undefined
        // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        // // undefined
        // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        // // 所以这个代码不能放到mounted里面
        // console.log(this.themeTopYs);
    },
    // deactivated() {
    // 不能在这里取消 
    //     console.log('deactivated');
    // },
    // updated() {
    //          this.themeTopYs = []
    //         // updated会更新比较频繁，只要有改变就会更新
    //          this.themeTopYs.push(0)
    //          // 组件没有offsetTop属性，前面必须要加一个$el
    //          this.themeTopYs.push(this.$refs.params.$el.offsetTop)
    //          // undefined
    //          this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
    //          // undefined
    //          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
    //          // 所以这个代码不能放到mounted里面
    //          console.log(this.themeTopYs);
    // },
    destroyed() {
        // console.log('destroyed');
        this.$bus.$off('itemImageLoad',this.itemImgListener)
    },
    methods:{
        ...mapActions(['addToCart']),
        // 告诉它我们要映射这个函数
        imageLoad(){
            // this.$refs.scroll.refresh()
            // 但是这样调用的话会比较频繁，我们这里要做一个防抖
            this.refresh()
            // 在这里写肯定就对了
            // bug是解决了，但是这个调用的过于频繁了
            this.getThemeTopY()
             
        },
        titleClick(index){
            // console.log(index);
            this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
        },
        contentScroll(position){
            // console.log(position);
            // 1.获取Y值
            const positionY = -position.y
            // 2.position和主题中的值进行对比
            // [0,7838,9120,9452,非常大的值(比如MAX_VALUE)]
            // console.log(Number.MAX_VALUE);
            // positionY在0和7938之间，index = 0
            // positionY在7938和9120之间，index =1
            // positionY在9120和9452之间，index = 2
            // positionY在9452以上，index = 3
            //  positionY在9452和非常大的值之间，Index = 3

            // 我们要把值都给遍历出来
            // for(let i in this.themeTopYs){
            //     // console.log(i);
            //     // if(positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i+1]){
            //     //     console.log(i);
            //     // }
            //     // 但是这样写有一点问题，这个i的类型是一个字符串
            // }
            let length = this.themeTopYs.length
            for(let i = 0; i < length -1;i++){
                // 最后一层(MAX_VALUE)不需要遍历，所以是length-1
                // 使用这种最笨的方法，i肯定是数字了
                // console.log(i);

                // 方法1：普通做法:很麻烦
                // if(this.currentIndex !== i &&((i < length - 1  && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])||(i === length - 1 && positionY > this.themeTopYs[i]))){
                //     // console.log(i);
                //     this.currentIndex = i;
                //     // console.log(this.currentIndex);
                //     this.$refs.nav.currentIndex = this.currentIndex
                // }
                
                // 方法2：hack做法(但是这个做法我遇到了bug，第二个值是undefined，)
                if(this.currentIndex !== i && (positionY >= this. themeTopYs[i] && positionY <this. themeTopYs[i+1])){
                    this.currentIndex = i;
                    this.$refs.nav.currentIndex = this.currentIndex
                }
            }
                // 3.是否显示回到顶部
                this.listenShowBackTop(position)
                // this.isShowBackTop = -position.y > 1000
                // 这个是不能抽到mixin里面去的
                // methods只能合并这些大的函数，函数内部的东西是不能抽的
                // 要想抽只能这样抽
                // this.listenShowBackTop(position)
        },
    //     backTop(){
    //     this.$refs.scroll.scrollTo(0, 0)
    //   },   放到mixin里面
            // listenShowBackTop(){
            // // 你要真想抽的话，可以在这里再弄一个函数，叫做demo
            //     this.isShowBackTop = -position.y > 1000
            // }
        addToCart(){
            // console.log('父组件');
            // 1.获取购物车需要展示的信息
            const product = {}
            product.image = this.topImages[0]
            product.title = this.goods.title;
            product.desc = this.goods.desc;
            // product.price = this.DetailGoodsInfo.newPrice;
            // 不要用newPrice,这个价格是一个区间
            product.newPrice = this.goods.nowPrice;
            product.iid = this.iid
            // 记住：iid一定要传过去，商品的唯一标识，说明顾客到底买了哪个商品

            // 2.将商品添加到购物车中
            // 2个知识点：Promise、mapActions
            // this.$store.cartList.push(product)
            // 虽然可以添加，但是不要这样来做
            // 修改任何state里面的东西都要通过mutation
            // this.$store.commit('addToCart',product)
            // this.$store.dispatch('addToCart',product)
            this.$store.dispatch('addToCart',product).then(res=>{
            // this.addToCart(product).then(res=>{
                // console.log(res);
                //你现在只是把这句话给打印了出来，我们需要你做的是把这句话给显示出来
                // 我们这里以toast方式进行显示
                // this.show = true
                // this.message = res

                // setTimeout(()=>{
                //     this.show = false;
                //     this.message = ''
                //     // 把内容也清空一下
                // },1500)
            // dispacth会返回一个promise

            // 3.添加到购物车成功
            // 但是这里写不好
            // 不是你一点击按钮就添加到购物车成功了，还要里面要完成一系列操作
            // console.log(this.$toast);
            this.$toast.show(res,1000)
            // 是没有$toast的，到时候再封装啊
            })
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
        height: calc(100% - 93px);
        /* 以前是100%-44px的 */
        /* height: calc(100% - 44px - 49px);这样写不行 */
    }

    .detail-nav{
        position: relative;
        /* 能用相对定位就用相对定位，不要用绝对定位 */
        /* 因为相对定位它依然保持在自己原来的位置，只是占着茅坑不拉屎 */
        z-index: 9;
        background-color: #fff;
    }
</style>

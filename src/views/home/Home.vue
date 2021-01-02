<template>
  <div id="home" class="wrapper">
    <!-- 这里是首页，可以用id了 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick"
                   ref="tabControl1" 
                   class="tab-control"
                   v-show="isTabFixed"/>
    <!-- 把这个拷贝一份  -->
    <!-- 给它加上滚动框架 -->
    <!-- <div class="wrap">
      <div class="content"> -->
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore"> 
    <home-swiper :banners="banners"
                @swiperImageLoad="swiperImageLoad"/>
      <!-- 以后这里要插入东西，所以要用双标签 -->
      <!-- <swiper>
        <swiper-item v-for="item in banners">
          <a :href="item.link">
            <img :src="item.image" alt="" />
          </a>
        </swiper-item>
      </swiper> -->
      <!-- 我们只要从banners里面取出数据，插入到里面就可以了 -->
      <!-- 但是这样写的话Home.vue里面的东西太多了，我们需要进行抽离 -->
      <!-- Home.vue文件里面只放一些主要的逻辑 -->
      <recommend-view :recommends="recommends"/>
      <feature-view></feature-view>
      <!-- <tab-control class="tab-control"  -->
      <tab-control :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick"
                   ref="tabControl2"/>
      <!-- 给tab-control加这个:class="{fixed:isTabFixed}"行不通 -->
      <!-- <good-list :goods="goods['pop'].list"/> -->
      <!-- 这个不要写死了 -->
      <!-- 但是这个东西有点太长了，我们用计算属性比较好-->
      <!-- 这个是good-list,我写成了goods-list -->
      <good-list :goods="showGoods"/>
      <!-- 这样就变短了，就很好了 -->
      </scroll>
      <!-- <div>呵呵呵</div> -->
      <back-top @click.native="backClick" v-show="isShowBackTop"/>
      <!-- <back-top @backClick="backClick"></back-top> -->
      <!-- 我干脆监听组件的点击比较好 -->
      <!-- 但是组件能不能直接监听点击事件是个问题,答案是不能-->
      <!-- 必须要加上一个原生的native修饰符才可以监听组件点击 -->
      <!-- </div>
    </div> -->
  </div>
</template>

<script> 
// 导入的东西很多，希望按顺序导入比较好
// 相同的导入放到一块：独立组件放一块，公共组件放一块，方法放一块
import HomeSwiper from "./childComps/HomeSwiper";
// 这个就在当前文件里面，就不用别名了
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl"
import GoodList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'
// 这个名字叫GoodList，我写成了GoodsList
import {getHomeMultidata,getHomeGoods} from "network/home";
import {debounce} from "common/utils";
import {itemListenerMixin} from 'common/mixin'

// import BScroll from 'better-scroll';
// 不是写在这里的
// 因为这里我不需要export导出，所以可以用大括号。

// import Swiper from 'components/common/swiper/Swiper'
// import SwiperItem from 'components/common/swiper/SwiperItem'
// 如果没有swiper里的index.js文件，你需要像上面这样导入

// import { Swiper, SwiperItem } from "components/common/swiper";

// import BScroll from 'better-scroll'
// 不要在组件里面直接使用better-scroll！！这样做有风险，到时候这个框架不再维护了修改就很难了

export default {
  name: "Home",
  components: {
    // 写组件的时候，最好也是物以类聚
    // 和上面的import顺序最好保持一致
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodList,
    // 这个也写成GoodList吧
    Scroll,
    BackTop
  },
  mixins:[itemListenerMixin],
  data() {
    // 需要用data这个东西把数据保存起来
    return {
        // result:null
        // 这个变量属于组件，所以不会被回收
        // 但是这样保存数据太乱了，所以我们需要单独保存
        banners: [],
        recommends: [],
        // 这里面的数据是不会被销毁的
        goods:{
          // 默认情况下没有任何数据的
          // 默认把每个类型的第一页数据都请求下来
          // 至于第二页，第三页，只有它们在选项中进行了上拉加载功能后才会把更多的数据请求到
          'pop':{page: 0,list:[]},
          'new':{page: 0,list:[]},
          'sell':{page: 0,list:[]},
        },
        currentType:'pop',
        isShowBackTop: false,
        tabOffsetTop: 0, 
        // 设置吸顶效果 
        isTabFixed: false,
        saveY: 0,
        // itemImgListener:null
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  // destroyed() {
  //   console.log('home destroyed');
  // },
  activated() {
    // console.log('activated,设置位置');
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
    // 不写refresh可能会出现一些问题，导致页面无法滚动
  },
  deactivated() {
    // console.log('deactivated，记录位置');
    // this.saveY = -1000
    // this.saveY = this.$refs.scroll.scroll.y
    // 1.在离开的时候保存y值
    this.saveY = this.$refs.scroll.getScrollY()
    // console.log(this.saveY);

    // 2.取消全局事件的监听
    // this.$bus.$off('itemImageLoad',函数)
    this.$bus.$off('itemImageLoad',this.itemImgListener)
    // 但是这里你不能只传一个事件，你还要传一个函数，说明取消哪个事件
  },
  created() {
    // created是个比较特殊的函数，它是当组件创建完后就会执行的函数
    // 所以我们最好只在里面写主要逻辑
    // 至于里面更加详细的逻辑的话，不要在里面写

      // 等组件创建完成之后就发送网络请求，进行数据的展示
      // 1.请求多个数据
      // getHomeMutidata()表示调用这个函数
    this.getHomeMultidata()
    // 详细的东西在methods里面写，这里只调用一下函数即可
    // 因为函数名起的一样，所以你必须写this，否则它执行的是imports里面导入的函数

      // 2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

    // 3.监听item中图片加载完成(不要放到created里面！！！)
    // this.$bus.$on('itemImageLoad',() => {
    //     // console.log('-------------');
    //     // console.log(this.$bus);
    //     // this.$refs.scroll.scroll.refresh()
    //     this.$refs.scroll.refresh()
    //     // 但是这个代码的执行频率会很高
    //     // 犯了一个错误：在created里面拿this.$refs
    //     // console.log(this.$refs.scroll.refresh);
    //     // console.log('----------------');
    // })

    // 3.赋值
    // this.tabOffsetTop = this.$refs.tabControl
    // 在这里是拿不到的，是undefined
    // 因为它在created里面，应该放到mounted里面
  },
  mounted() {
    // 因为我写了mixin.js，所以这里可以不用写代码了
    // 1.图片加载完成的事件监听
    // 相当于这个refresh就是返回值了
    // const refresh = debounce(this.$refs.scroll.refresh,50)
    // 这他娘的到底是哪里有问题啊？？？
    // func = this.$refs.scroll.refresh
    // // const refresh = this.debounce(this.$refs.scroll.refresh,500)
      // 3.监听item中图片加载完成
      // 第一次timer没有值，就是null
      // 2.
      // 3.
      // 30
    //  const refresh = this.debounce(this.$refs.scroll.refresh,200)
    //  const refresh = debounce(this.$refs.scroll.refresh,100)

    //  对监听的事件进行保存
    // this.itemImgListener = ()=>{
    //   refresh()
    // }

          // // console.log(this.$bus);
        // // this.$refs.scroll.scroll.refresh()
        // this.$refs.scroll.refresh()
        // 但是这样调的话，调用refresh就有点频繁了
        // 所以我们不要让它执行这个函数了
        // console.log('-------------');
        // // 犯了一个错误：在created里面拿this.$refs
        // // console.log(this.$refs.scroll.refresh);
        // // console.log('----------------');
        // // 如果没有防抖，refresh可能要执行30次
        // // 如果有防抖，可能refresh只要执行一次就可以了
        // // refresh('11111','2222')
        // refresh()
        // 这是一个闭包，对上面的变量refresh有一个引用，所以不会销毁
      // this.$bus.$on('itemImageLoad',this.itemImgListener)


    // 2.获取tabControl的offsetTop
    // 所有的组件都有一个属性$el，用于获取组件中的元素
    // 元素中才有offsetTop属性
    // 使用document.querySelector拿是不准确的
    // 这个拿到的是一个组件对象
    // 但是组件有一个属性叫offsetTop吗?
    // console.log(this.$refs.tabControl.offsetTop);
    // 显示undefined，说明没有
    // console.log(this.$refs.tabControl.$el.offsetTop);
    // 但是这里拿到的offsetTop是不准确的，没有包含图片加载完后的高度
    // this.tabOffsetTop = this.$refs.tabControl
  },
  

  // mounted() {
  //   // this.$refs.aaa
  //   // 通过这样就可以拿到上面的div元素了
  //   this.scroll = new BScroll(this.$refs.wrapper,{
  //     // 这样写我在这里拿到的永远是上面的swapper
  //   })
  // },
  methods: {
    // 事件监听相关的方法
    // debounce这个函数在其他地方也可能会被用到
    // 像这种防止抖动的功能型函数一般不要写到某个组件里面
      // debounce(func,delay){
      //   if(timer) clearTimeout(timer)
      //   timer = setTimeout(()=>{
      //    func.apply(this,args)
      //   },delay)
      // },
      tabClick(index){
        // console.log(index);
        switch(index){
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            // 因为我们现在没有其他情况，写不写default都可以
            break
        }
        // this.$refs.TabControl1.currentIndex = index;
        // this.$refs.TabControl2.currentIndex = index;
        // 这2行代码主要用于：点击新款时往上拉还是显示新款
        // 但是我写了会报错，显示没有设置currentIndex,我先不写吧
      },
      backClick(){
        // console.log('backClick');
        // 点击了没有反应
        // 说明组件是不能直接监听点击的
        // 如果要直接监听点击，必须做一件事情
        // this.$refs.scroll.scroll.scrollTo(0,0,500);
        // 先拿到scroll这个组件，再调用scroll组件的scroll属性，再调用scrollTo方法
        // this.$refs.scroll.message;
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position){
        // console.log(position);
        // position.y > 1000

        // 1.判断BackTop是否显示
        this.isShowBackTop = (-position.y) > 1000
        // 这个y值永远是负数，要先把它转为正数再说

        // 2.决定tabControl是否吸顶(position:fixed)
        this.isTabFixed = (-position.y) > this.tabOffsetTop 
      },
      // loadMore(){
      //   // console.log('上拉加载更多');
      //   this.getHomeGoods(this.currentType)
      //   this.$refs.scroll.scroll.refresh()
      //   // 一旦调用refresh它就会重新计算可滚动的区域
      // },
      loadMore(){
        // console.log('加载更多的方法');
        // 我们需要针对类型加载更多的数据
        // 点击流行，就给流行这个类加载更多
        // 点击新款，就给新款这个类加载更多
        this.getHomeGoods(this.currentType)
      },
     swiperImageLoad(){
          // console.log(this.$refs.tabControl.$el.offsetTop);
          // 但是它调用的频率也是很高的，它调用了4次(轮播图有4张图片)
          // 我们只需要它调用一次就可以了
          this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },
    // 网络请求相关的方法
     getHomeMultidata(){
        getHomeMultidata().then(res => {
      // 然后后面加上.then就可以拿到请求的数据了
      // console.log(res);
      // 但是数据在这里直接用不合适，无法保存
      // 所以我们弄一个变量保存这个东西
      // this.result = res;
      // this在箭头函数里面网上找作用域
      // created里面是有this的
      // console.log(this.result);
      // 不能这样验证数据是否存在，因为这是一个异步操作
      // 在上面的函数没有执行完的时候就直接打印了，肯定是打印不到的
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        });
     },

     getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res=>{
            // 箭头函数的指向会向上找，而我们这里的this就是我们当前的组件对象了
            // console.log(res);
            // 注意：res是局部变量，到时候函数执行完它会消失的
            // 这里的res是pop的前30条数据，而且是第一页
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1
            // 再做一件事情，把它的页码加1

            // 完成上拉加载更多
            // this.$refs.scroll
            // 但是我们不会在这里写，会封装一个函数

            this.$refs.scroll.finishPullUp()
        })
     }
  }
}
</script>

<style scoped>
#home{
  /* padding-top: 44px; */
  height: 100vh;
  /* vh叫viewport height(视口高度) */
  position: relative;
}


.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* 在使用浏览器原生滚动时，为了让导航不跟随一起滚动才用了下面的属性 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}

.tab-control{
  /* position: sticky; */
  /* 代码写到后面会发现这个sticky属性已经不起效果了 */
  /* 因为已经不是原生的滚动了，是better-scroll在帮我们滚动，此时系统无法检查滚动到哪里 */
  /* 这个属性可以实现吸顶效果 */
  /* 移动端用这个属性特别好，但是如果要适配ie的话，这个属性就不要乱用了 */
  /* top: 44px; */
  /* 这个top属性是和sticky配套的 */
  position: relative;
  z-index: 9;
  /* z-index只对定位的元素起效果 */


}

/* .content{ */
  /* height: 300px;
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 51px;
} */

  /* 因为是style scoped，所以样式不会作用到前面的div上 */
  /* 这里面的样式只会针对当前组件scroll的content来起到作用 */
  
.content{
  overflow: hidden;
  position:absolute;
  top: 44px;
  /* height: 300px; */
  bottom: 49px;
  left: 0;
  right: 0;
}

/* .fixed{
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
} */
/* 这个办法行不通 */
</style>

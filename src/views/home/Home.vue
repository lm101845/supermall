<template>
  <div id="home">
    <!-- 这里是首页，可以用id了 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />
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
    <feature-view/>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"/>
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
      <li>列表31</li>
      <li>列表32</li>
      <li>列表33</li>
      <li>列表34</li>
      <li>列表35</li>
      <li>列表36</li>
      <li>列表37</li>
      <li>列表38</li>
      <li>列表39</li>
      <li>列表40</li>
      <li>列表41</li>
      <li>列表42</li>
      <li>列表43</li>
      <li>列表44</li>
      <li>列表45</li>
      <li>列表46</li>
      <li>列表47</li>
      <li>列表48</li>
      <li>列表49</li>
      <li>列表50</li>
      <li>列表51</li>
      <li>列表52</li>
      <li>列表53</li>
      <li>列表54</li>
      <li>列表55</li>
      <li>列表56</li>
      <li>列表57</li>
      <li>列表58</li>
      <li>列表59</li>
      <li>列表60</li>
      <li>列表61</li>
      <li>列表62</li>
      <li>列表63</li>
      <li>列表64</li>
      <li>列表65</li>
      <li>列表66</li>
      <li>列表67</li>
      <li>列表68</li>
      <li>列表69</li>
      <li>列表70</li>
      <li>列表71</li>
      <li>列表72</li>
      <li>列表73</li>
      <li>列表74</li>
      <li>列表75</li>
      <li>列表76</li>
      <li>列表77</li>
      <li>列表78</li>
      <li>列表79</li>
      <li>列表80</li>
      <li>列表81</li>
      <li>列表82</li>
      <li>列表83</li>
      <li>列表84</li>
      <li>列表85</li>
      <li>列表86</li>
      <li>列表87</li>
      <li>列表88</li>
      <li>列表89</li>
      <li>列表90</li>
      <li>列表91</li>
      <li>列表92</li>
      <li>列表93</li>
      <li>列表94</li>
      <li>列表95</li>
      <li>列表96</li>
      <li>列表97</li>
      <li>列表98</li>
      <li>列表99</li>
      <li>列表100</li>
      <!-- 这样写，暂时解决下面的东西 -->
    </ul>
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

import {getHomeMultidata,getHomeGoods} from "network/home.js";
// 因为这里我不需要export导出，所以可以用大括号。

// import Swiper from 'components/common/swiper/Swiper'
// import SwiperItem from 'components/common/swiper/SwiperItem'
// 如果没有swiper里的index.js文件，你需要像上面这样导入

// import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "Home",
  components: {
    // 写组件的时候，最好也是物以类聚
    // 和上面的import顺序最好保持一致
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl
  },
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
        }
    };
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
  },

  methods: {
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
            // console.log(res);
            // 注意：res是局部变量，到时候函数执行完它会消失的
            // 这里的res是pop的前30条数据，而且是第一页
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1
            // 再做一件事情，把它的页码加1
        })
     }
  }
};
</script>

<style scoped>

#home{
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control{
  position: sticky;
  /* 这个属性可以实现吸顶效果 */
  /* 移动端用这个属性特别好，但是如果要适配ie的话，这个属性就不要乱用了 */
  top: 44px;
  /* 这个top属性是和sticky配套的 */
}
</style>

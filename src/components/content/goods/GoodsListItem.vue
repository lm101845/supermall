<template>
    <div class="goods-item" @click="itemClick">
      <!-- 这个根上点击就跳转到详情页 -->
        <!-- <img :src="goodsItem.show.img" alt="" @load="imageLoad"> -->
        <!-- <img :src="showImage" alt="" @load="imageLoad"> -->
        <img v-lazy="showImage" alt="" @load="imageLoad">
        <!-- goodsItem我写成了goodsItme，找了快半个小时错。。。 -->
        <div class="goods-info">
            <p>{{goodsItem.title}}</p>
            <!-- 这个之前也拼写错了 -->
            <span class="price">{{goodsItem.price}}</span>
            <span class="collect">{{goodsItem.cfav}}</span>
            <!-- Item全写错了，全写成Itme了。。。 -->
        </div>
    </div>
</template>

<script>
export default {
    name: "GoodsListItem",
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed:{
      showImage(){
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods:{
      imageLoad(){
        // console.log('imageLoad');
        // 思路2
        this.$bus.$emit('ItemImageLoad')
        // 都进入到详情页了，首页就不用再监听这个事件了


        // 思路1：通过路由来做——老师没按这个做
        // if(this.$route.path.indexOf('/home')){
        //   this.$bus.$emit('homeItemImageLoad')
        // }else if(this.$route.path.indexOf('/detail')){
        //   this.$bus.$emit('detailItemImageLoad')
        // }
        // console.log(this.$bus);
      },
      itemClick(){
        // console.log('跳转到详情页');
        // console.log(this.product.iid);
        this.$router.push('/detail/' + this.goodsItem.iid)
        // 这个goodsItem就是那个图片对象
        // 这里最好用push，之前很多地方用的是replace
        // 用push到时候方便返回(到时候调用push的back方法就可以返回了)
        // 你在调到详情页的同时也需要传递过来一些参数
        // 你需要把我们点击的商品的id给我们
        // query的方式是下面这样做的：
        // this.$router.push({
        //   path:'/detail',
        //   query:{

        //   }
        // })
      }
    }
}
</script>

<style scoped>
    /* 样式这个东西老师让我们自己写了 */
    /* 直接代码复制了 */
    /* 我现在也没时间自己写了，先复制了，以后有时间自己再看看吧 */
    .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
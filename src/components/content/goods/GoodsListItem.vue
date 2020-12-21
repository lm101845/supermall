<template>
    <div class="goods-item">
        <img :src="goodsItem.show.img" alt="" @load="imageLoad">
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
    methods:{
      imageLoad(){
        // console.log('imageLoad');
        this.$bus.$emit('itemImageLoad')
        // console.log(this.$bus);
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
<template>
    <div class="goods">
        <!-- 在里面要遍历很多小的item -->
        <!-- 这些小的item本身也是一个组件 -->
        <goods-list-item v-for="item in goods" :goods-item="item"/>
        <!-- item里面并不需要使用插槽，所以使用单标签就可以了 -->
        <!-- 每一个小组件到时候都要分配一个小数据给它 -->
        <!-- {{goods}} -->
        <!--我们要根据传进来的goods来进行for循环，决定遍历多少个item-->
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
    name: 'GoodsList',
    components:{
       GoodsListItem
    //    我在GoodsListItem前面写了个name,导致报错了
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .goods{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 2px;
    }
</style>
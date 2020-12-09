<template>
    <div class="recommend">
        <div v-for="item in recommends" class="recommend-item" :key=item.index>
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'RecommendView',
    props:{
        // 定义props来获取数据
        // 数据在首页里面，我们从首页里获取
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    /* 接下来要写样式，老师都不想写了，后来还是写了*/
    /* img图片太大了 */
    .recommend{
        display:flex;
        width:100%;
        text-align: center;
        font-size: 12px;
        padding: 10px 0 20px;
        border-bottom: 8px solid #eee;
    }

    .recommend-item{
        flex:1
        /* 这样可以均等分 */
    }

    .recommend-item img{
        width: 70px;
        height: 70px; 
        margin-bottom: 10px;
    }
</style>
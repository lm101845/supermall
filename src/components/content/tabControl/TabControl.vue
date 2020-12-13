<template>
    <div class="tab-control">
        <!-- 如果在首页里面就填充流行、新款、精选这3个文字 -->
        <!-- 如果在分类里面就填充综合、新品、销量这3个文字-->
        <!-- 文字不能确定，填充几个其实也不确定 -->
       <!-- 但是我们这里没有用插槽 -->
       <!-- 因为我们发现它们长的样子在首页和分类里面完全一样(文字颜色都一样) -->
        <!-- <div v-for="item in titles" class="tab-control-item"> -->
        <!--下面是升级版-->
        <div v-for="(item,index) in titles" 
             class="tab-control-item" 
             :class="{active:index === currentIndex}"
             @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentIndex:0
            // 弄一个变量记录下当前谁被选中
        }
    },
    methods: {
        itemClick(index){
            // 添加点击事件，点哪个哪个变红，下面有小横杠
            this.currentIndex = index;
        }
    },
}       
</script>

<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        /* height和line-height放到上面，下面是可以继承过来的 */
        /* background-color: pink; */
        background-color: #fff;
    }

    .tab-control-item{
        flex:1;
        /* height: 40px;
        line-height: 40px; */
    }

     .tab-control-item span{
         padding: 5px;
         /* 这样横杠就不会挨得太近了 */
     }

    .active{
        color: var(--color-high-text);
        /* border-bottom: 3px solid var(--color-tint); */
        /* 但是这个class是在div上面定义的，这样就导致下面的横杠太长了(占据了三分之一) */
        /* 所以最好给span加上横杠比较合适 */
    }

    .active span{
        border-bottom: 3px solid var(--color-tint);
        /* 但是写在这里又挨的太近了 */
    }
</style>
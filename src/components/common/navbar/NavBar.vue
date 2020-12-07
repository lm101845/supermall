<template>
    <div class="nav-bar">
        <!-- 这里写id不好了，导航每个页面都有 -->
        <!-- 因为有3个插槽所以要写名字 -->
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default{
        name:'NavBar'
    }
</script>

<style scoped>
    /* 左边固定60px，右边也是60px，中间全部占掉 */
    .nav-bar{
        display: flex;
        line-height: 44px;
        height: 44px;
        /*如果没有内容，则必须要有高度才行*/
        /* 一般导航的高度都是44px */
        text-align: center;
        /* 再来好看一点，加个阴影 */
        box-shadow: 0 1px 1px rgba(100,100,100,0.1);
        /* 这里不要急着写背景颜色，因为其他页面的导航条不是这个背景颜色 */
        /* 需要在home组件单独设置背景颜色 */
    }

    .left, .right{
        width: 60px;
        /* background-color: pink; */
    }

    .center{
        flex: 1;
        /* 左右是确定宽度，中间是flex:1，则表示剩下的空间全是中间的 */
        /* background-color: blue; */
    }
</style>
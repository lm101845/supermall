<template>
    <!-- <div class="back-top" @click="backClick"> -->
    <div class="back-top">
        <!-- 可以在这里选择监听事件的点击 -->
        <img src="~assets/img/common/top.png" alt="">
    </div>
</template>

<script>
export default {
    name:'BackTop',
    // methods: {
    //     backClick(){
    //         // console.log('回到顶部');
    //         // 但是在这里完成回到顶部不好
    //         this.$emit('backClick')
    //     }
    // },
}
</script>

<style scoped>
    .back-top{
        position:fixed;
        right: 8px;
        bottom: 55px;
    }

    .back-top img{
        width: 43px;
        height: 43px;
    }
</style>
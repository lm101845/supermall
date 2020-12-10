<template>
    <!-- 独立的组件都要有一个根，我们这里是div -->
    <div class="feature">
       <a href="https://act.mogujie.com/zzlx67">
            <img src="~assets/img/home/recommend_bg.jpg" alt="">
            <!-- 我忘了assets前面的~代表什么了 -->
       </a>
    </div>
</template>

<script>
export default {
    name:'FeatureView'
}
</script>

<style scoped>
    .feature img{
        width: 100%;
    }
</style>
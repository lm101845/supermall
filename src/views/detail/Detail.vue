<template>
    <!-- <div>{{iid}}</div> -->
    <div id="detail">
        <!-- <nav-bar><div slot="center">详情页</div></nav-bar> -->
        <!-- 这个导航还是稍微有些复杂的，那就不要在这里做了 -->
        <detail-nav-bar></detail-nav-bar>
    </div>
</template>

<script>
// import NavBar from 'components/common/navbar/NavBar'
import DetailNavBar from './childComps/DetailNavBar'
export default {
    name: 'Detail',
    // 怎么能够拿到iid呢？
    components:{
    //NavBar
    DetailNavBar
    },
    data(){
        return {
          iid: null
        }
    },
    created(){
        // console.log(this.$route.params);
        this.iid = this.$route.params.iid
    }
}
</script>

<style scoped>

</style>

<template>
    <div>
        <nav-bar>
            <div slot="left" class="back" @click="backClick">
                <img src="~assets/img/common/back.svg" alt="">
                <!-- 这个图标也要监听点击，点击完之后会返回 -->
            </div>
            <div slot="center" class="title">
                <div v-for="(item,index) in titles" 
                     class="title-item" 
                     :class="{active:index === currentIndex}"
                     @click="titleClick(index)">
                    {{item}}
                </div>
            </div>
        </nav-bar>
        <!-- 它们是一些标题，我们最好把这些标题定义出来，等会做一个遍历就好了 -->
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    name:'DetailNavBar',
    components:{
        NavBar
    },
    data(){
        return {
            titles:['商品','参数','评论','推荐'],
            // 这些字也是可以点击的，而且点击谁，谁到时候也会变成这个颜色
            currentIndex:0
        }
    },
    methods:{
        titleClick(index){
            this.currentIndex = index
        },
        backClick(){
            // this.$router.go(-1)
            this.$router.back()
        }
    }
}
</script>

<style scoped>
    .title{
        display: flex;
        font-size: 13px;
    }

    .title-item{
        flex: 1;
    }

    .active{
        color: var(--color-high-text)
    }

    .back img{
        margin-top: 12px;
    }
</style>

<template>
    <div class="wrapper" ref="wrapper">
        <!-- 我们到时候肯定要有一个better-scroll对象来管理它们的 -->
        <!-- ref这个属性一般绑定给子组件 -->
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name:'Scroll',
    props:{
      probeType:{
        type:Number,
        default:0
      },
      // pullUpLoad:{
      //   type:Boolean,
      //   default:false
      // }
    },
    data(){
        return {
            scroll: null,
            message:'哈哈哈'
        }
    },
    mounted() {
      // 1.创建BScroll对象
        // console.log(document.querySelector('wrapper'));
        // this.scroll = new BScroll(document.querySelector('wrapper'))
        //通过document.querySelector这种方式获取wrapper不太好
        // 如果别的地方也有class叫wrapper就会冲突

        // 在Vue里面如果你想要明确的拿到某个元素的话，它有一个办法，就是给这个东西直接绑定一个ref
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        // probeType:3
        // 不管三七二十一都把它设置为3好像也没有问题
        // 但是如果在不需要的情况下给它设置为3是影响性能的
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      // 2.监听我们滚动的位置
        this.scroll.on('scroll',(position)=>{
          // console.log(position);
          this.$emit('scroll',position)
        })
        // this.scroll.scrollTo(0,0)
        // 3.监听上拉事件
        // this.scroll.on('pullingUp',()=>{
        //   // console.log("上拉加载更多");
        //   this.$emit('pullingUp')
        // })
        console.log(this.scroll);
        // this.scroll.scrollHeight = 100000000
        // 肯定不能这样做的
        this.scroll.refresh()
        // 等图片加载完后去调用一次refresh
    },
    methods: {
      // 体现了一种封装的思想
      scrollTo(x, y, time=300) {
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll.refresh()
      }
    }
}
</script>

<style scoped>
    
</style>

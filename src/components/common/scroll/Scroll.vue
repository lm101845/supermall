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
        type: Number,
        default: 0
      },
      pullUpLoad:{
        type: Boolean,
        default: false
        // 默认不需要监听上拉事件的
      }
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

      // 2.监听滚动的位置
       if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll', position)
          // console.log(position); 
        })
        // console.log(this.scroll);
        // this.scroll.refresh()
        // 等图片加载完后去调用一次refresh
      }
        // this.scroll.scrollTo(0,0)
        // console.log(this.scroll);
        // this.scroll.scrollHeight = 100000000
        // 肯定不能这样做的

        // 3.监听scroll滚动到底部
        if(this.pullUpLoad){
          // 不是所有的组件都要监听上拉事件的
          // 还需要做一个判断
            this.scroll.on('pullingUp',() => {
              // console.log('监听到滚动到底部');
              this.$emit('pullingUp')
              // 这里没有参数，光监听这个事件就可以了
              // 上拉加载更多这个事件你也需要进行传出去
              // 告诉主页我已经滚到底部了
              // 然后让首页上拉加载更多
            })
        }
    },
    methods: {
      // 体现了一种封装的思想
      scrollTo(x, y, time = 300) {
          // this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
          this.scroll && this.scroll.scrollTo(x, y, time)
        // 确保scroll有值
        // 逻辑与前面为false后面就不会执行了
      },
      // finishPullUp(){
      //   this.scroll.finishPullUp()
      // },
      refresh() {
        // console.log('---------');
        this.scroll && this.scroll.refresh()
      },
     finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      }
    }
}
</script>

<style scoped>
    
</style>

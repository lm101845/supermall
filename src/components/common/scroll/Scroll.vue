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
     props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data(){
        return {
            scroll: null,
            message:'哈哈哈'
        }
    },
    mounted() {
        // console.log(document.querySelector('wrapper'));
        // this.scroll = new BScroll(document.querySelector('wrapper'))
        //通过document.querySelector这种方式获取wrapper不太好
        // 如果别的地方也有class叫wrapper就会冲突

        // 在Vue里面如果你想要明确的拿到某个元素的话，它有一个办法，就是给这个东西直接绑定一个ref
        // 1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      // 2.监听滚动的位置
      this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll', position)
      })

      // 3.监听上拉事件
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    methods: {
      // 体现了一种封装的思想
      scrollTo(x, y, time=300) {
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      }
    }
}
</script>

<style scoped>
    
</style>

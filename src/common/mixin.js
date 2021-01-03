import {debounce} from './utils'

export const itemListenerMixin = {
    // 不仅变量可以混入，很多东西都可以混入，比如组件components,方法(methods)
    data() { 
        return {
            itemImgListener: null,
            refresh: null
        }
    },
    mounted() {
          // 首页里面也有和这个一模一样的代码
        this.refresh = debounce(this.$refs.scroll.refresh, 100)
        // 这个相当于把防抖函数直接赋值到属性里面了
        
        this.itemImgListener = ()=>{
            refresh()
            // 闭包在引用外面的变量
        }

        this.$bus.$on('itemImageLoad', this.itemImgListener)
        // console.log('我是混入中的内容');
        // 我们把监听图片加载事件抽出到混入里面了
    },
}
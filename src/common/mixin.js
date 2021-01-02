import {debounce} from './utils'

export const itemListenerMixin = {
    // 不仅变量可以混入，很多东西都可以混入，比如组件components,方法(methods)
    data() { 
        return {
           itemImgListener:null 
        }
    },
    mounted() {
          // 首页里面也有和这个一模一样的代码
        const refresh = debounce(this.$refs.scroll.refresh,100)
        
        this.itemImgListener = ()=>{
            refresh()
        }

        this.$bus.$on('itemImageLoad', this.itemImgListener)
        // console.log('我是混入中的内容');
    },
}
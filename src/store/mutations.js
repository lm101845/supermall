// import { 
//     ADD_COUNTER,
//     ADD_TO_CART
// } from './mutation-types'

export default {
    // mutations唯一的目的就是修改state中的状态
        // mutation中的每个方法尽可能完成的事情比较单一一点
        // 这样将mutations里面的2个任务进行了分发
        // [ADD_COUNTER](state, payload) { 
        addCounter(state, payload) { 
            payload.count++
            // 多做一步，操作是可以跟踪的
        },
        // addToCart(state, payload) { 
       addToCart(state, payload) { 
            state.cartList.push(payload)
        }
}
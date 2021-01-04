// import { 
//     ADD_COUNTER,
//     ADD_TO_CART
// } from './mutation-types'

export default {
            // 所以把这个放到actions里面比较好
        // addToCart(state, payload) { 
        // addToCart(context, payload) { 
       addToCart(context, payload) { 
        // addToCart({ state, commit }}, payload) { 
            // 这种写法叫对象的解构
            // payload新添加的商品
            // 面试题:数组常用的方法有哪些? push/pop/unshift/shift/sort/reverse/map/filter/reduce/join
            // 方法1：for循环
            // let oldProduct = null
            // for (let item of state.cartList) { 
            //     if (item.iid === payload.iid) { 
            //         oldProduct = item
            //     }
            // }

            // 方法2：indexOf
            // let index = state.cartList.indexOf(payload)

            // 方法3：find
            // 查找之前数组中是否有该商品
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
 
            // 2.判断oldProduct\
            // 方法1
            // if (oldProduct) {
            //     oldProduct.count += 1
            // } else { 
            //     payload.count = 1
            //     state.cartList.push(payload)
            // }

            // 方法2：
            // if (index === -1) { 
            //     let oldProduct = state.cartList[index]
            //     oldProduct.count += 1
            // }

            // 方法3：
            if (oldProduct) {
                // oldProduct.count += 1
                context.commit('addCounter',oldProduct)
            } else { 
                payload.count = 1
                // context.state.cartList.push(payload)
                context.commit('addToCart',payload)
            }
        }
}
// 我对首页数据的所有请求都放在这里面
// 以后Home.vue面向home.js开发，十分的合理
import { request } from './request'

export function getHomeMultidata() { 
    // 函数名意思是获取首页的多个数据
    return request({
        url:'/home/multidata'
    })
}

export function getHomeGoods(type,page) { 
     // 函数名意思是获取首页的商品数据
    // 这个函数需要传入一些参数了(type和page)
    return request({
        url: 'home/data',
        // request.js里面已经设置了baseURL了，所以只要写后面的就可以了
        // 后面的?type=new&page=1像下面这样写
        params: {
            type,
            page
        }
    })
}














//补充知识1:函数的调用 ——>压入函数栈当中(保存函数调用过程中所有的变量)
// 函数调用结束，会弹出函数栈(释放函数中所有的变量)
// function test() { 
//     const names = ['why', 'aaa']
//     // 函数里面的东西都是局部变量，一旦函数执行完，这里面的东西全部都会被内存回收掉
// }

// test()

// test()
// 再调用一次的话函数会重新创建，调用完后再次消失


// 补充知识2：解构
// const totalNums = []
// const nums1 = [10, 20, 30]
// const nums2 = [100, 200, 300]

// // 方法1：遍历后Push进去
// for (let n of nums1) { 
//     totalNums.push(n)
// }

// // 方法2：结构
// // 相当于将nums1中的元素依次结构，依次赛道totalNums中去
// totalNums.push(...nums1)
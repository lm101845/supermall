// 我对首页数据的所有请求都放在这里面
// 以后Home.vue面向home.js开发，十分的合理
import { request } from './request'

export function getHomeMutidata() { 
    // 函数名意思是获取首页的多个数据
    return request({
        url:'/home/multidata'
    })
}

//补充知识:函数的调用 ——>压入函数栈当中(保存函数调用过程中所有的变量)
// 函数调用结束，会弹出函数栈(释放函数中所有的变量)
function test() { 
    const names = ['why', 'aaa']
    // 函数里面的东西都是局部变量，一旦函数执行完，这里面的东西全部都会被内存回收掉
}

test()

test()
// 再调用一次的话函数会重新创建，调用完后再次消失


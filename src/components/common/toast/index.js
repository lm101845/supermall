import Toast from './Toast'

const obj = {}

obj.install = function (Vue) { 
    // Toast.$el
    // Vue.extend()
    // console.log(Toast.$el);
    // undefined，说明当它执行install函数的时候，toast里面的东西还没有挂载
    // document.body.appendChild(Toast.$el)
    // 这下就可以添加到body上面了
    // console.log('执行了obj的install函数',vue);

    // 1.创建组件构造器
    const toastContrustor = Vue.extend(Toast)
    
    // 2.new的方式，根据组件构造器，可以创建出来一个组件对象
    const toast = new toastContrustor()

    // 3.将组件对象，手动挂载到某一个元素上
    toast.$mount(document.createElement('div'))

    // 4.toast.$el对应的就是div
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast;
    // 你只是把这个对象放到了原型上面，但是这个对象有自己的模版
    // 而这些模版里的内容没有添加到body上面
    // 所以这些模版是不可能显示的
    

}

export default obj
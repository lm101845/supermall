<template>
    <div class="toast" v-show="isShow">
        <div>{{message}}</div>
    </div>
</template>

<script>
export default {
   name:'Toast',
   props:{
    //    我们这里不是按照组件的方式去传的，所以不需要这个东西
    //    message:{
    //        type:String,
    //        default:''
    //    },
    //    show:{
    //    type:Boolean,
    //    default:false
    // },  
   },
   data(){
       return {
           message:'',
           isShow:false
       }
   },
   methods: {
       show(message='默认文字',duration=1000){
        //    duration = duration || 1000
        //    console.log('---------');
           this.isShow = true
           this.message = message

           setTimeout(() => {
               this.isShow = false
               this.message = ''
           }, duration);
       }
   },
};
</script>

<style scoped>
    .toast{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 8px 10px ;
        color: #fff;
        background-color: rgba(0,0,0,.75);
        z-index: 999;
    }
</style>

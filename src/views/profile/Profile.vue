<template>
    <div id="profile">
          我的，老师没讲了，我以后写。
          <br>
          这个项目还要自己再写一次的。
    </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  export default {
    name: "Profile",
    components:{
      Scroll
    }
  }
</script>

<style scoped>
  .content{
    height: 300px;
    /* background-color: pink; */
    overflow: hidden;
  }
</style>

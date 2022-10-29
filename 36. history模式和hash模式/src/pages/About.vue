<template>
    <h2>我是About的内容</h2>
</template>

<script>
export default {
    name: 'About',
    beforeDestroy(){
      console.log('About路由组件即将被销毁');
    },
    mounted() {
      console.log('About组件挂载完毕了', this);
      window.aboutRoute = this.$route
      window.aboutRouter = this.$router      

    },
    // 通过路由规则, 进入该组件时被调用
    beforeRouteEnter (to, from, next) {
      console.log('组件路由beforeRouteEnter', to, from)
      if(to.meta.isAuth){ // 判断是否需要鉴权
      // if(to.path === '/home/news' || to.path === '/home/message'){
          if(localStorage.getItem('school') === 'atlizhi'){
              next()
          } else {
              alert('学校名不对, 无权限查看')
          }
      } else {
          next()
      }
    },

    // 通过路由规则, 离开该组件时被调用
    beforeRouteLeave (to, from, next){
      console.log('组件路由beforeRouteLeave', to, from)
      next()
    },
  
}
</script>

<style>

</style>
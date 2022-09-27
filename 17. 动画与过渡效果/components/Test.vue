<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 两种appear写法 -->
    <!-- <transition name="hello" :appear="true"> -->
    <transition name="hello" appear>
      <h2 v-show="isShow">你好啊</h2> 
    </transition>
  </div>
  
</template>

<script>
export default {
  name: "Test",
  data(){
    return {
      isShow: true
    }
  }
}
</script>

<style>
h2{
  background-color: orange;
}
/* .v-enter-active{  默认是v, 有name属性后, 就要变成name的属性值*/
.hello-enter-active{

  animation: atguigu 1s;
}

/* .hello-enter-leave{ */
.hello-enter-leave{
  animation: atguigu 1s reverse;
}
@keyframes atguigu{
  from{
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0px);
  }
}
</style>
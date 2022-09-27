<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 两种appear写法 -->
    <!-- <transition name="hello" :appear="true"> -->
    <transition-group name="hello" appear>
      <h2 v-show="isShow" key="1">你好啊</h2> 
      <h2 v-show="isShow" key="2">帅哥</h2>
    </transition-group>
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
  transition: 0.5s linear;
}

/* 进入的起点 */
.hello-enter, .hello-leave-to{
  transform: translateX(-100%);
}

/* 进入的终点 */
.hello-enter-to, .hello-leave{
  transform: translateX(0);
}

.hello-enter-active, .hello-leave-active{
  transition: 0.5s linear;
}

/* 离开的起点
.hello-leave{
  transform: translateX(0);
} */

/* 离开的终点
.hello-leave-to{
  transform: translateX(-100%);
} */

</style>
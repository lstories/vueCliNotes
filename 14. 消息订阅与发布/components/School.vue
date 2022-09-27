<template>
     <div class="demo">
     <h2>学校名称:{{  name }}</h2>
     <h2>学校地址: {{ address }}</h2>
   </div>
</template>

<script>

import pubsub from 'pubsub-js';
export default {
  name: "School",
  data(){
    console.log(this);
    return {
       name: 'wust university',
       address: '武汉科技大学'
    }
  },
  mounted() {
    // 订阅消息, 隔空对讲机喊话
    this.pubId = pubsub.subscribe('hello',(name,msg)=>{
        // 注意这里写箭头函数, this才不会丢
        console.log(`有人发布了hello消息, 回调被执行, data: ${msg}`);
    });
  },
  beforeDestroy(){
    // 取消订阅
    pubsub.unsubscribe(this.pubId); // 取消订阅
  }
}
</script>

<style>
   /*scoped代表局部的*/
   .demo{
    background: skyblue;
    padding:5px
  }
</style>
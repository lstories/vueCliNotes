<template>
  <ul>
    <!-- <li>消息内容: {{$route.params.id}}</li> -->
    <!-- <li>消息标题: {{$route.params.title}}</li> -->
    <li>内容: {{id}}</li>
    <li>标题: {{title}}</li>
    <!-- <li>a: {{a}}</li>
    <li>b: {{b}}</li> -->
  </ul>
</template>

<script>
export default {
  name: "Detail",
  // 第一种写法的 props
  // props:['a','b'],
  // 第二种写法的 props
   props:['id','title'],

  // computed:{
  //   id(){
  //     return this.$route.query.id
  //   },
  //   title(){
  //     return this.$route.query.title
  //   }
  // },
  mounted(){
    console.log(this.$route)
  }
}
</script>

<style>

</style>
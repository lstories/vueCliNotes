<template>
  <ul>
    <li>消息内容: {{$route.params.id}}</li>
    <li>消息标题: {{$route.params.title}}</li>

  </ul>
</template>

<script>
export default {
  name: "Detail",
  mounted(){
    console.log(this.$route)
  }
}
</script>

<style>

</style>
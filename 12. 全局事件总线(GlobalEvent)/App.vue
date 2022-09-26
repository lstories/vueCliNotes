<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <Student/>
    <School/>
  </div>
</template>

<script>
    import School from './components/School'
    import Student from './components/Student.vue'

    export default {
        name:"App",
        // 汇总所有的组件
        components: {
          School,
          Student
        },
        data() {
            return {
              msg: "hello",
              studentName:''
            }
        },
        
        
    }
</script>

<style>
   /*
   全局的样式是不需要加scoped
   全局共享
   */
   .app{
     background: gray;
     padding: 5px;
   }
</style>

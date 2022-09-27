<template>
  <div>
    <Test></Test>
    <Test2/>
  </div>
</template>

<script>
import Test from './components/Test.vue';
import Test2 from './components/Test2.vue';
    
    export default {
        name:"App",
        // 汇总所有的组件
        components: {
          Test,
          Test2
        },
        
    }
</script>

<style>

</style>

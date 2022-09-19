<template>
    <div>
        <img alt="Vue logo" src="./assets/logo.png">
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showH">点我输出上方的dom元素</button>
        <School ref="sch"/>
    </div>
</template>

<script>
    import School from "./components/School";

    export default {
        name:"App",
        data() {
            return {
                msg:"欢迎学习vue",
            }
        },
        methods:{
          showH(e){
            console.log(this.$refs.title);  // this ==> vc (app组件)
            console.log(e.target);  // 发生事件的dom元素
            console.log(this.$refs.sch);
          }  
        },
        // 汇总所有的组件
        components: {
            School,
        },
    }
</script>

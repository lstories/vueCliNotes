<template>
    <div class="">
        <h2>学生姓名:{{ name }}</h2>
        <h2>学生年龄:{{ age }}</h2>
        <button @click="showName">点我提示学生姓名</button>
    </div>
</template>


<script>
    // 组件交互相关的代码(数据, 方法等)
    // export const school = Vue.extend({   // 1. 分别暴露
    export default {    // 4. 简写的暴露格式
        name: 'Student', // 开发者工具最终呈现的名字为Student
        data(){
            return {
                name: '惠州靓仔',
                age: 23
            }
        },
        methods: {
            showName(){
                alert(this.name);
            }
        }
    };

    // export {student};     // 2. 统一暴露
    // export default student // 3. 默认暴露
</script>

<style>
    /* CSS样式 */
</style>
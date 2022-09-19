<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校的名称: {{name}}</h2>
        <h2>学校的地址: {{address}}</h2> 
    </div>
</template>

<script>
    // 组件交互相关的代码(数据, 方法等)
    // export const school = Vue.extend({   // 1. 分别暴露
    export default {    // 4. 简写的暴露格式
        name: 'School', // 开发者工具最终呈现的名字为School
        data(){
            return {
                name: '惠州学院',
                address: '惠州'
            }
        },
    };

    // export {school};     // 2. 统一暴露
    // export default school // 3. 默认暴露

</script>

<style>
    /* 组件的样式 */
    .demo{
        background: skyblue;
    }
</style>






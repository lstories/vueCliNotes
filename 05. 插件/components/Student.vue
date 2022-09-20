<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>姓名: {{name}}</h2>
        <h2>性别: {{sex}}</h2>
        <input type="text" v-fbind:value="name">
    </div>
</template>

<script>
    // 组件交互相关的代码(数据, 方法等)
    export default {    // 4. 简写的暴露格式
        name: 'Student', // 开发者工具最终呈现的名字为Student
        data(){
            console.log(this);
            return {
                name: '张三',
                sex: '男',
            }
        },
    }
        
</script>






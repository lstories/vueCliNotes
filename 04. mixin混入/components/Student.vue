<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2 @click="showName">姓名: {{name}}</h2>
        <h2>性别: {{sex}}</h2>
    </div>
</template>

<script>
    import {mixin, shareData} from '../mixin'
    // 组件交互相关的代码(数据, 方法等)
    export default {    // 4. 简写的暴露格式
        name: 'Student', // 开发者工具最终呈现的名字为Student
        data(){
            console.log(this);
            return {
                name: '张三',
                sex: '男',
                x: 666
                // 如果混合中配置了与data(或配置了相同的methods)相同的属性值, 则以你的配置的属性为主(而不以mixin为主)
            }
        },
        // methods(){
        //     console.log('你好啊啊!!!!');    // 但对于生命周期钩子是都会保存的(混合的钩子比你配置的钩子先跑)
        // },
        mixins:[mixin, shareData]
    }
        
</script>

<style>
    /* 组件的样式 */
    .demo{
        background: skyblue;
    }
</style>






<template>
    <div>
        <img alt="Vue logo" src="./assets/logo.png">
        <!-- 多个vc互不影响 -->
        <!-- v-bind的作用重要, 获取后面表达式值的赋给props的属性 -->
        <Student name="lizhi" sex="男" :age="21"></Student>
        <hr>
    </div>
</template>

<script>
    import Student from "./components/Student";

    export default {
        name:"App",
        // 汇总所有的组件
        components: {
            Student,
        },
    }
</script>

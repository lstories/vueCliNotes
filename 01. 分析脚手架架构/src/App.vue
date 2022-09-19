<template>
    <div>
        <img alt="Vue logo" src="./assets/logo.png">
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    import School from "./components/School"
    import Student from "./components/Student"

    export default {
        name:"App",
        // 汇总所有的组件
        components: {
            School,
            Student
        }
    }
</script>

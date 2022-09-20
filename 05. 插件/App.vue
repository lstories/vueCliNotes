<template>
    <div>
        <img alt="Vue logo" src="./assets/logo.png">
        <student/>
        <hr>
        <School/>
    </div>
</template>

<script>
    import Student from './components/Student';
    import School from './components/School';

    export default {
        name:"App",
        // 汇总所有的组件
        components: {
            Student,
            School,
        },
    }
</script>

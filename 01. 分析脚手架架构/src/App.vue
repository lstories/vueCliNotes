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
        components: {
            School,
            Student
        }
    }
</script>

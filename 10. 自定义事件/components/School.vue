<template>
    <div class="demo">
        <h2>学校名称: {{name}}</h2>
        <h2>学校地址: {{address}}</h2>
        <button @click="sendSchoolName">把学校名传递给app</button>
    </div>
</template>

<script>

export default {
    name: 'School',
    props: ['getSchoolName'],
    data() {
        console.log(this);
        return {
            name: '惠州学院',
            address: '惠州'
        }
    },
    methods:{
        sendSchoolName(){
            this.getSchoolName(this.name);
        }
    }
}
</script>

<style scoped>
   /*scoped代表局部的*/
   .demo{
    background: skyblue;
    padding:5px
  }
</style>
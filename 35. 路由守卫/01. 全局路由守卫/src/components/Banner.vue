<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="test">测试一下 go </button>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    methods:{
        back() {
            this.$router.back()
        },
        forward() {
            this.$router.forward()
        },
        test(){
            // 连续后退两步  +2是前进两步
            this.$router.go(-2)
        }
    }
}
</script>

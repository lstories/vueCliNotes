<template>
  <div class="demo">
    <h2 class="atguigu">学校名称: {{name}}</h2>
    <h2>学校地址: {{address}}</h2>
  </div>
</template>

<script>
    export default {
        name: 'School',
        data() {
            console.log(this);
            return {
                name: '惠州学院',
                address: '惠州'
            }
        },
        
    }
</script>

<!-- <style scoped>
  .demo{
    background: skyblue;
  }
</style> -->

    <!-- 
    查看webpack版本: npm view webpack versions
    查看less-loader版本命令: npm view less-loader versions
    less-loader下载7版本的, npm i less-loader@7  
  -->
  
<style lang="less" scoped>
  .demo{
    background: skyblue;
    .atguigu{
      font-size: 40px;
    }
  }
</style>
  



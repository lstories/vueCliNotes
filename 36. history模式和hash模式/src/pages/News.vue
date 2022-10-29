<template>
  <ul>
    <li :style="{opacity}">欢迎学习Vue</li>
    <li>news001 <input type="text"/></li>
    <li>news002 <input type="text"/></li>
    <li>news003 <input type="text"/></li>
  </ul>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      opacity:1
    }
  },
  // beforeDestroy() {
  //   console.log('News组件即将被销毁了')
  //   clearInterval(this.timer)
  // },
  // mounted() {
  //   this.timer = setInterval(() => {
  //     console.log('@')
  //     this.opacity -= 0.01
  //     if(this.opacity <= 0) this.opacity = 1
  //   },16)
  // },
  

  // 剩下的两个钩子
  // 激活
  activate() {
    console.log('News组件被激活')
    this.timer = setInterval(() => {
      console.log('@')
      this.opacity -= 0.01
      if(this.opacity <= 0) this.opacity = 1
    },16)
  },
  // 失活
  deactivate() {
    console.log('News组件失活了')
    clearInterval(this.timer)
  },

}
</script>

<style>

</style>
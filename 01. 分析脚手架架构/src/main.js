/**
 * 该文件是整个项目的入口文件
 * */
// 引入vue
import Vue from 'vue'
// 引入App组件, 它是所有组建的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象---vm
new Vue({
  el: '#app',  // 相当于 .$mount('#app')
  // 完成的功能: 讲App组件放入容器中
  render: h => h(App),
})//.$mount('#app')



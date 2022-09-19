/**
 * 该文件是整个项目的入口文件
 * */
// 引入vue
import Vue from 'vue' // 这里引入的是残缺版的vue, 是没有模板解析器是不能写template的 ==> vue.runtime.esm.js
// 引入App组件, 它是所有组建的父组件
import App from './App.vue'
// import vue from 'vue/dist/vue'; 这是完整版的vue
// 关闭Vue的生产提示
Vue.config.productionTip = false

/** 
 * 关于不同版本的vue: 
 *  1. vue.js与vue.runtime.xxx.js的区别:
 *    (1). vue.js是完整版的vue, 包含: 核心功能+模板解析器
 *    (2). vue.runtime.xxx.js是运行版的vue, 只包含: 核心功能, 没有模板解析器
 *  2. 因为vue.runtime.xxx.js没有模板解析器, 所以不能使用template配置项, 需要使用
 *      render函数接收到的createElement函数去指定具体内容
*/

// Vue: 由 模板解析器 + Vue核心

// 创建Vue实例对象---vm
new Vue({
  // template: `<App></App>`,
  // components: { App },
  // render: h => h(App),
  el: '#app',  // 相当于 .$mount('#app')
  // 完成的功能: 讲App组件放入容器中
  render: h => h(App),
  /*
  // render的写法
  // 第一种写法
  render(createElement){
    return createElement('h1','你好')
  }

  // 第二种写法
  render: createElement => {
    return createElement('h1','你好')
  }

  // 第三种写法
  render: createElement => createElement('h1','你好')

  // 第四种精简版
  render: q => q('h1','你好')

  */

})//.$mount('#app')



// 引入vue
import Vue from 'vue' ;
// 引入App
import App from './App';



// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象---vm
new Vue({
  el: '#app',  
  render: h => h(App),
});


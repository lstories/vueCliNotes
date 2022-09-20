// 引入vue
import Vue from 'vue' ;
// 引入App
import App from './App';
// 引入插件
import plugins from './plugins'


// 关闭Vue的生产提示
Vue.config.productionTip = false

// 应用(使用)插件
Vue.use(plugins,1,2,3)

// 创建Vue实例对象---vm
new Vue({
  el: '#app',  
  render: h => h(App),
});


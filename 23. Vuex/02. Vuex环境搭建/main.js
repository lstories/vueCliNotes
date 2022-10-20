// 引入vue
import Vue from 'vue' ;
// 引入App
import App from './App';
// 引入插件
import vueResource from 'vue-resource';

// 引入store
import store from './store';

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 使用插件
Vue.use(vueResource)

// 创建Vue实例对象---vm
new Vue({
  el: '#app',  
  render: h => h(App),
  store, 
  beforeCreate(){
    // 此时这个this就是vm, 只不过这个时候还没有去解析模板
    Vue.prototype.$bus = this;  // 安装全局事件总线
  }

});


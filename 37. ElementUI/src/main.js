// 引入vue
import Vue from 'vue' ;
// 引入App
import App from './App';

// 完整引入
// 引入element UI组件库
// import ElementUI from 'element-ui';
// 引入ElementUI的全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import { Button, Row, DatePicker } from 'element-ui';

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 完整应用
// 应用ElementUI
// Vue.use(ElementUI);
Vue.component('atlizhi-button', Button);
Vue.component('atlizhi-row', Row);
Vue.component('atlizhi-date-picker', DatePicker);


new Vue({
  el: '#app',  
  render: h => h(App),


});


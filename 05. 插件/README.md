## 插件
- 功能: 用于增强Vue
- 本质: 包含install方法的一个对象, install的第一个参数是Vue, 第二个以后的参数是插件使用者传递的数据
- 定义插件:
    ```
    对象.install = function(Vue, options){
        // 1. 全局过滤器
        Vue.filter(...)

        // 2. 定义全局指令
        Vue.directive(...)

        // 3. 定义混入
        Vue.mixin(...)

        // 4. 添加实例方法
        Vue.prototype.$myMethod = function(){...}
        Vue.prototype.$myProperty = xxx
    }
    ```
- 使用插件: Vue.use()

  

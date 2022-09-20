# vueCliNotes

## 脚手架文件结构
    |-- node_modules
    |-- public
    |   |-- favicon.ico: 页签图标
    |   |-- index.html: 主页面
    |-- src
    |   |-- assets: 存放静态资源
    |   |   |-- logo.png
    |   |-- component: // 存放组件
    |   |   |-- HelloWorld.vue
    |   |-- App.vue: 汇总所有组件
    |   |-- main.js: 入口文件
    |-- .gitignore: git版本管理忽略的配置
    |-- babel.config.js: babel的配置
    |-- package.json: 应用包配置文件
    |-- README.md: 应用描述文件
    |-- package.lock.json: 包版本控制文件

## 关于不同版本的Vue
  关于不同版本的vue: 
   1. vue.js与vue.runtime.xxx.js的区别:
      - vue.js是完整版的vue, 包含: 核心功能+模板解析
      - vue.runtime.xxx.js是运行版的vue, 只包含: 核心功能, 没有模板解析器
   2. 因为vue.runtime.xxx.js没有模板解析器, 所以不能使用template配置项, 需要使用render函数接收到的createElement函数去指定具体内容

### vue.config.js配置文件
> 使用vue inspect > output.js 可以查看到vue脚手架的默认配置
> 使用vue.config.js可以对脚手架进行个性化定制, 详情见: https://cli.vuejs.org/zh

## ref属性
1. 被用来给元素或子组件注册引用信息(id的替代者)
2. 应用在html标签上获取的是真实DOM元素, 应用在组件标签上是组件实例对象(vc)
3. 使用方式:
```
打标识: 
    <h1 ref="xxx">...</h1>
    或者
    <School ref="xxx"></School>
获取: 
    this.$refs.xxx
```

## 配置项props
功能: 让组件接收外部传过来的数据

1. 传递数据
    ```
        <Demo name="xxx"/>
    ```
2. 接收数据:
    ```
        第一种方式(只接收): 
            props: ['name','age',..]
        第二种方式:
            
            props:{
                name: String,
                age: Number,
            }

        第三种方式(限制类型, 限制必要性, 指定默认值):
            props:{
                name:{
                    type: string,   // 类型
                    required: true  // 必要的
                },
                age: {
                    type: string,
                    default: 99     // 默认值
                },
                sex:{
                    type: string,
                    required: true
                }
            }
    ```

**备注:** props是只读的, Vue底层会监测你对props的修改, 如果进行了修改, 如果进行了修改, 就会发出警告, 若业务需求确实需要修改, 那么请复制props的内容到data中一份, 然后去修改data中的数据

## mixin混入
- 功能: 可以把多个组件公用的配置提取成一个混入对象
- 使用方式:
  - 第一步, 定义混合. 例如:
  ```
  {
    data(){...},
    methods:{...}
    ...
  }
  ```
  - 第二步, 使用混入. 例如: 
  ```
  (1). 全局混入: Vue.mixin(xxx)
  (2). 局部混入: mixins:{'xxx'}
  ```

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

## scoped样式
- 作用: 让样式在局部生效, 防止冲突
- 写法: <style scoped></style>

## 总结TodoList案例
1. 组件化编码流程  
    (1) 拆分静态组件: 组件要按照功能点拆分, 命名不要与html元素冲突  
    (2) 实现动态组件: 考虑好数据的存放位置, 数据是一个组件在用, 环视一些组件在用:  
    - 一个组件在用: 放在组件自身即可
    - 一些组件在用: 放在它们共同的父组件上(状态提升)
    
    (3) 实现交互: 从绑定事件开始

2. props适用于:
    - 父组件 ==> 子组件  通信
    - 子组件 ==> 父组件  通信 (要求父先给予一个函数)

3. 使用v-model时要切记: v-model绑定的值不能是props传过来的值, 因为props是不可以修改的
4. props传过来的若是对象类型的值, 修改对象中的属性时, vue不会报错, 但是不推荐这么做

  




# 笔记
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
```JavaScript
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
    ```JavaScript
        <Demo name="xxx"/>
    ```
2. 接收数据:
    ```JavaScript
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
  ```JavaScript
  {
    data(){...},
    methods:{...}
    ...
  }
  ```
  - 第二步, 使用混入. 例如: 
  ```JavaScript
  (1). 全局混入: Vue.mixin(xxx)
  (2). 局部混入: mixins:{'xxx'}
  ```

## 插件
- 功能: 用于增强Vue
- 本质: 包含install方法的一个对象, install的第一个参数是Vue, 第二个以后的参数是插件使用者传递的数据
- 定义插件:
    ```JavaScript
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

## WebStorage
1. 存储内容大小一般支持5MB左右(不同浏览器可能不一样)
2. 浏览器端通过Window.sessionStorage和Window.localStorage属性来实现本地存储机制
3. 相关API:
    ```JavaScript
    xxxStorage.setItem('key','value');
        该方法接收一个键和值作为参数, 会把键值对添加到存储中, 如果键名存在, 则更新其对应的值
    xxxStorage.getItem('key');
        该方法接收一个键名作为参数, 返回键名对应的值
    xxxStorage.removeItem('key');
        该方法接收一个键名作为参数, 并把该键名从存储中删除
    xxxStorage.clear();
        该方法会清空存储中的所有数据
    ```
4. 备注:
   - SessionStorage存储的内容会随着浏览器窗口关闭而消失
   - LocalStorage存储的内容, 需要手动清除才会消失
   - xxxStorage.getItem(xxx) 如果xxx对应的value获取不到, 那么getItem的返回值是null
   - JSON.parse(null) 的结果依然是null

## 组件的自定义事件
1. 一种组件通信的方式, 适用于: **子组件===>父组件**
2. 使用场景: A是父组件, B是子组件, B想给A传数据, 那么就要在A传数据, 那么就要在A中给B绑定自定义事件(事件的回溯在A中).
3. 绑定自定义事件: 
   - 第一种方式, 在父组件中: ``` <Demo @atguigu="test"/>或者<Demo v-on:atguigu="test"/> ```
   - 第二种方式, 在父组件中:
    ```JavaScript
    <Demo ref="demo"/>
    .....
    mounted(){
        this.$refs.xxx.$on('atguigu',this.test)
    }
    ```
   - 若想让自定义事件只能触发一次, 可以使用 once 修饰符, 或 $once 方法

4. 触发自定义事件: this.$emit('atguigu', 数据)
5. 解绑自定义事件: this.$off('atguigu')
6. 组件上也可以绑定原生DOM事件, 需要使用 native 修饰符
7. 注意: 通过 this.$refs.xxx.$on('atguigu',回调) 绑定自定义事件时, 回调要么配置在methods中, 要么用箭头函数, 否则this指向会指出问题

## 全局事件总线(GlobalEventBus)
1. 一种组件间通信的方式, 适用于任意组件间通信
2. 安装全局事件总线:
    ```JavaScript
    new Vue({
        ....
        beforeCreate(){
            Vue.prototype.$bus = this   // 安装全局事件总线, $bus就是当前应用的vm
        }
        ....
    })
    ```
3. 使用事件总线:
   - 接收数据: A组件想接收数据, 则在A组件中给$bus绑定自定义事件, 事件的回调留在A组件自身
        ```JavaScript
        methods(){
            demo(data){...}
        }
        ......
        mounted(){
            this.$bus.$on('xxx',this.demo)
        }
        ```
   - 提供数据: ```this.$bus.$emit('xxx',数据)```
4. 最好在beforeDestroy钩子里, 用$off去解绑当前组件所用到的事件

## 消息订阅与发布
1. 一种组件间通信的方式, 适用于任意组件间通信
2. 使用步骤: 
   - 安装pubsub: ``` npm i pubsub-js ```
   - 引入: ```import pubsub from 'pubsub-js'```
   - 接收数据: A组件想接收数据, 则在A组件中订阅消息, 订阅的回调留在A组件自身
        ```JavaScript
        methods(){
            demo(data){....}
        }
        ....
        mounted(){
            this.pid - pubsub.subscribe('xxx',this.demo)    // 订阅消息
        }
        ```
   - 提供数据: ``` pubsub.publish('xxx',数据) ```
   - 最好在beforeDestroy钩子中, 用 ```pubSub.unsubscribe(pid)``` 去 ```<sapn style="color:red">取消订阅</span>```

## nextTick
1. 语法: this.$nextTick(回调函数)
2. 作用: 在下一次DOM更新结束后执行其指定的回调
3. 什么时候用: 当改变数据后, 要基于更新后的新DOM进行某些操作时, 要在nextTick所指定的回调函数中进行

## Vue封装的过度与动画
1. 作用: 在插入, 更新, 移除DOM元素时i, 在合适的时候给元素添加样式类名
2. 如图
3. 写法: 
   - 准备好样式: 
     - 元素进入的样式
       - v-enter: 进入的起点
       - v-enter-active: 进入过程中
       - v-enter-to: 进入的终点
     - 元素离开的样式:
       - v-leave: 离开起点
       - v-leave-active: 离开过程中
       - v-leave-to: 离开的终点
   - 使用 ```<transition>``` 包裹要过度的元素, 并配置name属性:
    ```JavaScript
    <transition name="hello">
        <h1 v-show="">你好啊</h1>
    </transition>
    ```
   - 备注: 若有多个元素需要过度, 则需要使用: ```<transition-group>```, 且每个元素都要指定 **key** 值

## 插槽
1. 作用: 让父组件可以向子组件指定位置插入html结构, 也是一种组件间通信的方式, 适用于 父组件 ==> 子组件
2. 分类: 默认插槽, 具名插槽, 作用域插槽
3. 使用方式: 
   - 默认插槽:
    ```JavaScript
    父组件中:
    <Category>
        <div>html结构1</div>
    </Category>

    子组件中:
    <template>
        <div>
            <!-- 定义插槽 -->
            <slot>插槽默认内容</slot>
        </div>
    </template>
    ```
   - 具名插槽:
    ```JavaScript
    父组件中:
    <Category>
        <template slot="center">
            <div>
                html结构1
            </div>
        </template>
        <template v-slot:footer>
            <div>
                html结构2
            </div>
        </template>
    </Category>

    子组件中:
    <template>
        <div>
            <!-- 定义插槽 -->
            <slot name="center">插槽默认内容</slot>
            <slot name="footer">插槽默认内容</slot>
        </div>
    </template>
    ```
   - 作用域插槽:
     - 理解: 数据在组件的自身, 但根据数据生成的结构需要组建的使用者来决定, (games数据在Category组件中, 但使用数据所遍历出来的结构由APP组件决定)
     - 具体编码:
        ```JavaScript
        父组件中:
        <Category>
            <template scope="scopeData">
                <!-- 生成的ul列表 -->
                <ul>
                    <li v-for="g in scopeData.games" :key="g">{{g}}</li>
                </ul>
            </template>
        </Category>
        <Category title="游戏">
            <template scope="Games">
                <ol>
                    <li v-for="(g,index) in Games.games" :key="index">{{g}}</li>
                </ol>
            </template>
        </Category>    
        <Category title="游戏">
            <template scope="{games}">
            <!-- <template slot=scope="{games}"> 另一种写法-->
                <h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
            </template>
        </Category>

        子组件中:
        <template>
            <div>
                <slot :games="games">插槽默认内容</slot>
            </div>
        </template>

        <script scope>
        export default {
            name: 'Category',
            props: ['title'],
            data(){
            return {
              games:['红色警戒','穿越火线','劲舞团','超级玛丽       '],
            }
          },
        }
        </script>
        ```

## Vuex
1. 概念
   - 在Vue中实现集中式状态(数据)管理的一个Vue插件, 对Vue应用中多个组件的共享状态进行集中式的管理(读/写), 也是一种组件间通信的方式, 且适用于任意组件间通信
2. 何时使用
   - 多个组件需要共享数据时
3. 搭建Vuex环境
   - 创建文件 : ``` src/store/index.js ```
    ```JavaScript
    // 该文件用于创建vuex中最为核心的store
    // 引入vue
    import Vue from 'vue'

    // 引入Vuex
    import Vuex from 'vuex'
    // 应用Vuex插件
    Vue.use(Vuex)

    // 准备 actions --- 用于相应组件的动作
    const actions = {}

    // 准备 mutations --- 用于操作数据(state)
    const mutations = {}

    // 准备 state --- 用于存储数据
    const state = {}

    // 创建 store (并暴露store)
    export default new Vuex.Store({
        action:actions,
        mutations:mutations,
        state:state
        /**
        action
        mutations
        state
         */
    })

    // 暴露(导出)store
    // export default store
    ```
   - 在``` main.js ```中创建vm时传入```store```配置项
    ```JavaScript
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
        // 此时这个this就是vm, 只不过这个时候还没有去解析模 板
        Vue.prototype.$bus = this;  // 安装全局事件总线
      }
    });
    ```
4. 基本使用
   - 初始化数据, 配置```actions```, 配置```mutations```, 操作文件```store.js```
    ```JavaScript
    //引入Vuex
    import Vuex from 'vuex';
    import Vue from "vue";

    //使用vuex来集中管理状态,必要
    //new store的前提是必须要使用Vuex插件
    Vue.use(Vuex);

    //创建actions(本质就是对象) 用于响应组件中的动作
    const actions = {
        //收到上下文对象(包含commit)和dispatch过来的值
        // increment(context, value){
        //     context.commit('INCREMENT', value);
        // },
        // decrement(context, value){
        //     context.commit('DECREMENT', value);
        // },
        incrementIfOdd(context, value){
            // console.log(`action中的incrementIfOdd被调用  `);
            // console.log('处理了一些事情');
            // context.dispatch('demo1', value);
            if(context.state.sum % 2) {
                console.log('@')
                context.commit('INCREMENT',value);
                // context.state.sum += 1;//这样可以实现但  是记住本次对状态的改变开发者工具将无法捕获，  因为开发者工具是对mutations对话的
            }
        },
        incrementWait(context, value){
            setTimeout(() => {
                context.commit('INCREMENT', value);
            },500)
        },
        // demo1(context, value){
        //     console.log('处理了一些事情---demo1');
        //     context.dispatch('demo2', value);
        // },
        // demo2(context, value){
        //     console.log('在action的demo中完成最终的逻辑  ');
        //     if(context.state.sum % 2) {
        //         console.log('@')
        //         context.commit('INCREMENT',value);
        //     }
        // }
    }

    //创建mutations(本质也是对象) 用于修改数据(state)
    const mutations = {
        //收到state和要操作数value
        INCREMENT(state, value) {
            state.sum += value;
        },
        DECREMENT(state, value) {
            state.sum -= value;
        },
    }

    //创建并暴露store
    export default new Vuex.Store({
        actions,
        mutations,
        state,
        getters
    });
    ```
   - 组件中读取vuex中的数据: ```$store.state.sum```
   - 组件中修改vuex中的数据: ```$store.dispatch('action中的方法名', 数据)```或```$store.commit('mutations中的方法名', 数据)```
   - 备注: 若没有网络请求或其他业务逻辑, 组件也可以越过actions, 即不写```dispatch```, 直接编写```commit```

6. 四个map方法的使用
   - mapState方法: 用于帮助我们映射```state```中的数据为计算属性
    ```JavaScript
    computed:{
        //借助mapState从state中生成计算属性,对象写法
        // ... mapState({
        //   sum:'sum',
        //   school: 'school',
        //   subject: 'subject'
        // }),
        //借助mapState从state中生成计算属性,数组写法(即代表了生成的计算属性名为sum，同时也代表了从state找到 sum)
        ... mapState(['sum', 'school', 'subject']),
    }
    ```
   - mapGetters方法: 用于帮助我们映射```getters```中的数据为计算属性
    ```JavaScript
    computed:{
        //借助mapGetters从getters中生成计算属性,对象写法
        // ...mapGetters({ bigSum: 'bigSum' }),
        //借助mapGetters从getters中生成计算属性,数组写法
        ...mapGetters(['bigSum']),
    }
    ```
   - mapActions方法: 用于帮助我们生成于```actions```对话的方法, 即: 包含```$store.dispatch(xxx)```的函数
    ```JavaScript
    methods:{
        // ...mapActions({
        //   incrementIfOdd: 'incrementIfOdd',
        //   incrementWait: 'incrementWait',
        // }),
        ...mapActions(['incrementWait',     'incrementIfOdd']), //数组写法,同上
      },
    ```

   - mapMutaions方法: 用于帮助我们生成于```mutations```对话的方法, 即: 包含```$store.commit(xxx)```的函数
    ```JavaScript
    methods:{
        //借助mapMutations生成对应方法，方法会调用commit去  联系mutations，对象写法
        ...mapMutations({
          increment: 'INCREMENT',
          decrement: 'DECREMENT',
        }),
        //借助数组写法生成方法,但注意你生成的方法名和   mutations里对应的方法名将会一样的
        // ...mapMutations(['increment', 'decrement']),
        //借助mapMutations生成对应方法，方法会调用dispatch  去联系actions，对象写法
    }
    ```
## 模块化+ 命名空间
1. 目的: 让代码更好维护, 让多种数据分类更加明确
2. 修改```store.js```
    ```JavaScript
    // 求和功能相关的配置
    const conuntOptions = {
        // 命名空间开启
        namespaced: true,
        actions:{...},
        mutations: {...},
        state: {...},
        getters: {
            bigSum(state){
                return state.sum * 10;
            }
        },
    }
    // 人员管理功能相关的配置
    const personOptions = {
        namespaced: true,
        actions:{...},
        mutations: {...},
        state: {...},
        getters: {...},
    }
    //创建并暴露store
    export default new Vuex.Store({
        modules:{
            countAbout: conuntOptions,
            personAbout: personOptions
        }
    });
    ```
3. 开启命名空间后, 组件中读取state数据:
    ```JavaScript
    // 1. 自己直接读取
    this.$store.state.personAbout.list
    // 2. 借助mapState读取
    ... mapState('countAbout', ['sum', 'school', 'subject']),
    ```
4. 开启命名空间后, 组件中读取getters数据:
    ```JavaScript
    // 1. 自己直接读取
    this.$store.getters['personAbout/firstPersonName']
    // 2. 借助mapGetters读取
    ... mapGetters('countAbout',{ bigSum: 'bigSum' }),
    ```
5. 开启命名空间后, 组件中调用dispatch
    ```JavaScript
    // 1. 自己直接dispatch
    this.$store.dispatch('personAbout/addPersonServer', person)
    // 2. 借助mapActions
    ...mapActions('countAbout', {incrementIfOdd: 'incrementIfOdd',incrementWait: 'incrementWait',}),
    ```
6. 开启命名空间后, 组件中调用commit
    ```JavaScript
    // 1. 自己直接commit
    this.$store.commit('personAbout/ADD_PERSON', personObj)
    // 2. 借助mapMutations
    ...mapMutations('countAbout', {increment: 'INCREMENT',decrement: 'DECREMENT',}),
    ```
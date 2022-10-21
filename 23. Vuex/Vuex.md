## Vuex
1. 概念
   - 在Vue中实现集中式状态(数据)管理的一个Vue插件, 对Vue应用中多个组件的共享状态进行集中式的管理(读/写), 也是一种组件间通信的方式, 且适用于任意组件间通信
2. 何时使用
   - 多个组件需要共享数据时
3. 搭建Vuex环境
   - 创建文件 : ``` src/store/index.js ```
    ```
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
    ```
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
    ```
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
    ```
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
    ```
    computed:{
        //借助mapGetters从getters中生成计算属性,对象写法
        // ...mapGetters({ bigSum: 'bigSum' }),
        //借助mapGetters从getters中生成计算属性,数组写法
        ...mapGetters(['bigSum']),
    }
    ```
   - mapActions方法: 用于帮助我们生成于```actions```对话的方法, 即: 包含```$store.dispatch(xxx)```的函数
    ```
    methods:{
        // ...mapActions({
        //   incrementIfOdd: 'incrementIfOdd',
        //   incrementWait: 'incrementWait',
        // }),
        ...mapActions(['incrementWait',     'incrementIfOdd']), //数组写法,同上
      },
    ```

   - mapMutaions方法: 用于帮助我们生成于```mutations```对话的方法, 即: 包含```$store.commit(xxx)```的函数
    ```
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
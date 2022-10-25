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
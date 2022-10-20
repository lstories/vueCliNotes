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

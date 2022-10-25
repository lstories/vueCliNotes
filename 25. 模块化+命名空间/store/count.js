// 求和功能相关的配置
export default {
    // 命名空间开启
    namespaced: true,
    actions:{
        incrementIfOdd(context, value){
            // console.log(`action中的incrementIfOdd被调用`);
            // console.log('处理了一些事情');
            // context.dispatch('demo1', value);
            if(context.state.sum % 2) {
                console.log('@')
                context.commit('INCREMENT',value);
                // context.state.sum += 1;//这样可以实现但是记住本次对状态的改变开发者工具将无法捕获，因为开发者工具是对mutations对话的
            }
        },
        incrementWait(context, value){
            setTimeout(() => {
                context.commit('INCREMENT', value);
            },500)
        },
    },
    mutations: {
        //收到state和要操作数value
        INCREMENT(state, value) {
            state.sum += value;
        },
        DECREMENT(state, value) {
            state.sum -= value;
        },
    },
    state: {
        sum: 0,
        school: 'CSXY',
        subject: 'Computer Science',
    },
    getters: {
        bigSum(state){
            return state.sum * 10;
        }
    },
}
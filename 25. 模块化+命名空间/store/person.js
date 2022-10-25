// 人员管理功能相关的配置
import axios from "axios"
import { nanoid } from "nanoid"
export default {
    namespaced: true,
    actions:{
        addPersonLi(context, value){
            if(value.name.indexOf('李') == 0){
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的人必须姓[李]')
            }
        },
        addPersonServer(context, value){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', {id:nanoid(), name:response.data})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value){
            console.log('mutations中的AAD_PERSON被调用')
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            {id: '001', name: "张三"}
        ]
    },
    getters: {
        firstPersonName(state){
            return state.personList[0].name
        }
    },
}
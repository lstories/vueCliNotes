<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red;">Count组件求和为: {{sum}}</h3>
    <h3>列表中第一个的名字是: {{firstPersonName}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add()">添加</button>
    <button @click="addLi()">添加一个姓李的人</button>
    <button @click="addPersonServer()">添加一个人, 名字随机</button>

    <ul>
        <li v-for="p in $store.state.personAbout.personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {nanoid} from 'nanoid';
export default {
    name: 'Person',
    data() {
        return {
            name:''
        }
    },
    computed:{
        personList(){
            return this.$store.state.personAbout.personList
        },
         ...mapState(['personLsit']),
        sum(){
            return this.$store.state.countAbout.sum
        },
        firstPersonName(){
            return this.$store.getters['personAbout/firstPersonName']
        }
    },
    methods:{
        add(){
            const personObj = {id:nanoid(), name:this.name}
            console.log(personObj)
            this.$store.commit('personAbout/ADD_PERSON', personObj)
            this.name=''
        },
        addLi(){
            const personObj = {id:nanoid(), name:this.name}
            this.$store.commit('personAbout/ADD_PERSON', personObj)
            this.name = ''
        },
        addPersonServer(){
            this.$store.dispatch('personAbout/addPersonServer')
        }
    }
}
</script>

<style>

</style>
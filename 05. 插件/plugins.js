// 第一种暴露写法
// const obj = {
//     install(){
//         console.log('@@install')
//     }
// }
// export default obj;


// 第二种
export default {
    install(Vue,x,y,z){
        console.log(x,'@',y,'@',z)
        console.log('@@install',Vue)

        // 全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,3)
        })

        // 定义全局指令
        Vue.directive('fbind',{
            // 指令与元素成功绑定时(一上来)
            bind(element,binding){
                element.value = binding.value
            },
            // 指令所在元素被插入页面时
            inserted(element, binding){
                element.focus()
            },
            // 指令所在的模块呗重新解析时
            unpdate(element, binding){
                element.value = binding.value
            }
        })

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x:200,
                    y: 200
                }
            },
        })

        // 给Vue原型上添加一个方法(vm和vc就都能用了)
        Vue.prototype.hello = ()=>{alert('你好')}


    }
}
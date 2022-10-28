## 路由的props配置
- 作用: 让路由组件更加方便的收到参数
```JavaScript
{
    path: 'message',
    component: Message,
    children: [
        {
            name: 'xiangqing',
            path: 'detail',
            component:Detail,
            // props的第一种写法, 值为对象
            // 该对象中的所有key-value都会以props的形式传给Detail组件
            // props: {a:1, b:'hello',}
            // props的第二种写法, 值为布尔值, 若布尔值为真, 就会把该路由组件收到的所有params参数, 以props的形式传给Detail组件
            // props: true
            // props的第三种写法, 值为函数
            props($route){
                return {id:$route.query.id, title:$route.query.title}
            }
            // 第三种简化
            // props({query}){
            //     return {id:query.id, title:query.title}
            // }
            // 更简洁写法, 连续结构复制(但不推荐)
            // props({query:{id, title}}){
            //     return {id, title}
            // }
        }
    ]
}
```
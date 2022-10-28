## 命名路由
1. 作用: 可以简化路由的跳转
2. 如何使用
   - 给路由命名: 
        ```JavaScript
        {
            path: '/home',
            component: Home,
            children:[
                {
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component:Detail,
                        }
                    ]
                }
            ]
        },
        ```
   - 简化跳转:
        ```JavaScript
        <!-- 简化前, 需要写完整的路径 -->
        <router-link to="/about">About</router-link>
        <!-- 简化后, 直接通过名字跳转 -->
        <router-link :to="{name:'guanyu'}">About</router-link>
        <!-- 简化写法配合传递参数 -->
        <router-link
            :to="{
                name:'hello',
                query:{
                    id:666,
                    title:'你好'
                }
            }">跳转
        </router-link>
        ```

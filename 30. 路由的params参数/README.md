## 路由的params参数
1. 配置路由, 声明接收params参数
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
                        path: 'detail/:id/:title',  // 这里改了
                        component:Detail,
                    }
                ]
            }
        ]
    },
    ```
2. 传递参数
    ```JavaScript
    <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带params参数, to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

        <!-- 跳转路由并携带params参数, to的对象写法 -->
        <router-link :to="{
          name:'xiangqing',
          params:{
            id:m.id,
            title:m.title
          }
        }">
        {{m.title}}
        </router-link>
    </li>
    ```
    **特别注意:** 路由携带params参数时, 若使用to的对象写法, 则不能使用path配置项, 必须使用name配置
3. 接收参数
    ```JavaScript
    $route.params.id
    $route.params.title
    ```

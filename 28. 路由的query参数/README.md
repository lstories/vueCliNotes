## 路由的query参数
1. 传递参数
    ```JavaScript
    <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带query参数, to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

        <!-- 跳转路由并携带query参数, to的对象写法 -->
        <router-link :to="{
          path:'/home/message/detail',
          query:{
            id:m.id,
            title:m.title
          }
        }">
        {{m.title}}
        </router-link>
    </li>
    ```
2. 接收参数
    ```JavaScript
    $route.query.id
    $route.query.title
    ```

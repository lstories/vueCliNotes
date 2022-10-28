## 多级路由
1. 配置路由规则, 使用```children```配置项:
    ```JavaScript
    // 该文件用于创建整个应用的路由器
    import VueRouter from 'vue-router';
    // 引入组件
    import About from '../pages/About';
    import Home from '../pages/Home';
    import News from '../pages/News'
    import Message from '../pages/Message'
    // 创建一个路由器
    // 暴露路由器第二种写法
    export default new VueRouter({
        routes: [
            {
                path: '/about',
                component: About
            },
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
                    }
                ]
            },
        ]
    });
    ```
2. 跳转(要写完整路径)
    ```vue
    <router-link to="/home/message">Message</router-link>
    ```


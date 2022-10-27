## vue-router
### 相关理解
1. vue-router的理解
   - vue 一个插件库, 专门用来实现 SPA 应用
   - npm i vue-router
   - Vue.use()
2. 对SPA应用理解
   - 单页web应用(single page web application, SPA)
   - 整个应用只有一个完整的页面(index.html)
   - 点击页面中的导航链接不会刷新页面, 只会做页面的局部更新
   - 数据需要通过Ajax请求获取
3. 路由的理解
   - 什么是路由?
     - 一个路由就是一组映射关系(key - value)
     - key为路径, value 可能是 function 或者 component
   - 路由分类
     - 后端路由:
       - 理解: value是function, 用于处理客户端提交的请求
       - 工作过程: 服务器收到一个请求时, 根据请求路径找到匹配的函数来处理请求, 返回响应数据
     - 前端路由:
       - 理解: value是component, 用于展示页面内容
       - 工作过程: 当浏览器的路径改变时, 对应的组件就会显示

### 基本使用
1. 安装vue-router, 命令: ```npm i vue-router```
2. 应用插件: ````Vue.use(VueRouter)```
3. 编写router配置项: 
    ```JavaScript
    // 该文件用于创建整个应用的路由器
    import VueRouter from 'vue-router';
    // 引入组件
    import About from '../components/About';
    import Home from '../components/Home';
    // 创建一个路由器
    // 暴露路由器第二种写法
    export default new VueRouter({
    //const router = new VueRouter({
        routes: [
            {
                path: '/about',
                component: About
            },
            {
                path: '/home',
                component: Home
            }
        ]
    });
    // 暴露路由器 , 第一种写法
    // export default router;
    ```
4. 实现切换(active-class可配置高亮样式)
    ```JavaScript
    <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
    ```
5. 指定展示位置
    ```JavaScript
    <router-view></router-view>
    ```
### 几个注意点
1. 路由组件通常存放在```pages```文件夹, 一般组件通常存放在```components```文件夹
2. 通过切换, "隐藏"了路由组件, 默认是被销毁的, 需要的时候再去挂载
3. 每个组件都有自己的``$route``属性, 里面存放着自己的路由信息
4. 整个应用只有一个router, 可以通过组件 ``$router``属性获取到


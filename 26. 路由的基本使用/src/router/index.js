// 该文件用于创建整个应用的路由器
import VueRouter from 'vue-router';
// 引入组件
import About from '../pages/About';
import Home from '../pages/Home';
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
        },
    ]
});
// 暴露路由器 , 第一种写法
// export default router;
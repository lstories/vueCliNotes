## ```router-link```的replace属性
1. 作用: 控制路由跳转时操作浏览器历史记录的模式
2. 浏览器的历史有两种写入方式: 分别是``push``和``replace``
   - push: 是追加历史记录
   - replace: 是替换当前记录, 路由跳转时默认为 ``push``
3. 如何开启``replace``模式: ``<router-link :replace="true" ....>About</router-link>
``
## 消息订阅与发布
1. 一种组件间通信的方式, 适用于任意组件间通信
2. 使用步骤: 
   - 安装pubsub: ``` npm i pubsub-js ```
   - 引入: ```import pubsub from 'pubsub-js'```
   - 接收数据: A组件想接收数据, 则在A组件中订阅消息, 订阅的回调留在A组件自身
        ```
        methods(){
            demo(data){....}
        }
        ....
        mounted(){
            this.pid - pubsub.subscribe('xxx',this.demo)    // 订阅消息
        }
        ```
   - 提供数据: ``` pubsub.publish('xxx',数据) ```
   - 最好在beforeDestroy钩子中, 用 ```pubSub.unsubscribe(pid)``` 去 ```<sapn style="color:red">取消订阅</span>```
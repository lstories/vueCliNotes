## 编程式路由导航
1. 作用: 不借助``<router-link>``实现路由跳转, 让路由跳转更加灵活
2. 具体编码:
    ```JavaScript
    pushShow(m){
      // console.log(this.$router)
      this.$router.push({
        name:'xiangqing',
          query:{
            id:m.id,
            title:m.title
          }
      })
    },
    replaceShow(m) {
      this.$router.replace({
        name:'xiangqing',
          query:{
            id:m.id,
            title:m.title
          }
      })
    }


    // 连续后退两步  +2是前进两步
    this.$router.go(-2)
    // 前进
    this.$router.forward()
    // 后退
    this.$router.back()
    ```

## 缓存路由组件
1. 作用: 让步展示的路由组件保持挂载, 不被销毁
2. 具体编码:
    ```JavaScript
    <keep-alive include="News">
		<router-view></router-view>
	</keep-alive>
    ```

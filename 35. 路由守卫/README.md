## 路由守卫
1. 作用: 对路由进行权限控制
2. 分类: 全局守卫, 独享守卫, 组件内守卫
3. 全局守卫:
    ```JavaScript
    // 全局前置路由守卫 -- 初始化的时候被调用, 每次路由切换之前被调用
    router.beforeEach((to, from, next)=>{
        console.log('前置路由守卫', to, from)
        if(to.meta.isAuth){ // 判断是否需要鉴权
        // if(to.path === '/home/news' || to.path === '/home/message'){
            if(localStorage.getItem('school') === 'atlizhi'){
                next()
            } else {
                alert('学校名不对, 无权限查看')
            }
        } else {
            next()
        }
    })

    // 全局后置路由守卫 -- 初始化的时候被调用, 每次路由切换之后被调用
    router.beforeEach((to, from)=>{
        console.log('后置路由守卫', to, from)
        if(to.meta.title){
            document.title = to.meta.title || 'lizhi系统'
        } else {
            document.title = 'vue_test'
        }
    })
    ```
4. 独享路由守卫:
    ```JavaScript
    {
        name: 'xinwen',
        path: 'news',
        component: News,
        meta: {isAuth:true, title:'新闻'},
        beforeEnter: (to, from, next) => {
            console.log('News独享路由守卫', to, from)
            if(to.meta.isAuth){ // 判断是否需要鉴权
            // if(to.path === '/home/news' || to.path === '/home/message'){
                if(localStorage.getItem('school') === 'atlizhi'){
                    next()
                } else {
                    alert('学校名不对, 无权限查看')
                }
            } else {
                next()
            }
        },
    },
    ```
5. 组件内守卫: 
    ```JavaScript
    // 通过路由规则, 进入该组件时被调用
    beforeRouteEnter (to, from, next) {
      console.log('组件路由beforeRouteEnter', to, from)
      if(to.meta.isAuth){ // 判断是否需要鉴权
      // if(to.path === '/home/news' || to.path === '/home/message'){
          if(localStorage.getItem('school') === 'atlizhi'){
              next()
          } else {
              alert('学校名不对, 无权限查看')
          }
      } else {
          next()
      }
    },

    // 通过路由规则, 离开该组件时被调用
    beforeRouteLeave (to, from, next){
      console.log('组件路由beforeRouteLeave', to, from)
      next()
    },
    ```
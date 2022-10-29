## 路由器的两种工作模式
1. 对于一个url来说, 声明是hash值? ----- # 及其后面的内容就是hash值
2. hash值不会包含在HTTP请求中, 即: hash值不会带给服务器
3. hash模式:
   - 地址中永远带着#号, 不美观
   - 若以后降低至通过第三方手机app分析, 若app校验严格, 则地址会被标记为不合法
   - 兼容性较好
4. history模式:
   - 地址干净, 美观
   - 兼容性和hash模式相比较差
   - 应用部署上线时需要后端人员支持, 解决刷新页面服务端404的问题
5. 命令及过程
```JavaScript
// 打包项目 npm run build
PS E:\vscode\reps\vue_test> npm run build

> vue_test@0.1.0 build
> vue-cli-service build

All browser targets in the browserslist configuration have supported ES module.
Therefore we don't build two separate bundles for differential loading.


⠙  Building for production...

 DONE  Compiled successfully in 16809ms                                                                                                                                                                                   10:58:29

  File                                 Size                                                                                        Gzipped

  dist\js\chunk-vendors.951869c5.js    133.37 KiB                                                                                  45.47 KiB
  dist\js\app.838efee3.js              6.54 KiB                                                                                    2.60 KiB
  dist\css\bootstrap.css               150.62 KiB                                                                                  21.19 KiB

  Images and other types of assets omitted.
  Build at: 2022-10-29T02:58:29.915Z - Hash: 3147264a5a0446a9 - Time: 16809ms

 DONE  Build complete. The dist directory is ready to be deployed.
 INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html


// 创建一个小型的服务器命令
PS D:\GitHub\Server> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

Is this OK? (yes)
PS D:\GitHub\Server>
PS D:\GitHub\Server>
PS D:\GitHub\Server> npm i express
added 57 packages in 8s

// 启动服务器
PS D:\GitHub\Server> node server
服务器启动成功了

// 为了解决 history 方式的地址访问的问题
// 安装 npm 的中间件, 处理404的问题
PS D:\GitHub\Server> npm i connect-history-api-fallback
added 1 package in 4s

```
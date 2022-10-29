const express = require("express");

const app = express();
app.use(history())  // 使用npm中间件, 使用history方式处理404
app.use(express.static(__dirname + "/static"))

app.get('/person',(req, res)=>{
  res.send({
    name: 'tom',
    age: 18
  })
})


app.listen(5005,(err)=>{
  if(!err)
    console.log("服务器启动成功了")
})
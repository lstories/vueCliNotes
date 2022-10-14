<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img slot="center" src="./assets/logo.png" alt="">
      <a slot="footer" href="https://www.bilibili.com/">更多内容</a>
    </Category>
    <Category title="游戏" :listData="games">
      <ul slot="center">
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
      <div slot="footer" class="footer">
        <a href="https://www.bilibili.com/">单击游戏</a>
        <a href="https://www.bilibili.com/">网络游戏</a>
      </div>
    </Category>
    <Category title="电影" :listData="films">
      <video slot="center" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer> <!-- 新写法 -->
        <div class="footer">
          <a href="https://www.bilibili.com/">经典</a>
          <a href="https://www.bilibili.com/">热门</a>
          <a href="https://www.bilibili.com/">推荐</a>
        </div>
      </template>
      
    </Category>
  </div>
</template>

<script>
import Category from './components/Category';

export default {
  name:"App",
  components:{ Category },
  data(){
    return {
      foods:['火锅','烧烤','小龙虾','牛排'],
      games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
      films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
    }
  },
  
}
</script>

<style lang="css">
  .container, .footer{
    display: flex;
    justify-content: space-around;
  }
  img{
    width: 100%;
  }
  video{
    width: 100%;
  }
</style>

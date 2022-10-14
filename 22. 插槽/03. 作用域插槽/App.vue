<template>
  <div class="container">
    <Category title="游戏">
      <template scope="Games">
        <ul>
          <li v-for="(g,index) in Games.games" :key="index">{{g}}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="Games">
        <ol>
          <li v-for="(g,index) in Games.games" :key="index">{{g}}</li>
        </ol>
      </template>
    </Category>    
    <Category title="游戏">
      <template scope="{games}">
      <!-- <template slot=scope="{games}"> 另一种写法-->
        <h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
      </template>
    </Category>
      
  </div>
</template>

<script>
import Category from './components/Category';

export default {
  name:"App",
  components:{ Category },

  
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

<template>
    <div>
      <div class="row">
        <About/>
        <Banner/>
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <!-- vue中借助router=link标签实现路由的切换 -->
            <!-- 
              replace属性
              完整写法: :replace="true"
              简写: replace
             -->
            <router-link class="list-group-item" active-class="active" :to="{name:'guanyu'}">About</router-link>
            <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
              <!-- 指定组建的呈现位置 -->
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Banner from "./components/Banner"
import About from './pages/About';
export default {
  name: "App",
  components:{
    Banner,
    About
  },
  mounted() {
    console.log('App', this);
  }
}
</script>




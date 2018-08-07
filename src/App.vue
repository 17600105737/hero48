<template>
  <div id="app">
    <!-- AppHeader -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- AppSidebar -->
        <app-sidebar></app-sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 路由占位 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//导入顶部栏和侧边栏组件
import AppHeader from './components/AppHeader.vue';
import AppSidebar from './components/AppSidebar.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // 局部组件
  components:{
    AppHeader,
    AppSidebar
  }
}
</script>

<style>
</style>

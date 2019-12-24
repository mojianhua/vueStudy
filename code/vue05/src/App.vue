<template>
  <div id="app">
    <Vheader></Vheader>
    <router-view/>
  </div>
</template>

<script>

//导入扩展
import 'bootstrap/dist/css/bootstrap.min.css' 
// 导入视图
import Vheader from './components/Vheader'
export default {
  name: 'App',
  components:{
    Vheader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

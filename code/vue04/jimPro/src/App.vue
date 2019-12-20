<template>
  <!-- 页面结构 -->
  <div class="app">
    <h3>{{msg}}</h3>
    <Vheader></Vheader>
    <Vbody></Vbody>
    <Vfoot></Vfoot>
  </div>
</template>

<script>
  //引入子组建
  import Vheader from './components/Vheader'
  import Vbody from './components/Vbody'
  import Vfoot from './components/Vfoot'

  //页面的业务逻辑
  export default{
    name:'App',
      data(){
        return{
          msg:"hello 组建"
        }
      },
      methods:{

      },
      computed:{

      },
      components:{
        Vheader,
        Vbody,
        Vfoot
      }
  }
</script>

<style>

</style>
<template>
  <!-- 页面结构 -->
  <header class="header">
    {{Vheader}}
    <h3>设置</h3>
  </header>
</template>

<script>
  //页面的业务逻辑
  export default{
    name:'App',
      data(){
        return{
          Vheader:"我是header"
        }
      },
      methods:{

      },
      computed:{
        
      }
  }
</script>

<!-- scoped 不同组建样式不冲突 -->
<style scoped>
    h3{
      color: yellow;
    }
</style>
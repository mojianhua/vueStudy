<template>
  <!-- 页面结构 -->
  <font class="foot">
    {{Vfoot}}
    <h3>设置</h3>
  </font>
</template>

<script>
  //页面的业务逻辑
  export default{
    name:'App',
      data(){
        return{
          Vfoot:"我是foot"
        }
      },
      methods:{

      },
      computed:{
        
      }
  }
</script>

<!-- scoped 不同组建样式不冲突 -->
<style scoped="">
    h3{
      color: blue;
    }
</style>
<template>
  <!-- 页面结构 -->
  <div class="body">
    {{Vbody}}
    <h3>设置</h3>
  </div>
</template>

<script>
  //页面的业务逻辑
  export default{
    name:'App',
      data(){
        return{
          Vbody:"我是VBody"
        }
      },
      methods:{

      },
      computed:{
        
      }
  }
</script>

<!-- scoped 不同组建样式不冲突 -->
<style>
    h3{
      color: red;
    }
</style>
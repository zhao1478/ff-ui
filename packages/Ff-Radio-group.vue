<template>
  <div class="ff-radio-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'FfRadioGroup',
    // 接收到value 最后在触发input事件
    // provide 与 inject 相当于是任意组件传参
    props:{
      value:null
    },
    provide(){
      return{
        RadioGroup:this
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
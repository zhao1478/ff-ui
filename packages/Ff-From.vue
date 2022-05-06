<template>
  <div class="ff-from">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'FfFrom',
    props:{
      model:{
        type:Object,
        required:true
      },
      labelWidth:{
        type:String,
        default:'80px'
      }
    },
    provide(){
      return {
        From:this
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
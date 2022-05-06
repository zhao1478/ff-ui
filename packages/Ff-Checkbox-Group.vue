<template>
  <div class="ff-check-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'FfCheckboxGroup',
    props:{
      value:{
        type:Array
      }
    },
    provide(){
      return {
        CheckGroup:this
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
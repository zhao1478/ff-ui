<template>
  <div class="ff-from-item">  
    <label class="ff-from-item__label" :style="{width:this.From.labelWidth}">{{label}}</label>
    <div class="ff-from-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:'FfFromItem',
    props:{
      label:{
        type:String
      }
    },
    inject:['From']
  }
</script>

<style lang="scss" scoped>
.ff-from-item{
  margin-bottom: 25px;
  .ff-from-item__label{
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0 ;
    box-sizing: border-box;
  }
  .ff-from-item__content{
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
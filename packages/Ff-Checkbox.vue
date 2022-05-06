<template>
  <label class="ff-checkbox" :class="{'is-checked':ischeckbox}">
    <span class="ff-checkbox__input">
      <span class="ff-checkbox__inner"></span>
      <input 
      type="checkbox" 
      class="ff-checkbox__original" 
      :name="name"
      v-model="model"
      :value="label"
      >
    </span>
    <span class="ff-checkbox__lable">
     <slot></slot>
     <!-- 如果不穿内容就用 lable 的内容-->
     <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
  export default {
    name:'FfCheckbox',
    inject:{
      CheckGroup:{
        default:''
      }
    },   
    computed:{
      isgroup(){
        return !!this.CheckGroup
      },
      model:{
        get(){
          return this.isgroup ? this.CheckGroup.value : this.value
        },
        set(value){
          this.isgroup ? this.CheckGroup.$emit('input',value) : this.$emit('input',value)
        }
      },
      ischeckbox(){
        return this.isgroup ? this.model.includes(this.label) : this.model
      }
    },
    props:{
      value:{
        type:Boolean,
        default:false
      },
      name:{
        type:String,
        default:''
      },
      label:{
        type:[String,Number,Boolean],
        default:''
      }
    }, 
  
  }
</script>

<style lang="scss" scoped>
.ff-checkbox {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .ff-checkbox__input{
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .ff-checkbox__inner {
      border: 1px solid #DCDFE6;
      border-radius: 20%;
      width: 14px;
      height: 14px;
      position: relative;
      display: inline-block;
      background-color: #FFF;
      cursor: pointer;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 20%;
        background-color: #FFF;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: -webkit-transform .15s ease-in;
      }
    }
      .ff-checkbox__original {
        opacity: 0;
        outline: 0;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0
      }
  }
  .ff-checkbox__lable {
    font-size: 14px;
    padding-left: 10px
  }
}

// 选中之后的样式
.ff-checkbox.is-checked{
  .ff-checkbox__input {
    .ff-checkbox__inner {
      border-color: #409eff;
      background-color: #409eff;
      &::after{
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .ff-checkbox__lable{
    color: #409eff;
  }
}
</style>
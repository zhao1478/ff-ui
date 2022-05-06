<template>
  <label class="ff-radio" :class="{'is-checked': label === model}">
    <span class="ff-radio__input">
      <span class="ff-radio__inner"></span>
      <input 
      type="radio" 
      class="ff-radio__original"
      :value='label'
      :name='name'
      v-model="model"
      >
    </span>
    <span class="ff-radio__lable">
     <slot></slot>
     <!-- 如果不穿内容就用 lable 的内容-->
     <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
  export default {
    name:'FfRadio',
    props:{
      label:{
        type:[String,Number,Boolean],
        default:''
      },
      value:null,
      name:{
        type:String,
        default:''
      }
    },
    inject:{
      RadioGroup:{
        default:''
      }
    },
    // 提供一个计算属性来自定义一个model
    computed:{
      model: {
        get(){
          return this.isGroup ? this.RadioGroup.value : this.value
        },
        set(value){
          // 触发父组件的input事件
          this.$emit('input',value)
          this.isGroup ? this.RadioGroup.$emit('input',value) : this.$emit('input',value)
        }
      },
      isGroup(){
        // 用来判断radio是否被radiogroup包裹
        return !!this.RadioGroup
      }
    }
  }
</script>

<style lang="scss" scoped>
.ff-radio {
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
  .ff-radio__input{
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .ff-radio__inner {
      border: 1px solid #DCDFE6;
      border-radius: 100%;
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
        border-radius: 100%;
        background-color: #FFF;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: -webkit-transform .15s ease-in;
      }
    }
      .ff-radio__original {
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
  .ff-radio__lable {
    font-size: 14px;
    padding-left: 10px
  }
}

// 选中之后的样式
.ff-radio.is-checked{
  .ff-radio__input {
    .ff-radio__inner {
      border-color: #409eff;
      background-color: #409eff;
      &::after{
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .ff-radio__lable{
    color: #409eff;
  }
}
</style>
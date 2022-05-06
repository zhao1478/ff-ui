<template>
  <div class="ff-input" :class="{'ff-input--suffix':showSuffix}">
    <input 
    :type="showPassword ? (passwordVisible ? 'text' : 'password') : type" 
     class="ff-input__inner"
    :placeholder='placeholder' 
    :name='name'
    :value='value'
    @input="handInput"
    >
    <span class="ff-input__suffix" v-if="showSuffix">
      <!-- 点击小图标清空input的值 -->
      <i class="ff-input-icon ff-icon-circle-close" v-if="clearable && value" @click="clear"></i>
      <i class="ff-input-icon ff-icon-view" 
      :class="{'ff-icon-view-active':passwordVisible}"
      v-if="showPassword" @click="handPassword"></i>
    </span>
  </div>
</template>

<script>
  export default {
    name:'FfInput',
    data() {
      return {
        // 用来控制是否显示密码框
        passwordVisible: false
      }
    },
    props:{
      placeholder:{
        type:String,
        default:''
      },
      type:{
        type:String,
        default:'text'
      },
      name:{
        type:String,
        default:''
      },
      value:{
        type:String,
        default:''
      },
      clearable:{
        type:Boolean,
        default:false
      },
      showPassword:{
        type:Boolean,
        default:false
      }
    },
    computed:{
      showSuffix(){
        return this.clearable || this.showPassword
      }
    },
    methods: {
      handInput(e) {
        this.$emit('input',e.target.value)
      },
      clear(){
        this.$emit('input','')
      },
      handPassword(){
        this.passwordVisible = !this.passwordVisible
      }
    },
  }
</script>

<style lang="scss" scoped>
.ff-input{
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
.ff-input__inner {
    -webkit-appearance: none;
    background-color: #FFF;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
}

.ff-input--suffix{
  .ff-input__inner{
    padding-right: 30px;
  }
  .ff-input__suffix{
    position: absolute;
    height: 100px;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #FFF;
    transition: all .3s;
    z-index: 999;
  }
  i{
    color: #c0c4cc;
    font-size: 14px;
    cursor: pointer;
    transition: color .2s cubic-bezier(.645,.045,.355,1);
  }
  .ff-icon-view-active{
    color: blue;
  }
}
</style>
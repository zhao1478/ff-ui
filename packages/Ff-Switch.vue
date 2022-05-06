<template>
  <div class="ff-switch" :class="{'is-checked':value}" @click="handleClick">
     <input type="checkbox" class="ff-switch__input" :name="name" ref="input">
     <span class="ff-switch__core" ref="core">
       <span class="ff-switch__button">
       </span>
     </span>
  </div>
</template>

<script>
  export default {
    name:'FfSwitch',
    props:{
      value:{
        type:Boolean,
        default:false
      },
      activeColor:{
        type:String,
        default:''
      },
      inactiveColor:{
        type:String,
        default:''
      },
      name:{
        type:String,
        default:''
      }
    },
    methods: {
      async handleClick() {
        this.$emit('input',!this.value)
        await this.$nextTick()
        this.setColor()
        this.$refs.input.checked = this.value
      },
      setColor() {
        // 修改开关的颜色
        if(this.activeColor || this.inactiveColor){
          let color = this.value ? this.activeColor : this.inactiveColor
          console.log(color);
          this.$refs.core.style.borderColor = color
          this.$refs.core.style.backgroundColor = color
        }
      }
    },
    mounted () {
      // 修改开关的颜色
      this.setColor()
      this.$refs.input.checked = this.value
    },
  }
</script>

<style lang="scss" scoped>
.ff-switch{
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
      .ff-switch__input {
      position: absolute;
      width: 0;
      height: 0;
      opacity: 0;
      margin: 0
    }
    .ff-switch__core{
      margin: 0;
      position: relative;
      width: 40px;
      height: 20px;
      border: 1px solid #DCDFE6;
      outline: 0;
      border-radius: 10px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      background: #DCDFE6;
      -webkit-transition: border-color .3s, background-color .3s;
      transition: border-color .3s, background-color .3s
   }
  .ff-switch__button{
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 100%;
    -webkit-transition: all .3s;
    transition: all .3s;
    width: 16px;
    height: 16px;
    background-color: #FFF
  }
}
// 被点击之后的样式
 .ff-switch.is-checked{
   .ff-switch__core{
     border-color: #409eff;
     background-color: #409eff;
     .ff-switch__button{
       transform: translateX(20px);
     }
   }
 }
</style>
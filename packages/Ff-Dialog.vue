<template>
<!-- self修饰符只对当前的div生效 -->
<transition name="dialog-fade">
  <div class="ff-dialog__wrapper" v-show="visible" @click.self="handleCose">
    <div class="ff-dialog" :style={width,top}>
      <div class="ff-dialog__header">
        <slot name="title">
          <span class="ff-dialog__title">{{title}}</span>
        </slot>
        <button class="ff-dialog__headerbtn" @click="handleCose">
          <i class="ff-dialog__close ff-icon-close"></i>
        </button>
      </div>
      <div class="ff-dialog__body">
        <!-- 默认插槽 -->
        <slot>默认信息</slot>
      </div>
      <div class="ff-dialog__footer" v-if="$slots.footer"> 
         <slot name="footer">
         </slot>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
  export default {
    name:'FfDialog',
    props:{
      title:{
        type:String,
        default:'提示'
      },
      width:{
        type:String,
        default:'30%'
      },
      top:{
        type:String,
        default:'15vh'
      },
      visible:{
        type:Boolean,
        default:false
      }
    },
    methods: {
      handleCose() {
        // console.log(1111111);
        this.$emit("update:visible",false)
      }
    },
  }
</script>

<style lang="scss" scoped>
.ff-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0,.5);
}
.ff-dialog {
  position: relative;
  margin: 15vh auto 50px;
  background: #FFF;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  width: 30%;
}
.ff-dialog__header {
  padding: 20px 20px 10px
}

.ff-dialog__headerbtn {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  background: 0 0;
  border: none;
  outline: 0;
  cursor: pointer;
  font-size: 16px
}

.ff-dialog__headerbtn .ff-dialog__close {
  color: #909399
}
.ff-dialog__headerbtn:focus .ff-dialog__close,
.ff-dialog__headerbtn:hover .ff-dialog__close {
  color: #409EFF
}
.ff-dialog__title {
  line-height: 24px;
  font-size: 18px;
  color: #303133
}

.ff-dialog__body {
  padding: 30px 20px;
  color: #606266;
  font-size: 14px;
  word-break: break-all
}

.ff-dialog__footer {
  padding: 10px 20px 20px;
  text-align: right;
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}
.ff-dialog__footer button:nth-child(1){
  margin: 0 10px;
}
.dialog-fade-enter-active{
   animation: fade .3s;
}
.dialog-fade-leave-active{
   animation: fade .3s reverse;
}
@keyframes fade{
  0%{
    opacity: 0;
    transform: translateY(-20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
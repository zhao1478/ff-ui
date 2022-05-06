<template> 
 <button class="ff-button" :class="[`ff-button--${type}`,{
   'is-plain':plain,
   'is-round':round,
   'is-circle':circle,
   'is-disabled':disabled
   }]"
   :disabled='disabled'
   @click='handleClick'>
   <i v-if="icon" :class="icon"></i>
   <!-- 当没有slot插槽时这个span隐藏掉 -->
   <span v-if="$slots.default"><slot></slot></span>
 </button>
</template>

<script>
  export default {
    name:'FfButton',
    props:{
      type:{
        type:String,
        default:'default'
      },
      plain:{
        type:Boolean,
        default:false
      },
      round:{
        type:Boolean,
        default:false
      },
      circle:{
        type:Boolean,
        default:false
      },
      icon:{
        type:String,
        default:''
      },
      disabled:{
        type:Boolean,
        default:false
      }
    },
    // 给按钮添加点击事件
    methods:{
      handleClick(e){
        this.$emit('click',e)
      }
    }
  }
</script>

<style lang="scss" scoped>
.ff-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #FFF;
  border: 1px solid #DCDFE6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus{
    color: #409EFF;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.ff-button--primary{
  color: #FFF;
  background-color: #409EFF;
  border-color: #409EFF;
  &:hover,
  &:focus{
    background: #66b1ff;
    border-color: #66b1ff;
    color: #FFF;
  }
}
.ff-button--success{
    color: #FFF;
    background-color: #67C23A;
    border-color: #67C23A;
    &:hover,
    &:focus{
    background: #85ce61;
    border-color: #85ce61;
    color: #FFF;
    }
}
.ff-button--info{
    color: #FFF;
    background-color: #909399;
    border-color: #909399;
  &:hover,
  &:focus{
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #FFF;
  }
}
.ff-button--warning{
    color: #FFF;
    background-color: #E6A23C;
    border-color: #E6A23C;
  &:hover,
  &:focus{
    background: #ebb563;
    border-color: #ebb563;
    color: #FFF;
  }
}
.ff-button--danger{
    color: #FFF;
    background-color: #F56C6C;
    border-color: #F56C6C;
  &:hover,
  &:focus{
    background: #f78989;
    border-color: #f78989;
    color: #FFF;
  }
}
// 朴素按钮
.ff-button .is-plain{
  &:hover,
  &:focus{
    background: #FFF;
    border-color: #409EFF;
    color: #409EFF;
  }
}
.ff-button--primary.is-plain{
  color: #409EFF;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus{
    background: #409EFF;
    border-color: #409EFF;
    color: #FFF;
  }
}
.ff-button--success.is-plain{
    color: #67C23A;
    background: #f0f9eb;
    border-color: #c2e7b0;
  &:hover,
  &:focus{
    background: #67C23A;
    border-color: #67C23A;
    color: #FFF;
  }
}
.ff-button--info.is-plain{
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
  &:hover,
  &:focus{
    background: #909399;
    border-color: #909399;
    color: #FFF;
  }
}
.ff-button--warning.is-plain{
    color: #E6A23C;
    background: #fdf6ec;
    border-color: #f5dab1;
  &:hover,
  &:focus{
    background: #E6A23C;
    border-color: #E6A23C;
    color: #FFF;
  }
}
.ff-button--danger.is-plain{
    color: #F56C6C;
    background: #fef0f0;
    border-color: #fbc4c4;
  &:hover,
  &:focus{
    background: #F56C6C;
    border-color: #F56C6C;
    color: #FFF;
  }
}
// 圆角按钮
.ff-button.is-round{
  border-radius: 20px;
  padding: 12px 23px;
}

.ff-button--primary.is-round{
  color: #FFF;
  background-color: #409EFF;
  border-color: #409EFF;
  &:hover,
  &:focus{
    background: #66b1ff;
    border-color: #66b1ff;
    color: #FFF;
  }
}
.ff-button--success.is-round{
    color: #FFF;
    background-color: #67C23A;
    border-color: #67C23A;
    &:hover,
    &:focus{
    background: #85ce61;
    border-color: #85ce61;
    color: #FFF;
    }
}
.ff-button--info.is-round{
    color: #FFF;
    background-color: #909399;
    border-color: #909399;
  &:hover,
  &:focus{
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #FFF;
  }
}
.ff-button--warning.is-round{
    color: #FFF;
    background-color: #E6A23C;
    border-color: #E6A23C;
  &:hover,
  &:focus{
    background: #ebb563;
    border-color: #ebb563;
    color: #FFF;
  }
}
.ff-button--danger.is-round{
    color: #FFF;
    background-color: #F56C6C;
    border-color: #F56C6C;
  &:hover,
  &:focus{
    background: #f78989;
    border-color: #f78989;
    color: #FFF;
  }
}
// 圆形按钮
.ff-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
// 图标
.ff-button [class*=ff-icon-]+span {
  margin-left: 5px;
}
.ff-button.is-disabled{
  color: #C0C4CC;
  cursor: not-allowed;
  background-image: none;
  background-color: #FFF;
  border-color: #EBEEF5;
}
.ff-button--primary.is-disabled{
    color: #FFF;
    background-color: #a0cfff;
    border-color: #a0cfff;
}
.ff-button--success.is-disabled{
    color: #FFF;
    background-color: #b3e19d;
    border-color: #b3e19d;
}
.ff-button--info.is-disabled{
     color: #FFF;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
}
.ff-button--warning.is-disabled{
    color: #FFF;
    background-color: #f3d19e;
    border-color: #f3d19e;
}
.ff-button--danger.is-disabled{
    color: #FFF;
    background-color: #fab6b6;
    border-color: #fab6b6;
}
</style>
// 整个包的入口文件 
// 定义install方法 接受vue作为参数 如果使用use注册插件 则所有的组件都会被祖册
import Button from './Ff-Button.vue'
import CheckboxGroup from './Ff-Checkbox-Group.vue'
import Checkbox from './Ff-Checkbox.vue'
import Dialog from './Ff-Dialog.vue'
import FromItem from './Ff-From-Item.vue'
import From from './Ff-From.vue'
import Input from './Ff-Input.vue'
import RadioGroup from './Ff-Radio-group.vue'
import Radio from './Ff-Radio.vue'
import Switch from './Ff-Switch.vue'
import './fonts/icon.scss'

// 储存组件列表
const components =[
  Button,
  CheckboxGroup,
  Checkbox,
  Dialog,
  FromItem,
  From,
  Input,
  RadioGroup,
  Radio,
  Switch
]
const install = function (Vue) {
  // 全局祖册所有的组件
  components.forEach((item)=>{
    Vue.component(item.name,item)
  })
}
// 判断是否直接引入文件，如果是就不调用vue.use
if(typeof window !== 'undefined' && window.Vue){
  install(window.Vue)
}
export default {
  install 
}
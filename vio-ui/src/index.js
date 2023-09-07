import VioButton from './packages/button/index.js';  // 导入 VioButton 组件
import VioInput from './packages/input/index.js';  // 导入 VioInput 组件

const components = [
  VioButton,  // VioButton 组件
  VioInput,  // VioInput 组件
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);  // 注册组件
  })
}


export default {
  install,  // 安装方法
  VioButton,  // VioButton 组件
  VioInput,  // VioInput 组件
}


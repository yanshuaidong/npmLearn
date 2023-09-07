// 1、通过 import 语句导入了一个名为 VioButton 的组件
import VioButton from './vio-button';
// console.log('VioButton',  typeof VioButton); // object

// 2、给 VioButton 对象 添加 install 方法

// `Vue.component` 方法是 Vue.js 提供的一个全局方法，用于注册全局组件。
// 它的语法是：`Vue.component(name, options)`。
// - `name`：组件的名称，用于在模板中使用组件时进行引用。
// - `options`：组件的选项对象，包含组件的配置信息，如数据、方法、生命周期钩子等。
// 通过调用 `Vue.component` 方法，可以将一个组件注册为全局组件，从而可以在任何地方使用该组件。
VioButton.install = function(Vue) {
  Vue.component(VioButton.name, VioButton);
};

// 3、导出组件
export default VioButton;



import Vue from 'vue'
import App from './App.vue'

import VioUI from './index.js'
// console.log('VioUI',VioUI);
Vue.use(VioUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// `Vue.use` 方法是 Vue.js 提供的一个全局方法，用于安装 Vue.js 插件。

// 它的语法是：`Vue.use(plugin, options)`。

// - `plugin`：要安装的插件，可以是一个对象或一个函数。
// - `options`：可选参数，用于传递给插件的配置选项。

// 通过全局方法 Vue.use() 使用插件，
// Vue.use() 方法至少传入一个参数，该参数类型必须是 Object 或 Function，
// 如果是 Object 那么这个 Object 需要定义一个 install 方法，
// 如果是 Function 那么这个函数就被当做 install 方法。
// 在 Vue.use() 执行时 install 会默认执行，当 install 执行时第一个参数就是 Vue，其他参数是 Vue.use() 执行时传入的其他参数。
// 就是说使用它之后调用的是该组件的install 方法。



概述：
ysd-tools 工具包，用法类似于Lodash，包的功能是 ①格式化日期，②转义html中的特殊字符，③判断数据类型。
vio-ui 用法类似于element-ui。包括的功能是① vio-button 按钮组件，②vio-input 输入框组件。
renamecli 用法类似于 vue-cli。包括的功能是 图片重命名。
![](https://cdn.nlark.com/yuque/0/2023/jpeg/29272216/1690523484919-af626a03-e5af-4447-9194-4b4ce3ceaa95.jpeg)
开发环境：
```
node v20.1.0
@vue/cli 5.0.8
npm 9.6.4
```
开发新建文件夹share、dev、test，创建vue项目test vue create test
### 一、ysd-tools 工具包
```markdown
我们希望这样使用我们的 ysd-tools 包
npm i ysd-tools
const ysdtools = require('ysd-tools')
const dtType = ysdtools.dataType(2023)
console.log(dtType)
// 'number'
```
###### 1、创建包结构
lib下放工具函数，test下进行测试，index是入口文件，readme.md 包的说明文件。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/29272216/1690461643698-ef203edc-403e-4d78-b18c-6252381fee60.png#averageHue=%23222220&clientId=u492bbf96-42cd-4&from=paste&height=220&id=u04e6f5a8&originHeight=440&originWidth=436&originalType=binary&ratio=2&rotation=0&showTitle=false&size=35992&status=done&style=none&taskId=ue05e0c73-424a-4e21-8c10-921b57b384b&title=&width=218)
###### 2、编写具体代码
###### 3、测试
###### 4、写readme文件
###### 5、发布
```json
1、package.json文件
{
  "name": "ysd-tools", 名字
  "version": "1.0.1", 版本号
  "description": "格式化时间,获取数据类型,HTMLEscape相关的功能",描述
  "main": "index.js",入口文件
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["tools","dateFormat","escape","dataType","@ysd"],关键字
  "author": "ysd",开发人员
  "license": "ISC", 开源许可协议 允许用户自由地使用、修改和分发软件，包括商业用途
  "publishConfig": {
    "access": "public",任何人都可以使用和下载
    "registry": "https://registry.npmjs.org/" 表示该包将被发布到 NPM 的官方注册表中。
  }
}
2、设置npm镜像地址
npm config set registry https://registry.npmjs.org
3、登录 node 版本大于18
npm login
npm adduser
4、发布 npm publish
```
###### 6、查看 npm 官网登录账号查看是否发布成功。
###### 7、使用 npm i ysd-tools
###### 8、删除 npm unpublish 包名 --force
### 二、vio-ui的开发
```javascript
我们希望这样使用我们的 vio-ui 包
import VioUI from 'vio-ui'
Vue.use(VioUI)

<vio-button>确定</vio-button>
```
###### 1、新建vue项目
package文件下放组件代码
![image.png](https://cdn.nlark.com/yuque/0/2023/png/29272216/1690463460839-bbaa79c7-8148-4814-98c4-562b6c67cdb4.png#averageHue=%231d1d1c&clientId=u492bbf96-42cd-4&from=paste&height=422&id=u5ac7b697&originHeight=844&originWidth=560&originalType=binary&ratio=2&rotation=0&showTitle=false&size=78833&status=done&style=none&taskId=u7ab3211b-8fce-40ba-a67e-4aa2f72d7cb&title=&width=280)
###### 2、编写具体代码
###### 3、测试
###### 4、写readme文件
###### 5、发布
```json
{
  "name": "vio-ui",
  "version": "0.1.0",
  "description": "A Component Library for Vue.js.",
  "main": "src/index.js", 入口文件地址
  "scripts": {
    "serve": "vue-cli-service serve"
  },
  "dependencies": {
    "core-js": "^3.8.3",
    "sass": "^1.64.1",
    "sass-loader": "^13.3.2",
    "vue": "^2.6.14"
  },
  "devDependencies": {
    "@vue/cli-service": "~5.0.0",
    "vue-template-compiler": "^2.6.14",
    "webpack": "^5.88.2",
    "webpack-cli": "^5.1.4"
  },
  "author": "ysd",
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "parserOptions": {
      "parser": "@babel/eslint-parser"
    },
    "rules": {}
  },
  "keywords": [
    "vio-ui",
    "ui"
  ],
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ],
  "license": "ISC",
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  }
}
2、设置npm镜像地址
npm config set registry https://registry.npmjs.org
3、登录 node 版本大于18
npm login
npm adduser
4、发布 npm publish
```

### 3、重命名文件工具包 renamecli 
```markdown
我们希望这样使用我们的 renamecli 包

将本地图片上传到百度通用图像识别，获得图像的中文释义，再通过有道翻译成英文，重新设置图片名。
🐼=》熊猫 =〉panda
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/29272216/1690464252011-f67c1bd1-3587-4b1a-8470-af91096547ce.png#averageHue=%23bdb484&clientId=u492bbf96-42cd-4&from=paste&height=396&id=udb78dbb7&originHeight=792&originWidth=1386&originalType=binary&ratio=2&rotation=0&showTitle=false&size=161538&status=done&style=none&taskId=uc3bdd78d-00ee-4978-9601-6b5962f6fa2&title=&width=693)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/29272216/1690464265311-a1149511-5098-4562-99aa-b2ba42e3421b.png#averageHue=%23f9f8f7&clientId=u492bbf96-42cd-4&from=paste&height=371&id=uc450ba46&originHeight=742&originWidth=1142&originalType=binary&ratio=2&rotation=0&showTitle=false&size=207694&status=done&style=none&taskId=u333033b6-b3aa-4fac-bf29-84665f01aaa&title=&width=571)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/29272216/1690464276473-098a21c8-865b-41e8-bf28-3281ec95e127.png#averageHue=%23bdb484&clientId=u492bbf96-42cd-4&from=paste&height=396&id=u319f0824&originHeight=792&originWidth=1386&originalType=binary&ratio=2&rotation=0&showTitle=false&size=164985&status=done&style=none&taskId=u55324062-d8f1-444b-b37c-2226cfa20e1&title=&width=693)
2、开发，lib下有两个模块，identify负责图像识别，translator负责翻译。index负责执行脚本
![image.png](https://cdn.nlark.com/yuque/0/2023/png/29272216/1690464431351-f7a3e39e-d478-4f99-87f9-a268faca882e.png#averageHue=%23212120&clientId=u492bbf96-42cd-4&from=paste&height=263&id=uf211c591&originHeight=526&originWidth=514&originalType=binary&ratio=2&rotation=0&showTitle=false&size=47052&status=done&style=none&taskId=u70c1c261-5c92-43e4-927d-2f04d6798f1&title=&width=257)
3、测试
```json
{
  "name": "renameimg-cli",
  "version": "1.0.1",
  "description": "将本地图片上传到百度通用图像识别，获得图像的中文释义，再通过有道翻译成英文，重新设置图片的名称。",
  "main": "index.js",
  "bin": {
    "rename": "index.js"
  },
}

当在项目中运行 "npm install" 命令时，NPM 会根据 package.json 文件中的 "bin" 配置，
在全局的 node_modules/.bin 目录下创建一个符号链接，
将 "index.js" 文件链接到一个名为 "rename" 的可执行命令。

这样，可以在项目中的任何地方通过运行 "rename" 命令来执行 "index.js" 文件中的代码。

npm link
在本地开发环境中创建全局链接，将一个本地的 Node.js 模块链接到全局的 node_modules 目录中。
就可以在使用项目中直接引用本地的模块，而不需要通过 NPM 安装。
这对于本地开发和测试非常方便，可以快速地进行模块的修改和调试。
npm ls -g 查看全局包
npm unlink 解绑
```
4、使用
```markdown
npm install renameimg-cli -g
```
### 四、其他
1、上传到私有npm。
2、版本号规范
npm社区版本号规则采用的是[semver](https://link.jianshu.com/?t=http://semver.org/lang/zh-CN/)（语义化版本），主要规则版本格式：主版本号.次版本号.修订号，版本号递增规则如下：
```
主版本号：当你做了不兼容的 API 修改，
次版本号：当你做了向下兼容的功能性新增，
修订号：当你做了向下兼容的问题修正。
```
module  package.js 中
```markdown
#!/bin/bash

#先构建出dist
yarn build
#提交代码，升级版本号，然后发布到私服
git add .
git commit -m $1
echo 提交完毕：$1
#升级版本号，会自动提交和打上标签
npm version patch
#推送代码
git push
echo 开始发布到npm私服...
#需要事先提前登录账号
#echo 发布的私服完毕，开始发布到npm官网...
#npm publish --registry https://registry.npmjs.org/
echo 发布完毕
```
参考文档：
github代码地址：
[npm官网](https://docs.npmjs.com/about-packages-and-modules)
[npm中文网](https://npm.nodejs.cn/about-packages-and-modules)





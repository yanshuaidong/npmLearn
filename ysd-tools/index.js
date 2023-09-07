// 这是包的入口文件
const dataType = require('./lib/dataType')
const dateFormat = require('./lib/dateFormat')
const htmlEscape = require('./lib/htmlEscape')

// 向外暴露需要的成员
module.exports = {
    ...dataType,
    ...dateFormat,
    ...htmlEscape
}

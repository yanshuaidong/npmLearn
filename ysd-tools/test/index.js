const tools= require('../index.js')


const dtType = tools.dataType(2023)

console.log('数据类型',dtType)


const dtStr = tools.dateFormat(new Date())

console.log('格式化时间', dtStr)


const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
console.log('原来',htmlStr)
// 调用 htmlEscape 方法进行转换
const str = tools.htmlEscape(htmlStr)
// 转换的结果 &lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log('转换',str)

// 待还原的 HTML 字符串
const str2 = tools.htmlUnEscape(str)
// 输出的结果 <h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
console.log('还原',str2)

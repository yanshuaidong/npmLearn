// 获取数据类型的方法
function dataType(data) {
    return ({}).toString.call(data).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

// 这个函数是一个用于获取数据类型的方法。它接受一个参数 `data`，并返回该参数的数据类型。
// ({}).toString.call(11).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
// ({}).toString.call('11').match(/\s([a-zA-Z]+)/)[1].toLowerCase()
// ({}).toString.call(true).match(/\s([a-zA-Z]+)/)[1].toLowerCase()

module.exports = {
    dataType
}

// 使用commonjs规范导出这个函数






  
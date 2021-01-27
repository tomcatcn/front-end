const { type } = require('os')
const path = require('path')

var str1 = path.join(__dirname, '/a', './b.txt')
console.log(str1, typeof str1)
var str2 = '/a/b/a.txt'
var str3 = path.basename(str2, '.txt')
console.log(str3)
const escape = require('./src/htmlEscape')

const date = require('./src/dateFormat')

str = '<div>&   < > "   </div>'
    // 功能2：转移HTML中的特殊字符

module.exports = {
    escape,
    date
}
console.log(date.dateFormat(new Date()))
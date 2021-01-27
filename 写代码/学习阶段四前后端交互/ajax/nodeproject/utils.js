var s = 'namegjgjjg'
var person = {
    name: 'xiao',
    age: 15
}

function fn() {
    console.log('66666666666')
}
// exports.name = s
// exports.person = person
// exports.fn = fn
exports = {
    name: 'xiao',
    age: 20,
    fn2: () => {
        console.log('aaaa')
    }
}
module.exports = exports
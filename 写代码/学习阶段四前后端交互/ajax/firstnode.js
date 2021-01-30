const f = require('fs')
let strscore = null;
f.readFile(__dirname + '/成绩.txt', 'utf-8', function(err, result) {
    if (err) {
        console.log('读取失败:' + err.message)
        return
    }
    // console.log(result, typeof result)
    var data = result.split(' ')
    var newData = []
    data.forEach((value) => {
        console.log(value, typeof value);

        newData.push(value.replace('=', ':'))
    })


    newData = newData.join('\n')
    console.log(newData)
    f.writeFile(__dirname + '/ok.txt', newData, function(err) {
        if (err) {
            console.log("写入失败" + err.message)
        }
        console.log('写入成功')
    })

})
console.log('-----------------')
console.log(__dirname)

module.exports = {
    username: 'xiaociao'
}
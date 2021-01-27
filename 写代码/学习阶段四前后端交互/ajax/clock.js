const fs = require('fs')
const path = require('path')
const save_dir = path.join(__dirname + '/clock/')
var csspattern = /<style>[\s\S]*<\/style>/;
var jspattern = /<script>[\s\S]*<\/script>/;

fs.readFile(path.join(__dirname + '/index.html'), 'utf-8', function(err, result) {
    if (err) {
        console.log('读取失败:' + err.message)
        return
    }
    reselveCss(result)
    reselveJs(result)

    // html写入
    var content = result.replace(jspattern, `<script src="./index.js"></script>`)
    content = content.replace(csspattern, `<link rel="stylesheet" href="./index.css">`)
    fs.writeFile(save_dir + 'index.html', content, function(err) {
        if (err) {
            console.log('写入失败:' + err.message)
            return
        }
        console.log('写入成功:html')
    })

})

function reselveJs(htmlstr) {

    var content = jspattern.exec(htmlstr)
    content = content[0]
    content = content.replace('<script>', '')
    content = content.replace('</script>', '')
    fs.writeFile(save_dir + 'index.js', content, function(err) {
        if (err) {
            console.log('写入失败:' + err.message)
            return
        }
        console.log('写入成功:js')
    })
}

function reselveCss(htmlstr) {

    var content = csspattern.exec(htmlstr)
    content = content[0]
    content = content.replace('<style>', '')
    content = content.replace('</style>', '')
    fs.writeFile(save_dir + 'index.css', content, function(err) {
        if (err) {
            console.log('写入失败:' + err.message)
            return
        }
        console.log('写入成功:css')
    })
}
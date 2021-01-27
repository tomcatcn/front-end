const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', (req, res) => {
    console.log(req.url, typeof req)
    console.log(req.method, typeof req)
    let url = req.url
    let filepath = path.join(__dirname, url)
    fs.readFile(filepath, 'utf-8', function(err, result) {
        if (err) {
            return res.end('Not  found')
        }

        res.end(result)
    })


})

server.listen(80, () => {
    console.log('listen the localhost:80')
})
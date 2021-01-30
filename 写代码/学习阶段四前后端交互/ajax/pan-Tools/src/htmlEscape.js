function htmlEscape(htmlstr) {
    return htmlstr.replace(/<|>|"|&/g, (match) => {
        switch (match) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'

        }

    })
}

// 功能2：还原HTML中的特殊字符
function htmlUnescape(htmlstr) {
    return htmlstr.replace(/&[a-zA-Z]+;/g, (match) => {
        switch (match) {
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'

        }
    })
}



module.exports = {
    htmlEscape,
    htmlUnescape
}
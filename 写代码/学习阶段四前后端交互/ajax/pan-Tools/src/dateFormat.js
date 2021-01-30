// 功能1，格式化日期
function dateFormat(datestr) {
    let dt = new Date(datestr);

    let yy = dt.getFullYear()
    let mom = padZero(dt.getMonth())
    let dd = padZero(dt.getDate())
    let hh = padZero(dt.getHours())
    let mm = padZero(dt.getMinutes())
    let ss = padZero(dt.getSeconds())
    return `${yy}-${mom}-${dd} ${hh}:${mm}:${ss}`
}

function padZero(n) {
    return n > 9 ? n : '0' + n

}
module.exports = {
    dateFormat
}
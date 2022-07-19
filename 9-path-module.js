const path = require('path')

const filePaths = path.join('contents', 'subfolder', 'text.txt')

const base = path.basename(filePaths)

const absolute = path.resolve(__dirname, 'contents', 'subfolder', 'text.txt')

console.log(absolute)
console.log(filePaths)

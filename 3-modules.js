const names = require('./4-name')
const sayHi = require('./5-ultis')
const data = require('./6-alternative')
require('./7-mind-grenade')

const result = data.handleData().count

console.log(result)

sayHi(names.peter)

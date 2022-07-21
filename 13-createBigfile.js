const { writeFileSync } = require('fs')

for (let i = 0; i < 100000; i++) {
  writeFileSync('./subfolder/big.txt', `hello World ${i}\n`, { flag: 'a' })
}

const { readFile, writeFile } = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const rf = await readFilePromise('./subfolder/text.txt', 'utf8')
    console.log(rf)
    writeFilePromise('./subfolder/text.txt', 'change text test')
    console.log(rf)
  } catch (error) {
    console.log(error)
  }
}
start()

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

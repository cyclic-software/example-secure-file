const { encryptFile, decryptFile } = require('./secure-file.js')

let method = process.argv[2]
let inFile = process.argv[3]
let outFile = process.argv[4]
let authTagAsHex = process.argv[5]

// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// })

if (method === 'encryptFile') {
  encryptFile(inFile, outFile)
} else if (method === 'decryptFile') {
  decryptFile(inFile, outFile, authTagAsHex)
}

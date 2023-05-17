const http = require('http');
const { decryptFile } = require('./secure-file.js')


const IV = process.env.IV || "123456789012";
const AUTH_TAG = process.env.AUTH_TAG || "e0b5a9d8c4b6c7a8e0b5a9d8c4b6c7a8";

http.createServer(function (req, res) {


  const jsonStr = decryptFile('account.json.encrypted', IV, AUTH_TAG)


  console.log(`Just got a request at ${req.url}!`)
  console.log(JSON.stringify())
  res.write('I am a secure file server!');
  res.end();
}).listen(process.env.PORT || 3000);

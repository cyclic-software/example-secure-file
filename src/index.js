const http = require('http');
const { decryptToString } = require('./secure-file.js')

http.createServer(async function (req, res) {
  const jsonStr = await decryptToString('account.json.secure')

  console.log(`Just got a request at ${req.url}!`)
  console.log(JSON.parse(jsonStr))
  res.write('I am a secure file server!');
  res.end();
}).listen(process.env.PORT || 3000);

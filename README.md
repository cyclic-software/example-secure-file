# example-secure-file

This repo provides a few examples of how to securely store and retrieve a file
using Nodejs and Cyclic.

## Getting Started

1) Clone repo
1) `npm ci`
1) Add your secret file and .env to your `.gitignore`
1) Create a `.env` file if you don't have one with `SECRET_PASSPHRASE=<some long and secret passphrase>`
1) Run: `npm run encrypt <YOUR_INPUT_FILENAME>`

## Store encrypted file in git

1) `git add <YOUR_INPUT_FILENAME>.secure; git commit -m "Added secret file"`
1) Set an environment variable `SECRET_PASSPHRASE` with the value used to encrypt the file
1) Read the file in your server
```
const { decryptToString } = require('./secure-file.js')
...
const secureFileName = './account.json.secure'
const jsonStr = await decryptToString(secureFileName)
```

## Store encrypted file in S3

Coming soon!

## Store encrypted file in DynamoDB

Coming soon!



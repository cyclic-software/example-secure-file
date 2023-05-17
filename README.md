# example-secure-file

This repo provides two examples of how to securely store and retrieve a file
using Nodejs and Cyclic.

## Getting Started

1) Clone repo
1) `npm ci`
1) Add your secret file to your `.gitignore`
1) Run: `npm run encrypt <YOUR_INPUT_FILENAME> <YOUR_OUTPUT_FILENAME>`
1) Copy down the AuthTag that is output

## Store encrypted file in git


1) `git add <YOUR_OUTPUT_FILENAME>; git commit -m "Added secret file"`
1) Read the file in your server:

## Store encrypted file in S3

Coming soon!

## Store encrypted file in DynamoDB

Coming soon!



const crypto = require('crypto');
const fs = require('fs');
const algorithm = 'aes-256-gcm';

const SECRET_PASSPHRASE = process.env.SECRET_PASSPHRASE || "Secret Key You Should Update"

const key = crypto.scryptSync(SECRET_PASSPHRASE, 'salt-is-what-ever-you-want', 32); // salt can be random, but in this case we are just using a string
const iv = "123456789012";

function encryptFile(inputPath, outputPath) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);

    const input = fs.createReadStream(inputPath);
    const output = fs.createWriteStream(outputPath);

    input.pipe(cipher).pipe(output);

    output.on('finish', function() {
      console.log('Encrypted file written to disk!');
      const authTagAsHex = cipher.getAuthTag().toString('hex'); // <-- can this be public
      console.log(`Auth tag: ${authTagAsHex}`);
    });
}

function decryptFile(inputPath, outputPath, authTagAsHex) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  decipher.setAuthTag(Buffer.from(authTagAsHex, 'hex'));

  const input = fs.createReadStream(inputPath);
  const output = fs.createWriteStream(outputPath);

  input.pipe(decipher).pipe(output);

  output.on('finish', function() {
    console.log('Decrypted file written to disk!');
});
}

// encryptFile('test.txt', 'test.encrypted');
// decryptFile('test.encrypted', 'test.decrypted', 'iv.txt');


module.exports = {
  encryptFile,
  decryptFile
}

const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const folderToZip = path.join(__dirname, 'proxy-auth-extension');
const outputZip = path.join(__dirname, 'proxy-auth-extension.zip');

async function zipFolder() {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(outputZip);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => resolve());
    archive.on('error', err => reject(err));

    archive.pipe(output);
    archive.directory(folderToZip, false);
    archive.finalize();
  });
}

async function base64EncodeZip() {
  const zipBuffer = fs.readFileSync(outputZip);
  const base64data = zipBuffer.toString('base64');
  console.log('Base64 encoded zip string:\n');
  console.log(base64data);
}

(async () => {
  try {
    await zipFolder();
    await base64EncodeZip();
  } catch (err) {
    console.error('Error:', err);
  }
})();

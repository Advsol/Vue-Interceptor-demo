
var fs = require('fs');
const path = require('path');
var destination = require('./../../package.json').zip_Destination;
var source = require('./../../package.json').build_Destination;
var packagename = require('./../../package.json').name ;
var archiver = require('archiver');

var dir = destination;
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
else {
  const files = fs.readdirSync(destination);
  for (const file of files) {
    fs.unlinkSync(path.join(destination, file));
  }
}



var output = fs.createWriteStream(destination + packagename + '.zip');
var archive = archiver('zip');

output.on('close', function () {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

archive.on('error', function (err) {
  console.log(err);
  throw err;
});

archive.pipe(output);
archive.directory(source, false);
archive.finalize();
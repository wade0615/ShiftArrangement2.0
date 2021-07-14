const {
  src,
  series,
  dest
} = require('gulp');
const run = require('gulp-run');
const exec = require('child_process').exec;

function serveServer(done) {
  console.log('server start');
  done();
}

function serveClient(done) {
  console.log('building Vue code into the directory');
  return exec('cd ./packages/client && npm run build && npm run serve', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
}

exports.default = series(serveServer, serveClient);

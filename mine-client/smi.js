const { exec } = require('child_process');
const { hostname } = require('os');

module.exports = (callback) => {
  exec('nvidia-smi -q -x', (err, stdout, stderr) => {

    // handle errors
    if (err) {
      return callback(err);
    }

    if (stderr) {
      return callback(stderr);
    }

    callback(null, stdout);
  });
};
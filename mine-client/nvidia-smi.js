const { exec } = require('child_process');
const config = require('./config');
const { queryGPUArgs } = config.nvidia;

const smiString = 'nvidia-smi --query-gpu=' + queryGPUArgs.join(',') + ' --format=csv,noheader,nounits';

module.exports = function(callback) {
  exec(smiString, (err, stdout, stderr) => {
    if (err) {
      callback(err);
    }
    if (stderr) {
      callback(stderr);
    }
    const lines = stdout.toString().split('\n');
    const stats = new Array();
    lines.forEach(function(line) {
      if (!line) return;
      var parts = line.split(', ');
      var result = {};
      queryGPUArgs.forEach((arg, index) => {
        result[arg] = parts[index];
      });
      stats.push(result);
    });
    callback(null, { stats });
  });
};
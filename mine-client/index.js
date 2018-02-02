const { hostname } = require('os');
const request = require('request');
const smi = require('./nvidia-smi');
const config = require('./config');

const getStats = () => {
  smi((err, stats) => {
    if (stats) {
      request({
        url: config.baseUrl + '/stats/' + hostname(),
        method: 'POST',
        json: {
          stats
        }
      }, (err, response, body) => {
        if (err) {
          throw err;
        }
        console.log(response.statusCode);
      });
    }
  });
};

setInterval(() => {
  getStats();
}, config.interval);

getStats();
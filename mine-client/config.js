require('dotenv').config();
const env = process.env;

module.exports = {
  baseUrl: 'http://[some_url_here]',
  interval: 60000, // 1 minute interval
  nvidia: {
    queryGPUArgs: [
      'driver_version',
      'pstate',
      'temperature.gpu',
      'fan.speed',
      'power.draw',
      'memory.used',
      'memory.free',
      'memory.total'
    ]
  }
}
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = '3000';

// 192.168.86.29

app.use(bodyParser.json());

app.post('/stats/:hostname', (req, res) => {
  console.log(req.params.hostname);
  const { hostname } = req.params;
  const { stats } = req.body; 
  console.log(`-------- ${hostname} STATS --------`);
  console.log(stats);
  res.sendStatus(203);
});

app.listen(3000, () => console.log(`mine-server listening on port ${port}`));
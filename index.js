const express = require('express');
const app = express();

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  res.send({ result: Number(a) + Number(b) });
});

app.listen(3000, () => console.log('Server running on port 3000'));

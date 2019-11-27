const express = require('express');
const app = express();
const port = 8080;

const coucouPug = require('./routes/index');

app.set('view engine', 'pug');

app.use('/coucou-pug', coucouPug);

app.listen(port, err => {
  if (err) {
    throw new Error('Houston... something bad happened...');
  }
  console.log(`Server listening on port ${port}`);
});

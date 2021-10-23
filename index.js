const express = require('express');
const path = require('path');
const logger = require('morgan');

const apiRouter = require('./routes/api');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRouter)
app.use(express.static(path.join(__dirname, './client/public')));

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
});

const port = 3000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
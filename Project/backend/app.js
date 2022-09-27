const express = require('express');
const app = express();
const port = 5000;
const routes = require('./routes/routes');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

app.use(express.json());
// connect app.js - routes.js
app.use('/portal', routes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}`);
});


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const formRoutes = require('./routes/forms');
const responseRoutes = require('./routes/responses');
const userRoutes = require('./routes/users');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/forms', formRoutes);
app.use('/responses', responseRoutes);
app.use('/users', userRoutes);

module.exports = app;

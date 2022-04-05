
const express = require('express');
const cors = require('cors');
const app = express();
// configuracion app express


// configuracion de los manejadores
app.use(cors());
app.use(express.json());
app.use(require('./routes/index.routes'));

module.exports = app;
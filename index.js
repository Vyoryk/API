const morgan = require('morgan');
const cors = require('cors');
const express = require('express');

const {mongoose} = require('./database');

const app = express();
const port = process.env.PORT || 3000;
app.set('port', port);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: '*'}));

// Routes
app.use('/api/sabritas', require('./routes/sabrita.routes'));

//Routes

//Server
app.listen(port, () => {
    console.log('Servidor inicializado en puerto: ' + port /*app.get('port')*/);
});
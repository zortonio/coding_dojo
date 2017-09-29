const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.port || 8000;
const app = express();

app.use(express.static(path.join(__dirname, '/public/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./server/config/mongoose.js');

const routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port, () => { console.log(`Listening on port ${port}`) });
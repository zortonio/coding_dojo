const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.port || 8000;
const app = express();

app.use(bodyParser.json());

require('./server/config/mongoose.js');

const routes_setter = require('./server/config/routes.js')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
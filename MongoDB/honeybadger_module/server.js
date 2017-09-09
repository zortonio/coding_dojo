const express = require('express');
const port = process.env.PORT || 8000;
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

const routes_setter = require('./server/config/routes.js')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
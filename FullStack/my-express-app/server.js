const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const app = express();

app.use(express.static(path.join(__dirname, '/my-angular-app/dist')));

app.listen(port, () => console.log(`Listening on port ${port}`));
import { request } from 'http';

//server.js

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

/// port and listening
const port = 8000;

app.listen(port, () => {
    console.log('We are live on ' + port);
});
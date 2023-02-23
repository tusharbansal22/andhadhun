const express = require('express');
const router = express.Router();
const People = require('../models/andhadhun.model');
const { generateCrudMethods } = require('../services')
const bodyParser = require("body-parser");

const app = express();


module.exports = router
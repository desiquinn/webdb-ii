const express = require('express');
const carsRouter = require ('./cars/cars_router.js');

const server = express();

server.use(express.json());
server.use('/api/cars', carsRouter);

module.exports = server;
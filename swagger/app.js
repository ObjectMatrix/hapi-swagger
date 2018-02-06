'use strict';

const Hapi = require('hapi');
const accountsPlugin = require('./src/endpoints/accounts');
const rootContextPlugin = require('./src/endpoints');

const PORT = 3000;
// swagger router configuration
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

const server = Hapi.server({ host: 'localhost', port: PORT });

// Swagger
server.register([
  Inert,
  Vision,
  HapiSwagger,
]);

async function startServer() {
  await server.register(rootContextPlugin);
  await server.register(accountsPlugin);
  await server.start();
}

// TODO: how to call Swagger Metadata ,swaggervalidator , swaggerrouter and swaggerui in HAPI
startServer();

module.exports = server;

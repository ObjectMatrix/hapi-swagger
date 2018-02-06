'use strict';
const Joi = require('joi');

const container = require('../../container');
require('./handlers');

// const register = async function accountPlugins (server, options) {
// 	const handlers = container.resolve('AccountHandlers');
// 	server.route({
// 		method: 'GET',
// 		path: '/accounts/{id}',
// 		handler: handlers.findOne,
// 		options: {
// 			bind: handlers,
// 		},
// 	});
// };

const register = async function accountPlugins (server, options) {
	const handlers = container.resolve('AccountHandlers');
	server.route({
		method: 'GET',
		path: '/accounts/{id}',
		config: {
			handler: handlers.findOne,
			bind: handlers,
			description: 'Get user account',
			notes: 'Returns a success message',
			tags: ['api', 'account', 'eservice'],
			validate: {
				params: {
					id : Joi.string().required().default('abc').description("Provide user Id"),
				}
			}
		},

	});
};

module.exports = {
	register,
	name: 'accounts',
};

'use strict';
//this is a tst
const register = async function rootContextPlugin (server, options) {
	server.route({
		method: 'GET',
		path: '/',
		handler: function(request) {
			return { message: 'Hello from the Hapi app!' };
		}
	});
};



module.exports = {
	register,
	name: 'rootContextPlugin'
};

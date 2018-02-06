'use strict';

const container = require('../../container');
require('../../models/accounts');

class AccountHandlers {
  constructor(dependencies) {
  	this._model = dependencies.model;
	}

	async findOne(request) {
  	const { id } = request.params;
  	return await this._model.findOne(id);
	}

}

container.bind('AccountHandlers', AccountHandlers, {
	dependencies: { model: 'Accounts' },
});

module.exports = AccountHandlers;



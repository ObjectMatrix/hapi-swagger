'use strict';

const container = require('../../container');
require('./repository');
class Accounts {
	constructor(dependencies) {
		this._repository = dependencies.repository;

	}

	async findOne(id) {
		return await this._repository.findOne(id);
	}
}

container.bind('Accounts', Accounts, {
	dependencies: { repository: 'AccountsRepository' },
});

module.exports = Accounts;

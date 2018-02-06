'use strict';

const Promise = require('bluebird');

const container = require('../../container');
require('../mongo');

class AccountsRepository {

	constructor(dependencies) {
		//this._mongoConnector = dependencies.mongoConnector;
		 this._data = new Map();
		 this._data.set('abc', {
		 	foo: 'bar',
		 });
	}

	async findOne(id) {

		return Promise.resolve(this._data.get(id));//.findOne(id);
	}
}

container.bind('AccountsRepository', AccountsRepository, {
		dependencies: { mongoConnector: 'MongoConnector' },
});

module.exports = AccountsRepository;


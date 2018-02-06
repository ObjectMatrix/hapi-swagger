'use strict';

const elv = require('elv');
const mongoDB = require('mongodb');
const Promise = require('bluebird');
const container = require('../../container');


const url = 'mongodb://localhost:27017/accounts';
const { MongoClient } = mongoDB;
Promise.promisifyAll(MongoClient);

class MongoConnector {
	async findOne(id) {
		let db;
		try {
			db = await MongoClient.connect(url);
			const user = await db.collection('users').findOne({ id });
			return user;
		} finally {
			if (elv(db)) db.close();
		}
	}
}

container.bind('MongoConnector', MongoConnector);

module.exports = MongoConnector;


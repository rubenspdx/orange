const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'orange';

MongoClient.connect(url, function(err, client){
  assert.equal(null, err);
  console.log('MongoDB conectado!');

  const db = client.db(dbName);

  client.close();
});

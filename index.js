const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';

(async () => {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db('exemplo');
  await db.collection('usuarios').insertOne({ nome: 'Rafael', cargo: 'Dev' });
  const users = await db.collection('usuarios').find().toArray();
  console.log(users);
  await client.close();
})();

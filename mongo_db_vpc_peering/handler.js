'use strict';
const mongo = require('mongodb');
const { MongoClient } = mongo;
let db = null;

let connectToDatabase = (uri, dbName) => {
  if (db && db.serverConfig.isConnected()) {
    return Promise.resolve(db);
  }
  return MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(client => {
    db = client.db(dbName);
    return db;
  });
};

let getAllMovies = async (db, table) => {
  return await db.collection(table).find({}).limit(20).toArray();
}

exports.getData = async event => {
  const dbConnection = await connectToDatabase("mongodb+srv://mongoresolver:mongoresolver@cluster0.ud4tf.mongodb.net/?retryWrites=true&w=majority", "sample_mflix");
  const allMovies = await getAllMovies(dbConnection, "movies");

  console.log(allMovies);

  return {
    statusCode: 200,
    body: JSON.stringify(allMovies),
  };
};
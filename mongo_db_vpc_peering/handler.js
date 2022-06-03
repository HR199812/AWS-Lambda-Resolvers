const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI =
  "atlas_uri";

let db = null;

let connectToDatabase = (dbName) => {
  if (db && db.serverConfig.isConnected()) {
    return Promise.resolve(db);
  }
  return MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((client) => {
    db = client.db(dbName);
    return db;
  });
};

let getAllMovies = (db, table, query) => {
  return db.collection(table).findOne(query);
};

exports.getData = async (event) => {

  console.log(event);
  console.log("Inside get data");
  const dbConnection = await connectToDatabase("sample_mflix");
  console.log(dbConnection);
  const allMovies = await getAllMovies(dbConnection, "movies", {});
  console.log(allMovies);

  return {
    statusCode: 200,
    body: JSON.stringify(allMovies),
  };
};

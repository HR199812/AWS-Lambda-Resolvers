// Import the MongoDB driver
const MongoClient = require("mongodb").MongoClient;

const MONGODB_URI =
  "mongodb+srv://mongoresolver:mongoresolver@cluster0.ud4tf.mongodb.net/?retryWrites=true&w=majority";

let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  // Connect to our MongoDB database hosted on MongoDB Atlas
  const client = await MongoClient.connect(MONGODB_URI);

  // Specify which database we want to use
  const db = await client.db("sample_mflix");

  cachedDb = db;
  return db;
}

exports.getData = async (event) => {

  // Get an instance of our database
  const db = await connectToDatabase();
  let movies = await db.collection("movies").find({}).limit(20).toArray();;

  console.log(movies);


  const response = {
    statusCode: 200,
    body: JSON.stringify(movies),
  };
  return response;
};

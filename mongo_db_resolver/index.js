const MongoClient = require("mongodb").MongoClient;
exports.handler = async (event) => {
  const mongoUri =
    "mongodb+srv://Capcons:b9v8FOHqUxjnnZiN@cluster0.ps2tt.mongodb.net/?retryWrites=true&w=majority";

  let request = event["Records"][0]["body"];

  let result = "";

  MongoClient.connect(mongoUri, function (err, db) {
    if (err) throw err;

    console.log("Database Connected!");

    switch (request) {
      case "GET":
        result = "GET is Called";
        break;
      case "PUT":
        result = "PUT is Called";
        break;
      case "POST":
        result = "POST is Called";
        break;
      case "DELETE":
        result = "DELETE is Called";
        break;
      default:
      result = "Default is Called";
    }
    db.close();
  });

  console.log(result);
  
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from MongoDb Lambda!"),
  };
  return response;
};
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
const MongoURI = `mongodb+srv://Capcons:b9v8FOHqUxjnnZiN@cluster0.ps2tt.mongodb.net/?retryWrites=true&w=majority`;

// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose
  .connect(MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {})
  .catch((err) => console.log(err));

mongoose.connection.once("open", () => {
  console.log("conneted to database");
});

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`now listening for requests on port ${port}`);
});

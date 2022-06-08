const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const { resolvers } = require("./schema/resolver");
const { typeDefs } = require("./schema/type-defs");
const http = require("http");

const app = express();
const port = 3000;
const MongoURI = `mongo_uri`;

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
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//   })
// );

// app.listen(port, () => {
//   console.log(`now listening for requests on port ${port}`);
// });

let apolloServer = null;

async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();
const httpserver = http.createServer(app);

app.listen(port, function () {
  console.log(`server running on port ${port}`);
  console.log(`gql path is ${apolloServer.graphqlPath}`);
});

// const { ApolloServer } = require("apollo-server");
// const { typeDefs } = require("./schema/type-defs");
// const { resolvers } = require("./schema/resolver");

// const server = new ApolloServer({ typeDefs, resolvers });

// server.listen(4000).then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

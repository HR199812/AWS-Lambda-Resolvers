const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    name: String!
    genre: String!
    author: Author!
  }
  type Author {
    name: String!
    age: Int!
  }
  type Query {
    books: [Book!]!
    book(id: ID!): Book!
    authors: [Author!]!
    author(id: ID!): Author!
  }
  input CreateAuthor {
    name: String!
    age: Int!
  }
  input CreateBook {
    name: String!
    genre: String!
    author: ID!
  }
  type Mutation {
    createAuthor(input: CreateAuthor!): Author
    createBook(input: CreateBook!): Book
  }
`;

module.exports = { typeDefs };

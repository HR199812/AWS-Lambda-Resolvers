const Book = require("../models/book");
const Author = require("../models/Author");

const resolvers = {
  Query: {
    // USER RESOLVERS
    books: async () => {
      return await Book.find({});
    },
    book: async (parent, args) => {
      const book = await Book.findById(args.id);
      return book;
    },

    // MOVIE RESOLVERS
    authors: async () => {
      return await Author.find({});
    },
    author: async (parent, args) => {
      console.log(args.id);
      const author = await Author.find({ _id: args.id });
      return author;
    },
  },
  Book: {
    author: async (parent) => {
      console.log(parent);
      return await Author.findById(parent.authorId);
    },
  },

  Mutation: {
    createBook: async (parent, args) => {
      let book = new Book({
        name: args.input.name,
        genre: args.input.genre,
        authorId: args.input.authorId,
      });
      return await book.save();
    },
    createAuthor: async (parent, args) => {
      let author = new Author({
        name: args.input.name,
        age: args.input.age,
      });
      return await author.save();
    },
    // deleteUser: (parent, args) => {
    //   const id = args.id;
    //   _.remove(UserList, (user) => user.id === Number(id));
    //   return null;
    // },
  },
};

module.exports = { resolvers };

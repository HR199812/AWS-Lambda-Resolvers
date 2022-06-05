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

  //   Mutation: {
  //     createUser: (parent, args) => {
  //       const user = args.input;
  //       const lastId = UserList[UserList.length - 1].id;
  //       user.id = lastId + 1;
  //       UserList.push(user);
  //       return user;
  //     },

  //     updateUsername: (parent, args) => {
  //       const { id, newUsername } = args.input;
  //       let userUpdated;
  //       UserList.forEach((user) => {
  //         if (user.id === Number(id)) {
  //           user.username = newUsername;
  //           userUpdated = user;
  //         }
  //       });

  //       return userUpdated;
  //     },

  //     deleteUser: (parent, args) => {
  //       const id = args.id;
  //       _.remove(UserList, (user) => user.id === Number(id));
  //       return null;
  //     },
  //   },
};

module.exports = { resolvers };

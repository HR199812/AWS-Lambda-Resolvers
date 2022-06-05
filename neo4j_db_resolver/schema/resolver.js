const Book = require("../models/book");
const Author = require("../models/Author");

const resolvers = {
  Query: {
    // USER RESOLVERS
    books: () => {
      return Book.find({});
    },
    book: (parent, args) => {
      const book = Book.findById(args.id);
      return book;
    },

    // MOVIE RESOLVERS
    authors: () => {
      return Author.find({});
    },
    author: (parent, args) => {
      const author = Author.find(args.id);
      return author;
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

const { gql } = require("apollo-server-express");
const { list, listByName, listProfileByFriends, findProfileById } = require("../services");

const typeDefs = gql`

   type Profile {
     _id: String
     index: Int
     picture: String
     age: Int
     eyeColor : String
     name: String
     company : String
     email : String
     phone : String
     friends: [Friends]
   }

   type Friends {
     _id: String
     index: Int
     picture: String
     age: Int
     eyeColor : String
     name: String
     company : String
     email : String
     phone : String
   }

   type Query {
     list: [Profile]
     listByName(name: String!): [Profile]
     listProfileByFriends(_id: String!, name: String!): [Friends]
     findProfileById(_id: String!): Profile
   }

 `;


const resolvers = {

  Query: {

    list() {
      return list();
    },

    listByName(name, args) {

      return listByName(args);

    },

    listProfileByFriends(_id, args) {

      return listProfileByFriends(args);

    },

    findProfileById(_id, args) {

      return findProfileById(args);

    }

  }

};

module.exports = {
  typeDefs,
  resolvers
}
const app = require('../middlewares');

const { ApolloServer } = require("apollo-server-express");

const { resolvers, typeDefs } = require("../controllers");

const server = new ApolloServer({
    typeDefs,
    resolvers
});

module.exports = {
    server,
    app
}
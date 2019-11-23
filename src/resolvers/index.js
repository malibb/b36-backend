const AuthorResolver = require('./AuthorResolvers');
const PostResolver = require('./PostResolvers');

module.exports = {
    Query:{
        ...AuthorResolver.Query,
        ...PostResolver.Query,
    },
    Mutation:{
        ...AuthorResolver.Mutation,
        ...PostResolver.Mutation
    }
};

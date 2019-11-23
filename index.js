require('dotenv').config();

const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');
const resolvers = require('./src/resolvers');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const mongo = mongoose.connection;

mongo.on('error', (error) => console.log(error))
    .once('open', () => console.log('Connected to database'));

const typeDefs = importSchema( __dirname + '/schema.graphql');

const server = new GraphQLServer({typeDefs, resolvers});

const port = process.env.PORT || 4000;

server.start({port},()=> console.log(`works! = u = in port ${port}`));

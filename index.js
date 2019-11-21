const { GraphQLServer } = require('graphql-yoga');
/*
   1.- traer solo un usuario
   2.- actualizar un usuario
*/
const typeDefs = `

    type Query{
        hello(name:String):String!
        getUsers:[User]!
    }

    type Mutation{
        createUser(name:String!,age:Int!):User
    }

    type User{
        id:Int!
        name:String!
        age:Int!
    }

`;
/* 
var 

ECMA6

const
let

*/


const users = [];

const resolvers = {
    Query:{
        hello: (root, params, context, info) => `Hola ${params.name}`,
        getUsers: (root, params, context, info) => users,
    },
    Mutation:{
        createUser: (root, params, context, info) => {
            const user = {
                id: users.length +1000,
                name: params.name,
                age: params.age,
            };
            users.push(user);
            return user;
        }
    }
};

//root -> traer la información del servidor de graphql
//params -> son los datos que envia el cliente y que se define en nuestro typedefs
//context -> objeto por el cual se comunican los resolvers(Auth)
// info -> el query que se ejecutó en el cliente


const server = new GraphQLServer({
    typeDefs,
    resolvers,
});

server.start(() => console.log('Trabajando con graphql en puerto 4000'));
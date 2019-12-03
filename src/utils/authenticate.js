const bcrypt = require('bcrypt');
const { getAuthorByEmail } = require('../services/AuthorService');
const createToken = require('./createToken');

const authenticate = ({email, password }) =>{
    return new Promise((resolve, reject) => {
        getAuthorByEmail(email).then(userAuth => {
            if (!userAuth) reject(new Error('Author not exist'));
            bcrypt.compare(password, userAuth.password, (err, isValid) => {
                if(err) reject(new Error('Error to compare'));
                isValid ? resolve(createToken(userAuth))
                    : reject(new Error('Incorrect Password'));
            });
        });
    });
};

module.exports = authenticate;
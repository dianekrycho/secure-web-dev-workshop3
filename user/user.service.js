// This file holds the Business-Logic layer, interacting with Data Layer

const User = require('./user.model')

function findAll () {
    delete User.password;
    return [User];
}

module.exports.findAll = findAll

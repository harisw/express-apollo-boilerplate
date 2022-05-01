const Query = require('./query');
const Mutation = require('./mutation');
/*
    Include models...
*/
const Skincare = require('./skincare');
const User = require('./user');
const { GraphQLDateTime } = require('graphql-iso-date');
module.exports = {
    Query,
    Mutation,
/*includes model here...*/
    DateTime: GraphQLDateTime
};
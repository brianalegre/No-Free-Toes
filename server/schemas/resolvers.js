const { NormalUser,
    ServiceUser,
    ServiceCategory,
    ServiceComment,
    ServiceType } = require('../models');

const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');



const resolvers = {
    Query: {
        // SINGLE USER
        me: async () => (user, args) => {
            return User.findOne({
                $or: [
                    { _id: user ? user._id : args.id },
                    { username: args.username }
                ],
            })
        }
    }
}


module.exports = resolvers;

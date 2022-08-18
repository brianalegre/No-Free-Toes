const { NormalUser,
    ServiceUser,
    ServiceCategory,
    ServiceComment,
    ServiceType } = require('../models');

const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');



const resolvers = {
    Query: {
        // GET ALL NORMAL USERS
        normalUsers: async () => {
            return await NormalUser.find();
        },
    }
}


module.exports = resolvers;

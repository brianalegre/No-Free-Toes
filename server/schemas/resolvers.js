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
        // GET SINGLE NORMAL USER
        normalUser: async () => {
            return await NormalUser.findOne();
        },
        // GET ALL SERVICE USERS
        serviceUsers: async () => {
            return await ServiceUser.find();
        },
        //  GET ALL SERVICE USERS + SERVICE CATEGORY
        serviceUsers: async () => {
            return await ServiceUser.find({}).populate('serviceCategory');
        },
        //  GET ALL SERVICE CATEGORIES
        serviceCategories: async () => {
            return await ServiceCategory.find({});
        },
        // GET ALL SERVICE COMMENTS
        serviceComments: async () => {
            return await ServiceComment.find({});
        }
    },

    Mutation:{

        // New Normal User mutation

        addNormalUser: async (parent, args) => {
            const normalUser = await NormalUser.create(args);
            const token = signToken(normalUser);
      
            return { token, normalUser };
        },
        // GET SINGLE SERVICE CATEGORY
        serviceCategory: async (parent, args) => {
            return await ServiceCategory.findById(args._id);
        },
        // GET ALL SERVICE USERS BY SERVICE CATEGORY
        serviceUsersCategory: async (parent, { serviceCategory }) => {
            const params = {};

            if (serviceCategory) {
                params.serviceCategory = serviceCategory;
            }

            // if (categoryName) {
            //     params.categoryName = categoryName

            // }
            return await ServiceUser.find(params).populate('serviceCategory');
        }
    },

    Mutation: {
        // ADD NORMAL USER
        addNormalUser: async (parent, { firstName, lastName, email, password, location }) => {
            const user = await NormalUser.create({ firstName, lastName, email, password, location });
            const token = signToken(user);

            return { token, user };
        },
        // LOGIN NORMAL USER
        loginNormalUser: async (parent, { email, password }) => {
            const user = await NormalUser.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Invalid credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        //  ADD SERVICE USER
        addServiceUser: async (parent, { firstName, lastName, email, password, bio, location, serviceCategory }) => {
            const user = await ServiceUser.create({ firstName, lastName, email, password, bio, location, serviceCategory });
            const token = signToken(user);

            return { token, user };
        },

        // LOGIN SERVICE USER
        loginServiceUser: async (parent, { email, password }) => {
            const user = await ServiceUser.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Invalid credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        }
    },
};



module.exports = resolvers;

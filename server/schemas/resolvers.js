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
        //  GET ALL SERVICE USERS + CATEGORIES
        serviceUsers: async () => {
            return await ServiceUser.find({}).populate('serviceCategory');
        },
        //  GET ALL SERVICECATEGORIES
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

        // Normal User login mutation

        normalLogin: async (parent, { email, password }) => {
            const normalUser = await NormalUser.findOne({ email });
      
            if (!normalUser) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await normalUser.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(normalUser);
      
            return { token, normalUser };
        },

        // New Service User mutation
        
        addServiceUser: async (parent, args) => {
            const serviceUser = await ServiceUser.create(args);
            const token = signToken(serviceUser);
      
            return { token, serviceUser };
        },

        // Service User Login mutation

        serviceLogin: async (parent, { email, password }) => {
            const serviceUser = await ServiceUser.findOne({ email });
      
            if (!serviceUser) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await serviceUser.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(serviceUser);
      
            return { token, serviceUser };
        }
    }
        // },
        // GET SINGLE CATEGORY
        // serviceCategory: async (parent, args) => {
        //     return await ServiceCategory.findById(args._id);
        // },
        // GET ALL SERVICEUSERS BY CATEGORY
        // serviceUsersCategory: async (parent, { category, name }) => {
        //     const params = {};

        //     if (category) {
        //         params.category = category;
        //     }

        //     if (name) {
        //         params.name = {
        //             $regex: name
        //         };
        //     }
        // }
    // },

}


module.exports = resolvers;

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

        // GET SINGLE CATEGORY
        serviceCategory: async (parent, args) => {
            return await ServiceCategory.findById(args._id);
        }


        // // GET ALL SERVICEUSERS BY CATEGORY
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
    }
}


module.exports = resolvers;

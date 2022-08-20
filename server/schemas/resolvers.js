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
        },
        // GET SINGLE CATEGORY
        serviceCategory: async (parent, args) => {
            return await ServiceCategory.findById(args._id);
        },
        // GET ALL SERVICEUSERS BY CATEGORY
        serviceUsersCategory: async (parent, { serviceCategory, categoryName }) => {
            const params = {};

            if (serviceCategory) {
                params.serviceCategory = serviceCategory;
            }

            if (categoryName) {
                params.categoryName = {
                    $regex: categoryName
                };
            }
            return await ServiceUser.find(params).populate('serviceCategory');
        }
    },

}


module.exports = resolvers;

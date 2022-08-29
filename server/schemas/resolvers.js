const {
  NormalUser,
  ServiceUser,
  ServiceCategory,
  ServiceComment,
  ServiceType,
  TimeSlot,
} = require("../models");

const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
const { isObjectIdOrHexString, trusted } = require("mongoose");

const resolvers = {
  Query: {
    // GET ALL NORMAL USERS
    normalUsers: async () => {
      return await NormalUser.find().populate("serviceComments");
    },
    // GET SINGLE NORMAL USER
    normalUser: async (parent, { normalUserId }) => {
      return await NormalUser.findOne({ _id: normalUserId }).populate(
        "serviceComments"
      );
    },
    // GET SINGLE SERVICE USER
    serviceUser: async (parent, { serviceUserId }) => {
      return ServiceUser.findOne({ _id: serviceUserId })
        .populate("serviceType")
        .populate("timeSlots")
        .populate("serviceCategory");
    },
    // GET ALL SERVICE USERS
    serviceUsers: async () => {
      return await ServiceUser.find()
        .populate("serviceType")
        .populate("serviceCategory")
        .populate("timeSlots");
    },
    // GET ALL TIME SLOTS
    timeSlots: async () => {
      return await TimeSlot.find()
        .populate("serviceUser")
        .populate("serviceType");
    },
    // GET SINGLE TIME SLOT
    timeSlot: async (parent, { timeSlotId }) => {
      return await TimeSlot.findOne({ _id: timeSlotId })
        .populate("serviceUser")
        .populate("serviceType");
    },
    //  GET ALL SERVICE CATEGORIES
    serviceCategories: async () => {
      return await ServiceCategory.find({});
    },
    // GET ALL SERVICE TYPES + SERVICE USERS
    serviceTypes: async () => {
      return await ServiceType.find({});
    },
    // GET ALL SERVICE COMMENTS
    serviceComments: async (parent, { serviceUserId, normalUserId }) => {
      if (serviceUserId) {
        return await ServiceComment.find({
          serviceUser: { _id: serviceUserId },
        })
          .populate("serviceUser")
          .populate("normalUser");
      }

      if (normalUserId) {
        return await ServiceComment.find({ normalUser: { _id: normalUserId } })
          .populate("serviceUser")
          .populate("normalUser");
      }

      return await ServiceComment.find({})
        .populate("serviceUser")
        .populate("normalUser");
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
      return await ServiceUser.find(params).populate("serviceCategory");
    },
  },

  Mutation: {
    // ADD NORMAL USER
    addNormalUser: async (
      parent,
      { firstName, lastName, email, password, location }
    ) => {
      const user = await NormalUser.create({
        firstName,
        lastName,
        email,
        password,
        location,
      });
      const token = signToken(user);

      return { token, user };
    },
    // EDIT NORMAL USER
    editNormalUser: async (
      parent,
      { normalUserId, firstName, lastName, email, password, location }
    ) => {
      const user = await NormalUser.findByIdAndUpdate(
        normalUserId,
        { $set: { firstName, lastName, email, password, location } },
        { new: true }
      );
      return user;
    },
    // LOGIN NORMAL USER
    loginNormalUser: async (parent, { email, password }) => {
      const user = await NormalUser.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Invalid credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    //  ADD SERVICE USER
    addServiceUser: async (
      parent,
      { firstName, lastName, email, password, bio, location, serviceCategory }
    ) => {
      const user = await ServiceUser.create({
        firstName,
        lastName,
        email,
        password,
        bio,
        location,
        serviceCategory,
      });
      const token = signToken(user);

      return { token, user };
    },

    // LOGIN SERVICE USER
    loginServiceUser: async (parent, { email, password }) => {
      const user = await ServiceUser.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Invalid credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    // ADD SERVICE TYPE
    addServiceType: async (
      parent,
      {
        serviceName,
        servicePrice,
        serviceDuration,
        serviceDescription,
        serviceUserId,
        serviceCategory,
      }
    ) => {
      const newService = await ServiceType.create({
        serviceName,
        servicePrice,
        serviceDuration,
        serviceDescription,
        serviceUserId,
        serviceCategory,
      });
      const updatedServiceUser = await ServiceUser.findByIdAndUpdate(
        {
          _id: serviceUserId,
        },
        { $push: { serviceType: newService._id } },
        { new: true }
      );
      return newService, updatedServiceUser;
    },

    // REMOVE SERVICE TYPE
    removeServiceType: async (parent, { serviceTypeId, serviceUserId }) => {
      const deletedService = await ServiceType.findByIdAndDelete({
        _id: serviceTypeId,
      });
      const updatedServiceUser = await ServiceUser.findByIdAndUpdate(
        {
          _id: serviceUserId,
        },
        { $pull: { serviceType: deletedService._id } },
        { new: true }
      );
      return updatedServiceUser;
    },

    // EDIT SERVICE TYPE
    editServiceType: async (
      parent,
      {
        serviceTypeId,
        serviceName,
        servicePrice,
        serviceDuration,
        serviceDescription,
      }
    ) => {
      const updatedService = await ServiceType.findByIdAndUpdate(
        {
          _id: serviceTypeId,
        },
        {
          $set: {
            serviceName,
            servicePrice,
            serviceDuration,
            serviceDescription,
          },
        },
        { new: true }
      );
      return updatedService
    },

    // ADD SERVICE COMMENT
    addServiceComment: async (
      parent,
      { commentText, serviceRating, normalUser, serviceUser }
    ) => {
      const newComment = await ServiceComment.create({
        commentText,
        serviceRating,
        normalUser,
        serviceUser,
      });
      const updatedUser = await NormalUser.findOneAndUpdate(
        { _id: normalUser },
        { $push: { serviceComments: newComment } },
        { new: true }
      );
      return newComment, updatedUser;
    },

    // REMOVE SERVICE COMMENT
    removeServiceComment: async (parent, { serviceCommentId, normalUser }) => {
      const deletedComment = await ServiceComment.findOneAndDelete({
        _id: serviceCommentId,
      });
      const updatedUser = await NormalUser.findOneAndUpdate(
        { _id: normalUser },
        { $pull: { serviceComments: deletedComment._id } },
        { new: true }
      );
      return deletedComment, updatedUser;
    },

    // ADD TIME SLOT
    addTimeSlot: async (parent, { timeSlot, serviceUser, serviceType }) => {
      const newTimeSlot = await TimeSlot.create({
        timeSlot,
        serviceUser,
        serviceType,
      });
      const updatedServiceUser = await ServiceUser.findOneAndUpdate(
        {
          _id: serviceUser,
        },
        { $push: { timeSlots: newTimeSlot._id } },
        { new: true }
      );
      return updatedServiceUser, newTimeSlot;
    },

    // REMOVE TIME SLOT
    removeTimeSlot: async (parent, { timeSlotId, serviceUserId }) => {
      const deletedTimeSlot = await TimeSlot.findByIdAndDelete({
        _id: timeSlotId,
      });
      const updatedUser = await ServiceUser.findByIdAndUpdate(
        {
          _id: serviceUserId,
        },
        { $pull: { timeSlots: deletedTimeSlot._id } },
        { new: true }
      );
      return updatedUser, deletedTimeSlot;
    },
  },
};

module.exports = resolvers;

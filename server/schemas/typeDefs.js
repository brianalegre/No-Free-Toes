const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type ServiceCategory {
        _id: ID
        categoryName: String
    }

    type ServiceType {
        _id: ID
        serviceTypeName: String
        serviceCategory: ServiceCategory
    }

    type Appointment {
        _id: ID
        appointmentDate: String
        serviceType: ServiceType
        normalUser: NormalUser
        serviceUser: ServiceUser
    }

    type NormalUser {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
        location: String
        appointments: [Appointment]

    }

    type ServiceUser {
        _id: ID
        firstName: String
        lastName: String
        email: String
        photo: String
        bio: String
        password: String
        location: String
        serviceCategory: [ServiceCategory]
        serviceType: [ServiceType]
        appointments: [Appointment]
    }

    type ServiceComment {
        _id: ID
        commentText: String
        commentCreated: String
        serviceRating: Int
        normalUser: NormalUser
        serviceUser: ServiceUser
    }
    
    type Query {
        serviceType(_id: ID!): ServiceType
        serviceTypes: [ServiceType]
        serviceCategory(_id: ID!): ServiceCategory
        serviceCategories: [ServiceCategory]
        normalUser(_id: ID!): NormalUser
        normalUsers: [NormalUser]
        serviceUser(_id: ID!): ServiceUser
        serviceUsers: ServiceUser
        appointment(_id: ID!): Appointment
        appointments: [Appointment]
        serviceComment(_id: ID!): ServiceComment
        serviceComments: [ServiceComment]
    }

    type Mutation {
        addServiceCategory(categoryName: String!): ServiceCategory
        addServiceType(serviceTypeName: String!, serviceCategory: ID!): ServiceType
        addNormalUser(firstName: String!, lastName: String!, email: String!, password: String!, location: String!): NormalUser
        removeNormalUser(_id: ID!): NormalUser
        addServiceUser(firstName: String!, lastName: String!, email: String!, password: String!, bio:String!, location: String!, serviceCategory: [ID]!, serviceType: [ID]!): ServiceUser
        removeServiceUser(_id: ID!): ServiceUser
        addAppointment(appointmentDate: String!, serviceType: ID!, normalUser: ID!, serviceUser: ID!): Appointment
        removeAppointment(_id: ID!): Appointment
        addServiceComment(commentText: String!, serviceUser: ID!): ServiceComment
        removeServiceComment(_id: ID!): ServiceComment
    }
`;

module.exports = typeDefs;
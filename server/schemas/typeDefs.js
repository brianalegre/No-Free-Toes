const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type ServiceCategory {
        _id: ID
        categoryName: String
        categoryIcon: String
    }

    type ServiceType {
        _id: ID
        serviceName: String
        servicePrice: Float
        serviceDuration: Float
        serviceDescription: String
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
        password: String
        photo: String
        bio: String
        location: String
        serviceCategory: ServiceCategory
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
        serviceUsers: [ServiceUser]
        appointment(_id: ID!): Appointment
        appointments: [Appointment]
        serviceComment(_id: ID!): ServiceComment
        serviceComments: [ServiceComment]
    }

    type NormalAuth {
        token: ID
        normalUser: NormalUser
    }

    type ServiceAuth {
        token: ID
        serviceUser: ServiceUser
    }

    type Mutation {
        # Service Category
        addServiceCategory(categoryName: String!): ServiceCategory

        # Service Type
        addServiceType(serviceName: String!, servicePrice: Float!, serviceDuration: Float!, serviceDescription: String,  serviceCategory: ID!): ServiceType
        editServiceType(serviceName: String, servicePrice: Float, serviceDuration: Float, serviceDescription: String): ServiceType
        
        # Normal User
        addNormalUser(firstName: String!, lastName: String!, email: String!, password: String!, photo: String, location: String!): NormalUser
        editNormalUser(firstName: String, lastName: String, email: String, password: String, photo: String, location: String): NormalUser
        removeNormalUser(_id: ID!): NormalUser
        
        # Service User
        addServiceUser(firstName: String!, lastName: String!, email: String!, password: String!, photo: String, bio:String!, location: String!, serviceCategory: ID!, serviceType: [ID]!): ServiceUser
        editServiceUser(firstName: String, lastName: String, email: String, password: String, photo: String, bio:String, location: String, serviceCategory: ID, serviceType: [ID]): ServiceUser
        removeServiceUser(_id: ID!): ServiceUser
        
        # Appointments
        addAppointment(appointmentDate: String!, serviceType: ID!, normalUser: ID!, serviceUser: ID!): Appointment
        removeAppointment(_id: ID!): Appointment
        
        # Service Comments
        addServiceComment(commentText: String!, serviceUser: ID!, normalUser: ID!): ServiceComment
        removeServiceComment(_id: ID!): ServiceComment

        # Normal User Login
        normalLogin(email: String!, password: String!): NormalAuth

        # Service User Login
        serviceLogin(email: String!, password: String!): ServiceAuth


    }
`;

module.exports = typeDefs;
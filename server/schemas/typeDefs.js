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
        photo: String
        location: String
        appointments: [Appointment]
        serviceComments: [ServiceComment]
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

    type NormalAuth {
    token: ID!
    normalUser: NormalUser
    }

    type ServiceAuth {
    token: ID!
    serviceUser: ServiceUser
    }
    
    type Query {
        # SERVICE TYPE
        serviceType(_id: ID!): ServiceType
        serviceTypes: [ServiceType]

        # SERVICE CATEGORY
        serviceCategory(_id: ID!): ServiceCategory
        serviceCategories: [ServiceCategory]

        # NORMAL USER
        normalUser(normalUserId: ID!): NormalUser
        normalUsers: [NormalUser]

        # SERVICE USER
        serviceUser(serviceUserId: ID!): ServiceUser
        serviceUsers: [ServiceUser]
        # products(category: ID, name: String): [Product]  // SAMPLE QUERY
        serviceUsersCategory(serviceCategory: ID): [ServiceUser]
        
        # APPOINTMENT
        appointment(_id: ID!): Appointment
        appointments: [Appointment]


        # SERVICE COMMENT
        serviceComment(serviceCommentId: ID!): ServiceComment
        serviceComments(serviceUserId: ID, normalUserId: ID): [ServiceComment]
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
        # SERVICE TYPE
        addServiceType(serviceName: String!, servicePrice: Float!, serviceDuration: Float!, serviceDescription: String,  serviceCategory: ID!): ServiceType
        editServiceType(serviceName: String, servicePrice: Float, serviceDuration: Float, serviceDescription: String): ServiceType

        # SERVICE CATEGORY
        addServiceCategory(categoryName: String!): ServiceCategory
        
        # NORMAL USER
        addNormalUser(firstName: String!, lastName: String!, email: String!, password: String!, location: String!): NormalAuth
        editNormalUser(firstName: String, lastName: String, email: String, password: String, photo: String, location: String): NormalUser
        removeNormalUser(_id: ID!): NormalUser
        loginNormalUser(email: String!, password: String!): NormalAuth
        
        # SERVICE USER
        addServiceUser(firstName: String!, lastName: String!, email: String!, password: String!, bio: String!, location: String!, serviceCategory: ID!): ServiceAuth
        editServiceUser(firstName: String, lastName: String, email: String, password: String, photo: String, bio:String, location: String, serviceCategory: ID, serviceType: [ID]): ServiceUser
        removeServiceUser(_id: ID!): ServiceUser
        loginServiceUser(email: String!, password: String!): ServiceAuth
        
        # APPOINTMENT
        addAppointment(appointmentDate: String!, serviceType: ID!, normalUser: ID!, serviceUser: ID!): Appointment
        removeAppointment(_id: ID!): Appointment
        
        # SERVICE COMMENT
        addServiceComment(commentText: String!, serviceRating: Int, serviceUser: ID!, normalUser: ID!): ServiceComment
        removeServiceComment(serviceCommentId: ID!, normalUser: ID!): ServiceComment

        # Normal User Login
        normalLogin(email: String!, password: String!): NormalAuth

        # Service User Login
        serviceLogin(email: String!, password: String!): ServiceAuth


    }
`;

module.exports = typeDefs;
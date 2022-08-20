import { gql } from '@apollo/client';

// Normal User Sign Up Mutation
export const ADD_NORMAL_USER = gql`
mutation addNormalUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $location: String!
    ) {
  addNormalUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      location: $location
      ) {
          token
          user {
      _id
    }
  }
}
`;


// Service User Sign Up Mutation
export const ADD_SERVICE_USER = gql`
mutation AddServiceUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $bio: String!
    $location: String!
    $serviceCategory: ID!
    $serviceType: [ID]!
    ) {
        addServiceUser(
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
            bio: $bio
            location: $location
            serviceCategory: $serviceCategory
            serviceType: $serviceType
            ) {
                token
          user {
      _id
      }
  }
}
`;
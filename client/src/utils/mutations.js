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
          normalUser {
              email
              password
    }
  }
}
`;

// Normal User Login Mutation
export const NORMAL_LOGIN = gql`
mutation NormalLogin($email: String!, $password: String!) {
  normalLogin(email: $email, password: $password) {
    token
    normalUser {
      email
      password
    }
  }
}
`;

export const SERVICE_LOGIN = gql`
mutation ServiceLogin($email: String!, $password: String!) {
  serviceLogin(email: $email, password: $password) {
    token
    serviceUser {
      email
      password
    }
  }
}
`;


// Service User Sign Up Mutation
export const ADD_SERVICE_USER = gql`
mutation addServiceUser(
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
                serviceUser {
                    email
                    password
      }
  }
}
`;
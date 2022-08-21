import { gql } from '@apollo/client';

// ADD NORMAL USER
export const ADD_NORMALUSER = gql`
  mutation addNormalUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $location: String!) {
    addNormalUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, location: $location) {
      token
      normalUser {
        _id
        firstName
        lastName
        email
        location
      }
    }
  }
`;

// LOGIN NORMAL USER
export const LOGIN_NORMALUSER = gql`
  mutation loginNormalUser($email: String!, $password: String!) {
    loginNormalUser(email: $email, password: $password) {
      token
      normalUser {
        _id
        firstName
        lastName
        email
        location
      }
    }
  }
`;

// LOGIN SERVICE USER
export const LOGIN_SERVICEUSER = gql`
  mutation loginServiceUser($email: String!, $password: String!) {
    loginServiceUser(email: $email, password: $password) {
      token
      serviceUser {
        _id
        firstName
        lastName
        email
        location
        serviceCategory {
          _id
          categoryName

      }
    };



// export const ADD_NORMALUSER2 = gql`
// mutation Mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!, $location: String!) {
//   addNormalUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, location: $location) {
//     firstName
//     lastName
//     email
//     password
//     location
//   }
// }
// `;
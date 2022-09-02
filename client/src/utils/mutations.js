import { gql } from "@apollo/client";

// ADD NORMAL USER
export const ADD_NORMALUSER = gql`
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
// ADD SERVICE USER
export const ADD_SERVICEUSER = gql`
  mutation addServiceUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $bio: String!
    $location: String!
    $serviceCategory: ID!
  ) {
    addServiceUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      bio: $bio
      location: $location
      serviceCategory: $serviceCategory
    ) {
      token
      serviceUser {
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
      }
    }
  }
`;

// ADD SERVICE COMMENT
export const ADD_SERVICECOMMENT = gql`
  mutation AddServiceComment(
    $commentText: String!
    $serviceRating: Int
    $serviceUser: ID!
    $normalUser: ID!
  ) {
    addServiceComment(
      commentText: $commentText
      serviceRating: $serviceRating
      serviceUser: $serviceUser
      normalUser: $normalUser
    ) {
      _id
    }
  }
`;

// DELETE SERVICE COMMENT
export const DELETE_SERVICECOMMENT = gql`
  mutation RemoveServiceComment($serviceCommentId: ID!, $normalUser: ID!) {
    removeServiceComment(
      serviceCommentId: $serviceCommentId
      normalUser: $normalUser
    ) {
      _id
    }
  }
`;

// EDIT NORMAL USER
export const EDIT_NORMALUSER = gql`
  mutation EditNormalUser(
    $normalUserId: ID!
    $firstName: String
    $lastName: String
    $email: String
    $password: String
    $location: String
  ) {
    editNormalUser(
      normalUserId: $normalUserId
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      location: $location
    ) {
      _id
      firstName
      lastName
      email
      password
      location
    }
  }
`;

export const ADD_TIMESLOT = gql`
  mutation AddTimeSlot($timeSlot: String!, $serviceUserId: ID!) {
    addTimeSlot(timeSlot: $timeSlot, serviceUserId: $serviceUserId) {
      _id
    }
  }
`;

// DELETE TIMESLOT
export const DELETE_TIMESLOT = gql`
  mutation RemoveTimeSlot($timeSlotId: ID!, $serviceUserId: ID!) {
    removeTimeSlot(timeSlotId: $timeSlotId, serviceUserId: $serviceUserId) {
      _id
    }
  }
`;

// ADD APPOINTMENT
export const ADD_APPOINTMENT = gql`
  mutation Mutation(
    $normalUserId: ID!
    $serviceUserId: ID!
    $timeSlotId: ID!
    $serviceTypeId: ID!
  ) {
    addAppointment(
      normalUserId: $normalUserId
      serviceUserId: $serviceUserId
      timeSlotId: $timeSlotId
      serviceTypeId: $serviceTypeId
    ) {
      _id
    }
  }
`;

// DELETE APPOINTMENT
export const DELETE_APPOINTMENT = gql`
  mutation Mutation(
    $appointmentId: ID!
    $serviceUserId: ID!
    $normalUserId: ID!
  ) {
    removeAppointment(
      appointmentId: $appointmentId
      serviceUserId: $serviceUserId
      normalUserId: $normalUserId
    ) {
      _id
    }
  }
`;

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

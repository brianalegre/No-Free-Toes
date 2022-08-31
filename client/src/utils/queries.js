import { gql } from "@apollo/client";

// GET ALL SERVICE CATEGORIES
export const QUERY_ALL_SERVICECATEGORIES = gql`
  query serviceCategories {
    serviceCategories {
      _id
      categoryName
      categoryIcon
    }
  }
`;

// GET ALL NORMAL USERS
export const QUERY_ALL_NORMALUSERS = gql`
  query normalUsers {
    normalUsers {
      _id
      firstName
      lastName
      email
      location
    }
  }
`;

// GET SINGLE NORMAL USER
export const QUERY_SINGLE_NORMALUSER = gql`
  query NormalUser($normalUserId: ID!) {
    normalUser(normalUserId: $normalUserId) {
      _id
      firstName
      lastName
      email
      photo
      location
      appointments {
        _id
        serviceUser {
          _id
          firstName
          lastName
          photo
          email
          location
        }
        timeSlot {
          _id
          timeSlot
        }
        serviceType {
          _id
          serviceName
        }
      }
    }
  }
`;

// // GET ALL SERVICE USERS
// export const QUERY_ALL_SERVICEUSERS = gql`
//   query serviceUsers {
//     serviceUsers {
//     _id
//     firstName
//     lastName
//     email
//     photo
//     bio
//     location
//     serviceCategory {
//       _id
//       categoryName
//     }
//   }
// }
// `;

// GET ALL SERVICE USERS BY SERVICE CATEGORY
export const QUERY_ALL_SERVICEUSERS_BY_SERVICECATEGORY = gql`
  query serviceUsersCategory($serviceCategory: ID) {
    serviceUsersCategory(serviceCategory: $serviceCategory) {
      _id
      firstName
      lastName
      email
      photo
      bio
      location
      serviceCategory {
        _id
        categoryName
      }
    }
  }
`;

export const QUERY_SERVICEUSER = gql`
  query serviceUser($serviceUserId: ID!) {
    serviceUser(serviceUserId: $serviceUserId) {
      firstName
      lastName
      photo
      email
      bio
      location
      serviceType {
        _id
        serviceName
        servicePrice
        serviceDuration
        serviceDescription
      }
      timeSlots {
        _id
        timeSlot
      }
    }
  }
`;

export const QUERY_SERVICECOMMENTS_BY_SERVICEUSERID = gql`
  query serviceComments($serviceUserId: ID) {
    serviceComments(serviceUserId: $serviceUserId) {
      _id
      commentText
      commentCreated
      serviceRating
      serviceUser {
        _id
        firstName
        lastName
      }
      normalUser {
        _id
        firstName
        lastName
      }
    }
  }
`;

// SINGLE SERVICE USER
export const QUERY_SINGLE_SERVICEUSER = gql`
  query ServiceUser($serviceUserId: ID!) {
    serviceUser(serviceUserId: $serviceUserId) {
      _id
      firstName
      lastName
      email
      password
      photo
      bio
      location
      serviceCategory {
        _id
        categoryName
      }
      serviceType {
        _id
        serviceName
        servicePrice
        serviceDescription
      }
    }
  }
`;

// SERVICE TYPES
export const QUERY_SERVICETYPES = gql`
  query ServiceUser($serviceUserId: ID!) {
    serviceUser(serviceUserId: $serviceUserId) {
      _id
      serviceCategory {
        _id
        categoryName
      }
      serviceType {
        _id
        serviceName
        servicePrice
        serviceDescription
      }
    }
  }
`;

// export const QUERY_SERVICEUSERS_CATEGORY = gql`
//   query serviceUsersCategory($serviceCategory: ID) {
//     serviceUsersCategory(serviceCategory: $serviceCategory) {
//       firstName
//       lastName
//       photo
//       bio
//       location
//       serviceCategory {
//         categoryName
//       }
//     }
// }
// `;

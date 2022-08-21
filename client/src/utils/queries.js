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
      locotion
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
    serviceUser(serviceUserID: $serviceUserId) {
      _id
      firstName
      lastName
      photo
      bio
      location
      serviceType {
        serviceName
        servicePrice
        serviceDuration
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

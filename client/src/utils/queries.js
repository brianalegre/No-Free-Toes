import { gql } from '@apollo/client';

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
  query serviceUsersCategory($serviceCategory: ID,) {
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

// QUERY FOR NORMAL_USER

export const QUERY_NORMAL_USER = gql`
{
  normalUsers {
    firstName
    lastName
    email
    password
    location
    appointments {
      appointmentDate
      serviceType {
        serviceName
        servicePrice
        serviceDuration
        serviceDescription
        serviceCategory {
          categoryName
          categoryIcon
        }
      }
    }
  }
}
`;

// QUERY FOR SERVICE USER
export const QUERY_SERVICE_USER = gql`
{
  serviceUsers {
    firstName
    email
    lastName
    password
    photo
    bio
    location
    serviceCategory {
      _id
      categoryName
      categoryIcon
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



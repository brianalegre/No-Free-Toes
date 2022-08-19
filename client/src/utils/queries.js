import { gql } from '@apollo/client';


export const QUERY_ALL_SERVICECATEGORIES = gql`
    query serviceCategories {
      serviceCategories { 
      _id
      categoryName
      categoryIcon
    }
  }
`;

// export const QUERY_ALL_NORMALUSERS = gql`
//     {
//       normalUsers {
//       _id
//       firstName
//       lastName
//       email
//     }
//   }
// `;


// export const serviceUsersCategory = gql`
//   query getServiceUsersCategory($category: ID) {
//     serviceUsers(category: $category) {
//       _id
//       firstName
//       lastName
//       category {
//         _id
//       }
//     }
//   }
// `;

// export const QUERY_ALL_SERVICEUSERS = gql`
//     {
//       serviceUsers {
//       _id
//       firstName
//       lastName
//       email
//       serviceCategory {
//         _id
//         categoryName
//         categoryIcon
//       }
//     }
//     }
// `


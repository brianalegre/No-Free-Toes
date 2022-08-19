import { gql } from '@apollo/client';

export const QUERY_ALL_NORMALUSERS = gql`
    {
      normalUsers {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const serviceUsersCategory = gql`
  query getServiceUsersCategory($category: ID) {
    serviceUsers(category: $category) {
      _id
      firstName
      lastName
      category {
        _id
      }
    }
  }
`;



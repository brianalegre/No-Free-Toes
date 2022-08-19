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

export const QUERY_ALL_SERVICEUSERS = gql`
    {
      serviceUsers {
      _id
      firstName
      lastName
      email
      serviceCategory {
        _id
        categoryName
        categoryIcon
      }
    }
    }
`

export const QUERY_ALL_SERVICECATEGORIES = gql`
  {
    serviceCategories {
      _id
      categoryName
      categoryIcon
    }
  }
`

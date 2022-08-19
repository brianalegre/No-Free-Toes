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



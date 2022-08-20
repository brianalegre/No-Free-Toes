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
`

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
`
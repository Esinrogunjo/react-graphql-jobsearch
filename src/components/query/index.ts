import { useQuery, gql } from "@apollo/client";

export const GET_JOBS = gql`
  query GetJobs {
    jobs {
      title
      userEmail
      postedAt
      isFeatured
      company {
        name
        websiteUrl
        logoUrl
      }

      remotes {
        name
        type
      }
      commitment {
        title
      }
      description
    }
  }
`;

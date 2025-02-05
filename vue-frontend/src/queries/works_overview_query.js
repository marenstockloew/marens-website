import { gql } from "graphql-tag";

const WORKS_OVERVIEW_QUERY = gql`
  query works {
    entries(section: "works") {
      id
      title
      slug
      ... on works_Entry {
        description
        mainImage {
          url
          title
        }
      }
    }
  }
`;

export { WORKS_OVERVIEW_QUERY };

import { gql } from "graphql-tag";

const HOME_FIELDS_QUERY = gql`
  query home {
    entries(section: "home") {
      id
      title
      url
      ... on home_Entry {
        homeText
        homeHighlighted
      }
    }
  }
`;

export {HOME_FIELDS_QUERY};
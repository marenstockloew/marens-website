import { gql } from "graphql-tag";

const ABOUT_FIELDS_QUERY = gql`
  query about {
    entries(section: "maren") {
      id
      title
      url
      ... on marenDescription_Entry {
        aboutDescription
      }
    }
  }
`;

export { ABOUT_FIELDS_QUERY };

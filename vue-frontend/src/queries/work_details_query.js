import { gql } from "graphql-tag";

const SELECTED_WORK_DETAILS_QUERY = gql`
  query workDetails($slug: [String]) {
    entries(slug: $slug) {
      id
      title
      slug
      ... on works_Entry {
        description
        mainImage {
          title
          url
        }
        details {
          ... on exhibitionDate_Entry {
            typeHandle
            title
            date @formatDateTime(format: "m/Y")
            description
            externalLinks {
              ... on link_Entry {
                title
                externalLink
              }
            }
          }
          ... on additionalText_Entry {
            typeHandle
            title
            description
          }
          ... on photoDocumentation_Entry {
            typeHandle
            title
            photos {
              title
              url
            }
          }
          ... on space_Entry {
            typeHandle
            additionalSpace
          }
        }
      }
    }
  }
`
export { SELECTED_WORK_DETAILS_QUERY };

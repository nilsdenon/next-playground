import { gql } from "@apollo/client";
import { FEATURED_IMAGE } from "./fragments";

export const GET_ALL_PAGES = gql`
  query AllPagesQuery {
    pages {
      nodes {
        slug
      }
    }
  }
`;

export const SINGLE_PAGE_QUERY = gql`
  ${FEATURED_IMAGE}
  query PageQuery($slug: ID!) {
    page(id: $slug, idType: URI) {
      title(format: RENDERED)
      content(format: RENDERED)
      featuredImage {
        ...FeaturedImageFields
      }
    }
  }
`;

export const GET_ALL_BOOKS = gql`
  query AllBooksQuery {
    books {
      nodes {
        slug
      }
    }
  }
`;

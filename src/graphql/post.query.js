import gql from "graphql-tag";

const POST_QUERY = gql`
  query {
    posts {
      edges {
        node {
          postId
          title
          date
          content
          commentCount
          featuredImage {
            sourceUrl(size: LARGE)
          }
        }
      }
    }
  }
`;

export default POST_QUERY;

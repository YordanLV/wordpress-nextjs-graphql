import gql from "graphql-tag";

const POST_QUERY = gql`
  query {
    posts {
      edges {
        node {
          postId
          title
        }
      }
    }
  }
`;

export default POST_QUERY;

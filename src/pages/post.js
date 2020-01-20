import React from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from "@emotion/styled";

import Layout from "../components/Layout";
import ListPosts from "../components/ListPosts";
import POST_QUERY from "../graphql/post.query";

const BlogHeadline = styled.h1`
  font-size: 6rem;
  text-align: center;
  margin: 2rem 0;
  font-weight: 800;
`;

const Home = () => {
  const { data, loading, error } = useQuery(POST_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  return (
    <Layout>
      <BlogHeadline>Wordpress Blog</BlogHeadline>
        <ListPosts data={data} />
    </Layout>
  );
};

export default Home;

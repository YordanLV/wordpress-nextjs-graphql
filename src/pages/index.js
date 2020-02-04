import React from "react";
import { useQuery } from "@apollo/react-hooks";

import BlogHeadline from "../components/BlogHeadline";
import Layout from "../components/Layout";
import ListPosts from "../components/ListPosts";
import POST_QUERY from "../graphql/post.query";

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
      <BlogHeadline>Wordpress-NextJS-Styled Starter</BlogHeadline>
      <ListPosts data={data} />
    </Layout>
  );
};

export default Home;

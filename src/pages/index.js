import React from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from "@emotion/styled";

import Layout from "../components/Layout";
import ListPosts from '../components/ListPosts';
import POST_QUERY from "../graphql/post.query";

const ListWrapper = styled.div`
  border: 0.1rem solid black;
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
      <ListWrapper>
        <ListPosts data={data}/>
      </ListWrapper>
    </Layout>
  );
};

export default Home;

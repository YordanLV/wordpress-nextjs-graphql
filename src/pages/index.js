import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import POST_QUERY from '../graphql/post.query';

const Home = () => {
  const { data, loading, error } = useQuery(POST_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  return (
    <div>
      <ul>
        {data.posts.edges.map(post => {
          return <li key={post.node.postId}>{post.node.title}</li>
        })}
      </ul>
    </div>
  );
};

export default Home;
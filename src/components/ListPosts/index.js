import React from "react";

import Post from "../Post";

const ListPosts = ({ data }) => {
  return (
    <ul>
      {data.posts.edges.map(post => {
        return (
          <li key={post.node.postId}>
            <Post postData={post} />
          </li>
        );
      })}
    </ul>
  );
};

export default ListPosts;

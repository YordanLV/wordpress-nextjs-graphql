import React from "react";
import styled from "@emotion/styled";

import Post from "../Post";

const NotesWrapper = styled.div``;

const ListPosts = ({ data }) => {
  return (
    <NotesWrapper>
      <ul>
        {data.posts.edges.map(post => {
          return (
            <li key={post.node.postId}>
              <Post postData={post} />
            </li>
          );
        })}
      </ul>
    </NotesWrapper>
  );
};

export default ListPosts;

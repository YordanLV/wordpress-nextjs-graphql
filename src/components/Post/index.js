import React from "react";
import ReactMarkdown from "react-markdown";

import PostWrapper from "./PostWrapper";

const Post = ({ postData }) => {
  return (
    <PostWrapper>
      <h2>{postData.node.title}</h2>
      <ReactMarkdown source={postData.node.content} escapeHtml={false} />
    </PostWrapper>
  );
};

export default Post;

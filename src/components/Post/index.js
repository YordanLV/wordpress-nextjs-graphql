import React, { Fragment } from "react";

const Post = ({ postData }) => {
  return <Fragment>{postData.node.title}</Fragment>;
};

export default Post;

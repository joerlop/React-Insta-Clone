import React from 'react';
import "./PostContainer.scss"

import CommentSection from "./CommentSection/CommentSection"

function PostContainer(props) {
  return (
    <div className="PostContainer">
      <CommentSection commentsProp={props.comments}/>
    </div>
  );
}

export default PostContainer;
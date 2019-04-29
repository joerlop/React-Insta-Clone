import React from 'react';
import "./CommentSection.scss"

function CommentSection(props) {
  return (
    <div className="CommentSection">
      {props.commentsProp.map(comment => <Comment commentProp={comment}/>)}
    </div>
  );
}

export default CommentSection;
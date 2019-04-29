import React from 'react';
import "./CommentSection.scss"

function Comment(props) {
  return (
    <div className="Comments">
      <p><strong>{props.username}</strong> {props.text}</p>
    </div>
  );
}

export default Comment;
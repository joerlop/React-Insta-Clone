import React from 'react';
import "./CommentSection.scss"

import PropTypes from "prop-types";

function Comment(props) {
  return (
    <div className="Comments">
      <p><strong>{props.commentsProp.username}</strong> {props.commentsProp.text}</p>
    </div>
  );
}

Comment.propTypes = {
    commentsProp: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
};

export default Comment;
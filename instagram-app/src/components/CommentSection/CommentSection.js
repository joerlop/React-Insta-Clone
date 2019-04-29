import React from 'react';
import "./CommentSection.scss"
import PropTypes from "prop-types";

import Comment from "./Comment"

function CommentSection(props) {
  return (
    <div className="CommentSection">
      {props.commentsProp.map(comment => <Comment commentsProp={comment}/>)}
      <input placeholder="Add a comment..."></input>
    </div>
  );
}

CommentSection.propTypes = {
    commentsProp: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string  ,
            text: PropTypes.string
        })
    )
};

export default CommentSection;
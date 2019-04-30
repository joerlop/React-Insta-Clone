import React from 'react';
import "./CommentSection.scss"
import PropTypes from "prop-types";

import Comment from "./Comment"

function CommentSection(props) {
  return (
    <div className="CommentSection">
      {props.commentsProp.map(comment => <Comment commentsProp={comment}/>)}
      <div className="add-comment">
        <form onSubmit={props.add}>
            <input 
                type="text" 
                placeholder="Add a comment..."
                value={props.value}
                onChange={(event) => props.change(props.username, event)}
            >        
            </input>
        </form>
      </div>
    </div>
  );
}

CommentSection.propTypes = {
    commentsProp: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
    )
};

export default CommentSection;
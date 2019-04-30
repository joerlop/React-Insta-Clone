import React from 'react';
import "./CommentSection.scss"
import PropTypes from "prop-types";

import Comment from "./Comment"

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.commentsProp,
      comment: {
        username: "jonathanerlich",
        text: ""       
      }
    }
  }

  handleChanges = event => {
    event.preventDefault();
    this.setState({
      comment: {
        username: "jonathanerlich",
        text: event.target.value
      }
    })
  }

  addNewComment = event => {
    event.preventDefault();
    const oldState = this.state.comments; 
    const newState = oldState;
    newState.push(this.state.comment);
    this.setState({
      comments: newState,
      comment: {
        username: "jonathanerlich",
        text: ""       
      }
    })
    this.props.store();
  }

  render() {
    return (
      <div className="CommentSection">
        {this.props.commentsProp.map(comment => 
          <Comment 
            commentsProp={comment}
          />
        )}
        <div className="add-comment">
          <form onSubmit={(event) => this.addNewComment(event)}>
              <input 
                  type="text" 
                  placeholder="Add a comment..."
                  value={this.state.comment.text}
                  onChange={(event) => this.handleChanges(event)}
              >        
              </input>
          </form>
        </div>
      </div>
    );
  }
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
import React from 'react';
import "./PostContainer.scss"

import PropTypes from "prop-types";

function Post(props) {
  return (
    <div className="Post">
        <div className="Post-header">
            <img src={props.thumbnail}></img>
            <p><strong>{props.username}</strong></p>
        </div>
        <img src={props.image}></img>
        <div className="Post-footer">
            <div className="socialmedia">
                <img src={props.loveIcon}></img>
                <img src={props.commentIcon}></img>
            </div>
            <p><strong>{props.likes} likes</strong></p>
        </div>
    </div>
  );
}

Post.propTypes = {
    thumbnail: PropTypes.string,
    username: PropTypes.string,
    image: PropTypes.string,
    likes: PropTypes.number
};

export default Post;
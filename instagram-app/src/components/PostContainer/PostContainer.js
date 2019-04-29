import React from 'react';
import "./PostContainer.scss"

import CommentSection from "../CommentSection/CommentSection"
import Post from "./Post"

import PropTypes from "prop-types";

function PostContainer(props) {
  return (
    <div className="PostContainer">
        <Post
            thumbnail={props.postProp.thumbnailUrl} 
            username={props.postProp.username}
            image={props.postProp.imageUrl}
            likes={props.postProp.likes}
        />
        <CommentSection 
            commentsProp={props.postProp.comments}
            timestamp={props.postProp.timestamp}
        />
    </div>
  );
}

PostContainer.propTypes = {
    postProp: PropTypes.shape({
        thumbnail: PropTypes.string,
        username: PropTypes.string,
        image: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.array,
        timestamp: PropTypes.string        
    })
};

export default PostContainer;
import React from 'react';
import "./PostContainer.scss"

import CommentSection from "../CommentSection/CommentSection"
import Post from "./Post"

import PropTypes from "prop-types";

import Container from "../../styles/PostContainer/Container"

function PostContainer(props) {
  return (
    <Container>
        <Post
            thumbnail={props.postProp.thumbnailUrl} 
            username={props.postProp.username}
            image={props.postProp.imageUrl}
            likesProp={props.postProp.likes}
            loveIcon={props.loveIcon}
            commentIcon={props.commentIcon}
            store={props.store}
            index={props.indexProp}
            posts={props.postsOnStateProp}
            like={props.like}
        />
        <CommentSection
            username={props.postProp.username} 
            commentsProp={props.postProp.comments}
            timestamp={props.postProp.timestamp}
            loveIcon={props.loveIcon}
            commentIcon={props.commentIcon}
            index={props.indexProp}
            store={props.store}
            change={props.change}
            add={props.addComment}
            value={props.value}
        />
    </Container>
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
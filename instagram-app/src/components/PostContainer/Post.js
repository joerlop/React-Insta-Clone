import React from 'react';
import "./PostContainer.scss"

import PropTypes from "prop-types";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        }
    }

    onClickHandler = (event, index) => {
        this.setState({
            liked: !this.state.liked
        })
        this.props.like(event, index, this.state.liked);
    }

    render() {
        return (
            <div className="Post">
                <div className="Post-header">
                    <img src={this.props.thumbnail}></img>
                    <p><strong>{this.props.username}</strong></p>
                </div>
                <img src={this.props.image}></img>
                <div className="Post-footer">
                    <div className="socialmedia">
                        <img    src={this.props.loveIcon} 
                                onClick={(event) => this.onClickHandler(event, this.props.index)}
                        >
                        </img>
                        <img src={this.props.commentIcon}></img>
                    </div>
                    <p><strong>{this.props.likesProp} likes</strong></p>
                </div>
            </div>
        );
    }    
}

Post.propTypes = {
    thumbnail: PropTypes.string,
    username: PropTypes.string,
    image: PropTypes.string,
    likes: PropTypes.number
};

export default Post;
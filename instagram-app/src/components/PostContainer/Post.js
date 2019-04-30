import React from 'react';
import "./PostContainer.scss"

import PropTypes from "prop-types";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.likes,
            liked: false
        }
    }

    addLike = event => {
        event.preventDefault();
        let likesNr = this.state.likes;
        if (!this.state.liked) {
            this.setState({
                likes: likesNr + 1,
                liked: true
            })
            this.props.store();
        } else {
            this.setState({
                likes: likesNr - 1,
                liked: false
            })
            this.props.store();
        }
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
                        <img src={this.props.loveIcon} onClick={(event) => this.addLike(event)}></img>
                        <img src={this.props.commentIcon}></img>
                    </div>
                    <p><strong>{this.state.likes} likes</strong></p>
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
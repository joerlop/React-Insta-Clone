import React from 'react';
import "./PostContainer.scss"

import PropTypes from "prop-types";

import PostDiv from "../../styles/PostContainer/PostDiv"
import HeaderDiv from "../../styles/PostContainer/HeaderDiv"
import HeaderImg from "../../styles/PostContainer/HeaderImg"
import BoldText from "../../styles/Reusables/BoldText"
import PostImg from "../../styles/PostContainer/PostImg"
import FooterDiv from "../../styles/PostContainer/FooterDiv"
import SocialMediaDiv from "../../styles/PostContainer/SocialMediaDiv"
import SocialMediaImg from "../../styles/PostContainer/SocialMediaImg"

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
            <PostDiv>
                <HeaderDiv>
                    <HeaderImg src={this.props.thumbnail} />
                    <BoldText title={true}>{this.props.username}</BoldText>
                </HeaderDiv>
                <PostImg src={this.props.image} />
                <FooterDiv>
                    <SocialMediaDiv>
                        <SocialMediaImg    src={this.props.loveIcon} 
                                onClick={(event) => this.onClickHandler(event, this.props.index)}
                        >
                        </SocialMediaImg>
                        <SocialMediaImg src={this.props.commentIcon} />
                    </SocialMediaDiv>
                    <BoldText title={false}>{this.props.likesProp} likes</BoldText>
                </FooterDiv>
            </PostDiv>
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
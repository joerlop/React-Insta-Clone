import React from 'react';
import "./PostContainer.scss"

import dummyData from "../../dummy-data";

import PostContainer from "./PostContainer"
import SearchBar from "../SearchBar/SearchBar"

import loveIcon from "../../images/love.svg";
import commentIcon from "../../images/comment.svg";
import logo from "../../images/logo.svg";
import instagram from "../../images/instagram.svg";
import compass from "../../images/compass.svg";
import profile from "../../images/profile.svg";

class PostsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          postsOnState: [],
          postsPreSearch: [],  
          searchValue: "",
          comment: {
            username: "",
            text: ""       
          }   
        }
      }
    
    addLike = (event, index, liked) => {
      event.preventDefault();
      const oldState = this.state.postsOnState; 
      const newState = oldState;
      newState.map((post, postIndex) => {
        if (index == postIndex) {
          liked ? post.likes-- : post.likes++;
        }
        return post;  
      })
      this.setState({
        ...this.state,
        postsOnState: newState,
      });
      this.storeState(); 
    }

    handleCommentChanges = event => {
        event.preventDefault();
        this.setState({
          comment: {
            username: this.props.username,
            text: event.target.value
          }
        })
    }
    
    addNewComment = (event, index) => {
      console.log(index);  
      event.preventDefault();
      const oldState = this.state.postsOnState; 
      const newState = oldState;
      newState.map((post, postIndex) => {
        if (index == postIndex) {
          post.comments.push(this.state.comment);
        }
        return post;  
      })
      this.setState({
        ...this.state,
        postsOnState: newState,
        comment: {
          username: this.props.username,
          text: ""
        }
      });
      this.storeState(); 
    }

    componentDidMount() {
        this.setState({
          postsOnState: dummyData,
          postsPreSearch: dummyData,
          searchValue: ""
        })
        this.hydrateStateWithLocalStorage();
    }

    handleChanges = event => {
        event.preventDefault();
        this.setState({
          searchValue: event.target.value
        })
      }
    
      search = event => {
        event.preventDefault();
        const prevState = this.state.postsOnState;
        if (this.state.searchValue != "") {
          const newState = prevState.filter(post => {
            if (post.username == this.state.searchValue) {
              return post;
            }
          })
          this.setState({
            postsOnState: newState
          })  
        } else {
          this.setState({
            postsOnState: this.state.postsPreSearch
          })
        }
      }
    
      storeState = () => {
        localStorage.setItem("postsOnState", JSON.stringify(this.state.postsOnState));
        localStorage.setItem("postsPreSearch", JSON.stringify(this.state.postsPreSearch));
      };
    
      hydrateStateWithLocalStorage() {
        // for all items in state
        for (let key in this.state) {
          // if the key exists in localStorage
          if (localStorage.hasOwnProperty(key)) {
            // get the key's value from localStorage
            let value = localStorage.getItem(key);
    
            // parse the localStorage string and setState
            try {
              value = JSON.parse(value);
              this.setState({ [key]: value });
            } catch (e) {
              // handle empty string
              this.setState({ [key]: value });
            }
          }
        }
      }    


    render() {
        return (
            <div className="App">
                <SearchBar 
                logo={logo} 
                instagram={instagram}
                compass={compass}
                profile={profile}
                love={loveIcon}
                change={this.handleChanges}
                search={this.search}
                value={this.state.searchValue}
                />
            <div className="content">
                {this.state.postsOnState.map((post, index) => 
                    <PostContainer
                    indexProp={index} 
                    postProp={post}
                    loveIcon={loveIcon}
                    commentIcon={commentIcon}
                    store={this.storeState}
                    postsOnStateProp={this.state.postsOnState}
                    change={this.handleCommentChanges}
                    addComment={this.addNewComment}
                    value={this.state.comment.text}
                    like={this.addLike}
                    />
                )}
            </div>
          </div>
        );
    }
  }
  
  export default PostsPage;
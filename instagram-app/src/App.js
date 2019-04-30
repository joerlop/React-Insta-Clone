import React from 'react';
import './App.css';

import dummyData from "./dummy-data";

import PostContainer from "./components/PostContainer/PostContainer"
import SearchBar from "./components/SearchBar/SearchBar"

import loveIcon from "./images/love.svg";
import commentIcon from "./images/comment.svg";
import logo from "./images/logo.svg";
import instagram from "./images/instagram.svg";
import compass from "./images/compass.svg";
import profile from "./images/profile.svg";

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      postsOnState: dummyData,
      postUsername: "",
      comment: {
        username: "jonathanerlich",
        text: ""
      }
    }
  }

  handleChanges = (username, event) => {
    event.preventDefault();
    this.setState({
      postUsername: username,
      comment: {
        username: "jonathanerlich",
        text: event.target.value
      }
    })
  }

  addComment = event => {
    event.preventDefault();
    const oldState = this.state.postsOnState; 
    const newState = oldState.map(post => {
      if (post.username == this.state.postUsername) {
        post.comments.push(this.state.comment);
      }
      return post;
    })

    this.setState({
      postsOnState: newState,
      comment: {
        postUsername: "",
        username: "jonathanerlich",
        text: "",
      }
    });
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
        />
        <div className="content">
          {this.state.postsOnState.map(post => 
            <PostContainer 
              postProp={post}
              change={this.handleChanges} 
              value={this.state.comment.text}
              add={this.addComment}
              loveIcon={loveIcon}
              commentIcon={commentIcon}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;

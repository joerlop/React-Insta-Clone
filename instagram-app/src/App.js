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
      postsOnState: [],     
    }
  }

  componentDidMount() {
    this.setState({
      postsOnState: dummyData,
    })
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
          {this.state.postsOnState.map((post, index) => 
            <PostContainer
              indexProp={index} 
              postProp={post}
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

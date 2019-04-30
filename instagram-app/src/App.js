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
      postsPreSearch: [],  
      searchValue: ""   
    }
  }

  componentDidMount() {
    this.setState({
      postsOnState: dummyData,
      postsPreSearch: dummyData
    })
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
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;

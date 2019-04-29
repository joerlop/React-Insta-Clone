import React from 'react';
import './App.css';

import dummyData from "./dummy-data";

import PostContainer from "./components/PostContainer/PostContainer"
import SearchBar from "./components/SearchBar/SearchBar"

import loveIcon from "./images/love.svg";
import commentIcon from "./images/comment.svg";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="content">
        {dummyData.map(post => 
          <PostContainer 
            postProp={post}
            loveIcon={loveIcon}
            commentIcon={commentIcon}
          />
        )}
      </div>
    </div>
  );
}

export default App;

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

function App() {
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

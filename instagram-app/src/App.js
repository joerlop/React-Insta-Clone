import React from 'react';
import './App.css';

import dummyData from "./dummy-data";

import PostContainer from "./components/PostContainer/PostContainer"
import SearchBar from "./components/SearchBar/SearchBar"

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="content">
        {dummyData.map(post => <PostContainer postProp={post}/>)}
      </div>
    </div>
  );
}

export default App;

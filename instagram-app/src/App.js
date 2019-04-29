import React from 'react';
import './App.css';

import dummyData from "./dummy-data";

import PostContainer from "./components/PostContainer/PostContainer"

function App() {
  return (
    <div className="App">
      {dummyData.map(post => <PostContainer postProp={post}/>)}
    </div>
  );
}

export default App;

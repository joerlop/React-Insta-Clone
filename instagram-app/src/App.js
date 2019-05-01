import React from 'react';
import './App.css';

import withAuthenticate from "./authentication/withAuthenticate"
import PostsPage from "./components/PostContainer/PostsPage"
import Login from "./components/Login/Login"

const ComponentFromWithAuthenticate = withAuthenticate(Login)(PostsPage);

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      isLoggedIn: false, 
      username: ""
    }
  }

  setUsername = event => {
    event.preventDefault();
    this.setState({
      ...this.state,
      username: event.target.value
      })
  }

  toggleShowFirst = e => {
    e.preventDefault();
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
      this.setState({ isLoggedIn: false });
    } else {
      localStorage.setItem('user', 'Dustin');
      this.setState({ isLoggedIn: true });
    }
  };
 
  render() {
    return (
      <ComponentFromWithAuthenticate change={this.setUsername} username={this.state.username} toggle={this.toggleShowFirst}/>
    );
  }
}

export default App;

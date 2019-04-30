import React from 'react';
import "./SearchBar.scss"

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredPosts: props.posts,
    }
  }

  render() {
    return (
      <div className="SearchBar">
          <div className="logo-container">
              <img className="logo" src={this.props.logo}></img>
              <p>|</p>
              <img className="instagram" src={this.props.instagram}></img>
          </div>
          <form onSubmit={(event) => this.props.search(event)}>
            <input onChange={(event) => this.props.change(event)} value={this.props.value} placeholder="Search"></input>
          </form>
          <div className="profile-icons">
              <img className="compass-img" src={this.props.compass}></img>
              <img className="love-img" src={this.props.love}></img>
              <img className="profile-img" src={this.props.profile}></img>
          </div>
      </div>
    );
  }
}

export default SearchBar;
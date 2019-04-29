import React from 'react';
import "./SearchBar.scss"

function SearchBar() {
  return (
    <div className="SearchBar">
        <div className="logo">
            Instagram Logo
        </div>
        <input placeholder="Search"></input>
        <div className="profile-icons">
            Profile Icons
        </div>
    </div>
  );
}

export default SearchBar;
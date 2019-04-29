import React from 'react';
import "./SearchBar.scss"

function SearchBar(props) {
  return (
    <div className="SearchBar">
        <div className="logo-container">
            <img className="logo" src={props.logo}></img>
            <p>|</p>
            <img className="instagram" src={props.instagram}></img>
        </div>
        <input placeholder="Search"></input>
        <div className="profile-icons">
            <img className="compass-img" src={props.compass}></img>
            <img className="love-img" src={props.love}></img>
            <img className="profile-img" src={props.profile}></img>
        </div>
    </div>
  );
}

export default SearchBar;
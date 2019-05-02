import React from 'react';
import "./SearchBar.scss";

import LogoContainer from "../../styles/Navigation/LogoContainer"
import Logo from "../../styles/Navigation/Logo"
import Instagram from "../../styles/Navigation/Instagram"
import Header from "../../styles/Navigation/Header"
import Separation from "../../styles/Navigation/Separation"
import SearchForm from "../../styles/Navigation/SearchForm"
import SearchInput from "../../styles/Navigation/SearchInput"
import IconContainer from "../../styles/Navigation/IconContainer"
import ProfileIcon from "../../styles/Navigation/ProfileIcon"

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredPosts: props.posts,
    }
  }

  render() {
    return (
      <Header>
          <LogoContainer>
              <Logo src={this.props.logo} />
              <Separation>|</Separation>
              <Instagram src={this.props.instagram} />
          </LogoContainer>
          <SearchForm onSubmit={(event) => this.props.search(event)}>
            <SearchInput 
              onChange={(event) => this.props.change(event)} 
              value={this.props.value} placeholder="Search">
            </SearchInput>
          </SearchForm>
          <IconContainer>
              <ProfileIcon src={this.props.compass} />
              <ProfileIcon src={this.props.love} />
              <ProfileIcon src={this.props.profile} />
          </IconContainer>
      </Header>
    );
  }
}

export default SearchBar;
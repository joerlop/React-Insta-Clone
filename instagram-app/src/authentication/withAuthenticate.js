import React from 'react';

const withAuthenticate = FirstComp => SecondComp =>
  class extends React.Component {
    render() {
      if (!localStorage.getItem('user')) {
        return <FirstComp change={this.props.change} username={this.props.username} toggle={this.props.toggle}/>;
      } else {
        return <SecondComp username={this.props.username} />;
      }
    }
  };

export default withAuthenticate;

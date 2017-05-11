import React, { Component } from 'react';

class ThemedDecorations extends Component {
  render() {
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return <div className={this.props.theme}>{child}</div>;
    });
    return (
      <div>
        {childrenWithExtraProp}
      </div>
    )
  }
}

module.exports = ThemedDecorations;

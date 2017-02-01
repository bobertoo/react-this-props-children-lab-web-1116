import React from 'react'
import ReactDOM from 'react-dom'

class ThemedDecorations extends React.Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      return (
        <p className={this.props.theme}>{child}</p>
      );
    });
    return (
      <div>
        {childrenWithWrapperDiv}
      </div>
    )
  }
}

module.exports = ThemedDecorations
